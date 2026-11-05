import React, { useState, useEffect } from 'react';
import { MessageCircle, Mail, ArrowUpRight, Check, Copy } from 'lucide-react';
import { PORTFOLIO_CONFIG } from '../config/portfolioConfig';

interface ContactSectionProps {
  preselectedService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ preselectedService }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    projectType: 'Restaurant Digital Solutions',
    note: ''
  });

  useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({ ...prev, projectType: preselectedService }));
    }
  }, [preselectedService]);

  const copyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_CONFIG.contact.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const generateWhatsAppUrl = () => {
    const text = `Hi Arjun! I came across your portfolio.\n\n*Name:* ${formData.name || 'Visitor'}\n*Business:* ${formData.businessName || 'Business'}\n*Project Focus:* ${formData.projectType}\n\n*Brief:* ${formData.note || 'I would like to discuss building a project together.'}`;
    return `https://wa.me/${PORTFOLIO_CONFIG.contact.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  const handleStartWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const url = generateWhatsAppUrl();
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#F2F1EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-[11px] font-mono text-[#7555FF] tracking-wider uppercase mb-2">
            [ 05 // INITIATE ]
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#111111] tracking-tight mb-4">
            HAVE AN IDEA? LET'S BUILD IT.
          </h2>
          <p className="text-base text-[#73736D] font-normal leading-relaxed">
            Direct communication, clear milestones, and zero agency bureaucracy. Start directly via WhatsApp or email.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Links & Channels */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* WhatsApp Card */}
            <a
              href={`https://wa.me/${PORTFOLIO_CONFIG.contact.whatsappNumber}?text=${encodeURIComponent("Hi Arjun! I'd like to discuss a project with you.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="eink-panel p-5 rounded-xs eink-panel-hover flex items-center justify-between block"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 bg-[#111111] text-[#F2F1EB] rounded-xs flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-[#73736D] uppercase">DIRECT MESSAGING</div>
                  <div className="text-sm font-mono font-bold text-[#111111]">
                    WhatsApp ({PORTFOLIO_CONFIG.contact.displayPhone})
                  </div>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-[#111111]" />
            </a>

            {/* Email Card */}
            <div className="eink-panel p-5 rounded-xs flex items-center justify-between">
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 bg-[#111111] text-[#F2F1EB] rounded-xs flex items-center justify-center">
                  <Mail className="w-5 h-5 text-[#7555FF]" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-[#73736D] uppercase">DIRECT EMAIL</div>
                  <div className="text-sm font-mono font-bold text-[#111111]">
                    {PORTFOLIO_CONFIG.contact.email}
                  </div>
                </div>
              </div>
              <button
                onClick={copyEmail}
                className="btn-tactile-ghost px-2.5 py-1.5 text-xs font-mono rounded-xs inline-flex items-center gap-1"
                title="Copy email to clipboard"
              >
                {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedEmail ? 'COPIED' : 'COPY'}</span>
              </button>
            </div>

            {/* Social Grid */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              <a
                href={PORTFOLIO_CONFIG.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="eink-panel p-4 rounded-xs eink-panel-hover flex items-center justify-between text-xs font-mono text-[#111111]"
              >
                <span>GITHUB</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#73736D]" />
              </a>

              <a
                href={PORTFOLIO_CONFIG.contact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="eink-panel p-4 rounded-xs eink-panel-hover flex items-center justify-between text-xs font-mono text-[#111111]"
              >
                <span>INSTAGRAM</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#73736D]" />
              </a>
            </div>

            {/* Note on WhatsApp Configuration */}
            <div className="p-3.5 bg-[#F9F8F3] border border-[#C9C8C0] text-[11px] font-mono text-[#73736D] rounded-xs">
              Configure your phone number or email anytime in{' '}
              <span className="text-[#111111] font-semibold">src/config/portfolioConfig.ts</span>.
            </div>

          </div>

          {/* Right Column: Instant WhatsApp Pre-Fill Form */}
          <div className="lg:col-span-7">
            <div className="eink-panel p-6 sm:p-8 rounded-xs border-[#111111] shadow-[4px_4px_0px_#111111]">
              <div className="pb-4 border-b border-[#C9C8C0] mb-5">
                <h3 className="font-heading text-xl font-bold text-[#111111]">
                  Prepare Your Project Enquiry
                </h3>
                <p className="text-xs font-mono text-[#73736D] mt-1">
                  Drafts an instant formatted enquiry ready for dispatch on WhatsApp.
                </p>
              </div>

              <form onSubmit={handleStartWhatsApp} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-mono text-[#73736D] uppercase mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex"
                      className="w-full p-2.5 bg-white border border-[#C9C8C0] text-xs font-mono text-[#111111] focus:outline-none focus:border-[#111111] rounded-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono text-[#73736D] uppercase mb-1">
                      Business / Venue
                    </label>
                    <input
                      type="text"
                      value={formData.businessName}
                      onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                      placeholder="e.g. The Urban Cafe"
                      className="w-full p-2.5 bg-white border border-[#C9C8C0] text-xs font-mono text-[#111111] focus:outline-none focus:border-[#111111] rounded-xs"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-mono text-[#73736D] uppercase mb-1">
                    Service Required
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full p-2.5 bg-white border border-[#C9C8C0] text-xs font-mono text-[#111111] focus:outline-none focus:border-[#111111] rounded-xs"
                  >
                    <option value="Web Development">01 — Web Development (Bespoke Website)</option>
                    <option value="Restaurant Digital Solutions">02 — Restaurant Digital Solutions (Menus / Food Site)</option>
                    <option value="Business Automation">03 — Business Automation (WhatsApp Ordering Bot)</option>
                    <option value="Other / Consultation">04 — Other / Architecture Consultation</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-mono text-[#73736D] uppercase mb-1">
                    Project Summary / Goals
                  </label>
                  <textarea
                    rows={3}
                    value={formData.note}
                    onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                    placeholder="Briefly describe what you would like to build or automate..."
                    className="w-full p-2.5 bg-white border border-[#C9C8C0] text-xs font-mono text-[#111111] focus:outline-none focus:border-[#111111] rounded-xs resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-tactile w-full py-3.5 text-xs font-mono font-semibold tracking-wider uppercase inline-flex items-center justify-center gap-2 rounded-xs"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>START INQUIRY ON WHATSAPP</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
