import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/shared/Navbar';
import TableOfContents from '@/components/shared/TableOfContents';
import { MOCK_POSTS, BlogPost } from '@/lib/mock-data';
import { 
  ChevronRight, 
  Calendar, 
  Clock, 
  Share2, 
  ExternalLink,
  Link as LinkIcon,
  CheckCircle2,
  BrainCircuit,
  MessageSquare,
  ArrowLeft
} from 'lucide-react';

export default function BlogDetailPage({ params }: { params: { slug: string } }) {
  const slug = params?.slug || '';
  const post: BlogPost = MOCK_POSTS.find(p => p.slug === slug) || MOCK_POSTS[0];

  const tocItems = [
    { id: 'introduction', text: 'Introduction', level: 2 },
    { id: 'ai-impact', text: 'The Impact of Generative AI', level: 2 },
    { id: 'seo-strategies', text: 'New SEO Strategies for 2024', level: 2 },
    { id: 'technical-optimization', text: 'Technical Optimization for AI', level: 3 },
    { id: 'content-curation', text: 'AI-Enhanced Content Curation', level: 3 },
    { id: 'conclusion', text: 'Conclusion', level: 2 },
    { id: 'faq', text: 'Frequently Asked Questions', level: 2 },
  ];

  return (
    <main className="min-h-screen bg-bg-primary">
      <Navbar />
      
      {/* Header / Breadcrumb Section */}
      <div className="pt-[120px] pb-12 border-b border-white/5">
        <div className="max-w-[1280px] mx-auto px-6">
          <nav className="flex items-center gap-2 text-xs font-bold text-text-secondary uppercase tracking-widest mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={14} className="opacity-30" />
            <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
            <ChevronRight size={14} className="opacity-30" />
            <span className="text-[#FF6A00]">{post.category}</span>
          </nav>

          <h1 className="text-4xl md:text-6xl font-black text-white mb-8 leading-[1.1] max-w-4xl tracking-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-8 pt-8 border-t border-white/5">
            {/* Author Mini Profile */}
            <Link href={`/author/${post.author.id}`} className="flex items-center gap-3 group">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white/5 group-hover:border-[#FF6A00] transition-all">
                <img src={post.author.image} alt={post.author.name} className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="text-sm font-bold text-white group-hover:text-[#FF6A00] transition-colors">{post.author.name}</p>
                <p className="text-[10px] text-text-secondary uppercase tracking-widest">Senior Tech Editor</p>
              </div>
            </Link>

            <div className="flex items-center gap-6 text-xs font-bold text-text-secondary uppercase tracking-widest">
              <div className="flex items-center gap-2">
                <Calendar size={14} className="text-[#FF6A00]" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={14} className="text-ai-blue" />
                <span>{post.readTime}</span>
              </div>
            </div>

            <div className="ml-auto flex items-center gap-3">
              <button className="p-2.5 rounded-full bg-white/5 border border-white/10 text-text-secondary hover:text-white hover:bg-white/10 transition-all">
                <Share2 size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-[1280px] mx-auto px-6 py-16 grid lg:grid-cols-[1fr_300px] gap-20">
        
        {/* Article Body */}
        <article className="min-w-0">
          {/* Featured Image */}
          <div className="aspect-[21/9] rounded-3xl overflow-hidden mb-12 border border-white/5">
            <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
          </div>

          {/* AI Answer Summary Block */}
          <div className="mb-12 p-8 rounded-2xl bg-ai-blue/5 border border-ai-blue/20 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <BrainCircuit size={80} className="text-ai-blue" />
            </div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-lg bg-ai-blue/20 flex items-center justify-center">
                <BrainCircuit size={18} className="text-ai-blue" />
              </div>
              <h4 className="text-sm font-bold text-white uppercase tracking-widest">AI Intelligence Summary</h4>
            </div>
            <p className="text-text-primary leading-relaxed italic">
              {post.aiSummary || "Generative AI is shifting SEO from keyword matching to intent satisfaction. To rank in 2024, focus on E-E-A-T, semantic depth, and direct answer optimization for LLMs."}
            </p>
          </div>

          {/* Key Takeaways */}
          <div className="mb-12 p-8 rounded-2xl bg-white/5 border border-white/10">
            <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-6">Key Takeaways</h4>
            <ul className="space-y-4">
              {(post.keyTakeaways || [
                "AI is moving SEO towards 'GEO' (Generative Engine Optimization).",
                "Long-form content must now include clear, direct answers for LLM ingestion.",
                "E-E-A-T (Experience, Expertise, Authoritativeness, and Trustworthiness) is more critical than ever."
              ]).map((item, i) => (
                <li key={i} className="flex gap-3 text-sm text-text-secondary leading-relaxed">
                  <CheckCircle2 size={18} className="text-[#FF6A00] shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="article-content">
            {post.content ? (
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            ) : (
              <>
                <p id="introduction">
                  The landscape of the internet is undergoing a seismic shift. As we navigate through 2024, the integration of Large Language Models (LLMs) into search engines is fundamentally changing how users find information. This isn't just an update; it's a revolution that we at Techmarsal call the "Generative Era."
                </p>

                <h2 id="ai-impact">The Impact of Generative AI</h2>
                <p>
                  Search Generative Experience (SGE) and similar technologies are providing direct answers to user queries, often bypassing the traditional list of links. This means that for publishers, the goal is no longer just "ranking first," but rather being the source of truth that the AI cites.
                </p>

                <h2 id="seo-strategies">New SEO Strategies for 2024</h2>
                <p>
                  To thrive in this new environment, content creators must adopt a "Semantic First" approach. This involves understanding the deeper context of user intent rather than just targeting specific keywords.
                </p>

                <h3 id="technical-optimization">Technical Optimization for AI</h3>
                <p>
                  Structured data and clear schema markup are the foundation. AI engines need to understand the relationship between different entities in your content. High-fidelity metadata is no longer optional.
                </p>

                <h3 id="content-curation">AI-Enhanced Content Curation</h3>
                <p>
                  Use AI as a partner, not a replacement. Tools that help identify content gaps and optimize for natural language queries are becoming essential in every modern newsroom and blog platform.
                </p>

                <h2 id="conclusion">Conclusion</h2>
                <p>
                  The future of tech journalism belongs to those who can blend human expertise with AI-driven efficiency. By focusing on deep insights and technical excellence, Techmarsal aims to lead this transition.
                </p>
              </>
            )}
          </div>

            {/* FAQ Section */}
            <div id="faq" className="mt-20 pt-20 border-t border-white/5">
              <h2 className="text-3xl font-bold text-white mb-10 flex items-center gap-4">
                <MessageSquare size={32} className="text-[#FF6A00]" />
                Frequently Asked Questions
              </h2>
              <div className="space-y-6">
                {(post.faqs || [
                  { q: "What is Generative Engine Optimization (GEO)?", a: "GEO is the process of optimizing content to be selected and cited by generative AI engines like Google SGE or Perplexity." },
                  { q: "Will AI replace human writers?", a: "At Techmarsal, we believe AI enhances human productivity but cannot replace the unique perspective and ethics of professional tech journalists." }
                ]).map((faq, i) => (
                  <div key={i} className="p-6 rounded-xl bg-card-surface border border-white/5">
                    <h4 className="text-lg font-bold text-white mb-3">{faq.q}</h4>
                    <p className="text-sm text-text-secondary leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>

          {/* Author Bio Card */}
          <div className="mt-20 p-10 rounded-3xl bg-bg-secondary border border-white/5 flex flex-col md:flex-row gap-8 items-center md:items-start relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#FF6A00] to-ai-blue" />
            <div className="w-24 h-24 rounded-2xl overflow-hidden shrink-0 border-2 border-white/10 shadow-2xl">
              <img src={post.author.image} alt={post.author.name} className="w-full h-full object-cover" />
            </div>
            <div>
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-2xl font-bold text-white">{post.author.name}</h4>
                <div className="flex gap-4">
                  <Share2 size={18} className="text-text-secondary hover:text-white cursor-pointer" />
                  <ExternalLink size={18} className="text-text-secondary hover:text-white cursor-pointer" />
                </div>
              </div>
              <p className="text-text-secondary mb-6 leading-relaxed">
                Senior Editor at Techmarsal with over 10 years of experience in tech journalism. Specialized in AI, SEO, and the future of the digital economy. Passionate about helping developers navigate the Generative Era.
              </p>
              <Link href={`/author/${post.author.id}`} className="inline-flex items-center gap-2 text-sm font-bold text-[#FF6A00] hover:underline uppercase tracking-widest">
                View All Articles By {post.author.name.split(' ')[0]}
                <ArrowLeft size={16} className="rotate-180" />
              </Link>
            </div>
          </div>
        </article>

        {/* Sidebar / TOC */}
        <aside className="relative">
          <TableOfContents items={tocItems} />
        </aside>
      </div>

      {/* Related Articles */}
      <section className="bg-bg-secondary py-24 border-t border-white/5">
        <div className="max-w-[1280px] mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-12">Related Articles</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {MOCK_POSTS.slice(1, 4).map((related) => (
              <div key={related.slug} className="group cursor-pointer">
                <div className="aspect-[16/9] rounded-xl overflow-hidden mb-6 border border-white/5">
                  <img src={related.image} alt={related.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-[#FF6A00] transition-colors line-clamp-2">
                  {related.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
