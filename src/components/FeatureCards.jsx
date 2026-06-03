import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import img3 from '../assets/images/updated/Utility infrastructure.avif';
import img4 from '../assets/images/Telecoms and field operations support.jfif';
import img5 from '../assets/images/updated/img 6.jpg';
import img6 from '../assets/images/updated/Compliance & Onboarding.avif';
import img7 from '../assets/images/Training coordination and deployment planning.jpg';
import img8 from '../assets/images/Sectors/watermeter.jpeg';

const services = [
  { 
    title: "Water Meter Project Support", 
    description: "Coordination and deployment support for clean water infrastructure, smart water metering, and leak detection rollouts.",
    img: img8 
  },
  { 
    title: "Utility Infrastructure Support", 
    description: "Providing strategic project operations and compliant deployment planning for main utility assets and gas/electricity grids.",
    img: img3 
  },
  { 
    title: "Telecoms & Field Support", 
    description: "Delivering reliable logistics, field technician coordination, and operational field team coverage for major networks.",
    img: img4 
  },
  { 
    title: "Project Coordination", 
    description: "Full lifecycle coordination, reporting, and deployment planning to ensure seamless execution of operations.",
    img: img5 
  },
  { 
    title: "Compliance & Onboarding", 
    description: "Rigorous vetting, training coordination, and compliance verification for the utility workforce before deployment.",
    img: img6 
  },
  { 
    title: "Training & Development", 
    description: "Continuous training management and upskilling programs to maintain high industry safety standards.",
    img: img7 
  }
];

const FeatureCards = () => {
  const [page, setPage] = useState(0);
  const timerRef = useRef(null);

  const startTimer = () => {
    stopTimer();
    timerRef.current = setInterval(() => {
      setPage((prev) => (prev === 0 ? 1 : 0));
    }, 5000); // Rotate page every 5 seconds
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

  const currentServices = page === 0 ? services.slice(0, 3) : services.slice(3, 6);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut'
      }
    }
  };

  return (
    <section className="relative z-30 bg-brand-light py-16 border-b border-brand-primary/10">
      <div className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Cards Grid with Blink Animation */}
        <div className="relative min-h-[400px] md:min-h-[480px]">
          <motion.div 
            key={page}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-8"
          >
            {currentServices.map((card, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="bg-white text-gray-800 shadow-lg hover:shadow-2xl hover:shadow-brand-primary/5 flex flex-col h-full overflow-hidden border border-gray-100 group hover:-translate-y-3 transition-all duration-300"
              >
                {/* Card Image Wrapper */}
                <div className="relative overflow-hidden h-52 sm:h-60 bg-gray-900">
                  <img 
                    src={card.img} 
                    alt={card.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Card Content */}
                <div className="p-8 flex-grow flex flex-col justify-between">
                  <div className="text-left">
                    <h3 className="text-lg lg:text-xl font-extrabold uppercase font-outfit text-[#111111] mb-3 tracking-tight group-hover:text-[#005f9e] transition-colors duration-300">
                      {card.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed mb-6 font-medium">
                      {card.description}
                    </p>
                  </div>
                  
                  <a 
                    href="#services" 
                    className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#111111] hover:text-[#005f9e] transition-colors duration-300 font-outfit mt-auto"
                  >
                    <span>Read More</span>
                    <span className="transition-transform duration-300 group-hover:translate-x-1.5">➔</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Pagination Dots */}
        <div className="mt-10 flex justify-center items-center gap-3">
          {[0, 1].map((index) => (
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
