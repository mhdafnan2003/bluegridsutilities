import React from 'react';
import MotionSection from './MotionSection';

const trainingFocus = [
  {
    title: "Operational Leadership",
    desc: "Developing front-line supervisors and managers to lead with precision and safety-first mindsets.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  },
  {
    title: "Infrastructure Operations",
    desc: "Continuous learning focused on modern utility infrastructure and evolving technical standards.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    )
  },
  {
    title: "Project Coordination",
    desc: "Enhanced training in logistical planning, resource allocation, and project lifecycle management.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: "Compliance Mastery",
    desc: "Deep-dive sessions into industry regulatory practices and internal safety compliance auditing.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  }
];

const TrainingDevelopment = () => {
  return (
    <MotionSection as="section" className="py-24 bg-slate-50 overflow-hidden" id="training">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left: Interactive Visual */}
          <div className="lg:w-1/2 order-2 lg:order-1">
             <div className="relative">
                <div className="grid grid-cols-2 gap-6 relative z-10">
                   {trainingFocus.map((item, index) => (
                      <div key={index} className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                         <div className="w-12 h-12 rounded-2xl bg-brand-primary/10 flex items-center justify-center text-brand-primary mb-6">
                            {item.icon}
                         </div>
                         <h4 className="text-lg font-bold text-gray-900 mb-2 leading-tight">{item.title}</h4>
                         <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                   ))}
                </div>
                
                {/* Background Decoration */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-primary/5 rounded-full blur-[120px] -z-10"></div>
             </div>
          </div>

          {/* Right: Content */}
          <div className="lg:w-1/2 order-1 lg:order-2 text-center lg:text-left">
            <span className="text-brand-primary font-bold tracking-widest uppercase text-sm mb-4 block underline decoration-2 underline-offset-8 mx-auto lg:mx-0 w-fit">Capability Building</span>
            <h2 className="text-4xl md:text-5xl font-bold text-brand-dark tracking-tight mb-8">
              Training & Professional Development
            </h2>
            <div className="space-y-6">
              <p className="text-xl text-gray-700 font-medium leading-relaxed italic border-l-4 border-brand-primary pl-6 text-left">
                “Our management team continuously develops operational and leadership capabilities through ongoing professional development, infrastructure operations learning, project coordination training, and compliance-focused industry practices.”
              </p>
              <p className="text-gray-500 text-lg leading-relaxed">
                By investing in the technical and behavioral growth of our staff, we ensure that every project is managed with the latest industry insights and a commitment to operational excellence. 
              </p>
            </div>

            <div className="mt-12 flex flex-wrap justify-center lg:justify-start gap-4">
              <div className="flex items-center gap-2 bg-white px-5 py-3 rounded-full border border-gray-200 shadow-sm">
                <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                <span className="text-sm font-bold text-gray-600 uppercase tracking-wider">Continuous Learning</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-5 py-3 rounded-full border border-gray-200 shadow-sm">
                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                <span className="text-sm font-bold text-gray-600 uppercase tracking-wider">Industry Alignment</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </MotionSection>
  );
};

export default TrainingDevelopment;