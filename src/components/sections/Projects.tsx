'use client';

import React, { useState } from 'react';
import { ExternalLink, ChevronDown, Sparkles, ShoppingBag, Laptop, CheckCircle, Layers } from 'lucide-react';
import { projectsData } from '@/data/projects';
import { ProjectCategory } from '@/types';
import EdgeTrace from '@/components/ui/EdgeTrace';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');
  const [expandedProjectId, setExpandedProjectId] = useState<string | null>(null);

  const filteredProjects = projectsData.filter((project) => {
    if (activeCategory === 'all') return true;
    return project.category === activeCategory;
  });

  const counts = {
    all: projectsData.length,
    shopify: projectsData.filter((p) => p.category === 'shopify').length,
    react: projectsData.filter((p) => p.category === 'react').length,
  };

  const toggleExpand = (id: string) => {
    setExpandedProjectId(expandedProjectId === id ? null : id);
  };

  return (
    <section id="projects" className="py-10 md:py-14 relative bg-[#030305]">
      {/* Background radial glow */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-cyan-600/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-5 gap-3">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest mb-1.5 font-bold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>02 // Selected Projects</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
              Flagship Stores & Web Applications.
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-zinc-400 max-w-md">
            10 production builds delivering high conversions, viral traffic resilience, and clean scalable architecture.
          </p>
        </div>

        {/* Filter Bar (Cyanex-inspired) */}
        <div className="flex flex-wrap items-center gap-2 mb-6 p-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] backdrop-blur-md w-fit">
          <button
            onClick={() => setActiveCategory('all')}
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
              activeCategory === 'all'
                ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-extrabold shadow-[0_0_15px_rgba(34,211,238,0.4)]'
                : 'text-zinc-400 hover:text-white hover:bg-white/[0.06]'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>All Projects</span>
            <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
              activeCategory === 'all' ? 'bg-black/30 text-black font-bold' : 'bg-white/[0.08] text-zinc-400'
            }`}>
              {counts.all}
            </span>
          </button>

          <button
            onClick={() => setActiveCategory('shopify')}
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
              activeCategory === 'shopify'
                ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-extrabold shadow-[0_0_15px_rgba(34,211,238,0.4)]'
                : 'text-zinc-400 hover:text-white hover:bg-white/[0.06]'
            }`}
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>Shopify & E-Commerce</span>
            <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
              activeCategory === 'shopify' ? 'bg-black/30 text-black font-bold' : 'bg-white/[0.08] text-zinc-400'
            }`}>
              {counts.shopify}
            </span>
          </button>

          <button
            onClick={() => setActiveCategory('react')}
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
              activeCategory === 'react'
                ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-extrabold shadow-[0_0_15px_rgba(34,211,238,0.4)]'
                : 'text-zinc-400 hover:text-white hover:bg-white/[0.06]'
            }`}
          >
            <Laptop className="w-3.5 h-3.5" />
            <span>Web Apps & Platforms</span>
            <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
              activeCategory === 'react' ? 'bg-black/30 text-black font-bold' : 'bg-white/[0.08] text-zinc-400'
            }`}>
              {counts.react}
            </span>
          </button>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project) => {
            const isExpanded = expandedProjectId === project.id;
            return (
              <article 
                key={project.id}
                className="group relative rounded-2xl bg-[#0a0a14]/80 border border-white/[0.08] p-6 sm:p-7 flex flex-col justify-between hover:border-cyan-500/40 transition-all duration-300 shadow-[0_4px_30px_rgba(0,0,0,0.6)]"
              >
                {/* Cyanex-Style Animated Edge Glow */}
                <EdgeTrace />

                <div className="relative z-10">
                  {/* Top Bar */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-mono text-cyan-400 font-bold tracking-wider">
                        {project.code}
                      </span>
                      <span className="text-zinc-600">•</span>
                      <span className="text-xs text-zinc-400 font-medium">
                        {project.categoryLabel}
                      </span>
                    </div>
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-cyan-950/60 text-cyan-300 border border-cyan-800/50">
                      {project.statusBadge}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>
                  <div className="text-xs text-zinc-400 font-medium mt-0.5 mb-3">
                    {project.subtitle}
                  </div>

                  {/* Summary */}
                  <p className="text-sm text-zinc-300 leading-relaxed mb-4">
                    {project.summary}
                  </p>

                  {/* Key Metrics Chips */}
                  {project.metrics && project.metrics.length > 0 && (
                    <div className="grid grid-cols-3 gap-2 mb-4 p-2.5 rounded-xl bg-black/60 border border-white/[0.06]">
                      {project.metrics.map((m) => (
                        <div key={m.label} className="text-center">
                          <div className="text-[10px] text-zinc-400 font-mono uppercase">{m.label}</div>
                          <div className="text-xs font-bold text-white tracking-tight mt-0.5">{m.value}</div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-zinc-300 border border-white/[0.08]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Expandable Technical Case File Drawer */}
                  <div 
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isExpanded ? 'max-h-96 opacity-100 mb-5 pt-3 border-t border-white/[0.08]' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider mb-2">
                      Technical Architecture Breakdown:
                    </div>
                    <ul className="space-y-2">
                      {project.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-start gap-2 text-xs text-zinc-300 leading-relaxed">
                          <CheckCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Actions Bar */}
                <div className="relative z-10 pt-4 border-t border-white/[0.06] flex items-center justify-between gap-3">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-black bg-cyan-400 hover:bg-cyan-300 px-4 py-2 rounded-full transition-all duration-200 shadow-[0_0_15px_rgba(34,211,238,0.35)] hover:shadow-[0_0_22px_rgba(34,211,238,0.55)]"
                  >
                    <span>{project.category === 'shopify' ? 'Visit Live Store' : 'Visit Live Site'}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  <button
                    onClick={() => toggleExpand(project.id)}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-zinc-400 hover:text-white px-3 py-1.5 rounded-lg hover:bg-white/[0.06] transition-colors"
                    aria-expanded={isExpanded}
                  >
                    <span>{isExpanded ? 'Hide Breakdown' : 'Case Details'}</span>
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`} />
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
