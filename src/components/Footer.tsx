'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MessageSquare, Mail, ArrowUp, X, Check } from 'lucide-react';
import SocialLinks from './SocialLinks';

export default function Footer() {
  const [activeLegalModal, setActiveLegalModal] = useState<'privacy' | 'terms' | 'cookies' | null>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer className="border-t border-white/[0.08] bg-[#030508] text-gray-400 text-xs relative overflow-hidden">
        {/* Glow */}
        <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[700px] h-[250px] bg-[#00DF81]/5 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-12 pb-10 sm:pb-12 border-b border-white/[0.08]">
            
            {/* Brand Column */}
            <div className="lg:col-span-4 space-y-4">
              <Link href="/" className="inline-block">
                <div className="relative h-8 sm:h-9 w-32 sm:w-36">
                  <Image
                    src="/brand/zurvix-dark-mode.png"
                    alt="ZURVIX"
                    fill
                    className="object-contain"
                  />
                </div>
              </Link>

              <p className="text-sm font-semibold text-white">
                Design. Development. Growth.
              </p>

              <p className="text-xs text-gray-400 leading-relaxed max-w-sm">
                Digital products, websites, apps and growth systems engineered for visionary modern businesses.
              </p>

              <div className="pt-2 text-xs text-gray-400 font-mono space-y-1">
                <p>Founder: <span className="text-gray-200 font-semibold">Fahad Al Noman</span> (7+ Yrs Exp)</p>
                <div className="inline-flex items-center space-x-1.5 rounded-full bg-[#00DF81]/10 border border-[#00DF81]/25 px-2.5 py-0.5 text-[11px] text-[#00DF81]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#00DF81] animate-pulse" />
                  <span>Official Domain: zurvix.com</span>
                </div>
              </div>
            </div>

            {/* Quick Links & Capabilities (2-Column Grid on Mobile for Space Efficiency) */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-6 sm:gap-8">
              {/* Navigation */}
              <div className="space-y-3">
                <p className="text-xs font-mono uppercase tracking-wider text-white">
                  // Navigation
                </p>
                <ul className="space-y-2.5 text-xs">
                  {[
                    { name: 'Home', href: '/' },
                    { name: 'Services', href: '/services' },
                    { name: 'Portfolio', href: '/portfolio' },
                    { name: 'Pricing', href: '/pricing' },
                    { name: 'About Us', href: '/about' },
                    { name: 'Blog & Guides', href: '/blog' },
                    { name: 'Contact', href: '/contact' },
                  ].map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="hover:text-[#00DF81] transition-colors inline-block py-0.5"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Capabilities */}
              <div className="space-y-3">
                <p className="text-xs font-mono uppercase tracking-wider text-white">
                  // Capabilities
                </p>
                <ul className="space-y-2.5 text-xs">
                  {[
                    'UI/UX Design',
                    'Next.js Platforms',
                    'Flutter Mobile Apps',
                    'Laravel Systems',
                    'AI Search / GEO',
                    'Ecommerce Store',
                    '24/7 Support SLA'
                  ].map((item) => (
                    <li key={item}>
                      <Link href="/services" className="hover:text-[#00DF81] transition-colors inline-block py-0.5">
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Direct Connect Column */}
            <div className="lg:col-span-3 space-y-4">
              <p className="text-xs font-mono uppercase tracking-wider text-white">
                // Direct Connect
              </p>
              
              <div className="space-y-2.5">
                <a
                  href="https://wa.me/35699784477"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2.5 rounded-xl border border-white/10 bg-white/[0.03] p-3 text-gray-200 hover:border-[#00DF81]/50 hover:bg-[#00DF81]/5 transition-all"
                >
                  <MessageSquare className="h-4 w-4 text-[#00DF81] shrink-0" />
                  <div className="text-left">
                    <p className="text-[10px] text-gray-400 font-mono">WhatsApp Priority</p>
                    <p className="text-xs font-bold text-white">+356 99784477</p>
                  </div>
                </a>

                <a
                  href="mailto:hello@zurvix.com"
                  className="flex items-center space-x-2.5 rounded-xl border border-white/10 bg-white/[0.03] p-3 text-gray-200 hover:border-[#00DF81]/50 hover:bg-[#00DF81]/5 transition-all"
                >
                  <Mail className="h-4 w-4 text-[#00DF81] shrink-0" />
                  <div className="text-left">
                    <p className="text-[10px] text-gray-400 font-mono">General Inquiries</p>
                    <p className="text-xs font-bold text-white">hello@zurvix.com</p>
                  </div>
                </a>
              </div>

              {/* Social Channels with SVG Icons */}
              <div className="pt-2">
                <SocialLinks variant="pills" showLabels={true} />
              </div>
            </div>

          </div>

          {/* Bottom Bar */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400 font-mono">
            <p className="text-center sm:text-left">
              &copy; 2026 <strong className="text-white">ZURVIX</strong>. All rights reserved.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
              <button
                onClick={() => setActiveLegalModal('privacy')}
                className="hover:text-[#00DF81] transition-colors cursor-pointer"
              >
                Privacy Policy
              </button>
              <span className="text-white/20 hidden sm:inline">•</span>
              <button
                onClick={() => setActiveLegalModal('terms')}
                className="hover:text-[#00DF81] transition-colors cursor-pointer"
              >
                Terms &amp; Conditions
              </button>
              <span className="text-white/20 hidden sm:inline">•</span>
              <button
                onClick={() => setActiveLegalModal('cookies')}
                className="hover:text-[#00DF81] transition-colors cursor-pointer"
              >
                Cookie Policy
              </button>
            </div>

            <button
              onClick={scrollToTop}
              className="flex items-center space-x-1 text-gray-400 hover:text-[#00DF81] transition-colors cursor-pointer pt-2 sm:pt-0"
              aria-label="Scroll to top"
            >
              <span>Back to top</span>
              <ArrowUp className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </footer>

      {/* Legal Information Modal */}
      {activeLegalModal && (
        <div className="fixed inset-0 z-[9995] flex items-center justify-center p-4 sm:p-6">
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
            onClick={() => setActiveLegalModal(null)}
          />

          <div className="relative w-full max-w-xl max-h-[85vh] overflow-y-auto rounded-3xl border border-white/10 bg-[#080C11] p-6 sm:p-8 shadow-2xl text-white z-10 animate-in fade-in zoom-in-95">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <h3 className="text-xl font-bold capitalize">
                {activeLegalModal === 'privacy' && 'Privacy Policy'}
                {activeLegalModal === 'terms' && 'Terms & Conditions'}
                {activeLegalModal === 'cookies' && 'Cookie Policy'}
              </h3>
              <button
                onClick={() => setActiveLegalModal(null)}
                className="rounded-lg p-1.5 text-gray-400 hover:bg-white/10 hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="mt-4 space-y-4 text-xs text-gray-300 leading-relaxed">
              <p>
                <strong>ZURVIX Agency Platform (`zurvix.com`)</strong> adheres to rigorous data privacy, transparent client engagement standards, and GDPR compliance.
              </p>
              <p>
                All project scopes submitted via WhatsApp (+356 99784477) or our inquiry forms remain strictly confidential under standard commercial NDA protections.
              </p>
              <p>
                Project warranties, source code handovers, domain/hosting configurations, and maintenance SLA deliverables are customized per client agreement.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 text-right">
              <button
                onClick={() => setActiveLegalModal(null)}
                className="rounded-full bg-[#00DF81] px-6 py-2 text-xs font-bold text-black hover:bg-[#00F58D] cursor-pointer"
              >
                I Understand
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
