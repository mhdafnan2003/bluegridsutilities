import React from 'react';

const AboutBanner = ({ badgeText, title, description, bgImage }) => {
  return (
    <div className="relative rounded-none overflow-hidden mb-12 border border-slate-200 shadow-xl min-h-[380px] sm:min-h-[440px] flex items-center bg-slate-900">
      {/* Full Hero Image */}
      <img 
        src={bgImage} 
        alt={title} 
        className="absolute inset-0 w-full h-full object-cover object-center brightness-90"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />

      {/* Floating Container Box for Text (High Transparency Glass Container) */}
      <div className="relative z-10 p-6 sm:p-8 md:p-10 lg:p-12 max-w-2xl text-left text-white bg-[#0f3a5e]/45 backdrop-blur-sm border border-white/30 shadow-2xl m-6 sm:m-10 lg:m-12">
        {badgeText && (
          <span className="inline-block px-3.5 py-1.5 rounded-none bg-[#005f9e] text-white text-[11px] font-bold uppercase tracking-widest mb-4 font-outfit border border-white/20 shadow-sm">
            {badgeText}
          </span>
        )}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight uppercase leading-tight mb-4 font-outfit">
          {title}
        </h1>
        <p className="text-slate-200 text-sm sm:text-base leading-relaxed font-medium">
          {description}
        </p>
      </div>
    </div>
  );
};

export default AboutBanner;
