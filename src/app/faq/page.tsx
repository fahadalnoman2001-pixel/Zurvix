'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';
import WhatsAppModal from '@/components/WhatsAppModal';
import { ChevronDown, HelpCircle, ArrowRight, MessageSquare } from 'lucide-react';

// ── FAQ Data ──
interface FaqItem {
  question: string;
  answer: string;
}

interface FaqCategory {
  title: string;
  icon: string;
  items: FaqItem[];
}

const faqCategories: FaqCategory[] = [
  {
    title: 'General',
    icon: '🏢',
    items: [
      {
        question: 'What is ZURVIX?',
        answer: 'ZURVIX is a premier digital agency and technology partner specializing in custom website & mobile app design, full-stack development (Next.js, Laravel, Flutter), ecommerce platforms, SEO, Generative Engine Optimization (GEO), and LLM AI search optimization. We provide end-to-end digital solutions for businesses of all sizes.',
      },
      {
        question: 'Who is behind ZURVIX?',
        answer: 'ZURVIX was founded by Fahad Al Noman, a senior technologist with 7+ years of hands-on experience in full-stack web & mobile development, UI/UX design, and digital marketing. Every project is personally architected and quality-reviewed by Fahad.',
      },
      {
        question: 'Where is ZURVIX based?',
        answer: 'ZURVIX operates globally and serves clients worldwide. Our primary communication channels are WhatsApp (+356 99784477) and email (hello@zurvix.com), ensuring fast, direct access regardless of your timezone.',
      },
      {
        question: 'What industries does ZURVIX serve?',
        answer: 'We serve all industries including ecommerce, SaaS, healthcare, real estate, education, hospitality, professional services, startups, and enterprise organizations. Our solutions are tailored to each industry\'s unique requirements.',
      },
    ],
  },
  {
    title: 'Services',
    icon: '⚙️',
    items: [
      {
        question: 'What services does ZURVIX offer?',
        answer: 'We offer a comprehensive suite of digital services: UI/UX Design, Website Development (Next.js, Laravel, WordPress), Mobile App Development (Flutter, React Native), Ecommerce Development, SEO + GEO + LLM AI Search Optimization, Social Media Marketing, and 24/7 Website Maintenance.',
      },
      {
        question: 'Does ZURVIX work with startups and small businesses?',
        answer: 'Absolutely! We work with solo entrepreneurs, startups, small businesses, and enterprises alike. Our packages start from just €300, making professional digital products accessible to businesses at any stage of growth.',
      },
      {
        question: 'What technologies does ZURVIX use?',
        answer: 'Our core stack includes Next.js (React), Laravel (PHP), Flutter, React Native, TypeScript, Tailwind CSS, PostgreSQL, MySQL, Firebase, Supabase, AWS, Vercel, and Docker. We select the optimal technology for each project\'s specific requirements.',
      },
      {
        question: 'Can ZURVIX build custom AI-powered features?',
        answer: 'Yes. We integrate AI capabilities including chatbots, recommendation engines, content generation, automated workflows, and custom LLM integrations using OpenAI API, Google Gemini, and other AI platforms.',
      },
      {
        question: 'Does ZURVIX provide hosting and domain setup?',
        answer: 'Yes. All our website and app packages include free domain registration guidance and high-performance cloud hosting setup. We handle the entire technical infrastructure so you can focus on your business.',
      },
    ],
  },
  {
    title: 'Pricing & Payments',
    icon: '💰',
    items: [
      {
        question: 'How does ZURVIX pricing work?',
        answer: 'Our packages have transparent starting prices — Business Website from €300, Custom Website from €350, Ecommerce from €500, Mobile App from €700. Final pricing depends on project complexity, features, and scope. We provide a detailed quote after understanding your requirements.',
      },
      {
        question: 'What payment methods does ZURVIX accept?',
        answer: 'We accept bank transfers, PayPal, Wise (TransferWise), and major credit/debit cards. Payment schedules are typically structured as milestone-based installments for larger projects.',
      },
      {
        question: 'Is there a refund policy?',
        answer: 'Work completed up to each milestone is non-refundable as it represents delivered intellectual property. However, we offer unlimited revisions within scope to ensure you\'re 100% satisfied before each milestone sign-off.',
      },
      {
        question: 'Are there any hidden fees?',
        answer: 'No hidden fees. The quoted price covers everything discussed in the project scope. Third-party costs (domain registration, premium hosting tiers, app store fees) are transparently communicated upfront.',
      },
    ],
  },
  {
    title: 'Development Process',
    icon: '🚀',
    items: [
      {
        question: 'How long does a typical project take?',
        answer: 'Business websites typically launch in 1–2 weeks. Custom platforms and web applications take 2–6 weeks. Mobile apps take 4–8 weeks. Marketing campaigns are ongoing monthly retainers. Exact timelines are provided after the discovery consultation.',
      },
      {
        question: 'How does communication work during a project?',
        answer: 'We communicate directly via WhatsApp for real-time updates and decisions. You\'ll have direct access to the founder and lead engineer. We provide regular progress updates, preview links, and feedback rounds throughout the development process.',
      },
      {
        question: 'How many revisions are included?',
        answer: 'We include multiple revision rounds at each project milestone. Our goal is to get it right — we iterate until you\'re completely satisfied with the design and functionality before moving to the next phase.',
      },
      {
        question: 'Do I own the source code after project completion?',
        answer: 'Yes, absolutely. Upon full payment, you receive complete ownership of all source code, design files, assets, and documentation created for your project. You have full freedom to modify, extend, or migrate your project.',
      },
      {
        question: 'Can ZURVIX work with my existing website or app?',
        answer: 'Yes. We regularly take over, redesign, rebuild, or optimize existing digital products. We\'ll conduct a thorough audit of your current platform and recommend the best path forward.',
      },
    ],
  },
  {
    title: 'SEO & AI Search',
    icon: '🤖',
    items: [
      {
        question: 'What is GEO (Generative Engine Optimization)?',
        answer: 'GEO is the practice of optimizing your digital presence so that AI-powered search engines — like ChatGPT, Claude, Perplexity, and Google Gemini — accurately cite and recommend your business in their responses. It goes beyond traditional SEO to ensure your brand appears in AI-generated answers.',
      },
      {
        question: 'How does LLM (AI Search) optimization work?',
        answer: 'We structure your content, metadata, and digital footprint so that large language models understand your brand, services, and value proposition. This includes creating llm.txt files, structured data markup, authoritative content clusters, and entity-level knowledge graph engineering.',
      },
      {
        question: 'Does ZURVIX provide ongoing SEO services?',
        answer: 'Yes. Our SEO + GEO + LLM optimization package starts from €500/month and includes technical SEO audits, content strategy, backlink building, keyword research, schema markup, AI search optimization, and monthly performance reporting.',
      },
      {
        question: 'Will my website rank on Google?',
        answer: 'While no one can guarantee specific rankings, we implement comprehensive technical SEO, on-page optimization, content strategy, and structured data that significantly improve your search visibility. Our GEO strategies also ensure your brand appears in AI search results.',
      },
    ],
  },
  {
    title: 'Support & Maintenance',
    icon: '🛡️',
    items: [
      {
        question: 'Does ZURVIX provide post-launch support?',
        answer: 'Yes. Every project includes a complimentary post-launch support period. For ongoing support, our Website Maintenance plan (from €200/month) provides 24/7 monitoring, security scans, backups, bug fixes, and priority technical support.',
      },
      {
        question: 'What does the maintenance plan include?',
        answer: '24/7 automated uptime monitoring, weekly security scans, Core Web Vitals optimization, daily cloud backups, priority bug fixes, framework & dependency upgrades, monthly content changes, and direct WhatsApp & email technical support.',
      },
      {
        question: 'How do I get in touch for urgent issues?',
        answer: 'Maintenance clients have direct WhatsApp access (+356 99784477) for urgent issues. We aim to respond within 1 hour during business hours and within 4 hours for after-hours emergencies.',
      },
      {
        question: 'Can I upgrade my website or app later?',
        answer: 'Absolutely. All our projects are built with scalable architectures designed for growth. We can add new features, integrate third-party services, expand to new platforms, or completely redesign at any time.',
      },
    ],
  },
];

