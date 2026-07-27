import React from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import MotionSection from '../components/MotionSection';
import imgWaterMeter from '../assets/images/Sectors/watermeter2.jpeg';
import imgCivil from '../assets/images/infrastructure.jpeg';
import imgReinstatement from '../assets/images/projectcordination.jpeg';
import imgSurveying from '../assets/images/combliance.jpeg';
import imgTraffic from '../assets/images/Telecoms and field operations support.jfif';
import imgEmergency from '../assets/images/Training coordination and deployment planning.jpg';
import imgInfra from '../assets/images/Sectors/Infrastructure Support.jpg';

// Additional Image Imports for Smart Water Meter Banners
import imgWaterWorkers from '../assets/images/uk_utility_workers_site.png';
import imgWaterMeterSupport from '../assets/images/water meter suoort bluegrids.jpeg';
import imgComplianceVerification from '../assets/images/Workforce onboarding and compliance verification.jpg';
import imgGridWork from '../assets/images/utility_grid_work.png';
import imgProjectCoord from '../assets/images/Project coordination and reporting.jpg';

const smartWaterMeterBanners = [
  {
    num: "01",
    title: "Professional installation",
    badge: "EUSR CERTIFIED ENGINEER DEPLOYMENT",
    desc: "Precision deployment of smart water meters by accredited EUSR field engineers. Operating under strict statutory guidelines, our teams ensure flawless physical installation, proper pipe fitting, and robust seal integrity for all clean water distribution assets.",
    img: imgWaterWorkers,
    highlights: ["EUSR Water Hygiene Certified Operatives", "RAMS Site Safety & Quality Verification", "Full Alignment with Regional Water Authority SLAs"]
  },
  {
    num: "02",
    title: "Meter replacement",
    badge: "SMART AMR / AMI ASSET UPGRADE",
    desc: "Seamless swapping of aging mechanical water meters with next-generation smart AMR/AMI metering units. Executed with zero domestic supply downtime, comprehensive asset auditing, and digital serial tracking logged directly into telemetry databases.",
    img: imgWaterMeterSupport,
    highlights: ["Zero-Downtime Domestic & Commercial Swaps", "AMR / AMI Telemetry Module Retrofitting", "Full Asset Serial Logging & Removal Audits"]
  },
  {
    num: "03",
    title: "New connections",
    badge: "INFRASTRUCTURE & MAINS INTEGRATION",
    desc: "End-to-end site connections for residential developments, commercial premises, and new utility developments. Includes boundary box placement, pipe laying, mains tap-ins, and direct water supply integration.",
    img: imgCivil,
    highlights: ["Boundary Box Placement & Excavation", "Direct Water Mains Tap-in & Groundworks", "New Build & Commercial Supply Integration"]
  },
  {
    num: "04",
    title: "Commissioning",
    badge: "TELEMETRY & DATA SIGNAL ACTIVATION",
    desc: "Digital setup, signal telemetry validation, AMR/AMI transmitter pairing, and direct data integration with regional water authority monitoring systems for real-time remote consumption tracking.",
    img: imgComplianceVerification,
    highlights: ["AMR/AMI Radio Signal Strength Testing", "Real-Time Telemetry Database Registration", "Water Board Systems Pairing & Handover"]
  },
  {
    num: "05",
    title: "Testing",
    badge: "HYDROSTATIC & ANTI-LEAKAGE AUDITS",
    desc: "Comprehensive hydrostatic pressure testing, flow rate benchmarking, anti-leakage audits, and joint integrity sign-offs conducted prior to final client handover and statutory sign-off.",
    img: imgGridWork,
    highlights: ["Hydrostatic Pressure & Flow Rate Testing", "Acoustic Leak Detection & Seal Verification", "Zero-Defect Sign-off & QA Documentation"]
  },
  {
    num: "06",
    title: "Customer education",
    badge: "ON-SITE GUIDANCE & ADVISORY",
    desc: "Clear in-person operative guidance provided to property owners on smart meter readings, online portal tracking, automatic leak detection alerts, and water conservation best practices.",
    img: imgProjectCoord,
    highlights: ["In-Person Smart Meter Display Briefing", "Automatic Leak Alert System Setup", "Water Saving Advice & Digital Portal Guidance"]
  }
];

