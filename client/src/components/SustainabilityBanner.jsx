import React from 'react';
import { Link } from 'react-router-dom';
import MotionSection from './MotionSection';
import sustainabilityBannerImg from '../assets/images/sustainability_banner.png';

const SustainabilityBanner = () => {
  return (
    <MotionSection as="section" className="overflow-hidden font-sans border-b border-slate-100" id="sustainability-banner">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[460px]">
        {/* Left: Image Banner */}
        <div className="relative w-full h-[340px] sm:h-[420px] lg:h-auto min-h-[380px] overflow-hidden group">
          <img 
            src={sustainabilityBannerImg} 
            alt="Innovation in sustainable working" 
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/20 to-slate-950/40 hidden lg:block" />
        </div>

        {/* Right: Text Banner (BlueGrids Corporate Navy Style) */}
        <div className="bg-gradient-to-br from-[#0f3a5e] via-[#0b2844] to-[#071d33] flex flex-col justify-center items-start text-left p-8 sm:p-12 md:p-16 lg:p-20 text-white relative overflow-hidden">
          {/* Ambient Radial Glow Effect */}
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-[#005f9e]/30 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-[#60a5fa]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-xl">
            <span className="inline-block px-3.5 py-1.5 rounded-none bg-[#005f9e]/30 text-[#60a5fa] border border-[#005f9e]/60 text-[11px] sm:text-xs font-black tracking-widest mb-5 font-outfit">
              Innovation in Sustainable Working
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6 leading-tight font-outfit">
              Investing in Efficient Delivery and Local Skills
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8 font-medium">
              We aim to reduce waste, improve resource efficiency and create opportunities for local people through responsible mobilisation, training and supply-chain collaboration.
            </p>
            <Link 
              to="/sustainability" 
              className="inline-flex items-center gap-3 bg-[#005f9e] hover:bg-[#0066ff] text-white border border-[#60a5fa]/40 hover:border-white transition-all duration-300 px-8 py-4 font-black text-xs sm:text-sm tracking-widest font-outfit shadow-2xl active:scale-95 group"
            >
              <span>Find Out More</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1.5">➔</span>
            </Link>
          </div>
        </div>
      </div>
    </MotionSection>
  );
};

export default SustainabilityBanner;
