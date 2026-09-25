import React from 'react';
import { Link } from 'react-router-dom';
import MotionSection from '../../components/MotionSection';
import aboutImage from '../../assets/images/about.jpeg';
import workersImg from '../../assets/images/uk_utility_workers_site.png';
import DirectorBanner from '../../components/DirectorBanner';

import imgManagement from '../../assets/images/Project coordination and reporting.jpg';
import imgWorkforce from '../../assets/images/uk_utility_workers_site.png';
import imgWorkmanship from '../../assets/images/utility_grid_work.png';
import imgPublicSector from '../../assets/images/Urban Skyline View.jpeg';
import imgCompliance from '../../assets/images/Workforce onboarding and compliance verification.jpg';
import imgSatisfaction from '../../assets/images/water meter suoort bluegrids.jpeg';

import imgInfrastructure from '../../assets/images/infrastructure.jpeg';
import imgProjectCoord from '../../assets/images/projectcordination.jpeg';
import imgComplianceBg from '../../assets/images/Workforce onboarding and compliance verification.jpg';

import imgFocusMetering from '../../assets/images/Water meter installation support.jfif';
import imgFocusCivils from '../../assets/images/uk_utility_excavation.jpg';
import imgFocusReinstatement from '../../assets/images/civil_engineering_excavation.jpg';
import imgFocusMobilisation from '../../assets/images/rams_workforce_briefing.jpg';

const focusAreas = [
  {
    icon: "water_drop",
    title: "Smart Water Metering",
    desc: "Smart water-meter installation and associated utility support.",
    image: imgFocusMetering,
    alt: "Operatives in high-visibility vests installing a water meter at a residential verge",
    position: "center 60%"
  },
  {
    icon: "construction",
    title: "Civil Engineering & Access Works",
    desc: "Civil engineering and access support where scope, competence and approvals are in place.",
    image: imgFocusCivils,
    alt: "Operative working in a fenced excavation exposing utility ducts on a UK street",
    position: "center"
  },
  {
    icon: "layers",
    title: "Reinstatement Support",
    desc: "Reinstatement support in line with project requirements.",
    image: imgFocusReinstatement,
    alt: "Concrete being placed to reinstate a trench over utility ducts",
    position: "center"
  },
  {
    icon: "assignment_turned_in",
    title: "Field Mobilisation & Reporting",
    desc: "Field mobilisation, supervision, project coordination and completion reporting.",
    image: imgFocusMobilisation,
    alt: "Supervisor briefing a field team with a clipboard and tablet before works begin",
    position: "center 30%"
  }
];

const corePillars = [
  {
    id: "management",
    badge: "OPERATIONAL LEADERSHIP",
    title: "Experienced Management",
    desc: "Operational leadership focused on mobilisation planning, field coordination, compliance, reporting and client communication.",
    bgImage: imgManagement
  },
  {
    id: "workforce",
    badge: "VERIFIED FIELD TEAMS",
    title: "Skilled Workforce",
    desc: "Field teams selected and deployed according to project requirements, with role-relevant onboarding, identity and right-to-work checks, training records and competence verification.",
    bgImage: imgWorkforce
  },
  {
    id: "workmanship",
    badge: "UNCOMPROMISING PRECISION",
    title: "Quality Workmanship",
    desc: "Delivery processes designed around clear task standards, inspection, photographic evidence, snag resolution and continuous improvement.",
    bgImage: imgWorkmanship
  },
  {
    id: "supply-chain",
    badge: "DELIVERY CHAIN PARTNERSHIP",
    title: "Infrastructure Supply-Chain Experience",
    desc: "Bluegrid operates within UK infrastructure delivery chains and supports programme requirements through coordinated field teams and operational management.",
    bgImage: imgPublicSector
  },
  {
    id: "compliance",
    badge: "REGULATORY ASSURANCE",
    title: "Rigorous Compliance",
    desc: "Compliance controls cover onboarding, RAMS acknowledgement, competency records, PPE, vehicle and equipment requirements, site briefings, documentation and incident escalation.",
    bgImage: imgCompliance
  },
  {
    id: "relationships",
    badge: "DEDICATED PARTNER RELATIONS",
    title: "Client & Partner Relationships",
    desc: "We aim to build trusted relationships through clear communication, responsive issue resolution and consistent operational performance.",
    bgImage: imgSatisfaction
  }
];

