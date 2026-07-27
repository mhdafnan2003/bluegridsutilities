import React from 'react';
import MotionSection from '../../components/MotionSection';
import aboutImage from '../../assets/images/about.jpeg';
import heroTwoImg from '../../assets/images/updated/hero_blue_two.png';

import AboutBanner from '../../components/AboutBanner';

const AboutCompanyPage = () => {
  return (
    <div className="font-sans">
      <MotionSection 
        as="section" 
        className="pb-16 md:pb-24 bg-white" 
        id="about-company"
      >
        <div className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-12">
          
          {/* Top Page Title Banner (Container Card overlaying Banner Image) */}
          <AboutBanner 
            badgeText="ABOUT BLUEGRID UTILITIES"
            title="COMPANY PROFILE & OVERVIEW"
            description="UK-based utility infrastructure contractor delivering safe, reliable and high-quality services across the water utility sector."
            bgImage={heroTwoImg}
          />

          {/* Main Grid: Story + Profile Card */}
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-stretch mb-16">
            
            {/* Left Narrative */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-8">
              <div className="w-full h-72 sm:h-80 md:h-96 relative overflow-hidden rounded-none border border-slate-200 shadow-lg">
                <img
                  src={aboutImage}
                  alt="Bluegrid Utilities Operations"
                  className="w-full h-full object-cover brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f3a5e]/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 bg-[#005f9e] text-white px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-none border border-white/20 font-outfit">
                  SPECIALIST UTILITY INFRASTRUCTURE
                </div>
              </div>

              <div className="space-y-4 text-left">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#0f3a5e] uppercase tracking-tight font-outfit">
                  WHO WE ARE
                </h2>
                <p className="text-slate-700 text-base sm:text-lg font-semibold leading-relaxed">
                  Bluegrid Utilities is a UK-based utility infrastructure contractor delivering safe, reliable and high-quality services across the water utility sector.
                </p>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  Our specialist teams support utility providers, principal contractors and infrastructure partners through the delivery of smart water metering, excavation, reinstatement and associated civil engineering works.
                </p>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  With experienced management, qualified field teams and a commitment to operational excellence, Bluegrid Utilities aims to become one of the UK’s most trusted utility infrastructure delivery partners.
                </p>
              </div>
            </div>

            {/* Right: Company Profile Boxy Card */}
            <div className="lg:col-span-5 flex flex-col">
              <div className="bg-[#0f3a5e] text-white p-8 sm:p-10 rounded-none border border-[#0f3a5e] shadow-xl flex flex-col justify-between h-full relative overflow-hidden">
                <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-[#005f9e]/30 rounded-none blur-3xl pointer-events-none" />

                <div className="relative z-10 space-y-6">
                  <div className="border-b border-white/15 pb-4">
                    <span className="text-[#0066ff] font-bold text-xs uppercase tracking-widest block mb-1 font-outfit">
                      OFFICIAL DETAILS
                    </span>
                    <h3 className="text-2xl font-bold uppercase tracking-tight text-white font-outfit">
                      COMPANY PROFILE
                    </h3>
                  </div>

                  <div className="space-y-4 text-sm">
                    <div className="bg-white/5 border border-white/10 p-4 rounded-none">
                      <p className="text-[10px] font-bold text-[#60a5fa] uppercase tracking-widest mb-1 font-outfit">Company Name</p>
                      <p className="text-base font-bold text-white">Bluegrid Utilities</p>
                    </div>

                    <div className="bg-white/5 border border-white/10 p-4 rounded-none">
                      <p className="text-[10px] font-bold text-[#60a5fa] uppercase tracking-widest mb-1 font-outfit">Trading Name of</p>
                      <p className="text-base font-bold text-white">Bluegrid Technology Ltd</p>
                    </div>

                    <div className="bg-white/5 border border-white/10 p-4 rounded-none">
                      <p className="text-[10px] font-bold text-[#60a5fa] uppercase tracking-widest mb-1 font-outfit">Company Number</p>
                      <p className="text-base font-bold text-white tracking-wider">16442340</p>
                    </div>

                    <div className="bg-white/5 border border-white/10 p-4 rounded-none">
                      <p className="text-[10px] font-bold text-[#60a5fa] uppercase tracking-widest mb-1 font-outfit">Registered Office</p>
                      <address className="not-italic text-sm font-semibold text-slate-200 leading-snug">
                        Stuart House<br />
                        St Johns Street<br />
                        Peterborough<br />
                        England, PE1 5DD
                      </address>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-white/15 relative z-10 flex items-center justify-between text-xs font-bold text-slate-300 font-outfit">
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-none bg-[#0066ff]" />
                    REGISTERED IN ENGLAND & WALES
                  </span>
                  <span className="text-[#60a5fa]">UK UTILITY CONTRACTOR</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </MotionSection>
    </div>
  );
};

export default AboutCompanyPage;
