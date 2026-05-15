import React from 'react';
import MotionSection from './MotionSection';
import operationalImage from '../assets/images/operationalimage.png';

const OperationalCoverage = () => {
  return (
    <MotionSection as="section" className="py-24 bg-white overflow-hidden font-sans" id="coverage">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-20">
        <div className="flex flex-col lg:flex-row gap-14 xl:gap-20 items-center">

          <div className="w-full lg:w-5/12 flex flex-col gap-10 order-1 text-left">
            <div className="space-y-5">
              <h2 className="text-4xl md:text-5xl font-bold text-brand-dark tracking-tight leading-tight">
                Our Network
                <br />
                Across the UK
              </h2>
              <p className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-xl">
                Delivering reliable infrastructure support through strategic local coverage and rapid response.
              </p>
            </div>

            <div className="bg-white rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/60 overflow-hidden">
              <div className="divide-y divide-slate-100">
                <div className="flex items-center gap-5 p-7">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Active Teams</p>
                    <p className="text-3xl md:text-4xl font-black text-brand-dark tracking-tight">120+</p>
                  </div>
                </div>

                <div className="flex items-center gap-5 p-7">
                  <div className="w-12 h-12 rounded-2xl bg-brand-primary/10 text-brand-primary flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Avg Response Time</p>
                    <p className="text-2xl md:text-3xl font-black text-brand-dark tracking-tight">&lt; 4Hrs</p>
                  </div>
                </div>

                <div className="p-7">
                  <div className="space-y-3">
                    {[
                      { label: 'Hertfordshire', color: 'bg-emerald-500' },
                      { label: 'Greater London', color: 'bg-blue-500' },
                      { label: 'Midlands (Coventry)', color: 'bg-amber-500' },
                      { label: 'Southern England', color: 'bg-violet-500' },
                    ].map((item) => (
                      <div key={item.label} className="flex items-center gap-3">
                        <span className={`w-2.5 h-2.5 rounded-full ${item.color}`} />
                        <span className="text-sm font-semibold text-gray-600">{item.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-7/12 order-2">
            <div className="rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-2xl shadow-slate-200/70 bg-slate-50">
              <img
                src={operationalImage}
                alt="Operational coverage across the UK"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </MotionSection>
  );
};

export default OperationalCoverage;