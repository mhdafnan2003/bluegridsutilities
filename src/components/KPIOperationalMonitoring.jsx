import React from 'react';
import MotionSection from './MotionSection';

const KPIOperationalMonitoring = () => {
  return (
    <MotionSection 
      as="section" 
      className="bg-white font-sans text-[#0B2545] antialiased overflow-x-hidden relative py-16" 
      id="kpi-monitoring"
    >
      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Header Section */}
        <section className="text-center mb-12 max-w-2xl mx-auto">
          <span className="inline-block text-[14px] font-semibold text-[#0EA5E9] tracking-[0.2em] mb-4 uppercase">Operational Intelligence</span>
          <h2 className="text-3xl md:text-5xl font-bold text-[#0B2545] mb-4 tracking-tight uppercase">KPI & Operational Monitoring</h2>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Vertical KPI Stack */}
          <div className="space-y-4">
            {/* KPI 1 */}
            <div className="bg-blue-50 rounded-2xl p-6 flex items-center justify-between group cursor-pointer border border-blue-100 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-4">
                <div className="h-14 w-14 rounded-2xl bg-[#0EA5E9]/10 flex items-center justify-center border border-[#0EA5E9]/20">
                  <span className="material-symbols-outlined text-[#0EA5E9] text-3xl">engineering</span>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-[#0B2545] text-2xl font-bold">6 Installs</h3>
                    <span className="h-2 w-2 rounded-full bg-[#0EA5E9] pulse-dot"></span>
                  </div>
                  <p className="text-slate-500 text-[12px] uppercase tracking-wider font-bold">Per Team / Day</p>
                </div>
              </div>
              <div className="flex flex-col items-end gap-1">
                <div className="flex items-end gap-1 h-10">
                  <div className="w-1.5 bg-[#0EA5E9]/30 h-4 rounded-full"></div>
                  <div className="w-1.5 bg-[#0EA5E9]/50 h-6 rounded-full"></div>
                  <div className="w-1.5 bg-[#0EA5E9]/70 h-3 rounded-full"></div>
                  <div className="w-1.5 bg-[#0EA5E9] h-10 rounded-full"></div>
                </div>
                <span className="text-[#0EA5E9] text-[12px] font-bold">+12%</span>
              </div>
            </div>

            {/* KPI 2 */}
            <div className="bg-blue-50 rounded-2xl p-6 flex items-center justify-between group cursor-pointer border border-blue-100 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-4">
                <div className="h-14 w-14 rounded-2xl bg-[#0EA5E9]/10 flex items-center justify-center border border-[#0EA5E9]/20">
                  <span className="material-symbols-outlined text-[#0EA5E9] text-3xl">precision_manufacturing</span>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-[#0B2545] text-2xl font-bold">30 Installations</h3>
                    <span className="h-2 w-2 rounded-full bg-[#0EA5E9] pulse-dot"></span>
                  </div>
                  <p className="text-slate-500 text-[12px] uppercase tracking-wider font-bold">Per Week</p>
                </div>
              </div>
              <div className="flex flex-col items-end gap-1">
                <div className="flex items-end gap-1 h-10">
                  <div className="w-1.5 bg-[#0EA5E9] h-6 rounded-full"></div>
                  <div className="w-1.5 bg-[#0EA5E9]/50 h-9 rounded-full"></div>
                  <div className="w-1.5 bg-[#0EA5E9]/70 h-5 rounded-full"></div>
                  <div className="w-1.5 bg-[#0EA5E9] h-8 rounded-full"></div>
                </div>
                <span className="text-[#0EA5E9] text-[12px] font-bold">Stable</span>
              </div>
            </div>

            {/* KPI 3 */}
            <div className="bg-blue-50 rounded-2xl p-6 flex items-center justify-between group cursor-pointer border border-blue-100 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-4">
                <div className="h-14 w-14 rounded-2xl bg-[#0EA5E9]/10 flex items-center justify-center border border-[#0EA5E9]/20">
                  <span className="material-symbols-outlined text-[#0EA5E9] text-3xl">deployed_code</span>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-[#0B2545] text-2xl font-bold">120 Installations</h3>
                    <span className="h-2 w-2 rounded-full bg-[#0EA5E9] pulse-dot"></span>
                  </div>
                  <p className="text-slate-500 text-[12px] uppercase tracking-wider font-bold">Per Month</p>
                </div>
              </div>
              <div className="flex flex-col items-end gap-1">
                <div className="flex items-end gap-1 h-10">
                  <div className="w-1.5 bg-[#0EA5E9]/30 h-4 rounded-full"></div>
                  <div className="w-1.5 bg-[#0EA5E9]/50 h-7 rounded-full"></div>
                  <div className="w-1.5 bg-[#0EA5E9] h-10 rounded-full"></div>
                  <div className="w-1.5 bg-[#0EA5E9]/70 h-8 rounded-full"></div>
                </div>
                <span className="text-[#0EA5E9] text-[12px] font-bold">+5.4%</span>
              </div>
            </div>
          </div>

          {/* Compliance Panel */}
          <div className="bg-blue-50 rounded-2xl p-8 border border-blue-100 relative overflow-hidden">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-[#0B2545] text-2xl font-bold">Core Compliance</h3>
              <span className="material-symbols-outlined text-slate-300 cursor-pointer hover:text-[#0EA5E9] transition-colors">more_vert</span>
            </div>
            <div className="grid grid-cols-1 gap-6">
              {/* Status Card 1 */}
              <div className="p-5 rounded-2xl bg-white border border-blue-100 shadow-sm hover:shadow-md transition-all">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="inline-block px-2 py-1 rounded bg-[#0EA5E9]/10 text-[#0EA5E9] text-[10px] font-bold uppercase mb-2">Operational</span>
                    <h4 className="text-[#0B2545] font-bold text-lg">95%+ QA Target</h4>
                  </div>
                  <span className="material-symbols-outlined text-[#0EA5E9] text-2xl">verified</span>
                </div>
                <div className="h-2 w-full bg-slate-200/60 rounded-full overflow-hidden">
                  <div className="h-full bg-[#0EA5E9] w-[97%]"></div>
                </div>
              </div>
              {/* Status Card 2 */}
              <div className="p-5 rounded-2xl bg-white border border-blue-100 shadow-sm hover:shadow-md transition-all">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="inline-block px-2 py-1 rounded bg-emerald-500/10 text-emerald-500 text-[10px] font-bold uppercase mb-2">Compliance</span>
                    <h4 className="text-[#0B2545] font-bold text-lg">100% Safety Compliance</h4>
                  </div>
                  <span className="material-symbols-outlined text-emerald-500 text-2xl">shield_with_heart</span>
                </div>
                <div className="h-2 w-full bg-slate-200/60 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-500 w-full"></div>
                </div>
              </div>
              {/* Status Card 3 */}
              <div className="p-5 rounded-2xl bg-white border border-blue-100 shadow-sm hover:shadow-md transition-all">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="inline-block px-2 py-1 rounded bg-purple-500/10 text-purple-500 text-[10px] font-bold uppercase mb-2">Reporting</span>
                    <h4 className="text-[#0B2545] font-bold text-lg">Daily Operational Reporting</h4>
                  </div>
                  <span className="material-symbols-outlined text-purple-500 text-2xl">insights</span>
                </div>
                <div className="flex items-center gap-3">
                  {/* <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-100"></div>
                    ))}
                  </div> */}
                  <span className="text-slate-400 text-[12px] font-medium"></span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Performance Index */}
        <div className="bg-blue-50 rounded-3xl p-8 border border-blue-100">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h3 className="text-[#0B2545] text-2xl font-bold mb-1">Performance Index</h3>
              <p className="text-slate-500 text-sm">Efficiency vs Target Ratio</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#0EA5E9]"></span>
                <span className="text-slate-600 text-xs font-bold uppercase tracking-wider">Actual</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-slate-200"></span>
                <span className="text-slate-600 text-xs font-bold uppercase tracking-wider">Target</span>
              </div>
            </div>
          </div>

          {/* Bar Chart */}
          <div className="flex items-end justify-between h-48 gap-4 mb-8 px-2">
            {['MON', 'TUE', 'WED', 'THU', 'FRI'].map((day, i) => {
              const heights = [60, 70, 65, 75, 70];
              const actuals = [80, 90, 95, 60, 40];
              const isWed = day === 'WED';
              const isThu = day === 'THU';
              return (
                <div key={day} className="flex-1 flex flex-col justify-end gap-1 h-full relative group">
                  <div className="w-full bg-slate-300/50 rounded-t-lg transition-all duration-500" style={{ height: `${heights[i]}%` }}></div>
                  <div className={`w-full ${isWed ? 'bg-[#0EA5E9] shadow-lg shadow-[#0EA5E9]/20' : 'bg-[#0EA5E9]/50'} rounded-t-lg -mt-12 transition-all duration-500 group-hover:bg-[#0EA5E9]`} style={{ height: `${actuals[i]}%` }}></div>
                  <span className="text-center text-slate-400 text-[11px] font-bold mt-4 tracking-widest">{day}</span>
                  {isThu && (
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-[#0EA5E9] text-white text-[10px] font-black px-2 py-0.5 rounded shadow-lg animate-bounce">LIVE</div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="flex justify-between items-center bg-white p-6 rounded-2xl border border-blue-100 shadow-sm">
            <div className="text-center flex-1">
              <p className="text-slate-400 text-[10px] font-black uppercase mb-1 tracking-widest">Target</p>
              <p className="text-[#0B2545] font-bold text-2xl">140</p>
            </div>
            <div className="w-[1px] h-10 bg-slate-100"></div>
            <div className="text-center flex-1">
              <p className="text-slate-400 text-[10px] font-black uppercase mb-1 tracking-widest">Actual</p>
              <p className="text-[#0EA5E9] font-bold text-2xl">156</p>
            </div>
            <div className="w-[1px] h-10 bg-slate-100"></div>
            <div className="text-center flex-1">
              <p className="text-slate-400 text-[10px] font-black uppercase mb-1 tracking-widest">Efficiency</p>
              <p className="text-emerald-500 font-bold text-2xl">111%</p>
            </div>
          </div>
        </div>
      </div>
    </MotionSection>
  );
};

export default KPIOperationalMonitoring;
