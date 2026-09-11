import { getPageMetadata } from '@/lib/seo';

export async function generateMetadata() {
  return getPageMetadata(
    'contact',
    'Contact ZURVIX — Start Your Next Project',
    'Get in touch with ZURVIX for your upcoming web, mobile, or cloud infrastructure project. Free architectural consult and proposal.',
    '/contact'
  );
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
