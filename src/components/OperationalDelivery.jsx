import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import MotionSection from './MotionSection';

// Real Local Photographs from assets
import heroBg from '../assets/images/utilityworksupply.jpeg';
import ctaBg from '../assets/images/work_with_us.png';
import workersSiteImg from '../assets/images/uk_utility_workers_site.png';
import gridWorkImg from '../assets/images/utility_grid_work.png';
import trainingImg from '../assets/images/Training coordination and deployment planning.jpg';
import complianceImg from '../assets/images/Workforce onboarding and compliance verification.jpg';
import projectCoordImg from '../assets/images/Project coordination and reporting.jpg';
import projectCordJpeg from '../assets/images/projectcordination.jpeg';
import waterMeterImg from '../assets/images/water meter suoort bluegrids.jpeg';
import telecomsImg from '../assets/images/Telecoms and field operations support.jfif';
import infraImg from '../assets/images/infrastructure.jpeg';
import infraSupportImg from '../assets/images/Utility infrastructure support.jpg';
import mapImg from '../assets/images/uk_service_map.png';
import safetyBg from '../assets/images/safety_bg.png';

// 1. Ongoing Mobilisation Data
const ongoingMobilisationPhases = [
  {
    id: "current-mobilisation",
    title: "Current Mobilisation",
    status: "ACTIVE DISPATCH",
    desc: "Strategic deployment of qualified meter operatives and utility squads across UK regional water authorities.",
    img: workersSiteImg,
    highlights: ["40+ Operatives Dispatched", "72-Hour Rapid Rollout", "Regional Coordination"]
  },
  {
    id: "training-programme",
    title: "Training Programme",
    status: "IN PROGRESS",
    desc: "Structured academy training delivering fully funded EUSR cards, NRSWA tickets, and cable avoidance certifications.",
    img: trainingImg,
    highlights: ["EUSR Water Hygiene", "NRSWA Supervisor Tickets", "CAT & Genny Training"]
  },
  {
    id: "site-preparation",
    title: "Site Preparation",
    status: "PRE-START STAGE",
    desc: "Comprehensive pre-work surveying, underground utility mapping, and site safety perimeter setups.",
    img: infraImg,
    highlights: ["Utility Hazard Mapping", "CAT Scan Validation", "Access Planning"]
  },
  {
    id: "operational-readiness",
    title: "Operational Readiness",
    status: "READY FOR FIELD",
    desc: "Strict verification of calibrated testing gear, specialized tools, PPE compliance, and fleet logistics.",
    img: complianceImg,
    highlights: ["100% RAMS Verification", "Tooling Audits", "PPE & Van Inspection"]
  },
  {
    id: "workforce-development",
    title: "Workforce Development",
    status: "CONTINUOUS",
    desc: "Ongoing operative mentorship, multi-skill career progression, and quality assurance monitoring.",
    img: heroBg,
    highlights: ["Senior Mentorship", "Multi-Skill Upgrade", "Performance Reviews"]
  },
  {
    id: "equipment-deployment",
    title: "Equipment Deployment",
    status: "ACTIVE LOGISTICS",
    desc: "Dispatch of specialized metering tools, street works barriers, and calibrated pressure testing equipment.",
    img: telecomsImg,
    highlights: ["Calibrated Test Rigs", "Street Work Barriers", "Mobile Tech Support"]
  },
  {
    id: "health-safety-induction",
    title: "Health & Safety Induction",
    status: "MANDATORY DAILY",
    desc: "On-site daily briefings, site-specific RAMS reviews, and zero-harm hazard awareness protocols.",
    img: safetyBg,
    highlights: ["Daily Toolbox Talks", "Zero Harm Standard", "Environmental Checks"]
  },
  {
    id: "project-mobilisation",
    title: "Project Mobilisation",
    status: "ON-SITE LEADERSHIP",
    desc: "Full integration of Bluegrid supervisors and field leads with client contract management teams.",
    img: projectCoordImg,
    highlights: ["Dedicated Supervisors", "Live KPI Dashboards", "Handover Protocols"]
  }
];

