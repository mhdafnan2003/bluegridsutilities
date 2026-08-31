import React from 'react';

const AboutBanner = ({ badgeText, title, description, bgImage }) => {
  return (
    <div className="relative w-full min-h-[400px] sm:min-h-[460px] md:min-h-[500px] flex items-center overflow-hidden bg-slate-950 font-sans mb-12">
      {/* Full Hero Image */}
      <img 
        src={bgImage} 
        alt={title} 
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      
      {/* Dark Neutral Gradient Overlay (No blue tinting, no letterbox) */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30 z-10 pointer-events-none" />

      {/* Direct Text Overlay */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full py-16 sm:py-20 md:py-24 text-left text-white">
        <div className="max-w-2xl">
          {badgeText && (
            <div className="flex flex-col items-start mb-3">
              <span className="inline-block text-[#005f9e] text-xs font-black tracking-widest font-outfit uppercase">
                {badgeText}
              </span>
              <div className="w-10 h-1 bg-[#005f9e] mt-1.5 rounded-full" />
            </div>
          )}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight mb-4 font-outfit">
            {title}
          </h1>
          <p className="text-slate-200 text-sm sm:text-base md:text-lg leading-relaxed font-medium max-w-xl">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutBanner;
