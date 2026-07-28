import React, { useEffect } from 'react';
import MotionSection from '../components/MotionSection';
import AboutBanner from '../components/AboutBanner';
import heroThreeImg from '../assets/images/updated/hero_blue_three.png';

const FORM_URL = "https://forms.office.com/r/K9vKw1hxcB";

const ApplyPage = () => {
  useEffect(() => {
    // Immediately redirect candidate to the official Microsoft Forms recruitment page
    window.location.href = FORM_URL;
  }, []);

  return (
    <div className="font-sans">
      <MotionSection 
        as="section" 
        className="pb-16 md:pb-24 bg-white" 
        id="apply-online"
        initial="hidden"
        animate="visible"
        whileInView={undefined}
        viewport={undefined}
      >
        <div className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-12">
          
          {/* Top Page Title Banner */}
          <AboutBanner 
            badgeText="Online Recruitment Portal"
            title="Workforce Application"
            description="Redirecting you to our official online application form..."
            bgImage={heroThreeImg}
          />

          {/* Clean Redirect Card */}
          <div className="max-w-3xl mx-auto my-16 bg-[#0f3a5e] text-white p-8 sm:p-12 border border-[#0f3a5e] rounded-none shadow-2xl text-left relative overflow-hidden">
            <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-[#005f9e]/30 rounded-none blur-3xl pointer-events-none" />
            
            <div className="relative z-10 space-y-5">
              <span className="text-[#60a5fa] font-bold text-xs tracking-widest font-outfit block">
                Redirecting to Online Form
              </span>

              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-outfit">
                Online Workforce Registration
              </h2>

              <p className="text-slate-200 text-sm sm:text-base leading-relaxed font-medium">
                You are being redirected to the official Bluegrid Utilities recruitment registration form on Microsoft Forms. If your browser does not redirect automatically within a few seconds, please click below.
              </p>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <a 
                  href={FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 bg-[#0066ff] hover:bg-[#0052cc] text-white font-bold text-xs tracking-widest px-8 py-4 rounded-none border border-transparent transition-all shadow-lg active:scale-95 font-outfit cursor-pointer group"
                >
                  <span>Proceed to Application Form</span>
                  <span className="material-symbols-outlined text-base transition-transform group-hover:translate-x-1">open_in_new</span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </MotionSection>
    </div>
  );
};

export default ApplyPage;
