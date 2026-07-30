import React from 'react';
import { motion } from 'framer-motion';
import heroBg from '../assets/images/bluegrids hero.jpeg';

const Hero = () => {
  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.1,
        ease: 'easeOut'
      }
    }
  };

  const stats = [
    { value: '40+', label: 'Skilled workforce' },
    { value: '1,000+', label: 'Planned installations' },
    { value: 'UK-wide', label: 'Operational coverage' },
    { value: 'Safety-led', label: 'Delivery approach' }
  ];

  return (
    <div className="relative w-full min-h-screen lg:h-screen flex flex-col justify-between overflow-hidden bg-slate-950 font-sans">
      {/* Natural Background Image (No blue tint filter) */}
      <motion.div
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 6, ease: 'easeOut' }}
        style={{ backgroundImage: `url("${heroBg}")` }}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat w-full h-full"
      />

      {/* Neutral Left-to-Right Dark Gradient for Text Contrast ONLY (No Blue Tint) */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-transparent z-10 pointer-events-none" />

      {/* Main Hero Content */}
      <div className="relative max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 w-full z-20 flex-1 flex items-center pt-28 sm:pt-32 md:pt-36 lg:pt-32 pb-6 lg:pb-8">
        <motion.div
          variants={contentVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl flex flex-col items-start text-left"
        >
          {/* Subtitle / Category Tag */}
          <div className="flex flex-col items-start mb-3">
            <span className="text-[#005f9e] text-xs font-black tracking-widest font-outfit uppercase">
              BlueGrid Utilities
            </span>
            <div className="w-10 h-1 bg-[#005f9e] mt-1 rounded-full"></div>
          </div>

          {/* Main Headline */}
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight font-outfit tracking-tight">
            Delivering Smart <br />
            Utility Infrastructure <br />
            <span className="text-[#005f9e]">
              Across the United Kingdom
            </span>
          </h1>

          {/* Description */}
          <p className="text-xs sm:text-sm md:text-base text-slate-100 mt-3 sm:mt-4 max-w-xl leading-relaxed font-sans font-medium">
            Specialist delivery teams supporting smart water metering, excavation, reinstatement and essential utility infrastructure across the UK.
          </p>

          {/* CTA Buttons */}
          <div className="mt-5 sm:mt-6 flex flex-wrap items-center gap-3.5">
            <a
              href="/services"
              className="px-6 py-2.5 sm:px-7 sm:py-3 bg-[#005f9e] hover:bg-[#004c80] text-white font-bold text-xs tracking-wider rounded-none shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Our Services
            </a>
            <a
              href="/contact"
              className="px-6 py-2.5 sm:px-7 sm:py-3 bg-white/10 hover:bg-white/20 border-2 border-white/80 hover:border-white text-white font-bold text-xs tracking-wider rounded-none backdrop-blur-sm transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Contact Us
            </a>
          </div>
        </motion.div>
      </div>

      {/* Stats Bar */}
      <div className="relative z-30 bg-slate-900/90 backdrop-blur-md border-t border-white/15 py-3.5 sm:py-4">
        <div className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-12 grid grid-cols-2 md:grid-cols-4 gap-4 divide-y md:divide-y-0 md:divide-x divide-white/15">
          {stats.map((stat, index) => (
            <div key={index} className={`flex flex-col items-start ${index !== 0 ? 'pt-2 md:pt-0 md:pl-6' : ''}`}>
              <span className="text-lg sm:text-xl lg:text-2xl font-black text-white font-outfit tracking-tight">
                {stat.value}
              </span>
              <span className="text-[10px] sm:text-xs text-slate-300 font-semibold font-outfit tracking-wider mt-0.5">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
