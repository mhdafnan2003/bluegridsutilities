import React from 'react';
import { Link } from 'react-router-dom';
import MotionSection from '../components/MotionSection';
import AboutBanner from '../components/AboutBanner';
import ApplicationForm from '../components/ApplicationForm';
import heroThreeImg from '../assets/images/updated/water_meter_installation.png';

const ApplyPage = () => {
  return (
    <div className="font-sans bg-slate-50 min-h-screen">
      <MotionSection 
        as="section" 
        className="pb-16 md:pb-24" 
        id="apply-online"
        initial="hidden"
        animate="visible"
        whileInView={undefined}
        viewport={undefined}
      >
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-12">
          
          {/* Top Page Title Banner */}
          <AboutBanner 
            badgeText="Online Recruitment Portal"
            title="Workforce Application Form"
            description="Submit your application for Water Meter Installation Operative – Digging & Reinstatement and other utility roles."
            bgImage={heroThreeImg}
          />

          {/* Top Informational Strip */}
          <div className="bg-white border border-slate-200 p-6 sm:p-8 mb-10 shadow-md flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-left">
            <div className="space-y-1">
              <span className="text-[11px] font-black text-[#005f9e] tracking-widest uppercase font-outfit">
                Immediate Recruitment
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#0f3a5e] tracking-tight font-outfit">
                Water Meter Installation Operative – Digging &amp; Reinstatement
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm font-medium">
                Coventry &amp; surrounding areas • Immediate Recruitment • Permanent PAYE (£34k) &amp; Self-Employed CIS (£180–£220/day*)
              </p>
            </div>

            <div className="flex flex-wrap gap-3 shrink-0">
              <Link 
                to="/careers/water-meter-installation-operative"
                className="inline-flex items-center gap-2 bg-[#0f3a5e] hover:bg-[#005f9e] text-white font-bold text-xs tracking-widest px-6 py-3.5 border border-transparent transition-all shadow-md active:scale-95 font-outfit"
              >
                <span>Read Full Job Specs</span>
                <span className="material-symbols-outlined text-sm">visibility</span>
              </Link>
            </div>
          </div>

          {/* Integrated Interactive Application Form */}
          <div className="max-w-4xl mx-auto mb-16">
            <ApplicationForm defaultRole="Water Meter Installation Operative – Digging & Reinstatement" />
          </div>

          {/* Alternative External Submission Option */}
          <div className="max-w-4xl mx-auto p-6 bg-slate-100 border border-slate-300 text-left flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600">
            <div>
              <strong className="text-[#0f3a5e] block mb-0.5">Prefer to submit via Microsoft Forms?</strong>
              You can also complete our external recruitment questionnaire.
            </div>
            <a 
              href="https://forms.office.com/r/K9vKw1hxcB" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-white text-[#0f3a5e] hover:text-[#005f9e] font-bold text-xs uppercase tracking-wider border border-slate-300 shadow-sm shrink-0"
            >
              <span>Open Microsoft Form</span>
              <span className="material-symbols-outlined text-xs">open_in_new</span>
            </a>
          </div>

        </div>
      </MotionSection>
    </div>
  );
};

export default ApplyPage;
