'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';
import WhatsAppModal from '@/components/WhatsAppModal';
import { blogPosts, BlogPost } from '@/data/blogPosts';
import { Sparkles, BookOpen, Clock, Calendar, User, ArrowRight, Share2, TrendingUp } from 'lucide-react';

export default function BlogHubPage() {
  const [isSalesModalOpen, setIsSalesModalOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>('All');

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
    ? blogPosts
    : blogPosts.filter((p) => p.category === activeCategory);

  const featuredPost = blogPosts[0];

  return (
    <main className="min-h-screen bg-[#05080A] text-white">
      <CustomCursor />
      <Navbar onOpenSalesModal={() => setIsSalesModalOpen(true)} />

      {/* Page Header */}
      <section className="pt-36 pb-12 relative overflow-hidden bg-[#05080A]">
        {/* Subtle Cosmic Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#00DF81]/5 rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          <div className="inline-flex items-center space-x-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1 text-xs font-mono font-medium text-[#00DF81]">
            <span>// KNOWLEDGE &amp; ENGINEERING INSIGHTS</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight max-w-4xl mx-auto leading-tight">
            Ideas, Insights &amp; <span className="text-gradient-green">Digital Knowledge.</span>
          </h1>

          <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Deep-dive technical guides on AI search optimization (GEO &amp; LLM), high-performance web frameworks, ecommerce scaling, and digital product strategy.
          </p>
        </div>
      </section>

      {/* Featured Headline Article Banner */}
      {featuredPost && (
        <section className="py-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href={`/blog/${featuredPost.slug}`}
            className="group relative rounded-3xl border border-white/[0.08] bg-[#080C11] overflow-hidden grid grid-cols-1 lg:grid-cols-12 transition-all duration-300 hover:border-[#00DF81]/40 hover:shadow-2xl hover:shadow-[#00DF81]/10"
          >
            {/* Featured Image */}
            <div className="lg:col-span-7 relative h-72 lg:h-[420px] overflow-hidden">
              <Image
                src={featuredPost.coverImage}
                alt={featuredPost.title}
                fill
                priority
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080C11] via-transparent to-transparent lg:hidden" />
              <div className="absolute top-4 left-4">
                <span className="rounded-full bg-[#00DF81] px-3.5 py-1 text-xs font-extrabold text-black uppercase tracking-wider shadow-md">
                  FEATURED ARTICLE
                </span>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-xs text-gray-400 font-mono">
                  <span className="rounded-full bg-[#00DF81]/15 border border-[#00DF81]/30 px-3 py-1 text-[#00DF81] font-semibold">
                    {featuredPost.category}
                  </span>
                  <span>•</span>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-3.5 w-3.5" />
                    <span>{featuredPost.readingTime}</span>
                  </div>
                </div>

                <h2 className="text-2xl sm:text-3xl font-extrabold text-white group-hover:text-[#00DF81] transition-colors leading-tight">
                  {featuredPost.title}
                </h2>

                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
              </div>

              <div className="pt-6 border-t border-white/[0.06] flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="h-8 w-8 rounded-full bg-[#00DF81] text-black font-extrabold text-xs flex items-center justify-center">
                    {featuredPost.author.avatarInitials}
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-white">{featuredPost.author.name}</p>
                    <p className="text-[10px] text-gray-500 font-mono">{featuredPost.publishDate}</p>
                  </div>
                </div>

                <span className="inline-flex items-center space-x-1.5 text-xs font-bold text-[#00DF81] group-hover:translate-x-1 transition-transform">
                  <span>Read Full Guide</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </div>
          </Link>
        </section>
      )}

      {/* Category Filter Pills */}
      <section className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full px-5 py-2 text-xs font-semibold transition-all duration-200 cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#00DF81] text-[#05080A] font-bold shadow-md shadow-[#00DF81]/25 scale-105'
                  : 'border border-white/[0.08] bg-white/[0.02] text-gray-400 hover:text-white hover:bg-white/[0.06]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-8 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredPosts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="group rounded-3xl border border-white/[0.08] bg-[#080C11] overflow-hidden flex flex-col justify-between transition-all duration-300 hover:border-[#00DF81]/30 hover:bg-[#0A0F16] hover:shadow-2xl hover:shadow-[#00DF81]/5"
            >
              <div className="space-y-4">
                {/* Article Cover Image */}
                <div className="relative h-52 w-full overflow-hidden">
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="rounded-full bg-black/80 backdrop-blur-md border border-white/10 px-3 py-1 text-[11px] font-mono font-semibold text-[#00DF81]">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-7 pb-0 space-y-3">
                  <div className="flex items-center space-x-2 text-[11px] text-gray-400 font-mono">
                    <Clock className="h-3 w-3" />
                    <span>{post.readingTime}</span>
                    <span>•</span>
                    <span>{post.publishDate}</span>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-[#00DF81] transition-colors leading-snug">
                    {post.title}
                  </h3>

                  <p className="text-xs text-gray-400 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              {/* Author & CTA */}
              <div className="p-7 pt-4 mt-4 border-t border-white/[0.06] flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="h-6 w-6 rounded-full bg-[#00DF81] text-black font-extrabold text-[10px] flex items-center justify-center">
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
      </section>

      <Footer />

      <WhatsAppModal
        isOpen={isSalesModalOpen}
        onClose={() => setIsSalesModalOpen(false)}
        selectedPackage={null}
      />
    </main>
  );
}
