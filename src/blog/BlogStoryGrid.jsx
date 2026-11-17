import React from 'react';
import { TrendingUp, FileText, SearchX } from 'lucide-react';
import BlogStoryCard from './BlogStoryCard';

export default function BlogStoryGrid({
  posts,
  trendingPosts,
  onSelectPost,
  searchQuery,
  onResetSearch
}) {
  if (posts.length === 0) {
    return (
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <div className="max-w-md mx-auto bg-gray-50 dark:bg-white/5 rounded-3xl p-8 border border-gray-200 dark:border-white/10 space-y-4">
          <div className="w-12 h-12 mx-auto rounded-full bg-blue-100 dark:bg-blue-950/60 text-blue-600 dark:text-[#38B6FF] flex items-center justify-center">
            <SearchX className="w-6 h-6" />
          </div>
          <h2 className="text-lg font-bold text-gray-900 dark:text-white">
            No stories found
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
            We couldn't find any articles matching "{searchQuery}". Try searching for terms like "Teletalk", "BPSC", "Passport", or "Training".
          </p>
          <button
            onClick={onResetSearch}
            className="px-4 py-2 text-xs font-semibold text-blue-600 dark:text-[#38B6FF] bg-blue-50 dark:bg-white/10 rounded-full hover:bg-blue-100 dark:hover:bg-white/20 transition-colors"
          >
            Clear Search &amp; View All
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12">
      {/* Grid Layout: Main Stories (8 cols) + Trending Side Panel (4 cols) on large screens */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
        
        {/* Main Stories Column */}
        <div className="lg:col-span-8 space-y-6">
          <div className="flex items-center justify-between border-b border-gray-200 dark:border-white/10 pb-3">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white tracking-tight flex items-center gap-2">
              <FileText className="w-5 h-5 text-blue-600 dark:text-[#38B6FF]" />
              Latest Stories
            </h2>
            <span className="text-xs font-mono text-gray-500 dark:text-gray-400">
              {posts.length} {posts.length === 1 ? 'Story' : 'Stories'}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {posts.map((post) => (
              <BlogStoryCard
                key={post.id}
                post={post}
                onSelectPost={onSelectPost}
              />
            ))}
          </div>
        </div>

        {/* Sidebar: "Trending on The Keyword" (blog.google style numbered ranking) */}
        <aside className="lg:col-span-4 space-y-6">
          <div className="bg-gray-50/70 dark:bg-[#0B1524] rounded-3xl p-6 border border-gray-200/80 dark:border-white/10 shadow-sm sticky top-36 space-y-5">
            <div className="flex items-center gap-2 border-b border-gray-200 dark:border-white/10 pb-3">
              <TrendingUp className="w-4 h-4 text-amber-500" />
              <h3 className="text-base font-bold text-gray-900 dark:text-white tracking-tight">
                Trending on The Keyword
              </h3>
            </div>

            <ol className="space-y-4">
              {trendingPosts.map((post, idx) => (
                <li
                  key={post.id}
                  className="flex items-start gap-3.5 group cursor-pointer"
                  onClick={() => onSelectPost(post.slug)}
                >
                  <span className="flex-shrink-0 text-xl font-extrabold font-mono text-gray-300 dark:text-gray-600 group-hover:text-blue-600 dark:group-hover:text-[#38B6FF] transition-colors w-6">
                    0{idx + 1}
                  </span>
                  <div className="space-y-1">
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-blue-600 dark:text-[#38B6FF] font-mono block">
                      {post.category}
                    </span>
                    <h4 className="text-xs sm:text-sm font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-[#38B6FF] transition-colors line-clamp-2 leading-snug">
                      {post.title}
                    </h4>
                    <span className="text-[10.5px] text-gray-500 dark:text-gray-400 block font-mono">
                      {post.readTime}
                    </span>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </aside>

      </div>
    </section>
  );
}
