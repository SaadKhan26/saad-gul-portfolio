'use client';

import React, { useState } from 'react';
import { Mail, Phone, Send, Check, Copy, FileText } from 'lucide-react';

const LinkedinIcon = ({ className = 'w-4 h-4' }: { className?: string }) => (
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
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 border-t border-zinc-200/80 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <h2 className="text-2xl sm:text-3xl font-semibold text-zinc-950 tracking-tight">
            Get in Touch
          </h2>
          <p className="mt-2 text-base text-zinc-600 leading-relaxed">
            Have a project in mind, need a Shopify theme built, or looking for a front-end engineer? Send a message or reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          {/* Left Column: Direct Details */}
          <div className="lg:col-span-2 space-y-6">
            <div className="rounded-lg bg-zinc-50/50 border border-zinc-200/80 p-5 space-y-4 shadow-xs">
              <div>
                <div className="text-xs font-mono text-zinc-500 mb-1">Email</div>
                <div className="flex items-center justify-between">
                  <a 
                    href="mailto:gul.saadkhan@outlook.com"
                    className="text-sm font-medium text-zinc-950 hover:text-zinc-600 transition-colors"
                  >
                    gul.saadkhan@outlook.com
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    className="p-1.5 rounded text-zinc-500 hover:text-zinc-950 hover:bg-zinc-200/60 transition-colors"
                    title="Copy email to clipboard"
                    aria-label="Copy email"
                  >
                    {copiedEmail ? <Check className="w-3.5 h-3.5 text-zinc-900" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

              <div className="pt-3 border-t border-zinc-200/60">
                <div className="text-xs font-mono text-zinc-500 mb-1">Phone / WhatsApp</div>
                <a 
                  href="tel:+923425603490"
                  className="text-sm font-medium text-zinc-950 hover:text-zinc-600 transition-colors"
                >
                  +92 342 5603490
                </a>
              </div>

              <div className="pt-3 border-t border-zinc-200/60">
                <div className="text-xs font-mono text-zinc-500 mb-1">LinkedIn</div>
                <a 
                  href="https://www.linkedin.com/in/saad-gull-011934164/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-zinc-950 hover:text-zinc-600 transition-colors"
                >
                  linkedin.com/in/saad-gull
                </a>
              </div>

              <div className="pt-3 border-t border-zinc-200/60">
                <div className="text-xs font-mono text-zinc-500 mb-1">Location</div>
                <div className="text-sm text-zinc-700">
                  Islamabad, Pakistan (Available for Remote Worldwide)
                </div>
              </div>
            </div>

            <div className="rounded-lg bg-zinc-50/50 border border-zinc-200/80 p-5 shadow-xs">
              <div className="text-sm font-medium text-zinc-950 mb-1">Download Resume</div>
              <p className="text-xs text-zinc-600 mb-4">
                Full 5-year work history, tech stack, and verified project details in PDF format.
              </p>
              <a
                href="/Saad_Gul_Resume.pdf"
                download
                className="inline-flex items-center gap-2 text-xs font-medium text-white bg-zinc-950 hover:bg-zinc-800 px-3.5 py-2 rounded-md transition-colors shadow-xs"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Download Resume (PDF)</span>
              </a>
            </div>
          </div>

          {/* Right Column: Direct Form */}
          <div className="lg:col-span-3 rounded-lg bg-zinc-50/50 border border-zinc-200/80 p-6 sm:p-8 shadow-xs">
            <h3 className="text-lg font-medium text-zinc-950 mb-1">
              Send a Message
            </h3>
            <p className="text-xs text-zinc-600 mb-6">
              Let me know what you need built, your timeline, or any questions.
            </p>

            {formSubmitted ? (
              <div className="rounded-md bg-zinc-100 border border-zinc-200 p-6 text-center space-y-2">
                <Check className="w-6 h-6 text-zinc-900 mx-auto" />
                <h4 className="text-base font-medium text-zinc-950">Message Received</h4>
                <p className="text-xs text-zinc-600 max-w-sm mx-auto">
                  Thank you for reaching out. I will get back to you at <span className="text-zinc-950 font-medium">{formData.email || 'your email'}</span> within 24 hours.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="mt-3 text-xs font-mono text-zinc-600 hover:text-zinc-950 underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-mono text-zinc-600 mb-1.5">
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full rounded-md bg-white border border-zinc-300 px-3.5 py-2.5 text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-zinc-950 transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-mono text-zinc-600 mb-1.5">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="your.email@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full rounded-md bg-white border border-zinc-300 px-3.5 py-2.5 text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-zinc-950 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="projectType" className="block text-xs font-mono text-zinc-600 mb-1.5">
                    Project Type
                  </label>
                  <select
                    id="projectType"
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full rounded-md bg-white border border-zinc-300 px-3.5 py-2.5 text-sm text-zinc-900 focus:outline-none focus:border-zinc-950 transition-colors"
                  >
                    <option value="Shopify Theme Development">Custom Shopify Theme Build</option>
                    <option value="Shopify Performance & CRO">Shopify Performance &amp; CRO</option>
                    <option value="React / Next.js Web App">React / Next.js Web Application</option>
                    <option value="Figma to Code">Figma to Code Implementation</option>
                    <option value="Contract / Full-time Role">Contract / Full-Time Engineering Role</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-mono text-zinc-600 mb-1.5">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    placeholder="Brief details about the project, timeline, or scope..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full rounded-md bg-white border border-zinc-300 px-3.5 py-2.5 text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-zinc-950 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-md text-sm font-medium text-white bg-zinc-950 hover:bg-zinc-800 transition-colors shadow-xs"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
