import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MotionSection from '../components/MotionSection';

const fallbackVacancies = [
  {
    id: "JOB-BG-01",
    slug: "water-meter-installation-operative",
    title: "Water Meter Installation Operative – Digging & Reinstatement",
    reference: "BG-WM-COV-2026",
    category: "Field operations",
    location: "Coventry and surrounding operational areas",
    employmentType: "Permanent Full-Time or CIS Subcontract",
    workingPattern: "Monday – Friday (Standard site hours)",
    closingDate: "2026-10-31T17:00:00Z",
    roleSummary: "Physical field delivery role carrying out smart water meter installations, manual excavation, trenching, boundary box placement and street-works reinstatement across authorized project areas."
  }
];

const VacanciesPage = () => {
  const [vacancies, setVacancies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/careers/vacancies')
      .then(res => res.json())
      .then(data => {
        if (data && data.success && Array.isArray(data.data)) {
          setVacancies(data.data);
        } else {
          setVacancies(fallbackVacancies);
        }
      })
      .catch(() => {
        // Fallback to local approved initial vacancy if backend offline
        setVacancies(fallbackVacancies);
      })
      .finally(() => setLoading(false));
  }, []);

  const formatDate = (dateStr) => {
    if (!dateStr) return 'To be confirmed';
    try {
      const d = new Date(dateStr);
      return d.toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      });
    } catch {
      return dateStr;
    }
  };

  return (
    <div className="font-sans bg-[#f3f7fa] min-h-screen">
      <MotionSection
        as="div"
        className="pb-24"
        id="vacancies-page"
        initial="hidden"
        animate="visible"
        whileInView={undefined}
        viewport={undefined}
      >
        {/* Header Banner */}
        <div className="bg-[#0f3a5e] text-white py-16 sm:py-20 border-b-4 border-[#005f9e]">
          <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-12 text-left space-y-4">
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-300 font-outfit uppercase tracking-wider">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <Link to="/careers" className="hover:text-white transition-colors">Careers</Link>
              <span>/</span>
              <span className="text-[#005f9e]">Current Vacancies</span>
            </div>

            <span className="inline-block px-3.5 py-1.5 bg-white/10 text-white text-xs font-black tracking-widest font-outfit uppercase border border-white/20">
              Approved Opportunities
            </span>

            <h1 className="text-h1 md:text-h1-lg font-extrabold tracking-tight font-outfit">
              Current Vacancies
            </h1>

            <p className="text-body md:text-body-lg text-slate-200 max-w-3xl leading-relaxed font-medium">
              All vacancies currently approved for recruitment are listed below. Each vacancy should show the role title, location, employment type, working pattern where applicable, closing date and a clear route to apply.
            </p>
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-12 pt-12">
          {loading ? (
            <div className="py-20 text-center text-slate-500 font-medium">
              <span className="material-symbols-outlined text-4xl animate-spin text-[#005f9e] mb-3">
                progress_activity
              </span>
              <p>Checking live vacancies...</p>
            </div>
          ) : vacancies.length === 0 ? (
            /* Point 45 Exact Empty State */
            <div className="bg-white border border-slate-200 p-8 sm:p-12 text-left max-w-3xl mx-auto shadow-md border-l-4 border-l-amber-500 space-y-4">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-amber-600 text-2xl">info</span>
                <h2 className="text-h3 md:text-h3-lg font-bold text-[#0f3a5e] font-outfit">No Live Vacancies</h2>
              </div>
              <p className="text-body md:text-body-lg text-[#1f2937] leading-relaxed">
                There are no live vacancies at the moment. Please check this page again for future opportunities. For general recruitment enquiries, contact{' '}
                <a href="mailto:recruitment@bluegridutilities.com" className="text-[#005f9e] font-bold underline">
                  recruitment@bluegridutilities.com
                </a>.
              </p>
              <div className="pt-4 border-t border-slate-100 flex flex-wrap gap-4">
                <Link
                  to="/careers"
                  className="text-nav px-6 py-3 bg-[#0f3a5e] hover:bg-[#005f9e] text-white font-bold font-outfit uppercase tracking-wide transition-colors"
                >
                  Careers Overview
                </Link>
                <a
                  href="mailto:recruitment@bluegridutilities.com"
                  className="text-nav px-6 py-3 bg-white border border-slate-300 text-slate-700 hover:bg-slate-50 font-bold font-outfit uppercase tracking-wide transition-colors"
                >
                  General Recruitment Enquiries
                </a>
              </div>
            </div>
          ) : (
            /* Live Vacancies Listing */
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-slate-200 pb-4 text-left">
                <h2 className="text-h3 md:text-h3-lg font-bold text-[#0f3a5e] font-outfit">
                  Live Opportunities ({vacancies.length})
                </h2>
                <span className="text-xs text-slate-500 font-medium">
                  Updated directly from operations management
                </span>
              </div>

              <div className="grid grid-cols-1 gap-6">
                {vacancies.map((vacancy) => (
                  <div
                    key={vacancy.id || vacancy.slug}
                    className="bg-white border border-slate-200 p-6 sm:p-8 shadow-md hover:shadow-lg transition-all text-left border-l-4 border-l-[#005f9e] flex flex-col lg:flex-row lg:items-center justify-between gap-6"
                  >
                    <div className="space-y-3 max-w-4xl">
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 bg-blue-50 border border-blue-200 text-[#005f9e] font-outfit">
                          {vacancy.category || 'Field Operations'}
                        </span>
                        {vacancy.reference && (
                          <span className="text-xs text-slate-400 font-medium font-outfit">
                            Ref: {vacancy.reference}
                          </span>
                        )}
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-emerald-50 text-emerald-700 text-xs font-bold uppercase font-outfit border border-emerald-200">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                          Open for Applications
                        </span>
                      </div>

                      <h3 className="text-h3 md:text-h3-lg font-bold text-[#0f3a5e] font-outfit">
                        <Link
                          to={`/careers/jobs/${vacancy.slug}`}
                          className="hover:text-[#005f9e] transition-colors"
                        >
                          {vacancy.title}
                        </Link>
                      </h3>

                      {/* Meta attributes: Location | Employment Type | Working Pattern */}
                      <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-xs sm:text-sm text-slate-600 font-medium">
                        <span className="flex items-center gap-1.5">
                          <span className="material-symbols-outlined text-sm text-[#005f9e]">location_on</span>
                          {vacancy.location}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1.5">
                          <span className="material-symbols-outlined text-sm text-[#005f9e]">schedule</span>
                          {vacancy.employmentType}
                        </span>
                        {vacancy.workingPattern && (
                          <>
                            <span>•</span>
                            <span>{vacancy.workingPattern}</span>
                          </>
                        )}
                      </div>

                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed line-clamp-2">
                        {vacancy.roleSummary}
                      </p>

                      <div className="text-xs text-slate-500 font-medium pt-1">
                        <span className="font-semibold text-slate-700">Closing date:</span>{' '}
                        {formatDate(vacancy.closingDate)}
                      </div>
                    </div>

                    <div className="shrink-0 flex flex-col sm:flex-row lg:flex-col gap-3">
                      <Link
                        to={`/careers/jobs/${vacancy.slug}`}
                        className="text-nav inline-flex items-center justify-center gap-2 bg-[#005f9e] hover:bg-[#004c80] text-white font-extrabold tracking-wide px-7 py-3.5 uppercase font-outfit transition-all shadow-md active:scale-95"
                      >
                        <span>View Role &amp; Apply</span>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Section 27 Speculative Application Box */}
          <div className="mt-12 p-6 sm:p-8 bg-slate-100 border border-slate-200 text-left max-w-4xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="space-y-1.5">
              <h4 className="font-bold text-[#0f3a5e] text-base font-outfit uppercase">
                General Recruitment Enquiries
              </h4>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                If your role is not currently listed above, you can send an exploratory enquiry with your CV and details of your current tickets to{' '}
                <a href="mailto:recruitment@bluegridutilities.com" className="text-[#005f9e] font-bold underline">
                  recruitment@bluegridutilities.com
                </a>.
              </p>
            </div>
            <a
              href="mailto:recruitment@bluegridutilities.com"
              className="text-nav px-5 py-3 bg-white border border-slate-300 text-[#0f3a5e] hover:bg-slate-50 font-bold font-outfit uppercase tracking-wide shrink-0 transition-colors shadow-sm"
            >
              Contact Recruitment
            </a>
          </div>
        </div>
      </MotionSection>
    </div>
  );
};

export default VacanciesPage;