// 2. Completed Works Case Studies Data (Before, During, After)
const completedCaseStudies = [
  {
    id: "cs-water-metering",
    title: "Clean Water Smart Metering Rollout",
    category: "Meter Infrastructure & Distribution",
    customer: "Regional Water Authority (UK)",
    period: "2025 - 2026",
    heroImg: waterMeterImg,
    challenges: "Replacing 50,000 legacy mechanical meters in dense urban areas under strict SLAs without disrupting domestic water supply.",
    solution: "Mobilized 40+ EUSR-certified meter operatives, deployed regional coordinators, and established real-time quality assurance telemetry.",
    results: "50,000+ smart meters installed with 99.8% customer satisfaction and 0 lost-time incidents over 12 months.",
    timeline: [
      {
        stage: "BEFORE",
        title: "Initial Site Survey & Asset Audit",
        desc: "High non-revenue water loss and aging mechanical meter infrastructure requiring urgent digital upgrade.",
        img: workersSiteImg
      },
      {
        stage: "DURING",
        title: "Active Field Operations & Installation",
        desc: "Rapid deployment of accredited squads executing street works under strict NRSWA safety guidelines.",
        img: gridWorkImg
      },
      {
        stage: "AFTER",
        title: "Commissioned Smart Meter Network",
        desc: "Fully digitized clean water distribution network delivering real-time telemetry and leakage alerts.",
        img: projectCordJpeg
      }
    ]
  },
  {
    id: "cs-utility-trenching",
    title: "Underground Utility Ducting & Street Works",
    category: "Civil & Infrastructure Support",
    customer: "National Utility Framework Lead",
    period: "2025",
    heroImg: infraSupportImg,
    challenges: "Navigating highly congested underground gas, water, and power networks demanding zero-strike compliance under NRSWA.",
    solution: "Deployed senior cable avoidance supervisors, CAT & Genny scanning teams, and structured daily RAMS briefings.",
    results: "120km of utility ducting completed 2 weeks ahead of target deadline with zero statutory non-conformances.",
    timeline: [
      {
        stage: "BEFORE",
        title: "Pre-Work Surveying & Utility Mapping",
        desc: "Complex urban underground utility congestion requiring detailed risk assessment and trial holes.",
        img: infraImg
      },
      {
        stage: "DURING",
        title: "Trenching & Excavation Operations",
        desc: "Precision ducting execution with continuous CAT & Genny cable location and supervisor monitoring.",
        img: telecomsImg
      },
      {
        stage: "AFTER",
        title: "Reinstated Site & Statutory Sign-off",
        desc: "Full road surface reinstatement adhering to highway authority specifications and client handover.",
        img: infraSupportImg
      }
    ]
  },
  {
    id: "cs-workforce-academy",
    title: "EUSR & NRSWA Workforce Training & Deployment",
    category: "Workforce & Compliance Academy",
    customer: "Tier-1 Utility Contractor Network",
    period: "2024 - 2026",
    heroImg: trainingImg,
    challenges: "Field operative skill gaps and high compliance audit failure rates in contract labor forces.",
    solution: "End-to-end Bluegrid academy training covering EUSR water hygiene, NRSWA tickets, and hands-on site mentorship.",
    results: "100% certified workforce retention and zero safety audit non-conformances over 12 months.",
    timeline: [
      {
        stage: "BEFORE",
        title: "Operative Vetting & Onboarding",
        desc: "Rigorous background checks, eligibility validation, and baseline safety skill evaluation.",
        img: complianceImg
      },
      {
        stage: "DURING",
        title: "Practical Academy Training",
        desc: "Intensive training modules covering EUSR cards, cable avoidance, and customer service standards.",
        img: trainingImg
      },
      {
        stage: "AFTER",
        title: "Full Field Integration",
        desc: "High-performing, fully ticketed utility workforce deployed directly into client operational frameworks.",
        img: heroBg
      }
    ]
  }
];

// 3. Photo Gallery Data
const galleryItems = [
  { id: 1, title: "Field Operatives On Site", category: "MOBILISATION", img: workersSiteImg },
  { id: 2, title: "Grid & Trenching Works", category: "ON-SITE", img: gridWorkImg },
  { id: 3, title: "EUSR Training Sessions", category: "TRAINING", img: trainingImg },
  { id: 4, title: "Compliance & RAMS Audits", category: "TRAINING", img: complianceImg },
  { id: 5, title: "On-Site Coordination", category: "MOBILISATION", img: projectCoordImg },
  { id: 6, title: "Clean Water Metering Squad", category: "COMPLETED", img: waterMeterImg },
  { id: 7, title: "Telecoms Logistics Unit", category: "ON-SITE", img: telecomsImg },
  { id: 8, title: "Utility Infrastructure Site", category: "COMPLETED", img: infraSupportImg }
];

