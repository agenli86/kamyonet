import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { SERVICES, getServiceBySlug } from '@/data/services'
import { DISTRICTS } from '@/data/districts'
import { BLOG_POSTS } from '@/data/blog'
import { SITE_CONFIG } from '@/data/config'
import { getServiceSchema, getBreadcrumbSchema } from '@/lib/seo'
import Breadcrumb from '@/components/shared/Breadcrumb'
import Sidebar from '@/components/shared/Sidebar'

export function generateStaticParams() {
  return SERVICES.map(s => ({ slug: s.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const service = getServiceBySlug(params.slug)
  if (!service) return {}
  return {
    title: service.metaTitle,
    description: service.metaDesc,
    alternates: { canonical: `${SITE_CONFIG.url}/hizmet/${service.slug}` },
    openGraph: { title: service.metaTitle, description: service.metaDesc, url: `${SITE_CONFIG.url}/hizmet/${service.slug}`, images: [{ url: service.image, alt: service.title }] },
  }
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = getServiceBySlug(params.slug)
  if (!service) notFound()

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Ana Sayfa', url: '/' },
    { name: 'Hizmetler', url: '/hizmet/adana-kamyonet-nakliye' },
    { name: service.title, url: `/hizmet/${service.slug}` },
  ])
  const serviceSchema = getServiceSchema({ title: service.title, desc: service.metaDesc, url: `/hizmet/${service.slug}` })

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      <div className="bg-primary-700 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-black">{service.title}</h1>
          <p className="text-primary-200 mt-2">{service.metaDesc}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <Breadcrumb items={[{ label: 'Hizmetler', href: '/hizmet/adana-kamyonet-nakliye' }, { label: service.title }]} />
        <div className="grid lg:grid-cols-3 gap-10 mt-6">
          <div className="lg:col-span-2">
            <div className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden mb-8 shadow-xl">
              <Image src={service.image} alt={`${service.title} - Adana Kamyonet Nakliye`} fill className="object-cover" sizes="(max-width:1024px) 100vw, 66vw" priority />
            </div>
            <article className="prose max-w-none" dangerouslySetInnerHTML={{ __html: service.content }} />

            {/* İlgili Hizmetler */}
            <div className="mt-10 p-6 bg-gray-50 rounded-2xl">
              <h3 className="font-bold text-primary-700 mb-3">Diğer Hizmetlerimiz</h3>
              <div className="flex flex-wrap gap-2">
                {SERVICES.filter(s => s.slug !== service.slug).map(s => (
                  <Link key={s.slug} href={`/hizmet/${s.slug}`} className="text-sm bg-white px-4 py-2 rounded-full border border-gray-200 hover:border-primary-400 hover:text-primary-600 transition">
                    {s.shortTitle}
                  </Link>
                ))}
              </div>
            </div>

            {/* İlçe Linkleri */}
            <div className="mt-6 p-6 bg-primary-50 rounded-2xl">
              <h3 className="font-bold text-primary-700 mb-3">İlçelerde Bu Hizmet</h3>
              <div className="flex flex-wrap gap-2">
                {DISTRICTS.slice(0, 8).map(d => (
                  <Link key={d.slug} href={`/ilce/${d.slug}`} className="text-sm bg-white px-3 py-1.5 rounded-full border border-primary-200 hover:text-primary-600 transition">
                    {d.name} Nakliye
                  </Link>
                ))}
              </div>
            </div>

            {/* Blog Linkleri */}
            <div className="mt-6 p-6 bg-accent-50 rounded-2xl">
              <h3 className="font-bold text-primary-700 mb-3">Faydalı Yazılar</h3>
              <ul className="space-y-2">
                {BLOG_POSTS.slice(0, 3).map(b => (
                  <li key={b.slug}>
                    <Link href={`/blog/${b.slug}`} className="text-sm text-primary-600 hover:text-primary-800 transition">
                      → {b.title}
                    </Link>
                  </li>
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
