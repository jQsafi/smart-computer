import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSlider from './components/HeroSlider';
import ExecutiveSummary from './components/ExecutiveSummary';
import NoticeBoard from './components/NoticeBoard';
import ServicesIndex from './components/ServicesIndex';
import PrintCalculator from './components/PrintCalculator';
import FileUploadBox from './components/FileUploadBox';
import ProductCatalog from './components/ProductCatalog';
import FAQAccordion from './components/FAQAccordion';
import AboutContact from './components/AboutContact';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';
import CourseEnrollModal from './components/CourseEnrollModal';

export default function App() {
  const [enrollModal, setEnrollModal] = useState({
    isOpen: false,
    courseTitle: "Certificate in Basic Computer Applications"
  });

  const handleOpenEnroll = (title) => {
    setEnrollModal({
      isOpen: true,
      courseTitle: title || "Certificate in Basic Computer Applications"
    });
  };

  const handleCloseEnroll = () => {
    setEnrollModal(prev => ({ ...prev, isOpen: false }));
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#060D17] text-[#F8FAFC] selection:bg-[#1D4ED8] selection:text-white relative overflow-x-hidden">
      {/* Permanent Monograph Background: Atmospheric Radial Navy Glow */}
      <div 
        className="fixed inset-0 pointer-events-none z-0" 
        style={{
          background: "radial-gradient(130% 90% at 50% -10%, #132D54 0%, #0B192C 35%, #060D17 80%)"
        }}
        aria-hidden="true"
      />

      {/* Permanent Monograph Background: Subtle Geometric Sky-Blue Microdot Grid */}
      <div 
        className="fixed inset-0 pointer-events-none z-0 opacity-[0.065]" 
        style={{
          backgroundImage: "radial-gradient(#38B6FF 1px, transparent 1px)",
          backgroundSize: "32px 32px"
        }} 
        aria-hidden="true"
      />

      {/* Ambient Mid-Page Radial Highlights */}
      <div 
        className="fixed top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[600px] pointer-events-none z-0 opacity-20 blur-[130px] rounded-full"
        style={{ background: "radial-gradient(circle, #1D4ED8 0%, #0B192C 70%, transparent 100%)" }}
        aria-hidden="true"
      />
      <div 
        className="fixed bottom-10 right-0 w-[500px] h-[500px] pointer-events-none z-0 opacity-15 blur-[120px] rounded-full"
        style={{ background: "radial-gradient(circle, #38B6FF 0%, #0B192C 70%, transparent 100%)" }}
        aria-hidden="true"
      />

      {/* 1. Fullscreen Hero Slider with Overlaid Navbar */}
      <div className="relative z-10">
        <Navbar />
        <HeroSlider />
      </div>

      {/* 2. Main Editorial Monograph Content Area */}
      <main className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 py-16 sm:py-24 flex-grow w-full space-y-24 sm:space-y-28">
        {/* SECTION I · EXECUTIVE MONOGRAPH */}
        <ExecutiveSummary />

        {/* Section Divider · II · */}
        <div className="flex items-center justify-center gap-4 py-2" aria-hidden="true">
          <span className="h-px flex-1 bg-gradient-to-r from-transparent via-[#38B6FF]/30 to-transparent" />
          <span className="text-[10px] font-mono tracking-[0.3em] text-[#38B6FF]/60 uppercase">· II ·</span>
          <span className="h-px flex-1 bg-gradient-to-l from-transparent via-[#38B6FF]/30 to-transparent" />
        </div>

        {/* SECTION II · OFFICIAL GAZETTE & LIVE BULLETIN */}
        <NoticeBoard />

        {/* Section Divider · III · */}
        <div className="flex items-center justify-center gap-4 py-2" aria-hidden="true">
          <span className="h-px flex-1 bg-gradient-to-r from-transparent via-[#38B6FF]/30 to-transparent" />
          <span className="text-[10px] font-mono tracking-[0.3em] text-[#38B6FF]/60 uppercase">· III ·</span>
          <span className="h-px flex-1 bg-gradient-to-l from-transparent via-[#38B6FF]/30 to-transparent" />
        </div>

        {/* SECTION III · DEPARTMENTAL COMPENDIUM */}
        <ServicesIndex onOpenEnrollModal={handleOpenEnroll} />

        {/* Section Divider · IV · */}
        <div className="flex items-center justify-center gap-4 py-2" aria-hidden="true">
          <span className="h-px flex-1 bg-gradient-to-r from-transparent via-[#38B6FF]/30 to-transparent" />
          <span className="text-[10px] font-mono tracking-[0.3em] text-[#38B6FF]/60 uppercase">· IV ·</span>
          <span className="h-px flex-1 bg-gradient-to-l from-transparent via-[#38B6FF]/30 to-transparent" />
        </div>

        {/* SECTION IV · RAPID REPRODUCTION COST LEDGER */}
        <PrintCalculator />

        {/* Section Divider · V · */}
        <div className="flex items-center justify-center gap-4 py-2" aria-hidden="true">
          <span className="h-px flex-1 bg-gradient-to-r from-transparent via-[#38B6FF]/30 to-transparent" />
          <span className="text-[10px] font-mono tracking-[0.3em] text-[#38B6FF]/60 uppercase">· V ·</span>
          <span className="h-px flex-1 bg-gradient-to-l from-transparent via-[#38B6FF]/30 to-transparent" />
        </div>

        {/* SECTION V · DIRECT WHATSAPP DOCUMENT DISPATCH */}
        <FileUploadBox />

        {/* Section Divider · VI · */}
        <div className="flex items-center justify-center gap-4 py-2" aria-hidden="true">
          <span className="h-px flex-1 bg-gradient-to-r from-transparent via-[#38B6FF]/30 to-transparent" />
          <span className="text-[10px] font-mono tracking-[0.3em] text-[#38B6FF]/60 uppercase">· VI ·</span>
          <span className="h-px flex-1 bg-gradient-to-l from-transparent via-[#38B6FF]/30 to-transparent" />
        </div>

        {/* SECTION VI · ACADEMIC SUPPLY & VALUE CORNER */}
        <ProductCatalog />

        {/* Section Divider · VII · */}
        <div className="flex items-center justify-center gap-4 py-2" aria-hidden="true">
          <span className="h-px flex-1 bg-gradient-to-r from-transparent via-[#38B6FF]/30 to-transparent" />
          <span className="text-[10px] font-mono tracking-[0.3em] text-[#38B6FF]/60 uppercase">· VII ·</span>
          <span className="h-px flex-1 bg-gradient-to-l from-transparent via-[#38B6FF]/30 to-transparent" />
        </div>

        {/* SECTION VII · PROCEDURAL CODEX & INQUIRIES */}
        <FAQAccordion />

        {/* Section Divider · VIII · */}
        <div className="flex items-center justify-center gap-4 py-2" aria-hidden="true">
          <span className="h-px flex-1 bg-gradient-to-r from-transparent via-[#38B6FF]/30 to-transparent" />
          <span className="text-[10px] font-mono tracking-[0.3em] text-[#38B6FF]/60 uppercase">· VIII ·</span>
          <span className="h-px flex-1 bg-gradient-to-l from-transparent via-[#38B6FF]/30 to-transparent" />
        </div>

        {/* SECTION VIII · INSTITUTIONAL REGISTRY & OPERATING LEDGER */}
        <AboutContact />
      </main>

      {/* 3. Editorial Volume Footer */}
      <Footer />

      {/* 4. Sticky Floating Contact Buttons */}
      <FloatingActions />

      {/* 5. Course Enrollment Modal Dialog */}
      <CourseEnrollModal
        isOpen={enrollModal.isOpen}
        onClose={handleCloseEnroll}
        initialCourse={enrollModal.courseTitle}
      />
    </div>
  );
}
