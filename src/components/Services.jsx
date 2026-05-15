import React from 'react';
import MotionSection from './MotionSection';
import img3 from '../assets/images/updated/Utility infrastructure.avif';
import img4 from '../assets/images/Telecoms and field operations support.jfif';
import img5 from '../assets/images/updated/img 6.jpg';
import img6 from '../assets/images/updated/Compliance & Onboarding.avif';
import img7 from '../assets/images/Training coordination and deployment planning.jpg';
import img8 from '../assets/images/Sectors/watermeter.jpeg';

const services = [
  { title: "Water Meter Project Support", img: img8 },
  { title: "Utility infrastructure support", img: img3 },
  { title: "Telecoms and field operations support", img: img4 },
  { title: "Project Coordination", img: img5 },
  { title: "Compliance & Onboarding", img: img6 },
  { title: "Training coordination and deployment planning", img: img7 }
];

const ServiceCard = ({ service }) => (
  <div className="relative min-w-[280px] md:min-w-[350px] h-[350px] md:h-[450px] rounded-[2.5rem] overflow-hidden group cursor-pointer shadow-xl border border-white/5 transition-all duration-500 hover:-translate-y-2 shrink-0">
    <img
      src={service.img}
      alt={service.title}
      className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
    <div className="absolute z-10 bottom-8 left-8 right-8">
      <h4 className="text-xs md:text-sm font-bold text-white group-hover:text-brand-primary transition-colors duration-300 leading-snug uppercase tracking-[0.2em]">
        {service.title}
      </h4>
    </div>
  </div>
);

const Services = () => {
  // Double the array for a seamless loop
  const doubledServices = [...services, ...services];

  return (
    <MotionSection as="section" className="py-24 bg-white overflow-hidden" id="services">
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-container:hover .marquee-content {
          animation-play-state: paused;
        }
      `}</style>

      <div className="max-w-[1600px] mx-auto">
        <div className="marquee-container relative overflow-hidden">
          <div
            className="marquee-content flex gap-6 w-fit animate-[marquee_40s_linear_infinite]"
          >
            {doubledServices.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>
        </div>
      </div>
    </MotionSection>
  );
};

export default Services;