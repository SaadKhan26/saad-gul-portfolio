'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUp, Mail, Phone, ExternalLink } from 'lucide-react';

const LinkedinIcon = ({ className = 'w-3.5 h-3.5' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#030305] border-t border-white/[0.08] text-zinc-400 py-12 relative overflow-hidden">
      {/* Background glow accent */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[150px] bg-cyan-950/20 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-white/[0.08]">
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-md bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-black font-black text-xs shadow-md shadow-cyan-500/20">
                SG
              </div>
              <span className="text-white font-bold text-base tracking-tight">Saad Gul</span>
            </div>
            <p className="text-xs text-zinc-400 max-w-sm leading-relaxed">
              Front-End Engineer & Shopify Specialist with 5+ years of experience transforming complex Figma designs into high-converting e-commerce stores and modern React/Next.js web applications.
            </p>
            <div className="pt-1 flex items-center gap-2 text-xs text-zinc-400 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]"></span>
              <span>Based in Islamabad, Pakistan — Available Worldwide</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white tracking-widest uppercase">Navigation</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="#about" className="hover:text-cyan-400 transition-colors">About & Profile</Link>
              </li>
              <li>
                <Link href="#projects" className="hover:text-cyan-400 transition-colors">Featured Projects (10)</Link>
              </li>
              <li>
                <Link href="#experience" className="hover:text-cyan-400 transition-colors">Experience Timeline</Link>
              </li>
              <li>
                <Link href="#skills" className="hover:text-cyan-400 transition-colors">Skills & Tech Stack</Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-cyan-400 transition-colors">Get In Touch</Link>
              </li>
            </ul>
          </div>

          {/* Direct Channels */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white tracking-widest uppercase">Direct Channels</h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a 
                  href="mailto:gul.saadkhan@outlook.com" 
                  className="inline-flex items-center gap-2 hover:text-cyan-400 transition-colors font-medium text-zinc-300"
                >
                  <Mail className="w-3.5 h-3.5 text-cyan-400" />
                  <span>gul.saadkhan@outlook.com</span>
                </a>
              </li>
              <li>
                <a 
                  href="tel:+923425603490" 
                  className="inline-flex items-center gap-2 hover:text-cyan-400 transition-colors font-medium text-zinc-300"
                >
                  <Phone className="w-3.5 h-3.5 text-cyan-400" />
                  <span>+92 342 5603490</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://www.linkedin.com/in/saad-gull-011934164/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-2 hover:text-cyan-400 transition-colors font-medium text-zinc-300"
                >
                  <LinkedinIcon className="w-3.5 h-3.5 text-cyan-400" />
                  <span>LinkedIn Profile</span>
                  <ExternalLink className="w-3 h-3 text-zinc-500" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <div>
            &copy; 2026 Saad Gul. All rights reserved. Built with Next.js & Tailwind CSS.
          </div>
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.08] text-zinc-300 hover:text-white transition-all duration-200"
            aria-label="Scroll back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-cyan-400" />
          </button>
        </div>
      </div>
    </footer>
  );
}
