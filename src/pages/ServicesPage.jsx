import React from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import MotionSection from '../components/MotionSection';
import { ProjectCard } from '../components/ui/ProjectCard';
import img2 from '../assets/images/Sectors/watermeter2.jpeg';
import img3 from '../assets/images/projectcordination.jpeg';
import img4 from '../assets/images/combliance.jpeg';
import img5 from '../assets/images/infrastructure.jpeg';
import imgTelecoms from '../assets/images/Telecoms and field operations support.jfif';
import imgTraining from '../assets/images/Training coordination and deployment planning.jpg';

const servicesData = [
  {
    num: "01",
    slug: "water-meter",
    title: "Water Meter Project Support",
    desc: "We assist with workforce planning, scheduling, field coordination, and operational support for smart meter and water meter installation projects.",
    img: img2,
    details: {
      headline: "Comprehensive field force coordination for clean water & smart metering rollouts.",
      overview: "Our water meter support division coordinates field operatives, scheduling logistics, and customer appointments to ensure high-efficiency rollout and installation rates. We work alongside water authorities, civil partners, and major utility contractors across the UK.",
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
    slug: "utility-infra",
    title: "Utility Infrastructure Support",
    desc: "We support infrastructure-related projects requiring reliable labour coordination, site preparation support, and operational workforce management.",
    img: img5,
    details: {
      headline: "Vetted project labor and support for UK utility network construction.",
      overview: "We provide operational support and labor coordination for utility infrastructure development, including gas, electricity, and water grids. We ensure project teams have access to fully qualified, vetted, and compliant field personnel.",
      keyAreas: [
        "Infrastructure civil works team coordination",
        "Gas and electricity distribution support logistics",
        "Site preparation coordination & operative check-ins",
        "EUSR card and CSCS safety verification checks",
        "Subcontractor compliance tracking & reporting"
      ],
      benefits: [
        "Fast turnaround in scaling field support personnel",
        "Strict verification of necessary security and sector certifications",
        "Seamless reporting between site management and coordinators"
      ]
    }
  },
  {
    num: "03",
    slug: "telecoms",
    title: "Telecoms & Field Operations Support",
    desc: "Delivering reliable logistics, field technician coordination, and operational field team coverage for major networks.",
    img: imgTelecoms,
    details: {
      headline: "High-efficiency technician dispatch & support for fibre and telecom rollouts.",
      overview: "We coordinate logistics and technician scheduling for nationwide telecom projects, including FTTH rollouts and cell tower expansions. Our goal is to ensure operatives are dispatched with correct tooling, training records, and routing.",
      keyAreas: [
        "Technician routing & daily work program optimization",
        "Fibre network rollout field dispatch support",
        "SLA (Service Level Agreement) monitoring & coordination",
        "Mobile network site maintenance team booking",
        "Asset tracking & parts logistics coordination"
      ],
      benefits: [
        "Real-time communication channels between techs and operators",
        "Reduced travel overheads through smart dispatch scheduling",
        "Compliant logistics planning minimizing field downtime"
      ]
    }
  },
  {
    num: "04",
    slug: "project-coord",
    title: "Project Coordination",
    desc: "Our project team supports scheduling, reporting, communication, compliance tracking, and operational updates between workers, supervisors, and project partners.",
    img: img3,
    details: {
      headline: "Operational management, real-time reporting, and delivery support.",
      overview: "Our back-office coordinators act as the central communication hub between project partners, supervisors, and field technicians. We track project milestones, generate progress reports, and verify regulatory audit trails.",
      keyAreas: [
        "Real-time field updates & operational reporting",
        "Stakeholder dashboard updates & milestone tracking",
        "Operative shift planning & emergency dispatch",
        "Regulatory compliance audits & document gathering",
        "Incident management support & delay log checks"
      ],
      benefits: [
        "Centralized communications reducing operational overheads",
        "Accurate, real-time progress data for project management",
        "Reduced regulatory risks through robust documentation processes"
      ]
    }
  },
  {
    num: "05",
    slug: "compliance",
    title: "Compliance & Onboarding",
    desc: "We operate a structured vetting and onboarding process including identification checks, right-to-work verification, training status checks, availability, and deployment readiness.",
    img: img4,
    details: {
      headline: "Structured vetting, identity checks, and operative training audits.",
      overview: "We enforce compliance checks for field workforces. From right-to-work verification and identity vetting to check-ups on mandatory industry qualifications, we ensure every operative is fully compliant before they arrive on-site.",
      keyAreas: [
        "Right-to-work verification & identity checks",
        "EUSR status audits & CSCS credential validation",
        "Health & safety training record compliance checks",
        "Operative onboarding profile management",
        "Continuous renewal tracking for certifications"
      ],
      benefits: [
        "100% compliance-first delivery preventing on-site delays",
        "Protected digital profiles for audited operative records",
        "Reduced liability through verified qualification registers"
      ]
    }
  },
  {
    num: "06",
    slug: "training",
    title: "Training Coordination & Deployment Planning",
    desc: "Continuous training management, qualifications auditing, and logistics coordination to maximize on-site safety and efficiency.",
    img: imgTraining,
    details: {
      headline: "Continuous learning management and optimized operative logistics.",
      overview: "We manage training programs, course bookings, and qualification tracking to support continuous workforce upskilling. Combined with smart deployment planning, we coordinate the delivery of compliant, well-equipped teams.",
      keyAreas: [
        "Training gap analysis & course booking support",
        "Upskilling management for utility credentials",
        "PPE inventory & logistics audit coordination",
        "Vehicle fleet deployment & routing support",
        "Operative availability checks & schedule optimization"
      ],
      benefits: [
        "Sustained workforce compliance and safety standards",
        "Reduced planning time with automated qualification reminders",
        "Highly efficient logistics and supply tracking"
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
