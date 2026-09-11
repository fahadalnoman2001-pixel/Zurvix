import { Metadata } from 'next';
import { fetchSeo } from '@/lib/api';

export async function getPageMetadata(
  pageKey: string,
  fallbackTitle: string,
  fallbackDesc: string,
  path: string
): Promise<Metadata> {
  const seo = await fetchSeo(pageKey);

  const title = seo?.meta_title || fallbackTitle;
  const description = seo?.meta_description || fallbackDesc;
  const canonical = seo?.canonical_url || `https://zurvix.com${path}`;
  const ogTitle = seo?.og_title || title;
  const ogDescription = seo?.og_description || description;
  const ogImage = seo?.og_image || '/brand/zurvix-dark.png';

  const keywords = seo?.meta_keywords
    ? seo.meta_keywords.split(',').map((k) => k.trim())
    : undefined;

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical,
    },
    openGraph: {
      title: ogTitle,
      description: ogDescription,
      url: canonical,
      siteName: 'ZURVIX',
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
      title: ogTitle,
      description: ogDescription,
      images: [ogImage],
    },
    robots: {
      index: !seo?.robots || seo.robots.includes('index'),
      follow: !seo?.robots || seo.robots.includes('follow'),
    },
  };
}
