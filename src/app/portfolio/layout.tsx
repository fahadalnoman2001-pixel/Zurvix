import { getPageMetadata } from '@/lib/seo';

export async function generateMetadata() {
  return getPageMetadata(
    'portfolio',
    'Client Case Studies & Engineering Portfolio — ZURVIX',
    'Discover our recent client work: custom web systems, mobile applications, and growth infrastructure engineered by ZURVIX.',
    '/portfolio'
  );
}

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
