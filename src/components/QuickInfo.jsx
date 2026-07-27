import React from 'react';
import MotionSection from './MotionSection';
import readinessBg from '../assets/images/Sectors/Smart Meter & Water Meter Project Support.jpg';
import complianceBg from '../assets/images/updated/image 2.jpg';
import nationwideBg from '../assets/images/Urban Skyline View.jpeg';
import managementBg from '../assets/images/updated/img 7.jpg';

const QuickInfo = () => {
  const features = [
    {
      title: "Operational Readiness",
      desc: "Fully trained and compliant workforce prepared for immediate field deployment.",
      icon: "schedule",
      color: "bg-gradient-to-br from-sky-500/10 to-sky-500/5 text-sky-600 border-sky-500/20 group-hover:bg-white group-hover:text-sky-600 group-hover:border-white",
      bgImage: readinessBg
    },
    {
      title: "Compliance First",
      desc: "100% verified teams meeting the highest UK utility H&S compliance standards.",
      icon: "verified",
      color: "bg-gradient-to-br from-emerald-500/10 to-emerald-500/5 text-emerald-600 border-emerald-500/20 group-hover:bg-white group-hover:text-emerald-600 group-hover:border-white",
      bgImage: complianceBg
    },
    {
      title: "Nationwide",
      desc: "Seamless logistical coverage supporting critical infrastructure across the UK.",
      icon: "public",
      color: "bg-gradient-to-br from-indigo-500/10 to-indigo-500/5 text-indigo-600 border-indigo-500/20 group-hover:bg-white group-hover:text-indigo-600 group-hover:border-white",
      bgImage: nationwideBg
    },
    {
      title: "Expert Management",
      desc: "End-to-end project coordination, shift logs, and operational updates.",
      icon: "business_center",
      color: "bg-gradient-to-br from-brand-primary/10 to-brand-primary/5 text-brand-primary border-brand-primary/20 group-hover:bg-white group-hover:text-brand-primary group-hover:border-white",
      bgImage: managementBg
    }
  ];

  return (
    <MotionSection 
      as="section" 
      className="py-24 bg-gradient-to-b from-white via-[#f8fafc] to-white relative font-sans overflow-hidden border-b border-slate-100" 
      id="values"
      initial="hidden"
      animate="visible"
      whileInView={undefined}
      viewport={undefined}
    >
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-grid-texture opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col mb-16 text-left">
          <span className="self-start inline-block px-4 py-1.5 rounded-none bg-brand-primary/10 text-brand-primary text-xs font-black uppercase tracking-widest mb-6 font-outfit border border-brand-primary/20">
            Workforce Reliability
          </span>
          
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <h2 className="text-4xl md:text-5xl font-bold text-brand-dark tracking-tight leading-tight font-outfit lg:max-w-xl">
              Why Bluegrid?
            </h2>
            <p className="text-slate-500 font-sans font-medium text-base md:text-lg lg:text-xl max-w-2xl leading-relaxed lg:pb-1">
              Trusted by industry leaders, built for long-lasting results, and designed to deliver reliable, enduring success.
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group relative border border-slate-200 rounded-none p-8 flex flex-col justify-between items-start transition-all duration-500 hover:shadow-2xl hover:shadow-brand-primary/10 hover:-translate-y-2 overflow-hidden cursor-pointer min-h-[320px]"
            >
              {/* Background Layers */}
              <div className="absolute inset-0 z-0 overflow-hidden">
                <img 
                  src={feature.bgImage} 
                  alt={feature.title} 
                  className="w-full h-full object-cover opacity-[0.04] group-hover:opacity-20 group-hover:scale-110 transition-all duration-700 ease-out" 
                  loading="lazy"
                />
                {/* Default white background */}
                <div className="absolute inset-0 bg-white transition-opacity duration-500 group-hover:opacity-0" />
                {/* Hover dark blue gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-dark/95 to-[#032879]/90 opacity-0 group-hover:opacity-95 transition-opacity duration-500" />
              </div>
              
              <div className="space-y-6 w-full text-left relative z-10">
                {/* Icon wrapper */}
                <div className={`w-14 h-14 rounded-none border flex items-center justify-center transition-all duration-500 ${feature.color}`}>
                  <span className="material-symbols-outlined text-2xl font-bold transition-transform duration-500 group-hover:scale-110">
                    {feature.icon}
                  </span>
                </div>

                <div className="space-y-2">
                  <h4 className="text-lg md:text-xl font-bold text-brand-dark group-hover:text-white tracking-tight font-outfit transition-colors duration-300">
                    {feature.title}
                  </h4>
                  <p className="text-gray-500 group-hover:text-slate-200 leading-relaxed text-sm md:text-base font-medium transition-colors duration-300">
                    {feature.desc}
                  </p>
                </div>
              </div>

              {/* Micro interactive indicator */}
              <div className="mt-8 flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-brand-primary group-hover:text-white opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0 relative z-10 font-outfit">
                <span>Core Pillar</span>
                <span className="text-[10px]">➔</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </MotionSection>
  );
};

export default QuickInfo;
