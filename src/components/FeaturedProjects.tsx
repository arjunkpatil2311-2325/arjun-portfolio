import React, { useState } from 'react';
import { Gift, Coffee, ArrowUpRight, ExternalLink } from 'lucide-react';
import { PORTFOLIO_CONFIG } from '../config/portfolioConfig';

export const FeaturedProjects: React.FC = () => {
  // HamperHub interactive mini builder state
  const [selectedBox, setSelectedBox] = useState<'Matte Obsidian' | 'Paper Kraft' | 'Minimalist Wood'>('Matte Obsidian');
  const [selectedItems, setSelectedItems] = useState<string[]>([
    'Artisan Single-Origin Coffee Beans',
    'Handmade Dark Chocolate Truffles'
  ]);

  const hamperTreats = [
    { name: 'Artisan Single-Origin Coffee Beans', price: 16 },
    { name: 'Handmade Dark Chocolate Truffles', price: 14 },
    { name: 'Cold-Pressed Forest Honey', price: 18 },
    { name: 'Minimalist Ceramic Cup', price: 22 },
    { name: 'Sea Salt & Caramel Wafers', price: 12 },
  ];

  const boxPrices = {
    'Matte Obsidian': 25,
    'Paper Kraft': 20,
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

  // Filter for Cafe digital menu concept
  const [cafeCategory, setCafeCategory] = useState<'All' | 'Roasts' | 'Bakery'>('All');

  const sampleCafeMenu = [
    { name: 'Cold Brew Tonic', cat: 'Roasts', price: '$5.50', note: 'Single-origin Ethiopian, elderflower' },
    { name: 'Velvet Flat White', cat: 'Roasts', price: '$4.80', note: 'Double ristretto, oat microfoam' },
    { name: 'Matcha Basque Tart', cat: 'Bakery', price: '$6.50', note: 'Ceremonial grade Uji matcha' },
    { name: 'Sourdough Truffle Toast', cat: 'Bakery', price: '$11.00', note: 'Poached egg, shaved black truffle' },
  ];

  const filteredCafeMenu =
    cafeCategory === 'All'
      ? sampleCafeMenu
      : sampleCafeMenu.filter((i) => i.cat === cafeCategory);

  return (
    <section id="projects" className="py-20 sm:py-28 border-b border-[#C9C8C0] bg-[#F2F1EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-10 border-b border-[#C9C8C0] mb-12">
          <div>
            <div className="text-[11px] font-mono text-[#7555FF] tracking-wider uppercase mb-2">
              [ 03 // ARCHIVE ]
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#111111] tracking-tight">
              SELECTED WORK.
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-mono text-[#73736D] max-w-sm mt-4 sm:mt-0 leading-relaxed">
            Real production builds under active development and functional architecture demonstrations. No fabricated metrics.
          </p>
        </div>

        <div className="space-y-12">

          {/* ========================================================= */}
          {/* PROJECT 01 — HAMPERHUB (Real Project)                     */}
          {/* ========================================================= */}
          <div className="eink-panel p-6 sm:p-10 rounded-xs border-[#111111] shadow-[4px_4px_0px_#111111] relative">
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#C9C8C0] mb-8">
              <div className="flex items-center gap-3">
                <span className="font-mono text-2xl sm:text-3xl font-extrabold text-[#111111]">01</span>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#111111]">
                      {PORTFOLIO_CONFIG.projects[0].title}
                    </h3>
                    <span className="px-2 py-0.5 bg-[#111111] text-[#F2F1EB] font-mono text-[9px] font-semibold tracking-wider rounded-xs uppercase">
                      {PORTFOLIO_CONFIG.projects[0].badge}
                    </span>
                  </div>
                  <span className="text-xs font-mono text-[#7555FF]">
                    {PORTFOLIO_CONFIG.projects[0].category}
                  </span>
                </div>
              </div>

              {/* Real Project Link */}
              <a
                href={PORTFOLIO_CONFIG.projects[0].githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-tactile-ghost px-3.5 py-1.5 text-xs font-mono inline-flex items-center gap-1.5 rounded-xs"
              >
                <span>GITHUB REPO</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

              {/* Left Column: Context & Tech */}
              <div className="lg:col-span-5 space-y-5">
                <p className="text-sm text-[#73736D] leading-relaxed">
                  {PORTFOLIO_CONFIG.projects[0].summary}
                </p>

                <div className="space-y-2 pt-2">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#73736D]">
                    CORE CAPABILITIES:
                  </span>
                  <ul className="space-y-2 text-xs font-mono text-[#111111]">
                    {PORTFOLIO_CONFIG.projects[0].highlights.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-[#7555FF]">▪</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {PORTFOLIO_CONFIG.projects[0].tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 border border-[#C9C8C0] bg-[#F2F1EB] text-[10px] font-mono text-[#111111]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right Column: Live Interactive Hamper Customizer Simulator */}
              <div className="lg:col-span-7 bg-[#F2F1EB] p-5 sm:p-6 border border-[#C9C8C0] rounded-xs space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-[#C9C8C0]">
                  <div className="flex items-center gap-2">
                    <Gift className="w-4 h-4 text-[#7555FF]" />
                    <span className="text-xs font-mono font-bold text-[#111111] uppercase tracking-wider">
                      HAMPER CUSTOMIZER SIMULATOR
                    </span>
                  </div>
                  <span className="text-xs font-mono font-bold text-[#7555FF]">
                    TOTAL: ${hamperTotal}
                  </span>
                </div>

                {/* Box Selector */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-mono uppercase text-[#73736D] block">
                    1. Select Box Packaging:
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {(['Matte Obsidian', 'Paper Kraft', 'Minimalist Wood'] as const).map((style) => (
                      <button
                        key={style}
                        onClick={() => setSelectedBox(style)}
                        className={`py-2 px-2 text-center text-xs font-mono transition-all border ${selectedBox === style
                          ? 'bg-[#111111] text-[#F2F1EB] border-[#111111] font-semibold'
                          : 'bg-white text-[#111111] border-[#C9C8C0] hover:border-[#111111]'
                          }`}
                      >
                        {style} (${boxPrices[style]})
                      </button>
                    ))}
                  </div>
                </div>

                {/* Treats Selector */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-mono uppercase text-[#73736D] block">
                    2. Select Gourmet Treats ({selectedItems.length} selected):
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {hamperTreats.map((t) => {
                      const isSelected = selectedItems.includes(t.name);
                      return (
                        <button
                          key={t.name}
                          onClick={() => toggleItem(t.name)}
                          className={`p-2 text-xs font-mono text-left border flex items-center justify-between transition-colors ${isSelected
                            ? 'bg-[#F9F8F3] border-[#7555FF] text-[#111111]'
                            : 'bg-white border-[#C9C8C0] text-[#73736D] hover:border-[#111111]'
                            }`}
                        >
                          <span className="truncate pr-1">{t.name}</span>
                          <span className="shrink-0 text-[11px] font-bold text-[#7555FF]">
                            +${t.price}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Simulated Order Summary Bar */}
                <div className="p-3 bg-[#F9F8F3] border border-[#C9C8C0] flex items-center justify-between text-xs font-mono">
                  <span className="text-[#73736D] truncate max-w-xs">
                    {selectedBox} + {selectedItems.length} items
                  </span>
                  <span className="font-bold text-[#111111]">Ready for Build</span>
                </div>
              </div>

            </div>
          </div>

          {/* ========================================================= */}
          {/* PROJECT 02 & 03 — CONCEPTS (Clean Editorial Split)       */}
          {/* ========================================================= */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

            {/* Project 02: Restaurant Digital Experience */}
            <div className="eink-panel p-6 sm:p-8 rounded-xs eink-panel-hover flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-[#C9C8C0] mb-5">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xl font-bold text-[#111111]">02</span>
                    <div>
                      <h4 className="font-heading text-xl font-bold text-[#111111]">
                        {PORTFOLIO_CONFIG.projects[1].title}
                      </h4>
                      <span className="text-[10px] font-mono text-[#7555FF]">
                        {PORTFOLIO_CONFIG.projects[1].category}
                      </span>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 border border-[#C9C8C0] text-[9px] font-mono text-[#73736D] uppercase">
                    {PORTFOLIO_CONFIG.projects[1].badge}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-[#73736D] leading-relaxed mb-5">
                  {PORTFOLIO_CONFIG.projects[1].summary}
                </p>

                {/* Interactive Menu Preview */}
                <div className="bg-[#F2F1EB] p-4 border border-[#C9C8C0] rounded-xs mb-5 space-y-2.5">
                  <div className="flex items-center justify-between pb-2 border-b border-[#C9C8C0]/60">
                    <div className="flex items-center gap-1.5">
                      <Coffee className="w-3.5 h-3.5 text-[#111111]" />
                      <span className="text-[11px] font-mono font-bold text-[#111111]">
                        CAFE MENU PREVIEW
                      </span>
                    </div>
                    <div className="flex gap-1">
                      {(['All', 'Roasts', 'Bakery'] as const).map((c) => (
                        <button
                          key={c}
                          onClick={() => setCafeCategory(c)}
                          className={`px-1.5 py-0.5 text-[9px] font-mono ${cafeCategory === c
                            ? 'bg-[#111111] text-[#F2F1EB]'
                            : 'text-[#73736D] hover:text-[#111111]'
                            }`}
                        >
                          {c}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    {filteredCafeMenu.map((item) => (
                      <div
                        key={item.name}
                        className="flex items-center justify-between text-xs font-mono p-1.5 bg-white border border-[#C9C8C0]/40"
                      >
                        <div>
                          <div className="font-semibold text-[#111111]">{item.name}</div>
                          <div className="text-[10px] text-[#73736D]">{item.note}</div>
                        </div>
                        <span className="font-bold text-[#7555FF]">{item.price}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <a
                href="#bot-demo"
                className="btn-tactile-ghost w-full py-2.5 text-xs font-mono uppercase tracking-wider inline-flex items-center justify-center gap-1.5 rounded-xs"
              >
                <span>TEST THE CAFE BOT DEMO</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Project 03: Restaurant Automation Concept */}
            <div className="eink-panel p-6 sm:p-8 rounded-xs eink-panel-hover flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-[#C9C8C0] mb-5">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xl font-bold text-[#111111]">03</span>
                    <div>
                      <h4 className="font-heading text-xl font-bold text-[#111111]">
                        {PORTFOLIO_CONFIG.projects[2].title}
                      </h4>
                      <span className="text-[10px] font-mono text-[#7555FF]">
                        {PORTFOLIO_CONFIG.projects[2].category}
                      </span>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 border border-[#C9C8C0] text-[9px] font-mono text-[#73736D] uppercase">
                    {PORTFOLIO_CONFIG.projects[2].badge}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-[#73736D] leading-relaxed mb-5">
                  {PORTFOLIO_CONFIG.projects[2].summary}
                </p>

                {/* Architecture Pipeline Visualizer */}
                <div className="bg-[#F2F1EB] p-4 border border-[#C9C8C0] rounded-xs mb-5 font-mono text-xs space-y-2">
                  <span className="text-[10px] text-[#73736D] uppercase tracking-wider block">
                    AUTONOMOUS WORKFLOW HOOK:
                  </span>

                  <div className="p-2 bg-white border border-[#C9C8C0] flex items-center justify-between">
                    <span>1. Guest WhatsApp Ping</span>
                    <span className="text-[#7555FF] font-semibold">Instant Webhook</span>
                  </div>
                  <div className="text-center text-[#73736D] text-[10px]">↓</div>
                  <div className="p-2 bg-white border border-[#C9C8C0] flex items-center justify-between">
                    <span>2. NLP Order & FAQ Match</span>
                    <span className="text-[#43BFD0] font-semibold">0.2s Response</span>
                  </div>
                  <div className="text-center text-[#73736D] text-[10px]">↓</div>
                  <div className="p-2 bg-white border border-[#C9C8C0] flex items-center justify-between">
                    <span>3. Kitchen Slip & WhatsApp Ticket</span>
                    <span className="text-emerald-600 font-semibold">0% Comm.</span>
                  </div>
                </div>
              </div>

              <a
                href="#bot-demo"
                className="btn-tactile-ghost w-full py-2.5 text-xs font-mono uppercase tracking-wider inline-flex items-center justify-center gap-1.5 rounded-xs"
              >
                <span>OPEN INTERACTIVE DEMO</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
