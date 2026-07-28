import React from 'react';
import { Link } from 'react-router-dom';
import MotionSection from '../../components/MotionSection';
import aboutImage from '../../assets/images/about.jpeg';
import heroTwoImg from '../../assets/images/updated/hero_blue_two.png';
import workersImg from '../../assets/images/uk_utility_workers_site.png';
import AboutBanner from '../../components/AboutBanner';

import imgManagement from '../../assets/images/Project coordination and reporting.jpg';
import imgWorkforce from '../../assets/images/uk_utility_workers_site.png';
import imgWorkmanship from '../../assets/images/utility_grid_work.png';
import imgPublicSector from '../../assets/images/Urban Skyline View.jpeg';
import imgCompliance from '../../assets/images/Workforce onboarding and compliance verification.jpg';
import imgSatisfaction from '../../assets/images/water meter suoort bluegrids.jpeg';

import imgInfrastructure from '../../assets/images/infrastructure.jpeg';
import imgProjectCoord from '../../assets/images/projectcordination.jpeg';
import imgComplianceBg from '../../assets/images/combliance.jpeg';

const corePillars = [
  {
    id: "management",
    badge: "OPERATIONAL LEADERSHIP",
    title: "Experienced Management",
    desc: "Decades of leadership in UK utility infrastructure, ensuring seamless project scheduling, risk mitigation, and tier-1 alignment.",
    bgImage: imgManagement
  },
  {
    id: "workforce",
    badge: "VERIFIED FIELD TEAMS",
    title: "Skilled Workforce",
    desc: "Fully trained and vetted field operatives supporting clean water metering, civil works, excavation, and reinstatement.",
    bgImage: imgWorkforce
  },
  {
    id: "workmanship",
    badge: "UNCOMPROMISING PRECISION",
    title: "Quality Workmanship",
    desc: "Rigorous quality assurance with precision civil engineering, clean site reinstatement, and zero-defect site handovers.",
    bgImage: imgWorkmanship
  },
  {
    id: "public-sector",
    badge: "TRUSTED MUNICIPAL PARTNERS",
    title: "Public Sector Experience",
    desc: "Collaborating with UK local authorities and water networks with StreetWorks (NRSWA) compliance and minimal community disruption.",
    bgImage: imgPublicSector
  },
  {
    id: "compliance",
    badge: "100% REGULATORY ASSURANCE",
    title: "Rigorous Compliance",
    desc: "Zero-harm safety culture with mandatory pre-deployment vetting, EUSR checks, and strict H&S policy enforcement.",
    bgImage: imgCompliance
  },
  {
    id: "satisfaction",
    badge: "DEDICATED PARTNER RELATIONS",
    title: "Customer Satisfaction",
    desc: "Customer-centric service delivery with high appointment fulfillment rates and rapid resolution across all utility contracts.",
    bgImage: imgSatisfaction
  }
];

