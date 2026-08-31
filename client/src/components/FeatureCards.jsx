import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import imgWaterMeter from '../assets/images/water meter suoort bluegrids.jpeg';
import imgCivil from '../assets/images/civil_engineering_excavation.jpg';
import imgReinstatement from '../assets/images/projectcordination.jpeg';
import imgInfra from '../assets/images/field_delivery_support.jpg';

const mainServices = [
  {
    slug: "water-meter-installation",
    title: "Smart Water Meter Installation",
    description: "Supporting clean-water metering programmes with trained field operatives, structured mobilisation, safe customer-side working and quality-controlled installation processes.",
    img: imgWaterMeter
  },
  {
    slug: "civil-engineering",
    title: "Civil Engineering & Excavation",
    description: "Supporting utility access, excavation, chamber works, enabling activity and associated civil engineering requirements through trained, safety-conscious field teams.",
    img: imgCivil
  },
  {
    slug: "reinstatement",
    title: "Reinstatement & Street Works",
    description: "Quality-focused reinstatement support across footway and highway environments, delivered in accordance with project specifications and relevant street-works requirements.",
    img: imgReinstatement
  },
  {
    slug: "infrastructure-support",
    title: "Infrastructure & Field Delivery Support",
    description: "Flexible project mobilisation, workforce coordination, field supervision and operational support designed to strengthen utility delivery programmes from mobilisation through completion.",
    img: imgInfra
  }
];

const FeatureCards = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.18,
        delayChildren: 0.05
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 32, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 1.1,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <section className="relative z-30 bg-slate-50 py-20 border-b border-slate-200/80">
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

        {/* 4 Cards Grid retaining exact original card styling */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6 lg:gap-8"
        >
          {mainServices.map((card, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="bg-white text-gray-800 shadow-lg hover:shadow-2xl hover:shadow-brand-primary/5 flex flex-col h-full overflow-hidden border border-gray-200 rounded-none group hover:-translate-y-2 transition-all duration-300 text-left"
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
                  <p className="text-xs text-gray-600 leading-normal mb-3 font-medium">
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
    </section>
  );
};

export default FeatureCards;

