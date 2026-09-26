import React, { useEffect } from 'react';
import { useSearchParams, useParams, Link } from 'react-router-dom';
import MotionSection from '../components/MotionSection';
import PageSEO from '../components/PageSEO';
import imgWaterMeter from '../assets/images/Sectors/watermeter2.jpeg';

import imgCivil from '../assets/images/civil_engineering_excavation.jpg';
import imgReinstatement from '../assets/images/projectcordination.jpeg';
import imgSurveying from '../assets/images/utility_surveying_detection.jpg';
import imgTraffic from '../assets/images/traffic_management_support.jpg';
import imgEmergency from '../assets/images/Training coordination and deployment planning.jpg';
import imgInfra from '../assets/images/field_delivery_support.jpg';

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
    badge: "EUSR ACCREDITED SQUAD MOBILISATION",
    desc: "Deployment of smart water meter operatives supported by structured onboarding and role-relevant competency. Operating under utility guidelines, our teams ensure safe physical installation, proper pipe fitting, and robust seal integrity for clean water distribution assets.",
    img: imgWaterWorkers,
    highlights: ["EUSR Water Hygiene Competency Verification", "RAMS Site Safety & Quality Verification", "Alignment with Client Scope & Specifications"]
  },
  {
    num: "02",
    title: "Meter replacement",
    badge: "SMART AMR / AMI ASSET UPGRADE",
    desc: "Swapping of legacy mechanical water meters with smart AMR/AMI metering units, planned to minimise customer interruption with comprehensive asset auditing and digital serial tracking.",
    img: imgWaterMeterSupport,
    highlights: ["Planned Domestic & Commercial Replacements", "AMR / AMI Telemetry Module Retrofitting", "Full Asset Serial Logging & Removal Audits"]
  },
  {
    num: "03",
    title: "New connections",
    badge: "INFRASTRUCTURE & MAINS INTEGRATION",
    desc: "Site connection support for residential developments and utility projects, including boundary box placement, pipe laying, and direct clean water supply integration where authorised.",
    img: imgCivil,
    highlights: ["Boundary Box Placement & Excavation", "Water Mains Groundworks Support", "New Build & Commercial Supply Integration"]
  },
  {
    num: "04",
    title: "Commissioning",
    badge: "TELEMETRY & DATA SIGNAL ACTIVATION",
    desc: "Digital setup, signal telemetry validation, AMR/AMI transmitter pairing, and data integration with regional monitoring systems for remote consumption tracking.",
    img: imgComplianceVerification,
    highlights: ["AMR/AMI Radio Signal Strength Checks", "Telemetry Database Registration", "Quality-Controlled Handover Records"]
  },
  {
    num: "05",
    title: "Testing",
    badge: "PRESSURE & INTEGRITY AUDITS",
    desc: "Hydrostatic pressure testing, flow rate checks, seal audits, and joint integrity sign-offs conducted in accordance with project inspection protocols.",
    img: imgGridWork,
    highlights: ["Hydrostatic Pressure & Flow Rate Testing", "Leak Auditing & Seal Verification", "Quality-Controlled Sign-off & QA Documentation"]
  },
  {
    num: "06",
    title: "Customer education",
    badge: "ON-SITE GUIDANCE & ADVISORY",
    desc: "Clear operative guidance provided to property owners on smart meter readings, online tracking, leak notifications, and responsible water conservation advice.",
    img: imgProjectCoord,
    highlights: ["In-Person Smart Meter Briefing", "Leak Notification Guidance", "Water Saving Advice & Contact Routing"]
  }
];

