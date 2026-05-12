'use client';

import React, { useState } from 'react';
import { 
  Save, 
  Eye, 
  Send, 
  Image as ImageIcon, 
  Search, 
  Settings, 
  BrainCircuit,
  CheckCircle2,
  AlertCircle,
  BarChart,
  ChevronDown,
  Layout
} from 'lucide-react';
import { clsx } from 'clsx';

export default function PostEditorPage() {
  const [activeTab, setActiveTab] = useState<'content' | 'seo' | 'settings'>('content');

  return (
    <div className="min-h-screen bg-bg-primary">
      {/* Top Bar */}
      <div className="h-[80px] border-b border-white/5 px-10 flex items-center justify-between sticky top-0 bg-bg-primary/80 backdrop-blur-md z-40">
        <div className="flex items-center gap-4">
          <button className="p-2 text-text-secondary hover:text-white transition-colors">
            <Layout size={20} />
          </button>
          <div className="h-6 w-[1px] bg-white/10" />
          <p className="text-xs font-bold text-text-secondary uppercase tracking-widest">Draft • Last saved 2m ago</p>
        </div>
        
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-sm font-bold text-white hover:bg-white/10 transition-all">
            <Eye size={18} />
            Preview
          </button>
          <button className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-sm font-bold text-white hover:bg-white/10 transition-all">
            <Save size={18} />
            Save Draft
          </button>
          <button className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#FF6A00] text-white font-bold text-sm hover:bg-[#FF3D00] transition-all shadow-[0_10px_20px_rgba(255,106,0,0.2)]">
            <Send size={18} />
            Publish Post
          </button>
        </div>
      </div>

      <div className="grid lg:grid-cols-[1fr_400px] h-[calc(100vh-80px)]">
        
        {/* Editor Area */}
        <div className="p-10 overflow-y-auto custom-scrollbar">
          <div className="max-w-[800px] mx-auto">
            {/* Tabs */}
            <div className="flex gap-8 border-b border-white/5 mb-12">
              {['content', 'seo', 'settings'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab as any)}
                  className={clsx(
                    "pb-4 text-xs font-bold uppercase tracking-[0.2em] transition-all relative",
                    activeTab === tab ? "text-[#FF6A00]" : "text-text-secondary hover:text-white"
                  )}
                >
                  {tab}
                  {activeTab === tab && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#FF6A00]" />}
                </button>
              ))}
            </div>

            {activeTab === 'content' && (
              <div className="space-y-12">
                <div>
                  <textarea 
                    placeholder="Enter post title..." 
                    className="w-full bg-transparent border-none text-5xl font-black text-white placeholder:text-white/10 focus:outline-none resize-none h-[150px] tracking-tight leading-[1.1]"
                  />
                </div>

                <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="flex items-center gap-2 text-xs font-bold text-text-secondary uppercase tracking-widest border-r border-white/10 pr-4">
                    <span className="text-white/30">URL:</span>
                    <span>techmarsal.com/blog/</span>
                  </div>
                  <input 
                    type="text" 
                    placeholder="post-slug-here"
                    className="bg-transparent border-none text-sm text-[#FF6A00] font-bold focus:outline-none flex-grow"
                  />
                </div>

                <div className="aspect-[21/9] rounded-2xl border-2 border-dashed border-white/10 flex flex-col items-center justify-center gap-4 hover:border-[#FF6A00]/50 transition-all cursor-pointer group bg-white/[0.02]">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-text-secondary group-hover:text-[#FF6A00] transition-colors">
                    <ImageIcon size={24} />
                  </div>
                  <div className="text-center">
                    <p className="text-sm font-bold text-white mb-1">Click to upload featured image</p>
                    <p className="text-xs text-text-secondary">Recommended: 1200x630px (PNG, JPG, WEBP)</p>
                  </div>
                </div>

                <div className="min-h-[500px]">
                  <textarea 
                    placeholder="Start writing your futuristic content..." 
                    className="w-full bg-transparent border-none text-lg text-text-primary leading-relaxed placeholder:text-white/10 focus:outline-none resize-none h-full"
                  />
                </div>
              </div>
            )}

            {activeTab === 'seo' && (
              <div className="space-y-10">
                <div className="p-8 rounded-2xl bg-bg-secondary border border-white/5">
                  <h3 className="text-lg font-bold mb-6">Search Preview</h3>
                  <div className="p-6 rounded-xl bg-white/5 border border-white/10 max-w-[600px]">
                    <p className="text-xs text-[#8AB4F8] mb-1">techmarsal.com › blog › post-slug</p>
                    <h4 className="text-xl text-[#8AB4F8] hover:underline cursor-pointer mb-2">The Future of Search: How Generative AI is...</h4>
                    <p className="text-sm text-text-secondary line-clamp-2">Explore how SGE and AI-driven answers are changing the landscape of organic search and what you need to do to stay ahead.</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <label className="text-[10px] font-bold text-text-secondary uppercase tracking-widest">Meta Title</label>
                    <input type="text" className="w-full px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-sm focus:border-[#FF6A00] outline-none" />
                  </div>
                  <div className="space-y-4">
                    <label className="text-[10px] font-bold text-text-secondary uppercase tracking-widest">Focus Keyword</label>
                    <input type="text" className="w-full px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-sm focus:border-[#FF6A00] outline-none" />
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="text-[10px] font-bold text-text-secondary uppercase tracking-widest">Meta Description</label>
                  <textarea className="w-full px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-sm focus:border-[#FF6A00] outline-none h-32 resize-none" />
                </div>

                <div className="p-8 rounded-2xl bg-ai-blue/5 border border-ai-blue/20">
                  <div className="flex items-center gap-3 mb-4">
                    <BrainCircuit size={20} className="text-ai-blue" />
                    <h4 className="text-sm font-bold text-white uppercase tracking-widest">GEO Summary Field</h4>
                  </div>
                  <p className="text-[10px] text-text-secondary mb-4 uppercase tracking-widest">This field helps LLMs understand your article for AI-generated answers.</p>
                  <textarea className="w-full px-5 py-3 rounded-xl bg-bg-primary border border-white/10 text-sm focus:border-ai-blue outline-none h-24 resize-none italic" placeholder="Enter a 2-sentence summary for AI ingestion..." />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Sidebar / Optimization Panel */}
        <div className="bg-bg-secondary border-l border-white/5 p-8 overflow-y-auto custom-scrollbar">
          <div className="space-y-10">
            {/* SEO Score Panel */}
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 relative overflow-hidden">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <BarChart size={18} className="text-[#FF6A00]" />
                  <span className="text-xs font-bold uppercase tracking-widest">SEO Score</span>
                </div>
                <span className="text-2xl font-black text-[#FF6A00]">85<span className="text-sm text-text-secondary font-normal">/100</span></span>
              </div>
              <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden mb-6">
                <div className="w-[85%] h-full bg-[#FF6A00]" />
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs text-green-500">
                  <CheckCircle2 size={14} />
                  <span>Post title length is good</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-green-500">
                  <CheckCircle2 size={14} />
                  <span>Meta description included</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#FF6A00]">
                  <AlertCircle size={14} />
                  <span>Focus keyword not in first paragraph</span>
                </div>
              </div>
            </div>

            {/* Categorization */}
            <div className="space-y-6">
              <div className="space-y-3">
                <label className="text-[10px] font-bold text-text-secondary uppercase tracking-widest">Category</label>
                <div className="relative">
                  <select className="w-full px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-sm appearance-none focus:border-[#FF6A00] outline-none">
                    <option>Select Category</option>
                    <option>AI & SEO</option>
                    <option>Development</option>
                    <option>Startups</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-text-secondary" size={16} />
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-[10px] font-bold text-text-secondary uppercase tracking-widest">Author</label>
                <div className="relative">
                  <select className="w-full px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-sm appearance-none focus:border-[#FF6A00] outline-none">
                    <option>Ajith Kumar</option>
                    <option>Sarah Chen</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-text-secondary" size={16} />
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-[10px] font-bold text-text-secondary uppercase tracking-widest">Tags</label>
                <div className="flex flex-wrap gap-2 mb-3">
                  {['AI', 'Future', 'WebDev'].map(tag => (
                    <span key={tag} className="px-2 py-1 rounded-lg bg-white/5 border border-white/10 text-[10px] font-bold text-[#FF6A00]">
                      {tag} x
                    </span>
                  ))}
                </div>
                <input type="text" placeholder="Add tag..." className="w-full px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-sm focus:border-[#FF6A00] outline-none" />
              </div>
            </div>

            {/* AI Assistant Button */}
            <button className="w-full py-4 rounded-2xl bg-ai-blue/10 border border-ai-blue/30 text-ai-blue font-bold flex items-center justify-center gap-3 hover:bg-ai-blue/20 transition-all group">
              <BrainCircuit size={20} className="group-hover:scale-110 transition-transform" />
              Analyze with AI
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
