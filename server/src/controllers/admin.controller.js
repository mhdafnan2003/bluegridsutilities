import { clean, cleanList, isTrue } from '../utils/text.js';
import { hashPassword, issueToken, passwordProblem, verifyPassword } from '../services/auth.service.js';
import { findAdminByEmail, getPasswordHash, setAdminPassword, toPublicAdmin, touchLogin } from '../models/admin.model.js';
import {
  VACANCY_STATUSES,
  addVacancyEvent,
  deleteVacancy,
  findVacancy,
  insertVacancy,
  isVacancyOpen,
  listVacancies,
  listVacancyEvents,
  nextVacancyId,
  referenceExists,
  slugExists,
  updateVacancy,
} from '../models/vacancy.model.js';
import {
  APPLICATION_STATUSES,
  addApplicationEvent,
  countApplicationsForVacancy,
  deleteApplication,
  findApplication,
  getApplicationFile,
  getStats,
  listApplicationEvents,
  listApplications,
  setApplicationStatus,
} from '../models/application.model.js';

const fail = (res, status, message, fields) =>
  res.status(status).json({ success: false, error: { message, ...(fields && { fields }) } });

const notFound = (res, what) => fail(res, 404, `${what} not found.`);

// ---------------------------------------------------------------------------------------------
// Auth
// ---------------------------------------------------------------------------------------------

// Constant-time-ish failure path: always run one scrypt so unknown emails take as long as bad passwords.
const DUMMY_HASH = hashPassword('not-a-real-password');

export const login = (req, res) => {
  const email = clean(req.body?.email, 254).toLowerCase();
  const password = typeof req.body?.password === 'string' ? req.body.password.slice(0, 200) : '';
  if (!email || !password) return fail(res, 400, 'Enter your login ID and password.');

  const user = findAdminByEmail(email);
  const ok = verifyPassword(password, user ? user.password_hash : DUMMY_HASH) && Boolean(user);
  if (!ok) return fail(res, 401, 'The login ID or password is incorrect.');

  touchLogin(user.id);
  const admin = toPublicAdmin(user);
  const { token, expiresAt } = issueToken(admin);
  return res.status(200).json({ success: true, data: { token, expiresAt, user: admin } });
};

export const me = (req, res) => res.status(200).json({ success: true, data: req.admin });

export const changePassword = (req, res) => {
  if (req.admin.envManaged) {
    return fail(res, 403, 'This login is set in the server .env file. Change ADMIN_PASSWORD there and restart the server.');
  }
  const { currentPassword, newPassword } = req.body || {};
  if (!verifyPassword(String(currentPassword || ''), getPasswordHash(req.admin.id))) {
    return fail(res, 400, 'Your current password is incorrect.', { currentPassword: 'Incorrect password.' });
  }
  const problem = passwordProblem(newPassword);
  if (problem) return fail(res, 400, problem, { newPassword: problem });
  setAdminPassword(req.admin.id, hashPassword(newPassword));
  return res.status(200).json({ success: true, message: 'Password updated.' });
};

// ---------------------------------------------------------------------------------------------
// Overview
// ---------------------------------------------------------------------------------------------

export const getOverview = (req, res) => {
  const vacancies = listVacancies({ withCounts: true });
  const byStatus = Object.fromEntries(VACANCY_STATUSES.map((s) => [s, 0]));
  for (const v of vacancies) byStatus[v.status] = (byStatus[v.status] || 0) + 1;
  const open = vacancies.filter(isVacancyOpen);
  const in14Days = Date.now() + 14 * 864e5;
  res.status(200).json({
    success: true,
    data: {
      vacancies: {
        total: vacancies.length,
        open: open.length,
        byStatus,
        closingSoon: open.filter((v) => v.closingDate && new Date(v.closingDate).getTime() < in14Days).map(summary),
        top: vacancies
          .filter((v) => v.status !== 'archived')
          .map(summary)
          .sort((a, b) => b.applicationCount - a.applicationCount)
          .slice(0, 6),
      },
      applications: getStats(),
    },
  });
};

// ---------------------------------------------------------------------------------------------
// Vacancies
// ---------------------------------------------------------------------------------------------

