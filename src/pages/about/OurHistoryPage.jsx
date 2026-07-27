import React from 'react';
import MotionSection from '../../components/MotionSection';
import historyBannerImg from '../../assets/images/updated/hero_blue_three.png';
import infraImg from '../../assets/images/utility_grid_work.png';
import waterMeterImg from '../../assets/images/water meter suoort bluegrids.jpeg';
import workersImg from '../../assets/images/uk_utility_workers_site.png';

import AboutBanner from '../../components/AboutBanner';

const OurHistoryPage = () => {
  return (
    <div className="font-sans">
      <MotionSection 
        as="section" 
        className="pb-16 md:pb-24 bg-white" 
        id="our-history"
      >
        <div className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-12">
          
          {/* Top Page Title Banner */}
          <AboutBanner 
            badgeText="TRANSPARENT FOUNDATION"
            title="OUR HISTORY & GROWTH"
            description="Established to provide specialist utility infrastructure services throughout the UK with operational excellence."
            bgImage={historyBannerImg}
          />

          {/* History Narrative Banner */}
          <div className="relative rounded-none overflow-hidden border border-slate-200 mb-16 shadow-xl min-h-[380px] sm:min-h-[420px] flex items-center bg-slate-900">
            <img 
              src={workersImg} 
              alt="Bluegrid Utility Infrastructure History" 
              className="absolute inset-0 w-full h-full object-cover brightness-90"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />
            
            {/* Text Box Container */}
            <div className="relative z-10 p-6 sm:p-8 md:p-10 lg:p-12 max-w-3xl text-left text-white bg-[#0f3a5e]/45 backdrop-blur-sm border border-white/30 shadow-2xl m-6 sm:m-10 lg:m-12 space-y-3">
              <span className="text-[#60a5fa] font-bold text-xs uppercase tracking-widest font-outfit block">
                ORGANISATIONAL JOURNEY
              </span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold uppercase tracking-tight text-white font-outfit">
                BUILT ON EXPERIENCED LEADERSHIP & PARTNERSHIPS
              </h2>
              <p className="text-slate-200 text-xs sm:text-sm leading-relaxed font-medium">
                Bluegrid Utilities was established to address the growing demand for compliant, safe, and reliable field infrastructure delivery within the UK utilities sector.
              </p>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-medium">
                Rather than inventing a long fictional history, we take pride in being a transparent, modern contractor built on decades of combined management experience, strong operational partnerships, and dedicated support for utility providers and principal contractors across the country.
              </p>
            </div>
          </div>

          {/* 3 History Pillars Banner Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Experienced Leadership",
                desc: "Founded on experienced management and field operational leadership dedicated to safe utility infrastructure delivery across England, Scotland and Wales.",
                img: workersImg
              },
              {
                step: "02",
                title: "Specialist Delivery Focus",
                desc: "Supporting utility providers, principal contractors and partners across smart water metering, excavation, reinstatement, and associated civil engineering works.",
                img: waterMeterImg
              },
              {
                step: "03",
                title: "Operational Trust & Scale",
                desc: "Built on long-term partnerships, EUSR compliance verification, continuous improvement, and expanding national UK infrastructure capabilities.",
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
                    Pillar {item.step}
                  </div>
                </div>

                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-[#0f3a5e] uppercase tracking-tight font-outfit mb-3">
                      {item.title}
                    </h3>
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

export default OurHistoryPage;
