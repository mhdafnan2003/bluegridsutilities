import React from 'react';
import MotionSection from '../../components/MotionSection';
import Management from '../../components/Management';
import heroThreeImg from '../../assets/images/updated/hero_blue_three.png';

const BoardDirectorsPage = () => {
  return (
    <div className="font-sans">
      <MotionSection 
        as="section" 
        className="pb-16 md:pb-24 bg-white" 
        id="board-directors"
      >
        <div className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-12">
          
          {/* Top Page Title Banner (Title ON Banner Image) */}
          <div className="relative rounded-none overflow-hidden mb-12 border border-slate-200 shadow-xl min-h-[300px] sm:min-h-[360px] flex items-center">
            <img 
              src={heroThreeImg} 
              alt="Bluegrid Utilities Leadership Banner" 
              className="absolute inset-0 w-full h-full object-cover object-center brightness-95"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0f3a5e]/85 via-[#0f3a5e]/50 to-transparent" />

            <div className="relative z-10 p-8 sm:p-12 md:p-16 max-w-3xl text-left text-white">
              <span className="inline-block px-4 py-1.5 rounded-none bg-[#0066ff] text-white text-xs font-bold uppercase tracking-widest mb-4 font-outfit shadow-md border border-white/20">
                LEADERSHIP & GOVERNANCE
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight uppercase leading-tight mb-4 font-outfit drop-shadow-sm">
                ON BOARD & DIRECTORS
              </h1>
              <p className="text-slate-100 text-base md:text-lg leading-relaxed font-medium max-w-2xl drop-shadow-sm">
                Experienced operational leadership driving workforce coordination, compliance standards, infrastructure deployment, and project delivery across UK utility operations.
              </p>
            </div>
          </div>

          {/* Render Management Component */}
          <Management />

        </div>
      </MotionSection>
    </div>
  );
};

export default BoardDirectorsPage;
