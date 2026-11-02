import React from 'react';
import { Sparkles, Bot, Layers, ArrowRight, Zap, Coffee } from 'lucide-react';
import { Hero3DCanvas } from './Hero3DCanvas';
import { PORTFOLIO_CONFIG } from '../config/portfolioConfig';

export const HeroSection: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-grid-pattern"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full radial-glow pointer-events-none blur-3xl" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] rounded-full radial-glow-cyan pointer-events-none blur-3xl opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center min-h-[calc(100vh-140px)]">
          
          {/* Left Column: Typography, Tagline, CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6 sm:space-y-8 text-center lg:text-left">
            
            {/* Top pill badge */}
            <div className="inline-flex items-center gap-2 self-center lg:self-start px-3.5 py-1.5 rounded-full glass-pill border-[#9B7BFF]/30 text-xs text-[#F5F5F7]">
              <span className="flex h-2 w-2 rounded-full bg-[#9B7BFF] shadow-[0_0_8px_#9B7BFF] animate-pulse" />
              <span className="font-mono text-[#9B7BFF] font-medium">CREATIVE DEV & AUTOMATION</span>
              <span className="text-white/20">|</span>
              <span className="text-[#9699A8] hidden sm:inline">Cafes, Restaurants & Brands</span>
            </div>

            {/* Massive headline */}
            <div className="space-y-3">
              <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold tracking-tight leading-[1.08] text-[#F5F5F7]">
                I BUILD <span className="text-gradient">DIGITAL</span>{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9B7BFF] via-[#7952F5] to-[#42D9FF]">
                  EXPERIENCES
                </span>{' '}
                THAT BUILD BUSINESSES.
              </h1>
            </div>

            {/* Supporting description */}
            <p className="text-base sm:text-lg md:text-xl text-[#9699A8] max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              {PORTFOLIO_CONFIG.subtagline} Tailored to eliminate friction, automate customer ordering, and turn visits into loyal patrons.
            </p>

            {/* High-Impact CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl text-sm font-semibold tracking-wide text-white bg-gradient-to-r from-[#9B7BFF] to-[#7952F5] hover:from-[#ab8dff] hover:to-[#8c67f7] shadow-[0_10px_30px_rgba(155,123,255,0.4)] transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-sm font-semibold tracking-wide text-[#F5F5F7] glass-panel hover:bg-white/10 hover:border-[#42D9FF]/40 transition-all border-white/10"
              >
                <Sparkles className="w-4 h-4 text-[#42D9FF]" />
                <span>Let's Build Something</span>
              </a>
            </div>

            {/* Social proof & Capability highlights */}
            <div className="pt-4 border-t border-white/5 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-[#9699A8]">
              <div className="flex items-center gap-2">
                <Coffee className="w-4 h-4 text-[#9B7BFF]" />
                <span>Specialized for Food & Cafes</span>
              </div>
              <div className="flex items-center gap-2">
                <Bot className="w-4 h-4 text-[#42D9FF]" />
                <span>WhatsApp Ordering Automations</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-emerald-400" />
                <span>Zero-Latency Performance</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive 3D Canvas Showcase */}
          <div className="lg:col-span-5 relative flex items-center justify-center min-h-[420px] sm:min-h-[500px] lg:min-h-[580px]">
            
            {/* The Three.js 3D Viewport */}
            <div className="w-full h-full absolute inset-0 rounded-3xl overflow-hidden">
              <Hero3DCanvas />
            </div>

            {/* Floating Glassmorphic UI badges layered around the 3D element */}
            <div className="absolute -top-3 right-4 sm:right-6 glass-panel px-3.5 py-2 rounded-xl text-xs font-mono text-[#F5F5F7] shadow-xl border-white/10 animate-pulse-subtle z-20 pointer-events-none hidden sm:flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>WhatsApp Bot: Online</span>
            </div>

            <div className="absolute bottom-6 left-2 sm:-left-4 glass-panel px-4 py-2.5 rounded-xl text-xs text-[#F5F5F7] shadow-2xl border-white/10 z-20 pointer-events-none hidden sm:block">
              <div className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-[#9B7BFF]" />
                <div>
                  <div className="font-semibold text-white">Full-Stack Digital</div>
                  <div className="text-[10px] text-[#9699A8]">Three.js • React • Webhooks</div>
                </div>
              </div>
            </div>

            <div className="absolute bottom-16 right-2 glass-panel px-3.5 py-2 rounded-xl text-xs font-mono text-[#42D9FF] shadow-xl border-cyan-500/20 z-20 pointer-events-none hidden md:flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Interactive 3D Centerpiece</span>
            </div>

            <div className="absolute inset-0 border border-white/5 rounded-3xl pointer-events-none" />
          </div>

        </div>
      </div>

      {/* Subtle Scroll Indicator */}
      <a
        href="#about"
        className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-xs text-[#9699A8] hover:text-white transition-colors group z-20"
        aria-label="Scroll to About section"
      >
        <span className="font-mono text-[10px] tracking-widest uppercase opacity-75">SCROLL TO DISCOVER</span>
        <div className="w-5 h-9 rounded-full border border-white/20 flex items-start justify-center p-1 group-hover:border-[#9B7BFF] transition-colors">
          <div className="w-1.5 h-2 bg-[#9B7BFF] rounded-full animate-bounce" />
        </div>
      </a>
    </section>
  );
};
