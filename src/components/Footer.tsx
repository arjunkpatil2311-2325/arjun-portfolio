import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
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
    <footer className="border-t border-[#C9C8C0] bg-[#F2F1EB] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-[#C9C8C0]/60">
          
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-[#111111] text-[#F2F1EB] flex items-center justify-center font-heading font-extrabold text-xs">
              A
            </div>
            <span className="font-heading font-bold text-base text-[#111111]">
              {PORTFOLIO_CONFIG.name}.
            </span>
            <span className="text-xs font-mono text-[#73736D]">
              / E-INK EDITION
            </span>
          </div>

          {/* Live Clock & Back to Top */}
          <div className="flex items-center gap-4 text-xs font-mono">
            <div className="flex items-center gap-2 px-2.5 py-1 bg-[#F9F8F3] border border-[#C9C8C0] text-[#111111]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#7555FF] animate-ping" />
              <span>{currentTime || 'LIVE CLOCK'}</span>
              <span className="text-[#73736D] text-[10px]">IST / REMOTE</span>
            </div>

            <button
              onClick={scrollToTop}
              className="btn-tactile-ghost px-2.5 py-1 text-xs font-mono inline-flex items-center gap-1 rounded-xs"
              aria-label="Back to top"
            >
              <span>TOP</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Bottom Credits */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-[#73736D]">
          <div>
            © {new Date().getFullYear()} ARJUN. Independent Web Developer & Automation Creator.
          </div>
          <div className="flex items-center gap-3">
            <span>SWISS EDITORIAL SYSTEM</span>
            <span>•</span>
            <span>THREE.JS 3D SCULPTURE</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
