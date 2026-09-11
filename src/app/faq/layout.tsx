import type { Metadata } from 'next';
import { fetchSeo } from '@/lib/api';

export async function generateMetadata(): Promise<Metadata> {
  const seo = await fetchSeo('faq');

  const title = seo?.meta_title || 'FAQ — Frequently Asked Questions | ZURVIX Digital Agency';
  const description =
    seo?.meta_description ||
    'Find answers to common questions about ZURVIX digital agency services, pricing, development process, SEO & GEO optimization, support, and more.';

  return {
    title,
    description,
    alternates: {
      canonical: 'https://zurvix.com/faq',
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
