import React from 'react';
import { skillGroups } from '@/data/skills';

export default function Skills() {
  return (
    <section id="skills" className="py-20 border-t border-zinc-200/80 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <h2 className="text-2xl sm:text-3xl font-semibold text-zinc-950 tracking-tight">
            Technical Skills
          </h2>
          <p className="mt-2 text-base text-zinc-600 leading-relaxed">
            Technologies, frameworks, and workflows applied across 5+ years of production web development.
          </p>
        </div>

        {/* Skill Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillGroups.map((group) => (
            <div
              key={group.id}
              className="rounded-lg bg-zinc-50/50 border border-zinc-200/80 p-6 flex flex-col justify-between hover:border-zinc-300 hover:bg-white transition-all shadow-xs"
            >
              <div>
                <h3 className="text-lg font-medium text-zinc-950 mb-2">
                  {group.title}
                </h3>
                <p className="text-xs text-zinc-600 leading-relaxed mb-6">
                  {group.description}
                </p>

                {/* Skills list */}
                <div className="space-y-2 mb-6">
                  {group.skills.map((skill) => (
                    <div key={skill.name} className="flex items-center justify-between text-xs py-1 border-b border-zinc-200/60 last:border-0">
                      <span className="text-zinc-800">{skill.name}</span>
                      {skill.level && (
                        <span className="text-[11px] font-mono text-zinc-500">
                          {skill.level}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Tag Cloud */}
              <div className="pt-4 border-t border-zinc-200/60 flex flex-wrap gap-1.5">
                {group.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-mono px-2 py-0.5 rounded bg-white text-zinc-700 border border-zinc-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
