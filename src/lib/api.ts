export const API_BASE_URL = (
  typeof window !== 'undefined'
    ? (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
        ? (process.env.NEXT_PUBLIC_ADMIN_API_URL || 'http://localhost:8000')
        : (process.env.NEXT_PUBLIC_ADMIN_API_URL || 'https://admin.zurvix.com'))
    : (process.env.NEXT_PUBLIC_ADMIN_API_URL || 'https://admin.zurvix.com')
).replace(/\/+$/, '');

export interface ContactPayload {
  name: string;
  email: string;
  phone?: string;
  business_name?: string;
  service_required?: string;
  budget?: string;
  message: string;
}

export interface ApiResponse<T = unknown> {
  success?: boolean;
  message?: string;
  data?: T;
  error?: string;
}

export interface ApiCategory {
  id: number;
  name: string;
  slug: string;
  description: string | null;
  status: string;
  seo_title?: string | null;
  seo_description?: string | null;
  seo_keywords?: string | null;
  og_image?: string | null;
  published_blogs_count?: number;
}

export interface ApiBlog {
  id: number;
  category_id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featured_image: string | null;
  author?: string | null;
  read_time?: number | null;
  seo_title: string | null;
  seo_description: string | null;
  seo_keywords: string | null;
  og_image: string | null;
  schema_markup?: string | null;
  status: string;
  views: number;
  published_at: string;
  created_at?: string;
  category?: ApiCategory;
  images?: Array<{ id: number; image_path: string; alt_text?: string }>;
}

export interface ApiSeoSetting {
  id: number;
  page_identifier: string;
  page_name: string;
  meta_title: string;
  meta_description: string;
  meta_keywords: string | null;
  og_title: string | null;
  og_description: string | null;
  og_image: string | null;
  canonical_url: string | null;
  schema_markup: string | null;
  robots: string;
}

/**
 * Submit contact inquiry to Laravel Admin API
 */
export async function submitContact(data: ContactPayload): Promise<ApiResponse> {
  const url = `${API_BASE_URL}/api/contacts`;
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    console.error(`[API Error] submitContact failed HTTP ${response.status}:`, errorData);
    throw new Error(errorData.message || `Failed to submit contact form (HTTP ${response.status})`);
  }

  return response.json();
}

/**
 * Subscribe email to newsletter in Laravel Admin API
 */
export async function subscribeNewsletter(email: string): Promise<ApiResponse> {
  const url = `${API_BASE_URL}/api/newsletter/subscribe`;
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({ email }),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    console.error(`[API Error] subscribeNewsletter failed HTTP ${response.status}:`, errorData);
    throw new Error(errorData.message || `Failed to subscribe to newsletter (HTTP ${response.status})`);
  }

  return response.json();
}

/**
 * Fetch published blogs from Laravel Admin API
 */
export async function fetchBlogs(params?: {
  category?: string;
  limit?: number;
  search?: string;
  source?: string;
  page?: number;
}): Promise<ApiBlog[]> {
  const query = new URLSearchParams();
  query.set('source', params?.source || 'zurvix');
  
  if (params?.category && params.category !== 'All' && params.category !== 'all') {
    query.set('category', params.category);
  }
  if (params?.search && params.search.trim()) {
    query.set('search', params.search.trim());
  }
  if (params?.page) {
    query.set('page', params.page.toString());
  }
  
  // Default limit to 100 to get all published blogs for fast client searching & pagination
  query.set('limit', (params?.limit || 100).toString());

  const url = `${API_BASE_URL}/api/blogs?${query.toString()}`;

  try {
    const response = await fetch(url, {
      headers: { Accept: 'application/json' },
      cache: 'no-store',
    });

    if (!response.ok) {
      console.error(`[API Error] fetchBlogs failed: HTTP ${response.status} ${response.statusText} at ${url}`);
      return [];
    }
    const data = await response.json();
    return Array.isArray(data) ? data : (data.data || []);
  } catch (error) {
    console.error(`[API Exception] Failed to fetch blogs from ${url}:`, error);
    return [];
  }
}

/**
 * Fetch a single blog by slug from Laravel Admin API
 */
export async function fetchBlogBySlug(slug: string, source: string = 'zurvix'): Promise<ApiBlog | null> {
  const url = `${API_BASE_URL}/api/blogs/${encodeURIComponent(slug)}?source=${source}`;
  try {
    const response = await fetch(url, {
      headers: { Accept: 'application/json' },
      cache: 'no-store',
    });

    if (!response.ok) {
      console.error(`[API Error] fetchBlogBySlug (${slug}) failed: HTTP ${response.status} ${response.statusText} at ${url}`);
      return null;
    }
    return response.json();
  } catch (error) {
    console.error(`[API Exception] Failed to fetch blog ${slug} from ${url}:`, error);
    return null;
  }
}

