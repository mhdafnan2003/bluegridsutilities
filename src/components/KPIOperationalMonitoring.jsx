import React from 'react';
import MotionSection from './MotionSection';

const kpiStats = [
  {
    label: "Installs Per Team",
    value: "6",
    unit: "Per Day",
    color: "from-blue-500 to-blue-600",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    label: "Team Throughput",
    value: "30",
    unit: "Per Week",
    color: "from-indigo-500 to-indigo-600",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    )
  },
  {
    label: "Monthly Output",
    value: "120",
    unit: "Per Month",
    color: "from-brand-primary to-emerald-600",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    )
  }
];

const dashboardKPIs = [
  {
    title: "QA Target",
    value: "95%+",
    desc: "Rigorous quality assurance benchmark for every installation.",
    status: "Excelled",
    trend: "+2.4%"
  },
  {
    title: "Safety Compliance",
    value: "100%",
    desc: "Zero-compromise approach to workforce and public safety.",
    status: "Critical",
    trend: "Stable"
  },
  {
    title: "Daily Reporting",
    value: "Live",
    desc: "Real-time field data and operational visibility for stakeholders.",
    status: "Active",
    trend: "On-Track"
  }
];

const KPIOperationalMonitoring = () => {
  return (
    <MotionSection as="section" className="py-24 bg-[#f8fafc]" id="kpi-monitoring">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-dark tracking-tight mb-6">
            KPI & Operational Monitoring
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Data-driven performance tracking ensuring maximum efficiency, safety, and quality across our entire utility network.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Block: Throughput Metrics */}
          <div className="lg:col-span-1 space-y-6">
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <span className="w-2 h-8 bg-brand-primary rounded-full"></span>
              Installation Throughput
            </h3>
            {kpiStats.map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center text-white`}>
                    {stat.icon}
                  </div>
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">{stat.unit}</span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-black text-brand-dark">{stat.value}</span>
                  <span className="text-gray-500 font-medium">Installs</span>
                </div>
                <p className="text-sm text-gray-400 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Right Block: Dashboard Style Monitoring */}
          <div className="lg:col-span-2">
             <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden h-full flex flex-col">
                <div className="p-8 border-b border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Operational Health Dashboard</h3>
                    <p className="text-sm text-gray-400">Real-time performance and compliance tracking</p>
                  </div>
                  <div className="flex gap-2">
                    <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 text-xs font-bold flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                      System Live
                    </span>
                    <span className="px-3 py-1 rounded-full bg-gray-50 text-gray-500 text-xs font-bold">
                      Updated: Just now
                    </span>
                  </div>
                </div>

                <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 flex-1">
                  {dashboardKPIs.map((kpi, index) => (
                    <div key={index} className="flex flex-col p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-brand-primary/20 hover:bg-white hover:shadow-xl hover:shadow-brand-primary/5 transition-all duration-300">
                      <div className="flex justify-between items-start mb-6">
                        <span className="text-xs font-bold text-brand-primary uppercase tracking-wider">{kpi.title}</span>
                        <span className="text-[10px] font-black bg-white px-2 py-0.5 rounded border border-gray-100 text-gray-400">{kpi.trend}</span>
                      </div>
                      <div className="mb-4">
                        <span className="text-4xl font-black text-brand-dark leading-none">{kpi.value}</span>
                      </div>
                      <p className="text-xs text-gray-500 leading-normal mb-6 flex-1">
                        {kpi.desc}
                      </p>
                      <div className="pt-4 border-t border-gray-200/50 flex items-center justify-between">
                        <span className="text-[10px] font-bold text-gray-400 uppercase">Status</span>
                        <span className={`text-[10px] font-black uppercase ${kpi.status === 'Critical' ? 'text-brand-primary' : 'text-emerald-500'}`}>{kpi.status}</span>
                      </div>
                    </div>
                  ))}
                  
                  {/* Visual Chart Placeholder */}
                  <div className="md:col-span-2 lg:col-span-3 bg-brand-dark rounded-2xl p-6 flex flex-col justify-between overflow-hidden relative min-h-[200px]">
                    <div className="z-10">
                      <h4 className="text-white font-bold">Network Performance Trend</h4>
                      <p className="text-gray-400 text-xs">Aggregated installation success rate across UK regions</p>
                    </div>
                    
                    {/* Mock Wave Chart */}
                    <div className="absolute bottom-0 left-0 right-0 h-24 flex items-end px-2 gap-1">
                      {[40, 70, 45, 90, 65, 80, 55, 95, 75, 85, 60, 100].map((h, i) => (
                        <div key={i} className="flex-1 bg-brand-primary/40 group relative rounded-t-sm transition-all duration-500 hover:bg-brand-primary" style={{ height: `${h}%` }}>
                          <div className="opacity-0 group-hover:opacity-100 absolute -top-8 left-1/2 -translate-x-1/2 bg-white text-brand-dark text-[10px] font-bold py-1 px-2 rounded shadow-lg whitespace-nowrap transition-opacity">
                            {h}% Efficiency
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex justify-between items-end mt-4 z-10">
                      <div className="flex gap-4">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-brand-primary"></div>
                          <span className="text-[10px] text-gray-400 font-bold uppercase">Target</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-brand-primary opacity-40"></div>
                          <span className="text-[10px] text-gray-400 font-bold uppercase">Actual</span>
                        </div>
                      </div>
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

export default KPIOperationalMonitoring;