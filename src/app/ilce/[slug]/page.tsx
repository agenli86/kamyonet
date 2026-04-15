import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { DISTRICTS, getDistrictBySlug } from '@/data/districts'
import { SERVICES } from '@/data/services'
import { BLOG_POSTS } from '@/data/blog'
import { SITE_CONFIG } from '@/data/config'
import { getBreadcrumbSchema } from '@/lib/seo'
import Breadcrumb from '@/components/shared/Breadcrumb'
import Sidebar from '@/components/shared/Sidebar'

export function generateStaticParams() {
  return DISTRICTS.map(d => ({ slug: d.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const district = getDistrictBySlug(params.slug)
  if (!district) return {}
  return {
    title: district.metaTitle,
    description: district.metaDesc,
    alternates: { canonical: `${SITE_CONFIG.url}/ilce/${district.slug}` },
    openGraph: { title: district.metaTitle, description: district.metaDesc, url: `${SITE_CONFIG.url}/ilce/${district.slug}`, images: [{ url: district.image, alt: district.title }] },
  }
}

export default function DistrictPage({ params }: { params: { slug: string } }) {
  const district = getDistrictBySlug(params.slug)
  if (!district) notFound()

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Ana Sayfa', url: '/' },
    { name: 'İlçeler', url: '/ilce/seyhan' },
    { name: district.title, url: `/ilce/${district.slug}` },
  ])

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="bg-primary-700 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-black">{district.title}</h1>
          <p className="text-primary-200 mt-2">{district.metaDesc}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <Breadcrumb items={[{ label: 'İlçeler' }, { label: district.name }]} />
        <div className="grid lg:grid-cols-3 gap-10 mt-6">
          <div className="lg:col-span-2">
            <div className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden mb-8 shadow-xl">
              <Image src={district.image} alt={`${district.title} - Adana Kamyonet Nakliye`} fill className="object-cover" sizes="(max-width:1024px) 100vw, 66vw" priority />
            </div>
            <article className="prose max-w-none" dangerouslySetInnerHTML={{ __html: district.content }} />

            {/* Hizmet tag'leri */}
            <div className="mt-10 p-6 bg-primary-50 rounded-2xl">
              <h3 className="font-bold text-primary-700 mb-3">{district.name} Nakliye Hizmetleri</h3>
              <div className="flex flex-wrap gap-2">
                {district.services.map((s, i) => (
                  <span key={i} className="text-sm bg-white px-4 py-2 rounded-full border border-primary-200 text-primary-700">{s}</span>
                ))}
              </div>
            </div>

            {/* Diğer ilçeler */}
            <div className="mt-6 p-6 bg-gray-50 rounded-2xl">
              <h3 className="font-bold text-primary-700 mb-3">Diğer İlçelerde Nakliye</h3>
              <div className="flex flex-wrap gap-2">
                {DISTRICTS.filter(d => d.slug !== district.slug).map(d => (
                  <Link key={d.slug} href={`/ilce/${d.slug}`} className="text-sm bg-white px-3 py-1.5 rounded-full border border-gray-200 hover:border-primary-400 hover:text-primary-600 transition">
                    {d.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Hizmet sayfaları */}
            <div className="mt-6 p-6 bg-accent-50 rounded-2xl">
              <h3 className="font-bold text-primary-700 mb-3">Hizmetlerimiz</h3>
              <div className="flex flex-wrap gap-2">
                {SERVICES.map(s => (
                  <Link key={s.slug} href={`/hizmet/${s.slug}`} className="text-sm bg-white px-3 py-1.5 rounded-full border border-gray-200 hover:text-primary-600 transition">
                    {s.shortTitle}
                  </Link>
                ))}
              </div>
            </div>

            {/* Blog linkleri */}
            <div className="mt-6 p-6 bg-white rounded-2xl border border-gray-100">
              <h3 className="font-bold text-primary-700 mb-3">Faydalı Yazılar</h3>
              <ul className="space-y-2">
                {BLOG_POSTS.slice(0, 3).map(b => (
                  <li key={b.slug}><Link href={`/blog/${b.slug}`} className="text-sm text-primary-600 hover:text-primary-800">→ {b.title}</Link></li>
                ))}
              </ul>
            </div>
          </div>
          <Sidebar />
        </div>
      </div>
    </>
  )
}
