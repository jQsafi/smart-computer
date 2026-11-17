import React from 'react';
import { ArrowRight, Clock, Calendar, Sparkles } from 'lucide-react';

export default function BlogHero({ post, onSelectPost }) {
  if (!post) return null;

  return (
    <section className="py-6 sm:py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <article 
        className="group relative bg-white dark:bg-[#0B1524] rounded-3xl border border-gray-200/90 dark:border-white/10 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 p-6 sm:p-8 lg:p-10"
        style={{ containerType: 'inline-size' }}
      >
        {/* Left Column: Metadata, Headline, Excerpt, CTA */}
        <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            {/* Top Badge: Featured Story & Category */}
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold tracking-wide uppercase font-mono bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
                <Sparkles className="w-3 h-3 text-blue-600 dark:text-[#38B6FF]" />
                Featured Story
              </span>
              <span className={`inline-flex items-center px-3 py-1 rounded-full text-[11px] font-semibold border ${post.categoryTheme.pillBg} ${post.categoryTheme.pillText} ${post.categoryTheme.pillBorder}`}>
                {post.category}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight leading-[1.2] group-hover:text-blue-600 dark:group-hover:text-[#38B6FF] transition-colors">
              <button
                onClick={() => onSelectPost(post.slug)}
                className="text-left focus:outline-none focus:underline"
              >
                {post.title}
              </button>
            </h1>

            {/* Subtitle / Excerpt */}
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed font-normal">
              {post.subtitle || post.excerpt}
            </p>
          </div>

          {/* Author Byline & Read Story Action */}
          <div className="pt-4 border-t border-gray-100 dark:border-white/10 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-10 h-10 rounded-full object-cover ring-2 ring-gray-100 dark:ring-white/10"
              />
              <div>
                <div className="text-xs font-bold text-gray-900 dark:text-white">
                  {post.author.name}
                </div>
                <div className="text-[11px] text-gray-500 dark:text-gray-400 flex items-center gap-2">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {post.publishedDate}
                  </span>
                  <span>·</span>
                  <span className="flex items-center gap-1 font-mono">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </span>
                </div>
              </div>
            </div>

            <button
              onClick={() => onSelectPost(post.slug)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500 shadow-md hover:shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              <span>Read Story</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Right Column: Hero High-Def Image */}
        <div className="lg:col-span-5 flex items-center">
          <div 
            onClick={() => onSelectPost(post.slug)}
            className="w-full h-full min-h-[260px] sm:min-h-[320px] rounded-2xl overflow-hidden cursor-pointer relative bg-gray-100 dark:bg-white/5"
          >
            <img
              src={post.featuredImage}
              alt={post.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              style={{ aspectRatio: '16/10' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        </div>
      </article>
    </section>
  );
}
