import React, { useState } from 'react';
import { siteConfig } from '../data/siteConfig';

const initialNotices = [
  {
    id: 1,
    category: "JOB",
    tag: "Govt Job",
    title: "Bangladesh Railway Assistant Station Master Recruitment Application Open",
    deadline: "25 Nov 2026",
    status: "Active",
    badgeColor: "bg-blue-100 text-blue-800 border-blue-300"
  },
  {
    id: 2,
    category: "ADMISSION",
    tag: "Admission",
    title: "Class XI Online College Admission & Preference Choice Form Open",
    deadline: "30 Nov 2026",
    status: "Urgent",
    badgeColor: "bg-amber-100 text-amber-800 border-amber-300"
  },
  {
    id: 3,
    category: "JOB",
    tag: "Bank Job",
    title: "Combined 10 Banks Senior Officer & Officer (General) Recruitment",
    deadline: "15 Dec 2026",
    status: "Active",
    badgeColor: "bg-sky-100 text-sky-800 border-sky-300"
  },
  {
    id: 4,
    category: "TRAINING",
    tag: "Training",
    title: "Computer Office Applications & Typing New Batch Enrolling Now",
    deadline: "Limited Seats (10 Only)",
    status: "Enrolling",
    badgeColor: "bg-purple-100 text-purple-800 border-purple-300"
  }
];

export default function NoticeBoard() {
  const [filter, setFilter] = useState('ALL');

  const filteredNotices = filter === 'ALL' 
    ? initialNotices 
    : initialNotices.filter(n => n.category === filter);

  return (
    <section id="notices" className="bg-gradient-to-br from-slate-900 to-brand-forestDark text-white rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl scroll-mt-24">
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4">
        <div className="flex items-center gap-3">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-sky opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-sky"></span>
          </span>
          <div>
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
              Live Notices &amp; Job Updates
            </h3>
            <p className="text-xs text-gray-400">
              Government and private job circulars, college &amp; university admission alerts
            </p>
          </div>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
          <button
            onClick={() => setFilter('ALL')}
            className={`px-3 py-1 rounded-lg transition ${
              filter === 'ALL' ? 'bg-brand-sky text-brand-forestDark font-bold' : 'bg-white/10 hover:bg-white/20 text-gray-300'
            }`}
          >
            All
          </button>
          <button
            onClick={() => setFilter('JOB')}
            className={`px-3 py-1 rounded-lg transition ${
              filter === 'JOB' ? 'bg-brand-sky text-brand-forestDark font-bold' : 'bg-white/10 hover:bg-white/20 text-gray-300'
            }`}
          >
            Jobs
          </button>
          <button
            onClick={() => setFilter('ADMISSION')}
            className={`px-3 py-1 rounded-lg transition ${
              filter === 'ADMISSION' ? 'bg-brand-sky text-brand-forestDark font-bold' : 'bg-white/10 hover:bg-white/20 text-gray-300'
            }`}
          >
            Admissions
          </button>
          <button
            onClick={() => setFilter('TRAINING')}
            className={`px-3 py-1 rounded-lg transition ${
              filter === 'TRAINING' ? 'bg-brand-sky text-brand-forestDark font-bold' : 'bg-white/10 hover:bg-white/20 text-gray-300'
            }`}
          >
            Training
          </button>
        </div>
      </div>

      {/* Notices Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredNotices.map((notice) => {
          const applyMsg = `Hello Shafayat! I would like assistance with the application for "${notice.title}".`;
          const applyUrl = `${siteConfig.contact.whatsappLink}?text=${encodeURIComponent(applyMsg)}`;

          return (
            <div key={notice.id} className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col justify-between hover:border-brand-sky/40 transition">
              <div>
                <div className="flex items-center justify-between text-xs mb-2 font-mono">
                  <span className={`px-2 py-0.5 rounded text-[11px] font-semibold border ${notice.badgeColor}`}>
                    {notice.tag}
                  </span>
                  <span className="text-gray-400">
                    Deadline: <strong className="text-white">{notice.deadline}</strong>
                  </span>
                </div>
                <h4 className="text-sm font-semibold text-gray-100 leading-snug">
                  {notice.title}
                </h4>
              </div>

              <div className="pt-4 flex items-center justify-between border-t border-white/10 mt-3">
                <span className="text-[11px] text-sky-400 font-mono">
                  ● 100% Error-Free Submission
                </span>
                <a
                  href={applyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-brand-sky hover:underline flex items-center gap-1"
                >
                  <span>Apply Online Now</span>
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
