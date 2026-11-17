import React, { useState, useEffect, useMemo } from 'react';
import { BLOG_CATEGORIES, BLOG_POSTS } from '../data/blogData';
import BlogHeader from './BlogHeader';
import BlogCategoryFilter from './BlogCategoryFilter';
import BlogHero from './BlogHero';
import BlogStoryGrid from './BlogStoryGrid';
import BlogArticleView from './BlogArticleView';
import BlogNewsletter from './BlogNewsletter';
import BlogFooter from './BlogFooter';

export default function BlogApp() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activePostSlug, setActivePostSlug] = useState(null);

  // Parse URL hash on mount and on popstate (e.g. #post=teletalk-job-application-mistakes-guide)
  useEffect(() => {
    const handleLocationChange = () => {
      const hash = window.location.hash;
      const params = new URLSearchParams(window.location.search);
      
      const postSlugFromParam = params.get('post');
      if (postSlugFromParam) {
        setActivePostSlug(postSlugFromParam);
        return;
      }

      if (hash.startsWith('#post=')) {
        const slug = hash.replace('#post=', '');
        setActivePostSlug(slug);
        return;
      }

      if (hash.startsWith('#category=')) {
        const cat = hash.replace('#category=', '');
        setSelectedCategory(cat);
        setActivePostSlug(null);
        return;
      }

      // If just #blog or empty hash
      setActivePostSlug(null);
    };

    handleLocationChange();
    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('hashchange', handleLocationChange);
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
    };
  }, []);

  // Update URL hash when selecting a post
  const handleSelectPost = (slug) => {
    setActivePostSlug(slug);
    window.location.hash = `#post=${slug}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Dual dataLayer push for Google Analytics / GTM
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({
        event: 'blog_article_view',
        article_slug: slug,
        article_title: BLOG_POSTS.find(p => p.slug === slug)?.title
      });
    }
  };

  const handleBackToFeed = () => {
    setActivePostSlug(null);
    window.location.hash = selectedCategory !== 'all' ? `#category=${selectedCategory}` : '#the-keyword';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectCategory = (categoryId) => {
    setSelectedCategory(categoryId);
    setActivePostSlug(null);
    if (categoryId === 'all') {
      window.location.hash = '#the-keyword';
    } else {
      window.location.hash = `#category=${categoryId}`;
    }
  };

  // Find currently open post object
  const activePost = useMemo(() => {
    if (!activePostSlug) return null;
    return BLOG_POSTS.find((p) => p.slug === activePostSlug || p.id === activePostSlug);
  }, [activePostSlug]);

  // Synchronize document.title dynamically
  useEffect(() => {
    if (activePost) {
      document.title = `${activePost.title} — The Keyword | Smart Computer`;
    } else {
      document.title = "The Keyword — Smart Computer & Stationary Official Blog";
    }
  }, [activePost]);

  // Lead featured story (for hero)
  const featuredPost = useMemo(() => {
    return BLOG_POSTS.find((p) => p.featured) || BLOG_POSTS[0];
  }, []);

  // Filter posts based on category and search query
  const filteredPosts = useMemo(() => {
    return BLOG_POSTS.filter((post) => {
      const matchesCategory =
        selectedCategory === 'all' || post.categoryId === selectedCategory;

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        post.title.toLowerCase().includes(q) ||
        post.subtitle.toLowerCase().includes(q) ||
        post.excerpt.toLowerCase().includes(q) ||
        post.tags.some((t) => t.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Trending stories
  const trendingPosts = useMemo(() => {
    return [...BLOG_POSTS]
      .filter((p) => p.trending)
      .sort((a, b) => (a.trendingRank || 99) - (b.trendingRank || 99));
  }, []);

  return (
    <div id="the-keyword" className="min-h-screen flex flex-col bg-white dark:bg-[#060D17] text-gray-900 dark:text-gray-100 font-sans selection:bg-blue-600 selection:text-white">
      
      {/* Top Google Keyword Navigation */}
      <BlogHeader
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        selectedCategory={selectedCategory}
        onSelectCategory={handleSelectCategory}
        categories={BLOG_CATEGORIES}
        isReadingPost={!!activePost}
        onBackToFeed={handleBackToFeed}
      />

      {/* Main Content Area */}
      <main className="flex-grow">
        {activePost ? (
          /* Reader View: Single Article */
          <BlogArticleView
            post={activePost}
            allPosts={BLOG_POSTS}
            onBack={handleBackToFeed}
            onSelectPost={handleSelectPost}
          />
        ) : (
          /* Feed View: Category Filter + Hero + Story Grid + Newsletter */
          <>
            {/* Category Ribbon */}
            <BlogCategoryFilter
              categories={BLOG_CATEGORIES}
              selectedCategory={selectedCategory}
              onSelectCategory={handleSelectCategory}
              totalCount={BLOG_POSTS.length}
            />

            {/* Hero Story: Shown when no search query and viewing "all" stories */}
            {!searchQuery && selectedCategory === 'all' && (
              <BlogHero
                post={featuredPost}
                onSelectPost={handleSelectPost}
              />
            )}

            {/* Story Grid & Trending Sidebar */}
            <BlogStoryGrid
              posts={filteredPosts}
              trendingPosts={trendingPosts}
              onSelectPost={handleSelectPost}
              searchQuery={searchQuery}
              onResetSearch={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
            />

            {/* Newsletter Subscription */}
            <BlogNewsletter />
          </>
        )}
      </main>

      {/* Footer */}
      <BlogFooter onSelectCategory={handleSelectCategory} />
    </div>
  );
}
