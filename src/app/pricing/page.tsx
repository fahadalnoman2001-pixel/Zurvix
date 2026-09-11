'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';
import WhatsAppModal from '@/components/WhatsAppModal';
import Pricing from '@/components/Pricing';
import { PricingPackage } from '@/data/packages';
import { ArrowRight } from 'lucide-react';

export default function PricingPage() {
  const [isSalesModalOpen, setIsSalesModalOpen] = useState(false);
  const [selectedPackageForModal, setSelectedPackageForModal] = useState<PricingPackage | null>(null);

  const handleSelectPackage = (pkg: PricingPackage) => {
    setSelectedPackageForModal(pkg);
    setIsSalesModalOpen(true);
  };

  const faqs = [
    {
      q: 'Do you offer a website-only package?',
      a: 'Yes. Our STARTER Website package starts from €300 for businesses needing a fast, professional, high-converting digital presence (up to ~5 pages, mobile-responsive, contact forms, SEO setup, and free domain/hosting for year 1) without a mobile app.'
    },
    {
      q: 'Do you build ecommerce stores?',
      a: 'Yes. Our ECOMMERCE package starting from €600 includes complete store setup on Shopify, WooCommerce, or custom Laravel with product catalog structure (up to ~30 SKUs), secure payment gateway integrations (Stripe, PayPal), and mobile-optimized checkout.'
    },
    {
      q: 'Why are packages listed as "Starting from"?',
      a: 'Every business has distinct requirements. Our starting prices provide high-quality foundational builds with standard scopes (e.g. domain, hosting, responsive layouts), while larger multi-vendor or high-traffic apps are quoted transparently based on custom integrations.'
    },
    {
      q: 'How does the monthly maintenance plan work?',
      a: 'Our €200/month plan includes 24/7 uptime monitoring, daily cloud backups, weekly security patching, performance optimization, and dedicated hours for content and code updates.'
    },
    {
      q: 'Can I bundle a website and mobile app together?',
      a: 'Yes! Our ELITE packages (€800 and €1,000) are explicitly architected as all-in-one bundles that unify custom web platforms, iOS/Android cross-platform apps (via Flutter), and digital marketing setups.'
    },
    {
      q: 'What is included in the WhatsApp consultation?',
      a: 'You get a direct 1-on-1 strategy conversation with our founder or lead technical architect to clarify your project timeline, feature roadmap, and exact cost without any sales pressure.'
    }
  ];

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
            <span>{'// TRANSPARENT VALUE MATRIX'}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight max-w-4xl mx-auto leading-tight">
            Transparent Pricing.{' '}
            <span className="text-gradient-green">No Hidden Surprises.</span>
          </h1>

          <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Enterprise craftsmanship with accessible entry pricing. Choose a pre-configured tier or customize a bespoke digital roadmap.
          </p>
        </div>
      </section>

      {/* Full Pricing System */}
      <Pricing onSelectPackage={handleSelectPackage} showHeader={false} />

      {/* Pricing FAQ Section */}
      <section className="py-24 bg-[#05080A] border-t border-white/[0.06]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center space-x-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1 text-xs font-mono font-medium text-[#00DF81]">
              <span>{'// FREQUENTLY ASKED QUESTIONS'}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Got Questions? <span className="text-gradient-green">We Have Answers.</span>
            </h2>
            <p className="text-sm text-gray-400">
              Clear, honest details to help you choose the right tier for your product.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-3xl border border-white/[0.08] bg-[#080C11] p-7 sm:p-8 space-y-3 transition-all duration-300 hover:border-[#00DF81]/30 hover:bg-[#0A0F16]"
              >
                <h3 className="text-base font-bold text-white">
                  {faq.q}
                </h3>
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>

          {/* Contextual Link to Full FAQ Page */}
          <div className="mt-12 text-center">
            <Link
              href="/faq"
              className="inline-flex items-center space-x-2 rounded-full border border-white/10 bg-white/[0.03] px-6 py-3.5 text-xs sm:text-sm font-semibold text-white hover:bg-white/[0.08] hover:border-[#00DF81]/40 hover:text-[#00DF81] transition-all group"
            >
              <span>See All 18 Website, App &amp; SEO Pricing FAQs</span>
              <ArrowRight className="h-4 w-4 text-[#00DF81] transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />

      <WhatsAppModal
        isOpen={isSalesModalOpen}
        onClose={() => setIsSalesModalOpen(false)}
        selectedPackage={selectedPackageForModal}
      />
    </main>
  );
}
