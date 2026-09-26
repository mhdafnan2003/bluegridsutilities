import React from 'react';
import { Link } from 'react-router-dom';
import MotionSection from './MotionSection';
import bgImg from '../assets/images/uk_utility_workers_site.png';

const deliveryStages = [
  {
    step: "01",
    title: "Plan",
    desc: "Confirm the requirement, resources, documentation and project controls before deployment.",
    icon: "assignment"
  },
  {
    step: "02",
    title: "Mobilise",
    desc: "Coordinate people, equipment, information and authorised project requirements for the work area.",
    icon: "local_shipping"
  },
  {
    step: "03",
    title: "Deliver",
    desc: "Support field activity through supervision, communication, accurate records and escalation of issues.",
    icon: "engineering"
  },
  {
    step: "04",
    title: "Verify",
    desc: "Review completion information, evidence, outstanding actions and quality requirements before close-out.",
    icon: "verified"
  }
];

const WhyChooseBlueGrid = () => {
  return (
    <MotionSection 
      as="section" 
      className="relative w-full overflow-hidden py-12 sm:py-16 lg:py-16 font-sans"
      id="how-we-deliver"
    >
      {/* Background Image Container with Neutral Overlay strictly obeying banner rule */}
      <div className="absolute inset-0 z-0">
        <img 
          src={bgImg} 
          alt="Bluegrid Utilities Infrastructure & Operations" 
          className="w-full h-full object-cover object-center brightness-95"
          loading="lazy"
        />
        {/* Neutral Dark Overlay - strictly no blue tinting as per banner rule */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80" />
        <div className="absolute inset-0 bg-black/30 opacity-50" />
      </div>

      {/* Main Container */}
      <div className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Corporate Container Card - Neutral Dark Overlay strictly obeying banner rule */}
        <div className="bg-slate-950/85 backdrop-blur-xl border border-white/20 p-6 sm:p-8 md:p-10 rounded-none shadow-2xl relative overflow-hidden text-left">
          
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />

          {/* Section Header */}
          <div className="max-w-3xl mb-8 sm:mb-10">
            <span className="inline-block px-3.5 py-1 rounded-none bg-[#005f9e] text-white text-[11px] font-black tracking-widest mb-2 font-outfit uppercase">
              How We Work
            </span>
            <h2 className="text-h2 md:text-h2-lg font-bold text-white tracking-tight font-outfit leading-tight mb-2">
              A Controlled Approach to Delivery
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
              We structure our utility infrastructure support around a clear four-stage framework designed for safety, quality and complete operational accountability.
            </p>
          </div>

          {/* 4 Stages Delivery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-8">
            {deliveryStages.map((item, idx) => (
              <div 
                key={idx}
                className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#005f9e]/60 p-5 sm:p-6 rounded-none transition-all duration-300 backdrop-blur-md group flex flex-col justify-between"
              >
                <div>
                  {/* Step and Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-8 h-8 rounded-none bg-[#005f9e]/30 text-[#60a5fa] flex items-center justify-center font-black text-xs font-outfit border border-[#005f9e]/40">
                      {item.step}
                    </span>
                    <span className="material-symbols-outlined text-[#60a5fa] text-xl">
                      {item.icon}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-h3 md:text-h3-lg font-bold text-white tracking-wide font-outfit mb-2 group-hover:text-[#60a5fa] transition-colors duration-300">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-300 text-xs leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </div>

                {/* Subtle Accent Line */}
                <div className="w-8 h-0.5 bg-[#005f9e] group-hover:w-full group-hover:bg-[#005f9e] transition-all duration-500 mt-5" />
              </div>
            ))}
          </div>

          {/* Bottom Corporate Action Bar */}
          <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="text-slate-300 text-xs">
              <span className="text-white font-bold tracking-wider block sm:inline mr-2 font-outfit">
                Ready to partner with us?
              </span>
              <span>Contact our team today to discuss your project requirements.</span>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <Link
                to="/contact"
                className="text-nav inline-flex items-center gap-2 bg-[#005f9e] hover:bg-[#004c80] text-white font-bold tracking-wide px-6 py-3 rounded-none border border-white/10 transition-all duration-300 shadow-lg active:scale-95 font-outfit group"
              >
                <span>Work with Bluegrid Utilities</span>
                <span className="material-symbols-outlined text-sm transition-transform duration-300 group-hover:translate-x-1">
                  arrow_forward
                </span>
              </Link>
              
              <Link
                to="/career"
                className="text-nav inline-flex items-center gap-2 bg-transparent hover:bg-white/10 text-white font-bold tracking-wide px-6 py-3 rounded-none border border-white/30 transition-all duration-300 font-outfit"
              >
                <span>Career Opportunities</span>
              </Link>
            </div>
          </div>

        </div>

      </div>
    </MotionSection>
  );
};

export default WhyChooseBlueGrid;
