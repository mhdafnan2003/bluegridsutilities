import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';

const LinkedInIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

const FacebookIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const Footer = () => {
  return (
    <footer className="bg-[#0b1324] text-slate-300 font-sans border-t-4 border-[#005f9e]">
      
      {/* Main Corporate Footer Content */}
      <div className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-12 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12">
          
          {/* Column 1: Company Profile & Legal Registration */}
          <div className="lg:col-span-2 space-y-6 text-left">
            <Link to="/" className="inline-block">
              <img 
                src={logo} 
                alt="Bluegrid Utilities Logo" 
                className="h-11 w-auto object-contain brightness-0 invert opacity-95" 
              />
            </Link>
            
            <div className="space-y-2 text-xs sm:text-sm text-slate-400 font-medium leading-relaxed">
              <h3 className="text-base font-bold text-white font-outfit tracking-tight uppercase">
                BLUEGRID UTILITIES
              </h3>
              <p className="text-slate-300">
                Bluegrid Utilities is a trading name of <span className="text-white font-semibold">Bluegrid Technology Ltd</span>.
              </p>
              <p className="pt-1">
                Registered in England and Wales. Company No. <span className="text-white font-bold font-mono">16442340</span>.
              </p>
              <p className="text-slate-400 text-xs pt-1">
                Registered Office: Stuart House, St. Johns Street, Peterborough, United Kingdom, PE1 5DD.
              </p>
            </div>

            {/* Social Links */}
            <div className="pt-4 flex items-center gap-3">
              <span className="text-xs font-bold tracking-widest text-slate-400 font-outfit mr-2 uppercase">
                Connect:
              </span>
              <a 
                href="https://www.linkedin.com/company/bluegrid-utilities/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-9 h-9 bg-slate-800 hover:bg-[#005f9e] text-white flex items-center justify-center transition-colors duration-300 shadow-sm"
                aria-label="LinkedIn"
              >
                <LinkedInIcon />
              </a>
              <a 
                href="https://www.facebook.com/share/1C8CFBLgxy/?mibextid=wwXIfr" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-9 h-9 bg-slate-800 hover:bg-[#005f9e] text-white flex items-center justify-center transition-colors duration-300 shadow-sm"
                aria-label="Facebook"
              >
                <FacebookIcon />
              </a>
              <a 
                href="https://www.instagram.com/bluegridutilities/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-9 h-9 bg-slate-800 hover:bg-[#005f9e] text-white flex items-center justify-center transition-colors duration-300 shadow-sm"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>
            </div>
          </div>

          {/* Column 2: Registered Office & Contact */}
          <div className="space-y-4 text-left">
            <h4 className="text-sm font-bold text-white tracking-widest font-outfit border-b border-slate-800 pb-2 uppercase">
              Registered Office
            </h4>
            
            <div className="text-xs sm:text-sm text-slate-400 space-y-1 font-medium leading-relaxed">
              <p className="text-white font-semibold">Stuart House</p>
              <p>St. Johns Street</p>
              <p>Peterborough</p>
              <p>United Kingdom</p>
              <p className="text-white font-bold font-mono">PE1 5DD</p>
            </div>

            <div className="pt-4 space-y-2 text-xs sm:text-sm">
              <div>
                <span className="text-slate-400 block text-[10px] font-bold tracking-wider font-outfit uppercase">General Enquiries:</span>
                <a href="mailto:enquiries@bluegridutilities.com" className="text-white hover:text-[#005f9e] transition-colors font-medium">
                  enquiries@bluegridutilities.com
                </a>
              </div>
              <div>
                <span className="text-slate-400 block text-[10px] font-bold tracking-wider font-outfit uppercase">Recruitment:</span>
                <a href="mailto:recruitment@bluegridutilities.com" className="text-white hover:text-[#005f9e] transition-colors font-medium">
                  recruitment@bluegridutilities.com
                </a>
              </div>
              <div className="pt-1">
                <span className="text-slate-400 block text-[10px] font-bold tracking-wider font-outfit uppercase">Telephone:</span>
                <a href="tel:+442034880934" className="text-white hover:text-[#005f9e] transition-colors font-medium">
                  +44 (0)20 3488 0934
                </a>
              </div>
            </div>
          </div>

          {/* Column 3: Navigation Links */}
          <div className="space-y-4 text-left">
            <h4 className="text-sm font-bold text-white tracking-widest font-outfit border-b border-slate-800 pb-2 uppercase">
              Navigation
            </h4>
            
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-400 font-medium">
              <li>
                <Link to="/about" className="hover:text-white hover:translate-x-1 inline-block transition-all">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white hover:translate-x-1 inline-block transition-all">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-white hover:translate-x-1 inline-block transition-all">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/health-safety" className="hover:text-white hover:translate-x-1 inline-block transition-all">
                  Health & Safety
                </Link>
              </li>
              <li>
                <Link to="/sustainability" className="hover:text-white hover:translate-x-1 inline-block transition-all">
                  Sustainability
                </Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-white hover:translate-x-1 inline-block transition-all">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/news" className="hover:text-white hover:translate-x-1 inline-block transition-all">
                  News & Insights
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white hover:translate-x-1 inline-block transition-all">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Governance & Legal Policies */}
          <div className="space-y-4 text-left">
            <h4 className="text-sm font-bold text-white tracking-widest font-outfit border-b border-slate-800 pb-2 uppercase">
              Legal & Policies
            </h4>
            
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-400 font-medium">
              <li>
                <Link to="/about/policies" className="hover:text-white hover:translate-x-1 inline-block transition-all">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/about/policies" className="hover:text-white hover:translate-x-1 inline-block transition-all">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link to="/about/policies" className="hover:text-white hover:translate-x-1 inline-block transition-all">
                  Website Terms of Use
                </Link>
              </li>
              <li>
                <Link to="/about/policies" className="hover:text-white hover:translate-x-1 inline-block transition-all">
                  Accessibility
                </Link>
              </li>
              <li>
                <Link to="/about/accreditations" className="hover:text-white hover:translate-x-1 inline-block transition-all">
                  Accreditations
                </Link>
              </li>
              <li>
                <Link to="/about/policies" className="hover:text-white hover:translate-x-1 inline-block transition-all">
                  Governance Centre
                </Link>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="border-t border-slate-800 bg-[#070d19] py-6">
        <div className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-medium">
          <p className="text-center sm:text-left font-sans">
            © 2026 Bluegrid Technology Ltd. All rights reserved.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-4 text-[11px] font-outfit tracking-wider">
            <Link to="/about" className="hover:text-white transition-colors">About</Link>
            <span className="text-slate-700">•</span>
            <Link to="/services" className="hover:text-white transition-colors">Services</Link>
            <span className="text-slate-700">•</span>
            <Link to="/projects" className="hover:text-white transition-colors">Projects</Link>
            <span className="text-slate-700">•</span>
            <Link to="/health-safety" className="hover:text-white transition-colors">Health & Safety</Link>
            <span className="text-slate-700">•</span>
            <Link to="/sustainability" className="hover:text-white transition-colors">Sustainability</Link>
            <span className="text-slate-700">•</span>
            <Link to="/careers" className="hover:text-white transition-colors">Careers</Link>
            <span className="text-slate-700">•</span>
            <Link to="/news" className="hover:text-white transition-colors">News</Link>
            <span className="text-slate-700">•</span>
            <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
            <span className="text-slate-700">•</span>
            <Link to="/about/policies" className="hover:text-white transition-colors">Privacy</Link>
            <span className="text-slate-700">•</span>
            <Link to="/about/policies" className="hover:text-white transition-colors">Cookies</Link>
            <span className="text-slate-700">•</span>
            <Link to="/about/policies" className="hover:text-white transition-colors">Website Terms</Link>
            <span className="text-slate-700">•</span>
            <Link to="/about/policies" className="hover:text-white transition-colors">Accessibility</Link>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
