import { MetadataRoute } from 'next';
import { fetchBlogs, fetchCategories, ApiBlog, ApiCategory } from '@/lib/api';

export const dynamic = 'force-dynamic';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://zurvix.com';
  const now = new Date();

  // ── Static pages with tailored priorities & frequencies ──
  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: now, changeFrequency: 'daily', priority: 1.0 },
    { url: `${baseUrl}/services`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/pricing`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/portfolio`, lastModified: now, changeFrequency: 'weekly', priority: 0.85 },
    { url: `${baseUrl}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/blog`, lastModified: now, changeFrequency: 'daily', priority: 0.9 },
    { url: `${baseUrl}/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/faq`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
  ];

  // ── Fetch live published blogs from Laravel Admin API ──
  let liveBlogs: ApiBlog[] = [];
  try {
    const res = await fetchBlogs({ source: 'zurvix', limit: 100 });
    if (Array.isArray(res) && res.length > 0) {
      liveBlogs = res;
    }
  } catch (err) {
    console.error('Error fetching live blogs for sitemap:', err);
  }

  // ── Fetch live categories from Laravel Admin API ──
  let liveCategories: ApiCategory[] = [];
  try {
    const res = await fetchCategories('zurvix');
    if (Array.isArray(res) && res.length > 0) {
      liveCategories = res;
    }
  } catch (err) {
    console.error('Error fetching live categories for sitemap:', err);
  }

  // ── Live database blogs ──
  const blogUrlEntries: MetadataRoute.Sitemap = liveBlogs.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.published_at ? new Date(post.published_at) : now,
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  // ── Category URLs ──
  const categoryEntries: MetadataRoute.Sitemap = liveCategories.map((cat) => ({
    url: `${baseUrl}/blog?category=${cat.slug}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }));

  return [
    ...staticPages,
    ...blogUrlEntries,
    ...categoryEntries,
  ];
}
