'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';
import WhatsAppModal from '@/components/WhatsAppModal';
import {
  HelpCircle,
  ChevronDown,
  ArrowRight,
  MessageSquare,
  Sparkles,
  Layers,
} from 'lucide-react';

// ── Complete 18 FAQ Items Across 4 Strict Categories ──
export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqCategorySection {
  id: string;
  category: string;
  badge: string;
  description: string;
  items: FaqItem[];
}

export const faqCategorySections: FaqCategorySection[] = [
  {
    id: 'pricing-budget',
    category: 'Pricing & Budget',
    badge: '01 // PRICING & BUDGET',
    description: 'Clear, deliverable-based pricing with no hidden costs or recurring traps.',
    items: [
      {
        question: 'How much does a website cost in Malta?',
        answer:
          'ZURVIX websites start from €300 for a single-page or small business site, with full custom platforms typically ranging from €800–€1,500 depending on pages, integrations, and design complexity. Ecommerce and multi-language builds cost more due to payment gateway setup, product catalog structure, and additional testing. Every quote is itemized by deliverable, not a single lump sum.',
      },
      {
        question: 'How much does a mobile app cost?',
        answer:
          'Mobile app development at ZURVIX starts from €500 for a cross-platform app covering both iOS and Android, rising based on backend complexity, third-party integrations (payments, maps, push notifications), and admin panel requirements. A combined website + app bundle starts from €800.',
      },
      {
        question: 'How much does SEO cost for a small business?',
        answer:
          'SEO pricing depends on competitiveness of your market and whether it\'s a one-time technical setup or an ongoing monthly service. A technical SEO foundation (on-page optimization, schema markup, sitemap, Search Console setup) is typically a fixed one-time cost, while content and link-building work is usually billed monthly as a retainer.',
      },
      {
        question: 'Are there hidden fees or recurring costs?',
        answer:
          'No — ZURVIX publishes starting prices for every service and breaks quotes down by deliverable before work begins. The only recurring costs are optional: hosting renewal, domain renewal, and ongoing maintenance/support plans, which are quoted separately and clearly upfront.',
      },
      {
        question: 'What determines whether my project costs more or less than the starting price?',
        answer:
          'Price moves based on number of pages/screens, custom functionality (booking systems, dashboards, payment integrations), content volume you need written, and timeline urgency. A discovery call before any quote pins down these variables so the number you receive is accurate, not a placeholder.',
      },
    ],
  },
  {
    id: 'timeline-process',
    category: 'Timeline & Process',
    badge: '02 // TIMELINE & PROCESS',
    description: 'Structured 4-stage engineering workflow with milestone approvals.',
    items: [
      {
        question: 'How long does it take to build a website?',
        answer:
          'A standard business website typically takes 2–4 weeks from kickoff to launch. Ecommerce stores and custom web applications take 4–8 weeks depending on the number of integrations and content readiness on the client side.',
      },
      {
        question: 'How long does it take to build a mobile app?',
        answer:
          'A cross-platform mobile app (iOS + Android) generally takes 6–10 weeks, covering design, development, testing, and app store submission. Timelines extend for apps requiring custom backend infrastructure or complex third-party integrations like payments or real-time messaging.',
      },
      {
        question: 'What does the process look like from start to finish?',
        answer:
          'The process runs through four stages: discovery and scoping, UI/UX design, development and testing, then launch and handover. Clients review and approve work at each stage before the next begins, so there are no surprises at delivery.',
      },
      {
        question: 'Do I need to provide content, or does the agency write it?',
        answer:
          'Clients can provide their own copy and images, or ZURVIX can write website copy as part of the package. Either way, content readiness is usually the single biggest factor affecting whether a project finishes on time.',
      },
    ],
  },
  {
    id: 'ownership-tech-maintenance',
    category: 'Ownership, Tech & Maintenance',
    badge: '03 // OWNERSHIP & TECH',
    description: '100% source code ownership, zero vendor lock-in, modern scalable stack.',
    items: [
      {
        question: 'Who owns the website after it\'s built?',
        answer:
          'The client owns 100% of the source code, design files, and domain once the final payment is made — there is no vendor lock-in. This is stated explicitly in every proposal, not left as an assumption.',
      },
      {
        question: 'What happens if I want to switch developers or agencies later?',
        answer:
          'Because you own the full source code and hosting/domain access, you can move to any developer or agency at any time without needing permission or paying an exit fee. This is a standard, non-negotiable term.',
      },
      {
        question: 'Do you offer ongoing maintenance and support?',
        answer:
          'Yes — maintenance plans cover uptime monitoring, security patching, backups, and speed tuning on a monthly retainer. Support is optional, not bundled into the one-time build price, so clients only pay for it if they want it.',
      },
      {
        question: 'What platform or technology do you build on?',
        answer:
          'Websites are built on Next.js and React for speed and SEO performance, ecommerce runs on Shopify or custom Laravel-based systems depending on scale, and mobile apps use Flutter for a single cross-platform codebase covering iOS and Android. This keeps long-term maintenance costs lower than maintaining separate native codebases.',
      },
      {
        question: 'Will my website be fast and mobile-friendly?',
        answer:
          'Yes — every build is tested against Google\'s Core Web Vitals (loading speed, interactivity, visual stability) before launch, and designed mobile-first since most traffic in Malta and Europe now comes from phones.',
      },
    ],
  },
  {
    id: 'seo-geo-ai-search',
    category: 'SEO, GEO & AI Search',
    badge: '04 // SEO, GEO & AI SEARCH',
    description: 'Optimized for traditional Google rankings and direct AI citations.',
    items: [
      {
        question: 'What is the difference between SEO and GEO?',
        answer:
          'SEO (Search Engine Optimization) helps your website rank in traditional Google search results. GEO (Generative Engine Optimization) helps your business get mentioned and cited directly inside AI-generated answers from tools like ChatGPT, Perplexity, and Google AI Overviews. Both rely on the same foundation — clear, authoritative, well-structured content — but GEO adds specific formatting for AI extraction.',
      },
      {
        question: 'Why does AI search (ChatGPT, Perplexity) matter for my business?',
        answer:
          'More people are asking AI tools direct questions instead of clicking through search results, which means a business invisible to AI platforms is losing a growing share of discovery traffic. Being cited inside an AI answer builds trust with a buyer before they\'ve even visited your website.',
      },
      {
        question: 'How do you optimize a website for AI search engines?',
        answer:
          'GEO optimization includes structuring content in clear question-and-answer format, adding schema markup (FAQPage, Organization, Service) so AI systems can parse your business accurately, and publishing an llm.txt file that gives AI crawlers a direct, machine-readable summary of your site. ZURVIX implements all three as standard on every build.',
      },
      {
        question: 'How long does SEO take to show results?',
        answer:
          'Technical SEO fixes (site speed, schema, indexing) can show measurable improvement within 2–4 weeks. Competitive keyword rankings and organic traffic growth typically take 3–6 months, since Google needs to trust a site\'s authority over time — anyone promising instant top rankings is not being straight with you.',
      },
    ],
  },
];

