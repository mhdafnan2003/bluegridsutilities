import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-10 transition-all duration-300 ${isScrolled ? 'py-4 bg-black/20 backdrop-blur-xl shadow-lg border-b border-white/10' : 'py-6 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between relative">
        {/* Left: Logo */}
        <Link className="flex items-center" to="/#">
          <img src={logo} alt="BlurGrid Utilities Logo" className="h-10 md:h-16 w-auto object-contain" />
        </Link>

        {/* Center: Navigation Pill */}
        <nav className="hidden md:flex items-center gap-10 px-10 py-3 rounded-full bg-white/15 border border-white/20 backdrop-blur-md">
          <Link className="text-white/90 hover:text-white transition-colors text-sm font-medium" to="/#">Home</Link>
          <Link className="text-white/90 hover:text-white transition-colors text-sm font-medium" to="/#about">About</Link>
          <Link className="text-white/90 hover:text-white transition-colors text-sm font-medium" to="/#services">Services</Link>
          <Link className="text-white/90 hover:text-white transition-colors text-sm font-medium" to="/#contact">Contact Us</Link>
        </nav>

        {/* Right: CTA Link */}
        <div className="hidden md:flex items-center">
          <Link className="text-white font-medium text-sm border-b border-white/50 pb-1 hover:border-white transition-colors" to="/apply">
            Join Our Workforce
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden ml-auto">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="w-11 h-11 rounded-full bg-white/15 border border-white/20 flex items-center justify-center text-white"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 rounded-3xl p-6 space-y-5 bg-black/80 backdrop-blur-md border border-white/10">
          <Link className="block text-white text-lg font-semibold border-b border-white/10 pb-3" to="/#" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link className="block text-white text-lg font-semibold border-b border-white/10 pb-3" to="/#about" onClick={() => setIsMenuOpen(false)}>About</Link>
          <Link className="block text-white text-lg font-semibold border-b border-white/10 pb-3" to="/#services" onClick={() => setIsMenuOpen(false)}>Services</Link>
          <Link className="block text-white text-lg font-semibold border-b border-white/10 pb-3" to="/#contact" onClick={() => setIsMenuOpen(false)}>Contact Us</Link>
          <Link className="block text-white text-lg font-semibold" to="/apply" onClick={() => setIsMenuOpen(false)}>Join Our Workforce</Link>
        </div>
      )}
    </header>
  );
};

export default Header;
