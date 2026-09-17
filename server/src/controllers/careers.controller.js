import { sendApplicationEmail } from '../services/email.service.js';

// In-memory vacancy store supporting CMS/ATS workflows, Point 47 statuses, Point 48 fields, and Point 51 expiry
let vacanciesStore = [
  {
    id: "JOB-BG-01",
    slug: "water-meter-installation-operative",
    title: "Water Meter Installation Operative – Digging & Reinstatement",
    reference: "BG-WM-COV-2026",
    category: "Field operations", // Point 41 category
    location: "Coventry and surrounding operational areas",
    employmentType: "Permanent Full-Time or CIS Subcontract",
    workingPattern: "Monday – Friday (Standard site hours)",
    salaryRate: "Permanent PAYE: £34,000 per annum | CIS Subcontract: £180–£220 per authorised working day*",
    displaySalary: true, // Only display if approved (Point 48)
    openingDate: "2026-03-01T08:00:00Z",
    closingDate: "2026-10-31T17:00:00Z", // Future date: currently open
    status: "published", // draft | pending_approval | published | closed | archived (Point 47)
    roleSummary: "Physical field delivery role carrying out smart water meter installations, manual excavation, trenching, boundary box placement and street-works reinstatement across authorized project areas. Operatives work under direct supervision adhering strictly to approved RAMS and utility procedures.",
    keyResponsibilities: [
      "Carry out manual digging, chamber excavation and boundary box exposure in accordance with approved utility drawings and HSG47 safe digging guidelines.",
      "Install and exchange smart water meters and associated fittings compliant with client technical requirements.",
      "Perform clean water jointing, leak testing and seal verification following approved procedures.",
      "Carry out first-time surface reinstatement on footways, verges and modular paving to required street-works specifications.",
      "Accurately record installation serial numbers, photographic completion evidence and operational reports on mobile field devices.",
      "Adhere strictly to site safety controls, PPE requirements, customer care protocols and traffic-management arrangements."
    ],
    essentialRequirements: [
      "Physical fitness and willingness to perform manual outdoor excavation and reinstatement work in all weather conditions.",
      "Proven reliability, strong punctuality and a safety-first mindset on operational utility sites.",
      "Clear communication skills and professional conduct when interfacing with residents and customers.",
      "Ability to follow detailed RAMS, technical instructions and supervisor direction.",
      "Eligible to live and work in the United Kingdom without restriction."
    ],
    desirableRequirements: [
      "Prior experience in clean water distribution, utility groundworks or street-works reinstatement.",
      "Demonstrated experience using CAT and Genny cable location equipment.",
      "Experience with mobile digital completion reporting systems."
    ],
    requiredCardsLicences: [
      "Full valid UK Driving Licence (preferred for team mobility).",
      "EUSR National Water Hygiene Card (or commitment to complete during induction).",
      "EUSR SHEA Water Safety Passport (or commitment to complete).",
      "NRSWA Street Works Operative Card (Units 1–5, 8) advantageous."
    ],
    rightToWorkSponsorship: "Applicants must possess existing right to work in the UK. Bluegrid Utilities does not provide visa sponsorship for this vacancy.",
    applicationMethod: "Online application form via live vacancy page",
    hiringManager: "Operations Lead (Internal)",
    approver: "HSEQ & Operations Director (Internal)",
    candidatePrivacyUrl: "/policies",
    seoTitle: "Water Meter Installation Operative - Coventry | Bluegrid Utilities Careers",
    seoDescription: "Apply for Water Meter Installation Operative with Bluegrid Utilities in Coventry. View role requirements, working details, closing date and application route.",
    auditTrail: [
      {
        changedBy: "Admin",
        changeType: "CREATED",
        timestamp: "2026-03-01T08:00:00Z",
        notes: "Initial vacancy created for Coventry smart water meter deployment"
      },
      {
        changedBy: "HSEQ Director",
        changeType: "STATUS_CHANGE",
        timestamp: "2026-03-01T09:00:00Z",
        notes: "Approved and published for active recruitment"
      }
    ]
  }
];

