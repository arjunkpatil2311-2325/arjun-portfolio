import React, { useState, useEffect } from 'react';
import { 
  Send, 
  MessageCircle, 
  Sparkles, 
  CheckCircle, 
  AlertCircle, 
  Mail, 
  MapPin, 
  ArrowRight,
  Code
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { PORTFOLIO_CONFIG } from '../config/portfolioConfig';

interface ContactSectionProps {
  preselectedService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ preselectedService }) => {
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    email: '',
    projectType: 'Cafe & Restaurant Website',
    description: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedLink, setSubmittedLink] = useState<string | null>(null);

  // Sync preselected service from Services / Bot section
  useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({
        ...prev,
        projectType: preselectedService
      }));
    }
  }, [preselectedService]);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Your name is required';
    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.description.trim()) {
      errs.description = 'Please provide a brief description of what you need';
    } else if (formData.description.trim().length < 10) {
      errs.description = 'Please describe your requirements in at least 10 characters';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const generateWhatsAppUrl = (customMsg?: string) => {
    const message =
      customMsg ||
      `👋 Hi Arjun! I came across your portfolio.\n\n*Name:* ${formData.name || 'Visitor'}\n*Business:* ${
        formData.businessName || 'Not specified'
      }\n*Email:* ${formData.email || 'Not specified'}\n*Project Type:* ${
        formData.projectType
      }\n\n*Requirements:*\n${formData.description || 'I would like to discuss building a project with you.'}`;

    return `https://wa.me/${PORTFOLIO_CONFIG.contact.whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Trigger celebration confetti
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });

    const waUrl = generateWhatsAppUrl();
    setSubmittedLink(waUrl);
    setIsSubmitting(false);

    // Automatically open WhatsApp in a new tab
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="py-24 sm:py-32 relative bg-[#08090D] overflow-hidden border-t border-white/5">
      {/* Ambient background glow */}
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] radial-glow pointer-events-none blur-3xl opacity-30" />
      <div className="absolute bottom-10 left-10 w-[450px] h-[450px] radial-glow-cyan pointer-events-none blur-3xl opacity-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Heading & Contact Info */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-pill text-xs font-mono text-[#9B7BFF] mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                <span>START A CONVERSATION</span>
              </div>

              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#F5F5F7] tracking-tight leading-tight">
                HAVE A BUSINESS IDEA?{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9B7BFF] via-[#7952F5] to-[#42D9FF]">
                  LET'S BUILD IT.
                </span>
              </h2>

              <p className="text-base sm:text-lg text-[#9699A8] mt-4 leading-relaxed font-normal">
                {PORTFOLIO_CONFIG.contact.availability}. Whether you need a beautiful website, a restaurant ordering experience or a smart business bot, let's make it happen.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-4">
              <a
                href={generateWhatsAppUrl('Hi Arjun! I would like to enquire about your web development and automation services.')}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl glass-panel border-[#42D9FF]/20 hover:border-[#42D9FF] flex items-center justify-between group transition-all"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/30">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-[#9699A8] uppercase tracking-wider">Fastest Response</div>
                    <div className="text-sm font-semibold text-white group-hover:text-[#42D9FF] transition-colors">
                      Chat on WhatsApp ({PORTFOLIO_CONFIG.contact.displayPhone})
                    </div>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-[#9699A8] group-hover:text-white transform group-hover:translate-x-1 transition-all" />
              </a>

              <a
                href={`mailto:${PORTFOLIO_CONFIG.contact.email}`}
                className="p-4 rounded-2xl glass-panel border-white/5 hover:border-white/20 flex items-center justify-between group transition-all"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-white/5 text-[#9B7BFF] flex items-center justify-center border border-white/10">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-[#9699A8] uppercase tracking-wider">Email Inquiry</div>
                    <div className="text-sm font-semibold text-white group-hover:text-[#9B7BFF] transition-colors">
                      {PORTFOLIO_CONFIG.contact.email}
                    </div>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-[#9699A8] group-hover:text-white transform group-hover:translate-x-1 transition-all" />
              </a>

              <div className="p-4 rounded-2xl glass-panel border-white/5 flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-white/5 text-[#42D9FF] flex items-center justify-center border border-white/10">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-[#9699A8] uppercase tracking-wider">Location</div>
                  <div className="text-sm font-semibold text-white">
                    {PORTFOLIO_CONFIG.contact.location}
                  </div>
                </div>
              </div>
            </div>

            {/* Developer Notice: Where Arjun can configure his WhatsApp number */}
            <div className="p-4 rounded-2xl bg-[#10131E] border border-white/10 text-xs text-[#9699A8] space-y-1.5 font-mono">
              <div className="flex items-center gap-1.5 text-white font-semibold">
                <Code className="w-4 h-4 text-[#9B7BFF]" />
                <span>How WhatsApp routing works:</span>
              </div>
              <p className="leading-relaxed">
                Messages use authenticated pre-formatted WhatsApp URLs. You can customize your phone number anytime in{' '}
                <span className="text-[#42D9FF]">src/config/portfolioConfig.ts</span>.
              </p>
            </div>
          </div>

          {/* Right Column: Clean Validated Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-6 sm:p-10 rounded-3xl border-white/10 bg-gradient-to-b from-[#10121A] to-[#0A0B10] shadow-2xl relative">
              
              <div className="mb-6 pb-4 border-b border-white/10">
                <h3 className="font-heading text-xl font-bold text-white">
                  Send a Project Enquiry
                </h3>
                <p className="text-xs text-[#9699A8] mt-1">
                  Fill in your details below. You will be provided with an immediate instant-dispatch link to WhatsApp.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Name & Business Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-[#9699A8] mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Rivera"
                      className={`w-full px-4 py-3 rounded-xl bg-[#08090D] border text-sm text-white focus:outline-none transition-colors ${
                        errors.name ? 'border-rose-500' : 'border-white/10 focus:border-[#9B7BFF]'
                      }`}
                    />
                    {errors.name && (
                      <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#9699A8] mb-1.5">
                      Business / Brand Name
                    </label>
                    <input
                      type="text"
                      value={formData.businessName}
                      onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                      placeholder="e.g. The Urban Cafe / HamperHub"
                      className="w-full px-4 py-3 rounded-xl bg-[#08090D] border border-white/10 text-sm text-white focus:outline-none focus:border-[#9B7BFF] transition-colors"
                    />
                  </div>
                </div>

                {/* Email & Project Type */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-[#9699A8] mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@yourbusiness.com"
                      className={`w-full px-4 py-3 rounded-xl bg-[#08090D] border text-sm text-white focus:outline-none transition-colors ${
                        errors.email ? 'border-rose-500' : 'border-white/10 focus:border-[#9B7BFF]'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#9699A8] mb-1.5">
                      Project Type *
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#08090D] border border-white/10 text-sm text-white focus:outline-none focus:border-[#9B7BFF] transition-colors"
                    >
                      <option value="Cafe & Restaurant Website">Cafe & Restaurant Website</option>
                      <option value="Restaurant WhatsApp Ordering Bot">Restaurant WhatsApp Ordering Bot</option>
                      <option value="Business Website">Business Website</option>
                      <option value="AI Business Assistant">AI Business Assistant</option>
                      <option value="Custom Web Experience / E-commerce">Custom Web Experience / E-commerce</option>
                      <option value="Other">Other Automation Inquiry</option>
                    </select>
                  </div>
                </div>

                {/* Description */}
                <div>
                  <label className="block text-xs font-mono text-[#9699A8] mb-1.5">
                    Project Requirements / Vision *
                  </label>
                  <textarea
                    rows={4}
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    placeholder="Tell me about your business goals, target timeline, or features you have in mind..."
                    className={`w-full px-4 py-3 rounded-xl bg-[#08090D] border text-sm text-white focus:outline-none transition-colors resize-none ${
                      errors.description ? 'border-rose-500' : 'border-white/10 focus:border-[#9B7BFF]'
                    }`}
                  />
                  {errors.description && (
                    <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.description}</span>
                    </p>
                  )}
                </div>

                {/* Submit Buttons */}
                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 inline-flex items-center justify-center gap-2 py-4 px-6 rounded-xl bg-gradient-to-r from-[#9B7BFF] to-[#7952F5] text-white font-semibold text-xs uppercase tracking-wider shadow-lg hover:shadow-[0_0_25px_rgba(155,123,255,0.4)] transition-all transform hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Enquiry & Connect</span>
                  </button>

                  <a
                    href={generateWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 py-4 px-6 rounded-xl glass-panel text-xs uppercase tracking-wider text-white border-white/10 hover:border-emerald-500/50 hover:bg-emerald-500/10 transition-all font-semibold"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-400" />
                    <span>WhatsApp Direct</span>
                  </a>
                </div>

                {/* Success feedback pill if already triggered */}
                {submittedLink && (
                  <div className="mt-4 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-xs text-emerald-300 flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold">Enquiry Prepared!</div>
                      <p className="text-[#9699A8] mt-0.5">
                        Your WhatsApp conversation has opened. If a popup blocker stopped it,{' '}
                        <a
                          href={submittedLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#42D9FF] underline font-semibold"
                        >
                          click here to open WhatsApp directly
                        </a>.
                      </p>
                    </div>
                  </div>
                )}

              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
