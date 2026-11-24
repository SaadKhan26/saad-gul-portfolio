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
    <footer className="bg-white border-t border-zinc-200/80 text-zinc-600 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-12 border-b border-zinc-200/60">
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-3">
            <div className="text-zinc-950 font-semibold text-base tracking-tight">
              Saad Gul
            </div>
            <p className="text-xs text-zinc-600 max-w-sm leading-relaxed">
              Front-End Engineer &amp; Shopify Specialist. 5+ years building custom Shopify themes and React applications for DTC brands, B2B platforms, and SaaS products.
            </p>
            <div className="text-xs font-mono text-zinc-400">
              Islamabad, Pakistan &bull; Available Worldwide
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <div className="text-xs font-mono text-zinc-500">Navigation</div>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="#hero" className="hover:text-zinc-950 transition-colors">Intro</Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-zinc-950 transition-colors">Capabilities</Link>
              </li>
              <li>
                <Link href="#projects" className="hover:text-zinc-950 transition-colors">Projects (10)</Link>
              </li>
              <li>
                <Link href="#experience" className="hover:text-zinc-950 transition-colors">Experience</Link>
              </li>
              <li>
                <Link href="#skills" className="hover:text-zinc-950 transition-colors">Skills</Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-zinc-950 transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Direct Channels */}
          <div className="space-y-3">
            <div className="text-xs font-mono text-zinc-500">Direct Contact</div>
            <ul className="space-y-2 text-xs">
              <li>
                <a 
                  href="mailto:gul.saadkhan@outlook.com" 
                  className="inline-flex items-center gap-2 hover:text-zinc-950 transition-colors text-zinc-700"
                >
                  <Mail className="w-3.5 h-3.5 text-zinc-500" />
                  <span>gul.saadkhan@outlook.com</span>
                </a>
              </li>
              <li>
                <a 
                  href="tel:+923425603490" 
                  className="inline-flex items-center gap-2 hover:text-zinc-950 transition-colors text-zinc-700"
                >
                  <Phone className="w-3.5 h-3.5 text-zinc-500" />
                  <span>+92 342 5603490</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://www.linkedin.com/in/saad-gull-011934164/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-2 hover:text-zinc-950 transition-colors text-zinc-700"
                >
                  <LinkedinIcon className="w-3.5 h-3.5 text-zinc-500" />
                  <span>LinkedIn</span>
                  <ExternalLink className="w-3 h-3 text-zinc-400" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <div>
            &copy; 2026 Saad Gul. All rights reserved.
          </div>
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-zinc-50 hover:bg-zinc-100 border border-zinc-200 text-zinc-700 hover:text-zinc-950 transition-colors"
            aria-label="Scroll back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