const servicesData = [
  {
    num: "01",
    slug: "water-meter-installation",
    title: "Water Meter Installation",
    icon: "water_drop",
    desc: "We assist with workforce planning, scheduling, field coordination, and operational support for smart meter and water meter installation projects across the UK.",
    img: imgWaterMeter,
    details: {
      headline: "Comprehensive field force coordination for clean water & smart metering rollouts.",
      overview: "Our water meter installation division coordinates field operatives, scheduling logistics, and customer appointments across six core operational phases: professional installation, meter replacement, new connections, commissioning, testing, and customer education.",
      keyAreas: [
        "Professional installation — EUSR-certified field operative deployment & meter installation",
        "Meter replacement — Swapping legacy mechanical meters with next-gen AMR/AMI smart devices",
        "New connections — End-to-end residential, commercial & new-build utility supply connections",
        "Commissioning — Digital setup, telemetry signal validation & network authority integration",
        "Testing — Flow rate benchmarking, pressure validation & leak detection checks",
        "Customer education — Clear on-site operative guidance on usage, leak alerts & conservation"
      ],
      benefits: [
        "Dedicated utility coordinators who understand the clean water sector",
        "Maximum daily operative utilisation through scheduling checks",
        "Reliable record-keeping and audit trails for compliance reporting"
      ]
    }
  },
  {
    num: "02",
    slug: "civil-engineering",
    title: "Civil Engineering",
    icon: "engineering",
    desc: "Our civil engineering infrastructure support includes excavation management, trenching, duct laying, pipeline installation, and structural groundworks with full 'construct only' or 'design and construct' capabilities.",
    img: imgCivil,
    details: {
      headline: "Vetted civil engineering teams & infrastructure groundwork support.",
      overview: "We deliver civil engineering and site support for utility network development, including water main installation, electricity cable ducting, and gas pipe laying. Our teams enforce high site safety and regulatory compliance.",
      keyAreas: [
        "Infrastructure excavation & trenching coordination",
        "Pipeline installation & duct laying supervision",
        "Site preparation coordination & operative check-ins",
        "EUSR card and CSCS safety verification checks",
        "Subcontractor compliance tracking & reporting"
      ],
      benefits: [
        "Fast turnaround in scaling qualified civil engineering personnel",
        "Strict verification of necessary security and sector certifications",
        "Seamless reporting between site management and coordinators"
      ]
    }
  },
  {
    num: "03",
    slug: "reinstatement",
    title: "Reinstatement",
    icon: "construction",
    desc: "High-standard surface reinstatement, hot and cold macadam resurfacing, modular paving, and zero-defect streetworks completion following excavation.",
    img: imgReinstatement,
    details: {
      headline: "NRSWA-compliant surface reinstatement & defect-free site handovers.",
      overview: "Our reinstatement division specializes in backfilling and restoring highways, footways, and private land following utility excavations. We ensure full compliance with HAUC (Highway Authorities & Utilities Committee) standards.",
      keyAreas: [
        "First-time permanent surface reinstatement",
        "Hot rolled asphalt, macadam, and concrete finishing",
        "Modular paving, kerb replacement & flag laying",
        "NRSWA compliance logging & local council permit checks",
        "Zero-defect site handover audit registers"
      ],
      benefits: [
        "Zero-defect handovers preventing section 74 overrun charges",
        "Rapid response teams for emergency reinstatement tasks",
        "Comprehensive photo evidence logging for audit peace of mind"
      ]
    }
  },
  {
    num: "04",
    slug: "utility-surveying",
    title: "Utility Surveying",
    icon: "radar",
    desc: "Underground utility mapping, Ground Penetrating Radar (GPR) surveys, trial hole investigations, and site risk mitigation prior to excavation works.",
    img: imgSurveying,
    details: {
      headline: "Precision underground utility mapping & pre-excavation risk mitigation.",
      overview: "We execute non-intrusive utility surveys using state-of-the-art Ground Penetrating Radar and electromagnetic location tools. We identify buried pipes, cables, and assets to prevent service strikes and project delays.",
      keyAreas: [
        "Ground Penetrating Radar (GPR) subsurface scanning",
        "PAS 128 utility mapping & asset verification",
        "Trial hole excavation & soil condition reporting",
        "Utility strike avoidance planning & RAMS auditing",
        "3D CAD model generation for site engineers"
      ],
      benefits: [
        "Drastically reduced risk of underground service strikes",
        "Accurate pre-construction site intelligence for project managers",
        "PAS 128 compliant survey reports for council approvals"
      ]
    }
  },
  {
    num: "05",
    slug: "traffic-management",
    title: "Traffic Management Support",
    icon: "traffic",
    desc: "Temporary traffic control setups, NRSWA streetworks compliance, CAD traffic schemes, signal control, lane closures, and council permit liaison.",
    img: imgTraffic,
    details: {
      headline: "Turnkey temporary traffic management & NRSWA streetworks compliance.",
      overview: "We design, install, and maintain temporary traffic management solutions across urban and rural UK roads. From two-way traffic signals to full road closures, we keep field operatives and the public safe.",
      keyAreas: [
        "CAD traffic management plan design & council approval",
        "Temporary traffic signal installation & maintenance",
        "Lane closures, convoy systems & pedestrian diversions",
        "NRSWA streetworks permit application support",
        "24/7 emergency traffic control response"
      ],
      benefits: [
        "Guaranteed NRSWA compliance reducing council fines",
        "Smooth traffic flow minimizing public inconvenience",
        "Complete safety barrier protection for utility workzones"
      ]
    }
  },
  {
    num: "06",
    slug: "emergency-utility-response",
    title: "Emergency Utility Response",
    icon: "warning",
    desc: "24/7 rapid response field operative dispatch, burst main support, gas/water leak isolation, and urgent site safety setup across UK network hubs.",
    img: imgEmergency,
    details: {
      headline: "24/7 rapid deployment field teams for emergency utility incidents.",
      overview: "Our emergency response division provides 24-hour on-call support for urgent utility incidents, including water main bursts, power outages, and cable strikes. We deploy fully equipped emergency crews within strict response SLAs.",
      keyAreas: [
        "24/7 emergency call-out dispatch & operative routing",
        "Burst water main containment & isolation support",
        "Urgent site safety barrier & traffic control setup",
        "Emergency pump deployment & dewatering support",
        "Real-time incident reporting to client control rooms"
      ],
      benefits: [
        "Rapid on-site arrival times across key UK operational hubs",
        "Fully certified emergency operatives with active safety cards",
        "Immediate hazard containment protecting public infrastructure"
      ]
    }
  },
  {
    num: "07",
    slug: "infrastructure-support",
    title: "Infrastructure Support",
    icon: "foundation",
    desc: "Multi-utility infrastructure support, labor resourcing, site logistics, and operational project management for major Tier-1 contractors.",
    img: imgInfra,
    details: {
      headline: "Integrated multi-utility support logistics & workforce resourcing.",
      overview: "We provide operational support and labor coordination for utility infrastructure development across water, gas, electricity, and telecommunications networks, supporting Tier-1 contractors in meeting programme deadlines.",
      keyAreas: [
        "Multi-utility site workforce coordination & resourcing",
        "Equipment & vehicle fleet logistics management",
        "Site access clearance & customer appointment scheduling",
        "CSCS, EUSR, and SHEA credential auditing",
        "Subcontractor compliance tracking & reporting"
      ],
      benefits: [
        "Scalable workforce deployment tailored to project phases",
        "Comprehensive compliance auditing protecting contractor liability",
        "Single point of contact for multi-utility project coordination"
      ]
    }
  }
];

