import React from 'react';

export default function StructuredData() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://zurvix.com/#organization',
        name: 'ZURVIX',
        url: 'https://zurvix.com',
        logo: 'https://zurvix.com/brand/zurvix-dark-mode.png',
        description: 'ZURVIX is a premier digital agency specializing in Website & App Design, Full-Stack Development (Next.js, Laravel, Flutter), Ecommerce Platforms, SEO, Generative Engine Optimization (GEO), LLM AI Search Optimization, and Ongoing Maintenance.',
        slogan: 'We Design. We Build. We Grow.',
        founder: {
          '@type': 'Person',
          name: 'Fahad Al Noman',
          url: 'https://fahadalnoman.com',
          jobTitle: 'Founder & Principal Technologist'
        },
        contactPoint: [
          {
            '@type': 'ContactPoint',
            telephone: '+35699784477',
            contactType: 'sales',
            availableLanguage: ['English'],
            areaServed: 'Worldwide'
          },
          {
            '@type': 'ContactPoint',
            email: 'hello@zurvix.com',
            contactType: 'customer service',
            availableLanguage: ['English']
          }
        ],
        areaServed: {
          '@type': 'GeoShape',
          name: 'Worldwide'
        },
        knowsAbout: [
          'Web Development',
          'Mobile App Development',
          'UI/UX Design',
          'Next.js',
          'Laravel',
          'Flutter',
          'React Native',
          'Ecommerce Development',
          'SEO',
          'Generative Engine Optimization',
          'GEO',
          'LLM AI Search Optimization',
          'Digital Marketing',
          'Social Media Marketing',
          'Website Maintenance',
          'TypeScript',
          'Tailwind CSS',
          'Full-Stack Development'
        ],
        sameAs: [
          'https://fahadalnoman.com'
        ]
      },
      {
        '@type': 'WebSite',
        '@id': 'https://zurvix.com/#website',
        url: 'https://zurvix.com',
        name: 'ZURVIX — We Design. We Build. We Grow.',
        description: 'Premier digital agency offering website development, mobile apps, ecommerce, SEO, GEO, and AI search optimization.',
        publisher: {
          '@id': 'https://zurvix.com/#organization'
        },
        potentialAction: {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: 'https://zurvix.com/blog?search={search_term_string}'
          },
          'query-input': 'required name=search_term_string'
        }
      },
      {
        '@type': 'ProfessionalService',
        '@id': 'https://zurvix.com/#service',
        name: 'ZURVIX Digital Agency',
        url: 'https://zurvix.com',
        priceRange: '€300 - €5000+',
        telephone: '+35699784477',
        email: 'hello@zurvix.com',
        description: 'End-to-end digital agency providing custom website development, mobile app development, ecommerce platforms, SEO, GEO, LLM AI search optimization, and 24/7 maintenance.',
        areaServed: 'Worldwide',
        serviceType: [
          'Web Development',
          'Mobile App Development',
          'UI/UX Design',
          'Ecommerce Development',
          'SEO Optimization',
          'Generative Engine Optimization',
          'Digital Marketing',
          'Website Maintenance'
        ],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'ZURVIX Agency Services',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Business Website Development',
                description: 'Professional custom business websites with free domain, hosting, mobile responsive design, and basic SEO setup. Starting from €300.'
              },
              price: '300',
              priceCurrency: 'EUR'
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Custom Website & AI Solutions',
                description: 'Bespoke web applications with smart admin panels, AI-powered features, custom API integrations, and comprehensive SEO foundation. Starting from €350.'
              },
              price: '350',
              priceCurrency: 'EUR'
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Ecommerce Development',
                description: 'Full-featured ecommerce stores with product catalogs, secure payment gateways, order management, and conversion tools. Starting from €500.'
              },
              price: '500',
              priceCurrency: 'EUR'
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Custom Mobile App Development',
                description: 'Cross-platform native iOS & Android mobile applications with Flutter or React Native, custom APIs, and store submission support. Starting from €700.'
              },
              price: '700',
              priceCurrency: 'EUR'
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'SEO + GEO + LLM AI Search Optimization',
                description: 'Complete technical SEO, Generative Engine Optimization, LLM brand knowledge engineering, content strategy, and AI search dominance. From €500/month.'
              },
              price: '500',
              priceCurrency: 'EUR'
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Website Maintenance',
                description: '24/7 monitoring, security scans, daily backups, Core Web Vitals optimization, bug fixes, and direct technical support. From €200/month.'
              },
              price: '200',
              priceCurrency: 'EUR'
            }
          ]
        }
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://zurvix.com/#breadcrumb',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://zurvix.com' },
          { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://zurvix.com/services' },
          { '@type': 'ListItem', position: 3, name: 'Pricing', item: 'https://zurvix.com/pricing' },
          { '@type': 'ListItem', position: 4, name: 'Portfolio', item: 'https://zurvix.com/portfolio' },
          { '@type': 'ListItem', position: 5, name: 'Blog', item: 'https://zurvix.com/blog' },
          { '@type': 'ListItem', position: 6, name: 'About', item: 'https://zurvix.com/about' },
          { '@type': 'ListItem', position: 7, name: 'FAQ', item: 'https://zurvix.com/faq' },
          { '@type': 'ListItem', position: 8, name: 'Contact', item: 'https://zurvix.com/contact' }
        ]
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
