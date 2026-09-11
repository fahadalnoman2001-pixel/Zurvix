export interface PricingPackage {
  id: string;
  category: 'website' | 'app' | 'marketing' | 'elite' | 'maintenance' | 'publishing';
  title: string;
  price: string;
  billingPeriod?: string;
  description: string;
  badge?: string;
  popular?: boolean;
  features: string[];
  whatsAppMessage: string;
  ctaText?: string;
}

// ── 4 Core Tiers (Ordered Left-to-Right Ascending by Investment) ──
export const coreTiers: PricingPackage[] = [
  {
    id: 'starter-website',
    category: 'website',
    title: 'STARTER — Website Only',
    price: '€300',
    billingPeriod: 'starting from',
    description: 'Perfect for small businesses, local services, and consultants looking for a credible, high-converting digital presence.',
    features: [
      'Single Custom Website (Up to ~5 Pages)',
      '100% Mobile-Responsive Design',
      'Basic On-Page SEO Setup',
      'Lead Generation & Contact Form',
      'Free Domain & Cloud Hosting (Year 1)',
      '1 Round of Design Revisions',
      'Social Media & WhatsApp Integration',
      'Fast Turnaround & Launch Support'
    ],
    whatsAppMessage: "Hello ZURVIX, I'm interested in the STARTER Website package starting from €300. I'd like to discuss my project."
  },
  {
    id: 'ecommerce-website',
    category: 'website',
    title: 'ECOMMERCE — Online Store',
    price: '€600',
    billingPeriod: 'starting from',
    description: 'Turn visitors into paying customers with a scalable, secure, and intuitive digital storefront.',
    features: [
      'Custom Shopify, WooCommerce or Laravel Store',
      'Product Catalog Structure (Up to ~30 SKUs)',
      'Secure Payment Gateways (Stripe, PayPal, etc.)',
      'Mobile-Optimized Checkout Flow',
      'Smart Admin Product & Order Management',
      'Basic SEO + GEO Kickoff for Product Pages',
      'Discount Codes & Coupon Engine',
      'Free Domain & High-Speed Cloud Hosting'
    ],
    whatsAppMessage: "Hello ZURVIX, I am interested in the ECOMMERCE Store package starting from €600. I would like to discuss my project."
  },
  {
    id: 'elite-01',
    category: 'elite',
    title: 'ELITE 01 — Website + Mobile App',
    price: '€800',
    billingPeriod: 'starting from',
    description: 'Complete digital ecosystem uniting a bespoke high-performance web platform and cross-platform mobile apps.',
    features: [
      'Custom Web Platform / Modern Website',
      'Cross-Platform Mobile App (iOS & Android via Flutter)',
      'Unified Master Admin Control Panel',
      'Free Domain & Enterprise Cloud Hosting',
      'Custom UI/UX Design System Across All Screens',
      'Single Synchronized Database & APIs',
      'Standard Launch & Store Submission Assistance',
      'Lead Generation & Direct Inquiry Flow'
    ],
    whatsAppMessage: "Hello ZURVIX, I am interested in the ELITE 01 (Website + Mobile App) package starting from €800. I would like to discuss my project."
  },
  {
    id: 'elite-02',
    category: 'elite',
    title: 'ELITE 02 — Web + App + Growth',
    price: '€1,000',
    billingPeriod: 'starting from',
    popular: true,
    badge: '⭐ MOST POPULAR BUNDLE',
    description: 'Our most comprehensive transformation bundle: Custom Web, iOS & Android Apps via Flutter, plus full digital marketing & AI search kickoff.',
    features: [
      'Custom High-Performance Web Application',
      'Cross-Platform Mobile App (iOS & Android via Flutter)',
      'Unified Super Admin Management Panel',
      'Free Domain & Scalable Cloud Hosting Setup',
      'Complete Digital Marketing Campaign Launch',
      'Meta Pixel & Conversion API Architecture',
      'Full On-Page SEO + GEO + LLM Optimization Kickoff',
      'VIP Priority Support & Launch Strategy Session'
    ],
    whatsAppMessage: "Hello ZURVIX, I am interested in the ELITE 02 (Web + App + Growth) package starting from €1,000. I would like to discuss my project."
  }
];