const summary = (v) => ({
  id: v.id,
  slug: v.slug,
  title: v.title,
  reference: v.reference,
  category: v.category,
  location: v.location,
  town: v.town,
  employmentType: v.employmentType,
  status: v.status,
  isOpen: isVacancyOpen(v),
  isExpired: v.status === 'published' && !isVacancyOpen(v),
  openingDate: v.openingDate,
  closingDate: v.closingDate,
  applicationCount: v.applicationCount ?? 0,
  newApplicationCount: v.newApplicationCount ?? 0,
  updatedAt: v.updatedAt,
});

const slugify = (s) => String(s).toLowerCase().normalize('NFKD').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '').slice(0, 80);

const uniqueSlug = (base, exceptId) => {
  let slug = base || 'vacancy';
  for (let i = 2; slugExists(slug, exceptId); i += 1) slug = `${base}-${i}`;
  return slug;
};

const toIso = (value) => {
  const s = clean(value, 40);
  if (!s) return null;
  const d = new Date(/^\d{4}-\d{2}-\d{2}$/.test(s) ? `${s}T17:00:00Z` : s);
  return Number.isNaN(d.getTime()) ? undefined : d.toISOString();
};

const LISTS = ['keyResponsibilities', 'essentialRequirements', 'desirableRequirements', 'requiredCardsLicences', 'payAndBenefits'];

/** Validate a create/update body. Returns { fields, values }; values only holds keys present in the body. */
const parseVacancy = (body, { existing } = {}) => {
  const fields = {};
  const v = {};
  const has = (k) => Object.prototype.hasOwnProperty.call(body, k);
  const text = (k, max, opts) => { if (has(k)) v[k] = clean(body[k], max, opts); };

  text('title', 150);
  text('shortTitle', 100);
  text('town', 80);
  text('category', 80);
  text('location', 150);
  text('employmentType', 120);
  text('workingPattern', 120);
  text('salaryRate', 300);
  text('roleSummary', 3000, { multiline: true });
  text('rightToWorkSponsorship', 600, { multiline: true });
  text('hiringManager', 100);
  text('approver', 100);
  text('seoTitle', 120);
  text('seoDescription', 320);
  if (has('displaySalary')) v.displaySalary = isTrue(body.displaySalary);
  if (has('engagementTypes')) v.engagementTypes = cleanList(body.engagementTypes, 6, 100);
  for (const k of LISTS) if (has(k)) v[k] = cleanList(body[k], 30, 600);

  if (has('reference')) {
    v.reference = clean(body.reference, 40).toUpperCase();
    if (v.reference && !/^[A-Z0-9][A-Z0-9-]{2,39}$/.test(v.reference)) fields.reference = 'Use 3-40 letters, numbers or hyphens.';
    else if (v.reference && referenceExists(v.reference, existing?.id)) fields.reference = 'Another vacancy already uses this reference.';
  }
  if (has('slug')) {
    v.slug = slugify(body.slug);
    if (v.slug && slugExists(v.slug, existing?.id)) fields.slug = 'Another vacancy already uses this web address.';
  }
  for (const k of ['openingDate', 'closingDate']) {
    if (has(k)) {
      v[k] = toIso(body[k]);
      if (v[k] === undefined) fields[k] = 'Enter a valid date.';
    }
  }

  // Required fields (checked against the merged record so partial updates work).
  const merged = { ...(existing || {}), ...v };
  const required = {
    title: 'Enter the job title.',
    category: 'Enter a category, for example Field operations.',
    location: 'Enter the work location.',
    employmentType: 'Enter the employment type.',
    roleSummary: 'Enter a short role summary.',
    closingDate: 'Enter a closing date.',
  };
  for (const [k, msg] of Object.entries(required)) if (!merged[k] && !fields[k]) fields[k] = msg;
  if (!merged.engagementTypes?.length) fields.engagementTypes = 'Add at least one engagement type candidates can choose.';
  if (merged.openingDate && merged.closingDate && !fields.closingDate && new Date(merged.closingDate) <= new Date(merged.openingDate)) {
    fields.closingDate = 'The closing date must be after the opening date.';
  }
  return { fields, values: v };
};

