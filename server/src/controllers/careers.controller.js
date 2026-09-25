import path from 'path';
import { config } from '../config/index.js';
import { clean, cleanList, isEmail, isPhone, isTrue, newReference } from '../utils/text.js';
import {
  sendMail,
  isSmtpConfigured,
  buildApplicationMessage,
  buildApplicantConfirmation,
} from '../services/email.service.js';

// In-memory vacancy store. The shape is mirrored in client/src/data/vacancies.js (used as the
// offline fallback) - keep the two in sync.
const vacanciesStore = [
  {
    id: 'JOB-BG-01',
    slug: 'water-meter-installation-operative',
    title: 'Water Meter Installation Operative – Digging & Reinstatement',
    shortTitle: 'Water Meter Installation Operative',
    town: 'Coventry',
    reference: 'BG-WM-COV-2026',
    category: 'Field operations',
    location: 'Coventry and surrounding operational areas',
    employmentType: 'Permanent full-time or CIS subcontract',
    engagementTypes: ['Permanent full-time (PAYE employment)', 'Self-employed CIS subcontract'],
    workingPattern: 'Monday – Friday (standard site hours)',
    salaryRate: 'Permanent PAYE: £34,000 per annum | CIS subcontract: £180–£220 per authorised working day',
    displaySalary: true,
    openingDate: '2026-03-01T08:00:00Z',
    closingDate: '2026-10-31T17:00:00Z',
    status: 'published', // draft | pending_approval | published | closed | archived
    roleSummary:
      'Physical field delivery role carrying out smart water meter installations, manual excavation, trenching, boundary box placement and street-works reinstatement across authorised project areas. Operatives work under direct supervision adhering strictly to approved RAMS (risk assessments and method statements) and utility procedures.',
    keyResponsibilities: [
      'Carry out manual digging, chamber excavation and boundary box exposure in accordance with approved utility drawings and HSG47 safe digging guidelines.',
      'Install and exchange smart water meters and associated fittings compliant with client technical requirements.',
      'Perform clean water jointing, leak testing and seal verification following approved procedures.',
      'Carry out first-time surface reinstatement on footways, verges and modular paving to required street-works specifications.',
      'Accurately record installation serial numbers, photographic completion evidence and operational reports on mobile field devices.',
      'Adhere strictly to site safety controls, PPE requirements, customer care protocols and traffic-management arrangements.',
    ],
    essentialRequirements: [
      'Physical fitness and willingness to perform manual outdoor excavation and reinstatement work in all weather conditions.',
      'Proven reliability, strong punctuality and a safety-first mindset on operational utility sites.',
      'Clear communication skills and professional conduct when interfacing with residents and customers.',
      'Ability to follow detailed RAMS, technical instructions and supervisor direction.',
      'Eligible to live and work in the United Kingdom without restriction.',
    ],
    desirableRequirements: [
      'Prior experience in clean water distribution, utility groundworks or street-works reinstatement.',
      'Demonstrated experience using CAT and Genny cable location equipment.',
      'Experience with mobile digital completion reporting systems.',
    ],
    requiredCardsLicences: [
      'Full valid UK driving licence (preferred for team mobility).',
      'EUSR National Water Hygiene Card (or commitment to complete during induction).',
      'EUSR SHEA Water Safety Passport (or commitment to complete).',
      'NRSWA Street Works Operative Card (Units 1–5, 8) advantageous.',
    ],
    rightToWorkSponsorship:
      'Applicants must possess existing right to work in the UK. Bluegrid Utilities does not provide visa sponsorship for this vacancy.',
    applicationMethod: 'Online application form via live vacancy page',
    hiringManager: 'Operations Lead (Internal)',
    approver: 'HSEQ & Operations Director (Internal)',
    candidatePrivacyUrl: '/policies/candidate-privacy',
    seoTitle: 'Water Meter Installation Operative – Coventry',
    seoDescription:
      'Apply for Water Meter Installation Operative with Bluegrid Utilities in Coventry. View role requirements, working details, closing date and application route.',
    auditTrail: [
      { changedBy: 'Admin', changeType: 'CREATED', timestamp: '2026-03-01T08:00:00Z', notes: 'Initial vacancy created for Coventry smart water meter deployment' },
      { changedBy: 'HSEQ Director', changeType: 'STATUS_CHANGE', timestamp: '2026-03-01T09:00:00Z', notes: 'Approved and published for active recruitment' },
    ],
  },
];

