import React from 'react';
import { Link } from 'react-router-dom';
import MotionSection from '../components/MotionSection';
import sustainabilityBannerImg from '../assets/images/sustainability_banner.png';
import environmentalPolicyBg from '../assets/images/environmental_policy_bg.png';
import complianceImg from '../assets/images/Workforce onboarding and compliance verification.jpg';
import workersImg from '../assets/images/uk_utility_workers_site.png';
import PartnerLogos from '../components/PartnerLogos';

const SustainabilityPage = () => {
  return (
    <div className="font-sans">
      <MotionSection 
        as="section" 
        className="pb-20 md:pb-32 bg-white" 
        id="sustainability-page"
        initial="hidden"
        animate="visible"
        whileInView={undefined}
        viewport={undefined}
      >
        <div className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-12">
          
          {/* Main Sustainability Hero Banner */}
          <div className="relative rounded-none overflow-hidden border border-slate-200 mb-24 shadow-2xl min-h-[480px] sm:min-h-[540px] lg:min-h-[580px] flex items-center bg-slate-900 mt-6 md:mt-10">
            <img 
              src={sustainabilityBannerImg} 
              alt="Responsible Infrastructure Delivery" 
              className="absolute inset-0 w-full h-full object-cover brightness-90"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-transparent z-0" />
            
            {/* Text Box Container - Neutral Dark Overlay, NO BLUE TINT */}
            <div className="relative z-10 p-6 sm:p-10 md:p-12 max-w-4xl text-left text-white bg-slate-950/80 backdrop-blur-md border border-white/20 shadow-2xl m-6 sm:m-10 lg:m-12">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="inline-block px-3.5 py-1.5 rounded-none bg-[#0066ff] text-white text-[11px] font-bold tracking-widest font-outfit uppercase border border-white/20 shadow-sm">
                  Sustainability & ESG Strategy
                </span>
                <span className="text-[#60a5fa] font-bold text-xs tracking-widest font-outfit uppercase flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#60a5fa]" />
                  Responsible Growth
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5 tracking-tight font-outfit leading-tight">
                Responsible Infrastructure Delivery
              </h1>

              <blockquote className="text-base sm:text-lg md:text-xl font-bold text-slate-100 mb-5 tracking-tight font-outfit leading-snug border-l-4 border-[#0066ff] pl-4 sm:pl-5 py-2 bg-white/5 rounded-none">
                "Bluegrid Utilities aims to grow responsibly by reducing waste, protecting the environment, supporting local employment and maintaining high ethical standards throughout its operations and supply chain."
              </blockquote>
            </div>
          </div>

          {/* Environmental, Social, and Governance Priorities Cards Stack */}
          <div className="space-y-16 mb-24 text-left">
            
            {/* Section Title */}
            <div>
              <span className="inline-block px-3.5 py-1.5 rounded-none bg-[#005f9e]/10 text-[#005f9e] border border-[#005f9e]/20 text-xs font-black tracking-widest font-outfit uppercase mb-3">
                Operational Framework
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0f3a5e] tracking-tight font-outfit leading-tight">
                ESG Core Priorities
              </h2>
            </div>

            {/* 3 Grid Component Cards: Environmental, Social, Governance */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              {/* Card 1: Environmental Priorities */}
              <div className="bg-[#f4f8fc] border border-slate-200/90 p-8 sm:p-10 text-left shadow-xl border-t-4 border-t-emerald-600 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 pb-4 mb-6 border-b border-slate-200">
                    <span className="w-12 h-12 rounded-none bg-emerald-500/10 text-emerald-600 flex items-center justify-center border border-emerald-500/20 shrink-0 font-bold">
                      <span className="material-symbols-outlined text-2xl">eco</span>
                    </span>
                    <div>
                      <span className="text-[10px] font-black tracking-widest text-emerald-600 uppercase font-outfit block">Environmental</span>
                      <h3 className="text-xl font-bold text-[#0f3a5e] uppercase tracking-wider font-outfit">
                        Environmental Priorities
                      </h3>
                    </div>
                  </div>

                  <ul className="space-y-4">
                    {[
                      "Reduce unnecessary vehicle movements and idling through better planning.",
                      "Segregate and dispose of waste responsibly.",
                      "Prevent pollution and protect watercourses and drainage.",
                      "Use materials efficiently and minimise rework.",
                      "Consider lower-carbon equipment and fleet options as the business develops."
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                        <span className="material-symbols-outlined text-emerald-600 text-lg shrink-0 mt-0.5">check_circle</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card 2: Social Priorities */}
              <div className="bg-[#f4f8fc] border border-slate-200/90 p-8 sm:p-10 text-left shadow-xl border-t-4 border-t-[#005f9e] flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 pb-4 mb-6 border-b border-slate-200">
                    <span className="w-12 h-12 rounded-none bg-[#005f9e]/10 text-[#005f9e] flex items-center justify-center border border-[#005f9e]/20 shrink-0 font-bold">
                      <span className="material-symbols-outlined text-2xl">groups</span>
                    </span>
                    <div>
                      <span className="text-[10px] font-black tracking-widest text-[#005f9e] uppercase font-outfit block">Social</span>
                      <h3 className="text-xl font-bold text-[#0f3a5e] uppercase tracking-wider font-outfit">
                        Social Priorities
                      </h3>
                    </div>
                  </div>

                  <ul className="space-y-4">
                    {[
                      "Create training and career opportunities in local communities.",
                      "Promote fair recruitment and equal opportunity.",
                      "Support workforce wellbeing and respectful workplaces.",
                      "Maintain responsible labour and right-to-work practices."
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                        <span className="material-symbols-outlined text-[#005f9e] text-lg shrink-0 mt-0.5">check_circle</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card 3: Governance Priorities */}
              <div className="bg-[#f4f8fc] border border-slate-200/90 p-8 sm:p-10 text-left shadow-xl border-t-4 border-t-[#0f3a5e] flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 pb-4 mb-6 border-b border-slate-200">
                    <span className="w-12 h-12 rounded-none bg-[#0f3a5e]/10 text-[#0f3a5e] flex items-center justify-center border border-[#0f3a5e]/20 shrink-0 font-bold">
                      <span className="material-symbols-outlined text-2xl">gavel</span>
                    </span>
                    <div>
                      <span className="text-[10px] font-black tracking-widest text-[#0f3a5e] uppercase font-outfit block">Governance</span>
                      <h3 className="text-xl font-bold text-[#0f3a5e] uppercase tracking-wider font-outfit">
                        Governance Priorities
                      </h3>
                    </div>
                  </div>

                  <ul className="space-y-4">
                    {[
                      "Anti-bribery and conflicts-of-interest controls.",
                      "Data protection and confidentiality.",
                      "Supplier due diligence.",
                      "Transparent reporting and document control."
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                        <span className="material-symbols-outlined text-[#0f3a5e] text-lg shrink-0 mt-0.5">check_circle</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>
          </div>

          {/* Responsible Reporting Statement (No Unverified Claims) */}
          <div className="bg-slate-900 text-white p-8 sm:p-12 border border-slate-800 text-left mb-24 shadow-2xl border-l-4 border-l-[#0066ff]">
            <div className="flex items-center gap-3 mb-3">
              <span className="material-symbols-outlined text-[#60a5fa] text-2xl">verified_user</span>
              <h4 className="text-xl font-bold font-outfit text-white uppercase tracking-wide">
                Transparent & Evidence-Based Reporting
              </h4>
            </div>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-medium max-w-4xl">
              Bluegrid Utilities prioritises practical risk reduction, responsible mobilisation, and transparent reporting. We avoid publishing unverified net-zero, carbon-neutral, or formal ESG-rating claims until fully measured datasets and formal baseline reporting periods are established.
            </p>
          </div>

          {/* Partner Logos Component */}
          <div className="w-full mt-16 pt-8 border-t border-slate-200">
            <PartnerLogos />
          </div>

          {/* Action Bar & CTA Button */}
          <div className="flex flex-wrap items-center justify-between gap-6 bg-[#0f3a5e] text-white p-8 sm:p-10 shadow-xl text-left border-l-4 border-l-[#0066ff] mt-16">
            <div>
              <h4 className="text-xl font-bold font-outfit text-white uppercase">
                Want to Learn More About Our Responsible Operational Practices?
              </h4>
              <p className="text-slate-300 text-xs sm:text-sm font-medium mt-1">
                Our management team is ready to discuss our environmental, social, and supply-chain governance controls.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 shrink-0">
              <Link 
                to="/contact?subject=Sustainability%20Enquiry"
                className="inline-flex items-center justify-center px-8 py-3.5 bg-[#0066ff] hover:bg-white hover:text-[#0f3a5e] text-white font-bold uppercase text-xs tracking-widest transition-all duration-300 shadow-lg active:scale-95 font-outfit cursor-pointer border border-[#0066ff]"
              >
                Contact Our Team
              </Link>
            </div>
          </div>

        </div>
      </MotionSection>
    </div>
  );
};

export default SustainabilityPage;
