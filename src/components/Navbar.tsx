import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { PORTFOLIO_CONFIG } from '../config/portfolioConfig';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Bot Demo', href: '#bot-demo' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? 'py-3' : 'py-5 md:py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav
          className={`flex items-center justify-between px-5 py-3 rounded-2xl transition-all duration-300 ${
            isScrolled
              ? 'glass-panel shadow-[0_10px_30px_rgba(0,0,0,0.5)] border-white/10'
              : 'bg-[#10121A]/60 backdrop-blur-md border border-white/5'
          }`}
          aria-label="Main Navigation"
        >
          {/* Brand Logo */}
          <a
            href="#home"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9B7BFF] rounded-lg"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#9B7BFF] to-[#42D9FF] p-[1px] flex items-center justify-center shadow-[0_0_15px_rgba(155,123,255,0.4)]">
              <div className="w-full h-full bg-[#08090D] rounded-[7px] flex items-center justify-center">
                <span className="font-heading font-extrabold text-sm text-transparent bg-clip-text bg-gradient-to-r from-[#9B7BFF] to-[#42D9FF]">
                  A
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-heading text-lg font-bold tracking-wider text-[#F5F5F7] group-hover:text-[#42D9FF] transition-colors">
                  {PORTFOLIO_CONFIG.name}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#42D9FF] shadow-[0_0_8px_#42D9FF]" />
              </div>
              <span className="text-[10px] text-[#9699A8] hidden sm:block tracking-widest uppercase font-mono">
                Web Dev & Automation
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative px-3.5 py-1.5 rounded-full text-xs lg:text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-white bg-white/10 shadow-inner'
                      : 'text-[#9699A8] hover:text-[#F5F5F7] hover:bg-white/5'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#9B7BFF] shadow-[0_0_8px_#9B7BFF]" />
                  )}
                </a>
              );
            })}
          </div>

          {/* Availability Badge & CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[11px] text-emerald-400 font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for Projects</span>
            </div>

            <a
              href="#contact"
              className="relative inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider text-white overflow-hidden group bg-gradient-to-r from-[#9B7BFF] to-[#7952F5] hover:from-[#aa8aff] hover:to-[#8a65f7] shadow-[0_0_20px_rgba(155,123,255,0.35)] transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Let's Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href="#contact"
              className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-[#9B7BFF]/20 text-[#9B7BFF] border border-[#9B7BFF]/30"
            >
              Let's Talk
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-[#9699A8] hover:text-white hover:bg-white/5 transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-4 top-20 z-50 p-5 rounded-2xl glass-panel border-white/10 shadow-2xl bg-[#08090D]/95 backdrop-blur-2xl animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-2">
              <span className="text-xs uppercase tracking-wider text-[#9699A8] font-mono">
                Navigation
              </span>
              <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-mono">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Available Q1/Q2
              </div>
            </div>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                  activeSection === link.href.substring(1)
                    ? 'text-white bg-[#9B7BFF]/20 border border-[#9B7BFF]/30'
                    : 'text-[#9699A8] hover:text-white hover:bg-white/5'
                }`}
              >
                <span>{link.name}</span>
                <ArrowUpRight className="w-4 h-4 opacity-50" />
              </a>
            ))}
            <div className="pt-3 border-t border-white/10 mt-2">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-[#9B7BFF] to-[#42D9FF] text-white font-semibold text-sm shadow-[0_0_20px_rgba(155,123,255,0.4)]"
              >
                <Sparkles className="w-4 h-4" />
                <span>Start a Project</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

