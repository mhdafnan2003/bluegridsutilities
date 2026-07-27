import React from 'react';
import MotionSection from '../../components/MotionSection';
import visionBg from '../../assets/images/vision_bg.png';
import heroOneImg from '../../assets/images/updated/hero_blue_one.png';
import waterMeterImg from '../../assets/images/water meter suoort bluegrids.jpeg';
import complianceImg from '../../assets/images/Sectors/Compliance & Onboarding.jpg';
import infraImg from '../../assets/images/utility_grid_work.png';

const OurVisionsPage = () => {
  return (
    <div className="font-sans">
      <MotionSection 
        as="section" 
        className="pb-16 md:pb-24 bg-white" 
        id="our-visions"
      >
        <div className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-12">
          
          {/* Top Page Title Banner (Bright Image, Title ON Banner) */}
          <div className="relative rounded-none overflow-hidden mb-12 border border-slate-200 shadow-xl min-h-[300px] sm:min-h-[360px] flex items-center">
            <img 
              src={visionBg} 
              alt="Bluegrid Utilities Vision Header" 
              className="absolute inset-0 w-full h-full object-cover object-center brightness-95"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0f3a5e]/85 via-[#0f3a5e]/50 to-transparent" />

            <div className="relative z-10 p-8 sm:p-12 md:p-16 max-w-3xl text-left text-white">
              <span className="inline-block px-4 py-1.5 rounded-none bg-[#0066ff] text-white text-xs font-bold uppercase tracking-widest mb-4 font-outfit shadow-md border border-white/20">
                FUTURE ROADMAP & AMBITIONS
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight uppercase leading-tight mb-4 font-outfit drop-shadow-sm">
                OUR VISION
              </h1>
              <p className="text-slate-100 text-base md:text-lg leading-relaxed font-medium max-w-2xl drop-shadow-sm">
                Targeting industry leadership across the UK utility infrastructure sector through innovation, safety, and operational excellence.
              </p>
            </div>
          </div>

          {/* Official Vision Statement Banner (Bright Clear Image Frame) */}
          <div className="relative rounded-none overflow-hidden border border-slate-200 mb-16 shadow-xl min-h-[320px] flex items-center bg-slate-100">
            <img 
              src={heroOneImg} 
              alt="UK Utility Operations Vision" 
              className="absolute inset-0 w-full h-full object-cover brightness-95"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0f3a5e]/90 via-[#0f3a5e]/60 to-transparent" />
            
            <div className="relative z-10 p-8 sm:p-12 md:p-16 max-w-4xl text-left text-white">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-none bg-[#0066ff] text-white flex items-center justify-center shrink-0 shadow-md">
                  <span className="material-symbols-outlined text-xl font-bold">visibility</span>
                </div>
                <span className="text-[#60a5fa] font-bold text-xs uppercase tracking-widest font-outfit">
                  OFFICIAL VISION STATEMENT
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 uppercase tracking-tight font-outfit leading-tight drop-shadow-sm">
                "TO BECOME ONE OF THE UK’S LEADING UTILITY INFRASTRUCTURE CONTRACTORS RECOGNISED FOR INNOVATION, SAFETY, QUALITY AND OPERATIONAL EXCELLENCE."
              </h2>

              <p className="text-slate-100 text-sm sm:text-base leading-relaxed font-medium max-w-3xl">
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
                  <div className="absolute top-3 left-3 bg-[#005f9e] text-white text-[10px] font-bold px-3 py-1 uppercase tracking-wider font-outfit rounded-none border border-white/20">
                    Milestone {item.step}
                  </div>
                </div>

                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="material-symbols-outlined text-[#005f9e] text-lg">{item.icon}</span>
                      <h3 className="text-lg font-bold text-[#0f3a5e] uppercase tracking-tight font-outfit">
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
