'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';
import WhatsAppModal from '@/components/WhatsAppModal';
import WhatWeDo from '@/components/WhatWeDo';
import Process from '@/components/Process';
import { PricingPackage } from '@/data/packages';
import { Sparkles, ArrowRight, CheckCircle2, Code2, Smartphone, TrendingUp, ShieldCheck, Zap, Layers } from 'lucide-react';

export default function ServicesPage() {
  const [isSalesModalOpen, setIsSalesModalOpen] = useState(false);
  const [selectedPackageForModal, setSelectedPackageForModal] = useState<PricingPackage | null>(null);

  const handleSelectService = (serviceName: string) => {
    setSelectedPackageForModal({
      id: 'service-inquiry',
      category: 'website',
      title: serviceName,
      price: 'Starting from €300',
      description: `Detailed consultation for ${serviceName}`,
      features: [],
      whatsAppMessage: `Hello ZURVIX, I am interested in your ${serviceName} capabilities. I would like to schedule a discovery call.`
    });
    setIsSalesModalOpen(true);
  };

  return (
    <main className="min-h-screen bg-[#05080A] text-white">
      <CustomCursor />
      <Navbar onOpenSalesModal={() => setIsSalesModalOpen(true)} />

      {/* Page Header */}
      <section className="pt-36 pb-16 relative overflow-hidden bg-[#05080A]">
        {/* Subtle Cosmic Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#00DF81]/5 rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          <div className="inline-flex items-center space-x-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1 text-xs font-mono font-medium text-[#00DF81]">
            <span>// SERVICES &amp; CAPABILITIES</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight max-w-4xl mx-auto leading-tight">
            End-to-End Digital Engineering &amp; <span className="text-gradient-green">Growth Systems.</span>
          </h1>

          <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto leading-relaxed">
            From modern UI/UX design and scalable full-stack code to AI search optimization and 24/7 maintenance, we deliver full-cycle product excellence.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/pricing"
              className="inline-flex items-center space-x-2 rounded-full bg-[#00DF81] px-7 py-3.5 text-xs sm:text-sm font-bold text-[#05080A] hover:bg-[#00F58D] transition-all shadow-lg shadow-[#00DF81]/25 hover:scale-[1.02]"
            >
              <span>Explore Starting Packages</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center space-x-2 rounded-full border border-white/15 bg-white/[0.03] px-6 py-3.5 text-xs sm:text-sm font-semibold text-white hover:bg-white/10 hover:border-white/30 transition-all"
            >
              <span>View Case Studies</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Core Services Breakdown */}
      <WhatWeDo onSelectService={handleSelectService} />

      {/* 6-Step Workflow */}
      <Process />

      {/* Bottom CTA Banner */}
      <section className="py-24 bg-[#05080A] border-t border-white/[0.06]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center space-x-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1 text-xs font-mono font-medium text-[#00DF81]">
            <span>// ARCHITECTURAL CONSULTATION</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Have a Specific Architectural Requirement?
          </h2>
          <p className="text-sm sm:text-base text-gray-400 max-w-xl mx-auto">
            Our senior engineers build custom integrations, API backends, AI agents, and mobile apps tailored to your exact business logic.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center space-x-2 rounded-full bg-[#00DF81] px-8 py-4 text-xs sm:text-sm font-bold text-[#05080A] hover:bg-[#00F58D] transition-all shadow-xl shadow-[#00DF81]/25 hover:scale-105"
            >
              <span>Request Custom Architecture Proposal</span>
              <ArrowRight className="h-4 w-4" />
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
