import React from 'react';
import MotionSection from '../../components/MotionSection';
import historyBannerImg from '../../assets/images/updated/hero_blue_three.png';
import infraImg from '../../assets/images/utility_grid_work.png';
import waterMeterImg from '../../assets/images/water meter suoort bluegrids.jpeg';
import workersImg from '../../assets/images/uk_utility_workers_site.png';

const OurHistoryPage = () => {
  return (
    <div className="font-sans">
      <MotionSection 
        as="section" 
        className="pb-16 md:pb-24 bg-white" 
        id="our-history"
      >
        <div className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-12">
          
          {/* Top Page Title Banner (Title ON Banner Image) */}
          <div className="relative rounded-none overflow-hidden mb-12 border border-slate-200 shadow-xl min-h-[300px] sm:min-h-[360px] flex items-center">
            <img 
              src={historyBannerImg} 
              alt="Bluegrid Utilities History Header" 
              className="absolute inset-0 w-full h-full object-cover object-center brightness-95"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0f3a5e]/85 via-[#0f3a5e]/50 to-transparent" />

            <div className="relative z-10 p-8 sm:p-12 md:p-16 max-w-3xl text-left text-white">
              <span className="inline-block px-4 py-1.5 rounded-none bg-[#0066ff] text-white text-xs font-bold uppercase tracking-widest mb-4 font-outfit shadow-md border border-white/20">
                TRANSPARENT FOUNDATION
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight uppercase leading-tight mb-4 font-outfit drop-shadow-sm">
                OUR HISTORY & GROWTH
              </h1>
              <p className="text-slate-100 text-base md:text-lg leading-relaxed font-medium max-w-2xl drop-shadow-sm">
                Established to provide specialist utility infrastructure services throughout the UK with operational excellence.
              </p>
            </div>
          </div>

          {/* History Narrative Banner (Bright Clear Image Frame) */}
          <div className="relative rounded-none overflow-hidden border border-slate-200 mb-16 shadow-xl min-h-[320px] flex items-center bg-slate-100">
            <img 
              src={workersImg} 
              alt="Bluegrid Utility Infrastructure History" 
              className="absolute inset-0 w-full h-full object-cover brightness-95"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0f3a5e]/90 via-[#0f3a5e]/60 to-transparent" />
            
            <div className="relative z-10 p-8 sm:p-12 md:p-16 max-w-4xl text-left text-white space-y-4">
              <span className="text-[#60a5fa] font-bold text-xs uppercase tracking-widest font-outfit block">
                ORGANISATIONAL JOURNEY
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold uppercase tracking-tight text-white font-outfit">
                BUILT ON EXPERIENCED LEADERSHIP & PARTNERSHIPS
              </h2>
              <p className="text-slate-100 text-sm sm:text-base leading-relaxed font-medium">
                Bluegrid Utilities was established to address the growing demand for compliant, safe, and reliable field infrastructure delivery within the UK utilities sector.
              </p>
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed font-medium">
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