export const websitePackages: PricingPackage[] = [
  {
    id: 'business-website',
    category: 'website',
    title: 'STARTER — Business Website',
    price: '€300',
    billingPeriod: 'starting from',
    description: 'Perfect for small businesses, local services, and consultants looking for a credible, high-converting digital presence.',
    features: [
      'Single Custom Website (Up to ~5 Pages)',
      '100% Mobile Responsive Design',
      'Lead Generation & Contact Forms',
      'Basic On-Page SEO Setup',
      'Free Domain & Hosting (Year 1 Included)',
      '1 Round of Revisions',
      'Social Media & WhatsApp Integration',
      'Fast Turnaround & Launch Support'
    ],
    whatsAppMessage: "Hello ZURVIX, I'm interested in the STARTER Business Website package starting from €300. I'd like to discuss my project."
  },
  {
    id: 'custom-website',
    category: 'website',
    title: 'Custom Website & Web App',
    price: '€350',
    billingPeriod: 'starting from',
    popular: true,
    badge: 'MOST FLEXIBLE',
    description: 'Tailor-made web application or bespoke brand platform equipped with smart admin panels and AI capabilities.',
    features: [
      '100% Bespoke Custom Architecture',
      'Domain & Fast Cloud Hosting Included',
      'Smart, Easy-to-Use Admin Panel',
      'AI Powered Features & Chat Assistant',
      'Custom API & Database Integrations',
      'Advanced Animations & Interactions',
      'Comprehensive SEO & GEO Foundation',
      'Scalable Architecture for Growth'
    ],
    whatsAppMessage: "Hello ZURVIX, I am interested in the Custom Website package starting from €350. I would like to discuss my project."
  },
  {
    id: 'ecommerce-website',
    category: 'website',
    title: 'Ecommerce Store',
    price: '€600',
    billingPeriod: 'starting from',
    description: 'Turn visitors into paying customers with a scalable, secure, and intuitive digital storefront.',
    features: [
      'Custom Shopify, WooCommerce or Laravel Store',
      'Full Ecommerce Architecture & Product Catalog',
      'Smart Admin Control Panel',
      'Product & Inventory Management (Up to 30 SKUs)',
      'Order Tracking & Customer Portal',
      'Secure Payment Gateway (Stripe, PayPal, etc.)',
      'Discount Codes & Coupon Engine',
      'Basic SEO + GEO Kickoff for Product Pages'
    ],
    whatsAppMessage: "Hello ZURVIX, I am interested in the Ecommerce Store package starting from €600. I would like to discuss my project."
  }
];

export const appPackages: PricingPackage[] = [
  {
    id: 'ecommerce-app',
    category: 'app',
    title: 'Ecommerce Mobile App',
    price: '€500',
    billingPeriod: 'starting from',
    description: 'Cross-platform mobile shopping app for Android and iOS that drives repeat purchases and customer loyalty.',
    features: [
      'Cross-Platform Native (iOS & Android via Flutter)',
      'Complete Ecommerce Cart & Checkout',
      'Smart Unified Admin Panel',
      'Product & Category Management',
      'Live Order Tracking & Push Notifications',
      'Secure Mobile Payment Integrations',
      'Customer Wishlist & Saved Addresses',
      'Store Publishing Guidance'
    ],
    whatsAppMessage: "Hello ZURVIX, I am interested in the Ecommerce App package starting from €500. I would like to discuss my project."
  },
  {
    id: 'custom-app',
    category: 'app',
    title: 'Custom Mobile App',
    price: '€700',
    billingPeriod: 'starting from',
    popular: true,
    badge: 'HIGH PERFORMANCE',
    description: 'Custom iOS & Android mobile application built with Flutter tailored to your exact business logic.',
    features: [
      'Cross-Platform Mobile App (iOS & Android via Flutter)',
      'Bespoke High-End UI/UX Design System',
      'Dedicated Real-Time Admin Dashboard',
      'REST / GraphQL Custom API Integration',
      'Authentication, Roles & User Management',
      'Real-Time Cloud Database & Offline Cache',
      'Push Notifications & Device Features',
      'Full Store Review & Submission Support'
    ],
    whatsAppMessage: "Hello ZURVIX, I am interested in the Custom Mobile App package starting from €700. I would like to discuss my project."
  }
];

