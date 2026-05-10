import React from 'react';

const WhyWorkWithUs = () => {
  const benefits = [
    {
      title: "Structured Onboarding",
      desc: "A clear, professional process to get you site-ready quickly and safely with full compliance.",
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    },
    {
      title: "Project Opportunities",
      desc: "Work on high-impact projects with leading utility and infrastructure partners.",
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    },
    {
      title: "Training Coordination",
      desc: "Ongoing support for professional development and essential deployment planning.",
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    },
    {
      title: "Clear Communication",
      desc: "Direct support and updates from project managers who understand the field.",
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
    },
    {
      title: "Compliance Focused",
      desc: "Professional management ensuring all standards, verifications, and safety protocols are met.",
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    },
    {
      title: "Essential Infrastructure",
      desc: "The opportunity to build a career working on the backbone of the UK's utility networks.",
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    }
  ];

  return (
    <section className="py-24 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Area */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-3xl">
            <h2 className="text-4xl md:text-5xl font-bold text-brand-dark mb-6 tracking-tight">
             Why Work With Us
            </h2>
            {/* <p className="text-gray-600 text-lg leading-relaxed">
              Join a committed team at the forefront of the UK's utility and infrastructure sectors. At BlurGrid, we pride ourselves on a supportive culture, continuous development, and the opportunity to deliver essential services that keep communities connected.
            </p> */}
          </div>
          {/* <div className="shrink-0">
            <button className="bg-brand-dark text-white px-8 py-3.5 rounded-full font-medium hover:bg-brand-primary transition-colors duration-300">
              Join Now
            </button>
          </div> */}
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="p-8 lg:p-10 rounded-[2rem] bg-white border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col h-full group"
            >
              <div className="w-14 h-14 rounded-2xl bg-brand-primary/5 text-brand-primary flex items-center justify-center mb-6 group-hover:bg-brand-primary group-hover:text-white transition-colors duration-300">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {benefit.icon}
                </svg>
              </div>
              
              <h4 className="text-xl font-bold text-gray-900 mb-4 tracking-tight">
                {benefit.title}
              </h4>
              
              <p className="leading-relaxed text-gray-500 flex-grow">
                {benefit.desc}
              </p>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default WhyWorkWithUs;
