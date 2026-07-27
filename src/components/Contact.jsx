import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import MotionSection from './MotionSection';
import logo from '../assets/images/logo.png';

const Contact = () => {
  const [searchParams] = useSearchParams();
  const initialSubject = searchParams.get('subject') || 'Project Support';
  const [subject, setSubject] = useState(initialSubject);

  const defaultSubjects = [
    'Recruitment Enquiry',
    'Project Support',
    'Partnership Discussion',
    'General Enquiry'
  ];

  const subjects = defaultSubjects.includes(initialSubject)
    ? defaultSubjects
    : [initialSubject, ...defaultSubjects];

  const contactDetails = [
    { 
      role: "Recruitment & Workforce", 
      value: "recruitment@bluegridutilities.com", 
      href: "mailto:recruitment@bluegridutilities.com",
      icon: "mail" 
    },
    { 
      role: "General Enquiries", 
      value: "enquiries@bluegridutilities.com", 
      href: "mailto:enquiries@bluegridutilities.com",
      icon: "mail" 
    },
    { 
      role: "Office Address", 
      value: "Stuart House, St Johns Street, Peterborough, PE1 5DD", 
      href: "https://maps.google.com/?q=Stuart House, St Johns Street, Peterborough, PE1 5DD",
      icon: "location_on" 
    },
    { 
      role: "Office Number", 
      value: "+442034880934", 
      href: "tel:+442034880934",
      icon: "call" 
    }
  ];

  return (
    <div className="w-full font-sans">
      {/* Contact Hero Banner */}
      <MotionSection 
        as="div" 
        className="relative bg-[#0f3a5e] py-20 md:py-24 text-center text-white overflow-hidden blueprint-bg"
        id="contact-hero"
        initial="hidden"
        animate="visible"
        whileInView={undefined}
        viewport={undefined}
      >
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#032879]/90 to-[#005f9e]/85 mix-blend-multiply z-10" />
        
        {/* Decorative background glows */}
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#0ea5e9]/20 rounded-full blur-[120px] z-10" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-[#032879]/30 rounded-full blur-[120px] z-10" />
        
        <div className="relative z-20 max-w-4xl mx-auto px-6 flex flex-col items-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#005f9e] text-white text-[10px] sm:text-xs font-black uppercase tracking-widest mb-6 font-outfit shadow-sm">
            Get In Touch
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight mb-6 font-outfit leading-tight text-white">
            Contact Us
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-slate-200 max-w-2xl leading-relaxed font-medium">
            Have questions about recruitment, project support, or compliance services? Our support team is ready to assist you across the UK.
          </p>
        </div>
      </MotionSection>

      {/* Main Contact Form & Details Section */}
      <MotionSection 
        as="section" 
        className="py-20 bg-white relative w-full overflow-hidden" 
        id="contact-details"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch w-full">

            {/* Left Side: Contact Directory */}
            <div className="flex flex-col gap-6 w-full h-full">
              <div className="flex-1 rounded-[2.5rem] bg-[#f0f5fa] border border-blue-100/60 shadow-sm w-full overflow-hidden divide-y divide-blue-200/20 flex flex-col justify-between">
                {contactDetails.map((contact, i) => (
                  <div key={i} className="flex-1 flex items-center justify-between gap-4 px-8 py-5 hover:bg-white/65 transition-colors duration-200 group">
                    <div className="min-w-0 text-left">
                      <p className="text-[10px] font-black text-brand-primary uppercase tracking-[0.2em] mb-1">{contact.role}</p>
                      <a
                        href={contact.href}
                        className="text-sm font-medium text-brand-dark hover:text-brand-primary transition-colors break-words leading-tight block"
                      >
                        {contact.value}
                      </a>
                    </div>
                    <div className="shrink-0 w-12 h-12 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center text-slate-300 group-hover:text-brand-primary group-hover:border-brand-primary/20 transition-all duration-300">
                      <span className="material-symbols-outlined text-xl">{contact.icon}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Brand Logo Card */}
              <div className="flex-1 p-8 sm:p-10 rounded-[2.5rem] bg-[#f0f5fa] border border-blue-100/60 shadow-sm flex flex-col items-center justify-center text-center gap-6 group relative overflow-hidden">
                <div className="absolute inset-0 blueprint-bg opacity-[0.03] pointer-events-none" />
                
                <img 
                  src={logo} 
                  alt="BlueGrid Utilities" 
                  className="h-16 w-auto object-contain transition-transform duration-500 group-hover:scale-105" 
                />
                
                <p className="text-slate-400 text-xs sm:text-sm max-w-xs leading-relaxed font-medium">
                  Delivering safe, compliant, and ready workforce coordination support across the UK utility and infrastructure networks.
                </p>
              </div>
            </div>

            {/* Right Side: Simple Contact Form */}
            <div className="bg-[#f0f5fa] p-8 md:p-12 rounded-[3rem] shadow-2xl shadow-blue-900/5 border border-blue-100/60 flex flex-col justify-center">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2 text-left">
                    <label className="text-[10px] font-black text-brand-primary uppercase tracking-widest ml-1">Your Name</label>
                    <input type="text" placeholder="John Doe" className="w-full px-6 py-4 rounded-2xl bg-white border border-blue-100/50 focus:border-brand-primary transition-all outline-none" />
                  </div>
                  <div className="space-y-2 text-left">
                    <label className="text-[10px] font-black text-brand-primary uppercase tracking-widest ml-1">Email Address</label>
                    <input type="email" placeholder="john@example.com" className="w-full px-6 py-4 rounded-2xl bg-white border border-blue-100/50 focus:border-brand-primary transition-all outline-none" />
                  </div>
                </div>
                <div className="space-y-2 text-left">
                  <label className="text-[10px] font-black text-brand-primary uppercase tracking-widest ml-1">Subject</label>
                  <select 
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full px-6 py-4 rounded-2xl bg-white border border-blue-100/50 focus:border-brand-primary transition-all outline-none appearance-none"
                  >
                    {subjects.map((sub, idx) => (
                      <option key={idx} value={sub}>{sub}</option>
                    ))}
                  </select>
                </div>
                <div className="space-y-2 text-left">
                  <label className="text-[10px] font-black text-brand-primary uppercase tracking-widest ml-1">Your Message</label>
                  <textarea rows="4" placeholder="How can we help you?" className="w-full px-6 py-4 rounded-2xl bg-white border border-blue-100/50 focus:border-brand-primary transition-all outline-none resize-none"></textarea>
                </div>
                <button className="w-full py-5 bg-brand-primary text-white rounded-2xl font-black uppercase tracking-widest hover:bg-brand-dark transition-all duration-300 shadow-xl shadow-brand-primary/20 group flex items-center justify-center gap-3">
                  Send Message
                  <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">send</span>
                </button>
              </form>
            </div>

          </div>
        </div>
      </MotionSection>
    </div>
  );
};
export default Contact;
