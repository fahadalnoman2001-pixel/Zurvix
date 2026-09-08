export interface TechItem {
  name: string;
  category: 'Frontend' | 'Backend' | 'Database' | 'Mobile' | 'Ecommerce' | 'Cloud & DevOps' | 'AI & Intelligence' | 'Motion & Creative';
  version?: string;
  badge?: string;
  description: string;
}

export const techStackData: TechItem[] = [
  // Frontend
  { name: 'Next.js', category: 'Frontend', version: 'v16.3+', badge: 'App Router', description: 'Server components, edge rendering, and SEO-first React architecture.' },
  { name: 'React', category: 'Frontend', version: 'v19.2', description: 'Modern concurrent UI rendering with optimistic state updates.' },
  { name: 'TypeScript', category: 'Frontend', version: 'v5.7+', description: 'Strict type safety and robust enterprise software stability.' },
  { name: 'Tailwind CSS', category: 'Frontend', version: 'v4.0', description: 'Utility-first modern design token engine.' },
  { name: 'HTML5 & Modern CSS', category: 'Frontend', description: 'Semantic accessible markup, CSS grid, subgrid, and modern color spaces.' },

  // Backend
  { name: 'Laravel', category: 'Backend', version: 'v13.x', badge: 'API Backend', description: 'Elegant PHP framework for scalable enterprise APIs, queues & security.' },
  { name: 'PHP', category: 'Backend', version: 'v8.4', description: 'High-performance server-side execution engine.' },
  { name: 'Node.js', category: 'Backend', version: 'v22+ LTS', description: 'Event-driven asynchronous microservices and real-time APIs.' },
  { name: 'Python', category: 'Backend', version: 'v3.12+', description: 'Data processing, machine learning, and AI agent orchestration.' },
  { name: 'REST & GraphQL APIs', category: 'Backend', description: 'Deterministic, strongly-typed client-server communications.' },

  // Database
  { name: 'PostgreSQL', category: 'Database', description: 'Advanced relational database with JSONB support and pgvector.' },
  { name: 'MySQL', category: 'Database', description: 'Proven transactional relational database for high-volume operations.' },
  { name: 'Redis', category: 'Database', description: 'Ultra-fast in-memory cache, rate limiting, and pub/sub message brokering.' },
  { name: 'MongoDB', category: 'Database', description: 'Flexible document database for high-throughput unstructured data.' },

  // Mobile
  { name: 'Flutter', category: 'Mobile', badge: 'Cross-Platform', description: 'Single-codebase native compilation for iOS and Android.' },
  { name: 'React Native', category: 'Mobile', description: 'Native mobile apps with the agility and ecosystem of React.' },
  { name: 'Android Native (Kotlin)', category: 'Mobile', description: 'Modern native Android architecture and Jetpack Compose.' },
  { name: 'iOS Native (Swift)', category: 'Mobile', description: 'SwiftUI and UIKit native iOS performance and hardware integration.' },

  // Ecommerce
  { name: 'Shopify / Shopify Plus', category: 'Ecommerce', description: 'Custom Liquid themes, headless Hydrogen stores, and custom apps.' },
  { name: 'WooCommerce', category: 'Ecommerce', description: 'Customizable WordPress ecommerce with specialized payment gateways.' },
  { name: 'Custom Ecommerce Engines', category: 'Ecommerce', badge: 'High Scale', description: 'Bespoke Next.js + Laravel headless high-speed stores.' },

  // Cloud & DevOps
  { name: 'AWS', category: 'Cloud & DevOps', description: 'EC2, S3, CloudFront, Lambda, and scalable cloud compute.' },
  { name: 'DigitalOcean', category: 'Cloud & DevOps', description: 'High-performance cloud droplets and managed Kubernetes clusters.' },
  { name: 'Vercel', category: 'Cloud & DevOps', description: 'Global Edge Network with instantaneous serverless deployments.' },
  { name: 'Hostinger', category: 'Cloud & DevOps', description: 'High-speed business hosting and optimized cloud environments.' },
  { name: 'Cloudflare', category: 'Cloud & DevOps', description: 'Global CDN, DDoS mitigation, Web Application Firewall, and DNS.' },
  { name: 'Docker & GitHub Actions', category: 'Cloud & DevOps', description: 'Containerized environments and automated CI/CD pipelines.' },

  // AI & Intelligence
  { name: 'OpenAI API & Claude', category: 'AI & Intelligence', badge: 'LLM APIs', description: 'State-of-the-art models for semantic intelligence and generation.' },
  { name: 'AI Agents & RAG', category: 'AI & Intelligence', description: 'Custom retrieval-augmented generation and automated workflows.' },
  { name: 'MCP (Model Context Protocol)', category: 'AI & Intelligence', description: 'Standardized tool use and context orchestration for AI agents.' },
  { name: 'AI Search (GEO & LLM)', category: 'AI & Intelligence', description: 'Optimizing digital assets for ChatGPT, Gemini, and Perplexity citation.' },

  // Motion & Creative
  { name: 'GSAP (GreenSock)', category: 'Motion & Creative', badge: 'ScrollTrigger', description: 'High-performance scroll-driven animations and timelines.' },
  { name: 'Framer Motion', category: 'Motion & Creative', description: 'Declarative gesture animations and layout transitions in React.' },
  { name: 'Three.js & WebGL', category: 'Motion & Creative', description: 'Interactive 3D particle systems and GPU-accelerated graphics.' }
];

export interface Partner {
  name: string;
  category: string;
  tagline: string;
  iconType: string;
}

export const platformEcosystem: Partner[] = [
  { name: 'Hostinger', category: 'Hosting & Cloud', tagline: 'Enterprise WordPress & Cloud infrastructure', iconType: 'server' },
  { name: 'Microsoft', category: 'Cloud & Developer Ecosystem', tagline: 'Enterprise toolchains & Azure infrastructure', iconType: 'cloud' },
  { name: 'Amazon Web Services', category: 'Cloud Compute', tagline: 'Global cloud infrastructure & CDN scalability', iconType: 'shield' },
  { name: 'DigitalOcean', category: 'Developer Cloud', tagline: 'Fast SSD droplets & managed databases', iconType: 'cpu' },
  { name: 'Google Cloud / Antigravity', category: 'AI & Developer Tools', tagline: 'Advanced AI tooling & compute ecosystem', iconType: 'sparkles' },
  { name: 'Vercel', category: 'Edge Deployment', tagline: 'Next.js native edge runtime & global deployments', iconType: 'globe' }
];
