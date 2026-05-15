import React from 'react';
import MotionSection from '../components/MotionSection';
import img1 from '../assets/images/Services/Utility Workforce Supply.jpg';
import img2 from '../assets/images/updated/Smart Meter & Water Meter Project Support.avif';
import img3 from '../assets/images/updated/img 6.jpg';
import img4 from '../assets/images/updated/Compliance & Onboarding.avif';
import img5 from '../assets/images/Services/Infrastructure Support.jpg';

const servicesData = [
  {
    num: "01",
    title: "Utility Workforce Supply",
    desc: "We support projects with suitable field operatives, technicians, supervisors, and project support staff, subject to compliance and right-to-work checks.",
    img: img1
  },
  {
    num: "02",
    title: "Water Meter Project Support",
    desc: "We assist with workforce planning, scheduling, field coordination, and operational support for smart meter and water meter installation projects.",
    img: img2
  },
  {
    num: "03",
    title: "Project Coordination",
    desc: "Our project team supports scheduling, reporting, communication, compliance tracking, and operational updates between workers, supervisors, and project partners.",
    img: img3
  },
  {
    num: "04",
    title: "Compliance & Onboarding",
    desc: "We operate a structured onboarding process including identification checks, right-to-work verification, training status, availability, relocation, and deployment readiness.",
    img: img4
  },
  {
    num: "05",
    title: "Infrastructure Support",
    desc: "We support infrastructure-related projects requiring reliable labour coordination, site preparation support, and operational workforce management.",
    img: img5
  }
];

const ServicesPage = () => {
  return (
    <MotionSection as="div" className="py-24 bg-white font-sans" id="services">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 text-center">

        {/* Header Section */}
        <div className="mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-primary/10 text-brand-primary text-sm font-medium tracking-wide">
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a202c] mt-6 mb-4 tracking-tight">
            Operational Support Services
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            We provide tailored construction solutions, designed to meet your needs and executed
            with precision and expertise.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 text-left">
          {servicesData.map((service, index) => (
            <div key={index} className="flex flex-col group bg-white rounded-[.5rem] overflow-hidden border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-slate-200/80 transition-all duration-500 hover:-translate-y-2">
              <div className="w-full aspect-[4/3] overflow-hidden relative">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              <div className="p-8 md:p-10 flex flex-col flex-grow bg-white relative z-10">
                <h3 className="text-2xl font-bold text-[#1a202c] mb-4 tracking-tight group-hover:text-brand-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-500 flex-grow leading-relaxed">
                  {service.desc}
                </p>
                <div className="mt-8 flex items-center text-brand-primary font-bold text-sm tracking-wider uppercase opacity-100 transition-all duration-500 -translate-x-4 group-hover:translate-x-0">
                  Learn More
                  <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </MotionSection>
  );
};

export default ServicesPage;
