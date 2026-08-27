import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import MotionSection from './MotionSection';
import logo from '../assets/images/logo.png';

const Contact = () => {
  const [searchParams] = useSearchParams();
  const initialEnquiryType = searchParams.get('subject') || 'General Enquiry';
  
  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    email: '',
    phone: '',
    enquiryType: initialEnquiryType,
    message: '',
    privacyConsent: false
  });

  const [submitted, setSubmitted] = useState(false);

  const enquiryTypes = [
    'Project / Delivery Enquiry',
    'Supply-Chain / Partnership Enquiry',
    'Recruitment',
    'Supplier Enquiry',
    'General Enquiry'
  ];

  const contactRoutes = [
    { 
      label: "General Enquiries",
      value: "enquiries@bluegridutilities.com", 
      href: "mailto:enquiries@bluegridutilities.com",
      icon: "mail" 
    },
    { 
      label: "Recruitment", 
      value: "recruitment@bluegridutilities.com", 
      href: "mailto:recruitment@bluegridutilities.com",
      icon: "work" 
    },
    { 
      label: "Telephone", 
      value: "+44 (0)20 3488 0934", 
      href: "tel:+442034880934",
      icon: "call" 
    },
    { 
      label: "Registered Office", 
      value: "Stuart House, St. Johns Street, Peterborough, United Kingdom, PE1 5DD", 
      href: "https://maps.google.com/?q=Stuart House, St Johns Street, Peterborough, PE1 5DD",
      icon: "location_on" 
    }
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

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
        {/* Clean Neutral Dark Overlay - NO BLUE TINT */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-transparent z-10" />
        
        <div className="relative z-20 max-w-4xl mx-auto px-6 flex flex-col items-center">
          <span className="inline-block px-4 py-1.5 rounded-none bg-[#005f9e] text-white text-[10px] sm:text-xs font-black tracking-widest mb-6 font-outfit shadow-sm uppercase">
            Get In Touch
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6 font-outfit leading-tight text-white uppercase">
            Contact Us
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-slate-200 max-w-3xl leading-relaxed font-medium">
            Whether you are discussing project delivery, workforce mobilisation, supply-chain collaboration or a career opportunity, our team will direct your enquiry to the right person.
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
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch w-full">

            {/* Left Side: Contact Directory */}
            <div className="lg:col-span-5 flex flex-col gap-6 w-full h-full text-left">
              <div className="flex-1 rounded-none bg-[#f4f8fc] border border-slate-200 shadow-md w-full overflow-hidden divide-y divide-slate-200 flex flex-col justify-between">
                {contactRoutes.map((contact, i) => (
                  <div key={i} className="flex-1 flex items-center justify-between gap-4 px-8 py-5 hover:bg-white transition-colors duration-200 group">
                    <div className="min-w-0">
                      <p className="text-[10px] font-black text-[#005f9e] tracking-widest uppercase font-outfit mb-1">
                        {contact.label}
                      </p>
                      <a
                        href={contact.href}
                        className="text-xs sm:text-sm font-semibold text-[#0f3a5e] hover:text-[#005f9e] transition-colors break-words leading-snug block font-outfit"
                      >
                        {contact.value}
                      </a>
                    </div>
                    <div className="shrink-0 w-10 h-10 rounded-none bg-white shadow-sm border border-slate-200 flex items-center justify-center text-[#005f9e] group-hover:bg-[#005f9e] group-hover:text-white transition-all duration-300">
                      <span className="material-symbols-outlined text-lg">{contact.icon}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Company Info Box */}
              <div className="p-8 rounded-none bg-[#0f3a5e] text-white border border-slate-800 shadow-lg flex flex-col items-start justify-center text-left gap-4">
                <img 
                  src={logo} 
                  alt="Bluegrid Utilities" 
                  className="h-10 w-auto object-contain brightness-0 invert opacity-95" 
                />
                <div className="space-y-1 text-xs text-slate-300 font-medium">
                  <p className="text-white font-bold font-outfit">Bluegrid Utilities</p>
                  <p>Trading name of Bluegrid Technology Ltd (Co. No. 16442340)</p>
                  <p className="text-slate-400 text-[11px] pt-1">
                    <strong className="text-white">Registered Office:</strong> Stuart House, St. Johns Street, Peterborough, PE1 5DD
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side: Contact Form */}
            <div className="lg:col-span-7 bg-[#f4f8fc] p-8 md:p-12 rounded-none shadow-xl border border-slate-200 flex flex-col justify-center text-left">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0f3a5e] font-outfit mb-2">
                Send Us a Message
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 font-medium mb-8">
                Fill in the form below and our team will respond to your enquiry promptly.
              </p>

              {submitted ? (
                <div className="bg-emerald-50 border border-emerald-300 p-8 rounded-none text-left space-y-4">
                  <div className="flex items-center gap-3 text-emerald-800 font-bold text-lg font-outfit">
                    <span className="material-symbols-outlined text-2xl text-emerald-600">check_circle</span>
                    Thank You for Contacting Bluegrid Utilities
                  </div>
                  <p className="text-emerald-700 text-sm font-sans leading-relaxed">
                    Your message has been received. Our team will review your enquiry and get back to you shortly.
                  </p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 bg-[#005f9e] text-white text-xs font-bold font-outfit uppercase tracking-widest rounded-none shadow hover:bg-[#004c80] transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Full Name & Company */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[11px] font-bold text-[#0f3a5e] uppercase tracking-wider font-outfit block">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input 
                        type="text" 
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="John Doe" 
                        className="w-full px-5 py-3.5 rounded-none bg-white border border-slate-300 focus:border-[#005f9e] text-sm text-slate-900 transition-all outline-none" 
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-[11px] font-bold text-[#0f3a5e] uppercase tracking-wider font-outfit block">
                        Company / Organisation <span className="text-slate-400 font-normal">(Optional)</span>
                      </label>
                      <input 
                        type="text" 
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Company Name" 
                        className="w-full px-5 py-3.5 rounded-none bg-white border border-slate-300 focus:border-[#005f9e] text-sm text-slate-900 transition-all outline-none" 
                      />
                    </div>
                  </div>

                  {/* Email & Telephone */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[11px] font-bold text-[#0f3a5e] uppercase tracking-wider font-outfit block">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input 
                        type="email" 
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com" 
                        className="w-full px-5 py-3.5 rounded-none bg-white border border-slate-300 focus:border-[#005f9e] text-sm text-slate-900 transition-all outline-none" 
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-[11px] font-bold text-[#0f3a5e] uppercase tracking-wider font-outfit block">
                        Telephone <span className="text-slate-400 font-normal">(Optional)</span>
                      </label>
                      <input 
                        type="tel" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+44 7000 000000" 
                        className="w-full px-5 py-3.5 rounded-none bg-white border border-slate-300 focus:border-[#005f9e] text-sm text-slate-900 transition-all outline-none" 
                      />
                    </div>
                  </div>

                  {/* Enquiry Type Dropdown */}
                  <div className="space-y-2">
                    <label className="text-[11px] font-bold text-[#0f3a5e] uppercase tracking-wider font-outfit block">
                      Enquiry Type <span className="text-red-500">*</span>
                    </label>
                    <select 
                      name="enquiryType"
                      value={formData.enquiryType}
                      onChange={handleChange}
                      className="w-full px-5 py-3.5 rounded-none bg-white border border-slate-300 focus:border-[#005f9e] text-sm text-slate-900 transition-all outline-none appearance-none font-sans"
                    >
                      {enquiryTypes.map((type, idx) => (
                        <option key={idx} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label className="text-[11px] font-bold text-[#0f3a5e] uppercase tracking-wider font-outfit block">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea 
                      rows="4" 
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="How can our team assist you?" 
                      className="w-full px-5 py-3.5 rounded-none bg-white border border-slate-300 focus:border-[#005f9e] text-sm text-slate-900 transition-all outline-none resize-none"
                    ></textarea>
                  </div>

                  {/* Privacy Consent Checkbox */}
                  <div className="flex items-start gap-3 pt-2">
                    <input 
                      type="checkbox"
                      id="privacyConsent"
                      name="privacyConsent"
                      required
                      checked={formData.privacyConsent}
                      onChange={handleChange}
                      className="mt-1 w-4 h-4 text-[#005f9e] border-slate-300 rounded-none focus:ring-[#005f9e]"
                    />
                    <label htmlFor="privacyConsent" className="text-xs text-slate-600 font-medium leading-relaxed">
                      I consent to Bluegrid Utilities processing my personal data in accordance with the Privacy Policy to respond to my enquiry. <span className="text-red-500">*</span>
                    </label>
                  </div>

                  {/* Submit Button */}
                  <button 
                    type="submit"
                    className="w-full py-4 bg-[#0066ff] hover:bg-[#005f9e] text-white rounded-none font-bold text-xs uppercase tracking-widest transition-all duration-300 shadow-md font-outfit flex items-center justify-center gap-3 cursor-pointer"
                  >
                    <span>Send Message</span>
                    <span className="material-symbols-outlined text-sm">send</span>
                  </button>

                </form>
              )}
            </div>

          </div>
        </div>
      </MotionSection>
    </div>
  );
};

export default Contact;