const withDefaults = (v) => {
  const shortTitle = v.shortTitle || v.title;
  return {
    ...v,
    shortTitle,
    seoTitle: v.seoTitle || `${shortTitle}${v.town ? ` – ${v.town}` : ''}`,
    seoDescription:
      v.seoDescription ||
      `Apply for ${shortTitle} with Bluegrid Utilities${v.town ? ` in ${v.town}` : ''}. View role requirements, working details, closing date and application route.`,
    rightToWorkSponsorship: v.rightToWorkSponsorship || 'Applicants must have the right to work in the UK.',
    applicationMethod: 'Online application form via live vacancy page',
    candidatePrivacyUrl: '/policies/candidate-privacy',
  };
};

const makeReference = (v) => {
  const cat = String(v.category).replace(/[^A-Za-z]/g, '').slice(0, 3).toUpperCase() || 'GEN';
  const town = String(v.town || '').replace(/[^A-Za-z]/g, '').slice(0, 3).toUpperCase();
  const base = `BG-${cat}${town ? `-${town}` : ''}-${new Date().getFullYear()}`;
  let ref = base;
  for (let i = 2; referenceExists(ref); i += 1) ref = `${base}-${i}`;
  return ref;
};

export const listAllVacancies = (req, res) => {
  const status = clean(req.query.status, 30);
  let data = listVacancies({ withCounts: true });
  if (status) data = data.filter((v) => v.status === status);
  res.status(200).json({ success: true, count: data.length, data: data.map(summary) });
};

export const getVacancy = (req, res) => {
  const v = findVacancy(req.params.id);
  if (!v) return notFound(res, 'Vacancy');
  return res.status(200).json({
    success: true,
    data: { ...v, isOpen: isVacancyOpen(v), isExpired: v.status === 'published' && !isVacancyOpen(v), events: listVacancyEvents(v.id) },
  });
};

export const createVacancy = (req, res) => {
  const body = req.body || {};
  const { fields, values } = parseVacancy(body);
  const status = clean(body.status, 30) || 'draft';
  if (!['draft', 'pending_approval', 'published'].includes(status)) fields.status = 'New vacancies start as draft, pending approval or published.';
  if (status === 'published' && values.closingDate && new Date(values.closingDate) <= new Date()) fields.closingDate = 'A published vacancy needs a closing date in the future.';
  if (Object.keys(fields).length) return fail(res, 400, 'Some details are missing or invalid.', fields);

  const id = nextVacancyId();
  const record = withDefaults({
    ...values,
    id,
    slug: values.slug || uniqueSlug(slugify(values.shortTitle || values.title)),
    reference: values.reference || makeReference(values),
    status,
    openingDate: values.openingDate || new Date().toISOString(),
    displaySalary: values.displaySalary ?? true,
  });
  const vacancy = insertVacancy(record);
  addVacancyEvent(id, { changedBy: req.admin.name, changeType: 'CREATED', notes: `Created as ${status.replace('_', ' ')}` });
  return res.status(201).json({ success: true, message: 'Vacancy created.', data: vacancy });
};

export const editVacancy = (req, res) => {
  const existing = findVacancy(req.params.id);
  if (!existing) return notFound(res, 'Vacancy');
  const { status, ...body } = req.body || {}; // eslint-disable-line no-unused-vars
  const { fields, values } = parseVacancy(body, { existing });
  if (Object.keys(fields).length) return fail(res, 400, 'Some details are missing or invalid.', fields);
  if (values.slug === '') delete values.slug;
  if (values.reference === '') delete values.reference;

  const changed = Object.keys(values).filter((k) => JSON.stringify(values[k] ?? null) !== JSON.stringify(existing[k] ?? null));
  const vacancy = updateVacancy(existing.id, values);
  if (changed.length) {
    addVacancyEvent(existing.id, { changedBy: req.admin.name, changeType: 'UPDATED', notes: `Edited: ${changed.join(', ')}` });
  }
  return res.status(200).json({ success: true, message: changed.length ? 'Vacancy updated.' : 'No changes to save.', data: vacancy });
};

