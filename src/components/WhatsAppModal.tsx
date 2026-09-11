'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { X, MessageSquare, ArrowRight, ShieldCheck, Zap, Clock } from 'lucide-react';
import { PricingPackage } from '@/data/packages';

interface WhatsAppModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPackage: PricingPackage | null;
}

export default function WhatsAppModal({ isOpen, onClose, selectedPackage }: WhatsAppModalProps) {
  const [customNote, setCustomNote] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleClose = () => {
    setCustomNote('');
    onClose();
  };

  const defaultMsg = selectedPackage
    ? selectedPackage.whatsAppMessage
    : 'Hello ZURVIX, I would like to discuss a custom digital project for my business.';

  const finalMessage = customNote
    ? `${defaultMsg}\n\nAdditional Details: ${customNote}`
    : defaultMsg;

  const handleWhatsAppRedirect = () => {
    const encoded = encodeURIComponent(finalMessage);
    const url = `https://wa.me/35699784477?text=${encoded}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    handleClose();
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(finalMessage);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-[9990] flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        onClick={handleClose}
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-2xl border border-white/10 bg-[#0B0F15] p-5 sm:p-8 shadow-2xl shadow-[#00DF81]/10 text-white z-10 animate-in fade-in zoom-in-95 duration-200">
        {/* Glow Accent */}
        <div className="absolute top-0 right-0 -mr-16 -mt-16 h-48 w-48 rounded-full bg-[#00DF81]/15 blur-3xl pointer-events-none" />

        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-5">
          <div className="flex items-center space-x-3">
            <div className="relative h-7 w-28">
              <Image
                src="/brand/zurvix-dark-mode.png"
                alt="ZURVIX"
                fill
                className="object-contain"
              />
            </div>
            <span className="rounded-full bg-[#00DF81]/10 px-2.5 py-0.5 text-xs font-semibold text-[#00DF81] border border-[#00DF81]/20">
              Direct Sales
            </span>
          </div>

          <button
            onClick={handleClose}
            className="rounded-lg p-1.5 text-gray-400 hover:bg-white/10 hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="mt-6 space-y-4">
          <div>
            <h3 className="text-xl font-bold tracking-tight text-white">
              Let&apos;s discuss your project.
            </h3>
            <p className="text-sm text-gray-400 mt-1">
              Connect directly with our engineering and growth team on WhatsApp.
            </p>
          </div>

          {/* Selected Package Banner */}
          {selectedPackage && (
            <div className="rounded-xl border border-[#00DF81]/30 bg-[#00DF81]/5 p-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#00DF81]">
                  You&apos;re interested in:
                </span>
                <span className="rounded bg-[#00DF81]/20 px-2 py-0.5 text-xs font-bold text-white">
                  {selectedPackage.price}
                </span>
              </div>
              <p className="mt-1 text-base font-bold text-white">
                {selectedPackage.title}
              </p>
              <p className="mt-0.5 text-xs text-gray-300">
                {selectedPackage.description}
              </p>
            </div>
          )}

          {/* Message Preview Box */}
          <div className="space-y-1.5">
            <label className="text-xs font-medium text-gray-300 flex items-center justify-between">
              <span>Pre-filled WhatsApp Message:</span>
              <button
                type="button"
                onClick={handleCopy}
                className="text-xs text-[#00DF81] hover:underline cursor-pointer"
              >
                {copied ? 'Copied to clipboard!' : 'Copy message'}
              </button>
            </label>
            <div className="rounded-lg border border-white/10 bg-black/40 p-3 text-xs text-gray-300 font-mono leading-relaxed">
              {defaultMsg}
            </div>
          </div>

          {/* Optional extra note */}
          <div>
            <label className="block text-xs font-medium text-gray-300 mb-1">
              Add any specific questions or project notes (optional):
            </label>
            <textarea
              rows={2}
              value={customNote}
              onChange={(e) => setCustomNote(e.target.value)}
              placeholder="e.g. I need delivery within 2 weeks and Shopify integration..."
              className="w-full rounded-lg border border-white/10 bg-white/5 p-2.5 text-xs text-white placeholder-gray-500 focus:border-[#00DF81] focus:outline-none focus:ring-1 focus:ring-[#00DF81]"
            />
          </div>

          {/* Trust Guarantees */}
          <div className="grid grid-cols-3 gap-2 pt-1 text-center">
            <div className="flex flex-col items-center rounded-lg border border-white/5 bg-white/[0.02] p-2">
              <Clock className="h-4 w-4 text-[#00DF81] mb-1" />
              <span className="text-[11px] text-gray-400">Rapid Response</span>
              <span className="text-[10px] font-semibold text-white">&lt; 30 Mins</span>
            </div>
            <div className="flex flex-col items-center rounded-lg border border-white/5 bg-white/[0.02] p-2">
              <ShieldCheck className="h-4 w-4 text-[#00DF81] mb-1" />
              <span className="text-[11px] text-gray-400">Founder Led</span>
              <span className="text-[10px] font-semibold text-white">7+ Yrs Exp</span>
            </div>
            <div className="flex flex-col items-center rounded-lg border border-white/5 bg-white/[0.02] p-2">
              <Zap className="h-4 w-4 text-[#00DF81] mb-1" />
              <span className="text-[11px] text-gray-400">No Pressure</span>
              <span className="text-[10px] font-semibold text-white">Free Strategy</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <button
            onClick={handleWhatsAppRedirect}
            className="flex-1 flex items-center justify-center space-x-2 rounded-xl bg-[#00DF81] px-5 py-3.5 text-sm font-bold text-[#05080A] hover:bg-[#00F58D] transition-all duration-200 shadow-lg shadow-[#00DF81]/25 cursor-pointer"
          >
            <MessageSquare className="h-4 w-4 fill-current" />
            <span>Continue to WhatsApp</span>
            <ArrowRight className="h-4 w-4" />
          </button>
          <button
            onClick={handleClose}
            className="rounded-xl border border-white/10 px-4 py-3 text-xs font-semibold text-gray-400 hover:bg-white/5 hover:text-white transition-colors cursor-pointer"
          >
            Cancel
          </button>
        </div>

        <p className="mt-3 text-center text-[11px] text-gray-500">
          WhatsApp Direct: <span className="text-gray-300 font-mono">+356 99784477</span> • Email: <span className="text-gray-300 font-mono">hello@zurvix.com</span>
        </p>
      </div>
    </div>
  );
}
