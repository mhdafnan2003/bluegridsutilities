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
  const [isMobileHealthSafetyOpen, setIsMobileHealthSafetyOpen] = useState(false);

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

  const navLinks = [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/about' },
    { label: 'Services', to: '/services' },
    { label: 'Projects', to: '/projects' },
    { label: 'Health & Safety', to: '/health-safety' },
    { label: 'Career', to: '/career' },
    { label: 'News', to: '/news' },
    { label: 'Contact Us', to: '/contact' }
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
            <img src={logo} alt="BlueGrid Utilities Logo" className="h-11 md:h-13 w-auto object-contain" />
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

            {/* Work Hours */}
            <div className="flex items-center gap-2.5">
              <span className="material-symbols-outlined text-[#005f9e] text-xl">schedule</span>
              <div className="text-left">
                <p className="text-[9px] text-gray-400 uppercase tracking-widest font-bold font-outfit">Work Hour</p>
                <p className="text-xs font-bold text-[#111111]">Mon - Fri: 08:00 - 17:00</p>
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
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-stretch h-20">

          {/* Larger Navbar Logo moved further to the left */}
          <div className={`flex items-center py-2 pr-4 lg:pr-6 shrink-0 ${isScrolled ? 'flex' : 'flex md:hidden'}`}>
            <Link className="flex items-center gap-2" to="/">
              <img src={logo} alt="BlueGrid Utilities Logo" className="h-11 md:h-12 lg:h-14 w-auto object-contain" />
            </Link>
          </div>

          {/* Navigation Links */}
          <nav className="hidden lg:flex items-stretch gap-2 lg:gap-3 xl:gap-5">
            {navLinks.map((link) => {
              if (link.label === 'About') {
                return (
                  <div key={link.label} className="relative group flex items-stretch">
                    <Link
                      to={link.to}
                      className={`whitespace-nowrap transition-colors text-[10px] lg:text-xs xl:text-sm font-bold uppercase tracking-widest font-outfit flex items-center gap-1 px-1 lg:px-2 cursor-pointer select-none ${
                        isActive(link.to) 
                          ? 'text-[#005f9e]' 
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
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-0 w-[20rem] bg-white border border-slate-100 shadow-2xl rounded-none py-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
                      <div className="flex flex-col">
                        {[
                          { label: "About BlueGrid", to: "/about" },
                          { label: "Our Missions", to: "/about/missions" },
                          { label: "Our Visions", to: "/about/visions" },
                          { label: "Our History", to: "/about/history" },
                          { label: "Accreditation & Awards", to: "/about/accreditations" },
                          { label: "On Board & Directors", to: "/about/directors" },
                          { label: "Our Policies", to: "/about/policies" }
                        ].map((item, index) => (
                          <Link
                            key={index}
                            to={item.to}
                            className="px-6 py-3 text-[11px] lg:text-xs font-bold text-slate-600 uppercase tracking-wider font-outfit hover:bg-slate-50 hover:text-[#005f9e] transition-all duration-200 text-left border-l-4 border-transparent hover:border-[#005f9e] whitespace-nowrap"
                          >
                            {item.label}
                          </Link>
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
                      className={`whitespace-nowrap transition-colors text-[10px] lg:text-xs xl:text-sm font-bold uppercase tracking-widest font-outfit flex items-center gap-1 px-1 lg:px-2 cursor-pointer select-none ${
                        isActive(link.to) 
                          ? 'text-[#005f9e]' 
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
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[26rem] bg-white border border-slate-100 shadow-2xl rounded-none py-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
                      <div className="flex flex-col">
                        {[
                          { label: "All Services", to: "/services" },
                          { label: "Water Meter Installation", to: "/services?select=water-meter-installation" },
                          { label: "Civil Engineering", to: "/services?select=civil-engineering" },
                          { label: "Reinstatement", to: "/services?select=reinstatement" },
                          { label: "Utility Surveying", to: "/services?select=utility-surveying" },
                          { label: "Traffic Management Support", to: "/services?select=traffic-management" },
                          { label: "Emergency Utility Response", to: "/services?select=emergency-utility-response" },
                          { label: "Infrastructure Support", to: "/services?select=infrastructure-support" }
                        ].map((item, index) => (
                          <Link
                            key={index}
                            to={item.to}
                            className="px-6 py-3 text-[11px] lg:text-xs font-bold text-slate-600 uppercase tracking-wider font-outfit hover:bg-slate-50 hover:text-[#005f9e] transition-all duration-200 text-left border-l-4 border-transparent hover:border-[#005f9e] whitespace-nowrap"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              if (link.label === 'Health & Safety') {
                return (
                  <div key={link.label} className="relative group flex items-stretch">
                    <Link
                      to={link.to}
                      className={`whitespace-nowrap transition-colors text-[10px] lg:text-xs xl:text-sm font-bold uppercase tracking-widest font-outfit flex items-center gap-1 px-1 lg:px-2 cursor-pointer select-none ${
                        isActive(link.to) 
                          ? 'text-[#005f9e]' 
                          : 'text-[#0f3a5e] hover:text-[#005f9e]'
                      }`}
                    >
                      {link.label}
                      <span className="material-symbols-outlined text-[14px] lg:text-base transition-transform duration-300 group-hover:rotate-180">
                        keyboard_arrow_down
                      </span>
                      <span className={`absolute bottom-0 left-0 h-[3px] transition-all duration-300 bg-[#005f9e] ${isActive(link.to) ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                    </Link>

                    {/* Health & Safety Dropdown Menu */}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-0 w-[38rem] bg-white border border-slate-100 shadow-2xl rounded-none p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
                      <div className="grid grid-cols-2 gap-x-2">
                        {[
                          { label: "Health & Safety Policy", to: "/health-safety/policy" },
                          { label: "Risk Assessments", to: "/health-safety/risk-assessments" },
                          { label: "Method Statements (RAMS)", to: "/health-safety/rams" },
                          { label: "Near Miss Reporting", to: "/health-safety/near-miss" },
                          { label: "Environmental Protection", to: "/health-safety/environmental-protection" },
                          { label: "Incident Management", to: "/health-safety/incident-management" },
                          { label: "Quality Assurance", to: "/health-safety/quality-assurance" },
                          { label: "Site Audits", to: "/health-safety/site-audits" },
                          { label: "Daily Briefings", to: "/health-safety/daily-briefings" },
                          { label: "PPE", to: "/health-safety/ppe" },
                          { label: "Toolbox Talks", to: "/health-safety/toolbox-talks" },
                          { label: "NRSWA Compliance", to: "/health-safety/nrswa" },
                          { label: "Training", to: "/health-safety/training" },
                          { label: "Continuous Monitoring", to: "/health-safety/monitoring" },
                          { label: "Behavioural Safety", to: "/health-safety/behavioural-safety" }
                        ].map((item, index) => (
                          <Link
                            key={index}
                            to={item.to}
                            className="px-4 py-2 text-[11px] lg:text-xs font-bold text-slate-600 uppercase tracking-wider font-outfit hover:bg-slate-50 hover:text-[#005f9e] transition-all duration-200 text-left border-l-4 border-transparent hover:border-[#005f9e] whitespace-nowrap"
                          >
                            {item.label}
                          </Link>
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
                      : 'text-[#0f3a5e] hover:text-[#005f9e]'
                  }`}
                >
                  {link.label}
                  <span className={`absolute bottom-0 left-0 h-[3px] transition-all duration-300 bg-[#005f9e] ${isActive(link.to) ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                </Link>
              );
            })}
          </nav>

          {/* Right CTA / Hamburger Menu */}
          <div className="flex items-center gap-4 ml-4 lg:ml-8 xl:ml-12 pr-2 sm:pr-4 lg:pr-6 shrink-0">
            {/* Join Our Workforce Button */}
            <Link
              to="/career"
              className="bg-[#005f9e] text-white hover:bg-[#0f3a5e] transition-all duration-300 px-4 py-3 lg:px-6 xl:px-8 font-bold uppercase text-[10px] lg:text-xs xl:text-sm font-outfit tracking-widest flex items-center justify-center h-full border-l border-[#d2e5f5]/50"
            >
              Join Our Workforce
            </Link>

            {/* Mobile Hamburger toggle */}
            <div className="lg:hidden flex items-center py-4">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="flex flex-col gap-1.5 justify-center items-center w-10 h-10 border rounded bg-white/5 transition-colors duration-300 border-slate-200 text-[#0f3a5e]"
                aria-label="Toggle Menu"
              >
                <span className={`w-6 h-0.5 transition-all duration-300 bg-[#0f3a5e] ${isMenuOpen ? 'transform rotate-45 translate-y-2' : ''}`}></span>
                <span className={`w-6 h-0.5 transition-all duration-300 bg-[#0f3a5e] ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`w-6 h-0.5 transition-all duration-300 bg-[#0f3a5e] ${isMenuOpen ? 'transform -rotate-45 -translate-y-2' : ''}`}></span>
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
                          className="transition-colors py-2.5 border-b flex items-center justify-between text-left font-bold text-slate-800 hover:text-[#005f9e] border-slate-50"
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
                                { label: "About BlueGrid", to: "/about" },
                                { label: "Our Missions", to: "/about/missions" },
                                { label: "Our Visions", to: "/about/visions" },
                                { label: "Our History", to: "/about/history" },
                                { label: "Accreditation & Awards", to: "/about/accreditations" },
                                { label: "On Board & Directors", to: "/about/directors" },
                                { label: "Our Policies", to: "/about/policies" }
                              ].map((item, index) => (
                                <Link
                                  key={index}
                                  to={item.to}
                                  onClick={() => {
                                    setIsMenuOpen(false);
                                    setIsMobileAboutOpen(false);
                                  }}
                                  className="hover:text-[#005f9e] transition-colors py-1 block text-left"
                                >
                                  {item.label}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  }

                  if (link.label === 'Health & Safety') {
                    return (
                      <div key={link.label} className="flex flex-col">
                        <button
                          onClick={() => setIsMobileHealthSafetyOpen(!isMobileHealthSafetyOpen)}
                          className="transition-colors py-2.5 border-b flex items-center justify-between text-left font-bold text-slate-800 hover:text-[#005f9e] border-slate-50"
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
                              className="pl-4 grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 font-sans normal-case text-xs text-slate-500 py-2 border-l border-brand-primary/20 mt-1"
                            >
                              {[
                                { label: "Health & Safety Policy", to: "/health-safety/policy" },
                                { label: "Risk Assessments", to: "/health-safety/risk-assessments" },
                                { label: "Method Statements (RAMS)", to: "/health-safety/rams" },
                                { label: "Near Miss Reporting", to: "/health-safety/near-miss" },
                                { label: "Environmental Protection", to: "/health-safety/environmental-protection" },
                                { label: "Incident Management", to: "/health-safety/incident-management" },
                                { label: "Quality Assurance", to: "/health-safety/quality-assurance" },
                                { label: "Site Audits", to: "/health-safety/site-audits" },
                                { label: "Daily Briefings", to: "/health-safety/daily-briefings" },
                                { label: "PPE", to: "/health-safety/ppe" },
                                { label: "Toolbox Talks", to: "/health-safety/toolbox-talks" },
                                { label: "NRSWA Compliance", to: "/health-safety/nrswa" },
                                { label: "Training", to: "/health-safety/training" },
                                { label: "Continuous Monitoring", to: "/health-safety/monitoring" },
                                { label: "Behavioural Safety", to: "/health-safety/behavioural-safety" }
                              ].map((item, index) => (
                                <Link
                                  key={index}
                                  to={item.to}
                                  onClick={() => {
                                    setIsMenuOpen(false);
                                    setIsMobileHealthSafetyOpen(false);
                                  }}
                                  className="hover:text-[#005f9e] transition-colors py-1 block text-left"
                                >
                                  {item.label}
                                </Link>
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
                          className="transition-colors py-2.5 border-b flex items-center justify-between text-left font-bold text-slate-800 hover:text-[#005f9e] border-slate-50"
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
                                { label: "All Services", to: "/services" },
                                { label: "Water Meter Installation", to: "/services?select=water-meter-installation" },
                                { label: "Civil Engineering", to: "/services?select=civil-engineering" },
                                { label: "Reinstatement", to: "/services?select=reinstatement" },
                                { label: "Utility Surveying", to: "/services?select=utility-surveying" },
                                { label: "Traffic Management Support", to: "/services?select=traffic-management" },
                                { label: "Emergency Utility Response", to: "/services?select=emergency-utility-response" },
                                { label: "Infrastructure Support", to: "/services?select=infrastructure-support" }
                              ].map((item, index) => (
                                <Link
                                  key={index}
                                  to={item.to}
                                  onClick={() => {
                                    setIsMenuOpen(false);
                                    setIsMobileServicesOpen(false);
                                  }}
                                  className="hover:text-[#005f9e] transition-colors py-1 block text-left"
                                >
                                  {item.label}
                                </Link>
                              ))}
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
                      className="transition-colors py-2.5 border-b flex items-center justify-between text-slate-800 hover:text-[#005f9e] border-slate-50"
                    >
                      <span>{link.label}</span>
                      <span className="text-[#005f9e] text-xs">➔</span>
                    </Link>
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
