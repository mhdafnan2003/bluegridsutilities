import React from 'react';
import { Link } from 'react-router-dom';
import MotionSection from '../../components/MotionSection';
import missionBg from '../../assets/images/mission_bg.png';
import waterMeterImg from '../../assets/images/water meter suoort bluegrids.jpeg';
import complianceImg from '../../assets/images/Sectors/Compliance & Onboarding.jpg';
import infraImg from '../../assets/images/utility_grid_work.png';
import workersImg from '../../assets/images/uk_utility_workers_site.png';

const OurMissionsPage = () => {
  return (
    <div className="font-sans">
      <MotionSection 
        as="section" 
        className="pb-20 md:pb-32 bg-white" 
        id="our-missions"
        initial="hidden"
        animate="visible"
        whileInView={undefined}
        viewport={undefined}
      >
        <div className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-12">
          
          {/* Unified Big Mission Hero Banner */}
          <div className="relative rounded-none overflow-hidden border border-slate-200 mb-24 shadow-2xl min-h-[480px] sm:min-h-[540px] lg:min-h-[580px] flex items-center bg-slate-900">
            <img 
              src={workersImg} 
              alt="UK Utility Infrastructure Operatives" 
              className="absolute inset-0 w-full h-full object-cover brightness-90"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-transparent z-0" />
            
            {/* Text Box Container - Neutral Dark Glass, No Blue Tint */}
            <div className="relative z-10 p-6 sm:p-10 md:p-12 max-w-4xl text-left text-white bg-slate-950/75 backdrop-blur-md border border-white/20 shadow-2xl m-6 sm:m-10 lg:m-12">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="inline-block px-3.5 py-1.5 rounded-none bg-[#0066ff] text-white text-[11px] font-bold tracking-widest font-outfit uppercase border border-white/20 shadow-sm">
                  Our Purpose & Direction
                </span>
                <span className="text-[#60a5fa] font-bold text-xs tracking-widest font-outfit uppercase flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#60a5fa]" />
                  Official Mission Statement
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5 tracking-tight font-outfit leading-tight">
                Our Mission
              </h1>

              <blockquote className="text-base sm:text-xl md:text-2xl font-bold text-white mb-5 tracking-tight font-outfit leading-snug border-l-4 border-[#0066ff] pl-4 sm:pl-5 py-1 bg-white/5 rounded-none">
                "To deliver utility infrastructure safely, efficiently and professionally while building long-term partnerships based on trust, quality and reliability."
              </blockquote>

              <p className="text-slate-200 text-sm sm:text-base leading-relaxed font-medium">
                At Bluegrid Utilities, our mission guides every contract — supporting utility providers, principal contractors, and infrastructure partners through smart water metering, excavation, reinstatement, and associated civil engineering works across the UK water utility sector.
              </p>
            </div>
          </div>

          {/* Section Heading with Generous Whitespace */}
          <div className="text-left mb-16">
            <span className="inline-block px-3.5 py-1.5 rounded-none bg-[#005f9e]/10 text-[#005f9e] border border-[#005f9e]/20 text-xs font-black tracking-widest font-outfit uppercase mb-3">
              Core Pillars of Our Mission
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0f3a5e] tracking-tight font-outfit leading-tight">
              Mission Pillars
            </h2>
          </div>

          {/* Stacked Pillars - Overlapping Text Box at Bottom Right Corner */}
          <div className="space-y-20 sm:space-y-28 mb-24">
            {[
              {
                step: "01",
                title: "Safety First",
                badge: "ZERO-HARM CULTURE",
                desc: "We plan work so that risks are understood, controls are practical and every member of the workforce has authority to raise concerns and stop unsafe work.",
                icon: "shield",
                img: complianceImg
              },
              {
                step: "02",
                title: "Operational Efficiency",
                badge: "DISCIPLINED MOBILISATION",
                desc: "We focus on disciplined mobilisation, clear scheduling, accurate field information and responsive coordination so that teams can deliver efficiently without compromising safety or quality.",
                icon: "bolt",
                img: waterMeterImg
              },
              {
                step: "03",
                title: "Professional Excellence",
                badge: "WORKMANSHIP STANDARDS",
                desc: "We expect professional behaviour, accurate documentation, respect for customers and communities, and a consistent standard of workmanship.",
                icon: "verified",
                img: infraImg
              },
              {
                step: "04",
                title: "Trusted Partnerships",
                badge: "RELIABLE DELIVERY PARTNER",
                desc: "We want clients, contractors, operatives and suppliers to view Bluegrid as a reliable long-term delivery partner that communicates clearly and acts responsibly.",
                icon: "handshake",
                img: workersImg
              }
            ].map((pillar, idx) => (
              <div key={idx} className="relative text-left pt-2 lg:pt-6 pb-12 lg:pb-20">
                
                {/* Image Banner - Left 70% width */}
                <div className="relative w-full lg:w-[70%] h-[340px] sm:h-[400px] lg:h-[460px] overflow-hidden rounded-none shadow-xl group">
                  <img 
                    src={pillar.img} 
                    alt={pillar.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute bottom-4 left-4 bg-[#005f9e] text-white text-xs font-black px-4 py-2 tracking-widest font-outfit uppercase border border-white/20 shadow-md">
                    Pillar {pillar.step}
                  </div>
                </div>

                {/* Overlapping Text Container Box - Upper Right Corner (50% on banner, 50% outside banner) */}
                <div className="relative lg:absolute lg:top-6 lg:right-0 w-full lg:w-[54%] max-w-xl bg-[#f4f8fc] border border-slate-200/90 border-l-4 border-l-[#005f9e] p-6 sm:p-8 lg:p-10 shadow-2xl z-20 space-y-3 mt-6 lg:mt-0">
                  <div className="flex items-center gap-3">
                    <span className="w-10 h-10 rounded-none bg-[#005f9e]/10 text-[#005f9e] flex items-center justify-center border border-[#005f9e]/20 shrink-0 font-bold">
                      <span className="material-symbols-outlined text-xl">{pillar.icon}</span>
                    </span>
                    <span className="text-xs font-black tracking-widest text-[#005f9e] font-outfit uppercase">
                      {pillar.badge}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-[#0f3a5e] tracking-tight font-outfit leading-tight">
                    {pillar.title}
                  </h3>

                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
                    {pillar.desc}
                  </p>
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* Edge-to-Edge Full Width Get In Touch Banner with Background Image */}
        <div className="relative w-full overflow-hidden bg-slate-900 text-white py-20 sm:py-24 px-6 sm:px-12 md:px-24 text-left border-t border-b border-slate-200/20 mt-24">
          {/* Background Image */}
          <img 
            src={infraImg} 
            alt="Bluegrid Utilities Contact Infrastructure" 
            className="absolute inset-0 w-full h-full object-cover brightness-[0.4] contrast-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/70 to-transparent z-10" />

          {/* Content Container */}
          <div className="relative z-20 max-w-[90rem] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <span className="inline-block px-3.5 py-1.5 rounded-none bg-[#0066ff] text-white text-xs font-black tracking-widest font-outfit uppercase border border-white/20 shadow-md">
                  Partner With Us
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight font-outfit leading-tight">
                  Ready to Discuss Your Contract Requirements?
                </h2>
                <p className="text-slate-200 text-base sm:text-lg max-w-2xl leading-relaxed font-medium">
                  Our experienced management team and accredited field operatives are ready to support your utility contracts across the UK. Get in touch with us today.
                </p>
              </div>

              <div className="lg:col-span-4 flex lg:justify-end">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-3 bg-[#0066ff] hover:bg-white hover:text-[#0f3a5e] text-white transition-all duration-300 px-8 py-4 font-black text-xs sm:text-sm tracking-widest font-outfit shadow-2xl active:scale-95 group border-2 border-[#0066ff] hover:border-white"
                >
                  <span>Get In Touch</span>
                  <span className="transition-transform duration-300 group-hover:translate-x-1.5">➔</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </MotionSection>
    </div>
  );
};

export default OurMissionsPage;
