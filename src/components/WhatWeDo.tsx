'use client';

import React from 'react';
import Link from 'next/link';
import { Palette, Code2, TrendingUp, ShieldCheck, ArrowRight, Check } from 'lucide-react';

interface WhatWeDoProps {
  onSelectService?: (serviceName: string) => void;
}

export default function WhatWeDo({ onSelectService }: WhatWeDoProps) {
  const services = [
    {
      num: '01',
      title: 'UI/UX & Product Design',
      category: 'Design Systems',
      icon: Palette,
      summary: 'Intuitive user interfaces and design systems crafted for high conversion and effortless usability.',
      deliverables: [
        'UI/UX & Interactive Prototypes',
        'Website & Mobile App Design',
        'Conversion-Focused Landing Pages',
        'Brand Identity & Scalable Design Systems'
      ],
    },
    {
      num: '02',
      title: 'Full-Stack Development',
      category: 'Web & Mobile Engineering',
      icon: Code2,
      summary: 'High-performance web platforms and native mobile apps engineered with Next.js, Laravel, and Flutter.',
      deliverables: [
        'Custom Next.js Web Applications',
        'Native Android & iOS Apps (Flutter)',
        'Scalable REST & GraphQL APIs',
        'Admin Dashboards & Cloud Database Integration'
      ],
    },
    {
      num: '03',
      title: 'AI Search & Growth Marketing',
      category: 'SEO, GEO & LLM Optimization',
      icon: TrendingUp,
      summary: 'Dominate traditional Google search and modern AI answer engines (ChatGPT, Perplexity, Claude, Gemini).',
      deliverables: [
        'Technical & On-Page SEO Architecture',
        'Generative Engine Optimization (GEO)',
        'LLM AI Search Citation Strategy',
        'Full-Funnel Paid Advertising (Meta & Google)'
      ],
    },
    {
      num: '04',
      title: 'Website & App Maintenance',
      category: '24/7 Security & SLA',
      icon: ShieldCheck,
      summary: 'Continuous uptime monitoring, security patching, speed tuning, and senior-level troubleshooting.',
      deliverables: [
        '24/7 Uptime & Error Telemetry',
        'Automated Daily Offsite Backups',
        'Core Web Vitals Speed Tuning',
        'Dedicated Priority Engineering Support'
      ],
    }
  ];

  const handleServiceClick = (title: string) => {
    if (onSelectService) {
      onSelectService(title);
    } else {
      window.open(
        `https://wa.me/35699784477?text=${encodeURIComponent(
          `Hello ZURVIX, I would like to discuss your ${title} services.`
        )}`,
        '_blank'
      );
    }
  };

  return (
    <section id="what-we-do" className="py-24 relative overflow-hidden bg-[#05080A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center space-x-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1 text-xs font-mono font-medium text-[#00DF81]">
              <span>{'// 01 — WHAT WE DO'}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              End-to-end capabilities.{' '}
              <span className="text-gradient-green">Built to scale.</span>
            </h2>
            <p className="text-sm sm:text-base text-gray-400">
              We eliminate friction between design, development, marketing, and support by delivering complete digital ecosystems under one roof.
            </p>
          </div>

          <Link
            href="/services"
            className="inline-flex items-center space-x-2 text-xs font-bold text-[#00DF81] hover:text-[#00F58D] group shrink-0"
          >
            <span>Explore Full Services Catalog</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* 4 Clean Minimal Cards Grid - Single Scrollable Line on Mobile */}
        <div className="flex md:grid md:grid-cols-2 gap-4 md:gap-6 lg:gap-8 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-4 -mx-4 px-4 sm:mx-0 sm:px-0">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.num}
                className="w-[85vw] sm:w-[70vw] md:w-auto shrink-0 snap-center group relative rounded-3xl border border-white/[0.08] bg-[#080C11] p-7 sm:p-10 flex flex-col justify-between transition-all duration-300 hover:border-[#00DF81]/30 hover:bg-[#0A0F16] hover:shadow-2xl hover:shadow-[#00DF81]/5"
              >
                <div className="space-y-6">
                  {/* Top Row: Number & Category */}
                  <div className="flex items-center justify-between">
                    <div className="h-10 w-10 rounded-xl bg-[#00DF81]/10 border border-[#00DF81]/20 flex items-center justify-center text-[#00DF81]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="font-mono text-sm font-bold text-gray-500">
                      {service.num}
                    </span>
                  </div>

                  {/* Title & Summary */}
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#00DF81]">
                      {service.category}
                    </span>
                    <h3 className="text-2xl font-bold text-white mt-1 group-hover:text-[#00DF81] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-400 mt-2.5 leading-relaxed">
                      {service.summary}
                    </p>
                  </div>

                  {/* Clean Deliverable Checklist */}
                  <div className="pt-2 border-t border-white/[0.06] space-y-2">
                    {service.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-center space-x-2.5 text-xs text-gray-300">
                        <Check className="h-3.5 w-3.5 text-[#00DF81] shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action */}
                <div className="mt-8 pt-6 border-t border-white/[0.06] flex items-center justify-between">
                  <button
                    onClick={() => handleServiceClick(service.title)}
                    className="inline-flex items-center space-x-2 text-xs font-semibold text-gray-300 group-hover:text-[#00DF81] transition-colors cursor-pointer"
                  >
                    <span>Discuss {service.title}</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </button>
                  <span className="text-[11px] font-mono text-gray-500">Instant WhatsApp</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
