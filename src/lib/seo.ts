import { SITE_CONFIG } from '@/data/config'
import { FAQS } from '@/data/faqs-reviews'
import { REVIEWS } from '@/data/faqs-reviews'

export function getLocalBusinessSchema() {
  const avgRating = REVIEWS.reduce((sum, r) => sum + r.rating, 0) / REVIEWS.length
  return {
    '@context': 'https://schema.org',
    '@type': 'MovingCompany',
    name: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    telephone: SITE_CONFIG.phone,
    email: SITE_CONFIG.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Adana',
      addressRegion: 'Çukurova',
      addressCountry: 'TR',
    },
    geo: { '@type': 'GeoCoordinates', latitude: 37.0, longitude: 35.32 },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
      opens: '07:00',
      closes: '22:00',
    },
    priceRange: '₺₺',
    image: `${SITE_CONFIG.url}/images/kamyonet1.png`,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: avgRating.toFixed(1),
      reviewCount: REVIEWS.length,
      bestRating: 5,
      worstRating: 1,
    },
    review: REVIEWS.slice(0, 5).map(r => ({
      '@type': 'Review',
      author: { '@type': 'Person', name: r.name },
      reviewRating: { '@type': 'Rating', ratingValue: r.rating, bestRating: 5 },
      reviewBody: r.comment,
      datePublished: r.date,
    })),
    sameAs: [SITE_CONFIG.socialMedia.facebook, SITE_CONFIG.socialMedia.instagram].filter(Boolean),
    areaServed: { '@type': 'City', name: 'Adana' },
    serviceType: ['Kamyonet Nakliye', 'Parça Eşya Taşıma', 'Küçük Nakliye', 'Evden Eve Nakliyat', 'Şehirlerarası Nakliye', 'Çeyiz Taşıma'],
  }
}

export function getFAQSchema(faqs?: { question: string; answer: string }[]) {
  const items = faqs || FAQS
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map(f => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  }
}

export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${SITE_CONFIG.url}${item.url}`,
    })),
  }
}

export function getArticleSchema(article: { title: string; desc: string; image: string; date: string; url: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.desc,
    image: `${SITE_CONFIG.url}${article.image}`,
    datePublished: article.date,
    author: { '@type': 'Organization', name: SITE_CONFIG.name },
    publisher: {
      '@type': 'Organization',
      name: SITE_CONFIG.name,
      logo: { '@type': 'ImageObject', url: `${SITE_CONFIG.url}/images/logo.png` },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_CONFIG.url}${article.url}` },
  }
}

export function getServiceSchema(service: { title: string; desc: string; url: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.desc,
    provider: {
      '@type': 'MovingCompany',
      name: SITE_CONFIG.name,
      telephone: SITE_CONFIG.phone,
    },
    areaServed: { '@type': 'City', name: 'Adana' },
    url: `${SITE_CONFIG.url}${service.url}`,
  }
}
