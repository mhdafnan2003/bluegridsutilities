import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import imgWaterMeter from '../assets/images/water meter suoort bluegrids.jpeg';
import imgCivil from '../assets/images/infrastructure.jpeg';
import imgReinstatement from '../assets/images/projectcordination.jpeg';
import imgSurveying from '../assets/images/combliance.jpeg';
import imgTraffic from '../assets/images/Telecoms and field operations support.jfif';
import imgEmergency from '../assets/images/Training coordination and deployment planning.jpg';
import imgInfra from '../assets/images/Sectors/Infrastructure Support.jpg';

const mainServices = [
  {
    slug: "water-meter-installation",
    title: "Water Meter Installation",
    description: "Workforce planning, scheduling, and operational support for smart water meter rollouts across the UK.",
    img: imgWaterMeter
  },
  {
    slug: "civil-engineering",
    title: "Civil Engineering",
    description: "Excavation, pipe exposure, utility chambers, concrete works, surface preparation, and groundworks.",
    img: imgCivil
  },
  {
    slug: "reinstatement",
    title: "Reinstatement",
    description: "High-standard surface restoration for footpaths, highways, block paving, concrete, tarmac, and landscaping.",
    img: imgReinstatement
  },
  {
    slug: "utility-surveying",
    title: "Utility Surveying",
    description: "Underground utility mapping, site surveys, utility locating, asset recording, and pre-excavation risk assessments.",
    img: imgSurveying
  },
  {
    slug: "traffic-management",
    title: "Traffic Management Support",
    description: "Temporary traffic control setups, pedestrian management, barrier systems, road safety, and Chapter 8 signage.",
    img: imgTraffic
  },
  {
    slug: "emergency-utility-response",
    title: "Emergency Utility Response",
    description: "24/7 rapid response field operative dispatch, burst main containment, emergency attendance, and leak support.",
    img: imgEmergency
  },
  {
    slug: "infrastructure-support",
    title: "Infrastructure Support",
    description: "Multi-utility project mobilisation, accredited labour supply, site supervision, and project coordination.",
    img: imgInfra
  }
];

const FeatureCards = () => {
  const [page, setPage] = useState(0);
  const timerRef = useRef(null);

  const startTimer = () => {
    stopTimer();
    timerRef.current = setInterval(() => {
      setPage((prev) => (prev === 0 ? 1 : 0));
    }, 10000); // Rotate page every 10 seconds for a slower, comfortable pace
  };

  const stopTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
  };

  useEffect(() => {
    startTimer();
    return () => stopTimer();
  }, [page]);

  const handleDotClick = (index) => {
    setPage(index);
  };

  const currentServices = page === 0 
    ? mainServices.slice(0, 3) 
    : page === 1 
    ? mainServices.slice(3, 6) 
    : mainServices.slice(4, 7);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut'
      }
    }
  };

  return (
    <section className="relative z-30 bg-brand-light py-20 border-b border-brand-primary/10">
      <div className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="mb-14 text-left max-w-3xl">
          <span className="inline-block px-4 py-1.5 rounded-none bg-[#005f9e]/10 text-[#005f9e] text-xs font-black tracking-widest mb-4 font-outfit border border-[#005f9e]/20">
            Our Core Services
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0f3a5e] tracking-tight font-outfit leading-tight mb-4">
            Specialist Infrastructure & Field Support Services
          </h2>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed font-medium">
            Providing end-to-end operational delivery, smart metering coordination, workforce onboarding, and compliant field execution across major UK utility networks.
          </p>
        </div>

        {/* Cards Grid with Smooth, Slow Fade Animation */}
        <div 
          className="relative min-h-[400px] md:min-h-[480px]"
          onMouseEnter={stopTimer}
          onMouseLeave={startTimer}
        >
          <motion.div 
            key={page}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-8"
          >
            {currentServices.map((card, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="bg-white text-gray-800 shadow-lg hover:shadow-2xl hover:shadow-brand-primary/5 flex flex-col h-full overflow-hidden border border-gray-200 rounded-none group hover:-translate-y-2 transition-all duration-300"
              >
                {/* Card Image Wrapper - Maximum area for image */}
                <div className="relative overflow-hidden h-80 sm:h-96 lg:h-[380px] bg-gray-900 shrink-0">
                  <img 
                    src={card.img} 
                    alt={card.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Card Content - Compact text field */}
                <div className="p-4 sm:p-5 flex-grow flex flex-col justify-between">
                  <div className="text-left">
                    <h3 className="text-base sm:text-lg font-bold font-outfit text-[#111111] mb-1.5 tracking-tight group-hover:text-[#005f9e] transition-colors duration-300">
                      {card.title}
                    </h3>
                    <p className="text-xs text-gray-600 leading-normal mb-3 font-medium line-clamp-2">
                      {card.description}
                    </p>
                  </div>
                  
                  <Link 
                    to={`/services?select=${card.slug}`}
                    className="inline-flex items-center gap-2 text-xs font-black tracking-widest text-[#111111] hover:text-[#005f9e] transition-colors duration-300 font-outfit mt-auto"
                  >
                    <span>Read More</span>
                    <span className="transition-transform duration-300 group-hover:translate-x-1.5">➔</span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Pagination Dots */}
        <div className="mt-10 flex justify-center items-center gap-3">
          {[0, 1, 2].map((index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`h-2.5 rounded-full transition-all duration-500 ${
                index === page ? 'w-8 bg-[#005f9e]' : 'w-2.5 bg-slate-300 hover:bg-slate-400'
              }`}
              aria-label={`Go to page ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;
