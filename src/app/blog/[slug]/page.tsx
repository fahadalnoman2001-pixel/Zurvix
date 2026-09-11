import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';
import { fetchBlogBySlug, fetchBlogs, getImageUrl, getBlogCoverImage } from '@/lib/api';
import { Clock, ArrowLeft, ArrowRight, MessageSquare } from 'lucide-react';
import type { Metadata } from 'next';

export const dynamic = 'force-dynamic';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const apiBlog = await fetchBlogBySlug(resolvedParams.slug, 'zurvix');

  if (!apiBlog) {
    return {
      title: 'Article Not Found | ZURVIX',
    };
  }

  const title = apiBlog.seo_title || apiBlog.title;
  const description = apiBlog.seo_description || apiBlog.excerpt || '';
  const keywords = apiBlog.seo_keywords
    ? apiBlog.seo_keywords.split(',').map((k) => k.trim())
    : ['digital agency', 'technology insights', 'zurvix'];

  const imageUrl = apiBlog.og_image
    ? getImageUrl(apiBlog.og_image)
    : apiBlog.featured_image
    ? getImageUrl(apiBlog.featured_image)
    : '/og-image.png';

  const canonicalUrl = `https://zurvix.com/blog/${resolvedParams.slug}`;

  return {
    title: `${title} | ZURVIX Insights`,
    description,
    keywords,
    openGraph: {
      title: `${title} | ZURVIX`,
      description,
      url: canonicalUrl,
      type: 'article',
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [imageUrl],
    },
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const apiBlog = await fetchBlogBySlug(resolvedParams.slug, 'zurvix');

  if (!apiBlog) {
    notFound();
  }

  // Determine post details
  const title = apiBlog.title || '';
  const subtitle = apiBlog.excerpt || '';
  const categoryName = apiBlog.category?.name || 'Insights';
  const categorySlug = apiBlog.category?.slug || 'all';
  const readTime = apiBlog.read_time ? `${apiBlog.read_time} min read` : '6 min read';
  const publishDate = apiBlog.published_at
    ? new Date(apiBlog.published_at).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
    : '2026';
  const authorName = apiBlog.author || 'Zurvix Team';
  const authorRole = 'Principal Technologist & Architect';
  const authorInitials = authorName.split(' ').map((n: string) => n[0]).join('').slice(0, 2).toUpperCase() || 'ZX';
  const coverImage = getBlogCoverImage(apiBlog.featured_image, categorySlug, null);

  // Schema Markup JSON-LD
  const schemaJson = apiBlog.schema_markup || JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description: subtitle,
    image: [coverImage],
    datePublished: apiBlog.published_at || new Date().toISOString(),
    author: {
      '@type': 'Person',
      name: authorName,
    },
    publisher: {
      '@type': 'Organization',
      name: 'ZURVIX',
      url: 'https://zurvix.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://zurvix.com/logo.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://zurvix.com/blog/${resolvedParams.slug}`,
    },
  });

  // WhatsApp inquiry URL
  const whatsappInquiryUrl = `https://wa.me/35699784477?text=${encodeURIComponent(
    `Hello ZURVIX, I just read your article "${title}" and would like to discuss implementing these strategies for my business.`
  )}`;

  // Related posts: dynamically fetch from API
  let relatedPosts: Array<{
    id: string;
    slug: string;
    category: string;
    title: string;
    excerpt: string;
    coverImage: string;
  }> = [];

  try {
    const allApiBlogs = await fetchBlogs({ source: 'zurvix', limit: 8 });
    relatedPosts = allApiBlogs
      .filter((b) => b.slug !== resolvedParams.slug)
      .slice(0, 2)
      .map((b) => ({
        id: String(b.id),
        slug: b.slug,
        category: b.category?.name || 'Insights',
        title: b.title,
        excerpt: b.excerpt,
        coverImage: getBlogCoverImage(b.featured_image, b.category?.slug, null),
      }));
  } catch {
    relatedPosts = [];
  }

  return (
    <main className="min-h-screen bg-[#05080A] text-white">
      <CustomCursor />
      <Navbar />

      {/* JSON-LD Structured Data for AI Search & Google */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: schemaJson }}
      />

      {/* Article Hero */}
      <article className="pt-32 pb-24 relative overflow-hidden bg-[#05080A]">
        {/* Ambient Glow */}
        <div className="absolute top-40 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#00DF81]/5 rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 relative z-10">
          {/* Breadcrumb / Back */}
          <Link
            href="/blog"
            className="inline-flex items-center space-x-2 text-xs font-mono font-medium text-gray-400 hover:text-[#00DF81] transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Back to All Articles</span>
          </Link>

          {/* Meta & Category */}
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-3 text-xs text-gray-400 font-mono">
              <Link
                href={`/blog?category=${categorySlug}`}
                className="rounded-full bg-[#00DF81]/15 border border-[#00DF81]/30 px-3 py-1 text-xs font-semibold text-[#00DF81] hover:bg-[#00DF81]/25 transition-colors"
              >
                {categoryName}
              </Link>
              <span>•</span>
              <div className="flex items-center space-x-1">
                <Clock className="h-3.5 w-3.5 text-[#00DF81]" />
                <span>{readTime}</span>
              </div>
              <span>•</span>
              <span>Published {publishDate}</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              {title}
            </h1>

            {subtitle && (
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-normal">
                {subtitle}
              </p>
            )}

            {/* Author Profile Bar */}
            <div className="flex items-center space-x-3 pt-4 border-t border-white/[0.08]">
              <div className="h-10 w-10 rounded-full bg-[#00DF81] text-black font-extrabold text-sm flex items-center justify-center">
                {authorInitials}
              </div>
              <div>
                <p className="text-sm font-bold text-white">{authorName}</p>
                <p className="text-xs text-gray-400 font-mono">{authorRole}</p>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative h-[280px] sm:h-[450px] w-full rounded-3xl overflow-hidden border border-white/[0.08] shadow-2xl bg-[#06090E]">
            <Image
              src={coverImage}
              alt={title}
              fill
              priority
              className="object-cover"
            />
          </div>

          {/* Article Main Body */}
          {apiBlog.content && (
            <div
              className="prose prose-invert prose-emerald max-w-none text-gray-300 text-sm sm:text-base leading-relaxed pt-6
                prose-headings:text-white prose-headings:font-bold prose-headings:tracking-tight
                prose-h2:text-2xl prose-h2:border-b prose-h2:border-white/[0.06] prose-h2:pb-2 prose-h2:mt-10
                prose-h3:text-xl prose-h3:mt-8
                prose-blockquote:border-l-4 prose-blockquote:border-[#00DF81] prose-blockquote:bg-[#00DF81]/5 prose-blockquote:rounded-r-2xl prose-blockquote:p-4 prose-blockquote:text-emerald-200
                prose-code:text-[#00DF81] prose-code:bg-white/[0.05] prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded
                prose-li:text-gray-300 prose-ul:my-4"
              dangerouslySetInnerHTML={{ __html: apiBlog.content }}
            />
          )}

          {/* Bottom Call to Action Banner */}
          <div className="mt-16 rounded-3xl border border-white/[0.1] bg-gradient-to-r from-[#080C11] via-[#0A0F16] to-[#080C11] p-8 sm:p-12 text-center space-y-6 shadow-2xl">
            <span className="inline-flex items-center space-x-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1 text-xs font-mono font-medium text-[#00DF81]">
              <span>{'// DIRECT GROWTH STRATEGY'}</span>
            </span>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-white max-w-xl mx-auto">
              Ready to implement these technical standards in your business?
            </h3>

            <p className="text-xs sm:text-sm text-gray-400 max-w-lg mx-auto">
              Connect directly with our senior engineering and growth architect on WhatsApp for an immediate consultation.
            </p>

            <div className="pt-2">
              <a
                href={whatsappInquiryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 rounded-full bg-[#00DF81] px-8 py-4 text-xs sm:text-sm font-bold text-[#05080A] hover:bg-[#00F58D] transition-all shadow-xl shadow-[#00DF81]/25 hover:scale-105"
              >
                <MessageSquare className="h-4 w-4" />
                <span>Talk to ZURVIX on WhatsApp</span>
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Related Articles */}
          {relatedPosts.length > 0 && (
            <div className="pt-16 border-t border-white/[0.08] space-y-6">
              <h3 className="text-xl font-bold text-white">
                Related Reading &amp; Insights:
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {relatedPosts.map((rel) => (
                  <Link
                    key={rel.id}
                    href={`/blog/${rel.slug}`}
                    className="rounded-3xl border border-white/[0.08] bg-[#080C11] overflow-hidden transition-all hover:border-[#00DF81]/40 hover:bg-[#0A0F16] group flex flex-col justify-between"
                  >
                    <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#0D131A]">
                      <Image
                        src={rel.coverImage}
                        alt={rel.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="rounded-full bg-black/80 backdrop-blur-md border border-white/10 px-2.5 py-0.5 text-[10px] font-mono font-semibold text-[#00DF81]">
                          {rel.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6 space-y-2">
                      <h4 className="text-base font-bold text-white group-hover:text-[#00DF81] transition-colors leading-snug line-clamp-2">
                        {rel.title}
                      </h4>
                      <p className="text-xs text-gray-400 line-clamp-2">
                        {rel.excerpt}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>

      <Footer />
    </main>
  );
}
