import React from 'react';
import { ArrowDownRight, ArrowUpRight } from 'lucide-react';
import { Hero3DCanvas } from './Hero3DCanvas';
import { PORTFOLIO_CONFIG } from '../config/portfolioConfig';

export const HeroSection: React.FC = () => {
  return (
    <section
      id="home"
      className="relative pt-24 sm:pt-32 pb-16 sm:pb-24 border-b border-[#C9C8C0] eink-grid overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center min-h-[calc(100vh-180px)]">
          
          {/* Left Editorial Content */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6 sm:space-y-8">
            
            {/* Small Monospaced Label */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1 bg-[#F9F8F3] border border-[#C9C8C0] rounded-xs text-[11px] font-mono text-[#111111] self-start tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-[#7555FF]" />
              <span>{PORTFOLIO_CONFIG.label}</span>
            </div>

            {/* Massive Swiss Typography Headline */}
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold text-[#111111] leading-[1.05] tracking-tight">
              I BUILD DIGITAL EXPERIENCES THAT{' '}
              <span className="underline decoration-[#7555FF] decoration-wavy decoration-2 underline-offset-8">
                BUILD BUSINESSES.
              </span>
            </h1>

            {/* Supporting Editorial Description */}
            <p className="text-base sm:text-lg md:text-xl text-[#73736D] max-w-2xl font-normal leading-relaxed">
              {PORTFOLIO_CONFIG.description}
            </p>

            {/* Tactile Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                href="#projects"
                className="btn-tactile px-6 py-4 text-xs font-mono font-semibold tracking-wider uppercase inline-flex items-center justify-center gap-2 rounded-xs"
              >
                <span>EXPLORE WORK</span>
                <ArrowDownRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="btn-tactile-ghost px-6 py-4 text-xs font-mono font-semibold tracking-wider uppercase inline-flex items-center justify-center gap-2 rounded-xs"
              >
                <span>LET'S TALK</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            {/* Minimalist Metadata Grid */}
            <div className="pt-6 border-t border-[#C9C8C0] grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs font-mono text-[#73736D]">
              <div>
                <span className="block text-[10px] text-[#73736D]/70 uppercase tracking-widest">SPECIALIZATION</span>
                <span className="text-[#111111] font-medium">Bespoke Web & Cafes</span>
              </div>
              <div>
                <span className="block text-[10px] text-[#73736D]/70 uppercase tracking-widest">AUTOMATION</span>
                <span className="text-[#111111] font-medium">WhatsApp Bots & APIs</span>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <span className="block text-[10px] text-[#73736D]/70 uppercase tracking-widest">STANDARD</span>
                <span className="text-[#7555FF] font-medium">100% Zero Bloat</span>
              </div>
            </div>

          </div>

          {/* Right Signature 3D Sculpture Viewport */}
          <div className="lg:col-span-5 relative flex items-center justify-center min-h-[380px] sm:min-h-[460px] lg:min-h-[540px]">
            {/* Minimalist Editorial Frame */}
            <div className="w-full h-full absolute inset-0 border border-[#C9C8C0] bg-[#F9F8F3] overflow-hidden rounded-xs">
              <Hero3DCanvas />

              {/* Technical Canvas Stamp */}
              <div className="absolute top-3 left-3 px-2 py-1 bg-[#F2F1EB]/90 border border-[#C9C8C0] text-[9px] font-mono text-[#73736D] rounded-xs pointer-events-none">
                FIG. 01 — KINETIC SCULPTURE [3D]
              </div>

              <div className="absolute bottom-3 right-3 px-2 py-1 bg-[#F2F1EB]/90 border border-[#C9C8C0] text-[9px] font-mono text-[#7555FF] rounded-xs pointer-events-none">
                POINTER DAMPED • 60 FPS
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
