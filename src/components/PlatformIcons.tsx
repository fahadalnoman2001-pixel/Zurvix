'use client';

import React from 'react';

export interface IconProps {
  className?: string;
  color?: string;
}

export const PlatformSVGs = {
  Hostinger: ({ className = 'h-5 w-5' }: IconProps) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Hostinger">
      <path d="M12 2L2 7.8V16.2L12 22L22 16.2V7.8L12 2Z" fill="#673DE6" fillOpacity="0.2" stroke="#673DE6" strokeWidth="1.5" />
      <path d="M8 8V16M16 8V16M8 12H16" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),

  Microsoft: ({ className = 'h-5 w-5' }: IconProps) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Microsoft">
      <rect x="2" y="2" width="9.5" height="9.5" fill="#F25022" rx="1" />
      <rect x="12.5" y="2" width="9.5" height="9.5" fill="#7FBA00" rx="1" />
      <rect x="2" y="12.5" width="9.5" height="9.5" fill="#00A4EF" rx="1" />
      <rect x="12.5" y="12.5" width="9.5" height="9.5" fill="#FFB900" rx="1" />
    </svg>
  ),

  AWS: ({ className = 'h-5 w-5' }: IconProps) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Amazon Web Services">
      <path d="M6.5 12.5C5 12.5 3.5 11.5 3.5 9.5C3.5 7.5 5.5 6.5 8 6.5C9.5 6.5 10.5 7 11 7.5V6.5C11 5 10 4.5 8.5 4.5C7.2 4.5 6.2 5 6 5.8L4.2 4.5C4.8 3.3 6.5 2.5 8.8 2.5C11.8 2.5 13.5 4 13.5 7.2V13.5H11.2V12C10.5 12.8 9.2 13.5 7.5 13.5L6.5 12.5ZM8.5 11.5C10 11.5 11 10.2 11 9V8.8C10.5 8.3 9.5 8 8.5 8C7 8 6 8.5 6 9.5C6 10.5 7 11.5 8.5 11.5Z" fill="#FF9900" />
      <path d="M14.5 13.5L16.8 2.8H19.2L21.5 13.5H19.2L18.8 11.5H17.2L16.8 13.5H14.5ZM17.5 9.5H18.5L18 6.5H17.9L17.5 9.5Z" fill="#FFFFFF" />
      <path d="M3 17.5C7.5 20.8 14.5 21 21 16.5M19.5 15L21.5 16.5L18.8 18.5" stroke="#FF9900" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),

  DigitalOcean: ({ className = 'h-5 w-5' }: IconProps) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-label="DigitalOcean">
      <path d="M12 2C6.48 2 2 6.48 2 12c0 4.41 2.86 8.16 6.84 9.48v-3.32c0-.44.36-.8.8-.8h1.72V14.6H8.6c-.44 0-.8-.36-.8-.8v-1.72h3.56V8.52c0-2.4 1.94-4.34 4.34-4.34h2.7v3.56h-2.7c-.44 0-.8.36-.8.8v2.54h3.5c.44 0 .8.36.8.8v1.72h-4.3v2.76h2.76c.44 0 .8.36.8.8v1.94C19.14 20.16 22 16.41 22 12c0-5.52-4.48-10-10-10z" fill="#0080FF" />
      <rect x="4.8" y="17.6" width="2" height="2" fill="#0080FF" />
      <rect x="2.8" y="15.6" width="1.6" height="1.6" fill="#0080FF" />
      <rect x="3.2" y="13.2" width="1.2" height="1.2" fill="#0080FF" />
    </svg>
  ),

  GoogleCloud: ({ className = 'h-5 w-5' }: IconProps) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Google Cloud">
      <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" fill="#4285F4" fillOpacity="0.15" />
      <path d="M7 15H17C18.6569 15 20 13.6569 20 12C20 10.3431 18.6569 9 17 9C16.85 9 16.7 9.01 16.55 9.04C15.83 6.69 13.62 5 11 5C7.96 5 5.44 7.23 5.06 10.15C3.3 10.64 2 12.18 2 14C2 16.2091 3.79086 18 6 18H17" stroke="#4285F4" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="11" cy="11" r="2" fill="#34A853" />
      <circle cx="15" cy="11" r="1.5" fill="#FBBC04" />
      <circle cx="7" cy="13" r="1.5" fill="#EA4335" />
    </svg>
  ),

  Vercel: ({ className = 'h-5 w-5' }: IconProps) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-label="Vercel">
      <path d="M12 2L24 22H0L12 2Z" fill="#FFFFFF" />
    </svg>
  ),

  // Tech items icons
  Nextjs: ({ className = 'h-5 w-5' }: IconProps) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Next.js">
      <circle cx="12" cy="12" r="11" fill="#000000" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
      <path d="M8 7V17M15.5 7V13M8 7L16 17" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),

  ReactIcon: ({ className = 'h-5 w-5' }: IconProps) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="React">
      <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#38BDF8" strokeWidth="1.5" transform="rotate(0 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#38BDF8" strokeWidth="1.5" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#38BDF8" strokeWidth="1.5" transform="rotate(120 12 12)" />
      <circle cx="12" cy="12" r="2" fill="#38BDF8" />
    </svg>
  ),

  TypeScript: ({ className = 'h-5 w-5' }: IconProps) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="TypeScript">
      <rect width="24" height="24" rx="4" fill="#3178C6" />
      <path d="M6 9H13M9.5 9V17M14 11.5C14.5 10.5 15.5 10 17 10C18.5 10 19.5 10.8 19.5 12C19.5 13.5 18 14 16.5 14.5C15 15 14 15.5 14 17C14 18.2 15 19 17 19C18.5 19 19.5 18.2 20 17.5" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  ),

  Tailwind: ({ className = 'h-5 w-5' }: IconProps) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Tailwind CSS">
      <path d="M6 13.5C7.2 11.5 9 10.5 11.4 10.5C14.4 10.5 15.6 12 16.8 13.5C18 15 19.2 16.5 22.2 16.5C24.6 16.5 26.4 15.5 27.6 13.5C26.4 15.5 24.6 16.5 22.2 16.5C19.2 16.5 18 15 16.8 13.5C15.6 12 14.4 10.5 11.4 10.5C9 10.5 7.2 11.5 6 13.5Z" fill="#38BDF8" transform="scale(0.8) translate(-2, -2)" />
      <path d="M0 6C1.2 4 3 3 5.4 3C8.4 3 9.6 4.5 10.8 6C12 7.5 13.2 9 16.2 9C18.6 9 20.4 8 21.6 6C20.4 8 18.6 9 16.2 9C13.2 9 12 7.5 10.8 6C9.6 4.5 8.4 3 5.4 3C3 3 1.2 4 0 6Z" fill="#38BDF8" transform="scale(0.8) translate(0, 4)" />
    </svg>
  ),

  Laravel: ({ className = 'h-5 w-5' }: IconProps) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Laravel">
      <path d="M3 7L12 2L21 7V17L12 22L3 17V7Z" fill="#FF2D20" fillOpacity="0.15" stroke="#FF2D20" strokeWidth="1.5" />
      <path d="M8 8V16L12 18.5L16 16V11" stroke="#FF2D20" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),

  Flutter: ({ className = 'h-5 w-5' }: IconProps) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Flutter">
      <path d="M14 2L4 12L7.5 15.5L17.5 5.5H14L14 2Z" fill="#47C5FB" />
      <path d="M14 12.5L8.5 18L12 21.5L17.5 16L14 12.5Z" fill="#02569B" />
      <path d="M9.5 17L12 14.5L15.5 18L13 20.5L9.5 17Z" fill="#0175C2" />
    </svg>
  ),

  Nodejs: ({ className = 'h-5 w-5' }: IconProps) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Node.js">
      <path d="M12 2L21 7V17L12 22L3 17V7L12 2Z" fill="#339933" fillOpacity="0.15" stroke="#339933" strokeWidth="1.5" />
      <path d="M8 14V10L12 8L16 10V14L12 16L8 14Z" stroke="#339933" strokeWidth="1.8" strokeLinejoin="round" />
    </svg>
  ),

  Python: ({ className = 'h-5 w-5' }: IconProps) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Python">
      <path d="M11.5 2C7.5 2 7.5 3.7 7.5 3.7V5.5H12V6.3H4.5C4.5 6.3 2 6 2 10C2 14 4.2 13.8 4.2 13.8H5.5V11.8C5.5 9.8 7.2 9.8 7.2 9.8H11.5C13.5 9.8 13.5 8 13.5 8V3.7C13.5 3.7 13.5 2 11.5 2Z" fill="#3776AB" />
      <circle cx="9.2" cy="4" r="0.8" fill="#FFFFFF" />
      <path d="M12.5 22C16.5 22 16.5 20.3 16.5 20.3V18.5H12V17.7H19.5C19.5 17.7 22 18 22 14C22 10 19.8 10.2 19.8 10.2H18.5V12.2C18.5 14.2 16.8 14.2 16.8 14.2H12.5C10.5 14.2 10.5 16 10.5 16V20.3C10.5 20.3 10.5 22 12.5 22Z" fill="#FFD43B" />
      <circle cx="14.8" cy="20" r="0.8" fill="#FFFFFF" />
    </svg>
  ),

  Postgres: ({ className = 'h-5 w-5' }: IconProps) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="PostgreSQL">
      <circle cx="12" cy="12" r="10" fill="#336791" fillOpacity="0.2" stroke="#336791" strokeWidth="1.5" />
      <path d="M8 8C8 8 10 6 13 6C16 6 17 8 17 10C17 12 16 13 14 13.5C16 14 17 15.5 17 17.5H14C14 16 13 15 11 15H10V18H8V8H11C13 8 14 9 14 10.5C14 12 13 12.5 11 12.5H10" stroke="#336791" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),

  OpenAI: ({ className = 'h-5 w-5' }: IconProps) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="OpenAI">
      <circle cx="12" cy="12" r="10" fill="#10A37F" fillOpacity="0.15" stroke="#10A37F" strokeWidth="1.5" />
      <path d="M12 6V18M6 12H18M7.8 7.8L16.2 16.2M16.2 7.8L7.8 16.2" stroke="#10A37F" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  ),

  Shopify: ({ className = 'h-5 w-5' }: IconProps) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Shopify">
      <path d="M16 5V4C16 2.5 14.5 1.5 13 1.5H11C9.5 1.5 8 2.5 8 4V5H4L6 22H18L20 5H16ZM10 4C10 3 10.8 2.5 11.5 2.5H12.5C13.2 2.5 14 3 14 4V5H10V4Z" fill="#95BF47" fillOpacity="0.2" stroke="#95BF47" strokeWidth="1.5" />
      <path d="M13 10L10.5 13H13.5L11 17" stroke="#95BF47" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),

  Cloudflare: ({ className = 'h-5 w-5' }: IconProps) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Cloudflare">
      <path d="M18 10C17.5 7.5 15.2 5.5 12.5 5.5C10.2 5.5 8.2 7 7.4 9C5 9.3 3 11.4 3 14C3 16.8 5.2 19 8 19H18.5C21 19 23 17 23 14.5C23 12.2 21.3 10.3 19 10.1" stroke="#F38020" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M12 12L15 15H9L12 12Z" fill="#F38020" />
    </svg>
  )
};

