'use client';

import React, { useState, useEffect } from 'react';
import { List, ChevronDown } from 'lucide-react';
import { clsx } from 'clsx';

interface TOCItem {
  id: string;
  text: string;
  level: number;
}

export default function TableOfContents({ items }: { items: TOCItem[] }) {
  const [activeId, setActiveId] = useState<string>('');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-100px 0px -66%' }
    );

    items.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [items]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };

  return (
    <div className="relative">
      {/* Mobile Collapsible TOC */}
      <div className="lg:hidden mb-8">
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between p-4 rounded-xl glass-morphism border-[#FF6A00]/20"
        >
          <div className="flex items-center gap-3">
            <List size={20} className="text-[#FF6A00]" />
            <span className="font-bold text-white text-sm uppercase tracking-widest">Table of Contents</span>
          </div>
          <ChevronDown size={20} className={clsx("text-text-secondary transition-transform", isOpen && "rotate-180")} />
        </button>
        
        {isOpen && (
          <div className="mt-2 p-4 rounded-xl glass-morphism border-white/10 space-y-3">
            {items.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={clsx(
                  "block text-sm text-left transition-colors w-full",
                  item.level === 3 ? "pl-4 text-xs" : "font-medium",
                  activeId === item.id ? "text-[#FF6A00]" : "text-text-secondary hover:text-white"
                )}
              >
                {item.text}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Desktop Sticky TOC */}
      <div className="hidden lg:block sticky top-32">
        <div className="flex items-center gap-3 mb-6">
          <List size={18} className="text-[#FF6A00]" />
          <h4 className="text-xs font-bold text-white uppercase tracking-[0.2em]">Table of Contents</h4>
        </div>
        
        <nav className="space-y-4">
          {items.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={clsx(
                "block text-sm text-left transition-all relative pl-6 py-1 group w-full",
                item.level === 3 ? "ml-4 text-[13px]" : "font-medium",
                activeId === item.id ? "text-[#FF6A00]" : "text-text-secondary hover:text-white"
              )}
            >
              {/* Active Indicator Line */}
              <div className={clsx(
                "absolute left-0 top-1/2 -translate-y-1/2 w-4 h-[1px] transition-all",
                activeId === item.id ? "bg-[#FF6A00] w-6" : "bg-white/10 group-hover:bg-white/30"
              )} />
              {item.text}
            </button>
          ))}
        </nav>
        
        <div className="mt-12 pt-12 border-t border-white/5">
          <div className="p-6 rounded-2xl bg-gradient-to-br from-[#FF6A00]/10 to-transparent border border-[#FF6A00]/20">
            <h5 className="text-sm font-bold text-white mb-2">Subscribe for more</h5>
            <p className="text-xs text-text-secondary mb-4 leading-relaxed">Get the latest AI & SEO insights delivered to your inbox.</p>
            <input 
              type="email" 
              placeholder="Email" 
              className="w-full px-3 py-2 rounded-lg bg-bg-primary border border-white/10 text-xs text-white mb-3 focus:outline-none focus:border-[#FF6A00]"
            />
            <button className="w-full py-2 bg-[#FF6A00] text-white text-xs font-bold rounded-lg hover:bg-[#FF3D00] transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
