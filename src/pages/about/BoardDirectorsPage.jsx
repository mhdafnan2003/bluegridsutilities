import React from 'react';
import MotionSection from '../../components/MotionSection';
import Management from '../../components/Management';

const BoardDirectorsPage = () => {
  return (
    <div className="font-sans">
      <MotionSection 
        as="section" 
        className="pb-16 md:pb-24 bg-white" 
        id="board-directors"
        initial="hidden"
        animate="visible"
        whileInView={undefined}
        viewport={undefined}
      >
        <div className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-12">
          
          {/* Neat Minimal Text Title Section */}
          <div className="pt-8 pb-6 text-center max-w-3xl mx-auto">
            <span className="inline-block px-3.5 py-1.5 rounded-none bg-[#005f9e]/10 text-[#005f9e] text-xs font-black tracking-widest mb-3 font-outfit border border-[#005f9e]/20">
              Leadership & Governance
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0f3a5e] tracking-tight leading-tight font-outfit">
              Board & Directors
            </h1>
            <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
              Experienced operational leadership driving workforce coordination, compliance standards, infrastructure deployment, and project delivery across UK utility operations.
            </p>
          </div>

          {/* Render Management Component */}
          <Management />

        </div>
      </MotionSection>
    </div>
  );
};

export default BoardDirectorsPage;
