import { getPageMetadata } from '@/lib/seo';

export async function generateMetadata() {
  return getPageMetadata(
    'blog',
    'Tech & Digital Growth Blog — ZURVIX',
    'Actionable guides, engineering deep-dives, and modern tech insights on Next.js, Laravel, AI SEO, and product growth.',
    '/blog'
  );
}

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
