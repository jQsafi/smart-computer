import React, { useState } from 'react';
import { siteConfig } from '../data/siteConfig';

const initialNotices = [
  {
    id: 1,
    category: "JOB",
    tag: "Govt Job Circular",
    title: "Bangladesh Railway Assistant Station Master Recruitment Application Open",
    deadline: "25 Nov 2026",
    status: "Active",
    badgeColor: "border border-[#38B6FF]/40 bg-[#1D4ED8]/25 text-[#38B6FF]"
  },
  {
    id: 2,
    category: "ADMISSION",
    tag: "College Admission",
    title: "Class XI Online College Admission & Preference Choice Form Open",
    deadline: "30 Nov 2026",
    status: "Urgent",
    badgeColor: "border border-sky-400/40 bg-sky-500/15 text-sky-200"
  },
  {
    id: 3,
    category: "JOB",
    tag: "Bank Job Circular",
    title: "Combined 10 Banks Senior Officer & Officer (General) Recruitment",
    deadline: "15 Dec 2026",
    status: "Active",
    badgeColor: "border border-indigo-400/40 bg-indigo-500/20 text-indigo-200"
  },
  {
    id: 4,
    category: "TRAINING",
    tag: "Academic Training",
    title: "Computer Office Applications & Touch Typing New Cohort Enrolling Now",
    deadline: "Limited Seats (10 Only)",
    status: "Enrolling",
    badgeColor: "border border-purple-400/40 bg-purple-500/20 text-purple-200"
  }
];

export default function NoticeBoard() {
  const [filter, setFilter] = useState('ALL');

  const filteredNotices = filter === 'ALL' 
    ? initialNotices 
    : initialNotices.filter(n => n.category === filter);

  return (
    <section id="notices" className="space-y-6 scroll-mt-24">
      
      {/* Top Monograph Section Marker & Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4">
        <div>
          <div className="flex items-center gap-2.5 text-xs font-mono uppercase tracking-[0.25em] text-[#38B6FF] mb-1.5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#38B6FF] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#38B6FF]"></span>
            </span>
            <span className="font-semibold">SECTION II · OFFICIAL GAZETTE &amp; LIVE BULLETIN</span>
          </div>
          <h3 className="brand-foil font-display text-2xl sm:text-3xl font-medium tracking-tight uppercase">
            Live Circulars &amp; Academic Postings
          </h3>
          <p className="font-serif-i italic text-xs sm:text-sm text-[#E0F2FE]/70 mt-1">
            Real-time government job circulars, autonomous bank recruitments &amp; college admissions
          </p>
        </div>

        {/* Filter Luxury Pills */}
        <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
          {[
            { id: 'ALL', label: 'All Notices' },
            { id: 'JOB', label: 'Jobs' },
            { id: 'ADMISSION', label: 'Admissions' },
            { id: 'TRAINING', label: 'Training' }
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

      {/* Notices Frosted Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
        {filteredNotices.map((notice) => {
          const applyMsg = `Hello Shafayat! I would like assistance with the application for "${notice.title}".`;
          const applyUrl = `${siteConfig.contact.whatsappLink}?text=${encodeURIComponent(applyMsg)}`;

          return (
            <div 
              key={notice.id} 
              className="bg-[#0B192C]/70 backdrop-blur-md border border-white/10 hover:border-[#38B6FF]/40 rounded-2xl p-5 sm:p-6 transition-all duration-300 flex flex-col justify-between group shadow-xl"
            >
              <div>
                {/* Card Tag & Deadline */}
                <div className="flex items-center justify-between text-xs mb-3 font-mono">
                  <span className={`px-2.5 py-1 rounded-full text-[10px] font-semibold tracking-wider uppercase ${notice.badgeColor}`}>
                    {notice.tag}
                  </span>
                  <span className="text-[11px] text-slate-400">
                    Deadline: <strong className="text-white font-semibold font-sans">{notice.deadline}</strong>
                  </span>
                </div>

                {/* Card Title */}
                <h4 className="text-base sm:text-lg font-semibold text-white/95 group-hover:text-[#38B6FF] transition-colors leading-snug">
                  {notice.title}
                </h4>
              </div>

              {/* Card Footer Divider & CTA */}
              <div className="pt-4 flex items-center justify-between border-t border-white/10 mt-5">
                <span className="text-[11px] text-[#38B6FF]/90 font-mono flex items-center gap-1.5">
                  <i className="fa-solid fa-circle-check text-[#38B6FF]"></i>
                  <span>100% Accurate Submission</span>
                </span>

                <a
                  href={applyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 rounded-full border border-[#38B6FF]/40 bg-[#1D4ED8]/30 hover:bg-[#1D4ED8] hover:border-[#38B6FF] text-sky-200 hover:text-white text-xs font-semibold tracking-wider uppercase transition-all duration-300 shadow-md flex items-center gap-1.5 group-hover:scale-105"
                >
                  <span>Apply Online</span>
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
