'use client';

import React, { useState } from 'react';
import { ExternalLink, ChevronDown, Check } from 'lucide-react';
import { projectsData } from '@/data/projects';
import { ProjectCategory } from '@/types';

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
    <section id="projects" className="py-20 border-t border-zinc-200/80 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header - Left aligned, straightforward */}
        <div className="max-w-2xl mb-8">
          <h2 className="text-2xl sm:text-3xl font-semibold text-zinc-950 tracking-tight">
            Selected Work
          </h2>
          <p className="mt-2 text-base text-zinc-600 leading-relaxed">
            Production builds across custom Shopify theme development, B2B platforms, and React web applications.
          </p>
        </div>

        {/* Filter Tabs - Clean, no pills, 4pt grid */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
              activeCategory === 'all'
                ? 'bg-zinc-950 text-white font-semibold'
                : 'text-zinc-600 hover:text-zinc-950 bg-zinc-50 border border-zinc-200/80 hover:bg-zinc-100'
            }`}
          >
            All Work ({counts.all})
          </button>

          <button
            onClick={() => setActiveCategory('shopify')}
            className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
              activeCategory === 'shopify'
                ? 'bg-zinc-950 text-white font-semibold'
                : 'text-zinc-600 hover:text-zinc-950 bg-zinc-50 border border-zinc-200/80 hover:bg-zinc-100'
            }`}
          >
            Shopify ({counts.shopify})
          </button>

          <button
            onClick={() => setActiveCategory('react')}
            className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
              activeCategory === 'react'
                ? 'bg-zinc-950 text-white font-semibold'
                : 'text-zinc-600 hover:text-zinc-950 bg-zinc-50 border border-zinc-200/80 hover:bg-zinc-100'
            }`}
          >
            React &amp; Next.js ({counts.react})
          </button>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project) => {
            const isExpanded = expandedProjectId === project.id;
            return (
              <article 
                key={project.id}
                className="rounded-lg bg-zinc-50/50 border border-zinc-200/80 p-6 flex flex-col justify-between hover:border-zinc-300 hover:bg-white transition-all shadow-xs"
              >
                <div>
                  {/* Category */}
                  <div className="mb-3">
                    <span className="text-xs font-mono text-zinc-500">
                      {project.categoryLabel}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-xl font-semibold text-zinc-950 tracking-tight mb-1">
                    {project.title}
                  </h3>
                  <div className="text-xs text-zinc-500 mb-3">
                    {project.subtitle}
                  </div>

                  {/* Summary */}
                  <p className="text-sm text-zinc-600 leading-relaxed mb-4">
                    {project.summary}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-mono px-2 py-0.5 rounded bg-white text-zinc-700 border border-zinc-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Expandable Technical Details */}
                  {isExpanded && (
                    <div className="mb-6 pt-4 border-t border-zinc-200/60">
                      <div className="text-xs font-mono text-zinc-500 mb-2">
                        Key Deliverables:
                      </div>
                      <ul className="space-y-2">
                        {project.highlights.map((highlight, index) => (
                          <li key={index} className="flex items-start gap-2 text-xs text-zinc-600 leading-relaxed">
                            <Check className="w-3.5 h-3.5 text-zinc-500 shrink-0 mt-0.5" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Card Footer Actions */}
                <div className="pt-4 border-t border-zinc-200/60 flex items-center justify-between gap-4">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-950 hover:text-zinc-600 transition-colors"
                  >
                    <span>{project.category === 'shopify' ? 'Visit Store' : 'Visit Site'}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  <button
                    onClick={() => toggleExpand(project.id)}
                    className="inline-flex items-center gap-1 text-xs text-zinc-500 hover:text-zinc-950 transition-colors"
                    aria-expanded={isExpanded}
                  >
                    <span>{isExpanded ? 'Less' : 'Details'}</span>
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-150 ${isExpanded ? 'rotate-180' : ''}`} />
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
