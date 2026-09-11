import React from 'react';
import type { Metadata } from 'next';
import BlogHubClient from '@/components/BlogHubClient';
import { fetchCategories, fetchBlogs, fetchSeo, getImageUrl, type ApiBlog, type ApiCategory } from '@/lib/api';

export const dynamic = 'force-dynamic';

export async function generateMetadata(): Promise<Metadata> {
  const seo = await fetchSeo('blog');
  const title = seo?.meta_title || 'Engineering & Growth Insights | ZURVIX';
  const description =
    seo?.meta_description ||
    'In-depth technical blueprints on modern web architecture, AI search optimization (GEO & LLM), high-converting ecommerce platforms, and digital product engineering.';
  const canonicalUrl = seo?.canonical_url || 'https://zurvix.com/blog';
  const ogImage = seo?.og_image ? getImageUrl(seo.og_image) : '/og-image.png';

  return {
    title,
    description,
    keywords: seo?.meta_keywords
      ? seo.meta_keywords.split(',').map((k) => k.trim())
      : [
          'web architecture',
          'AI search optimization',
          'GEO',
          'LLM optimization',
          'Next.js development',
          'Laravel engineering',
          'digital marketing',
          'ZURVIX insights',
        ],
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      type: 'website',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

export default async function BlogHubPage() {
  let initialBlogs: ApiBlog[] = [];
  let initialCategories: ApiCategory[] = [];
  let fetchFailed = false;

  try {
    const [cats, blogs] = await Promise.all([
      fetchCategories('zurvix'),
      fetchBlogs({ source: 'zurvix', limit: 100 }),
    ]);

    initialCategories = Array.isArray(cats) ? cats : [];
    initialBlogs = Array.isArray(blogs) ? blogs : [];
    if (initialBlogs.length === 0 && initialCategories.length === 0) {
      fetchFailed = true;
    }
  } catch (err) {
    console.error('[BlogHubPage SSR] Error loading blog hub initial data:', err);
    fetchFailed = true;
  }

  return (
    <BlogHubClient
      initialBlogs={initialBlogs}
      initialCategories={initialCategories}
      initialError={fetchFailed}
    />
  );
}
