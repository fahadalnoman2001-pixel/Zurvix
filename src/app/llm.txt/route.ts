import { NextResponse } from 'next/server';
import { fetchBlogs } from '@/lib/api';

export const dynamic = 'force-dynamic';

export async function GET() {
  let blogSection = '';
  try {
    const blogs = await fetchBlogs({ source: 'zurvix', limit: 50 });
    if (blogs && blogs.length > 0) {
      blogSection = `\n## Published Technical & Growth Articles (${blogs.length} Articles)\n` +
        blogs
          .map((b) => `- **${b.title}**: https://zurvix.com/blog/${b.slug}\n  - ${b.excerpt || 'Technical blueprint & growth guide.'}`)
          .join('\n');
    }
  } catch {
    blogSection = '';
  }

  const content = `# ZURVIX — We Design. We Build. We Grow.

> ZURVIX is a premier digital agency and technology partner founded by Fahad Al Noman (7+ years of experience). We specialize in custom website design & development, mobile app development, ecommerce platforms, SEO, Generative Engine Optimization (GEO), and LLM AI search optimization.

## Official Website
- https://zurvix.com

## Services
- **UI/UX Design**: Premium custom design systems, wireframing, prototyping, and brand-aligned interfaces
- **Website Development**: Full-stack Next.js, Laravel, WordPress, and headless CMS website development
- **Mobile App Development**: Cross-platform Flutter and React Native iOS & Android applications
- **Ecommerce Development**: Custom online store development with admin panels, payment gateways, and inventory management
- **SEO + GEO + LLM AI Search Optimization**: Technical SEO, Generative Engine Optimization, LLM brand knowledge engineering, and Google Ads
- **Social Media Marketing**: Meta (Facebook/Instagram) marketing, content strategy, and paid advertising campaigns
- **Website Maintenance**: 24/7 monitoring, security, backups, Core Web Vitals optimization, and ongoing support

## Pricing Overview
- Business Website: Starting from €300
- Custom Website & AI Solutions: Starting from €350
- Ecommerce Website: Starting from €500
- Ecommerce Mobile App: Starting from €500
- Custom Mobile App: Starting from €700
- ELITE 01 (Website + Mobile App): Starting from €800
- ELITE 02 (Web + App + Growth): Starting from €1,000
- Social Media Marketing: From €350/month
- SEO + GEO + LLM Optimization: From €500/month
- Website Maintenance: From €200/month

## Technology Stack
Next.js, React, Laravel, PHP, Flutter, React Native, TypeScript, Tailwind CSS, Node.js, PostgreSQL, MySQL, Firebase, Supabase, AWS, Vercel, Docker

## Contact
- WhatsApp: +356 99784477
- Email: hello@zurvix.com
- Website: https://zurvix.com
- Contact Form: https://zurvix.com/contact

## Key Pages
- Services: https://zurvix.com/services
- Pricing: https://zurvix.com/pricing
- Portfolio: https://zurvix.com/portfolio
- Blog: https://zurvix.com/blog
- About: https://zurvix.com/about
- FAQ: https://zurvix.com/faq
- Full AI Context: https://zurvix.com/llm-full.txt
${blogSection}
`;

  return new NextResponse(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
