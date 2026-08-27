import React from 'react';
import { Link } from 'react-router-dom';
import MotionSection from './MotionSection';

// High quality sector & operational images
import complianceImg from '../assets/images/Sectors/Compliance & Onboarding.jpg';
import trafficMgmtImg from '../assets/images/uk_traffic_management.jpg';
import excavationImg from '../assets/images/uk_utility_excavation.jpg';
import coordinationImg from '../assets/images/Sectors/Project Coordination.jpg';

const pillars = [
  {
    step: "01",
    title: "Mission",
    subtitle: "Safe, Efficient & Professional Delivery",
    desc: "To deliver utility infrastructure safely, efficiently and professionally while building long-term partnerships based on trust, quality and reliability.",
    icon: "flag",
    img: complianceImg,
    bullets: [
      "Safe, efficient & professional infrastructure delivery",
      "Long-term partnerships built on trust & quality",
      "Reliability & quality in every utility contract"
    ]
  },
  {
    step: "02",
    title: "Vision",
    subtitle: "Leading UK Utility Infrastructure Partner",
    desc: "To become one of the UK's leading utility infrastructure contractors recognised for innovation, safety, quality and operational excellence.",
    icon: "visibility",
    img: coordinationImg,
    bullets: [
      "Recognised leadership in UK utility infrastructure",
      "Driven by innovation, safety & quality standards",
      "Operational excellence across all utility contracts"
    ]
  },
  {
    step: "03",
    title: "Our Story",
    subtitle: "Disciplined & Scalable Capability",
    desc: "Bluegrid Utilities has been established to build a disciplined, scalable delivery capability for UK utility programmes, combining experienced management, field mobilisation and a strong commitment to compliance.",
    icon: "history_edu",
    img: excavationImg,
    bullets: [
      "Disciplined & scalable delivery capability",
      "Experienced management & field mobilisation",
      "Strong commitment to compliance & safety"
    ]
  },
  {
    step: "04",
    title: "Values",
    subtitle: "The Principles That Guide Every Project",
    desc: "Safety, integrity, quality, innovation, customer focus, environmental responsibility, people development, continuous improvement, accountability and professionalism.",
    icon: "verified",
    img: trafficMgmtImg,
    bullets: [
      "Safety, Integrity, Quality & Innovation",
      "Customer Focus, Environmental Responsibility & Accountability",
      "People Development, Continuous Improvement & Professionalism"
    ]
  }
];

const WhatWeAre = () => {
  return (
    <MotionSection as="section" className="py-20 md:py-28 bg-white font-sans relative" id="what-we-are">
      <div className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl text-left mb-16 md:mb-24">
          <span className="inline-block px-4 py-1.5 rounded-none bg-[#005f9e]/10 text-[#005f9e] text-xs font-black tracking-widest mb-4 font-outfit border border-[#005f9e]/20">
            Our Identity & Foundation
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0f3a5e] tracking-tight font-outfit leading-tight mb-5">
            What We Are
          </h2>
          <p className="text-slate-600 text-base md:text-lg leading-relaxed font-medium">
            Bluegrid Utilities is a UK-based utility infrastructure contractor delivering safe, reliable, and high-quality services across smart water metering, excavation, reinstatement, and associated civil engineering works.
          </p>
        </div>

        {/* Clean Unboxed Rows with Side-by-Side Alignment */}
        <div className="space-y-16 md:space-y-24 divide-y divide-slate-100">
          {pillars.map((pillar, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div 
                key={idx}
                className={`pt-16 first:pt-0 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center`}
              >
                {/* Image Frame (Unboxed) */}
                <div 
                  className={`lg:col-span-6 relative overflow-hidden h-[300px] sm:h-[360px] md:h-[400px] w-full shrink-0 ${
                    isEven ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <img 
                    src={pillar.img} 
                    alt={pillar.title} 
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                  
                  {/* Step Badge */}
                  <div className="absolute top-4 left-4 bg-[#005f9e] text-white font-black text-xs px-3.5 py-1.5 rounded-none tracking-wider font-outfit shadow-md flex items-center gap-2 border border-white/20">
                    <span className="w-2 h-2 rounded-none bg-white" />
                    Pillar {pillar.step}
                  </div>
                </div>

                {/* Text Content Block (Clean Aligned Text) */}
                <div 
                  className={`lg:col-span-6 flex flex-col justify-center text-left ${
                    isEven ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  {/* Subtitle Badge */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-none bg-[#005f9e]/10 border border-[#005f9e]/20 text-[#005f9e] flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-xl">{pillar.icon}</span>
                    </div>
                    <span className="text-[#005f9e] font-bold text-xs tracking-widest font-outfit">
                      {pillar.subtitle}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0f3a5e] tracking-tight font-outfit mb-4">
                    {pillar.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium mb-6">
                    {pillar.desc}
                  </p>

                  {/* Bullet Points */}
                  <ul className="space-y-3 mb-8">
                    {pillar.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-3 text-slate-700 text-xs sm:text-sm font-semibold">
                        <span className="material-symbols-outlined text-[#005f9e] text-lg shrink-0 mt-0.5">
                          check_circle
                        </span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Action Link */}
                  <a
                    href="/services"
                    className="inline-flex items-center gap-2 text-[#005f9e] font-black text-xs tracking-widest font-outfit hover:text-[#0f3a5e] transition-colors group self-start"
                  >
                    <span>Explore Capabilities</span>
                    <span className="material-symbols-outlined text-sm transition-transform duration-300 group-hover:translate-x-1">
                      arrow_forward
                    </span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Foundation Summary Box - Core Values Bar */}
        <div className="mt-20 bg-[#0f3a5e] rounded-none border border-[#0f3a5e] p-8 sm:p-12 text-white text-left shadow-xl relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-[#005f9e]/20 rounded-none blur-3xl pointer-events-none" />
          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="max-w-4xl">
              <span className="text-[#0066ff] font-bold text-xs tracking-widest font-outfit block mb-2">
                Our 10 Guiding Core Values
              </span>
              <h4 className="text-xl sm:text-2xl font-bold font-outfit tracking-tight text-white mb-4">
                Built on Trust, Quality & Continuous Improvement
              </h4>
              <div className="flex flex-wrap gap-2 text-xs font-semibold">
                {[
                  "Safety First",
                  "Integrity",
                  "Quality",
                  "Innovation",
                  "Customer Focus",
                  "Environmental Responsibility",
                  "People Development",
                  "Continuous Improvement",
                  "Accountability",
                  "Professionalism"
                ].map((val, vIdx) => (
                  <span key={vIdx} className="bg-white/10 border border-white/15 px-3.5 py-1.5 rounded-none text-slate-200">
                    {val}
                  </span>
                ))}
              </div>
            </div>
            <Link
              to="/about"
              className="px-7 py-3.5 bg-[#0066ff] hover:bg-[#0052cc] text-white font-bold text-xs tracking-wider rounded-none border border-white/10 transition-all duration-300 shrink-0 shadow-lg"
            >
              View More About Us
            </Link>
          </div>
        </div>

      </div>
    </MotionSection>
  );
};

export default WhatWeAre;
