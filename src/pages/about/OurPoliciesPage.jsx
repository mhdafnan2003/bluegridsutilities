import React, { useState } from 'react';
import MotionSection from '../../components/MotionSection';
import AboutBanner from '../../components/AboutBanner';
import heroOneImg from '../../assets/images/updated/hero_blue_one.png';

const policyDocuments = [
  { 
    name: "Privacy Policy", 
    category: "Data Protection & Privacy", 
    code: "BGU-POL-001", 
    size: "185 KB",
    desc: "Details on how Bluegrid Utilities collects, processes, and protects personal and business data."
  },
  { 
    name: "Cookie Policy", 
    category: "Website & Digital Security", 
    code: "BGU-POL-002", 
    size: "120 KB",
    desc: "Information regarding cookie usage, tracking technologies, and user consent management."
  },
  { 
    name: "Terms & Conditions", 
    category: "Commercial & Legal Framework", 
    code: "BGU-POL-003", 
    size: "210 KB",
    desc: "Standard commercial, operational, and service agreement terms governing client contracts."
  },
  { 
    name: "Modern Slavery Statement", 
    category: "Ethical Governance", 
    code: "BGU-POL-004", 
    size: "165 KB",
    desc: "Our anti-slavery commitment, supply chain vetting procedures, and right-to-work enforcement."
  },
  { 
    name: "Health & Safety Policy", 
    category: "Operational Site Safety", 
    code: "BGU-POL-005", 
    size: "295 KB",
    desc: "Zero-harm site policy, RAMS procedures, toolbox talks, and operative safety compliance."
  },
  { 
    name: "Environmental Policy", 
    category: "Sustainability & Carbon", 
    code: "BGU-POL-006", 
    size: "230 KB",
    desc: "Commitments to carbon reduction, regional workforce deployment, and environmental management."
  },
  { 
    name: "Equality Policy", 
    category: "Workforce & Inclusion", 
    code: "BGU-POL-007", 
    size: "175 KB",
    desc: "Framework guaranteeing equal opportunities, non-discrimination, and diversity in recruitment."
  },
  { 
    name: "Anti-Bribery Policy", 
    category: "Ethics & Compliance", 
    code: "BGU-POL-008", 
    size: "145 KB",
    desc: "Strict anti-corruption principles, gift registration rules, and ethical business conduct."
  },
  { 
    name: "GDPR Compliance Statement", 
    category: "Data Protection", 
    code: "BGU-POL-009", 
    size: "190 KB",
    desc: "UK GDPR alignment confirming data subject rights, encryption, and secure records management."
  },
  { 
    name: "Website Terms", 
    category: "Digital Terms of Use", 
    code: "BGU-POL-010", 
    size: "135 KB",
    desc: "Rules governing web portal access, candidate registration submissions, and intellectual property."
  },
  { 
    name: "Accessibility Statement", 
    category: "Digital Inclusion", 
    code: "BGU-POL-011", 
    size: "115 KB",
    desc: "Commitment to web accessibility standards (WCAG) ensuring inclusive digital experiences for all."
  }
];