const civilEngineeringBanners = [
  {
    num: "01",
    title: "Excavation",
    badge: "SAFE TRENCHING & EXCAVATION",
    desc: "Precision excavation and trenching for utility installations, pipeline laying, and underground asset deployment adhering strictly to HSG47 safety regulations.",
    img: imgCivil,
    highlights: ["HSG47 Underground Service Avoidance", "Deep Trenching & Shoring Management", "Vacuum & Controlled Mechanical Excavation"]
  },
  {
    num: "02",
    title: "Pipe exposure",
    badge: "ASSET UNCOVERING & PROTECTION",
    desc: "Careful manual and non-destructive exposure of existing clean water, gas, and electric utility mains for maintenance, inspection, and tap-ins.",
    img: imgWaterMeterSupport,
    highlights: ["Non-Destructive Vacuum Excavation", "Live Mains Air & Hand Exposure", "Asset Protection & Strike Prevention"]
  },
  {
    num: "03",
    title: "Utility chambers",
    badge: "VALVE & CHAMBER CONSTRUCTION",
    desc: "Construction, installation, and refurbishment of modular precast and brickwork utility chambers, valve vaults, meter pits, and access manholes.",
    img: imgGridWork,
    highlights: ["Precast & Brickwork Chamber Erection", "D400 Heavy Duty Cover & Frame Fitting", "Clean Water & Valve Vault Construction"]
  },
  {
    num: "04",
    title: "Concrete works",
    badge: "STRUCTURAL & FOUNDATION CONCRETE",
    desc: "High-spec structural concrete pouring, thrust block construction, equipment pads, and reinforced slab installations for utility infrastructure.",
    img: imgComplianceVerification,
    highlights: ["Pipe Thrust Block & Base Slab Pouring", "C35/C40 Utility Spec Concrete Mixes", "Formwork, Rebar & Anchor Fixing"]
  },
  {
    num: "05",
    title: "Surface preparation",
    badge: "SITE CLEARANCE & SUB-BASE PREP",
    desc: "Comprehensive site clearance, saw-cutting, sub-base compaction, and levelling in preparation for civil works and long-term reinstatement.",
    img: imgWaterWorkers,
    highlights: ["Precision Diamond Saw-Cutting", "MOT Type 1 Sub-Base Compaction", "Site Levelling & Waste Clearance"]
  },
  {
    num: "06",
    title: "Groundworks",
    badge: "SITE ENABLING & INFRASTRUCTURE",
    desc: "Essential earthworks, drainage installation, site enabling works, and foundational ground preparation for major multi-utility installations.",
    img: imgProjectCoord,
    highlights: ["Drainage & Duct Installation", "Site Enabling & Earthworks Support", "Geotextile Membrane & Soil Stabilisation"]
  }
];

const reinstatementBanners = [
  {
    num: "01",
    title: "Footpaths",
    badge: "PEDESTRIAN FOOTWAY RESTORATION",
    desc: "High-standard restoration of public footpaths, walkways, and pedestrian areas following utility excavations, fully compliant with NRSWA standards.",
    img: imgReinstatement,
    highlights: ["NRSWA Footway Reinstatement", "Tactile Paving & Kerbing Replacement", "Disability & Access Compliance"]
  },
  {
    num: "02",
    title: "Highways",
    badge: "CARRIAGEWAY & ROAD RESURFACING",
    desc: "Full carriageway resurfacing, trench backfilling, and asphalt compaction across primary and secondary road networks under council permits.",
    img: imgGridWork,
    highlights: ["Hot Rolled Asphalt & Macadam Laying", "NRSWA Category 0-4 Road Reinstatement", "Compaction & Friction Testing Sign-off"]
  },
  {
    num: "03",
    title: "Block paving",
    badge: "MODULAR & DRIVEWAY REPAIRS",
    desc: "Expert lifting, relaying, and color-matching of modular block paving for commercial forecourts, public plazas, and domestic driveways.",
    img: imgCivil,
    highlights: ["Interlocking Block Paving Matching", "Sub-base Bedding & Sand Jointing", "Residential & Commercial Driveway Prep"]
  },
  {
    num: "04",
    title: "Concrete",
    badge: "RIGID PAVEMENT & SLAB REINSTATEMENT",
    desc: "Precision pouring and curing of concrete carriageways, industrial slabs, and rigid footway surfaces with structural joint sealing.",
    img: imgComplianceVerification,
    highlights: ["Patterned & Cured Concrete Laying", "Expansion Joint Sealing & Dowel Barring", "High-Early Strength Fast-Set Pours"]
  },
  {
    num: "05",
    title: "Tarmac",
    badge: "SURFACE & BINDER COURSE MACADAM",
    desc: "First-time permanent macadam surfacing, binder course installation, and bitumen edge sealing to prevent water ingress and edge deterioration.",
    img: imgWaterWorkers,
    highlights: ["SMA & Dense Bituminous Macadam", "Joint Tanking & Bitumen Sealing", "First-Time Permanent Surface Finishing"]
  },
  {
    num: "06",
    title: "Landscaping",
    badge: "VERGE & SOFT ESTATE RESTORATION",
    desc: "Complete soft estate reinstatement including topsoil levelling, turf laying, grass seeding, and roadside verge environmental restoration.",
    img: imgProjectCoord,
    highlights: ["Topsoil Replacement & Turf Laying", "Verge Restoration & Tree Protection", "Environmental Soft Estate Handover"]
  }
];



