import React from 'react';
import MotionSection from './MotionSection';

const OperationalCoverage = () => {
  return (
    <MotionSection as="section" className="py-24 bg-white overflow-hidden font-sans" id="coverage">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-20">
        <div className="flex flex-col lg:flex-row gap-20 items-center">

          {/* Content Section */}
          <div className="w-full lg:w-5/12 flex flex-col gap-8 order-1 text-center lg:text-left">
            <div className="space-y-4">
              <div className="inline-block">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark tracking-tight leading-tight">
                   Operational Coverage
                </h2>
                <div className="h-1.5 w-20 bg-brand-primary mt-2 mx-auto lg:mx-0"></div>
              </div>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Our strategic deployment model ensures comprehensive infrastructure support across the United Kingdom. We maintain rigorous workforce coordination to deliver technical excellence and rapid response capabilities in high-demand regions.
              </p>
            </div>

            {/* Coverage Areas List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { name: "Hertfordshire", icon: "location_on" },
                { name: "Greater London", icon: "location_on" },
                { name: "Midlands", icon: "location_on" },
                { name: "Southern England", icon: "location_on" }
              ].map((area, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 rounded-xl border border-gray-100 hover:bg-brand-light transition-colors group cursor-default"
                >
                  <span className="material-symbols-outlined text-brand-primary group-hover:scale-110 transition-transform">
                    {area.icon}
                  </span>
                  <span className="font-bold text-brand-dark group-hover:text-brand-primary transition-colors italic">
                    {area.name}
                  </span>
                </div>
              ))}
            </div>

            Glassmorphic Information Card
            {/* <div className="bg-white/70 backdrop-blur-xl border-l-4 border-l-brand-primary border border-gray-100 p-6 rounded-xl flex gap-4 items-start shadow-sm shadow-brand-dark/5">
              <span className="material-symbols-outlined text-brand-primary mt-1">info</span>
              <p className="text-gray-600 italic leading-relaxed">
                "Active project sites and mobile workforce units operational 24/7 across key territories."
              </p>
            </div> */}
          </div>

          {/* Map Section */}
          <div className="w-full lg:w-7/12 order-2 relative group">
            <div className="aspect-[4/5] md:aspect-[16/11] bg-slate-50 rounded-[2.5rem] overflow-hidden shadow-inner relative border border-gray-100">
              <img
                alt="UK Map Infrastructure"
                className="w-full h-full object-cover opacity-20 grayscale brightness-125"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDWVAusAfQRwhT__puaIo2scSOl2XVJ19jF5kDTGiXjFXN-yuBcEpekf3ABk7RBaJQngfuxGLSxmwSNdDE8F9HL6xayZi6wgqEIHOnPpve2VYpMut4CEN5Nu4VcR1ddXw68u9Q1SUc5vmuTFB1IwG8MRVBb9bhcIE4gbc7BpH_si9RHrpCoRE_S_2K9mY01v1FaswtS9Rsq91pD1TeM3un5moRKGtmh3JQMK-yYtnLyYqRRdHW3p0YPHfqFLaP6Fzl0iGEysOaPDWfw"
              />

              {/* Map Indicators Overlay */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                {/* Hertfordshire */}
                <div className="absolute top-[65%] left-[52%]">
                  <div className="relative flex items-center justify-center">
                    <div className="absolute w-8 h-8 bg-brand-primary/20 rounded-full animate-ping"></div>
                    <div className="w-3.5 h-3.5 bg-brand-primary rounded-full border-2 border-white shadow-md shadow-brand-dark/20"></div>
                  </div>
                </div>
                {/* London */}
                <div className="absolute top-[68%] left-[53%]">
                  <div className="relative flex items-center justify-center">
                    <div className="absolute w-8 h-8 bg-brand-primary/20 rounded-full animate-ping"></div>
                    <div className="w-3.5 h-3.5 bg-brand-primary rounded-full border-2 border-white shadow-md shadow-brand-dark/20"></div>
                  </div>
                </div>
                {/* Midlands */}
                <div className="absolute top-[55%] left-[45%]">
                  <div className="relative flex items-center justify-center">
                    <div className="absolute w-8 h-8 bg-brand-primary/20 rounded-full animate-ping"></div>
                    <div className="w-3.5 h-3.5 bg-brand-primary rounded-full border-2 border-white shadow-md shadow-brand-dark/20"></div>
                  </div>
                </div>
                {/* South */}
                <div className="absolute top-[75%] left-[48%]">
                  <div className="relative flex items-center justify-center">
                    <div className="absolute w-8 h-8 bg-brand-primary/20 rounded-full animate-ping"></div>
                    <div className="w-3.5 h-3.5 bg-brand-primary rounded-full border-2 border-white shadow-md shadow-brand-dark/20"></div>
                  </div>
                </div>
              </div>

              {/* Stats Card Overlay */}
              <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 bg-white/80 backdrop-blur-xl p-5 md:p-8 rounded-2xl md:rounded-3xl min-w-[180px] md:min-w-[240px] shadow-2xl shadow-brand-dark/10 border border-white/50 transition-transform hover:-translate-y-2 duration-500">
                <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
                  <div className="w-2 h-2 md:w-2.5 md:h-2.5 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
                  <h3 className="text-[10px] md:text-xs font-bold text-brand-dark uppercase tracking-[0.2em]">Network Status</h3>
                </div>
                <div className="space-y-4 md:space-y-6">
                  <div>
                    <p className="text-[8px] md:text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-0.5 md:mb-1">Active Teams</p>
                    <p className="text-2xl md:text-4xl font-black text-brand-primary tracking-tight">120+</p>
                  </div>
                  <div className="pt-3 md:pt-5 border-t border-gray-100">
                    <p className="text-[8px] md:text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-0.5 md:mb-1">Response Time</p>
                    <p className="text-xl md:text-3xl font-bold text-brand-dark tracking-tight">&lt; 4Hrs</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </MotionSection>
  );
};

export default OperationalCoverage;