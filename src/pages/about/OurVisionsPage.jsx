import React from 'react';
import MotionSection from '../../components/MotionSection';
import visionBg from '../../assets/images/vision_bg.png';
import heroOneImg from '../../assets/images/updated/hero_blue_one.png';
import waterMeterImg from '../../assets/images/water meter suoort bluegrids.jpeg';
import complianceImg from '../../assets/images/Sectors/Compliance & Onboarding.jpg';
import infraImg from '../../assets/images/utility_grid_work.png';

import AboutBanner from '../../components/AboutBanner';

const OurVisionsPage = () => {
  return (
    <div className="font-sans">
      <MotionSection 
        as="section" 
        className="pb-16 md:pb-24 bg-white" 
        id="our-visions"
        initial="hidden"
        animate="visible"
        whileInView={undefined}
        viewport={undefined}
      >
        <div className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-12">
          
          {/* Top Page Title Banner */}
          <AboutBanner 
            badgeText="Future Roadmap & Ambitions"
            title="Our Vision"
            description="Targeting industry leadership across the UK utility infrastructure sector through innovation, safety, and operational excellence."
            bgImage={visionBg}
          />

          {/* Official Vision Statement Banner */}
          <div className="relative rounded-none overflow-hidden border border-slate-200 mb-16 shadow-xl min-h-[380px] sm:min-h-[420px] flex items-center bg-slate-900">
            <img 
              src={heroOneImg} 
              alt="UK Utility Operations Vision" 
              className="absolute inset-0 w-full h-full object-cover brightness-90"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />
            
            {/* Text Box Container */}
            <div className="relative z-10 p-6 sm:p-8 md:p-10 lg:p-12 max-w-3xl text-left text-white bg-[#0f3a5e]/45 backdrop-blur-sm border border-white/30 shadow-2xl m-6 sm:m-10 lg:m-12">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-none bg-[#0066ff] text-white flex items-center justify-center shrink-0 shadow-md">
                  <span className="material-symbols-outlined text-lg font-bold">visibility</span>
                </div>
                <span className="text-[#60a5fa] font-bold text-xs tracking-widest font-outfit">
                  Official Vision Statement
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight font-outfit leading-tight">
                "To become one of the UK’s leading utility infrastructure contractors recognised for innovation, safety, quality and operational excellence."
              </h2>

              <p className="text-slate-200 text-xs sm:text-sm leading-relaxed font-medium">
                Our vision shapes our strategic expansion. Bluegrid Utilities aims to set the national benchmark for utility infrastructure delivery through continuous workforce development, smart metering rollouts, stringent safety systems, and trusted contractor partnerships across England, Scotland, and Wales.
              </p>
            </div>
          </div>

          {/* 4 Vision Milestones Banner Cards (Visual Images & Bright Layout) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "UK Industry Leadership",
                desc: "Becoming a recognized tier-one utility contractor supporting water providers and main contractors nationwide.",
                icon: "emoji_events",
                img: heroOneImg
              },
              {
                step: "02",
                title: "Innovation & Technology",
                desc: "Pioneering smart water metering coordination, digital field platforms, and efficient civil engineering practices.",
                icon: "lightbulb",
                img: waterMeterImg
              },
              {
                step: "03",
                title: "Safety & Compliance",
                desc: "Enforcing zero-harm safety standards, EUSR qualifications, and H&S audit systems across all field operatives.",
                icon: "shield",
                img: complianceImg
              },
              {
                step: "04",
                title: "Operational Excellence",
                desc: "Consistently delivering high-quality excavation, reinstatement, and civil works on time and to specification.",
                icon: "star",
                img: infraImg
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white border border-slate-200 rounded-none shadow-md hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden text-left group">
                <div className="relative h-48 overflow-hidden bg-slate-900 shrink-0">
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className="w-full h-full object-cover brightness-95 transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 bg-[#005f9e] text-white text-[10px] font-bold px-3 py-1 tracking-wider font-outfit rounded-none border border-white/20">
                    Milestone {item.step}
                  </div>
                </div>

                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="material-symbols-outlined text-[#005f9e] text-lg">{item.icon}</span>
                      <h3 className="text-lg font-bold text-[#0f3a5e] tracking-tight font-outfit">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium">
                      {item.desc}
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

export default OurVisionsPage;