// Allowed answers for select fields (mirrored in client/src/components/ApplicationForm.jsx).
export const RIGHT_TO_WORK = [
  'I have the right to work in the UK without restriction',
  'I need sponsorship or my right to work is time-limited',
  'Prefer to discuss',
];
export const SPONSORSHIP = ['No', 'Yes'];
export const DRIVING = [
  'Full UK driving licence (no endorsements)',
  'Full UK driving licence (with points or endorsements)',
  'Automatic-only UK driving licence',
  'Provisional licence only',
  'No driving licence',
];
export const EXPERIENCE_YEARS = ['Less than 1 year', '1 to 2 years', '3 to 5 years', '6 to 10 years', 'More than 10 years'];
export const INTERVIEW_AVAILABILITY = [
  'Weekdays during working hours',
  'Weekday evenings',
  'Weekends',
  'Flexible - contact me to arrange',
];
export const CIS_STATUS = [
  'Registered with HMRC as a CIS subcontractor',
  'Currently applying for CIS registration',
  'Not registered for CIS',
];
export const EITHER_ROUTE = 'Either route';
export const CERTIFICATES = [
  'NRSWA Operative card (Units 1-5, 8)',
  'NRSWA Supervisor card',
  'EUSR National Water Hygiene card',
  'EUSR SHEA Water Safety Passport',
  'CAT and Genny (cable avoidance tool) certificate',
  'Emergency First Aid at Work',
  'Manual Handling',
  'Abrasive Wheels',
  'Banksman or Traffic Marshall',
  'Category A Asbestos Awareness',
  'CSCS card',
];

// A vacancy is open only if published and not past its closing time.
const isVacancyOpen = (vacancy) => {
  if (vacancy.status !== 'published') return false;
  if (vacancy.closingDate && Date.now() > new Date(vacancy.closingDate).getTime()) return false;
  return true;
};

const listShape = (v) => ({
  id: v.id,
  slug: v.slug,
  title: v.title,
  shortTitle: v.shortTitle,
  town: v.town,
  reference: v.reference,
  category: v.category,
  location: v.location,
  employmentType: v.employmentType,
  engagementTypes: v.engagementTypes,
  workingPattern: v.workingPattern,
  salaryRate: v.displaySalary ? v.salaryRate : null,
  closingDate: v.closingDate,
  roleSummary: v.roleSummary,
  seoTitle: v.seoTitle,
});

export const getVacancies = (req, res) => {
  const data = vacanciesStore.filter(isVacancyOpen).map(listShape);
  res.status(200).json({ success: true, count: data.length, data });
};

export const getVacancyBySlug = (req, res) => {
  const vacancy = vacanciesStore.find((v) => v.slug === req.params.slug);
  if (!vacancy || vacancy.status === 'archived' || vacancy.status === 'draft' || vacancy.status === 'pending_approval') {
    return res.status(404).json({ success: false, error: { message: 'Vacancy not found.' } });
  }
  const open = isVacancyOpen(vacancy);
  const { hiringManager, approver, auditTrail, displaySalary, ...rest } = vacancy; // eslint-disable-line no-unused-vars
  res.status(200).json({
    success: true,
    data: { ...rest, salaryRate: displaySalary ? vacancy.salaryRate : null, isOpen: open, isExpired: !open },
  });
};

// ---------------------------------------------------------------------------------------------
// Applications
// ---------------------------------------------------------------------------------------------

const recentApplications = new Map(); // email|vacancy -> timestamp, to stop accidental double submits
const DUPLICATE_WINDOW_MS = 2 * 60 * 1000;

const UK_POSTCODE_RE = /^[A-Z]{1,2}\d[A-Z\d]? ?\d[A-Z]{2}$/;

const pick = (value, allowed) => (allowed.includes(value) ? value : null);

