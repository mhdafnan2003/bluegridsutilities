import React from 'react';
import { Link } from 'react-router-dom';
import MotionSection from './MotionSection';

const roles = [
  {
    title: "Water Meter Technicians",
    desc: "Experienced Water Meter Technicians for nationwide utility projects.",
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
  },
  {
    title: "Field Operations",
    desc: "Opportunities for Field Operatives and Supervisors to lead and execute critical on-site tasks.",
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  },
  {
    title: "Project Management",
    desc: "Seeking Project Coordinators and Assistant Project Managers to drive successful service delivery.",
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  },
  {
    title: "Project Support",
    desc: "Roles available for Support staff to ensure smooth, compliant, and efficient operations.",
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  },
  {
    title: "Compliance & Safety",
    desc: "Ensure all operational activities meet strict industry standards and regulatory requirements.",
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  },
  {
    title: "Operational Reporting & Analytics",
    desc: "Analyze project metrics, track compliance, and generate insights to optimize workforce deployment.",
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
  }
];

const Workforce = () => {
  return (
    <MotionSection 
      as="section" 
      className="py-20 bg-[#fafafa]" 
      id="workforce"
      initial="hidden"
      animate="visible"
      whileInView={undefined}
      viewport={undefined}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-dark tracking-tight mb-4">
            Join Our Workforce
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            We are building a reliable workforce for upcoming utility and infrastructure projects across the UK. We welcome applications from candidates with experience or interest in our core areas.
          </p>
        </div>

        {/* 3x2 Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {roles.map((role, index) => (
            <div
              key={index}
              className="group relative bg-white border border-gray-100 rounded-2xl p-6 lg:p-7 overflow-hidden shadow-sm hover:shadow-[0_8px_30px_rgb(0,0,0,0.05)] transition-all duration-300 h-full flex flex-col"
              style={{ maskImage: 'radial-gradient(white, black)', WebkitMaskImage: '-webkit-radial-gradient(white, black)' }}
            >

              <h3 className="text-xl font-bold text-gray-900 mb-3 tracking-tight z-10 relative">{role.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-12 relative z-10 max-w-[82%]">{role.desc}</p>

              <a href="https://forms.office.com/r/K9vKw1hxcB" target="_blank" rel="noopener noreferrer" className="mt-auto flex items-center gap-3 relative z-10 w-fit">
                <div className="w-10 h-10 rounded-full border border-gray-100 shadow-sm flex items-center justify-center text-gray-600 group-hover:bg-brand-primary group-hover:border-brand-primary group-hover:text-white transition-all duration-300 bg-white">
                  <svg className="w-4 h-4 transform group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
                <span className="text-xs font-semibold text-gray-500 group-hover:text-brand-dark transition-colors duration-300">Register Interest</span>
              </a>

              {/* Decorative Circle Bottom Right */}
              <div className="absolute -bottom-12 -right-12 w-44 h-44 bg-slate-50 rounded-full transition-transform duration-700 ease-out group-hover:scale-110" />

              {/* Decorative Icon */}
              <div className="absolute bottom-8 right-8 text-brand-primary opacity-80 group-hover:opacity-100 transition-opacity duration-300 z-10">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {role.icon}
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Note & Button */}
        {/* <div className="mt-16 flex flex-col items-center text-center max-w-2xl mx-auto">
          <p className="text-sm text-gray-500 italic mb-8">
            * All applicants must complete our structured onboarding and compliance checks before project allocation.
          </p>
          <a href="#contact" className="bg-brand-primary hover:bg-brand-dark text-white px-10 py-4 rounded-full font-bold transition-colors duration-300 shadow-xl shadow-brand-primary/20">
            Apply / Register Interest
          </a>
        </div> */}

      </div>
    </MotionSection>
  );
};

export default Workforce;
