'use client';

import React from 'react';
import Link from 'next/link';
import { Search, Mail, User, Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 h-[80px] z-50 glass-morphism border-b border-white/5">
      <div className="max-w-[1280px] mx-auto h-full px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded bg-gradient-to-br from-[#FF6A00] to-[#FF3D00] flex items-center justify-center font-bold text-white shadow-[0_0_15px_rgba(255,106,0,0.4)]">
            T
          </div>
          <span className="text-xl font-bold tracking-tight text-white group-hover:text-[#FF6A00] transition-colors">
            Techmarsal
          </span>
        </Link>

        {/* Categories - Desktop */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-text-secondary">
          <Link href="/category/ai" className="hover:text-white transition-colors">AI</Link>
          <Link href="/category/seo" className="hover:text-white transition-colors">SEO</Link>
          <Link href="/category/development" className="hover:text-white transition-colors">Development</Link>
          <Link href="/category/startups" className="hover:text-white transition-colors">Startups</Link>
          <Link href="/category/tools" className="hover:text-white transition-colors">Tools</Link>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3 md:gap-5">
          <button className="p-2 text-text-secondary hover:text-white transition-colors rounded-full hover:bg-white/5">
            <Search size={20} />
          </button>
          <button className="hidden sm:flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-white/5 rounded-full border border-white/10 hover:bg-white/10 transition-colors">
            <Mail size={16} />
            <span>Newsletter</span>
          </button>
          <Link href="/admin" className="p-2 text-text-secondary hover:text-white transition-colors rounded-full hover:bg-white/5">
            <User size={20} />
          </Link>
          <button className="md:hidden p-2 text-text-secondary hover:text-white transition-colors">
            <Menu size={24} />
          </button>
        </div>
      </div>
      
      {/* Glow effect under navbar */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-[#FF6A00]/50 to-transparent shadow-[0_0_15px_#FF6A00]" />
    </nav>
  );
}
