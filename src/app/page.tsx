import Navbar from '@/components/shared/Navbar';
import Hero from '@/components/sections/Hero';
import BlogCard from '@/components/shared/BlogCard';
import { MOCK_POSTS } from '@/lib/mock-data';
import { ArrowRight, Mail, Zap, TrendingUp, Cpu } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  const featuredPosts = MOCK_POSTS.slice(0, 3);
  const trendingPosts = MOCK_POSTS.slice(0, 4);

  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      
      {/* Featured Articles Section */}
      <section className="max-w-[1280px] mx-auto px-6 py-24">
        <div className="flex items-end justify-between mb-16">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Zap size={16} className="text-[#FF6A00]" />
              <span className="text-[10px] font-bold text-[#FF6A00] uppercase tracking-widest">Premium Content</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
              Featured <span className="text-gradient">Insights</span>
            </h2>
            <p className="text-text-secondary max-w-xl">
              Deep dives into the technologies shaping our future, hand-picked by our editors for maximum impact.
            </p>
          </div>
          <Link href="/blog" className="hidden md:flex items-center gap-2 text-sm font-bold text-white hover:text-[#FF6A00] transition-colors group">
            View All Articles
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {featuredPosts.map((post) => (
            <BlogCard key={post.slug} {...post} />
          ))}
        </div>
      </section>

      {/* Trending & Newsletter Section */}
      <section className="bg-bg-secondary py-24 border-y border-white/5 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FF6A00]/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-ai-blue/5 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/4" />

        <div className="max-w-[1280px] mx-auto px-6 grid lg:grid-cols-[1fr_400px] gap-20">
          {/* Trending List */}
          <div>
            <div className="flex items-center gap-3 mb-12">
              <TrendingUp size={24} className="text-ai-blue" />
              <h2 className="text-3xl font-bold text-white">Trending Now</h2>
            </div>
            
            <div className="space-y-8">
              {trendingPosts.map((post, index) => (
                <div key={post.slug} className="flex gap-6 group cursor-pointer">
                  <span className="text-5xl font-black text-white/5 group-hover:text-[#FF6A00]/20 transition-colors">
                    0{index + 1}
                  </span>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-[10px] font-bold text-ai-blue uppercase tracking-widest">{post.category}</span>
                      <span className="text-[10px] text-text-secondary uppercase">{post.readTime}</span>
                    </div>
                    <h3 className="text-lg font-bold text-white group-hover:text-[#FF6A00] transition-colors leading-snug">
                      {post.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Newsletter Card */}
          <div className="relative">
            <div className="p-8 rounded-3xl glass-morphism border-[#FF6A00]/20 relative z-10 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#FF6A00] to-transparent opacity-10 rounded-bl-full" />
              
              <div className="w-12 h-12 rounded-xl bg-[#FF6A00]/10 border border-[#FF6A00]/20 flex items-center justify-center mb-6">
                <Mail size={24} className="text-[#FF6A00]" />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4">Stay ahead of the curve</h3>
              <p className="text-text-secondary text-sm mb-8 leading-relaxed">
                Join 25,000+ developers and tech leaders receiving our weekly curated insights on AI, SEO, and the future of tech.
              </p>
              
              <div className="space-y-4">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="w-full px-5 py-4 rounded-xl bg-bg-primary border border-white/10 text-white text-sm focus:outline-none focus:border-[#FF6A00] transition-colors"
                />
                <button className="w-full py-4 bg-gradient-to-r from-[#FF6A00] to-[#FF3D00] text-white font-bold rounded-xl shadow-[0_10px_30px_rgba(255,106,0,0.2)] hover:scale-[1.02] transition-transform">
                  Subscribe to Newsletter
                </button>
              </div>
              
              <p className="text-[10px] text-text-secondary text-center mt-6 uppercase tracking-widest opacity-50">
                No spam. Only high-signal content.
              </p>
            </div>
            
            {/* Glow behind newsletter */}
            <div className="absolute inset-0 bg-[#FF6A00]/10 blur-[60px] -z-10 rounded-3xl" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="pt-24 pb-12 bg-bg-primary relative overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-4 gap-12 mb-20">
            <div className="col-span-2">
              <Link href="/" className="flex items-center gap-2 mb-8 group">
                <div className="w-10 h-10 rounded bg-gradient-to-br from-[#FF6A00] to-[#FF3D00] flex items-center justify-center font-bold text-white shadow-[0_0_20px_rgba(255,106,0,0.4)]">
                  T
                </div>
                <span className="text-2xl font-bold tracking-tight text-white group-hover:text-[#FF6A00] transition-colors">
                  Techmarsal
                </span>
              </Link>
              <p className="text-text-secondary max-w-sm mb-10 leading-relaxed">
                A world-class, mobile-first blog platform built for the future of tech journalism. Premium insights, AI-powered SEO, and developer-friendly guides.
              </p>
              <div className="flex items-center gap-6">
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-white hover:bg-[#FF6A00]/10 hover:border-[#FF6A00]/20 transition-all cursor-pointer">
                  <Cpu size={18} />
                </div>
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-white hover:bg-ai-blue/10 hover:border-ai-blue/20 transition-all cursor-pointer">
                  <TrendingUp size={18} />
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">Platform</h4>
              <ul className="space-y-4 text-sm text-text-secondary">
                <li><a href="#" className="hover:text-[#FF6A00] transition-colors">Explore Articles</a></li>
                <li><a href="#" className="hover:text-[#FF6A00] transition-colors">Trending Now</a></li>
                <li><a href="#" className="hover:text-[#FF6A00] transition-colors">Popular Authors</a></li>
                <li><a href="#" className="hover:text-[#FF6A00] transition-colors">Newsletter</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">Tech Stack</h4>
              <ul className="space-y-4 text-sm text-text-secondary">
                <li><a href="#" className="hover:text-ai-blue transition-colors">Artificial Intelligence</a></li>
                <li><a href="#" className="hover:text-ai-blue transition-colors">SEO Strategies</a></li>
                <li><a href="#" className="hover:text-ai-blue transition-colors">Full Stack Dev</a></li>
                <li><a href="#" className="hover:text-ai-blue transition-colors">SaaS Growth</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
            <p className="text-[10px] font-bold text-text-secondary uppercase tracking-[0.2em]">
              © 2024 Techmarsal. Built for the next generation of builders.
            </p>
            <div className="flex items-center gap-10">
              <a href="#" className="text-[10px] font-bold text-text-secondary hover:text-white uppercase tracking-[0.2em] transition-colors">Privacy</a>
              <a href="#" className="text-[10px] font-bold text-text-secondary hover:text-white uppercase tracking-[0.2em] transition-colors">Terms</a>
              <a href="#" className="text-[10px] font-bold text-text-secondary hover:text-white uppercase tracking-[0.2em] transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
