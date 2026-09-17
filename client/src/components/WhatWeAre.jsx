import React from 'react';
import { Link } from 'react-router-dom';
import MotionSection from './MotionSection';
import excavationImg from '../assets/images/uk_utility_excavation.jpg';
import safetyBg from '../assets/images/safety_bg.png';

const WhatWeAre = () => {
  return (
    <MotionSection as="section" className="py-20 md:py-28 bg-white font-sans relative" id="about-intro">
      <div className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Top Section Header / Introduction */}
        <div className="max-w-3xl text-left mb-14 md:mb-16">
          <span className="inline-block px-4 py-1.5 rounded-none bg-[#005f9e]/10 text-[#005f9e] text-xs font-black tracking-widest mb-4 font-outfit border border-[#005f9e]/20">
            About Bluegrid Utilities
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0f3a5e] tracking-tight font-outfit leading-tight mb-4">
            Disciplined Utility Infrastructure Delivery
          </h2>
          <p className="text-slate-600 text-base md:text-lg leading-relaxed font-medium">
            Utility delivery depends on more than people in the field. It requires planning, safe access, competent deployment, clear supervision, accurate records and prompt escalation when conditions change. Bluegrid Utilities brings those disciplines together to support authorised utility projects.
          </p>
        </div>

        {/* Factual Company Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-16">
          {/* Image */}
          <div className="lg:col-span-6 relative overflow-hidden h-[340px] sm:h-[400px] w-full border border-slate-200 shadow-lg">
            <img 
              src={excavationImg} 
              alt="Bluegrid Utilities Field Operations" 
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 bg-[#005f9e] text-white font-black text-xs px-3.5 py-1.5 font-outfit tracking-wider shadow">
              Operational Delivery
            </div>
          </div>

          {/* Text Content */}
          <div className="lg:col-span-6 text-left flex flex-col justify-center">
            <h3 className="text-2xl sm:text-3xl font-bold text-[#0f3a5e] tracking-tight font-outfit mb-4">
              A practical utility delivery business
            </h3>
            
            <p className="text-slate-700 text-base leading-relaxed font-medium mb-6">
              Bluegrid Technology Ltd, trading as Bluegrid Utilities, is an England and Wales registered company operating in the UK utilities and infrastructure sector. Our current operational activity includes smart water-meter installation and associated utility support, backed by project management and operational coordination.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 bg-[#005f9e] hover:bg-[#0f3a5e] text-white font-bold text-xs tracking-widest px-6 py-3.5 font-outfit transition-colors shadow-md group"
              >
                <span>About Bluegrid Utilities</span>
                <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">arrow_forward</span>
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-[#005f9e] hover:text-[#0f3a5e] font-bold text-xs tracking-widest font-outfit transition-colors"
              >
                <span>Discuss a Project</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Safety & Quality Section */}
        <div className="bg-[#0f3a5e] text-white p-8 sm:p-12 border border-[#0f3a5e] shadow-xl text-left relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-[#005f9e]/30 blur-3xl pointer-events-none" />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-[#60a5fa] font-bold text-xs tracking-widest font-outfit uppercase block">
                Health, Safety, Environment &amp; Quality
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold font-outfit tracking-tight text-white">
                Safety before output
              </h3>
              
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed font-medium">
                Safety takes priority over productivity, cost and programme. Work must be carried out in line with the approved requirements that apply to the project, including relevant RAMS, permits, technical requirements, traffic-management arrangements, environmental obligations and client instructions.
              </p>

              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-medium">
                We expect operational information, completion records, incidents, defects and issues to be recorded accurately so that problems can be acted on rather than hidden.
              </p>
            </div>

            <div className="lg:col-span-4 flex lg:justify-end">
              <Link
                to="/health-safety"
                className="inline-flex items-center justify-center gap-2.5 bg-[#0066ff] hover:bg-white hover:text-[#0f3a5e] text-white font-bold text-xs tracking-widest px-7 py-4 border border-white/20 transition-all duration-300 shadow-lg font-outfit uppercase w-full sm:w-auto text-center"
              >
                <span>Our safety and quality approach</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>

      </div>
    </MotionSection>
  );
};

export default WhatWeAre;
