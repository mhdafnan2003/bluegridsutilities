import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import MotionSection from './MotionSection';
import img1 from '../assets/images/Water meter installation support.jfif';
import img2 from '../assets/images/Smart meter workforce coordination.jfif';
import img3 from '../assets/images/Utility infrastructure support.jpg';
import img4 from '../assets/images/Telecoms and field operations support.jfif';
import img5 from '../assets/images/Project coordination and reporting.jpg';
import img6 from '../assets/images/Workforce onboarding and compliance verification.jpg';
import img7 from '../assets/images/Training coordination and deployment planning.jpg';

const services = [
  {
    title: "Water meter installation support",
    img: img1
  },
  {
    title: "Smart meter workforce coordination",
    img: img2
  },
  {
    title: "Utility infrastructure support",
    img: img3
  },
  {
    title: "Telecoms and field operations support",
    img: img4
  },
  {
    title: "Project coordination and reporting",
    img: img5
  },
  {
    title: "Workforce onboarding and compliance verification",
    img: img6
  },
  {
    title: "Training coordination and deployment planning",
    img: img7
  }
];

const CURVE = 20;

const ServiceCard = ({ service, isMobile = false }) => (
  <div
    className={`group relative rounded-[1.5rem] md:rounded-[1.75rem] overflow-hidden cursor-pointer shadow-lg bg-black transition-all duration-500 hover:-translate-y-2 h-[220px] md:h-[380px] 
      ${isMobile ? 'w-[90%] mx-auto' : 'min-w-[calc(100%/1-1rem)] md:min-w-[calc(100%/3-1rem)] lg:min-w-[calc(100%/5-1rem)]'}`}
  >
    <img
      src={service.img}
      alt={service.title}
      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
    <div className="absolute z-10 bottom-6 left-6 right-6 md:bottom-8 md:left-8 md:right-8">
      <h4 className="text-xs md:text-sm font-bold text-white group-hover:text-brand-primary transition-colors duration-300 leading-snug uppercase tracking-wider">
        {service.title}
      </h4>
    </div>
  </div>
);

const Services = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(5);
  const [isPaused, setIsPaused] = useState(false);
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  // Triple the services to ensure a seamless loop
  const extendedServices = useMemo(() => [...services, ...services, ...services], []);
  const totalItems = services.length;

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 1024) setVisibleCount(5);
      else if (window.innerWidth >= 768) setVisibleCount(3);
      else setVisibleCount(1);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Start at the middle set of items
  useEffect(() => {
    setCurrentIndex(totalItems);
  }, [totalItems]);

  const handleNext = useCallback(() => {
    setTransitionEnabled(true);
    setCurrentIndex((prev) => prev + 1);
  }, []);

  useEffect(() => {
    if (isPaused || isMobile) return;
    
    const interval = setInterval(() => {
      handleNext();
    }, 3000);
    
    return () => clearInterval(interval);
  }, [isPaused, handleNext, isMobile]);

  useEffect(() => {
    if (isMobile) return;
    // When we reach the end of the middle set, jump back to the middle set's start instantly
    if (currentIndex >= totalItems * 2) {
      setTimeout(() => {
        setTransitionEnabled(false);
        setCurrentIndex(totalItems);
      }, 700);
    }
    if (currentIndex < totalItems) {
      setTimeout(() => {
        setTransitionEnabled(false);
        setCurrentIndex(totalItems * 2 - 1);
      }, 700);
    }
  }, [currentIndex, totalItems, isMobile]);

  return (
    <MotionSection as="section" className="py-20 bg-white w-full overflow-hidden" id="services-overview">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 w-full">
        
        {isMobile ? (
          /* Mobile Layout: Downwards stack */
          <div className="flex flex-col gap-8 w-full">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} isMobile={true} />
            ))}
          </div>
        ) : (
          /* Tablet/Desktop Layout: Marquee scroll */
          <div 
            className="relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="overflow-hidden">
              <div 
                className={`flex gap-4 ${transitionEnabled ? 'transition-transform duration-700 ease-in-out' : ''}`}
                style={{ transform: `translateX(calc(-${currentIndex * (100 / visibleCount)}%))` }}
              >
                {extendedServices.map((service, index) => (
                  <ServiceCard key={index} service={service} />
                ))}
              </div>
            </div>
          </div>
        )}

      </div>
    </MotionSection>
  );
};

export default Services;
