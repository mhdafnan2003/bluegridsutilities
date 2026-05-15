import React from 'react';
import MotionSection from './MotionSection';

const regions = [
  { name: "Hertfordshire", pos: "top-1/2 left-1/2 -translate-x-4 -translate-y-4" },
  { name: "Greater London", pos: "top-[55%] left-[52%]" },
  { name: "Midlands", pos: "top-[40%] left-[45%]" },
  { name: "Southern England", pos: "top-[65%] left-[40%]" }
];

const OperationalCoverage = () => {
  return (
    <MotionSection as="section" className="py-24 bg-white overflow-hidden" id="coverage">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left: Content */}
          <div className="lg:w-2/5">
            <h2 className="text-4xl md:text-5xl font-bold text-brand-dark tracking-tight mb-6">
              Operational Coverage
            </h2>
            <div className="h-1.5 w-20 bg-brand-primary rounded-full mb-8"></div>
            <p className="text-xl text-gray-700 font-medium mb-6 leading-relaxed">
              Strategic deployment and workforce coordination across operational regions.
            </p>
            <p className="text-gray-500 mb-10 leading-relaxed">
              Our workforce is strategically positioned to provide rapid response and consistent service delivery across key UK infrastructure hubs. We maintain a robust presence in the following areas:
            </p>
            
            <div className="space-y-4">
              {["Hertfordshire", "Greater London", "Midlands", "Southern England"].map((area, index) => (
                <div key={index} className="flex items-center gap-4 group">
                  <div className="w-2 h-2 rounded-full bg-brand-primary group-hover:scale-150 transition-transform"></div>
                  <span className="text-lg font-bold text-gray-800 group-hover:text-brand-primary transition-colors">{area}</span>
                </div>
              ))}
            </div>

            <div className="mt-12 p-6 bg-slate-50 rounded-2xl border border-gray-100 italic text-gray-400 text-sm">
              * Active project sites and mobile workforce units operational 24/7 across these key territories.
            </div>
          </div>

          {/* Right: Map Visual */}
          <div className="lg:w-3/5 w-full relative">
            <div className="relative bg-slate-50 rounded-[3rem] p-4 lg:p-12 overflow-hidden border border-gray-100 shadow-inner">
               {/* Simplified UK Map SVG Placeholder Background */}
               <svg viewBox="0 0 400 500" className="w-full h-auto opacity-10 filter grayscale">
                 <path d="M150,50 L180,30 L210,40 L230,80 L250,120 L270,180 L260,250 L280,300 L250,350 L220,420 L180,450 L120,440 L80,400 L60,320 L70,250 L100,180 L120,100 Z" fill="currentColor" />
               </svg>

               {/* Regional Pins */}
               <div className="absolute inset-0">
                  {/* Heatmap effect circle */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-brand-primary/10 rounded-full blur-[80px]"></div>
                  
                  {/* Pins */}
                  <div className="absolute top-[40%] left-[45%] group cursor-help">
                    <div className="w-4 h-4 bg-brand-primary rounded-full animate-ping absolute"></div>
                    <div className="w-4 h-4 bg-brand-primary rounded-full relative shadow-lg shadow-brand-primary/50"></div>
                    <div className="absolute left-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 bg-white shadow-xl p-2 rounded border border-gray-100 transition-opacity whitespace-nowrap z-20">
                      <span className="text-xs font-bold text-brand-dark">Midlands Hub</span>
                    </div>
                  </div>

                  <div className="absolute top-[52%] left-[54%] group cursor-help">
                    <div className="w-4 h-4 bg-brand-primary rounded-full animate-ping absolute"></div>
                    <div className="w-4 h-4 bg-brand-primary rounded-full relative shadow-lg shadow-brand-primary/50"></div>
                    <div className="absolute left-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 bg-white shadow-xl p-2 rounded border border-gray-100 transition-opacity whitespace-nowrap z-20">
                        <span className="text-xs font-bold text-brand-dark">Hertfordshire HQ</span>
                    </div>
                  </div>

                  <div className="absolute top-[60%] left-[52%] group cursor-help">
                    <div className="w-4 h-4 bg-brand-primary rounded-full animate-ping absolute"></div>
                    <div className="w-4 h-4 bg-brand-primary rounded-full relative shadow-lg shadow-brand-primary/50"></div>
                    <div className="absolute left-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 bg-white shadow-xl p-2 rounded border border-gray-100 transition-opacity whitespace-nowrap z-20">
                        <span className="text-xs font-bold text-brand-dark">Greater London</span>
                    </div>
                  </div>

                  <div className="absolute top-[68%] left-[38%] group cursor-help">
                    <div className="w-4 h-4 bg-brand-primary rounded-full animate-ping absolute"></div>
                    <div className="w-4 h-4 bg-brand-primary rounded-full relative shadow-lg shadow-brand-primary/50"></div>
                    <div className="absolute left-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 bg-white shadow-xl p-2 rounded border border-gray-100 transition-opacity whitespace-nowrap z-20">
                        <span className="text-xs font-bold text-brand-dark">Southern England</span>
                    </div>
                  </div>
               </div>

               {/* Overlay Data Card */}
               <div className="absolute bottom-10 right-10 bg-white/80 backdrop-blur-md p-6 rounded-3xl border border-white shadow-2xl hidden md:block max-w-[200px]">
                  <p className="text-[10px] font-black uppercase text-brand-primary mb-2 tracking-widest">Network Status</p>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-500">Active Teams</span>
                      <span className="text-xs font-black text-brand-dark">120+</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-500">Response Time</span>
                      <span className="text-xs font-black text-brand-dark">&lt; 4Hrs</span>
                    </div>
                    <div className="h-1 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-brand-primary w-[85%]"></div>
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