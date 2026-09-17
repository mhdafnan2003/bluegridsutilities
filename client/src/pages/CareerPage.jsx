import React from 'react';
import { Link } from 'react-router-dom';
import MotionSection from '../components/MotionSection';
import PageSEO from '../components/PageSEO';

// Point 41 Categories
const roleCategories = [
  {
    title: "Field operations",
    code: "FIELD-OPS",
    desc: "Utility operatives/installers and other approved field roles.",
    icon: "construction"
  },
  {
    title: "Supervision",
    code: "SUPERVISION",
    desc: "Supervisors and team leaders for authorised project delivery.",
    icon: "engineering"
  },
  {
    title: "Project and operations",
    code: "PRJ-OPS",
    desc: "Project management, assistant project management and operational coordination roles.",
    icon: "manage_accounts"
  },
  {
    title: "Project support",
    code: "PRJ-SUPPORT",
    desc: "Project administration, reporting, document and deployment support.",
    icon: "assignment"
  },
  {
    title: "Business support",
    code: "BIZ-SUPPORT",
    desc: "Approved roles in procurement, HR, executive or other support functions.",
    icon: "domain"
  }
];

// Point 43 Recruitment Process
const recruitmentSteps = [
  {
    step: "01",
    title: "Apply",
    desc: "Submit your application through the live vacancy page using the information requested for that role."
  },
  {
    step: "02",
    title: "Review",
    desc: "Applications are reviewed against the published role requirements."
  },
  {
    step: "03",
    title: "Interview / Assessment",
    desc: "Shortlisted candidates may be invited to an interview, practical assessment or other role-relevant assessment."
  },
  {
    step: "04",
    title: "Checks and offer",
    desc: "Any offer is subject to the checks and evidence required for the role and project."
  },
  {
    step: "05",
    title: "Onboarding",
    desc: "Successful candidates receive the information needed for onboarding and authorised deployment."
  }
];

