'use client';

import React, { useState } from 'react';
import { ArrowRight, Globe2 } from 'lucide-react';
import CosmicTechCanvas, { TechPlanet } from './CosmicTechCanvas';
import MobileCosmicNexus from './MobileCosmicNexus';

interface HeroSectionProps {
  onStartProject: () => void;
}

export default function HeroSection({ onStartProject }: HeroSectionProps) {
  const [filterCategory, setFilterCategory] = useState<'all' | 'web' | 'mobile' | 'ai'>('all');
  const [selectedPlanetToast, setSelectedPlanetToast] = useState<TechPlanet | null>(null);

  const modeContent = {
    all: {
      tag: 'ZURVIX COSMOS • FULL-STACK DIGITAL AGENCY',
      headline: 'Architecting digital worlds with modern technology.',
      subtitle: 'From planetary Next.js web ecosystems and native mobile applications to AI search dominance (GEO + LLM). Built for visionary businesses.',
      cta: 'Launch Your Project',
    },
    web: {
      tag: 'NEXT.JS 16 & LARAVEL PLANETARY ARCHITECTURE',
      headline: 'Blazing-fast web platforms with sub-second response times.',
      subtitle: 'Engineered with Next.js 16 App Router, React 19, TypeScript, and scalable Laravel REST/GraphQL backend engines.',
      cta: 'Build Next.js Web Platform',
    },
    mobile: {
      tag: 'FLUTTER NATIVE MOBILE ECOSYSTEM',
      headline: 'Fluid 120 FPS cross-platform mobile apps for iOS & Android.',
      subtitle: 'Single synchronized codebase with native device performance, cloud databases, push notifications, and store publishing support.',
      cta: 'Build Mobile Application',
    },
    ai: {
      tag: 'AI SEARCH & GEO / LLM DOMINANCE',
      headline: 'Dominate Google & modern AI answer engines.',
      subtitle: 'Generative Engine Optimization (GEO) & LLM entity citations to get recommended by ChatGPT, Claude, Perplexity, and Gemini.',
      cta: 'Scale With AI & GEO',
    }
  };

  const handlePlanetSelect = (planet: TechPlanet) => {
    setSelectedPlanetToast(planet);
    setTimeout(() => setSelectedPlanetToast(null), 4000);
  };

  const current = modeContent[filterCategory];

  return (
    <section className="relative min-h-[85vh] sm:min-h-[92vh] pt-20 sm:pt-32 pb-10 sm:pb-16 flex flex-col justify-center overflow-hidden bg-[#030508]">
      
      {/* 1. Deep Space Canvas - Desktop Only (Planetary Orbit System) */}
      <div className="hidden lg:block absolute inset-0 z-0 pointer-events-auto">
        <CosmicTechCanvas
          filterCategory={filterCategory}
          onSelectPlanet={handlePlanetSelect}
        />
      </div>

      {/* 2. Mobile Ambient Cosmic Atmosphere - Ultra Clean, Minimal, Non-Crowded */}
      <div className="lg:hidden absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Soft Radial Ambient Aura */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] rounded-full bg-gradient-to-br from-[#00DF81]/12 via-[#38BDF8]/6 to-transparent blur-3xl" />
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[280px] h-[200px] rounded-full bg-emerald-950/20 blur-2xl" />
        
        {/* Subtle Minimal Star Dots */}
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:24px_24px]" />
      </div>

      {/* 3. Soft Gradient Lighting Overlays */}
      <div className="absolute top-0 left-0 right-0 h-24 sm:h-36 bg-gradient-to-b from-[#030508] via-[#030508]/80 to-transparent pointer-events-none z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-36 bg-gradient-to-t from-[#030508] via-[#030508]/90 to-transparent pointer-events-none z-10" />

      {/* 4. Hero Interactive Foreground Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full pointer-events-none">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Hero Command Column */}
          <div className="lg:col-span-6 space-y-4 sm:space-y-6 text-center lg:text-left pointer-events-auto">
            
            {/* Top Clean Mode Switcher Bar */}
            <div className="flex justify-center lg:justify-start">
              <div className="inline-flex items-center p-1 rounded-full border border-white/10 bg-[#080C11]/80 backdrop-blur-xl shadow-lg">
                {[
                  { key: 'all' as const, label: 'All', fullLabel: '🚀 All Systems' },
                  { key: 'web' as const, label: 'Web', fullLabel: '🌐 Web & Next' },
                  { key: 'mobile' as const, label: 'Mobile', fullLabel: '📱 Mobile' },
                  { key: 'ai' as const, label: 'AI & GEO', fullLabel: '🧠 AI & GEO' },
                ].map((tab) => {
                  const isActive = filterCategory === tab.key;
                  return (
                    <button
                      key={tab.key}
                      onClick={() => setFilterCategory(tab.key)}
                      className={`rounded-full px-3 sm:px-4 py-1 sm:py-1.5 text-[11px] sm:text-xs font-semibold transition-all duration-200 cursor-pointer ${
                        isActive
                          ? 'bg-[#00DF81] text-[#05080A] font-bold shadow-md shadow-[#00DF81]/25'
                          : 'text-gray-400 hover:text-white hover:bg-white/[0.06]'
                      }`}
                    >
                      <span className="sm:hidden">{tab.label}</span>
                      <span className="hidden sm:inline">{tab.fullLabel}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Main Headline & Subtitle */}
            <div key={filterCategory} className="space-y-2.5 sm:space-y-4 animate-in fade-in duration-300 ease-out pt-1">
              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.2] sm:leading-[1.14]">
                {current.headline.split(' ').map((word, i) => {
                  if (
                    word.toLowerCase().includes('digital') ||
                    word.toLowerCase().includes('worlds') ||
                    word.toLowerCase().includes('sub-second') ||
                    word.toLowerCase().includes('120') ||
                    word.toLowerCase().includes('modern') ||
                    word.toLowerCase().includes('planetary')
                  ) {
                    return (
                      <span key={i} className="text-gradient-green inline-block mr-1 sm:mr-1.5">
                        {word}{' '}
                      </span>
                    );
                  }
                  return <span key={i}>{word} </span>;
                })}
              </h1>

              {/* Subtitle */}
              <p className="text-xs sm:text-sm lg:text-base text-gray-400 max-w-lg mx-auto lg:mx-0 font-normal leading-relaxed">
                {current.subtitle}
              </p>
            </div>

            {/* CTAs - Clean, Responsive & Non-Crowded */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-2.5 sm:gap-3.5 pt-2 max-w-sm sm:max-w-none mx-auto lg:mx-0">
              <button
                onClick={onStartProject}
                className="inline-flex items-center justify-center space-x-2 rounded-full bg-[#00DF81] px-5 sm:px-7 py-3 text-xs sm:text-sm font-bold text-[#05080A] hover:bg-[#00F58D] transition-all duration-200 shadow-lg shadow-[#00DF81]/20 hover:shadow-xl hover:shadow-[#00DF81]/35 cursor-pointer"
              >
                <span>{current.cta}</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </button>

              <a
                href="#pricing"
                className="inline-flex items-center justify-center space-x-2 rounded-full border border-white/15 bg-white/[0.04] backdrop-blur-lg px-5 sm:px-6 py-3 text-xs sm:text-sm font-semibold text-gray-200 hover:text-white hover:bg-white/10 hover:border-white/30 transition-all duration-200"
              >
                <span>Explore Packages (From €300)</span>
              </a>
            </div>

            {/* Orbiting Stacks Hint - Desktop Only */}
            <div className="hidden lg:flex pt-3 border-t border-white/[0.08] items-center justify-start space-x-2 text-xs font-mono text-gray-400">
              <Globe2 className="h-3.5 w-3.5 text-[#00DF81] shrink-0" />
              <span>Hover &amp; click any orbiting tech planet to inspect architecture</span>
            </div>

          </div>

          {/* Right Empty Spacer Column (Desktop Planetary System Area) */}
          <div className="hidden lg:block lg:col-span-6 pointer-events-none" />

        </div>

        {/* Mobile Small Planetary Tech Nexus Element (Clean, Self-Contained, Proportional) */}
        <div className="sm:hidden mt-6 pointer-events-auto">
          <MobileCosmicNexus
            filterCategory={filterCategory}
            onSelectPlanet={handlePlanetSelect}
          />
        </div>

        {/* Minimalist Mobile & Desktop Telemetry Row */}
        {/* Mobile View: Minimalist 3-Pillar Proof Bar */}
        <div className="sm:hidden mt-5 pt-4 border-t border-white/[0.08] flex items-center justify-around text-center pointer-events-auto">
          <div>
            <p className="text-sm font-extrabold text-[#00DF81] font-mono">99/100</p>
            <p className="text-[10px] text-gray-400 font-medium mt-0.5">Core Vitals</p>
          </div>
          <div className="h-6 w-[1px] bg-white/10" />
          <div>
            <p className="text-sm font-extrabold text-[#00DF81] font-mono">&lt; 100ms</p>
            <p className="text-[10px] text-gray-400 font-medium mt-0.5">Edge Speed</p>
          </div>
          <div className="h-6 w-[1px] bg-white/10" />
          <div>
            <p className="text-sm font-extrabold text-[#00DF81] font-mono">100%</p>
            <p className="text-[10px] text-gray-400 font-medium mt-0.5">IP Rights</p>
          </div>
        </div>

        {/* Desktop / Tablet View: 4 Polished Telemetry Cards */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mt-12 lg:mt-16 pt-6 border-t border-white/[0.08] text-center pointer-events-auto">
          {[
            { label: 'Core Web Vitals', val: '99 / 100', sub: 'Sub-second render' },
            { label: 'Server Latency', val: '< 100ms', sub: 'Edge cloud routing' },
            { label: 'Senior Experience', val: '7+ Years', sub: 'Fahad Al Noman' },
            { label: 'Source Code & IP', val: '100%', sub: 'Complete ownership' },
          ].map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-white/[0.08] bg-[#080C11]/80 backdrop-blur-xl p-4 transition-all duration-300 hover:border-[#00DF81]/40 hover:bg-[#0A1017]/90"
            >
              <p className="text-xl lg:text-2xl font-extrabold text-[#00DF81] font-mono">{item.val}</p>
              <h4 className="text-xs font-bold text-white mt-1 tracking-tight">{item.label}</h4>
              <p className="text-[10px] text-gray-400 mt-0.5 font-mono">{item.sub}</p>
            </div>
          ))}
        </div>

      </div>

      {/* Interactive Selected Tech Planet Toast Modal - Mobile Sheet */}
      {selectedPlanetToast && (
        <div className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:bottom-6 z-50 rounded-2xl border border-[#00DF81] bg-[#080C11]/95 backdrop-blur-2xl p-4 sm:p-5 shadow-2xl animate-in fade-in slide-in-from-bottom-3 duration-300 ease-out max-w-sm mx-auto sm:mx-0">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center space-x-2">
              <span className="h-3 w-3 rounded-full shrink-0" style={{ backgroundColor: selectedPlanetToast.color }} />
              <h4 className="text-sm font-bold text-white">{selectedPlanetToast.name}</h4>
            </div>
            <span className="text-[10px] font-mono font-bold text-[#00DF81] uppercase bg-[#00DF81]/15 px-2 py-0.5 rounded-full">
              {selectedPlanetToast.category}
            </span>
          </div>
          <p className="text-xs text-emerald-400 font-mono">{selectedPlanetToast.metric}</p>
          <p className="text-xs text-gray-300 mt-1 leading-relaxed">{selectedPlanetToast.description}</p>
          <button
            onClick={onStartProject}
            className="mt-3 w-full rounded-xl bg-[#00DF81] py-2.5 text-xs font-bold text-black hover:bg-[#00F58D] transition-colors cursor-pointer"
          >
            Discuss {selectedPlanetToast.name} Architecture →
          </button>
        </div>
      )}

    </section>
  );
}
