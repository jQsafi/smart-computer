import React, { useState } from 'react';
import { Mail, Check, Send } from 'lucide-react';

export default function BlogNewsletter() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    setSubscribed(true);
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <div className="bg-gradient-to-br from-blue-50 via-white to-sky-50 dark:from-[#0B1524] dark:via-[#070E18] dark:to-[#0B192C] rounded-3xl p-8 sm:p-12 border border-blue-100 dark:border-white/10 shadow-sm text-center max-w-3xl mx-auto space-y-6">
        
        {/* Google 4-Color Accent Bar */}
        <div className="flex items-center justify-center gap-1.5" aria-hidden="true">
          <span className="w-2.5 h-2.5 rounded-full bg-[#4285F4]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#EA4335]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#FBBC05]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#34A853]" />
        </div>

        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            Never miss an update from The Keyword
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 max-w-xl mx-auto leading-relaxed">
            Get official recruitment circular alerts, citizen service guidelines, and practical computer training tutorials delivered directly to your inbox.
          </p>
        </div>

        {subscribed ? (
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 text-xs sm:text-sm font-semibold">
            <Check className="w-4 h-4" />
            <span>Thank you for subscribing! You'll receive our next newsletter issue.</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
            <div className="relative w-full">
              <Mail className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="w-full pl-10 pr-4 py-2.5 rounded-full text-xs bg-white dark:bg-white/10 border border-gray-300 dark:border-white/20 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full sm:w-auto flex-shrink-0 inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-700 transition-all shadow-md"
            >
              <span>Subscribe</span>
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        )}

        <div className="text-[11px] text-gray-400 dark:text-gray-500 font-mono">
          Zero spam. Unsubscribe anytime with one click.
        </div>
      </div>
    </section>
  );
}
