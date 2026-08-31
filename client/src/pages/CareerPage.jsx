import React from 'react';
import { Link } from 'react-router-dom';
import MotionSection from '../components/MotionSection';
import AboutBanner from '../components/AboutBanner';
import heroThreeImg from '../assets/images/updated/water_meter_installation.png';
import workersImg from '../assets/images/uk_utility_workers_site.png';
import trainingImg from '../assets/images/Training coordination and deployment planning.jpg';
import complianceImg from '../assets/images/Sectors/Compliance & Onboarding.jpg';

const roleCategories = [
  {
    title: "Water Meter Technicians",
    category: "Field Operations",
    code: "CAT-WMT-01",
    desc: "Deployment, installation, AMR/AMI upgrading, testing, and field maintenance of clean water meters.",
    badge: "Field Operations",
    icon: "water_drop"
  },
  {
    title: "Utility Operatives",
    category: "Field Delivery",
    code: "CAT-UOP-02",
    desc: "Utility excavation, asset exposure, groundworks support, and street-works surface reinstatement.",
    badge: "Field Operatives",
    icon: "construction"
  },
  {
    title: "Supervisors",
    category: "Site Operations",
    code: "CAT-SUP-03",
    desc: "Supervising field squads, enforcing NRSWA streetworks compliance, safety barriers, and quality handovers.",
    badge: "Site Leadership",
    icon: "engineering"
  },
  {
    title: "Project Coordinators",
    category: "Workforce & Logistics",
    code: "CAT-PCO-04",
    desc: "Coordinating daily operative scheduling, field routing, appointment booking, and operational reporting.",
    badge: "Project Logistics",
    icon: "schedule"
  },
  {
    title: "Operations & Project Management",
    category: "Operational Leadership",
    code: "CAT-OPM-05",
    desc: "Operational oversight, framework mobilization, contract delivery, and client contract management.",
    badge: "Management Level",
    icon: "domain"
  },
  {
    title: "Health & Safety",
    category: "HSE Governance",
    code: "CAT-HSE-06",
    desc: "H&S compliance monitoring, RAMS auditing, site safety inspections, toolbox talks, and risk management.",
    badge: "Safety Governance",
    icon: "health_and_safety"
  },
  {
    title: "Commercial & Administration",
    category: "Commercial & Business Support",
    code: "CAT-CAD-07",
    desc: "Commercial cost estimation, contract administration, supplier due diligence, and back-office support.",
    badge: "Commercial Support",
    icon: "admin_panel_settings"
  }
];

