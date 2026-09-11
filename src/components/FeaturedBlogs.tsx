'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { fetchBlogs, getBlogCoverImage } from '@/lib/api';
import { Sparkles, Clock, ArrowRight } from 'lucide-react';

interface DisplayBlog {
  id: string | number;
  slug: string;
  category: string;
  readingTime: string;
  title: string;
  excerpt: string;
  coverImage: string;
  author: { name: string; avatarInitials: string };
}

export default function FeaturedBlogs() {
  const [posts, setPosts] = useState<DisplayBlog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    fetchBlogs({ source: 'zurvix', limit: 3 }).then((apiBlogs) => {
      if (!mounted) return;
      if (apiBlogs && apiBlogs.length > 0) {
        const mappedApi: DisplayBlog[] = apiBlogs.slice(0, 3).map((b) => ({
          id: b.id,
          slug: b.slug,
          category: b.category?.name || 'Technology',
          readingTime: b.read_time ? `${b.read_time} min read` : '5 min read',
          title: b.title,
          excerpt: b.excerpt,
          coverImage: getBlogCoverImage(b.featured_image, b.category?.slug, null),
          author: {
            name: b.author || 'Zurvix Team',
            avatarInitials: (b.author || 'ZX').slice(0, 2).toUpperCase(),
          },
        }));
        setPosts(mappedApi);
      }
      setLoading(false);
    });

    return () => {
      mounted = false;
    };
  }, []);

  if (!loading && posts.length === 0) {
    return null;
  }

  return (
    <section id="blogs" className="py-24 relative overflow-hidden bg-[#070A0E] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center space-x-2 rounded-full border border-[#00DF81]/20 bg-[#00DF81]/5 px-3.5 py-1 text-xs font-mono font-medium text-[#00DF81]">
              <Sparkles className="w-3.5 h-3.5 text-[#00DF81]" />
              <span>04 — KNOWLEDGE &amp; INSIGHTS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Ideas, Insights &amp;{' '}
              <span className="text-gradient-green">Digital Knowledge.</span>
            </h2>
            <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
              Architectural guides on websites, mobile apps, AI search (GEO + LLM), and growth strategies from our engineering team.
            </p>
          </div>

          <Link
            href="/blog"
            className="inline-flex items-center space-x-2 text-xs font-bold text-[#00DF81] hover:text-[#00F58D] group shrink-0 transition-colors"
          >
            <span>View All Articles &amp; Guides</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* 3 Premium Blog Cards with Images */}
        <div className="flex md:grid md:grid-cols-3 gap-6 lg:gap-8 overflow-x-auto md:overflow-visible no-scrollbar snap-x snap-mandatory pt-2 pb-4 -mx-4 px-4 sm:mx-0 sm:px-0">
          {posts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="w-[85vw] sm:w-[55vw] md:w-auto shrink-0 snap-center group rounded-3xl border border-white/[0.08] bg-[#080C11] overflow-hidden flex flex-col justify-between transition-all duration-300 hover:border-[#00DF81]/40 hover:bg-[#0A0F16] hover:shadow-2xl hover:shadow-[#00DF81]/10 hover:-translate-y-1"
            >
              {/* Cover Image Thumbnail */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#0D131A]">
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 85vw, (max-width: 1200px) 33vw, 380px"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080C11] via-transparent to-transparent opacity-70" />
                
                {/* Category Badge Floating Top Left */}
                <div className="absolute top-3.5 left-3.5 z-10">
                  <span className="rounded-full bg-black/80 backdrop-blur-md border border-white/10 px-3 py-1 text-[11px] font-mono font-semibold text-[#00DF81] shadow-md">
                    {post.category}
                  </span>
                </div>

                {/* Read Time Floating Bottom Right */}
                <div className="absolute bottom-3 right-3 z-10">
                  <div className="flex items-center space-x-1.5 text-[11px] text-gray-300 font-mono bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10">
                    <Clock className="h-3 w-3 text-[#00DF81]" />
                    <span>{post.readingTime}</span>
                  </div>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2.5">
                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-[#00DF81] transition-colors leading-snug line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-400 line-clamp-2 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>

                {/* Author Profile & Read CTA */}
                <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                  <div className="flex items-center space-x-2.5">
                    <div className="h-6 w-6 rounded-full bg-[#00DF81] text-black font-bold text-[10px] flex items-center justify-center">
                      {post.author.avatarInitials}
                    </div>
                    <span className="text-xs text-gray-400 font-medium">{post.author.name}</span>
                  </div>

                  <span className="inline-flex items-center space-x-1.5 text-xs font-bold text-[#00DF81] group-hover:translate-x-1 transition-transform">
                    <span>Read Article</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
