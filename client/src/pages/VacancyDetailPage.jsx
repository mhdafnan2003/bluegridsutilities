import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import MotionSection from '../components/MotionSection';
import ApplicationForm from '../components/ApplicationForm';
import PageSEO from '../components/PageSEO';

const defaultVacancyData = {
  id: "JOB-BG-01",
  slug: "water-meter-installation-operative",
  title: "Water Meter Installation Operative – Digging & Reinstatement",
  reference: "BG-WM-COV-2026",
  category: "Field operations",
  location: "Coventry and surrounding operational areas",
  employmentType: "Permanent Full-Time or CIS Subcontract",
  workingPattern: "Monday – Friday (Standard site hours)",
  closingDate: "2026-10-31T17:00:00Z",
  isOpen: true,
  isExpired: false,
  salaryRate: "Permanent PAYE: £34,000 per annum | CIS Subcontract: £180–£220 per authorised working day*",
  roleSummary: "Physical field delivery role carrying out smart water meter installations, manual excavation, trenching, boundary box placement and street-works reinstatement across authorised project areas. Operatives work under direct supervision adhering strictly to approved RAMS and utility procedures.",
  keyResponsibilities: [
    "Carry out manual digging, chamber excavation and boundary box exposure in accordance with approved utility drawings and HSG47 safe digging guidelines.",
    "Install and exchange smart water meters and associated fittings compliant with client technical requirements.",
    "Perform clean water jointing, leak testing and seal verification following approved procedures.",
    "Carry out first-time surface reinstatement on footways, verges and modular paving to required street-works specifications.",
    "Accurately record installation serial numbers, photographic completion evidence and operational reports on mobile field devices.",
    "Adhere strictly to site safety controls, PPE requirements, customer care protocols and traffic-management arrangements."
  ],
  essentialRequirements: [
    "Physical fitness and willingness to perform manual outdoor excavation and reinstatement work in all weather conditions.",
    "Proven reliability, strong punctuality and a safety-first mindset on operational utility sites.",
    "Clear communication skills and professional conduct when interfacing with residents and customers.",
    "Ability to follow detailed RAMS, technical instructions and supervisor direction.",
    "Eligible to live and work in the United Kingdom without restriction."
  ],
  desirableRequirements: [
    "Prior experience in clean water distribution, utility groundworks or street-works reinstatement.",
    "Demonstrated experience using CAT and Genny cable location equipment.",
    "Experience with mobile digital completion reporting systems."
  ],
  requiredCardsLicences: [
    "Full valid UK Driving Licence (preferred for team mobility).",
    "EUSR National Water Hygiene Card (or commitment to complete during induction).",
    "EUSR SHEA Water Safety Passport (or commitment to complete).",
    "NRSWA Street Works Operative Card (Units 1–5, 8) advantageous."
  ],
  payAndBenefits: [
    "Permanent PAYE Option: £34,000 per annum, paid monthly with statutory holiday entitlement and pension contribution.",
    "Self-Employed CIS Subcontract Option: £180–£220 per authorised working day, paid weekly subject to verified attendance and completion.",
    "Full branded PPE and specialist tooling provided by Bluegrid Utilities."
  ]
};

