import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/images/logo.png';

const Header = () => {
  const location = useLocation();
  const isActive = (to) => location.pathname === to || (to !== '/' && location.pathname.startsWith(to));
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileAboutOpen, setIsMobileAboutOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/about' },
    { label: 'Services', to: '/services' },
    { label: 'Projects', to: '/projects' },
    { label: 'Sustainability', to: '/sustainability' },
    { label: 'Career', to: '/career' },
    { label: 'News', to: '/news' },
    { label: 'Contact Us', to: '/contact' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 font-sans">
      {/* Top Information Bar */}
      <div
        className={`bg-white text-gray-800 transition-all duration-300 overflow-hidden ${isScrolled ? 'h-0 opacity-0' : 'h-auto py-3 border-b border-gray-100'
          }`}
      >
        <div className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-12 flex justify-between items-center">
          {/* Logo Area */}
          <Link className="flex items-center" to="/#">
            <img src={logo} alt="BlueGrid Utilities Logo" className="h-10 md:h-12 w-auto object-contain" />
          </Link>

          {/* Contact Details */}
          <div className="hidden md:flex items-center gap-8">
            {/* Email */}
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-[#005f9e] text-2xl">mail</span>
              <div className="text-left">
                <p className="text-[9px] text-gray-400 uppercase tracking-widest font-bold font-outfit">Email Support</p>
                <a href="mailto:enquiries@bluegridutilities.com" className="text-xs font-bold text-[#111111] hover:text-[#005f9e] transition-colors">enquiries@bluegridutilities.com</a>
              </div>
            </div>

            {/* Company Number */}
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-[#005f9e] text-2xl">corporate_fare</span>
              <div className="text-left">
                <p className="text-[9px] text-gray-400 uppercase tracking-widest font-bold font-outfit">Company Number</p>
                <span className="text-xs font-bold text-[#111111]">16442340</span>
              </div>
            </div>

            {/* Work Hours */}
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-[#005f9e] text-2xl">schedule</span>
              <div className="text-left">
                <p className="text-[9px] text-gray-400 uppercase tracking-widest font-bold font-outfit">Work Hour</p>
                <p className="text-xs font-bold text-[#111111]">Mon - Fri: 08:00 - 17:00</p>
              </div>
            </div>

            {/* Social Icons */}
            <div className="hidden lg:flex items-center gap-2 border-l border-gray-200 pl-6">
              <a href="#" className="w-8 h-8 rounded bg-gray-100 hover:bg-[#005f9e] hover:text-white flex items-center justify-center text-gray-500 transition-all duration-300" aria-label="Facebook">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
              <a href="#" className="w-8 h-8 rounded bg-gray-100 hover:bg-[#005f9e] hover:text-white flex items-center justify-center text-gray-500 transition-all duration-300" aria-label="LinkedIn">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a href="#" className="w-8 h-8 rounded bg-gray-100 hover:bg-[#005f9e] hover:text-white flex items-center justify-center text-gray-500 transition-all duration-300" aria-label="Twitter">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
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
            ? 'bg-white shadow-lg border-b border-blue-50'
            : 'bg-[#eef6fc]/95 backdrop-blur-md border-b border-[#d8e9f6]'
        }`}
      >
        <div className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-12 flex justify-between items-stretch min-h-[56px]">
          {/* Logo container (only visible on scroll) */}
          {isScrolled && (
            <div className="flex items-center py-2 mr-4 lg:mr-8 xl:mr-12 shrink-0">
              <Link className="flex items-center gap-2" to="/">
                <img src={logo} alt="BlueGrid Utilities Logo" className="h-9 w-auto object-contain" />
              </Link>
            </div>
          )}

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-stretch gap-3 lg:gap-6 xl:gap-8">
            {navLinks.map((link) => {
              if (link.label === 'About') {
                return (
                  <div key={link.label} className="relative group flex items-stretch">
                    <Link
                      to={link.to}
                      className={`whitespace-nowrap transition-colors text-[10px] lg:text-xs xl:text-sm font-bold uppercase tracking-widest font-outfit flex items-center gap-1 px-1 lg:px-2 ${
                        isActive(link.to)
                          ? 'text-[#005f9e]'
                          : isScrolled
                          ? 'text-slate-700 hover:text-[#005f9e]'
                          : 'text-[#0f3a5e] hover:text-[#005f9e]'
                      }`}
                    >
                      {link.label}
                      <span className="material-symbols-outlined text-[14px] lg:text-base transition-transform duration-300 group-hover:rotate-180">
                        keyboard_arrow_down
                      </span>
                      <span className={`absolute bottom-0 left-0 h-[3px] transition-all duration-300 bg-[#005f9e] ${isActive(link.to) ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                    </Link>

                    {/* Dropdown Menu */}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-0 w-[20rem] bg-white border border-slate-100 shadow-2xl rounded-2xl py-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
                      <div className="flex flex-col">
                        {[
                          { label: "About BlueGrid", to: "/about#about" },
                          { label: "Our Missions", to: "/about#mission" },
                          { label: "Our Visions", to: "/about#vision" },
                          { label: "Our History", to: "/about#history" },
                          { label: "Accreditation & Awards", to: "/about#accreditations" },
                          { label: "On Board & Directors", to: "/about#management" },
                          { label: "Our Policies", to: "/about#policies" }
                        ].map((item, index) => (
                          <a
                            key={index}
                            href={item.to}
                            className="px-6 py-3 text-[11px] lg:text-xs font-bold text-slate-600 uppercase tracking-wider font-outfit hover:bg-slate-50 hover:text-[#005f9e] transition-all duration-200 text-left border-l-4 border-transparent hover:border-[#005f9e] whitespace-nowrap"
                          >
                            {item.label}
                          </a>
                        ))}
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
                      className={`whitespace-nowrap transition-colors text-[10px] lg:text-xs xl:text-sm font-bold uppercase tracking-widest font-outfit flex items-center gap-1 px-1 lg:px-2 ${
                        isActive(link.to)
                          ? 'text-[#005f9e]'
                          : isScrolled
                          ? 'text-slate-700 hover:text-[#005f9e]'
                          : 'text-[#0f3a5e] hover:text-[#005f9e]'
                      }`}
                    >
                      {link.label}
                      <span className="material-symbols-outlined text-[14px] lg:text-base transition-transform duration-300 group-hover:rotate-180">
                        keyboard_arrow_down
                      </span>
                      <span className={`absolute bottom-0 left-0 h-[3px] transition-all duration-300 bg-[#005f9e] ${isActive(link.to) ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                    </Link>

                    {/* Dropdown Menu */}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-0 w-[24rem] bg-white border border-slate-100 shadow-2xl rounded-2xl py-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
                      <div className="flex flex-col">
                        {[
                          { label: "Water Meter Project Support", to: "/services?select=water-meter" },
                          { label: "Utility Infrastructure Support", to: "/services?select=utility-infra" },
                          { label: "Telecoms & Field Operations Support", to: "/services?select=telecoms" },
                          { label: "Project Coordination", to: "/services?select=project-coord" },
                          { label: "Compliance & Onboarding", to: "/services?select=compliance" },
                          { label: "Training Coordination & Deployment Planning", to: "/services?select=training" }
                        ].map((item, index) => (
                          <a
                            key={index}
                            href={item.to}
                            className="px-6 py-3 text-[11px] lg:text-xs font-bold text-slate-600 uppercase tracking-wider font-outfit hover:bg-slate-50 hover:text-[#005f9e] transition-all duration-200 text-left border-l-4 border-transparent hover:border-[#005f9e] whitespace-nowrap"
                          >
                            {item.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={link.label}
                  to={link.to}
                  className={`whitespace-nowrap transition-colors text-[10px] lg:text-xs xl:text-sm font-bold uppercase tracking-widest font-outfit flex items-center relative group px-1 lg:px-2 ${
                    isActive(link.to)
                      ? 'text-[#005f9e]'
                      : isScrolled
                      ? 'text-slate-700 hover:text-[#005f9e]'
                      : 'text-[#0f3a5e] hover:text-[#005f9e]'
                  }`}
                >
                  {link.label}
                  <span className={`absolute bottom-0 left-0 h-[3px] transition-all duration-300 bg-[#005f9e] ${isActive(link.to) ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                </Link>
              );
            })}
          </nav>

          {/* Right CTA / Mobile Hamburger */}
          <div className="flex items-center gap-4 py-2 shrink-0">
            <a
              href="https://forms.office.com/r/K9vKw1hxcB"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#005f9e] text-white hover:bg-[#0f3a5e] transition-all duration-300 px-4 py-2 lg:px-6 font-bold uppercase text-[10px] lg:text-xs font-outfit tracking-widest flex items-center justify-center rounded-lg shadow-sm"
            >
              Join Our Workforce
            </a>

            {/* Mobile Hamburger toggle */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`flex flex-col gap-1.5 justify-center items-center w-10 h-10 border rounded bg-white/5 transition-colors duration-300 ${
                  isScrolled ? 'border-slate-200 text-slate-800' : 'border-[#d8e9f6] text-[#0f3a5e]'
                }`}
                aria-label="Toggle Menu"
              >
                <span className={`w-6 h-0.5 transition-all duration-300 ${isScrolled ? 'bg-slate-800' : 'bg-[#0f3a5e]'} ${isMenuOpen ? 'transform rotate-45 translate-y-2' : ''}`}></span>
                <span className={`w-6 h-0.5 transition-all duration-300 ${isScrolled ? 'bg-slate-800' : 'bg-[#0f3a5e]'} ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`w-6 h-0.5 transition-all duration-300 ${isScrolled ? 'bg-slate-800' : 'bg-[#0f3a5e]'} ${isMenuOpen ? 'transform -rotate-45 -translate-y-2' : ''}`}></span>
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
              className={`lg:hidden overflow-hidden border-t ${
                isScrolled ? 'bg-white border-slate-100 shadow-xl' : 'bg-[#eef6fc] border-[#d8e9f6]'
              }`}
            >
              <div className="flex flex-col px-6 py-6 space-y-4 font-outfit uppercase tracking-wider text-sm font-bold">
                {navLinks.map((link) => {
                  if (link.label === 'About') {
                    return (
                      <div key={link.label} className="flex flex-col">
                        <button
                          onClick={() => setIsMobileAboutOpen(!isMobileAboutOpen)}
                          className={`transition-colors py-2.5 border-b flex items-center justify-between text-left font-bold ${
                            isScrolled
                              ? 'text-slate-800 hover:text-[#005f9e] border-slate-50'
                              : 'text-[#0f3a5e] hover:text-[#005f9e] border-[#d8e9f6]/40'
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
                                { label: "About BlueGrid", to: "/about#about" },
                                { label: "Our Missions", to: "/about#mission" },
                                { label: "Our Visions", to: "/about#vision" },
                                { label: "Our History", to: "/about#history" },
                                { label: "Accreditation & Awards", to: "/about#accreditations" },
                                { label: "On Board & Directors", to: "/about#management" },
                                { label: "Our Policies", to: "/about#policies" }
                              ].map((item, index) => (
                                <a
                                  key={index}
                                  href={item.to}
                                  onClick={() => {
                                    setIsMenuOpen(false);
                                    setIsMobileAboutOpen(false);
                                  }}
                                  className="hover:text-[#005f9e] transition-colors py-1 block text-left"
                                >
                                  {item.label}
                                </a>
                              ))}
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
                          className={`transition-colors py-2.5 border-b flex items-center justify-between text-left font-bold ${
                            isScrolled
                              ? 'text-slate-800 hover:text-[#005f9e] border-slate-50'
                              : 'text-[#0f3a5e] hover:text-[#005f9e] border-[#d8e9f6]/40'
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
                                { label: "Water Meter Project Support", to: "/services?select=water-meter" },
                                { label: "Utility Infrastructure Support", to: "/services?select=utility-infra" },
                                { label: "Telecoms & Field Operations Support", to: "/services?select=telecoms" },
                                { label: "Project Coordination", to: "/services?select=project-coord" },
                                { label: "Compliance & Onboarding", to: "/services?select=compliance" },
                                { label: "Training Coordination & Deployment Planning", to: "/services?select=training" }
                              ].map((item, index) => (
                                <a
                                  key={index}
                                  href={item.to}
                                  onClick={() => {
                                    setIsMenuOpen(false);
                                    setIsMobileServicesOpen(false);
                                  }}
                                  className="hover:text-[#005f9e] transition-colors py-1 block text-left"
                                >
                                  {item.label}
                                </a>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  }

                  return (
                    <a
                      key={link.label}
                      href={link.to}
                      onClick={() => setIsMenuOpen(false)}
                      className={`transition-colors py-2.5 border-b flex items-center justify-between ${
                        isScrolled
                          ? 'text-slate-800 hover:text-[#005f9e] border-slate-50'
                          : 'text-[#0f3a5e] hover:text-[#005f9e] border-[#d8e9f6]/40'
                      }`}
                    >
                      <span>{link.label}</span>
                      <span className="text-[#005f9e] text-xs">➔</span>
                    </a>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