const validateApplication = (body, vacancy, file) => {
  const fields = {};
  const v = {
    firstName: clean(body.firstName, 60),
    lastName: clean(body.lastName, 60),
    email: clean(body.email, 254).toLowerCase(),
    phone: clean(body.phone, 30),
    town: clean(body.town, 80),
    postcode: clean(body.postcode, 10).toUpperCase(),
    engagementRoute: clean(body.engagementRoute, 100),
    cisStatus: clean(body.cisStatus, 100),
    rightToWork: clean(body.rightToWork, 150),
    sponsorship: clean(body.sponsorship, 20),
    drivingLicence: clean(body.drivingLicence, 150),
    certificates: cleanList(body.certificates, 20, 80),
    otherCertificates: clean(body.otherCertificates, 300),
    relevantExperience: clean(body.relevantExperience, 3000, { multiline: true }),
    experienceYears: clean(body.experienceYears, 50),
    interviewAvailability: clean(body.interviewAvailability, 100),
    startDate: clean(body.startDate, 10),
  };

  if (!v.firstName) fields.firstName = 'Enter your first name.';
  if (!v.lastName) fields.lastName = 'Enter your last name.';
  if (!v.email) fields.email = 'Enter your email address.';
  else if (!isEmail(v.email)) fields.email = 'Enter a valid email address.';
  if (!v.phone) fields.phone = 'Enter a phone number.';
  else if (!isPhone(v.phone)) fields.phone = 'Enter a valid phone number.';
  if (!v.town) fields.town = 'Enter the town you currently live in.';
  if (v.postcode && !UK_POSTCODE_RE.test(v.postcode)) fields.postcode = 'Enter a valid UK postcode, for example CV1 2AB.';

  const routes = [...vacancy.engagementTypes, EITHER_ROUTE];
  if (!pick(v.engagementRoute, routes)) fields.engagementRoute = 'Select your engagement preference.';
  const cisRelevant = v.engagementRoute !== vacancy.engagementTypes[0];
  if (cisRelevant && pick(v.engagementRoute, routes)) {
    if (!pick(v.cisStatus, CIS_STATUS)) fields.cisStatus = 'Select your CIS status.';
  } else {
    v.cisStatus = '';
  }
  if (!pick(v.rightToWork, RIGHT_TO_WORK)) fields.rightToWork = 'Select your right to work in the UK.';
  if (!pick(v.sponsorship, SPONSORSHIP)) fields.sponsorship = 'Answer the visa sponsorship question.';
  if (!pick(v.drivingLicence, DRIVING)) fields.drivingLicence = 'Select your driving licence status.';
  if (!pick(v.interviewAvailability, INTERVIEW_AVAILABILITY)) fields.interviewAvailability = 'Select your interview availability.';
  if (v.experienceYears && !pick(v.experienceYears, EXPERIENCE_YEARS)) fields.experienceYears = 'Select a valid option.';
  v.certificates = v.certificates.filter((c) => CERTIFICATES.includes(c));

  if (v.startDate) {
    const d = new Date(`${v.startDate}T00:00:00Z`);
    const today = new Date(new Date().toISOString().slice(0, 10) + 'T00:00:00Z');
    if (!/^\d{4}-\d{2}-\d{2}$/.test(v.startDate) || Number.isNaN(d.getTime())) fields.startDate = 'Enter a valid date.';
    else if (d < today) fields.startDate = 'The earliest start date cannot be in the past.';
    else if (d.getUTCFullYear() > today.getUTCFullYear() + 2) fields.startDate = 'Enter a valid date.';
  }

  if (!isTrue(body.roleRequirements)) fields.roleRequirements = 'Confirm that you have read the requirements of the role.';
  if (!isTrue(body.declaration)) fields.declaration = 'Confirm that the information you have given is accurate and complete.';
  if (!isTrue(body.privacy)) fields.privacy = 'Confirm that you have read the candidate privacy notice.';
  if (file && file.size === 0) fields.cv = 'The uploaded file is empty.';

  v.fullName = `${v.firstName} ${v.lastName}`.trim();
  return { fields, values: v };
};

