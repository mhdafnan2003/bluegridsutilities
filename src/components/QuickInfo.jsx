import React from 'react';
import MotionSection from './MotionSection';

const QuickInfo = () => {
  const features = [
    {
      title: "24/7 Support",
      desc: "Operational readiness.",
      icon: <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
    },
    {
      title: "Compliance First",
      desc: "Fully verified teams.",
      icon: <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
    },
    {
      title: "Nationwide",
      desc: "Coverage across UK.",
      icon: <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
    },
    {
      title: "Expert Management",
      desc: "Project coordination.",
      icon: <path d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
    }
  ];

  return (
    <MotionSection as="section" className="py-24 bg-white relative font-sans" id="values">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="flex flex-col mb-16">
          <span className="bg-brand-primary/10 text-brand-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-6 inline-block w-max">
            Workforce Reliability
          </span>
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-6">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight">
              Why Bluegrid?
            </h2>
            {/* <div className="shrink-0 hidden md:block">
              <button className="flex items-center gap-3 px-6 py-3 border border-gray-200 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors group">
                Get to Know Us
                <svg className="w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div> */}
          </div>
          
          <p className="text-xl lg:text-2xl text-gray-600 leading-snug font-medium max-w-3xl">
            Trusted by industry leaders, built for long-lasting results, and designed to deliver reliable, enduring success.
          </p>
        </div>

        {/* Features Grid: 2 columns mobile, 4 columns desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10">
          {features.map((feature, index) => (
            <div key={index} className="group">
              <div className="w-12 h-12 lg:w-14 lg:h-14 bg-brand-primary/10 text-brand-primary rounded-lg flex items-center justify-center mb-5 transition-transform group-hover:scale-105">
                <svg className="w-6 h-6 lg:w-7 lg:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  {feature.icon}
                </svg>
              </div>
              <h4 className="text-lg lg:text-xl font-semibold text-gray-900 mb-2">{feature.title}</h4>
              <p className="text-gray-500 leading-relaxed text-sm lg:text-base">{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* Mobile Button */}
        {/* <div className="mt-12 md:hidden">
          <button className="flex items-center justify-center w-full gap-3 px-6 py-4 border border-gray-200 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors group">
            Get to Know Us
            <svg className="w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div> */}

      </div>
    </MotionSection>
  );
};

export default QuickInfo;
