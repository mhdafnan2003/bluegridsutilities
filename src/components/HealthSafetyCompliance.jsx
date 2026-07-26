import React from 'react';
import MotionSection from './MotionSection';
import sustainabilityHeroBg from '../assets/images/sustainability_hero_bg.png';
import environmentalPolicyBg from '../assets/images/environmental_policy_bg.png';
import sustainabilityBannerImg from '../assets/images/sustainability_banner.png';

const safetyModules = [
  {
    id: "01",
    title: "PPE Standards",
    icon: "engineering",
    desc: "Mandatory high-visibility gear, protective footwear, and head protection conforming to UK safety regulations. Checked and enforced via regular compliance audits."
  },
  {
    id: "02",
    title: "RAMS Procedures",
    icon: "assignment_late",
    desc: "Comprehensive Risk Assessment and Method Statements compiled and approved prior to any site deployment, establishing clear risk mitigation protocols."
  },
  {
    id: "03",
    title: "NRSWA Compliance",
    icon: "gavel",
    desc: "Street operations managed in full compliance with the New Roads and Street Works Act, certifying that all supervisors and operatives hold valid accreditation."
  },
  {
    id: "04",
    title: "Traffic Management",
    icon: "traffic",
    desc: "Certified implementation of street signs, safety barriers, and pedestrian pathways to protect road users, pedestrians, and operational personnel."
  },
  {
    id: "05",
    title: "Daily Toolbox Talks",
    icon: "groups",
    desc: "Pre-shift briefings covering environmental hazards, specific site risk alerts, and standard procedures to keep safety-first practices front of mind.",
    active: true
  },
  {
    id: "06",
    title: "Workforce Safety Monitoring",
    icon: "visibility",
    desc: "Proactive inspections, continuous training verification checks, and auditing by safety coordinators to ensure full adherence to standards."
  }
];