const infrastructureSupportBanners = [
  {
    num: "01",
    title: "Project mobilisation",
    badge: "STRUCTURED MOBILISATION & LOGISTICS",
    desc: "Structured site setup, plant logistics, operative onboarding, and coordinated mobilisation for multi-utility framework contracts.",
    img: imgInfra,
    highlights: ["Structured Mobilisation Workflow", "Site Welfare & Compound Logistics", "Fleet & Tooling Supply Management"]
  },
  {
    num: "02",
    title: "Labour supply",
    badge: "EUSR & CSCS QUALIFIED WORKFORCE",
    desc: "Supply of accredited utility operatives, groundworkers, pipe layers, and meter technicians holding active EUSR, CSCS, and SHEA credentials.",
    img: imgWaterWorkers,
    highlights: ["Vetted EUSR Water Hygiene Operatives", "CSCS Skilled Groundwork Resourcing", "Comprehensive Credential Audits"]
  },
  {
    num: "03",
    title: "Site supervision",
    badge: "NRSWA & SHEA SITE MANAGERS",
    desc: "Experienced site supervisors and NRSWA-qualified agents providing daily site oversight, RAMS enforcement, and quality assurance reporting.",
    img: imgComplianceVerification,
    highlights: ["NRSWA Supervisor Site Oversight", "Daily RAMS & Safety Toolbox Briefings", "Client Site Progress Sign-offs"]
  },
  {
    num: "04",
    title: "Project coordination",
    badge: "PROGRAMME SCHEDULE & REPORTING",
    desc: "Dedicated project coordinators managing customer appointment scheduling, council permit tracking, and live KPI progress reporting.",
    img: imgProjectCoord,
    highlights: ["Customer Access & Appointment Booking", "Local Authority Permit Tracking", "Live Digital Dashboard Reporting"]
  },
  {
    num: "05",
    title: "Operational support",
    badge: "TIER-1 CONTRACTOR ASSISTANCE",
    desc: "Integrated back-office operational support assisting main contractors with fleet logistics, material procurement, and audit compliance records.",
    img: imgGridWork,
    highlights: ["Integrated Back-Office Logistics", "Material & Plant Procurement", "Audit Trail & Compliance Archiving"]
  }
];

const serviceBannersMap = {
  'smart-water-metering': {
    title: "Smart Water Metering",
    banners: smartWaterMeterBanners
  },
  'water-meter-installation': {
    title: "Smart Water Metering",
    banners: smartWaterMeterBanners
  },
  'utility-civils': {
    title: "Utility Civils & Access Works",
    banners: civilEngineeringBanners
  },
  'civils-reinstatement': {
    title: "Utility Civils & Access Works",
    banners: civilEngineeringBanners
  },
  'civil-engineering': {
    title: "Utility Civils & Access Works",
    banners: civilEngineeringBanners
  },
  'reinstatement': {
    title: "Reinstatement Support",
    banners: reinstatementBanners
  },
  'reinstatement-support': {
    title: "Reinstatement Support",
    banners: reinstatementBanners
  },
  'project-delivery': {
    title: "Project Delivery & Field Support",
    banners: infrastructureSupportBanners
  },
  'project-delivery-mobilisation': {
    title: "Project Delivery & Field Support",
    banners: infrastructureSupportBanners
  },
  'infrastructure-support': {
    title: "Project Delivery & Field Support",
    banners: infrastructureSupportBanners
  },
  'water-infrastructure-support': {
    title: "Project Delivery & Field Support",
    banners: infrastructureSupportBanners
  }
};

