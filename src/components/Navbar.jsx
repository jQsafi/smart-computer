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
      className={`fixed top-0 left-0 right-0 z-50 bg-brand-forestDark/90 backdrop-blur-md border-b border-white/10 shadow-lg transition-all duration-300 transform ${
        isVisible
          ? 'translate-y-0 opacity-100 pointer-events-auto'
          : '-translate-y-full opacity-0 pointer-events-none'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo & Brand Identity */}
        <a href="#hero-slider" className="flex items-center gap-3 group">
          <div className="w-11 h-11 flex-shrink-0">
            <img 
              src="assets/logo.png" 
              alt={siteConfig.businessName} 
              className="w-full h-full object-contain logo-white-shadow-sm group-hover:scale-105 transition-transform" 
            />
          </div>
          <div>
            <span className="text-xs sm:text-sm font-extrabold tracking-tight text-white uppercase block">
              Smart Computer <span className="text-brand-sky">&amp; Stationary</span>
            </span>
            <span className="text-[10px] text-sky-300 tracking-wider block font-medium">
              {siteConfig.proprietor.name} • Canteen Gate
            </span>
          </div>
        </a>

        {/* Navigation & Header Actions */}
        <div className="flex items-center gap-3 sm:gap-6 text-xs font-semibold">
          <a href="#services" className="text-gray-300 hover:text-white transition hidden md:inline-block">
            Services
          </a>
          <a href="#notices" className="text-gray-300 hover:text-white transition hidden md:inline-block">
            Notices
          </a>
          <a href="#about" className="text-gray-300 hover:text-white transition hidden md:inline-block">
            About
          </a>

          {/* Direct Call Link */}
          <a 
            href={`tel:${siteConfig.contact.rawPhone}`} 
            className="text-white hover:text-brand-sky transition hidden sm:flex items-center gap-1.5"
          >
            <i className="fa-solid fa-phone text-[10px] text-brand-sky"></i>
            <span>{siteConfig.contact.phone}</span>
          </a>

          {/* Quick WhatsApp Order Button */}
          <a 
            href={whatsappUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-full bg-brand-blue text-white hover:bg-brand-blueLight transition flex items-center gap-2 shadow-lg font-bold"
          >
            <i className="fa-brands fa-whatsapp text-sm"></i>
            <span>WhatsApp Order</span>
          </a>
        </div>

      </div>
    </header>
  );
}
