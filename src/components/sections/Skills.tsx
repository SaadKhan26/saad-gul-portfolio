import React from 'react';
import { Cpu, CheckCircle } from 'lucide-react';
import { skillGroups } from '@/data/skills';
import CardTilt from '@/components/ui/CardTilt';

export default function Skills() {
  return (
    <section id="skills" className="py-10 md:py-14 relative bg-[#030305]">
      {/* Background subtle radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-cyan-950/20 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-3">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest mb-1.5 font-bold">
              <Cpu className="w-3.5 h-3.5" />
              <span>04 // Technical Matrix</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Skills, Frameworks & Tooling.
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-zinc-400 max-w-md">
            Production-grade competencies built through 5+ years of continuous development, theme refactoring, and web engineering.
          </p>
        </div>

        {/* Skill Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillGroups.map((group) => (
            <CardTilt
              key={group.id}
              className="rounded-2xl bg-[#0a0a14]/80 backdrop-blur-md border border-white/[0.08] p-6 sm:p-7 flex flex-col justify-between hover:border-cyan-500/40 hover:shadow-[0_0_30px_rgba(34,211,238,0.1)] transition-all duration-300 shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono text-cyan-400 font-bold tracking-wider">
                    {group.code}
                  </span>
                  <span className="text-[10px] font-mono text-zinc-500 uppercase font-semibold">
                    PROVEN STACK
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2">
                  {group.title}
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed mb-6">
                  {group.description}
                </p>

                {/* Skills list */}
                <div className="space-y-2.5 mb-6">
                  {group.skills.map((skill) => (
                    <div key={skill.name} className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2 text-zinc-200 font-medium">
                        <CheckCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                        <span>{skill.name}</span>
                      </div>
                      {skill.level && (
                        <span className={`text-[10px] font-mono font-semibold px-2 py-0.5 rounded ${
                          skill.level === 'Expert' 
                            ? 'bg-cyan-950/60 text-cyan-300 border border-cyan-800/60' 
                            : 'bg-white/[0.05] text-zinc-400 border border-white/[0.08]'
                        }`}>
                          {skill.level}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Tag Cloud */}
              <div className="pt-4 border-t border-white/[0.08] flex flex-wrap gap-1.5">
                {group.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-zinc-300 border border-white/[0.08] hover:border-cyan-500/30 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </CardTilt>
          ))}
        </div>
      </div>
    </section>
  );
}
