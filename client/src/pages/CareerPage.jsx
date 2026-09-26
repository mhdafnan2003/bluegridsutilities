import React from 'react';
import { Link } from 'react-router-dom';
import MotionSection from '../components/MotionSection';
import PageSEO from '../components/PageSEO';

// Pack 14 Role Families
const roleFamilies = [
  {
    title: "Field operations",
    code: "FIELD-OPS",
    desc: "Operative/installer roles where vacancies are approved.",
    icon: "construction"
  },
  {
    title: "Supervision",
    code: "SUPERVISION",
    desc: "Team-leader or supervisor roles linked to live project requirements.",
    icon: "engineering"
  },
  {
    title: "Project and operational support",
    code: "PRJ-OPS",
    desc: "Coordination, administration and reporting roles.",
    icon: "manage_accounts"
  },
  {
    title: "Management and specialist roles",
    code: "MGMT-SPEC",
    desc: "Only when an approved vacancy exists.",
    icon: "assignment"
  }
];

// Pack 14 Recruitment Process
const recruitmentSteps = [
  {
    step: "01",
    title: "Apply",
    desc: "Use the live vacancy page and submit only the information requested."
  },
  {
    step: "02",
    title: "Review",
    desc: "Applications are reviewed against the requirements of the specific role."
  },
  {
    step: "03",
    title: "Selection",
    desc: "Suitable candidates may be invited to interview and/or role-relevant assessment."
  },
  {
    step: "04",
    title: "Pre-employment",
    desc: "Any right-to-work, reference, competence or other checks are completed at the appropriate stage."
  },
  {
    step: "05",
    title: "Offer/onboarding",
    desc: "Employment or engagement is confirmed only through authorised written documentation."
  }
];

