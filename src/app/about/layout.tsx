import { getPageMetadata } from '@/lib/seo';

export async function generateMetadata() {
  return getPageMetadata(
    'about',
    'About ZURVIX — Engineering-Led Digital Agency',
    'Learn about ZURVIX, our mission, architectural philosophy, and how we engineer modern high-converting websites and scalable applications.',
    '/about'
  );
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
