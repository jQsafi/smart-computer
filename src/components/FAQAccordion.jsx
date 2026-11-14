import React, { useState } from 'react';
import { siteConfig } from '../data/siteConfig';

const faqs = [
  {
    id: 1,
    question: "How do I skip the queue and print assignments or thesis papers instantly?",
    answer: "Simply dispatch your PDF or document file directly to our WhatsApp hotline (01711-652361). State your required page range, single or double-sided preference, and whether you require spiral or tape binding. Your document will be printed, bound, and waiting for instant collection at our desk beside the Canteen Gate."
  },
  {
    id: 2,
    question: "What documents do I need for BCS, Primary Teacher & Government Job online applications?",
    answer: "Please bring or WhatsApp: (1) Recent passport portrait (or take a fresh 2-minute photo at our studio), (2) Signature sample on plain white paper, (3) NID or Birth Certificate number, (4) Academic transcripts (SSC/HSC/Graduation roll, registration & CGPA), and (5) An active mobile phone for SMS verification. We review all entries line-by-line to guarantee 100% submission accuracy."
  },
  {
    id: 3,
    question: "How fast is the photo studio, and can you digitally adjust formal attire?",
    answer: "Passport and stamp-size portraits are printed in just 2 minutes on high-gloss photo paper. We also digitally adjust casual clothing into formal blazers, suits, or ties and enhance background contrast to meet strict official passport and admission standards."
  },
  {
    id: 4,
    question: "What courses are taught at the Computer Training Academy, and what are the batch sizes?",
    answer: "We offer certificate courses in Computer Office Applications (MS Word, Excel, PowerPoint), English & Bengali Touch Typing, and Graphic Design fundamentals. Every student is guaranteed a 1-to-1 dedicated workstation in our air-conditioned computer laboratory. Morning, afternoon, and evening batches are available to accommodate school and college schedules."
  },
  {
    id: 5,
    question: "Can I reserve stationery items or Tk 99 Corner gadgets online before visiting?",
    answer: "Yes. Simply tap 'Book on WhatsApp' on any stationery product or Tk 99 gadget card. We will verify stock, set it aside under your name, and have it waiting for your collection at our storefront beside the School & College Canteen Gate."
  }
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex((prev) => (prev === index ? -1 : index));
  };

  return (
    <section id="faq" className="space-y-6 scroll-mt-24">
      {/* Top Monograph Section Marker */}
      <div className="border-b border-white/10 pb-4">
        <div className="flex items-center gap-2.5 text-xs font-mono uppercase tracking-[0.25em] text-[#38B6FF] mb-1.5">
          <span className="inline-block w-2 h-2 rounded-full bg-[#38B6FF] shadow-[0_0_10px_#38B6FF]"></span>
          <span className="font-semibold">SECTION VI · PROCEDURAL CODEX &amp; INQUIRIES</span>
        </div>
        <h3 className="brand-foil font-display text-2xl sm:text-3xl font-medium tracking-tight uppercase">
          Frequently Answered Inquiries
        </h3>
        <p className="font-serif-i italic text-xs sm:text-sm text-[#E0F2FE]/70 mt-1">
          Essential guidelines regarding queue priority, biometric photo standards, job portals &amp; course admissions
        </p>
      </div>

      <div className="space-y-3.5">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;

          return (
            <div
              key={faq.id}
              className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                isOpen
                  ? "bg-[#0B192C]/90 border-[#38B6FF]/40 shadow-xl"
                  : "bg-[#0B192C]/50 border-white/10 hover:border-white/25"
              }`}
            >
              <button
                type="button"
                onClick={() => toggle(idx)}
                className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
              >
                <div className="flex items-center gap-3.5">
                  <span className="font-mono text-xs text-[#38B6FF] uppercase tracking-wider font-semibold">
                    0{faq.id}
                  </span>
                  <span className="text-sm sm:text-base font-semibold text-white/95">
                    {faq.question}
                  </span>
                </div>
                <div
                  className={`w-7 h-7 rounded-full border border-white/10 flex items-center justify-center text-xs text-[#38B6FF] transition-transform duration-300 shrink-0 ${
                    isOpen ? "rotate-180 bg-[#1D4ED8]/30 border-[#38B6FF]/40 text-white" : ""
                  }`}
                >
                  <i className="fa-solid fa-chevron-down"></i>
                </div>
              </button>

              {isOpen && (
                <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-[#E0F2FE]/85 font-serif-i italic leading-relaxed border-t border-white/5">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Direct Contact Banner */}
      <div className="p-4 rounded-xl bg-gradient-to-r from-[#1D4ED8]/20 via-[#0B192C] to-[#1D4ED8]/20 border border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
        <span className="text-slate-300">
          Have an unlisted question regarding document verification or admission quotas?
        </span>
        <a
          href={`${siteConfig.contact.whatsappLink}?text=${encodeURIComponent("Hello Shafayat! I have a question about services at Smart Computer.")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#38B6FF] hover:text-white transition flex items-center gap-1.5 font-semibold"
        >
          <span>Ask Proprietor Shafayat Directly on WhatsApp</span>
          <span>&rarr;</span>
        </a>
      </div>
    </section>
  );
}
