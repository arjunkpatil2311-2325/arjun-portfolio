import React, { useState } from 'react';
import { 
  Sparkles, 
  Code2, 
  Layers, 
  Cpu, 
  Box, 
  FileCode, 
  Flame, 
  GitBranch, 
  Palette, 
  Workflow, 
  Server,
  Layout
} from 'lucide-react';
import { PORTFOLIO_CONFIG } from '../config/portfolioConfig';

export const TechSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Frontend', 'Creative 3D', 'Automation', 'Cloud & Data', 'Tools'];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Atom':
      case 'Code2':
        return Code2;
      case 'Palette':
        return Palette;
      case 'Box':
        return Box;
      case 'FileCode':
        return FileCode;
      case 'Layout':
        return Layout;
      case 'Flame':
        return Flame;
      case 'GitBranch':
        return GitBranch;
      case 'Cpu':
        return Cpu;
      case 'Workflow':
        return Workflow;
      case 'Server':
        return Server;
      default:
        return Layers;
    }
  };

  const filteredTech =
    activeFilter === 'All'
      ? PORTFOLIO_CONFIG.technologies
      : PORTFOLIO_CONFIG.technologies.filter((t) => t.category.includes(activeFilter));

  return (
    <section id="tech" className="py-24 sm:py-32 relative bg-[#08090D] overflow-hidden border-t border-white/5">
      {/* Background glow */}
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] radial-glow pointer-events-none blur-3xl opacity-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-pill text-xs font-mono text-[#42D9FF] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>TECHNOLOGY ARSENAL</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#F5F5F7] tracking-tight leading-tight mb-4">
            BUILT WITH{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9B7BFF] via-[#7952F5] to-[#42D9FF]">
              PROVEN MODERN TOOLS.
            </span>
          </h2>

          <p className="text-sm sm:text-base text-[#9699A8] leading-relaxed">
            I believe in radical technical transparency. Here is my active production stack alongside technologies I am continuously researching and integrating into client systems.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 pb-4 mb-8 overflow-x-auto no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all whitespace-nowrap ${
                activeFilter === cat
                  ? 'bg-gradient-to-r from-[#9B7BFF] to-[#7952F5] text-white shadow-[0_0_15px_rgba(155,123,255,0.3)]'
                  : 'glass-panel text-[#9699A8] hover:text-white hover:bg-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Tech Badges Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {filteredTech.map((tech) => {
            const Icon = getIcon(tech.icon);
            const isExploring = tech.level === 'Exploring';
            return (
              <div
                key={tech.name}
                className="group p-4 rounded-2xl glass-panel border-white/5 hover:border-[#9B7BFF]/30 transition-all duration-200 flex flex-col justify-between hover:-translate-y-1 bg-gradient-to-b from-[#10121A] to-[#0A0B10]"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-[#9B7BFF]/20 group-hover:border-[#9B7BFF]/40 transition-colors">
                    <Icon className="w-4 h-4 text-[#42D9FF] group-hover:text-white transition-colors" />
                  </div>
                  <span
                    className={`text-[9px] font-mono px-2 py-0.5 rounded-full border ${
                      isExploring
                        ? 'bg-amber-500/10 text-amber-300 border-amber-500/20'
                        : 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
                    }`}
                  >
                    {isExploring ? 'Exploring' : 'Production'}
                  </span>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-white group-hover:text-[#42D9FF] transition-colors">
                    {tech.name}
                  </h4>
                  <span className="text-[10px] font-mono text-[#9699A8]">
                    {tech.category}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Technical standards footer */}
        <div className="mt-12 p-5 rounded-2xl glass-panel border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#9699A8]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#9B7BFF]" />
            <span>Architecture: Modular TypeScript, Accessible HTML5 & Optimized Asset Bundling</span>
          </div>
          <span className="font-mono text-[11px] text-white/50">
            Node.js v26 • React 19 • Vite 6
          </span>
        </div>

      </div>
    </section>
  );
};

