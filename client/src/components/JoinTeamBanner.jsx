import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import bannerImg from '../assets/images/join_team_banner.png';
import MotionSection from './MotionSection';

const JoinTeamBanner = () => {
  return (
    <MotionSection 
      as="section" 
      className="relative overflow-hidden py-24 px-6 sm:px-12 md:px-24 text-left font-sans"
      id="join-team-banner"
    >
      {/* Background image container with subtle parallax zoom */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          style={{ backgroundImage: `url(${bannerImg})` }}
          className="w-full h-full bg-cover bg-center bg-no-repeat absolute inset-0 filter brightness-90 contrast-[1.05]"
        />
        {/* Clean neutral dark gradient overlay for text readability without blue tint */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/55 to-slate-950/20 z-10" />
      </div>

      {/* Content wrapper */}
      <div className="relative z-20 max-w-4xl text-left flex flex-col items-start justify-center text-white">
        <span className="inline-block px-4 py-1.5 rounded-none bg-[#005f9e] text-white text-[10px] sm:text-xs font-black tracking-widest mb-6 font-outfit uppercase">
          Careers &amp; Opportunities
        </span>
        
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6 font-outfit max-w-3xl leading-tight">
          Build your career in utility delivery
        </h2>

        <p className="text-sm sm:text-base md:text-lg text-slate-200 mb-10 max-w-2xl leading-relaxed font-medium">
          We recruit field, supervisory and project-support roles as genuine project requirements arise. If you value practical work, clear expectations and a safety-led operating environment, view our current opportunities.
        </p>

        <div className="flex flex-wrap items-center gap-4">
          <Link
            to="/careers/jobs"
            className="inline-flex items-center gap-3 bg-[#0066ff] hover:bg-white hover:text-[#0f3a5e] text-white transition-all duration-300 px-8 py-4 font-black text-xs sm:text-sm tracking-widest font-outfit shadow-2xl active:scale-95 group border-2 border-[#0066ff] hover:border-white"
          >
            <span>View current vacancies</span>
            <span className="transition-transform duration-300 group-hover:translate-x-1.5">➔</span>
          </Link>
          <Link
            to="/careers"
            className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border-2 border-white/70 hover:border-white px-7 py-3.5 font-bold text-xs sm:text-sm tracking-widest font-outfit backdrop-blur-sm transition-all"
          >
            <span>Careers at Bluegrid</span>
            <span className="material-symbols-outlined text-base">arrow_forward</span>
          </Link>
        </div>
      </div>
    </MotionSection>
  );
};

export default JoinTeamBanner;