// Helper to evaluate if a vacancy is currently open and unexpired
const isVacancyOpen = (vacancy) => {
  if (vacancy.status !== 'published') return false;
  if (vacancy.closingDate) {
    const closingTime = new Date(vacancy.closingDate).getTime();
    if (Date.now() > closingTime) {
      return false; // Point 51: Automatically marked closed/expired when closing date/time passes
    }
  }
  return true;
};

// Public endpoint: List open, published vacancies only (Point 51)
export const getVacancies = (req, res) => {
  const activeVacancies = vacanciesStore
    .filter(isVacancyOpen)
    .map(v => ({
      id: v.id,
      slug: v.slug,
      title: v.title,
      reference: v.reference,
      category: v.category,
      location: v.location,
      employmentType: v.employmentType,
      workingPattern: v.workingPattern,
      salaryRate: v.displaySalary ? v.salaryRate : null,
      closingDate: v.closingDate,
      roleSummary: v.roleSummary,
      essentialRequirements: v.essentialRequirements,
      requiredCardsLicences: v.requiredCardsLicences
    }));

  res.status(200).json({
    success: true,
    count: activeVacancies.length,
    data: activeVacancies
  });
};

// Public endpoint: Get single vacancy by slug (Point 49 & 51)
export const getVacancyBySlug = (req, res) => {
  const { slug } = req.params;
  const vacancy = vacanciesStore.find(v => v.slug === slug);

  if (!vacancy || vacancy.status === 'archived') {
    return res.status(404).json({
      success: false,
      error: { message: 'Vacancy not found or has been archived.' }
    });
  }

  const open = isVacancyOpen(vacancy);

  // Return public vacancy structure
  const publicData = {
    ...vacancy,
    isOpen: open,
    isExpired: !open && vacancy.status === 'published',
    salaryRate: vacancy.displaySalary ? vacancy.salaryRate : null,
    // Do not leak internal admin fields to public
    hiringManager: undefined,
    approver: undefined,
    auditTrail: undefined
  };

  res.status(200).json({
    success: true,
    data: publicData
  });
};

// Minimalist application submission enforcing data minimisation (Point 50)
export const submitApplication = async (req, res) => {
  try {
    const {
      fullName,
      email,
      phone,
      location,
      roleId,
      roleTitle,
      engagementRoute,
      rightToWork,
      drivingLicence,
      relevantExperience,
      experienceYears,
      requiredCards,
      cvFileName
    } = req.body;

    // Check vacancy is still open (Point 51: Expired jobs must not retain an active application route)
    const vacancy = vacanciesStore.find(v => v.id === roleId || v.slug === roleId);
    if (vacancy && !isVacancyOpen(vacancy)) {
      return res.status(400).json({
        success: false,
        error: { message: 'This vacancy is closed or has expired. Applications can no longer be accepted.' }
      });
    }

    if (!fullName || !email) {
      return res.status(400).json({
        success: false,
        error: { message: 'Full name and email are required for career applications.' }
      });
    }

    // Point 50: Collect only Name, Contact details, CV/experience, Role-relevant answers.
    // Exclude bank details, passport numbers, immigration document numbers, medical data.
    const application = {
      id: `APP-${Date.now()}`,
      fullName,
      email,
      phone: phone || null,
      location: location || '',
      roleId: roleId || (vacancy ? vacancy.id : 'UNSPECIFIED'),
      roleTitle: roleTitle || (vacancy ? vacancy.title : 'General Field Application'),
      engagementRoute: engagementRoute || 'Standard',
      rightToWork: rightToWork || 'Not Specified',
      drivingLicence: drivingLicence || 'Not Specified',
      relevantExperience: relevantExperience || '',
      experienceYears: experienceYears || '',
      requiredCards: requiredCards || [],
      cvFileName: cvFileName || null,
      submittedAt: new Date().toISOString(),
      status: 'UNDER_REVIEW'
    };

    console.log('[Careers Controller] Application received (Data Minimised):', application.id);

    // Email notification
    await sendApplicationEmail(application).catch(err => {
      console.error('[Careers Controller] Notification error:', err.message);
    });

    return res.status(201).json({
      success: true,
      message: 'Application received successfully. Our recruitment team will review your application against the published requirements.',
      data: { applicationId: application.id }
    });
  } catch (err) {
    console.error('[Careers Controller] Application error:', err);
    return res.status(500).json({
      success: false,
      error: { message: 'Internal server error processing application.' }
    });
  }
};

