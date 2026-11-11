import React, { useState } from 'react';
import { servicesData } from '../data/servicesData';
import { siteConfig } from '../data/siteConfig';

const romanNumerals = {
  "01": "I",
  "02": "II",
  "03": "III",
  "04": "IV",
  "05": "V"
};

export default function ServicesIndex() {
  const [activeDepartment, setActiveDepartment] = useState('ALL');

  const filteredServices = activeDepartment === 'ALL'
    ? servicesData
    : servicesData.filter(s => s.category === activeDepartment);

  return (
    <section id="services" className="space-y-8 scroll-mt-24">
      
      {/* Top Section Header & Monograph Marker */}
      <div className="flex flex-wrap items-baseline justify-between gap-4 border-b border-white/10 pb-5">
        <div>
          <div className="flex items-center gap-2.5 text-xs font-mono uppercase tracking-[0.25em] text-[#38B6FF] mb-1.5">
            <span className="inline-block w-2 h-2 rounded-full bg-[#38B6FF] shadow-[0_0_10px_#38B6FF]"></span>
            <span className="font-semibold">SECTION III · DEPARTMENTAL COMPENDIUM</span>
          </div>
          <h2 className="brand-foil font-display text-2xl sm:text-4xl font-medium tracking-tight uppercase">
            Five Core Service Departments
          </h2>
          <p className="font-serif-i italic text-xs sm:text-sm text-[#E0F2FE]/70 mt-1">
            Authoritative citizen processing, digital photography, reproduction lab, training academy &amp; academic stationery
          </p>
        </div>

        {/* Filter Luxury Pills */}
        <div className="flex flex-wrap gap-2 text-xs font-mono">
          <button
            onClick={() => setActiveDepartment('ALL')}
            className={`px-3.5 py-1.5 rounded-full border text-xs tracking-wider uppercase transition-all duration-300 ${
              activeDepartment === 'ALL'
                ? 'bg-[#1D4ED8] text-white border-[#38B6FF] shadow-[0_0_15px_rgba(56,182,255,0.35)] font-semibold'
                : 'bg-white/5 border-white/10 text-slate-300 hover:border-white/25 hover:text-white hover:bg-white/10'
            }`}
          >
            All [05]
          </button>
          <button
            onClick={() => setActiveDepartment('CITIZEN_SERVICES')}
            className={`px-3.5 py-1.5 rounded-full border text-xs tracking-wider uppercase transition-all duration-300 ${
              activeDepartment === 'CITIZEN_SERVICES'
                ? 'bg-[#1D4ED8] text-white border-[#38B6FF] shadow-[0_0_15px_rgba(56,182,255,0.35)] font-semibold'
                : 'bg-white/5 border-white/10 text-slate-300 hover:border-white/25 hover:text-white hover:bg-white/10'
            }`}
          >
            Dept I · Citizen
          </button>
          <button
            onClick={() => setActiveDepartment('CREATIVE_STUDIO')}
            className={`px-3.5 py-1.5 rounded-full border text-xs tracking-wider uppercase transition-all duration-300 ${
              activeDepartment === 'CREATIVE_STUDIO'
                ? 'bg-[#1D4ED8] text-white border-[#38B6FF] shadow-[0_0_15px_rgba(56,182,255,0.35)] font-semibold'
                : 'bg-white/5 border-white/10 text-slate-300 hover:border-white/25 hover:text-white hover:bg-white/10'
            }`}
          >
            Dept II · Photo Lab
          </button>
          <button
            onClick={() => setActiveDepartment('REPRODUCTION')}
            className={`px-3.5 py-1.5 rounded-full border text-xs tracking-wider uppercase transition-all duration-300 ${
              activeDepartment === 'REPRODUCTION'
                ? 'bg-[#1D4ED8] text-white border-[#38B6FF] shadow-[0_0_15px_rgba(56,182,255,0.35)] font-semibold'
                : 'bg-white/5 border-white/10 text-slate-300 hover:border-white/25 hover:text-white hover:bg-white/10'
            }`}
          >
            Dept III · Print &amp; Copy
          </button>
          <button
            onClick={() => setActiveDepartment('ACADEMY')}
            className={`px-3.5 py-1.5 rounded-full border text-xs tracking-wider uppercase transition-all duration-300 ${
              activeDepartment === 'ACADEMY'
                ? 'bg-[#1D4ED8] text-white border-[#38B6FF] shadow-[0_0_15px_rgba(56,182,255,0.35)] font-semibold'
                : 'bg-white/5 border-white/10 text-slate-300 hover:border-white/25 hover:text-white hover:bg-white/10'
            }`}
          >
            Dept IV · Academy
          </button>
          <button
            onClick={() => setActiveDepartment('RETAIL')}
            className={`px-3.5 py-1.5 rounded-full border text-xs tracking-wider uppercase transition-all duration-300 ${
              activeDepartment === 'RETAIL'
                ? 'bg-[#1D4ED8] text-white border-[#38B6FF] shadow-[0_0_15px_rgba(56,182,255,0.35)] font-semibold'
                : 'bg-white/5 border-white/10 text-slate-300 hover:border-white/25 hover:text-white hover:bg-white/10'
            }`}
          >
            Dept V · Stationery
          </button>
        </div>
      </div>

      {/* Luxury Editorial Catalogue Cards */}
      <div className="space-y-6">
        {filteredServices.map((service) => {
          const serviceWhatsAppUrl = `${siteConfig.contact.whatsappLink}?text=${encodeURIComponent(service.whatsappMsg)}`;
          const roman = romanNumerals[service.code] || service.code;

          return (
            <article 
              key={service.id} 
              className="bg-[#0B192C]/70 backdrop-blur-md border border-white/10 hover:border-[#38B6FF]/40 rounded-2xl p-6 sm:p-8 transition-all duration-300 group shadow-xl"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
                
                {/* Column 1: Roman Marker & Brand-Foil Code */}
                <div className="lg:col-span-3 space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[10px] text-[#38B6FF] uppercase tracking-[0.25em] font-semibold">
                      DEPT {roman}
                    </span>
                    <span className="h-px flex-1 bg-gradient-to-r from-[#38B6FF]/30 to-transparent" />
                  </div>
                  
                  <div className="flex items-baseline gap-2">
                    <span className="brand-foil font-mono text-3xl sm:text-4xl font-black tracking-tight select-none">
                      [{service.code}]
                    </span>
                  </div>

                  <span className="text-[10px] uppercase font-mono tracking-wider text-slate-400 block">
                    {service.category.replace('_', ' ')}
                  </span>

                  {service.badge && (
                    <span className="inline-block px-2.5 py-1 text-[10px] font-mono font-semibold border border-[#38B6FF]/30 bg-[#1D4ED8]/20 text-[#38B6FF] rounded-full uppercase tracking-wider">
                      {service.badge}
                    </span>
                  )}
                </div>

                {/* Column 2: Details & Checklist */}
                <div className="lg:col-span-6 space-y-3.5">
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-[#38B6FF] transition-colors leading-snug">
                    {service.title}
                  </h3>

                  <p className="font-serif-i italic text-sm sm:text-base text-[#E0F2FE]/85 leading-relaxed font-light">
                    {service.description}
                  </p>
                  
                  {/* Detailed Items with Sky-Blue Checkmarks */}
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                    {service.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-200">
                        <i className="fa-solid fa-check text-[#38B6FF] text-xs mt-0.5 shrink-0"></i>
                        <span className="leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Column 3: Frosted Pill Action Link */}
                <div className="lg:col-span-3 lg:text-right pt-3 lg:pt-0 flex flex-col lg:items-end justify-between h-full">
                  <a
                    href={serviceWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-full border border-brand-sky/40 bg-[#0B192C]/80 hover:bg-[#1D4ED8] hover:border-brand-sky text-sky-200 hover:text-white text-xs tracking-wider uppercase transition-all duration-300 shadow-lg backdrop-blur-sm inline-flex items-center gap-2 group-hover:scale-105"
                  >
                    <i className="fa-brands fa-whatsapp text-sm text-[#38B6FF] group-hover:text-white transition-colors"></i>
                    <span>Contact Desk</span>
                    <span>&rarr;</span>
                  </a>

                  <span className="hidden lg:block text-[10px] font-mono text-[#93C5FD]/50 uppercase tracking-widest mt-6">
                    Direct Inquiry
                  </span>
                </div>

              </div>
            </article>
          );
        })}
      </div>

    </section>
  );
}
