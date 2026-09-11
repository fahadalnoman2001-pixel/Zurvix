import { getPageMetadata } from '@/lib/seo';

export async function generateMetadata() {
  return getPageMetadata(
    'pricing',
    'Transparent Pricing & Service Packages — ZURVIX',
    'Transparent, deliverable-driven pricing for websites, mobile apps, digital marketing, and ongoing maintenance. No hidden fees.',
    '/pricing'
  );
}

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
