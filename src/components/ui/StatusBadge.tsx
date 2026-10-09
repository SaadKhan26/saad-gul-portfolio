import React from 'react';

interface StatusBadgeProps {
  text?: string;
  className?: string;
}

export default function StatusBadge({ 
  text = 'AVAILABLE FOR NEW PROJECTS & ROLES', 
  className = '' 
}: StatusBadgeProps) {
  return (
    <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase border border-emerald-500/30 bg-emerald-950/40 text-emerald-300 shadow-[0_0_15px_rgba(16,185,129,0.15)] ${className}`}>
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
      </span>
      <span>{text}</span>
    </div>
  );
}
