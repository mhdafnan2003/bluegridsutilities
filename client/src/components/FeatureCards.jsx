import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import imgWaterMeter from '../assets/images/water meter suoort bluegrids.jpeg';
import imgCivilsWork from '../assets/images/1550ea50-f62d-4c3b-828b-3713f9c44355.jpg';
import imgTeamBriefing from '../assets/images/de40f788-8696-4e19-bb08-565d2e68c1af.jpg';
import imgTrenchWork from '../assets/images/dcf7a6e6-b3c4-4ee3-9740-8f88f8ba842a.jpg';

const mainServices = [
  {
    num: "01",
    slug: "smart-water-metering",
    title: "Smart Water Metering",
    description: "Support for authorised smart water-meter installation activity, including mobilisation, field coordination, supervision and completion reporting.",
    cta: "Explore Smart Water Metering",
    img: imgWaterMeter,
    position: "center"
  },
  {
    num: "02",
    slug: "utility-civils",
    title: "Utility Civils & Access Works",
    description: "Support for utility access, excavation and associated enabling works where included within the approved project scope.",
    cta: "Explore Utility Civils",
    img: imgCivilsWork,
    position: "center 70%"
  },
  {
    num: "03",
    slug: "reinstatement",
    title: "Reinstatement Support",
    description: "Quality-focused support for reinstatement and completion activity in line with project requirements and authorised working methods.",
    cta: "Explore Reinstatement",
    img: imgTeamBriefing,
    position: "center 75%"
  },
  {
    num: "04",
    slug: "project-delivery",
    title: "Project Delivery & Field Support",
    description: "Mobilisation, workforce coordination, project administration, operational reporting and escalation support around field delivery.",
    cta: "Explore Project Delivery",
    img: imgTrenchWork,
    position: "center 35%"
  }
];

const FeatureCards = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.05
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 28, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <section className="relative z-30 bg-slate-50 py-20 border-b border-slate-200/80" id="what-we-do">
      <div className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="mb-14 text-left max-w-3xl">
          <span className="inline-block px-4 py-1.5 rounded-none bg-[#005f9e]/10 text-[#005f9e] text-xs font-black tracking-widest mb-4 font-outfit border border-[#005f9e]/20 uppercase">
            What We Do
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0f3a5e] tracking-tight font-outfit leading-tight mb-4">
            Our Capabilities
          </h2>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed font-medium">
            Bluegrid Utilities supports authorised utility programmes through structured field mobilisation, operational coordination and practical delivery.
          </p>
        </div>

        {/* 4 Cards Grid retaining exact original card styling */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {mainServices.map((card, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="bg-white text-gray-800 shadow-lg hover:shadow-2xl hover:shadow-brand-primary/5 flex flex-col h-full overflow-hidden border border-gray-200 rounded-none group hover:-translate-y-2 transition-all duration-300 text-left"
            >
              {/* Card Image Wrapper */}
              <div className="relative overflow-hidden h-72 sm:h-80 bg-gray-900 shrink-0">
                <img 
                  src={card.img} 
                  alt={card.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  style={{ objectPosition: card.position || 'center' }}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 left-4 bg-slate-950/80 backdrop-blur-sm border border-white/20 text-white font-mono font-bold text-xs px-2.5 py-1">
                  {card.num}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-5 flex-grow flex flex-col justify-between">
                <div className="text-left">
                  <h3 className="text-base sm:text-lg font-bold font-outfit text-[#111111] mb-2 tracking-tight group-hover:text-[#005f9e] transition-colors duration-300">
                    {card.title}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed mb-4 font-medium">
                    {card.description}
                  </p>
                </div>
                
                <Link 
                  to={`/services?select=${card.slug}`}
                  className="inline-flex items-center gap-2 text-xs font-black tracking-widest text-[#005f9e] hover:text-[#0f3a5e] transition-colors duration-300 font-outfit mt-auto pt-2 uppercase"
                >
                  <span>{card.cta}</span>
                  <span className="transition-transform duration-300 group-hover:translate-x-1.5">➔</span>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Section Button */}
        <div className="mt-12 text-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#005f9e] hover:bg-[#0f3a5e] text-white font-bold text-xs tracking-widest uppercase font-outfit transition-all duration-300 shadow-md hover:shadow-lg"
          >
            <span>View all services</span>
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;

