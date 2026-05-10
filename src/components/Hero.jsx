import React from 'react';
import heroVideo from '../assets/videos/hero video.mp4';

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full flex items-center overflow-hidden bg-slate-900">
      <div className="absolute inset-0 z-0">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/70"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/30"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24 text-center">
        <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/15 border border-white/25 text-white text-sm mx-auto mb-10 backdrop-blur-md">
          <span className="w-2 h-2 bg-white rounded-full"></span>
          Your Best-Construction Partner
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-white leading-tight tracking-tight max-w-5xl mx-auto">
          Delivering Smarter Utility & Infrastructure
          <br />
          Workforce Solutions
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-white/80 mt-8 max-w-3xl mx-auto leading-relaxed">
          Blue Grid Utilities supports utility, water, telecoms, and infrastructure projects across the UK through trained workforce coordination, project support, compliance-focused onboarding, and operational delivery.
        </p>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-5">
          <a
            href="#services"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-slate-900 rounded-full font-bold shadow-xl hover:bg-slate-100 transition-all duration-300"
          >
            Our Services
            {/* <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
            </svg> */}
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full font-bold hover:bg-white/20 transition-all duration-300"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
