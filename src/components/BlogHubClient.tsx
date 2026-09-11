'use client';

import React, { useState, useEffect, useMemo, useRef, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';
import WhatsAppModal from '@/components/WhatsAppModal';
import { fetchCategories, fetchBlogs, ApiCategory, ApiBlog, getBlogCoverImage } from '@/lib/api';
import {
  Sparkles,
  Clock,
  ArrowRight,
  Search,
  X,
  ChevronLeft,
  ChevronRight,
  AlertCircle,
  RefreshCw,
} from 'lucide-react';

const POSTS_PER_PAGE = 10;

interface BlogHubClientProps {
  initialBlogs?: ApiBlog[];
  initialCategories?: ApiCategory[];
  initialError?: boolean;
}

export default function BlogHubClient({
  initialBlogs = [],
  initialCategories = [],
  initialError = false,
}: BlogHubClientProps) {
  const [isSalesModalOpen, setIsSalesModalOpen] = useState(false);
  const [categories, setCategories] = useState<ApiCategory[]>(initialCategories);
  const [activeCategorySlug, setActiveCategorySlug] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      const catParam = urlParams.get('category');
      if (catParam) return catParam.toLowerCase();
    }
    return 'all';
  });
  const [apiBlogs, setApiBlogs] = useState<ApiBlog[]>(initialBlogs);
  const [searchQuery, setSearchQuery] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      return urlParams.get('search') || urlParams.get('q') || '';
    }
    return '';
  });
  const [currentPage, setCurrentPage] = useState<number>(() => {
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      const pageParam = parseInt(urlParams.get('page') || '1', 10);
      if (pageParam > 1) return pageParam;
    }
    return 1;
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [hasError, setHasError] = useState<boolean>(initialError && initialBlogs.length === 0);

  const gridRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const loadData = useCallback(async () => {
    try {
      setIsLoading(true);
      setHasError(false);
      const [cats, blogs] = await Promise.all([
        fetchCategories('zurvix'),
        fetchBlogs({ source: 'zurvix', limit: 100 }),
      ]);

      if (cats && cats.length > 0) {
        setCategories(cats);
      }
      if (blogs && blogs.length > 0) {
        setApiBlogs(blogs);
      } else if (blogs.length === 0 && (!cats || cats.length === 0)) {
        setHasError(true);
      }
    } catch (err) {
      console.error('Failed to load blog hub data from admin API:', err);
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // 2. Filter blogs live based on Category and Search Query
  const filteredBlogs = useMemo(() => {
    let list = apiBlogs;

    // Filter by Category
    if (activeCategorySlug !== 'all') {
      list = list.filter((b) => {
        const catSlug = b.category?.slug?.toLowerCase();
        const catName = b.category?.name?.toLowerCase();
        return catSlug === activeCategorySlug.toLowerCase() || catName === activeCategorySlug.toLowerCase();
      });
    }

    // Filter by Search Query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      list = list.filter((b) => {
        const titleMatch = b.title?.toLowerCase().includes(q);
        const excerptMatch = b.excerpt?.toLowerCase().includes(q);
        const categoryMatch = b.category?.name?.toLowerCase().includes(q);
        const authorMatch = b.author?.toLowerCase().includes(q);
        const keywordsMatch = b.seo_keywords?.toLowerCase().includes(q);
        return titleMatch || excerptMatch || categoryMatch || authorMatch || keywordsMatch;
      });
    }

    return list;
  }, [apiBlogs, activeCategorySlug, searchQuery]);

  // 3. Pagination math
  const totalBlogs = filteredBlogs.length;
  const totalPages = Math.ceil(totalBlogs / POSTS_PER_PAGE) || 1;
  const validPage = Math.min(Math.max(currentPage, 1), totalPages);

  const startIndex = (validPage - 1) * POSTS_PER_PAGE;
  const endIndex = Math.min(startIndex + POSTS_PER_PAGE, totalBlogs);
  const currentBlogs = useMemo(() => {
    return filteredBlogs.slice(startIndex, endIndex);
  }, [filteredBlogs, startIndex, endIndex]);

  // Featured article (Top published article from database when on all categories & no search)
  const featuredPost = useMemo(() => {
    if (activeCategorySlug === 'all' && !searchQuery && apiBlogs.length > 0) {
      return apiBlogs[0];
    }
    return null;
  }, [activeCategorySlug, searchQuery, apiBlogs]);

  // Selected category info for dynamic headers
  const currentCategory = categories.find((c) => c.slug === activeCategorySlug);

  // Handle page change with smooth scroll
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href);
      url.searchParams.set('page', page.toString());
      window.history.replaceState(null, '', url.toString());

      if (gridRef.current) {
        const offset = 120;
        const top = gridRef.current.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    }
  };

  const handleCategorySelect = (slug: string) => {
    setActiveCategorySlug(slug);
    setCurrentPage(1);
    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href);
      if (slug === 'all') {
        url.searchParams.delete('category');
      } else {
        url.searchParams.set('category', slug);
      }
      url.searchParams.delete('page');
      window.history.replaceState(null, '', url.toString());
    }
  };

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1);
    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href);
      if (query.trim()) {
        url.searchParams.set('search', query);
      } else {
        url.searchParams.delete('search');
      }
      url.searchParams.delete('page');
      window.history.replaceState(null, '', url.toString());
    }
  };

  // Keyboard shortcut: '/' focuses search input
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        e.key === '/' &&
        document.activeElement !== searchInputRef.current &&
        !['INPUT', 'TEXTAREA'].includes((document.activeElement as HTMLElement)?.tagName)
      ) {
        e.preventDefault();
        searchInputRef.current?.focus();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <main className="min-h-screen bg-[#05080A] text-white">
      <CustomCursor />
      <Navbar onOpenSalesModal={() => setIsSalesModalOpen(true)} />

      {/* Page Header Banner */}
      <section className="pt-36 pb-10 relative overflow-hidden bg-[#05080A]">
        {/* Ambient Cosmic Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[380px] bg-[#00DF81]/6 rounded-full blur-[160px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-5">
          <div className="inline-flex items-center space-x-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-xs font-mono font-medium text-[#00DF81] shadow-inner">
            <Sparkles className="w-3.5 h-3.5 text-[#00DF81]" />
            <span>{'// KNOWLEDGE & ENGINEERING INSIGHTS'}</span>
            <span className="text-gray-500">•</span>
            <span className="text-gray-300 font-bold">
              {apiBlogs.length > 0 ? `${apiBlogs.length} Published Articles` : 'Engineering Guides'}
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight max-w-4xl mx-auto leading-tight">
            {currentCategory?.seo_title ? (
              <span>{currentCategory.seo_title.split('|')[0]}</span>
            ) : (
              <>Ideas, Insights &amp; <span className="text-gradient-green">Digital Knowledge.</span></>
            )}
          </h1>

          <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto leading-relaxed">
            {currentCategory?.seo_description ||
              'In-depth technical blueprints on modern web architecture, AI search optimization (GEO & LLM), high-converting ecommerce platforms, and digital product engineering.'}
          </p>
        </div>
      </section>

      {/* ── Live Blog Search Box ── */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <div className="relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-[#00DF81]/30 via-cyan-500/20 to-[#00DF81]/30 rounded-2xl blur opacity-30 group-focus-within:opacity-100 transition duration-300 pointer-events-none" />
          
          <div className="relative flex items-center bg-[#080C12] border border-white/[0.12] rounded-2xl overflow-hidden shadow-2xl focus-within:border-[#00DF81]/70 transition-all">
            <div className="pl-4 pr-2 text-[#00DF81] flex items-center justify-center">
              <Search className="w-5 h-5" />
            </div>

            <input
              ref={searchInputRef}
              type="text"
              value={searchQuery}
              onChange={(e) => handleSearchChange(e.target.value)}
              placeholder="Search articles by title, topic, or keyword... (Press '/' to focus)"
              className="w-full py-4 px-2 bg-transparent text-white text-sm sm:text-base focus:outline-none placeholder-gray-500 font-sans"
            />

            {searchQuery && (
              <button
                type="button"
                onClick={() => {
                  handleSearchChange('');
                  searchInputRef.current?.focus();
                }}
                className="p-2 mr-2 rounded-xl text-gray-400 hover:text-white hover:bg-white/[0.08] transition-colors cursor-pointer"
                title="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}

            <div className="pr-4 shrink-0 hidden sm:flex items-center space-x-2">
              <span className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-white/[0.05] text-gray-400 border border-white/[0.08]">
                {filteredBlogs.length} {filteredBlogs.length === 1 ? 'article' : 'articles'}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Featured Top Article Banner (Shown on Page 1 without active search) ── */}
      {featuredPost && currentPage === 1 && !searchQuery && (
        <section className="py-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
          <Link
            href={`/blog/${featuredPost.slug}`}
            className="group relative rounded-3xl border border-white/[0.1] bg-gradient-to-br from-[#080C11] via-[#090E15] to-[#070A0E] overflow-hidden grid grid-cols-1 lg:grid-cols-12 transition-all duration-300 hover:border-[#00DF81]/50 hover:shadow-2xl hover:shadow-[#00DF81]/10"
          >
            {/* Featured Image */}
            <div className="lg:col-span-7 relative h-72 lg:h-[400px] overflow-hidden bg-[#06090E]">
              <Image
                src={getBlogCoverImage(featuredPost.featured_image, featuredPost.category?.slug, null)}
                alt={featuredPost.title}
                fill
                priority
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080C11] via-transparent to-transparent lg:hidden" />
              <div className="absolute top-4 left-4 z-10 flex items-center space-x-2">
                <span className="rounded-full bg-[#00DF81] px-3.5 py-1 text-xs font-black text-black uppercase tracking-wider shadow-lg">
                  FEATURED ARTICLE
                </span>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-5 p-7 sm:p-9 flex flex-col justify-between space-y-6">
              <div className="space-y-3.5">
                <div className="flex items-center space-x-3 text-xs text-gray-400 font-mono">
                  <span className="rounded-full bg-[#00DF81]/15 border border-[#00DF81]/30 px-3 py-1 text-[#00DF81] font-semibold">
                    {featuredPost.category?.name || 'Engineering'}
                  </span>
                  <span>•</span>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-3.5 w-3.5 text-[#00DF81]" />
                    <span>{featuredPost.read_time ? `${featuredPost.read_time} min read` : '6 min read'}</span>
                  </div>
                </div>

                <h2 className="text-2xl sm:text-3xl font-extrabold text-white group-hover:text-[#00DF81] transition-colors leading-tight">
                  {featuredPost.title}
                </h2>

                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed line-clamp-3">
                  {featuredPost.excerpt}
                </p>
              </div>

              <div className="pt-5 border-t border-white/[0.08] flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="h-8 w-8 rounded-full bg-[#00DF81] text-black font-black text-xs flex items-center justify-center">
                    {featuredPost.author ? featuredPost.author.slice(0, 2).toUpperCase() : 'ZX'}
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-white">
                      {featuredPost.author || 'Zurvix Team'}
                    </p>
                    <p className="text-[10px] text-gray-500 font-mono">
                      {featuredPost.published_at ? new Date(featuredPost.published_at).toLocaleDateString('en-US', { month: 'short', year: 'numeric' }) : '2026'}
                    </p>
                  </div>
                </div>

                <span className="inline-flex items-center space-x-1.5 text-xs font-bold text-[#00DF81] group-hover:translate-x-1 transition-transform">
                  <span>Read Full Article</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </div>
          </Link>
        </section>
      )}

      {/* ── Dynamic Category Filter Pills ── */}
      <section className="py-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-2">
          {/* All Category Pill */}
          <button
            onClick={() => handleCategorySelect('all')}
            className={`rounded-full px-5 py-2 text-xs font-semibold transition-all duration-200 cursor-pointer flex items-center space-x-1.5 ${
              activeCategorySlug === 'all'
                ? 'bg-[#00DF81] text-[#05080A] font-bold shadow-lg shadow-[#00DF81]/25 scale-105'
                : 'border border-white/[0.08] bg-white/[0.02] text-gray-400 hover:text-white hover:bg-white/[0.06]'
            }`}
          >
            <span>All Articles</span>
            <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${activeCategorySlug === 'all' ? 'bg-black/20 text-black font-bold' : 'bg-white/10 text-gray-400'}`}>
              {apiBlogs.length}
            </span>
          </button>

          {/* Dynamic Categories from API */}
          {categories.map((cat) => {
            const isSelected = activeCategorySlug === cat.slug;
            return (
              <button
                key={cat.slug}
                onClick={() => handleCategorySelect(cat.slug)}
                className={`rounded-full px-4 sm:px-5 py-2 text-xs font-semibold transition-all duration-200 cursor-pointer flex items-center space-x-1.5 ${
                  isSelected
                    ? 'bg-[#00DF81] text-[#05080A] font-bold shadow-lg shadow-[#00DF81]/25 scale-105'
                    : 'border border-white/[0.08] bg-white/[0.02] text-gray-400 hover:text-white hover:bg-white/[0.06]'
                }`}
                title={cat.seo_description || cat.description || cat.name}
              >
                <span>{cat.name}</span>
                {cat.published_blogs_count !== undefined && cat.published_blogs_count > 0 && (
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${isSelected ? 'bg-black/20 text-black font-bold' : 'bg-white/10 text-gray-400'}`}>
                    {cat.published_blogs_count}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </section>

      {/* ── Active Filter Bar Status ── */}
      <section ref={gridRef} className="pt-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-white/[0.06]">
          <div className="flex items-center space-x-2 text-xs text-gray-400 font-mono">
            <span>SHOWING:</span>
            <span className="text-white font-bold">
              {totalBlogs === 0 ? '0' : `${startIndex + 1}–${endIndex}`} of {totalBlogs} Articles
            </span>
            {searchQuery && (
              <span className="text-[#00DF81] bg-[#00DF81]/10 px-2 py-0.5 rounded border border-[#00DF81]/20">
                matching &ldquo;{searchQuery}&rdquo;
              </span>
            )}
            {activeCategorySlug !== 'all' && (
              <span className="text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">
                Category: {currentCategory?.name || activeCategorySlug}
              </span>
            )}
          </div>

          <div className="text-xs text-gray-500 font-mono">
            Page {validPage} of {totalPages} (10 per page)
          </div>
        </div>
      </section>

      {/* ── Articles Grid / Error State / Empty State ── */}
      <section className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {hasError && apiBlogs.length === 0 ? (
          /* Visible Error Banner */
          <div className="text-center py-16 rounded-3xl border border-rose-500/20 bg-rose-500/5 p-10 space-y-4 max-w-2xl mx-auto">
            <div className="w-12 h-12 rounded-2xl bg-rose-500/10 text-rose-400 flex items-center justify-center mx-auto">
              <AlertCircle className="w-6 h-6" />
            </div>
            <div className="space-y-1.5">
              <h3 className="text-lg font-bold text-white">Unable to Load Articles from Database</h3>
              <p className="text-xs text-gray-400 max-w-md mx-auto leading-relaxed">
                The connection to the content API experienced a temporary network issue. Please retry or connect directly with our engineering team.
              </p>
            </div>
            <div className="pt-2">
              <button
                onClick={loadData}
                disabled={isLoading}
                className="inline-flex items-center space-x-2 rounded-full bg-[#00DF81] px-6 py-3 text-xs font-bold text-black hover:bg-[#00F58D] transition-all cursor-pointer shadow-lg shadow-[#00DF81]/20 disabled:opacity-50"
              >
                <RefreshCw className={`w-3.5 h-3.5 ${isLoading ? 'animate-spin' : ''}`} />
                <span>{isLoading ? 'Reconnecting...' : 'Retry Connection'}</span>
              </button>
            </div>
          </div>
        ) : isLoading ? (
          /* Loading Skeletons */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <div key={n} className="rounded-3xl border border-white/[0.06] bg-[#080C11] p-6 space-y-4 animate-pulse">
                <div className="h-48 w-full bg-white/[0.04] rounded-2xl" />
                <div className="h-4 w-1/3 bg-white/[0.05] rounded" />
                <div className="h-6 w-3/4 bg-white/[0.07] rounded" />
                <div className="h-12 w-full bg-white/[0.03] rounded" />
              </div>
            ))}
          </div>
        ) : currentBlogs.length === 0 ? (
          /* Empty State */
          <div className="text-center py-20 rounded-3xl border border-white/[0.08] bg-[#080C11] p-12 space-y-5">
            <div className="w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/10 text-gray-400 flex items-center justify-center mx-auto">
              <Search className="w-6 h-6 text-gray-500" />
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-bold text-white">No articles match your criteria</h3>
              <p className="text-xs sm:text-sm text-gray-400 max-w-md mx-auto">
                {searchQuery
                  ? `We couldn't find any articles matching "${searchQuery}". Try adjusting your keywords or clearing the search.`
                  : `No published articles in "${currentCategory?.name || activeCategorySlug}" yet.`}
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              {searchQuery && (
                <button
                  onClick={() => handleSearchChange('')}
                  className="px-5 py-2.5 rounded-full bg-[#00DF81] text-black text-xs font-bold hover:bg-[#00F58D] transition-colors cursor-pointer"
                >
                  Clear Search Query
                </button>
              )}
              {activeCategorySlug !== 'all' && (
                <button
                  onClick={() => handleCategorySelect('all')}
                  className="px-5 py-2.5 rounded-full bg-white/[0.06] text-white text-xs font-semibold hover:bg-white/[0.1] border border-white/10 transition-colors cursor-pointer"
                >
                  View All Categories
                </button>
              )}
            </div>
          </div>
        ) : (
          /* Real Articles Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {currentBlogs.map((post) => {
              const categoryName = post.category?.name || 'Insights';
              const categorySlug = post.category?.slug || 'insights';
              const coverImg = getBlogCoverImage(post.featured_image, categorySlug, null);
              const readTime = post.read_time ? `${post.read_time} min read` : '5 min read';
              const pubDate = post.published_at ? new Date(post.published_at).toLocaleDateString('en-US', { month: 'short', year: 'numeric' }) : '2026';
              const authorName = post.author || 'Zurvix Team';
              const authorInitials = authorName.split(' ').map((n: string) => n[0]).join('').slice(0, 2).toUpperCase() || 'ZX';

              return (
                <Link
                  key={post.id || post.slug}
                  href={`/blog/${post.slug}`}
                  className="group rounded-3xl border border-white/[0.08] bg-[#080C11] overflow-hidden flex flex-col justify-between transition-all duration-300 hover:border-[#00DF81]/40 hover:bg-[#0A0F16] hover:shadow-2xl hover:shadow-[#00DF81]/5"
                >
                  <div className="space-y-4">
                    {/* Cover Image Thumbnail */}
                    <div className="relative h-52 w-full overflow-hidden bg-[#06090E]">
                      <Image
                        src={coverImg}
                        alt={post.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="rounded-full bg-black/85 backdrop-blur-md border border-white/15 px-3 py-1 text-[11px] font-mono font-semibold text-[#00DF81]">
                          {categoryName}
                        </span>
                      </div>
                    </div>

                    <div className="p-7 pb-0 space-y-3">
                      <div className="flex items-center space-x-2 text-[11px] text-gray-400 font-mono">
                        <Clock className="h-3 w-3 text-[#00DF81]" />
                        <span>{readTime}</span>
                        <span>•</span>
                        <span>{pubDate}</span>
                      </div>

                      <h3 className="text-lg font-bold text-white group-hover:text-[#00DF81] transition-colors leading-snug line-clamp-2">
                        {post.title}
                      </h3>

                      <p className="text-xs text-gray-400 line-clamp-3 leading-relaxed">
                        {post.excerpt}
                      </p>
                    </div>
                  </div>

                  {/* Card Bottom Author & CTA */}
                  <div className="p-7 pt-4 mt-4 border-t border-white/[0.06] flex items-center justify-between">
                    <div className="flex items-center space-x-2.5">
                      <div className="h-7 w-7 rounded-full bg-[#00DF81] text-black font-extrabold text-[11px] flex items-center justify-center">
                        {authorInitials}
                      </div>
                      <span className="text-xs text-gray-300 font-medium">{authorName}</span>
                    </div>

                    <span className="inline-flex items-center space-x-1 text-xs font-bold text-[#00DF81] group-hover:translate-x-1 transition-transform">
                      <span>Read</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </section>

      {/* ── Numbered Pagination System (10 blogs per page) ── */}
      {totalPages > 1 && (
        <section className="pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-5 rounded-2xl bg-[#080C12] border border-white/[0.08]">
            <div className="text-xs font-mono text-gray-400">
              Showing <strong className="text-white">{startIndex + 1}–{endIndex}</strong> of <strong className="text-white">{totalBlogs}</strong> articles
            </div>

            <div className="flex items-center space-x-1.5">
              {/* Previous Button */}
              <button
                onClick={() => handlePageChange(validPage - 1)}
                disabled={validPage <= 1}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold font-mono transition-all flex items-center space-x-1 ${
                  validPage <= 1
                    ? 'opacity-40 cursor-not-allowed bg-white/[0.02] text-gray-500 border border-white/[0.04]'
                    : 'bg-white/[0.05] hover:bg-white/[0.1] text-white border border-white/10 cursor-pointer'
                }`}
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Prev</span>
              </button>

              {/* Numbered Page Buttons */}
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => {
                const isActive = pageNum === validPage;
                return (
                  <button
                    key={pageNum}
                    onClick={() => handlePageChange(pageNum)}
                    className={`w-9 h-9 rounded-xl text-xs font-bold font-mono transition-all cursor-pointer flex items-center justify-center ${
                      isActive
                        ? 'bg-[#00DF81] text-black shadow-lg shadow-[#00DF81]/25 scale-105'
                        : 'bg-white/[0.03] hover:bg-white/[0.08] text-gray-300 border border-white/[0.06]'
                    }`}
                  >
                    {pageNum}
                  </button>
                );
              })}

              {/* Next Button */}
              <button
                onClick={() => handlePageChange(validPage + 1)}
                disabled={validPage >= totalPages}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold font-mono transition-all flex items-center space-x-1 ${
                  validPage >= totalPages
                    ? 'opacity-40 cursor-not-allowed bg-white/[0.02] text-gray-500 border border-white/[0.04]'
                    : 'bg-white/[0.05] hover:bg-white/[0.1] text-white border border-white/10 cursor-pointer'
                }`}
              >
                <span>Next</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>
      )}

      <Footer />

      <WhatsAppModal
        isOpen={isSalesModalOpen}
        onClose={() => setIsSalesModalOpen(false)}
        selectedPackage={null}
      />
    </main>
  );
}
