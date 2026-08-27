import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import MotionSection from './MotionSection';

import sustainabilityHeroBg from '../assets/images/sustainability_hero_bg.png';
import environmentalPolicyBg from '../assets/images/environmental_policy_bg.png';
import sustainabilityBannerImg from '../assets/images/sustainability_banner.png';
import healthSafetyPolicyBg from '../assets/images/health_safety_policy_bg.png';
import safetyBg from '../assets/images/safety_bg.png';
import complianceBg from '../assets/images/compliance_bg.png';
import ramsBriefingImg from '../assets/images/rams_workforce_briefing.jpg';
import utilityGridImg from '../assets/images/utility_grid_work.png';
import ukWorkersSiteImg from '../assets/images/uk_utility_workers_site.png';

const sectionsData = {
  "policy": {
    id: "policy",
    title: "Leadership & Responsibilities",
    badge: "Policy & Governance",
    icon: "gavel",
    bgImage: healthSafetyPolicyBg,
    headline: "Health, Safety & Compliance Commitment",
    description: "Bluegrid Utilities is committed to protecting employees, contractors, customers, the public and the environment through planned work, competent people, effective supervision and continuous improvement.",
    overviewP1: "Management is responsible for providing suitable arrangements, competent supervision, resources and monitoring.",
    overviewP2: "Every worker is expected to follow site rules, report hazards and stop work where conditions are unsafe.",
    pillars: [
      { id: "01", title: "Management Accountability", icon: "shield_person", desc: "Providing suitable operational arrangements, competent supervision, and necessary resources." },
      { id: "02", title: "Worker Responsibility", icon: "verified", desc: "Expecting every worker to follow site safety rules and maintain safe working practices." },
      { id: "03", title: "Hazard Reporting", icon: "family_restroom", desc: "Encouraging prompt reporting of all unsafe conditions and potential hazards on site." },
      { id: "04", title: "Stop Work Authority", icon: "front_hand", desc: "Empowering every operative to stop work immediately where conditions are unsafe." }
    ],
    checklist: [
      "Suitable operational arrangements and competent supervision",
      "Executive management monitoring and resource allocation",
      "Worker adherence to site rules and safety protocols",
      "Immediate stop-work authority for unsafe site conditions"
    ]
  },

  "risk-assessments": {
    id: "risk-assessments",
    title: "Risk Assessment",
    badge: "Hazard Identification",
    icon: "assignment_late",
    bgImage: safetyBg,
    headline: "Risk Assessment & Hazard Control",
    description: "Work activities should be assessed before commencement. Controls follow the hierarchy of elimination, substitution, engineering controls, administrative controls and PPE.",
    overviewP1: "Work activities should be assessed before commencement to identify potential hazards and establish safe working controls.",
    overviewP2: "Point-of-work assessments should be used where site conditions change to ensure ongoing safety.",
    pillars: [
      { id: "01", title: "Pre-Work Assessment", icon: "fact_check", desc: "Assessing all work activities before commencement to understand hazards and practical controls." },
      { id: "02", title: "Hierarchy of Controls", icon: "layers", desc: "Applying elimination, substitution, engineering controls, administrative controls and PPE." },
      { id: "03", title: "Point-of-Work Reviews", icon: "edit_note", desc: "Using dynamic point-of-work assessments whenever site conditions change." },
      { id: "04", title: "Hazard Elimination Focus", icon: "cable", desc: "Prioritizing physical hazard elimination and engineering barriers over procedural controls." }
    ],
    checklist: [
      "Pre-commencement work activity risk assessments",
      "Enforcement of the hierarchy of risk controls",
      "Point-of-work assessments for changing site conditions",
      "Practical control measures understood by all workers"
    ]
  },

  "rams": {
    id: "rams",
    title: "RAMS",
    badge: "Safe Systems of Work",
    icon: "description",
    bgImage: ramsBriefingImg,
    headline: "Task-Specific RAMS & Workforce Acknowledgement",
    description: "Task-specific RAMS should define scope, work sequence, hazards, controls, emergency arrangements, plant and equipment requirements, competency needs and PPE. Workforce acknowledgement should be recorded.",
    overviewP1: "Task-specific RAMS serve as the clear operational guide for every utility activity.",
    overviewP2: "Workforce acknowledgement should be recorded prior to commencing work to ensure all operatives understand the sequence and controls.",
    pillars: [
      { id: "01", title: "Task Scope & Sequence", icon: "format_list_numbered", bgImage: ukWorkersSiteImg, desc: "Defining clear work sequences, plant/equipment requirements, and task scope." },
      { id: "02", title: "Hazards & Controls", icon: "task", bgImage: complianceBg, desc: "Detailing specific site hazards, required risk controls, and emergency arrangements." },
      { id: "03", title: "Competency & PPE Needs", icon: "precision_manufacturing", bgImage: utilityGridImg, desc: "Outlining role-relevant competency needs and task-specific personal protective equipment." },
      { id: "04", title: "Workforce Sign-Off", icon: "emergency", bgImage: healthSafetyPolicyBg, desc: "Recording workforce acknowledgement and briefing confirmation before starting work." }
    ],
    checklist: [
      "Task-specific RAMS defining clear work sequences and controls",
      "Emergency arrangements and plant/equipment requirements specified",
      "Role-relevant competency and PPE needs identified",
      "Recorded workforce acknowledgement prior to work execution"
    ]
  },

  "utility-avoidance": {
    id: "utility-avoidance",
    title: "Utility Avoidance",
    badge: "Safe Digging Practices",
    icon: "cable",
    bgImage: complianceBg,
    headline: "Underground Utility Avoidance & Safe Digging",
    description: "Excavation and intrusive works require appropriate utility plans, site assessment, detection equipment used by competent persons and safe digging practices.",
    overviewP1: "Protecting underground infrastructure requires disciplined pre-excavation checks and safe digging practices.",
    overviewP2: "Detection equipment must be operated strictly by competent persons trained in CAT & Genny utility location.",
    pillars: [
      { id: "01", title: "Utility Plan Review", icon: "map", desc: "Reviewing appropriate underground utility plans prior to any intrusive site work." },
      { id: "02", title: "Site Assessment", icon: "search", desc: "Conducting thorough site surface inspections to identify asset indicators and risks." },
      { id: "03", title: "Competent CAT & Genny Scanning", icon: "radar", desc: "Utilizing cable detection equipment operated by trained, competent personnel." },
      { id: "04", title: "Safe Digging Practices", icon: "construction", desc: "Adhering strictly to HSG47 safe digging guidelines during trial holes and excavation." }
    ],
    checklist: [
      "Up-to-date utility plans reviewed prior to excavation",
      "Thorough site surface assessment and mark-outs",
      "CAT & Genny detection executed by competent persons",
      "HSG47 compliant safe hand-digging and exposure practices"
    ]
  },

  "near-miss": {
    id: "near-miss",
    title: "Near-Miss & Hazard Reporting",
    badge: "Proactive Reporting Culture",
    icon: "report_problem",
    bgImage: complianceBg,
    headline: "No-Blame Near-Miss & Hazard Reporting",
    description: "Bluegrid operates a no-blame reporting culture that encourages early reporting of unsafe conditions, near misses and improvement opportunities. Significant learning should be shared through briefings and toolbox talks.",
    overviewP1: "We operate a no-blame reporting culture that encourages early reporting of unsafe conditions, near misses and improvement opportunities.",
    overviewP2: "Significant learning should be shared across teams through regular briefings and toolbox talks.",
    pillars: [
      { id: "01", title: "No-Blame Culture", icon: "handshake", desc: "Fostering an open environment where workers report hazards without fear of blame." },
      { id: "02", title: "Early Hazard Spotting", icon: "smartphone", desc: "Encouraging immediate reporting of unsafe site conditions and near-miss occurrences." },
      { id: "03", title: "Improvement Opportunities", icon: "trending_up", desc: "Using near-miss data to identify practical workflow and safety improvements." },
      { id: "04", title: "Shared Learning Briefings", icon: "campaign", desc: "Sharing significant lessons learned across teams via daily briefings and toolbox talks." }
    ],
    checklist: [
      "No-blame policy encouraging open hazard reporting",
      "Early reporting of unsafe conditions and near misses",
      "Prompt triage and investigation of reported hazards",
      "Lessons learned shared through briefings and toolbox talks"
    ]
  },

  "incident-management": {
    id: "incident-management",
    title: "Incident Management",
    badge: "Escalation & Response",
    icon: "emergency",
    bgImage: ukWorkersSiteImg,
    headline: "Prompt Escalation & Incident Investigation",
    description: "All incidents should be escalated promptly, made safe, recorded, investigated proportionately and followed by corrective actions. Statutory reporting such as RIDDOR must be managed where applicable by a competent responsible person.",
    overviewP1: "All incidents should be escalated promptly, made safe, recorded, and investigated proportionately.",
    overviewP2: "Statutory reporting such as RIDDOR must be managed where applicable by a competent responsible person.",
    pillars: [
      { id: "01", title: "Prompt Escalation & Securing", icon: "phone_in_talk", desc: "Escalating incidents immediately and making the site area safe." },
      { id: "02", title: "Proportionate Investigation", icon: "search", desc: "Recording and investigating incidents proportionately to identify root causes." },
      { id: "03", title: "Corrective Actions", icon: "rule", desc: "Implementing effective corrective and preventive actions to prevent recurrence." },
      { id: "04", title: "RIDDOR Statutory Reporting", icon: "gavel", desc: "Managing statutory HSE reporting such as RIDDOR via a competent responsible person." }
    ],
    checklist: [
      "Prompt incident escalation and site securing protocols",
      "Accurate incident recording and proportionate investigation",
      "Timely implementation of corrective actions",
      "Statutory RIDDOR reporting managed by a competent person"
    ]
  },

  "site-audits": {
    id: "site-audits",
    title: "Site Audits & Inspections",
    badge: "Supervisory Verification",
    icon: "fact_check",
    bgImage: safetyBg,
    headline: "Supervisory Site Inspections & Audits",
    description: "Supervisory inspections should check barriers, access, excavation controls, PPE, equipment condition, documentation, housekeeping, customer / public protection and work quality.",
    overviewP1: "Supervisory inspections verify that site controls are maintained consistently during field operations.",
    overviewP2: "Inspections cover safety barriers, excavation controls, equipment condition, documentation, public protection and work quality.",
    pillars: [
      { id: "01", title: "Barriers & Access Checks", icon: "visibility", desc: "Inspecting site safety barriers, pedestrian walkways, and secure site access." },
      { id: "02", title: "Excavation & PPE Controls", icon: "assignment_checked", desc: "Checking trench shoring, utility avoidance, and correct PPE usage." },
      { id: "03", title: "Equipment & Documentation", icon: "rule", desc: "Verifying calibrated equipment condition, RAMS paperwork, and site logs." },
      { id: "04", title: "Public Protection & Quality", icon: "thumb_up", desc: "Ensuring customer/public protection, good housekeeping, and high work quality." }
    ],
    checklist: [
      "Regular supervisory inspections across active worksites",
      "Verification of barriers, access, and excavation controls",
      "Equipment condition and documentation checks",
      "Customer protection, housekeeping, and work quality audits"
    ]
  },

  "daily-briefings": {
    id: "daily-briefings",
    title: "Daily Briefings",
    badge: "Pre-Start Communications",
    icon: "record_voice_over",
    bgImage: operationalImg,
    headline: "Pre-Start Briefings & Shift Readiness",
    description: "Pre-start briefings should cover scope, site-specific risks, utility information, traffic / pedestrian arrangements, weather and environmental conditions, emergency arrangements and changes from the previous shift.",
    overviewP1: "Pre-start briefings ensure every shift begins with full awareness of site conditions and risks.",
    overviewP2: "Briefings review utility drawings, traffic management, weather factors, and any changes from previous shifts.",
    pillars: [
      { id: "01", title: "Job Scope & Site Risks", icon: "forum", desc: "Communicating the day's scope of work and site-specific hazards." },
      { id: "02", title: "Utility & Traffic Arrangements", icon: "traffic", desc: "Reviewing underground utility plans and pedestrian/traffic management setups." },
      { id: "03", title: "Environmental & Weather Conditions", icon: "cloud", desc: "Addressing weather, ground conditions, and environmental protection needs." },
      { id: "04", title: "Emergency & Shift Changes", icon: "emergency", desc: "Confirming emergency contacts and reviewing changes from the previous shift." }
    ],
    checklist: [
      "Mandatory pre-start briefings before commencing shift work",
      "Review of utility information and traffic/pedestrian plans",
      "Weather, ground, and environmental condition assessments",
      "Confirmation of emergency routes and shift changes"
    ]
  },

  "ppe": {
    id: "ppe",
    title: "PPE",
    badge: "Personal Protection",
    icon: "engineering",
    bgImage: healthSafetyPolicyBg,
    headline: "Risk-Assessed Personal Protective Equipment",
    description: "PPE requirements should be determined by risk assessment and client rules. Avoid publishing 'Class 3 hi-vis' as a universal requirement unless technically correct for all tasks.",
    overviewP1: "PPE requirements are determined by thorough risk assessment and client-specific site rules.",
    overviewP2: "Operatives are provided with role-appropriate, certified protective gear maintained in good condition.",
    pillars: [
      { id: "01", title: "Risk-Assessed Selection", icon: "fact_check", desc: "Selecting PPE based on specific task risk assessments and site environments." },
      { id: "02", title: "Client Alignment", icon: "handshake", desc: "Ensuring full alignment with client rules and framework specifications." },
      { id: "03", title: "Certified Quality Standards", icon: "verified", desc: "Issuing EN/UK certified protective equipment appropriate for the task." },
      { id: "04", title: "Regular Condition Audits", icon: "rule", desc: "Inspecting PPE regularly and replacing worn or damaged gear immediately." }
    ],
    checklist: [
      "PPE requirements determined strictly by risk assessment",
      "Full alignment with client-specific site rules and standards",
      "Task-appropriate certified protective equipment issued",
      "Regular inspections and prompt replacement of damaged gear"
    ]
  },

  "training": {
    id: "training",
    title: "Training & Competence",
    badge: "Workforce Competency",
    icon: "school",
    bgImage: sustainabilityHeroBg,
    headline: "Matching Qualifications to Work Activity",
    description: "Training and card requirements must match the work activity. Maintain a competence matrix and expiry tracking for role-relevant qualifications.",
    overviewP1: "Training and qualification card requirements must match the specific work activity undertaken.",
    overviewP2: "Bluegrid maintains a structured competence matrix and automated expiry tracking for role-relevant qualifications.",
    pillars: [
      { id: "01", title: "Role-Relevant Tickets", icon: "card_membership", desc: "Ensuring operatives hold valid cards matching their exact work activity (EUSR, NRSWA, CSCS)." },
      { id: "02", title: "Competence Matrix", icon: "grid_view", desc: "Maintaining an audited competence matrix for all field personnel." },
      { id: "03", title: "Expiry Tracking", icon: "schedule", desc: "Tracking qualification card expiry dates to ensure timely refresher training." },
      { id: "04", title: "Verified Skills", icon: "verified_user", desc: "Verifying operative competence before deployment to active contract sites." }
    ],
    checklist: [
      "Qualifications and cards matched directly to work activities",
      "Maintained competence matrix for all deployed personnel",
      "Automated card expiry tracking and refresher scheduling",
      "Pre-deployment verification of role-relevant tickets"
    ]
  },

  "environmental-protection": {
    id: "environmental-protection",
    title: "Environmental Protection",
    badge: "Environmental Controls",
    icon: "eco",
    bgImage: environmentalPolicyBg,
    headline: "Environmental Risk Controls & Responsible Delivery",
    description: "Controls should address waste, spills, water protection, dust, noise, idling, material use, public nuisance and responsible disposal.",
    overviewP1: "Environmental controls are integrated into work planning to protect local habitats and communities.",
    overviewP2: "Practices address waste management, spill prevention, noise and dust suppression, and responsible disposal.",
    pillars: [
      { id: "01", title: "Spill & Water Protection", icon: "water_drop", desc: "Maintaining spill kits and silt controls to protect watercourses and drains." },
      { id: "02", title: "Waste & Material Controls", icon: "recycling", desc: "Managing excavated material, waste segregation, and responsible disposal." },
      { id: "03", title: "Dust, Noise & Idling", icon: "volume_off", desc: "Suppressing dust, controlling noise levels, and reducing vehicle engine idling." },
      { id: "04", title: "Nuisance Prevention", icon: "nature_people", desc: "Minimizing public nuisance and protecting local community environments." }
    ],
    checklist: [
      "Spill kits and watercourse protection measures on site",
      "Responsible waste segregation and disposal arrangements",
      "Dust suppression, noise control, and anti-idling practices",
      "Measures to prevent public nuisance during utility works"
    ]
  },

  "quality-assurance": {
    id: "quality-assurance",
    title: "Quality Assurance",
    badge: "Quality Standards",
    icon: "verified",
    bgImage: utilityGridImg,
    headline: "Task Standards & Supervisory Quality Control",
    description: "Quality controls should include task standards, evidence requirements, supervisory checks, non-conformance management, defect correction and client feedback.",
    overviewP1: "Quality controls ensure utility works are completed to specification and client standards.",
    overviewP2: "Work is verified through supervisory checks, photographic evidence, and proactive non-conformance management.",
    pillars: [
      { id: "01", title: "Task Standards", icon: "workspace_premium", desc: "Defining clear workmanship standards and technical task specifications." },
      { id: "02", title: "Evidence Requirements", icon: "photo_camera", desc: "Capturing photographic and digital evidence at key work stages." },
      { id: "03", title: "Supervisory Checks", icon: "fact_check", desc: "Conducting regular supervisory checks before job sign-off." },
      { id: "04", title: "Defect Correction", icon: "thumb_up", desc: "Managing non-conformances promptly and incorporating client feedback." }
    ],
    checklist: [
      "Clear task standards and technical specifications",
      "Photographic evidence capture for installation records",
      "Supervisory quality checks prior to project handover",
      "Proactive non-conformance tracking and defect resolution"
    ]
  },

  "behavioural-safety": {
    id: "behavioural-safety",
    title: "Behavioural Safety",
    badge: "Safety Decision-Making",
    icon: "psychology",
    bgImage: sustainabilityBannerImg,
    headline: "Safe Decision-Making & Constructive Challenge",
    description: "Supervisors should reinforce safe decision-making, constructive challenge and learning from observations. Avoid promising formal behavioural-safety programmes unless implemented.",
    overviewP1: "Supervisors reinforce safe decision-making, constructive challenge and continuous learning from observations.",
    overviewP2: "Open communication encourages workers to speak up and address potential safety issues constructively.",
    pillars: [
      { id: "01", title: "Safe Decision-Making", icon: "do_not_distribute", desc: "Supporting workers in making safe decisions during daily field activities." },
      { id: "02", title: "Constructive Challenge", icon: "supervisor_account", desc: "Encouraging constructive challenge whenever unsafe practices are noted." },
      { id: "03", title: "Learning from Observations", icon: "lightbulb", desc: "Using day-to-day site observations as practical learning opportunities." },
      { id: "04", title: "Supervisory Leadership", icon: "forum", desc: "Supervisors actively modeling safety-focused behaviors on site." }
    ],
    checklist: [
      "Supervisory reinforcement of safe decision-making",
      "Culture encouraging constructive challenge on site",
      "Practical learning drawn from site safety observations",
      "Open channels for operative-to-supervisor safety discussions"
    ]
  },

  "monitoring": {
    id: "monitoring",
    title: "Performance Reporting",
    badge: "Safety-Led Delivery",
    icon: "monitoring",
    bgImage: utilityGridImg,
    headline: "Safety-Led Delivery & Verified Metrics",
    description: "Publish only verified H&S metrics with a defined period and methodology. Until a meaningful dataset exists, use qualitative wording such as 'Safety-led delivery' rather than unverified LTIFR or zero-harm statistics.",
    overviewP1: "Bluegrid Utilities operates a safety-led delivery model focused on practical controls and supervisory oversight.",
    overviewP2: "We publish only verified metrics backed by documented reporting periods and clear methodologies.",
    pillars: [
      { id: "01", title: "Safety-Led Delivery", icon: "speed", desc: "Focusing operational effort on safety-led planning and risk management." },
      { id: "02", title: "Verified Data Focus", icon: "verified", desc: "Publishing metrics only when backed by verified reporting periods." },
      { id: "03", title: "Supervisory Monitoring", icon: "dashboard", desc: "Conducting regular supervisory monitoring of safety compliance." },
      { id: "04", title: "Continuous Improvement", icon: "trending_up", desc: "Applying review findings to improve field safety arrangements continuously." }
    ],
    checklist: [
      "Safety-led delivery approach across all operational projects",
      "H&S metrics published only with verified periods and methods",
      "Regular supervisory monitoring of site compliance",
      "Continuous improvement driven by operational review findings"
    ]
  }
};

