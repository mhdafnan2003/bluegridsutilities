// Answer lists for the job application form. The server validates against its own copy in
// server/src/controllers/careers.controller.js - keep the two in sync, word for word.

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

// CV upload rules. Must match server/src/middleware/upload.js (TYPES) and MAX_UPLOAD_MB.
export const CV_EXTENSIONS = ['.pdf', '.doc', '.docx', '.jpg', '.jpeg', '.png'];
export const CV_ACCEPT = CV_EXTENSIONS.join(',');
export const CV_TYPES_LABEL = 'PDF, Word (.doc or .docx), JPEG or PNG';
export const CV_MAX_MB = 10;

export const RECRUITMENT_EMAIL = 'recruitment@bluegridutilities.com';
export const CANDIDATE_PRIVACY_URL = '/policies/candidate-privacy';
