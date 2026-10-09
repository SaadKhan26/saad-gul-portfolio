'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowDown, FileText, Sparkles, ShoppingBag, Code, ArrowUpRight } from 'lucide-react';
import StatusBadge from '@/components/ui/StatusBadge';
import { telemetryStats } from '@/data/skills';

export default function Hero() {
  return (
    <section 
      id="hero" 
      className="relative flex flex-col justify-center pt-20 pb-8 md:pt-24 md:pb-10 overflow-hidden bg-[#030305]"
    >
      {/* Cyanex-style atmospheric glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-gradient-to-tr from-cyan-600/20 via-blue-600/15 to-purple-600/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-20 right-10 w-[300px] h-[300px] bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Top Badges */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 mb-3.5">
          <StatusBadge text="Available for Contract & Full-Time" />
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium text-zinc-300 bg-white/[0.04] border border-white/[0.08] backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
            <span>Shopify OS 2.0 // React & Next.js</span>
          </div>
        </div>

        {/* Main Heading */}
        <div className="max-w-4xl space-y-2.5">
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.18] sm:leading-[1.14]">
            Transforming Complex UI/UX into{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-400">
              High-Converting Shopify Stores
            </span>{' '}
            & Modern Web Apps.
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-zinc-300 max-w-2xl leading-relaxed pt-1 font-normal">
            I am <strong className="text-white font-bold">Saad Gul</strong>, a Front-End Engineer & Shopify Specialist with 5+ years of experience bridging design and engineering. Trusted by viral DTC brands (<em className="text-cyan-300 not-italic font-semibold">Comfrt</em>, <em className="text-cyan-300 not-italic font-semibold">Kawaii Slime</em>) and AI SaaS startups (<em className="text-cyan-300 not-italic font-semibold">Comparables.ai</em>) to ship pixel-perfect, lightning-fast digital experiences.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-3 pt-5 pb-7">
          <Link
            href="#projects"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-extrabold text-black bg-gradient-to-r from-cyan-400 via-cyan-300 to-blue-400 hover:from-cyan-300 hover:to-blue-300 rounded-full transition-all duration-200 shadow-[0_0_25px_rgba(34,211,238,0.4)] hover:shadow-[0_0_35px_rgba(34,211,238,0.6)] transform hover:-translate-y-0.5"
          >
            <ShoppingBag className="w-4 h-4 text-black" />
            <span>Explore Flagship Projects (10)</span>
            <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
          </Link>

          <a
            href="/Saad_Gul_Resume.pdf"
            download
            className="inline-flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold text-white bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.12] rounded-full transition-all duration-200 hover:border-cyan-400/50 shadow-sm"
          >
            <FileText className="w-4 h-4 text-cyan-400" />
            <span>Download Updated Resume</span>
          </a>

          <Link
            href="#contact"
            className="inline-flex items-center gap-1.5 px-3 py-2 text-xs sm:text-sm font-medium text-zinc-400 hover:text-white transition-colors"
          >
            <span>Let&apos;s talk</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Live Telemetry Strip (Inspired by Cyanex) */}
        <div className="pt-4 border-t border-white/[0.08]">
          <div className="text-[11px] font-mono tracking-widest text-zinc-400 uppercase mb-3 flex items-center gap-2 font-bold">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            <span>Verified Career Telemetry</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {telemetryStats.map((stat) => (
              <div 
                key={stat.label}
                className="bg-[#0a0a14]/80 border border-white/[0.08] hover:border-cyan-500/40 rounded-xl p-3.5 transition-all shadow-[0_4px_20px_rgba(0,0,0,0.5)]"
              >
                <div className="text-xl sm:text-2xl font-black font-mono tracking-tight text-cyan-400">
                  {stat.value}
                </div>
                <div className="text-xs font-bold text-white mt-0.5">
                  {stat.label}
                </div>
                <div className="text-[11px] text-zinc-400 truncate mt-0.5 font-medium">
                  {stat.subtext}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