// CMS / ATS Internal Management Endpoints (Points 46–48, 51, 78)

// List all vacancies (CMS view)
export const manageGetVacancies = (req, res) => {
  res.status(200).json({
    success: true,
    count: vacanciesStore.length,
    data: vacanciesStore
  });
};

// Create vacancy (Draft status)
export const manageCreateVacancy = (req, res) => {
  const { title, location, category, employmentType, closingDate, roleSummary } = req.body;

  if (!title || !category) {
    return res.status(400).json({
      success: false,
      error: { message: 'Title and category are required to create a vacancy.' }
    });
  }

  const id = `JOB-BG-${String(vacanciesStore.length + 1).padStart(2, '0')}`;
  const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

  const newVacancy = {
    id,
    slug,
    title,
    reference: req.body.reference || `BG-${category.substring(0, 3).toUpperCase()}-${Date.now().toString().slice(-4)}`,
    category,
    location: location || 'To be confirmed',
    employmentType: employmentType || 'Full-Time',
    workingPattern: req.body.workingPattern || 'Standard Site Hours',
    salaryRate: req.body.salaryRate || null,
    displaySalary: Boolean(req.body.displaySalary),
    openingDate: new Date().toISOString(),
    closingDate: closingDate || null,
    status: 'draft', // New vacancies start in Draft (Point 47)
    roleSummary: roleSummary || '',
    keyResponsibilities: req.body.keyResponsibilities || [],
    essentialRequirements: req.body.essentialRequirements || [],
    desirableRequirements: req.body.desirableRequirements || [],
    requiredCardsLicences: req.body.requiredCardsLicences || [],
    rightToWorkSponsorship: req.body.rightToWorkSponsorship || 'Applicants must possess right to work in the UK.',
    applicationMethod: 'Online application form via live vacancy page',
    hiringManager: req.body.hiringManager || 'Operations Lead',
    approver: req.body.approver || null,
    candidatePrivacyUrl: '/policies',
    seoTitle: `${title} | Bluegrid Utilities Careers`,
    seoDescription: `Apply for ${title} with Bluegrid Utilities. View requirements and application details.`,
    auditTrail: [
      {
        changedBy: req.body.author || 'Recruitment Staff',
        changeType: 'CREATED',
        timestamp: new Date().toISOString(),
        notes: 'Vacancy created as draft'
      }
    ]
  };

  vacanciesStore.push(newVacancy);

  res.status(201).json({
    success: true,
    message: 'Vacancy created successfully in draft status.',
    data: newVacancy
  });
};

// Update status (Points 46 & 47: Submit for approval, Publish, Close, Archive)
export const manageUpdateStatus = (req, res) => {
  const { id } = req.params;
  const { status, changedBy, notes } = req.body;
  const allowedStatuses = ['draft', 'pending_approval', 'published', 'closed', 'archived'];

  if (!allowedStatuses.includes(status)) {
    return res.status(400).json({
      success: false,
      error: { message: `Invalid status. Must be one of: ${allowedStatuses.join(', ')}` }
    });
  }

  const vacancy = vacanciesStore.find(v => v.id === id || v.slug === id);
  if (!vacancy) {
    return res.status(404).json({
      success: false,
      error: { message: 'Vacancy not found.' }
    });
  }

  const oldStatus = vacancy.status;
  vacancy.status = status;
  vacancy.auditTrail.push({
    changedBy: changedBy || 'Authorised Staff',
    changeType: `STATUS_CHANGE (${oldStatus} -> ${status})`,
    timestamp: new Date().toISOString(),
    notes: notes || `Status changed to ${status}`
  });

  res.status(200).json({
    success: true,
    message: `Vacancy status updated to ${status}.`,
    data: vacancy
  });
};

// Preview vacancy endpoint (Point 46: Preview vacancy before publish)
export const managePreviewVacancy = (req, res) => {
  const { id } = req.params;
  const vacancy = vacanciesStore.find(v => v.id === id || v.slug === id);

  if (!vacancy) {
    return res.status(404).json({
      success: false,
      error: { message: 'Vacancy not found.' }
    });
  }

  res.status(200).json({
    success: true,
    isPreview: true,
    data: vacancy
  });
};
