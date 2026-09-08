'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { blogPosts } from '@/data/blogPosts';
import { fetchBlogs, ApiBlog } from '@/lib/api';
import { Sparkles, Clock, ArrowRight, BookOpen } from 'lucide-react';

export default function FeaturedBlogs() {
  const [posts, setPosts] = useState<Array<{
    id: string | number;
    slug: string;
    category: string;
    readingTime: string;
    title: string;
    excerpt: string;
    author: { name: string; avatarInitials: string };
  }>>([]);

  useEffect(() => {
    let mounted = true;
    fetchBlogs({ limit: 3 }).then((apiBlogs) => {
      if (!mounted) return;
      if (apiBlogs && apiBlogs.length > 0) {
        setPosts(
          apiBlogs.map((b) => ({
            id: b.id,
            slug: b.slug,
            category: b.category?.name || 'Technology',
            readingTime: '5 min read',
            title: b.title,
            excerpt: b.excerpt,
            author: { name: 'Zurvix Team', avatarInitials: 'ZX' },
          }))
        );
      } else {
        setPosts(
          blogPosts.slice(0, 3).map((p) => ({
            id: p.id,
            slug: p.slug,
            category: p.category,
            readingTime: p.readingTime,
            title: p.title,
            excerpt: p.excerpt,
            author: { name: p.author.name, avatarInitials: p.author.avatarInitials },
          }))
        );
      }
    });

    return () => {
      mounted = false;
    };
  }, []);

  const displayPosts = posts.length > 0 ? posts : blogPosts.slice(0, 3);

  return (
    <section id="blogs" className="py-24 relative overflow-hidden bg-[#070A0E] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center space-x-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1 text-xs font-mono font-medium text-[#00DF81]">
              <span>// 04 — KNOWLEDGE &amp; INSIGHTS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Ideas, Insights &amp;{' '}
              <span className="text-gradient-green">Digital Knowledge.</span>
            </h2>
            <p className="text-sm sm:text-base text-gray-400">
              Architectural guides on websites, mobile apps, AI search (GEO + LLM), and growth strategies from our engineering team.
            </p>
          </div>

          <Link
            href="/blog"
            className="inline-flex items-center space-x-2 text-xs font-bold text-[#00DF81] hover:text-[#00F58D] group shrink-0"
          >
            <span>View All Articles &amp; Guides</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* 3 Clean Minimalist Blog Cards - Single Scrollable Line on Mobile */}
        <div className="flex md:grid md:grid-cols-3 gap-4 md:gap-6 lg:gap-8 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-4 -mx-4 px-4 sm:mx-0 sm:px-0">
          {displayPosts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="w-[84vw] sm:w-[55vw] md:w-auto shrink-0 snap-center group rounded-3xl border border-white/[0.08] bg-[#080C11] p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:border-[#00DF81]/30 hover:bg-[#0A0F16] hover:shadow-2xl hover:shadow-[#00DF81]/5"
            >
              <div className="space-y-4">
                {/* Meta tag & Reading Time */}
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-white/[0.04] border border-white/10 px-3 py-1 text-[11px] font-mono text-[#00DF81]">
                    {post.category}
                  </span>
                  <div className="flex items-center space-x-1 text-xs text-gray-400 font-mono">
                    <Clock className="h-3 w-3" />
                    <span>{post.readingTime}</span>
                  </div>
                </div>

                {/* Title & Excerpt */}
                <div className="space-y-2">
                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-[#00DF81] transition-colors leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-400 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              {/* Author & Read Action */}
              <div className="mt-8 pt-5 border-t border-white/[0.06] flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="h-6 w-6 rounded-full bg-[#00DF81] text-black font-bold text-[10px] flex items-center justify-center">
                    {post.author.avatarInitials}
                  </div>
                  <span className="text-xs text-gray-400 font-medium">{post.author.name}</span>
                </div>

                <span className="inline-flex items-center space-x-1 text-xs font-bold text-[#00DF81] group-hover:translate-x-1 transition-transform">
                  <span>Read</span>
                  <ArrowRight className="h-3 w-3" />
                </span>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