export const submitApplication = async (req, res, next) => {
  try {
    const body = req.body || {};

    // Honeypot: real candidates never see or fill this. Pretend success, send nothing.
    if (clean(body.website, 200)) {
      return res.status(201).json({
        success: true,
        message: 'Application received.',
        data: { applicationId: newReference('APP'), reference: 'BG-WM-COV-2026' },
      });
    }

    const slug = clean(body.roleSlug, 100);
    const vacancy = vacanciesStore.find((v) => v.slug === slug || v.id === slug);
    if (!vacancy || vacancy.status === 'archived') {
      return res.status(400).json({
        success: false,
        error: { message: 'We could not identify the vacancy you are applying for. Please return to the vacancies page and try again.', fields: { role: 'Vacancy not recognised.' } },
      });
    }
    if (!isVacancyOpen(vacancy)) {
      return res.status(400).json({
        success: false,
        error: { message: 'This vacancy is closed or has expired. Applications can no longer be accepted.' },
      });
    }

    const { fields, values } = validateApplication(body, vacancy, req.file);
    if (Object.keys(fields).length) {
      return res.status(400).json({
        success: false,
        error: { message: 'Some of the information provided is missing or invalid.', fields },
      });
    }

    // Prevent accidental duplicate submissions (double click, retry after a slow response).
    const dupKey = `${values.email}|${vacancy.id}`;
    const last = recentApplications.get(dupKey);
    if (last && Date.now() - last < DUPLICATE_WINDOW_MS) {
      return res.status(409).json({
        success: false,
        error: { message: 'We have already received an application from this email address for this vacancy. If you need to change anything, please email ' + config.recruitmentEmail + '.' },
      });
    }

    const application = {
      id: newReference('APP'),
      ...values,
      roleId: vacancy.id,
      roleTitle: vacancy.title,
      reference: vacancy.reference,
      submittedAt: new Date().toISOString(),
    };

    const cv = req.file
      ? {
          filename: (path.basename(req.file.originalname).replace(/[^\w.\- ()]/g, '_') || 'cv').slice(0, 100),
          buffer: req.file.buffer,
          size: req.file.size,
          contentType: req.file.mimetype,
        }
      : null;

    const message = buildApplicationMessage(application, cv);
    let delivery;
    try {
      delivery = await sendMail({
        to: config.recruitmentEmail,
        replyTo: application.email,
        fallbackAddress: config.recruitmentEmail,
        ...message,
      });
    } catch (err) {
      return res.status(err.statusCode || 502).json({ success: false, error: { message: err.message } });
    }

    recentApplications.set(dupKey, Date.now());
    console.log(`[Careers] Application ${application.id} for ${vacancy.reference} delivered`);

    // Short plain-text acknowledgement to the candidate, only when a real SMTP account is configured.
    let confirmationSent = false;
    if (isSmtpConfigured()) {
      try {
        await sendMail({ to: application.email, fallbackAddress: config.recruitmentEmail, ...buildApplicantConfirmation(application) });
        confirmationSent = true;
      } catch (err) {
        console.warn('[Careers] Confirmation email to candidate failed:', err.message);
      }
    }

    const data = { applicationId: application.id, reference: vacancy.reference, roleTitle: vacancy.title, confirmationEmailSent: confirmationSent };
    if (config.nodeEnv !== 'production') {
      data.delivery = { to: config.recruitmentEmail, mode: delivery.mode, previewUrl: delivery.previewUrl, captured: delivery.captured, attachments: cv ? [cv.filename] : [] };
      if (delivery.previewUrl) data.previewUrl = delivery.previewUrl;
    }
    return res.status(201).json({
      success: true,
      message: 'Application received. Our recruitment team will review it against the requirements of the role.',
      data,
    });
  } catch (err) {
    return next(err);
  }
};

// ---------------------------------------------------------------------------------------------
// Vacancy management. These endpoints change what the public sees, so they are DISABLED unless
// ADMIN_TOKEN is set, and then require `Authorization: Bearer <ADMIN_TOKEN>`.
// ---------------------------------------------------------------------------------------------

