import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import MotionSection from './MotionSection';
import selbertImg from '../assets/images/updated/SELBERT GEORGE.jpeg';
import gauthamImg from '../assets/images/updated/And goutham raj.jpeg';

const LinkedInIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

const FacebookIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const departmentTeams = [
  {
    id: "directors",
    name: "Directors",
    badge: "EXECUTIVE DIRECTORS",
    members: [
      {
        name: "SELBERT GEORGE",
        role: "Managing Director",
        desc: "Selbert George is the Managing Director of Bluegrid Utilities, leading operational development, workforce coordination, infrastructure deployment, and project delivery across utility operations within the UK.\nHe holds a Master's degree in International Business Management from Griffith College Dublin, Ireland, and has experience in operational management, workforce coordination, and infrastructure project support.\nHis focus is on building compliance-focused operational systems, scalable workforce structures, and reliable utility infrastructure support services.",
        img: selbertImg,
        social: { linkedin: "#", facebook: "#", instagram: "#" }
      },
      {
        name: "GAUTHAM RAJ",
        role: "Project Manager & Head of Operations",
        desc: "Responsible for high-level operational project management, workforce deployment, field coordination, and day-to-day supervision of critical infrastructure projects across the UK water and utility sectors.",
        img: gauthamImg,
        social: { linkedin: "#", facebook: "#", instagram: "#" }
      }
    ]
  },
  {
    id: "operations",
    name: "Operations",
    badge: "OPERATIONS TEAM",
    members: [
      {
        name: "ALEXANDER WRIGHT",
        role: "Head of Operations",
        desc: "Overseeing field force dispatch, regional logistics coordination, operative scheduling, and operational delivery across utility programmes.",
        img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=600",
        social: { linkedin: "#", facebook: "#", instagram: "#" }
      },
      {
        name: "SARAH JENKINS",
        role: "Operations Dispatch Manager",
        desc: "Managing day-to-day field operative routing, vehicle fleet logistics, emergency response dispatch, and SLA fulfillment.",
        img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600",
        social: { linkedin: "#", facebook: "#", instagram: "#" }
      }
    ]
  },
  {
    id: "commercial",
    name: "Commercial",
    badge: "COMMERCIAL TEAM",
    members: [
      {
        name: "DAVID MILLER",
        role: "Commercial Director",
        desc: "Leading contract negotiations, commercial valuations, client cost engineering, and risk management for UK utility contracts.",
        img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=600",
        social: { linkedin: "#", facebook: "#", instagram: "#" }
      },
      {
        name: "EMMA THOMPSON",
        role: "Senior Estimator & Procurement Lead",
        desc: "Managing tendering processes, subcontractor agreements, plant procurement, and commercial compliance.",
        img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=600",
        social: { linkedin: "#", facebook: "#", instagram: "#" }
      }
    ]
  },
  {
    id: "project-delivery",
    name: "Project Delivery",
    badge: "PROJECT DELIVERY TEAM",
    members: [
      {
        name: "JAMES HARRISON",
        role: "Project Delivery Manager",
        desc: "Supervising clean water meter installation rollouts, excavation quality control, surface reinstatement, and zero-defect site handovers.",
        img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600",
        social: { linkedin: "#", facebook: "#", instagram: "#" }
      },
      {
        name: "CLAIRE ROBERTS",
        role: "Site Operations Supervisor",
        desc: "Coordinating field teams, managing NRSWA streetworks compliance, site safety barriers, and local council permits.",
        img: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&q=80&w=600",
        social: { linkedin: "#", facebook: "#", instagram: "#" }
      }
    ]
  },
  {
    id: "health-safety",
    name: "Health & Safety",
    badge: "HEALTH & SAFETY TEAM",
    members: [
      {
        name: "MICHAEL BENNETT",
        role: "HSE Compliance Manager",
        desc: "Enforcing zero-harm policies, auditing RAMS documentation, conducting site safety inspections, and verifying CSCS/EUSR credentials.",
        img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=600",
        social: { linkedin: "#", facebook: "#", instagram: "#" }
      },
      {
        name: "LISA MORGAN",
        role: "Environmental & Safety Auditor",
        desc: "Managing environmental compliance, carbon reduction initiatives, site waste management, and safety toolbox talk registers.",
        img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=600",
        social: { linkedin: "#", facebook: "#", instagram: "#" }
      }
    ]
  },
  {
    id: "recruitment",
    name: "Recruitment",
    badge: "RECRUITMENT & ONBOARDING",
    members: [
      {
        name: "ROBERT TAYLOR",
        role: "Head of Resourcing",
        desc: "Managing workforce resourcing, Right-to-Work verification, candidate screening, and operative deployment across UK sites.",
        img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=600",
        social: { linkedin: "#", facebook: "#", instagram: "#" }
      },
      {
        name: "HANNAH WALKER",
        role: "Compliance & Onboarding Specialist",
        desc: "Verifying EUSR status, CSCS cards, training qualifications, and coordinating operative onboarding inductions.",
        img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=600",
        social: { linkedin: "#", facebook: "#", instagram: "#" }
      }
    ]
  },
  {
    id: "administration",
    name: "Administration",
    badge: "ADMINISTRATION TEAM",
    members: [
      {
        name: "SOPHIA CHEN",
        role: "Business Administration Lead",
        desc: "Managing back-office operations, client documentation archives, executive scheduling, and administrative logistics.",
        img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600",
        social: { linkedin: "#", facebook: "#", instagram: "#" }
      },
      {
        name: "OLIVER SCOTT",
        role: "Client Reporting & Appointment Coordinator",
        desc: "Coordinating customer appointment bookings, updating real-time client dashboards, and handling resident communications.",
        img: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&q=80&w=600",
        social: { linkedin: "#", facebook: "#", instagram: "#" }
      }
    ]
  }
];

