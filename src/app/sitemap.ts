import { MetadataRoute } from 'next'
import { SITE_CONFIG } from '@/data/config'
import { SERVICES } from '@/data/services'
import { DISTRICTS } from '@/data/districts'
import { CITY_ROUTES } from '@/data/cities'
import { BLOG_POSTS } from '@/data/blog'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_CONFIG.url

  // Static pages
  const staticPages = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'daily' as const, priority: 1.0 },
    { url: `${baseUrl}/blog`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${baseUrl}/galeri`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.6 },
    { url: `${baseUrl}/iletisim`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/sss`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.6 },
    { url: `${baseUrl}/sehirlerarasi`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  ]

  // Service pages
  const servicePages = SERVICES.map(s => ({
    url: `${baseUrl}/hizmet/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }))

  // District pages
  const districtPages = DISTRICTS.map(d => ({
    url: `${baseUrl}/ilce/${d.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  // City route pages
  const cityPages = CITY_ROUTES.map(c => ({
    url: `${baseUrl}/sehirlerarasi/${c.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Blog pages
  const blogPages = BLOG_POSTS.map(b => ({
    url: `${baseUrl}/blog/${b.slug}`,
    lastModified: new Date(b.date),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...staticPages, ...servicePages, ...districtPages, ...cityPages, ...blogPages]
}