export const marketingPackages: PricingPackage[] = [
  {
    id: 'social-media-marketing',
    category: 'marketing',
    title: 'Social Media Marketing',
    price: '€350',
    billingPeriod: '/ month',
    description: 'Consistent brand awareness, audience engagement, and high-converting paid ad campaigns on Meta platforms.',
    features: [
      'Meta Marketing (Facebook & Instagram)',
      'Monthly Content Strategy & Calendar',
      'High-Impact Graphic Posters & Visuals',
      'Automated Publishing & Scheduling',
      'Meta Pixel & Conversion API Setup',
      'Targeted Audience Ad Campaign Setup',
      'A/B Creative & Copy Testing',
      'Monthly Performance & Analytics Report'
    ],
    whatsAppMessage: "Hello ZURVIX, I am interested in the Social Media Marketing package starting from €350/month. I would like to discuss my project."
  },
  {
    id: 'seo-geo-llm',
    category: 'marketing',
    title: 'SEO + GEO + LLM (AI Search)',
    price: '€500',
    billingPeriod: '/ month',
    popular: true,
    badge: 'FUTURE PROOF',
    description: 'Rank at the top of Google and become the default recommended authority in AI search engines (ChatGPT, Claude, Perplexity, Gemini).',
    features: [
      'Complete Technical & On-Page SEO',
      'Generative Engine Optimization (GEO)',
      'LLM Brand Knowledge Citations & Training',
      'Google Ads & Search PPC Strategy',
      'High-Authority Niche Backlink Strategy',
      'Strategic Keyword & Search Intent Mapping',
      'Blog Article SEO & Content Cluster Architecture',
      'Schema Entity & Knowledge Graph Engineering'
    ],
    whatsAppMessage: "Hello ZURVIX, I am interested in the SEO + GEO + LLM (AI Search) package starting from €500/month. I would like to discuss my project."
  },
  {
    id: 'premium-marketing-suite',
    category: 'marketing',
    title: 'Premium Marketing Suite',
    price: 'Custom',
    billingPeriod: 'tailored roadmap',
    badge: 'ALL-IN-ONE GROWTH',
    description: 'Total digital takeover uniting full-funnel paid media, viral social strategy, deep technical SEO, and AI search dominance.',
    features: [
      'Complete Social Media Engine + Video Ad Assets',
      'Omnichannel Ad Management (Google, Meta, LinkedIn)',
      'Deep AI Search Dominance (GEO + LLM Engineering)',
      'Dedicated Growth Strategist & Weekly Check-ins',
      'Conversion Rate Optimization (CRO) & Heatmaps',
      'Automated Lead Nurturing Email Sequences',
      'Full Competitor Espionage & Custom Dashboards',
      'Priority 24/7 Strategy Support'
    ],
    whatsAppMessage: "Hello ZURVIX, I am interested in the Premium Marketing Suite (Custom). I would like to schedule a growth consultation."
  }
];

