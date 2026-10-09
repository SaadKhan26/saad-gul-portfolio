import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { experienceData } from '@/data/experience';

export default function Experience() {
  return (
    <section id="experience" className="py-10 md:py-14 relative bg-[#030305]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 gap-3">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest mb-1.5 font-bold">
              <Briefcase className="w-3.5 h-3.5" />
              <span>03 // Career Journey</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
              Work Experience & Agency Track Record.
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-zinc-400 max-w-md">
            5+ years of verified software engineering experience leading frontend architectures, custom Shopify themes, and collaborative team deliveries.
          </p>
        </div>

        {/* Timeline List */}
        <div className="relative border-l border-white/[0.08] ml-3 sm:ml-4 pl-6 sm:pl-8 space-y-6">
          {experienceData.map((job) => (
            <div key={job.id} className="relative group">
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[#030305] border-2 border-cyan-400 group-hover:scale-125 transition-transform duration-200 shadow-[0_0_12px_rgba(34,211,238,0.6)]" />

              {/* Card Container */}
              <div className="rounded-2xl bg-[#0a0a14]/80 border border-white/[0.08] p-6 sm:p-7 hover:border-cyan-500/40 transition-all duration-200 shadow-[0_4px_25px_rgba(0,0,0,0.5)]">
                {/* Header Row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                      {job.role}
                    </h3>
                    <span className="text-zinc-600 font-semibold">•</span>
                    <span className="text-base font-semibold text-cyan-400">
                      {job.company}
                    </span>
                    {job.isContract && (
                      <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-white/[0.06] text-zinc-300 border border-white/[0.1]">
                        CONTRACT
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-3 text-xs text-zinc-400 font-mono">
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-zinc-500" />
                      {job.dateRange}
                    </span>
                    <span className="hidden sm:inline text-zinc-700">|</span>
                    <span className="inline-flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                      {job.location}
                    </span>
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {job.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-zinc-300 border border-white/[0.08]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Bullets */}
                <ul className="space-y-2 text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  {job.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
