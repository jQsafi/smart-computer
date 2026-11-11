import React from 'react';
import { siteConfig } from '../data/siteConfig';

export default function FloatingActions() {
  const whatsappUrl = `${siteConfig.contact.whatsappLink}?text=${encodeURIComponent(siteConfig.contact.defaultWhatsAppMsg)}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Quick Phone Call Button */}
      <a
        href={`tel:${siteConfig.contact.rawPhone}`}
        className="w-12 h-12 rounded-full bg-[#0B192C]/90 backdrop-blur-md hover:bg-[#1D4ED8] text-white shadow-xl flex items-center justify-center text-sm border border-white/20 hover:border-[#38B6FF] transition-all hover:scale-110"
        title={`Direct Call: ${siteConfig.contact.phone}`}
        aria-label="Direct Telephone Call"
      >
        <i className="fa-solid fa-phone text-[#38B6FF]"></i>
      </a>

      {/* Floating Animated WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative group flex items-center gap-2.5 bg-gradient-to-r from-[#1D4ED8] to-[#2563EB] hover:from-[#2563EB] hover:to-[#38B6FF] text-white px-4 py-3 rounded-full shadow-[0_0_25px_rgba(56,182,255,0.4)] border border-[#38B6FF]/50 transition-all hover:scale-105"
        title="Send Document / Inquiry on WhatsApp"
        aria-label="WhatsApp Dispatch Desk"
      >
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-[#38B6FF]"></span>
        </span>
        <i className="fa-brands fa-whatsapp text-xl text-white"></i>
        <span className="font-semibold text-xs tracking-wider uppercase hidden sm:inline font-mono">
          {siteConfig.contact.phone}
        </span>
      </a>
    </div>
  );
}
