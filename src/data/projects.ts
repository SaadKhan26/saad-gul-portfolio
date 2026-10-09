import { Project } from '@/types';

export const projectsData: Project[] = [
  {
    id: 'comfrt',
    code: 'DTC-01',
    title: 'Comfrt',
    subtitle: 'Viral Direct-To-Consumer Apparel Brand',
    category: 'shopify',
    categoryLabel: 'Shopify OS 2.0 / Liquid',
    url: 'https://comfrt.com',
    displayUrl: 'comfrt.com',
    statusBadge: 'HIGH-VOLUME DTC',
    summary: 'Custom Shopify theme architecture and dynamic PDP features for a viral apparel brand known for anxiety-reducing weighted hoodies and oversized loungewear.',
    outcome: 'Engineered high-performance cart drawer, bundle variant selectors, and optimized critical rendering paths to handle viral social traffic surges.',
    highlights: [
      'Developed bespoke Shopify Liquid templates with modular Online Store 2.0 sections and dynamic blocks.',
      'Implemented high-converting AJAX slide-out cart drawer with instant upsell triggers and tiered free-shipping progress bar.',
      'Optimized Core Web Vitals (LCP, CLS, INP) to ensure high-speed mobile checkouts during major launch drops.',
      'Integrated third-party review widgets, inventory alerts, and dynamic product recommendations.'
    ],
    tags: ['Shopify Liquid', 'AJAX Cart API', 'Custom Theme', 'Performance', 'Mobile-First', 'JavaScript ES6+'],
    metrics: [
      { label: 'Brand Scale', value: '7-Figure DTC' },
      { label: 'Mobile UX', value: 'Sub-second Drawer Cart' },
      { label: 'Architecture', value: 'Shopify OS 2.0' }
    ]
  },
  {
    id: 'comparables',
    code: 'APP-02',
    title: 'Comparables',
    subtitle: 'AI-Driven Financial Benchmarking Platform',
    category: 'react',
    categoryLabel: 'Web App / React & Next.js',
    url: 'https://www.comparables.ai',
    displayUrl: 'comparables.ai',
    statusBadge: 'AI SAAS PLATFORM',
    summary: 'Next-generation financial analysis platform enabling investment analysts to compare corporate financial statements, multiples, and valuations using AI assistance.',
    outcome: 'Architected responsive, high-performance UI components using Next.js and Material UI with real-time financial data visualization and comparison tables.',
    highlights: [
      'Engineered interactive comparison tables and analytics dashboards using React, Next.js, and Material UI.',
      'Collaborated closely with backend engineers and product teams to integrate AI-driven financial query engines.',
      'Implemented fluid responsive layouts, keyboard shortcuts, and strict accessibility standards across complex data grids.',
      'Enforced code quality, reusable design system components, and clean Git workflows.'
    ],
    tags: ['React.js', 'Next.js', 'Material UI', 'REST APIs', 'Data Visualization', 'TypeScript'],
    metrics: [
      { label: 'Platform', value: 'Next.js App' },
      { label: 'Design System', value: 'Material UI' },
      { label: 'Core Engine', value: 'AI Analytics' }
    ]
  },
  {
    id: 'kawaii-slime',
    code: 'DTC-03',
    title: 'Kawaii Slime Company',
    subtitle: 'High-Traffic Sensory & Toys E-Commerce',
    category: 'shopify',
    categoryLabel: 'Shopify OS 2.0 / Liquid',
    url: 'https://www.kawaiislimecompany.com',
    displayUrl: 'kawaiislimecompany.com',
    statusBadge: 'VIRAL E-COMMERCE',
    summary: 'High-volume sensory craft and toy brand with massive international retail reach, featured across major national media and social channels.',
    outcome: 'Architected playful, custom brand storefront with complex multi-variant matrix selectors, custom collection texture filters, and optimized checkout flow.',
    highlights: [
      'Built custom Liquid sections allowing marketing teams to create seasonal campaign pages without code changes.',
      'Integrated dynamic bundle builders and gift-with-purchase mechanics powered by Shopify AJAX Cart APIs.',
      'Streamlined product discovery with responsive category filters (texture, scent, color theme).',
      'Optimized media delivery, lazy loading, and asset minification across high-image catalog collections.'
    ],
    tags: ['Shopify OS 2.0', 'Liquid', 'JavaScript', 'Custom Filtering', 'AJAX Cart', 'CRO'],
    metrics: [
      { label: 'Catalog Depth', value: '500+ SKU Matrix' },
      { label: 'Audience', value: 'Millions Monthly' },
      { label: 'Feature', value: 'Bundle Builder' }
    ]
  },
  {
    id: 'mockups-directory',
    code: 'ECOM-04',
    title: 'Mockups Directory',
    subtitle: 'Digital Products & Asset Storefront on Shopify',
    category: 'shopify',
    categoryLabel: 'Shopify / Digital Goods',
    url: 'https://mockups.directory',
    displayUrl: 'mockups.directory',
    statusBadge: 'DIGITAL COMMERCE',
    summary: 'Custom Shopify storefront and curated digital asset platform built for UI/UX designers and creative engineers to discover and purchase premium device mockups and 3D scenes.',
    outcome: 'Engineered custom Shopify Liquid catalog with instant client-side tag filtering, digital asset delivery flows, and responsive image preview modals.',
    highlights: [
      'Built bespoke Shopify Liquid templates tailored for digital product downloads and asset showcases.',
      'Implemented instant search and tag-based filtering for seamless design asset discovery.',
      'Optimized image loading, caching strategies, and responsive picture tags for maximum storefront speed.',
      'Integrated digital download fulfillment apps with automated post-purchase license delivery.'
    ],
    tags: ['Shopify Liquid', 'Digital Products', 'Custom Theme', 'Instant Filter', 'Performance'],
    metrics: [
      { label: 'Speed Index', value: '98+ Lighthouse' },
      { label: 'Platform', value: 'Shopify' },
      { label: 'Type', value: 'Digital Downloads' }
    ]
  },
  {
    id: 'purely-white',
    code: 'DTC-05',
    title: 'Purely White Deluxe',
    subtitle: 'Premium Oral Care & Cosmetics E-Commerce',
    category: 'shopify',
    categoryLabel: 'Shopify OS 2.0 / Liquid',
    url: 'https://purelywhitedeluxe.com',
    displayUrl: 'purelywhitedeluxe.com',
    statusBadge: 'HEALTH & BEAUTY',
    summary: 'High-converting e-commerce storefront for a luxury dental cosmetics brand specializing in teeth whitening kits and oral care routines.',
    outcome: 'Engineered conversion-focused product pages with before/after interactive sliders, subscription checkout upsells, and trust-building social proof modules.',
    highlights: [
      'Engineered custom before-and-after image comparison slider with touch and mouse drag capabilities.',
      'Implemented high-converting product pages (PDP) with accordion FAQs, ingredient disclosures, and clinical evidence tabs.',
      'Integrated subscription purchase flows and post-purchase one-click upsell integrations.',
      'Conducted speed audits, reducing script execution times and eliminating render-blocking bottlenecks.'
    ],
    tags: ['Shopify Liquid', 'Custom PDP', 'Conversion Rate Optimization', 'Interactive UI', 'JavaScript'],
    metrics: [
      { label: 'Checkout', value: 'Optimized Funnel' },
      { label: 'UI Element', value: 'Interactive Slider' },
      { label: 'Platform', value: 'Shopify 2.0' }
    ]
  },
  {
    id: 'atelier-rmr',
    code: 'DTC-06',
    title: 'Atelier RMR Jewelers',
    subtitle: 'Luxury Fine Jewelry Boutique',
    category: 'shopify',
    categoryLabel: 'Shopify OS 2.0 / Liquid',
    url: 'https://atelierrmr.com',
    displayUrl: 'atelierrmr.com',
    statusBadge: 'LUXURY BOUTIQUE',
    summary: 'Sophisticated luxury storefront designed for high-end custom jewelry, engagement rings, and bespoke diamond creations.',
    outcome: 'Translated high-end editorial designs into a pixel-perfect, minimalist Shopify theme with custom ring sizing guides and private inquiry modals.',
    highlights: [
      'Executed editorial typography, generous whitespace, and luxury brand design language in Liquid and CSS.',
      'Developed custom ring-sizer modal calculators and custom consultation booking flows.',
      'Built high-resolution zoomable gallery showcases for fine gemstone details.',
      'Ensured full mobile responsiveness with frictionless thumb-zone navigation.'
    ],
    tags: ['Shopify Theme', 'Liquid', 'Luxury E-Commerce', 'Bespoke UI', 'Responsive Design'],
    metrics: [
      { label: 'Design Fidelity', value: 'Pixel-Perfect' },
      { label: 'Niche', value: 'Fine Jewelry' },
      { label: 'Experience', value: 'Editorial Luxury' }
    ]
  },
  {
    id: 'seven-thirty',
    code: 'DTC-07',
    title: 'Seven Thirty',
    subtitle: 'Modern Lifestyle & Streetwear Apparel',
    category: 'shopify',
    categoryLabel: 'Shopify OS 2.0 / Liquid',
    url: 'https://seventhirty.co',
    displayUrl: 'seventhirty.co',
    statusBadge: 'STREETWEAR DROP',
    summary: 'Bold lifestyle fashion brand featuring limited-edition drop collections, editorial lookbooks, and high-impact graphic aesthetics.',
    outcome: 'Built an edgy, modern dark-themed storefront featuring drop-countdown mechanics, lookbook galleries, and rapid mobile checkout.',
    highlights: [
      'Engineered time-released product drop countdowns with automatic inventory reveal.',
      'Designed interactive swipeable lookbook carousels with direct "Shop The Look" hotspots.',
      'Customized sticky add-to-cart bars that engage on mobile scroll past product imagery.',
      'Streamlined asset loading for video hero banners and high-resolution lookbook assets.'
    ],
    tags: ['Shopify Liquid', 'Drop Mechanics', 'Dark Mode UI', 'Lookbook Hotspots', 'Mobile Cart'],
    metrics: [
      { label: 'Style', value: 'Dark / Streetwear' },
      { label: 'Feature', value: 'Shop The Look' },
      { label: 'Optimization', value: 'Rapid Mobile' }
    ]
  },
  {
    id: 'faj-trading',
    code: 'B2B-08',
    title: 'FAJ Trading LLC',
    subtitle: 'Corporate Trading & Supply Platform',
    category: 'shopify',
    categoryLabel: 'Corporate & B2B E-Commerce',
    url: 'https://fajtradingllc.com',
    displayUrl: 'fajtradingllc.com',
    statusBadge: 'B2B & WHOLESALE',
    summary: 'Corporate trading enterprise platform facilitating international wholesale procurement, equipment supply, and bulk product inquiries.',
    outcome: 'Architected structured B2B catalog with Request-for-Quote (RFQ) workflows, specification downloads, and corporate client inquiry funnels.',
    highlights: [
      'Developed B2B product catalog architecture with tiered wholesale pricing triggers and quote request forms.',
      'Engineered clean corporate identity with trust credentials and technical specification tabs.',
      'Optimized cross-browser compatibility across legacy corporate browsers and modern mobile devices.',
      'Implemented lead-generation inquiry tracking and automated CRM intake hooks.'
    ],
    tags: ['Shopify', 'B2B Architecture', 'Request-For-Quote', 'Corporate UI', 'HTML5 / CSS3'],
    metrics: [
      { label: 'Segment', value: 'B2B Wholesale' },
      { label: 'Workflow', value: 'Direct RFQ System' },
      { label: 'Reliability', value: 'Enterprise Grade' }
    ]
  },
  {
    id: 'faj-trading-pk',
    code: 'ECOM-09',
    title: 'FAJ Trading Pakistan',
    subtitle: 'Appliance Parts & Equipment Distribution Store',
    category: 'shopify',
    categoryLabel: 'Shopify / E-Commerce',
    url: 'https://fajtrading.com.pk',
    displayUrl: 'fajtrading.com.pk',
    statusBadge: 'REGIONAL E-COM',
    summary: 'Dedicated regional e-commerce store for HVAC parts, commercial kitchen equipment, and appliance maintenance components with localized payment and shipping integrations.',
    outcome: 'Built clean product catalog with part number SKU search, instant cart drawer, and localized checkout for Pakistan market.',
    highlights: [
      'Engineered SKU and model number search for thousands of technical replacement parts.',
      'Customized responsive product pages with technical spec tables and warranty details.',
      'Integrated domestic payment options and direct WhatsApp order confirmation.',
      'Optimized theme performance for mobile users on regional mobile networks.'
    ],
    tags: ['Shopify Liquid', 'SKU Part Search', 'E-Commerce', 'Responsive UI', 'WhatsApp Orders'],
    metrics: [
      { label: 'Catalog', value: '1,000+ Parts' },
      { label: 'Platform', value: 'Shopify' },
      { label: 'Market', value: 'Pakistan' }
    ]
  },
  {
    id: 'faj-services',
    code: 'SRV-10',
    title: 'FAJ Technical Services UAE',
    subtitle: 'Appliance & HVAC Maintenance Services Platform',
    category: 'react',
    categoryLabel: 'Web Platform & Service Booking',
    url: 'https://fajservices.ae',
    displayUrl: 'fajservices.ae',
    statusBadge: 'UAE SERVICE PORTAL',
    summary: 'High-traffic commercial and residential maintenance booking platform serving Dubai, Abu Dhabi, and Sharjah for home appliances, HVAC, and refrigeration systems.',
    outcome: 'Engineered service booking funnels, dynamic inquiry forms, service area location pages, and fast mobile-first UI for rapid emergency bookings.',
    highlights: [
      'Developed streamlined emergency booking funnels with instant service request workflows.',
      'Engineered location-based landing pages optimized for local UAE search visibility and conversion.',
      'Implemented responsive mobile navigation with one-click direct calling and WhatsApp booking hooks.',
      'Optimized Core Web Vitals to deliver sub-second mobile page loads across Dubai and UAE users.'
    ],
    tags: ['Service Booking', 'Web Platform', 'Mobile UX', 'Local SEO', 'Conversion Funnel'],
    metrics: [
      { label: 'Coverage', value: 'Dubai & UAE' },
      { label: 'Booking', value: '1-Click Funnel' },
      { label: 'Performance', value: 'Sub-second LCP' }
    ]
  }
];
