export type ProjectCategory = 'all' | 'shopify' | 'react';

export interface Project {
  id: string;
  code: string;
  title: string;
  subtitle: string;
  category: 'shopify' | 'react';
  categoryLabel: string;
  url: string;
  displayUrl: string;
  statusBadge: string;
  summary: string;
  outcome: string;
  highlights: string[];
  tags: string[];
  metrics?: { label: string; value: string }[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  isContract?: boolean;
  dateRange: string;
  location: string;
  techStack: string[];
  bullets: string[];
}

export interface SkillGroup {
  id: string;
  title: string;
  code: string;
  description: string;
  skills: { name: string; level?: 'Core' | 'Advanced' | 'Expert' }[];
  tags: string[];
}

export interface TelemetryStat {
  value: string;
  label: string;
  subtext: string;
}
