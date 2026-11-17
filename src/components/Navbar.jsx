import React, { useState, useEffect } from 'react';
import { siteConfig } from '../data/siteConfig';
import { trackCallClick, trackWhatsAppClick } from '../utils/analytics';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const whatsappUrl = `${siteConfig.contact.whatsappLink}?text=${encodeURIComponent(siteConfig.contact.defaultWhatsAppMsg)}`;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getBlogUrl = () => {
    if (typeof window !== 'undefined') {
      const host = window.location.hostname;
      if (host.startsWith('blog.')) {
        return '#the-keyword';
      }
      if (host.includes('smartcomputer.shop') || host.includes('wasmer.app')) {
        return 'https://blog.smartcomputer.shop/';
      }
      if (host.includes('smartcomputer.com')) {
        return 'https://blog.smartcomputer.com/';
      }
    }
    return 'blog.html';
  };

  const blogUrl = getBlogUrl();

  const navLinks = [
    { href: '#services', label: 'Departments' },
    { href: '#notices', label: 'Circulars' },
    { href: '#print-calculator', label: 'Calculator' },
    { href: '#stationery-catalog', label: 'Stationery' },
    { href: blogUrl, label: 'Blog', isBlog: true },
    { href: '#faq', label: 'FAQ' },
    { href: '#about', label: 'Colophon' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 pointer-events-auto ${
        isScrolled
          ? 'bg-[#060D17]/95 backdrop-blur-2xl border-b border-[#38B6FF]/25 shadow-[0_8px_32px_rgba(6,13,23,0.95)] py-3 sm:py-3.5'
          : 'bg-[#060D17]/80 backdrop-blur-md border-b border-white/10 py-3.5 sm:py-4 shadow-lg'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        
        {/* Brand Logo & Identity */}
        <a 
          href="#hero-slider" 
          onClick={() => setIsMobileMenuOpen(false)}
          className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none focus:ring-2 focus:ring-[#38B6FF] rounded-lg p-1"
        >
          <div className="w-9 h-9 sm:w-10 sm:h-10 flex-shrink-0">
            <img 
              src="assets/logo.png" 
              alt={siteConfig.businessName} 
              className="w-full h-full object-contain logo-white-shadow-sm group-hover:scale-105 transition-transform" 
            />
          </div>
          <div>
            <span className="text-xs sm:text-sm font-extrabold tracking-tight text-white uppercase block leading-tight">
              Smart Computer <span className="text-[#38B6FF]">&amp; Stationary</span>
            </span>
            <span className="text-[9.5px] sm:text-[10px] text-[#93C5FD]/80 tracking-wider block font-mono">
              {siteConfig.proprietor.name} · Canteen Gate
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-4 lg:gap-5 text-xs font-semibold font-mono">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`transition-colors tracking-wider uppercase text-[10.5px] lg:text-[11px] py-1 hover:underline underline-offset-4 decoration-[#38B6FF] inline-flex items-center gap-1.5 ${
                link.isBlog
                  ? 'text-[#38B6FF] font-bold hover:text-white'
                  : 'text-slate-300 hover:text-[#38B6FF]'
              }`}
            >
              <span>{link.label}</span>
              {link.isBlog && (
                <span className="flex items-center gap-0.5 ml-0.5" aria-hidden="true" title="The Keyword Blog">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4285F4]"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#EA4335]"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FBBC05]"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#34A853]"></span>
                </span>
              )}
            </a>
          ))}
        </nav>

        {/* Action Controls & Mobile Hamburger Toggle */}
        <div className="flex items-center gap-2 sm:gap-4">
          {/* Direct Call Button (Desktop/Tablet) */}
          <a 
            href={`tel:${siteConfig.contact.rawPhone}`} 
            onClick={() => trackCallClick('navbar_desktop')}
            className="text-white hover:text-[#38B6FF] transition hidden sm:flex items-center gap-1.5 font-mono text-[11px] px-2.5 py-1.5 rounded-full hover:bg-white/5 border border-white/10"
            title="Direct Phone Call"
          >
            <i className="fa-solid fa-phone text-[10px] text-[#38B6FF]"></i>
            <span>{siteConfig.contact.phone}</span>
          </a>

          {/* Quick WhatsApp Order Button */}
          <a 
            href={whatsappUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick('navbar_desktop')}
            className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-[#38B6FF]/50 bg-[#1D4ED8] hover:bg-[#2563EB] text-white transition-all flex items-center gap-1.5 sm:gap-2 shadow-[0_0_15px_rgba(56,182,255,0.35)] font-semibold text-[11px] sm:text-xs tracking-wider uppercase hover:scale-105 cursor-pointer"
          >
            <i className="fa-brands fa-whatsapp text-sm text-[#38B6FF]"></i>
            <span className="hidden xs:inline">WhatsApp Order</span>
            <span className="xs:hidden">WhatsApp</span>
          </a>

          {/* Mobile Hamburger Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close Navigation Menu" : "Open Navigation Menu"}
            aria-expanded={isMobileMenuOpen}
            className="md:hidden w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-white flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-[#38B6FF]"
          >
            <i className={`fa-solid ${isMobileMenuOpen ? 'fa-xmark text-sm' : 'fa-bars text-sm'} text-[#38B6FF]`}></i>
          </button>
        </div>

      </div>

      {/* Mobile Slide-Down Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#060D17]/98 border-t border-white/10 px-6 py-5 shadow-2xl backdrop-blur-3xl animate-fadeIn">
          <div className="flex flex-col space-y-3 font-mono text-xs uppercase tracking-wider">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`py-2.5 px-3 rounded-xl transition flex items-center justify-between border ${
                  link.isBlog
                    ? 'bg-blue-600/15 border-blue-500/30 text-[#38B6FF] font-bold'
                    : 'text-slate-200 hover:text-[#38B6FF] hover:bg-white/5 border-transparent hover:border-white/10'
                }`}
              >
                <span className="flex items-center gap-2">
                  <span>{link.label}</span>
                  {link.isBlog && (
                    <span className="text-[9px] px-2 py-0.5 rounded-full bg-blue-600 text-white font-mono normal-case tracking-normal">
                      The Keyword
                    </span>
                  )}
                </span>
                <span className="text-[#38B6FF]">&rarr;</span>
              </a>
            ))}

            <div className="pt-3 border-t border-white/10 flex flex-col gap-2.5">
              <a
                href={`tel:${siteConfig.contact.rawPhone}`}
                onClick={() => trackCallClick('navbar_mobile_menu')}
                className="flex items-center justify-center gap-2 py-2.5 rounded-xl border border-white/15 bg-white/5 text-white text-xs font-semibold"
              >
                <i className="fa-solid fa-phone text-[#38B6FF] text-xs"></i>
                <span>Call: {siteConfig.contact.phone}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
