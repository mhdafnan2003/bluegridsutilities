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

const socialLinks = [
  { href: 'https://www.linkedin.com/company/bluegrid-utilities/', label: 'LinkedIn', Icon: LinkedInIcon },
  { href: 'https://www.facebook.com/share/1C8CFBLgxy/?mibextid=wwXIfr', label: 'Facebook', Icon: FacebookIcon },
];

const contactItems = [
  { label: 'General enquiries', value: 'enquiries@bluegridutilities.com', href: 'mailto:enquiries@bluegridutilities.com' },
  { label: 'Recruitment', value: 'recruitment@bluegridutilities.com', href: 'mailto:recruitment@bluegridutilities.com' },
  { label: 'Telephone', value: '+44 20 3488 0934', href: 'tel:+442034880934' },
];

const navigationLinks = [
  { label: 'About Bluegrid', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Safety & Quality', to: '/safety-quality' },
  { label: 'Careers', to: '/careers' },
  { label: 'Vacancies', to: '/careers/jobs' },
  { label: 'Projects', to: '/projects' },
  { label: 'Contact', to: '/contact' },
];

const policyLinks = [
  { label: 'Policies & Statements', to: '/policies' },
  { label: 'Candidate Privacy Notice', to: '/policies/candidate-privacy' },
  { label: 'Website Terms of Use', to: '/policies' },
  { label: 'Accessibility Statement', to: '/policies' },
];

const headingClass = 'text-xs font-bold text-white tracking-widest font-outfit uppercase border-b border-slate-800 pb-2 mb-4';
const linkListClass = 'space-y-2.5';
const linkClass = 'text-nav text-slate-400 hover:text-white transition-colors';

const Footer = () => {
  return (
    <footer className="bg-[#0b1324] text-slate-300 font-sans border-t-4 border-[#005f9e]">
      <div className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-12 py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-x-6 gap-y-10 lg:gap-x-12">

          {/* Company information */}
          <div className="col-span-2 lg:col-span-4">
            <Link to="/" className="inline-block mb-5">
              <img
                src={logo}
                alt="Bluegrid Utilities Logo"
                className="h-11 w-auto object-contain brightness-0 invert opacity-95"
              />
            </Link>
            <address className="not-italic text-sm leading-relaxed text-slate-400 space-y-1.5">
              <p className="text-white font-semibold">Bluegrid Technology Ltd, trading as Bluegrid Utilities</p>
              <p>Registered in England and Wales. Company No. <span className="text-white font-semibold">16442340</span></p>
              <p>
                <span className="text-slate-300 font-semibold">Registered office:</span> Office 68, Spaces, The Maylands Building, Maylands Avenue, Hemel Hempstead Industrial Estate, Hemel Hempstead, England, HP2 7TG
              </p>
            </address>
          </div>

          {/* Contact */}
          <div className="col-span-2 lg:col-span-3">
            <h4 className={headingClass}>Contact Us</h4>
            <dl className="space-y-3">
              {contactItems.map(({ label, value, href }) => (
                <div key={label}>
                  <dt className="text-xs text-slate-400 font-semibold">{label}</dt>
                  <dd>
                    <a href={href} className="text-nav text-white hover:text-[#005f9e] transition-colors break-words">
                      {value}
                    </a>
                  </dd>
                </div>
              ))}
            </dl>
            <div className="flex items-center gap-3 mt-5">
              {socialLinks.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-slate-800 hover:bg-[#005f9e] text-white flex items-center justify-center transition-colors duration-300"
                  aria-label={label}
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer navigation" className="col-span-1 md:col-span-2 lg:col-span-2">
            <h4 className={headingClass}>Navigation</h4>
            <ul className={linkListClass}>
              {navigationLinks.map(({ label, to }) => (
                <li key={label}>
                  <Link to={to} className={linkClass}>{label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Policies */}
          <nav aria-label="Policies" className="col-span-1 md:col-span-2 lg:col-span-3">
            <h4 className={headingClass}>Policies &amp; Legal</h4>
            <ul className={linkListClass}>
              {policyLinks.map(({ label, to }) => (
                <li key={label}>
                  <Link to={to} className={linkClass}>{label}</Link>
                </li>
              ))}
            </ul>
          </nav>

        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-slate-800 bg-[#070d19] py-5">
        <p className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-12 text-xs text-slate-400 text-center sm:text-left">
          © 2026 Bluegrid Technology Ltd. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
