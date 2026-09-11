import { getPageMetadata } from '@/lib/seo';

export async function generateMetadata() {
  return getPageMetadata(
    'services',
    'Services & Technical Capabilities — ZURVIX',
    'Explore ZURVIX technical capabilities: custom web applications, mobile apps, enterprise cloud solutions, and digital growth infrastructure.',
    '/services'
  );
}

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
