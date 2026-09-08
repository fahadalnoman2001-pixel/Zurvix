'use client';

import React from 'react';
import { Award, Code2, Globe2, ShieldCheck, Sparkles, Smartphone, BarChart3, Clock } from 'lucide-react';

export default function TrustBar() {
  const highlights = [
    { icon: Award, label: '7+ Years Experience', detail: 'Founder-led precision' },
    { icon: Code2, label: 'Modern Tech Stack', detail: 'Next.js, Laravel, Flutter' },
    { icon: Globe2, label: '20+ Brands & Apps', detail: 'Global enterprise scale' },
    { icon: Smartphone, label: 'Web & Mobile Ready', detail: 'iOS, Android & Responsive' },
    { icon: BarChart3, label: 'SEO, GEO & LLM', detail: 'AI search engine citation' },
    { icon: Clock, label: '24/7 Digital Support', detail: 'Continuous uptime & security' },
  ];

  return (
    <div className="border-y border-white/10 bg-[#0B0F15]/60 backdrop-blur-md py-6 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex items-center space-x-3 group transition-transform duration-200 hover:-translate-y-0.5"
              >
                <div className="h-10 w-10 shrink-0 rounded-xl border border-white/10 bg-white/[0.03] flex items-center justify-center text-[#00DF81] group-hover:border-[#00DF81]/40 group-hover:bg-[#00DF81]/10 transition-colors">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold text-white tracking-tight group-hover:text-[#00DF81] transition-colors">
                    {item.label}
                  </p>
                  <p className="text-[11px] text-gray-400">
                    {item.detail}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
