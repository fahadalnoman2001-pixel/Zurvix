import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';
import { blogPosts, BlogPost } from '@/data/blogPosts';
import { Clock, Calendar, ArrowLeft, ArrowRight, CheckCircle2, MessageSquare, Sparkles, Share2 } from 'lucide-react';
import type { Metadata } from 'next';

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const post = blogPosts.find((p) => p.slug === resolvedParams.slug);

  if (!post) {
    return {
      title: 'Article Not Found | ZURVIX',
    };
  }

  return {
    title: `${post.title} | ZURVIX Insights`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [
        {
          url: post.coverImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const post = blogPosts.find((p) => p.slug === resolvedParams.slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts.filter((p) => p.id !== post.id).slice(0, 2);

  const whatsappInquiryUrl = `https://wa.me/35699784477?text=${encodeURIComponent(
    `Hello ZURVIX, I just read your article "${post.title}" and would like to discuss implementing these strategies for my business.`
  )}`;

  return (
    <main className="min-h-screen bg-[#05080A] text-white">
      <CustomCursor />
      <Navbar />

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
              <span className="rounded-full bg-[#00DF81]/15 border border-[#00DF81]/30 px-3 py-1 text-xs font-semibold text-[#00DF81]">
                {post.category}
              </span>
              <span>•</span>
              <div className="flex items-center space-x-1">
                <Clock className="h-3.5 w-3.5" />
                <span>{post.readingTime}</span>
              </div>
              <span>•</span>
              <span>Published {post.publishDate}</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              {post.title}
            </h1>

            <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-normal">
              {post.subtitle}
            </p>

            {/* Author Profile Bar */}
            <div className="flex items-center space-x-3 pt-4 border-t border-white/[0.08]">
              <div className="h-10 w-10 rounded-full bg-[#00DF81] text-black font-extrabold text-sm flex items-center justify-center">
                {post.author.avatarInitials}
              </div>
              <div>
                <p className="text-sm font-bold text-white">{post.author.name}</p>
                <p className="text-xs text-gray-400 font-mono">{post.author.role}</p>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative h-[280px] sm:h-[450px] w-full rounded-3xl overflow-hidden border border-white/[0.08] shadow-2xl">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              priority
              className="object-cover"
            />
          </div>

          {/* Table of Contents Box */}
          <div className="rounded-3xl border border-white/[0.08] bg-[#080C11] p-6 sm:p-8">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-[#00DF81] mb-4">
              // ARTICLE CONTENTS &amp; KEY SECTIONS
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-gray-300">
              {post.tableOfContents.map((toc) => (
                <a
                  key={toc.id}
                  href={`#${toc.id}`}
                  className="hover:text-[#00DF81] transition-colors py-1 flex items-center space-x-2"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-[#00DF81]" />
                  <span>{toc.title}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Article Main Body */}
          <div className="space-y-12 text-gray-300 text-sm sm:text-base leading-relaxed pt-6">
            {post.sections.map((sec) => (
              <section key={sec.id} id={sec.id} className="space-y-4 scroll-mt-28">
                <h2 className="text-2xl font-bold text-white tracking-tight border-b border-white/[0.06] pb-2">
                  {sec.heading}
                </h2>

                <p className="text-gray-300 leading-relaxed">
                  {sec.content}
                </p>

                {sec.highlight && (
                  <blockquote className="rounded-2xl border-l-4 border-[#00DF81] bg-[#00DF81]/5 p-5 text-sm sm:text-base text-emerald-200 font-medium italic my-4">
                    {sec.highlight}
                  </blockquote>
                )}

                {sec.subpoints && (
                  <div className="space-y-2.5 pt-2">
                    {sec.subpoints.map((pt, pIdx) => (
                      <div key={pIdx} className="flex items-start space-x-3 text-xs sm:text-sm text-gray-300">
                        <CheckCircle2 className="h-4 w-4 text-[#00DF81] shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                )}
              </section>
            ))}
          </div>

          {/* Bottom Call to Action Banner */}
          <div className="mt-16 rounded-3xl border border-white/[0.1] bg-gradient-to-r from-[#080C11] via-[#0A0F16] to-[#080C11] p-8 sm:p-12 text-center space-y-6 shadow-2xl">
            <span className="inline-flex items-center space-x-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1 text-xs font-mono font-medium text-[#00DF81]">
              <span>// GROWTH STRATEGY</span>
            </span>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-white max-w-xl mx-auto">
              {post.ctaText || 'Ready to implement these technical standards in your business?'}
            </h3>

            <p className="text-xs sm:text-sm text-gray-400 max-w-lg mx-auto">
              Connect directly with our engineering and growth team on WhatsApp for a complimentary roadmap session.
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
                    className="rounded-3xl border border-white/[0.08] bg-[#080C11] p-6 space-y-3 transition-all hover:border-[#00DF81]/40 hover:bg-[#0A0F16] group"
                  >
                    <span className="text-[10px] font-mono font-semibold text-[#00DF81] uppercase tracking-wider">
                      {rel.category}
                    </span>
                    <h4 className="text-base font-bold text-white group-hover:text-[#00DF81] transition-colors leading-snug">
                      {rel.title}
                    </h4>
                    <p className="text-xs text-gray-400 line-clamp-2">
                      {rel.excerpt}
                    </p>
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
