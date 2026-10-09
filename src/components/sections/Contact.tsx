'use client';

import React, { useState } from 'react';
import { Mail, Phone, Send, Check, Copy, FileText, Sparkles } from 'lucide-react';
import StatusBadge from '@/components/ui/StatusBadge';

const LinkedinIcon = ({ className = 'w-5 h-5' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Shopify Theme Development',
    message: ''
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('gul.saadkhan@outlook.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate swift submission feedback
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-10 md:py-14 relative overflow-hidden bg-[#030305]">
      {/* Background ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-gradient-to-t from-cyan-950/40 via-blue-950/30 to-transparent blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-8">
          <div className="inline-flex justify-center mb-3">
            <StatusBadge text="Available For New Engagements" />
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Let&apos;s Build Something High-Converting.
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
            Whether you need a custom Shopify theme built from scratch, an existing store optimized for conversions, or a modern Next.js/React web app engineered—let&apos;s talk.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          {/* Left Column: Direct Communication Channels */}
          <div className="lg:col-span-2 space-y-4">
            {/* Email Card */}
            <div className="rounded-2xl bg-[#0a0a14]/80 backdrop-blur-md border border-white/[0.08] p-5 hover:border-cyan-500/40 transition-all shadow-xl">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-950/60 border border-cyan-800/50 flex items-center justify-center text-cyan-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-zinc-500 uppercase font-semibold">Direct Email</div>
                    <a 
                      href="mailto:gul.saadkhan@outlook.com"
                      className="text-sm font-bold text-white hover:text-cyan-400 transition-colors"
                    >
                      gul.saadkhan@outlook.com
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-white/[0.06] hover:bg-white/[0.12] text-zinc-300 border border-white/[0.08] transition-colors"
                  title="Copy email to clipboard"
                  aria-label="Copy email"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
              {copiedEmail && (
                <div className="text-[11px] text-emerald-400 font-mono mt-2 flex items-center gap-1 font-semibold">
                  <Check className="w-3 h-3" /> Copied to clipboard!
                </div>
              )}
            </div>

            {/* Phone Card */}
            <div className="rounded-2xl bg-[#0a0a14]/80 backdrop-blur-md border border-white/[0.08] p-5 hover:border-cyan-500/40 transition-all shadow-xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-950/60 border border-cyan-800/50 flex items-center justify-center text-cyan-400">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-zinc-500 uppercase font-semibold">Phone & WhatsApp</div>
                  <a 
                    href="tel:+923425603490"
                    className="text-sm font-bold text-white hover:text-cyan-400 transition-colors"
                  >
                    +92 342 5603490
                  </a>
                </div>
              </div>
            </div>

            {/* LinkedIn Card */}
            <div className="rounded-2xl bg-[#0a0a14]/80 backdrop-blur-md border border-white/[0.08] p-5 hover:border-cyan-500/40 transition-all shadow-xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-950/60 border border-cyan-800/50 flex items-center justify-center text-cyan-400">
                  <LinkedinIcon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-zinc-500 uppercase font-semibold">Professional Network</div>
                  <a 
                    href="https://www.linkedin.com/in/saad-gull-011934164/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-bold text-white hover:text-cyan-400 transition-colors"
                  >
                    linkedin.com/in/saad-gull
                  </a>
                </div>
              </div>
            </div>

            {/* Download Resume Box */}
            <div className="rounded-2xl bg-gradient-to-br from-cyan-950/40 via-[#0a0a14] to-[#030305] border border-cyan-500/30 p-5 shadow-xl">
              <div className="flex items-center justify-between mb-2">
                <div className="text-xs font-mono font-bold text-cyan-400 uppercase">OFFICIAL RESUME</div>
                <Sparkles className="w-4 h-4 text-cyan-400" />
              </div>
              <p className="text-xs text-zinc-400 mb-3">
                Download my up-to-date resume covering complete agency experience, stack, and project achievements.
              </p>
              <a
                href="/Saad_Gul_Resume.pdf"
                download
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-bold text-black bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 transition-all shadow-md shadow-cyan-500/20"
              >
                <FileText className="w-4 h-4" />
                <span>Download Resume (PDF)</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Inquiry Form */}
          <div className="lg:col-span-3 rounded-2xl bg-[#0a0a14]/80 backdrop-blur-md border border-white/[0.08] p-6 sm:p-8 shadow-xl">
            <h3 className="text-lg font-bold text-white mb-1">
              Send a Direct Project Brief
            </h3>
            <p className="text-xs text-zinc-400 mb-6">
              Share details about your upcoming launch, timeline, or open role.
            </p>

            {formSubmitted ? (
              <div className="rounded-xl bg-cyan-950/40 border border-cyan-800/60 p-6 text-center space-y-2 animate-in fade-in duration-300">
                <div className="w-12 h-12 rounded-full bg-cyan-900/60 text-cyan-400 flex items-center justify-center mx-auto mb-2 border border-cyan-700/50">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-white">Message Transmitted!</h4>
                <p className="text-xs text-zinc-300 max-w-sm mx-auto">
                  Thank you for reaching out. I will respond to your inquiry at <strong className="text-cyan-400 font-semibold">{formData.email || 'your email'}</strong> within 24 hours.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="mt-3 text-xs font-mono text-cyan-400 hover:underline font-bold"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-mono text-zinc-300 uppercase mb-1.5 font-bold">
                      Your Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full rounded-xl bg-black/60 border border-white/[0.1] px-4 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-400 focus:bg-black/80 focus:ring-1 focus:ring-cyan-400 transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-mono text-zinc-300 uppercase mb-1.5 font-bold">
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="jane@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full rounded-xl bg-black/60 border border-white/[0.1] px-4 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-400 focus:bg-black/80 focus:ring-1 focus:ring-cyan-400 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="projectType" className="block text-xs font-mono text-zinc-300 uppercase mb-1.5 font-bold">
                    Engagement Type
                  </label>
                  <select
                    id="projectType"
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full rounded-xl bg-black/60 border border-white/[0.1] px-4 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-400 focus:bg-black/90 focus:ring-1 focus:ring-cyan-400 transition-all"
                  >
                    <option value="Shopify Theme Development" className="bg-[#0a0a14] text-white">Custom Shopify Theme Build (OS 2.0 / Liquid)</option>
                    <option value="Shopify Performance & CRO" className="bg-[#0a0a14] text-white">Shopify Speed Optimization & CRO</option>
                    <option value="React / Next.js Web App" className="bg-[#0a0a14] text-white">React / Next.js Web Application</option>
                    <option value="Figma to Code" className="bg-[#0a0a14] text-white">Figma Design to Pixel-Perfect Implementation</option>
                    <option value="Contract / Full-time Role" className="bg-[#0a0a14] text-white">Contract or Full-Time Engineering Role</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-mono text-zinc-300 uppercase mb-1.5 font-bold">
                    Project Scope / Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    placeholder="Briefly describe what you're building, target timeline, and goals..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full rounded-xl bg-black/60 border border-white/[0.1] px-4 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-400 focus:bg-black/80 focus:ring-1 focus:ring-cyan-400 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl text-sm font-bold text-black bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 transition-all duration-200 shadow-lg shadow-cyan-500/20"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Project Transmission</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
