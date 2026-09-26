import { Vacancy } from './schemas.js';
import { findVacancy, insertVacancy, updateVacancy, addVacancyEvent } from '../models/vacancy.model.js';

// Vacancies live on the website before the database existed. Seeded on first start (when the
// vacancies collection is empty) and by `npm run seed`.
export const SEED_VACANCIES = [
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
    status: 'published',
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
    payAndBenefits: [
      'Permanent PAYE Option: £34,000 per annum, paid monthly with statutory holiday entitlement and pension contribution.',
      'Self-Employed CIS Subcontract Option: £180–£220 per authorised working day, paid weekly subject to verified attendance and completion.',
      'Full branded PPE and specialist tooling provided by Bluegrid Utilities.',
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
    events: [
      { changedBy: 'Admin', changeType: 'CREATED', createdAt: '2026-03-01T08:00:00Z', notes: 'Initial vacancy created for Coventry smart water meter deployment' },
      { changedBy: 'HSEQ Director', changeType: 'STATUS_CHANGE', createdAt: '2026-03-01T09:00:00Z', notes: 'Approved and published for active recruitment' },
    ],
  },
];

/**
 * Insert seed vacancies that are missing. With { overwrite: true }, existing seed vacancies are
 * reset to the seed content (applications are kept).
 */
export const seedVacancies = async ({ overwrite = false } = {}) => {
  const result = { inserted: [], updated: [], skipped: [] };
  for (const { events, ...vacancy } of SEED_VACANCIES) {
    const existing = await findVacancy(vacancy.id);
    if (!existing) {
      await insertVacancy(vacancy, { createdAt: events[0]?.createdAt });
      for (const e of events) await addVacancyEvent(vacancy.id, e);
      result.inserted.push(vacancy.id);
    } else if (overwrite) {
      await updateVacancy(vacancy.id, vacancy);
      await addVacancyEvent(vacancy.id, { changedBy: 'System', changeType: 'RESEEDED', notes: 'Reset to seed content' });
      result.updated.push(vacancy.id);
    } else {
      result.skipped.push(vacancy.id);
    }
  }
  return result;
};

export const seedIfEmpty = async () => {
  const n = await Vacancy.countDocuments();
  if (n > 0) return null;
  const result = await seedVacancies();
  console.log(`[DB] Seeded ${result.inserted.length} vacancy record(s): ${result.inserted.join(', ')}`);
  return result;
};
