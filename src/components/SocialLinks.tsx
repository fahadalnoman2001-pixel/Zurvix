'use client';

import React from 'react';

export interface SocialItem {
  name: string;
  href: string;
  icon: (props: { className?: string }) => React.ReactNode;
  color: string;
  hoverBg: string;
  hoverBorder: string;
  ariaLabel: string;
}

export const SocialIcons = {
  WhatsApp: ({ className = 'h-4 w-4' }: { className?: string }) => (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2zm.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 012.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 01-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24zm4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.24-.75-.67-1.25-1.49-1.4-1.74-.14-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.13-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.34-.76-1.84-.2-.49-.4-.42-.56-.43l-.47-.01c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.77 2.71 4.3 3.8 2.53 1.09 2.53.73 2.99.69.46-.04 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.1-.23-.17-.48-.3z" />
    </svg>
  ),
  LinkedIn: ({ className = 'h-4 w-4' }: { className?: string }) => (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76c.97 0 1.75-.79 1.75-1.76s-.78-1.75-1.75-1.75c-.97 0-1.76.78-1.76 1.75s.79 1.76 1.76 1.76m1.4 9.74v-8.37H5.06v8.37h2.8z" />
    </svg>
  ),
  X: ({ className = 'h-4 w-4' }: { className?: string }) => (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  ),
  Instagram: ({ className = 'h-4 w-4' }: { className?: string }) => (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  ),
  Facebook: ({ className = 'h-4 w-4' }: { className?: string }) => (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  ),
  GitHub: ({ className = 'h-4 w-4' }: { className?: string }) => (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  )
};

export const ZURVIX_SOCIAL_LINKS: SocialItem[] = [
  {
    name: 'WhatsApp',
    href: 'https://wa.me/35699784477?text=Hello%20ZURVIX%2C%20I%20would%20like%20to%20discuss%20a%20digital%20project.',
    icon: SocialIcons.WhatsApp,
    color: '#00DF81',
    hoverBg: 'hover:bg-[#00DF81]/15',
    hoverBorder: 'hover:border-[#00DF81]/60',
    ariaLabel: 'Chat with ZURVIX on WhatsApp'
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/company/zurvix',
    icon: SocialIcons.LinkedIn,
    color: '#0A66C2',
    hoverBg: 'hover:bg-[#0A66C2]/15',
    hoverBorder: 'hover:border-[#0A66C2]/60',
    ariaLabel: 'Follow ZURVIX on LinkedIn'
  },
  {
    name: 'X (Twitter)',
    href: 'https://x.com/zurvix',
    icon: SocialIcons.X,
    color: '#FFFFFF',
    hoverBg: 'hover:bg-white/15',
    hoverBorder: 'hover:border-white/60',
    ariaLabel: 'Follow ZURVIX on X'
  },
  {
    name: 'Instagram',
    href: 'https://instagram.com/zurvix',
    icon: SocialIcons.Instagram,
    color: '#E4405F',
    hoverBg: 'hover:bg-[#E4405F]/15',
    hoverBorder: 'hover:border-[#E4405F]/60',
    ariaLabel: 'Follow ZURVIX on Instagram'
  },
  {
    name: 'Facebook',
    href: 'https://facebook.com/zurvix',
    icon: SocialIcons.Facebook,
    color: '#1877F2',
    hoverBg: 'hover:bg-[#1877F2]/15',
    hoverBorder: 'hover:border-[#1877F2]/60',
    ariaLabel: 'Follow ZURVIX on Facebook'
  }
];

interface SocialLinksProps {
  variant?: 'pills' | 'icons-only' | 'buttons';
  className?: string;
  showLabels?: boolean;
}

export default function SocialLinks({
  variant = 'pills',
  className = '',
  showLabels = true
}: SocialLinksProps) {
  if (variant === 'icons-only') {
    return (
      <div className={`flex items-center space-x-2 ${className}`}>
        {ZURVIX_SOCIAL_LINKS.map((social) => {
          const Icon = social.icon;
          return (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.ariaLabel}
              className={`h-9 w-9 rounded-xl border border-white/[0.08] bg-[#080C11]/80 backdrop-blur-md flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-lg ${social.hoverBg} ${social.hoverBorder} group`}
            >
              <Icon className="h-4 w-4 transition-transform duration-200 group-hover:scale-110" />
            </a>
          );
        })}
      </div>
    );
  }

  if (variant === 'buttons') {
    return (
      <div className={`grid grid-cols-2 sm:grid-cols-3 gap-2.5 ${className}`}>
        {ZURVIX_SOCIAL_LINKS.map((social) => {
          const Icon = social.icon;
          return (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.ariaLabel}
              className={`flex items-center space-x-2.5 rounded-xl border border-white/[0.08] bg-[#080C11]/80 px-3.5 py-2.5 text-xs font-semibold text-gray-300 hover:text-white transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-lg ${social.hoverBg} ${social.hoverBorder} group`}
            >
              <div
                className="h-6 w-6 rounded-lg flex items-center justify-center shrink-0"
                style={{ color: social.color }}
              >
                <Icon className="h-4 w-4 transition-transform duration-200 group-hover:scale-110" />
              </div>
              <span className="truncate">{social.name}</span>
            </a>
          );
        })}
      </div>
    );
  }

  // Default: interactive pills with vector icon + label
  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {ZURVIX_SOCIAL_LINKS.map((social) => {
        const Icon = social.icon;
        return (
          <a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.ariaLabel}
            className={`inline-flex items-center space-x-2 rounded-xl border border-white/[0.08] bg-white/[0.02] px-3 py-1.5 text-xs text-gray-300 hover:text-white transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-md ${social.hoverBg} ${social.hoverBorder} group`}
          >
            <span
              className="shrink-0 transition-transform duration-200 group-hover:scale-110"
              style={{ color: social.color }}
            >
              <Icon className="h-3.5 w-3.5" />
            </span>
            {showLabels && <span className="font-medium">{social.name}</span>}
          </a>
        );
      })}
    </div>
  );
}
