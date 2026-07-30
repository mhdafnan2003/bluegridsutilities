import trainingImg from '../assets/images/Training coordination and deployment planning.jpg';
import complianceImg from '../assets/images/Workforce onboarding and compliance verification.jpg';
import utilityInfraImg from '../assets/images/Utility infrastructure support.jpg';
import projectCoordImg from '../assets/images/Project coordination and reporting.jpg';
import skylineImg from '../assets/images/Urban Skyline View.jpeg';
import ukWorkersSiteImg from '../assets/images/uk_utility_workers_site.png';
import utilityGridImg from '../assets/images/utility_grid_work.png';
import environmentalPolicyBg from '../assets/images/environmental_policy_bg.png';
import safetyBg from '../assets/images/safety_bg.png';
import operationalImg from '../assets/images/operationalimage.png';
import complianceJpg from '../assets/images/combliance.jpeg';
import infrastructureJpg from '../assets/images/infrastructure.jpeg';
import workWithUsImg from '../assets/images/work_with_us.png';

export const newsCategories = [
  { id: "all", label: "All News" },
  { id: "company-updates", label: "Company Updates" },
  { id: "training", label: "Training" },
  { id: "mobilisation", label: "Mobilisation" },
  { id: "recruitment", label: "Recruitment" },
  { id: "accreditations", label: "Accreditations" },
  { id: "community", label: "Community" },
  { id: "projects", label: "Projects" },
  { id: "office-expansion", label: "Office Expansion" }
];

