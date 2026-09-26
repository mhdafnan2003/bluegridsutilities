import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import MotionSection from './MotionSection';
import PageSEO from './PageSEO';

// Authentic site photographs from assets
import heroBg from '../assets/images/utilityworksupply.jpeg';
import ctaBg from '../assets/images/updated/water_meter_installation.png';
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
import safetyBg from '../assets/images/safety_bg.png';

// Section 12: Project Delivery Stages (Authentic Operational Capabilities)
const operationalPhases = [
  {
    id: "phase-planning",
    title: "Planning & Scope Confirmation",
    stage: "STAGE 01 — PLAN",
    desc: "Confirm the work scope, project requirements, resources, RAMS, and documentation before field mobilisation.",
    img: projectCoordImg,
    deliverables: ["Scope Definition & Work Orders", "RAMS Review & Permit Acquisition", "Competency & Induction Checks"]
  },
  {
    id: "phase-mobilisation",
    title: "Field Resource Mobilisation",
    stage: "STAGE 02 — MOBILISE",
    desc: "Coordinate field resources, supervision, materials, PPE, and operational arrangements required for authorised activity.",
    img: complianceImg,
    deliverables: ["Supervised Squad Allocation", "Tooling & Vehicle Inspections", "Site Logistics & Route Coordination"]
  },
  {
    id: "phase-delivery",
    title: "Controlled Field Delivery",
    stage: "STAGE 03 — DELIVER",
    desc: "Carry out authorised activities in line with approved procedures, safety controls, and client instructions.",
    img: workersSiteImg,
    deliverables: ["Daily Site Hazard Controls", "Approved Method Adherence", "Customer Interface Standards"]
  },
  {
    id: "phase-verification",
    title: "Verification & Audit Reporting",
    stage: "STAGE 04 — VERIFY",
    desc: "Record completion evidence accurately, identify defects or issues, and follow through on required actions and escalation.",
    img: projectCordJpeg,
    deliverables: ["Photographic Completion Evidence", "Defect Logging & Follow-up", "Handover Documentation"]
  }
];

// Section 12: Case Study Structure / Template (Prepared for approved future publications)
const caseStudyTemplate = {
  templateNotice: "In line with our client confidentiality and governance standards, detailed case studies featuring specific client names, contracts, and performance statistics will be published once formal permissions and verified completion data are approved.",
  frameworkSteps: [
    {
      num: "01",
      title: "Project Scope & Context",
      desc: "Definition of project requirements, technical specifications, geographic boundary, and operational objectives as authorised by the client."
    },
    {
      num: "02",
      title: "Operational Mobilisation",
      desc: "Workforce allocation, supervisor appointment, tooling dispatch, and alignment with site-specific RAMS and highway permissions."
    },
    {
      num: "03",
      title: "Field Execution & Safety",
      desc: "Controlled delivery in live utility environments, customer interface management, safe digging protocols, and daily briefings."
    },
    {
      num: "04",
      title: "Quality Evidence & Handover",
      desc: "Digital photographic audit trails, serial logging, prompt escalation of variances, and verified defect-free completion records."
    }
  ]
};

// Section 12 & 69: Authentic Photo Gallery
const galleryItems = [
  { id: 1, title: "Field Squad Mobilisation", category: "MOBILISATION", img: workersSiteImg },
  { id: 2, title: "Supervised Field Coordination", category: "OPERATIONS", img: projectCordJpeg },
  { id: 3, title: "Workforce Induction & Briefings", category: "COMPLIANCE", img: trainingImg },
  { id: 4, title: "Documentation & Process Verification", category: "COMPLIANCE", img: complianceImg },
  { id: 5, title: "Project Coordination & Reporting", category: "MANAGEMENT", img: projectCoordImg },
  { id: 6, title: "Water Meter Installation Support", category: "FIELD DELIVERY", img: waterMeterImg },
  { id: 7, title: "Utility Logistics & Equipment", category: "OPERATIONS", img: telecomsImg }
];

