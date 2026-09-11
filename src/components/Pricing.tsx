'use client';

import React, { useState } from 'react';
import {
  coreTiers,
  websitePackages,
  appPackages,
  marketingPackages,
  maintenancePackages,
  publishingServices,
  PricingPackage
} from '@/data/packages';
import { Sparkles, Check, ArrowRight, ShieldCheck, HelpCircle } from 'lucide-react';
import Link from 'next/link';

interface PricingProps {
  onSelectPackage: (pkg: PricingPackage) => void;
  showHeader?: boolean;
}

export default function Pricing({ onSelectPackage, showHeader = true }: PricingProps) {
  const [activeTab, setActiveTab] = useState<'all' | 'websites' | 'apps' | 'marketing' | 'maintenance' | 'publishing'>('all');

  const tabs = [
    { key: 'all' as const, label: '⭐ All Core Packages (From €300)' },
    { key: 'websites' as const, label: 'Websites Only' },
    { key: 'apps' as const, label: 'Mobile Apps' },
    { key: 'marketing' as const, label: 'Growth & AI SEO' },
    { key: 'maintenance' as const, label: 'Maintenance (24/7)' },
    { key: 'publishing' as const, label: 'Store Publishing' },
  ];

  return (
    <section id="pricing" className="py-20 sm:py-28 relative overflow-hidden bg-[#070A0E] border-t border-white/[0.06]">
      {/* Background Ambience */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#00DF81]/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        {showHeader && (
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4 px-4">
            <div className="inline-flex items-center space-x-2 rounded-full border border-[#00DF81]/20 bg-[#00DF81]/5 px-4 py-1.5 text-xs font-mono font-medium text-[#00DF81]">
              <Sparkles className="w-3.5 h-3.5 text-[#00DF81]" />
              <span>02 — TRANSPARENT PRICING</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Predictable Investment.{' '}
              <span className="text-gradient-green block sm:inline">Enterprise Polish.</span>
            </h2>

            <p className="text-sm sm:text-base text-gray-400 max-w-xl mx-auto leading-relaxed">
              Transparent starting packages built for maximum return on investment. From €300 custom websites to full enterprise app and AI search ecosystems.
            </p>
          </div>
        )}

        {/* Tab Switcher (Scrollable on Mobile, Centered Glass Pill) */}
        <div className="flex justify-center mb-12 sm:mb-16 px-2">
          <div className="inline-flex items-center overflow-x-auto no-scrollbar max-w-full gap-1.5 p-1.5 rounded-full bg-[#0C1118]/90 border border-white/[0.08] backdrop-blur-xl shadow-2xl">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.key;
              return (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`rounded-full px-4 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold shrink-0 transition-all duration-300 cursor-pointer flex items-center space-x-1.5 ${
                    isActive
                      ? 'bg-[#00DF81] text-[#05080A] font-bold shadow-lg shadow-[#00DF81]/25 ring-2 ring-[#00DF81]/40'
                      : 'text-gray-400 hover:text-white hover:bg-white/[0.06]'
                  }`}
                >
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Pricing Content */}
        <div className="space-y-12">
          
          {/* 1. ALL CORE TIERS (4 Ascending Tiers: Starter €300 -> Ecommerce €600 -> Elite 01 €800 -> Elite 02 €1000) */}
          {activeTab === 'all' && (
            <div className="space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-6">
                {coreTiers.map((pkg) => (
                  <div
                    key={pkg.id}
                    className={`relative rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 ${
                      pkg.popular
                        ? 'bg-[#0B1017] border-2 border-[#00DF81] shadow-[0_0_50px_-10px_rgba(0,223,129,0.25)] ring-1 ring-[#00DF81]/30 lg:-translate-y-2'
                        : 'bg-[#080C11] border border-white/[0.08] hover:border-white/20 hover:bg-[#0A0E15]'
                    }`}
                  >
                    {pkg.badge && (
                      <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-20">
                        <div className="rounded-full bg-gradient-to-r from-[#00DF81] to-[#00F58D] px-3.5 py-1 text-[10px] font-extrabold text-[#05080A] uppercase tracking-wider shadow-lg shadow-[#00DF81]/30 flex items-center space-x-1 whitespace-nowrap">
                          <Sparkles className="w-3 h-3 fill-black text-black" />
                          <span>{pkg.badge.replace('⭐', '').trim()}</span>
                        </div>
                      </div>
                    )}

                    <div className="space-y-5">
                      <div>
                        <h3 className="text-xl font-bold text-white tracking-tight leading-snug">
                          {pkg.title}
                        </h3>
                        <p className="text-xs text-gray-400 mt-2 min-h-[48px] leading-relaxed">
                          {pkg.description}
                        </p>
                      </div>

                      <div className="flex items-baseline space-x-2 border-y border-white/[0.08] py-4">
                        <span className="text-3xl sm:text-4xl font-black text-white font-mono tracking-tight">
                          {pkg.price}
                        </span>
                        <span className="text-[11px] text-gray-400 font-mono uppercase tracking-wider">
                          {pkg.billingPeriod}
                        </span>
                      </div>

                      <div className="space-y-2.5">
                        <p className="text-[11px] font-mono uppercase tracking-wider text-[#00DF81] font-semibold">
                          What&apos;s Included:
                        </p>
                        <ul className="space-y-2.5">
                          {pkg.features.map((feat, fIdx) => (
                            <li key={fIdx} className="flex items-start space-x-2.5 text-xs text-gray-300 leading-relaxed">
                              <div className="h-3.5 w-3.5 rounded-full bg-[#00DF81]/15 text-[#00DF81] flex items-center justify-center shrink-0 mt-0.5">
                                <Check className="h-2.5 w-2.5 stroke-[3]" />
                              </div>
                              <span>{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="mt-8 pt-5 border-t border-white/[0.08]">
                      <button
                        onClick={() => onSelectPackage(pkg)}
                        className={`w-full flex items-center justify-center space-x-2 rounded-full py-3.5 text-xs font-bold tracking-wide transition-all duration-200 cursor-pointer ${
                          pkg.popular
                            ? 'bg-gradient-to-r from-[#00DF81] to-[#00F58D] text-[#05080A] shadow-lg shadow-[#00DF81]/25 hover:brightness-105 active:scale-[0.99]'
                            : 'bg-white/[0.06] hover:bg-[#00DF81] text-white hover:text-[#05080A] border border-white/10 hover:border-[#00DF81]'
                        }`}
                      >
                        <span>Talk on WhatsApp</span>
                        <ArrowRight className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Dedicated Highlighted Maintenance Banner Below 4 Tiers */}
              <div className="rounded-3xl border-2 border-[#00DF81]/40 bg-gradient-to-r from-[#080C11] via-[#0B1017] to-[#080C11] p-6 sm:p-8 shadow-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div className="space-y-2 max-w-2xl">
                  <div className="inline-flex items-center space-x-2 rounded-full bg-[#00DF81]/15 border border-[#00DF81]/30 px-3 py-0.5 text-[11px] font-mono text-[#00DF81]">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>ONGOING RELIABILITY &amp; SUPPORT</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    Website &amp; App Maintenance Plan — <span className="text-[#00DF81] font-mono">€200/month</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                    24/7 uptime monitoring, daily cloud backups, weekly security patching, Core Web Vitals speed tuning, and dedicated hours for content &amp; code updates.
                  </p>
                </div>
                <div className="shrink-0 w-full md:w-auto">
                  <button
                    onClick={() => onSelectPackage(maintenancePackages[0])}
                    className="w-full md:w-auto inline-flex items-center justify-center space-x-2 rounded-full bg-[#00DF81] px-6 py-3.5 text-xs sm:text-sm font-bold text-[#05080A] hover:bg-[#00F58D] transition-all shadow-lg shadow-[#00DF81]/25 hover:scale-105 cursor-pointer"
                  >
                    <span>Add Maintenance SLA</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* 2. WEBSITES ONLY */}
          {activeTab === 'websites' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto pt-6">
              {websitePackages.map((pkg) => (
                <div
                  key={pkg.id}
                  className={`relative rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                    pkg.popular
                      ? 'bg-[#0B1017] border-2 border-[#00DF81] shadow-[0_0_40px_-10px_rgba(0,223,129,0.25)] ring-1 ring-[#00DF81]/30'
                      : 'bg-[#080C11] border border-white/[0.08] hover:border-white/20 hover:bg-[#0A0E15]'
                  }`}
                >
                  {pkg.badge && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-20">
                      <div className="rounded-full bg-gradient-to-r from-[#00DF81] to-[#00F58D] px-3.5 py-1 text-[10px] font-extrabold text-[#05080A] uppercase tracking-wider shadow-md shadow-[#00DF81]/25 whitespace-nowrap">
                        {pkg.badge}
                      </div>
                    </div>
                  )}

                  <div className="space-y-5">
                    <div>
                      <h3 className="text-xl font-bold text-white tracking-tight">
                        {pkg.title}
                      </h3>
                      <p className="text-xs text-gray-400 mt-1.5 min-h-[36px] leading-relaxed">
                        {pkg.description}
                      </p>
                    </div>

                    <div className="flex items-baseline space-x-2 border-y border-white/[0.08] py-3.5">
                      <span className="text-3xl sm:text-4xl font-black text-white font-mono">
                        {pkg.price}
                      </span>
                      <span className="text-xs text-gray-400 font-mono uppercase">
                        {pkg.billingPeriod}
                      </span>
                    </div>

                    <ul className="space-y-2.5">
                      {pkg.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start space-x-2.5 text-xs text-gray-300 leading-relaxed">
                          <div className="h-3.5 w-3.5 rounded-full bg-[#00DF81]/15 text-[#00DF81] flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="h-2.5 w-2.5 stroke-[3]" />
                          </div>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8 pt-5 border-t border-white/[0.08]">
                    <button
                      onClick={() => onSelectPackage(pkg)}
                      className={`w-full flex items-center justify-center space-x-2 rounded-full py-3.5 text-xs font-bold transition-all duration-200 cursor-pointer ${
                        pkg.popular
                          ? 'bg-gradient-to-r from-[#00DF81] to-[#00F58D] text-[#05080A] shadow-md shadow-[#00DF81]/25 hover:brightness-105'
                          : 'border border-white/15 bg-white/[0.04] text-white hover:bg-[#00DF81] hover:text-[#05080A] hover:border-[#00DF81]'
                      }`}
                    >
                      <span>Inquire on WhatsApp</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* 3. APPS */}
          {activeTab === 'apps' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto pt-6">
              {appPackages.map((pkg) => (
                <div
                  key={pkg.id}
                  className={`relative rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                    pkg.popular
                      ? 'bg-[#0B1017] border-2 border-[#00DF81] shadow-[0_0_40px_-10px_rgba(0,223,129,0.25)] ring-1 ring-[#00DF81]/30'
                      : 'bg-[#080C11] border border-white/[0.08] hover:border-white/20 hover:bg-[#0A0E15]'
                  }`}
                >
                  {pkg.badge && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-20">
                      <div className="rounded-full bg-gradient-to-r from-[#00DF81] to-[#00F58D] px-3.5 py-1 text-[10px] font-extrabold text-[#05080A] uppercase tracking-wider shadow-md shadow-[#00DF81]/25 whitespace-nowrap">
                        {pkg.badge}
                      </div>
                    </div>
                  )}

                  <div className="space-y-5">
                    <div>
                      <h3 className="text-2xl font-bold text-white tracking-tight">
                        {pkg.title}
                      </h3>
                      <p className="text-xs text-gray-400 mt-1.5 leading-relaxed">
                        {pkg.description}
                      </p>
                    </div>

                    <div className="flex items-baseline space-x-2 border-y border-white/[0.08] py-3.5">
                      <span className="text-4xl font-black text-white font-mono">
                        {pkg.price}
                      </span>
                      <span className="text-xs text-gray-400 font-mono uppercase">
                        {pkg.billingPeriod}
                      </span>
                    </div>

                    <ul className="space-y-2.5">
                      {pkg.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start space-x-2.5 text-xs sm:text-sm text-gray-300 leading-relaxed">
                          <div className="h-4 w-4 rounded-full bg-[#00DF81]/15 text-[#00DF81] flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="h-3 w-3 stroke-[3]" />
                          </div>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8 pt-6 border-t border-white/[0.08]">
                    <button
                      onClick={() => onSelectPackage(pkg)}
                      className={`w-full flex items-center justify-center space-x-2 rounded-full py-4 text-xs sm:text-sm font-extrabold tracking-wide transition-all duration-200 cursor-pointer ${
                        pkg.popular
                          ? 'bg-gradient-to-r from-[#00DF81] to-[#00F58D] text-[#05080A] shadow-xl shadow-[#00DF81]/25 hover:brightness-105'
                          : 'bg-white/[0.06] hover:bg-[#00DF81] text-white hover:text-[#05080A] border border-white/10 hover:border-[#00DF81] shadow-md'
                      }`}
                    >
                      <span>Inquire on WhatsApp</span>
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* 4. MARKETING */}
          {activeTab === 'marketing' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto pt-6">
              {marketingPackages.map((pkg) => (
                <div
                  key={pkg.id}
                  className={`relative rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                    pkg.popular
                      ? 'bg-[#0B1017] border-2 border-[#00DF81] shadow-[0_0_40px_-10px_rgba(0,223,129,0.25)] ring-1 ring-[#00DF81]/30'
                      : 'bg-[#080C11] border border-white/[0.08] hover:border-white/20 hover:bg-[#0A0E15]'
                  }`}
                >
                  {pkg.badge && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-20">
                      <div className="rounded-full bg-gradient-to-r from-[#00DF81] to-[#00F58D] px-3.5 py-1 text-[10px] font-extrabold text-[#05080A] uppercase tracking-wider shadow-md shadow-[#00DF81]/25 whitespace-nowrap">
                        {pkg.badge}
                      </div>
                    </div>
                  )}

                  <div className="space-y-5">
                    <div>
                      <h3 className="text-xl font-bold text-white tracking-tight">
                        {pkg.title}
                      </h3>
                      <p className="text-xs text-gray-400 mt-1.5 min-h-[40px] leading-relaxed">
                        {pkg.description}
                      </p>
                    </div>

                    <div className="flex items-baseline space-x-2 border-y border-white/[0.08] py-3.5">
                      <span className="text-3xl sm:text-4xl font-black text-white font-mono">
                        {pkg.price}
                      </span>
                      <span className="text-xs text-gray-400 font-mono">
                        {pkg.billingPeriod}
                      </span>
                    </div>

                    <ul className="space-y-2.5">
                      {pkg.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start space-x-2.5 text-xs text-gray-300 leading-relaxed">
                          <div className="h-3.5 w-3.5 rounded-full bg-[#00DF81]/15 text-[#00DF81] flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="h-2.5 w-2.5 stroke-[3]" />
                          </div>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8 pt-5 border-t border-white/[0.08]">
                    <button
                      onClick={() => onSelectPackage(pkg)}
                      className={`w-full flex items-center justify-center space-x-2 rounded-full py-3.5 text-xs font-bold transition-all duration-200 cursor-pointer ${
                        pkg.popular
                          ? 'bg-gradient-to-r from-[#00DF81] to-[#00F58D] text-[#05080A] shadow-md shadow-[#00DF81]/25 hover:brightness-105'
                          : 'border border-white/15 bg-white/[0.04] text-white hover:bg-[#00DF81] hover:text-[#05080A] hover:border-[#00DF81]'
                      }`}
                    >
                      <span>Inquire on WhatsApp</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* 5. MAINTENANCE */}
          {activeTab === 'maintenance' && (
            <div className="max-w-3xl mx-auto pt-6">
              {maintenancePackages.map((pkg) => (
                <div
                  key={pkg.id}
                  className="rounded-3xl border-2 border-[#00DF81] bg-gradient-to-b from-[#0C121A] to-[#080C11] p-8 sm:p-10 shadow-[0_0_50px_-10px_rgba(0,223,129,0.2)] space-y-6"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <div className="inline-flex items-center space-x-2 rounded-full bg-[#00DF81]/15 border border-[#00DF81]/30 px-3 py-1 text-[11px] font-mono text-[#00DF81] mb-3">
                        <ShieldCheck className="w-3.5 h-3.5" />
                        <span>GUARANTEED 99.9% UPTIME SLA</span>
                      </div>
                      <h3 className="text-2xl font-bold text-white tracking-tight">
                        {pkg.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-400 mt-1.5 leading-relaxed">
                        {pkg.description}
                      </p>
                    </div>
                    <div className="sm:text-right shrink-0">
                      <p className="text-3xl sm:text-4xl font-extrabold text-[#00DF81] font-mono">
                        {pkg.price}
                      </p>
                      <span className="text-xs text-gray-400 font-mono">
                        {pkg.billingPeriod}
                      </span>
                    </div>
                  </div>

                  <div className="border-t border-white/[0.08] pt-6">
                    <p className="text-xs font-mono uppercase tracking-wider text-[#00DF81] mb-4 font-semibold">
                      Included Protection &amp; SLAs:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      {pkg.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start space-x-3 text-xs sm:text-sm text-gray-300">
                          <div className="h-4 w-4 rounded-full bg-[#00DF81]/15 text-[#00DF81] flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="h-3 w-3 stroke-[3]" />
                          </div>
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/[0.08]">
                    <button
                      onClick={() => onSelectPackage(pkg)}
                      className="w-full flex items-center justify-center space-x-2 rounded-full bg-gradient-to-r from-[#00DF81] to-[#00F58D] py-4 text-xs sm:text-sm font-extrabold text-[#05080A] hover:brightness-105 transition-all shadow-xl shadow-[#00DF81]/25 cursor-pointer"
                    >
                      <span>Activate Maintenance Plan on WhatsApp</span>
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* 6. PUBLISHING SERVICES */}
          {activeTab === 'publishing' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto pt-6">
              {publishingServices.map((service, idx) => (
                <div
                  key={idx}
                  className="rounded-3xl border border-white/[0.08] bg-[#080C11] p-7 sm:p-8 flex flex-col justify-between space-y-6 hover:border-[#00DF81]/30 hover:bg-[#0A0E15] transition-all"
                >
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-white tracking-tight">
                      {service.title}
                    </h3>
                    <div className="flex items-baseline space-x-2 border-y border-white/[0.08] py-3">
                      <span className="text-3xl font-black text-white font-mono">
                        {service.price}
                      </span>
                      <span className="text-xs text-gray-400 font-mono">
                        {service.billing}
                      </span>
                    </div>
                    <ul className="space-y-2.5">
                      {service.details.map((detail, dIdx) => (
                        <li key={dIdx} className="flex items-start space-x-2.5 text-xs text-gray-300">
                          <div className="h-3.5 w-3.5 rounded-full bg-[#00DF81]/15 text-[#00DF81] flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="h-2.5 w-2.5 stroke-[3]" />
                          </div>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href={`https://wa.me/35699784477?text=${encodeURIComponent(service.whatsAppMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center space-x-2 rounded-full border border-white/15 bg-white/[0.04] py-3.5 text-xs font-bold text-white hover:bg-[#00DF81] hover:text-[#05080A] hover:border-[#00DF81] transition-all cursor-pointer"
                  >
                    <span>Inquire on WhatsApp</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              ))}
            </div>
          )}

        </div>

        {/* Global FAQ Banner */}
        <div className="mt-16 text-center">
          <Link
            href="/faq"
            className="inline-flex items-center space-x-2 text-xs sm:text-sm font-mono text-gray-400 hover:text-[#00DF81] transition-colors"
          >
            <HelpCircle className="w-4 h-4 text-[#00DF81]" />
            <span>Have questions about pricing, scopes or deliverables? Explore our full 18-part FAQ</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

      </div>
    </section>
  );
}
