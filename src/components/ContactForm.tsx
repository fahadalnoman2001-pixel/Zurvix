'use client';

import React, { useState } from 'react';
import { MessageSquare, Mail, ArrowRight, CheckCircle2, ShieldCheck, Loader2, AlertCircle } from 'lucide-react';
import SocialLinks from './SocialLinks';
import { submitContact } from '@/lib/api';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    email: '',
    phone: '',
    serviceRequired: 'Website',
    budget: '€500 - €1,500',
    description: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const services = [
    'Website',
    'Mobile App',
    'Ecommerce',
    'Digital Marketing',
    'SEO / GEO / LLM',
    'Maintenance',
    'Custom Project',
    'Other'
  ];

  const budgetTiers = [
    'Under €500',
    '€500 - €1,000',
    '€1,000 - €2,500',
    '€2,500 - €5,000',
    '€5,000+'
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await submitContact({
        name: formData.name,
        business_name: formData.businessName,
        email: formData.email,
        phone: formData.phone,
        service_required: formData.serviceRequired,
        budget: formData.budget,
        message: formData.description || 'Project inquiry submitted via website form.',
      });
      setSubmitted(true);
    } catch (err: unknown) {
      console.error('Contact submission error:', err);
      const msg = err instanceof Error ? err.message : 'Unable to submit your inquiry. Please try again or message us on WhatsApp.';
      setError(msg);
    } finally {
      setLoading(false);
    }
  };

  const handleSendToWhatsApp = () => {
    const text = `Hello ZURVIX, I've submitted a project inquiry from the website.\n\n*Name:* ${formData.name || 'N/A'}\n*Business:* ${formData.businessName || 'N/A'}\n*Email:* ${formData.email || 'N/A'}\n*Phone/WhatsApp:* ${formData.phone || 'N/A'}\n*Service:* ${formData.serviceRequired}\n*Budget:* ${formData.budget}\n*Project Details:* ${formData.description || 'Discuss via chat'}`;
    const url = `https://wa.me/35699784477?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#05080A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1 text-xs font-mono font-medium text-[#00DF81]">
            <span>{'// START A CONVERSATION'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Let&apos;s Build <span className="text-gradient-green">Something Great.</span>
          </h2>

          <p className="text-sm sm:text-base text-gray-400 max-w-xl mx-auto">
            Tell us about your product goals, timeline, and budget. Our senior team will provide a transparent proposal and architectural roadmap.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-3xl border border-white/[0.08] bg-[#080C11] p-8 space-y-6">
              <span className="text-xs font-mono uppercase tracking-widest text-[#00DF81]">
                {'// DIRECT CHANNELS'}
              </span>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                Prefer immediate chat? Connect directly with our founder and tech leads on WhatsApp or email.
              </p>

              <div className="space-y-3">
                {/* WhatsApp */}
                <a
                  href="https://wa.me/35699784477"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 rounded-2xl border border-[#00DF81]/30 bg-[#00DF81]/10 p-4 transition-all duration-200 hover:bg-[#00DF81]/15 hover:border-[#00DF81]/50 group"
                >
                  <div className="h-11 w-11 rounded-xl bg-[#00DF81] flex items-center justify-center text-[#05080A] shrink-0 font-bold">
                    <MessageSquare className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#00DF81]">
                      Fastest Response (&lt;30m)
                    </span>
                    <p className="text-sm sm:text-base font-bold text-white group-hover:text-[#00DF81] transition-colors">
                      +356 99784477
                    </p>
                    <p className="text-[11px] text-gray-400">Click to open WhatsApp</p>
                  </div>
                </a>

                {/* Email */}
                <a
                  href="mailto:hello@zurvix.com"
                  className="flex items-center space-x-4 rounded-2xl border border-white/[0.08] bg-white/[0.02] p-4 transition-all duration-200 hover:bg-white/[0.05] hover:border-white/20 group"
                >
                  <div className="h-11 w-11 rounded-xl bg-white/10 flex items-center justify-center text-white shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-gray-400">
                      Official Inquiries
                    </span>
                    <p className="text-sm sm:text-base font-bold text-white group-hover:text-[#00DF81] transition-colors">
                      hello@zurvix.com
                    </p>
                    <p className="text-[11px] text-gray-400">Response within 12 hours</p>
                  </div>
                </a>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-white/[0.06]">
                <p className="text-xs font-mono uppercase tracking-wider text-gray-400 mb-3">
                  Follow ZURVIX on Social:
                </p>
                <SocialLinks variant="pills" showLabels={true} />
              </div>
            </div>

            {/* Quality Guarantees */}
            <div className="rounded-3xl border border-white/[0.08] bg-[#080C11] p-6 space-y-2.5">
              <div className="flex items-center space-x-2 text-xs font-bold text-white">
                <ShieldCheck className="h-4 w-4 text-[#00DF81]" />
                <span>NDA &amp; Confidentiality Protected</span>
              </div>
              <p className="text-xs text-gray-400 leading-relaxed">
                All client proposals, proprietary designs, and project briefs are strictly protected under standard non-disclosure agreements.
              </p>
            </div>
          </div>

          {/* Right Column: Premium Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-white/[0.08] bg-[#080C11] p-8 sm:p-10 shadow-2xl">
              
              {submitted ? (
                <div className="text-center py-12 space-y-6">
                  <div className="h-16 w-16 rounded-full bg-[#00DF81]/20 border border-[#00DF81] flex items-center justify-center text-[#00DF81] mx-auto animate-bounce">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-white">
                      Project Request Received!
                    </h3>
                    <p className="text-sm text-gray-300 max-w-md mx-auto">
                      Thank you for contacting ZURVIX. A senior architect will review your requirements and reply shortly.
                    </p>
                  </div>

                  <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                    <button
                      onClick={handleSendToWhatsApp}
                      className="inline-flex items-center justify-center space-x-2 rounded-full bg-[#00DF81] px-6 py-3.5 text-sm font-bold text-[#05080A] hover:bg-[#00F58D] transition-colors cursor-pointer"
                    >
                      <MessageSquare className="h-4 w-4" />
                      <span>Forward Instantly to WhatsApp</span>
                    </button>

                    <button
                      onClick={() => setSubmitted(false)}
                      className="rounded-full border border-white/10 px-5 py-3 text-xs font-semibold text-gray-400 hover:bg-white/5 cursor-pointer"
                    >
                      Send Another Request
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-medium text-gray-300 mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Fahad Al Noman"
                        className="w-full rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3 text-xs text-white placeholder-gray-500 focus:border-[#00DF81] focus:outline-none focus:ring-1 focus:ring-[#00DF81]"
                      />
                    </div>

                    {/* Business Name */}
                    <div>
                      <label className="block text-xs font-medium text-gray-300 mb-1.5">
                        Business / Company Name
                      </label>
                      <input
                        type="text"
                        value={formData.businessName}
                        onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                        placeholder="Company Ltd"
                        className="w-full rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3 text-xs text-white placeholder-gray-500 focus:border-[#00DF81] focus:outline-none focus:ring-1 focus:ring-[#00DF81]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Email */}
                    <div>
                      <label className="block text-xs font-medium text-gray-300 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="hello@example.com"
                        className="w-full rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3 text-xs text-white placeholder-gray-500 focus:border-[#00DF81] focus:outline-none focus:ring-1 focus:ring-[#00DF81]"
                      />
                    </div>

                    {/* Phone / WhatsApp */}
                    <div>
                      <label className="block text-xs font-medium text-gray-300 mb-1.5">
                        Phone / WhatsApp Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+356 9978 4477"
                        className="w-full rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3 text-xs text-white placeholder-gray-500 focus:border-[#00DF81] focus:outline-none focus:ring-1 focus:ring-[#00DF81]"
                      />
                    </div>
                  </div>

                  {/* Service Selection */}
                  <div>
                    <label className="block text-xs font-medium text-gray-300 mb-1.5">
                      Service Required *
                    </label>
                    <select
                      value={formData.serviceRequired}
                      onChange={(e) => setFormData({ ...formData, serviceRequired: e.target.value })}
                      className="w-full rounded-xl border border-white/[0.08] bg-[#0A0F16] px-4 py-3 text-xs text-white focus:border-[#00DF81] focus:outline-none focus:ring-1 focus:ring-[#00DF81]"
                    >
                      {services.map((svc) => (
                        <option key={svc} value={svc} className="bg-[#0B0F15] text-white">
                          {svc}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Budget Selector */}
                  <div>
                    <label className="block text-xs font-medium text-gray-300 mb-2">
                      Approximate Project Budget
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {budgetTiers.map((b) => (
                        <button
                          type="button"
                          key={b}
                          onClick={() => setFormData({ ...formData, budget: b })}
                          className={`rounded-full px-3.5 py-1.5 text-xs font-medium transition-all cursor-pointer ${
                            formData.budget === b
                              ? 'bg-[#00DF81] text-[#05080A] font-bold'
                              : 'border border-white/[0.08] bg-white/[0.03] text-gray-300 hover:bg-white/[0.06]'
                          }`}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Project Description */}
                  <div>
                    <label className="block text-xs font-medium text-gray-300 mb-1.5">
                      Project Description &amp; Goals
                    </label>
                    <textarea
                      rows={4}
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      placeholder="Briefly describe what you want to build, any reference websites, and your target timeline..."
                      className="w-full rounded-xl border border-white/[0.08] bg-white/[0.03] p-4 text-xs text-white placeholder-gray-500 focus:border-[#00DF81] focus:outline-none focus:ring-1 focus:ring-[#00DF81]"
                    />
                  </div>

                  {error && (
                    <div className="flex items-center space-x-2.5 rounded-xl border border-red-500/20 bg-red-500/10 p-3.5 text-xs text-red-400">
                      <AlertCircle className="h-4 w-4 shrink-0 text-red-400" />
                      <span>{error}</span>
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center space-x-2 rounded-full bg-[#00DF81] py-4 text-sm font-bold text-[#05080A] hover:bg-[#00F58D] transition-all duration-200 shadow-xl shadow-[#00DF81]/25 hover:scale-[1.01] disabled:opacity-60 cursor-pointer"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin text-black" />
                        <span>Sending Request...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Project Request</span>
                        <ArrowRight className="h-4 w-4" />
                      </>
                    )}
                  </button>

                  <p className="text-center text-[11px] text-gray-500 font-mono">
                    We respond within 30 minutes on business days.
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
