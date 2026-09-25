import path from 'path';
import { config } from '../config/index.js';
import { clean, cleanList, isEmail, isPhone, isTrue, newReference } from '../utils/text.js';
import {
  sendMail,
  isSmtpConfigured,
  buildApplicationMessage,
  buildApplicantConfirmation,
} from '../services/email.service.js';
import { findVacancy, isVacancyOpen, listVacancies } from '../models/vacancy.model.js';
import { hasRecentApplication, insertApplication, setEmailStatus } from '../models/application.model.js';

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

// Fields the public site never sees.
const INTERNAL_FIELDS = ['hiringManager', 'approver', 'displaySalary', 'applicationCount', 'newApplicationCount', 'createdAt', 'updatedAt'];

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
  const data = listVacancies().filter(isVacancyOpen).map(listShape);
  res.status(200).json({ success: true, count: data.length, data });
};

export const getVacancyBySlug = (req, res) => {
  const vacancy = findVacancy(req.params.slug);
  if (!vacancy || vacancy.status === 'archived' || vacancy.status === 'draft' || vacancy.status === 'pending_approval') {
    return res.status(404).json({ success: false, error: { message: 'Vacancy not found.' } });
  }
  const open = isVacancyOpen(vacancy);
  const data = { ...vacancy, salaryRate: vacancy.displaySalary ? vacancy.salaryRate : null, isOpen: open, isExpired: !open };
  for (const key of INTERNAL_FIELDS) delete data[key];
  res.status(200).json({ success: true, data });
};

// ---------------------------------------------------------------------------------------------
// Applications
// ---------------------------------------------------------------------------------------------

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
    const vacancy = slug ? findVacancy(slug) : null;
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
    if (hasRecentApplication(values.email, vacancy.id, new Date(Date.now() - DUPLICATE_WINDOW_MS).toISOString())) {
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

    // The database is the record of the application; the email to the recruitment inbox is a notification.
    insertApplication({ ...application, vacancyId: vacancy.id, vacancyTitle: vacancy.title, vacancyReference: vacancy.reference }, cv);
    console.log(`[Careers] Application ${application.id} for ${vacancy.reference} saved`);

    let delivery = null;
    try {
      delivery = await sendMail({
        to: config.recruitmentEmail,
        replyTo: application.email,
        fallbackAddress: config.recruitmentEmail,
        ...buildApplicationMessage(application, cv),
      });
      setEmailStatus(application.id, 'sent');
    } catch (err) {
      setEmailStatus(application.id, 'failed', String(err.message).slice(0, 500));
      console.warn(`[Careers] Notification email for ${application.id} failed (application is saved):`, err.message);
    }

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
    if (config.nodeEnv !== 'production' && delivery) {
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
