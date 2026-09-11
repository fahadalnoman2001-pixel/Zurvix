'use client';

import React, { useState } from 'react';
import { techStackData, platformEcosystem } from '@/data/techStack';
import { getPlatformIcon } from '@/components/PlatformIcons';

export default function TechStack() {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = [
    'All',
    'Frontend',
    'Backend',
    'Database',
    'Mobile',
    'Ecommerce',
    'Cloud & DevOps',
    'AI & Intelligence',
    'Motion & Creative'
  ];

  const filteredTech = activeCategory === 'All'
    ? techStackData
    : techStackData.filter((t) => t.category === activeCategory);

  return (
    <section id="tech-stack" className="py-24 relative overflow-hidden bg-[#05080A] border-t border-white/[0.06]">
      {/* Glow */}
      <div className="absolute top-1/2 -left-40 w-96 h-96 bg-[#00DF81]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center space-x-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1 text-xs font-mono font-medium text-[#00DF81]">
            <span>{'// 03 — MODERN STACK & ECOSYSTEM'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Powered By <span className="text-gradient-green">Modern Technology.</span>
          </h2>

          <p className="text-sm sm:text-base text-gray-400 max-w-xl mx-auto leading-relaxed">
            We engineer applications on the leading edge of web and mobile standards for maximum security, speed, and maintainability.
          </p>
        </div>

        {/* Category Filter Pills (Scrollable on Mobile) */}
        <div className="flex justify-center mb-10 sm:mb-14">
          <div className="flex items-center overflow-x-auto no-scrollbar max-w-[94vw] gap-2 p-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full px-4 sm:px-5 py-2 text-xs font-semibold shrink-0 transition-all duration-200 cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#00DF81] text-[#05080A] font-bold shadow-md shadow-[#00DF81]/25 scale-105'
                    : 'border border-white/[0.08] bg-white/[0.02] text-gray-400 hover:text-white hover:bg-white/[0.06]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Tech Items Grid - Single Scrollable Line on Mobile */}
        <div className="flex sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-16 sm:mb-20 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-4 -mx-4 px-4 sm:mx-0 sm:px-0">
          {filteredTech.map((tech, idx) => {
            const TechIcon = getPlatformIcon(tech.name);
            return (
              <div
                key={idx}
                className="w-[78vw] sm:w-auto shrink-0 snap-center group rounded-3xl border border-white/[0.08] bg-[#080C11] p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:border-[#00DF81]/40 hover:bg-[#0A0F16] hover:-translate-y-1 hover:shadow-xl hover:shadow-black/60"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2.5">
                      <div className="h-8 w-8 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center group-hover:border-[#00DF81]/40 group-hover:bg-[#00DF81]/10 transition-all duration-300">
                        <TechIcon className="h-4 w-4" />
                      </div>
                      <span className="text-[11px] font-mono uppercase tracking-wider text-[#00DF81] font-bold">
                        {tech.category}
                      </span>
                    </div>

                    <div className="flex items-center space-x-1.5">
                      {tech.version && (
                        <span className="rounded-full bg-white/[0.04] border border-white/10 px-2.5 py-0.5 text-[10px] font-mono text-gray-300">
                          {tech.version}
                        </span>
                      )}
                      {tech.badge && (
                        <span className="rounded-full bg-[#00DF81]/15 border border-[#00DF81]/30 px-2.5 py-0.5 text-[10px] font-mono font-semibold text-[#00DF81]">
                          {tech.badge}
                        </span>
                      )}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-[#00DF81] transition-colors">
                      {tech.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-400 mt-2 leading-relaxed">
                      {tech.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Platforms & Technologies We Work With */}
        <div className="border-t border-white/[0.08] pt-16">
          <div className="text-center max-w-xl mx-auto mb-10 space-y-2">
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Platforms &amp; Technologies We Work With
            </h3>
            <p className="text-xs text-gray-400">
              Integrated with world-class cloud infrastructure and developer platforms.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {platformEcosystem.map((partner, idx) => {
              const PartnerIcon = getPlatformIcon(partner.name);
              return (
                <div
                  key={idx}
                  className="group rounded-2xl border border-white/[0.08] bg-[#080C11] p-5 text-center transition-all duration-300 hover:border-[#00DF81]/40 hover:bg-[#0A0F16] hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="h-11 w-11 mx-auto rounded-2xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center mb-3 group-hover:border-[#00DF81]/40 group-hover:bg-[#00DF81]/10 group-hover:scale-110 transition-all duration-300 shadow-md">
                    <PartnerIcon className="h-5 w-5" />
                  </div>
                  <h4 className="text-xs font-bold text-white tracking-tight group-hover:text-[#00DF81] transition-colors">
                    {partner.name}
                  </h4>
                  <p className="text-[10px] text-gray-400 mt-1 font-mono">
                    {partner.category}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