export const changeVacancyStatus = (req, res) => {
  const vacancy = findVacancy(req.params.id);
  if (!vacancy) return notFound(res, 'Vacancy');
  const status = clean(req.body?.status, 30);
  const notes = clean(req.body?.notes, 500);
  if (!VACANCY_STATUSES.includes(status)) return fail(res, 400, `Status must be one of: ${VACANCY_STATUSES.join(', ')}.`);
  if (status === vacancy.status) return res.status(200).json({ success: true, data: vacancy });
  if (status === 'published' && vacancy.closingDate && new Date(vacancy.closingDate) <= new Date()) {
    return fail(res, 400, 'The closing date has passed. Edit the vacancy and set a new closing date before publishing.');
  }
  const updated = updateVacancy(vacancy.id, { status });
  addVacancyEvent(vacancy.id, { changedBy: req.admin.name, changeType: `STATUS_CHANGE (${vacancy.status} -> ${status})`, notes: notes || null });
  return res.status(200).json({ success: true, message: `Vacancy is now ${status.replace('_', ' ')}.`, data: updated });
};

export const duplicateVacancy = (req, res) => {
  const source = findVacancy(req.params.id);
  if (!source) return notFound(res, 'Vacancy');
  const { id: _id, slug: _slug, reference: _ref, status: _s, createdAt: _c, updatedAt: _u, applicationCount: _a, newApplicationCount: _n, ...rest } = source; // eslint-disable-line no-unused-vars
  const id = nextVacancyId();
  const vacancy = insertVacancy({
    ...rest,
    id,
    title: `${source.title} (copy)`,
    slug: uniqueSlug(source.slug),
    reference: makeReference(source),
    status: 'draft',
    openingDate: new Date().toISOString(),
  });
  addVacancyEvent(id, { changedBy: req.admin.name, changeType: 'CREATED', notes: `Duplicated from ${source.reference}` });
  return res.status(201).json({ success: true, message: 'Draft copy created.', data: vacancy });
};

export const removeVacancy = (req, res) => {
  const vacancy = findVacancy(req.params.id);
  if (!vacancy) return notFound(res, 'Vacancy');
  // Deleting applications (candidate data and CVs) must be asked for explicitly with ?withApplications=true.
  const applications = countApplicationsForVacancy(vacancy.id);
  const withApplications = req.query.withApplications === 'true';
  if (applications > 0 && !withApplications) {
    return fail(res, 409, `This vacancy has ${applications} application${applications === 1 ? '' : 's'}. Archive it, or confirm that the applications should be deleted too.`);
  }
  deleteVacancy(vacancy.id, { withApplications });
  console.log(`[Admin] ${req.admin.email} deleted vacancy ${vacancy.reference}${applications ? ` and ${applications} application(s)` : ''}`);
  return res.status(200).json({
    success: true,
    message: applications ? `Vacancy and ${applications} application${applications === 1 ? '' : 's'} deleted.` : 'Vacancy deleted.',
  });
};

// ---------------------------------------------------------------------------------------------
// Applications
// ---------------------------------------------------------------------------------------------

const listQuery = (q) => ({
  vacancyId: clean(q.vacancyId, 40) || undefined,
  status: APPLICATION_STATUSES.includes(q.status) ? q.status : undefined,
  q: clean(q.q, 100) || undefined,
  sort: ['newest', 'oldest', 'name'].includes(q.sort) ? q.sort : 'newest',
});

export const getApplications = (req, res) => {
  const page = Math.max(1, Number.parseInt(req.query.page, 10) || 1);
  const pageSize = Math.min(100, Math.max(5, Number.parseInt(req.query.pageSize, 10) || 25));
  const result = listApplications({ ...listQuery(req.query), page, pageSize });
  res.status(200).json({ success: true, ...result });
};

export const getApplication = (req, res) => {
  const application = findApplication(req.params.id);
  if (!application) return notFound(res, 'Application');
  const vacancy = findVacancy(application.vacancyId);
  return res.status(200).json({
    success: true,
    data: { ...application, vacancy: vacancy ? summary(vacancy) : null, events: listApplicationEvents(application.id) },
  });
};

