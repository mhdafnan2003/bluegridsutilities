import React from 'react';
import MotionSection from '../../components/MotionSection';
import AboutBanner from '../../components/AboutBanner';
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
        initial="hidden"
        animate="visible"
        whileInView={undefined}
        viewport={undefined}
      >
        <div className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-12">
          
          {/* Top Page Title Banner */}
          <AboutBanner 
            badgeText="Transparent Foundation & Roadmap"
            title="Company History"
            description="Built on experienced leadership, operational integrity, and long-term utility infrastructure partnerships throughout the United Kingdom."
            bgImage={historyBannerImg}
          />

          {/* Main Narrative Card: Transparent Foundation */}
          <div className="relative rounded-none overflow-hidden border border-slate-200 mb-16 shadow-2xl min-h-[420px] sm:min-h-[460px] flex items-center bg-slate-900">
            <img 
              src={workersImg} 
              alt="Bluegrid Utility Infrastructure History" 
              className="absolute inset-0 w-full h-full object-cover brightness-90"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0f3a5e]/95 via-[#0f3a5e]/75 to-transparent sm:to-black/40" />
            
            {/* Text Box Container */}
            <div className="relative z-10 p-8 sm:p-12 md:p-14 max-w-3xl text-left text-white bg-[#0f3a5e]/60 backdrop-blur-md border border-white/20 shadow-2xl m-6 sm:m-10 lg:m-12 space-y-6">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 bg-[#0066ff] rounded-none animate-pulse" />
                <span className="text-[#60a5fa] font-black text-xs tracking-widest font-outfit">
                  Transparent Foundation
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white font-outfit leading-tight">
                Built on Experienced Leadership & Operational Partnerships
              </h2>

              <div className="space-y-4 text-slate-200 text-sm sm:text-base leading-relaxed font-medium">
                <p className="bg-white/5 border-l-4 border-[#0066ff] p-4 text-white font-semibold">
                  Rather than inventing a long history, we are transparent:
                </p>
                
                <p>
                  <strong className="text-white">Bluegrid Utilities</strong> was established to provide specialist utility infrastructure services throughout the United Kingdom. Built on experienced leadership and strong operational partnerships, the company focuses on supporting major utility programmes through safe delivery, technical expertise and continuous improvement.
                </p>

                <p className="text-slate-300">
                  As the business grows, its portfolio will expand across water, energy and wider infrastructure sectors.
                </p>
              </div>
            </div>
          </div>

          {/* Section Divider */}
          <hr className="border-slate-200 my-16" />

          {/* 3 Strategic Foundations Grid */}
          <div className="mb-20">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="inline-block px-3.5 py-1.5 rounded-none bg-[#005f9e]/10 text-[#005f9e] text-xs font-black tracking-widest mb-3 font-outfit border border-[#005f9e]/20">
                Core Pillars of Our Journey
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0f3a5e] tracking-tight leading-tight font-outfit">
                Our Operational Foundations
              </h2>
              <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
                Grounded in clarity, safe execution, and long-term utility contractor alignment.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  step: "01",
                  title: "Specialist UK Delivery",
                  icon: "verified",
                  desc: "Established to provide specialist utility infrastructure services across the UK, ensuring compliant and reliable field execution on every site.",
                  img: workersImg
                },
                {
                  step: "02",
                  title: "Leadership & Technical Expertise",
                  icon: "groups",
                  desc: "Built on experienced operational leadership, robust safety protocols, and technical expertise to support major UK utility programmes.",
                  img: waterMeterImg
                },
                {
                  step: "03",
                  title: "Portfolio Expansion & Growth",
                  icon: "trending_up",
                  desc: "Continuously growing our capabilities and expanding our operational portfolio across water, energy, and wider infrastructure sectors.",
                  img: infraImg
                }
              ].map((item, idx) => (
                <div 
                  key={idx} 
                  className="bg-white border border-slate-200 rounded-none shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col overflow-hidden text-left group border-t-4 border-t-transparent hover:border-t-[#005f9e]"
                >
                  <div className="relative h-52 overflow-hidden bg-slate-900 shrink-0">
                    <img 
                      src={item.img} 
                      alt={item.title} 
                      className="w-full h-full object-cover brightness-95 transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f3a5e]/80 via-transparent to-transparent" />
                    <div className="absolute top-3 left-3 bg-[#005f9e] text-white text-[10px] font-bold px-3 py-1 tracking-wider font-outfit rounded-none border border-white/20">
                      Foundation {item.step}
                    </div>
                    <div className="absolute bottom-3 left-3 flex items-center gap-2">
                      <span className="material-symbols-outlined text-white text-lg">{item.icon}</span>
                      <span className="text-white text-xs font-bold tracking-wider font-outfit">
                        {item.title}
                      </span>
                    </div>
                  </div>

                  <div className="p-7 flex-grow flex flex-col justify-between">
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium">
                      {item.desc}
                    </p>

                    <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-bold text-[#005f9e] font-outfit">
                      <span>UK Utility Contractor</span>
                      <span>100% Compliant</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sector Portfolio Expansion Banner */}
          <div className="bg-[#0f3a5e] text-white p-8 sm:p-12 md:p-16 rounded-none shadow-2xl relative overflow-hidden text-left">
            <div className="absolute -right-20 -top-20 w-96 h-96 bg-[#005f9e]/30 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-4xl space-y-6">
              <span className="inline-block px-3.5 py-1 rounded-none bg-[#005f9e]/40 text-[#60a5fa] border border-[#005f9e]/60 text-xs font-black tracking-widest font-outfit">
                Expanding Portfolio Sectors
              </span>

              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-outfit leading-tight">
                Portfolio Expansion Across Water, Energy & Infrastructure
              </h2>

              <p className="text-slate-200 text-sm sm:text-base leading-relaxed font-medium">
                As Bluegrid Utilities expands, our field operations and project management teams continue to broaden their service capabilities to meet the evolving infrastructure demands of Tier-1 contractors and utility network operators.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
                <div className="bg-white/5 border border-white/10 p-5 rounded-none space-y-2">
                  <div className="flex items-center gap-2 text-[#60a5fa]">
                    <span className="material-symbols-outlined text-xl">water_drop</span>
                    <h4 className="font-bold text-white text-sm font-outfit">Water Sector</h4>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed font-medium">
                    Smart water metering, logistics coordination, clean water civil works, and reinstatement.
                  </p>
                </div>

                <div className="bg-white/5 border border-white/10 p-5 rounded-none space-y-2">
                  <div className="flex items-center gap-2 text-[#60a5fa]">
                    <span className="material-symbols-outlined text-xl">bolt</span>
                    <h4 className="font-bold text-white text-sm font-outfit">Energy Sector</h4>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed font-medium">
                    Gas and electricity distribution support, site preparation logistics, and field workforce supply.
                  </p>
                </div>

                <div className="bg-white/5 border border-white/10 p-5 rounded-none space-y-2">
                  <div className="flex items-center gap-2 text-[#60a5fa]">
                    <span className="material-symbols-outlined text-xl">domain</span>
                    <h4 className="font-bold text-white text-sm font-outfit">Wider Infrastructure</h4>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed font-medium">
                    Telecoms rollout support, municipal council works, and regional sub-contractor coordination.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </MotionSection>
    </div>
  );
};

export default OurHistoryPage;
