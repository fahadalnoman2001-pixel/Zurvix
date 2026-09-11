'use client';

import React, { useState } from 'react';
import { Mail, CheckCircle2, AlertCircle, ArrowRight, Sparkles, Loader2 } from 'lucide-react';
import { subscribeNewsletter } from '@/lib/api';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setStatus('error');
      setErrorMessage('Please provide a valid email address.');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    try {
      await subscribeNewsletter(email);
      setStatus('success');
      setEmail('');
    } catch (err: unknown) {
      setStatus('error');
      setErrorMessage(
        err instanceof Error
          ? err.message
          : 'Unable to subscribe at this moment. Please try again later.'
      );
    }
  };

  return (
    <section className="py-20 relative overflow-hidden bg-[#05080A] border-t border-white/[0.06]">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[280px] bg-[#00DF81]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rounded-3xl border border-white/[0.08] bg-gradient-to-b from-[#0A0F16] to-[#06090D] p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-2xl">
          {/* Subtle Grid Pattern Overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none opacity-50" />

          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
            {/* Tag */}
            <div className="inline-flex items-center space-x-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1 text-xs font-mono font-medium text-[#00DF81]">
              <Sparkles className="h-3.5 w-3.5" />
              <span>{'// ENGINEERING & GROWTH DISPATCH'}</span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Get Architectural Guides &amp;{' '}
              <span className="text-gradient-green">Tech Breakdowns.</span>
            </h2>

            {/* Description */}
            <p className="text-sm sm:text-base text-gray-400 max-w-xl mx-auto leading-relaxed">
              Join founders and senior engineers receiving our monthly breakdown on AI search (GEO), Next.js architecture, and high-velocity digital product design.
            </p>

            {/* Form */}
            {status === 'success' ? (
              <div className="rounded-2xl border border-[#00DF81]/30 bg-[#00DF81]/10 p-6 max-w-md mx-auto space-y-2 animate-in fade-in duration-300">
                <div className="flex items-center justify-center space-x-2 text-[#00DF81] font-bold text-sm">
                  <CheckCircle2 className="h-5 w-5" />
                  <span>You are subscribed!</span>
                </div>
                <p className="text-xs text-gray-300">
                  Welcome to the Zurvix dispatch. Check your inbox for our latest engineering insights.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-3 text-[11px] text-[#00DF81] hover:underline font-mono"
                >
                  Subscribe another email
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-3">
                <div className="flex flex-col sm:flex-row items-center gap-2 rounded-2xl border border-white/[0.1] bg-white/[0.04] p-1.5 focus-within:border-[#00DF81]/60 focus-within:ring-1 focus-within:ring-[#00DF81]/60 transition-all">
                  <div className="flex items-center space-x-2 px-3 py-2 w-full">
                    <Mail className="h-4 w-4 text-gray-400 shrink-0" />
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your work email..."
                      disabled={status === 'loading'}
                      className="w-full bg-transparent text-xs sm:text-sm text-white placeholder-gray-500 focus:outline-none"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 rounded-xl bg-[#00DF81] px-5 py-3 text-xs font-bold text-[#05080A] hover:bg-[#00F58D] transition-all shrink-0 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 cursor-pointer shadow-lg shadow-[#00DF81]/20"
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        <span>Joining...</span>
                      </>
                    ) : (
                      <>
                        <span>Subscribe</span>
                        <ArrowRight className="h-3.5 w-3.5" />
                      </>
                    )}
                  </button>
                </div>

                {status === 'error' && (
                  <div className="flex items-center justify-center space-x-1.5 text-xs text-rose-400 font-medium pt-1">
                    <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {/* Subtext Reassurance */}
                <div className="flex items-center justify-center space-x-3 text-[11px] text-gray-500 font-mono pt-1">
                  <span>✦ 100% Spam-Free</span>
                  <span>•</span>
                  <span>1-Click Unsubscribe</span>
                  <span>•</span>
                  <span>Sent Monthly</span>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
