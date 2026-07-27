import React from 'react';
import MotionSection from '../../components/MotionSection';
import healthSafetyPolicyBg from '../../assets/images/health_safety_policy_bg.png';
import equalOppBg from '../../assets/images/equal_opp_bg.png';
import slaveryPrevBg from '../../assets/images/slavery_prev_bg.png';
import environmentalPolicyBg from '../../assets/images/environmental_policy_bg.png';
import heroOneImg from '../../assets/images/updated/hero_blue_one.png';

import AboutBanner from '../../components/AboutBanner';

const OurPoliciesPage = () => {
  return (
    <div className="font-sans">
      <MotionSection 
        as="section" 
        className="pb-16 md:pb-24 bg-white" 
        id="our-policies"
      >
        <div className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-12">
          
          {/* Top Page Title Banner */}
          <AboutBanner 
            badgeText="GOVERNANCE & RESPONSIBILITY"
            title="OUR CORE POLICIES"
            description="Operating under robust ethical and professional policies to foster safety, sustainability, and equal opportunity across all contracts."
            bgImage={heroOneImg}
          />

          {/* 4 Policy Image Banner Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
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
                className="bg-white border border-slate-200 rounded-none shadow-md hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden text-left group"
              >
                <div className="relative h-48 overflow-hidden bg-slate-900 shrink-0">
                  <img 
                    src={item.bg} 
                    alt={item.title} 
                    className="w-full h-full object-cover brightness-95 transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f3a5e]/80 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 flex items-center gap-2">
                    <span className="material-symbols-outlined text-white text-base">{item.icon}</span>
                    <span className="text-white text-xs font-bold uppercase tracking-wider font-outfit">
                      {item.title}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex-grow flex flex-col justify-between">
                  <p className="text-slate-600 text-xs leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </MotionSection>
    </div>
  );
};

export default OurPoliciesPage;
