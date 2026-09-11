'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';
import WhatsAppModal from '@/components/WhatsAppModal';
import {
  globalFaqSections,
  norwayFaqSections,
  top15NorwaySchemaQuestions,
} from '@/data/faqData';
import {
  HelpCircle,
  ChevronDown,
  ArrowRight,
  MessageSquare,
  Sparkles,
  Layers,
  Search,
  Globe,
  MapPin,
} from 'lucide-react';

// ── 1. Global FAQPage JSON-LD Schema (All 18 Global Q&As) ──
const allGlobalFaqItems = globalFaqSections.flatMap((s) => s.items);
const globalFaqSchemaJson = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: allGlobalFaqItems.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
});

// ── 2. Norway Scoped FAQPage JSON-LD Schema (Top 15 Highest-Intent Q&As) ──
const allNorwayFaqItems = norwayFaqSections.flatMap((s) => s.items);
const scopedNorwayItems = allNorwayFaqItems.filter((item) =>
  top15NorwaySchemaQuestions.includes(item.question)
);
const norwayFaqSchemaJson = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: scopedNorwayItems.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
});

export default function FaqPage() {
  const [isSalesModalOpen, setIsSalesModalOpen] = useState(false);
  const [marketFilter, setMarketFilter] = useState<'all' | 'global' | 'norway'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [openItems, setOpenItems] = useState<Set<string>>(() => {
    // Open the first question of every primary category by default
    return new Set(['global-0-0', 'global-1-0', 'global-2-0', 'global-3-0', 'norway-0-0', 'norway-1-0', 'norway-2-0']);
  });

  const toggleItem = (key: string) => {
    setOpenItems((prev) => {
      const next = new Set(prev);
      if (next.has(key)) {
        next.delete(key);
      } else {
        next.add(key);
      }
      return next;
    });
  };

  const expandAll = () => {
    const allKeys = new Set<string>();
    globalFaqSections.forEach((cat, catIdx) => {
      cat.items.forEach((_, itemIdx) => {
        allKeys.add(`global-${catIdx}-${itemIdx}`);
      });
    });
    norwayFaqSections.forEach((cat, catIdx) => {
      cat.items.forEach((_, itemIdx) => {
        allKeys.add(`norway-${catIdx}-${itemIdx}`);
      });
    });
    setOpenItems(allKeys);
  };

  const collapseAll = () => {
    setOpenItems(new Set());
  };

  // Combine categories according to selected market filter
  const displayedSections = useMemo(() => {
    if (marketFilter === 'global') return { global: globalFaqSections, norway: [] };
    if (marketFilter === 'norway') return { global: [], norway: norwayFaqSections };
    return { global: globalFaqSections, norway: norwayFaqSections };
  }, [marketFilter]);

  const totalQuestionsCount = globalFaqSections.reduce((acc, s) => acc + s.items.length, 0) +
    norwayFaqSections.reduce((acc, s) => acc + s.items.length, 0);

  return (
    <main className="min-h-screen bg-[#05080A] text-white selection:bg-[#00DF81] selection:text-black">
      <CustomCursor />
      <Navbar onOpenSalesModal={() => setIsSalesModalOpen(true)} />

      {/* ── JSON-LD Structured Data Block 1: Global FAQPage Schema ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: globalFaqSchemaJson }}
      />

      {/* ── JSON-LD Structured Data Block 2: Norway Expansion FAQPage Schema ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: norwayFaqSchemaJson }}
      />

      {/* Hero Section */}
      <section className="pt-36 pb-12 relative overflow-hidden bg-[#05080A]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#00DF81]/5 rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          <div className="inline-flex items-center space-x-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1 text-xs font-mono font-medium text-[#00DF81]">
            <HelpCircle className="h-3.5 w-3.5" />
            <span>{'// KNOWLEDGE & PRICING FAQ HUB'}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Got Questions?{' '}
            <span className="text-gradient-green">We&apos;ve Got Answers.</span>
          </h1>

          {/* Prompt Required 1-Sentence Intro Context Paragraph */}
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed font-normal">
            Answers to the questions we hear most often from businesses in Malta and across Europe about websites, apps, SEO and AI search.
          </p>

          {/* Market Focus Selector Pills */}
          <div className="pt-4 flex flex-wrap justify-center items-center gap-2 sm:gap-3">
            <button
              onClick={() => setMarketFilter('all')}
              className={`inline-flex items-center space-x-2 rounded-full px-5 py-2.5 text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                marketFilter === 'all'
                  ? 'bg-[#00DF81] text-[#05080A] shadow-lg shadow-[#00DF81]/25 ring-2 ring-[#00DF81]/40 font-bold'
                  : 'border border-white/10 bg-white/[0.03] text-gray-300 hover:bg-white/[0.06] hover:text-white'
              }`}
            >
              <Globe className="w-4 h-4" />
              <span>All Questions ({totalQuestionsCount})</span>
            </button>

            <button
              onClick={() => setMarketFilter('global')}
              className={`inline-flex items-center space-x-2 rounded-full px-5 py-2.5 text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                marketFilter === 'global'
                  ? 'bg-[#00DF81] text-[#05080A] shadow-lg shadow-[#00DF81]/25 ring-2 ring-[#00DF81]/40 font-bold'
                  : 'border border-white/10 bg-white/[0.03] text-gray-300 hover:bg-white/[0.06] hover:text-white'
              }`}
            >
              <span>🌍 Global &amp; Europe (18)</span>
            </button>

            <button
              onClick={() => setMarketFilter('norway')}
              className={`inline-flex items-center space-x-2 rounded-full px-5 py-2.5 text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                marketFilter === 'norway'
                  ? 'bg-[#00DF81] text-[#05080A] shadow-lg shadow-[#00DF81]/25 ring-2 ring-[#00DF81]/40 font-bold'
                  : 'border border-white/10 bg-white/[0.03] text-gray-300 hover:bg-white/[0.06] hover:text-white'
              }`}
            >
              <MapPin className="w-4 h-4 text-[#00DF81]" />
              <span>🇳🇴 Norway / Norge (56)</span>
            </button>
          </div>

          {/* Search Filter Bar */}
          <div className="pt-4 max-w-lg mx-auto">
            <div className="relative flex items-center">
              <Search className="absolute left-4 w-4 h-4 text-gray-400 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by topic, keyword (e.g. Vipps, NOK, MVA, SEO)..."
                className="w-full rounded-full border border-white/10 bg-white/[0.03] pl-11 pr-4 py-3 text-xs sm:text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#00DF81]/60 focus:ring-1 focus:ring-[#00DF81]/40 transition-all backdrop-blur-md"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 text-xs font-mono text-gray-400 hover:text-white"
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Main FAQ Content Body */}
      <section className="pb-24 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Controls Bar */}
          <div className="flex items-center justify-between border-b border-white/[0.08] pb-4 text-xs font-mono text-gray-400">
            <span>
              {searchQuery ? `Searching for "${searchQuery}"` : `${totalQuestionsCount} Frequently Asked Questions`}
            </span>
            <div className="flex items-center space-x-4">
              <button
                onClick={expandAll}
                className="hover:text-[#00DF81] transition-colors cursor-pointer"
              >
                [ Expand All ]
              </button>
              <span>•</span>
              <button
                onClick={collapseAll}
                className="hover:text-[#00DF81] transition-colors cursor-pointer"
              >
                [ Collapse All ]
              </button>
            </div>
          </div>

          {/* ══════════════════════════════════════════════════════════════════════════
              PART 1: GLOBAL & EUROPE CORE FAQS (4 Categories, 18 Questions)
             ══════════════════════════════════════════════════════════════════════════ */}
          {displayedSections.global.length > 0 && (
            <div className="space-y-14">
              {marketFilter === 'all' && (
                <div className="flex items-center space-x-3 pt-2">
                  <div className="h-px bg-white/10 flex-1" />
                  <span className="text-xs font-mono text-[#00DF81] uppercase tracking-widest px-3 py-1 rounded-full border border-[#00DF81]/30 bg-[#00DF81]/5">
                    GLOBAL &amp; EUROPEAN CORE FAQS
                  </span>
                  <div className="h-px bg-white/10 flex-1" />
                </div>
              )}

              {displayedSections.global.map((categorySection, catIdx) => {
                const filteredItems = searchQuery
                  ? categorySection.items.filter(
                      (item) =>
                        item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        item.answer.toLowerCase().includes(searchQuery.toLowerCase())
                    )
                  : categorySection.items;

                if (filteredItems.length === 0) return null;

                return (
                  <section
                    key={categorySection.id}
                    id={categorySection.id}
                    lang={categorySection.lang}
                    className="scroll-mt-28 space-y-6"
                  >
                    {/* Category Header as <h2> per SEO requirement */}
                    <div className="space-y-2 border-b border-white/[0.08] pb-4">
                      <span className="text-xs font-mono font-semibold text-[#00DF81]">
                        {categorySection.badge}
                      </span>
                      <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                        {categorySection.category}
                      </h2>
                      <p className="text-xs sm:text-sm text-gray-400">
                        {categorySection.description}
                      </p>
                    </div>

                    {/* Category Accordion / Static Q&A List */}
                    <div className="space-y-4">
                      {filteredItems.map((item, itemIdx) => {
                        const key = `global-${catIdx}-${itemIdx}`;
                        const isOpen = openItems.has(key) || Boolean(searchQuery);

                        return (
                          <div
                            key={key}
                            lang={item.lang || categorySection.lang}
                            className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                              isOpen
                                ? 'border-[#00DF81]/40 bg-[#080C11] shadow-xl shadow-black/40'
                                : 'border-white/[0.08] bg-[#080C11]/60 hover:border-white/20'
                            }`}
                          >
                            <button
                              type="button"
                              onClick={() => toggleItem(key)}
                              className="flex w-full items-center justify-between p-5 sm:p-6 text-left cursor-pointer group"
                              aria-expanded={isOpen}
                            >
                              {/* Question as <h3> per SEO requirement */}
                              <h3
                                className={`text-base sm:text-lg font-bold pr-4 transition-colors leading-snug ${
                                  isOpen
                                    ? 'text-[#00DF81]'
                                    : 'text-white group-hover:text-[#00DF81]'
                                }`}
                              >
                                {item.question}
                              </h3>
                              <div
                                className={`h-8 w-8 rounded-full flex items-center justify-center shrink-0 border transition-all duration-300 ${
                                  isOpen
                                    ? 'border-[#00DF81]/30 bg-[#00DF81]/10 text-[#00DF81] rotate-180'
                                    : 'border-white/10 bg-white/[0.03] text-gray-400 group-hover:text-white group-hover:border-white/20'
                                }`}
                              >
                                <ChevronDown className="h-4 w-4" />
                              </div>
                            </button>

                            {/* Answer paragraph always present in DOM for Google & AI crawlers */}
                            <div
                              className={`transition-all duration-300 ease-in-out px-5 sm:px-6 overflow-hidden ${
                                isOpen
                                  ? 'max-h-[800px] opacity-100 pb-6'
                                  : 'max-h-0 opacity-0 pb-0'
                              }`}
                            >
                              <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-normal border-t border-white/[0.06] pt-4">
                                {item.answer}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </section>
                );
              })}
            </div>
          )}

          {/* ══════════════════════════════════════════════════════════════════════════
              PART 2: NORWAY MARKET EXPANSION FAQS (56 Questions in English & Norsk)
             ══════════════════════════════════════════════════════════════════════════ */}
          {displayedSections.norway.length > 0 && (
            <div className="space-y-14 pt-4">
              <div className="flex items-center space-x-3 pt-4">
                <div className="h-px bg-white/10 flex-1" />
                <span className="text-xs font-mono text-[#00DF81] uppercase tracking-widest px-3 py-1 rounded-full border border-[#00DF81]/30 bg-[#00DF81]/5">
                  🇳🇴 NORWAY EXPANSION &amp; NORSK MARKED
                </span>
                <div className="h-px bg-white/10 flex-1" />
              </div>

              {/* Norwegian Exchange Rate Transparency Notice */}
              <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-4 text-xs font-mono text-gray-400 flex items-start space-x-3">
                <span className="text-[#00DF81] font-bold shrink-0">ℹ️ NOTE:</span>
                <p>
                  NOK figures are approximate conversions from EUR (e.g. €300 ≈ 3,400 NOK; €600 ≈ 6,900 NOK; €800 ≈ 9,000 NOK) and move with current exchange rates. Invoicing terms and MVA (25%) are confirmed upfront during discovery.
                </p>
              </div>

              {displayedSections.norway.map((categorySection, catIdx) => {
                const filteredItems = searchQuery
                  ? categorySection.items.filter(
                      (item) =>
                        item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        item.answer.toLowerCase().includes(searchQuery.toLowerCase())
                    )
                  : categorySection.items;

                if (filteredItems.length === 0) return null;

                return (
                  <section
                    key={categorySection.id}
                    id={categorySection.id}
                    lang={categorySection.lang}
                    className="scroll-mt-28 space-y-6"
                  >
                    {/* Category Header as <h2> per SEO requirement */}
                    <div className="space-y-2 border-b border-white/[0.08] pb-4">
                      <div className="flex items-center space-x-2">
                        <span className="text-xs font-mono font-semibold text-[#00DF81]">
                          {categorySection.badge}
                        </span>
                        {categorySection.lang === 'no' && (
                          <span className="rounded bg-blue-900/40 border border-blue-500/30 px-2 py-0.2 text-[10px] font-mono text-blue-300">
                            NORSK
                          </span>
                        )}
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                        {categorySection.category}
                      </h2>
                      <p className="text-xs sm:text-sm text-gray-400">
                        {categorySection.description}
                      </p>
                    </div>

                    {/* Category Accordion / Static Q&A List */}
                    <div className="space-y-4">
                      {filteredItems.map((item, itemIdx) => {
                        const key = `norway-${catIdx}-${itemIdx}`;
                        const isOpen = openItems.has(key) || Boolean(searchQuery);

                        return (
                          <div
                            key={key}
                            lang={item.lang || categorySection.lang}
                            className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                              isOpen
                                ? 'border-[#00DF81]/40 bg-[#080C11] shadow-xl shadow-black/40'
                                : 'border-white/[0.08] bg-[#080C11]/60 hover:border-white/20'
                            }`}
                          >
                            <button
                              type="button"
                              onClick={() => toggleItem(key)}
                              className="flex w-full items-center justify-between p-5 sm:p-6 text-left cursor-pointer group"
                              aria-expanded={isOpen}
                            >
                              {/* Question as <h3> per SEO requirement */}
                              <h3
                                className={`text-base sm:text-lg font-bold pr-4 transition-colors leading-snug ${
                                  isOpen
                                    ? 'text-[#00DF81]'
                                    : 'text-white group-hover:text-[#00DF81]'
                                }`}
                              >
                                {item.question}
                              </h3>
                              <div
                                className={`h-8 w-8 rounded-full flex items-center justify-center shrink-0 border transition-all duration-300 ${
                                  isOpen
                                    ? 'border-[#00DF81]/30 bg-[#00DF81]/10 text-[#00DF81] rotate-180'
                                    : 'border-white/10 bg-white/[0.03] text-gray-400 group-hover:text-white group-hover:border-white/20'
                                }`}
                              >
                                <ChevronDown className="h-4 w-4" />
                              </div>
                            </button>

                            {/* Answer paragraph always present in DOM for Google & AI crawlers */}
                            <div
                              className={`transition-all duration-300 ease-in-out px-5 sm:px-6 overflow-hidden ${
                                isOpen
                                  ? 'max-h-[800px] opacity-100 pb-6'
                                  : 'max-h-0 opacity-0 pb-0'
                              }`}
                            >
                              <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-normal border-t border-white/[0.06] pt-4">
                                {item.answer}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </section>
                );
              })}
            </div>
          )}

          {/* Quick Value Metrics */}
          <div className="pt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { label: 'Starting Price', value: '€300 / 3,400 NOK' },
              { label: 'Time Zone', value: 'CET (Same as Norway)' },
              { label: 'Code Ownership', value: '100% Client Owned' },
              { label: 'GEO & LLM Standard', value: 'Vipps & LLM Ready' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/[0.08] bg-[#080C11] p-5 text-center space-y-1"
              >
                <p className="text-lg sm:text-xl font-extrabold text-[#00DF81]">
                  {stat.value}
                </p>
                <p className="text-[10px] sm:text-xs text-gray-400 font-mono uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 border-t border-white/[0.08] bg-[#05080A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center space-x-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1 text-xs font-mono font-medium text-[#00DF81]">
            <Sparkles className="h-3.5 w-3.5" />
            <span>{'// DIRECT DISCOVERY CONSULTATION'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Ready to Discuss Your Project in Norway or Worldwide?
          </h2>
          <p className="text-sm sm:text-base text-gray-300 max-w-lg mx-auto leading-relaxed">
            Connect directly with our senior engineer on WhatsApp for an immediate, transparent estimate in NOK or EUR.
          </p>

          <div className="pt-3 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => setIsSalesModalOpen(true)}
              className="inline-flex items-center space-x-2 rounded-full bg-[#00DF81] px-8 py-4 text-xs sm:text-sm font-bold text-[#05080A] hover:bg-[#00F58D] transition-all shadow-xl shadow-[#00DF81]/25 hover:scale-105 cursor-pointer"
            >
              <MessageSquare className="h-4 w-4" />
              <span>Chat on WhatsApp</span>
            </button>
            <Link
              href="/pricing"
              className="inline-flex items-center space-x-2 rounded-full border border-white/20 bg-white/[0.03] px-8 py-4 text-xs sm:text-sm font-semibold text-white hover:bg-white/10 hover:border-white/30 transition-all"
            >
              <Layers className="h-4 w-4" />
              <span>View All Pricing Plans</span>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center space-x-2 rounded-full border border-white/10 bg-white/[0.02] px-8 py-4 text-xs sm:text-sm font-semibold text-gray-300 hover:text-white hover:bg-white/[0.06] transition-all"
            >
              <span>Submit Project Brief</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
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
