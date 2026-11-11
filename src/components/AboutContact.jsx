import React from 'react';
import { siteConfig } from '../data/siteConfig';

export default function AboutContact() {
  const whatsappUrl = `${siteConfig.contact.whatsappLink}?text=${encodeURIComponent(siteConfig.contact.defaultWhatsAppMsg)}`;

  return (
    <section id="about" className="space-y-8 scroll-mt-24">
      
      {/* Top Monograph Section Marker */}
      <div className="border-b border-white/10 pb-5">
        <div className="flex items-center gap-2.5 text-xs font-mono uppercase tracking-[0.25em] text-[#38B6FF] mb-1.5">
          <span className="inline-block w-2 h-2 rounded-full bg-[#38B6FF] shadow-[0_0_10px_#38B6FF]"></span>
          <span className="font-semibold">SECTION V · COLOPHON &amp; PROPRIETOR REGISTRY</span>
        </div>
        <h2 className="brand-foil font-display text-2xl sm:text-4xl font-medium tracking-tight uppercase">
          Institutional Registry &amp; Operating Ledger
        </h2>
        <p className="font-serif-i italic text-xs sm:text-sm text-[#E0F2FE]/70 mt-1">
          Official credentials, communication channels, hours ledger &amp; campus coordinates
        </p>
      </div>

      {/* 3-Column Frosted Editorial Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        
        {/* Ledger Column 1: Identity & Insignia */}
        <div className="bg-[#0B192C]/70 backdrop-blur-md border border-white/10 hover:border-[#38B6FF]/40 rounded-2xl p-6 sm:p-7 transition-all duration-300 shadow-xl space-y-4 flex flex-col justify-between group">
          <div className="space-y-4">
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#93C5FD]/70 block border-b border-white/10 pb-2">
              Official Insignia &amp; Entity
            </span>

            <div className="flex items-center gap-3.5">
              <img 
                src="assets/logo.png" 
                alt={siteConfig.businessName} 
                className="w-14 h-14 object-contain logo-white-shadow-sm flex-shrink-0 group-hover:scale-105 transition-transform"
              />
              <div>
                <div className="font-extrabold text-white text-base sm:text-lg leading-tight uppercase font-sans">
                  Smart Computer
                  <span className="block text-[#38B6FF] text-sm">&amp; Stationary</span>
                </div>
                <p className="text-[11px] text-[#93C5FD]/70 font-mono mt-0.5">
                  Est. 2026 · Canteen Gate
                </p>
              </div>
            </div>

            <div className="pt-2 border-t border-white/10">
              <span className="text-[10px] text-[#93C5FD]/60 uppercase font-mono tracking-wider block">
                Proprietor &amp; Founder
              </span>
              <div className="font-bold text-white text-base mt-0.5">
                {siteConfig.proprietor.name}
              </div>
              <p className="font-serif-i italic text-xs text-[#E0F2FE]/80 mt-1">
                "{siteConfig.tagline}"
              </p>
            </div>
          </div>

          <div className="text-[10px] font-mono text-[#38B6FF]/80 uppercase tracking-widest pt-2">
            ● Accredited &amp; Verified
          </div>
        </div>

        {/* Ledger Column 2: Direct Communications */}
        <div className="bg-[#0B192C]/70 backdrop-blur-md border border-white/10 hover:border-[#38B6FF]/40 rounded-2xl p-6 sm:p-7 transition-all duration-300 shadow-xl space-y-4 flex flex-col justify-between group">
          <div className="space-y-4">
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#93C5FD]/70 block border-b border-white/10 pb-2">
              Hotlines &amp; Direct Dispatch
            </span>

            <div className="space-y-3">
              <div>
                <span className="text-[10px] font-mono text-[#93C5FD]/60 uppercase tracking-wider block">
                  Direct Telephone Line
                </span>
                <a 
                  href={`tel:${siteConfig.contact.rawPhone}`} 
                  className="text-lg sm:text-xl font-bold text-white hover:text-[#38B6FF] transition-colors block mt-0.5"
                >
                  {siteConfig.contact.phone}
                </a>
              </div>

              <div>
                <span className="text-[10px] font-mono text-[#93C5FD]/60 uppercase tracking-wider block">
                  Instant WhatsApp Desk
                </span>
                <a 
                  href={whatsappUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-base sm:text-lg font-bold text-[#38B6FF] hover:text-white transition-colors flex items-center gap-2 mt-0.5"
                >
                  <i className="fa-brands fa-whatsapp text-lg"></i>
                  <span>{siteConfig.contact.phone}</span>
                </a>
              </div>
            </div>

            <p className="font-serif-i italic text-xs text-[#E0F2FE]/75 leading-relaxed pt-2 border-t border-white/10">
              Inquiries regarding online job applications, university admission forms, printing queues, and course enrollments are addressed directly by proprietor Shafayat Hossain.
            </p>
          </div>

          <div className="text-[10px] font-mono text-[#38B6FF]/80 uppercase tracking-widest pt-2">
            ● Direct Proprietor Attention
          </div>
        </div>

        {/* Ledger Column 3: Hours & Coordinates */}
        <div className="bg-[#0B192C]/70 backdrop-blur-md border border-white/10 hover:border-[#38B6FF]/40 rounded-2xl p-6 sm:p-7 transition-all duration-300 shadow-xl space-y-4 flex flex-col justify-between group">
          <div className="space-y-4">
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#93C5FD]/70 block border-b border-white/10 pb-2">
              Hours Ledger &amp; Coordinates
            </span>

            <div>
              <span className="text-[10px] font-mono text-[#93C5FD]/60 uppercase tracking-wider block">
                Physical Registry
              </span>
              <p className="text-xs sm:text-sm text-slate-200 mt-1 leading-relaxed">
                {siteConfig.contact.location}
              </p>
            </div>

            <div className="space-y-2 pt-2 border-t border-white/10 font-mono text-xs">
              <div className="flex justify-between items-center text-slate-300">
                <span className="text-[#93C5FD]">Sat — Thu:</span>
                <span className="text-white font-semibold">{siteConfig.hours.satThu}</span>
              </div>
              <div className="flex justify-between items-center text-slate-300">
                <span className="text-[#93C5FD]">Friday:</span>
                <span className="text-white font-semibold">{siteConfig.hours.fri}</span>
              </div>
            </div>
          </div>

          <div className="text-[10px] font-mono text-[#38B6FF]/80 uppercase tracking-widest pt-2 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#38B6FF] animate-pulse"></span>
            <span>Open Every Weekday &amp; Weekend</span>
          </div>
        </div>

      </div>
    </section>
  );
}
