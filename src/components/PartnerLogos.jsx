import React from 'react';
import MotionSection from './MotionSection';

const PartnerLogos = () => {
  // 6 Custom SVG Dummy Logos representing Utilities, Telecoms, Water, Infrastructure, and Energy sectors
  const partnerLogos = [
    {
      name: "EcoGrid Solutions",
      svg: (
        <svg className="h-8 w-auto text-slate-400 group-hover:text-emerald-500 transition-colors duration-300" viewBox="0 0 200 50" fill="currentColor">
          <path d="M20 15h12v4H20zm0 10h12v4H20zm0 10h12v4H20z" />
          <circle cx="45" cy="27" r="10" className="fill-none stroke-current stroke-2" />
          <path d="M45 20v14M40 27h10" />
          <text x="65" y="32" className="font-outfit font-bold text-sm tracking-widest text-slate-500 group-hover:text-slate-800 transition-colors duration-300">ECOGRID</text>
        </svg>
      )
    },
    {
      name: "Apex Water",
      svg: (
        <svg className="h-8 w-auto text-slate-400 group-hover:text-sky-500 transition-colors duration-300" viewBox="0 0 200 50" fill="currentColor">
          <path d="M25 35 L35 15 L45 35 Z" className="fill-none stroke-current stroke-2" />
          <path d="M30 30h10" />
          <path d="M35 15 C35 15 42 27 35 32 C28 27 35 15 35 15 Z" className="fill-current" />
          <text x="60" y="32" className="font-outfit font-bold text-sm tracking-widest text-slate-500 group-hover:text-slate-800 transition-colors duration-300">APEX WATER</text>
        </svg>
      )
    },
    {
      name: "VoltNet Telecom",
      svg: (
        <svg className="h-8 w-auto text-slate-400 group-hover:text-brand-primary transition-colors duration-300" viewBox="0 0 200 50" fill="currentColor">
          <circle cx="25" cy="25" r="5" />
          <circle cx="45" cy="15" r="5" />
          <circle cx="45" cy="35" r="5" />
          <line x1="25" y1="25" x2="45" y2="15" className="stroke-current stroke-2" />
          <line x1="25" y1="25" x2="45" y2="35" className="stroke-current stroke-2" />
          <text x="65" y="32" className="font-outfit font-bold text-sm tracking-widest text-slate-500 group-hover:text-slate-800 transition-colors duration-300">VOLTNET</text>
        </svg>
      )
    },
    {
      name: "TerraGas UK",
      svg: (
        <svg className="h-8 w-auto text-slate-400 group-hover:text-amber-500 transition-colors duration-300" viewBox="0 0 200 50" fill="currentColor">
          <path d="M35 12c-8 8-12 15-12 21a12 12 0 0 0 24 0c0-6-4-13-12-21z" className="fill-none stroke-current stroke-2" />
          <path d="M35 22c-4 4-6 8-6 11a6 6 0 0 0 12 0c0-3-2-7-6-11z" />
          <text x="60" y="32" className="font-outfit font-bold text-sm tracking-widest text-slate-500 group-hover:text-slate-800 transition-colors duration-300">TERRAGAS</text>
        </svg>
      )
    },
    {
      name: "UK Power Support",
      svg: (
        <svg className="h-8 w-auto text-slate-400 group-hover:text-red-500 transition-colors duration-300" viewBox="0 0 200 50" fill="currentColor">
          <path d="M35 10 L22 28 H33 L25 42 L42 22 H31 Z" />
          <text x="55" y="32" className="font-outfit font-bold text-sm tracking-widest text-slate-500 group-hover:text-slate-800 transition-colors duration-300">UK POWER</text>
        </svg>
      )
    },
    {
      name: "MetroLink Infra",
      svg: (
        <svg className="h-8 w-auto text-slate-400 group-hover:text-indigo-500 transition-colors duration-300" viewBox="0 0 200 50" fill="currentColor">
          <path d="M20 20h30v10H20z" className="fill-none stroke-current stroke-2" />
          <circle cx="28" cy="25" r="3" />
          <circle cx="42" cy="25" r="3" />
          <path d="M15 25h5M50 25h5" className="stroke-current stroke-2" />
          <text x="65" y="32" className="font-outfit font-bold text-sm tracking-widest text-slate-500 group-hover:text-slate-800 transition-colors duration-300">METROLINK</text>
        </svg>
      )
    }
  ];

  // Tripling the array list to ensure seamless infinite looping marquee width
  const loopList = [...partnerLogos, ...partnerLogos, ...partnerLogos, ...partnerLogos];

  return (
    <MotionSection 
      as="div" 
      className="py-12 bg-[#f8fafc] border-y border-slate-100 overflow-hidden relative"
      id="partner-logos-banner"
    >
      {/* Subtle side fading gradient overlay masks */}
      <div className="absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-[#f8fafc] to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-[#f8fafc] to-transparent z-10 pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 text-center mb-6">
        <span className="text-[10px] sm:text-xs font-black text-slate-400 tracking-[0.2em] uppercase font-outfit">
          Trusted By Leading Utilities & Infrastructure Partners
        </span>
      </div>

      <div className="relative w-full overflow-hidden flex items-center">
        {/* Continuous horizontal moving container */}
        <div className="inline-flex w-max animate-marquee gap-12 sm:gap-20 px-6">
          {loopList.map((partner, idx) => (
            <div 
              key={idx} 
              className="flex items-center justify-center group transform transition-all duration-300 hover:scale-105 select-none shrink-0"
              title={partner.name}
            >
              {partner.svg}
            </div>
          ))}
        </div>
      </div>
    </MotionSection>
  );
};

export default PartnerLogos;
