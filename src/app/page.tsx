'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import WhatWeDo from '@/components/WhatWeDo';
import Pricing from '@/components/Pricing';
import CompanyDetails from '@/components/CompanyDetails';
import FeaturedBlogs from '@/components/FeaturedBlogs';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';
import WhatsAppModal from '@/components/WhatsAppModal';
import CustomCursor from '@/components/CustomCursor';
import { PricingPackage } from '@/data/packages';
import { ArrowRight, MessageSquare } from 'lucide-react';

export default function HomePage() {
  const [isSalesModalOpen, setIsSalesModalOpen] = useState(false);
  const [selectedPackageForModal, setSelectedPackageForModal] = useState<PricingPackage | null>(null);

  const handleOpenGeneralSales = () => {
    setSelectedPackageForModal(null);
    setIsSalesModalOpen(true);
  };

  const handleSelectPackage = (pkg: PricingPackage) => {
    setSelectedPackageForModal(pkg);
    setIsSalesModalOpen(true);
  };

  const handleSelectService = (serviceName: string) => {
    window.open(
      `https://wa.me/35699784477?text=${encodeURIComponent(
        `Hello ZURVIX, I would like to discuss your ${serviceName} services.`
      )}`,
      '_blank'
    );
  };

  return (
    <main className="min-h-screen bg-[#05080A] text-white selection:bg-[#00DF81] selection:text-black">
      {/* Custom Trailing Ring Cursor */}
      <CustomCursor />
      
      {/* Global Navbar */}
      <Navbar onOpenSalesModal={handleOpenGeneralSales} />

      {/* 1. Minimalist Hero Section with 3D Motion Graphics & Tech Stack */}
      <HeroSection onStartProject={handleOpenGeneralSales} />

      {/* 2. What We Do (Design, Development, AI & Marketing, Maintenance) */}
      <WhatWeDo onSelectService={handleSelectService} />

      {/* 3. Transparent Pricing & Elite Bundles */}
      <Pricing onSelectPackage={handleSelectPackage} />

      {/* 4. Company Details, Metrics & Founder Editorial */}
      <CompanyDetails />

      {/* 5. Knowledge & Insights / Blogs */}
      <FeaturedBlogs />

      {/* 6. Newsletter Subscription */}
      <Newsletter />

      {/* 7. Minimalist Final Call To Action */}
      <section className="py-24 relative overflow-hidden bg-[#05080A] border-t border-white/[0.06]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
          <div className="inline-flex items-center space-x-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1 text-xs font-mono font-medium text-[#00DF81]">
            <span>{"// LET'S CONNECT"}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Ready to build your <span className="text-gradient-green">next digital product?</span>
          </h2>

          <p className="text-sm sm:text-base text-gray-400 max-w-lg mx-auto">
            Connect directly with our engineering team on WhatsApp for an immediate discovery consultation.
          </p>

          <div className="pt-3 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={handleOpenGeneralSales}
              className="inline-flex items-center space-x-2 rounded-full bg-[#00DF81] px-8 py-4 text-xs sm:text-sm font-bold text-[#05080A] hover:bg-[#00F58D] transition-all shadow-xl shadow-[#00DF81]/25 hover:scale-105 cursor-pointer"
            >
              <MessageSquare className="h-4 w-4" />
              <span>Talk to Sales on WhatsApp</span>
            </button>
            <Link
              href="/contact"
              className="inline-flex items-center space-x-2 rounded-full border border-white/20 bg-white/[0.03] px-8 py-4 text-xs sm:text-sm font-semibold text-white hover:bg-white/10 hover:border-white/30 transition-all"
            >
              <span>Send Project Brief Form</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Global Footer */}
      <Footer />

      {/* Global WhatsApp Sales Modal */}
      <WhatsAppModal
        isOpen={isSalesModalOpen}
        onClose={() => setIsSalesModalOpen(false)}
        selectedPackage={selectedPackageForModal}
      />
    </main>
  );
}