const applicationSteps = [
  { step: "01", title: "Apply Online", desc: "Submit your details via our online portal or fast-track recruitment form." },
  { step: "02", title: "Identity & Right-to-Work Checks", desc: "Verification of personal identification, right-to-work status, and compliance documentation." },
  { step: "03", title: "CV / Experience Review", desc: "Review of relevant utility experience, operational background, and current tickets." },
  { step: "04", title: "Interview & Competency Assessment", desc: "Role-specific interview and practical competency evaluation with our management team." },
  { step: "05", title: "Training & Evidence Checks", desc: "Verification of EUSR, NRSWA, or CSCS cards, or enrollment into role-specific training." },
  { step: "06", title: "Offer & Onboarding", desc: "Formal contract offer, site safety induction, equipment issue, and field deployment." }
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
            badgeText="Careers & Workforce Development"
            title="Build Your Career with Bluegrid Utilities"
            description="Join a growing UK utility delivery business focused on safety, training, professional standards and progression."
            bgImage={heroThreeImg}
          />

          {/* First Apply Section / Quick Action Header Bar */}
          <div className="bg-[#f8fafc] border border-slate-200 p-6 sm:p-8 rounded-none mb-16 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md text-left">
            <div className="space-y-1">
              <span className="text-[11px] font-black text-[#005f9e] tracking-widest font-outfit">
                Recruitment Portal
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#0f3a5e] tracking-tight font-outfit">
                Ready to Join Our Utility Delivery Workforce?
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm font-medium">
                Complete our fast-track online application to register your interest for upcoming utility projects.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 shrink-0">
              <a 
                href="https://forms.office.com/r/K9vKw1hxcB" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#0066ff] hover:bg-[#0052cc] text-white font-bold text-xs tracking-widest px-6 py-3.5 rounded-none border border-transparent transition-all shadow-md active:scale-95 font-outfit cursor-pointer group"
              >
                <span>Apply Online</span>
                <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">open_in_new</span>
              </a>
            </div>
          </div>

          {/* Job Categories Section */}
          <div className="mb-20">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="inline-block px-3.5 py-1.5 rounded-none bg-[#005f9e]/10 text-[#005f9e] text-xs font-black tracking-widest mb-3 font-outfit border border-[#005f9e]/20">
                Workforce Categories
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0f3a5e] tracking-tight leading-tight font-outfit">
                Job Categories & Roles
              </h2>
              <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
                We recruit across key operational, technical, supervisory, and support categories for utility delivery programmes across the UK.
              </p>
            </div>

            {/* Role Categories Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {roleCategories.map((role, idx) => (
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
                      <span className="text-[10px] font-black text-slate-400 font-outfit tracking-widest">
                        {role.code}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-[#0f3a5e] tracking-tight font-outfit mb-1 group-hover:text-[#005f9e] transition-colors">
                      {role.title}
                    </h3>
                    <p className="text-[11px] font-bold text-[#005f9e] tracking-widest mb-3 font-outfit">
                      {role.category}
                    </p>

                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium mb-6">
                      {role.desc}
                    </p>
                  </div>

                  <div>
                    <div className="mb-4 pt-3 border-t border-slate-100 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                      <span className="text-[11px] font-bold text-slate-500 tracking-wider font-outfit">
                        {role.badge}
                      </span>
                    </div>

                    {/* Single Apply Online Action Button */}
                    <a 
                      href="https://forms.office.com/r/K9vKw1hxcB"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 bg-[#0066ff] hover:bg-[#0052cc] text-white font-bold text-xs tracking-widest px-4 py-3 transition-all font-outfit text-center cursor-pointer shadow-md group"
                    >
                      <span>Register Interest</span>
                      <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">open_in_new</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section Divider */}
          <hr className="border-slate-200 my-16" />

          {/* Why Work With Us Section */}
          <div className="mb-24">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="inline-block px-3.5 py-1.5 rounded-none bg-[#005f9e]/10 text-[#005f9e] text-xs font-black tracking-widest mb-3 font-outfit border border-[#005f9e]/20">
                Workforce Value
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0f3a5e] tracking-tight leading-tight font-outfit">
                Why Work With Us
              </h2>
              <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
                We focus on building a safe, ticketed, and professional workforce supported by structured operational controls.
              </p>
            </div>

            {/* 5 Points List Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
              {[
                { title: "Structured Onboarding", desc: "Structured onboarding and role-specific induction before site deployment.", icon: "assignment_ind" },
                { title: "Training & Development", desc: "Access to project-relevant training and competency development.", icon: "school" },
                { title: "Clear Operational Standards", desc: "Clear operational standards, RAMS briefings, and supervisor support.", icon: "verified" },
                { title: "Progression Opportunities", desc: "Opportunities to progress into supervisory, coordination and management roles.", icon: "trending_up" },
                { title: "Scalable Capability", desc: "A growing business with expanding utility-delivery capability across the UK.", icon: "domain" }
              ].map((item, idx) => (
                <div key={idx} className="bg-[#f4f8fc] border border-slate-200/90 p-8 shadow-lg border-t-4 border-t-[#005f9e] space-y-4">
                  <div className="w-12 h-12 bg-[#005f9e]/10 text-[#005f9e] flex items-center justify-center border border-[#005f9e]/20 shrink-0 font-bold">
                    <span className="material-symbols-outlined text-2xl">{item.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#0f3a5e] tracking-tight font-outfit uppercase">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Application Process Section */}
          <div className="mb-24">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="inline-block px-3.5 py-1.5 rounded-none bg-[#005f9e]/10 text-[#005f9e] text-xs font-black tracking-widest mb-3 font-outfit border border-[#005f9e]/20">
                Transparent Recruitment
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0f3a5e] tracking-tight leading-tight font-outfit">
                Application Process
              </h2>
              <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
                Our 6-step recruitment process ensures clear communication, thorough compliance checks, and smooth site onboarding.
              </p>
            </div>

            {/* 6 Step Cards Process */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
              {applicationSteps.map((stepItem, idx) => (
                <div key={idx} className="bg-white border border-slate-200 p-8 shadow-md relative overflow-hidden flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-10 h-10 bg-[#0f3a5e] text-white flex items-center justify-center font-bold font-outfit text-sm shadow-md">
                      {stepItem.step}
                    </span>
                    <span className="text-[10px] font-black text-slate-400 font-outfit uppercase tracking-widest">
                      Step {stepItem.step}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-[#0f3a5e] font-outfit mb-2">
                    {stepItem.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium">
                    {stepItem.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Final Call to Action Banner: Online Application Form */}
          <div className="bg-[#0f3a5e] text-white p-8 sm:p-12 md:p-14 rounded-none shadow-2xl relative overflow-hidden text-left flex flex-col md:flex-row items-start md:items-center justify-between gap-8 border-l-4 border-l-[#0066ff]">
            <div className="max-w-2xl space-y-3 relative z-10">
              <span className="text-[#60a5fa] font-bold text-xs tracking-widest font-outfit block uppercase">
                Online Application Portal
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-outfit uppercase">
                Build Your Career With Bluegrid Utilities
              </h3>
              <p className="text-slate-200 text-xs sm:text-sm leading-relaxed font-medium">
                Complete our online application form to register your interest for upcoming utility infrastructure contracts.
              </p>
            </div>

            <div className="shrink-0 relative z-10 flex flex-wrap gap-4">
              <a 
                href="https://forms.office.com/r/K9vKw1hxcB"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#0066ff] hover:bg-white hover:text-[#0f3a5e] text-white font-bold text-xs tracking-widest px-8 py-4 rounded-none border border-white/20 transition-all duration-300 shadow-lg active:scale-95 font-outfit group uppercase"
              >
                <span>Apply Online</span>
                <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">open_in_new</span>
              </a>
            </div>
          </div>

        </div>
      </MotionSection>
    </div>
  );
};

export default CareerPage;