const CareerPage = () => {
  return (
    <div className="font-sans bg-[#f3f7fa] min-h-screen">
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
        {/* Pack 14: CAREERS — HERO */}
        <div className="bg-[#0f3a5e] text-white py-16 sm:py-24 border-b-4 border-[#005f9e]">
          <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-12 text-left space-y-6">
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-300 font-outfit uppercase tracking-wider">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-[#005f9e]">Careers</span>
            </div>

            <span className="inline-block px-3.5 py-1.5 bg-white/10 text-white text-xs font-black tracking-widest font-outfit uppercase border border-white/20">
              CAREERS
            </span>

            {/* Pack 14 Heading */}
            <h1 className="text-h1 md:text-h1-lg font-extrabold tracking-tight font-outfit max-w-4xl">
              Careers at Bluegrid Utilities
            </h1>

            {/* Pack 14 Intro */}
            <p className="text-body md:text-body-lg text-slate-200 max-w-3xl leading-relaxed font-medium">
              Our utility projects depend on people who work safely, communicate clearly and take responsibility for the quality of their work. We recruit for field, supervisory, project-support and operational roles as project requirements arise.
            </p>

            {/* Pack 14 Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link
                to="/careers/jobs"
                className="text-nav inline-flex items-center justify-center gap-2 bg-[#005f9e] hover:bg-[#004c80] text-white font-extrabold tracking-wide px-8 py-4 uppercase font-outfit transition-all shadow-md active:scale-95 cursor-pointer"
              >
                <span>View Current Vacancies</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>

              <a
                href="mailto:recruitment@bluegridutilities.com"
                className="text-nav inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-100 text-[#0f3a5e] font-extrabold tracking-wide px-8 py-4 uppercase font-outfit transition-all shadow-md active:scale-95 cursor-pointer"
              >
                <span>Recruitment Enquiries</span>
                <span className="material-symbols-outlined text-sm">mail</span>
              </a>
            </div>
          </div>
        </div>

        {/* Content Container */}
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-12 pt-16 space-y-20">

          {/* Pack 14: WORKING HERE */}
          <div className="bg-white border border-slate-200 p-8 sm:p-12 shadow-md text-left border-l-4 border-l-[#005f9e] max-w-5xl mx-auto space-y-6">
            <span className="inline-block px-3 py-1 bg-[#005f9e]/10 text-[#005f9e] text-xs font-black tracking-widest font-outfit uppercase border border-[#005f9e]/20">
              Working Here
            </span>

            <h2 className="text-h2 md:text-h2-lg font-extrabold text-[#0f3a5e] tracking-tight font-outfit">
              Practical Work. Clear Expectations.
            </h2>

            <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed font-medium">
              <p>
                Roles at Bluegrid may involve field delivery, supervision, mobilisation, project administration or operational support. Whatever the role, we expect accurate information, professional conduct, respect for safety requirements and timely escalation when something is not right.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between flex-wrap gap-4">
              <span className="text-xs text-slate-500 font-medium">
                Direct route: recruitment@bluegridutilities.com
              </span>
              <Link
                to="/careers/jobs"
                className="inline-flex items-center gap-2 text-[#005f9e] hover:text-[#004c80] text-xs font-extrabold uppercase tracking-wider font-outfit"
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
              <h2 className="text-h2 md:text-h2-lg font-extrabold text-[#0f3a5e] tracking-tight leading-tight font-outfit">
                Role Families
              </h2>
              <p className="text-body md:text-body-lg mt-3 text-[#1f2937] leading-relaxed font-medium">
                Bluegrid Utilities recruits across defined role families as authorised project requirements arise.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
              {roleFamilies.map((cat, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-slate-200 p-8 shadow-md hover:shadow-xl transition-all flex flex-col justify-between border-t-4 border-t-[#0f3a5e] group"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 bg-slate-100 text-[#005f9e] flex items-center justify-center group-hover:bg-[#005f9e] group-hover:text-white transition-colors">
                      <span className="material-symbols-outlined text-2xl">{cat.icon}</span>
                    </div>

                    <h3 className="text-h3 md:text-h3-lg font-bold text-[#0f3a5e] font-outfit">
                      {cat.title}
                    </h3>

                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium">
                      {cat.desc}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-slate-100">
                    <Link
                      to="/careers/jobs"
                      className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#005f9e] hover:text-[#005f9e] font-outfit"
                    >
                      <span>Check vacancies</span>
                      <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pack 14: RECRUITMENT PROCESS */}
          <div>
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="inline-block px-3.5 py-1.5 bg-[#005f9e]/10 text-[#005f9e] text-xs font-black tracking-widest mb-3 font-outfit border border-[#005f9e]/20 uppercase">
                Staged Process
              </span>
              <h2 className="text-h2 md:text-h2-lg font-extrabold text-[#0f3a5e] tracking-tight leading-tight font-outfit">
                Recruitment Process
              </h2>
              <p className="text-body md:text-body-lg mt-3 text-[#1f2937] leading-relaxed font-medium">
                A disciplined, five-step pathway ensuring transparent and authorised candidate progression.
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
          </div>

          {/* Pack 14: NO VACANCY / KEEP AN EYE ON NEW OPPORTUNITIES */}
          <div className="bg-white border border-slate-200 p-8 sm:p-12 shadow-md text-left border-l-4 border-l-amber-500 max-w-5xl mx-auto space-y-6">
            <span className="inline-block px-3 py-1 bg-amber-500/10 text-amber-700 text-xs font-black tracking-widest font-outfit uppercase border border-amber-500/20">
              Notice
            </span>

            <h2 className="text-h2 md:text-h2-lg font-extrabold text-[#0f3a5e] tracking-tight font-outfit">
              Keep an Eye on New Opportunities
            </h2>

            <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed font-medium">
              <p>
                If there is no suitable live vacancy, please check this page again as project requirements change. Do not send identity documents, banking information or other sensitive records unless specifically requested through an authorised recruitment process.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between flex-wrap gap-4">
              <span className="text-xs text-slate-500 font-medium">
                Recruitment contact: recruitment@bluegridutilities.com
              </span>
              <Link
                to="/careers/jobs"
                className="inline-flex items-center gap-2 text-[#005f9e] hover:text-[#004c80] text-xs font-extrabold uppercase tracking-wider font-outfit"
              >
                <span>View Current Vacancies</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
          </div>

          {/* Bottom Action CTA */}
          <div className="bg-[#0f3a5e] text-white p-8 sm:p-12 shadow-xl text-center space-y-4">
            <h3 className="text-h2 md:text-h2-lg font-extrabold font-outfit">
              View Current Vacancies
            </h3>
            <p className="text-body md:text-body-lg text-slate-200 max-w-2xl mx-auto font-medium">
              All approved vacancies are published on our Current Vacancies page with full role specifications and direct application routes.
            </p>
            <div className="pt-2">
              <Link
                to="/careers/jobs"
                className="text-nav inline-flex items-center justify-center gap-2 bg-[#005f9e] hover:bg-[#004c80] text-white font-extrabold tracking-wide px-8 py-4 uppercase font-outfit transition-all shadow-md active:scale-95"
              >
                <span>View Current Vacancies</span>
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
