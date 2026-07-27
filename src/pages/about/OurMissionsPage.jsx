import React from 'react';
import MotionSection from '../../components/MotionSection';
import missionBg from '../../assets/images/mission_bg.png';
import waterMeterImg from '../../assets/images/water meter suoort bluegrids.jpeg';
import complianceImg from '../../assets/images/Sectors/Compliance & Onboarding.jpg';
import infraImg from '../../assets/images/utility_grid_work.png';
import workersImg from '../../assets/images/uk_utility_workers_site.png';

const OurMissionsPage = () => {
  return (
    <div className="font-sans">
      <MotionSection 
        as="section" 
        className="pb-16 md:pb-24 bg-white" 
        id="our-missions"
      >
        <div className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-12">
          
          {/* Top Page Title Banner (Bright Image, No Heavy Dark Shade) */}
          <div className="relative rounded-none overflow-hidden mb-12 border border-slate-200 shadow-xl min-h-[300px] sm:min-h-[360px] flex items-center">
            {/* Background Image - Bright & Clear */}
            <img 
              src={missionBg} 
              alt="Bluegrid Utilities Mission Header" 
              className="absolute inset-0 w-full h-full object-cover object-center brightness-95"
            />
            {/* Soft Light Overlay for readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0f3a5e]/85 via-[#0f3a5e]/50 to-transparent" />

            {/* Banner Text Content */}
            <div className="relative z-10 p-8 sm:p-12 md:p-16 max-w-3xl text-left text-white">
              <span className="inline-block px-4 py-1.5 rounded-none bg-[#0066ff] text-white text-xs font-bold uppercase tracking-widest mb-4 font-outfit shadow-md border border-white/20">
                OUR PURPOSE & DIRECTION
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight uppercase leading-tight mb-4 font-outfit drop-shadow-sm">
                OUR MISSION
              </h1>
              <p className="text-slate-100 text-base md:text-lg leading-relaxed font-medium max-w-2xl drop-shadow-sm">
                Delivering safe, efficient, and professional utility infrastructure services across the UK water utility sector.
              </p>
            </div>
          </div>

          {/* Official Mission Statement Banner (Bright Clear Image Frame) */}
          <div className="relative rounded-none overflow-hidden border border-slate-200 mb-16 shadow-xl min-h-[320px] flex items-center bg-slate-100">
            <img 
              src={workersImg} 
              alt="UK Utility Infrastructure Operatives" 
              className="absolute inset-0 w-full h-full object-cover brightness-95"
            />
            {/* Left Glass Panel for Text Contrast */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0f3a5e]/90 via-[#0f3a5e]/60 to-transparent" />
            
            <div className="relative z-10 p-8 sm:p-12 md:p-16 max-w-4xl text-left text-white">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-none bg-[#0066ff] text-white flex items-center justify-center shrink-0 shadow-md">
                  <span className="material-symbols-outlined text-xl font-bold">flag</span>
                </div>
                <span className="text-[#60a5fa] font-bold text-xs uppercase tracking-widest font-outfit">
                  OFFICIAL MISSION STATEMENT
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 uppercase tracking-tight font-outfit leading-tight drop-shadow-sm">
                "TO DELIVER UTILITY INFRASTRUCTURE SAFELY, EFFICIENTLY AND PROFESSIONALLY WHILE BUILDING LONG-TERM PARTNERSHIPS BASED ON TRUST, QUALITY AND RELIABILITY."
              </h2>

              <p className="text-slate-100 text-sm sm:text-base leading-relaxed font-medium max-w-3xl">
                At Bluegrid Utilities, our mission guides every contract — supporting utility providers, principal contractors, and infrastructure partners through smart water metering, excavation, reinstatement, and associated civil engineering works.
              </p>
            </div>
          </div>

          {/* 4 Mission Core Pillars Banner Cards (Visual Images & Bright Layout) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Safety First",
                desc: "Zero-harm operational focus, H&S compliance oversight, and site safety verification.",
                icon: "shield",
                img: complianceImg
              },
              {
                step: "02",
                title: "Operational Efficiency",
                desc: "Deploying qualified field teams for smart metering, excavation, reinstatement, and civil works.",
                icon: "bolt",
                img: waterMeterImg
              },
              {
                step: "03",
                title: "Professional Excellence",
                desc: "Experienced management ensuring technical compliance, workforce training, and quality delivery.",
                icon: "verified",
                img: infraImg
              },
              {
                step: "04",
                title: "Trusted Partnerships",
                desc: "Building long-term transparent relationships with UK utility providers and principal contractors.",
                icon: "handshake",
                img: workersImg
              }
            ].map((pillar, idx) => (
              <div key={idx} className="bg-white border border-slate-200 rounded-none shadow-md hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden text-left group">
                {/* Image Banner Header */}
                <div className="relative h-48 overflow-hidden bg-slate-900 shrink-0">
                  <img 
                    src={pillar.img} 
                    alt={pillar.title} 
                    className="w-full h-full object-cover brightness-95 transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 bg-[#005f9e] text-white text-[10px] font-bold px-3 py-1 uppercase tracking-wider font-outfit rounded-none border border-white/20">
                    Pillar {pillar.step}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="material-symbols-outlined text-[#005f9e] text-lg">{pillar.icon}</span>
                      <h3 className="text-lg font-bold text-[#0f3a5e] uppercase tracking-tight font-outfit">
                        {pillar.title}
                      </h3>
                    </div>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </MotionSection>
    </div>
  );
};

export default OurMissionsPage;
