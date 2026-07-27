import React from 'react';
import { Link } from 'react-router-dom';
import MotionSection from './MotionSection';
import bgImg from '../assets/images/uk_utility_workers_site.png';

const features = [
  {
    icon: "health_and_safety",
    title: "Safety First",
    desc: "Uncompromising H&S standards, site inductions, and compliance audits for every site deployment."
  },
  {
    icon: "badge",
    title: "Qualified Workforce",
    desc: "Rigorously screened operatives validated with CSCS, EUSR, and NRSWA industry credentials."
  },
  {
    icon: "schedule_send",
    title: "Reliable Delivery",
    desc: "Rapid deployment response capability and consistent execution on essential utility contracts."
  },
  {
    icon: "support_agent",
    title: "Responsive Support",
    desc: "Dedicated field supervisor coordination and real-time operational progress reporting."
  },
  {
    icon: "workspace_premium",
    title: "Quality Assured",
    desc: "End-to-end quality assurance aligned with tier-1 principal contractor specifications."
  },
  {
    icon: "travel_explore",
    title: "Nationwide Capability",
    desc: "Extensive UK-wide coverage supporting major water, energy, and telecom infrastructure projects."
  }
];

const WhyChooseBlueGrid = () => {
  return (
    <MotionSection 
      as="section" 
      className="relative w-full overflow-hidden py-12 sm:py-16 lg:py-16 font-sans"
      id="why-choose-bluegrid"
    >
      {/* Background Image Container with Soft Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={bgImg} 
          alt="BlueGrid Utility Infrastructure & Operations" 
          className="w-full h-full object-cover object-center brightness-95"
          loading="lazy"
        />
        {/* Soft Blue Corporate Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f3a5e]/45 via-[#0a1e36]/30 to-[#0f3a5e]/45" />
        <div className="absolute inset-0 bg-black/20 opacity-40" />
      </div>

      {/* Main Container */}
      <div className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Corporate Container Card */}
        <div className="bg-[#0f3a5e]/90 backdrop-blur-xl border border-[#005f9e]/40 p-6 sm:p-8 md:p-10 rounded-none shadow-2xl relative overflow-hidden text-left">
          
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#0066ff]/20 rounded-full blur-3xl pointer-events-none" />

          {/* Section Header */}
          <div className="max-w-3xl mb-8 sm:mb-10">
            <span className="inline-block px-3.5 py-1 rounded-none bg-[#005f9e]/30 text-[#60a5fa] text-[11px] font-black uppercase tracking-widest mb-2 font-outfit border border-[#005f9e]/50">
              PROVEN EXCELLENCE
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight uppercase font-outfit leading-tight mb-2">
              Why Choose BlueGrid Utilities
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
              We combine qualified workforce coordination, rigorous compliance, and dedicated field support to deliver exceptional utility infrastructure solutions across the UK.
            </p>
          </div>

          {/* 6 Icons Corporate Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mb-8">
            {features.map((item, idx) => (
              <div 
                key={idx}
                className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#0066ff]/60 p-5 sm:p-6 rounded-none transition-all duration-300 backdrop-blur-md group flex flex-col justify-between"
              >
                <div>
                  {/* Icon Wrapper */}
                  <div className="w-10 h-10 rounded-none bg-[#0066ff]/20 border border-[#0066ff]/40 text-[#60a5fa] group-hover:bg-[#0066ff] group-hover:text-white group-hover:border-[#0066ff] flex items-center justify-center mb-3 transition-all duration-300 shrink-0">
                    <span className="material-symbols-outlined text-xl">{item.icon}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-bold text-white uppercase tracking-wide font-outfit mb-1.5 group-hover:text-[#60a5fa] transition-colors duration-300">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-300 text-xs leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </div>

                {/* Subtle Accent Line */}
                <div className="w-8 h-0.5 bg-[#005f9e] group-hover:w-full group-hover:bg-[#0066ff] transition-all duration-500 mt-4" />
              </div>
            ))}
          </div>

          {/* Bottom Corporate Action Bar */}
          <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="text-slate-300 text-xs">
              <span className="text-white font-bold uppercase tracking-wider block sm:inline mr-2 font-outfit">
                READY TO PARTNER WITH US?
              </span>
              <span>Contact our team today to discuss your project requirements.</span>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-[#0066ff] hover:bg-[#0052cc] text-white font-bold text-xs uppercase tracking-widest px-6 py-3 rounded-none border border-white/10 transition-all duration-300 shadow-lg active:scale-95 font-outfit group"
              >
                <span>WORK WITH BLUEGRID</span>
                <span className="material-symbols-outlined text-sm transition-transform duration-300 group-hover:translate-x-1">
                  arrow_forward
                </span>
              </Link>
              
              <Link
                to="/career"
                className="inline-flex items-center gap-2 bg-transparent hover:bg-white/10 text-white font-bold text-xs uppercase tracking-widest px-6 py-3 rounded-none border border-white/30 transition-all duration-300 font-outfit"
              >
                <span>CAREER OPPORTUNITIES</span>
              </Link>
            </div>
          </div>

        </div>

      </div>
    </MotionSection>
  );
};

export default WhyChooseBlueGrid;
