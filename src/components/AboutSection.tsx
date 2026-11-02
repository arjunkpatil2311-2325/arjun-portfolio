import React from 'react';
import { Palette, Terminal, Cpu, CheckCircle2, Sparkles, ArrowRight } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const capabilities = [
    {
      number: '01',
      title: 'DESIGN',
      tagline: 'Visual Impact & Intuition',
      description: 'Beautiful, modern and responsive digital experiences engineered to command attention and create emotional connection with your audience.',
      icon: Palette,
      accent: 'from-[#9B7BFF] to-[#7952F5]',
      borderGlow: 'hover:border-[#9B7BFF]/50',
      points: [
        'Aesthetic dark-mode luxury layouts',
        'Mobile-first touch ergonomics',
        '3D interactive depth & micro-interactions',
        'Brand-aligned typography & color systems'
      ]
    },
    {
      number: '02',
      title: 'DEVELOPMENT',
      tagline: 'Speed, Reliability & Precision',
      description: 'Fast, functional and reliable websites built with modern frameworks to ensure instantaneous load times, SEO visibility, and rock-solid uptime.',
      icon: Terminal,
      accent: 'from-[#42D9FF] to-[#0099FF]',
      borderGlow: 'hover:border-[#42D9FF]/50',
      points: [
        'React, TypeScript & modern web standards',
        'Sub-second page speeds & Core Web Vitals',
        'Interactive digital menus & calculators',
        'Clean, maintainable, modular codebase'
      ]
    },
    {
      number: '03',
      title: 'AUTOMATION',
      tagline: 'Autonomous Business Operations',
      description: 'Smart bots and automated systems that simplify business operations, answer customer questions 24/7, and capture revenue while you sleep.',
      icon: Cpu,
      accent: 'from-[#9B7BFF] to-[#42D9FF]',
      borderGlow: 'hover:border-[#9B7BFF]/50',
      points: [
        'WhatsApp customer ordering & FAQ bots',
        'Direct-to-kitchen order dispatch',
        'Zero commission platform fees',
        'Automated booking & customer capture'
      ]
    }
  ];

  return (
    <section id="about" className="py-24 sm:py-32 relative bg-[#08090D] overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-0 w-96 h-96 radial-glow pointer-events-none blur-3xl opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-pill text-xs font-mono text-[#9B7BFF] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>WHO I AM & WHAT I DO</span>
          </div>
          
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#F5F5F7] tracking-tight leading-tight mb-6">
            NOT JUST WEBSITES.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9B7BFF] to-[#42D9FF]">
              DIGITAL SOLUTIONS.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[#9699A8] leading-relaxed">
            I'm a creative web developer focused on building modern digital experiences and smart automation systems that help businesses work better, connect with customers and grow online.
          </p>
        </div>

        {/* 3 Capability Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {capabilities.map((cap) => {
            const Icon = cap.icon;
            return (
              <div
                key={cap.number}
                className={`group relative p-8 rounded-3xl glass-panel ${cap.borderGlow} transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between`}
              >
                {/* Top card bar with number and icon */}
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-mono text-2xl font-bold text-white/30 group-hover:text-white/60 transition-colors">
                      {cap.number}
                    </span>
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${cap.accent} p-[1px] shadow-lg`}>
                      <div className="w-full h-full bg-[#10121A] rounded-[15px] flex items-center justify-center group-hover:bg-transparent transition-colors">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <div className="mb-4">
                    <h3 className="font-heading text-2xl font-bold text-[#F5F5F7] tracking-wide mb-1">
                      {cap.title}
                    </h3>
                    <div className="text-xs font-mono text-[#9B7BFF] uppercase tracking-wider">
                      {cap.tagline}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-[#9699A8] leading-relaxed mb-6">
                    {cap.description}
                  </p>

                  {/* Key bullet points */}
                  <ul className="space-y-2.5 pt-4 border-t border-white/5">
                    {cap.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs text-[#F5F5F7]">
                        <CheckCircle2 className="w-4 h-4 text-[#42D9FF] shrink-0 mt-0.5" />
                        <span className="text-[#9699A8] group-hover:text-[#F5F5F7] transition-colors">
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom interactive indicator */}
                <div className="pt-8 mt-6 border-t border-white/5 flex items-center justify-between text-xs font-semibold text-[#9699A8] group-hover:text-white transition-colors">
                  <span>Learn more in services</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Cafe & Food Business Specific Value Callout */}
        <div className="mt-16 p-8 rounded-3xl glass-panel border-[#9B7BFF]/20 relative overflow-hidden bg-gradient-to-r from-[#10121A] to-[#161926]">
          <div className="absolute right-0 top-0 w-80 h-full bg-gradient-to-l from-[#9B7BFF]/10 to-transparent pointer-events-none" />
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 relative z-10">
            <div className="space-y-2 text-center lg:text-left">
              <span className="text-xs font-mono uppercase tracking-widest text-[#42D9FF]">Specialized Advantage</span>
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-white">
                Are you a cafe or restaurant owner tired of 25–30% delivery app commissions?
              </h3>
              <p className="text-sm text-[#9699A8] max-w-2xl">
                I build direct digital menus and WhatsApp bots where your customers order straight to your kitchen — keep 100% of your margins and build your own customer database.
              </p>
            </div>
            <a
              href="#bot-demo"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-sm border border-white/15 hover:border-[#42D9FF] transition-all whitespace-nowrap shadow-lg"
            >
              <span>Test The Interactive Cafe Bot</span>
              <ArrowRight className="w-4 h-4 text-[#42D9FF]" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

