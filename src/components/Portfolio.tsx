'use client';

import React, { useState } from 'react';
import { portfolioProjects, Project } from '@/data/projects';
import { Sparkles, ArrowRight, CheckCircle2, X, Info } from 'lucide-react';

interface PortfolioProps {
  onOpenProjectInquiry: (projectName: string) => void;
}

export default function Portfolio({ onOpenProjectInquiry }: PortfolioProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories = ['All', 'Websites', 'Ecommerce', 'Apps', 'Business', 'Marketing'];

  const filteredProjects = selectedCategory === 'All'
    ? portfolioProjects
    : portfolioProjects.filter((p) => p.category === selectedCategory);

  return (
    <section id="portfolio" className="py-24 relative overflow-hidden bg-[#05080A]">
      {/* Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#00DF81]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center space-x-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1 text-xs font-mono font-medium text-[#00DF81]">
            <span>// 01 — FEATURED WORK</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Our Work <span className="text-gradient-green">Speaks For Us.</span>
          </h2>

          <p className="text-sm sm:text-base text-gray-400 max-w-xl mx-auto">
            A curated portfolio of high-performance digital products engineered for measurable conversion and growth across 20+ brands.
          </p>
        </div>

        {/* Category Filters (Scrollable on Mobile) */}
        <div className="flex justify-center mb-10 sm:mb-14">
          <div className="flex items-center overflow-x-auto no-scrollbar max-w-[94vw] gap-2 p-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-full px-4 sm:px-5 py-2 text-xs font-semibold shrink-0 transition-all duration-200 cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#00DF81] text-[#05080A] font-bold shadow-md shadow-[#00DF81]/25 scale-105'
                    : 'border border-white/[0.08] bg-white/[0.02] text-gray-400 hover:text-white hover:bg-white/[0.06]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid - Single Scrollable Line on Mobile */}
        <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-4 -mx-4 px-4 sm:mx-0 sm:px-0">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setActiveModalProject(project)}
              className="w-[85vw] sm:w-[55vw] md:w-auto shrink-0 snap-center group relative rounded-3xl border border-white/[0.08] bg-[#080C11] p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:border-[#00DF81]/30 hover:bg-[#0A0F16] hover:shadow-2xl hover:shadow-[#00DF81]/5 cursor-pointer"
            >
              {/* Card Header & Category */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-white/[0.04] border border-white/10 px-3 py-1 text-[11px] font-mono text-[#00DF81]">
                    {project.category}
                  </span>

                  {project.highlightMetric && (
                    <span className="text-xs font-bold text-emerald-400 font-mono">
                      {project.highlightMetric}
                    </span>
                  )}
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-[#00DF81] transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-xs text-gray-400 mt-1 font-mono">
                    Industry: <span className="text-gray-200">{project.industry}</span>
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Stack Tags */}
                <div className="pt-2">
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="rounded-md bg-[#00DF81]/10 border border-[#00DF81]/20 px-2 py-0.5 text-[10px] font-mono text-[#00DF81]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between">
                <span className="text-[11px] text-gray-400 font-mono">
                  {project.attributionNote || 'Engineered by ZURVIX'}
                </span>
                <span className="inline-flex items-center space-x-1 text-xs font-bold text-[#00DF81] group-hover:translate-x-1 transition-transform">
                  <span>View Details</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Attribution & Transparency Notice */}
        <div className="mt-14 rounded-3xl border border-white/[0.08] bg-[#080C11] p-6 flex items-start space-x-4 max-w-4xl mx-auto">
          <div className="h-8 w-8 rounded-lg bg-[#00DF81]/10 flex items-center justify-center text-[#00DF81] shrink-0 mt-0.5">
            <Info className="h-4 w-4" />
          </div>
          <div className="text-xs text-gray-400 leading-relaxed">
            <strong className="text-white font-semibold block mb-0.5">Portfolio Attribution &amp; Engineering Integrity:</strong>
            ZURVIX takes pride in transparent craftsmanship. The showcase highlights projects directly designed, engineered, or contributed to by our founder and senior team across 7+ years of digital product delivery.
          </div>
        </div>

      </div>

      {/* Project Detail Modal */}
      {activeModalProject && (
        <div className="fixed inset-0 z-[9990] flex items-center justify-center p-4 sm:p-6">
          <div
            className="absolute inset-0 bg-black/85 backdrop-blur-md"
            onClick={() => setActiveModalProject(null)}
          />

          <div className="relative w-full max-w-2xl overflow-hidden rounded-3xl border border-white/10 bg-[#080C11] p-6 sm:p-8 shadow-2xl text-white z-10 animate-in fade-in zoom-in-95 duration-200">
            {/* Header */}
            <div className="flex items-start justify-between border-b border-white/10 pb-4">
              <div>
                <span className="rounded-full bg-[#00DF81]/15 px-3 py-1 text-xs font-semibold text-[#00DF81] border border-[#00DF81]/30">
                  {activeModalProject.category}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-2">
                  {activeModalProject.name}
                </h3>
                <p className="text-xs text-gray-400 mt-0.5 font-mono">
                  Industry: <span className="text-gray-200">{activeModalProject.industry}</span>
                </p>
              </div>

              <button
                onClick={() => setActiveModalProject(null)}
                className="rounded-lg p-2 text-gray-400 hover:bg-white/10 hover:text-white transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="mt-6 space-y-5 text-left">
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-[#00DF81] mb-1">
                  Project Overview
                </h4>
                <p className="text-sm text-gray-300 leading-relaxed">
                  {activeModalProject.description}
                </p>
              </div>

              {activeModalProject.highlightMetric && (
                <div className="rounded-2xl border border-[#00DF81]/30 bg-[#00DF81]/10 p-4 flex items-center justify-between">
                  <span className="text-xs text-gray-300">Key Performance Metric</span>
                  <span className="text-lg font-bold text-[#00DF81] font-mono">
                    {activeModalProject.highlightMetric}
                  </span>
                </div>
              )}

              {/* Services List */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-[#00DF81] mb-2">
                  Scope of Work
                </h4>
                <div className="grid grid-cols-2 gap-2">
                  {activeModalProject.services.map((srv, idx) => (
                    <div key={idx} className="flex items-center space-x-2 text-xs text-gray-300 bg-white/[0.02] border border-white/5 p-2 rounded-lg">
                      <CheckCircle2 className="h-3.5 w-3.5 text-[#00DF81] shrink-0" />
                      <span>{srv}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-[#00DF81] mb-2">
                  Architecture &amp; Technologies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeModalProject.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="rounded-lg bg-[#00DF81]/15 border border-[#00DF81]/30 px-3 py-1 text-xs font-mono font-semibold text-[#00DF81]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="mt-8 pt-5 border-t border-white/10 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => {
                  const name = activeModalProject.name;
                  setActiveModalProject(null);
                  onOpenProjectInquiry(name);
                }}
                className="flex-1 flex items-center justify-center space-x-2 rounded-full bg-[#00DF81] px-5 py-3.5 text-xs sm:text-sm font-bold text-[#05080A] hover:bg-[#00F58D] transition-colors cursor-pointer"
              >
                <span>Build a Project Like This</span>
                <ArrowRight className="h-4 w-4" />
              </button>

              <button
                onClick={() => setActiveModalProject(null)}
                className="rounded-full border border-white/10 px-5 py-3.5 text-xs font-semibold text-gray-400 hover:bg-white/5 hover:text-white"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
