import React, { useState } from 'react';
import { siteConfig } from '../data/siteConfig';

const initialNotices = [
  {
    id: 1,
    category: "JOB",
    tag: "Govt Job Circular",
    organization: "Bangladesh Railway",
    posts: "560 Posts",
    fee: "Tk 223",
    title: "Bangladesh Railway Assistant Station Master & Various Posts Recruitment",
    deadline: "30 Nov 2026",
    status: "Urgent",
    badgeColor: "border border-[#38B6FF]/40 bg-[#1D4ED8]/25 text-[#38B6FF]"
  },
  {
    id: 2,
    category: "ADMISSION",
    tag: "College Admission",
    organization: "Ministry of Education (Dhaka Board)",
    posts: "Nationwide",
    fee: "Tk 150",
    title: "Class XI Online College Admission & Preference Choice Form Processing",
    deadline: "15 Dec 2026",
    status: "Active",
    badgeColor: "border border-sky-400/40 bg-sky-500/15 text-sky-200"
  },
  {
    id: 3,
    category: "JOB",
    tag: "Primary Teacher",
    organization: "Directorate of Primary Education",
    posts: "13,750 Posts",
    fee: "Tk 112",
    title: "Primary Assistant Teacher Recruitment (All Divisions Open)",
    deadline: "25 Dec 2026",
    status: "Active",
    badgeColor: "border border-emerald-400/40 bg-emerald-500/20 text-emerald-200"
  },
  {
    id: 4,
    category: "ADMISSION",
    tag: "University Admission",
    organization: "University of Dhaka (DU)",
    posts: "A, B, C & Fine Arts Units",
    fee: "Tk 1,050",
    title: "Dhaka University (DU) Undergraduate 1st Year Admission Test Form",
    deadline: "05 Jan 2027",
    status: "Active",
    badgeColor: "border border-indigo-400/40 bg-indigo-500/20 text-indigo-200"
  },
  {
    id: 5,
    category: "JOB",
    tag: "Teacher Registration",
    organization: "NTRCA Dhaka",
    posts: "School & College Levels",
    fee: "Tk 350",
    title: "19th Non-Government Teachers' Registration Examination (NTRCA)",
    deadline: "10 Dec 2026",
    status: "Urgent",
    badgeColor: "border border-amber-400/40 bg-amber-500/20 text-amber-200"
  },
  {
    id: 6,
    category: "TRAINING",
    tag: "Academic Training",
    organization: "Smart Computer Academy",
    posts: "Limited Seats (10 Only)",
    fee: "Flexible Installments",
    title: "Computer Office Applications & Touch Typing New Cohort Enrolling Now",
    deadline: "Limited Seats (10 Only)",
    status: "Enrolling",
    badgeColor: "border border-purple-400/40 bg-purple-500/20 text-purple-200"
  }
];

export default function NoticeBoard() {
  const [filter, setFilter] = useState('ALL');
  const [search, setSearch] = useState('');

  const filteredNotices = initialNotices.filter((n) => {
    const matchesFilter = filter === 'ALL' || n.category === filter;
    const matchesSearch = search.trim() === '' || 
      n.title.toLowerCase().includes(search.toLowerCase()) ||
      n.organization.toLowerCase().includes(search.toLowerCase()) ||
      n.tag.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

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

        {/* Search Bar & Filter Luxury Pills */}
        <div className="flex flex-wrap items-center gap-2.5 text-xs font-mono w-full lg:w-auto">
          {/* Keyword Search Input */}
          <div className="relative flex-1 sm:w-64">
            <i className="fa-solid fa-magnifying-glass absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xs"></i>
            <input
              type="text"
              placeholder="Search circulars..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-8 pr-3 py-1.5 bg-[#060D17] border border-white/15 focus:border-[#38B6FF] rounded-full text-xs text-white placeholder-slate-500 focus:outline-none"
            />
            {search && (
              <button
                onClick={() => setSearch('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
              >
                &times;
              </button>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-1.5">
            {[
              { id: 'ALL', label: 'All Notices' },
              { id: 'JOB', label: 'Jobs' },
              { id: 'ADMISSION', label: 'Admissions' },
              { id: 'TRAINING', label: 'Training' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setFilter(item.id)}
                className={`px-3 py-1.5 rounded-full border text-xs tracking-wider uppercase transition-all duration-300 ${
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
      </div>

      {/* Notices Cards Grid */}
      {filteredNotices.length === 0 ? (
        <div className="py-12 text-center bg-[#0B192C]/50 rounded-2xl border border-dashed border-white/15 text-slate-400 font-mono text-xs">
          <i className="fa-solid fa-file-circle-xmark text-3xl text-slate-500 mb-2 block"></i>
          <span>No circulars match your search query. Try another keyword.</span>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {filteredNotices.map((notice) => {
            const applyMsg = `Hello Shafayat! I would like assistance with the application for "${notice.title}" (${notice.organization}). Please let me know what documents are needed.`;
            const applyUrl = `${siteConfig.contact.whatsappLink}?text=${encodeURIComponent(applyMsg)}`;

            return (
              <div 
                key={notice.id} 
                className="bg-[#0B192C]/70 backdrop-blur-md border border-white/10 hover:border-[#38B6FF]/40 rounded-2xl p-5 sm:p-6 transition-all duration-300 flex flex-col justify-between group shadow-xl"
              >
                <div>
                  {/* Card Tag & Organization */}
                  <div className="flex items-center justify-between text-xs mb-3 font-mono">
                    <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-semibold tracking-wider uppercase ${notice.badgeColor}`}>
                      {notice.tag}
                    </span>
                    <span className="text-[10px] text-[#93C5FD]/70 truncate max-w-[120px]">
                      {notice.organization}
                    </span>
                  </div>

                  {/* Card Title */}
                  <h4 className="text-sm sm:text-base font-semibold text-white/95 group-hover:text-[#38B6FF] transition-colors leading-snug">
                    {notice.title}
                  </h4>

                  {/* Meta Specs Grid */}
                  <div className="grid grid-cols-2 gap-2 text-[11px] font-mono bg-[#060D17]/60 p-2.5 rounded-xl border border-white/5 my-3">
                    <div>
                      <span className="text-slate-500 block text-[10px]">Positions / Seats:</span>
                      <span className="text-slate-200 font-medium">{notice.posts}</span>
                    </div>
                    <div>
                      <span className="text-slate-500 block text-[10px]">Official Fee:</span>
                      <span className="text-[#38B6FF] font-medium">{notice.fee}</span>
                    </div>
                  </div>
                </div>

                {/* Card Footer Divider & CTA */}
                <div className="pt-3 flex items-center justify-between border-t border-white/10 mt-2">
                  <div className="text-[10px] text-slate-400 font-mono">
                    <span>Deadline: </span>
                    <strong className="text-white font-semibold font-sans">{notice.deadline}</strong>
                  </div>

                  <a
                    href={applyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-full border border-[#38B6FF]/40 bg-[#1D4ED8]/30 hover:bg-[#1D4ED8] hover:border-[#38B6FF] text-sky-200 hover:text-white text-[11px] font-semibold tracking-wider uppercase transition-all duration-300 shadow-md flex items-center gap-1.5 group-hover:scale-105"
                  >
                    <span>Apply</span>
                    <span>&rarr;</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}
