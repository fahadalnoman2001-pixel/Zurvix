'use client';

import React from 'react';
import { ExternalLink, Quote, CheckCircle2 } from 'lucide-react';
import SocialLinks from './SocialLinks';

export default function AboutFounder() {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#05080A]">
      {/* Subtle Cosmic Ambient Glow */}
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] bg-[#00DF81]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top: About ZURVIX Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center space-x-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1 text-xs font-mono font-medium text-[#00DF81]">
              <span>{'// 01 — ABOUT ZURVIX'}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Built From Experience.{' '}
              <span className="text-gradient-green">Designed For What&apos;s Next.</span>
            </h2>

            <div className="space-y-4 text-gray-300 text-sm sm:text-base leading-relaxed">
              <p>
                <strong className="text-white font-semibold">ZURVIX</strong> is a modern digital agency focused on building high-converting websites, scalable web and mobile applications, and automated growth systems for ambitious businesses.
              </p>
              <p>
                With <strong className="text-[#00DF81] font-semibold">7+ years of experience</strong> across user interface design, full-stack software development, and technical digital marketing, our mission is straightforward: create technology that looks exceptional, performs flawlessly, and helps businesses achieve sustainable growth.
              </p>
              <p>
                From a business launching its first web platform to an enterprise scaling a unified web, mobile app, and marketing ecosystem, ZURVIX brings strategy, design, engineering, and digital visibility seamlessly together.
              </p>
            </div>

            {/* Quick Feature Pillars */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="rounded-2xl border border-white/[0.08] bg-[#080C11] p-5">
                <p className="text-3xl font-extrabold text-white font-mono">7+ Yrs</p>
                <p className="text-xs text-gray-400 mt-1 font-mono">Deep Industry Mastery</p>
              </div>
              <div className="rounded-2xl border border-white/[0.08] bg-[#080C11] p-5">
                <p className="text-3xl font-extrabold text-[#00DF81] font-mono">20+ Brands</p>
                <p className="text-xs text-gray-400 mt-1 font-mono">Products Built & Scaled</p>
              </div>
            </div>
          </div>

          {/* Right Visual Story Card */}
          <div className="lg:col-span-6">
            <div className="rounded-3xl border border-white/[0.08] bg-[#080C11] p-8 sm:p-10 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#00DF81]/10 rounded-full blur-3xl pointer-events-none" />

              <h3 className="text-xs font-mono uppercase font-bold tracking-widest text-[#00DF81] mb-6">
                {'// THE ZURVIX ETHOS'}
              </h3>

              <div className="space-y-5 text-xs sm:text-sm text-gray-300">
                <div className="flex items-start space-x-3.5">
                  <div className="h-5 w-5 rounded-full bg-[#00DF81]/15 flex items-center justify-center text-[#00DF81] shrink-0 mt-0.5">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                  </div>
                  <div>
                    <strong className="text-white block mb-0.5">Radical Simplicity</strong>
                    <span className="text-gray-400 text-xs">Clean code architectures, intuitive user flows, zero unnecessary bloat.</span>
                  </div>
                </div>
                <div className="flex items-start space-x-3.5">
                  <div className="h-5 w-5 rounded-full bg-[#00DF81]/15 flex items-center justify-center text-[#00DF81] shrink-0 mt-0.5">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                  </div>
                  <div>
                    <strong className="text-white block mb-0.5">Commercial Velocity</strong>
                    <span className="text-gray-400 text-xs">Fast time to market so businesses validate and monetize quicker.</span>
                  </div>
                </div>
                <div className="flex items-start space-x-3.5">
                  <div className="h-5 w-5 rounded-full bg-[#00DF81]/15 flex items-center justify-center text-[#00DF81] shrink-0 mt-0.5">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                  </div>
                  <div>
                    <strong className="text-white block mb-0.5">Future Proofing</strong>
                    <span className="text-gray-400 text-xs">Modern Next.js, Laravel, Flutter, and AI search architectures.</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono">
                <span className="text-gray-500">Global Delivery</span>
                <span className="font-semibold text-white">WhatsApp: +356 99784477</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom: Founder Typography Editorial Section */}
        <div className="rounded-3xl border border-white/[0.1] bg-gradient-to-r from-[#080C11] via-[#0A0F16] to-[#080C11] p-8 sm:p-14 shadow-2xl relative overflow-hidden text-center max-w-4xl mx-auto">
          {/* Quote Icon Background */}
          <Quote className="absolute -top-6 -left-6 h-32 w-32 text-white/[0.02] pointer-events-none" />
          <Quote className="absolute -bottom-6 -right-6 h-32 w-32 text-[#00DF81]/[0.03] pointer-events-none rotate-180" />

          <div className="relative z-10 space-y-6">
            <span className="inline-flex items-center space-x-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1 text-xs font-mono font-medium text-[#00DF81]">
              <span>{'// FOUNDER PERSPECTIVE'}</span>
            </span>

            {/* Editorial Quote */}
            <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-snug max-w-3xl mx-auto">
              “Technology should not make business more complicated. It should make growth easier.”
            </blockquote>

            {/* Founder Bio */}
            <div className="pt-2 space-y-1">
              <h3 className="text-xl font-bold text-white tracking-tight">
                Fahad Al Noman
              </h3>
              <p className="text-xs font-mono uppercase tracking-wider text-[#00DF81]">
                Founder — ZURVIX (7+ Years Experience)
              </p>
              <p className="text-xs sm:text-sm text-gray-400 max-w-lg mx-auto pt-1">
                Digital entrepreneur focused on building modern digital products, businesses and scalable growth systems.
              </p>
            </div>

            {/* Link to Founder Portfolio & Social Links */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://fahadalnoman.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 rounded-full border border-white/15 bg-white/[0.03] px-6 py-3 text-xs font-bold text-white hover:bg-white/10 hover:border-[#00DF81] transition-all duration-200 group cursor-pointer"
              >
                <span>Visit fahadalnoman.com</span>
                <ExternalLink className="h-3.5 w-3.5 text-[#00DF81] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <SocialLinks variant="icons-only" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
