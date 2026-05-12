import React from 'react';
import { 
  Users, 
  FileText, 
  Eye, 
  TrendingUp, 
  Plus, 
  Search, 
  MoreHorizontal,
  ArrowUpRight,
  Zap,
  ShieldCheck
} from 'lucide-react';
import Link from 'next/link';

const STATS = [
  { label: 'Total Posts', value: '1,284', change: '+12%', icon: FileText, color: '#FF6A00' },
  { label: 'Monthly Views', value: '45.2K', change: '+8%', icon: Eye, color: '#38BDF8' },
  { label: 'Avg. SEO Score', value: '94/100', change: '+3%', icon: ShieldCheck, color: '#10B981' },
  { label: 'Active Authors', value: '24', change: '0%', icon: Users, color: '#8B5CF6' },
];

export default function AdminDashboardPage() {
  return (
    <div className="p-10">
      {/* Header */}
      <div className="flex items-center justify-between mb-12">
        <div>
          <h1 className="text-3xl font-black tracking-tight mb-2">Dashboard Overview</h1>
          <p className="text-text-secondary text-sm">Welcome back, Admin. Here's what's happening today.</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary" size={18} />
            <input 
              type="text" 
              placeholder="Search posts..." 
              className="pl-12 pr-6 py-3 rounded-xl bg-bg-secondary border border-white/5 text-sm focus:outline-none focus:border-[#FF6A00] transition-colors w-[300px]"
            />
          </div>
          <Link href="/dashboard/posts/new" className="flex items-center gap-2 px-6 py-3 bg-[#FF6A00] text-white font-bold rounded-xl hover:bg-[#FF3D00] transition-all shadow-[0_10px_20px_rgba(255,106,0,0.2)]">
            <Plus size={20} />
            Create New Post
          </Link>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid md:grid-cols-4 gap-6 mb-12">
        {STATS.map((stat) => (
          <div key={stat.label} className="p-6 rounded-2xl bg-bg-secondary border border-white/5 relative overflow-hidden group">
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                  <stat.icon size={24} style={{ color: stat.color }} />
                </div>
                <span className="text-xs font-bold text-green-500 flex items-center gap-1">
                  {stat.change}
                  <TrendingUp size={12} />
                </span>
              </div>
              <p className="text-xs font-bold text-text-secondary uppercase tracking-widest mb-1">{stat.label}</p>
              <h3 className="text-2xl font-black text-white">{stat.value}</h3>
            </div>
            <div className="absolute -bottom-2 -right-2 opacity-[0.02] group-hover:opacity-[0.05] transition-opacity">
              <stat.icon size={100} />
            </div>
          </div>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid lg:grid-cols-[1fr_400px] gap-8">
        
        {/* Recent Posts Table */}
        <div className="p-8 rounded-3xl bg-bg-secondary border border-white/5">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl font-bold">Recent Publications</h2>
            <button className="text-sm font-bold text-[#FF6A00] hover:underline uppercase tracking-widest">
              View All
            </button>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left border-b border-white/5">
                  <th className="pb-4 text-xs font-bold text-text-secondary uppercase tracking-widest">Post Title</th>
                  <th className="pb-4 text-xs font-bold text-text-secondary uppercase tracking-widest">Category</th>
                  <th className="pb-4 text-xs font-bold text-text-secondary uppercase tracking-widest">Status</th>
                  <th className="pb-4 text-xs font-bold text-text-secondary uppercase tracking-widest">SEO Score</th>
                  <th className="pb-4 text-right"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <tr key={i} className="group">
                    <td className="py-5">
                      <p className="text-sm font-bold text-white group-hover:text-[#FF6A00] transition-colors cursor-pointer">
                        The Future of Search: How Generative AI is...
                      </p>
                      <p className="text-[10px] text-text-secondary mt-1">Updated 2 hours ago</p>
                    </td>
                    <td className="py-5">
                      <span className="text-xs text-text-secondary">AI & SEO</span>
                    </td>
                    <td className="py-5">
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.5)]" />
                        <span className="text-[10px] font-bold text-white uppercase tracking-widest">Published</span>
                      </div>
                    </td>
                    <td className="py-5">
                      <span className="text-xs font-bold text-ai-blue">98/100</span>
                    </td>
                    <td className="py-5 text-right">
                      <button className="p-2 text-text-secondary hover:text-white">
                        <MoreHorizontal size={18} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Side Panel: SEO Health & AI Tips */}
        <div className="space-y-8">
          {/* SEO Health Card */}
          <div className="p-8 rounded-3xl glass-morphism border-[#FF6A00]/20 relative overflow-hidden">
            <div className="flex items-center gap-3 mb-6">
              <Zap size={24} className="text-[#FF6A00]" />
              <h3 className="text-lg font-bold">Optimization Health</h3>
            </div>
            
            <div className="space-y-6">
              <div>
                <div className="flex justify-between text-xs font-bold mb-2">
                  <span className="uppercase tracking-widest text-text-secondary">Schema Coverage</span>
                  <span className="text-white">92%</span>
                </div>
                <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                  <div className="w-[92%] h-full bg-[#FF6A00]" />
                </div>
              </div>
              
              <div>
                <div className="flex justify-between text-xs font-bold mb-2">
                  <span className="uppercase tracking-widest text-text-secondary">Core Web Vitals</span>
                  <span className="text-white">98%</span>
                </div>
                <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                  <div className="w-[98%] h-full bg-ai-blue" />
                </div>
              </div>
            </div>
            
            <div className="mt-8 p-4 rounded-xl bg-[#FF6A00]/5 border border-[#FF6A00]/10">
              <p className="text-[10px] text-text-secondary leading-relaxed">
                <span className="text-[#FF6A00] font-bold">PRO TIP:</span> Adding FAQ Schema to your latest posts could increase your GEO visibility by up to <span className="text-white font-bold">14%</span>.
              </p>
            </div>
          </div>

          {/* Activity Feed */}
          <div className="p-8 rounded-3xl bg-bg-secondary border border-white/5">
            <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-8">System Activity</h3>
            <div className="space-y-6">
              {[
                { user: 'Ajith', action: 'published a new post', time: '12m ago' },
                { user: 'AI Bot', action: 'optimized meta tags for 5 posts', time: '1h ago' },
                { user: 'Sarah', action: 'added a new author', time: '3h ago' }
              ].map((activity, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center text-[10px] font-bold">
                    {activity.user[0]}
                  </div>
                  <div>
                    <p className="text-xs text-text-secondary">
                      <span className="text-white font-bold">{activity.user}</span> {activity.action}
                    </p>
                    <p className="text-[10px] text-white/20 mt-1 uppercase tracking-widest font-bold">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
