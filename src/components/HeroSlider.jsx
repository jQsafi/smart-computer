import React, { useState, useEffect, useRef, useCallback } from 'react';
import { sliderData } from '../data/sliderData';
import { siteConfig } from '../data/siteConfig';

function MonographArches({ color = "#030812", opacity = 0.95 }) {
  return (
    <svg
      viewBox="0 0 500 220"
      preserveAspectRatio="xMidYMax slice"
      className="absolute inset-x-0 bottom-0 h-[62%] w-full pointer-events-none"
      style={{ opacity }}
    >
      {[0, 1, 2, 3, 4].map((r) => (
        <g key={r}>
          <rect x={20 + r * 96} y={70} width={72} height={150} fill={color} />
          <path d={`M ${20 + r * 96} 72 A 36 44 0 0 1 ${92 + r * 96} 72 Z`} fill={color} />
          <rect x={30 + r * 96} y={92} width={52} height={128} fill="#0B192C" opacity="0.6" />
          <path d={`M ${30 + r * 96} 94 A 26 32 0 0 1 ${82 + r * 96} 94 Z`} fill="#0B192C" opacity="0.6" />
        </g>
      ))}
    </svg>
  );
}

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const totalSlides = sliderData.length;

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Auto-play interval
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  // Touch Swipe Handlers
  const handleTouchStart = (e) => {
    touchStartX.current = e.changedTouches[0].screenX;
  };

  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].screenX;
    const diff = touchEndX.current - touchStartX.current;
    if (diff < -50) nextSlide();
    if (diff > 50) prevSlide();
  };

  return (
    <section 
      id="hero-slider" 
      className="relative h-screen min-h-[620px] overflow-hidden text-white bg-[#060D17]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {sliderData.map((slide, index) => {
        const isActive = index === currentSlide;
        const whatsappMsg = slide.ctaMsg || siteConfig.contact.defaultWhatsAppMsg;
        const whatsappUrl = `${siteConfig.contact.whatsappLink}?text=${encodeURIComponent(whatsappMsg)}`;

        return (
          <div
            key={slide.id}
            className={`absolute inset-0 flex items-center transition-all duration-1000 ease-in-out ${
              isActive ? 'opacity-100 visible z-10' : 'opacity-0 invisible z-0 pointer-events-none'
            }`}
          >
            {/* MONOGRAPH EDITORIAL SLIDE (Permanent Cohesive Design System) */}
            <div className="relative flex h-full w-full flex-col justify-between overflow-hidden bg-[#060D17]">
              
              {/* Layer 1: Radial Depth in Deep Midnight/Cobalt Navy */}
              <div 
                className="absolute inset-0 pointer-events-none" 
                style={{ background: slide.bgGradient || "radial-gradient(130% 100% at 50% 0%, #132D54 0%, #0B192C 42%, #060D17 100%)" }} 
              />

              {/* Layer 2: Subtle Geometric Dot Grid in Sky Blue */}
              <div 
                className="absolute inset-0 opacity-[0.08] pointer-events-none" 
                style={{ backgroundImage: "radial-gradient(#38B6FF 1px, transparent 1px)", backgroundSize: "30px 30px" }} 
              />

              {/* Layer 3: Architectural Colonnade Arches */}
              <div className="absolute inset-x-0 bottom-0 top-[28%] opacity-35 pointer-events-none">
                <MonographArches color="#030812" opacity={0.95} />
              </div>

              {/* Layer 4: Background Watermark */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0 overflow-hidden">
                <img 
                  src={slide.image || "assets/logo.webp"} 
                  alt="" 
                  aria-hidden="true"
                  className={`object-contain opacity-[0.09] filter drop-shadow-[0_0_60px_rgba(56,182,255,0.3)] transition-transform duration-1000 ${
                    slide.id === 2 ? 'w-[320px] sm:w-[480px] lg:w-[620px] scale-100' : 'w-[280px] sm:w-[440px] lg:w-[560px] scale-105'
                  }`}
                />
              </div>

              {/* Layer 5: Vignette Overlay */}
              <div 
                className="absolute inset-0 pointer-events-none" 
                style={{ background: "radial-gradient(85% 65% at 50% 45%, transparent 35%, rgba(6,13,23,0.85) 100%)" }} 
              />

              {/* Top Bar Metadata */}
              <div className="relative z-10 flex items-center justify-between px-6 pt-16 sm:pt-20 text-[9px] sm:text-[10px] tracking-[0.35em] sm:tracking-[0.5em] text-[#38B6FF]/80 sm:px-12 font-mono sm:font-sans">
                <span>{slide.vol || `VOL. 0${slide.id}`}</span>
                <span className="hidden sm:inline">{slide.edition || "SHAFAYAT HOSSAIN · FOUNDER"}</span>
                <span>{slide.yearRoman || "EST. 2026"}</span>
              </div>

              {/* Center Editorial Monograph Proclamation */}
              <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-4 sm:px-6 text-center my-auto py-4 sm:py-6 max-w-5xl mx-auto w-full">
                <p className="text-[9px] sm:text-xs tracking-[0.35em] sm:tracking-[0.6em] text-[#38B6FF]/90 uppercase font-medium whitespace-nowrap overflow-hidden text-ellipsis max-w-full">
                  {slide.overline || "TECH FOR A BRIGHTER TOMORROW"}
                </p>

                <h1 
                  className="brand-foil mt-3 sm:mt-5 font-display text-[clamp(1.5rem,4.6vw,4.75rem)] 2xl:text-[5.25rem] font-medium leading-[1.05] sm:leading-[0.95] tracking-[0.03em] sm:tracking-[0.05em] lg:tracking-[0.07em] select-none uppercase text-center max-w-full break-words px-2"
                  style={{ filter: "drop-shadow(0 8px 35px rgba(29, 78, 216, 0.45)) drop-shadow(0 2px 10px rgba(56, 182, 255, 0.3))" }}
                >
                  {slide.title || "SMART COMPUTER"}
                </h1>

                {(slide.titleHighlight || slide.secondaryTitle) && (
                  <div className="mt-2 sm:mt-3 flex items-center justify-center gap-2 sm:gap-3 w-full max-w-2xl mx-auto">
                    <span className="h-px w-4 sm:w-8 md:w-12 bg-gradient-to-r from-transparent to-[#38B6FF]/60 shrink" />
                    <span className="font-serif-i italic text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-sky-200/95 tracking-[0.12em] sm:tracking-[0.18em] uppercase font-light text-center">
                      {slide.titleHighlight || slide.secondaryTitle}
                    </span>
                    <span className="h-px w-4 sm:w-8 md:w-12 bg-gradient-to-l from-transparent to-[#38B6FF]/60 shrink" />
                  </div>
                )}

                <div className="mt-4 sm:mt-6 h-px w-32 sm:w-48 bg-gradient-to-r from-transparent via-[#38B6FF] to-transparent" />

                <p className="mt-4 sm:mt-5 max-w-2xl font-serif-i text-xs sm:text-base md:text-lg italic leading-relaxed text-[#E0F2FE]/85 px-2">
                  {slide.subtitle}
                </p>

                <p className="mt-2 sm:mt-3 text-[9px] sm:text-[11px] uppercase tracking-[0.25em] sm:tracking-[0.45em] text-[#93C5FD]/70">
                  {slide.volumeTag}
                </p>

                {/* Fast Action Luxury CTA buttons */}
                <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3.5 pt-5 sm:pt-7">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 sm:px-6 py-2.5 sm:py-3 rounded-full border border-brand-sky/50 bg-[#0B192C]/85 hover:bg-[#1D4ED8] hover:border-brand-sky text-sky-200 hover:text-white text-[10px] sm:text-[11px] tracking-[0.14em] sm:tracking-[0.18em] uppercase transition-all duration-300 shadow-xl backdrop-blur-md flex items-center gap-2.5 hover:scale-105"
                  >
                    <i className="fa-brands fa-whatsapp text-sm sm:text-base text-brand-sky"></i>
                    <span>WhatsApp: {siteConfig.contact.phone}</span>
                  </a>
                  <a
                    href={`tel:${siteConfig.contact.rawPhone}`}
                    className="px-5 sm:px-6 py-2.5 sm:py-3 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 hover:border-white/30 text-slate-200 text-[10px] sm:text-[11px] tracking-[0.14em] sm:tracking-[0.18em] uppercase transition-all duration-300 backdrop-blur-md flex items-center gap-2.5 hover:scale-105"
                  >
                    <i className="fa-solid fa-phone text-[10px] text-brand-sky"></i>
                    <span>Call: {siteConfig.contact.phone}</span>
                  </a>
                </div>
              </div>

              {/* Bottom Bar Metadata */}
              <div className="relative z-10 flex flex-wrap items-center justify-between gap-x-4 gap-y-2 px-6 pb-20 sm:pb-16 text-[8.5px] sm:text-[10px] tracking-[0.15em] sm:tracking-[0.3em] text-[#93C5FD]/60 sm:px-12">
                <span className="min-w-0">{slide.series || "BESIDE CANTEEN GATE · MAIN ROAD"}</span>
                <a href="#services" className="animate-bounce text-[#38B6FF] hover:text-white transition" title="Scroll down">
                  ↓
                </a>
                <span className="min-w-0">{slide.location || "LEARN · WORK · GROW TOGETHER"}</span>
              </div>

            </div>
          </div>
        );
      })}

      {/* Monograph Bottom Slider Controls Bar */}
      <div className="absolute bottom-8 left-0 right-0 z-20">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          
          {/* Slide Indicator & Dot Buttons */}
          <div className="flex items-center gap-4">
            <span className="text-xs font-mono font-bold tracking-widest text-[#38B6FF]">
              0{currentSlide + 1} / 0{totalSlides}
            </span>
            <div className="flex items-center gap-2">
              {sliderData.map((_, i) => (
                <button
                  key={i}
                  aria-label={`Go to slide ${i + 1}`}
                  onClick={() => goToSlide(i)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    i === currentSlide ? 'bg-[#38B6FF] w-7 shadow-[0_0_10px_#38B6FF]' : 'bg-white/30 w-2.5 hover:bg-white/60'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Scroll Down Prompt */}
          <a
            href="#services"
            className="hidden sm:flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-[#93C5FD]/60 hover:text-white transition"
          >
            <span>Scroll down for departments</span>
            <span className="animate-bounce text-[#38B6FF]">&darr;</span>
          </a>

          {/* Prev / Next Controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={prevSlide}
              aria-label="Previous Slide"
              className="w-10 h-10 rounded-full border border-white/20 bg-[#0B192C]/80 hover:border-[#38B6FF] hover:bg-[#1D4ED8]/40 text-white flex items-center justify-center transition shadow-lg"
            >
              <i className="fa-solid fa-chevron-left text-xs"></i>
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next Slide"
              className="w-10 h-10 rounded-full border border-white/20 bg-[#0B192C]/80 hover:border-[#38B6FF] hover:bg-[#1D4ED8]/40 text-white flex items-center justify-center transition shadow-lg"
            >
              <i className="fa-solid fa-chevron-right text-xs"></i>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
