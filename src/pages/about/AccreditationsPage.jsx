import React from 'react';
import MotionSection from '../../components/MotionSection';
import vettingBg from '../../assets/images/vetting_bg.png';
import complianceBg from '../../assets/images/compliance_bg.png';
import safetyBg from '../../assets/images/safety_bg.png';
import heroTwoImg from '../../assets/images/updated/hero_blue_two.png';

const AccreditationsPage = () => {
  return (
    <div className="font-sans">
      <MotionSection 
        as="section" 
        className="pb-16 md:pb-24 bg-white" 
        id="accreditations"
      >
        <div className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-12">
          
          {/* Top Page Title Banner (Title ON Banner Image) */}
          <div className="relative rounded-none overflow-hidden mb-12 border border-slate-200 shadow-xl min-h-[300px] sm:min-h-[360px] flex items-center">
            <img 
              src={heroTwoImg} 
              alt="Bluegrid Utilities Accreditation Header" 
              className="absolute inset-0 w-full h-full object-cover object-center brightness-95"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0f3a5e]/85 via-[#0f3a5e]/50 to-transparent" />

            <div className="relative z-10 p-8 sm:p-12 md:p-16 max-w-3xl text-left text-white">
              <span className="inline-block px-4 py-1.5 rounded-none bg-[#0066ff] text-white text-xs font-bold uppercase tracking-widest mb-4 font-outfit shadow-md border border-white/20">
                OPERATIONAL QUALITY & STANDARDS
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight uppercase leading-tight mb-4 font-outfit drop-shadow-sm">
                ACCREDITATION & AWARDS
              </h1>
              <p className="text-slate-100 text-base md:text-lg leading-relaxed font-medium max-w-2xl drop-shadow-sm">
                Operating under strict adherence to national and industry compliance standards to ensure safety, reliability, and top-tier utility operations.
              </p>
            </div>
          </div>

          {/* 3 Accreditation Banner Cards */}
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
                <div className="relative h-56 overflow-hidden bg-slate-900 shrink-0">
                  <img 
                    src={item.bg} 
                    alt={item.title} 
                    className="w-full h-full object-cover brightness-95 transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f3a5e]/80 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 flex items-center gap-2">
                    <span className="material-symbols-outlined text-white text-lg">{item.icon}</span>
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

          {/* Accreditation Commitment Banner */}
          <div className="bg-[#0f3a5e] text-white p-8 sm:p-12 border border-[#0f3a5e] rounded-none shadow-xl text-left relative overflow-hidden">
            <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-[#005f9e]/30 rounded-none blur-3xl pointer-events-none" />
            <div className="relative z-10 max-w-4xl space-y-4">
              <span className="text-[#0066ff] font-bold text-xs uppercase tracking-widest font-outfit block">
                RIGOROUS GOVERNANCE
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
