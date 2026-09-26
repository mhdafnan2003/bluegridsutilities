import React, { useState, useEffect, useRef } from 'react';
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
  const [isApplyOpen, setIsApplyOpen] = useState(false);
  // The form stays mounted after the first open so answers survive closing and reopening the popup.
  const [hasOpenedApply, setHasOpenedApply] = useState(false);
  const closeButtonRef = useRef(null);
  const lastTriggerRef = useRef(null);

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

  const openApply = (event) => {
    lastTriggerRef.current = event?.currentTarget || null;
    setHasOpenedApply(true);
    setIsApplyOpen(true);
  };

  const closeApply = () => {
    setIsApplyOpen(false);
    lastTriggerRef.current?.focus();
  };

  // Lock page scroll, focus the popup and close on Escape while it is open.
  useEffect(() => {
    if (!isApplyOpen) return undefined;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();
    const onKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsApplyOpen(false);
        lastTriggerRef.current?.focus();
      }
    };
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [isApplyOpen]);

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

  const isOpen = vacancy.isOpen && !vacancy.isExpired;

  const keyDetails = [
    { icon: 'location_on', label: 'Location', value: vacancy.location },
    { icon: 'work', label: 'Employment type', value: vacancy.employmentType },
    { icon: 'schedule', label: 'Working pattern', value: vacancy.workingPattern },
    { icon: 'event', label: 'Closing date', value: formatDate(vacancy.closingDate) },
    { icon: 'tag', label: 'Reference', value: vacancy.reference },
  ].filter((item) => item.value);

  const listSection = (title, items, icon, iconClass = 'text-[#005f9e]') =>
    items && items.length > 0 && (
      <section className="bg-white border border-slate-200 p-6 sm:p-8">
        <h2 className="text-h3 md:text-h3-lg font-bold text-[#0f3a5e] font-outfit mb-5">{title}</h2>
        <ul className="space-y-3">
          {items.map((item, idx) => (
            <li key={idx} className="flex items-start gap-3 text-[#1f2937] text-base leading-relaxed">
              <span aria-hidden="true" className={`material-symbols-outlined text-xl shrink-0 mt-0.5 ${iconClass}`}>{icon}</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>
    );

  const applyButtonClass =
    'text-nav inline-flex items-center justify-center bg-[#005f9e] hover:bg-[#004c80] text-white font-bold px-8 py-3.5 font-outfit transition-colors shadow-sm cursor-pointer focus:outline-none focus-visible:ring-4 focus-visible:ring-[#005f9e]/40';

  return (
    <div className="font-sans bg-[#f3f7fa] min-h-screen">
      <PageSEO customTitle={seoTitle} customDescription={seoDescription} />

      <MotionSection
        as="div"
        className="pb-20"
        id="vacancy-detail-view"
        initial="hidden"
        animate="visible"
        whileInView={undefined}
        viewport={undefined}
      >
        {/* Role header */}
        <div className="bg-white border-b border-slate-200">
          <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-12 pt-8 pb-10">
            <nav aria-label="Breadcrumb" className="pb-6 flex items-center gap-2 text-xs font-semibold text-slate-500 font-outfit uppercase tracking-wider text-left">
              <Link to="/" className="hover:text-[#005f9e] transition-colors">Home</Link>
              <span>/</span>
              <Link to="/careers" className="hover:text-[#005f9e] transition-colors">Careers</Link>
              <span>/</span>
              <Link to="/careers/jobs" className="hover:text-[#005f9e] transition-colors">Vacancies</Link>
              <span>/</span>
              <span className="text-[#0f3a5e] line-clamp-1">{vacancy.title}</span>
            </nav>

            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 text-left">
              <div className="space-y-4 max-w-5xl">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 bg-[#f3f7fa] border border-slate-200 text-[#005f9e] font-outfit">
                    {vacancy.category || 'Field Operations'}
                  </span>
                  {isOpen ? (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-emerald-50 text-emerald-700 text-xs font-bold uppercase font-outfit border border-emerald-200">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      Open for applications
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-rose-50 text-rose-700 text-xs font-bold uppercase font-outfit border border-rose-200">
                      Vacancy closed
                    </span>
                  )}
                </div>

                <h1 className="text-h1 md:text-h1-lg font-extrabold text-[#0f3a5e] tracking-tight font-outfit">
                  {vacancy.title}
                </h1>

                <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm sm:text-base text-slate-700 font-medium">
                  {keyDetails.slice(0, 3).map(({ icon, label, value }) => (
                    <li key={label} className="inline-flex items-center gap-1.5">
                      <span aria-hidden="true" className="material-symbols-outlined text-lg text-[#005f9e]">{icon}</span>
                      <span className="sr-only">{label}: </span>
                      {value}
                    </li>
                  ))}
                </ul>
              </div>

              {isOpen && (
                <div className="shrink-0 flex flex-col items-start lg:items-end gap-2">
                  <button type="button" onClick={openApply} className={applyButtonClass}>
                    Apply for this role
                  </button>
                  <p className="text-sm text-slate-500">Closes {formatDate(vacancy.closingDate)}</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Role details */}
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-12 pt-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-start text-left">

            <div className="lg:col-span-2 space-y-6">
              <section className="bg-white border border-slate-200 p-6 sm:p-8">
                <h2 className="text-h3 md:text-h3-lg font-bold text-[#0f3a5e] font-outfit mb-4">Role summary</h2>
                <p className="text-body md:text-body-lg text-[#1f2937] leading-relaxed">{vacancy.roleSummary}</p>
              </section>

              {listSection('Key responsibilities', vacancy.keyResponsibilities, 'check_circle')}

              <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                {listSection('Essential requirements', vacancy.essentialRequirements, 'verified')}
                {listSection('Desirable requirements', vacancy.desirableRequirements, 'add_circle', 'text-slate-400')}
              </div>

              {listSection('Qualifications, cards and licences', vacancy.requiredCardsLicences, 'badge')}
            </div>

            {/* Sidebar */}
            <aside className="space-y-6 lg:sticky lg:top-28">
              <div className="bg-white border border-slate-200 border-t-4 border-t-[#005f9e] p-6 sm:p-8">
                <h2 className="text-h3 md:text-h3-lg font-bold text-[#0f3a5e] font-outfit mb-5">Key details</h2>
                <dl className="space-y-4">
                  {keyDetails.map(({ icon, label, value }) => (
                    <div key={label} className="flex items-start gap-3">
                      <span aria-hidden="true" className="material-symbols-outlined text-xl text-[#005f9e] shrink-0">{icon}</span>
                      <div>
                        <dt className="text-xs font-semibold uppercase tracking-wider text-slate-500">{label}</dt>
                        <dd className="text-base text-[#1f2937] font-medium">{value}</dd>
                      </div>
                    </div>
                  ))}
                </dl>

                {isOpen ? (
                  <button type="button" onClick={openApply} className={`${applyButtonClass} w-full mt-7`}>
                    Apply for this role
                  </button>
                ) : (
                  <p className="mt-7 p-4 bg-[#f3f7fa] border border-slate-200 text-slate-600 text-sm">
                    Applications for this role are now closed. For upcoming field roles, email{' '}
                    <a href="mailto:recruitment@bluegridutilities.com" className="text-[#005f9e] font-bold underline">
                      recruitment@bluegridutilities.com
                    </a>.
                  </p>
                )}
              </div>

              {(vacancy.salaryRate || vacancy.payAndBenefits?.length > 0) && (
                <section className="bg-white border border-slate-200 p-6 sm:p-8">
                  <h2 className="text-h3 md:text-h3-lg font-bold text-[#0f3a5e] font-outfit mb-4">Pay and benefits</h2>
                  {vacancy.payAndBenefits?.length > 0 ? (
                    <ul className="space-y-3">
                      {vacancy.payAndBenefits.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-[#1f2937] text-base leading-relaxed">
                          <span aria-hidden="true" className="material-symbols-outlined text-xl text-emerald-600 shrink-0 mt-0.5">payments</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-[#0f3a5e] font-semibold">{vacancy.salaryRate}</p>
                  )}
                </section>
              )}

              <p className="text-sm text-slate-600 leading-relaxed px-1">
                We use applicant information for recruitment and related checks in line with our{' '}
                <Link to="/policies/candidate-privacy" className="text-[#005f9e] font-semibold underline">
                  Candidate Privacy Notice
                </Link>.
              </p>
            </aside>
          </div>
        </div>
      </MotionSection>

      {/* Application popup */}
      {isOpen && hasOpenedApply && (
        <div
          className={`fixed inset-0 z-[60] flex items-end sm:items-center justify-center sm:p-6 ${isApplyOpen ? '' : 'hidden'}`}
          role="dialog"
          aria-modal="true"
          aria-labelledby="apply-dialog-title"
        >
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={closeApply} aria-hidden="true" />

          <div className="relative w-full max-w-4xl max-h-[100dvh] sm:max-h-[92vh] flex flex-col bg-white shadow-2xl sm:border sm:border-slate-200">
            <div className="flex items-start justify-between gap-4 px-5 sm:px-8 py-5 border-b border-slate-200 border-t-4 border-t-[#005f9e] text-left">
              <div className="min-w-0">
                <p className="text-xs font-bold uppercase tracking-wider text-[#005f9e] font-outfit">Application form</p>
                <h2 id="apply-dialog-title" className="text-h3 md:text-h3-lg font-bold text-[#0f3a5e] font-outfit mt-1">
                  {vacancy.title}
                </h2>
                <p className="text-sm text-slate-600 mt-1">
                  Ref: {vacancy.reference}
                  {vacancy.location && <> · {vacancy.location}</>}
                  {' '}· Questions marked <span className="text-red-700 font-bold">*</span> are required.
                </p>
              </div>
              <button
                ref={closeButtonRef}
                type="button"
                onClick={closeApply}
                className="shrink-0 w-10 h-10 inline-flex items-center justify-center text-slate-500 hover:text-[#0f3a5e] hover:bg-slate-100 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#005f9e]"
                aria-label="Close application form"
              >
                <span aria-hidden="true" className="material-symbols-outlined">close</span>
              </button>
            </div>

            <div className="overflow-y-auto overscroll-contain px-5 sm:px-8 py-6 sm:py-8">
              <ApplicationForm vacancy={vacancy} embedded />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VacancyDetailPage;
