import React, { useState } from 'react';
import MotionSection from '../../components/MotionSection';
import AboutBanner from '../../components/AboutBanner';
import heroOneImg from '../../assets/images/updated/hero_blue_one.png';

const policyDocuments = [
  { 
    name: "Privacy Policy", 
    category: "Data Protection & Privacy Notice", 
    size: "Official Notice",
    desc: "Website and business privacy notice covering personal data, lawful basis, retention, rights and contact routes."
  },
  { 
    name: "Cookie Policy", 
    category: "Website & Digital Controls", 
    size: "Digital Controls",
    desc: "Cookie categories, analytics, consent management and browser controls."
  },
  { 
    name: "Candidate Privacy Notice", 
    category: "Recruitment Data Governance", 
    size: "Recruitment Notice",
    desc: "Processing of recruitment data, retention of CVs, applicant rights, and verification checks."
  },
  { 
    name: "Website Terms of Use", 
    category: "Legal Framework", 
    size: "Terms of Use",
    desc: "Use of content, intellectual property, liability, acceptable use and third-party links."
  },
  { 
    name: "Health & Safety Policy Statement", 
    category: "Operational Site Safety", 
    size: "H&S Statement",
    desc: "Formal statement of intent, safety responsibilities, risk management arrangements, and statutory compliance."
  },
  { 
    name: "Environmental Policy Statement", 
    category: "Sustainability & Environment", 
    size: "Environmental Policy",
    desc: "Waste hierarchy, pollution prevention, energy, resource efficiency and continuous environmental improvement."
  },
  { 
    name: "Quality Policy Statement", 
    category: "Quality Management", 
    size: "Quality Statement",
    desc: "Right-first-time delivery standard, on-site supervision, photographic evidence capture, and corrective action procedures."
  },
  { 
    name: "Equality, Diversity & Inclusion Policy", 
    category: "Workforce & Inclusion", 
    size: "EDI Framework",
    desc: "Fair recruitment, workplace conduct, equal opportunity and non-discrimination principles."
  },
  { 
    name: "Modern Slavery Statement", 
    category: "Ethical Supply Chain", 
    size: "Supply Chain Statement",
    desc: "Supply-chain due diligence, worker welfare validation, and anti-exploitation commitments."
  },
  { 
    name: "Anti-Bribery & Corruption Policy", 
    category: "Ethics & Compliance", 
    size: "Compliance Policy",
    desc: "Gifts, hospitality, facilitation payments, conflicts of interest and whistleblowing reporting."
  },
  { 
    name: "Accessibility Statement", 
    category: "Digital Inclusion", 
    size: "Accessibility Notice",
    desc: "Commitment to accessible digital communication and dedicated contact route for accessibility assistance."
  },
  { 
    name: "Capability Statement", 
    category: "Commercial Prequalification", 
    size: "Prequalification Pack",
    desc: "Formal capability documentation prepared for principal contractor procurement, framework evaluation, and tender packs."
  }
];

