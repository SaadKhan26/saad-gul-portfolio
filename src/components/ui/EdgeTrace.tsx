import React from 'react';

export default function EdgeTrace() {
  return (
    <div 
      className="pointer-events-none absolute inset-0 rounded-[inherit] overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20"
      aria-hidden="true"
    >
      <div className="absolute inset-0 rounded-[inherit] border border-cyan-400/50 shadow-[inset_0_0_14px_rgba(34,211,238,0.25)]" />
      <span className="absolute top-0 left-0 w-10 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-edge-top" />
      <span className="absolute bottom-0 right-0 w-10 h-[2px] bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-edge-bottom" />
    </div>
  );
}
