import React from 'react';
import { useSearchParams } from 'react-router-dom';
import MotionSection from './MotionSection';
import { ProjectCard } from './ui/ProjectCard';
import img3 from '../assets/images/updated/Utility infrastructure.avif';
import img4 from '../assets/images/Telecoms and field operations support.jfif';
import img5 from '../assets/images/updated/img 6.jpg';
import img6 from '../assets/images/updated/Compliance & Onboarding.avif';
import img7 from '../assets/images/Training coordination and deployment planning.jpg';
import img8 from '../assets/images/Sectors/watermeter.jpeg';

const services = [
  { 
    slug: "water-meter",
    title: "Water Meter Project Support",
    desc: "We assist with workforce planning, scheduling, field coordination, and operational support for smart meter and water meter installation projects.",
    img: img8 
  },
  { 
    slug: "utility-infra",
    title: "Utility Infrastructure Support",
    desc: "We support infrastructure-related projects requiring reliable labour coordination, site preparation support, and operational workforce management.",
    img: img3 
  },
  { 
    slug: "telecoms",
    title: "Telecoms & Field Support",
    desc: "Delivering reliable logistics, field technician coordination, and operational field team coverage for major networks.",
    img: img4 
  },
  { 
    slug: "project-coord",
    title: "Project Coordination",
    desc: "Our project team supports scheduling, reporting, communication, compliance tracking, and operational updates between workers, supervisors, and project partners.",
    img: img5 
  },
  { 
    slug: "compliance",
    title: "Compliance & Onboarding",
    desc: "We operate a structured vetting and onboarding process including identification checks, right-to-work verification, training status checks, availability, and deployment readiness.",
    img: img6 
  },
  { 
    slug: "training",
    title: "Training Coordination & Deployment Planning",
    desc: "Continuous training management, qualifications auditing, and logistics coordination to maximize on-site safety and efficiency.",
    img: img7 
  }
];

const ServiceCard = ({ service }) => (
  <div className="w-[300px] sm:w-[350px] shrink-0 flex flex-col h-full">
    <ProjectCard
      imgSrc={service.img}
      title={service.title}
      description={service.desc}
      link={`/services?select=${service.slug}`}
      linkText="Read More"
      className="w-full h-full flex flex-col"
    />
  </div>
);

const Services = () => {
  const [searchParams] = useSearchParams();
  const selectedService = searchParams.get('select');

  // Double the array for a seamless loop
  const doubledServices = [...services, ...services];

  if (selectedService) return null;

  return (
    <MotionSection as="section" className="py-24 bg-white overflow-hidden" id="services">
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-container:hover .marquee-content {
          animation-play-state: paused;
        }
      `}</style>

      <div className="max-w-[1600px] mx-auto px-6">
        <div className="marquee-container relative overflow-hidden">
          <div
            className="marquee-content flex gap-6 w-fit animate-[marquee_50s_linear_infinite] py-6"
          >
            {doubledServices.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>
        </div>
      </div>
    </MotionSection>
  );
};

export default Services;