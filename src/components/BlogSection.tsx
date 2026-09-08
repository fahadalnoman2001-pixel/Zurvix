'use client';

import React, { useState } from 'react';
import { blogPosts, BlogPost } from '@/data/blogPosts';
import { Sparkles, BookOpen, Clock, Calendar, User, ArrowRight, X, CheckCircle, Share2 } from 'lucide-react';

interface BlogSectionProps {
  onOpenArticleInquiry: (articleTitle: string) => void;
}

export default function BlogSection({ onOpenArticleInquiry }: BlogSectionProps) {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
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

  return (
    <section id="blog" className="py-24 relative overflow-hidden bg-[#070A0E] border-t border-white/5">
      {/* Ambience */}
      <div className="absolute top-1/3 left-1/3 w-[600px] h-[300px] bg-[#00DF81]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center space-x-2 rounded-full border border-[#00DF81]/30 bg-[#00DF81]/10 px-4 py-1 text-xs font-semibold text-[#00DF81]">
            <Sparkles className="h-3.5 w-3.5" />
            <span>KNOWLEDGE & INSIGHTS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Ideas, Insights & <span className="text-gradient-green">Digital Knowledge.</span>
          </h2>

          <p className="text-base text-gray-400 leading-relaxed">
            Practical, in-depth architectural guides on websites, apps, AI, SEO, GEO/LLM search optimization, and digital growth.
          </p>
        </div>

        {/* Category Pills */}
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

        {/* Articles Grid - Single Scrollable Line on Mobile */}
        <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-4 -mx-4 px-4 sm:mx-0 sm:px-0">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              onClick={() => setSelectedPost(post)}
              className="w-[85vw] sm:w-[55vw] md:w-auto shrink-0 snap-center group rounded-2xl border border-white/10 bg-[#0B0F15]/80 backdrop-blur-xl p-7 transition-all duration-300 hover:border-[#00DF81]/50 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-[#00DF81]/10 flex flex-col justify-between cursor-pointer"
            >
              <div className="space-y-4">
                {/* Meta Bar */}
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-[#00DF81]/10 border border-[#00DF81]/30 px-3 py-1 text-[11px] font-semibold text-[#00DF81]">
                    {post.category}
                  </span>

                  <div className="flex items-center space-x-1.5 text-xs text-gray-400">
                    <Clock className="h-3.5 w-3.5" />
                    <span>{post.readingTime}</span>
                  </div>
                </div>

                {/* Title & Subtitle */}
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-[#00DF81] transition-colors leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-xs text-gray-400 mt-2 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              {/* Footer / Author */}
              <div className="mt-8 pt-5 border-t border-white/10 flex items-center justify-between">
                <div className="flex items-center space-x-2.5">
                  <div className="h-7 w-7 rounded-full bg-[#00DF81] text-black font-bold text-xs flex items-center justify-center">
                    {post.author.avatarInitials}
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-white">{post.author.name}</p>
                    <p className="text-[10px] text-gray-400">{post.publishDate}</p>
                  </div>
                </div>

                <span className="inline-flex items-center space-x-1 text-xs font-bold text-[#00DF81] group-hover:translate-x-1 transition-transform">
                  <span>Read Article</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </article>
          ))}
        </div>

      </div>

      {/* Full Interactive Article Reading Modal */}
      {selectedPost && (
        <div className="fixed inset-0 z-[9990] flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
          <div
            className="fixed inset-0 bg-black/85 backdrop-blur-md"
            onClick={() => setSelectedPost(null)}
          />

          <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl border border-white/10 bg-[#0B0F15] p-6 sm:p-10 shadow-2xl text-white z-10 my-auto animate-in fade-in zoom-in-95 duration-200">
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-white/10 pb-5">
              <div className="flex items-center space-x-3">
                <span className="rounded-full bg-[#00DF81]/15 px-3 py-1 text-xs font-semibold text-[#00DF81] border border-[#00DF81]/30">
                  {selectedPost.category}
                </span>
                <span className="text-xs text-gray-400 font-mono">
                  {selectedPost.readingTime}
                </span>
              </div>

              <button
                onClick={() => setSelectedPost(null)}
                className="rounded-lg p-2 text-gray-400 hover:bg-white/10 hover:text-white transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Article Headline */}
            <div className="mt-6 space-y-4">
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                {selectedPost.title}
              </h2>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                {selectedPost.subtitle}
              </p>

              <div className="flex items-center space-x-3 pt-2 text-xs text-gray-400 border-b border-white/5 pb-6">
                <div className="h-8 w-8 rounded-full bg-[#00DF81] text-black font-bold text-xs flex items-center justify-center">
                  {selectedPost.author.avatarInitials}
                </div>
                <div>
                  <p className="text-xs font-bold text-white">{selectedPost.author.name}</p>
                  <p className="text-[11px] text-gray-400">{selectedPost.author.role} • {selectedPost.publishDate}</p>
                </div>
              </div>
            </div>

            {/* Table of Contents */}
            <div className="my-6 rounded-2xl border border-white/5 bg-white/[0.02] p-5">
              <p className="text-xs font-bold uppercase tracking-wider text-[#00DF81] mb-3">
                Table of Contents:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-300">
                {selectedPost.tableOfContents.map((toc) => (
                  <a
                    key={toc.id}
                    href={`#${toc.id}`}
                    className="hover:text-[#00DF81] transition-colors py-0.5"
                  >
                    {toc.title}
                  </a>
                ))}
              </div>
            </div>

            {/* Sections Content */}
            <div className="space-y-8 text-gray-300 text-sm sm:text-base leading-relaxed">
              {selectedPost.sections.map((sec) => (
                <div key={sec.id} id={sec.id} className="space-y-3">
                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                    {sec.heading}
                  </h3>
                  <p className="text-gray-300">{sec.content}</p>

                  {sec.highlight && (
                    <blockquote className="rounded-xl border-l-4 border-[#00DF81] bg-[#00DF81]/5 p-4 my-3 text-sm text-emerald-300 font-medium italic">
                      {sec.highlight}
                    </blockquote>
                  )}

                  {sec.subpoints && (
                    <ul className="space-y-2 pl-4 text-xs sm:text-sm text-gray-300">
                      {sec.subpoints.map((pt, pIdx) => (
                        <li key={pIdx} className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-[#00DF81] shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>

            {/* Bottom Article CTA */}
            <div className="mt-12 rounded-2xl border border-[#00DF81]/40 bg-[#00DF81]/10 p-6 sm:p-8 text-center space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                {selectedPost.ctaText || 'Want to improve how your business appears in search and AI?'}
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 max-w-lg mx-auto">
                Schedule a strategy session with our senior growth engineers to audit your digital architecture.
              </p>

              <button
                onClick={() => {
                  const title = selectedPost.title;
                  setSelectedPost(null);
                  onOpenArticleInquiry(title);
                }}
                className="inline-flex items-center space-x-2 rounded-xl bg-[#00DF81] px-6 py-3.5 text-sm font-bold text-[#05080A] hover:bg-[#00F58D] transition-colors cursor-pointer shadow-lg shadow-[#00DF81]/25"
              >
                <span>Talk to ZURVIX on WhatsApp</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
