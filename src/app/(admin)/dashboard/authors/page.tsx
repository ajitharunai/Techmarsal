import React from 'react';
import { 
  Users, 
  Plus, 
  Search, 
  MoreVertical, 
  Award,
  BarChart2,
  Mail,
  ExternalLink
} from 'lucide-react';

const AUTHORS = [
  { id: 'ajith-kumar', name: 'Ajith Kumar', role: 'Senior Editor', posts: 128, views: '1.2M', image: 'https://www.arunaiajith.blog/images/ajith-profile.png', status: 'Active' },
  { id: 'sarah-chen', name: 'Sarah Chen', role: 'Dev Advocate', posts: 64, views: '450K', image: 'https://i.pravatar.cc/150?u=sarah', status: 'Active' },
  { id: 'marcus-thorne', name: 'Marcus Thorne', role: 'Business Strategist', posts: 42, views: '890K', image: 'https://i.pravatar.cc/150?u=marcus', status: 'On Leave' },
  { id: 'elena-rodriguez', name: 'Elena Rodriguez', role: 'AI Researcher', posts: 96, views: '2.1M', image: 'https://i.pravatar.cc/150?u=elena', status: 'Active' },
];

export default function AuthorsManagementPage() {
  return (
    <div className="p-10">
      {/* Header */}
      <div className="flex items-center justify-between mb-12">
        <div>
          <h1 className="text-3xl font-black tracking-tight mb-2">Author Management</h1>
          <p className="text-text-secondary text-sm">Manage your world-class editorial team and their performance.</p>
        </div>
        <button className="flex items-center gap-2 px-6 py-3 bg-[#FF6A00] text-white font-bold rounded-xl hover:bg-[#FF3D00] transition-all shadow-[0_10px_20px_rgba(255,106,0,0.2)]">
          <Plus size={20} />
          Add New Author
        </button>
      </div>

      {/* Filters */}
      <div className="flex items-center gap-4 mb-8">
        <div className="relative flex-grow max-w-[400px]">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary" size={18} />
          <input 
            type="text" 
            placeholder="Search authors..." 
            className="w-full pl-12 pr-6 py-3 rounded-xl bg-bg-secondary border border-white/5 text-sm focus:outline-none focus:border-[#FF6A00] transition-colors"
          />
        </div>
        <select className="px-6 py-3 rounded-xl bg-bg-secondary border border-white/5 text-sm text-text-secondary focus:outline-none focus:border-[#FF6A00]">
          <option>All Roles</option>
          <option>Editor</option>
          <option>Researcher</option>
        </select>
      </div>

      {/* Authors Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {AUTHORS.map((author) => (
          <div key={author.id} className="p-8 rounded-3xl bg-bg-secondary border border-white/5 flex gap-8 items-center group relative overflow-hidden">
            {/* Status Indicator */}
            <div className={`absolute top-4 right-4 px-2 py-1 rounded text-[8px] font-black uppercase tracking-widest ${author.status === 'Active' ? 'bg-green-500/10 text-green-500 border border-green-500/20' : 'bg-yellow-500/10 text-yellow-500 border border-yellow-500/20'}`}>
              {author.status}
            </div>

            {/* Photo */}
            <div className="relative shrink-0">
              <div className="w-24 h-24 rounded-2xl overflow-hidden border-2 border-white/10 group-hover:border-[#FF6A00] transition-colors">
                <img src={author.image} alt={author.name} className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-lg bg-bg-primary border border-white/5 flex items-center justify-center">
                <Award size={16} className="text-ai-blue" />
              </div>
            </div>

            {/* Info */}
            <div className="flex-grow">
              <h3 className="text-xl font-bold text-white mb-1 group-hover:text-[#FF6A00] transition-colors cursor-pointer">{author.name}</h3>
              <p className="text-xs text-text-secondary mb-6 uppercase tracking-widest font-bold">{author.role}</p>
              
              <div className="flex items-center gap-8 mb-6">
                <div className="flex flex-col gap-1">
                  <span className="text-lg font-black text-white">{author.posts}</span>
                  <span className="text-[10px] text-text-secondary uppercase tracking-widest font-bold">Posts</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-lg font-black text-ai-blue">{author.views}</span>
                  <span className="text-[10px] text-text-secondary uppercase tracking-widest font-bold">Total Views</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-text-secondary hover:text-white transition-all">
                  <Mail size={16} />
                </button>
                <button className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-text-secondary hover:text-white transition-all">
                  <BarChart2 size={16} />
                </button>
                <button className="flex-grow py-2.5 px-4 rounded-lg bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-widest text-text-secondary hover:text-white hover:border-white/20 transition-all flex items-center justify-center gap-2">
                  View Profile
                  <ExternalLink size={12} />
                </button>
                <button className="p-2.5 rounded-lg bg-white/5 border border-white/5 text-text-secondary hover:text-white">
                  <MoreVertical size={16} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Footer */}
      <div className="mt-12 flex justify-between items-center text-[10px] font-bold text-text-secondary uppercase tracking-[0.2em]">
        <p>Showing 4 of 24 authors</p>
        <div className="flex gap-4">
          <button className="hover:text-white transition-colors">Previous</button>
          <span className="text-white">01</span>
          <button className="hover:text-white transition-colors">Next</button>
        </div>
      </div>
    </div>
  );
}
