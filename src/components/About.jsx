import React from 'react';
import MotionSection from './MotionSection';
import aboutImage from '../assets/images/about.jpeg';
import missionBg from '../assets/images/mission_bg.png';
import visionBg from '../assets/images/vision_bg.png';
import vettingBg from '../assets/images/vetting_bg.png';
import complianceBg from '../assets/images/compliance_bg.png';
import safetyBg from '../assets/images/safety_bg.png';
import healthSafetyPolicyBg from '../assets/images/health_safety_policy_bg.png';
import equalOppBg from '../assets/images/equal_opp_bg.png';
import slaveryPrevBg from '../assets/images/slavery_prev_bg.png';
import environmentalPolicyBg from '../assets/images/environmental_policy_bg.png';

const About = () => {
  return (
    <div className="font-sans">
      {/* About Section */}
      <MotionSection as="section" className="py-20 bg-white" id="about">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          {/* Header Section */}
          <div className="mb-14 text-center lg:text-left">
            <span className="inline-block px-4 py-1.5 rounded-full bg-brand-primary/10 text-brand-primary text-sm font-medium tracking-wide mb-6">
              Our Story
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-brand-dark max-w-4xl lg:mx-0 mx-auto tracking-tight leading-tight font-outfit">
              About Bluegrid Utilities
            </h2>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Image */}
            <div className="w-full h-[320px] md:h-[450px] lg:h-[480px] max-w-lg mx-auto lg:max-w-none">
              <img
                src={aboutImage}
                alt="About Bluegrid Utilities"
                className="w-full h-full object-cover rounded-[2.5rem] shadow-xl"
              />
            </div>

            {/* Right: Content */}
            <div className="flex flex-col text-center lg:text-left justify-center">
              <p className="text-brand-dark text-xl font-bold leading-relaxed mb-6 font-outfit">
                BlueGrid Utilities is the trading name of Bluegrid Technology Ltd, a UK-registered company focused on supporting utility and infrastructure operations.
              </p>
              <p className="text-gray-500 text-base leading-relaxed mb-6">
                We work with project partners, contractors, and workforce teams to support the delivery of essential services across water, utilities, telecoms, and infrastructure sectors.
              </p>
              <div className="p-6 rounded-2xl bg-brand-primary/5 border border-brand-primary/10 mt-2 text-left">
                <p className="text-brand-primary font-bold text-xs tracking-widest uppercase mb-2 font-outfit">
                  Our Approach
                </p>
                <p className="text-brand-dark font-medium text-base leading-relaxed flex items-start gap-3">
                  <span className="material-symbols-outlined text-brand-primary shrink-0 mt-0.5">verified</span>
                  Our approach is built on compliance, reliability, workforce readiness, and operational coordination.
                </p>
              </div>
            </div>
          </div>
        </div>
      </MotionSection>

      {/* Mission & Vision Sections */}
      <MotionSection as="section" className="py-20 bg-slate-50 border-y border-slate-100">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Mission Card */}
            <div 
              id="mission" 
              className="group relative rounded-3xl p-8 lg:p-10 shadow-lg hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-500 overflow-hidden flex flex-col items-start justify-end min-h-[320px] scroll-mt-28 border border-slate-100/10"
              style={{ maskImage: 'radial-gradient(white, black)', WebkitMaskImage: '-webkit-radial-gradient(white, black)' }}
            >
              {/* Background Image */}
              <img 
                src={missionBg} 
                alt="Our Mission background" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                loading="lazy"
              />
              {/* Neutral Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-black/20 group-hover:from-black/95 group-hover:via-black/65 group-hover:to-black/25 transition-all duration-500" />
              
              {/* Content */}
              <div className="relative z-10 flex flex-col items-start w-full">
                <div className="w-12 h-12 rounded-2xl bg-white/15 text-white border border-white/20 backdrop-blur-md flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-2xl font-bold">track_changes</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 font-outfit">Our Mission</h3>
                <p className="text-slate-100 text-sm sm:text-base leading-relaxed">
                  To support utility and infrastructure projects across the UK by providing highly trained, fully vetted, and reliable workforce coordination solutions that ensure absolute compliance, safety, and seamless operational delivery.
                </p>
              </div>
            </div>

            {/* Vision Card */}
            <div 
              id="vision" 
              className="group relative rounded-3xl p-8 lg:p-10 shadow-lg hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-500 overflow-hidden flex flex-col items-start justify-end min-h-[320px] scroll-mt-28 border border-slate-100/10"
              style={{ maskImage: 'radial-gradient(white, black)', WebkitMaskImage: '-webkit-radial-gradient(white, black)' }}
            >
              {/* Background Image */}
              <img 
                src={visionBg} 
                alt="Our Vision background" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                loading="lazy"
              />
              {/* Neutral Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-black/20 group-hover:from-black/95 group-hover:via-black/65 group-hover:to-black/25 transition-all duration-500" />
              
              {/* Content */}
              <div className="relative z-10 flex flex-col items-start w-full">
                <div className="w-12 h-12 rounded-2xl bg-white/15 text-white border border-white/20 backdrop-blur-md flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-2xl font-bold">visibility</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 font-outfit">Our Vision</h3>
                <p className="text-slate-100 text-sm sm:text-base leading-relaxed">
                  To be the UK's most trusted workforce coordination partner for utility and infrastructure projects, recognized for our compliance-first methodology, rapid mobilization capabilities, and operational coordination standard.
                </p>
              </div>
            </div>

          </div>
        </div>
      </MotionSection>

      {/* Our History Section */}
      <MotionSection as="section" className="py-20 bg-white scroll-mt-28" id="history">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-brand-primary/10 text-brand-primary text-sm font-medium tracking-wide mb-4">
              Our Timeline
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark tracking-tight mb-4 font-outfit">
              Our History
            </h2>
            <p className="text-gray-600 text-base leading-relaxed">
              Established to address the growing demand for compliant, scalable field workforce solutions within the UK utilities sector.
            </p>
          </div>

          {/* Timeline Layout */}
          <div className="relative border-l-2 border-slate-100 max-w-3xl mx-auto pl-8 space-y-12">
            {[
              {
                title: "Foundation & Vision",
                desc: "BlueGrid Utilities was founded with a dedicated focus on utility and infrastructure coordination. We set out to streamline onboarding, compliance checks, and team coordination for large utilities grids."
              },
              {
                title: "Sector Expansion",
                desc: "We expanded our field coordination support to cover clean water meter deployments, smart energy meter rollouts, and telecoms infrastructure support, establishing a solid network of field operatives."
              },
              {
                title: "Compliance-First Systems",
                desc: "We implemented integrated digital onboarding, compliance tracking, and training coordination systems, ensuring that 100% of our network meets strict UK right-to-work and utility safety certifications prior to deployment."
              }
            ].map((step, idx) => (
              <div key={idx} className="relative">
                {/* Bullet node */}
                <span className="absolute -left-[41px] top-1.5 w-6 h-6 rounded-full border-4 border-white bg-brand-primary shadow-sm" />
                <h3 className="text-xl font-bold text-brand-dark mb-2 font-outfit">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </MotionSection>

      {/* Accreditation & Awards Section */}
      <MotionSection as="section" className="py-20 bg-[#f8fafc] border-t border-slate-100 scroll-mt-28" id="accreditations">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-brand-primary/10 text-brand-primary text-sm font-medium tracking-wide mb-4">
              Quality Standards
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark tracking-tight mb-4 font-outfit">
              Accreditation & Standards
            </h2>
            <p className="text-gray-600 text-base leading-relaxed">
              We operate under strict adherence to national and industry compliance standards to ensure safety, reliability, and top-tier operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                title: "EUSR & Industry Vetting",
                desc: "We enforce strict checks confirming that field operatives hold valid EUSR (Energy & Utility Skills Register) records, CSCS cards, or specific sector safety certifications.",
                icon: "shield",
                bg: vettingBg
              },
              {
                title: "Right-to-Work Compliance",
                desc: "100% compliant onboarding verifying identity, qualifications, reference audits, right-to-work documentation, and background suitability screening.",
                icon: "verified_user",
                bg: complianceBg
              },
              {
                title: "Health & Safety Systems",
                desc: "Continuous training management and compliance verification structures built to align with UK utility operations safety standards.",
                icon: "health_and_safety",
                bg: safetyBg
              }
            ].map((item, idx) => (
              <div 
                key={idx} 
                className="group relative rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-500 overflow-hidden flex flex-col items-start justify-end min-h-[300px] border border-slate-100/10"
                style={{ maskImage: 'radial-gradient(white, black)', WebkitMaskImage: '-webkit-radial-gradient(white, black)' }}
              >
                {/* Background Image */}
                <img 
                  src={item.bg} 
                  alt={item.title} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  loading="lazy"
                />
                {/* Neutral Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-black/20 group-hover:from-black/95 group-hover:via-black/65 group-hover:to-black/25 transition-all duration-500" />
                
                {/* Content */}
                <div className="relative z-10 flex flex-col items-start w-full">
                  <div className="w-12 h-12 rounded-2xl bg-white/15 text-white border border-white/20 backdrop-blur-md flex items-center justify-center mb-6">
                    <span className="material-symbols-outlined text-2xl">{item.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 font-outfit">{item.title}</h3>
                  <p className="text-slate-100 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </MotionSection>

      {/* Policies Section */}
      <MotionSection as="section" className="py-20 bg-white border-t border-slate-100 scroll-mt-28" id="policies">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-brand-primary/10 text-brand-primary text-sm font-medium tracking-wide mb-4">
              Governance
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark tracking-tight mb-4 font-outfit">
              Our Policies
            </h2>
            <p className="text-gray-600 text-base leading-relaxed">
              We operate under robust ethical and professional policies to foster safety, sustainability, and equal opportunity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Health & Safety Policy",
                desc: "Strict adherence to a zero-harm environment on all operational sites through regular toolbox talks and compliance oversight.",
                icon: "gavel",
                bg: healthSafetyPolicyBg
              },
              {
                title: "Equal Opportunities",
                desc: "Promoting diversity, inclusion, and equal opportunity in workforce recruitment and deployment without exception.",
                icon: "group",
                bg: equalOppBg
              },
              {
                title: "Modern Slavery Prevention",
                desc: "Strict vetting policies, fair payment assurance, and compliance checks to prevent modern slavery across our supply chain.",
                icon: "policy",
                bg: slaveryPrevBg
              },
              {
                title: "Environmental Policy",
                desc: "Optimizing regional deployment and coordinating local support staff to minimize carbon footprints and travel impacts.",
                icon: "eco",
                bg: environmentalPolicyBg
              }
            ].map((item, idx) => (
              <div 
                key={idx} 
                className="group relative rounded-3xl p-6 shadow-lg hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-500 overflow-hidden flex flex-col items-start justify-end min-h-[280px] border border-slate-100/10"
                style={{ maskImage: 'radial-gradient(white, black)', WebkitMaskImage: '-webkit-radial-gradient(white, black)' }}
              >
                {/* Background Image */}
                <img 
                  src={item.bg} 
                  alt={item.title} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  loading="lazy"
                />
                {/* Neutral Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-black/20 group-hover:from-black/95 group-hover:via-black/65 group-hover:to-black/25 transition-all duration-500" />
                
                {/* Content */}
                <div className="relative z-10 flex flex-col items-start w-full">
                  <div className="w-10 h-10 rounded-xl bg-white/15 text-white border border-white/20 backdrop-blur-md flex items-center justify-center mb-5">
                    <span className="material-symbols-outlined text-xl">{item.icon}</span>
                  </div>
                  <h3 className="text-base font-bold text-white mb-2 font-outfit">{item.title}</h3>
                  <p className="text-slate-100 text-xs leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </MotionSection>
    </div>
  );
};

export default About;
