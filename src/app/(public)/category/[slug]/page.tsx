import React from 'react';
import Navbar from '@/components/shared/Navbar';
import BlogCard from '@/components/shared/BlogCard';
import { MOCK_POSTS } from '@/lib/mock-data';
import { 
  Zap, 
  MessageSquare, 
  ChevronRight, 
  Search,
  Sparkles,
  TrendingUp,
  ArrowRight
} from 'lucide-react';
import Link from 'next/link';

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const categoryName = params.slug.toUpperCase().replace(/-/g, ' ');
  const categoryPosts = MOCK_POSTS.filter(p => 
    p.category.toLowerCase().includes(params.slug.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-bg-primary">
      <Navbar />

      {/* Category Hero */}
      <section className="pt-[140px] pb-20 border-b border-white/5 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-ai-blue/5 blur-[120px] rounded-full -translate-y-1/2 -translate-x-1/3" />
        
        <div className="max-w-[1280px] mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row gap-12 items-end justify-between">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles size={16} className="text-ai-blue" />
                <span className="text-[10px] font-bold text-ai-blue uppercase tracking-[0.3em]">Knowledge Base</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">
                {categoryName}
              </h1>
              <p className="text-text-secondary text-lg leading-relaxed">
                Expert insights, tutorials, and strategic deep dives for {categoryName}. Stay ahead of the curve with our curated tech resources.
              </p>
            </div>
            
            <div className="hidden md:block pb-2">
              <div className="p-6 rounded-2xl glass-morphism border-white/5 text-center">
                <p className="text-2xl font-black text-white">{categoryPosts.length}</p>
                <p className="text-[10px] font-bold text-text-secondary uppercase tracking-widest mt-1">Articles Published</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured in Category */}
      {categoryPosts.length > 0 && (
        <section className="max-w-[1280px] mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="aspect-[16/9] rounded-3xl overflow-hidden border border-white/5 shadow-2xl">
              <img src={categoryPosts[0].image} alt="Featured" className="w-full h-full object-cover" />
            </div>
            <div>
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp size={18} className="text-[#FF6A00]" />
                <span className="text-[10px] font-bold text-[#FF6A00] uppercase tracking-widest">Editor's Pick</span>
              </div>
              <h2 className="text-3xl font-black text-white mb-6 leading-tight hover:text-[#FF6A00] transition-colors cursor-pointer">
                {categoryPosts[0].title}
              </h2>
              <p className="text-text-secondary mb-8 leading-relaxed">
                {categoryPosts[0].excerpt}
              </p>
              <Link href={`/blog/${categoryPosts[0].slug}`} className="px-8 py-4 bg-white/5 border border-white/10 rounded-xl text-sm font-bold text-white hover:bg-white/10 transition-all inline-flex items-center gap-3">
                Read Full Article
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Article Grid */}
      <section className="bg-bg-secondary py-24">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-2xl font-bold text-white uppercase tracking-tight">Recent in {categoryName}</h2>
            <div className="flex items-center gap-2">
              <div className="h-[1px] w-12 bg-white/10" />
              <span className="text-[10px] font-bold text-text-secondary uppercase tracking-widest">Latest Updates</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {categoryPosts.map((post) => (
              <BlogCard key={post.slug} {...post} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ & Related Content */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-[1280px] mx-auto px-6 grid md:grid-cols-[1fr_400px] gap-20">
          <div>
            <h2 className="text-3xl font-bold text-white mb-10 flex items-center gap-4">
              <MessageSquare size={32} className="text-[#FF6A00]" />
              Common Questions
            </h2>
            <div className="space-y-6">
              {[
                { q: `What is the future of ${categoryName}?`, a: "The landscape is shifting towards more specialized, high-fidelity content optimized for both humans and AI models." },
                { q: `How often is ${categoryName} content updated?`, a: "We publish deep-dives and breaking updates at least twice a week to ensure you stay current." }
              ].map((faq, i) => (
                <div key={i} className="p-8 rounded-2xl glass-morphism border-white/5 group hover:border-[#FF6A00]/30 transition-all">
                  <h4 className="text-lg font-bold text-white mb-3 group-hover:text-[#FF6A00] transition-colors">{faq.q}</h4>
                  <p className="text-sm text-text-secondary leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>

          <aside className="space-y-12">
            <div className="p-8 rounded-3xl bg-bg-secondary border border-white/5">
              <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-8">Related Categories</h3>
              <div className="space-y-4">
                {['AI & SEO', 'Development', 'Startup Growth', 'Tooling'].map((cat) => (
                  <Link key={cat} href="#" className="flex items-center justify-between group p-3 rounded-xl hover:bg-white/5 transition-all">
                    <span className="text-sm text-text-secondary group-hover:text-white transition-colors">{cat}</span>
                    <ChevronRight size={16} className="text-text-secondary opacity-0 group-hover:opacity-100 transition-all" />
                  </Link>
                ))}
              </div>
            </div>

            <div className="p-1 rounded-3xl bg-gradient-to-br from-[#FF6A00] to-ai-blue">
              <div className="bg-bg-primary p-8 rounded-[22px] text-center">
                <Zap size={32} className="text-[#FF6A00] mx-auto mb-6" />
                <h3 className="text-xl font-bold text-white mb-4">Level Up in {categoryName}</h3>
                <p className="text-xs text-text-secondary mb-8 leading-relaxed">Join our private community of builders and get exclusive data reports.</p>
                <button className="w-full py-3 bg-white text-black font-bold rounded-xl hover:bg-[#FF6A00] hover:text-white transition-all">Join Community</button>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
