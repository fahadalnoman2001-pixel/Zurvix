'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowRight, MessageSquare } from 'lucide-react';
import SocialLinks from './SocialLinks';

interface NavbarProps {
  onOpenSalesModal?: () => void;
}

export default function Navbar({ onOpenSalesModal }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  const handleSalesClick = () => {
    if (onOpenSalesModal) {
      onOpenSalesModal();
    } else {
      window.open('https://wa.me/35699784477?text=' + encodeURIComponent('Hello ZURVIX, I would like to discuss a custom digital project for my business.'), '_blank');
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#05080A]/90 backdrop-blur-2xl border-b border-white/[0.08] py-3 shadow-2xl shadow-black/80'
            : 'bg-[#05080A]/60 backdrop-blur-md border-b border-white/[0.05] py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Brand Logo with Icon */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative h-8 sm:h-9 w-32 sm:w-36 transition-transform duration-200 group-hover:scale-105">
              <Image
                src="/brand/zurvix-dark-mode.png"
                alt="ZURVIX Logo"
                fill
                priority
                className="object-contain"
              />
            </div>
          </Link>

          {/* Desktop Navigation Capsule */}
          <nav className="hidden lg:flex items-center space-x-1 rounded-full border border-white/[0.08] bg-[#080C11]/80 px-3 py-1.5 backdrop-blur-xl shadow-lg shadow-black/40">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-1.5 text-xs font-semibold rounded-full transition-all duration-200 ${
                    isActive
                      ? 'bg-[#00DF81] text-[#05080A] shadow-md shadow-[#00DF81]/25 font-bold'
                      : 'text-gray-300 hover:text-white hover:bg-white/[0.06]'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Action */}
          <div className="hidden sm:flex items-center space-x-3">
            <a
              href="https://wa.me/35699784477"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1.5 text-xs font-mono font-medium text-gray-300 hover:text-[#00DF81] px-3 py-2 rounded-lg hover:bg-white/5 transition-colors"
            >
              <MessageSquare className="h-3.5 w-3.5 text-[#00DF81]" />
              <span>+356 99784477</span>
            </a>

            <button
              onClick={handleSalesClick}
              className="group relative inline-flex items-center justify-center space-x-2 rounded-full bg-[#00DF81] px-5 py-2.5 text-xs font-bold text-[#05080A] hover:bg-[#00F58D] transition-all duration-200 shadow-lg shadow-[#00DF81]/20 cursor-pointer hover:scale-105"
            >
              <span>Talk to Sales</span>
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex sm:hidden items-center space-x-2">
            <button
              onClick={handleSalesClick}
              className="rounded-full bg-[#00DF81] px-3.5 py-1.5 text-[11px] font-bold text-[#05080A]"
            >
              Talk to Sales
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="rounded-lg p-2 text-gray-300 hover:bg-white/10 hover:text-white transition-colors"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#05080A]/95 backdrop-blur-2xl flex flex-col justify-between p-6 pt-24 sm:hidden animate-in fade-in duration-200">
          <div className="space-y-4">
            <p className="text-xs font-mono uppercase tracking-widest text-[#00DF81]">
              // NAVIGATION
            </p>
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`text-xl font-bold py-3 px-4 rounded-2xl flex items-center justify-between transition-colors ${
                      isActive
                        ? 'bg-[#00DF81]/15 text-[#00DF81] border border-[#00DF81]/30'
                        : 'text-white hover:text-[#00DF81] border-b border-white/5'
                    }`}
                  >
                    <span>{link.name}</span>
                    <ArrowRight className="h-4 w-4 text-gray-500" />
                  </Link>
                );
              })}
            </nav>
          </div>

          <div className="space-y-4 border-t border-white/10 pt-6">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                handleSalesClick();
              }}
              className="w-full flex items-center justify-center space-x-2 rounded-2xl bg-[#00DF81] py-4 text-sm font-bold text-[#05080A] shadow-lg shadow-[#00DF81]/30"
            >
              <MessageSquare className="h-4 w-4" />
              <span>Talk to Sales on WhatsApp</span>
            </button>

            <div className="flex justify-center pt-2">
              <SocialLinks variant="icons-only" />
            </div>

            <div className="text-center text-xs text-gray-400 font-mono">
              <p>Email: hello@zurvix.com</p>
              <p className="mt-1">Founder: Fahad Al Noman • 7+ Years Experience</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