const servicesData = [
  {
    num: "01",
    slug: "smart-water-metering",
    aliases: ["water-meter-installation"],
    eyebrow: "SMART WATER METERING",
    title: "Smart Water Meter Installation Support",
    hubTitle: "Smart Water Metering",
    icon: "water_drop",
    desc: "Structured mobilisation, installation activity, field coordination and completion reporting for authorised smart water-meter programmes.",
    intro: "Bluegrid Utilities supports authorised smart water-meter programmes through structured mobilisation, field coordination, installation activity and completion reporting.",
    img: imgWaterMeter,
    ctaText: "Discuss a Project",
    details: {
      headline: "Supporting clean water networks with smart meter delivery.",
      overview: "Smart water metering is a central capability for Bluegrid Utilities. We support utility clients and primary contractors with the field delivery of domestic and commercial smart water meter installations, replacements and associated access works.",
      keyAreas: [
        "Meter replacements (swapping legacy mechanical meters for AMR/AMI units)",
        "Boundary box meter installations and chamber works",
        "Internal and external meter fitting",
        "Commissioning checks and signal verification",
        "Pre- and post-installation photographic evidence",
        "Customer engagement at the doorstep, representing clients professionally"
      ],
      benefits: [
        "Trained and accredited installation personnel holding EUSR National Water Hygiene cards",
        "Structured site mobilisation and daily supervisor briefings ensuring quality controls",
        "Digital installation recording, photographic evidence, and prompt escalation pathways"
      ]
    }
  },
  {
    num: "02",
    slug: "water-infrastructure-support",
    aliases: ["infrastructure-support"],
    eyebrow: "WATER INFRASTRUCTURE SUPPORT",
    title: "Water Infrastructure Support",
    hubTitle: "Water Infrastructure Support",
    icon: "water",
    desc: "Practical field and project support for authorised water-infrastructure activities.",
    intro: "Bluegrid Utilities provides operational and field support for authorised water-infrastructure activities, with scope defined by the project, client requirements and competent resources available.",
    img: imgInfra,
    ctaText: "Discuss a Project",
    details: {
      headline: "Delivery Without Compromising Standards",
      overview: "The exact scope is agreed for each project and remains subject to competence, resources, approved methods, permits, client instructions and site conditions.",
      keyAreas: [
        "Project mobilisation and field-resource coordination",
        "Site and customer-interface support where authorised",
        "Access and enabling support associated with water-infrastructure activities",
        "Supervision, progress monitoring and operational reporting",
        "Issue, defect and completion-record coordination"
      ],
      benefits: [
        "Controlled from mobilisation to completion: Plan, Mobilise, Deliver, Verify",
        "Productivity does not override safety, approved methods, permits or client instructions",
        "Transparent records and prompt escalation through authorised project channels"
      ]
    }
  },
  {
    num: "03",
    slug: "utility-civils",
    aliases: ["civils-reinstatement", "civil-engineering"],
    eyebrow: "CIVIL ENGINEERING & EXCAVATION SUPPORT",
    title: "Utility Civils & Excavation Support",
    hubTitle: "Civil Engineering & Excavation Support",
    icon: "engineering",
    desc: "Utility access, excavation and associated enabling support where scope and competence are approved.",
    intro: "Bluegrid Utilities can support authorised utility access, excavation and associated civil works where the project scope, competence, equipment and working controls have been confirmed.",
    img: imgCivil,
    ctaText: "Discuss a Project",
    details: {
      headline: "Controlled groundworks and civil support for utilities.",
      overview: "Bluegrid Utilities supports utility infrastructure projects with confirmed access, excavation, and enabling works where competent resources and approved delivery arrangements are in place.",
      keyAreas: [
        "Trial pitting and vacuum excavation support",
        "Trenching and duct-laying for utility connections",
        "Chamber construction, repair and cover replacement",
        "Boundary box installation and adjustment",
        "Excavation support with compliant shoring and safety equipment",
        "Safe digging practices compliant with HSG47 (Avoiding Danger from Underground Services)"
      ],
      benefits: [
        "Street Works Qualifications (NRSWA) held by operative and supervisor personnel",
        "Daily site-specific risk assessments and method statements (RAMS)",
        "Environmental controls covering silt management, waste segregation, and spill response"
      ]
    }
  },
  {
    num: "04",
    slug: "reinstatement",
    aliases: ["reinstatement-support"],
    eyebrow: "REINSTATEMENT SUPPORT",
    title: "Utility Reinstatement Support",
    hubTitle: "Reinstatement Support",
    icon: "construction",
    desc: "Quality-focused reinstatement activity delivered to the requirements of the relevant project and working environment.",
    intro: "Bluegrid Utilities supports reinstatement activities associated with authorised utility works, with quality and completion requirements defined by the project and working environment.",
    img: imgReinstatement,
    ctaText: "Discuss a Project",
    details: {
      headline: "High-standard reinstatement for footways, carriageways and verges.",
      overview: "Reinstatement is where a utility project's public reputation is won or lost. Bluegrid Utilities delivers first-time permanent and temporary reinstatement across all surface categories, meeting the strict standards of the New Roads and Street Works Act (NRSWA).",
      keyAreas: [
        "Hot-rolled asphalt and bituminous macadam (carriageways and footways)",
        "Modular paving, flags and block paving (matching existing materials)",
        "Concrete surfaces and structural slabs",
        "Soft landscaping: topsoiling, seeding, turfing and verge restoration",
        "Compaction testing and thickness verification",
        "Defect prevention focus: avoiding settlement, cracking and edge deterioration"
      ],
      benefits: [
        "NRSWA-qualified operatives carrying current SWQR cards",
        "Material compliance using approved asphalt mixes, sub-base materials and edge-sealants",
        "Comprehensive photographic records before, during and after works"
      ]
    }
  },
  {
    num: "05",
    slug: "project-delivery",
    aliases: ["project-delivery-mobilisation"],
    eyebrow: "PROJECT DELIVERY & OPERATIONAL MANAGEMENT",
    title: "Project Delivery & Operational Management",
    hubTitle: "Project Delivery & Operational Management",
    icon: "foundation",
    desc: "Mobilisation, workforce coordination, supervision, progress reporting and operational escalation.",
    intro: "Bluegrid Utilities supports utility programmes through structured mobilisation, workforce coordination, day-to-day operational management, progress reporting and escalation.",
    img: imgProjectCoord,
    ctaText: "Discuss a Project",
    details: {
      headline: "Organised field delivery from planning through to completion.",
      overview: "Successful utility delivery requires more than operatives on site. Bluegrid Utilities provides structured project delivery support that ensures works are planned properly, personnel are onboarded compliantly, sites are supervised actively and progress is reported transparently.",
      keyAreas: [
        "Workforce mobilisation: vetting, onboarding, competency checks, PPE issue",
        "Site supervision: daily briefings, quality audits, safety inspections",
        "Programme coordination: scheduling, route planning, access management",
        "Digital reporting: daily work records, photographic audits, snag lists",
        "Logistics and materials: site compound management, materials staging, waste management",
        "Subcontractor coordination: oversight, quality sign-off and escalation"
      ],
      benefits: [
        "Disciplined mobilisation aligned strictly with framework schedules",
        "Supervised field execution enforcing client quality and statutory safety standards",
        "Direct management accountability and clear, verifiable audit trails"
      ]
    }
  }
];

