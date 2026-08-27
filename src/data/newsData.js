import trainingImg from '../assets/images/Training coordination and deployment planning.jpg';
import complianceImg from '../assets/images/Workforce onboarding and compliance verification.jpg';
import utilityInfraImg from '../assets/images/Utility infrastructure support.jpg';
import projectCoordImg from '../assets/images/Project coordination and reporting.jpg';
import ukWorkersSiteImg from '../assets/images/uk_utility_workers_site.png';
import utilityGridImg from '../assets/images/utility_grid_work.png';
import safetyBg from '../assets/images/safety_bg.png';

export const newsCategories = [
  { id: "all", label: "All News" },
  { id: "company-updates", label: "Company Updates" },
  { id: "mobilisation", label: "Mobilisation" },
  { id: "training", label: "Training" },
  { id: "recruitment", label: "Recruitment" },
  { id: "accreditations", label: "Accreditations" },
  { id: "projects", label: "Projects" },
  { id: "community", label: "Community" },
  { id: "operational-growth", label: "Operational Growth" }
];

export const newsArticles = [
  {
    id: 1,
    category: "mobilisation",
    categoryLabel: "Mobilisation",
    title: "Bluegrid Utilities Begins New Phase of Operational Mobilisation",
    date: "August 20, 2026",
    readTime: "3 min read",
    author: "Selbert George, Managing Director",
    img: ukWorkersSiteImg,
    snippet: "Bluegrid Utilities initiates a new operational mobilisation phase across regional infrastructure projects, focusing on workforce readiness, compliance verification, and field coordination.",
    description: "Bluegrid Utilities has formally launched a new phase of operational mobilisation to support regional utility delivery and civil engineering programmes across England. This phased approach focuses on structured workforce onboarding, pre-deployment site briefings, and establishing verified operational management processes.",
    content: [
      "By establishing rigorous site-readiness procedures, equipment audits, and RAMS briefings prior to contract deployment, Bluegrid ensures that field squads arrive on site fully equipped, ticketed, and aligned with client framework expectations.",
      "Operational leadership teams are coordinating regional squad dispatch, establishing clear supervisory structures, and integrating digital reporting workflows across active contract regions.",
      "The business continues to build resilient operational management systems that ensure safety compliance, quality workmanship, and transparent communication with infrastructure partners."
    ],
    spokespersonQuote: "Our focus during this mobilisation phase is ensuring that operational discipline, safety standards, and clear supervisory lines are established from day one.",
    spokespersonName: "Selbert George",
    spokespersonTitle: "Managing Director, Bluegrid Technology Ltd",
    factsFigures: [
      "Operational Focus: Pre-deployment checks, RAMS briefings, and competency audits.",
      "Regional Scope: Mobilising squads across regional hubs in England.",
      "Compliance Basis: EUSR, CSCS, and NRSWA ticket verification prior to site deployment."
    ],
    relatedService: "Smart Water Meter Installation & Civil Engineering Support",
    contactCta: "For operational enquiries or sub-contracting coordination, contact our team at info@bluegridutilities.co.uk.",
    gallery: [
      { img: ukWorkersSiteImg, caption: "Field operative team conducting pre-site safety briefing before deployment." },
      { img: projectCoordImg, caption: "Regional project coordination tracking real-time field deployments." },
      { img: utilityInfraImg, caption: "On-site utility infrastructure support and equipment familiarisation." }
    ]
  },
  {
    id: 2,
    category: "training",
    categoryLabel: "Training",
    title: "Investing in Utility Skills: Workforce Training and Readiness",
    date: "August 14, 2026",
    readTime: "3 min read",
    author: "Gautham Raj, Head of Operations",
    img: trainingImg,
    snippet: "Bluegrid Utilities strengthens its workforce readiness strategy with structured competency tracking, safety inductions, and funded ticket development for utility operatives.",
    description: "Bluegrid Utilities continues to prioritize workforce competence and safety through its structured training and skills development initiative. Designed to prepare operatives for clean water metering, excavation, and reinstatement tasks, the programme emphasizes practical competency checks, site risk reviews, and card expiry tracking.",
    content: [
      "Field teams participate in comprehensive safety inductions, cable avoidance equipment familiarisation, and customer engagement training prior to entering active operational environments.",
      "By maintaining a centralized competence matrix and tracking card renewal dates, Bluegrid ensures all operatives hold valid EUSR, CSCS, and NRSWA credentials before site assignment.",
      "This structured approach to training elevates workforce standards while offering local workers long-term career progression routes within the UK utility sector."
    ],
    spokespersonQuote: "Building a high-quality delivery operation requires continuous investment in people. Ensuring our teams hold valid, role-appropriate qualifications gives our framework partners absolute confidence on site.",
    spokespersonName: "Gautham Raj",
    spokespersonTitle: "Project Manager / Head of Operations",
    factsFigures: [
      "Training Scope: EUSR Water Hygiene, NRSWA Street Works, and CSCS card alignment.",
      "Safety Protocol: Mandatory CAT & Genny cable avoidance familiarisation.",
      "Quality Assurance: Pre-deployment competence matrix checks for 100% of personnel."
    ],
    relatedService: "Workforce Supply & Competency Development",
    contactCta: "To find out more about our workforce standards or career opportunities, contact our team.",
    gallery: [
      { img: complianceImg, caption: "Operatives undergoing practical site safety and compliance assessments." },
      { img: safetyBg, caption: "Health & safety documentation and toolbox talk briefing session." },
      { img: trainingImg, caption: "Interactive workforce onboarding and technical orientation." }
    ]
  },
  {
    id: 3,
    category: "recruitment",
    categoryLabel: "Recruitment",
    title: "Behind the Mobilisation: Building Safe and Reliable Field Teams",
    date: "August 08, 2026",
    readTime: "4 min read",
    author: "Recruitment & Onboarding Team",
    img: complianceImg,
    snippet: "An inside look at Bluegrid's structured recruitment and vetting process, ensuring all field personnel meet statutory right-to-work and industry compliance standards.",
    description: "Behind every successful utility deployment is a structured recruitment, vetting, and onboarding process. Bluegrid Utilities has implemented a multi-stage recruitment portal and verification workflow covering identity checks, right-to-work validation, and ticket verification for all operatives.",
    content: [
      "Operatives joining Bluegrid undergo thorough qualification reviews, health and safety assessments, and site conduct briefings before being assigned to regional field squads.",
      "Our transparent recruitment workflow ensures candidates are informed of client expectations, safety requirements, and operational standards from their initial interview through to site deployment.",
      "By maintaining responsible employment practices, Bluegrid builds reliable field teams capable of delivering high-quality utility infrastructure support."
    ],
    spokespersonQuote: "We believe that operational excellence begins during recruitment. By establishing clear standards, transparent communication, and fair employment practices, we attract skilled professionals who take pride in their work.",
    spokespersonName: "Recruitment Management Desk",
    spokespersonTitle: "Bluegrid Utilities Operations",
    factsFigures: [
      "Vetting Standard: 100% Right-to-Work and identity verification prior to contract offer.",
      "Card Verification: CSCS, EUSR, and NRSWA card authenticity audits.",
      "Onboarding Workflow: Structured 6-step candidate verification process."
    ],
    relatedService: "Workforce Supply & Recruitment",
    contactCta: "Apply online via our recruitment portal or contact our onboarding team.",
    gallery: [
      { img: trainingImg, caption: "New recruits attending orientation and safety introduction." },
      { img: utilityInfraImg, caption: "Utility field team operating equipment on site." },
      { img: ukWorkersSiteImg, caption: "On-site team collaboration and daily safety briefing." }
    ]
  },
  {
    id: 4,
    category: "accreditations",
    categoryLabel: "Accreditations",
    title: "Bluegrid Utilities Progresses CHAS Standard Accreditation",
    date: "August 02, 2026",
    readTime: "3 min read",
    author: "Compliance Lead",
    img: safetyBg,
    snippet: "Bluegrid Utilities is working towards CHAS Standard accreditation as part of its commitment to formal health-and-safety assurance and contractor management.",
    description: "Bluegrid Utilities is actively progressing towards CHAS Standard accreditation as part of its ongoing assurance framework. Working towards CHAS alignment reinforces the company's commitment to verified health and safety management systems, risk controls, and responsible contractor management.",
    content: [
      "The assurance review encompasses company safety policies, RAMS documentation standards, training matrices, incident reporting protocols, and sub-contractor due diligence.",
      "Developing a structured assurance framework prepares Bluegrid for future prequalification requirements while embedding robust safety standards across all daily operations.",
      "The company's accreditation roadmap includes future alignment with Constructionline, SafeContractor, and Achilles UVDB subject to procurement needs."
    ],
    spokespersonQuote: "Formal assurance gives our clients independent verification that our safety processes are practical, compliant, and rigorously enforced across every site.",
    spokespersonName: "HSE Compliance Lead",
    spokespersonTitle: "Bluegrid Technology Ltd",
    factsFigures: [
      "Status: Accreditation in Progress / Working Towards CHAS Standard.",
      "Scope: Health & Safety governance, RAMS standards, and workforce competency.",
      "Roadmap: Preparing assurance documentation for Constructionline and SafeContractor alignment."
    ],
    relatedService: "Health, Safety & Compliance Framework",
    contactCta: "For details on our compliance framework or policy documents, email info@bluegridutilities.co.uk.",
    gallery: [
      { img: complianceImg, caption: "Compliance team reviewing safety management archives and RAMS documents." },
      { img: projectCoordImg, caption: "Quality assurance dashboard monitoring live field compliance scores." },
      { img: safetyBg, caption: "Safety compliance poster and site protocol documentation." }
    ]
  },
  {
    id: 5,
    category: "operational-growth",
    categoryLabel: "Operational Growth",
    title: "Growing Our Utility Delivery Capability Across England",
    date: "July 26, 2026",
    readTime: "3 min read",
    author: "Selbert George, Managing Director",
    img: utilityGridImg,
    snippet: "Bluegrid Utilities continues building operational capability across England, strengthening regional field mobilization, supervisor support, and civil engineering infrastructure.",
    description: "Bluegrid Utilities is expanding its operational reach across England, developing regional mobilization capabilities to support water metering programmes, excavation, reinstatement, and general civil utility projects.",
    content: [
      "With headquarters at Stuart House in Peterborough, the company combines structured project control processes with hands-on field leadership to deliver reliable utility support for principal contractors and framework partners.",
      "As the business develops, the objective is to grow sustainably into a broader infrastructure support organization while protecting the core principles of safety, quality, integrity, and accountable leadership.",
      "Bluegrid continues to build regional workforce capacity to support upcoming infrastructure programmes in line with client demands."
    ],
    spokespersonQuote: "We are building Bluegrid step by step, focusing on dependable execution, transparent communication, and long-term client relationships.",
    spokespersonName: "Selbert George",
    spokespersonTitle: "Managing Director, Bluegrid Technology Ltd",
    factsFigures: [
      "Headquarters: Stuart House, St. Johns Street, Peterborough, PE1 5DD.",
      "Legal Entity: Bluegrid Technology Ltd (Co. No. 16442340).",
      "Core Scope: Smart water metering, civil engineering, reinstatement, and workforce mobilisation."
    ],
    relatedService: "Civil Engineering & Utility Infrastructure Support",
    contactCta: "Connect with our management team to discuss framework partnership opportunities.",
    gallery: [
      { img: utilityGridImg, caption: "Field squad executing excavation and utility asset exposure." },
      { img: projectCoordImg, caption: "Operational management team planning regional squad logistics." },
      { img: utilityInfraImg, caption: "Civil engineering support equipment and site readiness checks." }
    ]
  }
];
