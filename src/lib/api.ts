export const API_BASE_URL =
  process.env.NEXT_PUBLIC_ADMIN_API_URL ||
  (process.env.NODE_ENV === 'production'
    ? 'https://admin.zurvix.com'
    : 'http://localhost:8000');

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
  seo_title: string | null;
  seo_description: string | null;
  seo_keywords: string | null;
  og_image: string | null;
  status: string;
  views: number;
  published_at: string;
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
  const response = await fetch(`${API_BASE_URL}/api/contacts`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || 'Failed to submit contact form');
  }

  return response.json();
}

/**
 * Subscribe email to newsletter in Laravel Admin API
 */
export async function subscribeNewsletter(email: string): Promise<ApiResponse> {
  const response = await fetch(`${API_BASE_URL}/api/newsletter/subscribe`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({ email }),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || 'Failed to subscribe to newsletter');
  }

  return response.json();
}

/**
 * Fetch published blogs from Laravel Admin API
 */
export async function fetchBlogs(params?: { category?: string; limit?: number }): Promise<ApiBlog[]> {
  try {
    const query = new URLSearchParams();
    if (params?.category && params.category !== 'All') query.set('category', params.category);
    if (params?.limit) query.set('limit', params.limit.toString());

    const url = `${API_BASE_URL}/api/blogs${query.toString() ? `?${query.toString()}` : ''}`;
    const response = await fetch(url, {
      headers: { Accept: 'application/json' },
      next: { revalidate: 60 },
    });

    if (!response.ok) return [];
    const data = await response.json();
    return Array.isArray(data) ? data : data.data || [];
  } catch (error) {
    console.error('Failed to fetch blogs from API:', error);
    return [];
  }
}

/**
 * Fetch a single blog by slug from Laravel Admin API
 */
export async function fetchBlogBySlug(slug: string): Promise<ApiBlog | null> {
  try {
    const response = await fetch(`${API_BASE_URL}/api/blogs/${slug}`, {
      headers: { Accept: 'application/json' },
      next: { revalidate: 60 },
    });

    if (!response.ok) return null;
    return response.json();
  } catch (error) {
    console.error(`Failed to fetch blog ${slug} from API:`, error);
    return null;
  }
}

/**
 * Fetch categories from Laravel Admin API
 */
export async function fetchCategories(): Promise<ApiCategory[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/api/categories`, {
      headers: { Accept: 'application/json' },
      next: { revalidate: 300 },
    });

    if (!response.ok) return [];
    return response.json();
  } catch (error) {
    console.error('Failed to fetch categories from API:', error);
    return [];
  }
}

/**
 * Fetch SEO settings for a given page identifier
 */
export async function fetchSeo(page: string): Promise<ApiSeoSetting | null> {
  try {
    const response = await fetch(`${API_BASE_URL}/api/seo/${page}`, {
      headers: { Accept: 'application/json' },
      next: { revalidate: 300 },
    });

    if (!response.ok) return null;
    return response.json();
  } catch (error) {
    console.error(`Failed to fetch SEO for ${page}:`, error);
    return null;
  }
}
