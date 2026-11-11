import React, { useState, useEffect, useRef, useCallback } from 'react';
import { sliderData } from '../data/sliderData';
import { siteConfig } from '../data/siteConfig';

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
    }, 5500);
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

  const activeSlide = sliderData[currentSlide];

  return (
    <section 
      id="hero-slider" 
      className="relative h-screen min-h-[620px] overflow-hidden text-white bg-brand-forestDark"
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
            className={`absolute inset-0 flex items-center transition-all duration-800 ease-in-out ${
              isActive ? 'opacity-100 visible z-10' : 'opacity-0 invisible z-0 pointer-events-none'
            }`}
            style={{ background: slide.bgGradient }}
          >
            {/* Ambient Background Glow */}
            <div className="absolute right-10 top-1/4 w-80 sm:w-96 h-80 sm:h-96 bg-brand-teal/20 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute left-1/4 bottom-10 w-72 h-72 bg-brand-sky/15 rounded-full blur-3xl pointer-events-none"></div>

            <div className="max-w-6xl mx-auto px-6 pt-20 w-full relative z-10">
              
              {/* SLIDE TYPE 1: Brand Emblem & Official Identity */}
              {slide.type === 'brand' && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  <div className="lg:col-span-7 space-y-5 animate-fadeIn">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/15 text-brand-sky text-xs font-mono uppercase tracking-widest">
                      <span className="w-2 h-2 rounded-full bg-brand-sky animate-ping"></span>
                      <span>{slide.pill}</span>
                    </div>

                    <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight uppercase leading-[1.1] font-sans">
                      {slide.title} <br />
                      <span className="text-brand-sky">{slide.titleHighlight}</span>
                    </h1>

                    <div className="text-xs sm:text-sm font-mono tracking-widest text-emerald-300 font-semibold uppercase">
                      {slide.subtitle}
                    </div>

                    <p className="text-sm sm:text-base text-gray-300 font-bn leading-relaxed max-w-xl">
                      {slide.description}
                    </p>

                    {/* 4 Pillars Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-1 max-w-xl">
                      {siteConfig.pillars.map((pillar) => (
                        <div key={pillar.id} className="bg-white/5 border border-white/10 rounded-xl p-2.5 text-center backdrop-blur-sm">
                          <i className={`fa-solid fa-${pillar.icon} ${pillar.color} text-base mb-1 block`}></i>
                          <span className="text-[11px] font-mono uppercase tracking-wider text-gray-200 block font-bold">
                            {pillar.label}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Fast Action Buttons */}
                    <div className="flex flex-wrap items-center gap-3 pt-2">
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-3 rounded-xl bg-[#25D366] hover:bg-[#20BA5A] text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-lg transition"
                      >
                        <i className="fa-brands fa-whatsapp text-lg"></i>
                        <span>WhatsApp: {siteConfig.contact.phone}</span>
                      </a>

                      <a
                        href={`tel:${siteConfig.contact.rawPhone}`}
                        className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-xs sm:text-sm flex items-center gap-2 transition"
                      >
                        <i className="fa-solid fa-phone text-xs text-brand-sky"></i>
                        <span>কল: {siteConfig.contact.phone}</span>
                      </a>

                      <a
                        href="#services"
                        className="px-3 py-3 text-xs font-mono uppercase tracking-wider text-gray-400 hover:text-white transition flex items-center gap-1"
                      >
                        <span>Services &darr;</span>
                      </a>
                    </div>
                  </div>

                  {/* Right Column: Official Logo Emblem */}
                  <div className="lg:col-span-5 flex flex-col items-center justify-center">
                    <div className="relative w-full max-w-sm sm:max-w-md flex flex-col items-center group">
                      <div className="absolute inset-0 bg-brand-sky/15 rounded-full blur-2xl group-hover:bg-brand-sky/25 transition-all duration-700"></div>
                      <img
                        src={slide.image}
                        alt={slide.imageAlt}
                        className="relative w-64 sm:w-80 lg:w-96 h-auto object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.7)] group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* SLIDE TYPE 2: Alphabet Inspired Wooden Blocks */}
              {slide.type === 'blocks' && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
                  <div className="lg:col-span-6 space-y-5">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/15 text-emerald-400 text-xs font-mono uppercase tracking-widest">
                      <span>{slide.pill}</span>
                    </div>

                    <h2 className="text-3xl sm:text-5xl lg:text-5xl font-black text-white tracking-tight uppercase leading-[1.12] font-sans">
                      {slide.title} <br />
                      <span className="text-brand-sky">{slide.titleHighlight}</span>
                    </h2>

                    <p className="text-sm sm:text-base text-gray-300 font-bn leading-relaxed">
                      {slide.description}
                    </p>

                    <div className="flex flex-wrap items-center gap-3 pt-2">
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-3 rounded-xl bg-[#25D366] hover:bg-[#20BA5A] text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-lg transition"
                      >
                        <i className="fa-brands fa-whatsapp text-lg"></i>
                        <span>WhatsApp: {siteConfig.contact.phone}</span>
                      </a>

                      <a
                        href={`tel:${siteConfig.contact.rawPhone}`}
                        className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-xs sm:text-sm flex items-center gap-2 transition"
                      >
                        <i className="fa-solid fa-phone text-xs text-brand-sky"></i>
                        <span>কল: {siteConfig.contact.phone}</span>
                      </a>

                      <a
                        href="#services"
                        className="px-3 py-3 text-xs font-mono uppercase tracking-wider text-gray-400 hover:text-white transition flex items-center gap-1"
                      >
                        <span>Services &darr;</span>
                      </a>
                    </div>
                  </div>

                  <div className="lg:col-span-6 flex flex-col items-center justify-center">
                    <div className="relative w-full max-w-lg flex flex-col items-center group">
                      <div className="w-full flex items-center justify-center p-2">
                        <img
                          src={slide.image}
                          alt={slide.imageAlt}
                          className="w-full h-auto object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.55)] transform group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>

                      <div className="mt-4 bg-brand-forestDark/80 border border-white/20 px-4 py-2 rounded-2xl shadow-2xl backdrop-blur-md flex items-center gap-3">
                        <img src={slide.badgeLogo} alt="SCS Logo" className="w-8 h-8 object-contain" />
                        <div className="text-left font-mono">
                          <span className="text-[10px] uppercase tracking-widest text-brand-sky block font-bold">
                            {slide.badgeText}
                          </span>
                          <span className="text-xs font-bold text-white block">{siteConfig.businessName}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* SLIDE TYPE 3: Department Services Showcases */}
              {slide.type === 'department' && (
                <div className="max-w-3xl space-y-6">
                  <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-emerald-400">
                    <span>{slide.deptTag}</span>
                  </div>

                  <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight font-bn">
                    {slide.title} <br />
                    <span className="text-brand-sky">{slide.titleHighlight}</span>
                  </h2>

                  <p className="text-sm sm:text-lg text-gray-300 font-bn leading-relaxed">
                    {slide.description}
                  </p>

                  {slide.tipBox && (
                    <div className="bg-white/10 border border-white/15 p-4 rounded-2xl max-w-xl text-xs text-gray-200 font-bn">
                      {slide.tipBox}
                    </div>
                  )}

                  <div className="flex flex-wrap items-center gap-4 pt-2">
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3.5 rounded-xl bg-brand-sky hover:bg-[#1EA7F5] text-brand-forestDark font-bold text-sm flex items-center gap-2 shadow-lg transition"
                    >
                      <i className="fa-brands fa-whatsapp text-lg"></i>
                      <span>{slide.ctaText}</span>
                    </a>

                    <a
                      href="#services"
                      className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-sm transition"
                    >
                      সেবাসমূহ দেখুন &rarr;
                    </a>
                  </div>
                </div>
              )}

            </div>
          </div>
        );
      })}

      {/* Minimalist Bottom Slider Controls Bar */}
      <div className="absolute bottom-8 left-0 right-0 z-20">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          
          {/* Slide Indicator & Dot Buttons */}
          <div className="flex items-center gap-4">
            <span className="text-xs font-mono font-bold tracking-widest text-brand-sky">
              0{currentSlide + 1} / 0{totalSlides}
            </span>
            <div className="flex items-center gap-2">
              {sliderData.map((_, i) => (
                <button
                  key={i}
                  aria-label={`Go to slide ${i + 1}`}
                  onClick={() => goToSlide(i)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    i === currentSlide ? 'bg-white w-6' : 'bg-white/30 w-2.5 hover:bg-white/60'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Scroll Down Prompt */}
          <a
            href="#services"
            className="hidden sm:flex items-center gap-2 text-xs font-mono text-gray-400 hover:text-white transition"
          >
            <span>Scroll down for services</span>
            <span className="animate-bounce">&darr;</span>
          </a>

          {/* Prev / Next Controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={prevSlide}
              aria-label="Previous Slide"
              className="w-10 h-10 rounded-full border border-white/20 hover:border-white hover:bg-white/10 text-white flex items-center justify-center transition"
            >
              <i className="fa-solid fa-chevron-left text-xs"></i>
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next Slide"
              className="w-10 h-10 rounded-full border border-white/20 hover:border-white hover:bg-white/10 text-white flex items-center justify-center transition"
            >
              <i className="fa-solid fa-chevron-right text-xs"></i>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
