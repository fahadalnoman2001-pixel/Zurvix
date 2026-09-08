'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';
import WhatsAppModal from '@/components/WhatsAppModal';
import Portfolio from '@/components/Portfolio';
import { PricingPackage } from '@/data/packages';
import { Sparkles, ArrowRight, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';

export default function PortfolioPage() {
  const [isSalesModalOpen, setIsSalesModalOpen] = useState(false);
  const [selectedPackageForModal, setSelectedPackageForModal] = useState<PricingPackage | null>(null);

  const handleProjectInquiry = (projectName: string) => {
    setSelectedPackageForModal({
      id: 'project-inquiry',
      category: 'website',
      title: `Project: ${projectName}`,
      price: 'Custom Scope',
      description: `Inquiry inspired by ${projectName} showcase.`,
      features: [],
      whatsAppMessage: `Hello ZURVIX, I was exploring your portfolio and was impressed by the ${projectName} showcase. I would like to discuss building something similar for my business.`
    });
    setIsSalesModalOpen(true);
  };

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
            <span>// CASE STUDIES &amp; DELIVERED WORK</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight max-w-4xl mx-auto leading-tight">
            Craftsmanship That Drives <span className="text-gradient-green">Measurable ROI.</span>
          </h1>

          <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Browse our complete portfolio of web applications, custom ecommerce stores, cross-platform mobile apps, and growth campaigns across 20+ brands.
          </p>
        </div>
      </section>

      {/* Full Filterable Portfolio */}
      <Portfolio onOpenProjectInquiry={handleProjectInquiry} />

      {/* Conversion Banner */}
      <section className="py-24 bg-[#05080A] border-t border-white/[0.06]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center space-x-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1 text-xs font-mono font-medium text-[#00DF81]">
            <span>// LET&apos;S COLLABORATE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Ready to Build Your Next High-Impact Digital Product?
          </h2>
          <p className="text-sm sm:text-base text-gray-400 max-w-xl mx-auto">
            From initial wireframes to multi-platform deployment, ZURVIX turns complex requirements into elegant reality.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center space-x-2 rounded-full bg-[#00DF81] px-8 py-4 text-xs sm:text-sm font-bold text-[#05080A] hover:bg-[#00F58D] transition-all shadow-xl shadow-[#00DF81]/25 hover:scale-105"
            >
              <span>Start Your Project</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center space-x-2 rounded-full border border-white/15 bg-white/[0.03] px-7 py-4 text-xs sm:text-sm font-semibold text-white hover:bg-white/10 hover:border-white/30 transition-all"
            >
              <span>View Packages &amp; Pricing</span>
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