const MemberCard = ({ member }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const isOpen = isHovered || isClicked;

  return (
    <div 
      className="w-full sm:w-[300px] md:w-[330px] lg:w-[350px] flex-shrink-0 cursor-pointer group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setIsClicked(!isClicked)}
    >
      <div className="relative flex flex-col rounded-none overflow-hidden bg-white shadow-lg h-full border border-slate-200 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#005f9e]">
        
        {/* Social Icons Overlay */}
        <div className={`absolute top-3 right-3 flex flex-col gap-1.5 transition-all duration-300 z-20 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
          <a href={member.social?.linkedin || '#'} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-none bg-[#0f3a5e] text-white flex items-center justify-center hover:bg-[#005f9e] transition-all shadow-md">
            <LinkedInIcon />
          </a>
          <a href={member.social?.facebook || '#'} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-none bg-[#0f3a5e] text-white flex items-center justify-center hover:bg-[#005f9e] transition-all shadow-md">
            <FacebookIcon />
          </a>
          <a href={member.social?.instagram || '#'} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-none bg-[#0f3a5e] text-white flex items-center justify-center hover:bg-[#005f9e] transition-all shadow-md">
            <InstagramIcon />
          </a>
        </div>

        {/* Photo Container */}
        <div className="aspect-[4/4.5] w-full relative overflow-hidden bg-slate-900">
          <img alt={member.name} className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" src={member.img} />
        </div>
        
        {/* Content Overlay */}
        <div className={`bg-white p-5 absolute bottom-0 left-0 right-0 z-10 rounded-none border-t border-slate-200 flex flex-col justify-start h-[290px] sm:h-[310px] transition-all duration-500 ease-out ${isOpen ? 'translate-y-0' : 'translate-y-[215px] sm:translate-y-[230px]'}`}>
          <div className="mb-2">
            <h3 className="text-lg sm:text-xl text-[#0f3a5e] font-bold tracking-tight uppercase leading-snug mb-1 font-outfit">{member.name}</h3>
            <p className="text-[11px] text-[#005f9e] font-bold tracking-wider uppercase min-h-[28px] flex items-center font-outfit">{member.role}</p>
          </div>
          
          <div className={`text-slate-600 text-xs leading-relaxed transition-all duration-500 space-y-2 flex-1 overflow-y-auto pr-1 pb-3 font-medium ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            {member.desc.split('\n').map((para, pIdx) => (
              <p key={pIdx}>{para}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Management = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeDeptId = searchParams.get('dept') || 'all';

  const handleTabClick = (id) => {
    if (id === 'all') {
      searchParams.delete('dept');
      setSearchParams(searchParams);
    } else {
      setSearchParams({ dept: id });
    }
  };

  const filteredDepartments = activeDeptId === 'all'
    ? departmentTeams
    : departmentTeams.filter(d => d.id === activeDeptId);

  return (
    <MotionSection 
      as="section" 
      className="py-16 md:py-24 bg-[#f8fafc] font-sans relative overflow-hidden" 
      id="management"
    >
      <div className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-12">
      
        {/* Department Filter Tabs Bar */}
        <div className="flex items-center justify-start md:justify-center overflow-x-auto gap-2 pb-6 mb-16 border-b border-slate-200 no-scrollbar">
          <button
            onClick={() => handleTabClick('all')}
            className={`px-5 py-3 text-xs font-bold uppercase tracking-widest font-outfit whitespace-nowrap transition-all duration-300 rounded-none border ${
              activeDeptId === 'all'
                ? 'bg-[#0f3a5e] text-white border-[#0f3a5e] shadow-md'
                : 'bg-white text-slate-600 border-slate-200 hover:border-[#005f9e] hover:text-[#005f9e]'
            }`}
          >
            All Departments
          </button>
          
          {departmentTeams.map((dept) => (
            <button
              key={dept.id}
              onClick={() => handleTabClick(dept.id)}
              className={`px-5 py-3 text-xs font-bold uppercase tracking-widest font-outfit whitespace-nowrap transition-all duration-300 rounded-none border flex items-center gap-2 ${
                activeDeptId === dept.id
                  ? 'bg-[#005f9e] text-white border-[#005f9e] shadow-md'
                  : 'bg-white text-slate-600 border-slate-200 hover:border-[#005f9e] hover:text-[#005f9e]'
              }`}
            >
              <span>{dept.name}</span>
            </button>
          ))}
        </div>

        {/* Render Departments and Member Cards Directly */}
        <div className="space-y-20">
          {filteredDepartments.map((dept) => (
            <div key={dept.id} className="space-y-8 text-left">
              
              {/* Department Header Title */}
              <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                <div className="flex items-center gap-3">
                  <span className="w-3 h-3 bg-[#005f9e] rounded-none" />
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#0f3a5e] uppercase tracking-tight font-outfit">
                    {dept.name} Department
                  </h3>
                </div>
                <span className="text-xs font-bold text-[#005f9e] uppercase tracking-widest font-outfit bg-[#005f9e]/10 px-3 py-1 border border-[#005f9e]/20">
                  {dept.badge}
                </span>
              </div>

              {/* Department Member Cards Row/Grid */}
              <div className="flex flex-col md:flex-row flex-wrap gap-8 justify-center items-stretch">
                {dept.members.map((member, idx) => (
                  <MemberCard key={idx} member={member} />
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </MotionSection>
  );
};

export default Management;
