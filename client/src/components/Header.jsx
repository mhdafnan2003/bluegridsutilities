import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/images/logo.png';

const Header = () => {
  const location = useLocation();
  const isActive = (to) => {
    if (to === '/') return location.pathname === '/';
    if (to === '/careers/jobs') return location.pathname.startsWith('/careers/jobs');
    if (to === '/careers' || to === '/career') {
      return (location.pathname.startsWith('/career') && !location.pathname.startsWith('/careers/jobs')) || location.pathname === '/apply';
    }
    if (to === '/safety-quality' || to === '/health-safety') return location.pathname.startsWith('/safety-quality') || location.pathname.startsWith('/health-safety');
    return location.pathname === to || location.pathname.startsWith(to + '/');
  };

  const isSubActive = (to) => {
    const currentFull = location.pathname + location.search;
    if (to === currentFull || location.pathname === to) return true;
    if (to.includes('?select=')) {
      const searchParams = new URLSearchParams(location.search);
      const targetParams = new URLSearchParams(to.split('?')[1] || '');
      return location.pathname === to.split('?')[0] && searchParams.get('select') === targetParams.get('select');
    }
    return false;
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileAboutOpen, setIsMobileAboutOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isMobileHealthSafetyOpen, setIsMobileHealthSafetyOpen] = useState(false);
  const [isMobileCareersOpen, setIsMobileCareersOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Approved Navigation Links
  const navLinks = [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/about' },
    { label: 'Services', to: '/services' },
    { label: 'Safety & Quality', to: '/safety-quality' },
    { label: 'Careers', to: '/careers' },
    { label: 'Vacancies', to: '/careers/jobs' },
    { label: 'Contact', to: '/contact' },
    { label: 'Policies', to: '/policies' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full font-sans transition-colors duration-300">
      
      {/* Top Information Bar (Containing Email Support, Company Number, Work Hours) - Hidden when Scrolled */}
      <div 
        className={`bg-white text-gray-800 border-b border-gray-100 py-3 transition-all duration-300 ${
          isScrolled ? 'hidden' : 'hidden md:block'
        }`}
      >
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          {/* Logo Area in Top Bar */}
          <Link className="flex items-center" to="/">
            <img src={logo} alt="Bluegrid Utilities Logo" className="h-11 md:h-13 w-auto object-contain" />
          </Link>

          {/* Contact Details Section */}
          <div className="flex items-center gap-8">
            {/* Email */}
            <div className="flex items-center gap-2.5">
              <span className="material-symbols-outlined text-[#005f9e] text-xl">mail</span>
              <div className="text-left">
                <p className="text-[9px] text-gray-400 uppercase tracking-widest font-bold font-outfit">Email Support</p>
                <a href="mailto:enquiries@bluegridutilities.com" className="text-xs font-bold text-[#111111] hover:text-[#005f9e] transition-colors">enquiries@bluegridutilities.com</a>
              </div>
            </div>

            {/* Company Number */}
            <div className="flex items-center gap-2.5">
              <span className="material-symbols-outlined text-[#005f9e] text-xl">corporate_fare</span>
              <div className="text-left">
                <p className="text-[9px] text-gray-400 uppercase tracking-widest font-bold font-outfit">Company Number</p>
                <span className="text-xs font-bold text-[#111111]">16442340</span>
              </div>
            </div>

            {/* Telephone */}
            <div className="flex items-center gap-2.5">
              <span className="material-symbols-outlined text-[#005f9e] text-xl">call</span>
              <div className="text-left">
                <p className="text-[9px] text-gray-400 uppercase tracking-widest font-bold font-outfit">Telephone</p>
                <a href="tel:+442034880934" className="text-xs font-bold text-[#111111] hover:text-[#005f9e] transition-colors">020 3488 0934</a>
              </div>
            </div>

            {/* Social Icons */}
            <div className="hidden lg:flex items-center gap-2 border-l border-gray-200 pl-6">
              <a href="https://www.facebook.com/share/1C8CFBLgxy/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="w-7 h-7 rounded bg-gray-100 hover:bg-[#005f9e] hover:text-white flex items-center justify-center text-gray-500 transition-all duration-300" aria-label="Facebook">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/company/bluegrid-utilities/" target="_blank" rel="noopener noreferrer" className="w-7 h-7 rounded bg-gray-100 hover:bg-[#005f9e] hover:text-white flex items-center justify-center text-gray-500 transition-all duration-300" aria-label="LinkedIn">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div 
        className={`w-full transition-all duration-300 ${
          isScrolled 
            ? 'bg-white shadow-md border-b border-slate-200' 
            : 'bg-[#eef6fc] border-b border-[#d8e9f6]'
        }`}
      >
        <div className={`max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-stretch transition-all duration-300 ${
          isScrolled ? 'h-16 lg:h-[72px]' : 'h-20'
        }`}>

          {/* Navbar Logo */}
          <div className={`flex items-center py-2 pr-2 sm:pr-4 lg:pr-6 shrink-0 ${isScrolled ? 'flex' : 'flex md:hidden'}`}>
            <Link className="flex items-center gap-2" to="/">
              <img src={logo} alt="Bluegrid Utilities Logo" className="h-8 sm:h-9 md:h-10 lg:h-11 w-auto object-contain transition-all duration-300" />
            </Link>
          </div>

          {/* Navigation Links - Centered with good gap */}
          <nav className="hidden lg:flex items-stretch justify-center mx-auto h-full gap-1.5 lg:gap-2 xl:gap-3.5">
            {navLinks.map((link) => {
              if (link.label === 'About') {
                return (
                  <div key={link.label} className="relative group flex items-stretch">
                    <Link
                      to={link.to}
                      className={`whitespace-nowrap transition-colors text-[11px] lg:text-xs xl:text-sm font-bold uppercase tracking-wider font-outfit flex items-center gap-1 px-1.5 lg:px-2 xl:px-2.5 cursor-pointer select-none relative ${
                        isActive(link.to) 
                          ? 'text-[#005f9e]' 
                          : 'text-[#0f3a5e] hover:text-[#005f9e]'
                      }`}
                    >
                      <span>{link.label}</span>
                      <span className="material-symbols-outlined text-[14px] lg:text-base transition-transform duration-300 group-hover:rotate-180">
                        keyboard_arrow_down
                      </span>
                      <span className={`absolute bottom-0 left-0 h-[3px] transition-all duration-300 bg-[#005f9e] ${isActive(link.to) ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                    </Link>

                    {/* Dropdown Menu */}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-0 w-[18rem] bg-white border border-slate-100 shadow-2xl rounded-none py-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
                      <div className="flex flex-col">
                        {[
                          { label: "About Bluegrid Utilities", to: "/about" },
                          { label: "Our Working Principles", to: "/about#how-we-work" },
                          { label: "Responsible Growth", to: "/about#growing-responsibly" },
                          { label: "Policies & Company Information", to: "/policies" }
                        ].map((item, index) => {
                          const active = isSubActive(item.to);
                          return (
                            <Link
                              key={index}
                              to={item.to}
                              className={`px-6 py-3 text-[11px] lg:text-xs font-bold uppercase tracking-wider font-outfit transition-all duration-200 text-left border-l-4 whitespace-nowrap ${
                                active
                                  ? 'bg-blue-50/80 text-[#005f9e] border-[#005f9e]'
                                  : 'text-slate-600 border-transparent hover:bg-slate-50 hover:text-[#005f9e] hover:border-[#005f9e]'
                              }`}
                            >
                              {item.label}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                );
              }

              if (link.label === 'Services') {
                return (
                  <div key={link.label} className="relative group flex items-stretch">
                    <Link
                      to={link.to}
                      className={`whitespace-nowrap transition-colors text-[11px] lg:text-xs xl:text-sm font-bold uppercase tracking-wider font-outfit flex items-center gap-1 px-1.5 lg:px-2 xl:px-2.5 cursor-pointer select-none relative ${
                        isActive(link.to) 
                          ? 'text-[#005f9e]' 
                          : 'text-[#0f3a5e] hover:text-[#005f9e]'
                      }`}
                    >
                      <span>{link.label}</span>
                      <span className="material-symbols-outlined text-[14px] lg:text-base transition-transform duration-300 group-hover:rotate-180">
                        keyboard_arrow_down
                      </span>
                      <span className={`absolute bottom-0 left-0 h-[3px] transition-all duration-300 bg-[#005f9e] ${isActive(link.to) ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                    </Link>

                    {/* Dropdown Menu */}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[22rem] bg-white border border-slate-100 shadow-2xl rounded-none py-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
                      <div className="flex flex-col">
                        {[
                          { label: "Our Capabilities", to: "/services" },
                          { label: "Smart Water Metering", to: "/services/smart-water-metering" },
                          { label: "Water Infrastructure Support", to: "/services/water-infrastructure-support" },
                          { label: "Civil Engineering & Excavation Support", to: "/services/utility-civils" },
                          { label: "Reinstatement Support", to: "/services/reinstatement" },
                          { label: "Project Delivery & Operational Management", to: "/services/project-delivery" }
                        ].map((item, index) => {
                          const active = isSubActive(item.to);
                          return (
                            <Link
                              key={index}
                              to={item.to}
                              className={`px-6 py-3 text-[11px] lg:text-xs font-bold uppercase tracking-wider font-outfit transition-all duration-200 text-left border-l-4 whitespace-nowrap ${
                                active
                                  ? 'bg-blue-50/80 text-[#005f9e] border-[#005f9e]'
                                  : 'text-slate-600 border-transparent hover:bg-slate-50 hover:text-[#005f9e] hover:border-[#005f9e]'
                              }`}
                            >
                              {item.label}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                );
              }

              if (link.label === 'Safety & Quality') {
                return (
                  <div key={link.label} className="relative group flex items-stretch">
                    <Link
                      to={link.to}
                      className={`whitespace-nowrap transition-colors text-[11px] lg:text-xs xl:text-sm font-bold uppercase tracking-wider font-outfit flex items-center gap-1 px-1.5 lg:px-2 xl:px-2.5 cursor-pointer select-none relative ${
                        isActive(link.to) 
                          ? 'text-[#005f9e]' 
                          : 'text-[#0f3a5e] hover:text-[#005f9e]'
                      }`}
                    >
                      <span>{link.label}</span>
                      <span className="material-symbols-outlined text-[14px] lg:text-base transition-transform duration-300 group-hover:rotate-180">
                        keyboard_arrow_down
                      </span>
                      <span className={`absolute bottom-0 left-0 h-[3px] transition-all duration-300 bg-[#005f9e] ${isActive(link.to) ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                    </Link>

                    {/* Safety & Quality Dropdown Menu */}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-0 w-[20rem] bg-white border border-slate-100 shadow-2xl rounded-none py-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
                      <div className="flex flex-col">
                        {[
                          { label: "Safety & Quality Overview", to: "/safety-quality" },
                          { label: "Approved Methods (RAMS)", to: "/safety-quality#rams" },
                          { label: "Accurate Record Keeping", to: "/safety-quality#records" },
                          { label: "Environmental & Public Safety", to: "/safety-quality#environment" },
                          { label: "Policies & Statements", to: "/policies" }
                        ].map((item, index) => {
                          const active = isSubActive(item.to);
                          return (
                            <Link
                              key={index}
                              to={item.to}
                              className={`px-6 py-3 text-[11px] lg:text-xs font-bold uppercase tracking-wider font-outfit transition-all duration-200 text-left border-l-4 whitespace-nowrap ${
                                active
                                  ? 'bg-blue-50/80 text-[#005f9e] border-[#005f9e]'
                                  : 'text-slate-600 border-transparent hover:bg-slate-50 hover:text-[#005f9e] hover:border-[#005f9e]'
                              }`}
                            >
                              {item.label}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                );
              }

              if (link.label === 'Careers') {
                return (
                  <div key={link.label} className="relative group flex items-stretch">
                    <Link
                      to={link.to}
                      className={`whitespace-nowrap transition-colors text-[11px] lg:text-xs xl:text-sm font-bold uppercase tracking-wider font-outfit flex items-center gap-1 px-1.5 lg:px-2 xl:px-2.5 cursor-pointer select-none relative ${
                        isActive(link.to) 
                          ? 'text-[#005f9e]' 
                          : 'text-[#0f3a5e] hover:text-[#005f9e]'
                      }`}
                    >
                      <span>{link.label}</span>
                      <span className="material-symbols-outlined text-[14px] lg:text-base transition-transform duration-300 group-hover:rotate-180">
                        keyboard_arrow_down
                      </span>
                      <span className={`absolute bottom-0 left-0 h-[3px] transition-all duration-300 bg-[#005f9e] ${isActive(link.to) ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                    </Link>

                    {/* Careers Dropdown Menu */}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-0 w-[18rem] bg-white border border-slate-100 shadow-2xl rounded-none py-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
                      <div className="flex flex-col">
                        {[
                          { label: "Careers at Bluegrid", to: "/careers" },
                          { label: "Current Vacancies", to: "/careers/jobs" },
                          { label: "Recruitment Process", to: "/careers#recruitment-process" },
                          { label: "Candidate Privacy Notice", to: "/policies/candidate-privacy" }
                        ].map((item, index) => {
                          const active = isSubActive(item.to);
                          return (
                            <Link
                              key={index}
                              to={item.to}
                              className={`px-6 py-3 text-[11px] lg:text-xs font-bold uppercase tracking-wider font-outfit transition-all duration-200 text-left border-l-4 whitespace-nowrap ${
                                active
                                  ? 'bg-blue-50/80 text-[#005f9e] border-[#005f9e]'
                                  : 'text-slate-600 border-transparent hover:bg-slate-50 hover:text-[#005f9e] hover:border-[#005f9e]'
                              }`}
                            >
                              {item.label}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={link.label}
                  to={link.to}
                  className={`whitespace-nowrap transition-colors text-[11px] lg:text-xs xl:text-sm font-bold uppercase tracking-wider font-outfit flex items-center relative group px-1.5 lg:px-2 xl:px-2.5 ${
                    isActive(link.to) 
                      ? 'text-[#005f9e]' 
                      : 'text-[#0f3a5e] hover:text-[#005f9e]'
                  }`}
                >
                  <span>{link.label}</span>
                  <span className={`absolute bottom-0 left-0 h-[3px] transition-all duration-300 bg-[#005f9e] ${isActive(link.to) ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                </Link>
              );
            })}
          </nav>

          {/* Right CTA / Hamburger Menu */}
          <div className="flex items-center shrink-0 gap-2 sm:gap-3 ml-2 lg:ml-4 mr-2 sm:mr-4 lg:mr-6 my-auto">
            {/* Discuss Project Button */}
            <Link
              to="/contact"
              className="bg-[#005f9e] hover:bg-[#004c80] text-white transition-all duration-200 px-3 sm:px-3.5 lg:px-4 py-2 sm:py-2.5 rounded-lg font-bold uppercase text-[10px] sm:text-[11px] lg:text-xs font-outfit tracking-wider flex items-center justify-center whitespace-nowrap shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] cursor-pointer shrink-0"
            >
              <span className="lg:hidden">Contact</span>
              <span className="hidden lg:inline">Discuss Project</span>
            </Link>

            {/* Mobile Hamburger toggle */}
            <div className="lg:hidden flex items-center shrink-0">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="flex flex-col gap-1 justify-center items-center w-9 h-9 sm:w-10 sm:h-10 border rounded-lg bg-white shadow-sm transition-colors duration-300 border-slate-200 text-[#0f3a5e] shrink-0 hover:bg-slate-50"
                aria-label="Toggle Menu"
              >
                <span className={`w-5 sm:w-6 h-0.5 transition-all duration-300 bg-[#0f3a5e] ${isMenuOpen ? 'transform rotate-45 translate-y-1.5' : ''}`}></span>
                <span className={`w-5 sm:w-6 h-0.5 transition-all duration-300 bg-[#0f3a5e] ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`w-5 sm:w-6 h-0.5 transition-all duration-300 bg-[#0f3a5e] ${isMenuOpen ? 'transform -rotate-45 -translate-y-1.5' : ''}`}></span>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Accordion Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="lg:hidden overflow-hidden border-t bg-white border-slate-100 shadow-xl"
            >
              <div className="flex flex-col px-6 py-6 space-y-4 font-outfit uppercase tracking-wider text-sm font-bold">
                {navLinks.map((link) => {
                  if (link.label === 'About') {
                    return (
                      <div key={link.label} className="flex flex-col">
                        <button
                          onClick={() => setIsMobileAboutOpen(!isMobileAboutOpen)}
                          className={`transition-colors py-2.5 border-b flex items-center justify-between text-left font-bold border-slate-50 ${
                            isActive('/about') ? 'text-[#005f9e]' : 'text-slate-800 hover:text-[#005f9e]'
                          }`}
                        >
                          <span>{link.label}</span>
                          <span className={`material-symbols-outlined text-xs transform transition-transform duration-300 ${isMobileAboutOpen ? 'rotate-180' : ''}`}>
                            keyboard_arrow_down
                          </span>
                        </button>
                        <AnimatePresence>
                          {isMobileAboutOpen && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className="pl-4 flex flex-col font-sans normal-case text-xs text-slate-500 py-2 space-y-2.5 border-l border-brand-primary/20 mt-1"
                            >
                              {[
                                { label: "About Bluegrid Utilities", to: "/about" },
                                { label: "Our Working Principles", to: "/about#how-we-work" },
                                { label: "Responsible Growth", to: "/about#growing-responsibly" },
                                { label: "Policies & Company Information", to: "/policies" }
                              ].map((item, index) => {
                                const active = isSubActive(item.to);
                                return (
                                  <Link
                                    key={index}
                                    to={item.to}
                                    onClick={() => {
                                      setIsMenuOpen(false);
                                      setIsMobileAboutOpen(false);
                                    }}
                                    className={`transition-colors py-1 block text-left ${
                                      active ? 'text-[#005f9e] font-bold' : 'hover:text-[#005f9e]'
                                    }`}
                                  >
                                    {item.label}
                                  </Link>
                                );
                              })}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  }

                  if (link.label === 'Safety & Quality') {
                    return (
                      <div key={link.label} className="flex flex-col">
                        <button
                          onClick={() => setIsMobileHealthSafetyOpen(!isMobileHealthSafetyOpen)}
                          className={`transition-colors py-2.5 border-b flex items-center justify-between text-left font-bold border-slate-50 ${
                            isActive('/safety-quality') ? 'text-[#005f9e]' : 'text-slate-800 hover:text-[#005f9e]'
                          }`}
                        >
                          <span>{link.label}</span>
                          <span className={`material-symbols-outlined text-xs transform transition-transform duration-300 ${isMobileHealthSafetyOpen ? 'rotate-180' : ''}`}>
                            keyboard_arrow_down
                          </span>
                        </button>
                        <AnimatePresence>
                          {isMobileHealthSafetyOpen && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className="pl-4 flex flex-col font-sans normal-case text-xs text-slate-500 py-2 space-y-2.5 border-l border-brand-primary/20 mt-1"
                            >
                              {[
                                { label: "Safety & Quality Overview", to: "/safety-quality" },
                                { label: "Approved Methods (RAMS)", to: "/safety-quality#rams" },
                                { label: "Accurate Record Keeping", to: "/safety-quality#records" },
                                { label: "Environmental & Public Safety", to: "/safety-quality#environment" },
                                { label: "Policies & Statements", to: "/policies" }
                              ].map((item, index) => {
                                const active = isSubActive(item.to);
                                return (
                                  <Link
                                    key={index}
                                    to={item.to}
                                    onClick={() => {
                                      setIsMenuOpen(false);
                                      setIsMobileHealthSafetyOpen(false);
                                    }}
                                    className={`transition-colors py-1 block text-left ${
                                      active ? 'text-[#005f9e] font-bold' : 'hover:text-[#005f9e]'
                                    }`}
                                  >
                                    {item.label}
                                  </Link>
                                );
                              })}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  }

                  if (link.label === 'Services') {
                    return (
                      <div key={link.label} className="flex flex-col">
                        <button
                          onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                          className={`transition-colors py-2.5 border-b flex items-center justify-between text-left font-bold border-slate-50 ${
                            isActive('/services') ? 'text-[#005f9e]' : 'text-slate-800 hover:text-[#005f9e]'
                          }`}
                        >
                          <span>{link.label}</span>
                          <span className={`material-symbols-outlined text-xs transform transition-transform duration-300 ${isMobileServicesOpen ? 'rotate-180' : ''}`}>
                            keyboard_arrow_down
                          </span>
                        </button>
                        <AnimatePresence>
                          {isMobileServicesOpen && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className="pl-4 flex flex-col font-sans normal-case text-xs text-slate-500 py-2 space-y-2.5 border-l border-brand-primary/20 mt-1"
                            >
                              {[
                                { label: "Our Capabilities", to: "/services" },
                                { label: "Smart Water Metering", to: "/services/smart-water-metering" },
                                { label: "Water Infrastructure Support", to: "/services/water-infrastructure-support" },
                                { label: "Civil Engineering & Excavation Support", to: "/services/utility-civils" },
                                { label: "Reinstatement Support", to: "/services/reinstatement" },
                                { label: "Project Delivery & Operational Management", to: "/services/project-delivery" }
                              ].map((item, index) => {
                                const active = isSubActive(item.to);
                                return (
                                  <Link
                                    key={index}
                                    to={item.to}
                                    onClick={() => {
                                      setIsMenuOpen(false);
                                      setIsMobileServicesOpen(false);
                                    }}
                                    className={`transition-colors py-1 block text-left ${
                                      active ? 'text-[#005f9e] font-bold' : 'hover:text-[#005f9e]'
                                    }`}
                                  >
                                    {item.label}
                                  </Link>
                                );
                              })}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  }

                  if (link.label === 'Careers') {
                    return (
                      <div key={link.label} className="flex flex-col">
                        <button
                          onClick={() => setIsMobileCareersOpen(!isMobileCareersOpen)}
                          className={`transition-colors py-2.5 border-b flex items-center justify-between text-left font-bold border-slate-50 ${
                            isActive('/careers') ? 'text-[#005f9e]' : 'text-slate-800 hover:text-[#005f9e]'
                          }`}
                        >
                          <span>{link.label}</span>
                          <span className={`material-symbols-outlined text-xs transform transition-transform duration-300 ${isMobileCareersOpen ? 'rotate-180' : ''}`}>
                            keyboard_arrow_down
                          </span>
                        </button>
                        <AnimatePresence>
                          {isMobileCareersOpen && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className="pl-4 flex flex-col font-sans normal-case text-xs text-slate-500 py-2 space-y-2.5 border-l border-brand-primary/20 mt-1"
                            >
                              {[
                                { label: "Careers at Bluegrid", to: "/careers" },
                                { label: "Current Vacancies", to: "/careers/jobs" },
                                { label: "Recruitment Process", to: "/careers#recruitment-process" },
                                { label: "Candidate Privacy Notice", to: "/policies/candidate-privacy" }
                              ].map((item, index) => {
                                const active = isSubActive(item.to);
                                return (
                                  <Link
                                    key={index}
                                    to={item.to}
                                    onClick={() => {
                                      setIsMenuOpen(false);
                                      setIsMobileCareersOpen(false);
                                    }}
                                    className={`transition-colors py-1 block text-left ${
                                      active ? 'text-[#005f9e] font-bold' : 'hover:text-[#005f9e]'
                                    }`}
                                  >
                                    {item.label}
                                  </Link>
                                );
                              })}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  }

                  return (
                    <Link
                      key={link.label}
                      to={link.to}
                      onClick={() => setIsMenuOpen(false)}
                      className={`transition-colors py-2.5 border-b flex items-center justify-between border-slate-50 ${
                        isActive(link.to) ? 'text-[#005f9e] font-bold' : 'text-slate-800 hover:text-[#005f9e]'
                      }`}
                    >
                      <span>{link.label}</span>
                      <span className="text-[#005f9e] text-xs">➔</span>
                    </Link>
                  );
                })}

                {/* Mobile Drawer CTA */}
                <div className="pt-2">
                  <Link
                    to="/contact"
                    onClick={() => setIsMenuOpen(false)}
                    className="w-full bg-[#005f9e] hover:bg-[#004c80] text-white py-3 px-4 rounded-lg font-bold text-center text-xs tracking-wider uppercase font-outfit flex items-center justify-center gap-2 shadow-sm active:scale-[0.98] transition-all"
                  >
                    <span>Discuss a project</span>
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
