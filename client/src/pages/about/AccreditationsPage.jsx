import React from 'react';
import MotionSection from '../../components/MotionSection';
import AboutBanner from '../../components/AboutBanner';
import heroTwoImg from '../../assets/images/updated/hero_blue_two.png';
import vettingBg from '../../assets/images/vetting_bg.png';
import complianceBg from '../../assets/images/compliance_bg.png';
import safetyBg from '../../assets/images/safety_bg.png';

const futureCertifications = [
  {
    category: "Procurement & Safety Schemes Roadmap",
    icon: "verified_user",
    items: [
      {
        name: "Constructionline",
        code: "Procurement Assurance",
        desc: "Procurement and supplier assurance, subject to business need.",
        theme: {
          bg: "bg-teal-50/60",
          border: "border-teal-200",
          accent: "bg-[#008269]",
          text: "text-[#005c4a]",
          tag: "bg-teal-100 text-teal-800 border-teal-300",
          iconBg: "bg-[#008269] text-white",
          iconName: "domain_verification"
        }
      },
      {
        name: "SafeContractor",
        code: "H&S Supplier Assurance",
        desc: "Health, safety and supplier assurance, subject to business need.",
        theme: {
          bg: "bg-blue-50/60",
          border: "border-blue-200",
          accent: "bg-[#00529b]",
          text: "text-[#00386b]",
          tag: "bg-blue-100 text-blue-800 border-blue-300",
          iconBg: "bg-[#00529b] text-white",
          iconName: "health_and_safety"
        }
      },
      {
        name: "Achilles UVDB",
        code: "Utility Supplier Prequalification",
        desc: "Utility-sector supplier prequalification, subject to eligibility and procurement strategy.",
        theme: {
          bg: "bg-emerald-50/60",
          border: "border-emerald-200",
          accent: "bg-[#009688]",
          text: "text-[#00695c]",
          tag: "bg-emerald-100 text-emerald-800 border-emerald-300",
          iconBg: "bg-[#009688] text-white",
          iconName: "shield_lock"
        }
      }
    ]
  },
  {
    category: "ISO International Standards Certification Roadmap",
    icon: "workspace_premium",
    items: [
      {
        name: "ISO 9001",
        code: "Quality Management System",
        desc: "Quality management system certification roadmap.",
        theme: {
          bg: "bg-indigo-50/60",
          border: "border-indigo-200",
          accent: "bg-[#2563eb]",
          text: "text-[#1e3a8a]",
          tag: "bg-indigo-100 text-indigo-800 border-indigo-300",
          iconBg: "bg-[#2563eb] text-white",
          iconName: "verified"
        }
      },
      {
        name: "ISO 14001",
        code: "Environmental Management",
        desc: "Environmental management system certification roadmap.",
        theme: {
          bg: "bg-green-50/60",
          border: "border-green-200",
          accent: "bg-[#16a34a]",
          text: "text-[#14532d]",
          tag: "bg-green-100 text-green-800 border-green-300",
          iconBg: "bg-[#16a34a] text-white",
          iconName: "eco"
        }
      },
      {
        name: "ISO 45001",
        code: "Occupational Health & Safety",
        desc: "Occupational health and safety management system certification roadmap.",
        theme: {
          bg: "bg-amber-50/60",
          border: "border-amber-200",
          accent: "bg-[#d97706]",
          text: "text-[#78350f]",
          tag: "bg-amber-100 text-amber-800 border-amber-300",
          iconBg: "bg-[#d97706] text-white",
          iconName: "shield"
        }
      }
    ]
  }
];