const OurPoliciesPage = () => {
  const [downloadNotice, setDownloadNotice] = useState(null);

  const handleDownload = (docName) => {
    // Generate a simple dummy downloadable text file simulating PDF download
    const element = document.createElement("a");
    const file = new Blob([
      `BLUEGRID UTILITIES LIMITED\nOFFICIAL STATUTORY DOCUMENT\nDocument: ${docName}\nStatus: Verified & Approved\nYear: 2026\n\nThis is an official compliance policy document preview for ${docName} issued by Bluegrid Utilities.`
    ], { type: 'text/plain;charset=utf-8' });
    element.href = URL.createObjectURL(file);
    element.download = `${docName.replace(/\s+/g, '_')}_Bluegrid_Utilities.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);

    setDownloadNotice(docName);
    setTimeout(() => setDownloadNotice(null), 4000);
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
            badgeText="GOVERNANCE & RESPONSIBILITY"
            title="OUR POLICIES & STATUTORY DOCUMENTS"
            description="Operating under robust ethical, environmental, and safety frameworks to ensure total compliance and transparency across all UK contracts."
            bgImage={heroOneImg}
          />





          {/* PDF Policy Documents Center */}
          <div className="mb-16">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="inline-block px-3.5 py-1.5 rounded-none bg-[#005f9e]/10 text-[#005f9e] text-xs font-black uppercase tracking-widest mb-3 font-outfit border border-[#005f9e]/20">
                OFFICIAL DOCUMENTATION
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0f3a5e] tracking-tight uppercase leading-tight font-outfit">
                POLICY DOCUMENTS & COMPLIANCE DOWNLOADS
              </h2>
              <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
                Click on any policy document below to download or view the official Bluegrid Utilities governance statement.
              </p>
            </div>

            {/* Notification Bar */}
            {downloadNotice && (
              <div className="max-w-2xl mx-auto mb-8 bg-emerald-50 border border-emerald-200 text-emerald-800 px-6 py-3 text-xs font-bold flex items-center justify-center gap-3 font-outfit uppercase">
                <span className="material-symbols-outlined text-emerald-600 text-base">download_done</span>
                <span>Document "{downloadNotice}" download initiated successfully.</span>
              </div>
            )}

            {/* 11 PDF Document Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {policyDocuments.map((doc, idx) => (
                <div 
                  key={idx}
                  className="bg-white border border-slate-200 hover:border-[#005f9e] p-6 rounded-none shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between text-left group relative overflow-hidden"
                >
                  {/* Subtle Top Red/Blue Accent Bar */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-slate-200 group-hover:bg-[#005f9e] transition-colors duration-300" />

                  <div>
                    {/* Top Row: PDF Icon & Category Badge */}
                    <div className="flex items-center justify-between mb-4">
                      {/* Styled PDF Icon */}
                      <div className="flex items-center gap-2 bg-red-50 text-red-600 px-3 py-1.5 border border-red-200 group-hover:bg-red-600 group-hover:text-white transition-colors duration-300">
                        <span className="material-symbols-outlined text-xl">picture_as_pdf</span>
                        <span className="text-[10px] font-black uppercase tracking-wider font-outfit">PDF</span>
                      </div>

                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest font-outfit">
                        {doc.code}
                      </span>
                    </div>

                    {/* Document Title & Category */}
                    <h3 className="text-lg font-bold text-[#0f3a5e] uppercase tracking-tight font-outfit mb-1 group-hover:text-[#005f9e] transition-colors">
                      {doc.name}
                    </h3>
                    <p className="text-[11px] font-bold text-[#005f9e] uppercase tracking-widest mb-3 font-outfit">
                      {doc.category}
                    </p>

                    <p className="text-slate-600 text-xs leading-relaxed font-medium mb-6">
                      {doc.desc}
                    </p>
                  </div>

                  {/* Action Footer Button */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[10px] font-bold text-slate-400 font-outfit uppercase">
                      {doc.size}
                    </span>

                    <button
                      onClick={() => handleDownload(doc.name)}
                      className="inline-flex items-center gap-2 bg-[#0f3a5e] hover:bg-[#005f9e] text-white text-[10px] font-black uppercase tracking-widest px-4 py-2.5 transition-all duration-300 font-outfit border border-transparent shadow-sm active:scale-95 cursor-pointer"
                    >
                      <span>DOWNLOAD</span>
                      <span className="material-symbols-outlined text-xs">download</span>
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
              <span className="text-[#60a5fa] font-bold text-xs uppercase tracking-widest font-outfit block">
                COMPLIANCE & LEGAL ENQUIRIES
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold uppercase tracking-tight text-white font-outfit">
                NEED SPECIFIC POLICY DETAILS OR CONTRACTUAL COPIES?
              </h2>
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed font-medium">
                For formal contractor onboarding, compliance verification, or policy enquiries, please contact our operational governance team at{' '}
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
