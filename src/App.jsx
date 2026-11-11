import React from 'react';
import Navbar from './components/Navbar';
import HeroSlider from './components/HeroSlider';
import ExecutiveSummary from './components/ExecutiveSummary';
import NoticeBoard from './components/NoticeBoard';
import ServicesIndex from './components/ServicesIndex';
import FileUploadBox from './components/FileUploadBox';
import AboutContact from './components/AboutContact';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col justify-between selection:bg-brand-forest selection:text-white">
      {/* 1. Fullscreen Hero Slider with Overlaid Navbar */}
      <div className="relative">
        <Navbar />
        <HeroSlider />
      </div>

      {/* 2. Main Editorial Content Area (Alphabet Minimalist Style) */}
      <main className="max-w-5xl mx-auto px-6 py-16 sm:py-20 flex-grow w-full space-y-20">
        <ExecutiveSummary />
        <NoticeBoard />
        <ServicesIndex />
        <FileUploadBox />
        <AboutContact />
      </main>

      {/* 3. Minimalist Footer */}
      <Footer />

      {/* 4. Sticky Floating Contact Buttons */}
      <FloatingActions />
    </div>
  );
}
