import React, { useState, useEffect } from 'react';
import { siteConfig } from '../data/siteConfig';

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.scrollY > window.innerHeight * 0.7;
  });

  const whatsappUrl = `${siteConfig.contact.whatsappLink}?text=${encodeURIComponent(siteConfig.contact.defaultWhatsAppMsg)}`;

  useEffect(() => {
    const heroSlider = document.getElementById('hero-slider');

    const checkVisibility = () => {
      if (heroSlider) {
        const rect = heroSlider.getBoundingClientRect();
        // Visible when hero slider has scrolled out of screen or user scrolled past 70% of viewport
        const shouldShow = rect.bottom <= 0 || window.scrollY > window.innerHeight * 0.7;
        setIsVisible((prev) => (prev !== shouldShow ? shouldShow : prev));
      } else {
        const shouldShow = window.scrollY > window.innerHeight * 0.7;
        setIsVisible((prev) => (prev !== shouldShow ? shouldShow : prev));
      }
    };

    // Initial check on mount
    checkVisibility();

    // IntersectionObserver on #hero-slider for performant viewport tracking
    let observer;
    if (heroSlider && 'IntersectionObserver' in window) {
      observer = new IntersectionObserver(
        ([entry]) => {
          // When hero-slider is not intersecting (scrolled past), show navbar.
          // If intersecting, verify scroll position against the 70% threshold.
          const shouldShow = !entry.isIntersecting || window.scrollY > window.innerHeight * 0.7;
          setIsVisible((prev) => (prev !== shouldShow ? shouldShow : prev));
        },
        {
          rootMargin: '-30% 0px 0px 0px',
          threshold: [0, 0.25, 0.5, 0.75, 1],
        }
      );
      observer.observe(heroSlider);
    }

    // Passive scroll listener throttled with requestAnimationFrame for smooth 60fps/120fps updates
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          checkVisibility();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      if (observer) observer.disconnect();
    };
  }, []);

  return (
    <header
      aria-hidden={!isVisible}
      className={`fixed top-0 left-0 right-0 z-50 bg-[#060D17]/90 backdrop-blur-xl border-b border-white/10 shadow-[0_4px_30px_rgba(6,13,23,0.85)] transition-all duration-300 transform ${
        isVisible
          ? 'translate-y-0 opacity-100 pointer-events-auto'
          : '-translate-y-full opacity-0 pointer-events-none'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-3.5 flex items-center justify-between">
        
        {/* Logo & Brand Identity */}
        <a href="#hero-slider" className="flex items-center gap-3 group">
          <div className="w-10 h-10 flex-shrink-0">
            <img 
              src="assets/logo.png" 
              alt={siteConfig.businessName} 
              className="w-full h-full object-contain logo-white-shadow-sm group-hover:scale-105 transition-transform" 
            />
          </div>
          <div>
            <span className="text-xs sm:text-sm font-extrabold tracking-tight text-white uppercase block">
              Smart Computer <span className="text-[#38B6FF]">&amp; Stationary</span>
            </span>
            <span className="text-[10px] text-[#93C5FD]/80 tracking-wider block font-mono">
              {siteConfig.proprietor.name} · Canteen Gate
            </span>
          </div>
        </a>

        {/* Navigation & Header Actions */}
        <div className="flex items-center gap-3 sm:gap-5 text-xs font-semibold">
          <a href="#services" className="text-slate-300 hover:text-[#38B6FF] transition hidden lg:inline-block font-mono tracking-wider uppercase text-[10.5px]">
            Departments
          </a>
          <a href="#notices" className="text-slate-300 hover:text-[#38B6FF] transition hidden md:inline-block font-mono tracking-wider uppercase text-[10.5px]">
            Circulars
          </a>
          <a href="#print-calculator" className="text-slate-300 hover:text-[#38B6FF] transition hidden md:inline-block font-mono tracking-wider uppercase text-[10.5px]">
            Calculator
          </a>
          <a href="#stationery-catalog" className="text-slate-300 hover:text-[#38B6FF] transition hidden lg:inline-block font-mono tracking-wider uppercase text-[10.5px]">
            Stationery
          </a>
          <a href="#faq" className="text-slate-300 hover:text-[#38B6FF] transition hidden xl:inline-block font-mono tracking-wider uppercase text-[10.5px]">
            FAQ
          </a>
          <a href="#about" className="text-slate-300 hover:text-[#38B6FF] transition hidden sm:inline-block font-mono tracking-wider uppercase text-[10.5px]">
            Colophon
          </a>

          {/* Direct Call Link */}
          <a 
            href={`tel:${siteConfig.contact.rawPhone}`} 
            className="text-white hover:text-[#38B6FF] transition hidden sm:flex items-center gap-1.5 font-mono text-[11px]"
          >
            <i className="fa-solid fa-phone text-[10px] text-[#38B6FF]"></i>
            <span>{siteConfig.contact.phone}</span>
          </a>

          {/* Quick WhatsApp Order Button */}
          <a 
            href={whatsappUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-full border border-[#38B6FF]/50 bg-[#1D4ED8] hover:bg-[#2563EB] text-white transition-all flex items-center gap-2 shadow-[0_0_15px_rgba(56,182,255,0.35)] font-semibold text-xs tracking-wider uppercase hover:scale-105"
          >
            <i className="fa-brands fa-whatsapp text-sm text-[#38B6FF]"></i>
            <span>WhatsApp Order</span>
          </a>
        </div>

      </div>
    </header>
  );
}
