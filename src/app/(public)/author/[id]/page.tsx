import React from 'react';
import Navbar from '@/components/shared/Navbar';
import BlogCard from '@/components/shared/BlogCard';
import { MOCK_POSTS } from '@/lib/mock-data';
import { 
  Share2, 
  Globe, 
  ExternalLink, 
  Award, 
  FileText, 
  Calendar,
  Briefcase,
  ChevronRight,
  Cpu,
  TrendingUp,
  Zap
} from 'lucide-react';
import Link from 'next/link';

export default function AuthorProfilePage({ params }: { params: { id: string } }) {
  // Finding posts by this author
  const authorId = params?.id || '';
  const decodedId = typeof authorId === 'string' ? decodeURIComponent(authorId) : '';
  const authorPosts = MOCK_POSTS.filter(p => p.author.id.includes('ajith'));
  const isAjith = decodedId.includes('ajith');
  const author = authorPosts[0]?.author || { name: "Ajitharunai", id: "ajith-kumar", image: "https://www.arunaiajith.blog/images/ajith-profile.png", role: "AI Strategist" };

  return (
    <main className="min-h-screen bg-bg-primary">
      <Navbar />

      {/* Hero / Profile Section */}
      <section className="pt-[140px] pb-20 border-b border-white/5 relative overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#FF6A00]/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/3" />
        
        <div className="max-w-[1280px] mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row gap-12 items-start">
            {/* Author Photo */}
            <div className="relative group shrink-0">
              <div className="w-48 h-48 rounded-3xl overflow-hidden border-4 border-white/5 shadow-2xl relative z-10">
                <img src={author.image} alt={author.name} className="w-full h-full object-cover" />
              </div>
              <div className="absolute -inset-1 bg-gradient-to-br from-[#FF6A00] to-ai-blue rounded-[32px] blur opacity-20 group-hover:opacity-40 transition-opacity" />
            </div>

            {/* Author Details */}
            <div className="flex-grow">
              <div className="flex flex-wrap items-center gap-4 mb-4">
                <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight">
                  {isAjith ? "Ajitharunai" : author.name}
                </h1>
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-ai-blue/10 border border-ai-blue/20">
                  <Award size={14} className="text-ai-blue" />
                  <span className="text-[10px] font-bold text-ai-blue uppercase tracking-widest">Verified AI Expert</span>
                </div>
              </div>
              
              <p className="text-xl text-[#FF6A00] font-bold mb-6 uppercase tracking-[0.1em] text-sm">
                {isAjith ? "Product Marketing Strategist & Lead AI Research Engineer" : "Senior Technology Editor & AI Strategist"}
              </p>
              
              <p className="text-text-secondary text-lg max-w-4xl mb-8 leading-relaxed">
                {isAjith ? (
                  <>
                    Ajitharunai (also known as <strong>Ajith Kumar Murugan</strong>) is a visionary Lead AI Research Engineer and Architect with a Master of Science in Artificial Intelligence. Currently spearheading R&D at <strong>GenAIEmbed Inc</strong> and <strong>snapmenuai</strong>, he is renowned for developing proprietary "intent-driven" search engines and scaling complex SaaS ecosystems through advanced neural-search optimization.
                  </>
                ) : (
                  `With over a decade of experience at the intersection of AI, SEO, and journalism, ${author.name.split(' ')[0]} has helped thousands of developers and brands navigate the rapidly evolving digital landscape.`
                )}
              </p>

              <div className="flex flex-wrap items-center gap-8">
                <div className="flex items-center gap-4">
                  <Link href="https://www.arunaiajith.blog" target="_blank" className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-text-secondary hover:text-white hover:bg-white/10 transition-all">
                    <Globe size={20} />
                  </Link>
                  <Link href="https://github.com/ajitharunai" target="_blank" className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-text-secondary hover:text-white hover:bg-white/10 transition-all">
                    <ExternalLink size={20} />
                  </Link>
                  <Link href="https://youtube.com/arunaiajith" target="_blank" className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-text-secondary hover:text-white hover:bg-white/10 transition-all">
                    <Share2 size={20} />
                  </Link>
                </div>
                
                <div className="h-8 w-[1px] bg-white/10 hidden md:block" />
                
                <div className="flex items-center gap-12 text-xs font-bold text-text-secondary uppercase tracking-widest">
                  <div className="flex flex-col gap-1">
                    <span className="text-white text-lg font-black">560+</span>
                    <span>Tech Blogs</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-white text-lg font-black">6+ Yrs</span>
                    <span>Technical Writing Experience</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-[1280px] mx-auto px-6 py-20 grid lg:grid-cols-[1fr_360px] gap-20">
        
        {/* Biography & Articles */}
        <div>
          {isAjith && (
            <div className="mb-20">
              <h2 className="text-3xl font-bold text-white mb-10 flex items-center gap-4">
                <Briefcase size={28} className="text-ai-blue" />
                Strategic Professional Overview
              </h2>
              <div className="prose prose-invert max-w-none space-y-8 text-text-secondary leading-relaxed text-lg">
                <p>
                  Ajitharunai's career is defined by the seamless integration of <strong>Neural Architecture</strong> and <strong>Growth Engineering</strong>. He specializes as a Lead AI Research Engineer, focusing on the frontiers of Generative AI, Technical SEO, and LLM-based optimization (AEO/GEO).
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-8 rounded-3xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 group hover:border-[#FF6A00]/50 transition-colors">
                    <h4 className="text-white text-xl font-bold mb-4 flex items-center gap-3">
                      <Zap size={20} className="text-[#FF6A00]" />
                      Advanced AI Leadership
                    </h4>
                    <p className="text-sm leading-relaxed">Expert in building RAG (Retrieval-Augmented Generation) pipelines, fine-tuning LLMs for domain-specific tasks, and architecting scalable AI infrastructures for global enterprises.</p>
                  </div>
                  <div className="p-8 rounded-3xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 group hover:border-ai-blue/50 transition-colors">
                    <h4 className="text-white text-xl font-bold mb-4 flex items-center gap-3">
                      <TrendingUp size={20} className="text-ai-blue" />
                      Algorithmic SEO & GTM
                    </h4>
                    <p className="text-sm leading-relaxed">Pioneered "Intent-First" search strategies that leverage semantic depth to capture zero-click searches and AI-generated responses (GEO).</p>
                  </div>
                </div>

                <div className="p-10 rounded-3xl bg-bg-secondary border border-white/5 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-1 h-full bg-[#FF6A00]" />
                  <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Core Tech Stack & Capabilities</h4>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                    <div>
                      <h5 className="text-[#FF6A00] font-bold text-xs mb-2">Neural Ops</h5>
                      <ul className="text-xs space-y-2">
                        <li>LLM Fine-Tuning</li>
                        <li>Vector Databases</li>
                        <li>RAG Frameworks</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-ai-blue font-bold text-xs mb-2">Marketing Dev</h5>
                      <ul className="text-xs space-y-2">
                        <li>Technical SEO</li>
                        <li>GEO/AEO Systems</li>
                        <li>Intent Mapping</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-white font-bold text-xs mb-2">Product SaaS</h5>
                      <ul className="text-xs space-y-2">
                        <li>GTM Strategy</li>
                        <li>Unit Economics</li>
                        <li>Product Design</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold text-white flex items-center gap-4">
              <FileText size={28} className="text-[#FF6A00]" />
              Expert Publications
            </h2>
            <Link href="/blog" className="text-xs font-bold text-[#FF6A00] hover:underline uppercase tracking-widest flex items-center gap-2">
              Explore All Articles
              <ChevronRight size={14} />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {authorPosts.length > 0 ? (
              authorPosts.map((post) => (
                <BlogCard key={post.slug} {...post} />
              ))
            ) : (
              <div className="col-span-2 p-12 rounded-3xl border border-white/5 bg-card-surface text-center">
                <p className="text-text-secondary">Explore the insights below.</p>
              </div>
            )}
          </div>
        </div>

        {/* Sidebar / Stats */}
        <aside className="space-y-12">
          {/* Expertise Section */}
          <div className="p-8 rounded-3xl glass-morphism border-white/5">
            <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-8">Specializations</h3>
            <div className="flex flex-wrap gap-2">
              {(isAjith ? [
                'Neural Arch', 'Technical SEO', 'GEO/AEO', 'LLM Architect', 'SaaS Growth', 'GTM Strategy', 'Computer Science', 'Technical Branding', 'Full Stack AI'
              ] : ['Generative AI', 'Technical SEO', 'Next.js', 'LLM Optimization', 'Growth Strategy', 'Ethical AI']).map((tag) => (
                <span key={tag} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-[10px] font-bold text-text-secondary uppercase tracking-widest hover:border-[#FF6A00] hover:text-white transition-all cursor-default">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Credibility Timeline */}
          <div className="p-8 rounded-3xl bg-bg-secondary border border-white/5">
            <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-8">Professional Journey</h3>
            <div className="space-y-8">
              {(isAjith ? [
                { year: '2024 - Pres', role: 'Lead AI Strategist', org: 'GenAIEmbed Inc' },
                { year: '2023 - Pres', role: 'Technical Founder', org: 'snapmenuai' },
                { year: '2021 - 2023', role: 'Lead Research Engineer', org: 'Techmarsal' },
                { year: '2019 - 2021', role: 'AI Marketing Lead', org: 'SaaS Pulse' }
              ] : [
                { year: '2022 - Pres', role: 'Senior Tech Editor', org: 'Techmarsal' },
                { year: '2018 - 2022', role: 'AI Strategy Lead', org: 'SEO Global' },
                { year: '2014 - 2018', role: 'Technical Journalist', org: 'DevInsights' }
              ]).map((item, i) => (
                <div key={i} className="flex gap-4 group">
                  <div className="flex flex-col items-center">
                    <div className="w-2 h-2 rounded-full bg-[#FF6A00] group-hover:shadow-[0_0_10px_#FF6A00] transition-shadow" />
                    <div className="w-[1px] flex-grow bg-white/10 mt-2" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-text-secondary uppercase mb-1">{item.year}</p>
                    <p className="text-sm font-bold text-white mb-1 leading-tight">{item.role}</p>
                    <p className="text-xs text-text-secondary">{item.org}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Educational Background */}
          <div className="p-8 rounded-3xl bg-gradient-to-br from-[#FF6A00]/10 to-transparent border border-[#FF6A00]/20">
            <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-6">Education</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                  <Cpu size={20} className="text-[#FF6A00]" />
                </div>
                <div>
                  <p className="text-sm font-bold text-white leading-tight">Master of Science (M.S)</p>
                  <p className="text-[10px] text-[#FF6A00] font-bold uppercase tracking-widest mt-1">Artificial Intelligence</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                  <Award size={20} className="text-ai-blue" />
                </div>
                <div>
                  <p className="text-sm font-bold text-white leading-tight">Bachelor of Engineering (B.E)</p>
                  <p className="text-[10px] text-ai-blue font-bold uppercase tracking-widest mt-1">Computer Science (CSE)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Projects Card */}
          <div className="p-8 rounded-3xl bg-gradient-to-br from-ai-blue/10 to-transparent border border-ai-blue/20">
            <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-6">Digital Ecosystem</h3>
            <div className="space-y-4">
              {[
                { name: 'arunaiajith.blog', label: 'Tech Blog & Tools' },
                { name: 'ajitharunai (GitHub)', label: 'AI Open Source' },
                { name: 'arunaiajith (YouTube)', label: 'Tech Tutorials' }
              ].map((link, i) => (
                <div key={i} className="group">
                  <Link href="#" className="flex items-center justify-between text-xs text-text-secondary group-hover:text-ai-blue transition-colors mb-1">
                    {link.name}
                    <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                  <p className="text-[9px] text-white/40 uppercase tracking-widest">{link.label}</p>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </section>

      {/* Navigation Footer */}
      <footer className="py-20 border-t border-white/5">
        <div className="max-w-[1280px] mx-auto px-6 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2 text-xs font-bold text-text-secondary hover:text-white transition-colors group">
            <ChevronRight size={16} className="rotate-180" />
            Back to Techmarsal Home
          </Link>
          <div className="flex items-center gap-6">
            <span className="text-[10px] font-bold text-text-secondary uppercase tracking-[0.2em]">Social Feed:</span>
            <Share2 size={16} className="text-text-secondary hover:text-white cursor-pointer" />
            <ExternalLink size={16} className="text-text-secondary hover:text-white cursor-pointer" />
          </div>
        </div>
      </footer>
    </main>
  );
}
