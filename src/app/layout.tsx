import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ScrollProgress from '@/components/ui/ScrollProgress';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://saadgul.dev'),
  title: 'Saad Gul — Front-End Engineer & Shopify Specialist',
  description: 'Official portfolio of Saad Gul, Front-End Engineer & Shopify Specialist with 5+ years shipping high-converting Shopify stores (Comfrt, Kawaii Slime) and modern React & Next.js applications (Comparables.ai).',
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
    url: 'https://saadgul.dev',
    title: 'Saad Gul — Front-End Engineer & Shopify Specialist',
    description: 'Transforming complex UI/UX designs into pixel-perfect, high-performance web applications and high-converting Shopify stores.',
    siteName: 'Saad Gul Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Saad Gul — Front-End Engineer & Shopify Specialist',
    description: 'High-converting Shopify stores and modern React/Next.js web applications.',
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
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[#030305] text-white flex flex-col font-sans selection:bg-cyan-400 selection:text-black">
        <ScrollProgress />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
