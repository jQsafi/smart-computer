import React from 'react';
import { siteConfig } from '../data/siteConfig';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const whatsappUrl = `${siteConfig.contact.whatsappLink}?text=${encodeURIComponent(siteConfig.contact.defaultWhatsAppMsg)}`;

  return (
    <footer className="border-t border-brand-border py-8 bg-white text-xs text-brand-muted">
      <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          &copy; {currentYear} {siteConfig.businessName}. {siteConfig.proprietor.name}. All rights reserved.
        </div>
        <div className="flex items-center gap-6">
          <a href={`tel:${siteConfig.contact.rawPhone}`} className="hover:text-brand-forest transition">
            Call: {siteConfig.contact.phone}
          </a>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-brand-teal transition">
            WhatsApp: {siteConfig.contact.phone}
          </a>
        </div>
      </div>
    </footer>
  );
}
