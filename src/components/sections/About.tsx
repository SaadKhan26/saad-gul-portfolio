import React from 'react';

export default function About() {
  const capabilities = [
    {
      title: 'Shopify Theme Development',
      description: 'Building custom Shopify Liquid themes from scratch or tailoring Online Store 2.0 sections. Specialized in slide-out AJAX carts, product bundle logic, dynamic variant selectors, and Third-Party app integrations.',
      skills: ['Liquid', 'OS 2.0 Sections', 'Storefront AJAX API', 'Custom PDPs']
    },
    {
      title: 'React & Next.js Engineering',
      description: 'Developing high-performance, responsive web applications with React, Next.js (App Router), and TypeScript. Clean component hierarchies with Tailwind CSS, Material UI, and REST API integrations.',
      skills: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Material UI']
    },
    {
      title: 'Performance & Core Web Vitals',
      description: 'Auditing and optimizing real-world page speed. Eliminating render-blocking scripts, refactoring bloated theme code, lazy-loading heavy media, and targeting sub-second LCP scores.',
      skills: ['LCP / CLS / INP', 'Script Minification', 'Theme Code Audits', 'Mobile UX']
    },
    {
      title: 'Figma to Clean Code',
      description: 'Translating Figma design systems into pixel-accurate, semantic HTML/CSS/JS. Ensuring every breakpoint, hover state, and interactive detail works reliably across iOS, Android, and desktop browsers.',
      skills: ['Pixel-Perfect Fidelity', 'Responsive Layouts', 'WCAG Accessibility', 'Cross-Browser']
    }
  ];

  return (
    <section id="about" className="py-20 border-t border-zinc-200/80 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mb-12">
          <h2 className="text-2xl sm:text-3xl font-semibold text-zinc-950 tracking-tight">
            Capabilities &amp; Experience
          </h2>
          <p className="mt-3 text-base text-zinc-600 leading-relaxed">
            Hands-on frontend engineering for brands that care about speed, conversion, and code maintainability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {capabilities.map((item) => (
            <div 
              key={item.title} 
              className="rounded-lg border border-zinc-200/80 bg-zinc-50/50 p-6 flex flex-col justify-between hover:border-zinc-300 hover:bg-white transition-all shadow-xs"
            >
              <div>
                <h3 className="text-lg font-medium text-zinc-950 mb-2.5">
                  {item.title}
                </h3>
                <p className="text-sm text-zinc-600 leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-zinc-200/60">
                {item.skills.map((skill) => (
                  <span 
                    key={skill}
                    className="text-xs font-mono px-2 py-0.5 rounded bg-white text-zinc-700 border border-zinc-200"
                  >
                    {skill}
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
