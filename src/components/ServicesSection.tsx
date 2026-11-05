import React from 'react';
import { ArrowUpRight, Globe, Utensils, Bot } from 'lucide-react';
import { PORTFOLIO_CONFIG } from '../config/portfolioConfig';

interface ServicesSectionProps {
  onSelectService: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const serviceIcons = [Globe, Utensils, Bot];

  const handleEnquire = (title: string) => {
    onSelectService(title);
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 sm:py-28 border-b border-[#C9C8C0] bg-[#F2F1EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-10 border-b border-[#C9C8C0] mb-12">
          <div>
            <div className="text-[11px] font-mono text-[#7555FF] tracking-wider uppercase mb-2">
              [ 02 // SERVICES ]
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#111111] tracking-tight">
              WHAT I DO.
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-mono text-[#73736D] max-w-sm mt-4 sm:mt-0 leading-relaxed">
            Three focused disciplines designed to deliver direct business value, zero technical overhead, and high customer retention.
          </p>
        </div>

        {/* 3 Editorial Horizontal Service Blocks */}
        <div className="space-y-6">
          {PORTFOLIO_CONFIG.services.map((service, index) => {
            const Icon = serviceIcons[index];
            return (
              <div
                key={service.number}
                className="eink-panel eink-panel-hover p-6 sm:p-10 rounded-xs transition-all duration-200"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  
                  {/* Left Column: Number, Title, Subtitle */}
                  <div className="lg:col-span-5 space-y-3">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-2xl sm:text-3xl font-extrabold text-[#111111]">
                        {service.number}
                      </span>
                      <span className="text-[10px] font-mono px-2 py-0.5 border border-[#C9C8C0] bg-[#F2F1EB] text-[#73736D] uppercase">
                        {service.tag}
                      </span>
                    </div>

                    <div className="flex items-center gap-2.5 pt-1">
                      <div className="w-8 h-8 rounded-xs bg-[#111111] text-[#F2F1EB] flex items-center justify-center">
                        <Icon className="w-4 h-4 text-[#43BFD0]" />
                      </div>
                      <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#111111]">
                        {service.title}
                      </h3>
                    </div>

                    <p className="text-xs font-mono text-[#7555FF] font-medium tracking-wide">
                      {service.subtitle}
                    </p>

                    <p className="text-sm text-[#73736D] leading-relaxed pt-2">
                      {service.description}
                    </p>
                  </div>

                  {/* Middle Column: Editorial Deliverables Checklist */}
                  <div className="lg:col-span-5 pt-2 lg:pt-0">
                    <span className="block text-[10px] font-mono uppercase tracking-widest text-[#73736D] mb-3">
                      KEY DELIVERABLES:
                    </span>
                    <ul className="space-y-2.5 text-xs text-[#111111]">
                      {service.deliverables.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <span className="font-mono text-[#7555FF] font-bold">→</span>
                          <span className="font-mono text-[#111111]">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Right Column: Inquire Trigger */}
                  <div className="lg:col-span-2 flex lg:justify-end items-center h-full pt-4 lg:pt-0">
                    <button
                      onClick={() => handleEnquire(service.title)}
                      className="btn-tactile-ghost w-full lg:w-auto px-4 py-3 text-xs font-mono uppercase tracking-wider inline-flex items-center justify-center gap-1.5 rounded-xs"
                    >
                      <span>INQUIRE</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
