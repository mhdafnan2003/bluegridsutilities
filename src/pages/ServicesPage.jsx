import React from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import MotionSection from '../components/MotionSection';
import { ProjectCard } from '../components/ui/ProjectCard';
import imgWaterMeter from '../assets/images/Sectors/watermeter2.jpeg';
import imgCivil from '../assets/images/infrastructure.jpeg';
import imgReinstatement from '../assets/images/projectcordination.jpeg';
import imgSurveying from '../assets/images/combliance.jpeg';
import imgTraffic from '../assets/images/Telecoms and field operations support.jfif';
import imgEmergency from '../assets/images/Training coordination and deployment planning.jpg';
import imgInfra from '../assets/images/Sectors/Infrastructure Support.jpg';

const servicesData = [
  {
    num: "01",
    slug: "water-meter-installation",
    title: "Water Meter Installation",
    desc: "We assist with workforce planning, scheduling, field coordination, and operational support for smart meter and water meter installation projects across the UK.",
    img: imgWaterMeter,
    details: {
      headline: "Comprehensive field force coordination for clean water & smart metering rollouts.",
      overview: "Our water meter installation division coordinates field operatives, scheduling logistics, and customer appointments to ensure high-efficiency rollout and installation rates. We work alongside water authorities, civil partners, and major utility contractors nationwide.",
      keyAreas: [
        "Smart water meter rollouts & logistics coordination",
        "Operative route planning & field dispatch scheduling",
        "AMR/AMI installation project management support",
        "Customer appointment booking & inquiry management",
        "Field safety reporting & EUSR compliance tracking"
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
    desc: "Civil engineering infrastructure support including excavation supervision, trenching, duct laying, pipeline installation, and structural groundworks.",
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
    desc: "High-standard surface reinstatement, hot and cold macadam resurfacing, modular paving, and zero-defect streetworks completion.",
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
    desc: "Underground utility mapping, GPR (Ground Penetrating Radar) surveys, trial hole investigations, and site risk mitigation prior to excavation.",
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
    desc: "24/7 rapid response field operative dispatch, burst main support, gas/water leak isolation, and urgent site safety setup.",
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
    desc: "Multi-utility infrastructure support, labor resourcing, site logistics, and operational project management for Tier-1 contractors.",
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

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut'
    }
  }
};

const ServicesPage = () => {
  const [searchParams] = useSearchParams();
  const selectedService = searchParams.get('select');

  const filteredServices = selectedService
    ? servicesData.filter(item => item.slug === selectedService)
    : servicesData;

  // Render Single Service Detail Layout (Image Left, Text Right, Expanded Content)
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
              className="inline-flex items-center gap-2 text-slate-500 hover:text-brand-primary font-bold text-xs uppercase tracking-wider transition-colors"
            >
              ← Back to All Services
            </Link>
          </div>

          {/* Split Layout Container */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Landscape or Portrait Image */}
            <div className="lg:col-span-5 w-full">
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-slate-100 bg-slate-50 relative aspect-[4/3] sm:aspect-[4/3] md:aspect-[4/3]">
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
                <span className="inline-block px-3 py-1 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-bold uppercase tracking-widest mb-4 font-outfit">
                  Service {service.num}
                </span>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1a202c] leading-tight font-outfit uppercase">
                  {service.title}
                </h1>
              </div>

              {/* Headline & Overview */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-brand-dark font-outfit leading-snug">
                  {service.details.headline}
                </h3>
                <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
                  {service.details.overview}
                </p>
              </div>

              <hr className="w-full border-slate-100" />

              {/* Grid of Key Focus Areas & Benefits */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
                
                {/* Key Focus Areas */}
                <div className="space-y-4">
                  <h4 className="text-sm font-black text-brand-dark uppercase tracking-wider font-outfit">
                    Key Focus Areas
                  </h4>
                  <ul className="space-y-3">
                    {service.details.keyAreas.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-500 leading-normal">
                        <svg className="w-5 h-5 text-brand-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Benefits */}
                <div className="space-y-4">
                  <h4 className="text-sm font-black text-brand-dark uppercase tracking-wider font-outfit">
                    Operational Benefits
                  </h4>
                  <ul className="space-y-3">
                    {service.details.benefits.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-500 leading-normal">
                        <svg className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              <hr className="w-full border-slate-100" />

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 pt-2">
                <Link 
                  to={`/contact?subject=${encodeURIComponent(`Enquiry - ${service.title}`)}`}
                  className="inline-flex items-center justify-center px-8 py-4 bg-brand-primary hover:bg-brand-dark text-white font-black uppercase text-xs tracking-widest transition-all duration-300 shadow-lg active:scale-95 font-outfit cursor-pointer"
                >
                  Enquire About Service
                </Link>
                <Link 
                  to="/services"
                  className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-slate-300 hover:border-brand-dark hover:text-brand-dark text-slate-600 font-black uppercase text-xs tracking-widest transition-all duration-300 active:scale-95 font-outfit cursor-pointer"
                >
                  View Other Services
                </Link>
              </div>

            </div>

          </div>

        </div>
      </MotionSection>
    );
  }

  // Render All Services Grid Layout
  return (
    <MotionSection 
      as="div" 
      className="py-24 bg-white font-sans animate-fade-in" 
      id="services"
      initial="hidden"
      animate="visible"
      whileInView={undefined}
      viewport={undefined}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 text-center">

        {/* Header Section */}
        <div className="mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-primary/10 text-brand-primary text-sm font-medium tracking-wide">
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a202c] mt-6 mb-4 tracking-tight uppercase font-outfit">
            Operational Support Services
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg mb-6">
            We provide tailored utility coordination and workforce support solutions across the UK, executed with compliance and safety.
          </p>
        </div>

        {/* Services Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid gap-8 lg:gap-10 text-left grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        >
          {filteredServices.map((service, index) => (
            <motion.div key={index} variants={cardVariants} className="h-full flex">
              <ProjectCard
                imgSrc={service.img}
                title={service.title}
                description={service.desc}
                link={`/services?select=${service.slug}`}
                linkText="Read More"
                className="w-full flex flex-col"
              />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </MotionSection>
  );
};

export default ServicesPage;