const CareerPage = () => {
  return (
    <div className="font-sans bg-slate-50 min-h-screen">
      <PageSEO />

      <MotionSection
        as="div"
        className="pb-24"
        id="careers-view"
        initial="hidden"
        animate="visible"
        whileInView={undefined}
        viewport={undefined}
      >
        {/* Point 39: CAREERS — HERO */}
        <div className="bg-[#0f3a5e] text-white py-16 sm:py-24 border-b-4 border-[#0066ff]">
          <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-12 text-left space-y-6">
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-300 font-outfit uppercase tracking-wider">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-[#0066ff]">Careers</span>
            </div>

            <span className="inline-block px-3.5 py-1.5 bg-white/10 text-white text-xs font-black tracking-widest font-outfit uppercase border border-white/20">
              Careers at Bluegrid Utilities
            </span>

            {/* Point 39 Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight font-outfit max-w-4xl">
              Build your career in utility delivery
            </h1>

            {/* Point 39 Supporting Copy */}
            <p className="text-slate-200 text-sm sm:text-base md:text-lg max-w-3xl leading-relaxed font-medium">
              Bluegrid Utilities recruits field, supervisory, project-support and business-support roles as genuine project requirements arise. If you value practical work, clear expectations and a safety-led operating environment, explore our current opportunities.
            </p>

            {/* Point 39 Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link
                to="/careers/jobs"
                className="inline-flex items-center justify-center gap-2 bg-[#0066ff] hover:bg-[#0052cc] text-white font-extrabold text-xs tracking-widest px-8 py-4 uppercase font-outfit transition-all shadow-md active:scale-95 cursor-pointer"
              >
                <span>View current vacancies</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>

              <a
                href="mailto:recruitment@bluegridutilities.com"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-100 text-[#0f3a5e] font-extrabold text-xs tracking-widest px-8 py-4 uppercase font-outfit transition-all shadow-md active:scale-95 cursor-pointer"
              >
                <span>Recruitment enquiries</span>
                <span className="material-symbols-outlined text-sm">mail</span>
              </a>
            </div>
          </div>
        </div>

        {/* Content Container */}
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-12 pt-16 space-y-20">

          {/* Point 40: CAREERS — WORKING AT BLUEGRID */}
          <div className="bg-white border border-slate-200 p-8 sm:p-12 shadow-md text-left border-l-4 border-l-[#005f9e] max-w-5xl mx-auto space-y-6">
            <span className="inline-block px-3 py-1 bg-[#005f9e]/10 text-[#005f9e] text-xs font-black tracking-widest font-outfit uppercase border border-[#005f9e]/20">
              Employer Proposition
            </span>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0f3a5e] tracking-tight font-outfit">
              What working at Bluegrid means
            </h2>

            <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed font-medium">
              <p>
                We are a growing business, so people joining Bluegrid should expect a practical working environment where communication, reliability and accountability matter. Field delivery is supported by project and operations teams, and issues are expected to be raised early rather than hidden.
              </p>
              <p>
                We are building our capability carefully. That means roles, responsibilities and project requirements can develop as the business grows, but safety, professionalism and accurate reporting remain basic expectations.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between flex-wrap gap-4">
              <span className="text-xs text-slate-500 font-medium">
                Permanent employer proposition • Genuine vacancies published as operational needs arise
              </span>
              <Link
                to="/careers/jobs"
                className="inline-flex items-center gap-2 text-[#0066ff] hover:text-[#0052cc] text-xs font-extrabold uppercase tracking-wider font-outfit"
              >
                <span>View Live Vacancies</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
          </div>

          {/* Point 41: CAREERS — ROLE CATEGORIES */}
          <div>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="inline-block px-3.5 py-1.5 bg-[#005f9e]/10 text-[#005f9e] text-xs font-black tracking-widest mb-3 font-outfit border border-[#005f9e]/20 uppercase">
                Role Categories
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f3a5e] tracking-tight leading-tight font-outfit">
                Disciplines We Recruit
              </h2>
              <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
                Bluegrid Utilities recruits across defined operational categories supporting authorised utility delivery.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
              {roleCategories.map((cat, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-slate-200 p-8 shadow-md hover:shadow-xl transition-all flex flex-col justify-between border-t-4 border-t-[#0f3a5e] group"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 bg-slate-100 text-[#005f9e] flex items-center justify-center group-hover:bg-[#005f9e] group-hover:text-white transition-colors">
                      <span className="material-symbols-outlined text-2xl">{cat.icon}</span>
                    </div>

                    <h3 className="text-xl font-bold text-[#0f3a5e] font-outfit">
                      {cat.title}
                    </h3>

                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium">
                      {cat.desc}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-slate-100">
                    <Link
                      to="/careers/jobs"
                      className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#005f9e] hover:text-[#0066ff] font-outfit"
                    >
                      <span>Check vacancies</span>
                      <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Point 42: CAREERS — WHAT WE LOOK FOR */}
          <div className="bg-slate-900 text-white p-8 sm:p-12 shadow-xl text-left border-l-4 border-l-[#0066ff] max-w-5xl mx-auto space-y-6">
            <span className="inline-block px-3 py-1 bg-white/10 text-white text-xs font-black tracking-widest font-outfit uppercase border border-white/20">
              Expectations & Values
            </span>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight font-outfit">
              What we look for
            </h2>

            <div className="space-y-4 text-slate-200 text-sm sm:text-base leading-relaxed font-medium">
              <p>
                Requirements differ by role, but we value people who take safety seriously, turn up reliably, communicate clearly, treat customers and colleagues professionally, keep accurate records and work within the instructions and authority given to them.
              </p>
              <p>
                Any mandatory qualifications, cards, licences, experience or other role requirements will be stated on the individual vacancy.
              </p>
            </div>
          </div>

          {/* Point 43: CAREERS — RECRUITMENT PROCESS */}
          <div>
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="inline-block px-3.5 py-1.5 bg-[#005f9e]/10 text-[#005f9e] text-xs font-black tracking-widest mb-3 font-outfit border border-[#005f9e]/20 uppercase">
                Structured Process
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f3a5e] tracking-tight leading-tight font-outfit">
                Recruitment Process
              </h2>
              <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
                A clear, staged recruitment pathway ensuring all candidates and project checks are handled transparently.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 text-left">
              {recruitmentSteps.map((step, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-slate-200 p-6 shadow-md flex flex-col justify-between border-t-4 border-t-[#005f9e]"
                >
                  <div className="space-y-3">
                    <span className="text-2xl font-black text-[#005f9e] font-outfit">
                      {step.step}
                    </span>
                    <h3 className="text-base font-bold text-[#0f3a5e] font-outfit">
                      {step.title}
                    </h3>
                    <p className="text-slate-600 text-xs leading-relaxed font-medium">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Point 43 Disclaimer */}
            <div className="mt-6 p-4 bg-slate-100 border border-slate-200 text-slate-600 text-xs font-medium text-left max-w-3xl mx-auto">
              <strong>Disclaimer:</strong> The exact recruitment process may vary by role. The vacancy page will explain any role-specific requirements.
            </div>
          </div>

          {/* Point 44: CAREERS — FAIR RECRUITMENT */}
          <div className="bg-white border border-slate-200 p-8 sm:p-10 shadow-md text-left max-w-4xl mx-auto space-y-4 border-l-4 border-l-[#0f3a5e]">
            <h2 className="text-xl sm:text-2xl font-bold text-[#0f3a5e] font-outfit">
              Fair recruitment and adjustments
            </h2>
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-medium">
              Bluegrid Utilities is committed to fair and consistent recruitment. Applications are considered against the requirements of the role. If you need a reasonable adjustment during the recruitment process, contact{' '}
              <a href="mailto:recruitment@bluegridutilities.com" className="text-[#0066ff] font-bold underline">
                recruitment@bluegridutilities.com
              </a>.
            </p>
            <div className="pt-2 text-xs text-slate-500">
              Candidate personal information is handled in strict compliance with our Candidate Privacy Notice.
            </div>
          </div>

          {/* Bottom Action CTA */}
          <div className="bg-[#0f3a5e] text-white p-8 sm:p-12 shadow-xl text-center space-y-4">
            <h3 className="text-2xl sm:text-3xl font-extrabold font-outfit">
              Ready to explore live opportunities?
            </h3>
            <p className="text-slate-200 text-sm sm:text-base max-w-2xl mx-auto font-medium">
              All approved vacancies are published on our Current Vacancies page with full role specifications and direct application routes.
            </p>
            <div className="pt-2">
              <Link
                to="/careers/jobs"
                className="inline-flex items-center justify-center gap-2 bg-[#0066ff] hover:bg-[#0052cc] text-white font-extrabold text-xs tracking-widest px-8 py-4 uppercase font-outfit transition-all shadow-md active:scale-95"
              >
                <span>View current vacancies</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
          </div>

        </div>
      </MotionSection>
    </div>
  );
};

export default CareerPage;
