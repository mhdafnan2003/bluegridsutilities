import React from 'react';
import MotionSection from './MotionSection';

// Unique focus area background images
import img1 from '../assets/images/Water meter installation support.jfif';
import img2 from '../assets/images/Smart meter workforce coordination.jfif';
import img3 from '../assets/images/Utility infrastructure support.jpg';
import img4 from '../assets/images/Telecoms and field operations support.jfif';
import img5 from '../assets/images/Project coordination and reporting.jpg';
import img6 from '../assets/images/Workforce onboarding and compliance verification.jpg';
import img7 from '../assets/images/Training coordination and deployment planning.jpg';

const focusAreas = [
  {
    title: "Water Meter Installation Support",
    desc: "Assisting with workforce planning, scheduling, and field coordination for smart and water meter installation projects.",
    icon: "water_drop",
    img: img1
  },
  {
    title: "Smart Meter Workforce Coordination",
    desc: "Coordinating qualified smart meter technicians and installers for large-scale utility rollouts.",
    icon: "settings_remote",
    img: img2
  },
  {
    title: "Utility Infrastructure Support",
    desc: "Supporting projects requiring site coordination, logistics support, and utilities infrastructure assistance.",
    icon: "construction",
    img: img3
  },
  {
    title: "Telecoms & Field Operations Support",
    desc: "Deploying skilled workers and supervisors for telecom networks and broad field operations.",
    icon: "cell_tower",
    img: img4
  },
  {
    title: "Project Coordination & Reporting",
    desc: "Handling detailed scheduling, reporting, and operational updates between teams and project managers.",
    icon: "analytics",
    img: img5
  },
  {
    title: "Workforce Onboarding & Compliance",
    desc: "Enforcing strict vetting, compliance verifications, and training checks before site deployment.",
    icon: "fact_check",
    img: img6
  },
  {
    title: "Training & Deployment Planning",
    desc: "Providing structured training coordination and logistics planning to maximize on-site efficiency.",
    icon: "event_note",
    img: img7
  }
];

const WhatWeDo = () => {
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft } = scrollRef.current;
      const cardWidth = 300 + 20; // card width + gap
      const scrollTo = direction === 'left' 
        ? scrollLeft - cardWidth 
        : scrollLeft + cardWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <MotionSection as="section" className="py-24 bg-[#f0f6fc]/40 font-sans" id="what-we-do">
      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">

        {/* Header Section with Title */}
        <div className="mb-12 text-center md:text-left">
          <span className="inline-block px-4 py-1.5 rounded-none bg-brand-primary/10 text-brand-primary text-sm font-medium tracking-wide mb-4">
            Core Capabilities
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-dark tracking-tight leading-tight mb-6 font-outfit">
            What We Do
          </h2>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-2xl">
            We provide operational support for utility and infrastructure projects, including workforce onboarding, project coordination, technician deployment, compliance checks, and site readiness support.
          </p>
        </div>

        <div 
          ref={scrollRef}
          className="flex flex-nowrap overflow-x-auto gap-5 pb-8 pt-4 px-4 -mx-4 md:px-0 md:mx-0 snap-x snap-mandatory no-scrollbar scroll-smooth"
        >
          {focusAreas.map((item, index) => (
            <div 
              key={index} 
              className="relative snap-start shrink-0 w-[270px] sm:w-[290px] md:w-[310px] h-[340px] md:h-[360px] group rounded-none overflow-hidden transform translate-z-0 isolate shadow-md hover:shadow-2xl hover:shadow-brand-primary/20 hover:-translate-y-2 transition-all duration-300 flex flex-col justify-end p-6 border border-slate-100/10 cursor-pointer"
            >
              {/* Card Background Image */}
              <img 
                src={item.img} 
                alt={item.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />

              {/* Card Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent group-hover:from-black/95 group-hover:via-black/50 group-hover:to-transparent transition-all duration-500" />

              {/* Card Content */}
              <div className="relative z-10 flex flex-col items-start justify-end h-full w-full text-left">
                <h3 className="text-base font-bold text-white tracking-tight mb-2 font-outfit leading-snug group-hover:text-brand-light transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-slate-300 text-[11px] leading-relaxed line-clamp-2 group-hover:text-slate-200 transition-colors duration-300">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Scroll Navigation Buttons at Bottom Center */}
        <div className="flex justify-center gap-4 mt-8">
          <button 
            onClick={() => scroll('left')}
            className="w-12 h-12 rounded-none border border-slate-200 bg-white text-[#0f3a5e] hover:bg-brand-primary hover:text-white hover:border-brand-primary flex items-center justify-center shadow-md transition-all duration-300 active:scale-95"
            aria-label="Scroll Left"
          >
            <span className="material-symbols-outlined text-xl">arrow_back</span>
          </button>
          <button 
            onClick={() => scroll('right')}
            className="w-12 h-12 rounded-none border border-slate-200 bg-white text-[#0f3a5e] hover:bg-brand-primary hover:text-white hover:border-brand-primary flex items-center justify-center shadow-md transition-all duration-300 active:scale-95"
            aria-label="Scroll Right"
          >
            <span className="material-symbols-outlined text-xl">arrow_forward</span>
          </button>
        </div>

      </div>
    </MotionSection>
  );
};

export default WhatWeDo;
