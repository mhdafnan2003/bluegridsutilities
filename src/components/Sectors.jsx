import React from 'react';
import MotionSection from './MotionSection';
import water from '../assets/images/Sectors/Water utilities.jpg';
import imgWater from '../assets/images/Sectors/Smart Meter & Water Meter Project Support.jpg';
import imgTelecoms from '../assets/images/Sectors/Incredible 8-Second Construction Hyper-Lapse (1).jfif';
import imgCompliance from '../assets/images/Sectors/Compliance & Onboarding.jpg';
import imgInfra from '../assets/images/Sectors/Infrastructure Support.jpg';
import imgCoordination from '../assets/images/Sectors/Project Coordination.jpg';
import imgWorkforce from '../assets/images/Sectors/Utility Workforce Supply.jpg';

const sectorsData = [
  {
    title: "Water utilities",
    category: "Utilities",
    desc: "Comprehensive support for water network maintenance and smart installation programs.",
    img: water,
  },
  {
    title: "Smart metering",
    category: "Energy",
    desc: "Large-scale deployment and workforce coordination for smart meter infrastructure.",
    img: imgWater,
  },
  {
    title: "",
    category: "Infrastructure",
    desc: "Operational workforce solutions for telecommunications network expansion and upgrades.",
    img: imgTelecoms,
  },
  {
    title: "Energy and utilities",
    category: "Utilities",
    desc: "Reliable field service support and operational coordination for the broader energy sector.",
    img: imgCompliance,
  },
  {
    title: "Civil infrastructure support",
    category: "Infrastructure",
    desc: "Experienced site preparation and comprehensive operational workforce management.",
    img: imgInfra,
  },
  {
    title: "Field service operations",
    category: "Operations",
    desc: "Coordinated deployment of fully compliant, skilled technicians and operatives nationwide.",
    img: imgCoordination,
  },
  {
    title: "Contractor workforce support",
    category: "Workforce",
    desc: "End-to-end recruitment, onboarding, and management of specialized utility contractors.",
    img: imgWorkforce,
  }
];

const Sectors = () => {
  return (
    <MotionSection as="section" className="py-24 bg-white overflow-hidden font-sans" id="sectors">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Area */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
            Sectors We Support
          </h2>
          <p className="text-gray-600 text-lg mt-5 ">
            We provide essential workforce support across the UK’s most critical infrastructure and utility sectors.
          </p>
        </div>

        {/* Sliding Cards Area */}
        <div className="relative w-full overflow-hidden">
          {/* We duplicate the items to create a seamless infinite marquee */}
          <div className="inline-flex w-max animate-marquee gap-6 px-3">
            {[...sectorsData, ...sectorsData, ...sectorsData].map((sector, idx) => (
              <div 
                key={idx} 
                className="relative w-[300px] sm:w-[340px] md:w-[380px] lg:w-[420px] h-[400px] md:h-[480px] lg:h-[540px] rounded-[2rem] overflow-hidden group shrink-0 shadow-lg cursor-pointer"
              >
                {/* Background Image */}
                <img 
                  src={sector.img} 
                  alt={sector.title} 
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Top Right Icon Button */}
                <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white opacity-80 hover:bg-white/40 hover:opacity-100 transition-all duration-300 z-10">
                  <svg className="w-5 h-5 transform -rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>

                {/* Bottom Text Content */}
                <div className="absolute bottom-0 left-0 w-full p-8 whitespace-normal text-left z-10">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 tracking-tight">
                    {sector.title}
                  </h3>
                  <p className="text-gray-300 text-sm md:text-base leading-relaxed line-clamp-2 md:line-clamp-3">
                    {sector.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </MotionSection>
  );
};

export default Sectors;
