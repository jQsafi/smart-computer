import React from 'react';
import { siteConfig } from '../data/siteConfig';

export default function ExecutiveSummary() {
  const whatsappUrl = `${siteConfig.contact.whatsappLink}?text=${encodeURIComponent(siteConfig.contact.defaultWhatsAppMsg)}`;

  return (
    <section className="space-y-6">
      
      <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-brand-teal">
        <span className="inline-block w-2 h-2 rounded-full bg-brand-teal"></span>
        <span>Executive Summary</span>
      </div>

      <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-forest tracking-tight leading-snug">
        Smart Solutions for Technology, Education &amp; Stationery
      </h2>

      <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
        <strong className="font-bold text-brand-forest">{siteConfig.businessName}</strong> is a modern digital service hub serving students, educators, and guardians in the school and college vicinity. Under the leadership of proprietor <strong className="text-brand-forest">{siteConfig.proprietor.name}</strong>, the center provides reliable online job and admission applications, instant 2-minute passport photos, high-speed printing &amp; photocopying, a professional computer training academy, and complete academic stationery under one roof.
      </p>

      {/* Direct Contact Strip */}
      <div className="pt-2 flex flex-wrap items-center gap-x-8 gap-y-4 text-sm font-semibold border-t border-brand-border pt-6">
        <div>
          <span className="text-brand-muted text-xs block uppercase font-mono tracking-wider">Proprietor</span>
          <span className="text-brand-forest text-base">{siteConfig.proprietor.name}</span>
        </div>

        <div>
          <span className="text-brand-muted text-xs block uppercase font-mono tracking-wider">Mobile &amp; Phone</span>
          <a href={`tel:${siteConfig.contact.rawPhone}`} className="text-brand-forest hover:text-brand-teal transition text-base">
            {siteConfig.contact.phone}
          </a>
        </div>

        <div>
          <span className="text-brand-muted text-xs block uppercase font-mono tracking-wider">WhatsApp</span>
          <a 
            href={whatsappUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-brand-teal hover:underline text-base flex items-center gap-1.5"
          >
            <i className="fa-brands fa-whatsapp text-sky-500"></i> {siteConfig.contact.phone}
          </a>
        </div>

        <div>
          <span className="text-brand-muted text-xs block uppercase font-mono tracking-wider">Location</span>
          <span className="text-slate-700 text-base">{siteConfig.contact.location}</span>
        </div>
      </div>

    </section>
  );
}