/**
 * Fetch categories from Laravel Admin API
 */
export async function fetchCategories(source: string = 'zurvix'): Promise<ApiCategory[]> {
  const url = `${API_BASE_URL}/api/categories?source=${source}`;
  try {
    const response = await fetch(url, {
      headers: { Accept: 'application/json' },
      cache: 'no-store',
    });

    if (!response.ok) {
      console.error(`[API Error] fetchCategories failed: HTTP ${response.status} ${response.statusText} at ${url}`);
      return [];
    }
    return response.json();
  } catch (error) {
    console.error(`[API Exception] Failed to fetch categories from ${url}:`, error);
    return [];
  }
}

/**
 * Fetch a single category by slug with its blogs from Laravel Admin API
 */
export async function fetchCategoryBySlug(slug: string): Promise<{ category: ApiCategory; blogs: { data: ApiBlog[] } | ApiBlog[] } | null> {
  const url = `${API_BASE_URL}/api/categories/${encodeURIComponent(slug)}`;
  try {
    const response = await fetch(url, {
      headers: { Accept: 'application/json' },
      next: { revalidate: 60 },
    });

    if (!response.ok) {
      console.error(`[API Error] fetchCategoryBySlug (${slug}) failed: HTTP ${response.status} ${response.statusText} at ${url}`);
      return null;
    }
    return response.json();
  } catch (error) {
    console.error(`[API Exception] Failed to fetch category ${slug} from ${url}:`, error);
    return null;
  }
}

/**
 * Helper to resolve image URLs (handles relative public paths or Laravel storage paths)
 */
export function getImageUrl(path: string | null | undefined): string {
  if (!path) return '/og-image.png';
  if (path.startsWith('http://') || path.startsWith('https://')) return path;
  if (path.startsWith('/storage/')) {
    return `${API_BASE_URL}${path}`;
  }
  if (path.startsWith('/')) return path;
  return `${API_BASE_URL}/storage/${path}`;
}

/**
 * Intelligent Cover Image resolver for Blog Cards and Single Post Pages
 */
export function getBlogCoverImage(
  featuredImage?: string | null,
  categorySlugOrName?: string | null,
  fallbackCover?: string | null
): string {
  if (featuredImage && typeof featuredImage === 'string' && featuredImage.trim().length > 0) {
    return getImageUrl(featuredImage);
  }
  if (fallbackCover && typeof fallbackCover === 'string' && fallbackCover.trim().length > 0) {
    return fallbackCover;
  }

  const cat = (categorySlugOrName || '').toLowerCase();
  if (cat.includes('ai') || cat.includes('geo') || cat.includes('seo') || cat.includes('automation')) {
    return '/blog/ai-search-geo-2026.jpg';
  }
  if (cat.includes('ecommerce') || cat.includes('marketing') || cat.includes('ui') || cat.includes('ux')) {
    return '/blog/ecommerce-conversion-principles.jpg';
  }
  return '/blog/nextjs-laravel-architecture.jpg';
}

/**
 * Fetch SEO settings for a given page identifier
 */
export async function fetchSeo(page: string): Promise<ApiSeoSetting | null> {
  const url = `${API_BASE_URL}/api/seo/${page}`;
  try {
    const response = await fetch(url, {
      headers: { Accept: 'application/json' },
      next: { revalidate: 300 },
    });

    if (!response.ok) {
      return null;
    }
    return response.json();
  } catch (error) {
    console.error(`[API Exception] Failed to fetch SEO for ${page} from ${url}:`, error);
    return null;
  }
}

export interface ApiAnalyticsConfig {
  ga4_measurement_id?: string | null;
  gsc_verification_tag?: string | null;
  auto_inject_script?: boolean;
  anonymize_ip?: boolean;
  track_whatsapp_clicks?: boolean;
}

/**
 * Fetch GA4 & GSC configuration from Laravel Admin API
 */
export async function fetchAnalyticsConfig(): Promise<ApiAnalyticsConfig | null> {
  const url = `${API_BASE_URL}/api/analytics/config`;
  try {
    const response = await fetch(url, {
      headers: { Accept: 'application/json' },
      next: { revalidate: 300 },
    });
    if (!response.ok) return null;
    return response.json();
  } catch {
    return null;
  }
}


