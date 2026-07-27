import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import MotionSection from './MotionSection';
import heroBg from '../assets/images/utilityworksupply.jpeg';
import ctaBg from '../assets/images/work_with_us.png';

const steps = [
  {
    number: "01",
    title: "Workforce Mobilisation",
    desc: "Strategic deployment of qualified personnel based on project requirements and geographical coverage.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  },
  {
    number: "02",
    title: "Daily Site Briefings",
    desc: "Initial on-site coordination meetings to align teams on daily objectives and safety priorities.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    number: "03",
    title: "Compliance & RAMS Checks",
    desc: "Rigorous Safety (RAMS) and technical compliance audits performed before any work commences.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
  {
    number: "04",
    title: "Meter Installation Operations",
    desc: "Precision installation of smart and water meters by highly trained field engineers.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    )
  },
  {
    number: "05",
    title: "Reinstatement & Close Down",
    desc: "Restoring the site to its original condition and formal sign-offs for operational completion.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
      </svg>
    )
  },
  {
    number: "06",
    title: "KPI Reporting & QA",
    desc: "Comprehensive analysis of performance data and rigorous quality assurance reviews.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    )
  },
  {
    number: "07",
    title: "Project Completion",
    desc: "Final handover of documentation and closure of the project lifecycle.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  }
];

const OperationalDelivery = () => {
  return (
    <div className="font-sans bg-white">
      {/* 1. Projects Hero Banner */}
      <MotionSection 
        as="section" 
        className="relative py-24 md:py-32 overflow-hidden bg-brand-dark" 
        id="projects-hero"
        initial="hidden"
        animate="visible"
        whileInView={undefined}
        viewport={undefined}
      >
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroBg} 
            alt="Utility Projects & Operational Delivery" 
            className="w-full h-full object-cover opacity-60"
          />
          {/* Brand dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/95 via-brand-dark/80 to-[#032879]/70 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-10" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10 text-center lg:text-left">
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-primary/20 border border-brand-primary/30 text-blue-300 text-sm font-semibold tracking-wider uppercase mb-6 font-outfit">
            Operational Excellence
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white max-w-4xl tracking-tight leading-tight font-outfit mb-6">
            Utility Projects & Operational Delivery
          </h1>
          <p className="text-slate-200 text-base md:text-lg lg:text-xl max-w-2xl leading-relaxed font-sans font-medium">
            Discover our structured delivery process and key execution steps that enable us to scale and maintain premium service across all UK utility networks.
          </p>
        </div>
      </MotionSection>

      {/* 2. Original Delivery Process steps */}
      <MotionSection as="section" className="py-24 bg-white overflow-hidden" id="operational-delivery">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="mb-20 text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl font-bold text-brand-dark tracking-tight mb-4 font-outfit">
              Operational Delivery Process
            </h2>
            <div className="h-1.5 w-24 bg-brand-primary rounded-full mb-6 mx-auto lg:mx-0"></div>
            <p className="text-gray-600 text-lg max-w-2xl leading-relaxed font-sans font-medium">
              Our structured approach ensures precision, safety, and efficiency at every stage of the utility project lifecycle.
            </p>
          </div>

          {/* Process Steps */}
          <div className="max-w-6xl mx-auto">
            {/* First Row: 4 Items */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 lg:mb-20">
              {steps.slice(0, 4).map((step, index) => (
                <div key={index} className="group relative flex flex-col items-center">
                  {/* Arrow - Desktop Only (except for last in row) */}
                  {index < 3 && (
                    <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-16 text-brand-primary/20">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </div>
                  )}
                  
                  <div className="mb-6 w-14 h-14 rounded-full bg-brand-primary text-white shadow-lg flex items-center justify-center z-10 font-bold text-lg font-outfit">
                     {step.number}
                  </div>

                  <div className="w-full bg-slate-50 p-6 rounded-2xl border border-gray-100 group-hover:bg-white group-hover:shadow-xl group-hover:shadow-brand-primary/5 transition-all duration-300 flex flex-col items-center text-center">
                    <div className="w-16 h-16 shrink-0 rounded-xl bg-white shadow-sm flex items-center justify-center text-brand-primary mb-4 group-hover:bg-brand-primary group-hover:text-white transition-all duration-300">
                      {step.icon}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 tracking-tight mb-2 h-12 flex items-center font-outfit">
                      {step.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed font-sans font-medium">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Second Row: 3 Items */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {steps.slice(4).map((step, index) => (
                <div key={index} className="group relative flex flex-col items-center">
                  {/* Arrow - Desktop Only */}
                  {index < 2 && (
                    <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-16 text-brand-primary/20">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </div>
                  )}

                  <div className="mb-6 w-14 h-14 rounded-full bg-brand-primary text-white shadow-lg flex items-center justify-center z-10 font-bold text-lg font-outfit">
                     {step.number}
                  </div>

                  <div className="w-full bg-slate-50 p-6 rounded-2xl border border-gray-100 group-hover:bg-white group-hover:shadow-xl group-hover:shadow-brand-primary/5 transition-all duration-300 flex flex-col items-center text-center">
                    <div className="w-16 h-16 shrink-0 rounded-xl bg-white shadow-sm flex items-center justify-center text-brand-primary mb-4 group-hover:bg-brand-primary group-hover:text-white transition-all duration-300">
                      {step.icon}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 tracking-tight mb-2 h-12 flex items-center font-outfit">
                      {step.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed font-sans font-medium">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </MotionSection>

      {/* 3. Bottom CTA Banner */}
      <MotionSection 
        as="section" 
        className="relative overflow-hidden py-24 px-6 sm:px-12 md:px-24 text-center font-sans border-t border-slate-100"
        id="projects-cta"
      >
        {/* Background image container with subtle parallax zoom */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <motion.div
            initial={{ scale: 1.1 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            style={{ backgroundImage: `url(${ctaBg})` }}
            className="w-full h-full bg-cover bg-center bg-no-repeat absolute inset-0 filter brightness-[0.35]"
          />
          {/* Modern dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/95 via-brand-dark/85 to-transparent z-10 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent z-10 opacity-70" />
        </div>

        {/* Content wrapper */}
        <div className="relative z-20 max-w-4xl mx-auto flex flex-col items-center justify-center text-white">
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-primary text-white text-[10px] sm:text-xs font-black uppercase tracking-widest mb-6 font-outfit">
            Partner With Us
          </span>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight mb-6 font-outfit max-w-3xl leading-tight">
            Need Reliable Project <span className="text-brand-primary">Execution</span> Support?
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-slate-300 mb-10 max-w-2xl leading-relaxed font-medium">
            From smart meter rollouts to utility infrastructure support, our workforce is ready to deploy with maximum safety and efficiency. Relied upon for structured compliance and operational excellence across the UK.
          </p>

          <Link
            to="/contact"
            className="inline-flex items-center gap-3 bg-brand-primary hover:bg-white hover:text-brand-dark text-white transition-all duration-300 px-8 py-4 font-black text-xs sm:text-sm uppercase tracking-widest font-outfit shadow-2xl active:scale-95 group border-2 border-brand-primary hover:border-white"
          >
            <span>Contact Our Team</span>
            <span className="transition-transform duration-300 group-hover:translate-x-1.5">➔</span>
          </Link>
        </div>
      </MotionSection>
    </div>
  );
};

export default OperationalDelivery;