import { SkillGroup, TelemetryStat } from '@/types';

export const telemetryStats: TelemetryStat[] = [
  { value: '05+', label: 'Years Experience', subtext: 'Since 2020 in production' },
  { value: '08', label: 'Flagship Projects', subtext: 'DTC, AI SaaS & Enterprise' },
  { value: '100%', label: 'Delivery Integrity', subtext: 'Pixel-perfect to spec' },
  { value: 'Millions', label: 'E-Com GMV Driven', subtext: 'Supported on live stores' }
];

export const skillGroups: SkillGroup[] = [
  {
    id: 'frontend',
    title: 'Frontend Engineering',
    code: 'FE-01',
    description: 'Modern, high-performance web applications built with type safety, accessible semantic HTML, and fluid interactive components.',
    skills: [
      { name: 'React.js', level: 'Expert' },
      { name: 'Next.js (App Router)', level: 'Expert' },
      { name: 'JavaScript (ES6+)', level: 'Expert' },
      { name: 'TypeScript', level: 'Advanced' },
      { name: 'HTML5 & Semantic Web', level: 'Expert' },
      { name: 'CSS3 / SCSS / Tailwind CSS', level: 'Expert' },
      { name: 'Material UI (MUI)', level: 'Expert' },
      { name: 'Responsive & Adaptive Layouts', level: 'Expert' },
      { name: 'WCAG Accessibility Standards', level: 'Advanced' }
    ],
    tags: ['React', 'Next.js', 'Tailwind CSS', 'Material UI', 'ES6+', 'TypeScript', 'WCAG']
  },
  {
    id: 'shopify',
    title: 'Shopify & E-Commerce',
    code: 'ECOM-02',
    description: 'Bespoke Shopify theme architecture, high-converting checkout flows, and dynamic asynchronous storefront experiences.',
    skills: [
      { name: 'Shopify Liquid Engine', level: 'Expert' },
      { name: 'Online Store 2.0 (Sections & Blocks)', level: 'Expert' },
      { name: 'Shopify AJAX API (Cart, Search, Recs)', level: 'Expert' },
      { name: 'Custom Theme Architecture from Scratch', level: 'Expert' },
      { name: 'Conversion Rate Optimization (CRO)', level: 'Expert' },
      { name: 'Cart Drawer & Upsell Engineering', level: 'Expert' },
      { name: 'App Integrations & Custom Webhooks', level: 'Advanced' },
      { name: 'Speed & Core Web Vitals (LCP/CLS/INP)', level: 'Expert' }
    ],
    tags: ['Shopify Liquid', 'OS 2.0', 'AJAX Cart API', 'Drawer Cart', 'CRO', 'Core Web Vitals', 'Custom Themes']
  },
  {
    id: 'workflow',
    title: 'Architecture & Workflow',
    code: 'DEV-03',
    description: 'Battle-tested development workflows that bridge Figma design systems into scalable, maintainable production code.',
    skills: [
      { name: 'Figma to Pixel-Perfect Code', level: 'Expert' },
      { name: 'Git & GitHub Version Control', level: 'Expert' },
      { name: 'REST APIs & Asynchronous Data', level: 'Advanced' },
      { name: 'Cross-Browser Compatibility Testing', level: 'Expert' },
      { name: 'Lighthouse Performance Optimization', level: 'Expert' },
      { name: 'Agile & Collaborative Workflows', level: 'Advanced' }
    ],
    tags: ['Figma-to-Code', 'Git', 'GitHub', 'REST APIs', 'Lighthouse', 'Agile']
  }
];
