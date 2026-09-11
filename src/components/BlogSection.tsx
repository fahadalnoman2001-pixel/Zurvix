'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { fetchBlogs, getBlogCoverImage, ApiBlog } from '@/lib/api';
import { Sparkles, Clock, ArrowRight } from 'lucide-react';

export default function BlogSection() {
  const [blogs, setBlogs] = useState<ApiBlog[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  useEffect(() => {
    let mounted = true;
    fetchBlogs({ source: 'zurvix', limit: 6 }).then((res) => {
      if (mounted && res) {
        setBlogs(res);
      }
    });
    return () => {
      mounted = false;
    };
  }, []);

  const categories = [
    'All',
    'AI & Automation',
    'SEO & GEO',
    'Web Development',
    'App Development',
    'UI/UX',
    'Ecommerce',
    'Digital Marketing'
  ];

  const filteredPosts = activeCategory === 'All'
    ? blogs
    : blogs.filter((b) => b.category?.name?.toLowerCase().includes(activeCategory.toLowerCase()));

  if (blogs.length === 0) return null;

  return (
    <section id="blog" className="py-24 relative overflow-hidden bg-[#070A0E] border-t border-white/5">
      <div className="absolute top-1/3 left-1/3 w-[600px] h-[300px] bg-[#00DF81]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center space-x-2 rounded-full border border-[#00DF81]/30 bg-[#00DF81]/10 px-4 py-1 text-xs font-semibold text-[#00DF81]">
            <Sparkles className="h-3.5 w-3.5" />
            <span>KNOWLEDGE &amp; INSIGHTS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Ideas, Insights &amp; <span className="text-gradient-green">Digital Knowledge.</span>
          </h2>

          <p className="text-base text-gray-400 leading-relaxed">
            Practical, in-depth architectural guides on websites, apps, AI, SEO, GEO/LLM search optimization, and digital growth.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-all duration-200 cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#00DF81] text-[#05080A] shadow-md shadow-[#00DF81]/25 scale-105'
                  : 'border border-white/10 bg-white/[0.03] text-gray-300 hover:bg-white/10 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-4 -mx-4 px-4 sm:mx-0 sm:px-0">
          {filteredPosts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="w-[85vw] sm:w-[55vw] md:w-auto shrink-0 snap-center group rounded-3xl border border-white/10 bg-[#080C11] overflow-hidden transition-all duration-300 hover:border-[#00DF81]/50 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-[#00DF81]/10 flex flex-col justify-between cursor-pointer"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#0D131A]">
                <Image
                  src={getBlogCoverImage(post.featured_image, post.category?.slug, null)}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 85vw, 380px"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080C11] via-transparent to-transparent opacity-70" />
                <div className="absolute top-3.5 left-3.5 z-10">
                  <span className="rounded-full bg-black/80 backdrop-blur-md border border-white/10 px-3 py-1 text-[11px] font-mono font-semibold text-[#00DF81]">
                    {post.category?.name || 'Insights'}
                  </span>
                </div>
                <div className="absolute bottom-3 right-3 z-10">
                  <div className="flex items-center space-x-1.5 text-[11px] text-gray-300 font-mono bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10">
                    <Clock className="h-3 w-3 text-[#00DF81]" />
                    <span>{post.read_time ? `${post.read_time} min` : '5 min'}</span>
                  </div>
                </div>
              </div>

              <div className="p-6 sm:p-7 space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-[#00DF81] transition-colors leading-snug line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-xs text-gray-400 mt-2 line-clamp-2 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-5 border-t border-white/10 flex items-center justify-between p-6 pt-0">
                <div className="flex items-center space-x-2.5">
                  <div className="h-7 w-7 rounded-full bg-[#00DF81] text-black font-bold text-xs flex items-center justify-center">
                    {(post.author || 'ZX').slice(0, 2).toUpperCase()}
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-white">{post.author || 'Zurvix Team'}</p>
                  </div>
                </div>

                <span className="inline-flex items-center space-x-1 text-xs font-bold text-[#00DF81] group-hover:translate-x-1 transition-transform">
                  <span>Read Article</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
