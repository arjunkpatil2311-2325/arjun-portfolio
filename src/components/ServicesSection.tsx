import React, { useState } from 'react';
import {
  Globe,
  UtensilsCrossed,
  Bot,
  Sparkles,
  Check,
  ArrowRight,
  MessageSquareCode,
  QrCode,
  Zap,
  Smartphone
} from 'lucide-react';
import { PORTFOLIO_CONFIG } from '../config/portfolioConfig';

interface ServicesSectionProps {
  onSelectServiceForContact: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectServiceForContact }) => {
  const [activeTab, setActiveTab] = useState(0);

  const services = [
    {
      ...PORTFOLIO_CONFIG.services[0],
      icon: Globe,
      visualTag: 'Web Development',
      previewComponent: (
        <div className="w-full h-full p-4 flex flex-col justify-between font-mono text-[11px] text-[#9699A8]">
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
            </div>
            <span className="text-white/40 text-[10px]">https://yourbrand.com</span>
            <span className="text-emerald-400 text-[10px]">SSL Secured</span>
          </div>

          <div className="py-4 space-y-2">
            <div className="h-4 w-3/4 bg-white/10 rounded animate-pulse" />
            <div className="h-3 w-1/2 bg-white/5 rounded" />
            <div className="grid grid-cols-3 gap-2 pt-2">
              <div className="h-16 rounded bg-gradient-to-br from-[#9B7BFF]/20 to-transparent p-2 border border-white/5 flex flex-col justify-end">
                <span className="text-[9px] text-[#9B7BFF]">LCP &lt; 0.8s</span>
              </div>
              <div className="h-16 rounded bg-white/5 p-2 border border-white/5 flex flex-col justify-end">
                <span className="text-[9px] text-white">100% Mobile</span>
              </div>
              <div className="h-16 rounded bg-gradient-to-br from-[#42D9FF]/20 to-transparent p-2 border border-white/5 flex flex-col justify-end">
                <span className="text-[9px] text-[#42D9FF]">SEO Ready</span>
              </div>
            </div>
          </div>

          <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[10px]">
            <span className="text-white/60">Core Web Vitals Score</span>
            <span className="text-emerald-400 font-bold">99 / 100</span>
          </div>
        </div>
      )
    },
    {
      ...PORTFOLIO_CONFIG.services[1],
      icon: UtensilsCrossed,
      visualTag: 'Hospitality Tech',
      previewComponent: (
        <div className="w-full h-full p-4 flex flex-col justify-between font-mono text-[11px]">
          <div className="flex items-center justify-between pb-2 border-b border-white/10">
            <div className="flex items-center gap-2">
              <QrCode className="w-4 h-4 text-[#42D9FF]" />
              <span className="text-white font-semibold">The Urban Cafe Menu</span>
            </div>
            <span className="text-[9px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300">Live Ordering</span>
          </div>

          <div className="space-y-2 py-2">
            <div className="p-2 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between">
              <div>
                <div className="text-white text-xs font-sans font-medium">Iced Velvet Latte</div>
                <div className="text-[10px] text-[#9699A8]">Oat milk • Caramel drizzle</div>
              </div>
              <span className="text-[#42D9FF] font-mono text-xs font-bold">$5.50</span>
            </div>
            <div className="p-2 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between">
              <div>
                <div className="text-white text-xs font-sans font-medium">Truffle Avocado Toast</div>
                <div className="text-[10px] text-[#9699A8]">Organic sourdough • Poached egg</div>
              </div>
              <span className="text-[#42D9FF] font-mono text-xs font-bold">$11.00</span>
            </div>
          </div>

          <div className="p-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-between text-[10px] text-emerald-300">
            <span>Direct WhatsApp Checkout</span>
            <span className="font-bold">0% Commission</span>
          </div>
        </div>
      )
    },
    {
      ...PORTFOLIO_CONFIG.services[2],
      icon: Bot,
      visualTag: 'Conversational Bot',
      previewComponent: (
        <div className="w-full h-full p-4 flex flex-col justify-between font-mono text-[11px]">
          <div className="flex items-center justify-between pb-2 border-b border-white/10">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-white font-semibold">WhatsApp Assistant</span>
            </div>
            <span className="text-[10px] text-white/40">Response time: 0.2s</span>
          </div>

          <div className="space-y-2 py-2">
            <div className="p-2 rounded-xl rounded-tl-none bg-[#161926] border border-white/5 max-w-[85%] text-[10px] text-[#F5F5F7]">
              Customer: "Are you open on Sundays? Do you have vegan options?"
            </div>
            <div className="p-2 rounded-xl rounded-tr-none bg-[#9B7BFF]/20 border border-[#9B7BFF]/30 ml-auto max-w-[90%] text-[10px] text-white">
              Bot: "Yes! Open Sun 8am-8pm. We have 6 delicious vegan bowls and oat milk lattes! [Tap to view Vegan Menu]"
            </div>
          </div>

          <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[10px] text-[#9699A8]">
            <span>Automated 24/7 Desk</span>
            <span className="text-[#9B7BFF]">98% Enquiry Resolution</span>
          </div>
        </div>
      )
    },
    {
      ...PORTFOLIO_CONFIG.services[3],
      icon: MessageSquareCode,
      visualTag: 'AI & Custom APIs',
      previewComponent: (
        <div className="w-full h-full p-4 flex flex-col justify-between font-mono text-[11px]">
          <div className="flex items-center justify-between pb-2 border-b border-white/10">
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-[#9B7BFF]" />
              <span className="text-white font-semibold">Smart Knowledge Base</span>
            </div>
            <span className="text-[9px] px-2 py-0.5 rounded bg-purple-500/20 text-purple-300">Custom Tuned</span>
          </div>

          <div className="space-y-2 py-2">
            <div className="p-2 rounded-lg bg-black/40 border border-white/5 text-[10px]">
              <div className="text-white/60 mb-1">// Connected Datastores:</div>
              <div className="text-emerald-400">✓ PDF Menu & Nutritional Info</div>
              <div className="text-emerald-400">✓ Google Calendar Bookings</div>
              <div className="text-emerald-400">✓ CRM Lead Intake Hook</div>
            </div>
          </div>

          <div className="p-2 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-between text-[10px] text-purple-300">
            <span>Natural language comprehension</span>
            <span className="font-bold">Automated Leads</span>
          </div>
        </div>
      )
    }
  ];

  const handleEnquire = (serviceTitle: string) => {
    onSelectServiceForContact(serviceTitle);
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-24 sm:py-32 relative bg-[#08090D] overflow-hidden border-t border-white/5">
      {/* Background Glow */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] radial-glow pointer-events-none blur-3xl opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-pill text-xs font-mono text-[#42D9FF] mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>CORE SERVICE OFFERINGS</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#F5F5F7] tracking-tight">
              SERVICES BUILT FOR{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9B7BFF] to-[#42D9FF]">
                GROWTH.
              </span>
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#9699A8] max-w-md mt-4 md:mt-0 font-normal">
            Whether you want a high-end web presence or an autonomous WhatsApp ordering system that handles 100+ daily orders, every solution is built to deliver real business outcomes.
          </p>
        </div>

        {/* Desktop Interactive Tab Selector */}
        <div className="flex items-center gap-2 pb-4 mb-8 overflow-x-auto no-scrollbar">
          {services.map((srv, idx) => (
            <button
              key={srv.id}
              onClick={() => setActiveTab(idx)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all whitespace-nowrap flex items-center gap-2 ${activeTab === idx
                  ? 'bg-gradient-to-r from-[#9B7BFF] to-[#7952F5] text-white shadow-[0_0_15px_rgba(155,123,255,0.4)]'
                  : 'glass-panel text-[#9699A8] hover:text-white hover:bg-white/5'
                }`}
            >
              <span className="font-mono text-[11px] opacity-75">{srv.number}</span>
              <span>{srv.title}</span>
            </button>
          ))}
        </div>

        {/* Featured Service Spotlight Card */}
        {(() => {
          const srv = services[activeTab];
          const Icon = srv.icon;
          return (
            <div className="glass-panel p-6 sm:p-10 rounded-3xl border-white/10 mb-16 relative overflow-hidden bg-gradient-to-b from-[#10121A] to-[#0d0f17]">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

                {/* Left Description & Features */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#9B7BFF] to-[#42D9FF] p-[1px]">
                      <div className="w-full h-full bg-[#08090D] rounded-[11px] flex items-center justify-center">
                        <Icon className="w-5 h-5 text-[#42D9FF]" />
                      </div>
                    </div>
                    <div>
                      <span className="text-xs font-mono text-[#9B7BFF] tracking-wider uppercase">
                        SERVICE {srv.number} • {srv.badge}
                      </span>
                      <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white">
                        {srv.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-sm sm:text-base text-[#9699A8] leading-relaxed">
                    {srv.description}
                  </p>

                  <div className="space-y-3 pt-2">
                    <span className="text-xs font-mono uppercase tracking-wider text-white/50">
                      What is included:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {srv.features.map((feat, i) => (
                        <div key={i} className="flex items-center gap-2.5 text-xs text-[#F5F5F7] bg-white/[0.03] p-2.5 rounded-xl border border-white/5">
                          <Check className="w-4 h-4 text-[#42D9FF] shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 flex flex-wrap items-center gap-4">
                    <button
                      onClick={() => handleEnquire(srv.title)}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#9B7BFF] to-[#42D9FF] text-white font-semibold text-xs uppercase tracking-wider shadow-lg hover:shadow-[0_0_25px_rgba(155,123,255,0.4)] transition-all transform hover:scale-[1.02]"
                    >
                      <span>Inquire About {srv.title}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    {srv.id === 'cafe-restaurant' || srv.id === 'automation-bots' ? (
                      <a
                        href="#bot-demo"
                        className="inline-flex items-center gap-2 px-4 py-3 rounded-xl glass-panel text-xs text-[#42D9FF] hover:bg-white/5 transition-colors"
                      >
                        <Smartphone className="w-3.5 h-3.5" />
                        <span>Try Live WhatsApp Demo</span>
                      </a>
                    ) : null}
                  </div>
                </div>

                {/* Right Interactive Preview Panel */}
                <div className="lg:col-span-5 flex items-center justify-center">
                  <div className="w-full max-w-md h-[340px] rounded-2xl glass-panel border-white/10 bg-[#08090D]/80 shadow-2xl relative overflow-hidden flex flex-col">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#9B7BFF]/10 rounded-full blur-2xl pointer-events-none" />
                    {srv.previewComponent}
                  </div>
                </div>

              </div>
            </div>
          );
        })()}

        {/* 4 Service Cards Grid below */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                onClick={() => setActiveTab(idx)}
                className={`p-6 rounded-2xl glass-panel cursor-pointer transition-all duration-300 flex flex-col justify-between ${activeTab === idx
                    ? 'border-[#9B7BFF] bg-[#161926]/90 shadow-[0_0_25px_rgba(155,123,255,0.2)]'
                    : 'border-white/5 hover:border-white/20 hover:bg-white/[0.03]'
                  }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center border border-white/10">
                      <Icon className="w-4 h-4 text-[#42D9FF]" />
                    </div>
                    <span className="font-mono text-xs text-[#9B7BFF]">{service.number}</span>
                  </div>

                  <h4 className="font-heading text-lg font-bold text-white mb-2">
                    {service.title}
                  </h4>
                  <p className="text-xs text-[#9699A8] line-clamp-3 mb-4">
                    {service.tagline}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-semibold text-[#42D9FF]">
                  <span>Explore details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
