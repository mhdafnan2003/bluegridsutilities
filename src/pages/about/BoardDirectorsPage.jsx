import React from 'react';
import MotionSection from '../../components/MotionSection';
import Management from '../../components/Management';
import heroThreeImg from '../../assets/images/updated/hero_blue_three.png';

import AboutBanner from '../../components/AboutBanner';

const BoardDirectorsPage = () => {
  return (
    <div className="font-sans">
      <MotionSection 
        as="section" 
        className="pb-16 md:pb-24 bg-white" 
        id="board-directors"
      >
        <div className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-12">
          
          {/* Top Page Title Banner */}
          <AboutBanner 
            badgeText="LEADERSHIP & GOVERNANCE"
            title="ON BOARD & DIRECTORS"
            description="Experienced operational leadership driving workforce coordination, compliance standards, infrastructure deployment, and project delivery across UK utility operations."
            bgImage={heroThreeImg}
          />

          {/* Render Management Component */}
          <Management />

        </div>
      </MotionSection>
    </div>
  );
};

export default BoardDirectorsPage;
