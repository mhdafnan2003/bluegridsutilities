import React from 'react';
import { Link } from 'react-router-dom';
import MotionSection from '../../components/MotionSection';
import visionBg from '../../assets/images/vision_bg.png';
import heroOneImg from '../../assets/images/updated/hero_blue_one.png';
import waterMeterImg from '../../assets/images/water meter suoort bluegrids.jpeg';
import complianceImg from '../../assets/images/Sectors/Compliance & Onboarding.jpg';
import infraImg from '../../assets/images/utility_grid_work.png';

const OurVisionsPage = () => {
  return (
    <div className="font-sans">
      <MotionSection 
        as="section" 
        className="pb-20 md:pb-32 bg-white" 
        id="our-visions"
        initial="hidden"
        animate="visible"
        whileInView={undefined}
        viewport={undefined}
      >
        <div className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-12">
          
          {/* Unified Big Vision Hero Banner */}
          <div className="relative rounded-none overflow-hidden border border-slate-200 mb-24 shadow-2xl min-h-[480px] sm:min-h-[540px] lg:min-h-[580px] flex items-center bg-slate-900">
            <img 
              src={heroOneImg} 
              alt="UK Utility Operations Vision" 
              className="absolute inset-0 w-full h-full object-cover brightness-90"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-transparent z-0" />
            
            {/* Text Box Container - Neutral Dark Glass, No Blue Tint */}
            <div className="relative z-10 p-6 sm:p-10 md:p-12 max-w-4xl text-left text-white bg-slate-950/75 backdrop-blur-md border border-white/20 shadow-2xl m-6 sm:m-10 lg:m-12">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="inline-block px-3.5 py-1.5 rounded-none bg-[#0066ff] text-white text-[11px] font-bold tracking-widest font-outfit uppercase border border-white/20 shadow-sm">
                  Future Roadmap & Ambitions
                </span>
                <span className="text-[#60a5fa] font-bold text-xs tracking-widest font-outfit uppercase flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#60a5fa]" />
                  Official Vision Statement
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5 tracking-tight font-outfit leading-tight">
                Our Vision
              </h1>

              <blockquote className="text-base sm:text-xl md:text-2xl font-bold text-white mb-5 tracking-tight font-outfit leading-snug border-l-4 border-[#0066ff] pl-4 sm:pl-5 py-1 bg-white/5 rounded-none">
                "To become one of the UK’s leading utility infrastructure contractors recognised for innovation, safety, quality and operational excellence."
              </blockquote>

              <p className="text-slate-200 text-sm sm:text-base leading-relaxed font-medium">
                Our vision shapes our strategic expansion. Bluegrid Utilities aims to set the national benchmark for utility infrastructure delivery through continuous workforce development, smart metering rollouts, stringent safety systems, and trusted contractor partnerships across England, Scotland, and Wales.
              </p>
            </div>
          </div>

          {/* Section Heading with Generous Whitespace */}
          <div className="text-left mb-16">
            <span className="inline-block px-3.5 py-1.5 rounded-none bg-[#005f9e]/10 text-[#005f9e] border border-[#005f9e]/20 text-xs font-black tracking-widest font-outfit uppercase mb-3">
              Strategic Vision & Milestones
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0f3a5e] tracking-tight font-outfit leading-tight">
              Driving Long-Term Infrastructure Excellence
            </h2>
          </div>

          {/* Stacked Pillars - Overlapping Text Box at Bottom Right Corner */}
          <div className="space-y-20 sm:space-y-28 mb-24">
            {[
              {
                step: "01",
                title: "UK Industry Leadership",
                badge: "Tier-One Standards",
                desc: "Becoming a recognized tier-one utility contractor supporting water providers, principal contractors, and local infrastructure partners nationwide across England, Scotland, and Wales.",
                icon: "emoji_events",
                img: heroOneImg
              },
              {
                step: "02",
                title: "Innovation & Technology",
                badge: "Digital Integration",
                desc: "Pioneering smart water metering coordination, digital field reporting platforms, route optimization, and modern civil engineering practices across all contracted works.",
                icon: "lightbulb",
                img: waterMeterImg
              },
              {
                step: "03",
                title: "Safety & Compliance",
                badge: "Zero-Harm Commitment",
                desc: "Enforcing rigorous H&S compliance systems, CSCS/EUSR/NRSWA qualifications, site safety audits, and zero-harm operational protocols across all active site teams.",
                icon: "shield",
                img: complianceImg
              },
              {
                step: "04",
                title: "Operational Excellence",
                badge: "Precision Delivery",
                desc: "Consistently delivering high-quality excavation, reinstatement, smart metering, and civil works safely, on time, and strictly to utility client specification.",
                icon: "star",
                img: infraImg
              }
            ].map((item, idx) => (
              <div key={idx} className="relative text-left pt-2 lg:pt-6 pb-12 lg:pb-20">
                
                {/* Image Banner - Left 70% width */}
                <div className="relative w-full lg:w-[70%] h-[340px] sm:h-[400px] lg:h-[460px] overflow-hidden rounded-none shadow-xl group">
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute bottom-4 left-4 bg-[#005f9e] text-white text-xs font-black px-4 py-2 tracking-widest font-outfit uppercase border border-white/20 shadow-md">
                    Milestone {item.step}
                  </div>
                </div>

                {/* Overlapping Text Container Box - Upper Right Corner (50% on banner, 50% outside banner) */}
                <div className="relative lg:absolute lg:top-6 lg:right-0 w-full lg:w-[54%] max-w-xl bg-[#f4f8fc] border border-slate-200/90 border-l-4 border-l-[#005f9e] p-6 sm:p-8 lg:p-10 shadow-2xl z-20 space-y-3 mt-6 lg:mt-0">
                  <div className="flex items-center gap-3">
                    <span className="w-10 h-10 rounded-none bg-[#005f9e]/10 text-[#005f9e] flex items-center justify-center border border-[#005f9e]/20 shrink-0 font-bold">
                      <span className="material-symbols-outlined text-xl">{item.icon}</span>
                    </span>
                    <span className="text-xs font-black tracking-widest text-[#005f9e] font-outfit uppercase">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-[#0f3a5e] tracking-tight font-outfit leading-tight">
                    {item.title}
                  </h3>

                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
                    {item.desc}
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

export default OurVisionsPage;
