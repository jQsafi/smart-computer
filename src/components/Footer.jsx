import React from 'react';
import { siteConfig } from '../data/siteConfig';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const whatsappUrl = `${siteConfig.contact.whatsappLink}?text=${encodeURIComponent(siteConfig.contact.defaultWhatsAppMsg)}`;

  return (
    <footer className="relative z-10 border-t border-white/10 bg-[#060D17] text-slate-400 text-xs">
      {/* Delicate Gradient Top Accent Rule */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[#38B6FF]/40 to-transparent" aria-hidden="true" />

      <div className="max-w-5xl mx-auto px-6 py-12 space-y-8">
        
        {/* Monograph Metadata Strip */}
        <div className="flex flex-wrap items-center justify-between gap-4 font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-[#93C5FD]/70 border-b border-white/10 pb-6">
          <span>VOL. I · EDITION MMXXVI</span>
          <span className="hidden sm:inline">SHAFAYAT HOSSAIN · FOUNDER</span>
          <span>EST. 2026 · CANTEEN GATE</span>
        </div>

        {/* Middle Footer Details */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="space-y-1.5">
            <div className="font-extrabold text-white text-sm uppercase tracking-wide">
              {siteConfig.businessName}
            </div>
            <p className="font-serif-i italic text-xs text-[#E0F2FE]/70">
              {siteConfig.subTagline} · {siteConfig.contact.location}
            </p>
          </div>

          {/* Quick Action Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 font-mono text-[11px] text-slate-300">
            <a 
              href={`tel:${siteConfig.contact.rawPhone}`} 
              className="hover:text-[#38B6FF] transition-colors flex items-center gap-1.5"
            >
              <i className="fa-solid fa-phone text-[10px] text-[#38B6FF]"></i>
              <span>Call: {siteConfig.contact.phone}</span>
            </a>
            <a 
              href={whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-[#38B6FF] transition-colors flex items-center gap-1.5"
            >
              <i className="fa-brands fa-whatsapp text-sm text-[#38B6FF]"></i>
              <span>WhatsApp: {siteConfig.contact.phone}</span>
            </a>
          </div>
        </div>

        {/* Bottom Copyright & Colophon Note */}
        <div className="pt-4 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-500 font-mono">
          <div>
            &copy; {currentYear} {siteConfig.businessName}. All rights reserved.
          </div>
          <div className="text-[10px] tracking-wider uppercase text-[#38B6FF]/60">
            {siteConfig.motto}
          </div>
        </div>

      </div>
    </footer>
  );
}
