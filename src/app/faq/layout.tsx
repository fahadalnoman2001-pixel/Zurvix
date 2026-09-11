import type { Metadata } from 'next';
import { fetchSeo } from '@/lib/api';

export async function generateMetadata(): Promise<Metadata> {
  const seo = await fetchSeo('faq');

  const title = seo?.meta_title || 'FAQ | Website, App & SEO Pricing Questions Answered | ZURVIX';
  const description =
    seo?.meta_description ||
    'Answers to the most common questions about website costs, app development, SEO, GEO and AI search optimization, timelines and maintenance for businesses in Malta and Europe.';

  return {
    title,
    description,
    alternates: {
      canonical: 'https://zurvix.com/faq',
    },
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      title: seo?.og_title || title,
      description: seo?.og_description || description,
      url: 'https://zurvix.com/faq',
      siteName: 'ZURVIX',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: seo?.og_title || title,
      description: seo?.og_description || description,
    },
  };
}

export default function FaqLayout({ children }: { children: React.ReactNode }) {
  return children;
}
