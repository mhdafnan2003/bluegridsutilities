import { now, escapeRegExp } from '../db/index.js';
import { Vacancy, Application } from '../db/schemas.js';

export const VACANCY_STATUSES = ['draft', 'pending_approval', 'published', 'closed', 'archived'];

const LIST_FIELDS = [
  'engagementTypes',
  'keyResponsibilities',
  'essentialRequirements',
  'desirableRequirements',
  'requiredCardsLicences',
  'payAndBenefits',
];

const TEXT_FIELDS = [
  'slug', 'reference', 'title', 'shortTitle', 'town', 'category', 'location', 'employmentType',
  'workingPattern', 'salaryRate', 'openingDate', 'closingDate', 'status', 'roleSummary',
  'rightToWorkSponsorship', 'applicationMethod', 'hiringManager', 'approver', 'candidatePrivacyUrl',
  'seoTitle', 'seoDescription',
];

/** Shape a Vacancy document (or a lean plain object) into the API's camelCase vacancy record. */
const shape = (doc) => {
  if (!doc) return null;
  const v = { id: doc._id };
  for (const key of TEXT_FIELDS) v[key] = doc[key] ?? null;
  for (const key of LIST_FIELDS) v[key] = doc[key] || [];
  v.displaySalary = Boolean(doc.displaySalary);
  v.createdAt = doc.createdAt;
  v.updatedAt = doc.updatedAt;
  if (doc.applicationCount !== undefined) v.applicationCount = doc.applicationCount;
  if (doc.newApplicationCount !== undefined) v.newApplicationCount = doc.newApplicationCount;
  return v;
};

/** Only the keys present in `data` are copied onto the update/insert document. */
const pickFields = (data) => {
  const out = {};
  for (const key of TEXT_FIELDS) if (key in data) out[key] = data[key] ?? null;
  for (const key of LIST_FIELDS) if (key in data) out[key] = data[key] || [];
  if ('displaySalary' in data) out.displaySalary = Boolean(data.displaySalary);
  return out;
};

/** A vacancy is open only if published and not past its closing time. */
export const isVacancyOpen = (v) => {
  if (!v || v.status !== 'published') return false;
  if (v.closingDate && Date.now() > new Date(v.closingDate).getTime()) return false;
  return true;
};

const withApplicationCounts = async (vacancies) => {
  const list = Array.isArray(vacancies) ? vacancies : [vacancies];
  const ids = list.filter(Boolean).map((v) => v._id);
  if (!ids.length) return vacancies;
  const rows = await Application.aggregate([
    { $match: { vacancyId: { $in: ids } } },
    { $group: { _id: '$vacancyId', total: { $sum: 1 }, newCount: { $sum: { $cond: [{ $eq: ['$status', 'new'] }, 1, 0] } } } },
  ]);
  const byId = Object.fromEntries(rows.map((r) => [r._id, r]));
  for (const v of list) {
    if (!v) continue;
    v.applicationCount = byId[v._id]?.total || 0;
    v.newApplicationCount = byId[v._id]?.newCount || 0;
  }
  return vacancies;
};

export const listVacancies = async ({ withCounts = false } = {}) => {
  const docs = await Vacancy.find().sort({ createdAt: -1 }).lean();
  if (withCounts) await withApplicationCounts(docs);
  return docs.map(shape);
};

export const findVacancy = async (idOrSlug) => {
  const doc = await Vacancy.findOne({ $or: [{ _id: idOrSlug }, { slug: idOrSlug }] }).lean();
  if (doc) await withApplicationCounts(doc);
  return shape(doc);
};

export const slugExists = async (slug, exceptId = '') =>
  Boolean(await Vacancy.exists({ slug, _id: { $ne: exceptId } }));

export const referenceExists = async (reference, exceptId = '') =>
  Boolean(await Vacancy.exists({ reference: new RegExp(`^${escapeRegExp(reference)}$`, 'i'), _id: { $ne: exceptId } }));

export const nextVacancyId = async () => {
  const rows = await Vacancy.find({ _id: /^JOB-BG-/ }, { _id: 1 }).lean();
  const max = rows.reduce((m, r) => Math.max(m, Number(r._id.slice(7)) || 0), 0);
  return `JOB-BG-${String(max + 1).padStart(2, '0')}`;
};

export const addVacancyEvent = async (vacancyId, { changedBy, changeType, notes, createdAt }) => {
  await Vacancy.updateOne(
    { _id: vacancyId },
    { $push: { events: { changedBy, changeType, notes: notes || null, createdAt: createdAt || now() } } },
  );
};

/** Most recent first (insertion order reversed - ties keep their original recency order). */
export const listVacancyEvents = async (vacancyId) => {
  const doc = await Vacancy.findById(vacancyId, { events: 1 }).lean();
  return (doc?.events || [])
    .slice()
    .reverse()
    .map((e) => ({ changedBy: e.changedBy, changeType: e.changeType, notes: e.notes, timestamp: e.createdAt }));
};

export const insertVacancy = async (data, { createdAt } = {}) => {
  const stamp = createdAt || now();
  await Vacancy.create({ _id: data.id, ...pickFields(data), createdAt: stamp, updatedAt: stamp });
  return findVacancy(data.id);
};

export const updateVacancy = async (id, data) => {
  const cols = pickFields(data);
  if (!Object.keys(cols).length) return findVacancy(id);
  cols.updatedAt = now();
  await Vacancy.updateOne({ _id: id }, { $set: cols });
  return findVacancy(id);
};

/**
 * Delete a vacancy. With { withApplications: true } its applications (and their embedded CVs and
 * notes) are deleted too. Note: this runs as two separate writes, not one transaction - a
 * standalone (non replica-set) MongoDB instance cannot run multi-document transactions.
 */
export const deleteVacancy = async (id, { withApplications = false } = {}) => {
  if (withApplications) await Application.deleteMany({ vacancyId: id });
  const result = await Vacancy.deleteOne({ _id: id });
  return result.deletedCount > 0;
};
