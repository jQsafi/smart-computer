import React from 'react';
import { siteConfig } from '../data/siteConfig';

export default function ExecutiveSummary() {
  const whatsappUrl = `${siteConfig.contact.whatsappLink}?text=${encodeURIComponent(siteConfig.contact.defaultWhatsAppMsg)}`;

  return (
    <section className="space-y-8 scroll-mt-24">
      {/* Top Section Monograph Marker */}
      <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono uppercase tracking-[0.25em] text-[#38B6FF]">
        <div className="flex items-center gap-2.5">
          <span className="inline-block w-2 h-2 rounded-full bg-[#38B6FF] shadow-[0_0_10px_#38B6FF]"></span>
          <span className="font-semibold tracking-[0.3em]">SECTION I · EXECUTIVE MONOGRAPH</span>
        </div>
        <span className="text-[11px] text-[#93C5FD]/60 tracking-[0.2em] hidden sm:inline">
          EST. 2026 · CANTEEN GATE VICINITY
        </span>
      </div>

      {/* Brand-Foil Proclamation Headline */}
      <div className="space-y-3">
        <h2 className="brand-foil font-display text-2xl sm:text-4xl md:text-5xl font-medium tracking-tight uppercase leading-[1.12]">
          Smart Choices, Brighter Tomorrows · Technology, Citizenry &amp; Academic Care
        </h2>
        <div className="h-px w-24 sm:w-36 bg-gradient-to-r from-[#38B6FF] to-transparent" />
      </div>

      {/* Cormorant Garamond Serif Monograph Body */}
      <p className="font-serif-i italic text-base sm:text-xl text-[#E0F2FE]/90 leading-relaxed font-light">
        <strong className="font-semibold text-white tracking-wide not-italic">{siteConfig.businessName}</strong> stands as a premier digital institution and academic resource pavilion positioned strategically beside the School &amp; College Canteen Gate. Direct-managed by founder and proprietor <strong className="font-semibold text-[#38B6FF] not-italic">{siteConfig.proprietor.name}</strong>, our center delivers verified government job &amp; university admission processing, 2-minute passport lab portraits, ultra high-speed laser copying, an accredited computer training academy, and complete academic stationery under an uncompromising standard of accuracy.
      </p>

      {/* Delicate Gradient Separator Rule */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[#38B6FF]/35 to-transparent" aria-hidden="true" />

      {/* Frosted Contact Metadata Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
        
        {/* Card 1: Proprietor */}
        <div className="bg-[#0B192C]/70 backdrop-blur-md border border-white/10 hover:border-[#38B6FF]/40 rounded-2xl p-5 transition-all duration-300 group shadow-lg flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-[0.2em] text-[#93C5FD]/70 mb-2">
              <span>Proprietor &amp; Founder</span>
              <i className="fa-solid fa-user-tie text-[#38B6FF]/80"></i>
            </div>
            <div className="text-base sm:text-lg font-bold text-white group-hover:text-[#38B6FF] transition-colors">
              {siteConfig.proprietor.name}
            </div>
          </div>
          <span className="text-[11px] text-[#93C5FD]/60 font-mono mt-3 block">
            Executive Leadership
          </span>
        </div>

        {/* Card 2: Phone */}
        <div className="bg-[#0B192C]/70 backdrop-blur-md border border-white/10 hover:border-[#38B6FF]/40 rounded-2xl p-5 transition-all duration-300 group shadow-lg flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-[0.2em] text-[#93C5FD]/70 mb-2">
              <span>Direct Telephone</span>
              <i className="fa-solid fa-phone text-[#38B6FF]/80"></i>
            </div>
            <a 
              href={`tel:${siteConfig.contact.rawPhone}`} 
              className="text-base sm:text-lg font-bold text-white group-hover:text-[#38B6FF] transition-colors block"
            >
              {siteConfig.contact.phone}
            </a>
          </div>
          <span className="text-[11px] text-[#93C5FD]/60 font-mono mt-3 block">
            Instant Voice Inquiries
          </span>
        </div>

        {/* Card 3: WhatsApp */}
        <div className="bg-[#0B192C]/70 backdrop-blur-md border border-white/10 hover:border-[#38B6FF]/40 rounded-2xl p-5 transition-all duration-300 group shadow-lg flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-[0.2em] text-[#93C5FD]/70 mb-2">
              <span>WhatsApp Dispatch</span>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#38B6FF] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#38B6FF]"></span>
              </span>
            </div>
            <a 
              href={whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-base sm:text-lg font-bold text-[#38B6FF] group-hover:text-white transition-colors flex items-center gap-2"
            >
              <i className="fa-brands fa-whatsapp text-lg"></i>
              <span>{siteConfig.contact.phone}</span>
            </a>
          </div>
          <span className="text-[11px] text-[#93C5FD]/60 font-mono mt-3 block">
            Direct File Dispatch &amp; Orders
          </span>
        </div>

        {/* Card 4: Location */}
        <div className="bg-[#0B192C]/70 backdrop-blur-md border border-white/10 hover:border-[#38B6FF]/40 rounded-2xl p-5 transition-all duration-300 group shadow-lg flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-[0.2em] text-[#93C5FD]/70 mb-2">
              <span>Registry Location</span>
              <i className="fa-solid fa-location-dot text-[#38B6FF]/80"></i>
            </div>
            <div className="text-xs sm:text-sm font-semibold text-white/90 leading-snug">
              Beside Canteen Gate
            </div>
          </div>
          <span className="text-[11px] text-[#93C5FD]/60 font-mono mt-3 block truncate">
            School &amp; College Main Road
          </span>
        </div>

      </div>
    </section>
  );
}
