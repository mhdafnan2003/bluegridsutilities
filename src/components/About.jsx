import React from 'react';
import MotionSection from './MotionSection';
import aboutImage from '../assets/images/about.jpeg';

const About = () => {
  return (
    <MotionSection as="section" className="py-24 bg-white font-sans" id="about">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">

        {/* Header Section */}
        <div className="mb-14 text-center lg:text-left">
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-primary/10 text-brand-primary text-sm font-medium tracking-wide mb-6">
            Our Story
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a202c] max-w-4xl lg:mx-0 mx-auto tracking-tight leading-tight">
            About Bluegrid Utilities
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* Left: Image */}
          <div className="w-full h-[320px] md:h-[450px] lg:h-[580px] max-w-lg mx-auto lg:max-w-none">
            <img
              src={aboutImage}
              alt="Our Story Structure"
              className="w-full h-full object-cover rounded-2xl shadow-xl"
            />
          </div>

          {/* Right: Content */}
          <div className="flex flex-col text-center lg:text-left">
            <p className="text-gray-500 text-lg leading-relaxed mb-8">
              BlueGrid Utilities is the trading name of Bluegrid Technology Ltd, a UK-registered company focused on supporting utility and infrastructure operations. We work with project partners, contractors, and workforce teams to support the delivery of essential services across water, utilities, telecoms, and infrastructure sectors.
            </p>

            <div className="flex flex-col">

              {/* Item 1 */}
              <div className="flex items-start gap-6 py-8 border-b border-gray-100">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-primary shrink-0 mt-1">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                <div>
                  <h3 className="text-2xl font-bold text-[#1a202c] mb-2 tracking-tight">Compliance Focused</h3>
                  <p className="text-gray-500 leading-relaxed">
                    We prioritize safety and regulatory adherence, ensuring all workforce operations meet strict industry standards and verifications.
                  </p>
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex items-start gap-6 py-8 border-b border-gray-100">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-primary shrink-0 mt-1">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <path d="M22 4L12 14.01l-3-3" />
                </svg>
                <div>
                  <h3 className="text-2xl font-bold text-[#1a202c] mb-2 tracking-tight">Reliability</h3>
                  <p className="text-gray-500 leading-relaxed">
                    Dependable service delivery that keeps critical infrastructure and utility projects running smoothly, efficiently, and exactly on schedule.
                  </p>
                </div>
              </div>

              {/* Item 3 */}
              <div className="flex items-start gap-6 py-8">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-primary shrink-0 mt-1">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
                <div>
                  <h3 className="text-2xl font-bold text-[#1a202c] mb-2 tracking-tight">Workforce Readiness</h3>
                  <p className="text-gray-500 leading-relaxed">
                    Coordinated, fully-prepared teams ready to deploy, streamlining operational coordination for maximum on-site efficiency.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </MotionSection>
  );
};

export default About;
