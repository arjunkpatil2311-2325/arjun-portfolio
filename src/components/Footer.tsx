import React, { useState, useEffect } from 'react';
import { ArrowUp, MessageCircle } from 'lucide-react';
import { PORTFOLIO_CONFIG } from '../config/portfolioConfig';

export const Footer: React.FC = () => {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050608] border-t border-white/5 pt-16 pb-12 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] radial-glow pointer-events-none blur-3xl opacity-15" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/5">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#9B7BFF] to-[#42D9FF] p-[1px] flex items-center justify-center">
                <div className="w-full h-full bg-[#08090D] rounded-[7px] flex items-center justify-center">
                  <span className="font-heading font-extrabold text-sm text-transparent bg-clip-text bg-gradient-to-r from-[#9B7BFF] to-[#42D9FF]">
                    A
                  </span>
                </div>
              </div>
              <span className="font-heading text-xl font-bold tracking-wider text-white">
                {PORTFOLIO_CONFIG.name}.
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[#9699A8] max-w-sm leading-relaxed">
              Creative web developer and automation creator building digital experiences, digital menus, and WhatsApp bots that power modern businesses.
            </p>

            <div className="flex items-center gap-2 text-xs font-mono text-[#9699A8] pt-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for freelance contracts & partnerships</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-white font-semibold">
              Navigation
            </div>
            <ul className="space-y-2 text-xs text-[#9699A8]">
              <li>
                <a href="#home" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Capabilities
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Services for Cafes & Brands
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-white transition-colors">
                  Featured Projects & HamperHub
                </a>
              </li>
              <li>
                <a href="#bot-demo" className="hover:text-white transition-colors">
                  Interactive Restaurant Bot Demo
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact & WhatsApp
                </a>
              </li>
            </ul>
          </div>

          {/* Real-time Status & Back to Top */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-4">
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-white font-semibold mb-3">
                Current Local Time
              </div>
              <div className="p-3.5 rounded-2xl glass-panel border-white/5 inline-flex items-center gap-3 font-mono text-xs">
                <span className="w-2 h-2 rounded-full bg-[#42D9FF] animate-ping" />
                <span className="text-white font-bold">{currentTime || 'Live Clock'}</span>
                <span className="text-[#9699A8] text-[10px]">IST / Global Remote</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              {/* GitHub SVG */}
              <a
                href={PORTFOLIO_CONFIG.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center text-[#9699A8] hover:text-white hover:bg-white/10 transition-colors"
                aria-label="GitHub"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>

              {/* LinkedIn SVG */}
              <a
                href={PORTFOLIO_CONFIG.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center text-[#9699A8] hover:text-white hover:bg-white/10 transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>

              {/* WhatsApp icon */}
              <a
                href={`https://wa.me/${PORTFOLIO_CONFIG.contact.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center text-emerald-400 hover:text-white hover:bg-emerald-500/20 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>

              <button
                onClick={scrollToTop}
                className="ml-auto inline-flex items-center gap-1.5 px-3 py-2 rounded-xl glass-panel text-xs text-[#9699A8] hover:text-white hover:border-white/20 transition-all"
                aria-label="Scroll back to top"
              >
                <span>Back to Top</span>
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#9699A8]">
          <div className="flex items-center gap-1">
            <span>© {new Date().getFullYear()} ARJUN. Crafted for ambitious businesses.</span>
          </div>

          <div className="flex items-center gap-4 text-[11px] font-mono">
            <span>Awwwards-Inspired Dark Aesthetic</span>
            <span>•</span>
            <span>Three.js 3D Acceleration</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