const ServicesPage = () => {
  const { serviceSlug } = useParams();
  const [searchParams] = useSearchParams();
  const selectedService = serviceSlug || searchParams.get('select');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [selectedService]);

  const filteredServices = selectedService
    ? servicesData.filter(item => item.slug === selectedService || (item.aliases && item.aliases.includes(selectedService)))
    : servicesData;

  // Render Single Service Detail Layout with Full-Bleed Screen-Fitting Hero Banner
  if (selectedService && filteredServices.length > 0) {
    const service = filteredServices[0];
    return (
      <MotionSection 
        as="div" 
        className="pb-16 md:pb-24 bg-white font-sans animate-fade-in" 
        id="service-detail"
        initial="hidden"
        animate="visible"
        whileInView={undefined}
        viewport={undefined}
      >
        <PageSEO />
        {/* Full-Bleed Edge-to-Edge Hero Banner Fitting Entire Screen Width */}
        <div className="w-full relative overflow-hidden mb-16 shadow-2xl min-h-[520px] sm:min-h-[580px] lg:min-h-[640px] flex items-center bg-slate-900 border-b border-slate-200">
          <img 
            src={service.img} 
            alt={service.title} 
            className="absolute inset-0 w-full h-full object-cover brightness-90"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent z-0" />
          
          <div className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-12 w-full relative z-10 py-12">
            {/* Back button */}
            <div className="mb-6 text-left">
              <Link 
                to="/services" 
                className="text-nav inline-flex items-center gap-2 text-white/90 hover:text-white bg-black/40 backdrop-blur-md px-4 py-2 border border-white/20 font-bold uppercase tracking-wide transition-colors font-outfit shadow-md"
              >
                ← Back to Our Services
              </Link>
            </div>

            {/* Text Container Box Over Banner - Pure White Background */}
            <div className="p-6 sm:p-10 md:p-12 max-w-3xl text-left text-[#0f3a5e] bg-white border border-slate-200/90 shadow-2xl space-y-4 border-l-4 border-l-[#005f9e]">
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-block px-3.5 py-1.5 rounded-none bg-[#005f9e] text-white text-[11px] font-bold tracking-widest font-outfit uppercase border border-white/20 shadow-sm">
                  {service.eyebrow || `Service ${service.num}`}
                </span>
                <span className="text-[#005f9e] font-bold text-xs tracking-widest font-outfit uppercase flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#005f9e]" />
                  Bluegrid Capabilities
                </span>
              </div>

              <h1 className="text-h1 md:text-h1-lg font-bold text-[#0f3a5e] tracking-tight font-outfit leading-tight uppercase">
                {service.title}
              </h1>

              <p className="text-body md:text-body-lg text-[#1f2937] font-medium leading-relaxed">
                {service.intro}
              </p>

              <div className="pt-2">
                <Link
                  to={`/contact?subject=${encodeURIComponent(service.title)}`}
                  className="text-nav inline-flex items-center gap-2 px-7 py-3 bg-[#005f9e] hover:bg-[#004c80] text-white font-bold tracking-wide uppercase font-outfit shadow-md transition-all"
                >
                  <span>Discuss a Project</span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Content Container Below Banner */}
        <div className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-12">

          {/* Organized Cards Section Below Banner */}
          <div className="space-y-12 mb-16">
            
            {/* Section Heading */}
            <div className="text-left">
              <span className="inline-block px-3.5 py-1.5 rounded-none bg-[#005f9e]/10 text-[#005f9e] border border-[#005f9e]/20 text-xs font-black tracking-widest font-outfit uppercase mb-2">
                Operational Framework
              </span>
              <h2 className="text-h2 md:text-h2-lg font-bold text-[#0f3a5e] tracking-tight font-outfit">
                Service Breakdown & Benefits
              </h2>
            </div>

            {/* 2-Column Cards Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              
              {/* Card 1: Key Focus Areas */}
              <div className="bg-[#f3f7fa] border border-slate-200/90 p-6 sm:p-8 text-left shadow-lg border-t-4 border-t-[#005f9e] space-y-4">
                <div className="flex items-center gap-3 pb-3 border-b border-slate-200">
                  <span className="w-10 h-10 rounded-none bg-[#005f9e]/10 text-[#005f9e] flex items-center justify-center border border-[#005f9e]/20 shrink-0 font-bold">
                    <span className="material-symbols-outlined text-xl">checklist</span>
                  </span>
                  <h3 className="text-h3 md:text-h3-lg font-bold text-[#0f3a5e] uppercase tracking-wider font-outfit">
                    Key Focus Areas
                  </h3>
                </div>

                <ul className="space-y-3.5 pt-2">
                  {service.details.keyAreas.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                      <span className="material-symbols-outlined text-[#005f9e] text-lg shrink-0 mt-0.5">check_circle</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card 2: Operational Benefits */}
              <div className="bg-[#f3f7fa] border border-slate-200/90 p-6 sm:p-8 text-left shadow-lg border-t-4 border-t-emerald-600 space-y-4">
                <div className="flex items-center gap-3 pb-3 border-b border-slate-200">
                  <span className="w-10 h-10 rounded-none bg-emerald-500/10 text-emerald-600 flex items-center justify-center border border-emerald-500/20 shrink-0 font-bold">
                    <span className="material-symbols-outlined text-xl">verified</span>
                  </span>
                  <h3 className="text-h3 md:text-h3-lg font-bold text-[#0f3a5e] uppercase tracking-wider font-outfit">
                    Operational Benefits
                  </h3>
                </div>

                <ul className="space-y-3.5 pt-2">
                  {service.details.benefits.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                      <span className="material-symbols-outlined text-emerald-600 text-lg shrink-0 mt-0.5">task_alt</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

          </div>

          {/* Full Width Core Service Photo Banners for Selected Service */}
          {serviceBannersMap[service.slug] && (
            <div className="w-full space-y-12 mt-16 pt-12 border-t border-slate-200">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-6">
                <div>
                  <span className="text-xs font-black tracking-widest text-[#005f9e] uppercase font-outfit block mb-2">
                    CORE OPERATIONAL SERVICES
                  </span>
                  <h3 className="text-h2 md:text-h2-lg font-extrabold text-[#0f3a5e] uppercase tracking-tight font-outfit">
                    {serviceBannersMap[service.slug].title}
                  </h3>
                </div>
              </div>

              {/* Big Photo Banners Stack - Alternating Left/Right Sides with Generous Whitespace */}
              <div className="space-y-24 sm:space-y-32 lg:space-y-40">
                {serviceBannersMap[service.slug].banners.map((banner, idx) => {
                  const isEven = idx % 2 === 0;
                  return (
                    <div 
                      key={idx}
                      className={`relative min-h-[500px] sm:min-h-[560px] lg:min-h-[620px] flex items-center p-6 sm:p-10 md:p-14 overflow-hidden bg-slate-950 shadow-2xl border border-slate-200 group text-left w-full ${isEven ? 'justify-start' : 'justify-end'}`}
                    >
                      {/* Background Photo */}
                      <img 
                        src={banner.img} 
                        alt={banner.title} 
                        className="absolute inset-0 w-full h-full object-cover brightness-[0.88] contrast-[1.05] group-hover:scale-105 transition-all duration-700 ease-out"
                      />
                      <div className={`absolute inset-0 z-0 bg-gradient-to-r ${isEven ? 'from-black/80 via-black/45 to-transparent' : 'from-transparent via-black/45 to-black/80'}`} />

                      {/* Top Badge & Number INSIDE Banner */}
                      <div className={`absolute top-6 md:top-8 z-10 flex items-center gap-4 ${isEven ? 'left-6 md:left-8' : 'right-6 md:right-8'}`}>
                        <span className="w-12 h-12 md:w-14 md:h-14 bg-[#005f9e] text-white flex items-center justify-center text-lg md:text-xl font-extrabold font-outfit shadow-lg">
                          {banner.num}
                        </span>
                        <span className="bg-white/90 border border-slate-200 text-[#005f9e] text-[10px] md:text-xs font-black px-3.5 py-1.5 uppercase font-outfit tracking-widest shadow-md">
                          {banner.badge}
                        </span>
                      </div>

                      {/* Text Container Box Over Image - Alternating Left/Right */}
                      <div className={`relative z-10 text-[#0f3a5e] w-full max-w-3xl pt-16 sm:pt-20 bg-white border border-slate-200/90 p-6 sm:p-10 md:p-12 shadow-2xl space-y-4 ${isEven ? 'border-l-4 border-l-[#005f9e]' : 'border-r-4 border-r-[#005f9e]'}`}>
                        <h4 className="text-h2 md:text-h2-lg font-extrabold font-outfit text-[#0f3a5e] uppercase tracking-tight leading-tight">
                          {banner.title}
                        </h4>

                        <p className="text-body md:text-body-lg text-[#1f2937] leading-relaxed font-medium max-w-2xl">
                          {banner.desc}
                        </p>

                        {/* Highlights Grid inside Banner Container */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-6 border-t border-slate-200">
                          {banner.highlights.map((hl, hIdx) => (
                            <div key={hIdx} className="bg-[#f3f7fa] p-3.5 border border-slate-200 flex items-center gap-2">
                              <span className="w-2.5 h-2.5 bg-[#005f9e] rounded-full shrink-0"></span>
                              <span className="text-xs font-bold text-slate-700 font-outfit">{hl}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}



          {/* Action Bar & CTA Buttons - Placed just above the news / next section at bottom */}
          <div className="flex flex-wrap items-center justify-between gap-6 bg-[#0f3a5e] text-white p-6 sm:p-8 shadow-xl text-left border-l-4 border-l-[#005f9e] mt-16">
            <div className="max-w-2xl">
              <h4 className="text-h3 md:text-h3-lg font-bold font-outfit text-white">
                {service.ctaText || `Discuss a ${service.title.toLowerCase()} requirement`}
              </h4>
              <p className="text-slate-300 text-xs sm:text-sm font-medium mt-1">
                Bluegrid Utilities works to agreed scopes, defined specifications and client quality standards.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 md:shrink-0">
              <Link 
                to={`/contact?subject=${encodeURIComponent(service.title)}`}
                className="text-nav inline-flex items-center justify-center px-8 py-3.5 bg-[#005f9e] hover:bg-white hover:text-[#0f3a5e] text-white font-bold uppercase tracking-wide transition-all duration-300 shadow-lg active:scale-95 font-outfit cursor-pointer border border-[#005f9e]"
              >
                {service.ctaText || "Discuss a project"}
              </Link>
              <Link 
                to="/services"
                className="text-nav inline-flex items-center justify-center px-8 py-3.5 bg-white/10 hover:bg-white hover:text-[#0f3a5e] text-white border border-white/30 font-bold uppercase tracking-wide transition-all duration-300 active:scale-95 font-outfit cursor-pointer"
              >
                View All Services
              </Link>
            </div>
          </div>

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
      <PageSEO />
      <div className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-12">

        {/* Left-Aligned Headline Section (Pack 03 Hero) */}
        <div className="text-left mb-16 max-w-4xl">
          <span className="inline-block px-3.5 py-1.5 bg-[#005f9e]/10 text-[#005f9e] text-xs font-black tracking-widest mb-3 font-outfit border border-[#005f9e]/20 uppercase">
            SERVICES
          </span>
          <h1 className="text-h1 md:text-h1-lg font-bold text-[#0f3a5e] tracking-tight leading-tight font-outfit">
            Utility Infrastructure Support
          </h1>
          <p className="text-body md:text-body-lg text-[#1f2937] leading-relaxed font-medium mt-4">
            Bluegrid Utilities supports authorised utility programmes through field delivery, project coordination and associated infrastructure services. Each capability is mobilised in line with the scope, competence, resources and approvals required for the project.
          </p>
          <div className="mt-6">
            <Link
              to="/contact"
              className="text-nav inline-flex items-center gap-2 px-7 py-3.5 bg-[#005f9e] hover:bg-[#0f3a5e] text-white font-bold tracking-wide uppercase font-outfit transition-all shadow-md"
            >
              <span>Discuss a Project</span>
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </div>
        </div>

        {/* Section Header (Pack 03 Section) */}
        <div className="text-left mb-14 max-w-3xl">
          <h2 className="text-h2 md:text-h2-lg font-bold text-[#0f3a5e] font-outfit">
            Our Capabilities
          </h2>
          <p className="text-body md:text-body-lg text-[#1f2937] leading-relaxed font-medium mt-2">
            Our service pages explain the areas in which Bluegrid can support utility delivery. The exact scope available on any project depends on the agreed requirements, competent resources, client instructions and applicable authorisations.
          </p>
        </div>

        {/* Zig-Zag Service Banner Cards Stack */}
        <div className="space-y-24 md:space-y-32 mb-24">
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
                  alt={service.hubTitle || service.title} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                />

                {/* Neutral Vignette / Gradient for Image Contrast */}
                <div className="absolute inset-0 bg-black/30" />

                {/* Floating Light Card Container (Alternating Right and Left in Zig-Zag pattern) */}
                <div className={`relative z-10 w-full p-4 sm:p-8 md:p-12 flex ${isEven ? 'justify-end' : 'justify-start'}`}>
                  <div className="w-full max-w-[500px] lg:max-w-[540px] bg-[#f3f7fa] text-[#0f3a5e] p-8 sm:p-10 md:p-12 shadow-2xl text-left border border-slate-200/90 border-t-4 border-t-[#005f9e]">
                    
                    {/* Circular Icon Ring */}
                    <div className="w-14 h-14 rounded-full border-2 border-[#005f9e]/30 bg-[#005f9e]/10 flex items-center justify-center text-[#005f9e] mb-6 shrink-0 font-bold">
                      <span className="material-symbols-outlined text-2xl">{service.icon}</span>
                    </div>

                    {/* Title */}
                    <h2 className="text-h2 md:text-h2-lg font-bold text-[#0f3a5e] font-outfit mb-4 leading-tight">
                      {service.hubTitle || service.title}
                    </h2>

                    {/* Description */}
                    <p className="text-body md:text-body-lg text-[#1f2937] leading-relaxed font-medium mb-8">
                      {service.desc}
                    </p>

                    {/* Link Text: View capability → (Pack 03 Point 12) */}
                    <Link 
                      to={`/services/${service.slug}`}
                      className="text-nav inline-flex items-center gap-3 bg-[#005f9e] hover:bg-[#0f3a5e] text-white font-bold tracking-wide px-8 py-3.5 rounded-full transition-all duration-300 shadow-lg group/btn font-outfit uppercase border border-transparent"
                    >
                      <span>View capability</span>
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

        {/* Discuss a Project Section (Pack 03 Points 9, 13, 14) */}
        <div className="bg-[#0f3a5e] text-white p-8 sm:p-12 md:p-16 border-l-4 border-l-[#005f9e] shadow-2xl text-left">
          <div className="max-w-4xl space-y-4">
            <span className="text-xs font-black tracking-widest text-[#005f9e] uppercase font-outfit block">
              Direct Project Consultation
            </span>
            <h3 className="text-h2 md:text-h2-lg font-bold font-outfit text-white">
              Discuss a Project
            </h3>
            <p className="text-body md:text-body-lg text-slate-200 leading-relaxed font-medium">
              Every utility project requirement is defined by its scope, programme constraints, technical specifications and required authorisations. Contact Bluegrid Utilities to discuss how our field operations and project coordination teams can support your delivery needs.
            </p>
            <div className="pt-4">
              <Link 
                to="/contact"
                className="text-nav inline-flex items-center gap-2 px-8 py-4 bg-[#005f9e] hover:bg-[#004c80] text-white font-extrabold tracking-wide uppercase font-outfit transition-all shadow-md active:scale-95"
              >
                <span>Discuss a Project</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>

      </div>
    </MotionSection>
  );
};

export default ServicesPage;
