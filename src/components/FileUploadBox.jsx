import React from 'react';
import { siteConfig } from '../data/siteConfig';

export default function FileUploadBox() {
  const uploadMsg = "Hello Shafayat! I am sending files for printing.";
  const uploadUrl = `${siteConfig.contact.whatsappLink}?text=${encodeURIComponent(uploadMsg)}`;

  return (
    <section className="bg-brand-bgLight border border-brand-border rounded-2xl p-8 sm:p-10 space-y-4 shadow-sm">
      <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-brand-teal">
        <i className="fa-brands fa-whatsapp text-base text-sky-500"></i>
        <span>Direct File Transfer</span>
      </div>
      
      <h3 className="text-2xl font-bold text-brand-forest">
        Skip the Queue — Send Files Directly via WhatsApp
      </h3>
      
      <p className="text-slate-600 text-sm leading-relaxed max-w-2xl">
        Send your assignments, documents, or photos directly from home or classroom to our WhatsApp number. Simply drop by to collect your printed copies ready on arrival.
      </p>

      <div className="pt-2">
        <a
          href={uploadUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-forest text-white text-xs font-bold hover:bg-brand-teal transition shadow-sm"
        >
          <i className="fa-brands fa-whatsapp text-base text-sky-400"></i>
          <span>Send File on WhatsApp ({siteConfig.contact.phone})</span>
        </a>
      </div>
    </section>
  );
}
