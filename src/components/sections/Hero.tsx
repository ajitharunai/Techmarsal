'use client';

import React from 'react';
import { Sparkles, ArrowRight, Play } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative pt-[160px] pb-[100px] overflow-hidden">
      {/* Background AI Waveform Graphic (SVG) */}
      <div className="absolute top-[20%] left-[-5%] w-[110%] h-[400px] opacity-10 pointer-events-none select-none">
        <svg width="100%" height="100%" viewBox="0 0 1200 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 200C100 150 200 250 300 200C400 150 500 250 600 200C700 150 800 250 900 200C1000 150 1100 250 1200 200" stroke="#FF6A00" strokeWidth="2" />
          <path d="M0 220C100 170 200 270 300 220C400 170 500 270 600 220C700 170 800 270 900 220C1000 170 1100 270 1200 220" stroke="#38BDF8" strokeWidth="1" strokeDasharray="5 5" />
        </svg>
      </div>

      <div className="max-w-[1280px] mx-auto px-6 grid md:grid-cols-[1fr_240px] gap-12 items-center">
        {/* Left Content */}
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-6">
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-text-secondary">
              INTRODUCING
            </span>
            <div className="w-12 h-[1px] bg-white/10" />
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#FF6A00]/10 border border-[#FF6A00]/20">
              <Sparkles size={12} className="text-[#FF6A00]" />
              <span className="text-[10px] font-bold text-[#FF6A00]">AI POWERED</span>
            </div>
          </div>

          <h1 className="text-7xl md:text-9xl font-black tracking-tighter mb-8 leading-[0.9] text-white">
            Tech<span className="text-gradient">marsal</span>
            <span className="inline-block ml-4 w-4 h-4 rounded-full bg-[#FF6A00] shadow-[0_0_20px_#FF6A00] animate-pulse" />
          </h1>

          <p className="text-xl md:text-2xl text-text-secondary max-w-2xl mb-12 font-medium leading-relaxed">
            The futuristic command center for <span className="text-white">AI insights</span>, 
            cutting-edge <span className="text-white">SEO strategies</span>, and 
            world-class <span className="text-white">development guides</span>.
          </p>

          <div className="flex flex-wrap items-center gap-6 mb-12">
            <Link href="/blog" className="px-8 py-4 bg-gradient-to-r from-[#FF6A00] to-[#FF3D00] text-white font-bold rounded-lg flex items-center gap-2 hover:scale-105 transition-all shadow-[0_10px_40px_rgba(255,106,0,0.3)] group">
              Explore Articles
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/blog" className="px-8 py-4 text-white font-bold rounded-lg flex items-center gap-2 hover:bg-white/5 transition-all border border-white/10 group">
              <Play size={18} fill="currentColor" />
              Start Reading
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-bg-primary bg-card-surface flex items-center justify-center overflow-hidden">
                  <img 
                    src={`https://i.pravatar.cc/150?u=techmarsal${i}`} 
                    alt="Reader" 
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
              <div className="w-10 h-10 rounded-full border-2 border-bg-primary bg-[#1F2937] flex items-center justify-center text-[10px] font-bold text-white">
                +25K
              </div>
            </div>
            <p className="text-sm font-medium text-text-secondary">
              <span className="text-white font-bold">25K+ readers</span> already learning with Techmarsal
            </p>
          </div>
        </div>

        {/* Right Microcopy (Desktop Only) */}
        <div className="hidden md:flex flex-col gap-12 border-l border-white/5 pl-12 h-[300px] justify-center relative z-10">
          <div className="space-y-1">
            <p className="text-[11px] font-black uppercase tracking-[0.4em] text-white/20 hover:text-[#FF6A00] transition-colors cursor-default">AI. SEO. TECH. FUTURE.</p>
            <p className="text-[11px] font-black uppercase tracking-[0.4em] text-white/20">INSIGHTS EVERY DAY</p>
            <p className="text-[11px] font-black uppercase tracking-[0.4em] text-white/20">OPTIMIZED FOR GEO</p>
          </div>
          
          <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-[#FF6A00]/5 blur-[100px] pointer-events-none rounded-full" />
        </div>
      </div>
    </section>
  );
}
