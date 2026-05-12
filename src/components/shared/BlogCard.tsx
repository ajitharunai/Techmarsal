import React from 'react';
import Link from 'next/link';
import { Clock, Calendar, ArrowUpRight } from 'lucide-react';

interface BlogCardProps {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: {
    name: string;
    image: string;
    id: string;
  };
  date: string;
  readTime: string;
  image: string;
}

export default function BlogCard({
  slug,
  title,
  excerpt,
  category,
  author,
  date,
  readTime,
  image
}: BlogCardProps) {
  return (
    <article className="group relative flex flex-col bg-card-surface border border-white/5 rounded-2xl overflow-hidden hover:border-[#FF6A00]/30 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(255,106,0,0.1)]">
      {/* Hover Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FF6A00]/0 to-ai-blue/0 group-hover:from-[#FF6A00]/5 group-hover:to-ai-blue/5 transition-all duration-500 pointer-events-none" />
      
      {/* Image Container */}
      <Link href={`/blog/${slug}`} className="relative aspect-[16/10] overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/90 via-bg-primary/20 to-transparent opacity-80" />
        
        {/* Category Badge */}
        <Link 
          href={`/category/${category.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`}
          className="absolute top-4 left-4 px-3 py-1 rounded-lg glass-morphism text-[10px] font-bold text-white uppercase tracking-widest border border-white/10 z-10 hover:bg-[#FF6A00] transition-colors" 
          suppressHydrationWarning
        >
          {category}
        </Link>
        
        {/* Hover Arrow */}
        <div className="absolute top-4 right-4 w-10 h-10 rounded-full glass-morphism flex items-center justify-center text-white opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 z-10 border border-white/10">
          <ArrowUpRight size={20} />
        </div>
      </Link>

      {/* Content */}
      <div className="p-7 flex flex-col flex-grow relative z-10">
        <div className="flex items-center gap-4 text-[10px] font-bold text-text-secondary uppercase tracking-[0.2em] mb-5">
          <div className="flex items-center gap-1.5 group-hover:text-white transition-colors">
            <Calendar size={12} className="text-[#FF6A00]" />
            <span>{date}</span>
          </div>
          <div className="h-3 w-[1px] bg-white/10" />
          <div className="flex items-center gap-1.5 group-hover:text-white transition-colors">
            <Clock size={12} className="text-ai-blue" />
            <span>{readTime}</span>
          </div>
        </div>

        <Link href={`/blog/${slug}`}>
          <h3 className="text-xl font-bold text-white mb-4 leading-snug group-hover:text-gradient transition-all line-clamp-2">
            {title}
          </h3>
        </Link>
        
        <p className="text-sm text-text-secondary line-clamp-2 mb-8 leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">
          {excerpt}
        </p>

        <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
          {/* Author Info */}
          <Link href={`/author/${author.id}`} className="flex items-center gap-3 group/author">
            <div className="relative">
              <div className="w-9 h-9 rounded-full overflow-hidden border-2 border-white/10 group-hover/author:border-[#FF6A00] transition-all duration-300">
                <img src={author.image} alt={author.name} className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 border-2 border-bg-primary rounded-full" />
            </div>
            <div className="flex flex-col">
              <span className="text-[11px] font-bold text-white group-hover/author:text-[#FF6A00] transition-colors">
                {author.name}
              </span>
              <span className="text-[9px] text-text-secondary uppercase tracking-widest">Verified Author</span>
            </div>
          </Link>
          
          <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-text-secondary group-hover:text-[#FF6A00] group-hover:border-[#FF6A00]/50 transition-all">
            <ArrowUpRight size={14} />
          </div>
        </div>
      </div>
    </article>
  );
}