// ── Flatten all Q&A for schema markup ──
const allFaqItems = faqCategories.flatMap((cat) => cat.items);

// ── JSON-LD FAQPage Schema ──
const faqSchema = {
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
};

// ── Accordion Item Component ──
function AccordionItem({ item, isOpen, onToggle }: { item: FaqItem; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border-b border-white/[0.06] last:border-b-0">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between py-5 px-1 text-left cursor-pointer group"
        aria-expanded={isOpen}
      >
        <span className={`text-sm sm:text-base font-semibold pr-4 transition-colors ${isOpen ? 'text-[#00DF81]' : 'text-white group-hover:text-[#00DF81]'}`}>
          {item.question}
        </span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 transition-transform duration-300 ${
            isOpen ? 'rotate-180 text-[#00DF81]' : 'text-gray-500 group-hover:text-[#00DF81]'
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-[500px] opacity-100 pb-5' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-sm text-gray-400 leading-relaxed px-1">
          {item.answer}
        </p>
      </div>
    </div>
  );
}

// ── Main FAQ Page ──
export default function FaqPage() {
  const [isSalesModalOpen, setIsSalesModalOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(0);
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

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

  return (
    <main className="min-h-screen bg-[#05080A] text-white selection:bg-[#00DF81] selection:text-black">
      <CustomCursor />
      <Navbar onOpenSalesModal={() => setIsSalesModalOpen(true)} />

      {/* JSON-LD FAQPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Header */}
      <section className="pt-36 pb-16 relative overflow-hidden bg-[#05080A]">
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

          <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about our services, pricing, process, and support. Can&apos;t find what you&apos;re looking for? Reach out to us directly.
          </p>
        </div>
      </section>

      {/* Category Tabs + Accordion */}
      <section className="pb-24 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Pills */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
            {faqCategories.map((cat, idx) => (
              <button
                key={cat.title}
                onClick={() => setActiveCategory(idx)}
                className={`inline-flex items-center space-x-2 rounded-full px-4 py-2 text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                  activeCategory === idx
                    ? 'bg-[#00DF81] text-[#05080A] shadow-lg shadow-[#00DF81]/25'
                    : 'border border-white/10 bg-white/[0.03] text-gray-400 hover:bg-white/[0.06] hover:text-white hover:border-white/20'
                }`}
              >
                <span>{cat.icon}</span>
                <span>{cat.title}</span>
              </button>
            ))}
          </div>

          {/* Active Category Accordion */}
          <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 sm:p-8 backdrop-blur-sm">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-6 flex items-center space-x-3">
              <span className="text-2xl">{faqCategories[activeCategory].icon}</span>
              <span>{faqCategories[activeCategory].title}</span>
            </h2>

            <div>
              {faqCategories[activeCategory].items.map((item, itemIdx) => {
                const key = `${activeCategory}-${itemIdx}`;
                return (
                  <AccordionItem
                    key={key}
                    item={item}
                    isOpen={openItems.has(key)}
                    onToggle={() => toggleItem(key)}
                  />
                );
              })}
            </div>
          </div>

          {/* Quick Stats */}
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { label: 'Packages From', value: '€300' },
              { label: 'Launch Time', value: '1-2 Weeks' },
              { label: 'Founder Experience', value: '7+ Years' },
              { label: 'Code Ownership', value: '100%' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-4 text-center space-y-1"
              >
                <p className="text-xl sm:text-2xl font-extrabold text-[#00DF81]">{stat.value}</p>
                <p className="text-[10px] sm:text-xs text-gray-400 font-mono uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 border-t border-white/[0.06] bg-[#05080A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center space-x-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1 text-xs font-mono font-medium text-[#00DF81]">
            <span>{'// STILL HAVE QUESTIONS?'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Let&apos;s Talk Directly
          </h2>
          <p className="text-sm sm:text-base text-gray-400 max-w-lg mx-auto">
            Connect with our founder on WhatsApp for an immediate, no-obligation discovery consultation.
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
              href="/contact"
              className="inline-flex items-center space-x-2 rounded-full border border-white/20 bg-white/[0.03] px-8 py-4 text-xs sm:text-sm font-semibold text-white hover:bg-white/10 hover:border-white/30 transition-all"
            >
              <span>Send Project Brief</span>
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
