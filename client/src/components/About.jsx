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
import environmentalPolicyBg from '../assets/images/How Environmental Permits Help Protect Natural Resources.jpeg';

const About = () => {
  return (
    <div className="font-sans">
      {/* Company Profile & Overview Hero Section */}
      <MotionSection 
        as="section" 
        className="py-16 md:py-24 bg-white" 
        id="about"
        initial="hidden"
        animate="visible"
        whileInView={undefined}
        viewport={undefined}
      >
        <div className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-12">
          
          {/* Header Badge & Title */}
          <div className="mb-14 text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-1.5 rounded-none bg-[#005f9e]/10 text-[#005f9e] text-xs font-black tracking-widest mb-4 border border-[#005f9e]/20">
              About Bluegrid Utilities
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0f3a5e] tracking-tight leading-tight mb-4">
              Company Profile
            </h1>
            <p className="text-slate-600 text-base md:text-lg leading-relaxed font-medium">
              A UK-based utility infrastructure contractor focused on safe, reliable and high-quality operational delivery.
            </p>
          </div>

          {/* Main Overview & Registration Card Grid */}
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-stretch mb-16">
            
            {/* Left: Image & Company Overview (7 Cols) */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-8">
              {/* Feature Image Frame (Boxy) */}
              <div className="w-full h-72 sm:h-80 md:h-96 relative overflow-hidden rounded-none border border-slate-200 shadow-lg">
                <img
                  src={aboutImage}
                  alt="Bluegrid Utilities Field Team"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 bg-[#005f9e] text-white px-4 py-2 text-xs font-black tracking-wider rounded-none border border-white/20">
                  Specialist Utility Infrastructure
                </div>
              </div>

              {/* Text Narrative */}
              <div className="space-y-4 text-left">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#0f3a5e] tracking-tight">
                  Who We Are
                </h2>
                <p className="text-slate-700 text-base sm:text-lg font-semibold leading-relaxed">
                  Bluegrid Utilities is a UK utility infrastructure delivery business supporting water and wider infrastructure programmes through field operations, project mobilisation, civil engineering support and workforce coordination. We combine hands-on operational leadership with structured compliance, training and project-control processes.
                </p>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
                  Our approach is built around safe mobilisation, clear accountability and dependable execution. We work within established supply chains and aim to build long-term relationships with infrastructure partners who value responsive delivery, quality workmanship and transparent communication.
                </p>
              </div>
            </div>

            {/* Right: Company Profile Boxy Card (5 Cols) */}
            <div className="lg:col-span-5 flex flex-col">
              <div className="bg-[#0f3a5e] text-white p-8 sm:p-10 rounded-none border border-[#0f3a5e] shadow-xl flex flex-col justify-between h-full relative overflow-hidden">
                {/* Background Glow Effect */}
                <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-[#005f9e]/30 rounded-none blur-3xl pointer-events-none" />

                <div className="relative z-10 space-y-6">
                  {/* Card Header */}
                  <div className="border-b border-white/15 pb-4">
                    <span className="text-[#0066ff] font-bold text-xs tracking-widest block mb-1">
                      Official Details
                    </span>
                    <h3 className="text-2xl font-bold tracking-tight text-white">
                      Official Company Details
                    </h3>
                  </div>

                  {/* Profile Key Value Rows */}
                  <div className="space-y-4 text-sm">
                    <div className="bg-white/5 border border-white/10 p-4 rounded-none">
                      <p className="text-[10px] font-bold text-[#60a5fa] tracking-widest mb-1">Trading Name</p>
                      <p className="text-base font-bold text-white">Bluegrid Utilities</p>
                    </div>

                    <div className="bg-white/5 border border-white/10 p-4 rounded-none">
                      <p className="text-[10px] font-bold text-[#60a5fa] tracking-widest mb-1">Legal Entity</p>
                      <p className="text-base font-bold text-white">Bluegrid Technology Ltd</p>
                    </div>

                    <div className="bg-white/5 border border-white/10 p-4 rounded-none">
                      <p className="text-[10px] font-bold text-[#60a5fa] tracking-widest mb-1">Company Number</p>
                      <p className="text-base font-bold text-white tracking-wider">16442340</p>
                    </div>

                    <div className="bg-white/5 border border-white/10 p-4 rounded-none">
                      <p className="text-[10px] font-bold text-[#60a5fa] tracking-widest mb-1">Registered Office</p>
                      <address className="not-italic text-sm font-semibold text-slate-200 leading-snug">
                        Stuart House, St. Johns Street<br />
                        Peterborough, PE1 5DD<br />
                        United Kingdom
                      </address>
                    </div>

                    <div className="bg-white/5 border border-white/10 p-4 rounded-none">
                      <p className="text-[10px] font-bold text-[#60a5fa] tracking-widest mb-1">Company Status</p>
                      <p className="text-base font-bold text-emerald-400">Active</p>
                    </div>
                  </div>
                </div>

                {/* Footer Tag */}
                <div className="mt-8 pt-4 border-t border-white/15 relative z-10 flex items-center justify-between text-xs font-bold text-slate-300">
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-none bg-[#0066ff]" />
                    Registered in United Kingdom
                  </span>
                  <span className="text-[#60a5fa]">Active Status</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </MotionSection>

      {/* Mission & Vision Section (Boxy Cards) */}
      <MotionSection as="section" className="py-20 bg-[#f8fafc] border-y border-slate-200">
        <div className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-12">
                    <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-block px-4 py-1.5 rounded-none bg-[#005f9e]/10 text-[#005f9e] text-xs font-black tracking-widest mb-4 border border-[#005f9e]/20">
              Purpose & Direction
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0f3a5e] tracking-tight">
              Mission & Vision
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Mission Card - Boxy */}
            <div 
              id="mission" 
              className="group relative rounded-none p-8 sm:p-10 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col justify-end min-h-[340px] border border-slate-200 bg-slate-900"
            >
              <img 
                src={missionBg} 
                alt="Our Mission background" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/70 to-slate-950/30" />
              
              <div className="relative z-10 flex flex-col items-start w-full">
                <div className="w-12 h-12 rounded-none bg-[#005f9e] text-white border border-white/20 flex items-center justify-center mb-6 shadow-md">
                  <span className="material-symbols-outlined text-2xl font-bold">flag</span>
                </div>
                <span className="text-[#60a5fa] font-bold text-xs tracking-widest mb-2">
                  Our Mission
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 tracking-tight">
                  Mission Statement
                </h3>
                <p className="text-slate-200 text-sm sm:text-base leading-relaxed font-medium">
                  To deliver utility infrastructure safely, efficiently and professionally while building long-term partnerships based on trust, quality and reliability.
                </p>
              </div>
            </div>

            {/* Vision Card - Boxy */}
            <div 
              id="vision" 
              className="group relative rounded-none p-8 sm:p-10 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col justify-end min-h-[340px] border border-slate-200 bg-slate-900"
            >
              <img 
                src={visionBg} 
                alt="Our Vision background" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/70 to-slate-950/30" />
              
              <div className="relative z-10 flex flex-col items-start w-full">
                <div className="w-12 h-12 rounded-none bg-[#005f9e] text-white border border-white/20 flex items-center justify-center mb-6 shadow-md">
                  <span className="material-symbols-outlined text-2xl font-bold">visibility</span>
                </div>
                <span className="text-[#60a5fa] font-bold text-xs tracking-widest mb-2">
                  Our Vision
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 tracking-tight">
                  Vision Statement
                </h3>
                <p className="text-slate-200 text-sm sm:text-base leading-relaxed font-medium">
                  To become one of the UK’s leading utility infrastructure contractors recognised for innovation, safety, quality and operational excellence.
                </p>
              </div>
            </div>

          </div>
        </div>
      </MotionSection>

      {/* History & Growth Section */}
      <MotionSection as="section" className="py-20 bg-white" id="history">
        <div className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-12">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-none bg-[#005f9e]/10 text-[#005f9e] text-xs font-black tracking-widest mb-4 border border-[#005f9e]/20">
              Transparent Foundation
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0f3a5e] tracking-tight mb-4">
              Company History & Growth
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Established to provide specialist utility infrastructure services throughout the UK with operational excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Experienced Leadership",
                desc: "Founded on experienced management and field operational leadership dedicated to safe utility delivery."
              },
              {
                step: "02",
                title: "Specialist Delivery",
                desc: "Supporting utility providers, principal contractors and partners across smart metering, excavation and reinstatement."
              },
              {
                step: "03",
                title: "Operational Trust",
                desc: "Built on long-term partnerships, continuous improvement and national UK infrastructure growth."
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-[#f8fafc] border border-slate-200 p-8 rounded-none shadow-md flex flex-col justify-between">
                <div>
                  <div className="text-[#005f9e] font-black text-xs tracking-widest mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#005f9e]" />
                    Pillar {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-[#0f3a5e] mb-3">{item.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed font-medium">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </MotionSection>

      {/* Accreditations & Standards (Boxy Cards) */}
      <MotionSection as="section" className="py-20 bg-[#f8fafc] border-t border-slate-200" id="accreditations">
        <div className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-12">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-none bg-[#005f9e]/10 text-[#005f9e] text-xs font-black tracking-widest mb-4 border border-[#005f9e]/20">
              Operational Compliance
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0f3a5e] tracking-tight mb-4">
              Accreditation & Standards
            </h2>
            <p className="text-slate-600 text-base leading-relaxed font-medium">
              We operate under strict adherence to national and industry compliance standards to ensure safety and quality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "EUSR & Industry Vetting",
                desc: "Enforcing strict checks confirming field operatives hold valid EUSR records, CSCS cards, or specific sector safety certifications.",
                icon: "shield",
                bg: vettingBg
              },
              {
                title: "Right-to-Work Compliance",
                desc: "100% compliant onboarding verifying identity, qualifications, reference audits, and background suitability screening.",
                icon: "verified_user",
                bg: complianceBg
              },
              {
                title: "Health & Safety Systems",
                desc: "Continuous training management and compliance verification structures built to align with UK utility safety standards.",
                icon: "health_and_safety",
                bg: safetyBg
              }
            ].map((item, idx) => (
              <div 
                key={idx} 
                className="group relative rounded-none p-8 shadow-lg transition-all duration-300 overflow-hidden flex flex-col justify-end min-h-[300px] border border-slate-200 bg-slate-900"
              >
                <img 
                  src={item.bg} 
                  alt={item.title} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/70 to-slate-950/30" />
                
                <div className="relative z-10 flex flex-col items-start w-full">
                  <div className="w-10 h-10 rounded-none bg-[#005f9e] text-white border border-white/20 flex items-center justify-center mb-5 shadow-md">
                    <span className="material-symbols-outlined text-xl">{item.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-slate-200 text-xs sm:text-sm leading-relaxed font-medium">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </MotionSection>

      {/* Governance & Policies (Boxy Cards) */}
      <MotionSection as="section" className="py-20 bg-white border-t border-slate-200" id="policies">
        <div className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-12">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-none bg-[#005f9e]/10 text-[#005f9e] text-xs font-black tracking-widest mb-4 border border-[#005f9e]/20">
              Governance & Responsibility
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0f3a5e] tracking-tight mb-4">
              Our Core Policies
            </h2>
            <p className="text-slate-600 text-base leading-relaxed font-medium">
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
                className="group relative rounded-none p-6 shadow-md transition-all duration-300 overflow-hidden flex flex-col justify-end min-h-[280px] border border-slate-200 bg-slate-900"
              >
                <img 
                  src={item.bg} 
                  alt={item.title} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/70 to-slate-950/30" />
                
                <div className="relative z-10 flex flex-col items-start w-full">
                  <div className="w-9 h-9 rounded-none bg-[#005f9e] text-white border border-white/20 flex items-center justify-center mb-4 shadow-md">
                    <span className="material-symbols-outlined text-lg">{item.icon}</span>
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-slate-200 text-xs leading-relaxed font-medium">{item.desc}</p>
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