const AboutCompanyPage = () => {
  return (
    <div className="font-sans">
      <MotionSection 
        as="section" 
        className="pb-16 md:pb-24 bg-white" 
        id="about-company"
        initial="hidden"
        animate="visible"
        whileInView={undefined}
        viewport={undefined}
      >
        <div className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-12">
          
          {/* Opening banner: message from the Managing Director */}
          <DirectorBanner />

          {/* Main Grid: Story + Profile Card */}
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-stretch mb-20">
            
            {/* Left Narrative (Pack 02: Who We Are) */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-8">
              <div className="w-full h-72 sm:h-80 md:h-96 relative overflow-hidden rounded-none border border-slate-200 shadow-lg">
                <img
                  src={aboutImage}
                  alt="Bluegrid Utilities Operations"
                  className="w-full h-full object-cover brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 bg-[#005f9e] text-white px-4 py-2 text-xs font-bold tracking-wider rounded-none border border-white/20 font-outfit">
                  Practical Utility Delivery
                </div>
              </div>

              <div className="space-y-4 text-left">
                <span className="text-xs font-bold text-[#005f9e] uppercase tracking-widest font-outfit">
                  Who We Are
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#0f3a5e] tracking-tight font-outfit">
                  A Structured Approach to Utility Delivery
                </h2>
                <p className="text-slate-700 text-base sm:text-lg font-medium leading-relaxed">
                  We are developing Bluegrid through controlled mobilisation, clear project management, accountable field coordination and accurate reporting. Our aim is to support authorised utility programmes safely, professionally and in line with the requirements of each project.
                </p>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
                  We do not measure credibility by slogans or unsupported scale. We focus on the fundamentals that matter in field delivery: competent people, clear responsibilities, reliable information, safe working and prompt escalation when conditions change.
                </p>
              </div>
            </div>

            {/* Right: Company Profile Boxy Card */}
            <div className="lg:col-span-5 flex flex-col">
              <div className="bg-[#0f3a5e] text-white p-8 sm:p-10 rounded-none border border-[#0f3a5e] shadow-xl flex flex-col justify-between h-full relative overflow-hidden">
                <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-[#005f9e]/30 rounded-none blur-3xl pointer-events-none" />

                <div className="relative z-10 space-y-6">
                  <div className="border-b border-white/15 pb-4">
                    <span className="text-[#0066ff] font-bold text-xs tracking-widest block mb-1 font-outfit">
                      Official Details
                    </span>
                    <h3 className="text-2xl font-bold tracking-tight text-white font-outfit">
                      Official Company Details
                    </h3>
                  </div>

                  <div className="space-y-4 text-sm">
                    <div className="bg-white/5 border border-white/10 p-4 rounded-none">
                      <p className="text-[10px] font-bold text-[#60a5fa] tracking-widest mb-1 font-outfit">Trading Name</p>
                      <p className="text-base font-bold text-white">Bluegrid Utilities</p>
                    </div>

                    <div className="bg-white/5 border border-white/10 p-4 rounded-none">
                      <p className="text-[10px] font-bold text-[#60a5fa] tracking-widest mb-1 font-outfit">Legal Entity</p>
                      <p className="text-base font-bold text-white">Bluegrid Technology Ltd</p>
                    </div>

                    <div className="bg-white/5 border border-white/10 p-4 rounded-none">
                      <p className="text-[10px] font-bold text-[#60a5fa] tracking-widest mb-1 font-outfit">Company Number</p>
                      <p className="text-base font-bold text-white tracking-wider">16442340</p>
                    </div>

                    <div className="bg-white/5 border border-white/10 p-4 rounded-none">
                      <p className="text-[10px] font-bold text-[#60a5fa] tracking-widest mb-1 font-outfit uppercase">Operations Office</p>
                      <address className="not-italic text-sm font-semibold text-slate-200 leading-snug">
                        Office 68, Spaces, The Maylands Building<br />
                        Hemel Hempstead, HP2 7TG<br />
                        United Kingdom
                      </address>
                    </div>

                    <div className="bg-white/5 border border-white/10 p-4 rounded-none">
                      <p className="text-[10px] font-bold text-[#60a5fa] tracking-widest mb-1 font-outfit uppercase">Registered Office</p>
                      <address className="not-italic text-sm font-semibold text-slate-200 leading-snug">
                        Office 68, Spaces, The Marylands Building<br />
                        Maylands Avenue, Hemel Hempstead Industrial Estate<br />
                        Hemel Hempstead, England, HP2 7TG
                      </address>
                    </div>

                    <div className="bg-white/5 border border-white/10 p-4 rounded-none">
                      <p className="text-[10px] font-bold text-[#60a5fa] tracking-widest mb-1 font-outfit uppercase">Company Status</p>
                      <p className="text-base font-bold text-emerald-400">Active</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-white/15 relative z-10 flex items-center justify-between text-xs font-bold text-slate-300 font-outfit">
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-none bg-[#0066ff]" />
                    Registered in England &amp; Wales
                  </span>
                  <span className="text-[#60a5fa]">Active Status</span>
                </div>
              </div>
            </div>

          </div>

          {/* Section Divider */}
          <hr className="border-slate-200 my-16" />

          {/* CURRENT FOCUS SECTION (Pack 02) */}
          <div className="mb-20">
            <div className="text-left max-w-3xl mb-12">
              <span className="inline-block px-3.5 py-1.5 rounded-none bg-[#005f9e]/10 text-[#005f9e] text-xs font-black tracking-widest mb-3 font-outfit border border-[#005f9e]/20 uppercase">
                Current Focus
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0f3a5e] tracking-tight leading-tight font-outfit">
                Built Around Practical Delivery
              </h2>
              <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed font-medium">
                Bluegrid Utilities concentrates its resources on core delivery disciplines where competence, working procedures and verified controls are firmly established.
              </p>
            </div>

            {/* 4 Focus Points Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              {focusAreas.map((area) => (
                <div
                  key={area.title}
                  className="group bg-white border-2 border-slate-200 hover:border-[#005f9e] shadow-sm hover:shadow-lg transition-all overflow-hidden"
                >
                  <div className="relative aspect-[16/9] overflow-hidden bg-slate-100">
                    <img
                      src={area.image}
                      alt={area.alt}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      style={{ objectPosition: area.position }}
                    />
                  </div>
                  <div className="p-6 sm:p-8">
                    <div className="w-12 h-12 bg-[#005f9e]/10 text-[#005f9e] flex items-center justify-center mb-4">
                      <span className="material-symbols-outlined text-2xl">{area.icon}</span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#0f3a5e] font-outfit mb-2">
                      {area.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed font-medium">
                      {area.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ORGANISATION SECTION (Pack 02) */}
          <div className="mb-20 bg-slate-50 border border-slate-200 p-8 sm:p-12 text-left">
            <div className="max-w-3xl">
              <span className="inline-block px-3.5 py-1.5 rounded-none bg-[#005f9e] text-white text-xs font-black tracking-widest mb-3 font-outfit uppercase">
                Organisation
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0f3a5e] tracking-tight font-outfit mb-4">
                Clear Accountability
              </h2>
              <p className="text-slate-700 text-base sm:text-lg leading-relaxed font-medium">
                Bluegrid operates through a defined management and project-support structure, with operational matters escalated through the project-management line to director level where required. This helps maintain clear accountability for delivery, commercial decisions, external representation and material risk.
              </p>
            </div>
          </div>

          {/* LEADERSHIP SECTION (Pack 02: Approved Statutory Leadership Only) */}
          <div className="mb-20 text-left">
            <div className="max-w-3xl mb-12">
              <span className="inline-block px-3.5 py-1.5 rounded-none bg-[#005f9e]/10 text-[#005f9e] text-xs font-black tracking-widest mb-3 font-outfit border border-[#005f9e]/20 uppercase">
                Leadership
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0f3a5e] tracking-tight leading-tight font-outfit">
                Company Leadership
              </h2>
              <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed font-medium">
                Statutory directors maintaining corporate governance, operational standards and commercial accountability.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Selbert George */}
              <div className="bg-white border-2 border-slate-200 p-8 shadow-sm hover:shadow-lg transition-all flex flex-col sm:flex-row items-start gap-6">
                <div className="w-20 h-20 bg-slate-900 shrink-0 border border-slate-300 flex items-center justify-center overflow-hidden">
                  <span className="material-symbols-outlined text-4xl text-slate-400">person</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#0f3a5e] font-outfit">Selbert George</h3>
                  <p className="text-sm font-bold text-[#005f9e] font-outfit mb-3">Director and Project Director</p>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                    Active statutory director overseeing operational delivery, project management, workforce deployment and client coordination.
                  </p>
                </div>
              </div>

              {/* Syed Zulqurnain Shah */}
              <div className="bg-white border-2 border-slate-200 p-8 shadow-sm hover:shadow-lg transition-all flex flex-col sm:flex-row items-start gap-6">
                <div className="w-20 h-20 bg-slate-900 shrink-0 border border-slate-300 flex items-center justify-center overflow-hidden">
                  <span className="material-symbols-outlined text-4xl text-slate-400">shield_person</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#0f3a5e] font-outfit">Syed Zulqurnain Shah</h3>
                  <p className="text-sm font-bold text-[#005f9e] font-outfit mb-3">Director</p>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                    Active statutory director responsible for statutory governance, financial oversight and corporate compliance.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RESPONSIBLE GROWTH SECTION (Pack 02) */}
          <div className="mb-20 bg-slate-100 border border-slate-200 p-8 sm:p-12 text-left">
            <div className="max-w-3xl">
              <span className="inline-block px-3.5 py-1.5 rounded-none bg-[#005f9e] text-white text-xs font-black tracking-widest mb-3 font-outfit uppercase">
                Responsible Growth
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0f3a5e] tracking-tight font-outfit mb-4">
                Growing Capability Responsibly
              </h2>
              <p className="text-slate-700 text-base sm:text-lg leading-relaxed font-medium">
                As Bluegrid grows, public claims must remain aligned with the Company’s actual workforce, contracts, resources, accreditations and geographical capability. We would rather describe a capability accurately than overstate what can be delivered.
              </p>
            </div>
          </div>

          {/* FINAL CTA BANNER */}
          <div className="bg-[#0f3a5e] text-white p-8 sm:p-12 md:p-14 rounded-none shadow-xl text-left relative overflow-hidden flex flex-col md:flex-row items-start md:items-center justify-between gap-8 border border-[#0f3a5e]">
            <div className="max-w-2xl space-y-3 relative z-10">
              <span className="text-[#60a5fa] font-bold text-xs tracking-widest font-outfit block uppercase">
                Bluegrid Utilities
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-outfit">
                Discuss Your Utility Infrastructure Requirements
              </h3>
              <p className="text-slate-200 text-xs sm:text-sm leading-relaxed font-medium">
                Contact our operational management team today to discuss project mobilisation, workforce support or field delivery.
              </p>
            </div>

            <div className="shrink-0 relative z-10 flex flex-wrap gap-4">
              <Link 
                to="/contact"
                className="inline-flex items-center gap-2 bg-[#0066ff] hover:bg-[#0052cc] text-white font-bold text-xs tracking-widest px-8 py-4 rounded-none border border-white/20 transition-all duration-300 shadow-lg active:scale-95 font-outfit uppercase"
              >
                <span>Discuss a Project</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
              <Link 
                to="/services"
                className="inline-flex items-center gap-2 bg-transparent hover:bg-white/10 text-white font-bold text-xs tracking-widest px-8 py-4 rounded-none border border-white/30 transition-all duration-300 font-outfit uppercase"
              >
                <span>Our Capabilities</span>
              </Link>
            </div>
          </div>

        </div>
      </MotionSection>
    </div>
  );
};

export default AboutCompanyPage;
