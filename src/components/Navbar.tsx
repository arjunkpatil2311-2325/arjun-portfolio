import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { PORTFOLIO_CONFIG } from '../config/portfolioConfig';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'WORK', href: '#projects' },
    { name: 'SERVICES', href: '#services' },
    { name: 'BOT DEMO', href: '#bot-demo' },
    { name: 'CONTACT', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${isScrolled
        ? 'bg-[#F2F1EB]/90 backdrop-blur-md border-b border-[#C9C8C0] py-3.5 shadow-xs'
        : 'bg-[#F2F1EB] border-b border-[#C9C8C0]/60 py-4 sm:py-5'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between" aria-label="Main Navigation">

          {/* Brand Logo & Editorial Index */}
          <a
            href="#home"
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="w-7 h-7 bg-[#111111] text-[#F2F1EB] rounded-xs flex items-center justify-center font-heading font-extrabold text-sm tracking-tight transition-transform group-hover:scale-95">
              A
            </div>
            <div className="flex items-center gap-2">
              <span className="font-heading font-bold text-base tracking-tight text-[#111111]">
                {PORTFOLIO_CONFIG.name}
              </span>
              <span className="text-[10px] font-mono text-[#73736D] px-1.5 py-0.5 border border-[#C9C8C0] rounded-xs hidden sm:inline">
                DEV / AUTO
              </span>
            </div>
          </a>

          {/* Desktop Links & Availability */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-6 text-xs font-mono tracking-wider font-semibold">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`relative py-1 transition-colors ${isActive
                      ? 'text-[#7555FF] font-bold'
                      : 'text-[#111111] hover:text-[#7555FF]'
                      }`}
                  >
                    <span>{link.name}</span>
                    {isActive && (
                      <span className="absolute -bottom-1 left-0 right-0 h-[1.5px] bg-[#7555FF]" />
                    )}
                  </a>
                );
              })}
            </div>

            {/* Availability Pill */}
            <div className="flex items-center gap-2 px-2.5 py-1 rounded-xs border border-[#C9C8C0] bg-[#F9F8F3] text-[10px] font-mono text-[#111111]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#7555FF] animate-pulse" />
              <span>{PORTFOLIO_CONFIG.contact.availability}</span>
            </div>

            {/* Direct Talk CTA */}
            <a
              href="#contact"
              className="btn-tactile px-4 py-2 text-xs font-mono tracking-wider uppercase flex items-center gap-1.5 rounded-xs"
            >
              <span>LET'S TALK</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href="#contact"
              className="btn-tactile px-3 py-1.5 text-xs font-mono rounded-xs"
            >
              TALK
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#111111] border border-[#C9C8C0] bg-[#F9F8F3] rounded-xs focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </nav>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#C9C8C0] bg-[#F2F1EB] px-4 py-4 space-y-3">
          <div className="flex items-center justify-between pb-2 border-b border-[#C9C8C0] text-[11px] font-mono text-[#73736D]">
            <span>INDEX / NAVIGATION</span>
            <span className="text-[#7555FF]">● ACTIVE</span>
          </div>

          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between py-2 text-sm font-mono font-semibold text-[#111111] border-b border-[#C9C8C0]/40 hover:text-[#7555FF]"
              >
                <span>{link.name}</span>
                <ArrowUpRight className="w-4 h-4 text-[#73736D]" />
              </a>
            ))}
          </div>

          <div className="pt-2">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-tactile w-full py-3 flex items-center justify-center gap-2 text-xs font-mono uppercase tracking-wider rounded-xs"
            >
              <span>LET'S TALK</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
