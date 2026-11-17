import React from 'react';
import { ArrowUp, ExternalLink } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export default function BlogFooter({ onSelectCategory }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-[#060D17] text-gray-600 dark:text-gray-400 text-xs transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-12">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand Info & 4-Color Accent */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1" aria-hidden="true">
                <span className="w-2.5 h-2.5 rounded-full bg-[#4285F4]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#EA4335]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#FBBC05]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#34A853]" />
              </div>
              <span className="text-base font-extrabold text-gray-900 dark:text-white tracking-tight">
                Smart Computer <span className="text-blue-600 dark:text-[#38B6FF]">| The Keyword</span>
              </span>
            </div>

            <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed max-w-md">
              The official publication of Smart Computer &amp; Stationary. Sharing insights on citizen services, government job circulars, computer education, and digital productivity across Bangladesh.
            </p>

            <div className="pt-2 text-[11.5px] font-mono text-gray-500 dark:text-gray-400 space-y-1">
              <div>📍 {siteConfig.contact.location}</div>
              <div>📞 Helpline / WhatsApp: {siteConfig.contact.phone}</div>
              <div>🕒 Sat-Thu: {siteConfig.hours.satThu} · Fri: {siteConfig.hours.fri}</div>
            </div>
          </div>

          {/* Quick Editorial Topics */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-gray-900 dark:text-white uppercase tracking-wider font-mono">
              Editorial Topics
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button 
                  onClick={() => onSelectCategory('citizen-services')} 
                  className="hover:text-blue-600 dark:hover:text-[#38B6FF] transition-colors"
                >
                  Citizen &amp; Govt Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onSelectCategory('career-jobs')} 
                  className="hover:text-blue-600 dark:hover:text-[#38B6FF] transition-colors"
                >
                  Job Circulars &amp; Teletalk
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onSelectCategory('training-academy')} 
                  className="hover:text-blue-600 dark:hover:text-[#38B6FF] transition-colors"
                >
                  IT Training Academy
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onSelectCategory('photo-printing')} 
                  className="hover:text-blue-600 dark:hover:text-[#38B6FF] transition-colors"
                >
                  Photo Studio &amp; Printing
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onSelectCategory('tech-ai')} 
                  className="hover:text-blue-600 dark:hover:text-[#38B6FF] transition-colors"
                >
                  Technology &amp; AI
                </button>
              </li>
            </ul>
          </div>

          {/* Connected Hubs */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-gray-900 dark:text-white uppercase tracking-wider font-mono">
              Ecosystem
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a 
                  href="/" 
                  className="hover:text-blue-600 dark:hover:text-[#38B6FF] flex items-center gap-1 transition-colors"
                >
                  <span>Main Store Website</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a 
                  href="/#services" 
                  className="hover:text-blue-600 dark:hover:text-[#38B6FF] transition-colors"
                >
                  Service Catalog
                </a>
              </li>
              <li>
                <a 
                  href="/#notices" 
                  className="hover:text-blue-600 dark:hover:text-[#38B6FF] transition-colors"
                >
                  Live Circular Gazette
                </a>
              </li>
              <li>
                <a 
                  href="/#print-calculator" 
                  className="hover:text-blue-600 dark:hover:text-[#38B6FF] transition-colors"
                >
                  Print Cost Calculator
                </a>
              </li>
              <li>
                <a 
                  href={siteConfig.contact.whatsappLink} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-600 dark:text-emerald-400 hover:underline"
                >
                  Direct WhatsApp Support
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 border-t border-gray-200 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-gray-500 dark:text-gray-400">
          <div>
            © {new Date().getFullYear()} Smart Computer and Stationary · Founded by {siteConfig.proprietor.name}. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 hover:text-blue-600 dark:hover:text-[#38B6FF] transition-colors"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Back to top</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
