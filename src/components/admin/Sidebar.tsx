'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, 
  FileText, 
  Users, 
  Settings, 
  Image as ImageIcon, 
  Layers, 
  Search, 
  LogOut,
  Sparkles,
  BarChart3
} from 'lucide-react';
import { clsx } from 'clsx';

const NAV_ITEMS = [
  { label: 'Overview', icon: LayoutDashboard, href: '/dashboard' },
  { label: 'All Posts', icon: FileText, href: '/dashboard/posts' },
  { label: 'Authors', icon: Users, href: '/dashboard/authors' },
  { label: 'Categories', icon: Layers, href: '/dashboard/categories' },
  { label: 'Media Library', icon: ImageIcon, href: '/dashboard/media' },
  { label: 'Analytics', icon: BarChart3, href: '/dashboard/analytics' },
  { label: 'SEO Settings', icon: Search, href: '/dashboard/seo' },
  { label: 'System Settings', icon: Settings, href: '/dashboard/settings' },
];

export default function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-[280px] h-screen fixed top-0 left-0 bg-bg-secondary border-r border-white/5 flex flex-col p-6 z-50">
      {/* Brand */}
      <Link href="/dashboard" className="flex items-center gap-3 mb-12 group">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#FF6A00] to-[#FF3D00] flex items-center justify-center font-bold text-white shadow-[0_0_20px_rgba(255,106,0,0.3)]">
          T
        </div>
        <div className="flex flex-col">
          <span className="text-lg font-bold text-white tracking-tight">Techmarsal</span>
          <span className="text-[10px] font-bold text-text-secondary uppercase tracking-widest">Admin Console</span>
        </div>
      </Link>

      {/* Navigation */}
      <nav className="flex-grow space-y-1">
        {NAV_ITEMS.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link 
              key={item.href}
              href={item.href}
              className={clsx(
                "flex items-center gap-3 px-4 py-3 rounded-xl transition-all group",
                isActive 
                  ? "bg-[#FF6A00]/10 text-[#FF6A00] border border-[#FF6A00]/20" 
                  : "text-text-secondary hover:text-white hover:bg-white/5 border border-transparent"
              )}
            >
              <item.icon size={20} className={clsx(isActive ? "text-[#FF6A00]" : "text-text-secondary group-hover:text-white")} />
              <span className="text-sm font-bold">{item.label}</span>
              {isActive && (
                <div className="ml-auto w-1.5 h-1.5 rounded-full bg-[#FF6A00] shadow-[0_0_10px_#FF6A00]" />
              )}
            </Link>
          );
        })}
      </nav>

      {/* Footer Info */}
      <div className="mt-auto space-y-6">
        <div className="p-5 rounded-2xl bg-gradient-to-br from-[#FF6A00]/10 to-transparent border border-[#FF6A00]/20 relative overflow-hidden group cursor-pointer">
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-2">
              <Sparkles size={14} className="text-[#FF6A00]" />
              <span className="text-[10px] font-bold text-white uppercase tracking-widest">AI Status</span>
            </div>
            <p className="text-xs text-text-secondary leading-relaxed mb-3">SEO/GEO optimization engine is active.</p>
            <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
              <div className="w-[85%] h-full bg-[#FF6A00] shadow-[0_0_10px_#FF6A00]" />
            </div>
          </div>
          <div className="absolute -bottom-4 -right-4 opacity-5 group-hover:opacity-10 transition-opacity">
            <Sparkles size={80} className="text-[#FF6A00]" />
          </div>
        </div>

        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-text-secondary hover:text-red-500 hover:bg-red-500/5 transition-all group">
          <LogOut size={20} />
          <span className="text-sm font-bold">Sign Out</span>
        </button>
      </div>
    </aside>
  );
}
