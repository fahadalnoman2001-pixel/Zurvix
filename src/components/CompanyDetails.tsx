'use client';

import React from 'react';
import Link from 'next/link';
import { ExternalLink, Quote, Check, ArrowRight, ShieldCheck, Zap, Sparkles } from 'lucide-react';

export default function CompanyDetails() {
  const metrics = [
    { value: '7+', label: 'Years Experience', note: 'Senior-led engineering' },
    { value: '20+', label: 'Delivered Brands', note: 'Global client portfolio' },
    { value: '100%', label: 'Source Ownership', note: 'Full IP transfer' },
    { value: '24/7', label: 'Support & SLA', note: 'Proactive maintenance' },
  ];

  const pillars = [
    {
      title: 'Radical Simplicity',
      desc: 'Clean, maintainable code architectures and intuitive user flows without unnecessary bloat.'
    },
    {
      title: 'Commercial Velocity',
      desc: 'Engineered for fast time-to-market so your business can validate, launch, and monetize rapidly.'
    },
    {
      title: 'Future-Proof Systems',
      desc: 'Built with Next.js 16, modern TypeScript, scalable APIs, and Generative Engine Optimization (GEO).'
    }
  ];

  return (
    <section id="company" className="py-24 relative overflow-hidden bg-[#05080A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1 text-xs font-mono font-medium text-[#00DF81]">
            <span>// 03 — COMPANY DETAILS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Built From Experience.{' '}
            <span className="text-gradient-green">Designed For Growth.</span>
          </h2>

          <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto">
            ZURVIX is a digital agency focused on building modern websites, applications, and digital growth systems for ambitious businesses.
          </p>
        </div>

        {/* Minimal Metrics Grid - Single Scrollable Line on Mobile */}
        <div className="flex sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 mb-12 sm:mb-16 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-3 -mx-4 px-4 sm:mx-0 sm:px-0">
          {metrics.map((m, idx) => (
            <div
              key={idx}
              className="w-[52vw] sm:w-auto shrink-0 snap-center rounded-3xl border border-white/[0.08] bg-[#080C11] p-5 sm:p-8 text-center transition-all duration-300 hover:border-[#00DF81]/30 hover:bg-[#0A0F16]"
            >
              <p className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#00DF81] font-mono tracking-tight">
                {m.value}
              </p>
              <h3 className="text-sm sm:text-base font-bold text-white mt-1">
                {m.label}
              </h3>
              <p className="text-[11px] text-gray-400 mt-1 font-mono">
                {m.note}
              </p>
            </div>
          ))}
        </div>

        {/* Two-Column Story & Principles */}
        <div className="flex lg:grid lg:grid-cols-12 gap-5 sm:gap-8 items-stretch mb-12 sm:mb-16 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-3 -mx-4 px-4 sm:mx-0 sm:px-0">
          
          {/* Left: About Summary */}
          <div className="w-[85vw] sm:w-[70vw] lg:w-auto shrink-0 snap-center lg:col-span-6 rounded-3xl border border-white/[0.08] bg-[#080C11] p-7 sm:p-10 flex flex-col justify-between">
            <div className="space-y-5">
              <span className="text-xs font-mono uppercase tracking-widest text-[#00DF81]">
                // ABOUT ZURVIX
              </span>
              <h3 className="text-2xl font-bold text-white tracking-tight">
                We unite strategy, engineering, and digital visibility.
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                With 7+ years of experience across user interface design, full-stack software development, and technical digital marketing, our goal is simple: create technology that looks exceptional, performs flawlessly, and helps businesses grow.
              </p>
              <p className="text-sm text-gray-400 leading-relaxed">
                From a company launching its first high-converting web platform to an enterprise scaling unified Android &amp; iOS apps with AI search optimization, ZURVIX acts as a dedicated growth partner.
              </p>
            </div>

            <div className="pt-6 border-t border-white/[0.06] flex items-center justify-between">
              <span className="text-xs text-gray-400 font-mono">Direct Founder Contact</span>
              <span className="text-xs font-bold text-white font-mono">+356 99784477</span>
            </div>
          </div>

          {/* Right: 3 Core Pillars */}
          <div className="w-[85vw] sm:w-[70vw] lg:w-auto shrink-0 snap-center lg:col-span-6 rounded-3xl border border-white/[0.08] bg-[#080C11] p-7 sm:p-10 flex flex-col justify-between">
            <div className="space-y-6">
              <span className="text-xs font-mono uppercase tracking-widest text-[#00DF81]">
                // OUR CORE PHILOSOPHY
              </span>
              <div className="space-y-5">
                {pillars.map((p, idx) => (
                  <div key={idx} className="flex items-start space-x-3.5">
                    <div className="h-5 w-5 rounded-full bg-[#00DF81]/15 flex items-center justify-center text-[#00DF81] shrink-0 mt-0.5">
                      <Check className="h-3 w-3" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">{p.title}</h4>
                      <p className="text-xs text-gray-400 mt-1 leading-relaxed">{p.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-white/[0.06] text-xs text-gray-400">
              <span>Domain: <strong className="text-white">zurvix.com</strong> • Email: <strong className="text-[#00DF81]">hello@zurvix.com</strong></span>
            </div>
          </div>

        </div>

        {/* Minimalist Founder Perspective Box */}
        <div className="rounded-3xl border border-white/[0.1] bg-gradient-to-r from-[#080C11] via-[#0A0F16] to-[#080C11] p-8 sm:p-12 text-center max-w-4xl mx-auto space-y-6 relative shadow-2xl">
          <Quote className="h-8 w-8 text-[#00DF81]/50 mx-auto" />
          
          <blockquote className="text-xl sm:text-2xl lg:text-3xl font-bold text-white tracking-tight leading-snug max-w-2xl mx-auto">
            “Technology should not make business more complicated. It should make growth easier.”
          </blockquote>

          <div className="space-y-1">
            <p className="text-base font-bold text-white">Fahad Al Noman</p>
            <p className="text-xs font-mono uppercase tracking-wider text-[#00DF81]">
              Founder — ZURVIX (7+ Years Experience)
            </p>
          </div>

          <div className="pt-2">
            <a
              href="https://fahadalnoman.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 rounded-full border border-white/15 bg-white/[0.03] px-5 py-2.5 text-xs font-semibold text-white hover:bg-white/10 hover:border-[#00DF81] transition-all group"
            >
              <span>Visit fahadalnoman.com</span>
              <ExternalLink className="h-3 w-3 text-[#00DF81] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
