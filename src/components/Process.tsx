'use client';

import React from 'react';
import { Search, Compass, Palette, Terminal, Rocket, LineChart, ArrowRight } from 'lucide-react';

export default function Process() {
  const steps = [
    {
      num: '01',
      title: 'Discovery',
      icon: Search,
      description: 'We analyze your business model, target audience, competitive dynamics, and core conversion metrics.'
    },
    {
      num: '02',
      title: 'Strategy',
      icon: Compass,
      description: 'We define the technical architecture, tech stack selection, database schema, and customer growth roadmap.'
    },
    {
      num: '03',
      title: 'Design',
      icon: Palette,
      description: 'We engineer high-fidelity UI/UX design systems, interactive prototypes, and conversion-first user flows.'
    },
    {
      num: '04',
      title: 'Development',
      icon: Terminal,
      description: 'We write performant Next.js, Laravel, or Flutter software with clean architecture and 100% strict type safety.'
    },
    {
      num: '05',
      title: 'Launch',
      icon: Rocket,
      description: 'We conduct full security audits, staging verification, speed tuning, and zero-downtime production deployment.'
    },
    {
      num: '06',
      title: 'Growth',
      icon: LineChart,
      description: 'We continuously optimize conversion funnels, execute SEO/GEO AI marketing, and provide 24/7 SLA maintenance.'
    }
  ];

  return (
    <section id="process" className="py-24 relative overflow-hidden bg-[#070A0E] border-t border-white/[0.06]">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#00DF81]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1 text-xs font-mono font-medium text-[#00DF81]">
            <span>{'// 02 — THE 6-STEP LIFECYCLE'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            From Idea <span className="text-gradient-green">to Impact.</span>
          </h2>

          <p className="text-sm sm:text-base text-gray-400 max-w-xl mx-auto">
            Our systematic engineering and growth lifecycle guarantees predictable delivery, transparency, and high ROI.
          </p>
        </div>

        {/* 6 Step Cards Grid - Single Scrollable Line on Mobile */}
        <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-4 -mx-4 px-4 sm:mx-0 sm:px-0">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="w-[84vw] sm:w-[55vw] md:w-auto shrink-0 snap-center group relative rounded-3xl border border-white/[0.08] bg-[#080C11] p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:border-[#00DF81]/30 hover:bg-[#0A0F16] hover:shadow-2xl hover:shadow-[#00DF81]/5"
              >
                <div className="space-y-4">
                  {/* Step Number & Icon */}
                  <div className="flex items-center justify-between">
                    <div className="h-11 w-11 rounded-xl bg-[#00DF81]/10 border border-[#00DF81]/20 flex items-center justify-center text-[#00DF81] group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-5 w-5" />
                    </div>

                    <span className="font-mono text-2xl font-bold text-gray-600 group-hover:text-[#00DF81] transition-colors">
                      {step.num}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-[#00DF81] transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-400 mt-2 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-gray-500">
                  <span>Phase {step.num}</span>
                  <ArrowRight className="h-3.5 w-3.5 text-[#00DF81] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
