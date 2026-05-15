import React, { useState } from 'react';
import MotionSection from './MotionSection';
import selbertImg from '../assets/images/updated/SELBERT GEORGE.jpeg';
import gauthamImg from '../assets/images/updated/And goutham raj.jpeg';
import albertImg from '../assets/images/updated/Albert .jpeg';

const LinkedInIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

const FacebookIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const team = [
  {
    name: "SELBERT GEORGE",
    role: "Managing Director",
    desc: "Selbert George leads operational development and infrastructure deployment across utility operations within the UK. With a Master’s in International Business Management, his focus remains on building compliance-focused operational systems.",
    img: selbertImg,
    social: { linkedin: "#", facebook: "#", instagram: "#" }
  },
  {
    name: "GAUTHAM RAJ",
    role: "Project Manager & Head of Operations",
    desc: "Responsible for high-level operational project management, workforce deployment, field coordination, and day-to-day supervision of critical infrastructure projects.",
    img: gauthamImg,
    social: { linkedin: "#", facebook: "#", instagram: "#" }
  },
  {
    name: "ALBERT DSILVA",
    role: "Assistant Project Manager",
    desc: "Supports operational coordination, compliance follow-up, onboarding procedures, and project support activities ensuring seamless delivery cycles.",
    img: albertImg,
    social: { linkedin: "#", facebook: "#", instagram: "#" }
  }
];

const MemberCard = ({ member }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const isOpen = isHovered || isClicked;

  return (
    <div 
      className="w-full md:w-[420px] flex-shrink-0 md:snap-center cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setIsClicked(!isClicked)}
    >
      <div className={`relative flex flex-col rounded-[2.5rem] overflow-hidden bg-white shadow-xl shadow-[#0B2545]/5 h-full border border-white/20 transition-shadow duration-300 ${isOpen ? 'shadow-2xl shadow-[#0B2545]/10' : ''}`}>
        {/* Social Icons Overlay - Appear on Hover or Click */}
        <div className={`absolute top-6 right-6 flex flex-col gap-3 transition-all duration-500 z-20 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
          <a href={member.social.linkedin} className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#0B2545] hover:bg-[#0EA5E9] hover:text-white transition-all shadow-lg">
            <LinkedInIcon />
          </a>
          <a href={member.social.facebook} className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#0B2545] hover:bg-[#0EA5E9] hover:text-white transition-all shadow-lg">
            <FacebookIcon />
          </a>
          <a href={member.social.instagram} className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#0B2545] hover:bg-[#0EA5E9] hover:text-white transition-all shadow-lg">
            <InstagramIcon />
          </a>
        </div>

        <div className="aspect-[4/5] w-full relative overflow-hidden">
          <img alt={member.name} className="w-full h-full object-cover transition-transform duration-700" src={member.img} />
        </div>
        
        {/* Content Overlay */}
        <div className={`bg-white p-8 absolute bottom-0 left-0 right-0 z-10 rounded-t-[2rem] border-t border-white/50 flex flex-col transition-all duration-500 ease-out will-change-transform ${isOpen ? 'translate-y-0' : 'translate-y-0'}`}>
          <div className="mb-4">
            <h3 className="text-xl md:text-2xl text-[#0B2545] font-black tracking-tight leading-none mb-2">{member.name}</h3>
            <p className="text-[12px] text-[#0EA5E9] font-bold tracking-widest uppercase">{member.role}</p>
          </div>
          
          {/* Hidden Description - Slides up on Hover or Click */}
          <div className={`overflow-hidden transition-all duration-500 ${isOpen ? 'max-h-[200px] opacity-100 mb-6' : 'max-h-0 opacity-0'}`}>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              {member.desc}
            </p>
          </div>

          {/* Removed tags section */}
        </div>
      </div>
    </div>
  );
};

const Management = () => {
  return (
    <MotionSection as="section" className="py-24 bg-[#f7f9fb] blueprint-bg relative overflow-hidden" id="management">
      {/* Abstract Gradient Glows */}
      <div className="absolute -top-20 -left-20 w-64 h-64 bg-[#0EA5E9]/10 rounded-full blur-[80px] -z-10"></div>
      <div className="absolute top-1/2 -right-20 w-80 h-80 bg-[#0B2545]/5 rounded-full blur-[80px] -z-10"></div>

      <div className="max-w-[1400px] mx-auto px-6">
        {/* Header Section */}
        <div className="mb-12 text-center lg:text-left">
          <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
            <span className="w-10 h-0.5 bg-[#0EA5E9]"></span>
            <span className="text-[14px] font-semibold text-[#0B2545] uppercase tracking-widest">Leadership Profile</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-[#0B2545] mb-6 tracking-tighter leading-tight">
            Leadership & Management
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            Experienced operational leadership driving workforce coordination, compliance standards, infrastructure deployment, and project delivery across utility operations.
          </p>
        </div>

        {/* Metric Badges */}
        <div className="flex flex-wrap gap-3 mb-10">
          {[
            // { label: "UK Operations", icon: "hub" },
            // { label: "Certified Management", icon: "verified" },
            // { label: "Infrastructure Leadership", icon: "foundation" }
          ].map((badge, idx) => (
            <div key={idx} className="flex items-center gap-2 bg-[#0B2545]/5 px-4 py-2 rounded-full border border-[#0B2545]/10">
              <span className="material-symbols-outlined text-[#0B2545] text-[18px]">{badge.icon}</span>
              <span className="text-[14px] font-semibold text-[#0B2545]">{badge.label}</span>
            </div>
          ))}
        </div>

        {/* Leadership Carousel / Vertical Stack on Mobile */}
        <div className="flex flex-col md:flex-row gap-8 md:overflow-x-auto pb-12 md:scrollbar-hide md:snap-x md:snap-mandatory items-stretch">
          {team.map((member, idx) => (
            <MemberCard key={idx} member={member} />
          ))}
        </div>
      </div>
    </MotionSection>
  );
};

export default Management;
