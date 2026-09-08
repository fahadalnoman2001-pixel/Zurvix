'use client';

import React, { useState } from 'react';
import {
  elitePackages,
  websitePackages,
  appPackages,
  marketingPackages,
  maintenancePackages,
  PricingPackage
} from '@/data/packages';
import { Sparkles, Check, ArrowRight, ShieldCheck, Zap } from 'lucide-react';

interface PricingProps {
  onSelectPackage: (pkg: PricingPackage) => void;
}

export default function Pricing({ onSelectPackage }: PricingProps) {
  const [activeTab, setActiveTab] = useState<'elite' | 'websites' | 'apps' | 'marketing' | 'maintenance'>('elite');

  const tabs = [
    { key: 'elite', label: '⭐ Elite All-In-One' },
    { key: 'websites', label: 'Websites (From €300)' },
    { key: 'apps', label: 'Mobile Apps (From €500)' },
    { key: 'marketing', label: 'Growth & AI SEO' },
    { key: 'maintenance', label: 'Maintenance (24/7)' },
  ];

  return (
    <section id="pricing" className="py-24 relative overflow-hidden bg-[#070A0E] border-t border-white/[0.06]">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#00DF81]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center space-x-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1 text-xs font-mono font-medium text-[#00DF81]">
            <span>// 02 — TRANSPARENT PRICING</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Accessible Entry.{' '}
            <span className="text-gradient-green">Enterprise Polish.</span>
          </h2>

          <p className="text-sm sm:text-base text-gray-400 max-w-xl mx-auto">
            Transparent starting packages built for maximum return on investment. No hidden retainers or surprise fees.
          </p>
        </div>

        {/* Minimal Tab Switcher (Scrollable on Mobile) */}
        <div className="flex justify-center mb-10 sm:mb-14">
          <div className="flex items-center overflow-x-auto no-scrollbar max-w-[94vw] gap-2 p-1">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key as any)}
                className={`rounded-full px-4 sm:px-5 py-2 text-xs font-semibold shrink-0 transition-all duration-200 cursor-pointer ${
                  activeTab === tab.key
                    ? 'bg-[#00DF81] text-[#05080A] font-bold shadow-md shadow-[#00DF81]/20 scale-105'
                    : 'border border-white/[0.08] bg-white/[0.02] text-gray-400 hover:text-white hover:bg-white/[0.06]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Pricing Content */}
        <div className="space-y-8">
             {/* ELITE BUNDLES */}
          {activeTab === 'elite' && (
            <div className="flex md:grid md:grid-cols-2 gap-4 sm:gap-8 max-w-5xl mx-auto overflow-x-auto no-scrollbar snap-x snap-mandatory pb-4 -mx-4 px-4 sm:mx-0 sm:px-0">
              {elitePackages.map((pkg) => (
                <div
                  key={pkg.id}
                  className={`w-[85vw] sm:w-[70vw] md:w-auto shrink-0 snap-center relative rounded-3xl border p-7 sm:p-10 flex flex-col justify-between transition-all duration-300 ${
                    pkg.popular
                      ? 'border-[#00DF81] bg-[#0A0E15] shadow-2xl shadow-[#00DF81]/15 md:scale-[1.02]'
                      : 'border-white/[0.08] bg-[#080C11]'
                  }`}
                >
                  {pkg.badge && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-[#00DF81] px-4 py-1 text-[11px] font-extrabold text-[#05080A] uppercase tracking-wider">
                      {pkg.badge}
                    </div>
                  )}

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold text-white">
                        {pkg.title}
                      </h3>
                      <p className="text-xs text-gray-400 mt-2 leading-relaxed">
                        {pkg.description}
                      </p>
                    </div>

                    <div className="flex items-baseline space-x-2 border-y border-white/[0.08] py-4">
                      <span className="text-4xl sm:text-5xl font-extrabold text-white font-mono">
                        {pkg.price}
                      </span>
                      <span className="text-xs text-gray-400 font-mono uppercase tracking-wider">
                        {pkg.billingPeriod}
                      </span>
                    </div>

                    <div className="space-y-3">
                      <p className="text-xs font-mono uppercase tracking-wider text-[#00DF81]">
                        What&apos;s Included:
                      </p>
                      <ul className="space-y-2.5">
                        {pkg.features.map((feat, fIdx) => (
                          <li key={fIdx} className="flex items-start space-x-3 text-xs sm:text-sm text-gray-300">
                            <Check className="h-4 w-4 text-[#00DF81] shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-white/[0.08]">
                    <button
                      onClick={() => onSelectPackage(pkg)}
                      className="w-full flex items-center justify-center space-x-2 rounded-full bg-[#00DF81] py-3.5 text-xs sm:text-sm font-bold text-[#05080A] hover:bg-[#00F58D] transition-all cursor-pointer shadow-lg shadow-[#00DF81]/20 hover:scale-[1.01]"
                    >
                      <span>Talk to Sales on WhatsApp</span>
                      <ArrowRight className="h-4 w-4" />
                    </button>
                    <p className="mt-2 text-center text-[11px] text-gray-500 font-mono">
                      Direct WhatsApp consultation with senior architect
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* WEBSITES */}
          {activeTab === 'websites' && (
            <div className="flex md:grid md:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto overflow-x-auto no-scrollbar snap-x snap-mandatory pb-4 -mx-4 px-4 sm:mx-0 sm:px-0">
              {websitePackages.map((pkg) => (
                <div
                  key={pkg.id}
                  className={`w-[85vw] sm:w-[55vw] md:w-auto shrink-0 snap-center relative rounded-3xl border p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                    pkg.popular
                      ? 'border-[#00DF81] bg-[#0A0E15] shadow-xl shadow-[#00DF81]/10'
                      : 'border-white/[0.08] bg-[#080C11]'
                  }`}
                >
                  {pkg.badge && (
                    <div className="absolute -top-3 right-6 rounded-full bg-[#00DF81] px-3 py-0.5 text-[10px] font-extrabold text-[#05080A] uppercase tracking-wide">
                      {pkg.badge}
                    </div>
                  )}

                  <div className="space-y-5">
                    <div>
                      <h3 className="text-xl font-bold text-white">
                        {pkg.title}
                      </h3>
                      <p className="text-xs text-gray-400 mt-1 min-h-[36px]">
                        {pkg.description}
                      </p>
                    </div>

                    <div className="flex items-baseline space-x-2 border-y border-white/[0.08] py-3">
                      <span className="text-3xl sm:text-4xl font-black text-white font-mono">
                        {pkg.price}
                      </span>
                      <span className="text-xs text-gray-400 font-mono">
                        {pkg.billingPeriod}
                      </span>
                    </div>

                    <ul className="space-y-2">
                      {pkg.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start space-x-2.5 text-xs text-gray-300">
                          <Check className="h-3.5 w-3.5 text-[#00DF81] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8 pt-5 border-t border-white/[0.08]">
                    <button
                      onClick={() => onSelectPackage(pkg)}
                      className={`w-full flex items-center justify-center space-x-2 rounded-full py-3 text-xs font-bold transition-all cursor-pointer ${
                        pkg.popular
                          ? 'bg-[#00DF81] text-[#05080A] hover:bg-[#00F58D] shadow-md shadow-[#00DF81]/25'
                          : 'border border-white/20 bg-white/[0.04] text-white hover:bg-white/10'
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

          {/* APPS */}
          {activeTab === 'apps' && (
            <div className="flex md:grid md:grid-cols-2 gap-4 sm:gap-8 max-w-4xl mx-auto overflow-x-auto no-scrollbar snap-x snap-mandatory pb-4 -mx-4 px-4 sm:mx-0 sm:px-0">
              {appPackages.map((pkg) => (
                <div
                  key={pkg.id}
                  className={`w-[85vw] sm:w-[70vw] md:w-auto shrink-0 snap-center relative rounded-3xl border p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                    pkg.popular
                      ? 'border-[#00DF81] bg-[#0A0E15] shadow-xl shadow-[#00DF81]/10'
                      : 'border-white/[0.08] bg-[#080C11]'
                  }`}
                >
                  {pkg.badge && (
                    <div className="absolute -top-3.5 right-8 rounded-full bg-[#00DF81] px-3.5 py-1 text-[10px] font-extrabold text-[#05080A] uppercase tracking-wide">
                      {pkg.badge}
                    </div>
                  )}

                  <div className="space-y-5">
                    <div>
                      <h3 className="text-2xl font-bold text-white">
                        {pkg.title}
                      </h3>
                      <p className="text-xs text-gray-400 mt-1">
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
                        <li key={fIdx} className="flex items-start space-x-2.5 text-xs sm:text-sm text-gray-300">
                          <Check className="h-4 w-4 text-[#00DF81] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8 pt-6 border-t border-white/[0.08]">
                    <button
                      onClick={() => onSelectPackage(pkg)}
                      className="w-full flex items-center justify-center space-x-2 rounded-full bg-[#00DF81] py-3.5 text-xs sm:text-sm font-bold text-[#05080A] hover:bg-[#00F58D] transition-all cursor-pointer shadow-lg shadow-[#00DF81]/20"
                    >
                      <span>Inquire on WhatsApp</span>
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* MARKETING */}
          {activeTab === 'marketing' && (
            <div className="flex md:grid md:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto overflow-x-auto no-scrollbar snap-x snap-mandatory pb-4 -mx-4 px-4 sm:mx-0 sm:px-0">
              {marketingPackages.map((pkg) => (
                <div
                  key={pkg.id}
                  className={`w-[85vw] sm:w-[55vw] md:w-auto shrink-0 snap-center relative rounded-3xl border p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                    pkg.popular
                      ? 'border-[#00DF81] bg-[#0A0E15] shadow-xl shadow-[#00DF81]/10'
                      : 'border-white/[0.08] bg-[#080C11]'
                  }`}
                >
                  {pkg.badge && (
                    <div className="absolute -top-3 right-6 rounded-full bg-[#00DF81] px-3 py-0.5 text-[10px] font-extrabold text-[#05080A] uppercase tracking-wide">
                      {pkg.badge}
                    </div>
                  )}

                  <div className="space-y-5">
                    <div>
                      <h3 className="text-xl font-bold text-white">
                        {pkg.title}
                      </h3>
                      <p className="text-xs text-gray-400 mt-1 min-h-[40px]">
                        {pkg.description}
                      </p>
                    </div>

                    <div className="flex items-baseline space-x-2 border-y border-white/[0.08] py-3">
                      <span className="text-3xl sm:text-4xl font-black text-white font-mono">
                        {pkg.price}
                      </span>
                      <span className="text-xs text-gray-400 font-mono">
                        {pkg.billingPeriod}
                      </span>
                    </div>

                    <ul className="space-y-2">
                      {pkg.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start space-x-2.5 text-xs text-gray-300">
                          <Check className="h-3.5 w-3.5 text-[#00DF81] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8 pt-5 border-t border-white/[0.08]">
                    <button
                      onClick={() => onSelectPackage(pkg)}
                      className={`w-full flex items-center justify-center space-x-2 rounded-full py-3 text-xs font-bold transition-all cursor-pointer ${
                        pkg.popular
                          ? 'bg-[#00DF81] text-[#05080A] hover:bg-[#00F58D] shadow-md shadow-[#00DF81]/25'
                          : 'border border-white/20 bg-white/[0.04] text-white hover:bg-white/10'
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

          {/* MAINTENANCE */}
          {activeTab === 'maintenance' && (
            <div className="max-w-3xl mx-auto">
              {maintenancePackages.map((pkg) => (
                <div
                  key={pkg.id}
                  className="rounded-3xl border border-[#00DF81]/40 bg-[#0A0E15] p-8 sm:p-10 shadow-2xl shadow-[#00DF81]/10 space-y-6"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white">
                        {pkg.title}
                      </h3>
                      <p className="text-xs text-gray-400 mt-1">
                        {pkg.description}
                      </p>
                    </div>
                    <div className="sm:text-right">
                      <p className="text-3xl sm:text-4xl font-extrabold text-[#00DF81] font-mono">
                        {pkg.price}
                      </p>
                      <span className="text-xs text-gray-400 font-mono">
                        {pkg.billingPeriod}
                      </span>
                    </div>
                  </div>

                  <div className="border-t border-white/[0.08] pt-6">
                    <p className="text-xs font-mono uppercase tracking-wider text-[#00DF81] mb-3">
                      Included Protection &amp; SLAs:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {pkg.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start space-x-2.5 text-xs text-gray-300">
                          <Check className="h-4 w-4 text-[#00DF81] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/[0.08]">
                    <button
                      onClick={() => onSelectPackage(pkg)}
                      className="w-full flex items-center justify-center space-x-2 rounded-full bg-[#00DF81] py-3.5 text-xs sm:text-sm font-bold text-[#05080A] hover:bg-[#00F58D] transition-colors cursor-pointer"
                    >
                      <span>Activate Maintenance Plan</span>
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
