export interface Project {
  id: string;
  name: string;
  category: 'Websites' | 'Ecommerce' | 'Apps' | 'Business' | 'Marketing';
  industry: string;
  services: string[];
  technologies: string[];
  description: string;
  link?: string;
  featured: boolean;
  highlightMetric?: string;
  attributionNote?: string;
}

export const portfolioProjects: Project[] = [
  {
    id: 'infixclean',
    name: 'Infixclean.com',
    category: 'Business',
    industry: 'Cleaning & Facilities Services',
    services: ['UI/UX Design', 'Web Development', 'Lead Funnels', 'SEO Optimization'],
    technologies: ['Next.js', 'Tailwind CSS', 'TypeScript', 'Vercel'],
    description: 'A high-converting corporate website engineered for high-volume service booking, real-time quote generation, and local SEO domination.',
    featured: true,
    highlightMetric: '+210% Inbound Leads',
    attributionNote: 'Designed & developed by ZURVIX team'
  },
  {
    id: 'prochimps',
    name: 'Prochimps.com',
    category: 'Business',
    industry: 'Tech & Creative Agency',
    services: ['Brand Strategy', 'Interactive Web Experience', 'CMS Integration'],
    technologies: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion'],
    description: 'Modern agency digital portal featuring interactive 3D elements, bold visual branding, and fluid project showcase architecture.',
    featured: true,
    highlightMetric: '<1.1s Page Load Speed',
    attributionNote: 'Designed & developed by ZURVIX team'
  },
  {
    id: 'smileswallet',
    name: 'SmilesWallet',
    category: 'Apps',
    industry: 'Fintech & Digital Loyalty',
    services: ['Mobile App Design', 'Cross-Platform Dev', 'Secure Wallet APIs'],
    technologies: ['Flutter', 'Node.js', 'PostgreSQL', 'Redis'],
    description: 'Next-generation digital rewards and wallet application enabling instant contactless cashback, loyalty points redemption, and merchant analytics.',
    featured: true,
    highlightMetric: '50k+ Active Users',
    attributionNote: 'Core UI/UX & Mobile Architecture by ZURVIX'
  },
  {
    id: 'kendor-textiles',
    name: 'Kendor Textiles',
    category: 'Ecommerce',
    industry: 'Textiles & B2B Wholesale',
    services: ['B2B Ecommerce Architecture', 'Custom Wholesale Portal', 'ERP Integration'],
    technologies: ['Next.js', 'Shopify Plus', 'GraphQL', 'Tailwind CSS'],
    description: 'Robust B2B commerce platform with tiered wholesale pricing, swatch sample requests, and automated ERP inventory synchronization.',
    featured: true,
    highlightMetric: '+140% B2B Reorders',
    attributionNote: 'Ecommerce consulting & Frontend engineering'
  },
  {
    id: 'onereal',
    name: 'OneReal',
    category: 'Apps',
    industry: 'PropTech & Real Estate',
    services: ['Mobile App', 'Interactive Property Map', 'CRM Integration'],
    technologies: ['React Native', 'Laravel API', 'PostgreSQL', 'AWS'],
    description: 'Modern property discovery and virtual tour mobile app connecting buyers with verified real estate agents with live messaging.',
    featured: true,
    highlightMetric: '99.98% Uptime',
    attributionNote: 'Full-stack development contribution'
  },
  {
    id: 'rent-the-campbell',
    name: 'Rent The Campbell',
    category: 'Websites',
    industry: 'Luxury Real Estate & Hospitality',
    services: ['Luxury Branding', 'Booking Engine', 'Virtual Walkthroughs'],
    technologies: ['Next.js', 'Tailwind CSS', 'Stripe', 'Sanity CMS'],
    description: 'Ultra-luxurious residential rental landing experience with 3D interactive unit layouts and instant reservation system.',
    featured: false,
    highlightMetric: '4.9/5 User Rating',
    attributionNote: 'Web design & booking system implementation'
  },
  {
    id: 'bd-care',
    name: 'BD Care',
    category: 'Apps',
    industry: 'HealthTech & Telemedicine',
    services: ['Patient Mobile App', 'Doctor Consultation Portal', 'HIPAA/GDPR Compliance'],
    technologies: ['Flutter', 'Node.js', 'WebRTC', 'MongoDB'],
    description: 'Seamless healthcare application featuring encrypted video appointments, digital prescriptions, and vital tracking.',
    featured: true,
    highlightMetric: '15k+ Consultations',
    attributionNote: 'Product UI/UX & Mobile Development'
  },
  {
    id: 'bd-property',
    name: 'BD Property',
    category: 'Websites',
    industry: 'Real Estate Marketplace',
    services: ['Marketplace Web Portal', 'Search & Filter Engine', 'Lead Capture'],
    technologies: ['Laravel', 'MySQL', 'Vue.js', 'Tailwind CSS'],
    description: 'Comprehensive multi-vendor property portal with geolocation search, mortgage calculators, and agent lead routing.',
    featured: false,
    highlightMetric: '100k+ Monthly Visits',
    attributionNote: 'Platform development & maintenance'
  },
  {
    id: 'ispondon',
    name: 'Ispondon',
    category: 'Business',
    industry: 'SaaS & Enterprise Management',
    services: ['SaaS Landing Page', 'Interactive Demo Environment', 'Docs System'],
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'MDX'],
    description: 'Sleek enterprise software marketing platform showcasing product modules, pricing tiers, and interactive feature tours.',
    featured: false,
    highlightMetric: '+85% Trial Signups',
    attributionNote: 'Conversion design & Next.js frontend'
  },
  {
    id: 'brentview',
    name: 'Brentview',
    category: 'Business',
    industry: 'Medical & Healthcare Practice',
    services: ['Medical Practice Website', 'Patient Portal Integration', 'Local SEO'],
    technologies: ['Next.js', 'Tailwind CSS', 'TypeScript'],
    description: 'Clean, accessible medical center digital presence focusing on seamless patient scheduling and clinical trust building.',
    featured: false,
    highlightMetric: '#1 Local Google Ranking',
    attributionNote: 'Website revamp & local SEO setup'
  },
  {
    id: 'j2-led',
    name: 'J2 LED Flashlight',
    category: 'Ecommerce',
    industry: 'Consumer Hardware & Outdoor Gear',
    services: ['Product Landing Page', 'Custom Ecommerce Checkout', 'Meta Ads'],
    technologies: ['Shopify', 'Liquid', 'Tailwind CSS', 'Klaviyo'],
    description: 'High-energy single-product ecommerce launch website featuring 360-degree product showcases, bundle builders, and direct checkout.',
    featured: false,
    highlightMetric: '3.8x ROAS on Ads',
    attributionNote: 'Landing page & conversion rate optimization'
  },
  {
    id: 'pf-dental',
    name: 'PF Dental',
    category: 'Websites',
    industry: 'Dental Health & Aesthetics',
    services: ['Modern Clinic Website', 'Before/After Smile Gallery', 'Appointment Booking'],
    technologies: ['React', 'Next.js', 'Tailwind CSS'],
    description: 'Aesthetic dental clinic website featuring high-definition interactive transformation galleries and instant smile consultation bookings.',
    featured: false,
    highlightMetric: '+180% New Patient Bookings',
    attributionNote: 'Design & frontend build'
  },
  {
    id: 'geoinstyle',
    name: 'GeoInStyle',
    category: 'Ecommerce',
    industry: 'Fashion & Apparel',
    services: ['Direct-to-Consumer Ecommerce', 'Instagram Shop Integration', 'Dynamic Filter Matrix'],
    technologies: ['WooCommerce', 'WordPress', 'Custom CSS', 'Stripe'],
    description: 'Modern fashion and streetwear boutique with fast visual filtering, lookbook integrations, and cart abandonment automations.',
    featured: false,
    highlightMetric: '+65% Mobile Conversion',
    attributionNote: 'Store customization & speed optimization'
  },
  {
    id: 'noahny',
    name: 'NoahNY',
    category: 'Ecommerce',
    industry: 'Designer Streetwear & Lifestyle',
    services: ['Ecommerce UI Polish', 'High-Speed Collection Filtering', 'Checkout Optimization'],
    technologies: ['Shopify Plus', 'React', 'Tailwind CSS'],
    description: 'High-end apparel digital storefront emphasizing minimalist typography, editorial product spreads, and fluid mobile UX.',
    featured: true,
    highlightMetric: 'Sub-second Navigation',
    attributionNote: 'Frontend optimization & UI collaboration'
  },
  {
    id: 'fido',
    name: 'Fido',
    category: 'Marketing',
    industry: 'Telecommunications & Mobile',
    services: ['Campaign Landing Pages', 'Responsive UI Engineering', 'Performance Auditing'],
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    description: 'High-traffic promotional campaigns and dynamic checkout flow enhancements engineered for maximum mobile conversion.',
    featured: true,
    highlightMetric: 'Enterprise Grade Performance',
    attributionNote: 'Agency team member contribution / frontend support'
  },
  {
    id: 'macys',
    name: 'Macy\'s',
    category: 'Ecommerce',
    industry: 'Enterprise Retail & Department Store',
    services: ['Digital Merchandising Modules', 'A/B Testing Experiments', 'Performance Enhancements'],
    technologies: ['React', 'TypeScript', 'Node.js', 'Enterprise Microservices'],
    description: 'Scalable digital shopping modules, category navigation refinements, and checkout optimization for enterprise scale.',
    featured: true,
    highlightMetric: 'Scale of Millions of Users',
    attributionNote: 'Enterprise engineering team contribution'
  },
  {
    id: 'hudson-store',
    name: 'Hudson Store',
    category: 'Ecommerce',
    industry: 'Multi-Brand Sportswear & Retail',
    services: ['Omnichannel Retail Tech', 'Loyalty Integration', 'Speed Tuning'],
    technologies: ['Magento', 'Custom React', 'Tailwind CSS'],
    description: 'Multi-brand flagship retail experience unifying in-store inventory, international payment gateways, and VIP loyalty programs.',
    featured: false,
    highlightMetric: 'Seamless Multichannel Sync',
    attributionNote: 'Ecommerce feature engineering & support'
  },
  {
    id: 'centrepoint-stores',
    name: 'Centrepoint Stores',
    category: 'Ecommerce',
    industry: 'Retail Fashion & Family Brands',
    services: ['Regional Catalog Optimization', 'Mobile App Feature Dev', 'Localization'],
    technologies: ['React Native', 'Next.js', 'Enterprise API'],
    description: 'High-density multi-category family fashion platform tailored for high-volume seasonal flash sales and multi-language support.',
    featured: false,
    highlightMetric: 'Multinational Enterprise Reach',
    attributionNote: 'Digital consulting & frontend contribution'
  }
];
