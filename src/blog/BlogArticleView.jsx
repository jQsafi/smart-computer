import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, 
  Calendar, 
  Clock, 
  Share2, 
  Check, 
  Bookmark, 
  MessageCircle, 
  Sparkles,
  ChevronRight,
  ExternalLink
} from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import BlogStoryCard from './BlogStoryCard';

export default function BlogArticleView({ post, allPosts, onBack, onSelectPost }) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [copied, setCopied] = useState(false);

  // Monitor reading scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, currentProgress)));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top when post changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [post?.slug]);

  if (!post) return null;

  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';
  const encodedTitle = encodeURIComponent(post.title);
  const encodedUrl = encodeURIComponent(currentUrl);

  const whatsappShareUrl = `https://wa.me/?text=${encodedTitle}%20-%20Read%20more:%20${encodedUrl}`;
  const whatsappInquiryUrl = `${siteConfig.contact.whatsappLink}?text=${encodeURIComponent(`Hello Shafayat! I just read your article "${post.title}" on The Keyword and would like to ask a question.`)}`;

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(currentUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch (err) {
      console.warn('Copy failed', err);
    }
  };

  // Find 3 related stories
  const relatedPosts = allPosts
    .filter((p) => p.id !== post.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-white dark:bg-[#070E18] text-gray-900 dark:text-gray-100 transition-colors">
      
      {/* Top Reading Progress Bar (Google style) */}
      <div 
        className="fixed top-0 left-0 right-0 h-1 bg-blue-600 z-50 origin-left transition-all duration-75"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8 sm:space-y-12">
        
        {/* Navigation Breadcrumbs & Back Button */}
        <nav aria-label="Breadcrumb" className="flex items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-1.5 text-gray-500 dark:text-gray-400 font-mono">
            <button
              onClick={onBack}
              className="hover:text-blue-600 dark:hover:text-[#38B6FF] flex items-center gap-1"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>The Keyword</span>
            </button>
            <ChevronRight className="w-3 h-3 text-gray-400" />
            <span className="text-gray-700 dark:text-gray-300 font-semibold">{post.category}</span>
          </div>

          <button
            onClick={onBack}
            className="text-xs font-semibold text-blue-600 dark:text-[#38B6FF] hover:underline"
          >
            ← All Stories
          </button>
        </nav>

        {/* Article Header (Google The Keyword Layout) */}
        <header className="space-y-6">
          {/* Category Chip & Date */}
          <div className="flex flex-wrap items-center gap-3">
            <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border ${post.categoryTheme.pillBg} ${post.categoryTheme.pillText} ${post.categoryTheme.pillBorder}`}>
              {post.category}
            </span>
            <span className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1 font-mono">
              <Calendar className="w-3.5 h-3.5" />
              {post.publishedDate}
            </span>
            <span className="text-xs text-gray-400">·</span>
            <span className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1 font-mono">
              <Clock className="w-3.5 h-3.5" />
              {post.readTime}
            </span>
          </div>

          {/* Big Editorial Headline */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight leading-[1.15]">
            {post.title}
          </h1>

          {/* Subtitle / Lead Paragraph */}
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed font-normal">
            {post.subtitle}
          </p>

          {/* Author Byline & Social Share Bar */}
          <div className="pt-6 border-t border-b border-gray-200 dark:border-white/10 py-4 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-11 h-11 rounded-full object-cover ring-2 ring-blue-500/20"
              />
              <div>
                <div className="text-sm font-bold text-gray-900 dark:text-white">
                  {post.author.name}
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  {post.author.role} · Smart Computer
                </div>
              </div>
            </div>

            {/* Social Share Buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={handleCopyLink}
                className="p-2 rounded-full border border-gray-200 dark:border-white/10 hover:bg-gray-100 dark:hover:bg-white/5 text-gray-600 dark:text-gray-300 transition-colors relative"
                title="Copy story link"
                aria-label="Copy link"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Share2 className="w-4 h-4" />}
                {copied && (
                  <span className="absolute -bottom-7 right-0 text-[10px] bg-emerald-600 text-white px-2 py-0.5 rounded shadow font-mono">
                    Copied!
                  </span>
                )}
              </button>

              <a
                href={whatsappShareUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-emerald-300 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-100 dark:hover:bg-emerald-950/70 transition-colors"
                title="Share via WhatsApp"
                aria-label="Share via WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>
        </header>

        {/* Featured Banner Image */}
        <figure className="space-y-2">
          <div className="rounded-3xl overflow-hidden shadow-lg border border-gray-200 dark:border-white/10 bg-gray-100 dark:bg-white/5">
            <img
              src={post.featuredImage}
              alt={post.title}
              className="w-full object-cover max-h-[500px]"
              style={{ aspectRatio: '16/9' }}
            />
          </div>
          {post.imageCaption && (
            <figcaption className="text-xs text-center text-gray-500 dark:text-gray-400 italic font-serif">
              {post.imageCaption}
            </figcaption>
          )}
        </figure>

        {/* Signature Google The Keyword "At a glance" Key Takeaways Callout Box */}
        {post.keyTakeaways && post.keyTakeaways.length > 0 && (
          <aside className="bg-blue-50/70 dark:bg-[#0B1524] rounded-2xl p-6 sm:p-7 border-l-4 border-blue-600 dark:border-[#38B6FF] border-y border-r border-blue-100 dark:border-white/10 shadow-sm space-y-3">
            <div className="flex items-center gap-2 text-blue-700 dark:text-[#38B6FF] font-bold text-sm tracking-wide uppercase font-mono">
              <Sparkles className="w-4 h-4" />
              <span>At a glance</span>
            </div>
            <ul className="space-y-2.5">
              {post.keyTakeaways.map((takeaway, index) => (
                <li key={index} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700 dark:text-gray-200 leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-[#38B6FF] mt-2 flex-shrink-0" />
                  <span>{takeaway}</span>
                </li>
              ))}
            </ul>
          </aside>
        )}

        {/* Full Article Content */}
        <div className="prose dark:prose-invert max-w-none text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed space-y-8">
          {/* Introduction */}
          <p className="text-base sm:text-lg leading-relaxed text-gray-800 dark:text-gray-200 font-normal">
            {post.content.introduction}
          </p>

          {/* Content Sections */}
          {post.content.sections?.map((section, sIdx) => (
            <div key={sIdx} className="space-y-4 pt-4">
              {section.heading && (
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white tracking-tight">
                  {section.heading}
                </h2>
              )}

              {section.body && (
                <p className="leading-relaxed">
                  {section.body}
                </p>
              )}

              {section.quote && (
                <blockquote className="my-6 pl-5 border-l-4 border-blue-600 dark:border-[#38B6FF] italic text-base sm:text-lg text-gray-800 dark:text-gray-200 bg-gray-50 dark:bg-white/5 py-3 pr-4 rounded-r-lg font-serif">
                  "{section.quote}"
                </blockquote>
              )}

              {section.list && (
                <ul className="space-y-2.5 pl-2">
                  {section.list.map((item, lIdx) => (
                    <li key={lIdx} className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-[#38B6FF] mt-2 flex-shrink-0" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        {/* Post Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="pt-8 border-t border-gray-200 dark:border-white/10 flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono text-gray-400 mr-2">Tags:</span>
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-mono px-3 py-1 rounded-full bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-white/10"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}

        {/* Shop Consultation & WhatsApp Help Card */}
        <section className="bg-gradient-to-r from-blue-900 to-[#0B192C] text-white rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden space-y-4">
          <div className="relative z-10 space-y-2">
            <span className="text-[11px] font-mono tracking-widest uppercase text-[#38B6FF] font-bold block">
              Direct Service &amp; Consultation
            </span>
            <h3 className="text-lg sm:text-xl font-bold tracking-tight">
              Have questions regarding this circular, course, or service?
            </h3>
            <p className="text-xs sm:text-sm text-blue-100/90 max-w-xl">
              Visit our physical store beside School &amp; College Canteen Gate, or reach out directly to Shafayat on WhatsApp for guidance.
            </p>
          </div>
          <div className="relative z-10 pt-2 flex flex-wrap items-center gap-3">
            <a
              href={whatsappInquiryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500 hover:bg-emerald-600 text-white shadow-md transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </a>
            <a
              href={`tel:${siteConfig.contact.rawPhone}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all"
            >
              <span>Call: {siteConfig.contact.phone}</span>
            </a>
          </div>
        </section>

        {/* "Related Stories" 3-Card Grid */}
        <section className="pt-12 border-t border-gray-200 dark:border-white/10 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white tracking-tight">
              Related Stories on The Keyword
            </h3>
            <button
              onClick={onBack}
              className="text-xs font-semibold text-blue-600 dark:text-[#38B6FF] hover:underline"
            >
              View all stories →
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {relatedPosts.map((relatedPost) => (
              <BlogStoryCard
                key={relatedPost.id}
                post={relatedPost}
                onSelectPost={onSelectPost}
              />
            ))}
          </div>
        </section>

      </article>
    </div>
  );
}
