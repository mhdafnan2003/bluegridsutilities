import React from 'react';
import MotionSection from '../../components/MotionSection';
import AboutBanner from '../../components/AboutBanner';
import heroTwoImg from '../../assets/images/updated/hero_blue_two.png';
import vettingBg from '../../assets/images/vetting_bg.png';
import complianceBg from '../../assets/images/compliance_bg.png';
import safetyBg from '../../assets/images/safety_bg.png';

const futureCertifications = [
  {
    category: "Procurement & Safety Schemes",
    icon: "verified_user",
    items: [
      {
        name: "Constructionline",
        code: "Procurement Compliance",
        desc: "UK government-aligned pre-qualification database for construction and infrastructure contractors."
      },
      {
        name: "SafeContractor",
        code: "H&S Accreditation",
        desc: "Leading third-party accreditation scheme verifying rigorous health & safety standards."
      },
      {
        name: "Achilles UVDB",
        code: "Utilities Sector Qualification",
        desc: "Specialist supply chain risk management system tailored for the UK utilities sector."
      }
    ]
  },
  {
    category: "ISO International Standards",
    icon: "workspace_premium",
    items: [
      {
        name: "ISO 9001",
        code: "Quality Management System",
        desc: "International standard for consistent operational quality, continuous improvement, and client satisfaction."
      },
      {
        name: "ISO 14001",
        code: "Environmental Management",
        desc: "Framework for reducing environmental impact, carbon footprint, and waste across site operations."
      },
      {
        name: "ISO 45001",
        code: "Occupational Health & Safety",
        desc: "Global benchmark for proactive risk management, workplace safety, and zero-harm culture."
      }
    ]
  },
  {
    category: "Street Works & Highways Compliance",
    icon: "engineering",
    items: [
      {
        name: "NRSWA",
        code: "New Roads & Street Works Act",
        desc: "Mandatory qualification for excavation, reinstatement, and traffic management on public highways."
      },
      {
        name: "Street Works Qualifications",
        code: "Operative & Supervisor SWQR",
        desc: "Accredited street works supervisor and operative cards for compliant highway infrastructure delivery."
      }
    ]
  },
  {
    category: "Workforce & Plant Competencies",
    icon: "badge",
    items: [
      {
        name: "CSCS",
        code: "Construction Skills Certification",
        desc: "Validation of site safety awareness and professional trade competence across all field staff."
      },
      {
        name: "NPORS",
        code: "National Plant Operators Scheme",
        desc: "Recognized plant machinery operator certification for safe site excavation and logistics."
      },
      {
        name: "CPCS",
        code: "Construction Plant Competence Scheme",
        desc: "Industry-standard proof of skills for operating heavy infrastructure plant and equipment."
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
            badgeText="OPERATIONAL QUALITY & COMPLIANCE"
            title="ACCREDITATIONS & QUALIFICATIONS"
            description="Bluegrid Utilities is committed to rigorous safety, quality, and industry governance. Explore our current status and roadmap of sector accreditations."
            bgImage={heroTwoImg}
          />

          {/* Current Accreditation Section */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-3 h-3 bg-[#0066ff] rounded-none animate-pulse" />
              <h2 className="text-xs font-black uppercase tracking-widest text-[#005f9e] font-outfit">
                CURRENT ACCREDITATION STATUS
              </h2>
            </div>

            <div className="bg-[#0f3a5e] text-white p-8 sm:p-12 rounded-none border border-[#0f3a5e] shadow-2xl relative overflow-hidden">
              <div className="absolute -right-16 -bottom-16 w-80 h-80 bg-[#005f9e]/30 rounded-none blur-3xl pointer-events-none" />

              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-8 space-y-4 text-left">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="bg-[#0066ff] text-white px-3.5 py-1 text-[11px] font-black uppercase tracking-widest font-outfit border border-white/20">
                      IN PROGRESS
                    </span>
                    <span className="text-xs font-bold text-slate-300 uppercase tracking-wider font-outfit">
                      Contractors Health and Safety Assessment Scheme
                    </span>
                  </div>

                  <h3 className="text-3xl sm:text-4xl font-bold uppercase tracking-tight text-white font-outfit">
                    CHAS STANDARD
                  </h3>

                  <p className="text-slate-200 text-sm sm:text-base leading-relaxed font-medium">
                    Bluegrid Utilities is actively completing formal audit and verification for full **CHAS Standard** accreditation. This confirms our compliance with UK health and safety legislation, risk management protocols, and principal contractor standards.
                  </p>

                  <div className="pt-2 flex flex-wrap gap-4 text-xs font-semibold text-slate-300">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[#60a5fa] text-base">check_circle</span>
                      <span>H&S Risk Assessments & Method Statements</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[#60a5fa] text-base">check_circle</span>
                      <span>Zero-Harm Policy Enforcement</span>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-4 flex justify-start lg:justify-end">
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 sm:p-8 rounded-none text-center w-full max-w-sm">
                    <span className="material-symbols-outlined text-5xl text-[#60a5fa] mb-3 block">verified</span>
                    <p className="text-xs font-bold uppercase tracking-widest text-slate-300 font-outfit">Assessment Stage</p>
                    <p className="text-xl font-bold text-white uppercase tracking-tight mt-1 font-outfit">CHAS Standard</p>
                    <div className="mt-4 pt-3 border-t border-white/15">
                      <span className="inline-block px-3 py-1 bg-[#005f9e] text-white text-[10px] font-black uppercase tracking-widest font-outfit">
                        Status: In Progress
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
              <span className="inline-block px-3.5 py-1.5 rounded-none bg-[#005f9e]/10 text-[#005f9e] text-xs font-black uppercase tracking-widest mb-3 font-outfit border border-[#005f9e]/20">
                FUTURE ACCREDITATION ROADMAP
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0f3a5e] tracking-tight uppercase leading-tight font-outfit">
                WORKING TOWARDS INDUSTRY CERTIFICATIONS
              </h2>
              <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
                As part of our commitment to continuous growth and Tier-1 procurement standards, Bluegrid Utilities is actively working towards obtaining and embedding the following industry accreditations and operative certifications.
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
                    <h3 className="text-xl font-bold text-[#0f3a5e] uppercase tracking-tight font-outfit">
                      {group.category}
                    </h3>
                  </div>

                  {/* Cards Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {group.items.map((cert, itemIdx) => (
                      <div 
                        key={itemIdx}
                        className="bg-white border border-slate-200 hover:border-[#005f9e] p-6 sm:p-7 rounded-none shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between text-left group relative overflow-hidden"
                      >
                        {/* Top Accent Line */}
                        <div className="absolute top-0 left-0 right-0 h-1 bg-slate-200 group-hover:bg-[#005f9e] transition-colors duration-300" />

                        <div>
                          {/* Header with Title and Working Towards Badge */}
                          <div className="flex items-start justify-between gap-3 mb-3">
                            <h4 className="text-lg font-bold text-[#0f3a5e] uppercase tracking-tight font-outfit group-hover:text-[#005f9e] transition-colors">
                              {cert.name}
                            </h4>
                            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-amber-50 text-amber-700 border border-amber-200 text-[10px] font-black uppercase tracking-wider font-outfit shrink-0">
                              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                              Working Towards
                            </span>
                          </div>

                          <p className="text-[11px] font-bold text-[#005f9e] uppercase tracking-widest mb-3 font-outfit">
                            {cert.code}
                          </p>

                          <p className="text-slate-600 text-xs leading-relaxed font-medium mb-6">
                            {cert.desc}
                          </p>
                        </div>

                        {/* Status Footer */}
                        <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-bold text-slate-500 font-outfit">
                          <span>GOVERNANCE ROADMAP</span>
                          <span className="text-amber-700">STATUS: WORKING TOWARDS</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Core Foundations Banner (Original Vetting & H&S Info) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: "EUSR & Industry Vetting",
                desc: "We enforce strict checks confirming that field operatives hold valid EUSR (Energy & Utility Skills Register) records, CSCS cards, or specific sector safety certifications.",
                icon: "shield",
                bg: vettingBg
              },
              {
                title: "Right-to-Work Compliance",
                desc: "100% compliant onboarding verifying identity, qualifications, reference audits, right-to-work documentation, and background suitability screening.",
                icon: "verified_user",
                bg: complianceBg
              },
              {
                title: "Health & Safety Systems",
                desc: "Continuous training management and compliance verification structures built to align with UK utility operations safety standards.",
                icon: "health_and_safety",
                bg: safetyBg
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white border border-slate-200 rounded-none shadow-md hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden text-left group">
                <div className="relative h-48 overflow-hidden bg-slate-900 shrink-0">
                  <img 
                    src={item.bg} 
                    alt={item.title} 
                    className="w-full h-full object-cover brightness-95 transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f3a5e]/80 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 flex items-center gap-2">
                    <span className="material-symbols-outlined text-white text-base">{item.icon}</span>
                    <span className="text-white text-xs font-bold uppercase tracking-wider font-outfit">
                      {item.title}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex-grow flex flex-col justify-between">
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Final Governance Banner */}
          <div className="bg-[#0f3a5e] text-white p-8 sm:p-12 border border-[#0f3a5e] rounded-none shadow-xl text-left relative overflow-hidden">
            <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-[#005f9e]/30 rounded-none blur-3xl pointer-events-none" />
            <div className="relative z-10 max-w-4xl space-y-4">
              <span className="text-[#60a5fa] font-bold text-xs uppercase tracking-widest font-outfit block">
                RIGOROUS GOVERNANCE & AUDIT OVERSIGHT
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold uppercase tracking-tight text-white font-outfit">
                OUR UNWAVERING ACCREDITATION COMMITMENT
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
