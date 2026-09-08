import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Space_Grotesk } from 'next/font/google';
import './globals.css';
import StructuredData from '@/components/StructuredData';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
  weight: ['300', '400', '500', '600', '700', '800'],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mono',
  weight: ['500', '600', '700'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://zurvix.com'),
  title: 'ZURVIX — We Design. We Build. We Grow. | Digital Agency & Technology Partner',
  description:
    'ZURVIX is a premier digital agency specializing in custom website & mobile app design, full-stack Next.js & Laravel development, SEO, GEO & LLM AI search optimization, and ongoing maintenance.',
  keywords: [
    'ZURVIX',
    'Fahad Al Noman',
    'Digital Agency',
    'Web Development',
    'Mobile App Development',
    'UI UX Design',
    'Ecommerce Development',
    'SEO Optimization',
    'GEO Generative Engine Optimization',
    'LLM Search Optimization',
    'Website Maintenance',
    'Next.js Agency',
    'Laravel Development',
    'Flutter Apps'
  ],
  authors: [{ name: 'Fahad Al Noman', url: 'https://fahadalnoman.com' }],
  creator: 'ZURVIX',
  publisher: 'ZURVIX',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon.png', type: 'image/png' },
    ],
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://zurvix.com',
    siteName: 'ZURVIX',
    title: 'ZURVIX — Digital Experiences Built to Move Your Business Forward',
    description:
      'From high-converting websites and mobile apps to digital marketing and ongoing maintenance, ZURVIX helps businesses build, launch and grow with modern technology.',
    images: [
      {
        url: '/brand/zurvix-dark.png',
        width: 1200,
        height: 630,
        alt: 'ZURVIX Digital Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ZURVIX — We Design. We Build. We Grow.',
    description:
      'Digital products, websites, apps and growth systems built for modern businesses. 7+ Years Experience.',
    images: ['/brand/zurvix-dark.png'],
    creator: '@zurvix',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${spaceGrotesk.variable} scroll-smooth dark`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <StructuredData />
      </head>
      <body className="bg-[#05080A] text-white antialiased font-sans min-h-screen selection:bg-[#00DF81] selection:text-black">
        {children}
      </body>
    </html>
  );
}
