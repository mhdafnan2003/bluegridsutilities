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
            <span className="flex items-center gap-2 text-[10px] font-black tracking-widest text-[#005f9e] font-outfit uppercase">
              <span className="w-1.5 h-1.5 rounded-none bg-[#005f9e]" />
              Get In Touch
            </span>

            {/* Heading */}
            <h2 className="text-h2 md:text-h2-lg font-outfit text-[#0f3a5e] leading-[1.2] font-bold tracking-tight">
              Discuss a Project
            </h2>

            {/* Description */}
            <p className="text-body md:text-body-lg text-[#1f2937] leading-relaxed max-w-md font-sans font-medium">
              For business and project enquiries, contact Bluegrid Utilities through the approved Company enquiry route. Recruitment enquiries should use the separate careers contact route.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link 
                to="/contact" 
                className="text-nav inline-flex items-center justify-center px-6 py-3.5 bg-[#005f9e] hover:bg-[#0f3a5e] text-white font-bold tracking-wide uppercase font-outfit transition-all duration-300 shadow-md hover:shadow-lg active:scale-95 cursor-pointer"
              >
                Contact Bluegrid
              </Link>
              <Link 
                to="/careers" 
                className="text-nav inline-flex items-center justify-center px-6 py-3.5 bg-slate-100 hover:bg-slate-200 text-[#0f3a5e] border border-slate-300 font-bold tracking-wide uppercase font-outfit transition-all duration-300"
              >
                Careers
              </Link>
            </div>

          </div>

        </div>
      </div>
    </MotionSection>
  );
};

export default GetInTouch;

