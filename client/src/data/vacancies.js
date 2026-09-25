// Vacancy data shape, defined once for the client. Used as the offline fallback when the API cannot
// be reached, and shared by the vacancies list, vacancy detail and application pages.
// The server keeps its own copy in server/src/controllers/careers.controller.js - keep the two in sync.
// CONFIRM (Bluegrid): pay, working pattern, engagement types, sponsorship and driving wording.

export const DEFAULT_VACANCY_SLUG = 'water-meter-installation-operative';

export const VACANCIES = [
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
    rightToWorkSponsorship:
      'Applicants must possess existing right to work in the UK. Bluegrid Utilities does not provide visa sponsorship for this vacancy.',
    seoTitle: 'Water Meter Installation Operative – Coventry',
    seoDescription:
      'Apply for Water Meter Installation Operative with Bluegrid Utilities in Coventry. View role requirements, working details, closing date and application route.',
  },
];

/** Open = published (or status unknown, as returned by the list API) and not past its closing time. */
export const isVacancyOpen = (v) => {
  if (!v) return false;
  if (v.isOpen === false) return false;
  if (v.status && v.status !== 'published') return false;
  if (v.closingDate && Date.now() > new Date(v.closingDate).getTime()) return false;
  return true;
};

export const formatDate = (iso) => {
  if (!iso) return 'To be confirmed';
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return 'To be confirmed';
  return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'Europe/London' });
};

export const payText = (v) => v?.salaryRate || 'To be confirmed';

export const findLocalVacancy = (slug) => VACANCIES.find((v) => v.slug === slug) || null;

const getJson = async (url) => {
  const res = await fetch(url, { headers: { Accept: 'application/json' } });
  const type = res.headers.get('content-type') || '';
  if (!type.includes('application/json')) throw new Error('API not available');
  return { status: res.status, body: await res.json() };
};

/** Open vacancies. Falls back to the local copy if the API is unreachable. */
export const fetchVacancies = async () => {
  try {
    const { status, body } = await getJson('/api/careers/vacancies');
    if (status === 200 && body?.success && Array.isArray(body.data)) return body.data.filter(isVacancyOpen);
    throw new Error('Unexpected response');
  } catch {
    return VACANCIES.filter(isVacancyOpen);
  }
};

/** One vacancy by slug: { state: 'ok' | 'notfound', vacancy }. Falls back to local data if the API is unreachable. */
export const fetchVacancy = async (slug) => {
  try {
    const { status, body } = await getJson(`/api/careers/vacancies/${encodeURIComponent(slug)}`);
    if (status === 404) return { state: 'notfound', vacancy: null };
    if (status === 200 && body?.success && body.data) return { state: 'ok', vacancy: body.data };
    throw new Error('Unexpected response');
  } catch {
    const local = findLocalVacancy(slug);
    return local ? { state: 'ok', vacancy: { ...local, isOpen: isVacancyOpen(local) } } : { state: 'notfound', vacancy: null };
  }
};
