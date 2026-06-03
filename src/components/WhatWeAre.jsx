import React from 'react';
import MotionSection from './MotionSection';

// Unique, unused background images
import complianceImg from '../assets/images/Sectors/Compliance & Onboarding.jpg';
import reliabilityImg from '../assets/images/updated/img 3.jpg';
import readinessImg from '../assets/images/updated/img 1.jpg';
import coordinationImg from '../assets/images/Sectors/Project Coordination.jpg';

const pillars = [
  {
    title: "Compliance",
    desc: "Rigorous vetting, training coordination, and compliance verification.",
    icon: "verified",
    img: complianceImg
  },
  {
    title: "Reliability",
    desc: "A reliable workforce ready for essential infrastructure projects.",
    icon: "handshake",
    img: reliabilityImg
  },
  {
    title: "Workforce Readiness",
    desc: "Structured training and planning to maximize on-site efficiency.",
    icon: "groups",
    img: readinessImg
  },
  {
    title: "Operational Coordination",
    desc: "Seamless communication, reporting, and team management.",
    icon: "hub",
    img: coordinationImg
  }
];

const WhatWeAre = () => {
  return (
    <MotionSection as="section" className="py-24 bg-white font-sans animate-fade-in" id="what-we-are">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Text Content */}
          <div className="lg:col-span-6 flex flex-col text-left">
            <span className="self-start inline-block px-4 py-1.5 rounded-full bg-brand-primary/10 text-brand-primary text-sm font-medium tracking-wide mb-6">
              Our Identity
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-brand-dark tracking-tight leading-tight mb-6 font-outfit">
              What We Are
            </h2>
            <p className="text-slate-700 text-lg font-semibold leading-relaxed mb-6">
              BlueGrid Utilities is the trading name of Bluegrid Technology Ltd, a UK-registered company focused on supporting utility and infrastructure operations.
            </p>
            <p className="text-gray-500 text-base leading-relaxed mb-8">
              We work with project partners, contractors, and workforce teams to support the delivery of essential services across water, utilities, telecoms, and infrastructure sectors.
            </p>
            <div className="p-6 rounded-2xl bg-brand-primary/5 border border-brand-primary/10 text-left">
              <p className="text-brand-primary font-bold text-xs tracking-widest uppercase mb-2 font-outfit">
                Our Foundation
              </p>
              <p className="text-brand-dark font-medium text-base leading-relaxed flex items-start gap-3">
                <span className="material-symbols-outlined text-brand-primary shrink-0 mt-0.5">verified</span>
                Our approach is built on compliance, reliability, workforce readiness, and operational coordination.
              </p>
            </div>
          </div>

          {/* Right: Pillars Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {pillars.map((pillar, idx) => (
              <div 
                key={idx}
                className="relative h-[240px] sm:h-[260px] group rounded-[2.5rem] overflow-hidden transform translate-z-0 isolate shadow-md hover:shadow-2xl hover:shadow-brand-primary/20 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-end p-6 border border-slate-100/10 cursor-pointer"
              >
                {/* Background Image */}
                <img 
                  src={pillar.img} 
                  alt={pillar.title} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent group-hover:from-black group-hover:via-black/60 transition-all duration-500" />

                {/* Content */}
                <div className="relative z-10 flex flex-col items-start h-full justify-between w-full">
                  <div className="w-11 h-11 rounded-2xl bg-white/10 text-white border border-white/15 backdrop-blur-md flex items-center justify-center group-hover:bg-brand-primary group-hover:border-brand-primary group-hover:scale-110 transition-all duration-300">
                    <span className="material-symbols-outlined text-xl">{pillar.icon}</span>
                  </div>
                  
                  <div className="text-left w-full mt-auto">
                    <h3 className="text-base font-bold text-white tracking-tight mb-2 font-outfit leading-snug group-hover:text-brand-light transition-colors duration-300">
                      {pillar.title}
                    </h3>
                    <p className="text-slate-300 text-xs leading-relaxed line-clamp-2 group-hover:text-slate-200 transition-colors duration-300">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </MotionSection>
  );
};

export default WhatWeAre;
