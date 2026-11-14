import React, { useState } from 'react';
import { siteConfig } from '../data/siteConfig';

const SERVICE_RATES = {
  bw_copy: { label: "B&W Photocopy", rate: 2.0, bulkRate: 1.8, minBulk: 50, icon: "fa-copy" },
  bw_print: { label: "B&W Laser Print", rate: 3.0, bulkRate: 3.0, minBulk: 100, icon: "fa-print" },
  color_print: { label: "Color Laser Print", rate: 8.0, bulkRate: 7.0, minBulk: 50, icon: "fa-fill-drip" },
  glossy_photo: { label: "Lab Glossy Photo", rate: 15.0, bulkRate: 15.0, minBulk: 100, icon: "fa-image" }
};

const BINDING_OPTIONS = [
  { id: "none", label: "No Binding", price: 0, desc: "Loose sheets" },
  { id: "staple", label: "Corner Staple", price: 2, desc: "Single/double staple pin" },
  { id: "spiral", label: "Plastic Spiral Binding", price: 30, desc: "Durable clear PVC cover & spiral ring" },
  { id: "lamination", label: "Thermal Lamination", price: 20, desc: "Heavy-duty waterproof pouch" }
];

export default function PrintCalculator() {
  const [service, setService] = useState("bw_copy");
  const [pages, setPages] = useState(15);
  const [copies, setCopies] = useState(1);
  const [isDoubleSided, setIsDoubleSided] = useState(false);
  const [binding, setBinding] = useState("none");

  // Calculations
  const currentService = SERVICE_RATES[service];
  const totalPages = pages * copies;
  const isBulkDiscount = totalPages >= currentService.minBulk;
  const effectivePageRate = isBulkDiscount ? currentService.bulkRate : currentService.rate;

  const printCostPerSet = pages * effectivePageRate;
  const currentBinding = BINDING_OPTIONS.find(b => b.id === binding) || BINDING_OPTIONS[0];
  const bindingCostPerSet = currentBinding.price;

  const totalPerSet = printCostPerSet + bindingCostPerSet;
  const grandTotal = Math.round(totalPerSet * copies);
  const totalSheetsPerSet = isDoubleSided ? Math.ceil(pages / 2) : pages;

  // WhatsApp Message
  const whatsappMsg = 
    `Hello Shafayat! I estimated my printing cost on your website:\n\n` +
    `• Service: ${currentService.label}\n` +
    `• Pages per Set: ${pages} (${isDoubleSided ? "Double-Sided Duplex" : "Single-Sided"})\n` +
    `• Paper Sheets: ~${totalSheetsPerSet} sheets/set\n` +
    `• Copies / Sets: ${copies}\n` +
    `• Binding Choice: ${currentBinding.label} (Tk ${bindingCostPerSet}/set)\n` +
    `• Rate Applied: Tk ${effectivePageRate.toFixed(1)}/page${isBulkDiscount ? " (Bulk Discount Applied)" : ""}\n` +
    `• Estimated Total: Tk ${grandTotal}\n\n` +
    `I am ready to send my document files. Please confirm when I can collect them beside the Canteen Gate!`;

  const whatsappUrl = `${siteConfig.contact.whatsappLink}?text=${encodeURIComponent(whatsappMsg)}`;

  return (
    <section id="print-calculator" className="space-y-6 scroll-mt-24">
      {/* Top Monograph Section Marker */}
      <div className="border-b border-white/10 pb-4">
        <div className="flex items-center gap-2.5 text-xs font-mono uppercase tracking-[0.25em] text-[#38B6FF] mb-1.5">
          <span className="inline-block w-2 h-2 rounded-full bg-[#38B6FF] shadow-[0_0_10px_#38B6FF]"></span>
          <span className="font-semibold">DEPARTMENT III COMPANION · RAPID REPRODUCTION COST LEDGER</span>
        </div>
        <h3 className="brand-foil font-display text-2xl sm:text-3xl font-medium tracking-tight uppercase">
          Interactive Print &amp; Photocopy Cost Estimator
        </h3>
        <p className="font-serif-i italic text-xs sm:text-sm text-[#E0F2FE]/70 mt-1">
          Calculate precise costs for student thesis reports, exam notes, book reproductions &amp; spiral bindings with volume discounts.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Interactive Controls */}
        <div className="lg:col-span-7 bg-[#0B192C]/70 backdrop-blur-md border border-white/10 rounded-2xl p-6 sm:p-7 space-y-6 shadow-xl">
          
          {/* 1. Service Type Selector */}
          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-[#93C5FD]/80 mb-2.5">
              1. Select Reproduction Type
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {Object.entries(SERVICE_RATES).map(([key, item]) => {
                const isSelected = service === key;
                return (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setService(key)}
                    className={`p-3 rounded-xl border text-left transition-all duration-200 flex flex-col justify-between gap-2 ${
                      isSelected
                        ? "bg-[#1D4ED8]/30 border-[#38B6FF] shadow-[0_0_15px_rgba(56,182,255,0.25)] text-white"
                        : "bg-white/5 border-white/10 text-slate-300 hover:border-white/25 hover:bg-white/10"
                    }`}
                  >
                    <i className={`fa-solid ${item.icon} text-lg ${isSelected ? "text-[#38B6FF]" : "text-slate-400"}`}></i>
                    <div>
                      <div className="text-xs font-semibold leading-tight">{item.label}</div>
                      <div className="text-[10px] font-mono text-[#93C5FD]/70 mt-0.5">
                        Tk {item.rate.toFixed(1)}/pg
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 2. Page Count Slider & Number Input */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label htmlFor="pages-slider" className="text-xs font-mono uppercase tracking-wider text-[#93C5FD]/80">
                2. Number of Pages per Document
              </label>
              <div className="flex items-center gap-1.5">
                <input
                  type="number"
                  min="1"
                  max="1000"
                  value={pages}
                  onChange={(e) => setPages(Math.max(1, parseInt(e.target.value) || 1))}
                  className="w-16 px-2 py-1 bg-[#060D17] border border-white/20 rounded-md text-right text-xs font-mono text-white focus:outline-none focus:border-[#38B6FF]"
                />
                <span className="text-xs font-mono text-slate-400">pg</span>
              </div>
            </div>
            <input
              id="pages-slider"
              type="range"
              min="1"
              max="200"
              value={Math.min(pages, 200)}
              onChange={(e) => setPages(parseInt(e.target.value))}
              className="w-full accent-[#38B6FF] cursor-pointer"
            />
            <div className="flex justify-between text-[10px] font-mono text-slate-500 mt-1">
              <span>1 Page</span>
              <span>50 Pages (Bulk rate)</span>
              <span>100 Pages</span>
              <span>200+ Pages</span>
            </div>
          </div>

          {/* 3. Copies and Duplex Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="copies-input" className="block text-xs font-mono uppercase tracking-wider text-[#93C5FD]/80 mb-2">
                3. Copies / Number of Sets
              </label>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setCopies(Math.max(1, copies - 1))}
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/15 hover:border-[#38B6FF] text-white flex items-center justify-center font-mono text-base transition"
                >
                  -
                </button>
                <input
                  id="copies-input"
                  type="number"
                  min="1"
                  max="100"
                  value={copies}
                  onChange={(e) => setCopies(Math.max(1, parseInt(e.target.value) || 1))}
                  className="flex-1 py-1.5 bg-[#060D17] border border-white/20 rounded-lg text-center text-sm font-mono text-white focus:outline-none focus:border-[#38B6FF]"
                />
                <button
                  type="button"
                  onClick={() => setCopies(copies + 1)}
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/15 hover:border-[#38B6FF] text-white flex items-center justify-center font-mono text-base transition"
                >
                  +
                </button>
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-[#93C5FD]/80 mb-2">
                Duplex (Sides)
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setIsDoubleSided(false)}
                  className={`py-2 px-3 rounded-lg border text-xs font-mono transition ${
                    !isDoubleSided
                      ? "bg-[#1D4ED8]/30 border-[#38B6FF] text-white"
                      : "bg-white/5 border-white/10 text-slate-400 hover:text-white"
                  }`}
                >
                  Single-Sided
                </button>
                <button
                  type="button"
                  onClick={() => setIsDoubleSided(true)}
                  className={`py-2 px-3 rounded-lg border text-xs font-mono transition ${
                    isDoubleSided
                      ? "bg-[#1D4ED8]/30 border-[#38B6FF] text-white"
                      : "bg-white/5 border-white/10 text-slate-400 hover:text-white"
                  }`}
                >
                  Double-Sided
                </button>
              </div>
            </div>
          </div>

          {/* 4. Binding Selection */}
          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-[#93C5FD]/80 mb-2">
              4. Binding &amp; Protection
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {BINDING_OPTIONS.map((item) => {
                const isSelected = binding === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setBinding(item.id)}
                    className={`p-2.5 rounded-xl border text-left transition ${
                      isSelected
                        ? "bg-[#1D4ED8]/30 border-[#38B6FF] text-white"
                        : "bg-white/5 border-white/10 text-slate-300 hover:border-white/20"
                    }`}
                  >
                    <div className="flex justify-between items-center text-xs font-semibold">
                      <span>{item.label}</span>
                      <span className="font-mono text-[#38B6FF]">
                        {item.price === 0 ? "Free" : `+Tk ${item.price}`}
                      </span>
                    </div>
                    <div className="text-[10px] text-slate-400 mt-0.5">{item.desc}</div>
                  </button>
                );
              })}
            </div>
          </div>

        </div>

        {/* Right Column: Cost Ledger & Instant WhatsApp Dispatch */}
        <div className="lg:col-span-5 bg-gradient-to-br from-[#0B192C]/90 to-[#060D17] border border-[#38B6FF]/30 rounded-2xl p-6 sm:p-7 shadow-2xl space-y-6 relative overflow-hidden flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#93C5FD]/70">
                Official Estimate Summary
              </span>
              <span className="px-2 py-0.5 rounded-full text-[9px] font-mono uppercase bg-[#1D4ED8]/30 border border-[#38B6FF]/40 text-[#38B6FF]">
                Instant Dispatch
              </span>
            </div>

            {/* Total Display */}
            <div>
              <span className="text-xs text-slate-400 font-mono block">Estimated Cost:</span>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="brand-foil font-mono text-4xl sm:text-5xl font-black tracking-tight">
                  Tk {grandTotal}
                </span>
                <span className="text-xs font-mono text-slate-400">BDT</span>
              </div>
              {isBulkDiscount && (
                <span className="inline-flex items-center gap-1.5 mt-2 px-2.5 py-1 rounded-md text-[11px] font-mono text-emerald-300 bg-emerald-500/15 border border-emerald-500/30">
                  <i className="fa-solid fa-tag text-emerald-400"></i>
                  <span>Bulk Discount Applied (50+ Copies)</span>
                </span>
              )}
            </div>

            {/* Itemized Ledger Table */}
            <div className="space-y-2 pt-2 border-t border-white/10 font-mono text-xs">
              <div className="flex justify-between text-slate-300">
                <span className="text-slate-400">Base Service:</span>
                <span>{currentService.label}</span>
              </div>
              <div className="flex justify-between text-slate-300">
                <span className="text-slate-400">Per-Page Rate:</span>
                <span className="text-[#38B6FF]">Tk {effectivePageRate.toFixed(1)} / page</span>
              </div>
              <div className="flex justify-between text-slate-300">
                <span className="text-slate-400">Document Volume:</span>
                <span>{pages} pgs &times; {copies} {copies > 1 ? "sets" : "set"} ({totalPages} pages total)</span>
              </div>
              <div className="flex justify-between text-slate-300">
                <span className="text-slate-400">Physical Sheets:</span>
                <span>~{totalSheetsPerSet * copies} sheets</span>
              </div>
              <div className="flex justify-between text-slate-300">
                <span className="text-slate-400">Binding Choice:</span>
                <span>{currentBinding.label} ({currentBinding.price === 0 ? "Tk 0" : `Tk ${currentBinding.price * copies}`})</span>
              </div>
            </div>
          </div>

          {/* WhatsApp Direct Submission CTA */}
          <div className="space-y-3 pt-4 border-t border-white/10">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-5 rounded-full border border-[#38B6FF]/50 bg-gradient-to-r from-[#1D4ED8] via-[#2563EB] to-[#1D4ED8] hover:from-[#2563EB] hover:to-[#38B6FF] text-white font-semibold text-xs tracking-wider uppercase transition-all duration-300 shadow-[0_0_20px_rgba(56,182,255,0.35)] hover:shadow-[0_0_30px_rgba(56,182,255,0.6)] flex items-center justify-center gap-2.5 hover:scale-[1.02]"
            >
              <i className="fa-brands fa-whatsapp text-lg"></i>
              <span>Dispatch Order with This Estimate &rarr;</span>
            </a>

            <div className="flex items-center justify-center gap-2 text-[10px] font-mono text-slate-400 text-center">
              <i className="fa-solid fa-location-dot text-[#38B6FF]"></i>
              <span>Ready for collection beside Canteen Gate</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
