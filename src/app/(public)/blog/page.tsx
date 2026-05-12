'use client';

import React, { useState } from 'react';
import Navbar from '@/components/shared/Navbar';
import BlogCard from '@/components/shared/BlogCard';
import { MOCK_POSTS } from '@/lib/mock-data';
import { Search, SlidersHorizontal, ChevronDown, LayoutGrid, List as ListIcon } from 'lucide-react';
import { clsx } from 'clsx';

const CATEGORIES = ['All Articles', 'AI & SEO', 'Development', 'Startups', 'Tools'];

export default function BlogListingPage() {
  const [activeCategory, setActiveCategory] = useState('All Articles');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = MOCK_POSTS.filter(post => {
    const matchesCategory = activeCategory === 'All Articles' || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-bg-primary">
      <Navbar />

      {/* Header Section */}
      <section className="pt-[140px] pb-16 border-b border-white/5">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="max-w-2xl mb-12">
            <h1 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
              Explore <span className="text-gradient">Knowledge</span>
            </h1>
            <p className="text-text-secondary text-lg leading-relaxed">
              Discover the latest insights, tutorials, and strategies from our world-class contributors. Filtered for high-signal content.
            </p>
          </div>

          {/* Filters & Search Bar */}
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between p-2 rounded-[24px] glass-morphism border-white/5">
            <div className="flex flex-wrap gap-2 p-2">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={clsx(
                    "px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-widest transition-all",
                    activeCategory === cat 
                      ? "bg-[#FF6A00] text-white shadow-[0_5px_15px_rgba(255,106,0,0.3)]" 
                      : "text-text-secondary hover:text-white hover:bg-white/5"
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-4 pr-4 w-full md:w-auto">
              <div className="relative flex-grow md:w-[300px]">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary" size={18} />
                <input 
                  type="text" 
                  placeholder="Search articles..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-6 py-3 rounded-xl bg-bg-primary border border-white/5 text-sm focus:outline-none focus:border-[#FF6A00] transition-colors"
                />
              </div>
              <button className="p-3 rounded-xl bg-white/5 border border-white/10 text-text-secondary hover:text-white">
                <SlidersHorizontal size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="max-w-[1280px] mx-auto px-6 py-20">
        <div className="flex items-center justify-between mb-12">
          <p className="text-xs font-bold text-text-secondary uppercase tracking-[0.2em]">
            Showing <span className="text-white">{filteredPosts.length}</span> Results
          </p>
          
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-xs font-bold text-text-secondary uppercase tracking-widest cursor-pointer hover:text-white transition-colors" suppressHydrationWarning>
              Sort By: Newest
              <ChevronDown size={14} />
            </div>
            <div className="h-4 w-[1px] bg-white/10" />
            <div className="flex items-center gap-2">
              <button className="p-2 text-[#FF6A00] bg-[#FF6A00]/10 rounded-lg">
                <LayoutGrid size={18} />
              </button>
              <button className="p-2 text-text-secondary hover:text-white">
                <ListIcon size={18} />
              </button>
            </div>
          </div>
        </div>

        {filteredPosts.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredPosts.map((post) => (
              <BlogCard key={post.slug} {...post} />
            ))}
          </div>
        ) : (
          <div className="py-40 text-center">
            <div className="w-20 h-20 rounded-full bg-white/5 border border-white/5 flex items-center justify-center mx-auto mb-8 opacity-20">
              <Search size={40} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">No articles found</h3>
            <p className="text-text-secondary">Try adjusting your filters or search query.</p>
          </div>
        )}

        {/* Pagination Placeholder */}
        {filteredPosts.length > 0 && (
          <div className="mt-20 flex justify-center items-center gap-4">
            <button className="px-6 py-3 rounded-xl border border-white/10 text-sm font-bold text-text-secondary hover:text-white hover:border-white/20 disabled:opacity-30" disabled>Previous</button>
            <div className="flex gap-2">
              {[1, 2, 3].map(n => (
                <button key={n} className={clsx("w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold transition-all", n === 1 ? "bg-[#FF6A00] text-white" : "bg-white/5 text-text-secondary hover:text-white")}>{n}</button>
              ))}
            </div>
            <button className="px-6 py-3 rounded-xl border border-white/10 text-sm font-bold text-text-secondary hover:text-white hover:border-white/20">Next</button>
          </div>
        )}
      </section>

      {/* Newsletter Bottom Section */}
      <section className="bg-bg-secondary py-24 border-t border-white/5">
        <div className="max-w-[1280px] mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Never miss a future-shifting update</h2>
          <p className="text-text-secondary max-w-xl mx-auto mb-10 leading-relaxed">
            Get our best technical articles and AI strategies delivered directly to your inbox every Tuesday. No fluff, just signal.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input type="email" placeholder="Email address" className="flex-grow px-6 py-4 rounded-xl bg-bg-primary border border-white/10 text-white focus:outline-none focus:border-[#FF6A00]" />
            <button className="px-8 py-4 bg-[#FF6A00] text-white font-bold rounded-xl hover:bg-[#FF3D00] transition-all">Subscribe</button>
          </div>
        </div>
      </section>
    </main>
  );
}
