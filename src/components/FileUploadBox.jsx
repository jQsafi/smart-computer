import React from 'react';
import { siteConfig } from '../data/siteConfig';

export default function FileUploadBox() {
  const uploadMsg = "হ্যালো শাফায়েত ভাই! আমি ফাইল পাঠাচ্ছি প্রিন্ট করার জন্য।";
  const uploadUrl = `${siteConfig.contact.whatsappLink}?text=${encodeURIComponent(uploadMsg)}`;

  return (
    <section className="bg-brand-bgLight border border-brand-border rounded-2xl p-8 sm:p-10 space-y-4 shadow-sm">
      <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-brand-teal">
        <i className="fa-brands fa-whatsapp text-base text-[#25D366]"></i>
        <span>Direct File Transfer</span>
      </div>
      
      <h3 className="text-2xl font-bold text-brand-forest font-bn">
        লাইনে না দাঁড়িয়ে সরাসরি হোয়াটসঅ্যাপে ফাইল পাঠান
      </h3>
      
      <p className="text-slate-600 text-sm font-bn leading-relaxed max-w-2xl">
        বাসা বা ক্লাসরুম থেকেই আপনার অ্যাসাইনমেন্ট, ছবি বা চাকরির যেকোনো ডকুমেন্ট আমাদের নম্বরে পাঠিয়ে দিন। দোকানে এসে সরাসরি প্রস্তুত প্রিন্ট কপি সংগ্রহ করুন।
      </p>

      <div className="pt-2">
        <a
          href={uploadUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-forest text-white text-xs font-bold hover:bg-brand-teal transition shadow-sm"
        >
          <i className="fa-brands fa-whatsapp text-base text-[#25D366]"></i>
          <span>Send File on WhatsApp ({siteConfig.contact.phone})</span>
        </a>
      </div>
    </section>
  );
}
