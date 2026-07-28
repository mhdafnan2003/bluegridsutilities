import React from 'react';
import MotionSection from '../../components/MotionSection';
import missionBg from '../../assets/images/mission_bg.png';
import waterMeterImg from '../../assets/images/water meter suoort bluegrids.jpeg';
import complianceImg from '../../assets/images/Sectors/Compliance & Onboarding.jpg';
import infraImg from '../../assets/images/utility_grid_work.png';
import workersImg from '../../assets/images/uk_utility_workers_site.png';

import AboutBanner from '../../components/AboutBanner';

const OurMissionsPage = () => {
  return (
    <div className="font-sans">
      <MotionSection 
        as="section" 
        className="pb-16 md:pb-24 bg-white" 
        id="our-missions"
        initial="hidden"
        animate="visible"
        whileInView={undefined}
        viewport={undefined}
      >
        <div className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-12">
          
          {/* Top Page Title Banner */}
          <AboutBanner 
            badgeText="Our Purpose & Direction"
            title="Our Mission"
            description="Delivering safe, efficient, and professional utility infrastructure services across the UK water utility sector."
            bgImage={missionBg}
          />

          {/* Official Mission Statement Banner */}
          <div className="relative rounded-none overflow-hidden border border-slate-200 mb-16 shadow-xl min-h-[380px] sm:min-h-[420px] flex items-center bg-slate-900">
            <img 
              src={workersImg} 
              alt="UK Utility Infrastructure Operatives" 
              className="absolute inset-0 w-full h-full object-cover brightness-90"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />
            
            {/* Text Box Container */}
            <div className="relative z-10 p-6 sm:p-8 md:p-10 lg:p-12 max-w-3xl text-left text-white bg-[#0f3a5e]/45 backdrop-blur-sm border border-white/30 shadow-2xl m-6 sm:m-10 lg:m-12">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-none bg-[#0066ff] text-white flex items-center justify-center shrink-0 shadow-md">
                  <span className="material-symbols-outlined text-lg font-bold">flag</span>
                </div>
                <span className="text-[#60a5fa] font-bold text-xs tracking-widest font-outfit">
                  Official Mission Statement
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight font-outfit leading-tight">
                "To deliver utility infrastructure safely, efficiently and professionally while building long-term partnerships based on trust, quality and reliability."
              </h2>

              <p className="text-slate-200 text-xs sm:text-sm leading-relaxed font-medium">
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
                  <div className="absolute top-3 left-3 bg-[#005f9e] text-white text-[10px] font-bold px-3 py-1 tracking-wider font-outfit rounded-none border border-white/20">
                    Pillar {pillar.step}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="material-symbols-outlined text-[#005f9e] text-lg">{pillar.icon}</span>
                      <h3 className="text-lg font-bold text-[#0f3a5e] tracking-tight font-outfit">
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