const ServicesPage = () => {
  const [searchParams] = useSearchParams();
  const selectedService = searchParams.get('select');

  const filteredServices = selectedService
    ? servicesData.filter(item => item.slug === selectedService)
    : servicesData;

  // Render Single Service Detail Layout
  if (selectedService && filteredServices.length > 0) {
    const service = filteredServices[0];
    return (
      <MotionSection 
        as="div" 
        className="py-16 md:py-24 bg-white font-sans animate-fade-in" 
        id="service-detail"
        initial="hidden"
        animate="visible"
        whileInView={undefined}
        viewport={undefined}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          
          {/* Back button */}
          <div className="mb-10 text-left">
            <Link 
              to="/services" 
              className="inline-flex items-center gap-2 text-slate-500 hover:text-[#005f9e] font-bold text-xs uppercase tracking-wider transition-colors font-outfit"
            >
              ← Back to Our Services
            </Link>
          </div>

          {/* Split Layout Container */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Image Banner */}
            <div className="lg:col-span-5 w-full">
              <div className="rounded-none overflow-hidden shadow-2xl border border-slate-200 bg-slate-900 relative aspect-[4/3]">
                <img 
                  src={service.img} 
                  alt={service.title} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out" 
                />
              </div>
            </div>

            {/* Right Column: Detailed Contents */}
            <div className="lg:col-span-7 flex flex-col items-start text-left space-y-8">
              
              <div>
                <span className="inline-block px-3.5 py-1.5 rounded-none bg-[#005f9e]/10 text-[#005f9e] text-xs font-black uppercase tracking-widest mb-4 font-outfit border border-[#005f9e]/20">
                  Service {service.num}
                </span>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0f3a5e] leading-tight font-outfit uppercase">
                  {service.title}
                </h1>
              </div>

              {/* Headline & Overview */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-[#0f3a5e] font-outfit leading-snug">
                  {service.details.headline}
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
                  {service.details.overview}
                </p>
              </div>

              <hr className="w-full border-slate-200" />

              {/* Grid of Key Focus Areas & Benefits */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
                
                {/* Key Focus Areas */}
                <div className="space-y-4">
                  <h4 className="text-sm font-black text-[#0f3a5e] uppercase tracking-wider font-outfit">
                    Key Focus Areas
                  </h4>
                  <ul className="space-y-3">
                    {service.details.keyAreas.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 font-medium leading-normal">
                        <span className="material-symbols-outlined text-[#005f9e] text-base shrink-0 mt-0.5">check_circle</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Benefits */}
                <div className="space-y-4">
                  <h4 className="text-sm font-black text-[#0f3a5e] uppercase tracking-wider font-outfit">
                    Operational Benefits
                  </h4>
                  <ul className="space-y-3">
                    {service.details.benefits.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 font-medium leading-normal">
                        <span className="material-symbols-outlined text-emerald-500 text-base shrink-0 mt-0.5">verified</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 pt-2">
                <Link 
                  to={`/contact?subject=${encodeURIComponent(`Enquiry - ${service.title}`)}`}
                  className="inline-flex items-center justify-center px-8 py-4 bg-[#0066ff] hover:bg-[#0052cc] text-white font-bold uppercase text-xs tracking-widest transition-all duration-300 shadow-lg active:scale-95 font-outfit cursor-pointer"
                >
                  Enquire About Service
                </Link>
                <Link 
                  to="/services"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white border border-slate-300 hover:border-[#0f3a5e] hover:text-[#0f3a5e] text-slate-700 font-bold uppercase text-xs tracking-widest transition-all duration-300 active:scale-95 font-outfit cursor-pointer"
                >
                  View All Services
                </Link>
              </div>

            </div>

          </div>

          {/* Full Width Smart Water Meter Installation — 6 Individual Feature Photo Banners */}
          {service.slug === 'water-meter-installation' && (
            <div className="w-full space-y-12 mt-16 pt-12 border-t border-slate-200">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-6">
                <div>
                  <span className="text-xs font-black tracking-widest text-[#005f9e] uppercase font-outfit block mb-2">
                    CORE OPERATIONAL SERVICES
                  </span>
                  <h3 className="text-3xl md:text-5xl font-extrabold text-[#0f3a5e] uppercase tracking-tight font-outfit">
                    Smart Water Meter Installation
                  </h3>
                </div>
                <span className="text-xs font-bold text-white bg-[#005f9e] px-5 py-2.5 uppercase tracking-wider font-outfit shadow-md">
                  6 Individual Banners
                </span>
              </div>

              <div className="space-y-10">
                {smartWaterMeterBanners.map((banner, idx) => (
                  <div 
                    key={idx}
                    className="relative min-h-[380px] md:min-h-[440px] flex items-end p-8 md:p-12 overflow-hidden bg-slate-950 shadow-xl border border-slate-200 group text-left w-full"
                  >
                    {/* Background Photo */}
                    <img 
                      src={banner.img} 
                      alt={banner.title} 
                      className="absolute inset-0 w-full h-full object-cover filter brightness-[0.55] group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/75 to-slate-950/20" />
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-transparent to-transparent" />

                    {/* Top Badge & Number INSIDE Banner */}
                    <div className="absolute top-6 left-6 md:top-8 md:left-8 z-10 flex items-center gap-4">
                      <span className="w-12 h-12 md:w-14 md:h-14 bg-[#005f9e] text-white flex items-center justify-center text-lg md:text-xl font-extrabold font-outfit shadow-lg">
                        {banner.num}
                      </span>
                      <span className="bg-white/10 backdrop-blur-md border border-white/20 text-sky-300 text-[10px] md:text-xs font-black px-3.5 py-1.5 uppercase font-outfit tracking-widest">
                        {banner.badge}
                      </span>
                    </div>

                    {/* Content Overlay INSIDE Banner */}
                    <div className="relative z-10 text-white w-full max-w-4xl pt-16">
                      <h4 className="text-3xl md:text-4xl lg:text-5xl font-extrabold font-outfit mb-4 text-white uppercase tracking-tight group-hover:text-sky-300 transition-colors">
                        {banner.title}
                      </h4>

                      <p className="text-slate-200 text-sm md:text-base leading-relaxed mb-6 font-medium max-w-3xl">
                        {banner.desc}
                      </p>

                      {/* Highlights Grid inside Banner */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-6 border-t border-white/20">
                        {banner.highlights.map((hl, hIdx) => (
                          <div key={hIdx} className="bg-white/10 backdrop-blur-md p-3.5 border border-white/15 flex items-center gap-2">
                            <span className="w-2 h-2 bg-sky-400 rounded-full shrink-0"></span>
                            <span className="text-xs font-bold text-slate-100 font-outfit">{hl}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </MotionSection>
    );
  }

  // Render All Services View with Zig-Zag Banner Card Placement
  return (
    <MotionSection 
      as="div" 
      className="py-16 md:py-24 bg-white font-sans animate-fade-in" 
      id="services"
      initial="hidden"
      animate="visible"
      whileInView={undefined}
      viewport={undefined}
    >
      <div className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-12">

        {/* Left-Aligned Headline Section */}
        <div className="text-left mb-20 max-w-3xl">
          <span className="inline-block px-3.5 py-1.5 bg-[#005f9e]/10 text-[#005f9e] text-xs font-black uppercase tracking-widest mb-3 font-outfit border border-[#005f9e]/20">
            OUR CAPABILITIES
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#0f3a5e] tracking-tight uppercase leading-tight font-outfit">
            OUR SERVICES
          </h1>
          <p className="text-slate-600 text-base md:text-lg leading-relaxed font-medium mt-4">
            Bluegrid Utilities delivers reliable infrastructure support, clean water metering, civil engineering, and specialized field force management across the UK.
          </p>
        </div>

        {/* Zig-Zag Service Banner Cards Stack */}
        <div className="space-y-24 md:space-y-32">
          {servicesData.map((service, index) => {
            const isEven = index % 2 === 0;
            return (
              <div 
                key={service.slug}
                className="relative w-full min-h-[460px] sm:min-h-[500px] md:min-h-[540px] bg-slate-900 shadow-2xl flex items-center overflow-hidden group"
              >
                {/* Full Large Banner Image */}
                <img 
                  src={service.img} 
                  alt={service.title} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                />

                {/* Light Vignette / Gradient for Image Contrast */}
                <div className="absolute inset-0 bg-black/20" />

                {/* Floating Dark Card Container (Alternating Right and Left in Zig-Zag pattern) */}
                <div className={`relative z-10 w-full p-4 sm:p-8 md:p-12 flex ${isEven ? 'justify-end' : 'justify-start'}`}>
                  <div className="w-full max-w-[500px] lg:max-w-[540px] bg-[#2d3748] text-white p-8 sm:p-10 md:p-12 shadow-2xl text-left border-t-4 border-[#005f9e]">
                    
                    {/* Circular Icon Ring */}
                    <div className="w-14 h-14 rounded-full border-2 border-lime-400/50 bg-lime-400/10 flex items-center justify-center text-lime-400 mb-6 shrink-0">
                      <span className="material-symbols-outlined text-2xl">{service.icon}</span>
                    </div>

                    {/* Title */}
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white font-outfit mb-4 leading-tight">
                      {service.title}
                    </h2>

                    {/* Description */}
                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal mb-8">
                      {service.desc}
                    </p>

                    {/* Pill CTA Button */}
                    <Link 
                      to={`/services?select=${service.slug}`}
                      className="inline-flex items-center gap-3 bg-white text-[#1a202c] hover:bg-lime-400 hover:text-slate-950 font-bold text-xs uppercase tracking-widest px-8 py-3.5 rounded-full transition-all duration-300 shadow-lg group/btn font-outfit"
                    >
                      <span>FIND OUT MORE</span>
                      <span className="material-symbols-outlined text-base transition-transform duration-300 group-hover/btn:translate-x-1">
                        arrow_forward
                      </span>
                    </Link>

                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </MotionSection>
  );
};

export default ServicesPage;