const AboutCompanyPage = () => {
  return (
    <div className="font-sans">
      <MotionSection 
        as="section" 
        className="pb-16 md:pb-24 bg-white" 
        id="about-company"
        initial="hidden"
        animate="visible"
        whileInView={undefined}
        viewport={undefined}
      >
        <div className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-12">
          
          {/* Top Hero Banner Component */}
          <AboutBanner 
            badgeText="About BlueGrid Utilities"
            title="Company Profile & Overview"
            description="UK-based utility infrastructure contractor delivering safe, reliable and high-quality services across the water utility sector."
            bgImage={heroTwoImg}
          />

          {/* Main Grid: Story + Profile Card */}
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-stretch mb-20">
            
            {/* Left Narrative */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-8">
              <div className="w-full h-72 sm:h-80 md:h-96 relative overflow-hidden rounded-none border border-slate-200 shadow-lg">
                <img
                  src={aboutImage}
                  alt="Bluegrid Utilities Operations"
                  className="w-full h-full object-cover brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f3a5e]/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 bg-[#005f9e] text-white px-4 py-2 text-xs font-bold tracking-wider rounded-none border border-white/20 font-outfit">
                  Specialist Utility Infrastructure
                </div>
              </div>

              <div className="space-y-4 text-left">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#0f3a5e] tracking-tight font-outfit">
                  Who We Are
                </h2>
                <p className="text-slate-700 text-base sm:text-lg font-semibold leading-relaxed">
                  Bluegrid Utilities is a UK-based utility infrastructure contractor delivering safe, reliable and high-quality services across the water utility sector.
                </p>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  Our specialist teams support utility providers, principal contractors and infrastructure partners through the delivery of smart water metering, excavation, reinstatement and associated civil engineering works.
                </p>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  With experienced management, qualified field teams and a commitment to operational excellence, Bluegrid Utilities aims to become one of the UK’s most trusted utility infrastructure delivery partners.
                </p>
              </div>
            </div>

            {/* Right: Company Profile Boxy Card */}
            <div className="lg:col-span-5 flex flex-col">
              <div className="bg-[#0f3a5e] text-white p-8 sm:p-10 rounded-none border border-[#0f3a5e] shadow-xl flex flex-col justify-between h-full relative overflow-hidden">
                <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-[#005f9e]/30 rounded-none blur-3xl pointer-events-none" />

                <div className="relative z-10 space-y-6">
                  <div className="border-b border-white/15 pb-4">
                    <span className="text-[#0066ff] font-bold text-xs tracking-widest block mb-1 font-outfit">
                      Official Details
                    </span>
                    <h3 className="text-2xl font-bold tracking-tight text-white font-outfit">
                      Company Profile
                    </h3>
                  </div>

                  <div className="space-y-4 text-sm">
                    <div className="bg-white/5 border border-white/10 p-4 rounded-none">
                      <p className="text-[10px] font-bold text-[#60a5fa] tracking-widest mb-1 font-outfit">Company Name</p>
                      <p className="text-base font-bold text-white">Bluegrid Utilities</p>
                    </div>

                    <div className="bg-white/5 border border-white/10 p-4 rounded-none">
                      <p className="text-[10px] font-bold text-[#60a5fa] tracking-widest mb-1 font-outfit">Trading Name of</p>
                      <p className="text-base font-bold text-white">Bluegrid Technology Ltd</p>
                    </div>

                    <div className="bg-white/5 border border-white/10 p-4 rounded-none">
                      <p className="text-[10px] font-bold text-[#60a5fa] tracking-widest mb-1 font-outfit">Company Number</p>
                      <p className="text-base font-bold text-white tracking-wider">16442340</p>
                    </div>

                    <div className="bg-white/5 border border-white/10 p-4 rounded-none">
                      <p className="text-[10px] font-bold text-[#60a5fa] tracking-widest mb-1 font-outfit">Registered Office</p>
                      <address className="not-italic text-sm font-semibold text-slate-200 leading-snug">
                        Stuart House<br />
                        St Johns Street<br />
                        Peterborough<br />
                        England, PE1 5DD
                      </address>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-white/15 relative z-10 flex items-center justify-between text-xs font-bold text-slate-300 font-outfit">
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-none bg-[#0066ff]" />
                    Registered in England & Wales
                  </span>
                  <span className="text-[#60a5fa]">UK Utility Contractor</span>
                </div>
              </div>
            </div>

          </div>

          {/* Section Divider */}
          <hr className="border-slate-200 my-16" />

          {/* NEW SECTION 1: Core Operational Foundations Grid (6 Key Pillars) */}
          <div className="mb-20">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="inline-block px-3.5 py-1.5 rounded-none bg-[#005f9e]/10 text-[#005f9e] text-xs font-black tracking-widest mb-3 font-outfit border border-[#005f9e]/20">
                Core Operational Capabilities
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0f3a5e] tracking-tight leading-tight font-outfit">
                Our Core Strengths & Commitments
              </h2>
              <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
                Built on experienced management, certified field operatives, precision workmanship, public sector capability, strict compliance, and total customer satisfaction.
              </p>
            </div>

            {/* 6 Cards Grid with Clean Unshaded Images */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {corePillars.map((pillar) => (
                <div 
                  key={pillar.id}
                  className="relative group h-[340px] sm:h-[360px] rounded-none overflow-hidden shadow-lg hover:shadow-2xl border border-slate-200 transition-all duration-500 flex flex-col justify-end cursor-pointer"
                >
                  {/* Background Image - 100% Full Natural Brightness, No Dark Shade */}
                  <img 
                    src={pillar.bgImage} 
                    alt={pillar.title} 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Floating Bottom Content Card - Keeps Image Unshaded & Clear */}
                  <div className="relative z-10 m-4 bg-[#0f3a5e]/90 backdrop-blur-md p-5 border border-white/20 shadow-xl text-left space-y-2 transition-transform duration-300 group-hover:-translate-y-1">
                    <span className="inline-block text-[10px] font-black text-[#60a5fa] tracking-widest font-outfit uppercase bg-white/10 px-2 py-0.5 border border-white/10">
                      {pillar.badge}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight font-outfit leading-tight group-hover:text-[#60a5fa] transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-slate-200 text-xs leading-relaxed font-medium line-clamp-2">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* NEW SECTION 2: Experienced Management & Skilled Workforce Showcase */}
          <div className="bg-[#0f3a5e] text-white rounded-none p-8 sm:p-12 md:p-16 mb-20 shadow-2xl relative overflow-hidden">
            <div className="absolute -right-20 -top-20 w-96 h-96 bg-[#005f9e]/30 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
              
              {/* Left Text Narrative */}
              <div className="lg:col-span-7 space-y-6 text-left">
                <span className="inline-block px-3.5 py-1 rounded-none bg-[#005f9e]/40 text-[#60a5fa] border border-[#005f9e]/60 text-xs font-black tracking-widest font-outfit">
                  Expert Management & Field Teams
                </span>

                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight font-outfit leading-tight text-white">
                  Driven by Experienced Leadership & Skilled Operatives
                </h2>

                <p className="text-slate-200 text-sm sm:text-base leading-relaxed font-medium">
                  At Bluegrid Utilities, our operational strength lies in combining seasoned utility contract managers with accredited, multi-skilled field teams. From complex urban smart water meter deployments to nationwide infrastructure support, our teams work in harmony with main contractors and local authorities.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="bg-white/5 border border-white/10 p-5 rounded-none">
                    <h4 className="font-bold text-white text-sm font-outfit mb-1">Experienced Management</h4>
                    <p className="text-xs text-slate-300 leading-relaxed font-medium">
                      Proactive project supervision, route optimization, real-time client reporting, and strict SLA fulfillment.
                    </p>
                  </div>

                  <div className="bg-white/5 border border-white/10 p-5 rounded-none">
                    <h4 className="font-bold text-white text-sm font-outfit mb-1">Skilled Workforce</h4>
                    <p className="text-xs text-slate-300 leading-relaxed font-medium">
                      Rigorously vetted operatives holding CSCS, EUSR, and NRSWA credentials ready for immediate site deployment.
                    </p>
                  </div>
                </div>

                <div className="pt-4">
                  <Link 
                    to="/contact" 
                    className="inline-flex items-center gap-3 bg-[#005f9e] hover:bg-[#0066ff] text-white border border-[#60a5fa]/40 hover:border-white transition-all duration-300 px-8 py-4 font-black text-xs sm:text-sm tracking-widest font-outfit shadow-xl active:scale-95 group"
                  >
                    <span>Discuss Your Contract Requirements</span>
                    <span className="transition-transform duration-300 group-hover:translate-x-1.5">➔</span>
                  </Link>
                </div>
              </div>

              {/* Right Feature Image */}
              <div className="lg:col-span-5">
                <div className="relative w-full h-[350px] sm:h-[420px] overflow-hidden rounded-none border border-white/20 shadow-2xl">
                  <img 
                    src={workersImg} 
                    alt="Bluegrid Utilities Skilled Workforce" 
                    className="w-full h-full object-cover brightness-95"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f3a5e]/80 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 bg-[#0f3a5e]/90 backdrop-blur-md p-4 border border-white/20">
                    <p className="text-xs font-bold tracking-widest text-[#60a5fa] font-outfit">Qualified & Compliant</p>
                    <p className="text-sm font-bold text-white mt-1">100% Certified Field Workforce Across the UK</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* NEW SECTION 3: Quality Workmanship, Public Sector & Compliance Showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
            
            {/* Box 1: Quality Workmanship */}
            <div className="relative group h-[340px] sm:h-[360px] rounded-none overflow-hidden shadow-lg hover:shadow-2xl border border-slate-200 transition-all duration-500 flex flex-col justify-end cursor-pointer">
              <img 
                src={imgInfrastructure} 
                alt="Quality Workmanship" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="relative z-10 m-4 bg-[#0f3a5e]/90 backdrop-blur-md p-5 border border-white/20 shadow-xl text-left space-y-2 transition-transform duration-300 group-hover:-translate-y-1">
                <span className="inline-block text-[10px] font-black text-[#60a5fa] tracking-widest font-outfit uppercase bg-white/10 px-2 py-0.5 border border-white/10">
                  EXCELLENCE IN EXECUTION
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight font-outfit leading-tight group-hover:text-[#60a5fa] transition-colors">
                  Quality Workmanship
                </h3>
                <p className="text-slate-200 text-xs leading-relaxed font-medium">
                  Clean execution, precision reinstatement, and zero-defect handovers across all utility contracts.
                </p>
              </div>
            </div>

            {/* Box 2: Public Sector & Municipal Experience */}
            <div className="relative group h-[340px] sm:h-[360px] rounded-none overflow-hidden shadow-lg hover:shadow-2xl border border-slate-200 transition-all duration-500 flex flex-col justify-end cursor-pointer">
              <img 
                src={imgProjectCoord} 
                alt="Public Sector Experience" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="relative z-10 m-4 bg-[#0f3a5e]/90 backdrop-blur-md p-5 border border-white/20 shadow-xl text-left space-y-2 transition-transform duration-300 group-hover:-translate-y-1">
                <span className="inline-block text-[10px] font-black text-[#60a5fa] tracking-widest font-outfit uppercase bg-white/10 px-2 py-0.5 border border-white/10">
                  MUNICIPAL & UTILITY CONTRACTS
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight font-outfit leading-tight group-hover:text-[#60a5fa] transition-colors">
                  Public Sector Experience
                </h3>
                <p className="text-slate-200 text-xs leading-relaxed font-medium">
                  Full NRSWA StreetWorks compliance and public safety coordination with minimal community disruption.
                </p>
              </div>
            </div>

            {/* Box 3: Compliance & Customer Satisfaction */}
            <div className="relative group h-[340px] sm:h-[360px] rounded-none overflow-hidden shadow-lg hover:shadow-2xl border border-slate-200 transition-all duration-500 flex flex-col justify-end cursor-pointer">
              <img 
                src={imgComplianceBg} 
                alt="Compliance & Satisfaction" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="relative z-10 m-4 bg-[#0f3a5e]/90 backdrop-blur-md p-5 border border-white/20 shadow-xl text-left space-y-2 transition-transform duration-300 group-hover:-translate-y-1">
                <span className="inline-block text-[10px] font-black text-[#60a5fa] tracking-widest font-outfit uppercase bg-white/10 px-2 py-0.5 border border-white/10">
                  SAFETY & CLIENT TRUST
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight font-outfit leading-tight group-hover:text-[#60a5fa] transition-colors">
                  Compliance & Satisfaction
                </h3>
                <p className="text-slate-200 text-xs leading-relaxed font-medium">
                  100% pre-deployment vetting, zero-harm H&S protocols, and high appointment satisfaction rates.
                </p>
              </div>
            </div>

          </div>

          {/* NEW SECTION 4: Final Call to Action Banner */}
          <div className="bg-gradient-to-r from-[#0f3a5e] via-[#0b2844] to-[#005f9e] text-white p-8 sm:p-12 md:p-14 rounded-none shadow-xl text-left relative overflow-hidden flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="max-w-2xl space-y-3 relative z-10">
              <span className="text-[#60a5fa] font-bold text-xs tracking-widest font-outfit block">
                Partner with BlueGrid Utilities
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-outfit">
                Ready to Work with a Trusted UK Utility Contractor?
              </h3>
              <p className="text-slate-200 text-xs sm:text-sm leading-relaxed font-medium">
                Contact our operational management team today to discuss workforce supply, smart metering support, or utility infrastructure project delivery.
              </p>
            </div>

            <div className="shrink-0 relative z-10 flex flex-wrap gap-4">
              <Link 
                to="/contact"
                className="inline-flex items-center gap-2 bg-[#0066ff] hover:bg-[#0052cc] text-white font-bold text-xs tracking-widest px-8 py-4 rounded-none border border-white/20 transition-all duration-300 shadow-lg active:scale-95 font-outfit"
              >
                <span>Get In Touch</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
              <Link 
                to="/services"
                className="inline-flex items-center gap-2 bg-transparent hover:bg-white/10 text-white font-bold text-xs tracking-widest px-8 py-4 rounded-none border border-white/30 transition-all duration-300 font-outfit"
              >
                <span>Our Services</span>
              </Link>
            </div>
          </div>

        </div>
      </MotionSection>
    </div>
  );
};

export default AboutCompanyPage;
