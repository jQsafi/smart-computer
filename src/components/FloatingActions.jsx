import React from 'react';
import { siteConfig } from '../data/siteConfig';

export default function FloatingActions() {
  const whatsappUrl = `${siteConfig.contact.whatsappLink}?text=${encodeURIComponent(siteConfig.contact.defaultWhatsAppMsg)}`;

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-2.5">
      {/* Quick Phone Call Button */}
      <a
        href={`tel:${siteConfig.contact.rawPhone}`}
        className="w-11 h-11 rounded-full bg-brand-forest hover:bg-brand-teal text-white shadow-xl flex items-center justify-center text-sm border border-white/20 transition-transform hover:scale-105"
        title={`Call: ${siteConfig.contact.phone}`}
        aria-label="Direct Call"
      >
        <i className="fa-solid fa-phone text-brand-sky"></i>
      </a>

      {/* Floating Animated WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative group flex items-center gap-2 bg-brand-blue text-white px-3.5 py-2.5 rounded-full shadow-2xl hover:bg-brand-blueLight transition-transform hover:scale-105"
        title="Send message on WhatsApp"
        aria-label="WhatsApp Chat"
      >
        <span className="absolute -top-1 -right-1 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-400"></span>
        </span>
        <i className="fa-brands fa-whatsapp text-xl"></i>
        <span className="font-bold text-xs hidden sm:inline">{siteConfig.contact.phone}</span>
      </a>
    </div>
  );
}
