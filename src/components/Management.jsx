import React, { useState } from 'react';
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

const team = [
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
];

const MemberCard = ({ member }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const isOpen = isHovered || isClicked;

  return (
    <div 
      className="w-full md:w-[440px] flex-shrink-0 cursor-pointer group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setIsClicked(!isClicked)}
    >
      <div className="relative flex flex-col rounded-none overflow-hidden bg-white shadow-xl h-full border border-slate-200 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#005f9e]">
        
        {/* Social Icons Overlay - Boxy */}
        <div className={`absolute top-4 right-4 flex flex-col gap-2 transition-all duration-300 z-20 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
          <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-none bg-[#0f3a5e] text-white flex items-center justify-center hover:bg-[#005f9e] transition-all shadow-md">
            <LinkedInIcon />
          </a>
          <a href={member.social.facebook} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-none bg-[#0f3a5e] text-white flex items-center justify-center hover:bg-[#005f9e] transition-all shadow-md">
            <FacebookIcon />
          </a>
          <a href={member.social.instagram} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-none bg-[#0f3a5e] text-white flex items-center justify-center hover:bg-[#005f9e] transition-all shadow-md">
            <InstagramIcon />
          </a>
        </div>

        {/* Photo Container */}
        <div className="aspect-[4/5] w-full relative overflow-hidden bg-slate-900">
          <img alt={member.name} className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" src={member.img} />
        </div>
        
        {/* Content Overlay - Height adjusted for Uniform Alignment with slide-up effect (Boxy) */}
        <div className={`bg-white p-6 sm:p-8 absolute bottom-0 left-0 right-0 z-10 rounded-none border-t border-slate-200 flex flex-col justify-start h-[370px] sm:h-[400px] transition-all duration-500 ease-out ${isOpen ? 'translate-y-0' : 'translate-y-[260px] sm:translate-y-[300px]'}`}>
          <div className="mb-3">
            <h3 className="text-xl sm:text-2xl text-[#0f3a5e] font-bold tracking-tight uppercase leading-none mb-2 font-outfit">{member.name}</h3>
            <p className="text-xs text-[#005f9e] font-bold tracking-widest uppercase min-h-[32px] flex items-center font-outfit">{member.role}</p>
          </div>
          
          <div className={`text-slate-600 text-xs sm:text-sm leading-relaxed transition-all duration-500 space-y-3 flex-1 overflow-y-auto pr-1 pb-4 font-medium ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
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
  return (
    <MotionSection as="section" className="py-20 md:py-24 bg-[#f8fafc] border-t border-slate-200 font-sans relative overflow-hidden" id="management">
      <div className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header Section */}
        <div className="mb-14 text-center max-w-3xl mx-auto">
          <span className="inline-block px-4 py-1.5 rounded-none bg-[#005f9e]/10 text-[#005f9e] text-xs font-black uppercase tracking-widest mb-4 border border-[#005f9e]/20">
            LEADERSHIP PROFILE
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0f3a5e] tracking-tight uppercase leading-tight mb-4">
            LEADERSHIP & MANAGEMENT
          </h2>
          <p className="text-slate-600 text-base md:text-lg leading-relaxed font-medium">
            Experienced operational leadership driving workforce coordination, compliance standards, infrastructure deployment, and project delivery across UK utility operations.
          </p>
        </div>

        {/* Leadership Cards Stack */}
        <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch">
          {team.map((member, idx) => (
            <MemberCard key={idx} member={member} />
          ))}
        </div>
      </div>
    </MotionSection>
  );
};

export default Management;