const VacancyDetailPage = () => {
  const { slug } = useParams();
  const [vacancy, setVacancy] = useState(defaultVacancyData);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSlug = slug || 'water-meter-installation-operative';
    fetch(`/api/careers/vacancies/${fetchSlug}`)
      .then(res => res.json())
      .then(data => {
        if (data && data.success && data.data) {
          setVacancy(data.data);
        } else {
          setVacancy(defaultVacancyData);
        }
      })
      .catch(() => {
        setVacancy(defaultVacancyData);
      })
      .finally(() => setLoading(false));
  }, [slug]);

  // Handle Google JobPosting Structured Data injection (Point 51 & Point 52)
  useEffect(() => {
    const scriptId = 'google-jobposting-ldjson';
    let existingScript = document.getElementById(scriptId);

    // Only inject if role is open and published (Point 52)
    if (vacancy && vacancy.isOpen && !vacancy.isExpired) {
      if (!existingScript) {
        existingScript = document.createElement('script');
        existingScript.id = scriptId;
        existingScript.type = 'application/ld+json';
        document.head.appendChild(existingScript);
      }

      const jobPostingData = {
        "@context": "https://schema.org/",
        "@type": "JobPosting",
        "title": vacancy.title,
        "description": vacancy.roleSummary,
        "identifier": {
          "@type": "PropertyValue",
          "name": "Bluegrid Utilities",
          "value": vacancy.reference || "BG-VAC"
        },
        "datePosted": vacancy.openingDate || "2026-03-01",
        "validThrough": vacancy.closingDate || undefined, // Point 51
        "employmentType": vacancy.employmentType?.includes('Full-Time') ? "FULL_TIME" : "CONTRACTOR",
        "hiringOrganization": {
          "@type": "Organization",
          "name": "Bluegrid Utilities",
          "sameAs": "https://www.bluegridutilities.com",
          "logo": "https://www.bluegridutilities.com/logo.png"
        },
        "jobLocation": {
          "@type": "Place",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": vacancy.location?.split(' ')[0] || "Coventry",
            "addressRegion": "West Midlands",
            "addressCountry": "GB"
          }
        },
        "baseSalary": vacancy.salaryRate ? {
          "@type": "MonetaryAmount",
          "currency": "GBP",
          "value": {
            "@type": "QuantitativeValue",
            "value": 34000,
            "unitText": "YEAR"
          }
        } : undefined
      };

      existingScript.text = JSON.stringify(jobPostingData);
    } else if (existingScript) {
      // Point 51 & 52: When closing date passes or closed, remove JobPosting structured data
      existingScript.remove();
    }

    return () => {
      const s = document.getElementById(scriptId);
      if (s) s.remove();
    };
  }, [vacancy]);

  const scrollToApply = () => {
    const el = document.getElementById('application-form-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const formatDate = (dateStr) => {
    if (!dateStr) return 'To be confirmed';
    try {
      const d = new Date(dateStr);
      return d.toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
    } catch {
      return dateStr;
    }
  };

  const seoTitle = `${vacancy.title} - ${vacancy.location?.split(' ')[0] || 'UK'} | Bluegrid Utilities Careers`;
  const seoDescription = `Apply for ${vacancy.title} with Bluegrid Utilities in ${vacancy.location}. View role requirements, working details, closing date and application route.`;

  return (
    <div className="font-sans bg-slate-50 min-h-screen">
      <PageSEO customTitle={seoTitle} customDescription={seoDescription} />

      <MotionSection
        as="div"
        className="pb-24"
        id="vacancy-detail-view"
        initial="hidden"
        animate="visible"
        whileInView={undefined}
        viewport={undefined}
      >
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-12 pt-8">

          {/* Breadcrumb Navigation */}
          <div className="pb-6 flex items-center gap-2 text-xs font-semibold text-slate-500 font-outfit uppercase tracking-wider text-left">
            <Link to="/" className="hover:text-[#005f9e] transition-colors">Home</Link>
            <span>/</span>
            <Link to="/careers" className="hover:text-[#005f9e] transition-colors">Careers</Link>
            <span>/</span>
            <Link to="/careers/jobs" className="hover:text-[#005f9e] transition-colors">Vacancies</Link>
            <span>/</span>
            <span className="text-[#0f3a5e] line-clamp-1">{vacancy.title}</span>
          </div>

          {/* Point 49 EXACT STRUCTURE: Role Header Box */}
          <div className="bg-white border border-slate-200 p-6 sm:p-10 mb-10 shadow-md text-left border-l-4 border-l-[#005f9e]">
            <div className="space-y-4 max-w-4xl">
              {/* Reference and Status */}
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 bg-blue-50 border border-blue-200 text-[#005f9e] font-outfit">
                  {vacancy.category || 'Field Operations'}
                </span>
                {vacancy.isOpen && !vacancy.isExpired ? (
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-emerald-50 text-emerald-700 text-xs font-bold uppercase font-outfit border border-emerald-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Open for Applications
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-rose-50 text-rose-700 text-xs font-bold uppercase font-outfit border border-rose-200">
                    Vacancy Closed / Expired
                  </span>
                )}
              </div>

              {/* Point 49: [ROLE TITLE] */}
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0f3a5e] tracking-tight font-outfit">
                {vacancy.title}
              </h1>

              {/* Point 49: [LOCATION] | [EMPLOYMENT TYPE] | [WORKING PATTERN] | Ref: [REFERENCE] */}
              <div className="flex flex-wrap items-center gap-y-1 gap-x-3 text-xs sm:text-sm font-semibold text-slate-700 font-outfit">
                <span>{vacancy.location}</span>
                <span className="text-slate-300">|</span>
                <span>{vacancy.employmentType}</span>
                {vacancy.workingPattern && (
                  <>
                    <span className="text-slate-300">|</span>
                    <span>{vacancy.workingPattern}</span>
                  </>
                )}
                {vacancy.reference && (
                  <>
                    <span className="text-slate-300">|</span>
                    <span className="text-slate-500">Ref: {vacancy.reference}</span>
                  </>
                )}
              </div>

              {/* Point 49: Closing date: [DATE AND TIME] */}
              <div className="text-xs sm:text-sm font-bold text-[#005f9e] font-outfit pt-1">
                Closing date: {formatDate(vacancy.closingDate)}
              </div>

              {/* Action Button */}
              {vacancy.isOpen && !vacancy.isExpired ? (
                <div className="pt-3">
                  <button
                    onClick={scrollToApply}
                    className="inline-flex items-center justify-center gap-2 bg-[#0066ff] hover:bg-[#0052cc] text-white font-extrabold text-xs tracking-widest px-8 py-3.5 uppercase font-outfit transition-all shadow-md active:scale-95 cursor-pointer"
                  >
                    <span>Apply for this role</span>
                    <span className="material-symbols-outlined text-sm">arrow_downward</span>
                  </button>
                </div>
              ) : (
                <div className="p-4 bg-slate-100 border border-slate-300 text-slate-600 text-xs font-medium">
                  This vacancy has closed. In accordance with Bluegrid Utilities recruitment governance, applications are no longer accepted for this reference.
                </div>
              )}
            </div>
          </div>

          {/* Point 49: Detailed Structure Body */}
          <div className="bg-white border border-slate-200 p-6 sm:p-10 shadow-md text-left space-y-10 max-w-4xl mx-auto">
            
            {/* Point 49: Role summary */}
            <section className="space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-[#0f3a5e] font-outfit border-b border-slate-100 pb-2">
                Role summary
              </h2>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-medium">
                {vacancy.roleSummary}
              </p>
            </section>

            {/* Point 49: Key responsibilities */}
            <section className="space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-[#0f3a5e] font-outfit border-b border-slate-100 pb-2">
                Key responsibilities
              </h2>
              <ul className="space-y-2.5">
                {(vacancy.keyResponsibilities || []).map((resp, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-slate-700 text-xs sm:text-sm leading-relaxed font-medium">
                    <span className="material-symbols-outlined text-[#005f9e] text-base shrink-0 mt-0.5">check_circle</span>
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Point 49: Essential requirements */}
            <section className="space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-[#0f3a5e] font-outfit border-b border-slate-100 pb-2">
                Essential requirements
              </h2>
              <ul className="space-y-2.5">
                {(vacancy.essentialRequirements || []).map((req, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-slate-700 text-xs sm:text-sm leading-relaxed font-medium">
                    <span className="material-symbols-outlined text-[#0066ff] text-base shrink-0 mt-0.5">verified</span>
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Point 49: Desirable requirements */}
            {vacancy.desirableRequirements && vacancy.desirableRequirements.length > 0 && (
              <section className="space-y-3">
                <h2 className="text-lg sm:text-xl font-bold text-[#0f3a5e] font-outfit border-b border-slate-100 pb-2">
                  Desirable requirements
                </h2>
                <ul className="space-y-2.5">
                  {vacancy.desirableRequirements.map((des, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-slate-700 text-xs sm:text-sm leading-relaxed font-medium">
                      <span className="material-symbols-outlined text-slate-400 text-base shrink-0 mt-0.5">add_circle</span>
                      <span>{des}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Point 49: Qualifications/cards/licences */}
            <section className="space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-[#0f3a5e] font-outfit border-b border-slate-100 pb-2">
                Qualifications, cards and licences
              </h2>
              <ul className="space-y-2.5">
                {(vacancy.requiredCardsLicences || []).map((card, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-slate-700 text-xs sm:text-sm leading-relaxed font-medium">
                    <span className="material-symbols-outlined text-[#005f9e] text-base shrink-0 mt-0.5">badge</span>
                    <span>{card}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Point 49: Pay and benefits */}
            <section className="space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-[#0f3a5e] font-outfit border-b border-slate-100 pb-2">
                Pay and benefits
              </h2>
              {vacancy.salaryRate && (
                <div className="p-4 bg-slate-50 border border-slate-200 text-[#0f3a5e] font-bold text-sm sm:text-base font-outfit">
                  {vacancy.salaryRate}
                </div>
              )}
              {vacancy.payAndBenefits && (
                <ul className="space-y-2 pt-2">
                  {vacancy.payAndBenefits.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-slate-700 text-xs sm:text-sm leading-relaxed font-medium">
                      <span className="material-symbols-outlined text-emerald-600 text-base shrink-0 mt-0.5">payments</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </section>

            {/* Point 49: How to apply */}
            <section className="space-y-2 bg-blue-50/60 p-6 border border-blue-200/80">
              <h2 className="text-base font-bold text-[#0f3a5e] font-outfit uppercase">
                How to apply
              </h2>
              <p className="text-slate-700 text-xs sm:text-sm leading-relaxed font-medium">
                Submit your application using the button below. Please provide only the information requested for this vacancy.
              </p>
            </section>

            {/* Point 49: Candidate privacy */}
            <section className="space-y-2 bg-slate-50 p-6 border border-slate-200">
              <h2 className="text-base font-bold text-[#0f3a5e] font-outfit uppercase">
                Candidate privacy
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                We use applicant information for recruitment and related checks in line with our Candidate Privacy Notice. Read the notice before submitting your application.{' '}
                <Link to="/policies" className="text-[#0066ff] font-bold underline">
                  Read Candidate Privacy Notice
                </Link>.
              </p>
            </section>

            {/* Point 49: Apply for this role CTA */}
            {vacancy.isOpen && !vacancy.isExpired && (
              <div className="pt-4 border-t border-slate-200 text-center sm:text-left">
                <button
                  onClick={scrollToApply}
                  className="inline-flex items-center justify-center gap-2 bg-[#0066ff] hover:bg-[#0052cc] text-white font-extrabold text-xs tracking-widest px-10 py-4 uppercase font-outfit transition-all shadow-md active:scale-95 cursor-pointer"
                >
                  <span>Apply for this role</span>
                  <span className="material-symbols-outlined text-sm">arrow_downward</span>
                </button>
              </div>
            )}
          </div>

          {/* Application Form Section (Point 50 Data Minimisation) */}
          {vacancy.isOpen && !vacancy.isExpired ? (
            <div id="application-form-section" className="mt-14 max-w-4xl mx-auto">
              <ApplicationForm defaultRole={vacancy.title} />
            </div>
          ) : (
            <div className="mt-10 p-8 bg-white border border-slate-200 max-w-4xl mx-auto text-left space-y-3">
              <h3 className="text-lg font-bold text-[#0f3a5e] font-outfit">Recruitment Closed</h3>
              <p className="text-slate-600 text-xs sm:text-sm">
                Applications for {vacancy.title} are now closed. For general enquiries regarding upcoming utility field roles, please contact{' '}
                <a href="mailto:recruitment@bluegridutilities.com" className="text-[#0066ff] font-bold underline">
                  recruitment@bluegridutilities.com
                </a>.
              </p>
            </div>
          )}

        </div>
      </MotionSection>
    </div>
  );
};

export default VacancyDetailPage;
