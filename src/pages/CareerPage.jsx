import React from 'react';
import { Link } from 'react-router-dom';
import MotionSection from '../components/MotionSection';
import AboutBanner from '../components/AboutBanner';
import heroThreeImg from '../assets/images/updated/hero_blue_three.png';
import workersImg from '../assets/images/uk_utility_workers_site.png';
import trainingImg from '../assets/images/Training coordination and deployment planning.jpg';
import complianceImg from '../assets/images/Sectors/Compliance & Onboarding.jpg';

const openRoles = [
  {
    title: "Water Meter Technician",
    category: "Field Operations",
    code: "REF-WMT-01",
    desc: "Installation, AMR/AMI deployment, testing, and maintenance of smart water meters across UK clean water utility projects.",
    badge: "CSCS / EUSR Required",
    icon: "water_drop"
  },
  {
    title: "Supervisor",
    category: "Site Operations",
    code: "REF-SUP-02",
    desc: "Leading on-site field operatives, ensuring NRSWA streetworks compliance, safety barrier setup, and zero-defect site handovers.",
    badge: "NRSWA Supervisor Card",
    icon: "engineering"
  },
  {
    title: "Project Coordinator",
    category: "Project Management",
    code: "REF-PCO-03",
    desc: "Coordinating daily operative scheduling, field routing, resource allocation, real-time client dashboards, and operational updates.",
    badge: "Office & Field Based",
    icon: "schedule"
  },
  {
    title: "Operations Manager",
    category: "Executive & Operations",
    code: "REF-OPM-04",
    desc: "High-level operational oversight, field force optimization, SLA fulfillment, vehicle fleet logistics, and principal contractor delivery.",
    badge: "Management Level",
    icon: "settings_suggest"
  },
  {
    title: "Commercial Assistant",
    category: "Commercial & Finance",
    code: "REF-CMA-05",
    desc: "Supporting commercial cost estimations, subcontractor procurement, application valuations, invoice audits, and contract documentation.",
    badge: "Commercial Support",
    icon: "request_quote"
  },
  {
    title: "Administrator",
    category: "Back-Office Support",
    code: "REF-ADM-06",
    desc: "Managing back-office operations, client reporting archives, customer appointment scheduling, and general business administration.",
    badge: "Administrative Support",
    icon: "admin_panel_settings"
  },
  {
    title: "Project Manager",
    category: "Project Delivery",
    code: "REF-PJM-07",
    desc: "Overall project lifecycle management, budget oversight, stakeholder coordination, site handovers, and Tier-1 utility client reporting.",
    badge: "Project Delivery Lead",
    icon: "domain"
  },
  {
    title: "Health & Safety Advisor",
    category: "HSE Compliance",
    code: "REF-HSA-08",
    desc: "Enforcing zero-harm policies, RAMS auditing, site safety inspections, toolbox talks, and environmental compliance oversight.",
    badge: "NEBOSH / IOSH Required",
    icon: "health_and_safety"
  },
  {
    title: "Commercial Manager",
    category: "Commercial & Finance",
    code: "REF-CMM-09",
    desc: "Commercial strategy, contract valuation, budget control, subcontractor procurement oversight, and financial risk assessment.",
    badge: "Senior Commercial Lead",
    icon: "payments"
  }
];

