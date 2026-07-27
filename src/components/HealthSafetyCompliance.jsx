import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import MotionSection from './MotionSection';

import sustainabilityHeroBg from '../assets/images/sustainability_hero_bg.png';
import environmentalPolicyBg from '../assets/images/environmental_policy_bg.png';
import sustainabilityBannerImg from '../assets/images/sustainability_banner.png';
import healthSafetyPolicyBg from '../assets/images/health_safety_policy_bg.png';
import safetyBg from '../assets/images/safety_bg.png';
import complianceBg from '../assets/images/compliance_bg.png';
import operationalImg from '../assets/images/operationalimage.png';
import utilityGridImg from '../assets/images/utility_grid_work.png';
import ukWorkersSiteImg from '../assets/images/uk_utility_workers_site.png';

const sectionsData = {
  "policy": {
    id: "policy",
    title: "Health & Safety Policy",
    badge: "Policy & Governance",
    icon: "gavel",
    bgImage: healthSafetyPolicyBg,
    headline: "Zero-Harm Health & Safety Policy Statement",
    description: "Bluegrid Utilities is committed to providing a safe, healthy, and compliant working environment across all UK utility and infrastructure operations. Safety is our primary operational metric.",
    overviewP1: "Our primary objective is to prevent injury, ill health, and occupational hazards across all site activities. We maintain a zero-harm culture where every team member is empowered to prioritize safety above operational speed.",
    overviewP2: "Our executive board reviews our Health & Safety Policy annually to align with statutory UK legislation (Health & Safety at Work Act 1974), client specifications, and ISO 45001 international standards.",
    pillars: [
      { id: "01", title: "Executive Leadership & Accountability", icon: "shield_person", desc: "Direct board-level oversight ensuring safety resources, regular policy reviews, and executive accountability for site safety performance." },
      { id: "02", title: "ISO 45001 Occupational Health & Safety", icon: "verified", desc: "Certified management systems driving continuous risk reduction, hazard identification, and operational safety audits across all field operations." },
      { id: "03", title: "Duty of Care to Public & Operatives", icon: "family_restroom", desc: "Rigorous protection protocols for pedestrians, local residents, third-party contractors, and site operatives during utility civil works." },
      { id: "04", title: "Stop Work Authority", icon: "front_hand", desc: "Unconditional authority granted to every employee and subcontractor to stop any job immediately if an unsafe condition or hazard is observed." }
    ],
    checklist: [
      "Annual Health & Safety Policy Board Review",
      "Full ISO 45001 Occupational Management Compliance",
      "Mandatory Safety Induction for 100% of Site Operatives",
      "Clear Duty of Care Protocols for Pedestrians & Public Highways"
    ]
  },

  "risk-assessments": {
    id: "risk-assessments",
    title: "Risk Assessments",
    badge: "Hazard Identification",
    icon: "assignment_late",
    bgImage: safetyBg,
    headline: "Dynamic Risk Assessment & Hazard Mitigation Framework",
    description: "Prior to starting physical work, comprehensive Risk Assessments are produced to identify potential hazards, evaluate severity, and enforce robust risk controls.",
    overviewP1: "Risk assessment is an ongoing, dynamic process at Bluegrid Utilities. From initial desktop surveys to real-time Point-of-Work Risk Assessments (POWRA), our teams evaluate every variable before breaking ground.",
    overviewP2: "We utilize standardized matrix scoring (Likelihood vs Severity) to categorize risks and implement the Hierarchy of Controls—Elimination, Substitution, Engineering Controls, Administrative Controls, and PPE.",
    pillars: [
      { id: "01", title: "5-Step Hazard Evaluation", icon: "fact_check", desc: "Systematic identification of physical, chemical, electrical, and environmental hazards across underground asset sites." },
      { id: "02", title: "Point-of-Work Risk Assessment (POWRA)", icon: "edit_note", desc: "Real-time site checks conducted by operatives prior to commencing daily tasks to account for shifting weather or ground conditions." },
      { id: "03", title: "Hierarchy of Risk Controls", icon: "layers", desc: "Prioritizing physical elimination and engineering barriers over procedural or personal protective measures." },
      { id: "04", title: "Buried Service Hazard Reviews", icon: "cable", desc: "CAT & Genny cable avoidance scans and utility plan verification integrated into every site risk assessment." }
    ],
    checklist: [
      "Mandatory CAT & Genny Scans Before Excavation",
      "Likelihood & Severity Risk Matrix Scoring",
      "Dynamic Daily Point-of-Work Hazard Reviews",
      "Hierarchy of Control Enforcement Across All Worksites"
    ]
  },

  "rams": {
    id: "rams",
    title: "Method Statements (RAMS)",
    badge: "Safe Systems of Work",
    icon: "description",
    bgImage: operationalImg,
    headline: "Method Statements & Safe Systems of Work (RAMS)",
    description: "RAMS define step-by-step operational instructions for high-risk utility tasks—such as deep trench excavation, high-pressure water works, live gas proximity, and heavy lifting operations.",
    overviewP1: "Our Risk Assessment & Method Statements (RAMS) serve as the operational blueprint for every utility contract. They provide clear, unambiguous step-by-step instructions designed to eliminate procedural errors.",
    overviewP2: "RAMS documents are authored by qualified safety coordinators, reviewed with utility clients, and briefed directly to field operatives prior to job execution with documented sign-offs.",
    pillars: [
      { id: "01", title: "Step-by-Step Task Sequence", icon: "format_list_numbered", desc: "Chronological operational instructions specifying exact tools, plant machinery, and safety precautions required." },
      { id: "02", title: "Permit-to-Work Integration", icon: "task", desc: "Mandatory permit sign-offs for hot works, confined space entry, deep excavation, and high-voltage proximity." },
      { id: "03", title: "Plant & Machinery Operational Safe Rules", icon: "precision_manufacturing", desc: "Strict exclusion zones, banksman supervision, and machinery inspection protocols for site excavators and vacuum units." },
      { id: "04", title: "Emergency Action Procedures", icon: "emergency", desc: "Task-specific emergency escalation steps, emergency contact rosters, and first-aid response routes." }
    ],
    checklist: [
      "Client-Approved RAMS Prior to Site Mobilization",
      "Operative Documented RAMS Briefing & Sign-off",
      "Permit-to-Work Authorization for High-Risk Tasks",
      "Task-Specific Emergency Evacuation & Rescue Plans"
    ]
  },

  "near-miss": {
    id: "near-miss",
    title: "Near Miss Reporting",
    badge: "Proactive Hazard Spotting",
    icon: "report_problem",
    bgImage: complianceBg,
    headline: "No-Blame Near Miss & Hazard Spotting Culture",
    description: "We actively encourage field personnel to report near misses and unsafe conditions immediately. Our no-blame culture turns every observation into a learning opportunity.",
    overviewP1: "A robust near-miss reporting system is the single most effective tool for preventing workplace injuries. We actively remove reporting barriers and celebrate field personnel who highlight potential risks.",
    overviewP2: "Reported near misses are logged digitally, analyzed by safety officers within 24 hours, and shared across project teams via safety alerts to prevent recurring hazards across all sites.",
    pillars: [
      { id: "01", title: "Digital Mobile Hazard Reporting", icon: "smartphone", desc: "Simple smartphone app reporting enabling field operatives to log photos and location pins of hazardous conditions instantly." },
      { id: "02", title: "24-Hour Review & Actioning", icon: "schedule", desc: "Safety management triage ensuring reported hazards are inspected and rectified within 24 hours." },
      { id: "03", title: "No-Blame Reporting Guarantee", icon: "handshake", desc: "Strict policy protecting workers from fault or penalty when reporting hazards, encouraging transparent communication." },
      { id: "04", title: "Safety Alert Dissemination", icon: "campaign", desc: "Monthly trend analysis and instant safety bulletins broadcast to all site teams to share key lessons learned." }
    ],
    checklist: [
      "Instant Digital Mobile Near Miss App Access",
      "24-Hour Safety Team Hazard Triage & Actioning",
      "No-Blame Worker Protection Policy",
      "Monthly Operative Safety Champion Recognition"
    ]
  },

  "environmental-protection": {
    id: "environmental-protection",
    title: "Environmental Protection",
    badge: "Eco-Friendly & Sustainable",
    icon: "eco",
    bgImage: environmentalPolicyBg,
    headline: "Carbon Reduction, Ecological Protection & Social Sustainability",
    description: "Our comprehensive environmental framework focused on carbon reduction, clean water preservation, ecological protection, localized recruitment, and sustainable waste management across UK utility sites.",
    overviewP1: "We are committed to minimizing the ecological impact of utility works. By recruiting local field teams, optimizing deployment routes, and utilizing energy-efficient equipment, we significantly reduce transportation emissions.",
    overviewP2: "Our practices ensure clean water preservation, responsible waste disposal, noise and dust suppression, and minimal disruption to the surrounding environment during street work excavations and reinstatements.",
    pillars: [
      { id: "01", title: "Carbon Reduction & Route Optimization", icon: "co2", desc: "Minimizing travel emissions by deploying regional operatives and utilizing low-emission utility fleet vehicles." },
      { id: "02", title: "Waste Management & Circular Economy", icon: "recycling", desc: "Rigorous segregation of excavated spoil, recycling of aggregate materials, and zero-waste-to-landfill commitments." },
      { id: "03", title: "Water Preservation & Pollution Prevention", icon: "water_drop", desc: "Spill kit readiness, silt filter protections, and clean water preservation during mains connections and metering works." },
      { id: "04", title: "Social Sustainability & Local Recruitment", icon: "diversity_3", desc: "Prioritizing local hiring, skill development in regional communities, and ethical local supply chain partnerships." }
    ],
    checklist: [
      "ISO 14001 Environmental Management Alignment",
      "Spill Kit Equipment & Decontamination Readiness on 100% of Fleet Vehicles",
      "Recycled Aggregate & Responsible Trench Spoil Disposal",
      "Local Workforce Deployment & Regional Skill Training Programs"
    ]
  },

  "incident-management": {
    id: "incident-management",
    title: "Incident Management",
    badge: "Emergency Preparedness",
    icon: "emergency",
    bgImage: ukWorkersSiteImg,
    headline: "Incident Escalation, Emergency Response & RIDDOR Compliance",
    description: "In the event of an incident or injury, our structured response protocol ensures immediate emergency care, thorough root cause analysis, and transparent regulatory reporting.",
    overviewP1: "While our focus is zero harm, we maintain a battle-tested emergency incident response matrix. Every site supervisor is trained in emergency first aid, site containment, and immediate escalation.",
    overviewP2: "All incidents are investigated using Root Cause Analysis (RCA) to identify systemic factors, leading to mandatory Corrective and Preventive Action (CAPA) implementation across the organization.",
    pillars: [
      { id: "01", title: "24/7 Incident Escalation Hotline", icon: "phone_in_talk", desc: "Immediate 24/7 access to safety coordinators and senior management for emergency guidance and site support." },
      { id: "02", title: "On-Site First Aid Response", icon: "medical_services", desc: "Certified First Aiders and fully equipped first-aid kits on every active project site and mobile utility van." },
      { id: "03", title: "RIDDOR Statutory Reporting", icon: "gavel", desc: "Strict adherence to UK RIDDOR reporting guidelines for reportable injuries, diseases, and dangerous occurrences." },
      { id: "04", title: "Root Cause Investigation (RCA)", icon: "search", desc: "Comprehensive investigation framework identifying underlying causes and applying CAPA measures to prevent recurrence." }
    ],
    checklist: [
      "24/7 Dedicated Senior Management Incident Hotline",
      "Certified Emergency First Aiders Assigned to Every Site",
      "Full RIDDOR Statutory HSE Reporting Compliance",
      "Root Cause Analysis & Corrective Action Tracking"
    ]
  },

  "quality-assurance": {
    id: "quality-assurance",
    title: "Quality Assurance",
    badge: "Quality & Workmanship",
    icon: "verified",
    bgImage: utilityGridImg,
    headline: "Total Quality Assurance & Reinstatement Standards",
    description: "Quality Assurance ensures all utility reinstatements, meter installations, and civil excavations strictly comply with HAUC and utility client standards.",
    overviewP1: "Our Quality Assurance framework guarantees right-first-time project execution. We inspect every phase of work—from trench excavation dimensions and bedding to final bituminous surface reinstatement.",
    overviewP2: "We maintain ISO 9001 aligned processes, conducting photographic audits of meter installations and underground asset fittings to provide complete quality assurance to our utility partners.",
    pillars: [
      { id: "01", title: "ISO 9001 Quality Management System", icon: "workspace_premium", desc: "Standardized quality control procedures, documented audit trails, and client satisfaction metrics." },
      { id: "02", title: "HAUC & SROH Reinstatement Standards", icon: "construction", desc: "Full compliance with the Specification for the Reinstatement of Openings in Highways for long-term road durability." },
      { id: "03", title: "Digital Photographic Auditing", icon: "photo_camera", desc: "Geotagged photographic evidence captured at every stage of asset installation and reinstatement." },
      { id: "04", title: "Right-First-Time Workmanship Focus", icon: "thumb_up", desc: "Minimizing defect rework through operative skills training and rigorous quality verification checks." }
    ],
    checklist: [
      "ISO 9001 Quality Management System Certification",
      "Geotagged Digital Photo Verification of Asset Installs",
      "Strict HAUC & SROH Reinstatement Compliance Audits",
      "Defect-Free Performance Guarantees for Utility Clients"
    ]
  },

  "site-audits": {
    id: "site-audits",
    title: "Site Audits",
    badge: "Inspection & Assurance",
    icon: "fact_check",
    bgImage: safetyBg,
    headline: "Unannounced Site Inspections & Compliance Auditing",
    description: "Regular site audits conducted by independent safety coordinators verify that field teams adhere strictly to RAMS, NRSWA signage rules, and personal protective protocols.",
    overviewP1: "Safety checks are not just scheduled—they are continuous and unannounced. Our safety officers conduct field audits across daytime and night-shift operations to inspect active site standards.",
    overviewP2: "Audit scores are calculated using standardized scorecards evaluating PPE, NRSWA barrier layouts, CAT & Genny usage, permit logs, and site cleanliness.",
    pillars: [
      { id: "01", title: "Unannounced Field Inspections", icon: "visibility", desc: "Randomized site visits ensuring authentic, daily compliance without advance notification." },
      { id: "02", title: "Digital Mobile Audit Scorecards", icon: "assignment_checked", desc: "Real-time mobile scoring evaluating site safety, traffic management, and environmental compliance." },
      { id: "03", title: "Corrective Action Notices (CAN)", icon: "rule", desc: "Immediate issuance of binding corrective notices for any non-compliance observed on site." },
      { id: "04", title: "Monthly Contractor Compliance Rankings", icon: "bar_chart", desc: "Benchmarking field team audit scores to drive continuous safety improvements across all squads." }
    ],
    checklist: [
      "Unannounced Daytime & Night-shift Field Audits",
      "Real-time Digital Audit Scorecards Sent to Management",
      "Immediate Rectification of Noted Non-Compliances",
      "Monthly Safety Performance Benchmarking Reports"
    ]
  },

  "daily-briefings": {
    id: "daily-briefings",
    title: "Daily Briefings",
    badge: "Pre-Shift Communications",
    icon: "record_voice_over",
    bgImage: operationalImg,
    headline: "Daily Toolbox & Pre-Shift Safety Briefings",
    description: "Mandatory pre-shift briefings conducted every morning by site supervisors to communicate site hazards, daily targets, weather alerts, and localized safety notices.",
    overviewP1: "Every shift starts with a dedicated safety discussion. Daily Briefings ensure that every operative understands the day's specific tasks, high-risk activities, and hazard controls before turning on machinery.",
    overviewP2: "Briefings review buried utility drawings, pedestrian management plans, manual handling precautions, and weather-related ground stability alerts.",
    pillars: [
      { id: "01", title: "Pre-Shift Hazard Communication", icon: "forum", desc: "Reviewing daily job scope, buried service plans, and site-specific hazard controls prior to starting work." },
      { id: "02", title: "Weather & Environmental Impact Alerts", icon: "cloud", desc: "Adapting work practices for heavy rainfall, freezing temperatures, extreme heat, or poor visibility." },
      { id: "03", title: "Operative Feedback & Q&A", icon: "question_answer", desc: "Encouraging site teams to raise concerns or request additional safety resources during the briefing." },
      { id: "04", title: "Signed Attendance Records", icon: "draw", desc: "Formal sign-off logging every operative's attendance and confirmation of briefing understanding." }
    ],
    checklist: [
      "Mandatory Pre-Shift Briefing Prior to Any Site Work",
      "Review of Underground Utility Cable Drawings",
      "Operative Two-Way Safety Discussion & Q&A",
      "Documented Attendance & Understanding Sign-off Log"
    ]
  },

  "ppe": {
    id: "ppe",
    title: "PPE",
    badge: "Personal Protection",
    icon: "engineering",
    bgImage: healthSafetyPolicyBg,
    headline: "Personal Protective Equipment (PPE) Standards & Enforcement",
    description: "Mandatory, high-specification protective gear conforming to EN/UK standards provided to all personnel and audited regularly for condition and compliance.",
    overviewP1: "Personal Protective Equipment is our final line of defense against physical hazards. Bluegrid Utilities enforces strict minimum PPE requirements across all operational utility contracts.",
    overviewP2: "All gear is issued free of charge, routinely inspected during site audits, and replaced immediately upon wear or damage to ensure uncompromised protection.",
    pillars: [
      { id: "01", title: "High-Visibility Class 3 Garments", icon: "dry_cleaning", desc: "EN ISO 20471 certified high-visibility jackets and trousers for day and night roadworks visibility." },
      { id: "02", title: "Safety Footwear with Metatarsal Protection", icon: "roller_skating", desc: "EN ISO 20345 compliant steel/composite toe and puncture-resistant midsole protective boots." },
      { id: "03", title: "Head, Eye & Hearing Protection", icon: "hard_drive", desc: "Impact-resistant hard hats, safety eyewear, and ear defenders for high-decibel machinery operations." },
      { id: "04", title: "Specialist RPE & Hand Protection", icon: "sanitizer", desc: "Cut-resistant safety gloves and Respiratory Protective Equipment (RPE) for dusty or silica environments." }
    ],
    checklist: [
      "100% Mandatory Enforcement of Class 3 Hi-Vis Gear",
      "EN ISO Certified Footwear with Steel/Composite Toes",
      "Routine Operative PPE Condition Inspections & Free Replacements",
      "Task-Specific RPE & Hearing Protection Mandatory Compliance"
    ]
  },

  "toolbox-talks": {
    id: "toolbox-talks",
    title: "Toolbox Talks",
    badge: "Continuous Safety Training",
    icon: "groups",
    bgImage: ukWorkersSiteImg,
    headline: "Weekly Operative Toolbox Talks",
    description: "Structured weekly refresher sessions covering specific operational hazards—such as underground cable avoidance, manual handling, noise control, and heat stress.",
    overviewP1: "Toolbox Talks are short, interactive 15-minute safety presentations delivered on site. They refresh operatives' knowledge on critical safety topics and address recent industry safety trends.",
    overviewP2: "Topics rotate weekly, covering excavator safety, silica dust suppression, trench shoring, CAT & Genny refresher courses, and mental health awareness.",
    pillars: [
      { id: "01", title: "15-Minute Interactive Weekly Topics", icon: "timer", desc: "Focused, digestible presentations covering essential field safety skills directly on site." },
      { id: "02", title: "Real-World Case Studies", icon: "menu_book", desc: "Analyzing real industry incidents to highlight practical hazard prevention techniques." },
      { id: "03", title: "Operative Knowledge Checks", icon: "quiz", desc: "Engaging operatives in Q&A discussions to confirm topic comprehension." },
      { id: "04", title: "EUSR Continuous Professional Development", icon: "history_edu", desc: "Logging completed toolbox talks toward operative training records and card renewals." }
    ],
    checklist: [
      "Weekly Scheduled Site Toolbox Talks Across All Teams",
      "Rotating Operational Topics (Cable Avoidance, Manual Handling, Excavations)",
      "Interactive Q&A & Practical Knowledge Verification",
      "Formal Operative Attendance Tracking Records"
    ]
  },

  "nrswa": {
    id: "nrswa",
    title: "NRSWA Compliance",
    badge: "Street Works Regulations",
    icon: "traffic",
    bgImage: complianceBg,
    headline: "New Roads and Street Works Act (NRSWA) Accreditation",
    description: "Full compliance with NRSWA regulations for all highway excavations, traffic management setups, barrier installations, and pedestrian diversion pathways.",
    overviewP1: "Working on public highways demands strict adherence to the New Roads and Street Works Act 1991 (NRSWA) and the Safety at Street Works and Road Works Code of Practice.",
    overviewP2: "We guarantee that every active street works team is supervised by a certified NRSWA Supervisor and operated by accredited NRSWA Operatives holding valid Street Works cards.",
    pillars: [
      { id: "01", title: "Certified NRSWA Operatives & Supervisors", icon: "badge", desc: "100% card-carrying NRSWA qualified workforce managing street openings and reinstatements." },
      { id: "02", title: "Safety Code of Practice Signage & Barriers", icon: "traffic", desc: "Compliant Chapter 8 traffic management, retro-reflective signage, safety barriers, and ramps." },
      { id: "03", title: "Pedestrian & DDA Access Provisions", icon: "accessible", desc: "Maintaining safe, barrier-protected pedestrian walkways with ramps for wheelchair and pushchair accessibility." },
      { id: "04", title: "SROH Reinstatement Execution", icon: "layers", desc: "Compaction testing, material layering, and hot bituminous reinstatement in full accordance with SROH." }
    ],
    checklist: [
      "100% NRSWA Qualified Supervisors & Operatives on Highway Sites",
      "Full Chapter 8 Traffic Management & Signage Compliance",
      "Accessible Pedestrian Ramps & DDA Standard Diversions",
      "Rigorous SROH Highway Reinstatement Execution"
    ]
  },

  "training": {
    id: "training",
    title: "Training",
    badge: "Workforce Competency",
    icon: "school",
    bgImage: sustainabilityHeroBg,
    headline: "Mandatory Training, EUSR & CSCS Qualifications",
    description: "Comprehensive training verification ensuring every operative holds valid EUSR cards, CSCS accreditation, NRSWA tickets, and emergency first aid certifications.",
    overviewP1: "A safe site starts with a highly skilled, certified workforce. Bluegrid Utilities maintains rigorous training verification procedures before deploying any worker to a project site.",
    overviewP2: "We partner with accredited training providers to offer continuous skill development, card renewals, and specialized certifications in water hygiene, cable avoidance, and plant operation.",
    pillars: [
      { id: "01", title: "EUSR National Water Hygiene Cards", icon: "card_membership", desc: "Mandatory accreditation for operatives working on clean water mains and metering infrastructure." },
      { id: "02", title: "CSCS Construction Skills Certification", icon: "badge", desc: "Universal CSCS card verification confirming basic health and safety awareness for all site staff." },
      { id: "03", title: "CAT & Genny Operator Certification", icon: "radar", desc: "Specialist training in underground utility detection equipment to eliminate cable strikes." },
      { id: "04", title: "First Aid & Mental Health First Aiders", icon: "health_and_safety", desc: "Investing in certified site first aiders and trained mental health champions for holistic worker well-being." }
    ],
    checklist: [
      "100% Verified EUSR & CSCS Qualifications Before Deployment",
      "Certified CAT & Genny Cable Avoidance Operators",
      "Regular Training Card Expiry Tracking & Automated Renewal",
      "On-Site First Aid & Mental Health Support Personnel"
    ]
  },

  "monitoring": {
    id: "monitoring",
    title: "Continuous Monitoring",
    badge: "KPIs & Performance Tracking",
    icon: "monitoring",
    bgImage: utilityGridImg,
    headline: "Real-time Safety KPI Monitoring & Reporting",
    description: "Continuous monitoring of key safety metrics including Lost Time Incident Frequency (LTIFR), audit pass rates, and training compliance across all active projects.",
    overviewP1: "We believe that what gets measured gets managed. Bluegrid Utilities tracks safety data continuously using digital dashboards to identify trends, benchmark performance, and eliminate systemic risks.",
    overviewP2: "Senior leadership reviews monthly safety scorecards, evaluating near-miss reporting volume, site audit grades, vehicle telemetry safety scores, and training compliance metrics.",
    pillars: [
      { id: "01", title: "Lost Time Incident Frequency Rate (LTIFR)", icon: "speed", desc: "Tracking zero-harm milestones and measuring accident frequency rates against national industry benchmarks." },
      { id: "02", title: "Vehicle Telemetry & Driver Safety Monitoring", icon: "directions_car", desc: "GPS telemetry tracking speed, harsh braking, and driver behavior across our utility vehicle fleet." },
      { id: "03", title: "Real-time Safety KPI Dashboards", icon: "dashboard", desc: "Executive level reporting displaying audit pass rates, open corrective actions, and hazard trends." },
      { id: "04", title: "Continuous Improvement Action Plans", icon: "trending_up", desc: "Translating data insights into immediate policy updates, toolbox talk topics, and field retraining." }
    ],
    checklist: [
      "Real-time Digital Safety KPI Executive Dashboard",
      "Zero Lost Time Injury Target (LTIFR Tracking)",
      "Utility Fleet GPS Telemetry & Safe Driving Scoring",
      "Monthly Senior Executive Safety Review Meetings"
    ]
  },

  "behavioural-safety": {
    id: "behavioural-safety",
    title: "Behavioural Safety",
    badge: "Culture of Care",
    icon: "psychology",
    bgImage: sustainabilityBannerImg,
    headline: "Behavioural Safety Culture & Positive Interventions",
    description: "Fostering a proactive safety culture where every operative has full authority to stop unsafe work ('Stop Work Authority') and actively protect their team members.",
    overviewP1: "True safety excellence goes beyond rules and compliance paperwork—it is rooted in human behavior, open communication, and mutual care.",
    overviewP2: "Our Behavioural Safety program focuses on positive reinforcement, peer-to-peer coaching, and breaking down traditional barriers so workers feel confident speaking up.",
    pillars: [
      { id: "01", title: "Unconditional Stop Work Authority", icon: "do_not_distribute", desc: "Every worker has the right and responsibility to halt any job if they feel safety is compromised." },
      { id: "02", title: "Peer-to-Peer Safety Coaching", icon: "supervisor_account", desc: "Encouraging team members to watch out for each other and gently correct unsafe habits in real time." },
      { id: "03", title: "Positive Safety Reinforcement", icon: "star", desc: "Recognizing and rewarding workers who consistently demonstrate exemplary safety behaviors." },
      { id: "04", title: "Open Door Safety Dialogue", icon: "forum", desc: "Direct channels between field teams and safety managers to suggest equipment or workflow improvements." }
    ],
    checklist: [
      "100% Management Support for Worker Stop Work Authority",
      "Peer-to-Peer Safety Coaching & Intervention Training",
      "Monthly Safety Champion Recognition & Rewards",
      "Transparent Operative-to-Management Communication Channels"
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
        <div className="relative rounded-none overflow-hidden bg-brand-dark p-8 md:p-14 lg:p-20 text-white shadow-2xl border-l-8 border-l-[#005f9e] border-y border-r border-slate-800">
          {/* Background Image with Gradient Overlay */}
          <div className="absolute inset-0 z-0">
            <img 
              src={currentSection.bgImage} 
              alt={currentSection.title} 
              className="w-full h-full object-cover opacity-45 transition-all duration-700 scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/95 via-brand-dark/80 to-[#005f9e]/60 mix-blend-multiply" />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-90" />
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
              <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-none p-3.5 text-left border-l-2 border-l-blue-400">
                <p className="text-[10px] text-blue-200 uppercase tracking-widest font-bold font-outfit">Standards</p>
                <p className="text-xs md:text-sm font-bold text-white">ISO 45001 & 14001</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-none p-3.5 text-left border-l-2 border-l-emerald-400">
                <p className="text-[10px] text-blue-200 uppercase tracking-widest font-bold font-outfit">Target</p>
                <p className="text-xs md:text-sm font-bold text-emerald-400">Zero Harm Operations</p>
              </div>
              <div className="col-span-2 sm:col-span-1 bg-white/10 backdrop-blur-md border border-white/15 rounded-none p-3.5 text-left border-l-2 border-l-blue-400">
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
        <div className="bg-white border border-slate-250 rounded-none p-8 md:p-12 lg:p-16 shadow-xl border-l-8 border-l-[#005f9e]">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Narrative */}
            <div className="lg:col-span-7 text-left space-y-6">
              <div className="w-14 h-14 rounded-none bg-brand-primary/10 text-brand-primary flex items-center justify-center border-l-2 border-l-brand-primary">
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
                  <span className="px-3 py-1 rounded-none bg-white/20 backdrop-blur-md text-xs font-bold uppercase tracking-wider font-outfit border-l-2 border-l-white">
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
            <span className="inline-block px-4 py-1.5 rounded-none bg-brand-primary/10 text-brand-primary text-xs md:text-sm font-bold tracking-wide mb-3 font-outfit uppercase border-l-2 border-l-brand-primary">
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
                className="bg-white border border-slate-200/80 rounded-none p-8 md:p-10 shadow-lg hover:shadow-2xl hover:border-brand-primary/30 transition-all duration-300 flex flex-col justify-between space-y-6 relative overflow-hidden group border-l-4 border-l-[#005f9e]"
              >
                <span className="absolute top-4 right-8 text-7xl font-black text-slate-100 group-hover:text-slate-200/60 transition-colors pointer-events-none font-outfit">
                  {pillar.id}
                </span>

                <div className="w-14 h-14 rounded-none bg-blue-50 text-brand-primary flex items-center justify-center group-hover:bg-[#005f9e] group-hover:text-white transition-all duration-300 z-10 border-l-2 border-l-brand-primary">
                  <span className="material-symbols-outlined text-2xl font-bold">{pillar.icon}</span>
                </div>

                <div className="space-y-3 z-10">
                  <h4 className="text-xl font-bold text-brand-dark font-outfit group-hover:text-brand-primary transition-colors">
                    {pillar.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed font-sans font-normal">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Special Sustainability & Local Recruitment Cards when Environmental Protection is active */}
        {activeTab === 'environmental-protection' && (
          <div className="bg-emerald-950 text-white rounded-none p-8 md:p-14 lg:p-16 shadow-2xl relative overflow-hidden space-y-12 border-l-8 border-l-emerald-500 border-y border-r border-emerald-900">
            <div className="absolute inset-0 opacity-20 pointer-events-none">
              <img src={environmentalPolicyBg} alt="Background" className="w-full h-full object-cover" />
            </div>

            <div className="relative z-10 max-w-3xl text-left space-y-4">
              <span className="px-4 py-1.5 rounded-none bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-bold tracking-wider font-outfit uppercase border-l-2 border-l-emerald-400">
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
              <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-none p-8 space-y-4 border-l-4 border-l-emerald-400">
                <div className="w-12 h-12 rounded-none bg-emerald-400/20 text-emerald-300 flex items-center justify-center">
                  <span className="material-symbols-outlined text-2xl">co2</span>
                </div>
                <h4 className="text-xl font-bold font-outfit text-white">Carbon Footprint Reduction</h4>
                <p className="text-emerald-100 text-sm leading-relaxed font-sans">
                  Deploying local field squads minimizes daily travel mileage, drastically lowering vehicle emissions and fuel consumption across UK utility contracts.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-none p-8 space-y-4 border-l-4 border-l-emerald-400">
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
        <div className="bg-gradient-to-br from-brand-dark via-[#0f3a5e] to-[#005f9e] rounded-none p-8 md:p-12 lg:p-16 text-white shadow-2xl text-left space-y-8 relative overflow-hidden border-l-8 border-l-blue-400">
          <div className="relative z-10 max-w-3xl space-y-3">
            <span className="px-4 py-1.5 rounded-none bg-white/15 text-blue-200 text-xs font-bold tracking-wider font-outfit uppercase border-l-2 border-l-white">
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
              <div key={idx} className="bg-white/10 backdrop-blur-md border border-white/15 rounded-none p-5 flex items-start gap-4 border-l-2 border-l-emerald-400">
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