const OperationalDelivery = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [galleryFilter, setGalleryFilter] = useState('ALL');
  const [lightboxImage, setLightboxImage] = useState(null);

  const filteredGallery = galleryFilter === 'ALL' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === galleryFilter);

  return (
    <div className="font-sans bg-slate-50/50 min-h-screen text-[#1f2937] pb-20">
      <PageSEO 
        customTitle="Utility Projects & Case Studies | Bluegrid Utilities"
        customDescription="Approved case studies showing how Bluegrid Utilities supports utility project mobilisation, field delivery and operational coordination."
      />

      {/* 1. HERO BANNER — Neutral dark overlay, no blue tinting */}
      <MotionSection 
        as="section" 
        className="relative min-h-[500px] md:min-h-[560px] flex items-end overflow-hidden bg-slate-950 mb-16" 
        id="projects-hero"
        initial="hidden"
        animate="visible"
      >
        <div className="absolute inset-0 z-0">
          <img 
            src={heroBg} 
            alt="Utility Projects & Case Studies" 
            className="w-full h-full object-cover filter brightness-[0.9] contrast-[1.02]"
          />
          {/* Neutral dark gradient overlay per project rules */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10 py-16 w-full text-left">
          <div className="max-w-4xl space-y-4">
            <span className="inline-block px-3.5 py-1.5 bg-[#005f9e] text-white text-xs font-bold tracking-widest uppercase font-outfit shadow-md">
              PROJECTS & CASE STUDIES
            </span>
            <h1 className="text-h1 md:text-h1-lg font-extrabold text-white tracking-tight font-outfit">
              Utility Projects & Case Studies
            </h1>
            <p className="text-body md:text-body-lg text-slate-200 max-w-3xl leading-relaxed font-medium">
              Approved case studies showing how Bluegrid Utilities supports utility project mobilisation, field delivery and operational coordination.
            </p>

            <div className="pt-4 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="text-nav px-7 py-3.5 bg-[#005f9e] hover:bg-[#004c80] text-white font-extrabold tracking-wide uppercase font-outfit transition-all shadow-md active:scale-95"
              >
                Discuss a Project
              </Link>
              <Link
                to="/services"
                className="text-nav px-7 py-3.5 bg-white/10 hover:bg-white hover:text-slate-900 text-white font-extrabold tracking-wide uppercase font-outfit border border-white/30 transition-all"
              >
                Our Capabilities
              </Link>
            </div>
          </div>
        </div>
      </MotionSection>

      {/* 2. NAVIGATION TABS */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-10 mb-16">
        <div className="bg-white border border-slate-200 p-2 shadow-sm flex flex-wrap items-center gap-2">
          {[
            { id: 'all', label: 'OVERVIEW' },
            { id: 'stages', label: 'DELIVERY STAGES' },
            { id: 'template', label: 'CASE STUDY FRAMEWORK' },
            { id: 'gallery', label: 'OPERATIONAL EVIDENCE' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`text-nav px-5 py-2.5 font-bold font-outfit tracking-wide uppercase transition-all ${
 activeTab === tab.id
 ? 'bg-[#005f9e] text-white shadow-sm'
 : 'bg-[#f3f7fa] text-[#0f3a5e] hover:bg-slate-100'
 }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </section>

      {/* 3. OPERATIONAL DELIVERY STAGES */}
      {(activeTab === 'all' || activeTab === 'stages') && (
        <MotionSection as="section" className="max-w-[1400px] mx-auto px-6 lg:px-10 mb-24" id="delivery-stages">
          <div className="text-left mb-12 max-w-3xl">
            <span className="text-xs font-bold tracking-widest text-[#005f9e] uppercase font-outfit block mb-2">
              Structured Methodology
            </span>
            <h2 className="text-h2 md:text-h2-lg font-extrabold text-[#0f3a5e] font-outfit">
              How We Deliver Authorised Work
            </h2>
            <p className="text-body md:text-body-lg text-[#1f2937] mt-2 leading-relaxed font-medium">
              We approach utility delivery through four disciplined stages designed to maintain safety, accuracy, and clear project visibility.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {operationalPhases.map((phase) => (
              <div
                key={phase.id}
                className="bg-white border border-slate-200 p-6 shadow-md flex flex-col justify-between border-t-4 border-t-[#005f9e]"
              >
                <div className="space-y-4">
                  <div className="relative h-44 w-full overflow-hidden bg-slate-100">
                    <img 
                      src={phase.img} 
                      alt={phase.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 left-3 bg-[#0f3a5e] text-white text-[10px] font-bold px-2.5 py-1 uppercase tracking-wider font-outfit">
                      {phase.stage}
                    </div>
                  </div>

                  <h3 className="text-h3 md:text-h3-lg font-bold text-[#0f3a5e] font-outfit">
                    {phase.title}
                  </h3>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium">
                    {phase.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 space-y-1.5">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block font-outfit">
                    Key Activities
                  </span>
                  {phase.deliverables.map((d, idx) => (
                    <div key={idx} className="flex items-center text-xs font-medium text-slate-700">
                      <span className="w-1.5 h-1.5 bg-[#005f9e] rounded-full mr-2 shrink-0" />
                      <span>{d}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </MotionSection>
      )}

      {/* 4. CASE STUDY FRAMEWORK & TEMPLATE (Section 12 of Roadmap) */}
      {(activeTab === 'all' || activeTab === 'template') && (
        <MotionSection as="section" className="max-w-[1400px] mx-auto px-6 lg:px-10 mb-24" id="case-study-template">
          <div className="bg-white border border-slate-200 p-8 sm:p-12 shadow-md text-left border-l-4 border-l-[#0f3a5e] max-w-5xl mx-auto space-y-8">
            <div>
              <span className="inline-block px-3.5 py-1 bg-[#005f9e]/10 text-[#005f9e] text-xs font-bold tracking-widest font-outfit uppercase border border-[#005f9e]/20 mb-3">
                Governance & Permissions
              </span>
              <h2 className="text-h2 md:text-h2-lg font-extrabold text-[#0f3a5e] font-outfit">
                Case Study Reporting Architecture
              </h2>
              <p className="text-body md:text-body-lg text-[#1f2937] leading-relaxed font-medium mt-2">
                {caseStudyTemplate.templateNotice}
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-h3 md:text-h3-lg font-bold text-[#0f3a5e] font-outfit border-b border-slate-100 pb-2 uppercase">
                Standard Project Case Study Structure
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm font-medium">
                When authorized project summaries are published, each case study adheres to this four-pillar factual format:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {caseStudyTemplate.frameworkSteps.map((step) => (
                  <div key={step.num} className="p-5 bg-[#f3f7fa] border border-slate-200 space-y-2">
                    <span className="text-lg font-black text-[#005f9e] font-outfit">
                      {step.num}
                    </span>
                    <h4 className="text-sm font-bold text-[#0f3a5e] font-outfit">
                      {step.title}
                    </h4>
                    <p className="text-slate-600 text-xs leading-relaxed font-medium">
                      {step.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-5 bg-blue-50/60 border border-blue-200/80 text-xs text-slate-700 font-medium">
              <strong>Publication Note:</strong> We respect contractual confidentiality across utility client supply chains. No commercial rates, confidential contractual relationships, or sensitive site details are released publicly.
            </div>
          </div>
        </MotionSection>
      )}

      {/* 5. AUTHENTIC PHOTOGRAPHIC EVIDENCE */}
      {(activeTab === 'all' || activeTab === 'gallery') && (
        <MotionSection as="section" className="max-w-[1400px] mx-auto px-6 lg:px-10 mb-24" id="project-gallery">
          <div className="text-left mb-8 max-w-3xl">
            <span className="text-xs font-bold tracking-widest text-[#005f9e] uppercase font-outfit block mb-2">
              Authentic Photography
            </span>
            <h2 className="text-h2 md:text-h2-lg font-extrabold text-[#0f3a5e] font-outfit">
              Operational Field Gallery
            </h2>
            <p className="text-body md:text-body-lg text-[#1f2937] mt-2 leading-relaxed font-medium">
              Photographs representing genuine utility activity, operatives, site coordination, and equipment handling.
            </p>
          </div>

          {/* Filter Chips */}
          <div className="flex flex-wrap gap-2 mb-8 text-left">
            {['ALL', 'MOBILISATION', 'OPERATIONS', 'COMPLIANCE', 'MANAGEMENT', 'FIELD DELIVERY'].map(cat => (
              <button
                key={cat}
                onClick={() => setGalleryFilter(cat)}
                className={`text-nav px-4 py-2 font-bold font-outfit uppercase tracking-wide transition-all border ${
 galleryFilter === cat
 ? 'bg-[#005f9e] text-white border-[#005f9e]'
 : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
 }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredGallery.map((item) => (
              <div
                key={item.id}
                onClick={() => setLightboxImage(item)}
                className="relative h-72 overflow-hidden group cursor-pointer text-left shadow-md hover:shadow-xl border border-slate-200 bg-slate-900"
              >
                <img 
                  src={item.img} 
                  alt={item.title}
                  className="w-full h-full object-cover filter brightness-[0.95] group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute top-3 left-3 bg-[#0f3a5e] text-white text-[10px] font-bold px-2.5 py-1 uppercase tracking-wider font-outfit border border-white/20">
                  {item.category}
                </div>
                <div className="absolute bottom-3 left-3 right-3 text-white font-bold text-sm sm:text-base font-outfit">
                  {item.title}
                </div>
              </div>
            ))}
          </div>
        </MotionSection>
      )}

      {/* Lightbox Modal */}
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
              className="relative max-w-4xl w-full bg-slate-900 border border-slate-700 shadow-2xl overflow-hidden text-left"
            >
              <button 
                onClick={() => setLightboxImage(null)}
                className="absolute top-4 right-4 z-20 bg-slate-800 hover:bg-slate-700 text-white w-9 h-9 flex items-center justify-center font-bold text-base rounded-full transition-colors cursor-pointer"
              >
                ✕
              </button>
              <div className="max-h-[75vh] bg-black flex items-center justify-center">
                <img 
                  src={lightboxImage.img} 
                  alt={lightboxImage.title} 
                  className="max-h-[75vh] w-auto max-w-full object-contain"
                />
              </div>
              <div className="p-5 bg-slate-900 text-white flex items-center justify-between border-t border-slate-800">
                <div>
                  <span className="text-[10px] font-bold text-[#005f9e] uppercase tracking-widest font-outfit block">
                    {lightboxImage.category}
                  </span>
                  <h4 className="text-base font-bold text-white font-outfit mt-0.5">
                    {lightboxImage.title}
                  </h4>
                </div>
                <button 
                  onClick={() => setLightboxImage(null)}
                  className="text-nav px-4 py-2 bg-[#005f9e] text-white font-bold uppercase tracking-wide font-outfit hover:bg-[#004c80] transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 6. BOTTOM CTA BANNER — Point 18 CTA: Discuss a Project */}
      <MotionSection 
        as="section" 
        className="relative overflow-hidden min-h-[380px] flex items-center justify-center py-20 px-6 text-center border-t border-slate-200"
        id="projects-cta"
      >
        <div className="absolute inset-0 z-0">
          <img 
            src={ctaBg} 
            alt="Utility field delivery" 
            className="w-full h-full object-cover filter brightness-[0.88]"
          />
          {/* Neutral dark gradient overlay per project rules */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/35 z-10" />
        </div>

        <div className="relative z-20 max-w-3xl mx-auto text-white space-y-4">
          <span className="inline-block px-3.5 py-1.5 bg-[#005f9e] text-white text-xs font-black uppercase tracking-widest font-outfit shadow-md">
            Project Delivery Support
          </span>
          <h2 className="text-h2 md:text-h2-lg font-extrabold uppercase tracking-tight font-outfit text-white">
            Discuss Your Project Requirements
          </h2>
          <p className="text-body md:text-body-lg text-slate-200 font-medium max-w-xl mx-auto leading-relaxed">
            Contact our operations and project management teams to discuss mobilisation, site access, or field support for your utility project.
          </p>
          <div className="pt-2">
            <Link
              to="/contact"
              className="text-nav inline-flex items-center gap-2 bg-[#005f9e] hover:bg-[#004c80] text-white transition-all px-8 py-4 font-extrabold uppercase tracking-wide font-outfit shadow-xl active:scale-95"
            >
              <span>Discuss a Project</span>
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </div>
        </div>
      </MotionSection>
    </div>
  );
};

export default OperationalDelivery;