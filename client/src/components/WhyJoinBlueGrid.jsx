import React from 'react';
import { Link } from 'react-router-dom';
import MotionSection from './MotionSection';
import bgImg from '../assets/images/uk_utility_workers_site.png';

const WhyJoinBlueGrid = () => {
  return (
    <MotionSection 
      as="section" 
      className="relative w-full overflow-hidden py-16 sm:py-24 lg:py-28 font-sans"
      id="why-join-bluegrid"
    >
      {/* Background Image Container with Blue Tint Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={bgImg} 
          alt="BlueGrid Utility Operations & Workforce" 
          className="w-full h-full object-cover object-center brightness-90"
          loading="lazy"
        />
        {/* Blue gradient overlay for brand cohesion */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f3a5e]/85 via-[#0f3a5e]/40 to-transparent" />
      </div>

      {/* Main Container */}
      <div className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Floating Blue Combination Content Card */}
        <div className="bg-[#0f3a5e]/55 backdrop-blur-md p-8 sm:p-12 md:p-14 max-w-lg lg:max-w-xl shadow-2xl border border-[#005f9e]/40 rounded-none text-left relative overflow-hidden">
          {/* Subtle Glow Accent */}
          <div className="absolute -top-16 -right-16 w-56 h-56 bg-[#0066ff]/20 rounded-full blur-3xl pointer-events-none" />

          {/* Badge Tag */}
          <span className="inline-block px-3.5 py-1 rounded-none bg-[#005f9e]/30 text-[#60a5fa] text-[11px] font-black tracking-widest mb-4 border border-[#005f9e]/50 font-outfit">
            Careers & Opportunities
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-5 font-outfit">
            Why Join BlueGrid?
          </h2>

          <p className="text-slate-200 text-sm sm:text-base leading-relaxed mb-8 font-medium">
            From field technicians to operational leads, we want our people to reach their full potential. That's why we offer bespoke training alongside generous benefits, industry certifications, and clear opportunities for progression.
          </p>

          <Link
            to="/career"
            className="inline-flex items-center gap-3 bg-[#005f9e] hover:bg-[#0066ff] text-white font-bold text-xs tracking-widest px-7 py-4 rounded-full transition-all duration-300 shadow-lg shadow-blue-950/50 group active:scale-95 border border-white/10"
          >
            <span>BlueGrid Jobs</span>
            <span className="material-symbols-outlined text-sm transition-transform duration-300 group-hover:translate-x-1">
              arrow_forward
            </span>
          </Link>
        </div>
      </div>
    </MotionSection>
  );
};

export default WhyJoinBlueGrid;
