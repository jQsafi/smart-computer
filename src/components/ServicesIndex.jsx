import React, { useState } from 'react';
import { servicesData } from '../data/servicesData';
import { siteConfig } from '../data/siteConfig';

export default function ServicesIndex() {
  const [activeDepartment, setActiveDepartment] = useState('ALL');

  const filteredServices = activeDepartment === 'ALL'
    ? servicesData
    : servicesData.filter(s => s.category === activeDepartment);

  return (
    <section id="services" className="space-y-10 pt-4">
      
      <div className="border-b border-brand-forest pb-3 flex flex-wrap items-baseline justify-between gap-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-black text-brand-forest tracking-tight uppercase font-mono">
            Services Index
          </h2>
          <span className="text-xs font-mono text-brand-muted uppercase tracking-wider">
            [ Five Core Academic &amp; Citizen Departments ]
          </span>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 text-xs font-mono">
          <button
            onClick={() => setActiveDepartment('ALL')}
            className={`px-3 py-1 rounded-full transition-all ${
              activeDepartment === 'ALL'
                ? 'bg-brand-forest text-white font-bold'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            All [05]
          </button>
          <button
            onClick={() => setActiveDepartment('CITIZEN_SERVICES')}
            className={`px-3 py-1 rounded-full transition-all ${
              activeDepartment === 'CITIZEN_SERVICES'
                ? 'bg-brand-forest text-white font-bold'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            Citizen [01]
          </button>
          <button
            onClick={() => setActiveDepartment('REPRODUCTION')}
            className={`px-3 py-1 rounded-full transition-all ${
              activeDepartment === 'REPRODUCTION'
                ? 'bg-brand-forest text-white font-bold'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            Print &amp; Copy [03]
          </button>
          <button
            onClick={() => setActiveDepartment('ACADEMY')}
            className={`px-3 py-1 rounded-full transition-all ${
              activeDepartment === 'ACADEMY'
                ? 'bg-brand-forest text-white font-bold'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            Training [04]
          </button>
        </div>
      </div>

      {/* Services List */}
      <div className="divide-y divide-brand-border">
        {filteredServices.map((service) => {
          const serviceWhatsAppUrl = `${siteConfig.contact.whatsappLink}?text=${encodeURIComponent(service.whatsappMsg)}`;

          return (
            <article key={service.id} className="py-8 group hover:bg-slate-50/50 transition-colors rounded-xl px-3">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                
                {/* Code & Category Tag */}
                <div className="md:col-span-2">
                  <span className="text-2xl font-black font-mono text-brand-forest block">
                    [{service.code}]
                  </span>
                  <span className="text-[10px] uppercase font-mono tracking-wider text-brand-muted block mt-1">
                    {service.category}
                  </span>
                  {service.badge && (
                    <span className="inline-block mt-2 px-2 py-0.5 text-[10px] font-bold font-bn bg-emerald-50 text-emerald-700 border border-emerald-200 rounded">
                      {service.badge}
                    </span>
                  )}
                </div>

                {/* Details */}
                <div className="md:col-span-7 space-y-3">
                  <h3 className="text-lg sm:text-xl font-bold text-brand-forest font-bn">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-600 font-bn leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Detailed Items */}
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700 font-bn pt-2">
                    {service.items.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <i className="fa-solid fa-check text-brand-teal text-[10px]"></i>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Link */}
                <div className="md:col-span-3 md:text-right pt-2 md:pt-0">
                  <a
                    href={serviceWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="abc-link text-xs group-hover:text-brand-teal transition"
                  >
                    <span>হোয়াটসঅ্যাপে যোগাযোগ</span>
                    <span>&rarr;</span>
                  </a>
                </div>

              </div>
            </article>
          );
        })}
      </div>

    </section>
  );
}
