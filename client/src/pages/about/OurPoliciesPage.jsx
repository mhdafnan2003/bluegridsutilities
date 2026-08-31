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
    category: "Website & Digital Security", 
    size: "Digital Controls",
    desc: "Cookie categories, analytics, consent management and browser controls."
  },
  { 
    name: "Website Terms of Use", 
    category: "Legal Framework", 
    size: "Terms of Use",
    desc: "Use of content, intellectual property, liability, acceptable use and third-party links."
  },
  { 
    name: "Health & Safety Policy", 
    category: "Operational Site Safety", 
    size: "H&S Statement",
    desc: "Signed statement of intent, responsibilities and arrangements."
  },
  { 
    name: "Environmental Policy", 
    category: "Sustainability & Environment", 
    size: "Environmental Commitments",
    desc: "Waste, pollution prevention, energy, resource efficiency and continuous improvement commitments."
  },
  { 
    name: "Equality, Diversity & Inclusion Policy", 
    category: "Workforce & Inclusion", 
    size: "EDI Framework",
    desc: "Fair recruitment, workplace conduct, equal opportunity and anti-harassment principles."
  },
  { 
    name: "Modern Slavery Statement / Policy", 
    category: "Ethical Supply Chain", 
    size: "Supply Chain Policy",
    desc: "Supply-chain due diligence and anti-exploitation commitments; statutory statement where required."
  },
  { 
    name: "Anti-Bribery & Corruption Policy", 
    category: "Ethics & Compliance", 
    size: "Compliance Statement",
    desc: "Gifts, hospitality, facilitation payments, conflicts and reporting."
  },
  { 
    name: "Data Protection / GDPR Policy", 
    category: "Data Governance", 
    size: "Internal Policy",
    desc: "Internal data governance framework establishing organizational records management and compliance."
  },
  { 
    name: "Accessibility Statement", 
    category: "Digital Inclusion", 
    size: "Accessibility Notice",
    desc: "Commitment to accessible digital content and contact route for accessibility issues."
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
            badgeText="Governance & Responsibility"
            title="Our Policies & Statutory Documents"
            description="Operating under robust ethical, environmental, and safety frameworks to ensure total compliance and transparency across all UK contracts."
            bgImage={heroOneImg}
          />





          {/* PDF Policy Documents Center */}
          <div className="mb-16">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="inline-block px-3.5 py-1.5 rounded-none bg-[#005f9e]/10 text-[#005f9e] text-xs font-black tracking-widest mb-3 font-outfit border border-[#005f9e]/20">
                Official Documentation
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0f3a5e] tracking-tight leading-tight font-outfit">
                Policy Documents & Compliance Downloads
              </h2>
              <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
                Click on any policy document below to download or view the official Bluegrid Utilities governance statement.
              </p>
            </div>

            {/* Notification Bar */}
            {downloadNotice && (
              <div className="max-w-2xl mx-auto mb-8 bg-emerald-50 border border-emerald-200 text-emerald-800 px-6 py-3 text-xs font-bold flex items-center justify-center gap-3 font-outfit">
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
                        <span className="text-[10px] font-black font-outfit">PDF</span>
                      </div>

                      <span className="text-[10px] font-bold text-slate-400 font-outfit uppercase">
                        Verified Policy
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
                      onClick={() => handleDownload(doc.name)}
                      className="inline-flex items-center gap-2 bg-[#0f3a5e] hover:bg-[#005f9e] text-white text-[10px] font-black tracking-widest px-4 py-2.5 transition-all duration-300 font-outfit border border-transparent shadow-sm active:scale-95 cursor-pointer"
                    >
                      <span>Download</span>
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
              <span className="text-[#60a5fa] font-bold text-xs tracking-widest font-outfit block">
                Compliance & Legal Enquiries
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-outfit">
                Need Specific Policy Details or Contractual Copies?
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
