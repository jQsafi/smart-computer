import React from 'react';
import { siteConfig } from '../data/siteConfig';

export default function FileUploadBox() {
  const uploadMsg = "Hello Shafayat! I am sending files for printing and photocopy.";
  const uploadUrl = `${siteConfig.contact.whatsappLink}?text=${encodeURIComponent(uploadMsg)}`;

  return (
    <section className="relative overflow-hidden rounded-3xl bg-[#0B192C]/70 backdrop-blur-xl border border-white/10 hover:border-[#38B6FF]/40 p-8 sm:p-12 transition-all duration-500 shadow-2xl group">
      
      {/* Background Radial Glow & Microdot Pattern */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-[#132D54]/30 via-transparent to-[#1D4ED8]/15 pointer-events-none" 
        aria-hidden="true" 
      />
      <div 
        className="absolute -right-12 -bottom-12 w-72 h-72 bg-[#38B6FF]/10 rounded-full blur-3xl pointer-events-none" 
        aria-hidden="true" 
      />
      <div 
        className="absolute inset-0 opacity-[0.05] pointer-events-none" 
        style={{ backgroundImage: "radial-gradient(#38B6FF 1px, transparent 1px)", backgroundSize: "24px 24px" }} 
        aria-hidden="true" 
      />

      <div className="relative z-10 space-y-6 max-w-3xl">
        
        {/* Monograph Top Marker */}
        <div className="flex items-center gap-2.5 text-xs font-mono uppercase tracking-[0.25em] text-[#38B6FF]">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#38B6FF] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#38B6FF]"></span>
          </span>
          <span className="font-semibold">RAPID DISPATCH DESK · DIRECT TRANSMISSION</span>
        </div>

        {/* Proclamation Headline */}
        <div className="space-y-2">
          <h3 className="brand-foil font-display text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight uppercase leading-[1.15]">
            Skip the Queue — Dispatch Documents Directly via WhatsApp
          </h3>
          <div className="h-px w-24 bg-gradient-to-r from-[#38B6FF] to-transparent" />
        </div>

        {/* Editorial Body */}
        <p className="font-serif-i italic text-sm sm:text-lg text-[#E0F2FE]/85 leading-relaxed font-light">
          Transmit academic assignments, thesis files, NID scans, or photo negatives directly from your home, hostel, or classroom. Your high-speed laser copies, thesis bindings, or glossy passport portraits will be prepared and waiting for instant collection at the School &amp; College Canteen Gate.
        </p>

        {/* Glowing Luxury WhatsApp Pill CTA */}
        <div className="pt-2">
          <a
            href={uploadUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full border border-[#38B6FF]/60 bg-gradient-to-r from-[#1D4ED8] via-[#2563EB] to-[#1D4ED8] hover:from-[#2563EB] hover:to-[#38B6FF] text-white font-semibold text-xs sm:text-sm tracking-[0.14em] uppercase transition-all duration-300 shadow-[0_0_25px_rgba(56,182,255,0.4)] hover:shadow-[0_0_35px_rgba(56,182,255,0.65)] hover:scale-[1.02]"
          >
            <i className="fa-brands fa-whatsapp text-lg sm:text-xl text-white"></i>
            <span>Send Files on WhatsApp · {siteConfig.contact.phone}</span>
            <span className="text-white/80">&rarr;</span>
          </a>
        </div>

        {/* 3 Editorial Dispatch Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-white/10 text-[11px] font-mono text-[#93C5FD]/80">
          <div className="flex items-center gap-2">
            <i className="fa-solid fa-bolt text-[#38B6FF]"></i>
            <span>Queue Priority Dispatch</span>
          </div>
          <div className="flex items-center gap-2">
            <i className="fa-solid fa-shield-halved text-[#38B6FF]"></i>
            <span>Confidential Document Care</span>
          </div>
          <div className="flex items-center gap-2">
            <i className="fa-solid fa-store text-[#38B6FF]"></i>
            <span>Ready at Canteen Gate</span>
          </div>
        </div>

      </div>
    </section>
  );
}
