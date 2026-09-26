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
      {/* Background Image Container with Neutral Dark Overlay - NO BLUE TINT */}
      <div className="absolute inset-0 z-0">
        <img 
          src={bgImg} 
          alt="Bluegrid Utilities Operations & Workforce" 
          className="w-full h-full object-cover object-center brightness-95"
          loading="lazy"
        />
        {/* Neutral dark gradient overlay for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-transparent" />
      </div>

      {/* Main Container */}
      <div className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Floating Neutral Content Card */}
        <div className="bg-slate-950/80 backdrop-blur-md p-8 sm:p-12 md:p-14 max-w-lg lg:max-w-xl shadow-2xl border border-white/20 rounded-none text-left relative overflow-hidden">
          {/* Subtle Glow Accent */}
          <div className="absolute -top-16 -right-16 w-56 h-56 bg-white/5 rounded-full blur-3xl pointer-events-none" />

          {/* Badge Tag */}
          <span className="inline-block px-3.5 py-1 rounded-none bg-[#005f9e] text-white text-[11px] font-black tracking-widest mb-4 font-outfit uppercase">
            Careers & Opportunities
          </span>

          <h2 className="text-h2 md:text-h2-lg font-bold text-white tracking-tight mb-5 font-outfit">
            Why Join Bluegrid Utilities?
          </h2>

          <p className="text-body md:text-body-lg text-slate-200 leading-relaxed mb-8 font-medium">
            From field technicians to operational leads, we want our people to reach their full potential. We support ongoing competency development, clear safety leadership, and long-term career progression across UK utility infrastructure.
          </p>

          <Link
            to="/career"
            className="text-nav inline-flex items-center gap-3 bg-[#005f9e] hover:bg-[#005f9e] text-white font-bold tracking-wide px-7 py-4 rounded-none transition-all duration-300 shadow-lg group active:scale-95 border border-white/10 uppercase font-outfit"
          >
            <span>Careers at Bluegrid</span>
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
