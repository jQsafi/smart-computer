import React, { useState } from 'react';
import { Search, X, ArrowLeft, ExternalLink, Menu } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export default function BlogHeader({
  searchQuery,
  onSearchChange,
  selectedCategory,
  onSelectCategory,
  categories,
  onBackToHome,
  isReadingPost,
  onBackToFeed
}) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const mainShopUrl = typeof window !== 'undefined' && (window.location.hostname.includes('smartcomputer.shop') || window.location.hostname.includes('wasmer.app'))
    ? 'https://www.smartcomputer.shop/'
    : '/';

  return (
    <header className="sticky top-0 z-50 bg-white/95 dark:bg-[#0A121E]/95 backdrop-blur-md border-b border-gray-200/80 dark:border-white/10 transition-colors">
      {/* Top Google-style Brand Masthead */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 gap-4">
          
          {/* Brand & "The Keyword" Editorial Mark */}
          <div className="flex items-center gap-3 sm:gap-4">
            {isReadingPost ? (
              <button
                onClick={onBackToFeed}
                className="flex items-center gap-1.5 text-xs font-medium text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-[#38B6FF] transition-colors py-1.5 px-2.5 rounded-full hover:bg-gray-100 dark:hover:bg-white/5 border border-transparent hover:border-gray-200 dark:hover:border-white/10"
                aria-label="Back to all stories"
              >
                <ArrowLeft className="w-4 h-4" />
                <span className="hidden sm:inline">All Stories</span>
              </button>
            ) : null}

            <a
              href="#the-keyword"
              onClick={(e) => {
                e.preventDefault();
                if (isReadingPost) onBackToFeed();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none"
            >
              {/* Google 4-Color Accent Dots */}
              <div className="flex items-center gap-1" aria-hidden="true">
                <span className="w-2.5 h-2.5 rounded-full bg-[#4285F4] animate-pulse" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#EA4335]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#FBBC05]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#34A853]" />
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <span className="text-base sm:text-lg font-bold tracking-tight text-gray-900 dark:text-white leading-tight">
                    Smart Computer
                  </span>
                  <span className="text-gray-300 dark:text-gray-600 font-light text-sm hidden sm:inline">|</span>
                  <span className="text-xs sm:text-sm font-semibold text-blue-600 dark:text-[#38B6FF] tracking-wide uppercase font-mono">
                    The Keyword
                  </span>
                </div>
                <span className="text-[10px] text-gray-500 dark:text-gray-400 block font-mono">
                  Official Editorial, Insights &amp; Updates
                </span>
              </div>
            </a>
          </div>

          {/* Desktop Search & Store Link Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Search Input Bar (Google Keyword Style) */}
            <div className="relative">
              {isSearchOpen ? (
                <div className="flex items-center bg-gray-100 dark:bg-white/10 rounded-full pl-3 pr-2 py-1.5 w-60 sm:w-72 border border-gray-300 dark:border-white/20 shadow-inner">
                  <Search className="w-4 h-4 text-gray-500 dark:text-gray-400 mr-2 flex-shrink-0" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => onSearchChange(e.target.value)}
                    placeholder="Search stories, jobs, guides..."
                    autoFocus
                    className="w-full bg-transparent text-xs text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => onSearchChange('')}
                      className="p-1 text-gray-400 hover:text-gray-600 dark:hover:text-white"
                      title="Clear search"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  )}
                  <button
                    onClick={() => {
                      setIsSearchOpen(false);
                      onSearchChange('');
                    }}
                    className="p-1 ml-1 text-gray-400 hover:text-gray-600 dark:hover:text-white"
                    title="Close search"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setIsSearchOpen(true)}
                  className="flex items-center gap-2 px-3.5 py-1.5 text-xs font-medium text-gray-600 dark:text-gray-300 bg-gray-100/80 dark:bg-white/5 hover:bg-gray-200/80 dark:hover:bg-white/10 rounded-full border border-gray-200 dark:border-white/10 transition-colors"
                  aria-label="Search stories"
                >
                  <Search className="w-3.5 h-3.5 text-blue-600 dark:text-[#38B6FF]" />
                  <span className="hidden md:inline">Search The Keyword...</span>
                </button>
              )}
            </div>

            {/* Link to Main Shop (smartcomputer.shop) */}
            <a
              href={mainShopUrl}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-semibold text-gray-700 dark:text-gray-200 bg-white dark:bg-white/10 border border-gray-300 dark:border-white/20 hover:border-blue-500 dark:hover:border-[#38B6FF] hover:text-blue-600 dark:hover:text-[#38B6FF] rounded-full shadow-sm hover:shadow transition-all"
            >
              <span>Main Shop</span>
              <ExternalLink className="w-3 h-3" />
            </a>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="sm:hidden p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/5 rounded-lg"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="sm:hidden py-3 border-t border-gray-200 dark:border-white/10 space-y-2">
            <div className="text-[11px] font-mono uppercase text-gray-400 tracking-wider px-2">
              Browse Topics
            </div>
            <div className="flex flex-wrap gap-1.5 px-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => {
                    onSelectCategory(cat.id);
                    setIsMobileMenuOpen(false);
                    if (isReadingPost) onBackToFeed();
                  }}
                  className={`text-xs px-3 py-1 rounded-full border transition-all ${
                    selectedCategory === cat.id
                      ? 'bg-blue-600 text-white border-blue-600 font-semibold'
                      : 'bg-gray-100 dark:bg-white/5 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-white/10'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>

            <div className="pt-2 border-t border-gray-200 dark:border-white/10 px-2 flex justify-between items-center">
              <a
                href={mainShopUrl}
                className="text-xs font-medium text-blue-600 dark:text-[#38B6FF] flex items-center gap-1"
              >
                ← Return to Smart Computer Shop
              </a>
              <span className="text-[10px] text-gray-500 font-mono">
                {siteConfig.contact.phone}
              </span>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