const AccreditationsPage = () => {
  return (
    <div className="font-sans">
      <MotionSection 
        as="section" 
        className="pb-16 md:pb-24 bg-white" 
        id="accreditations"
        initial="hidden"
        animate="visible"
        whileInView={undefined}
        viewport={undefined}
      >
        <div className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-12">
          
          {/* Top Page Title Banner */}
          <AboutBanner 
            badgeText="Operational Assurance Framework"
            title="Accreditations & Qualifications"
            description="Bluegrid Utilities is developing a structured assurance framework covering health and safety, quality, workforce competence and responsible supply-chain delivery."
            bgImage={heroTwoImg}
          />

          {/* Current Accreditation Section */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-3 h-3 bg-[#0066ff] rounded-none animate-pulse" />
              <h2 className="text-xs font-black tracking-widest text-[#005f9e] font-outfit uppercase">
                Current Status
              </h2>
            </div>

            <div className="bg-[#0f3a5e] text-white p-8 sm:p-12 rounded-none border border-[#0f3a5e] shadow-2xl relative overflow-hidden text-left">
              <div className="absolute -right-16 -bottom-16 w-80 h-80 bg-[#005f9e]/30 rounded-none blur-3xl pointer-events-none" />

              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-8 space-y-4 text-left">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="bg-amber-500 text-slate-950 px-3.5 py-1 text-[11px] font-black tracking-widest font-outfit uppercase">
                      Accreditation in Progress
                    </span>
                    <span className="text-xs font-bold text-slate-300 tracking-wider font-outfit uppercase">
                      Health & Safety Assurance
                    </span>
                  </div>

                  <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-outfit">
                    CHAS Standard — Working Towards
                  </h3>

                  <p className="text-slate-200 text-sm sm:text-base leading-relaxed font-medium">
                    Bluegrid Utilities is working towards CHAS Standard accreditation as part of its commitment to formal health-and-safety assurance and responsible contractor management.
                  </p>

                  <div className="pt-2 flex flex-wrap gap-4 text-xs font-semibold text-slate-300">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[#60a5fa] text-base">check_circle</span>
                      <span>Formal Health & Safety Assurance</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[#60a5fa] text-base">check_circle</span>
                      <span>Responsible Contractor Management</span>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-4 flex justify-start lg:justify-end">
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 sm:p-8 rounded-none text-center w-full max-w-sm">
                    <span className="material-symbols-outlined text-5xl text-amber-400 mb-3 block">hourglass_top</span>
                    <p className="text-xs font-bold tracking-widest text-slate-300 font-outfit uppercase">Current Status</p>
                    <p className="text-xl font-bold text-white tracking-tight mt-1 font-outfit">CHAS Standard</p>
                    <div className="mt-4 pt-3 border-t border-white/15">
                      <span className="inline-block px-3 py-1 bg-amber-500/20 border border-amber-400/40 text-amber-300 text-[10px] font-black tracking-widest font-outfit uppercase">
                        Working Towards
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section Divider */}
          <hr className="border-slate-200 my-14" />

          {/* Future Certifications Section */}
          <div className="mb-16">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="inline-block px-3.5 py-1.5 rounded-none bg-[#005f9e]/10 text-[#005f9e] text-xs font-black tracking-widest mb-3 font-outfit border border-[#005f9e]/20 uppercase">
                Accreditation Roadmap
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0f3a5e] tracking-tight leading-tight font-outfit">
                Supply-Chain & Governance Roadmap
              </h2>
              <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
                Bluegrid Utilities evaluates and progresses company-level accreditations subject to business need, eligibility and procurement strategy.
              </p>
            </div>

            {/* Categorized Grid */}
            <div className="space-y-12">
              {futureCertifications.map((group, groupIdx) => (
                <div key={groupIdx} className="space-y-6">
                  {/* Category Header */}
                  <div className="flex items-center gap-3 border-b border-slate-200 pb-3 text-left">
                    <div className="w-10 h-10 bg-[#0f3a5e] text-white flex items-center justify-center shadow-md shrink-0">
                      <span className="material-symbols-outlined text-xl">{group.icon}</span>
                    </div>
                    <h3 className="text-xl font-bold text-[#0f3a5e] tracking-tight font-outfit">
                      {group.category}
                    </h3>
                  </div>

                  {/* Cards Grid with Original Color Icons and Matching Color Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {group.items.map((cert, itemIdx) => (
                      <div 
                        key={itemIdx}
                        className={`${cert.theme.bg} ${cert.theme.border} border p-6 sm:p-7 rounded-none shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between text-left group relative overflow-hidden`}
                      >
                        {/* Top Brand Accent Line */}
                        <div className={`absolute top-0 left-0 right-0 h-1.5 ${cert.theme.accent}`} />

                        <div>
                          {/* Header with Original Color Brand Icon Badge and Working Towards Tag */}
                          <div className="flex items-start justify-between gap-3 mb-4">
                            <div className="flex items-center gap-3">
                              <div className={`w-11 h-11 ${cert.theme.iconBg} flex items-center justify-center shrink-0 shadow-md border border-white/30`}>
                                <span className="material-symbols-outlined text-2xl">{cert.theme.iconName}</span>
                              </div>
                              <div>
                                <h4 className={`text-lg font-bold ${cert.theme.text} tracking-tight font-outfit`}>
                                  {cert.name}
                                </h4>
                                <span className={`inline-block text-[10px] font-bold tracking-wider font-outfit uppercase px-2 py-0.5 mt-0.5 border ${cert.theme.tag}`}>
                                  {cert.code}
                                </span>
                              </div>
                            </div>

                            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-amber-100/90 text-amber-900 border border-amber-300/80 text-[10px] font-black tracking-wider font-outfit shrink-0 shadow-sm">
                              <span className="w-1.5 h-1.5 rounded-full bg-amber-600 animate-pulse" />
                              Roadmap
                            </span>
                          </div>

                          <p className="text-slate-700 text-xs sm:text-sm leading-relaxed font-medium mb-6 mt-2">
                            {cert.desc}
                          </p>
                        </div>

                        {/* Status Footer */}
                        <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between text-[11px] font-bold text-slate-600 font-outfit">
                          <span>Company Accreditation</span>
                          <span className="text-amber-800 font-extrabold">Status: Roadmap</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section Divider */}
          <hr className="border-slate-200 my-14" />

          {/* Workforce Competence Section */}
          <div className="mb-16">
            <div className="text-left max-w-3xl mb-10">
              <span className="inline-block px-3.5 py-1.5 rounded-none bg-[#005f9e]/10 text-[#005f9e] text-xs font-black tracking-widest mb-3 font-outfit border border-[#005f9e]/20 uppercase">
                Individual Operative Qualifications
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0f3a5e] tracking-tight leading-tight font-outfit">
                Workforce Competence
              </h2>
              <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
                Where relevant to the task, Bluegrid expects deployed personnel to hold appropriate competency evidence such as NRSWA / SWQR units, EUSR registrations, CSCS or equivalent site competence, CAT & Genny training, first aid, plant qualifications and project-specific training.
              </p>
            </div>

            {/* Distinction Banner Box */}
            <div className="bg-slate-50 border border-slate-200 border-l-4 border-l-[#005f9e] p-6 sm:p-8 rounded-none shadow-md text-left space-y-3">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-none bg-[#005f9e]/10 text-[#005f9e] flex items-center justify-center border border-[#005f9e]/20 font-bold shrink-0">
                  <span className="material-symbols-outlined text-lg">info</span>
                </span>
                <h4 className="text-base font-bold text-[#0f3a5e] font-outfit uppercase">
                  Accreditation & Qualification Distinction
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                Bluegrid Utilities distinguishes clearly between company-level accreditations (such as organizational CHAS Standard progress and ISO roadmaps) and individual operative qualifications held by deployed personnel (such as NRSWA / SWQR, EUSR, CSCS, and plant tickets).
              </p>
            </div>
          </div>

          {/* Final Governance Banner */}
          <div className="bg-[#0f3a5e] text-white p-8 sm:p-12 border border-[#0f3a5e] rounded-none shadow-xl text-left relative overflow-hidden">
            <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-[#005f9e]/30 rounded-none blur-3xl pointer-events-none" />
            <div className="relative z-10 max-w-4xl space-y-4">
              <span className="text-[#60a5fa] font-bold text-xs tracking-widest font-outfit block uppercase">
                Rigorous Governance & Audit Oversight
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-outfit">
                Our Unwavering Accreditation Commitment
              </h2>
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed font-medium">
                Every member of our field workforce undergoes strict pre-deployment verification, ensuring complete compliance with UK statutory requirements, environmental standards, and principal contractor policies.
              </p>
            </div>
          </div>

        </div>
      </MotionSection>
    </div>
  );
};

export default AccreditationsPage;