const HealthSafetyCompliance = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Extract section from URL path e.g. /health-safety/risk-assessments -> risk-assessments
  const pathParts = location.pathname.split('/').filter(Boolean);
  const currentSlugFromUrl = pathParts.length > 1 ? pathParts[1] : 'policy';

  const [activeTab, setActiveTab] = useState(sectionsData[currentSlugFromUrl] ? currentSlugFromUrl : 'policy');

  useEffect(() => {
    if (sectionsData[currentSlugFromUrl]) {
      setActiveTab(currentSlugFromUrl);
    } else {
      setActiveTab('policy');
    }
  }, [currentSlugFromUrl]);

  const handleTabChange = (slug) => {
    setActiveTab(slug);
    navigate(`/health-safety/${slug}`);
  };

  const currentSection = sectionsData[activeTab] || sectionsData['policy'];

  return (
    <div className="font-sans bg-slate-50/50 min-h-screen pb-20">
      
      {/* 1. Boxed Hero Banner Section */}
      <MotionSection 
        as="section" 
        className="max-w-[1400px] mx-auto px-6 lg:px-10 pt-6 md:pt-10 pb-6" 
        id="hs-hero"
        initial="hidden"
        animate="visible"
        whileInView={undefined}
        viewport={undefined}
      >
        <div className="relative rounded-none overflow-hidden bg-brand-dark p-8 md:p-14 lg:p-20 text-white shadow-2xl border border-slate-800">
          {/* Background Image with Clean Neutral Dark Overlay - NO BLUE TINT */}
          <div className="absolute inset-0 z-0">
            <img 
              src={currentSection.bgImage} 
              alt={currentSection.title} 
              className="w-full h-full object-cover filter brightness-[0.98] contrast-[1.02] transition-all duration-700 scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          </div>

          {/* Hero Content */}
          <div className="relative z-10 max-w-4xl text-left space-y-6">
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-none bg-brand-primary/20 border border-brand-primary/30 text-blue-300 text-xs md:text-sm font-bold uppercase tracking-wider font-outfit backdrop-blur-md">
                <span className="material-symbols-outlined text-base">{currentSection.icon}</span>
                {currentSection.badge}
              </span>
            </div>
            
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight font-outfit">
              {currentSection.headline}
            </h1>
            
            <p className="text-slate-200 text-base md:text-lg lg:text-xl max-w-3xl leading-relaxed font-sans font-medium">
              {currentSection.description}
            </p>

            {/* Quick Hero Highlights Bar */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-2xl">
              <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-none p-3.5 text-left">
                <p className="text-[10px] text-blue-200 uppercase tracking-widest font-bold font-outfit">Standards</p>
                <p className="text-xs md:text-sm font-bold text-white">ISO 45001 & 14001</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-none p-3.5 text-left">
                <p className="text-[10px] text-blue-200 uppercase tracking-widest font-bold font-outfit">Target</p>
                <p className="text-xs md:text-sm font-bold text-emerald-400">Safety-Led Delivery</p>
              </div>
              <div className="col-span-2 sm:col-span-1 bg-white/10 backdrop-blur-md border border-white/15 rounded-none p-3.5 text-left">
                <p className="text-[10px] text-blue-200 uppercase tracking-widest font-bold font-outfit">Accreditation</p>
                <p className="text-xs md:text-sm font-bold text-white">NRSWA & EUSR</p>
              </div>
            </div>
          </div>
        </div>
      </MotionSection>

      {/* 2. Detailed Content for Selected Section (Boxed Cards with Generous Whitespace) */}
      <MotionSection as="section" className="max-w-[1400px] mx-auto px-6 lg:px-10 py-6 space-y-12">
        
        {/* Executive Overview Box */}
        <div className="bg-white border border-slate-200 rounded-none p-8 md:p-12 lg:p-16 shadow-xl">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Narrative */}
            <div className="lg:col-span-7 text-left space-y-6">
              <div className="w-14 h-14 rounded-none bg-brand-primary/10 text-brand-primary flex items-center justify-center">
                <span className="material-symbols-outlined text-3xl font-bold">{currentSection.icon}</span>
              </div>
              
              <div>
                <span className="text-xs font-bold text-brand-primary uppercase tracking-widest font-outfit">
                  Operational Overview
                </span>
                <h2 className="text-2xl md:text-4xl font-bold text-brand-dark font-outfit mt-1">
                  {currentSection.title}
                </h2>
              </div>

              <p className="text-gray-600 text-base md:text-lg leading-relaxed font-sans font-normal">
                {currentSection.overviewP1}
              </p>

              <p className="text-gray-600 text-base md:text-lg leading-relaxed font-sans font-normal">
                {currentSection.overviewP2}
              </p>

              <div className="pt-2 flex items-center gap-3 text-[#005f9e] font-bold text-sm font-outfit">
                <span className="material-symbols-outlined text-xl">verified</span>
                <span>Enforced across 100% of Bluegrid Utilities worksites</span>
              </div>
            </div>

            {/* Right Image Feature Card */}
            <div className="lg:col-span-5">
              <div className="relative h-[320px] md:h-[420px] rounded-none overflow-hidden shadow-2xl border border-slate-200 group">
                <img 
                  src={currentSection.bgImage} 
                  alt={currentSection.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-left text-white">
                  <span className="px-3 py-1 rounded-none bg-white/20 backdrop-blur-md text-xs font-bold uppercase tracking-wider font-outfit">
                    Active Standard
                  </span>
                  <p className="text-lg font-bold font-outfit mt-2">{currentSection.title}</p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Operational Pillars Grid Box */}
        <div className="space-y-8 text-left">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-1.5 rounded-none bg-brand-primary/10 text-brand-primary text-xs md:text-sm font-bold tracking-wide mb-3 font-outfit uppercase">
              Core Protocols
            </span>
            <h3 className="text-3xl md:text-4xl font-bold text-brand-dark font-outfit">
              Operational Pillars & Safe Execution
            </h3>
            <p className="text-gray-500 text-base font-sans mt-2">
              Key standards driving our zero-harm performance for {currentSection.title}.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {currentSection.pillars.map((pillar) => (
              <div 
                key={pillar.id}
                className="relative min-h-[300px] sm:min-h-[320px] flex flex-col justify-between p-8 md:p-10 overflow-hidden bg-slate-900 shadow-xl border border-slate-200 group text-left transition-all duration-500 hover:shadow-2xl"
              >
                {/* Clean, Natural & Bright Background Photo */}
                <img 
                  src={pillar.bgImage || currentSection.bgImage || ukWorkersSiteImg} 
                  alt={pillar.title} 
                  className="absolute inset-0 w-full h-full object-cover filter brightness-[0.98] contrast-[1.02] group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                {/* Neutral Dark Gradient at Bottom for Text Contrast Only (No Blue or Color Tint) */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-0" />

                {/* Top Row: Icon Badge & Big Step Number */}
                <div className="relative z-10 flex items-center justify-between">
                  <div className="w-12 h-12 bg-[#0f3a5e] text-white flex items-center justify-center shadow-lg group-hover:bg-[#005f9e] transition-colors">
                    <span className="material-symbols-outlined text-2xl font-bold">{pillar.icon}</span>
                  </div>
                  <span className="text-5xl font-black text-white/40 group-hover:text-white/70 transition-colors font-outfit tracking-tighter drop-shadow-md">
                    {pillar.id}
                  </span>
                </div>

                {/* Bottom Row: Title & Text Content */}
                <div className="relative z-10 space-y-2 pt-6 border-t border-white/20 mt-6">
                  <h4 className="text-xl md:text-2xl font-extrabold text-white font-outfit uppercase tracking-tight transition-colors">
                    {pillar.title}
                  </h4>
                  <p className="text-slate-200 text-xs sm:text-sm leading-relaxed font-medium">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Special Sustainability & Local Recruitment Cards when Environmental Protection is active */}
        {activeTab === 'environmental-protection' && (
          <div className="bg-emerald-950 text-white rounded-none p-8 md:p-14 lg:p-16 shadow-2xl relative overflow-hidden space-y-12 border border-emerald-900">
            <div className="absolute inset-0 opacity-20 pointer-events-none">
              <img src={environmentalPolicyBg} alt="Background" className="w-full h-full object-cover" />
            </div>

            <div className="relative z-10 max-w-3xl text-left space-y-4">
              <span className="px-4 py-1.5 rounded-none bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-bold tracking-wider font-outfit uppercase">
                Eco-Friendly Operations
              </span>
              <h3 className="text-3xl md:text-5xl font-bold text-white font-outfit">
                Social Sustainability & Regional Recruitment
              </h3>
              <p className="text-emerald-100 text-base md:text-lg leading-relaxed font-sans">
                Sustainability extends directly to the communities we serve. We prioritize hiring local operatives, coordinate training to build long-term career opportunities in infrastructure, and partner with local supply chain vendors.
              </p>
            </div>

            <div className="relative z-10 grid md:grid-cols-2 gap-8 text-left">
              <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-none p-8 space-y-4">
                <div className="w-12 h-12 rounded-none bg-emerald-400/20 text-emerald-300 flex items-center justify-center">
                  <span className="material-symbols-outlined text-2xl">co2</span>
                </div>
                <h4 className="text-xl font-bold font-outfit text-white">Carbon Footprint Reduction</h4>
                <p className="text-emerald-100 text-sm leading-relaxed font-sans">
                  Deploying local field squads minimizes daily travel mileage, drastically lowering vehicle emissions and fuel consumption across UK utility contracts.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-none p-8 space-y-4">
                <div className="w-12 h-12 rounded-none bg-emerald-400/20 text-emerald-300 flex items-center justify-center">
                  <span className="material-symbols-outlined text-2xl">diversity_3</span>
                </div>
                <h4 className="text-xl font-bold font-outfit text-white">Community Career Building</h4>
                <p className="text-emerald-100 text-sm leading-relaxed font-sans">
                  Our circular recruitment approach invests in local talents, offering fully funded EUSR and NRSWA qualifications to build a resilient regional workforce.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Regulatory & Audit Checklist Banner Box */}
        <div className="bg-gradient-to-br from-brand-dark via-[#0f3a5e] to-[#005f9e] rounded-none p-8 md:p-12 lg:p-16 text-white shadow-2xl text-left space-y-8 relative overflow-hidden">
          <div className="relative z-10 max-w-3xl space-y-3">
            <span className="px-4 py-1.5 rounded-none bg-white/15 text-blue-200 text-xs font-bold tracking-wider font-outfit uppercase">
              Compliance Checklist
            </span>
            <h3 className="text-2xl md:text-4xl font-bold text-white font-outfit">
              Statutory Verification & Audit Checklist
            </h3>
            <p className="text-slate-200 text-sm md:text-base font-sans">
              Non-negotiable verification points enforced for {currentSection.title}:
            </p>
          </div>

          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {currentSection.checklist.map((item, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur-md border border-white/15 rounded-none p-5 flex items-start gap-4">
                <div className="w-8 h-8 rounded-none bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="material-symbols-outlined text-lg font-bold">check_circle</span>
                </div>
                <span className="text-sm font-semibold text-white font-sans">{item}</span>
              </div>
            ))}
          </div>
        </div>

      </MotionSection>

    </div>
  );
};

export default HealthSafetyCompliance;