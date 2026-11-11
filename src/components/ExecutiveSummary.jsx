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
        প্রযুক্তি, শিক্ষা ও স্টেশনারির স্মার্ট সমাধান
      </h2>

      <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-bn">
        <strong className="font-bold text-brand-forest">{siteConfig.businessName}</strong> হলো স্কুল ও কলেজ প্রাঙ্গণে শিক্ষার্থী, শিক্ষক ও অভিভাবকদের জন্য একটি আধুনিক ডিজিটাল সেবা কেন্দ্র। স্বত্বাধিকারী <strong className="text-brand-forest">{siteConfig.proprietor.nameBn}</strong>-এর পরিচালনায় প্রতিষ্ঠানটি সকল প্রকার অনলাইন চাকরির আবেদন, ২ মিনিটে ইনস্ট্যান্ট পাসপোর্ট ছবি, হাই-স্পিড প্রিন্ট ও ফটোকপি, কম্পিউটার প্রশিক্ষণ একাডেমি এবং স্কুল-কলেজ স্টেশনারি সামগ্রী এক ছাদের নিচে সরবরাহ করে।
      </p>

      {/* Direct Contact Strip */}
      <div className="pt-2 flex flex-wrap items-center gap-x-8 gap-y-4 text-sm font-semibold border-t border-brand-border pt-6">
        <div>
          <span className="text-brand-muted text-xs block uppercase font-mono tracking-wider">Proprietor</span>
          <span className="text-brand-forest text-base">{siteConfig.proprietor.name} ({siteConfig.proprietor.nameBn})</span>
        </div>

        <div>
          <span className="text-brand-muted text-xs block uppercase font-mono tracking-wider">Mobile & Phone</span>
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
            <i className="fa-brands fa-whatsapp text-emerald-600"></i> {siteConfig.contact.phone}
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
