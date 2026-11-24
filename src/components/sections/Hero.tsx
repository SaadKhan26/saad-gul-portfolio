'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export default function Hero() {
  return (
    <section 
      id="hero" 
      className="relative pt-32 pb-20 md:pt-40 md:pb-24 bg-white"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-3xl space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-zinc-950 tracking-tight leading-[1.12]">
            Front-End Engineer &amp; Shopify Developer.
          </h1>

          <p className="text-base sm:text-lg text-zinc-600 leading-relaxed max-w-2xl">
            I build custom Shopify themes and React applications with a focus on speed, conversion, and clean code. 5+ years of production experience delivering for DTC brands like Comfrt and Kawaii Slime, B2B platforms, and SaaS products.
          </p>

          <div className="flex items-center gap-6 pt-2">
            <Link
              href="#projects"
              className="inline-flex items-center px-5 py-2.5 rounded-md bg-zinc-950 text-white text-sm font-medium hover:bg-zinc-800 transition-colors shadow-xs"
            >
              View Projects
            </Link>

            <Link
              href="#contact"
              className="inline-flex items-center gap-1 text-sm text-zinc-600 hover:text-zinc-950 transition-colors"
            >
              <span>Get in touch</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
