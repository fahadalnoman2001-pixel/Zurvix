'use client';

import React from 'react';
import { Target, Cpu, Layers, TrendingUp, CheckCircle, ShieldCheck, Sparkles } from 'lucide-react';

export default function WhyZurvix() {
  const stats = [
    { value: '7+', label: 'Years Experience', subtext: 'Continuous product engineering' },
    { value: '20+', label: 'Projects & Brands', subtext: 'From startups to enterprise' },
    { value: '100%', label: 'Web + Mobile Solutions', subtext: 'Full cross-platform delivery' },
    { value: '24/7', label: 'Support & Security', subtext: 'Guaranteed uptime & response' },
  ];

  const pillars = [
    {
      icon: Target,
      title: 'Business-First Thinking',
      description: "We don't just build technology for the sake of code. We architect every pixel and database schema around your revenue, lead-generation, and operational goals."
    },
    {
      icon: Cpu,
      title: 'Modern Technology',
      description: 'Powered by Next.js 16, React 19, Laravel 13, Flutter, and AI Agent workflows. No outdated bloatware — only high-performance, future-proof software.'
    },
    {
      icon: Layers,
      title: 'Everything Under One Roof',
      description: 'Stop juggling 4 different freelancers. ZURVIX unifies UI/UX design, custom frontend/backend development, digital marketing, and ongoing maintenance.'
    },
    {
      icon: TrendingUp,
      title: 'Built for Measurable Growth',
      description: 'Your digital presence should be an appreciating investment that generates pipeline and brand authority, not just another recurring operational cost.'
    }
  ];

  return (
    <section id="why-zurvix" className="py-24 relative overflow-hidden bg-[#070A0E] border-t border-white/[0.06]">
      {/* Glow Effects */}
      <div className="absolute top-1/3 left-10 w-80 h-80 bg-[#00DF81]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1 text-xs font-mono font-medium text-[#00DF81]">
            <span>// 02 — WHY ZURVIX</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            More Than an Agency.{' '}
            <span className="text-gradient-green">A Digital Growth Partner.</span>
          </h2>

          <p className="text-sm sm:text-base text-gray-400 leading-relaxed max-w-2xl mx-auto">
            We bridge the gap between creative visual excellence and rock-solid technical execution to build digital systems that outlast industry trends.
          </p>
        </div>

        {/* Large Statistics Grid - Single Scrollable Line on Mobile */}
        <div className="flex sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 mb-12 sm:mb-16 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-3 -mx-4 px-4 sm:mx-0 sm:px-0">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="w-[52vw] sm:w-auto shrink-0 snap-center rounded-3xl border border-white/[0.08] bg-[#080C11] p-5 sm:p-8 text-center transition-all duration-300 hover:border-[#00DF81]/30 hover:bg-[#0A0F16]"
            >
              <p className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#00DF81] tracking-tight font-mono mb-1">
                {stat.value}
              </p>
              <h3 className="text-sm sm:text-base font-bold text-white">
                {stat.label}
              </h3>
              <p className="text-[11px] text-gray-400 mt-1 font-mono">
                {stat.subtext}
              </p>
            </div>
          ))}
        </div>

        {/* 4 Pillars Grid - Single Scrollable Line on Mobile */}
        <div className="flex md:grid md:grid-cols-2 gap-4 md:gap-6 lg:gap-8 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-4 -mx-4 px-4 sm:mx-0 sm:px-0">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="w-[85vw] sm:w-[70vw] md:w-auto shrink-0 snap-center group rounded-3xl border border-white/[0.08] bg-[#080C11] p-7 sm:p-10 transition-all duration-300 hover:border-[#00DF81]/30 hover:bg-[#0A0F16]"
              >
                <div className="flex items-start space-x-5">
                  <div className="h-11 w-11 shrink-0 rounded-2xl bg-[#00DF81]/10 border border-[#00DF81]/20 flex items-center justify-center text-[#00DF81] group-hover:scale-110 transition-transform">
                    <Icon className="h-5 w-5" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-white group-hover:text-[#00DF81] transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
