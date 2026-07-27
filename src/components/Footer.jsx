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

const WhatsAppIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
  </svg>
);

const Footer = () => {
  return (
    <footer className="bg-[#0b1324] text-slate-300 font-sans border-t-4 border-[#005f9e]">
      
      {/* Main Corporate Footer Content */}
      <div className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-12 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12">
          
          {/* Column 1: Company Profile & Registration */}
          <div className="lg:col-span-2 space-y-6 text-left">
            <Link to="/" className="inline-block">
              <img 
                src={logo} 
                alt="Bluegrid Utilities Logo" 
                className="h-11 w-auto object-contain brightness-0 invert opacity-95" 
              />
            </Link>
            
            <div className="space-y-2 text-xs sm:text-sm text-slate-400 font-medium leading-relaxed">
              <h3 className="text-base font-bold text-white font-outfit uppercase tracking-tight">
                Bluegrid Utilities
              </h3>
              <p className="text-slate-300">
                A trading name of <span className="text-white font-semibold">Bluegrid Technology Ltd</span>
              </p>
              <p className="pt-2">
                Company Registration Number: <span className="text-white font-bold font-mono">16442340</span>
              </p>
              <p className="text-slate-400 text-xs">
                Registered in England and Wales. Specialists in UK utility infrastructure delivery, workforce coordination, and metering operations.
              </p>
            </div>

            {/* Social Links */}
            <div className="pt-4 flex items-center gap-3">
              <span className="text-xs font-bold uppercase tracking-widest text-slate-400 font-outfit mr-2">
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
              <a 
                href="https://wa.me/447000000000" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-9 h-9 bg-slate-800 hover:bg-[#25D366] text-white flex items-center justify-center transition-colors duration-300 shadow-sm"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon />
              </a>
            </div>
          </div>

          {/* Column 2: Registered Office & Contact */}
          <div className="space-y-4 text-left">
            <h4 className="text-sm font-bold text-white uppercase tracking-widest font-outfit border-b border-slate-800 pb-2">
              Registered Office
            </h4>
            
            <div className="text-xs sm:text-sm text-slate-400 space-y-1 font-medium leading-relaxed">
              <p className="text-white font-semibold">Stuart House</p>
              <p>St Johns Street</p>
              <p>Peterborough</p>
              <p>England</p>
              <p className="text-white font-bold font-mono">PE1 5DD</p>
            </div>

            <div className="pt-4 space-y-2 text-xs sm:text-sm">
              <div>
                <span className="text-slate-400 block text-[10px] uppercase font-bold tracking-wider font-outfit">Email:</span>
                <a href="mailto:enquiries@bluegridutilities.com" className="text-white hover:text-[#005f9e] transition-colors font-medium">
                  enquiries@bluegridutilities.com
                </a>
              </div>
              <div className="pt-1">
                <span className="text-slate-400 block text-[10px] uppercase font-bold tracking-wider font-outfit">Telephone:</span>
                <a href="tel:+441733000000" className="text-white hover:text-[#005f9e] transition-colors font-medium">
                  +44 (0) 1733 000000
                </a>
              </div>
            </div>
          </div>

          {/* Column 3: Quick Links */}
          <div className="space-y-4 text-left">
            <h4 className="text-sm font-bold text-white uppercase tracking-widest font-outfit border-b border-slate-800 pb-2">
              Quick Links
            </h4>
            
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-400 font-medium">
              <li>
                <Link to="/" className="hover:text-white hover:translate-x-1 inline-block transition-all">
                  Home
                </Link>
              </li>
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
                <Link to="/career" className="hover:text-white hover:translate-x-1 inline-block transition-all">
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

          {/* Column 4: Governance & Policies */}
          <div className="space-y-4 text-left">
            <h4 className="text-sm font-bold text-white uppercase tracking-widest font-outfit border-b border-slate-800 pb-2">
              Governance & Policies
            </h4>
            
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-400 font-medium">
              <li>
                <Link to="/health-safety" className="hover:text-white hover:translate-x-1 inline-block transition-all">
                  Health & Safety
                </Link>
              </li>
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
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/about/accreditations" className="hover:text-white hover:translate-x-1 inline-block transition-all">
                  Accreditations
                </Link>
              </li>
              <li>
                <Link to="/about/policies" className="hover:text-white hover:translate-x-1 inline-block transition-all">
                  Sitemap
                </Link>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="border-t border-slate-800 bg-[#070d19] py-6">
        <div className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-medium">
          <p className="text-center sm:text-left">
            © {new Date().getFullYear()} Bluegrid Utilities. A trading name of <span className="text-white">Bluegrid Technology Ltd</span>. All rights reserved.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-6 text-[11px] font-outfit uppercase tracking-wider">
            <Link to="/about/policies" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span className="text-slate-700">•</span>
            <Link to="/about/policies" className="hover:text-white transition-colors">
              Cookie Policy
            </Link>
            <span className="text-slate-700">•</span>
            <Link to="/about/policies" className="hover:text-white transition-colors">
              Terms & Conditions
            </Link>
            <span className="text-slate-700">•</span>
            <Link to="/about/policies" className="hover:text-white transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
