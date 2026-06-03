import React from 'react';
import MotionSection from './MotionSection';

const Contact = () => {
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
    <MotionSection as="section" className="py-24 bg-white relative w-full overflow-hidden font-sans" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-primary/10 text-brand-primary text-sm font-medium tracking-wide mb-6">
            Contact Us
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-dark mb-6 tracking-tight">
            JOIN OUR WORKFORCE
          </h2>
          <p className="text-gray-600 text-lg">
            For recruitment enquiries, project support, or partnership discussions, please contact our team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start w-full">

          {/* Left Side: Contact Directory */}
          <div className="space-y-6 w-full">
            <div className="rounded-[2.5rem] bg-slate-50 border border-slate-100 shadow-sm w-full overflow-hidden divide-y divide-slate-200/50">
              {contactDetails.map((contact, i) => (
                <div key={i} className="flex items-center justify-between gap-4 px-8 py-6 hover:bg-white transition-colors duration-200 group">
                  <div className="min-w-0">
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
            
            {/* <div className="p-8 rounded-[2.5rem] bg-brand-dark text-white relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-700" />
              <div className="relative z-10 flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center">
                  <span className="material-symbols-outlined text-sky-400">info</span>
                </div>
                <div>
                  <h4 className="text-lg font-bold">Operational Hours</h4>
                  <p className="text-blue-100/70 text-sm italic">Monday — Friday: 08:30 - 17:30</p>
                </div>
              </div>
            </div> */}
          </div>

          {/* Right Side: Simple Contact Form */}
          <div className="bg-white p-8 md:p-12 rounded-[3rem] shadow-2xl shadow-slate-200/60 border border-slate-100">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-brand-primary uppercase tracking-widest ml-1">Your Name</label>
                  <input type="text" placeholder="John Doe" className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:border-brand-primary focus:bg-white transition-all outline-none" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-brand-primary uppercase tracking-widest ml-1">Email Address</label>
                  <input type="email" placeholder="john@example.com" className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:border-brand-primary focus:bg-white transition-all outline-none" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-brand-primary uppercase tracking-widest ml-1">Subject</label>
                <select className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:border-brand-primary focus:bg-white transition-all outline-none appearance-none">
                  <option>Recruitment Enquiry</option>
                  <option>Project Support</option>
                  <option>Partnership Discussion</option>
                  <option>General Inquiry</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-brand-primary uppercase tracking-widest ml-1">Your Message</label>
                <textarea rows="4" placeholder="How can we help you?" className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:border-brand-primary focus:bg-white transition-all outline-none resize-none"></textarea>
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
  );
};

export default Contact;
