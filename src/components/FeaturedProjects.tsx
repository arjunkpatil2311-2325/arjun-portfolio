import React, { useState } from 'react';
import { 
  Gift, 
  Coffee, 
  Bot, 
  Sparkles, 
  Check, 
  Plus, 
  ArrowRight,
  Eye,
  Info
} from 'lucide-react';
import { PORTFOLIO_CONFIG } from '../config/portfolioConfig';

export const FeaturedProjects: React.FC = () => {
  // HamperHub interactive mini builder state
  const [selectedBox, setSelectedBox] = useState<'Matte Obsidian' | 'Velvet Rose' | 'Minimalist Wood'>('Matte Obsidian');
  const [selectedItems, setSelectedItems] = useState<string[]>([
    'Artisan Dark Roast Coffee Beans',
    'Handmade Pistachio Truffles'
  ]);

  const hamperTreats = [
    { name: 'Artisan Dark Roast Coffee Beans', price: 16 },
    { name: 'Handmade Pistachio Truffles', price: 14 },
    { name: 'Cold-Pressed Wild Honey', price: 18 },
    { name: 'Ceramic Glazed Mug', price: 22 },
    { name: 'Belgian Sea Salt Caramels', price: 12 },
    { name: 'Lavender Aromatherapy Candle', price: 20 },
  ];

  const boxPrices = {
    'Matte Obsidian': 25,
    'Velvet Rose': 28,
    'Minimalist Wood': 35
  };

  const toggleItem = (name: string) => {
    if (selectedItems.includes(name)) {
      if (selectedItems.length > 1) {
        setSelectedItems(selectedItems.filter((i) => i !== name));
      }
    } else {
      setSelectedItems([...selectedItems, name]);
    }
  };

  const hamperTotal =
    boxPrices[selectedBox] +
    selectedItems.reduce((acc, curr) => {
      const match = hamperTreats.find((t) => t.name === curr);
      return acc + (match ? match.price : 0);
    }, 0);

  // Active preview tab for Cafe concept
  const [cafeMenuFilter, setCafeMenuFilter] = useState<'All' | 'Coffee' | 'Bakery' | 'Brunch'>('All');

  const cafeSampleItems = [
    { id: 1, name: 'Nitro Cold Brew Tonic', cat: 'Coffee', price: '$5.50', tag: 'Signature' },
    { id: 2, name: 'Matcha Cream Croissant', cat: 'Bakery', price: '$6.00', tag: 'Fresh Baked' },
    { id: 3, name: 'Heirloom Tomato & Burrata', cat: 'Brunch', price: '$14.00', tag: 'Organic' },
    { id: 4, name: 'Velvet Flat White (Oat)', cat: 'Coffee', price: '$5.00', tag: 'Popular' },
  ];

  const filteredCafeItems =
    cafeMenuFilter === 'All'
      ? cafeSampleItems
      : cafeSampleItems.filter((item) => item.cat === cafeMenuFilter);

  return (
    <section id="projects" className="py-24 sm:py-32 relative bg-[#08090D] overflow-hidden border-t border-white/5">
      {/* Background glow */}
      <div className="absolute top-1/4 left-10 w-[600px] h-[600px] radial-glow pointer-events-none blur-3xl opacity-25" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-pill text-xs font-mono text-[#9B7BFF] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>SELECTED WORK & CONCEPTS</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#F5F5F7] tracking-tight leading-tight mb-4">
            FEATURED{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9B7BFF] via-[#7952F5] to-[#42D9FF]">
              PROJECTS.
            </span>
          </h2>

          <p className="text-sm sm:text-base text-[#9699A8] leading-relaxed">
            From high-growth e-commerce builders to custom restaurant ordering ecosystems. Clearly indicated real projects in active development alongside functional interactive architecture concepts.
          </p>
        </div>

        {/* ======================================================== */}
        {/* PROJECT 01: HAMPERHUB (Real Project - Active Development) */}
        {/* ======================================================== */}
        <div className="glass-panel p-6 sm:p-10 rounded-3xl border-[#9B7BFF]/30 mb-16 relative overflow-hidden bg-gradient-to-b from-[#10121A] to-[#0A0B10] shadow-[0_0_40px_rgba(155,123,255,0.1)]">
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/10 mb-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#9B7BFF] to-[#7952F5] flex items-center justify-center shadow-lg">
                <Gift className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-white">
                    {PORTFOLIO_CONFIG.projects[0].title}
                  </h3>
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 font-mono text-[10px] font-semibold border border-emerald-500/30">
                    REAL PROJECT • IN DEVELOPMENT
                  </span>
                </div>
                <span className="text-xs font-mono text-[#9B7BFF]">
                  {PORTFOLIO_CONFIG.projects[0].category}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs text-[#9699A8] font-mono hidden sm:inline">
                Interactive Customizer Demo Below:
              </span>
              <span className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-white">
                v1.2 Beta
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Context & Tech Specs */}
            <div className="lg:col-span-5 space-y-6">
              <p className="text-sm sm:text-base text-[#9699A8] leading-relaxed">
                {PORTFOLIO_CONFIG.projects[0].summary}
              </p>

              <div className="space-y-3 pt-2">
                <span className="text-xs font-mono uppercase tracking-wider text-white/60">
                  Key Capabilities:
                </span>
                <ul className="space-y-2">
                  {PORTFOLIO_CONFIG.projects[0].details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-[#F5F5F7]">
                      <Check className="w-4 h-4 text-[#9B7BFF] shrink-0 mt-0.5" />
                      <span className="text-[#9699A8]">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-2">
                {PORTFOLIO_CONFIG.projects[0].tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-lg bg-white/5 text-[11px] font-mono text-[#42D9FF] border border-white/5"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="p-4 rounded-2xl bg-[#161926]/80 border border-white/5 flex items-start gap-3 text-xs text-[#9699A8]">
                <Info className="w-4 h-4 text-[#9B7BFF] shrink-0 mt-0.5" />
                <span>
                  This bespoke gift builder is actively being built for launch. You can test the dynamic selection engine on the right.
                </span>
              </div>
            </div>

            {/* Right Column: Live Interactive Hamper Builder Simulator */}
            <div className="lg:col-span-7 bg-[#08090D] p-5 sm:p-6 rounded-2xl border border-white/10 shadow-2xl">
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#9B7BFF]" />
                  <span className="text-xs font-mono font-semibold text-white uppercase tracking-wider">
                    Interactive Hamper Simulator
                  </span>
                </div>
                <div className="text-xs font-mono text-[#42D9FF]">
                  Live Dynamic Total:{' '}
                  <span className="text-base font-bold text-white">${hamperTotal}</span>
                </div>
              </div>

              {/* Step 1: Select Box Style */}
              <div className="space-y-2 mb-5">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-[#9699A8]">1. Choose Luxury Box Type:</span>
                  <span className="text-[#9B7BFF] font-medium">{selectedBox} (${boxPrices[selectedBox]})</span>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {(['Matte Obsidian', 'Velvet Rose', 'Minimalist Wood'] as const).map((style) => (
                    <button
                      key={style}
                      onClick={() => setSelectedBox(style)}
                      className={`py-2 px-3 rounded-xl text-xs font-medium transition-all text-center border ${
                        selectedBox === style
                          ? 'border-[#9B7BFF] bg-[#9B7BFF]/20 text-white shadow-[0_0_15px_rgba(155,123,255,0.3)]'
                          : 'border-white/5 bg-white/[0.02] text-[#9699A8] hover:text-white'
                      }`}
                    >
                      {style}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Pick Gourmet Products */}
              <div className="space-y-2 mb-5">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-[#9699A8]">2. Add Gourmet Artisan Treats:</span>
                  <span className="text-xs text-white/50">{selectedItems.length} selected</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-52 overflow-y-auto pr-1">
                  {hamperTreats.map((item) => {
                    const isSelected = selectedItems.includes(item.name);
                    return (
                      <button
                        key={item.name}
                        onClick={() => toggleItem(item.name)}
                        className={`p-2.5 rounded-xl text-xs text-left transition-all border flex items-center justify-between ${
                          isSelected
                            ? 'border-[#42D9FF] bg-[#42D9FF]/10 text-white'
                            : 'border-white/5 bg-white/[0.02] text-[#9699A8] hover:text-white'
                        }`}
                      >
                        <span className="truncate pr-2">{item.name}</span>
                        <div className="flex items-center gap-1.5 shrink-0">
                          <span className="font-mono text-[11px] text-[#42D9FF] font-bold">+${item.price}</span>
                          {isSelected ? (
                            <Check className="w-3.5 h-3.5 text-[#42D9FF]" />
                          ) : (
                            <Plus className="w-3.5 h-3.5 text-white/40" />
                          )}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 3: Current Hamper Summary */}
              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                <div className="space-y-0.5">
                  <div className="text-white font-medium">Bespoke Gifting Package</div>
                  <div className="text-[11px] text-[#9699A8] truncate max-w-sm">
                    {selectedBox} Box + {selectedItems.join(', ')}
                  </div>
                </div>
                <button
                  onClick={() => alert(`Hamper Preview Created!\nPackaging: ${selectedBox}\nItems: ${selectedItems.join(', ')}\nTotal: $${hamperTotal}`)}
                  className="px-4 py-2 rounded-lg bg-gradient-to-r from-[#9B7BFF] to-[#7952F5] text-white font-semibold text-xs whitespace-nowrap shadow-md hover:scale-105 transition-transform"
                >
                  Generate Preview
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* ======================================================== */}
        {/* PROJECT 02 & 03: CONCEPTS & DEMO SHOWCASES              */}
        {/* ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Project 02: Cafe Digital Experience */}
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border-white/10 flex flex-col justify-between hover:border-[#42D9FF]/40 transition-all bg-gradient-to-b from-[#10121A] to-[#08090D]">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#42D9FF]/20 flex items-center justify-center border border-[#42D9FF]/30">
                    <Coffee className="w-5 h-5 text-[#42D9FF]" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-bold text-white">
                      {PORTFOLIO_CONFIG.projects[1].title}
                    </h3>
                    <span className="text-xs font-mono text-[#42D9FF]">
                      {PORTFOLIO_CONFIG.projects[1].category}
                    </span>
                  </div>
                </div>
                <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-[#42D9FF] font-mono text-[10px] font-semibold border border-cyan-500/20">
                  CONCEPT SHOWCASE
                </span>
              </div>

              <p className="text-sm text-[#9699A8] leading-relaxed mb-6">
                {PORTFOLIO_CONFIG.projects[1].summary}
              </p>

              {/* Interactive Mini Menu Browser Inside the Card */}
              <div className="bg-[#08090D] p-4 rounded-2xl border border-white/10 mb-6 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono text-white font-semibold">
                    Digital Menu Demo
                  </span>
                  <div className="flex gap-1">
                    {(['All', 'Coffee', 'Bakery', 'Brunch'] as const).map((cat) => (
                      <button
                        key={cat}
                        onClick={() => setCafeMenuFilter(cat)}
                        className={`px-2 py-0.5 rounded text-[10px] font-mono transition-colors ${
                          cafeMenuFilter === cat
                            ? 'bg-[#42D9FF]/20 text-[#42D9FF] font-bold'
                            : 'text-[#9699A8] hover:text-white'
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  {filteredCafeItems.map((item) => (
                    <div
                      key={item.id}
                      className="p-2 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-between text-xs"
                    >
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#42D9FF]" />
                        <span className="text-[#F5F5F7] font-medium">{item.name}</span>
                        <span className="text-[9px] px-1.5 py-0.2 rounded bg-white/5 text-[#9699A8]">
                          {item.tag}
                        </span>
                      </div>
                      <span className="font-mono text-xs text-[#42D9FF] font-bold">
                        {item.price}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {PORTFOLIO_CONFIG.projects[1].tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-0.5 rounded bg-white/5 text-[10px] font-mono text-[#9699A8]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <a
              href="#bot-demo"
              className="inline-flex items-center justify-between w-full p-3.5 rounded-xl glass-panel text-xs font-semibold text-white hover:border-[#42D9FF] transition-all group"
            >
              <span className="flex items-center gap-2">
                <Eye className="w-4 h-4 text-[#42D9FF]" />
                <span>See The Full Interactive Restaurant Bot Below</span>
              </span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Project 03: Restaurant Automation */}
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border-white/10 flex flex-col justify-between hover:border-[#9B7BFF]/40 transition-all bg-gradient-to-b from-[#10121A] to-[#08090D]">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#9B7BFF]/20 flex items-center justify-center border border-[#9B7BFF]/30">
                    <Bot className="w-5 h-5 text-[#9B7BFF]" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-bold text-white">
                      {PORTFOLIO_CONFIG.projects[2].title}
                    </h3>
                    <span className="text-xs font-mono text-[#9B7BFF]">
                      {PORTFOLIO_CONFIG.projects[2].category}
                    </span>
                  </div>
                </div>
                <span className="px-2.5 py-0.5 rounded-full bg-purple-500/10 text-[#9B7BFF] font-mono text-[10px] font-semibold border border-purple-500/20">
                  WORKFLOW SHOWCASE
                </span>
              </div>

              <p className="text-sm text-[#9699A8] leading-relaxed mb-6">
                {PORTFOLIO_CONFIG.projects[2].summary}
              </p>

              {/* Interactive Architecture Flow Diagram */}
              <div className="bg-[#08090D] p-4 rounded-2xl border border-white/10 mb-6 font-mono text-[11px] space-y-3">
                <span className="text-white/60 uppercase tracking-wider text-[10px]">
                  Autonomous Order Execution Pipeline:
                </span>
                
                <div className="space-y-2">
                  <div className="p-2.5 rounded-lg bg-[#161926] border border-white/5 flex items-center justify-between">
                    <span className="text-[#42D9FF]">01. Customer WhatsApp Ping</span>
                    <span className="text-white/40 text-[10px]">Webhook Ingest</span>
                  </div>
                  <div className="flex justify-center text-white/30 text-xs">↓</div>
                  <div className="p-2.5 rounded-lg bg-[#9B7BFF]/10 border border-[#9B7BFF]/30 flex items-center justify-between">
                    <span className="text-white">02. Bot Natural Parsing</span>
                    <span className="text-emerald-400 text-[10px]">Menu & Cart Match</span>
                  </div>
                  <div className="flex justify-center text-white/30 text-xs">↓</div>
                  <div className="p-2.5 rounded-lg bg-[#161926] border border-white/5 flex items-center justify-between">
                    <span className="text-[#42D9FF]">03. Kitchen Ticket & WhatsApp Confirmation</span>
                    <span className="text-emerald-400 text-[10px]">Instant Receipt</span>
                  </div>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {PORTFOLIO_CONFIG.projects[2].tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-0.5 rounded bg-white/5 text-[10px] font-mono text-[#9699A8]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <a
              href="#bot-demo"
              className="inline-flex items-center justify-between w-full p-3.5 rounded-xl glass-panel text-xs font-semibold text-white hover:border-[#9B7BFF] transition-all group"
            >
              <span className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#9B7BFF]" />
                <span>Experience The Live Bot in Action</span>
              </span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
