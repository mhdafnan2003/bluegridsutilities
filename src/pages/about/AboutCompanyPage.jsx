import React from 'react';
import { Link } from 'react-router-dom';
import MotionSection from '../../components/MotionSection';
import aboutImage from '../../assets/images/about.jpeg';
import heroTwoImg from '../../assets/images/updated/hero_blue_two.png';
import workersImg from '../../assets/images/uk_utility_workers_site.png';
import AboutBanner from '../../components/AboutBanner';

const corePillars = [
  {
    id: "management",
    icon: "manage_accounts",
    badge: "OPERATIONAL LEADERSHIP",
    title: "Experienced Management",
    desc: "Decades of combined leadership in UK utility infrastructure delivery. Our management team ensures seamless project scheduling, risk mitigation, subcontractor coordination, and tier-1 client alignment.",
    highlights: [
      "Dedicated operational directors & field supervisors",
      "Real-time milestone tracking & performance audits",
      "Transparent reporting & client communication channels"
    ]
  },
  {
    id: "workforce",
    icon: "engineering",
    badge: "VERIFIED FIELD TEAMS",
    title: "Skilled Workforce",
    desc: "Fully trained, vetted, and multi-disciplinary field operatives supporting clean water metering, civil works, excavation, reinstatement, and logistics across the UK.",
    highlights: [
      "100% CSCS, EUSR & NRSWA credential validation",
      "Continuous skills upskilling & safety inductions",
      "Rapid workforce deployment for nationwide contracts"
    ]
  },
  {
    id: "workmanship",
    icon: "workspace_premium",
    badge: "UNCOMPROMISING PRECISION",
    title: "Quality Workmanship",
    desc: "Rigorous quality assurance built into every stage of execution. We deliver precision civil engineering, clean site reinstatement, and zero-defect site handovers.",
    highlights: [
      "Strict compliance with principal contractor specs",
      "Precision excavation & first-class surface reinstatement",
      "On-site quality audits & photographic evidence registers"
    ]
  },
  {
    id: "public-sector",
    icon: "account_balance",
    badge: "TRUSTED MUNICIPAL PARTNERS",
    title: "Public Sector Experience",
    desc: "Proven track record collaborating with UK local authorities, municipal councils, water authorities, and energy distribution networks with minimal community disruption.",
    highlights: [
      "StreetWorks (NRSWA) compliance & permit management",
      "Public safety barriers & traffic management coordination",
      "Resident notification & polite community engagement"
    ]
  },
  {
    id: "compliance",
    icon: "gavel",
    badge: "100% REGULATORY ASSURANCE",
    title: "Rigorous Compliance",
    desc: "Zero-harm safety culture and mandatory pre-deployment vetting including right-to-work screening, qualification checks, H&S policy enforcement, and environmental audits.",
    highlights: [
      "Complete EUSR card & identity verification checks",
      "Regular site safety toolbox talks & H&S inspections",
      "Strict adherence to environmental & carbon policies"
    ]
  },
  {
    id: "satisfaction",
    icon: "thumb_up",
    badge: "DEDICATED PARTNER RELATIONS",
    title: "Customer Satisfaction",
    desc: "Customer-centric service delivery focused on high appointment fulfillment rates, clear resident communication, and long-term client satisfaction across all utility contracts.",
    highlights: [
      "98%+ customer satisfaction rating on field appointments",
      "Rapid resolution of customer inquiries & site feedback",
      "Long-term client retention with Tier-1 utility contractors"
    ]
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
          
          {/* Top Page Title Banner (Container Card overlaying Banner Image) */}
          <AboutBanner 
            badgeText="ABOUT BLUEGRID UTILITIES"
            title="COMPANY PROFILE & OVERVIEW"
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
                <div className="absolute bottom-4 left-4 bg-[#005f9e] text-white px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-none border border-white/20 font-outfit">
                  SPECIALIST UTILITY INFRASTRUCTURE
                </div>
              </div>

              <div className="space-y-4 text-left">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#0f3a5e] uppercase tracking-tight font-outfit">
                  WHO WE ARE
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
                    <span className="text-[#0066ff] font-bold text-xs uppercase tracking-widest block mb-1 font-outfit">
                      OFFICIAL DETAILS
                    </span>
                    <h3 className="text-2xl font-bold uppercase tracking-tight text-white font-outfit">
                      COMPANY PROFILE
                    </h3>
                  </div>

                  <div className="space-y-4 text-sm">
                    <div className="bg-white/5 border border-white/10 p-4 rounded-none">
                      <p className="text-[10px] font-bold text-[#60a5fa] uppercase tracking-widest mb-1 font-outfit">Company Name</p>
                      <p className="text-base font-bold text-white">Bluegrid Utilities</p>
                    </div>

                    <div className="bg-white/5 border border-white/10 p-4 rounded-none">
                      <p className="text-[10px] font-bold text-[#60a5fa] uppercase tracking-widest mb-1 font-outfit">Trading Name of</p>
                      <p className="text-base font-bold text-white">Bluegrid Technology Ltd</p>
                    </div>

                    <div className="bg-white/5 border border-white/10 p-4 rounded-none">
                      <p className="text-[10px] font-bold text-[#60a5fa] uppercase tracking-widest mb-1 font-outfit">Company Number</p>
                      <p className="text-base font-bold text-white tracking-wider">16442340</p>
                    </div>

                    <div className="bg-white/5 border border-white/10 p-4 rounded-none">
                      <p className="text-[10px] font-bold text-[#60a5fa] uppercase tracking-widest mb-1 font-outfit">Registered Office</p>
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
                    REGISTERED IN ENGLAND & WALES
                  </span>
                  <span className="text-[#60a5fa]">UK UTILITY CONTRACTOR</span>
                </div>
              </div>
            </div>

          </div>

          {/* Section Divider */}
          <hr className="border-slate-200 my-16" />

          {/* NEW SECTION 1: Core Operational Foundations Grid (6 Key Pillars) */}
          <div className="mb-20">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="inline-block px-3.5 py-1.5 rounded-none bg-[#005f9e]/10 text-[#005f9e] text-xs font-black uppercase tracking-widest mb-3 font-outfit border border-[#005f9e]/20">
                CORE OPERATIONAL CAPABILITIES
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0f3a5e] tracking-tight uppercase leading-tight font-outfit">
                OUR CORE STRENGTHS & COMMITMENTS
              </h2>
              <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
                Built on experienced management, certified field operatives, precision workmanship, public sector capability, strict compliance, and total customer satisfaction.
              </p>
            </div>

            {/* 6 Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {corePillars.map((pillar) => (
                <div 
                  key={pillar.id}
                  className="bg-white border border-slate-200 hover:border-[#005f9e] p-8 rounded-none shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
                >
                  {/* Subtle top accent bar */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-slate-200 group-hover:bg-[#005f9e] transition-colors duration-300" />

                  <div>
                    {/* Header with Icon and Badge */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-none bg-[#0f3a5e] text-white flex items-center justify-center shadow-md group-hover:bg-[#005f9e] transition-colors duration-300">
                        <span className="material-symbols-outlined text-2xl">{pillar.icon}</span>
                      </div>
                      <span className="text-[10px] font-black text-[#005f9e] uppercase tracking-widest font-outfit bg-[#005f9e]/10 px-2.5 py-1 border border-[#005f9e]/20">
                        {pillar.badge}
                      </span>
                    </div>

                    {/* Title & Description */}
                    <h3 className="text-xl font-bold text-[#0f3a5e] uppercase tracking-tight font-outfit mb-3 group-hover:text-[#005f9e] transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium mb-6">
                      {pillar.desc}
                    </p>
                  </div>

                  {/* Highlights Bullet List */}
                  <div className="pt-4 border-t border-slate-100 space-y-2">
                    {pillar.highlights.map((item, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-700 font-semibold">
                        <span className="material-symbols-outlined text-sm text-[#005f9e] shrink-0 mt-0.5">check_circle</span>
                        <span>{item}</span>
                      </div>
                    ))}
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
                <span className="inline-block px-3.5 py-1 rounded-none bg-[#005f9e]/40 text-[#60a5fa] border border-[#005f9e]/60 text-xs font-black tracking-widest uppercase font-outfit">
                  EXPERT MANAGEMENT & FIELD TEAMS
                </span>

                <h2 className="text-3xl sm:text-4xl font-bold uppercase tracking-tight font-outfit leading-tight text-white">
                  DRIVEN BY EXPERIENCED LEADERSHIP & SKILLED OPERATIVES
                </h2>

                <p className="text-slate-200 text-sm sm:text-base leading-relaxed font-medium">
                  At Bluegrid Utilities, our operational strength lies in combining seasoned utility contract managers with accredited, multi-skilled field teams. From complex urban smart water meter deployments to nationwide infrastructure support, our teams work in harmony with main contractors and local authorities.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="bg-white/5 border border-white/10 p-5 rounded-none">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="material-symbols-outlined text-[#60a5fa]">supervisor_account</span>
                      <h4 className="font-bold text-white uppercase text-sm font-outfit">Experienced Management</h4>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed font-medium">
                      Proactive project supervision, route optimization, real-time client reporting, and strict SLA fulfillment.
                    </p>
                  </div>

                  <div className="bg-white/5 border border-white/10 p-5 rounded-none">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="material-symbols-outlined text-[#60a5fa]">badge</span>
                      <h4 className="font-bold text-white uppercase text-sm font-outfit">Skilled Workforce</h4>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed font-medium">
                      Rigorously vetted operatives holding CSCS, EUSR, and NRSWA credentials ready for immediate site deployment.
                    </p>
                  </div>
                </div>

                <div className="pt-4">
                  <Link 
                    to="/contact" 
                    className="inline-flex items-center gap-3 bg-[#005f9e] hover:bg-[#0066ff] text-white border border-[#60a5fa]/40 hover:border-white transition-all duration-300 px-8 py-4 font-black text-xs sm:text-sm uppercase tracking-widest font-outfit shadow-xl active:scale-95 group"
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
                    <p className="text-xs font-bold uppercase tracking-widest text-[#60a5fa] font-outfit">QUALIFIED & COMPLIANT</p>
                    <p className="text-sm font-bold text-white mt-1">100% Certified Field Workforce Across the UK</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* NEW SECTION 3: Quality Workmanship, Public Sector & Compliance Showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
            
            {/* Box 1: Quality Workmanship */}
            <div className="bg-[#f8fafc] border border-slate-200 p-8 sm:p-10 rounded-none shadow-md flex flex-col justify-between text-left group hover:border-[#005f9e] transition-all">
              <div>
                <div className="w-12 h-12 rounded-none bg-[#005f9e]/10 text-[#005f9e] border border-[#005f9e]/20 flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-2xl">workspace_premium</span>
                </div>
                <span className="text-[10px] font-black text-[#005f9e] uppercase tracking-widest block mb-2 font-outfit">
                  EXCELLENCE IN EXECUTION
                </span>
                <h3 className="text-2xl font-bold text-[#0f3a5e] uppercase tracking-tight font-outfit mb-4">
                  Quality Workmanship
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed font-medium mb-6">
                  From clean water meter installation to pavement reinstatement, we take pride in clean execution, high attention to detail, and zero defects on client handovers.
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200 space-y-2 text-xs font-bold text-slate-700">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#005f9e]" />
                  <span>Precision excavation & neat surface reinstatement</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#005f9e]" />
                  <span>Audited against Tier-1 contractor standards</span>
                </div>
              </div>
            </div>

            {/* Box 2: Public Sector & Municipal Experience */}
            <div className="bg-[#f8fafc] border border-slate-200 p-8 sm:p-10 rounded-none shadow-md flex flex-col justify-between text-left group hover:border-[#005f9e] transition-all">
              <div>
                <div className="w-12 h-12 rounded-none bg-[#005f9e]/10 text-[#005f9e] border border-[#005f9e]/20 flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-2xl">account_balance</span>
                </div>
                <span className="text-[10px] font-black text-[#005f9e] uppercase tracking-widest block mb-2 font-outfit">
                  MUNICIPAL & UTILITY CONTRACTS
                </span>
                <h3 className="text-2xl font-bold text-[#0f3a5e] uppercase tracking-tight font-outfit mb-4">
                  Public Sector Experience
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed font-medium mb-6">
                  We collaborate with water authorities, councils, and public infrastructure partners, ensuring full StreetWorks (NRSWA) compliance and minimal community disruption.
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200 space-y-2 text-xs font-bold text-slate-700">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#005f9e]" />
                  <span>NRSWA permit & streetworks management</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#005f9e]" />
                  <span>Polite resident communication & safety barriers</span>
                </div>
              </div>
            </div>

            {/* Box 3: Compliance & Customer Satisfaction */}
            <div className="bg-[#f8fafc] border border-slate-200 p-8 sm:p-10 rounded-none shadow-md flex flex-col justify-between text-left group hover:border-[#005f9e] transition-all">
              <div>
                <div className="w-12 h-12 rounded-none bg-[#005f9e]/10 text-[#005f9e] border border-[#005f9e]/20 flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-2xl">verified_user</span>
                </div>
                <span className="text-[10px] font-black text-[#005f9e] uppercase tracking-widest block mb-2 font-outfit">
                  SAFETY & CLIENT TRUST
                </span>
                <h3 className="text-2xl font-bold text-[#0f3a5e] uppercase tracking-tight font-outfit mb-4">
                  Compliance & Satisfaction
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed font-medium mb-6">
                  100% pre-deployment vetting, zero-harm H&S protocols, and high appointment satisfaction rates ensure total peace of mind for utility partners.
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200 space-y-2 text-xs font-bold text-slate-700">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#005f9e]" />
                  <span>100% Right-to-Work & EUSR identity audits</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#005f9e]" />
                  <span>98%+ customer satisfaction rating on appointments</span>
                </div>
              </div>
            </div>

          </div>

          {/* NEW SECTION 4: Final Call to Action Banner */}
          <div className="bg-gradient-to-r from-[#0f3a5e] via-[#0b2844] to-[#005f9e] text-white p-8 sm:p-12 md:p-14 rounded-none shadow-xl text-left relative overflow-hidden flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="max-w-2xl space-y-3 relative z-10">
              <span className="text-[#60a5fa] font-bold text-xs uppercase tracking-widest font-outfit block">
                PARTNER WITH BLUEGRID UTILITIES
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold uppercase tracking-tight text-white font-outfit">
                READY TO WORK WITH A TRUSTED UK UTILITY CONTRACTOR?
              </h3>
              <p className="text-slate-200 text-xs sm:text-sm leading-relaxed font-medium">
                Contact our operational management team today to discuss workforce supply, smart metering support, or utility infrastructure project delivery.
              </p>
            </div>

            <div className="shrink-0 relative z-10 flex flex-wrap gap-4">
              <Link 
                to="/contact"
                className="inline-flex items-center gap-2 bg-[#0066ff] hover:bg-[#0052cc] text-white font-bold text-xs uppercase tracking-widest px-8 py-4 rounded-none border border-white/20 transition-all duration-300 shadow-lg active:scale-95 font-outfit"
              >
                <span>GET IN TOUCH</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
              <Link 
                to="/services"
                className="inline-flex items-center gap-2 bg-transparent hover:bg-white/10 text-white font-bold text-xs uppercase tracking-widest px-8 py-4 rounded-none border border-white/30 transition-all duration-300 font-outfit"
              >
                <span>OUR SERVICES</span>
              </Link>
            </div>
          </div>

        </div>
      </MotionSection>
    </div>
  );
};

export default AboutCompanyPage;