const HealthSafetyCompliance = () => {
  return (
    <div className="font-sans bg-white">
      
      {/* 1. Sustainability Hero Banner */}
      <MotionSection 
        as="section" 
        className="relative py-24 md:py-32 overflow-hidden bg-brand-dark" 
        id="sustainability-hero"
        initial="hidden"
        animate="visible"
        whileInView={undefined}
        viewport={undefined}
      >
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={sustainabilityHeroBg} 
            alt="Sustainable Infrastructure Banner" 
            className="w-full h-full object-cover opacity-60"
          />
          {/* Eco-themed brand gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/90 via-teal-900/80 to-[#032879]/70 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/95 via-transparent to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10 text-center lg:text-left">
          <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-sm font-semibold tracking-wider uppercase mb-6 font-outfit">
            Eco-Friendly & Safe Operations
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white max-w-4xl tracking-tight leading-tight font-outfit mb-6">
            Sustainability & Compliance
          </h1>
          <p className="text-slate-200 text-base md:text-lg lg:text-xl max-w-2xl leading-relaxed font-sans font-medium">
            Our blueprint for environmental stewardship, community empowerment, and zero-harm health and safety practices across UK utility and infrastructure projects.
          </p>
        </div>
      </MotionSection>

      {/* 2. Core Environmental & Social Pillars (Alternating Split Rows) */}
      <MotionSection as="section" className="py-20 md:py-24 bg-white" id="environmental-pillars">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 space-y-20 md:space-y-28">
          
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-1.5 rounded-full bg-brand-primary/10 text-brand-primary text-sm font-medium tracking-wide mb-4 font-outfit">
              Our Pillars
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-brand-dark tracking-tight leading-tight mb-6 font-outfit">
              Core Sustainability Commitments
            </h2>
            <p className="text-gray-500 text-base leading-relaxed font-sans font-medium">
              We align our operational workflows to respect local ecosystems, drive regional employment, and support a lower-carbon infrastructure future.
            </p>
          </div>

          {/* Row 1: Carbon Reduction & Ecosystems */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Content */}
            <div className="space-y-6 text-left">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <span className="material-symbols-outlined text-2xl font-bold">eco</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-brand-dark font-outfit">
                Carbon Reduction & Environmental Protection
              </h3>
              <p className="text-gray-600 text-base leading-relaxed font-sans font-medium">
                We are committed to minimizing the ecological impact of utility works. By recruiting local field teams, optimizing deployment routes, and utilizing energy-efficient equipment, we significantly reduce transportation emissions.
              </p>
              <p className="text-gray-600 text-base leading-relaxed font-sans font-medium">
                Our practices ensure clean water preservation, responsible waste disposal, and minimal disruption to the surrounding environment during street work excavations and reinstatements.
              </p>
              <div className="flex items-center gap-3 text-emerald-600 font-bold text-sm font-outfit">
                <span className="material-symbols-outlined">verified</span>
                <span>Active path to lower-emission infrastructure delivery</span>
              </div>
            </div>
            {/* Right: Image */}
            <div 
              className="relative h-[320px] md:h-[400px] rounded-[2.5rem] overflow-hidden shadow-lg border border-slate-100"
              style={{ maskImage: 'radial-gradient(white, black)', WebkitMaskImage: '-webkit-radial-gradient(white, black)' }}
            >
              <img 
                src={environmentalPolicyBg} 
                alt="Environmental Policy background" 
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>
          </div>

          {/* Row 2: Communities & Workforce */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Image (Order swapped for alternating on desktop) */}
            <div 
              className="relative h-[320px] md:h-[400px] rounded-[2.5rem] overflow-hidden shadow-lg border border-slate-100 lg:order-1 order-2"
              style={{ maskImage: 'radial-gradient(white, black)', WebkitMaskImage: '-webkit-radial-gradient(white, black)' }}
            >
              <img 
                src={sustainabilityBannerImg} 
                alt="Social sustainability and local onboarding" 
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>
            {/* Right: Content */}
            <div className="space-y-6 text-left lg:order-2 order-1">
              <div className="w-12 h-12 rounded-2xl bg-brand-primary/10 text-brand-primary flex items-center justify-center">
                <span className="material-symbols-outlined text-2xl font-bold">diversity_3</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-brand-dark font-outfit">
                Social Sustainability & Local Recruitment
              </h3>
              <p className="text-gray-600 text-base leading-relaxed font-sans font-medium">
                Sustainability extends directly to the communities we serve. We prioritize hiring local operatives, coordinates training to build long-term career opportunities in infrastructure, and partner with local supply chain vendors.
              </p>
              <p className="text-gray-600 text-base leading-relaxed font-sans font-medium">
                This circular economic approach boosts regional development, reduces commuter travel requirements, and secures a resilient local utility workforce for long-term project delivery.
              </p>
              <div className="flex items-center gap-3 text-brand-primary font-bold text-sm font-outfit">
                <span className="material-symbols-outlined">verified</span>
                <span>Direct community recruitment & regional skill-building</span>
              </div>
            </div>
          </div>

        </div>
      </MotionSection>

      {/* 3. Health, Safety & Compliance (Staggered Offset Card Layout) */}
      <MotionSection as="section" className="py-20 md:py-24 bg-slate-50 border-t border-slate-100" id="safety-compliance">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
            <span className="inline-block px-4 py-1.5 rounded-full bg-brand-primary/10 text-brand-primary text-sm font-medium tracking-wide mb-4 font-outfit">
              Compliance Focus
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-brand-dark tracking-tight leading-tight mb-6 font-outfit">
              Operational Safety Standards
            </h2>
            <p className="text-gray-500 text-base leading-relaxed font-sans font-medium">
              We execute a strict compliance structure to guarantee a zero-harm operational environment across all worksites.
            </p>
          </div>

          {/* Staggered Offset Card Layout */}
          {/* pb-12/20 accounts for translate-y stagger offsets of bottom row cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 pb-12 md:pb-20">
            {safetyModules.map((module, index) => (
              <div 
                key={module.id} 
                className={`relative bg-white border border-slate-150 rounded-[2.2rem] p-8 md:p-10 flex flex-col gap-6 group transition-all duration-500 hover:shadow-2xl hover:shadow-brand-primary/5 hover:-translate-y-1.5 overflow-hidden
                  ${module.active ? 'border-l-4 border-l-brand-primary' : ''} 
                  ${index % 2 === 1 ? 'md:translate-y-8' : ''}`}
                style={{ maskImage: 'radial-gradient(white, black)', WebkitMaskImage: '-webkit-radial-gradient(white, black)' }}
              >
                {/* Large Background Card Number for visual design */}
                <span className="absolute top-4 right-8 text-7xl md:text-8xl font-black text-slate-50/80 group-hover:text-slate-100/50 transition-colors select-none pointer-events-none font-outfit">
                  {module.id}
                </span>

                {/* Card Icon Header */}
                <div className="flex justify-between items-start z-10">
                  <div className="w-14 h-14 rounded-2xl bg-brand-primary/5 text-brand-primary flex items-center justify-center group-hover:bg-brand-primary group-hover:text-white transition-all duration-300">
                    <span className="material-symbols-outlined text-3xl group-hover:scale-110 transition-transform">{module.icon}</span>
                  </div>
                  {module.active && (
                    <span className="inline-block px-3 py-1 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-bold uppercase tracking-widest font-outfit">
                      ACTIVE STANDARD
                    </span>
                  )}
                </div>

                {/* Card Content */}
                <div className="space-y-3 z-10 text-left">
                  <h3 className="text-lg md:text-xl font-bold text-brand-dark tracking-wide font-outfit group-hover:text-brand-primary transition-colors">
                    {module.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed font-sans font-medium">
                    {module.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </MotionSection>

    </div>
  );
};

export default HealthSafetyCompliance;