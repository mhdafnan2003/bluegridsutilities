import React from 'react';
import { Link } from 'react-router-dom';
import MotionSection from './MotionSection';
import sustainabilityBannerImg from '../assets/images/sustainability_banner.png';

const SustainabilityBanner = () => {
  return (
    <MotionSection as="section" className="overflow-hidden font-sans border-b border-slate-100" id="sustainability-banner">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[450px]">
        {/* Left: Image Banner */}
        <div className="relative w-full h-[320px] sm:h-[400px] lg:h-auto min-h-[350px]">
          <img 
            src={sustainabilityBannerImg} 
            alt="Innovation in sustainable working" 
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        {/* Right: Text Banner */}
        <div className="bg-[#374151] flex flex-col justify-center items-start text-left p-8 sm:p-12 md:p-16 lg:p-20 text-white">
          <span className="text-xs sm:text-sm font-bold text-[#a3e635] tracking-widest uppercase mb-4 font-outfit">
            Innovation in Sustainable Working
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6 leading-tight font-outfit">
            We invest in the latest machinery and the local workforce
          </h2>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-8">
            We work with our customers to ensure we deliver services in the most efficient and least disruptive way, whilst providing local job opportunities through direct recruitment and utilising local supply chains.
          </p>
          <Link 
            to="/sustainability" 
            className="inline-flex items-center gap-3 bg-white text-[#374151] hover:bg-brand-primary hover:text-white transition-all duration-300 px-6 py-3.5 rounded-none font-bold text-xs sm:text-sm uppercase tracking-widest font-outfit shadow-md active:scale-95 group"
          >
            <span>Find Out More</span>
            <span className="transition-transform duration-300 group-hover:translate-x-1">➔</span>
          </Link>
        </div>
      </div>
    </MotionSection>
  );
};

export default SustainabilityBanner;
