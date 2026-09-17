import React, { useState } from 'react';
import MotionSection from '../../components/MotionSection';
import AboutBanner from '../../components/AboutBanner';
import heroOneImg from '../../assets/images/updated/hero_blue_one.png';

const policyDocuments = [
  { 
    name: "Candidate Privacy Notice", 
    category: "Recruitment Data Governance", 
    ref: "BG-POL-CPN-2026",
    reviewDate: "January 2026",
    desc: "Details the data controller identity, lawful bases, recruitment processing, applicant rights, retention periods and contact route."
  },
  { 
    name: "Website Terms of Use", 
    category: "Legal & Regulatory", 
    ref: "BG-POL-TOU-2026",
    reviewDate: "January 2026",
    desc: "Rules and terms governing the use of this website, intellectual property, liability limits, and contact information."
  },
  { 
    name: "Accessibility Statement", 
    category: "Digital Standards", 
    ref: "BG-POL-ACC-2026",
    reviewDate: "January 2026",
    desc: "Commitment to digital accessibility across our web platforms, standard compliance targets, known issues and dedicated assistance route."
  },
  { 
    name: "Health & Safety Policy Statement", 
    category: "HSEQ Governance", 
    ref: "BG-POL-HSE-2026",
    reviewDate: "Annual (2026)",
    desc: "Approved public statement confirming management accountability, risk assessment principles, safe working methods and stop-work authority."
  },
  { 
    name: "Environmental Policy Statement", 
    category: "HSEQ Governance", 
    ref: "BG-POL-ENV-2026",
    reviewDate: "Annual (2026)",
    desc: "Approved statement covering environmental obligations, waste control, pollution prevention and resource efficiency."
  },
  { 
    name: "Quality Policy Statement", 
    category: "HSEQ Governance", 
    ref: "BG-POL-QMS-2026",
    reviewDate: "Annual (2026)",
    desc: "Approved statement regarding right-first-time delivery, supervisory standards, accurate records and defect escalation."
  },
  { 
    name: "Modern Slavery Statement", 
    category: "Corporate Responsibility", 
    ref: "BG-POL-MSS-2026",
    reviewDate: "Annual (2026)",
    desc: "Statement confirming our approach to modern slavery risk prevention and supply-chain due diligence."
  },
  { 
    name: "Anti-Bribery & Ethical Statement", 
    category: "Corporate Governance", 
    ref: "BG-POL-ABE-2026",
    reviewDate: "Annual (2026)",
    desc: "Approved ethical statement establishing zero tolerance for bribery, improper payments or unethical commercial conduct."
  },
  { 
    name: "Privacy Notice (Website & General)", 
    category: "Data Protection", 
    ref: "BG-POL-PRV-2026",
    reviewDate: "January 2026",
    desc: "Information covering general business enquiries, personal data handling, storage, statutory rights and privacy contact routes."
  }
];

const OurPoliciesPage = () => {
  const [requestNotice, setRequestNotice] = useState(null);

  const handleRequest = (docName) => {
    const subject = encodeURIComponent(`Policy Document Request: ${docName}`);
    const body = encodeURIComponent(`Hello Bluegrid Utilities Governance Team,\n\nPlease provide the authorised public copy of ${docName}.\n\nName:\nOrganisation / Project:\nEmail:`);
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
          
          {/* Top Page Title Banner — PACK 19 */}
          <AboutBanner 
            badgeText="POLICIES & CORPORATE INFORMATION"
            title="Policies & Corporate Information"
            description="This page provides approved public information relating to Bluegrid Utilities. Documents are published only where a current public version has been authorised."
            bgImage={heroOneImg}
          />

          {/* Policy Documents Center */}
          <div className="mb-16">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="inline-block px-3.5 py-1.5 rounded-none bg-[#005f9e]/10 text-[#005f9e] text-xs font-black tracking-widest mb-3 font-outfit border border-[#005f9e]/20 uppercase">
                Approved Public Documents
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0f3a5e] tracking-tight leading-tight font-outfit">
                Policies & Corporate Information
              </h2>
              <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
                For each policy document, we maintain approved versions with documented review dates. To request authorised copies for compliance or project files, use the contact route below.
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

                      <span className="text-[10px] font-bold text-slate-500 font-outfit uppercase">
                        {doc.ref}
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
                    <span className="text-[10px] font-bold text-slate-500 font-outfit">
                      Review: {doc.reviewDate}
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
                For formal contractor onboarding packs, policy statements, or specific compliance enquiries, please contact our operational governance team at{' '}
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