export const newsArticles = [
  {
    id: 1,
    category: "company-updates",
    categoryLabel: "Company Updates",
    title: "Bluegrid Utilities Expands Operational Delivery Infrastructure Across UK",
    date: "July 24, 2026",
    readTime: "4 min read",
    author: "Operations Desk",
    img: utilityGridImg,
    snippet: "Bluegrid Utilities announces a strategic expansion of its utility support logistics, enabling faster operative dispatch and enhanced project coordination across England and Wales.",
    description: "To support increasing demand for qualified utility workforce coordination and infrastructure delivery, Bluegrid Utilities has officially launched its expanded operational logistics framework across key regional hubs in England and Wales.",
    content: [
      "As Tier-1 utility contractors and regional water authorities accelerate network upgrades, the demand for agile, fully compliant field operatives has reached an all-time high. In response, Bluegrid Utilities has expanded its operational infrastructure to guarantee rapid deployment and zero-defect site handovers.",
      "The strategic expansion includes upgraded telemetry monitoring tools, expanded vehicle fleet logistics, and dedicated regional site leads stationed across key infrastructure hubs in Peterborough, London, the Midlands, and the North East.",
      "With direct integration into regional client scheduling systems, our dispatch teams can now deploy accredited meter technicians, NRSWA supervisors, and groundwork operatives within 24 to 72 hours of contract call-off."
    ],
    keyTakeaways: [
      "Increased operative field capacity by 45% for peak utility contracts",
      "Direct integration with regional water authority scheduling systems",
      "Enhanced rapid-response emergency dispatch units",
      "Full digital work order tracking with real-time telemetry verification"
    ],
    gallery: [
      { img: ukWorkersSiteImg, caption: "Field operative team conducting pre-site safety briefing before deployment." },
      { img: projectCoordImg, caption: "Regional project coordination center tracking real-time telemetry." },
      { img: utilityInfraImg, caption: "On-site utility infrastructure support and pipe delivery operations." }
    ]
  },
  {
    id: 2,
    category: "training",
    categoryLabel: "Training",
    title: "Launch of Enhanced EUSR & NRSWA Workforce Training Framework",
    date: "July 18, 2026",
    readTime: "5 min read",
    author: "HSE & Training Team",
    img: trainingImg,
    snippet: "Our workforce development team has launched a comprehensive continuous professional development initiative providing fully funded EUSR cards, cable avoidance refreshers, and NRSWA supervisor tickets.",
    description: "Safety, competence, and continuous learning remain the bedrock of Bluegrid's operational philosophy. We are proud to announce our enhanced nationwide workforce training initiative for all field personnel.",
    content: [
      "Safety and competence remain the foundation of all Bluegrid field operations. Our new continuous learning framework ensures that every field operative placed on site holds up-to-date EUSR, CSCS, and NRSWA credentials before deployment.",
      "The curriculum includes practical site simulations, health and safety compliance drills, customer interaction etiquette, and digital job sheet reporting. Operatives undergo regular refresher courses to maintain alignment with evolving UK water industry regulations.",
      "By removing financial barriers and providing fully funded training pathways, Bluegrid empowers workers to advance their careers while delivering Tier-1 contractors unmatched workforce compliance."
    ],
    keyTakeaways: [
      "100% funded EUSR water hygiene & CSCS card certifications",
      "Mandatory CAT & Genny cable avoidance refresher modules",
      "NRSWA Street Works supervisor qualification pathways",
      "Interactive digital portal for real-time ticket tracking"
    ],
    gallery: [
      { img: complianceImg, caption: "Operatives undergoing practical site safety and compliance assessments." },
      { img: safetyBg, caption: "Dedicated health & safety training workshop facilities." },
      { img: trainingImg, caption: "Interactive workforce onboarding and technical orientation." }
    ]
  },
  {
    id: 3,
    category: "mobilisation",
    categoryLabel: "Mobilisation",
    title: "Rapid Field Mobilisation Completed for Major Clean Water Contract",
    date: "July 12, 2026",
    readTime: "3 min read",
    author: "Project Mobilisation Lead",
    img: ukWorkersSiteImg,
    snippet: "Bluegrid successfully deployed 40+ accredited meter operatives within 72 hours for a regional water authority, maintaining 100% compliance and zero downtime during rollout.",
    description: "In one of our fastest turnarounds to date, Bluegrid Utilities successfully mobilised over 40 fully accredited metering personnel to support an urgent regional clean water infrastructure programme.",
    content: [
      "When a major regional water authority required emergency capacity for a large-scale smart meter deployment, Bluegrid's workforce coordination unit stepped in with a turnkey mobilisation plan.",
      "Within 72 hours of receiving the specification, our team screened, vetted, and dispatched 40+ certified meter installers, equipped with chapter 8 compliant vehicles, calibrated testing tools, and mobile data terminals.",
      "The rapid deployment achieved 100% SLA fulfillment from day one, completing over 1,200 residential and commercial meter checks with zero reported safety incidents."
    ],
    keyTakeaways: [
      "40+ certified operatives deployed within 72 hours of order",
      "Zero safety incidents or compliance non-conformances",
      "Chapter 8 compliant vehicle fleet and equipment provision",
      "Seamless client dashboard integration for real-time progress"
    ],
    gallery: [
      { img: utilityGridImg, caption: "Metering operative team preparing site barriers and signage." },
      { img: projectCoordImg, caption: "Real-time field tracking and dispatch map monitoring." },
      { img: ukWorkersSiteImg, caption: "Operatives on site conducting water pressure telemetry checks." }
    ]
  },
  {
    id: 4,
    category: "recruitment",
    categoryLabel: "Recruitment",
    title: "Workforce Recruitment Drive Launched for Metering & Groundwork Operatives",
    date: "July 05, 2026",
    readTime: "4 min read",
    author: "Recruitment Unit",
    img: complianceImg,
    snippet: "Bluegrid Utilities opens applications for skilled meter installers, pipe layers, groundworkers, and NRSWA supervisors to support our growing UK operational portfolio.",
    description: "Due to landmark framework contract wins, Bluegrid Utilities is expanding its UK workforce with nationwide vacancies for metering technicians, pipe layers, groundworkers, and site supervisors.",
    content: [
      "As part of our commitment to delivering high-caliber workforce supply for UK utility infrastructure, Bluegrid Utilities has launched a major recruitment campaign across England, Wales, and Scotland.",
      "We offer competitive rates of pay, continuous training investments, modern vehicle options, and clear progression routes into supervisory and management roles.",
      "Candidates with CSCS, EUSR, or NRSWA qualifications are invited to apply directly through our streamlined online portal or visit our Peterborough operational headquarters."
    ],
    keyTakeaways: [
      "Nationwide opportunities across clean water, waste water, and civil utilities",
      "Full PPE, vehicle allowance, and tool kit provisions",
      "Structured career advancement into team lead & supervisor positions",
      "Fast-track onboarding process completed within 5 business days"
    ],
    gallery: [
      { img: trainingImg, caption: "New recruits attending orientation and safety introduction." },
      { img: utilityInfraImg, caption: "Utility field team operating heavy equipment on site." },
      { img: ukWorkersSiteImg, caption: "On-site team collaboration and daily safety briefing." }
    ]
  },
  {
    id: 5,
    category: "accreditations",
    categoryLabel: "Accreditations",
    title: "ISO 45001 & ISO 9001 Compliance Milestones Re-certified",
    date: "June 28, 2026",
    readTime: "3 min read",
    author: "Compliance Director",
    img: safetyBg,
    snippet: "Our operational systems successfully passed independent quality and health & safety audits, reaffirming our commitment to compliance-led utility delivery.",
    description: "Following a comprehensive multi-day audit by independent certification bodies, Bluegrid Utilities has formally renewed its ISO 45001 (Occupational Health & Safety) and ISO 9001 (Quality Management) accreditations.",
    content: [
      "Independent auditors praised Bluegrid's robust risk assessment protocols, transparent audit archives, and rigorous operative vetting procedures.",
      "Maintaining these industry-standard accreditations ensures our client partners receive verified quality assurance at every level of project execution.",
      "We continue to embed zero-harm principles across all site activities, ensuring every worker returns home safely every single day."
    ],
    keyTakeaways: [
      "Re-certified ISO 45001 & ISO 9001 compliance standards",
      "Zero major non-conformances identified during audit",
      "Verified quality assurance across all operative dispatch workflows",
      "Comprehensive digital RAMS and safety tracking portal"
    ],
    gallery: [
      { img: complianceImg, caption: "Audit team reviewing digital compliance archives and RAMS documents." },
      { img: projectCoordImg, caption: "Quality assurance dashboard monitoring live field compliance scores." },
      { img: safetyBg, caption: "Safety compliance poster and site protocol documentation." }
    ]
  },
  {
    id: 6,
    category: "community",
    categoryLabel: "Community",
    title: "Investing in Regional Skills & Local Supply Chain Partnerships",
    date: "June 20, 2026",
    readTime: "4 min read",
    author: "Sustainability Lead",
    img: environmentalPolicyBg,
    snippet: "As part of our commitment to sustainable operations, Bluegrid partners with regional supply chains to recruit locally and reduce logistical carbon footprints.",
    description: "Bluegrid Utilities is proud to announce its local community investment initiative, partnering with regional training hubs and local suppliers to foster long-term skills growth across project areas.",
    content: [
      "Sustainable utility infrastructure isn't just about environmental impact — it's about building resilient local communities. Bluegrid prioritises recruiting field operatives within 30 miles of active project sites.",
      "By sourcing equipment, vehicle maintenance, and PPE from local regional vendors, we actively re-invest contract revenue into the communities where we operate.",
      "This localized approach reduces overall transport carbon emissions while creating sustainable career opportunities for local residents."
    ],
    keyTakeaways: [
      "Over 85% of operative placements recruited locally",
      "Reduced travel mileage cutting operational carbon footprint",
      "Partnership with regional FE colleges for utility apprenticeships",
      "Local supply chain spend prioritized across all regional hubs"
    ],
    gallery: [
      { img: utilityGridImg, caption: "Local operatives completing meter installation training." },
      { img: skylineImg, caption: "Urban infrastructure network powered by regional field teams." },
      { img: environmentalPolicyBg, caption: "Environmental sustainability initiative poster and guidelines." }
    ]
  },
  {
    id: 7,
    category: "projects",
    categoryLabel: "Projects",
    title: "Successful Delivery of Smart Water Metering Rollout Framework",
    date: "June 14, 2026",
    readTime: "5 min read",
    author: "Metering Delivery Manager",
    img: projectCoordImg,
    snippet: "Over 1,000+ planned smart meter installations completed safely with full telemetry verification and positive resident feedback.",
    description: "Bluegrid's metering division has achieved a landmark milestone, completing over 1,000 smart water meter replacements across commercial and residential premises with a 99.8% customer satisfaction score.",
    content: [
      "Smart water metering is crucial for leakage reduction and sustainable water management across the UK. Bluegrid operatives led the front-line installation, telemetry setup, and signal verification.",
      "Each installation was completed using non-intrusive excavation techniques, precise pipework connections, and instant digital reporting via mobile handheld devices.",
      "Property owners praised our operatives for polite customer communication, tidy work areas, and clear guidance on smart meter benefits."
    ],
    keyTakeaways: [
      "1,000+ smart water meters successfully installed and commissioned",
      "99.8% customer satisfaction score across residential surveys",
      "Instant telemetry validation reducing leakage audit times",
      "Zero customer property damage incidents recorded"
    ],
    gallery: [
      { img: ukWorkersSiteImg, caption: "Smart water meter installation undergoing final telemetry check." },
      { img: trainingImg, caption: "Operatives testing digital handheld reader equipment." },
      { img: utilityGridImg, caption: "Completed meter chamber installation with clean reinstatement." }
    ]
  },
  {
    id: 8,
    category: "office-expansion",
    categoryLabel: "Office Expansion",
    title: "Peterborough Operations Hub Capacity Doubled to Support Growth",
    date: "June 02, 2026",
    readTime: "3 min read",
    author: "Headquarters Management",
    img: utilityInfraImg,
    snippet: "Our Stuart House headquarters expansion provides enhanced dispatch capabilities, dedicated training facilities, and expanded logistics support.",
    description: "To accommodate our expanding administrative and field coordination teams, Bluegrid Utilities has doubled its operational headquarters footprint at Stuart House in Peterborough.",
    content: [
      "The expanded facility features a state-of-the-art dispatch control room, enlarged vehicle fleet staging grounds, and a dedicated candidate onboarding suite.",
      "This expansion enables our administrative teams to manage larger operative rosters and provide 24/7 emergency support for Tier-1 utility client contracts.",
      "The new headquarters also houses an interactive practical training center for pre-deployment operative inductions."
    ],
    keyTakeaways: [
      "Doubled physical headquarters capacity at Stuart House, Peterborough",
      "State-of-the-art 24/7 dispatch and telemetry control room",
      "On-site practical training room for operative assessment",
      "Expanded fleet management & equipment storage facilities"
    ],
    gallery: [
      { img: skylineImg, caption: "Peterborough city skyline near Stuart House headquarters." },
      { img: projectCoordImg, caption: "Dispatch control team managing operative rosters." },
      { img: utilityInfraImg, caption: "Logistics staging yard for fleet vehicles and equipment." }
    ]
  },
  {
    id: 9,
    category: "company-updates",
    categoryLabel: "Company Updates",
    title: "Annual Operational Performance Review Highlights Zero Harm Achievements",
    date: "May 25, 2026",
    readTime: "4 min read",
    author: "Executive Board",
    img: utilityInfraImg,
    snippet: "A summary of our annual operational review demonstrating industry-leading audit scores, workforce retention metrics, and strong utility client partnerships.",
    description: "Bluegrid Utilities has published its annual operational performance review, reporting record growth, 98% workforce retention, and an exemplary safety record across all active UK utility contracts.",
    content: [
      "The annual review highlights significant growth across clean water metering, civil groundwork coordination, and NRSWA supervisor dispatch.",
      "Key performance indicators include a 100% audit pass rate, zero lost-time injuries (LTI), and a 98% operative retention rate over the 12-month period.",
      "Our board remains focused on expanding strategic partnerships with Tier-1 infrastructure contractors while continually elevating workforce welfare."
    ],
    keyTakeaways: [
      "Zero Lost Time Injuries (LTI) across all operational delivery sites",
      "98% operative retention rate supported by competitive benefits",
      "100% pass rate across independent client compliance audits",
      "Over 2,500 total field work orders executed cleanly"
    ],
    gallery: [
      { img: safetyBg, caption: "Annual safety awards presentation celebrating zero harm achievement." },
      { img: complianceImg, caption: "Audit compliance presentation graphics and review metrics." },
      { img: utilityGridImg, caption: "Operative field crew receiving annual performance commendations." }
    ]
  }
];
