export interface BlogPost {
  id: string | number;
  slug: string;
  title: string;
  subtitle?: string;
  category: string;
  readingTime?: string;
  publishDate?: string;
  coverImage?: string;
  author?: {
    name: string;
    role?: string;
    avatarInitials?: string;
  };
  excerpt?: string;
  tableOfContents?: { id: string; title: string }[];
  sections?: {
    id: string;
    heading: string;
    content: string;
    highlight?: string;
    subpoints?: string[];
  }[];
  ctaText?: string;
}

// All blogs are dynamically fetched live from Laravel Admin API (admin.zurvix.com)
export const blogPosts: BlogPost[] = [];