export const elitePackages: PricingPackage[] = [
  {
    id: 'elite-01',
    category: 'elite',
    title: 'ELITE 01 — Website + Mobile App',
    price: '€800',
    billingPeriod: 'starting from',
    description: 'Complete digital ecosystem uniting a bespoke high-performance web platform and cross-platform mobile apps.',
    features: [
      'Custom Web Platform / Modern Website',
      'Cross-Platform Mobile App (iOS & Android via Flutter)',
      'Unified Master Admin Control Panel',
      'Free Domain & Enterprise Cloud Hosting',
      'Custom UI/UX Design System Across All Screens',
      'Single Synchronized Database & APIs',
      'Standard Launch & Store Submission Assistance',
      'Lead Generation & Contact Workflow'
    ],
    whatsAppMessage: "Hello ZURVIX, I am interested in the ELITE 01 (Website + Mobile App) package starting from €800. I would like to discuss my project."
  },
  {
    id: 'elite-02',
    category: 'elite',
    title: 'ELITE 02 — Web + App + Growth',
    price: '€1,000',
    billingPeriod: 'starting from',
    popular: true,
    badge: '⭐ MOST POPULAR BUNDLE',
    description: 'Our most comprehensive transformation bundle: Custom Web, iOS & Android Apps via Flutter, plus a full digital marketing and AI search launch kickoff.',
    features: [
      'Custom High-Performance Web Application',
      'Cross-Platform Mobile App (iOS & Android via Flutter)',
      'Unified Super Admin Management Panel',
      'Free Domain & Scalable Cloud Hosting Setup',
      'Complete Digital Marketing Campaign Launch',
      'Meta Pixel & Conversion API Architecture',
      'Full On-Page SEO + GEO + LLM Optimization Kickoff',
      'VIP Priority Support & Launch Strategy Session'
    ],
    whatsAppMessage: "Hello ZURVIX, I am interested in the ELITE 02 (Web + App + Digital Growth) package starting from €1,000. I would like to discuss my project."
  }
];

export const maintenancePackages: PricingPackage[] = [
  {
    id: 'website-maintenance',
    category: 'maintenance',
    title: 'Website Maintenance Plan',
    price: '€200',
    billingPeriod: '/ month',
    description: 'Peace of mind knowing your digital platform is continually monitored, secured, patched, and optimized by senior engineers.',
    features: [
      '24/7 Automated Uptime & Error Monitoring',
      'Weekly Security Scans & Malware Defense',
      'Core Web Vitals & Speed Optimization Tuning',
      'Daily Automated Offsite Cloud Backups',
      'Priority Bug Fixes & Code Troubleshooting',
      'Dedicated Hours for Content & Code Updates',
      'Framework, Plugin & Dependency Upgrades',
      'Direct WhatsApp & Email Technical Support'
    ],
    whatsAppMessage: "Hello ZURVIX, I am interested in the Website Maintenance plan starting from €200/month. I'd like to discuss maintaining my site."
  }
];

export interface PublishingService {
  title: string;
  price: string;
  billing: string;
  details: string[];
  whatsAppMessage: string;
}

export const publishingServices: PublishingService[] = [
  {
    title: 'Google Play Publishing',
    price: '€70',
    billing: '/ yearly',
    details: [
      'Yearly App Maintenance & API Level updates',
      'Crash monitoring & policy compliance checks',
      'T&C apply (Requires developer account)'
    ],
    whatsAppMessage: "Hello ZURVIX, I would like to inquire about Google Play Publishing (€70/yearly)."
  },
  {
    title: 'Apple App Store Publishing',
    price: '€150',
    billing: '/ monthly',
    details: [
      'Continuous iOS compliance & SDK updates',
      'Certificate management & TestFlight maintenance',
      'T&C apply (Requires Apple developer account)'
    ],
    whatsAppMessage: "Hello ZURVIX, I would like to inquire about Apple App Store Publishing (€150/monthly)."
  },
  {
    title: 'Google Play Store Setup + Approval Support',
    price: '€150',
    billing: 'one-time',
    details: [
      'Complete Console Setup & Verification',
      'APK/AAB Signing & Asset Uploading',
      'Privacy Policy & Store Listing Optimization',
      'Full End-to-End Approval Support'
    ],
    whatsAppMessage: "Hello ZURVIX, I would like to book Google Play Store Setup + Approval Support (€150 one-time)."
  },
  {
    title: 'Apple App Store Setup + Approval Support',
    price: '€400',
    billing: 'one-time',
    details: [
      'App Store Connect & Developer Account Setup',
      'Provisioning Profiles & Certificates',
      'Screenshots, Privacy Disclosures & Metadata',
      'Rigorous Apple Review Rejection Mitigation'
    ],
    whatsAppMessage: "Hello ZURVIX, I would like to book Apple App Store Setup + Approval Support (€400 one-time)."
  }
];
