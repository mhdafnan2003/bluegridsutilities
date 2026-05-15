import React from 'react';
import MotionSection from './MotionSection';

const safetyModules = [
  {
    id: "01",
    title: "PPE Standards",
    icon: "engineering"
  },
  {
    id: "02",
    title: "RAMS Procedures",
    icon: "assignment_late"
  },
  {
    id: "03",
    title: "NRSWA Compliance",
    icon: "gavel"
  },
  {
    id: "04",
    title: "Traffic Management",
    icon: "traffic"
  },
  {
    id: "05",
    title: "Environmental Responsibilities",
    icon: "eco"
  },
  {
    id: "06",
    title: "Daily Toolbox Talks",
    icon: "groups",
    active: true
  },
  {
    id: "07",
    title: "Workforce Safety Monitoring",
    icon: "visibility"
  }
];

const HealthSafetyCompliance = () => {
  return (
    <MotionSection 
      as="section" 
      className="bg-[#0B2D4D] text-white font-sans blueprint-bg selection:bg-sky-500 selection:text-white relative" 
      id="safety-compliance"
    >
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        <div className="space-y-8">
          {/* Header */}
          <div className="space-y-4 text-center md:text-left">
            <h2 className="text-2xl md:text-4xl font-bold text-white uppercase tracking-tight">Health Safety & Compliance</h2>
            <div className="h-1.5 w-24 bg-sky-500 mx-auto md:mx-0"></div>
          </div>

          {/* Compliance Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {safetyModules.map((module) => (
              <div 
                key={module.id} 
                className={`glass-card rounded-2xl p-5 md:p-6 flex flex-col gap-4 group ${module.active ? 'border-l-4 border-l-sky-500' : ''}`}
              >
                <div className="flex justify-between items-start">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-sky-500/10 flex items-center justify-center group-hover:bg-sky-500/20 transition-colors">
                    <span className="material-symbols-outlined text-sky-400 text-2xl md:text-3xl group-hover:scale-110 transition-transform">{module.icon}</span>
                  </div>
                  <span className="text-[12px] font-bold text-gray-500 tracking-widest">{module.active ? 'ACTIVE' : module.id}</span>
                </div>
                <div className="space-y-2">
                  <h3 className="text-base md:text-lg font-bold text-white uppercase tracking-wider group-hover:text-sky-400 transition-colors">{module.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MotionSection>
  );
};

export default HealthSafetyCompliance;