export function getPlatformIcon(name: string) {
  const normalized = name.toLowerCase();
  if (normalized.includes('hostinger')) return PlatformSVGs.Hostinger;
  if (normalized.includes('microsoft')) return PlatformSVGs.Microsoft;
  if (normalized.includes('amazon') || normalized.includes('aws')) return PlatformSVGs.AWS;
  if (normalized.includes('digitalocean')) return PlatformSVGs.DigitalOcean;
  if (normalized.includes('google') || normalized.includes('antigravity')) return PlatformSVGs.GoogleCloud;
  if (normalized.includes('vercel')) return PlatformSVGs.Vercel;
  if (normalized.includes('next.js') || normalized.includes('nextjs')) return PlatformSVGs.Nextjs;
  if (normalized.includes('react')) return PlatformSVGs.ReactIcon;
  if (normalized.includes('typescript')) return PlatformSVGs.TypeScript;
  if (normalized.includes('tailwind')) return PlatformSVGs.Tailwind;
  if (normalized.includes('laravel')) return PlatformSVGs.Laravel;
  if (normalized.includes('flutter')) return PlatformSVGs.Flutter;
  if (normalized.includes('node')) return PlatformSVGs.Nodejs;
  if (normalized.includes('python')) return PlatformSVGs.Python;
  if (normalized.includes('postgres')) return PlatformSVGs.Postgres;
  if (normalized.includes('openai') || normalized.includes('ai')) return PlatformSVGs.OpenAI;
  if (normalized.includes('shopify')) return PlatformSVGs.Shopify;
  if (normalized.includes('cloudflare')) return PlatformSVGs.Cloudflare;

  // Fallback icon
  return PlatformSVGs.GoogleCloud;
}
