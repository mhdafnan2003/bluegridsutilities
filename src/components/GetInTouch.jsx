import React from 'react';
import { Link } from 'react-router-dom';
import MotionSection from './MotionSection';
import utilityGridWork from '../assets/images/utility_grid_work.png';

const GetInTouch = () => {
  return (
    <MotionSection 
      as="section" 
      className="py-20 bg-white font-sans" 
      id="get-in-touch"
    >
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-10">
        <div className="bg-white rounded-none overflow-hidden shadow-2xl border border-slate-100 grid grid-cols-1 md:grid-cols-2 items-stretch min-h-[480px]">
          
          {/* Left Side: Modern Image (Flush to the card edges) */}
          <div className="relative w-full h-[320px] md:h-auto overflow-hidden bg-slate-100">
            <img 
              src={utilityGridWork} 
              alt="Driven by experience, committed to excellence" 
              className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out"
              loading="lazy"
            />
          </div>

          {/* Right Side: Simple Text Content */}
          <div className="p-8 sm:p-12 md:p-16 lg:p-20 flex flex-col justify-center items-start text-left space-y-6">
            
            {/* Label */}
            <span className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#005f9e] font-outfit">
              <span className="w-1.5 h-1.5 rounded-none bg-[#005f9e]" />
              Work With Us
            </span>

            {/* Heading */}
            <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl text-[#0b132b] leading-[1.2] font-normal tracking-tight">
              Driven by experience,<br className="hidden sm:inline" />
              committed to excellence
            </h2>

            {/* Description */}
            <p className="text-gray-500 text-sm sm:text-base leading-relaxed max-w-md font-sans font-medium">
              Our goal each day is to provide the level of outstanding service we once wished we'd found.
            </p>

            {/* Action Button */}
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center px-6 py-3 bg-[#284cb5] hover:bg-[#1b3480] text-white font-semibold text-sm tracking-wide rounded-none transition-all duration-300 shadow-sm hover:shadow-md active:scale-95 font-sans cursor-pointer"
            >
              GET IN TOUCH
            </Link>

          </div>

        </div>
      </div>
    </MotionSection>
  );
};

export default GetInTouch;