export const updateApplicationStatus = (req, res) => {
  const status = clean(req.body?.status, 30);
  if (!APPLICATION_STATUSES.includes(status)) return fail(res, 400, `Status must be one of: ${APPLICATION_STATUSES.join(', ')}.`);
  const application = setApplicationStatus(req.params.id, status, req.admin.name, clean(req.body?.note, 1000, { multiline: true }));
  if (!application) return notFound(res, 'Application');
  return res.status(200).json({ success: true, data: { ...application, events: listApplicationEvents(application.id) } });
};

export const addApplicationNote = (req, res) => {
  const note = clean(req.body?.note, 2000, { multiline: true });
  if (!note) return fail(res, 400, 'Write a note first.', { note: 'Write a note first.' });
  const application = findApplication(req.params.id);
  if (!application) return notFound(res, 'Application');
  addApplicationEvent(application.id, { actor: req.admin.name, type: 'NOTE', note });
  return res.status(201).json({ success: true, data: listApplicationEvents(application.id) });
};

export const downloadCv = (req, res) => {
  const file = getApplicationFile(req.params.id);
  if (!file) return notFound(res, 'CV');
  const safe = file.filename.replace(/["\\\r\n]/g, '_');
  res.setHeader('Content-Type', file.contentType);
  res.setHeader('Content-Length', String(file.size));
  res.setHeader('Content-Disposition', `attachment; filename="${safe}"; filename*=UTF-8''${encodeURIComponent(file.filename)}`);
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('Cache-Control', 'no-store');
  return res.end(file.data);
};

export const removeApplication = (req, res) => {
  if (!deleteApplication(req.params.id)) return notFound(res, 'Application');
  return res.status(200).json({ success: true, message: 'Application and CV permanently deleted.' });
};

const csvCell = (value) => {
  let s = Array.isArray(value) ? value.join('; ') : String(value ?? '');
  if (/^[=+\-@\t\r]/.test(s)) s = `'${s}`; // stop spreadsheet formula injection
  return /[",\r\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
};

export const exportApplications = (req, res) => {
  const { data } = listApplications({ ...listQuery(req.query), page: 1, pageSize: 100000 });
  const columns = [
    ['Application ID', 'id'], ['Submitted', 'submittedAt'], ['Status', 'status'], ['Vacancy', 'vacancyTitle'], ['Reference', 'vacancyReference'],
    ['First name', 'firstName'], ['Last name', 'lastName'], ['Email', 'email'], ['Phone', 'phone'], ['Town', 'town'], ['Postcode', 'postcode'],
    ['Engagement route', 'engagementRoute'], ['CIS status', 'cisStatus'], ['Right to work', 'rightToWork'], ['Sponsorship', 'sponsorship'],
    ['Driving licence', 'drivingLicence'], ['Certificates', 'certificates'], ['Other certificates', 'otherCertificates'],
    ['Experience (years)', 'experienceYears'], ['Relevant experience', 'relevantExperience'], ['Interview availability', 'interviewAvailability'],
    ['Earliest start', 'startDate'], ['CV', 'cv'],
  ];
  const lines = [columns.map(([h]) => csvCell(h)).join(',')];
  for (const a of data) lines.push(columns.map(([, k]) => csvCell(k === 'cv' ? a.cv?.filename || '' : a[k])).join(','));
  res.setHeader('Content-Type', 'text/csv; charset=utf-8');
  res.setHeader('Content-Disposition', `attachment; filename="applications-${new Date().toISOString().slice(0, 10)}.csv"`);
  res.setHeader('Cache-Control', 'no-store');
  return res.send(`﻿${lines.join('\r\n')}`);
};

export const getMeta = (req, res) => {
  const vacancies = listVacancies();
  res.status(200).json({
    success: true,
    data: {
      vacancyStatuses: VACANCY_STATUSES,
      applicationStatuses: APPLICATION_STATUSES,
      categories: [...new Set(['Field operations', ...vacancies.map((v) => v.category)])],
      vacancies: vacancies.map((v) => ({ id: v.id, title: v.title, reference: v.reference, status: v.status })),
    },
  });
};