const OurPoliciesPage = () => {
  const [requestNotice, setRequestNotice] = useState(null);

  const handleRequest = (docName) => {
    const subject = encodeURIComponent(`Policy Document Request: ${docName}`);
    const body = encodeURIComponent(`Hello Bluegrid Utilities Governance Team,\n\nPlease provide an official signed copy of the ${docName} for our compliance records.\n\nOrganisation / Name:\nContact Telephone:`);
    window.location.href = `mailto:enquiries@bluegridutilities.com?subject=${subject}&body=${body}`;

    setRequestNotice(docName);
    setTimeout(() => setRequestNotice(null), 5000);
  };

  return (
    <div className="font-sans">
      <MotionSection 
        as="section" 
        className="pb-16 md:pb-24 bg-white" 
        id="our-policies"
        initial="hidden"
        animate="visible"
        whileInView={undefined}
        viewport={undefined}
      >
        <div className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-12">
          
          {/* Top Page Title Banner */}
          <AboutBanner 
            badgeText="Governance & Responsibility"
            title="Our policies"
            description="Bluegrid Utilities operates under clear, documented policies covering health and safety, quality, environmental management, equality, data protection and modern slavery. Our policy statements are reviewed annually and signed by company leadership. Copies of signed policy statements are available to clients, partners and procurement teams upon request."
            bgImage={heroOneImg}
          />

          {/* PDF Policy Documents Center */}
          <div className="mb-16">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="inline-block px-3.5 py-1.5 rounded-none bg-[#005f9e]/10 text-[#005f9e] text-xs font-black tracking-widest mb-3 font-outfit border border-[#005f9e]/20">
                Official Documentation
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0f3a5e] tracking-tight leading-tight font-outfit">
                Policy Documents & Governance Framework
              </h2>
              <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
                Official policy statements and signed governance documentation are maintained by Bluegrid Technology Ltd (trading as Bluegrid Utilities) and are available upon request to clients, partners, and stakeholders.
              </p>
            </div>

            {/* Notification Bar */}
            {requestNotice && (
              <div className="max-w-2xl mx-auto mb-8 bg-emerald-50 border border-emerald-200 text-emerald-800 px-6 py-3 text-xs font-bold flex items-center justify-center gap-3 font-outfit">
                <span className="material-symbols-outlined text-emerald-600 text-base">mail</span>
                <span>Opening email client to request official signed copy of "{requestNotice}".</span>
              </div>
            )}

            {/* Policy Document Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {policyDocuments.map((doc, idx) => (
                <div 
                  key={idx}
                  className="bg-white border border-slate-200 hover:border-[#005f9e] p-6 rounded-none shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between text-left group relative overflow-hidden"
                >
                  {/* Subtle Top Red/Blue Accent Bar */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-slate-200 group-hover:bg-[#005f9e] transition-colors duration-300" />

                  <div>
                    {/* Top Row: Doc Icon & Status */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2 bg-red-50 text-red-600 px-3 py-1.5 border border-red-200 group-hover:bg-red-600 group-hover:text-white transition-colors duration-300">
                        <span className="material-symbols-outlined text-xl">description</span>
                        <span className="text-[10px] font-black font-outfit">POLICY</span>
                      </div>

                      <span className="text-[10px] font-bold text-slate-400 font-outfit uppercase">
                        Formal Statement
                      </span>
                    </div>

                    {/* Document Title & Category */}
                    <h3 className="text-lg font-bold text-[#0f3a5e] tracking-tight font-outfit mb-1 group-hover:text-[#005f9e] transition-colors">
                      {doc.name}
                    </h3>
                    <p className="text-[11px] font-bold text-[#005f9e] tracking-widest mb-3 font-outfit">
                      {doc.category}
                    </p>

                    <p className="text-slate-600 text-xs leading-relaxed font-medium mb-6">
                      {doc.desc}
                    </p>
                  </div>

                  {/* Action Footer Button */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[10px] font-bold text-slate-400 font-outfit">
                      {doc.size}
                    </span>

                    <button
                      onClick={() => handleRequest(doc.name)}
                      className="inline-flex items-center gap-2 bg-[#0f3a5e] hover:bg-[#005f9e] text-white text-[10px] font-black tracking-widest px-4 py-2.5 transition-all duration-300 font-outfit border border-transparent shadow-sm active:scale-95 cursor-pointer uppercase"
                    >
                      <span>Request Copy</span>
                      <span className="material-symbols-outlined text-xs">mail</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Footer Call to Action Banner */}
          <div className="bg-[#0f3a5e] text-white p-8 sm:p-12 border border-[#0f3a5e] rounded-none shadow-xl text-left relative overflow-hidden">
            <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-[#005f9e]/30 rounded-none blur-3xl pointer-events-none" />
            <div className="relative z-10 max-w-4xl space-y-4">
              <span className="text-[#60a5fa] font-bold text-xs tracking-widest font-outfit block uppercase">
                Compliance & Legal Governance
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-outfit">
                Need Specific Policy Details or Prequalification Evidence?
              </h2>
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed font-medium">
                For formal contractor onboarding packs, CHAS alignment documentation, or specific compliance questionnaires, please contact our operational governance team at{' '}
                <a href="mailto:enquiries@bluegridutilities.com" className="text-[#60a5fa] underline hover:text-white transition-colors">
                  enquiries@bluegridutilities.com
                </a>.
              </p>
            </div>
          </div>

        </div>
      </MotionSection>
    </div>
  );
};

export default OurPoliciesPage;
