import React from 'react';
import MotionSection from './MotionSection';

const safetyModules = [
  {
    id: "01",
    title: "PPE Standards",
    desc: "Mandatory high-visibility clothing, helmets, and task-specific safety gear.",
    icon: "engineering"
  },
  {
    id: "02",
    title: "RAMS Procedures",
    desc: "Comprehensive Risk Assessment Method Statements for all site activities.",
    icon: "assignment_late"
  },
  {
    id: "03",
    title: "NRSWA Compliance",
    desc: "Strict adherence to New Roads and Street Works Act regulations.",
    icon: "gavel"
  },
  {
    id: "04",
    title: "Traffic Management",
    desc: "Certified traffic control systems ensuring workforce and public safety.",
    icon: "traffic"
  },
  {
    id: "05",
    title: "Environmental Responsibilities",
    desc: "Waste reduction, spill prevention, and environmentally responsible operations.",
    icon: "eco"
  },
  {
    id: "06",
    title: "Daily Toolbox Talks",
    desc: "Daily team safety briefings covering site-specific hazards and updates.",
    icon: "groups",
    active: true
  },
  {
    id: "07",
    title: "Workforce Safety Monitoring",
    desc: "Real-time workforce supervision, audits, and compliance tracking.",
    icon: "visibility"
  }
];

const HealthSafetyCompliance = () => {
  return (
    <MotionSection as="section" className="relative bg-brand-dark text-white min-h-screen overflow-hidden font-sans" id="safety-compliance">
      
      {/* Blueprint Background Effect */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ 
             backgroundImage: `linear-gradient(#0ea5e9 1px, transparent 1px), linear-gradient(90deg, #0ea5e9 1px, transparent 1px)`,
             backgroundSize: '40px 40px' 
           }}>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16 relative z-10">
        
        {/* Header Section */}
        <section className="text-center mb-16 max-w-3xl mx-auto">
          <span className="inline-block text-[10px] font-bold text-sky-400 tracking-[0.3em] mb-4 uppercase bg-sky-500/10 px-4 py-1.5 rounded-full border border-sky-500/20">Security Protocol V.4</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">Health, Safety & Compliance</h2>
          <p className="text-white/60 text-lg leading-relaxed">
            Safety isn’t just a priority — it’s a core operational standard embedded into every project we deliver, ensuring workforce protection and regulatory excellence.
          </p>
        </section>

        {/* Current Safety Pulse (Optional visual element) */}
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 flex flex-col items-center text-center shadow-xl group hover:bg-white/10 transition-all duration-500">
            <span className="text-sky-400 font-bold uppercase text-[10px] tracking-widest mb-2">Operational Safety Score</span>
            <div className="flex items-end gap-2 mb-2">
              <span className="text-5xl font-black text-white leading-none">100</span>
              <span className="text-2xl font-bold text-sky-400 leading-none">%</span>
            </div>
            <div className="flex items-center gap-2 text-emerald-400">
              <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
              <span className="font-bold text-[10px] uppercase tracking-wider">Audit Certified</span>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 flex items-center gap-6 shadow-xl group hover:bg-white/10 transition-all duration-500">
            <div className="w-14 h-14 rounded-2xl bg-sky-500/20 flex items-center justify-center text-sky-400 shadow-[0_0_15px_rgba(14,165,233,0.1)]">
              <span className="material-symbols-outlined text-3xl">target</span>
            </div>
            <div>
              <p className="text-[10px] font-bold text-sky-400 uppercase tracking-widest mb-1">Focus</p>
              <p className="text-xl font-bold text-white leading-tight">Zero Incident</p>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 flex items-center gap-6 shadow-xl group hover:bg-white/10 transition-all duration-500">
            <div className="w-14 h-14 rounded-2xl bg-sky-500/20 flex items-center justify-center text-sky-400 shadow-[0_0_15px_rgba(14,165,233,0.1)]">
              <span className="material-symbols-outlined text-3xl">shield_with_heart</span>
            </div>
            <div>
              <p className="text-[10px] font-bold text-sky-400 uppercase tracking-widest mb-1">Standards</p>
              <p className="text-xl font-bold text-white leading-tight">ISO Compliant</p>
            </div>
          </div>
        </div> */}

        {/* Modules Grid */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-12">
            <h3 className="text-2xl font-bold uppercase tracking-tight text-white">Safety Modules</h3>
            <div className="h-1 w-20 bg-sky-500"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {safetyModules.map((module, index) => (
              <div 
                key={index} 
                className={`bg-white/5 backdrop-blur-xl border ${module.active ? 'border-sky-500/50 border-l-4 border-l-sky-500' : 'border-white/10'} rounded-3xl p-8 hover:bg-white/10 transition-all duration-300 group cursor-default shadow-lg hover:-translate-y-2`}
              >
                <div className="flex justify-between items-start mb-6">
                  <span className="material-symbols-outlined text-sky-400 text-4xl group-hover:scale-110 transition-transform">
                    {module.icon}
                  </span>
                  <span className="text-[10px] font-bold text-gray-500 tracking-widest">{module.active ? 'ACTIVE' : module.id}</span>
                </div>
                <h4 className="text-lg font-bold text-white mb-3 uppercase tracking-wider">{module.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{module.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        {/* <div className="bg-sky-500 rounded-[2.5rem] p-10 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-10 shadow-2xl shadow-sky-500/30">
          <div className="text-center lg:text-left">
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4 tracking-tight">Commitment Beyond Compliance</h3>
            <p className="text-white/90 text-lg max-w-2xl leading-relaxed">
              Our technical infrastructure projects are built on a foundation of rigorous safety protocols and continuous monitoring.
            </p>
          </div>
          <button className="whitespace-nowrap px-10 py-5 bg-brand-dark text-white rounded-2xl font-bold uppercase tracking-widest hover:bg-black transition-all shadow-xl">
            Review Audit History
          </button>
        </div> */}

      </div>
    </MotionSection>
  );
};

export default HealthSafetyCompliance;