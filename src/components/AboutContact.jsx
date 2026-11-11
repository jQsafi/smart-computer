import React from 'react';
import { siteConfig } from '../data/siteConfig';

export default function AboutContact() {
  const whatsappUrl = `${siteConfig.contact.whatsappLink}?text=${encodeURIComponent(siteConfig.contact.defaultWhatsAppMsg)}`;

  return (
    <section id="about" className="pt-6 border-t border-brand-border scroll-mt-24">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 text-sm">
        
        {/* Identity & Emblem */}
        <div className="md:col-span-4 space-y-3">
          <span className="text-xs font-mono uppercase tracking-wider text-brand-muted block">Identity</span>
          <div className="flex items-center gap-3">
            <img 
              src="assets/logo.png" 
              alt={siteConfig.businessName} 
              className="w-12 h-12 object-contain drop-shadow-sm flex-shrink-0"
            />
            <div>
              <div className="font-extrabold text-brand-forest text-base sm:text-lg leading-tight">
                {siteConfig.businessName}
              </div>
              <p className="text-xs text-slate-500">
                {siteConfig.subTagline}
              </p>
            </div>
          </div>
          <div className="pt-2">
            <span className="text-xs text-brand-muted block uppercase font-mono tracking-wider">Proprietor</span>
            <div className="font-bold text-slate-800">
              {siteConfig.proprietor.name}
            </div>
            <span className="text-[11px] text-brand-teal font-mono block mt-0.5 font-medium">
              {siteConfig.tagline}
            </span>
          </div>
        </div>

        {/* Direct Contact */}
        <div className="md:col-span-4 space-y-3">
          <span className="text-xs font-mono uppercase tracking-wider text-brand-muted block">Direct Contact</span>
          <div className="space-y-2 font-medium">
            <div>
              <span className="text-brand-muted text-xs block">Mobile:</span>
              <a href={`tel:${siteConfig.contact.rawPhone}`} className="text-brand-forest font-bold hover:text-brand-teal text-base">
                {siteConfig.contact.phone}
              </a>
            </div>
            <div>
              <span className="text-brand-muted text-xs block">WhatsApp:</span>
              <a 
                href={whatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-brand-teal font-bold hover:underline text-base flex items-center gap-1.5"
              >
                <i className="fa-brands fa-whatsapp text-sky-500"></i> {siteConfig.contact.phone}
              </a>
            </div>
          </div>
        </div>

        {/* Location & Hours */}
        <div className="md:col-span-4 space-y-3">
          <span className="text-xs font-mono uppercase tracking-wider text-brand-muted block">Location &amp; Hours</span>
          <p className="text-slate-700 text-xs leading-relaxed">
            {siteConfig.contact.location}
          </p>
          <div className="text-xs text-brand-muted pt-1">
            <span className="block text-slate-800 font-semibold">Saturday — Thursday:</span>
            <span>{siteConfig.hours.satThu}</span>
            <span className="block text-slate-800 font-semibold mt-1">Friday:</span>
            <span>{siteConfig.hours.fri}</span>
          </div>
        </div>

      </div>
    </section>
  );
}
