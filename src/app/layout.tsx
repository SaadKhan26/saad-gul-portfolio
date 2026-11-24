import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const sansFont = Plus_Jakarta_Sans({
  variable: '--font-sans',
  subsets: ['latin'],
  display: 'swap',
});

const monoFont = JetBrains_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://saadgul-portfolio.vercel.app'),
  title: 'Saad Gul — Front-End Engineer & Shopify Developer',
  description: 'Saad Gul is a Front-End Engineer & Shopify Specialist with 5+ years building custom Shopify themes (Liquid) and React/Next.js web applications.',
  keywords: [
    'Saad Gul',
    'Shopify Developer',
    'Front-End Engineer',
    'Shopify Expert',
    'React Developer',
    'Next.js Developer',
    'Shopify Liquid',
    'Comfrt Shopify Developer',
    'Kawaii Slime Shopify',
    'Comparables AI',
    'Figma to Shopify',
    'Conversion Rate Optimization',
    'Pakistan Frontend Developer',
    'Islamabad Web Developer'
  ],
  authors: [{ name: 'Saad Gul', url: 'https://saadgul.dev' }],
  creator: 'Saad Gul',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://saadgul-portfolio.vercel.app',
    title: 'Saad Gul — Front-End Engineer & Shopify Developer',
    description: 'Front-End Engineer & Shopify Specialist with 5+ years building custom Shopify themes and React web applications.',
    siteName: 'Saad Gul Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Saad Gul — Front-End Engineer & Shopify Developer',
    description: 'Front-End Engineer & Shopify Specialist with 5+ years building custom Shopify themes and React web applications.',
    creator: '@saadgul',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': 'https://saadgul.dev/#person',
      name: 'Saad Gul',
      jobTitle: 'Front-End Engineer & Shopify Specialist',
      url: 'https://saadgul.dev',
      email: 'mailto:gul.saadkhan@outlook.com',
      telephone: '+923425603490',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Islamabad',
        addressCountry: 'Pakistan',
      },
      sameAs: [
        'https://www.linkedin.com/in/saad-gull-011934164/'
      ],
      alumniOf: {
        '@type': 'EducationalOrganization',
        name: 'International Islamic University Islamabad',
      },
      knowsAbout: [
        'Shopify Theme Development',
        'Shopify Liquid',
        'Shopify Online Store 2.0',
        'Shopify AJAX API',
        'React.js',
        'Next.js',
        'JavaScript (ES6+)',
        'TypeScript',
        'Material UI',
        'Tailwind CSS',
        'Core Web Vitals Optimization',
        'Conversion Rate Optimization',
        'WCAG Accessibility'
      ],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://saadgul.dev/#website',
      url: 'https://saadgul.dev',
      name: 'Saad Gul Portfolio',
      publisher: {
        '@id': 'https://saadgul.dev/#person',
      },
    }
  ]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${sansFont.variable} ${monoFont.variable} scroll-smooth antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-white text-zinc-900 flex flex-col font-sans selection:bg-zinc-900 selection:text-white">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