export const requireAdmin = (req, res, next) => {
  const token = process.env.ADMIN_TOKEN;
  if (!token) return res.status(404).json({ success: false, error: { message: 'Not found.' } });
  if (req.get('authorization') !== `Bearer ${token}`) {
    return res.status(401).json({ success: false, error: { message: 'Authentication required.' } });
  }
  return next();
};

export const manageGetVacancies = (req, res) => {
  res.status(200).json({ success: true, count: vacanciesStore.length, data: vacanciesStore });
};

export const manageCreateVacancy = (req, res) => {
  const { title, location, category, employmentType, closingDate, roleSummary } = req.body || {};
  if (!title || !category) {
    return res.status(400).json({ success: false, error: { message: 'Title and category are required to create a vacancy.' } });
  }
  const id = `JOB-BG-${String(vacanciesStore.length + 1).padStart(2, '0')}`;
  const slug = String(title).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  const newVacancy = {
    id,
    slug,
    title,
    shortTitle: req.body.shortTitle || title,
    town: req.body.town || '',
    reference: req.body.reference || `BG-${String(category).substring(0, 3).toUpperCase()}-${Date.now().toString().slice(-4)}`,
    category,
    location: location || 'To be confirmed',
    employmentType: employmentType || 'To be confirmed',
    engagementTypes: req.body.engagementTypes || [employmentType || 'To be confirmed'],
    workingPattern: req.body.workingPattern || 'To be confirmed',
    salaryRate: req.body.salaryRate || null,
    displaySalary: Boolean(req.body.displaySalary),
    openingDate: new Date().toISOString(),
    closingDate: closingDate || null,
    status: 'draft',
    roleSummary: roleSummary || '',
    keyResponsibilities: req.body.keyResponsibilities || [],
    essentialRequirements: req.body.essentialRequirements || [],
    desirableRequirements: req.body.desirableRequirements || [],
    requiredCardsLicences: req.body.requiredCardsLicences || [],
    rightToWorkSponsorship: req.body.rightToWorkSponsorship || 'Applicants must possess right to work in the UK.',
    applicationMethod: 'Online application form via live vacancy page',
    hiringManager: req.body.hiringManager || null,
    approver: req.body.approver || null,
    candidatePrivacyUrl: '/policies/candidate-privacy',
    seoTitle: req.body.seoTitle || `${req.body.shortTitle || title}${req.body.town ? ` – ${req.body.town}` : ''}`,
    seoDescription: `Apply for ${title} with Bluegrid Utilities. View requirements and application details.`,
    auditTrail: [{ changedBy: req.body.author || 'Recruitment staff', changeType: 'CREATED', timestamp: new Date().toISOString(), notes: 'Vacancy created as draft' }],
  };
  vacanciesStore.push(newVacancy);
  res.status(201).json({ success: true, message: 'Vacancy created in draft status.', data: newVacancy });
};

export const manageUpdateStatus = (req, res) => {
  const { status, changedBy, notes } = req.body || {};
  const allowed = ['draft', 'pending_approval', 'published', 'closed', 'archived'];
  if (!allowed.includes(status)) {
    return res.status(400).json({ success: false, error: { message: `Invalid status. Must be one of: ${allowed.join(', ')}` } });
  }
  const vacancy = vacanciesStore.find((v) => v.id === req.params.id || v.slug === req.params.id);
  if (!vacancy) return res.status(404).json({ success: false, error: { message: 'Vacancy not found.' } });
  const old = vacancy.status;
  vacancy.status = status;
  vacancy.auditTrail.push({ changedBy: changedBy || 'Authorised staff', changeType: `STATUS_CHANGE (${old} -> ${status})`, timestamp: new Date().toISOString(), notes: notes || `Status changed to ${status}` });
  res.status(200).json({ success: true, message: `Vacancy status updated to ${status}.`, data: vacancy });
};

export const managePreviewVacancy = (req, res) => {
  const vacancy = vacanciesStore.find((v) => v.id === req.params.id || v.slug === req.params.id);
  if (!vacancy) return res.status(404).json({ success: false, error: { message: 'Vacancy not found.' } });
  res.status(200).json({ success: true, isPreview: true, data: vacancy });
};
