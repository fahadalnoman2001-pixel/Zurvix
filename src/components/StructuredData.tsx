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
        description: 'ZURVIX is a digital agency providing Website & App Design, Development, Digital Marketing, SEO, GEO/LLM AI Search Optimization, and Ongoing Maintenance.',
        founder: {
          '@type': 'Person',
          name: 'Fahad Al Noman',
          url: 'https://fahadalnoman.com',
          jobTitle: 'Founder & Principal Technologist'
        },
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+35699784477',
          contactType: 'sales',
          availableLanguage: ['English']
        },
        sameAs: [
          'https://fahadalnoman.com'
        ]
      },
      {
        '@type': 'WebSite',
        '@id': 'https://zurvix.com/#website',
        url: 'https://zurvix.com',
        name: 'ZURVIX — Design. Development. Growth.',
        publisher: {
          '@id': 'https://zurvix.com/#organization'
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
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'ZURVIX Agency Services',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Business Website Development',
                description: 'Custom business and service websites starting from €300.'
              },
              price: '300',
              priceCurrency: 'EUR'
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Custom Website & AI Solutions',
                description: 'Custom websites with admin panels and AI features from €350.'
              },
              price: '350',
              priceCurrency: 'EUR'
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Ecommerce Development',
                description: 'Full-featured ecommerce store development starting from €500.'
              },
              price: '500',
              priceCurrency: 'EUR'
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Mobile App Development',
                description: 'Custom iOS & Android mobile application development starting from €700.'
              },
              price: '700',
              priceCurrency: 'EUR'
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'SEO + GEO + LLM AI Search Optimization',
                description: 'Search and AI engine optimization retainer from €500/month.'
              },
              price: '500',
              priceCurrency: 'EUR'
            }
          ]
        }
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
