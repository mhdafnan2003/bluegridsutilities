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
          className="w-full h-full bg-cover bg-center bg-no-repeat absolute inset-0 filter brightness-[0.35]"
        />
        {/* Modern dark gradient mesh overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/95 via-brand-dark/85 to-transparent z-10 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent z-10 opacity-70" />
      </div>

      {/* Content wrapper */}
      <div className="relative z-20 max-w-4xl text-left flex flex-col items-start justify-center text-white">
        <span className="inline-block px-4 py-1.5 rounded-none bg-brand-primary text-white text-[10px] sm:text-xs font-black tracking-widest mb-6 font-outfit">
          Build Your Career With Us
        </span>
        
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6 font-outfit max-w-3xl leading-tight">
          Join Our Growing <span className="text-brand-primary">Workforce</span> Team
        </h2>

        <p className="text-sm sm:text-base md:text-lg text-slate-300 mb-10 max-w-2xl leading-relaxed font-medium">
          We are always looking for skilled operatives, technicians, project managers, and coordinators. Join a compliance-first utilities provider delivering excellence across the UK.
        </p>

        <Link
          to="/career"
          className="inline-flex items-center gap-3 bg-brand-primary hover:bg-white hover:text-brand-dark text-white transition-all duration-300 px-8 py-4 font-black text-xs sm:text-sm tracking-widest font-outfit shadow-2xl active:scale-95 group border-2 border-brand-primary hover:border-white"
        >
          <span>Join Our Team</span>
          <span className="transition-transform duration-300 group-hover:translate-x-1.5">➔</span>
        </Link>
      </div>
    </MotionSection>
  );
};

export default JoinTeamBanner;
