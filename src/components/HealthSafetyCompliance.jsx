import React from 'react';
import MotionSection from './MotionSection';

const safetyItems = [
  {
    title: "PPE Standards",
    desc: "Mandatory high-visibility clothing, head protection, and task-specific safety gear for all field operations.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
  {
    title: "RAMS Procedures",
    desc: "Comprehensive Risk Assessments and Method Statements (RAMS) conducted for every site and specific task.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    )
  },
  {
    title: "NRSWA Compliance",
    desc: "Strict adherence to the New Roads and Street Works Act (NRSWA) for all utility works on public highways.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    )
  },
  {
    title: "Traffic Management",
    desc: "Certified implementation of traffic control measures to ensure safety of the public and our workforce.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.132-3L13.132 6c-.77-1.333-2.694-1.333-3.464 0L3.34 17c-1.37 1.333-.408 3 1.132 3z" />
      </svg>
    )
  },
  {
    title: "Environmental Responsibilities",
    desc: "Commitment to waste reduction, spill prevention, and minimizing the environmental impact of operations.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    title: "Daily Toolbox Talks",
    desc: "Routine safety briefings held every morning to address specific site risks and operational updates.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  },
  {
    title: "Workforce Safety Monitoring",
    desc: "Continuous supervision and QA audits to ensure maintaining the highest safety standards on-site.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    )
  }
];

const HealthSafetyCompliance = () => {
  return (
    <MotionSection as="section" className="py-24 bg-brand-dark overflow-hidden" id="safety-compliance">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Left: Content */}
          <div className="lg:w-1/2">
            <div className="mb-12">
              <span className="text-brand-primary font-bold tracking-widest uppercase text-sm mb-4 block">Our Unwavering Commitment</span>
              <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
                Health, Safety & Compliance
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                Safety isn't just a priority; it's a fundamental part of our operational delivery. We maintain rigorous standards across all projects to protect our workforce and the public.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {safetyItems.map((item, index) => (
                <div key={index} className="flex gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors duration-300 group">
                  <div className="w-10 h-10 shrink-0 rounded-lg bg-white/10 flex items-center justify-center text-white group-hover:bg-brand-primary transition-all duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">{item.title}</h4>
                    <p className="text-gray-500 text-sm leading-snug">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Induction Visuals Mockup */}
          <div className="lg:w-1/2 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10">
              <img 
                src="/src/assets/images/Sectors/Incredible 8-Second Construction Hyper-Lapse (1).jfif" 
                alt="Construction Safety" 
                className="w-full h-[600px] object-cover transition-all duration-700"
              />
            </div>
            
            {/* Background Decoration */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-brand-primary/10 rounded-full blur-[100px] -z-10"></div>
          </div>
        </div>

      </div>
    </MotionSection>
  );
};

export default HealthSafetyCompliance;