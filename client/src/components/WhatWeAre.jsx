import React from 'react';
import { Link } from 'react-router-dom';
import MotionSection from './MotionSection';
import growthImg from '../assets/images/edb132ce-4e08-43ea-aef4-5ba3888c1c01.JPG';

const WhatWeAre = () => {
  return (
    <MotionSection as="section" className="py-20 md:py-28 bg-white font-sans relative" id="about-intro">
      <div className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Top Section Header / Introduction (Pack 01: Supporting Utility Delivery in the UK) */}
        <div className="max-w-3xl text-left mb-14 md:mb-16">
          <span className="inline-block px-4 py-1.5 rounded-none bg-[#005f9e]/10 text-[#005f9e] text-xs font-black tracking-widest mb-4 font-outfit border border-[#005f9e]/20 uppercase">
            Supporting Utility Delivery in the UK
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0f3a5e] tracking-tight font-outfit leading-tight mb-4">
            Supporting Utility Delivery in the UK
          </h2>
          <p className="text-slate-700 text-base md:text-lg leading-relaxed font-medium mb-3">
            Bluegrid Utilities is the trading name of Bluegrid Technology Ltd. We support authorised utility project delivery through a combination of field mobilisation, operational coordination and project support.
          </p>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
            Our current operational activity includes smart water-meter installation and associated utility support. We focus on controlled mobilisation, clear reporting, safe working and accurate completion records in line with the requirements of each project.
          </p>
        </div>

        {/* About Section (Pack 01: Structured for Responsible Growth) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-16">
          {/* Image */}
          <div className="lg:col-span-6 relative overflow-hidden h-[340px] sm:h-[400px] w-full border border-slate-200 shadow-lg">
            <img 
              src={growthImg} 
              alt="Bluegrid Utilities Team" 
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              style={{ objectPosition: 'center 25%' }}
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 bg-[#005f9e] text-white font-black text-xs px-3.5 py-1.5 font-outfit tracking-wider shadow">
              Operational Delivery
            </div>
          </div>

          {/* Text Content */}
          <div className="lg:col-span-6 text-left flex flex-col justify-center">
            <span className="text-xs font-bold text-[#005f9e] uppercase tracking-widest font-outfit mb-2">About Bluegrid</span>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#0f3a5e] tracking-tight font-outfit mb-4">
              Structured for Responsible Growth
            </h3>
            
            <p className="text-slate-700 text-base leading-relaxed font-medium mb-6">
              Bluegrid Utilities is building its capability in the UK utilities and infrastructure sector through disciplined project management, operational coordination and field delivery support. We aim to grow in step with our proven resources, competencies and authorised project opportunities.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 bg-[#005f9e] hover:bg-[#0f3a5e] text-white font-bold text-xs tracking-widest px-6 py-3.5 font-outfit transition-colors shadow-md group uppercase"
              >
                <span>About Bluegrid</span>
                <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">arrow_forward</span>
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-[#005f9e] hover:text-[#0f3a5e] font-bold text-xs tracking-widest font-outfit transition-colors uppercase"
              >
                <span>Discuss a Project</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Safety & Quality Section (Pack 01: Safety and Quality Come Before Output) */}
        <div className="bg-[#0f3a5e] text-white p-8 sm:p-12 border border-[#0f3a5e] shadow-xl text-left relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-[#005f9e]/30 blur-3xl pointer-events-none" />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-[#60a5fa] font-bold text-xs tracking-widest font-outfit uppercase block">
                Health, Safety &amp; Quality
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold font-outfit tracking-tight text-white">
                Safety and Quality Come Before Output
              </h3>
              
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed font-medium">
                Productivity targets must never override safety, approved working methods, permits, technical requirements, environmental obligations or client instructions. We expect issues, defects, incidents and completion information to be recorded accurately and escalated through the appropriate project route.
              </p>
            </div>

            <div className="lg:col-span-4 flex lg:justify-end">
              <Link
                to="/safety-quality"
                className="inline-flex items-center justify-center gap-2.5 bg-[#0066ff] hover:bg-white hover:text-[#0f3a5e] text-white font-bold text-xs tracking-widest px-7 py-4 border border-white/20 transition-all duration-300 shadow-lg font-outfit uppercase w-full sm:w-auto text-center"
              >
                <span>Safety &amp; Quality</span>
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
