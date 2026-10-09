import React from 'react';
import { Layers, ShoppingBag, Zap, Eye, CheckCircle2, Laptop } from 'lucide-react';
import CardTilt from '@/components/ui/CardTilt';

export default function About() {
  const pillars = [
    {
      icon: ShoppingBag,
      code: 'ECOM-01',
      title: 'Bespoke Shopify Architecture',
      description: '5+ years crafting custom Liquid themes, dynamic Online Store 2.0 modular sections, and high-converting AJAX cart drawers that handle viral traffic surges seamlessly.',
      tags: ['Shopify Liquid', 'Theme OS 2.0', 'AJAX Cart API', 'Custom PDPs']
    },
    {
      icon: Laptop,
      code: 'REACT-02',
      title: 'Modern Frontend Engineering',
      description: 'Building robust, scalable web applications with React.js, Next.js (App Router), and TypeScript. Specialized in responsive UI libraries like Material UI and Tailwind CSS.',
      tags: ['React.js', 'Next.js', 'Material UI', 'Tailwind CSS', 'TypeScript']
    },
    {
      icon: Zap,
      code: 'PERF-03',
      title: 'Core Web Vitals & Speed',
      description: 'Obsessed with sub-second page loads. Eliminating render-blocking scripts, optimizing critical CSS, and ensuring top-tier Lighthouse scores for improved SEO and conversion rates.',
      tags: ['LCP / CLS / INP', 'Speed Audit', 'Asset Minification', 'SEO Ready']
    },
    {
      icon: Eye,
      code: 'DESIGN-04',
      title: 'Figma to Pixel-Perfect Reality',
      description: 'Bridging the gap between design visions and technical execution. Every breakpoint, typography scale, micro-interaction, and WCAG accessibility guideline is faithfully preserved.',
      tags: ['Figma to Code', 'WCAG Accessible', 'Cross-Browser', 'Mobile-First']
    }
  ];

  return (
    <section id="about" className="py-10 md:py-14 relative bg-[#030305]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 gap-3">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest mb-2 font-bold">
              <Layers className="w-3.5 h-3.5" />
              <span>01 // Capabilities & Profile</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
              Bridging High-End Design & Production Engineering.
            </h2>
          </div>
          <p className="text-sm text-zinc-400 max-w-md">
            Not just writing code—building reliable, high-converting digital products designed for business growth and seamless user delight.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <CardTilt key={pillar.title} className="rounded-2xl border border-white/[0.08] bg-[#0a0a14]/80 p-6 sm:p-7 hover:border-cyan-500/40 transition-all shadow-[0_4px_25px_rgba(0,0,0,0.5)]">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-cyan-950/60 border border-cyan-800/40 flex items-center justify-center text-cyan-400">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-mono text-zinc-500 font-semibold">{pillar.code}</span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2">{pillar.title}</h3>
                <p className="text-sm text-zinc-300 leading-relaxed mb-5">{pillar.description}</p>

                <div className="flex flex-wrap gap-2 pt-3 border-t border-white/[0.06]">
                  {pillar.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-white/[0.04] text-zinc-300 border border-white/[0.08]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardTilt>
            );
          })}
        </div>

        {/* Trust Banner */}
        <div className="mt-8 rounded-2xl bg-gradient-to-r from-blue-950/40 via-[#0a0a14] to-cyan-950/40 border border-white/[0.08] p-6 sm:p-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-xl">
          <div className="space-y-1">
            <div className="text-sm font-bold text-white flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-cyan-400" />
              <span>Full-Stack Frontend & E-Commerce Delivery</span>
            </div>
            <p className="text-xs text-zinc-400 max-w-xl">
              From greenfield theme builds to complex React/Next.js dynamic platforms, I ensure clean maintainable architecture, comprehensive documentation, and on-time delivery.
            </p>
          </div>
          <div className="text-xs font-mono font-bold text-cyan-300 whitespace-nowrap bg-[#05050a] px-3.5 py-2 rounded-lg border border-cyan-800/50 shadow-sm">
            5+ YEARS PRODUCTION
          </div>
        </div>
      </div>
    </section>
  );
}
