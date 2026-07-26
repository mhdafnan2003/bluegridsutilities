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

      {/* Mobile Menu Overlay */}
      {
        isMenuOpen && (
          <div className="md:hidden mt-4 rounded-3xl p-6 space-y-5 bg-black/80 backdrop-blur-md border border-white/10">
            <Link className="block text-white text-lg font-semibold border-b border-white/10 pb-3" to="/#" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link className="block text-white text-lg font-semibold border-b border-white/10 pb-3" to="/#about" onClick={() => setIsMenuOpen(false)}>About</Link>
            <Link className="block text-white text-lg font-semibold border-b border-white/10 pb-3" to="/#services" onClick={() => setIsMenuOpen(false)}>Services</Link>
            <Link className="block text-white text-lg font-semibold border-b border-white/10 pb-3" to="/#contact" onClick={() => setIsMenuOpen(false)}>Contact Us</Link>
            <Link className="block text-white text-lg font-semibold" to="https://forms.office.com/r/K9vKw1hxcB" onClick={() => setIsMenuOpen(false)}>Join Our Workforce</Link>
          </div>

          {/* Mobile Accordion Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className={`lg:hidden overflow-hidden border-t ${isScrolled ? 'bg-white border-slate-100 shadow-xl' : 'bg-[#eef6fc] border-[#d8e9f6]'
              }`}
          >
            <div className="flex flex-col px-6 py-6 space-y-4 font-outfit uppercase tracking-wider text-sm font-bold">
              {navLinks.map((link) => {
                if (link.label === 'About') {
                  return (
                    <div key={link.label} className="flex flex-col">
                      <button
                        onClick={() => setIsMobileAboutOpen(!isMobileAboutOpen)}
                        className={`transition-colors py-2.5 border-b flex items-center justify-between text-left font-bold ${isScrolled
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
                        className={`transition-colors py-2.5 border-b flex items-center justify-between text-left font-bold ${isScrolled
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
                    className={`transition-colors py-2.5 border-b flex items-center justify-between ${isScrolled
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
      </header >
    );
  };

export default Header;
