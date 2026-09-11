import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Space_Grotesk } from 'next/font/google';
import './globals.css';
import StructuredData from '@/components/StructuredData';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
  weight: ['300', '400', '500', '600', '700', '800'],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mono',
  weight: ['500', '600', '700'],
});

import GoogleAnalytics from '@/components/GoogleAnalytics';
import { fetchAnalyticsConfig, fetchSeo } from '@/lib/api';

export async function generateMetadata(): Promise<Metadata> {
  const seo = await fetchSeo('homepage');

  const title = seo?.meta_title || 'ZURVIX — We Design. We Build. We Grow. | Digital Agency & Technology Partner';
  const description =
    seo?.meta_description ||
    'ZURVIX is a premier digital agency specializing in custom website & mobile app design, full-stack Next.js & Laravel development, SEO, GEO & LLM AI search optimization, and ongoing maintenance.';
  const canonical = seo?.canonical_url || 'https://zurvix.com';
  const ogTitle = seo?.og_title || title;
  const ogDescription = seo?.og_description || description;
  const ogImage = seo?.og_image || '/brand/zurvix-dark.png';

  const defaultKeywords = [
    'ZURVIX',
    'Fahad Al Noman',
    'Digital Agency',
    'Web Development',
    'Mobile App Development',
    'UI UX Design',
    'Ecommerce Development',
    'SEO Optimization',
    'GEO Generative Engine Optimization',
    'LLM Search Optimization',
    'Website Maintenance',
    'Next.js Agency',
    'Laravel Development',
    'Flutter Apps',
  ];

  const keywords = seo?.meta_keywords
    ? seo.meta_keywords.split(',').map((k) => k.trim())
    : defaultKeywords;

  return {
    metadataBase: new URL('https://zurvix.com'),
    title,
    description,
    keywords,
    alternates: {
      canonical,
    },
    authors: [{ name: 'Fahad Al Noman', url: 'https://fahadalnoman.com' }],
    creator: 'ZURVIX',
    publisher: 'ZURVIX',
    icons: {
      icon: [
        { url: '/favicon.ico' },
        { url: '/favicon.png', type: 'image/png' },
      ],
      shortcut: '/favicon.png',
      apple: '/favicon.png',
    },
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: canonical,
      siteName: 'ZURVIX',
      title: ogTitle,
      description: ogDescription,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: 'ZURVIX Digital Agency',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: ogTitle,
      description: ogDescription,
      images: [ogImage],
      creator: '@zurvix',
    },
    robots: {
      index: !seo?.robots || seo.robots.includes('index'),
      follow: !seo?.robots || seo.robots.includes('follow'),
      googleBot: {
        index: !seo?.robots || seo.robots.includes('index'),
        follow: !seo?.robots || seo.robots.includes('follow'),
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const analyticsConfig = await fetchAnalyticsConfig();
  const ga4Id = analyticsConfig?.ga4_measurement_id || process.env.NEXT_PUBLIC_GA4_ID || 'G-QFENNN1F14';
  const gscVerification = analyticsConfig?.gsc_verification_tag;

  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${spaceGrotesk.variable} scroll-smooth dark`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        {gscVerification && (
          <meta name="google-site-verification" content={gscVerification} />
        )}
        {/* AI Discoverability: llm.txt specification */}
        <link rel="author" href="https://fahadalnoman.com" />
        <link rel="alternate" type="text/plain" href="https://zurvix.com/llm.txt" title="LLM Context (Concise)" />
        <link rel="alternate" type="text/plain" href="https://zurvix.com/llm-full.txt" title="LLM Context (Full)" />
        <StructuredData />
        <GoogleAnalytics
          measurementId={ga4Id}
          anonymizeIp={analyticsConfig?.anonymize_ip ?? true}
        />
      </head>
      <body className="bg-[#05080A] text-white antialiased font-sans min-h-screen selection:bg-[#00DF81] selection:text-black">
        {children}
      </body>
    </html>
  );
}
