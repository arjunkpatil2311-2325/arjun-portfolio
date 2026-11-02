import React from 'react';
import { Sparkles, Compass, PenTool, Code2, Rocket } from 'lucide-react';
import { PORTFOLIO_CONFIG } from '../config/portfolioConfig';

export const ProcessSection: React.FC = () => {
  const stepIcons = [Compass, PenTool, Code2, Rocket];

  return (
    <section id="process" className="py-24 sm:py-32 relative bg-[#08090D] overflow-hidden border-t border-white/5">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/3 w-[500px] h-[500px] radial-glow pointer-events-none blur-3xl opacity-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-pill text-xs font-mono text-[#9B7BFF] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>HOW WE COLLABORATE</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#F5F5F7] tracking-tight leading-tight mb-4">
            FROM IDEA TO{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9B7BFF] via-[#7952F5] to-[#42D9FF]">
              LIVE EXPERIENCE.
            </span>
          </h2>

          <p className="text-sm sm:text-base text-[#9699A8] leading-relaxed">
            A transparent, highly collaborative 4-stage process designed to bring your website or automated bot from concept to launch with speed and meticulous attention to detail.
          </p>
        </div>

        {/* 4-Step Animated Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          
          {/* Subtle connecting line across cards on desktop */}
          <div className="hidden lg:block absolute top-1/2 left-8 right-8 h-[1px] bg-gradient-to-r from-[#9B7BFF]/20 via-[#42D9FF]/20 to-[#9B7BFF]/20 -translate-y-8 z-0 pointer-events-none" />

          {PORTFOLIO_CONFIG.processSteps.map((step, idx) => {
            const Icon = stepIcons[idx];
            return (
              <div
                key={step.step}
                className="group p-6 rounded-3xl glass-panel border-white/10 hover:border-[#9B7BFF]/40 transition-all duration-300 relative z-10 flex flex-col justify-between hover:-translate-y-2 bg-gradient-to-b from-[#10121A] to-[#0A0B10]"
              >
                <div>
                  {/* Top Bar with Number and Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white/40 to-white/10 group-hover:from-[#9B7BFF] group-hover:to-[#42D9FF] transition-all">
                      {step.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-[#9B7BFF]/20 group-hover:border-[#9B7BFF]/40 transition-colors">
                      <Icon className="w-4 h-4 text-[#42D9FF] group-hover:text-white transition-colors" />
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="font-heading text-xl font-bold text-white mb-1">
                    {step.title}
                  </h3>
                  <div className="text-xs font-mono text-[#9B7BFF] mb-3">
                    {step.subtitle}
                  </div>

                  {/* Description */}
                  <p className="text-xs text-[#9699A8] leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Progress bar on card bottom */}
                <div className="pt-6 mt-6 border-t border-white/5">
                  <div className="w-full bg-white/5 h-1 rounded-full overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-[#9B7BFF] to-[#42D9FF] h-full rounded-full transition-all duration-500"
                      style={{ width: `${(idx + 1) * 25}%` }}
                    />
                  </div>
                  <div className="flex justify-between items-center text-[10px] font-mono text-[#9699A8] mt-2">
                    <span>Phase {step.step} of 04</span>
                    <span className="text-[#42D9FF]">{(idx + 1) * 25}%</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Guarantee Callout */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl glass-pill text-xs text-[#9699A8] font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>Clear milestones • Regular screen recordings • Direct developer access</span>
          </div>
        </div>

      </div>
    </section>
  );
};
