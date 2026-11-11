import React from 'react';
import { siteConfig } from '../data/siteConfig';

export default function Navbar() {
  const whatsappUrl = `${siteConfig.contact.whatsappLink}?text=${encodeURIComponent(siteConfig.contact.defaultWhatsAppMsg)}`;

  return (
    <header className="absolute top-0 left-0 right-0 z-30 border-b border-white/10 bg-brand-forestDark/60 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo & Brand Identity */}
        <a href="#hero-slider" className="flex items-center gap-3 group">
          <div className="w-11 h-11 flex-shrink-0">
            <img 
              src="assets/logo.png" 
              alt={siteConfig.businessName} 
              className="w-full h-full object-contain drop-shadow-md group-hover:scale-105 transition-transform" 
            />
          </div>
          <div>
            <span className="text-xs sm:text-sm font-extrabold tracking-tight text-white uppercase block">
              Smart Computer <span className="text-brand-sky">&amp; Stationary</span>
            </span>
            <span className="text-[10px] text-emerald-300 tracking-wider block font-medium">
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
            className="px-4 py-2 rounded-full bg-[#25D366] text-white hover:bg-[#20BA5A] transition flex items-center gap-2 shadow-lg font-bold"
          >
            <i className="fa-brands fa-whatsapp text-sm"></i>
            <span>WhatsApp Order</span>
          </a>
        </div>

      </div>
    </header>
  );
}
