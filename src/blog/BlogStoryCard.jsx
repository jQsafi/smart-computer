import React, { useState } from 'react';
import { Calendar, Clock, Share2, Check } from 'lucide-react';

export default function BlogStoryCard({ post, onSelectPost }) {
  const [copied, setCopied] = useState(false);

  const handleShare = async (e) => {
    e.stopPropagation();
    const url = `${window.location.origin}/blog.html#post=${post.slug}`;
    if (navigator.share) {
      try {
        await navigator.share({
          title: post.title,
          text: post.excerpt,
          url: url,
        });
        return;
      } catch (err) {
        // Fallback to clipboard
      }
    }

    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch (err) {
      console.warn('Clipboard write failed:', err);
    }
  };

  return (
    <article 
      className="group flex flex-col justify-between bg-white dark:bg-[#0B1524] rounded-2xl border border-gray-200/80 dark:border-white/10 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
      style={{ containerType: 'inline-size' }}
    >
      {/* Media: High-definition image with aspect-ratio and object-fit: cover */}
      <div 
        onClick={() => onSelectPost(post.slug)}
        className="w-full cursor-pointer overflow-hidden relative bg-gray-100 dark:bg-white/5"
      >
        <img
          src={post.featuredImage}
          alt={post.title}
          loading="lazy"
          className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
          style={{ aspectRatio: '16/10' }}
        />
        {/* Subtle category overlay badge */}
        <div className="absolute top-3 left-3">
          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[10.5px] font-semibold border backdrop-blur-md shadow-sm ${post.categoryTheme.pillBg} ${post.categoryTheme.pillText} ${post.categoryTheme.pillBorder}`}>
            {post.category}
          </span>
        </div>
      </div>

      {/* Header & Content */}
      <div className="p-5 sm:p-6 flex-grow flex flex-col justify-between space-y-4">
        <header className="space-y-2">
          {/* Published Date & Reading Time */}
          <div className="flex items-center gap-2 text-[11px] text-gray-500 dark:text-gray-400">
            <span className="flex items-center gap-1">
              <Calendar className="w-3 h-3 text-gray-400" />
              {post.publishedDate}
            </span>
            <span>·</span>
            <span className="flex items-center gap-1 font-mono">
              <Clock className="w-3 h-3 text-gray-400" />
              {post.readTime}
            </span>
          </div>

          {/* Heading with clickable action */}
          <h2 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white leading-snug group-hover:text-blue-600 dark:group-hover:text-[#38B6FF] transition-colors line-clamp-2">
            <button
              onClick={() => onSelectPost(post.slug)}
              className="text-left focus:outline-none focus:underline"
            >
              {post.title}
            </button>
          </h2>

          {/* Excerpt */}
          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed line-clamp-3">
            {post.excerpt}
          </p>
        </header>

        {/* Footer: Author byline & Share Button */}
        <footer className="pt-4 border-t border-gray-100 dark:border-white/10 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2.5">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="w-7 h-7 rounded-full object-cover ring-1 ring-gray-200 dark:ring-white/20"
            />
            <div className="text-[11.5px] font-semibold text-gray-800 dark:text-gray-200 truncate max-w-[120px] sm:max-w-[150px]">
              {post.author.name}
            </div>
          </div>

          {/* Quick Share with Feedback */}
          <button
            onClick={handleShare}
            className={`p-1.5 rounded-full transition-colors flex items-center gap-1 text-[11px] ${
              copied
                ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950/80 dark:text-emerald-300'
                : 'text-gray-400 hover:text-gray-700 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5'
            }`}
            title="Share story link"
            aria-label={`Share ${post.title}`}
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5" />
                <span className="font-mono text-[10px]">Copied</span>
              </>
            ) : (
              <Share2 className="w-3.5 h-3.5" />
            )}
          </button>
        </footer>
      </div>
    </article>
  );
}