const OperationalDelivery = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(completedCaseStudies[0].id);
  const [galleryFilter, setGalleryFilter] = useState('ALL');
  const [lightboxImage, setLightboxImage] = useState(null);

  const filteredGallery = galleryFilter === 'ALL' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === galleryFilter);

  const activeCaseStudyObj = completedCaseStudies.find(cs => cs.id === selectedCaseStudy);

  return (
    <div className="font-sans bg-slate-50/40 min-h-screen text-slate-800 pb-20">
      
      {/* 1. LARGE HERO BANNER WITH CONTENT INSIDE PICS */}
      <MotionSection 
        as="section" 
        className="relative min-h-[550px] md:min-h-[620px] flex items-end overflow-hidden bg-slate-950 mb-16" 
        id="projects-hero"
        initial="hidden"
        animate="visible"
      >
        {/* Large Background Picture */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroBg} 
            alt="Utility Project Operations" 
            className="w-full h-full object-cover filter brightness-[0.95] contrast-[1.02] scale-105"
          />
          {/* Subtle gradient overlay for text legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/40 to-slate-950/10" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/70 via-transparent to-transparent" />
        </div>

        {/* Content INSIDE the Hero Picture */}
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10 py-16 w-full">
          <div className="max-w-4xl">
            <span className="inline-block px-4 py-1.5 bg-[#005f9e] text-white text-xs font-bold tracking-widest uppercase mb-6 font-outfit shadow-lg">
              PROJECT PORTFOLIO
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight font-outfit mb-6 drop-shadow-md">
              Utility Project Operations & Completed Case Studies
            </h1>
            <p className="text-slate-200 text-base md:text-xl max-w-2xl leading-relaxed font-sans font-medium mb-10 drop-shadow">
              Real-time operational mobilisation, workforce readiness, and verified project case studies delivered across UK clean water and utility networks.
            </p>

            {/* Floating Glassmorphism Metric Cards INSIDE Hero Pic */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-white/20">
              <div className="bg-white/10 backdrop-blur-md p-5 border border-white/20 rounded-none">
                <div className="text-3xl font-extrabold text-white font-outfit">50,000+</div>
                <div className="text-xs text-slate-200 uppercase tracking-wider font-semibold mt-1 font-outfit">Meters Installed</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-5 border border-white/20 rounded-none">
                <div className="text-3xl font-extrabold text-sky-400 font-outfit">100%</div>
                <div className="text-xs text-slate-200 uppercase tracking-wider font-semibold mt-1 font-outfit">RAMS Audit Compliance</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-5 border border-white/20 rounded-none">
                <div className="text-3xl font-extrabold text-white font-outfit">72 Hours</div>
                <div className="text-xs text-slate-200 uppercase tracking-wider font-semibold mt-1 font-outfit">Rapid Mobilisation</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-5 border border-white/20 rounded-none">
                <div className="text-3xl font-extrabold text-emerald-400 font-outfit">0 LTI</div>
                <div className="text-xs text-slate-200 uppercase tracking-wider font-semibold mt-1 font-outfit">Zero Harm Record</div>
              </div>
            </div>
          </div>
        </div>
      </MotionSection>

      {/* 2. SUB-HEADER FILTER TABS BAR (GENEROUS WHITE SPACE) */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-10 mb-20">
        <div className="bg-white border border-slate-200/90 p-3 shadow-sm">
          <div className="flex flex-nowrap items-center gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            {[
              { id: 'all', label: 'ALL PORTFOLIO' },
              { id: 'ongoing', label: 'ONGOING MOBILISATION' },
              { id: 'completed', label: 'COMPLETED WORKS & CASE STUDIES' },
              { id: 'maps', label: 'MAPS & STATISTICS' },
              { id: 'gallery', label: 'PROJECT GALLERY' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-3 whitespace-nowrap shrink-0 text-xs font-bold font-outfit tracking-wider transition-all duration-200 uppercase ${
                  activeTab === tab.id
                    ? 'bg-[#005f9e] text-white shadow-sm'
                    : 'bg-slate-50 text-[#0f3a5e] hover:bg-slate-100 hover:text-[#005f9e]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 3. ONGOING MOBILISATION PHASES - LARGE PHOTO CARDS WITH CONTENT INSIDE PICS */}
      {(activeTab === 'all' || activeTab === 'ongoing') && (
        <MotionSection as="section" className="max-w-[1400px] mx-auto px-6 lg:px-10 mb-32" id="ongoing-works">
          <div className="mb-14">
            <span className="text-xs font-bold tracking-widest text-[#005f9e] uppercase font-outfit block mb-2">
              LIVE FIELD OPERATIONS
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 font-outfit">
              Ongoing Mobilisation & Operational Readiness
            </h2>
            <p className="text-slate-600 text-base md:text-lg max-w-2xl mt-3 leading-relaxed">
              Structured operational stages featuring pre-vetted squads, calibrated equipment, and full RAMS compliance prior to site work.
            </p>
          </div>

          {/* Spacious Grid with Clear Photo Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {ongoingMobilisationPhases.map((phase) => (
              <div 
                key={phase.id}
                onClick={() => setLightboxImage({ img: phase.img, title: phase.title, category: phase.status })}
                className="bg-white border border-slate-200 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col overflow-hidden group cursor-pointer text-left min-h-[480px]"
              >
                {/* Clear Top Image - 100% Bright & Clear */}
                <div className="relative h-[280px] md:h-[300px] w-full overflow-hidden bg-slate-100">
                  <img 
                    src={phase.img} 
                    alt={phase.title} 
                    className="w-full h-full object-cover filter brightness-[0.98] contrast-[1.02] group-hover:scale-105 transition-all duration-500 ease-out"
                  />
                  
                  {/* Top Status Badge */}
                  <div className="absolute top-5 left-5 z-10">
                    <span className="bg-[#005f9e] text-white text-[11px] font-extrabold px-3.5 py-1.5 font-outfit uppercase tracking-widest shadow-md">
                      {phase.status}
                    </span>
                  </div>
                </div>

                {/* Content Body Below Image */}
                <div className="p-8 flex flex-col justify-between flex-1 bg-white border-t border-slate-100">
                  <div>
                    <h3 className="text-2xl font-bold font-outfit mb-3 text-slate-900 group-hover:text-[#005f9e] transition-colors leading-snug">
                      {phase.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-6 font-medium">
                      {phase.desc}
                    </p>

                    {/* Highlights / Milestones */}
                    <div className="pt-4 border-t border-slate-100 space-y-2">
                      {phase.highlights.map((item, idx) => (
                        <div key={idx} className="flex items-center text-xs font-semibold text-slate-700">
                          <span className="w-1.5 h-1.5 bg-[#005f9e] rounded-full mr-2 shrink-0"></span>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </MotionSection>
      )}

      {/* 4. COMPLETED WORKS & CASE STUDIES - LARGE PHOTO BANNERS WITH CONTENT INSIDE PICS */}
      {(activeTab === 'all' || activeTab === 'completed') && (
        <MotionSection as="section" className="bg-white py-24 border-y border-slate-200 mb-32" id="completed-works">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <div className="mb-14">
              <span className="text-xs font-bold tracking-widest text-[#005f9e] uppercase font-outfit block mb-2">
                VERIFIED OUTCOMES
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 font-outfit">
                Completed Works & Project Case Studies
              </h2>
              <p className="text-slate-600 text-base md:text-lg max-w-2xl mt-3 leading-relaxed">
                Authentic, documented utility completions featuring transparent timelines across Before, During, and After operational phases.
              </p>
            </div>

            {/* Case Study Selector Buttons */}
            <div className="flex flex-nowrap items-center gap-2 lg:gap-3 mb-12 border-b border-slate-200 pb-6 overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
              {completedCaseStudies.map((cs) => (
                <button
                  key={cs.id}
                  onClick={() => setSelectedCaseStudy(cs.id)}
                  className={`px-4 py-2.5 lg:px-5 lg:py-3 text-xs lg:text-sm font-bold font-outfit uppercase tracking-wider whitespace-nowrap shrink-0 transition-all duration-200 border ${
                    selectedCaseStudy === cs.id
                      ? 'bg-[#005f9e] text-white border-[#005f9e] shadow-md'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-100'
                  }`}
                >
                  {cs.title}
                </button>
              ))}
            </div>

            {/* Active Case Study Feature Banner (Large Photo + Content INSIDE) */}
            {activeCaseStudyObj && (
              <div className="space-y-12">
                
                {/* Large Feature Banner Card */}
                {/* <div className="relative min-h-[380px] md:min-h-[440px] flex items-end p-8 md:p-12 overflow-hidden bg-slate-950 shadow-lg border border-slate-200">
              
                  <img 
                    src={activeCaseStudyObj.heroImg} 
                    alt={activeCaseStudyObj.title}
                    className="absolute inset-0 w-full h-full object-cover filter brightness-[0.95] contrast-[1.02]" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/45 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-transparent to-transparent" />

             
                  <div className="relative z-10 text-white w-full max-w-4xl">
                    <span className="text-xs font-bold text-sky-300 uppercase tracking-widest font-outfit block mb-2">
                      {activeCaseStudyObj.category} • {activeCaseStudyObj.customer}
                    </span>
                    <h3 className="text-3xl md:text-5xl font-extrabold font-outfit mb-6 text-white leading-tight">
                      {activeCaseStudyObj.title}
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-white/20">
                      <div className="bg-white/10 backdrop-blur-md p-5 border border-white/20">
                        <span className="text-xs font-bold text-amber-300 uppercase tracking-wider block font-outfit mb-1">
                          Project Challenges
                        </span>
                        <p className="text-slate-200 text-xs md:text-sm leading-relaxed">
                          {activeCaseStudyObj.challenges}
                        </p>
                      </div>

                      <div className="bg-white/10 backdrop-blur-md p-5 border border-white/20">
                        <span className="text-xs font-bold text-sky-300 uppercase tracking-wider block font-outfit mb-1">
                          Bluegrid Solution & Results
                        </span>
                        <p className="text-slate-200 text-xs md:text-sm leading-relaxed">
                          {activeCaseStudyObj.solution}
                        </p>
                      </div>
                    </div>
                  </div>
                </div> */}

                {/* Case Study Timeline: BEFORE, DURING, AFTER */}
                <div>
                  <h4 className="text-2xl font-bold text-slate-900 font-outfit mb-8 uppercase tracking-wider border-l-4 border-[#005f9e] pl-4">
                    Case Study Lifecycle: Before, During & After
                  </h4>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {activeCaseStudyObj.timeline.map((step, idx) => (
                      <div 
                        key={idx} 
                        onClick={() => setLightboxImage({ img: step.img, title: step.title, category: `STAGE: ${step.stage}` })}
                        className="bg-white border border-slate-200 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col overflow-hidden group cursor-pointer text-left min-h-[440px]"
                      >
                        {/* Clear Top Image - Enlarged & Clickable */}
                        <div className="relative h-[280px] md:h-[320px] w-full overflow-hidden bg-slate-100">
                          <img 
                            src={step.img} 
                            alt={step.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                          />
                          {/* Stage Tag Badge */}
                          <div className="absolute top-5 left-5 z-10">
                            <span className="bg-[#005f9e] text-white text-xs font-extrabold px-4 py-2 uppercase tracking-widest font-outfit shadow-md">
                              {step.stage}
                            </span>
                          </div>
                        </div>

                        {/* Narrative Content Body Below Image - Enlarged */}
                        <div className="p-8 flex flex-col justify-between flex-1 bg-white border-t border-slate-100">
                          <div>
                            <h5 className="font-bold text-slate-900 text-2xl font-outfit mb-4 group-hover:text-[#005f9e] transition-colors leading-snug">
                              {step.title}
                            </h5>
                            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
                              {step.desc}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            )}
          </div>
        </MotionSection>
      )}

      {/* 5. MAPS & REGIONAL STATISTICS (LARGE MAP BANNER WITH OVERLAYS) */}
      {(activeTab === 'all' || activeTab === 'maps') && (
        <MotionSection as="section" className="max-w-[1400px] mx-auto px-6 lg:px-10 mb-32" id="maps-statistics">
          <div className="mb-14">
            <span className="text-xs font-bold tracking-widest text-[#005f9e] uppercase font-outfit block mb-2">
              REGIONAL FOOTPRINT
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 font-outfit">
              UK Coverage Maps & Operational Metrics
            </h2>
            <p className="text-slate-600 text-base md:text-lg max-w-2xl mt-3 leading-relaxed">
              Nationwide dispatch capabilities across major UK utility water regions and infrastructure hubs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-white border border-slate-200 p-8 md:p-12 shadow-sm">
            {/* Left: Large Map Frame */}
            <div className="lg:col-span-7 bg-slate-100 border border-slate-200 p-6 flex items-center justify-center min-h-[440px]">
              <img 
                src={mapImg} 
                alt="UK Utility Operational Coverage Map" 
                className="w-full max-h-[500px] object-contain drop-shadow-md"
              />
            </div>

            {/* Right: Regional Hubs & Metrics */}
            <div className="lg:col-span-5 space-y-6">
              <h3 className="text-2xl font-bold text-slate-900 font-outfit border-b border-slate-200 pb-4">
                Regional Utility Deployment Hubs
              </h3>

              <div className="space-y-4">
                {[
                  { region: "London & South East", focus: "Clean Water Metering & Rapid Mobilisation", status: "Active Field Operations" },
                  { region: "Midlands Hub", focus: "EUSR Training Academy & Logistics Hub", status: "Operational Headquarters" },
                  { region: "North West & Yorkshire", focus: "Utility Infrastructure & Street Works", status: "Active Support Squads" },
                  { region: "Wales & South West", focus: "Emergency Meter Replacement & Audit QA", status: "Framework Operations" }
                ].map((item, idx) => (
                  <div key={idx} className="bg-slate-50 p-5 border border-slate-200/90 flex items-start justify-between">
                    <div>
                      <div className="font-bold text-slate-900 text-base font-outfit">{item.region}</div>
                      <div className="text-xs text-slate-500 mt-1 font-medium">{item.focus}</div>
                    </div>
                    <span className="text-[11px] font-bold text-[#005f9e] bg-blue-50 px-3 py-1 border border-blue-100 uppercase tracking-wider font-outfit shrink-0">
                      {item.status}
                    </span>
                  </div>
                ))}
              </div>

              {/* Statistics Summary */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-200">
                <div className="text-center p-4 bg-slate-50 border border-slate-200/80">
                  <div className="text-2xl font-bold text-[#005f9e] font-outfit">100%</div>
                  <div className="text-xs font-semibold text-slate-600 mt-1 font-outfit">Audit Compliance</div>
                </div>
                <div className="text-center p-4 bg-slate-50 border border-slate-200/80">
                  <div className="text-2xl font-bold text-[#005f9e] font-outfit">24/7</div>
                  <div className="text-xs font-semibold text-slate-600 mt-1 font-outfit">Field Dispatch</div>
                </div>
                <div className="text-center p-4 bg-slate-50 border border-slate-200/80">
                  <div className="text-2xl font-bold text-emerald-600 font-outfit">Zero</div>
                  <div className="text-xs font-semibold text-slate-600 mt-1 font-outfit">Utility Strikes</div>
                </div>
              </div>

            </div>
          </div>
        </MotionSection>
      )}

      {/* 6. PHOTO GALLERY - LARGE PHOTO TILES WITH OVERLAY CONTENT INSIDE PICS */}
      {(activeTab === 'all' || activeTab === 'gallery') && (
        <MotionSection as="section" className="max-w-[1400px] mx-auto px-6 lg:px-10 mb-32" id="project-gallery">
          <div className="mb-10">
            <span className="text-xs font-bold tracking-widest text-[#005f9e] uppercase font-outfit block mb-2">
              PHOTOGRAPHIC EVIDENCE
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 font-outfit">
              Operational Field Gallery
            </h2>
            <p className="text-slate-600 text-base md:text-lg max-w-2xl mt-3 leading-relaxed">
              Authentic photographs showcasing Bluegrid field operatives, training sessions, site preparation, and completed infrastructure.
            </p>
          </div>

          {/* Gallery Filter Buttons */}
          <div className="flex flex-wrap gap-2 mb-10">
            {['ALL', 'MOBILISATION', 'TRAINING', 'ON-SITE', 'COMPLETED'].map(cat => (
              <button
                key={cat}
                onClick={() => setGalleryFilter(cat)}
                className={`px-5 py-2.5 text-xs font-bold font-outfit uppercase tracking-wider transition-all duration-200 border ${
                  galleryFilter === cat
                    ? 'bg-[#005f9e] text-white border-[#005f9e] shadow-sm'
                    : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Enlarged Photo Tiles Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredGallery.map((item) => (
              <div 
                key={item.id}
                onClick={() => setLightboxImage(item)}
                className="bg-white border border-slate-200 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col overflow-hidden group cursor-pointer text-left min-h-[440px]"
              >
                {/* Clear Top Image - Enlarged */}
                <div className="relative h-[280px] md:h-[320px] w-full overflow-hidden bg-slate-100">
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Category Badge on Top Left of Image */}
                  <div className="absolute top-5 left-5 z-10">
                    <span className="bg-[#0a2540] text-white text-xs font-extrabold px-3.5 py-1.5 uppercase tracking-widest font-outfit shadow-md">
                      {item.category}
                    </span>
                  </div>
                </div>

                {/* Content Body Below Image - Enlarged */}
                <div className="p-7 flex flex-col justify-between flex-1 bg-white border-t border-slate-100">
                  <h4 className="font-bold text-slate-900 text-xl font-outfit group-hover:text-[#005f9e] transition-colors leading-snug">
                    {item.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </MotionSection>
      )}

      {/* LIGHTBOX MODAL */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxImage(null)}
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md p-4 md:p-10 flex items-center justify-center"
          >
            <div 
              onClick={(e) => e.stopPropagation()} 
              className="relative max-w-5xl w-full bg-slate-900 border border-slate-700 shadow-2xl overflow-hidden"
            >
              <button 
                onClick={() => setLightboxImage(null)}
                className="absolute top-4 right-4 z-20 bg-slate-800 hover:bg-slate-700 text-white w-10 h-10 flex items-center justify-center font-bold text-xl rounded-full transition-colors"
              >
                ✕
              </button>
              <div className="max-h-[78vh] overflow-hidden bg-black flex items-center justify-center">
                <img 
                  src={lightboxImage.img} 
                  alt={lightboxImage.title} 
                  className="max-h-[78vh] w-auto max-w-full object-contain"
                />
              </div>
              <div className="p-6 bg-slate-900 text-white flex items-center justify-between border-t border-slate-800">
                <div>
                  <span className="text-xs font-bold text-sky-400 uppercase tracking-widest font-outfit block mb-1">
                    {lightboxImage.category}
                  </span>
                  <h4 className="text-xl font-bold text-white font-outfit">
                    {lightboxImage.title}
                  </h4>
                </div>
                <button 
                  onClick={() => setLightboxImage(null)}
                  className="px-6 py-2.5 bg-[#005f9e] text-white text-xs font-bold uppercase tracking-wider font-outfit hover:bg-blue-600 transition-colors"
                >
                  Close Photo
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 7. BOTTOM CTA BANNER (LARGE PHOTO WITH OVERLAY CONTENT INSIDE) */}
      <MotionSection 
        as="section" 
        className="relative overflow-hidden min-h-[420px] flex items-center justify-center py-24 px-6 text-center font-sans border-t border-slate-200"
        id="projects-cta"
      >
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img 
            src={ctaBg} 
            alt="Work With Us" 
            className="w-full h-full object-cover filter brightness-[0.70] contrast-[1.05]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/60 to-transparent z-10" />
        </div>

        <div className="relative z-20 max-w-4xl mx-auto flex flex-col items-center justify-center text-white">
          <span className="inline-block px-4 py-1.5 bg-[#005f9e] text-white text-xs font-black uppercase tracking-widest mb-6 font-outfit shadow-md">
            PARTNER WITH BLUEGRID
          </span>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight mb-6 font-outfit max-w-3xl leading-tight text-white drop-shadow">
            Need Reliable Project <span className="text-sky-400">Execution</span> Support?
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-slate-300 mb-10 max-w-2xl leading-relaxed font-medium">
            From rapid field mobilisation and EUSR workforce training to verified completed case studies, our team is ready to deliver across UK clean water and utility networks.
          </p>

          <Link
            to="/contact"
            className="inline-flex items-center gap-3 bg-[#005f9e] hover:bg-white hover:text-slate-900 text-white transition-all duration-300 px-9 py-4 font-extrabold text-xs sm:text-sm uppercase tracking-widest font-outfit shadow-xl border border-[#005f9e] hover:border-white"
          >
            <span>Contact Our Team</span>
            <span className="transition-transform duration-300 group-hover:translate-x-1.5">➔</span>
          </Link>
        </div>
      </MotionSection>

    </div>
  );
};

export default OperationalDelivery;