// ── Complete 18-Question FAQPage JSON-LD Schema (Character-for-Character Identical) ──
const allFaqItems = faqCategorySections.flatMap((s) => s.items);

const faqSchemaJson = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: allFaqItems.map((item) => ({
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
  const [openItems, setOpenItems] = useState<Set<string>>(() => {
    // Open the first question of every category by default
    return new Set(['0-0', '1-0', '2-0', '3-0']);
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
    faqCategorySections.forEach((cat, catIdx) => {
      cat.items.forEach((_, itemIdx) => {
        allKeys.add(`${catIdx}-${itemIdx}`);
      });
    });
    setOpenItems(allKeys);
  };

  const collapseAll = () => {
    setOpenItems(new Set());
  };

  return (
    <main className="min-h-screen bg-[#05080A] text-white selection:bg-[#00DF81] selection:text-black">
      <CustomCursor />
      <Navbar onOpenSalesModal={() => setIsSalesModalOpen(true)} />

      {/* JSON-LD Structured Data for Google Rich Results & AI Crawlers */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: faqSchemaJson }}
      />

      {/* Hero Section */}
      <section className="pt-36 pb-14 relative overflow-hidden bg-[#05080A]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#00DF81]/5 rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          <div className="inline-flex items-center space-x-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1 text-xs font-mono font-medium text-[#00DF81]">
            <HelpCircle className="h-3.5 w-3.5" />
            <span>{'// FREQUENTLY ASKED QUESTIONS'}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Got Questions?{' '}
            <span className="text-gradient-green">We&apos;ve Got Answers.</span>
          </h1>

          {/* Prompt Required 1-Sentence Intro Context Paragraph */}
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed font-normal">
            Answers to the questions we hear most often from businesses in Malta and across Europe about websites, apps, SEO and AI search.
          </p>

          {/* Quick Anchor Navigation Bar */}
          <div className="pt-4 flex flex-wrap justify-center gap-2 sm:gap-3">
            {faqCategorySections.map((sec) => (
              <a
                key={sec.id}
                href={`#${sec.id}`}
                className="inline-flex items-center space-x-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs font-mono font-medium text-gray-300 hover:text-white hover:border-[#00DF81]/40 hover:bg-white/[0.06] transition-all"
              >
                <span>{sec.category}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Main FAQ Sections */}
      <section className="pb-24 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Controls Bar */}
          <div className="flex items-center justify-between border-b border-white/[0.08] pb-4 text-xs font-mono text-gray-400">
            <span>18 Frequently Asked Questions</span>
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

          {/* Render All 4 Categories in Exact Specified Order */}
          {faqCategorySections.map((categorySection, catIdx) => (
            <section
              key={categorySection.id}
              id={categorySection.id}
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
                {categorySection.items.map((item, itemIdx) => {
                  const key = `${catIdx}-${itemIdx}`;
                  const isOpen = openItems.has(key);

                  return (
                    <div
                      key={key}
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
          ))}

          {/* Quick Value Metrics */}
          <div className="pt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { label: 'Starting Price', value: '€300' },
              { label: 'Web Launch', value: '2-4 Weeks' },
              { label: 'Code Ownership', value: '100%' },
              { label: 'GEO & LLM Standard', value: 'Included' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/[0.08] bg-[#080C11] p-5 text-center space-y-1"
              >
                <p className="text-xl sm:text-2xl font-extrabold text-[#00DF81]">
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
            Have a Specific Question About Your Project?
          </h2>
          <p className="text-sm sm:text-base text-gray-300 max-w-lg mx-auto">
            Connect directly with our senior engineer and growth architect on WhatsApp for an immediate, transparent estimate.
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
