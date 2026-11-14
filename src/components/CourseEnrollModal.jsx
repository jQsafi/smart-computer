import React, { useState } from 'react';
import { siteConfig } from '../data/siteConfig';

export default function CourseEnrollModal({ isOpen, onClose, initialCourse = "Certificate in Basic Computer Applications" }) {
  const [course, setCourse] = useState(initialCourse);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [institute, setInstitute] = useState('');
  const [shift, setShift] = useState('Afternoon (3:00 PM – 5:00 PM)');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();

    const text = 
      `Hello Shafayat! I would like to enroll in Smart Computer Training Academy:\n\n` +
      `• Course: ${course}\n` +
      `• Student Name: ${name || "Not specified"}\n` +
      `• Phone: ${phone || siteConfig.contact.phone}\n` +
      `• School/College: ${institute || "Local Campus"}\n` +
      `• Preferred Shift: ${shift}\n\n` +
      `Please let me know about the next batch start date and workstation reservation!`;

    const url = `${siteConfig.contact.whatsappLink}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-lg bg-[#0B192C] border border-[#38B6FF]/40 rounded-3xl p-6 sm:p-8 shadow-[0_0_50px_rgba(29,78,216,0.5)] text-white space-y-6"
        role="dialog"
        aria-modal="true"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          type="button"
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/5 border border-white/10 hover:border-white/30 text-slate-300 hover:text-white flex items-center justify-center transition"
          aria-label="Close dialog"
        >
          &times;
        </button>

        {/* Modal Header */}
        <div className="space-y-1.5 border-b border-white/10 pb-4">
          <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.2em] text-[#38B6FF]">
            <i className="fa-solid fa-graduation-cap"></i>
            <span>Department IV · Academy Registry</span>
          </div>
          <h3 className="brand-foil font-display text-2xl font-bold uppercase tracking-tight">
            Workstation Reservation &amp; Course Enrollment
          </h3>
          <p className="font-serif-i italic text-xs text-[#E0F2FE]/70">
            1 Workstation Per Student Guarantee · Air-Conditioned Training Lab beside Canteen Gate
          </p>
        </div>

        {/* Enrollment Form */}
        <form onSubmit={handleSubmit} className="space-y-4 text-xs font-mono">
          <div>
            <label className="block text-[#93C5FD]/80 uppercase tracking-wider mb-1.5">
              Target Course
            </label>
            <select
              value={course}
              onChange={(e) => setCourse(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-[#060D17] border border-white/20 text-white focus:outline-none focus:border-[#38B6FF]"
            >
              <option value="Certificate in Basic Computer Applications (MS Word, Excel, PowerPoint)">
                Basic Computer Applications (Word, Excel, PowerPoint)
              </option>
              <option value="English & Bengali Touch Typing Speed Mastery (Avro & Bijoy)">
                English &amp; Bengali Touch Typing Speed Mastery
              </option>
              <option value="Graphic Design Essentials (Adobe Photoshop & Canva)">
                Graphic Design Essentials (Photoshop &amp; Canva)
              </option>
              <option value="Internet Navigation, Email Etiquette & Freelancing Basics">
                Internet, Professional Email &amp; Freelancing Basics
              </option>
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div>
              <label className="block text-[#93C5FD]/80 uppercase tracking-wider mb-1.5">
                Student Full Name
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Tanvir Ahmed"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#060D17] border border-white/20 text-white placeholder-slate-500 focus:outline-none focus:border-[#38B6FF]"
              />
            </div>

            <div>
              <label className="block text-[#93C5FD]/80 uppercase tracking-wider mb-1.5">
                Contact Phone / WhatsApp
              </label>
              <input
                type="tel"
                required
                placeholder="017XX-XXXXXX"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#060D17] border border-white/20 text-white placeholder-slate-500 focus:outline-none focus:border-[#38B6FF]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div>
              <label className="block text-[#93C5FD]/80 uppercase tracking-wider mb-1.5">
                School / College / Institution
              </label>
              <input
                type="text"
                placeholder="e.g. Local Govt College"
                value={institute}
                onChange={(e) => setInstitute(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#060D17] border border-white/20 text-white placeholder-slate-500 focus:outline-none focus:border-[#38B6FF]"
              />
            </div>

            <div>
              <label className="block text-[#93C5FD]/80 uppercase tracking-wider mb-1.5">
                Preferred Shift
              </label>
              <select
                value={shift}
                onChange={(e) => setShift(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#060D17] border border-white/20 text-white focus:outline-none focus:border-[#38B6FF]"
              >
                <option value="Morning Shift (9:00 AM – 11:00 AM)">Morning (9:00 AM – 11:00 AM)</option>
                <option value="Afternoon Shift (3:00 PM – 5:00 PM)">Afternoon (3:00 PM – 5:00 PM)</option>
                <option value="Evening Shift (6:00 PM – 8:00 PM)">Evening (6:00 PM – 8:00 PM)</option>
                <option value="Friday Intensive Batch (3:00 PM – 7:00 PM)">Friday Intensive Batch</option>
              </select>
            </div>
          </div>

          <div className="pt-3">
            <button
              type="submit"
              className="w-full py-3.5 rounded-full border border-[#38B6FF]/50 bg-gradient-to-r from-[#1D4ED8] via-[#2563EB] to-[#1D4ED8] hover:from-[#2563EB] hover:to-[#38B6FF] text-white font-semibold text-xs tracking-wider uppercase transition-all duration-300 shadow-[0_0_20px_rgba(56,182,255,0.4)] flex items-center justify-center gap-2"
            >
              <i className="fa-brands fa-whatsapp text-lg"></i>
              <span>Transmit Application on WhatsApp &rarr;</span>
            </button>
          </div>
        </form>

      </div>
    </div>
  );
}
