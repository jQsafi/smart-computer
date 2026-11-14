import React, { useState } from 'react';
import { productsData } from '../data/productsData';
import { siteConfig } from '../data/siteConfig';

export default function ProductCatalog() {
  const [filter, setFilter] = useState('ALL');

  const filteredProducts = filter === 'ALL'
    ? productsData
    : filter === 'TK99'
      ? productsData.filter(p => p.price === 99)
      : productsData.filter(p => p.category === filter);

  return (
    <section id="stationery-catalog" className="space-y-6 scroll-mt-24">
      {/* Top Monograph Section Marker */}
      <div className="flex flex-wrap items-baseline justify-between gap-4 border-b border-white/10 pb-4">
        <div>
          <div className="flex items-center gap-2.5 text-xs font-mono uppercase tracking-[0.25em] text-[#38B6FF] mb-1.5">
            <span className="inline-block w-2 h-2 rounded-full bg-[#38B6FF] shadow-[0_0_10px_#38B6FF]"></span>
            <span className="font-semibold">DEPARTMENT V COMPANION · ACADEMIC SUPPLY &amp; VALUE CORNER</span>
          </div>
          <h3 className="brand-foil font-display text-2xl sm:text-3xl font-medium tracking-tight uppercase">
            Stationery Ledger &amp; Tk 99 Value Pavilion
          </h3>
          <p className="font-serif-i italic text-xs sm:text-sm text-[#E0F2FE]/70 mt-1">
            Exam essentials, Casio calculators, high-grade 80 GSM paper &amp; smartphone gadgets beside Canteen Gate
          </p>
        </div>

        {/* Filter Luxury Pills */}
        <div className="flex flex-wrap gap-2 text-xs font-mono">
          {[
            { id: 'ALL', label: 'All Items [10]' },
            { id: 'TK99', label: 'Tk 99 Corner' },
            { id: 'gadget', label: 'Tech Gadgets' },
            { id: 'stationery', label: 'Pens & Paper' },
            { id: 'geometry', label: 'Geometry' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setFilter(item.id)}
              className={`px-3.5 py-1.5 rounded-full border text-xs tracking-wider uppercase transition-all duration-300 ${
                filter === item.id
                  ? 'bg-[#1D4ED8] text-white border-[#38B6FF] shadow-[0_0_15px_rgba(56,182,255,0.35)] font-semibold'
                  : 'bg-white/5 border-white/10 text-slate-300 hover:border-white/25 hover:text-white hover:bg-white/10'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredProducts.map((prod) => {
          const orderMsg = `Hello Shafayat! I would like to reserve/purchase "${prod.title}" (Tk ${prod.price}) from Smart Computer beside Canteen Gate. Is it available in stock?`;
          const orderUrl = `${siteConfig.contact.whatsappLink}?text=${encodeURIComponent(orderMsg)}`;

          return (
            <div
              key={prod.id}
              className="bg-[#0B192C]/70 backdrop-blur-md border border-white/10 hover:border-[#38B6FF]/40 rounded-2xl p-5 sm:p-6 transition-all duration-300 flex flex-col justify-between group shadow-xl"
            >
              <div>
                {/* Header Badge & Category */}
                <div className="flex items-center justify-between text-xs mb-3 font-mono">
                  <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-semibold tracking-wider uppercase ${prod.badgeColor}`}>
                    {prod.tag}
                  </span>
                  <span className="text-[10px] uppercase text-slate-400 tracking-wider">
                    {prod.category}
                  </span>
                </div>

                {/* Product Icon & Visual Frame */}
                <div className="relative h-28 rounded-xl bg-gradient-to-br from-white/5 to-[#1D4ED8]/10 border border-white/5 flex items-center justify-center mb-4 group-hover:border-[#38B6FF]/30 transition-colors">
                  <div className="w-14 h-14 rounded-2xl bg-[#060D17]/80 border border-white/10 flex items-center justify-center text-[#38B6FF] group-hover:scale-110 transition-transform duration-300 shadow-md">
                    <i className={`fa-solid ${prod.icon} text-2xl`}></i>
                  </div>
                </div>

                {/* Title & Description */}
                <h4 className="text-sm sm:text-base font-bold text-white group-hover:text-[#38B6FF] transition-colors leading-snug">
                  {prod.title}
                </h4>
                <p className="font-serif-i italic text-xs text-[#E0F2FE]/75 mt-2 leading-relaxed">
                  {prod.desc}
                </p>
              </div>

              {/* Price & WhatsApp Booking CTA */}
              <div className="pt-4 border-t border-white/10 mt-5 space-y-3">
                <div className="flex items-baseline gap-2">
                  <span className="brand-foil font-mono text-2xl sm:text-3xl font-black">
                    Tk {prod.price}
                  </span>
                  {prod.originalPrice && (
                    <>
                      <span className="text-xs text-slate-400 line-through font-mono">
                        Tk {prod.originalPrice}
                      </span>
                      <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                        Tk {prod.originalPrice - prod.price} OFF
                      </span>
                    </>
                  )}
                </div>

                <a
                  href={orderUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-xl border border-[#38B6FF]/40 bg-[#1D4ED8]/25 hover:bg-[#1D4ED8] hover:border-[#38B6FF] text-sky-200 hover:text-white text-xs font-semibold tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2 group-hover:scale-[1.02] shadow-md"
                >
                  <i className="fa-brands fa-whatsapp text-sm text-[#38B6FF] group-hover:text-white"></i>
                  <span>Book on WhatsApp</span>
                  <span>&rarr;</span>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