const CareerPage = () => {
  return (
    <div className="font-sans">
      <MotionSection 
        as="section" 
        className="pb-16 md:pb-24 bg-white" 
        id="career-page"
        initial="hidden"
        animate="visible"
        whileInView={undefined}
        viewport={undefined}
      >
        <div className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-12">
          
          {/* Top Page Title Banner */}
          <AboutBanner 
            badgeText="CAREERS & WORKFORCE OPPORTUNITIES"
            title="JOIN THE BLUEGRID WORKFORCE"
            description="Explore nationwide opportunities across UK utility programmes. We offer competitive benefits, structured training, clear career progression, and full compliance support."
            bgImage={heroThreeImg}
          />

          {/* First Apply Section / Quick Action Header Bar */}
          <div className="bg-[#f8fafc] border border-slate-200 p-6 sm:p-8 rounded-none mb-16 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md text-left">
            <div className="space-y-1">
              <span className="text-[11px] font-black text-[#005f9e] uppercase tracking-widest font-outfit">
                NATIONWIDE RECRUITMENT
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#0f3a5e] uppercase tracking-tight font-outfit">
                READY TO APPLY OR UPLOAD YOUR CV?
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm font-medium">
                Complete our fast-track online application or upload your CV to register your interest for upcoming utility projects.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 shrink-0">
              <Link 
                to="/apply" 
                className="inline-flex items-center gap-2 bg-[#0066ff] hover:bg-[#0052cc] text-white font-bold text-xs uppercase tracking-widest px-6 py-3.5 rounded-none border border-transparent transition-all shadow-md active:scale-95 font-outfit cursor-pointer"
              >
                <span>APPLY ONLINE</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
              <Link 
                to="/apply#cv-upload" 
                className="inline-flex items-center gap-2 bg-[#0f3a5e] hover:bg-[#005f9e] text-white font-bold text-xs uppercase tracking-widest px-6 py-3.5 rounded-none border border-transparent transition-all shadow-md active:scale-95 font-outfit cursor-pointer"
              >
                <span>UPLOAD CV</span>
                <span className="material-symbols-outlined text-sm">upload_file</span>
              </Link>
            </div>
          </div>

          {/* Open Roles & Positions Section (Placed directly below the first apply section) */}
          <div className="mb-20">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="inline-block px-3.5 py-1.5 rounded-none bg-[#005f9e]/10 text-[#005f9e] text-xs font-black uppercase tracking-widest mb-3 font-outfit border border-[#005f9e]/20">
                ACTIVE OPPORTUNITIES
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0f3a5e] tracking-tight uppercase leading-tight font-outfit">
                OPEN POSITIONS & CAREER ROLES
              </h2>
              <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
                We are actively recruiting across 9 core operational and management roles for utility projects throughout the UK.
              </p>
            </div>

            {/* 9 Roles Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {openRoles.map((role, idx) => (
                <div 
                  key={idx}
                  className="bg-white border border-slate-200 hover:border-[#005f9e] p-7 rounded-none shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between text-left group relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 right-0 h-1 bg-slate-200 group-hover:bg-[#005f9e] transition-colors duration-300" />

                  <div>
                    {/* Header Row */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 bg-[#0f3a5e] text-white flex items-center justify-center shadow-md group-hover:bg-[#005f9e] transition-colors">
                        <span className="material-symbols-outlined text-xl">{role.icon}</span>
                      </div>
                      <span className="text-[10px] font-black text-slate-400 font-outfit uppercase tracking-widest">
                        {role.code}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-[#0f3a5e] uppercase tracking-tight font-outfit mb-1 group-hover:text-[#005f9e] transition-colors">
                      {role.title}
                    </h3>
                    <p className="text-[11px] font-bold text-[#005f9e] uppercase tracking-widest mb-3 font-outfit">
                      {role.category}
                    </p>

                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium mb-6">
                      {role.desc}
                    </p>
                  </div>

                  <div>
                    <div className="mb-4 pt-3 border-t border-slate-100 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                      <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider font-outfit">
                        {role.badge}
                      </span>
                    </div>

                    {/* Action Buttons */}
                    <div className="grid grid-cols-2 gap-2">
                      <Link 
                        to={`/apply?position=${encodeURIComponent(role.title)}`}
                        className="inline-flex items-center justify-center gap-1.5 bg-[#0f3a5e] hover:bg-[#005f9e] text-white font-bold text-[10px] uppercase tracking-widest px-3 py-2.5 transition-all font-outfit text-center cursor-pointer"
                      >
                        <span>APPLY ONLINE</span>
                      </Link>
                      <Link 
                        to={`/apply?position=${encodeURIComponent(role.title)}#cv-upload`}
                        className="inline-flex items-center justify-center gap-1.5 bg-slate-100 hover:bg-[#005f9e] hover:text-white text-slate-700 font-bold text-[10px] uppercase tracking-widest px-3 py-2.5 transition-all font-outfit text-center cursor-pointer border border-slate-200"
                      >
                        <span>UPLOAD CV</span>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section Divider */}
          <hr className="border-slate-200 my-16" />

          {/* 3 Career Pillars (Benefits, Training, Career Progression) */}
          <div className="mb-20">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="inline-block px-3.5 py-1.5 rounded-none bg-[#005f9e]/10 text-[#005f9e] text-xs font-black uppercase tracking-widest mb-3 font-outfit border border-[#005f9e]/20">
                WHY WORK WITH US
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0f3a5e] tracking-tight uppercase leading-tight font-outfit">
                BENEFITS, TRAINING & CAREER PROGRESSION
              </h2>
              <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
                We invest in our people by offering competitive reward packages, continuous professional development, and structured career pathways.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              {/* Box 1: Benefits */}
              <div className="bg-white border border-slate-200 hover:border-[#005f9e] p-8 rounded-none shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between text-left group relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-slate-200 group-hover:bg-[#005f9e] transition-colors duration-300" />
                
                <div>
                  <div className="relative h-44 overflow-hidden mb-6 bg-slate-900">
                    <img src={workersImg} alt="Employee Benefits" className="w-full h-full object-cover brightness-95 group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f3a5e]/80 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-3 bg-[#005f9e] text-white text-[10px] font-bold px-3 py-1 uppercase tracking-wider font-outfit">
                      REWARDS & WELLBEING
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-[#0f3a5e] uppercase tracking-tight font-outfit mb-3 group-hover:text-[#005f9e] transition-colors">
                    Competitive Benefits
                  </h3>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium mb-6">
                    Attractive day rates and salaries, regional travel allowances, full PPE supply, health & safety support, and long-term utility contract security.
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 space-y-2 text-xs font-semibold text-slate-700">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm text-[#005f9e]">check_circle</span>
                    <span>Competitive rates & paid travel options</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm text-[#005f9e]">check_circle</span>
                    <span>Full PPE & high-spec safety equipment</span>
                  </div>
                </div>
              </div>

              {/* Box 2: Training */}
              <div className="bg-white border border-slate-200 hover:border-[#005f9e] p-8 rounded-none shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between text-left group relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-slate-200 group-hover:bg-[#005f9e] transition-colors duration-300" />

                <div>
                  <div className="relative h-44 overflow-hidden mb-6 bg-slate-900">
                    <img src={trainingImg} alt="Training & Qualifications" className="w-full h-full object-cover brightness-95 group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f3a5e]/80 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-3 bg-[#005f9e] text-white text-[10px] font-bold px-3 py-1 uppercase tracking-wider font-outfit">
                      SKILLS & CREDENTIALS
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-[#0f3a5e] uppercase tracking-tight font-outfit mb-3 group-hover:text-[#005f9e] transition-colors">
                    Professional Training
                  </h3>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium mb-6">
                    Continuous learning management and fully supported upskilling courses for NRSWA, EUSR, CSCS cards, SMETS metering, and site safety credentials.
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 space-y-2 text-xs font-semibold text-slate-700">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm text-[#005f9e]">check_circle</span>
                    <span>Funded EUSR, CSCS & NRSWA training</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm text-[#005f9e]">check_circle</span>
                    <span>Continuous safety toolbox talks & inductions</span>
                  </div>
                </div>
              </div>

              {/* Box 3: Career Progression */}
              <div className="bg-white border border-slate-200 hover:border-[#005f9e] p-8 rounded-none shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between text-left group relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-slate-200 group-hover:bg-[#005f9e] transition-colors duration-300" />

                <div>
                  <div className="relative h-44 overflow-hidden mb-6 bg-slate-900">
                    <img src={complianceImg} alt="Career Progression" className="w-full h-full object-cover brightness-95 group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f3a5e]/80 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-3 bg-[#005f9e] text-white text-[10px] font-bold px-3 py-1 uppercase tracking-wider font-outfit">
                      PROMOTION PATHWAYS
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-[#0f3a5e] uppercase tracking-tight font-outfit mb-3 group-hover:text-[#005f9e] transition-colors">
                    Career Progression
                  </h3>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium mb-6">
                    Clear internal promotion pathways enabling field operatives to advance into supervisory, project coordination, HSE, and operations management roles.
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 space-y-2 text-xs font-semibold text-slate-700">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm text-[#005f9e]">check_circle</span>
                    <span>Operative to Supervisor & Manager pathways</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm text-[#005f9e]">check_circle</span>
                    <span>Performance reviews & merit advancement</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Final Call to Action Banner: Upload CV & Apply Online */}
          <div className="bg-[#0f3a5e] text-white p-8 sm:p-12 md:p-14 rounded-none shadow-2xl relative overflow-hidden text-left flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="max-w-2xl space-y-3 relative z-10">
              <span className="text-[#60a5fa] font-bold text-xs uppercase tracking-widest font-outfit block">
                REGISTER YOUR INTEREST
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold uppercase tracking-tight text-white font-outfit">
                JOIN THE UK'S FASTEST GROWING UTILITY WORKFORCE
              </h3>
              <p className="text-slate-200 text-xs sm:text-sm leading-relaxed font-medium">
                Submit your CV or complete our fast-track online application form to get verified and allocated to upcoming utility programmes.
              </p>
            </div>

            <div className="shrink-0 relative z-10 flex flex-wrap gap-4">
              <Link 
                to="/apply"
                className="inline-flex items-center gap-2 bg-[#0066ff] hover:bg-[#0052cc] text-white font-bold text-xs uppercase tracking-widest px-8 py-4 rounded-none border border-white/20 transition-all duration-300 shadow-lg active:scale-95 font-outfit"
              >
                <span>APPLY ONLINE</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
              <Link 
                to="/apply#cv-upload"
                className="inline-flex items-center gap-2 bg-transparent hover:bg-white/10 text-white font-bold text-xs uppercase tracking-widest px-8 py-4 rounded-none border border-white/30 transition-all duration-300 font-outfit"
              >
                <span>UPLOAD CV</span>
                <span className="material-symbols-outlined text-sm">upload_file</span>
              </Link>
            </div>
          </div>

        </div>
      </MotionSection>
    </div>
  );
};

export default CareerPage;
