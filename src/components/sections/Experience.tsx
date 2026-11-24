import React from 'react';
import { Calendar, MapPin } from 'lucide-react';
import { experienceData } from '@/data/experience';

export default function Experience() {
  return (
    <section id="experience" className="py-20 border-t border-zinc-200/80 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <h2 className="text-2xl sm:text-3xl font-semibold text-zinc-950 tracking-tight">
            Work Experience
          </h2>
          <p className="mt-2 text-base text-zinc-600 leading-relaxed">
            5+ years of verified software engineering experience across Shopify development and modern React web applications.
          </p>
        </div>

        {/* Timeline List */}
        <div className="space-y-6">
          {experienceData.map((job) => (
            <div 
              key={job.id} 
              className="rounded-lg bg-zinc-50/50 border border-zinc-200/80 p-6 hover:border-zinc-300 hover:bg-white transition-all shadow-xs"
            >
              {/* Header Row */}
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-3">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-lg font-semibold text-zinc-950 tracking-tight">
                    {job.role}
                  </h3>
                  <span className="text-zinc-400 font-normal">at</span>
                  <span className="text-base font-medium text-zinc-800">
                    {job.company}
                  </span>
                  {job.isContract && (
                    <span className="text-xs font-mono px-2 py-0.5 rounded bg-white text-zinc-600 border border-zinc-200">
                      Contract
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-3 text-xs text-zinc-500 font-mono">
                  <span className="inline-flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-zinc-400" />
                    {job.dateRange}
                  </span>
                  <span className="hidden sm:inline text-zinc-300">|</span>
                  <span className="inline-flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-zinc-400" />
                    {job.location}
                  </span>
                </div>
              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {job.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-mono px-2 py-0.5 rounded bg-white text-zinc-700 border border-zinc-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Bullets */}
              <ul className="space-y-2 text-sm text-zinc-600 leading-relaxed">
                {job.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="text-zinc-400 select-none font-bold mt-0.5">&bull;</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
