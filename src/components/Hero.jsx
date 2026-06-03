import React from 'react';
import { motion } from 'framer-motion';
import heroBg from '../assets/images/Free Urban Construction Skyline Image - Urban, Construction, Cranes _ Download at StockCake.jpeg';

const Hero = () => {
  const contentVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.2,
        ease: 'easeOut'
      }
    }
  };

  return (
    <section className="relative w-full h-[90vh] md:h-screen min-h-[600px] overflow-hidden bg-slate-50">
      {/* Background Image with Zoom Effect */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 6, ease: 'easeOut' }}
        style={{ backgroundImage: `url("${heroBg}")` }}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat w-full h-full"
      />

      {/* Content Wrapper */}
      <div className="absolute inset-0 flex items-center justify-center text-center px-6 sm:px-8 lg:px-12 z-20">
        <motion.div
          variants={contentVariants}
          initial="hidden"
          animate="visible"
          className="max-w-5xl mx-auto flex flex-col items-center"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-brand-primary text-white text-[10px] sm:text-xs font-black uppercase tracking-widest mb-6 font-outfit">
            <span className="w-2 h-2 bg-white rounded-full animate-ping"></span>
            COMPLIANCE-FOCUSED UK OPERATIONS
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-brand-dark leading-tight uppercase font-outfit tracking-tight">
            Engineering <span className="text-brand-primary">Your</span> Future
          </h1>

          {/* Description */}
          <p className="text-sm sm:text-base md:text-lg text-slate-700 mt-6 max-w-3xl leading-relaxed font-sans font-medium">
            Innovative operational coordination and utility support services delivering quality infrastructure across the UK.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <a
              href="/services"
              className="px-8 py-4 bg-brand-primary text-white font-black uppercase text-xs sm:text-sm tracking-widest hover:bg-brand-dark hover:text-white transition-all duration-300 border-2 border-brand-primary hover:border-brand-dark shadow-lg"
            >
              Our Operations
            </a>
            <a
              href="/contact"
              className="px-8 py-4 bg-transparent border-2 border-brand-dark text-brand-dark font-black uppercase text-xs sm:text-sm tracking-widest hover:bg-brand-dark hover:text-white hover:border-brand-dark transition-all duration-300 shadow-lg"
            >
              Contact Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
