import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { CITY_ROUTES, getCityRouteBySlug } from '@/data/cities'
import { SERVICES } from '@/data/services'
import { BLOG_POSTS } from '@/data/blog'
import { SITE_CONFIG } from '@/data/config'
import { getBreadcrumbSchema } from '@/lib/seo'
import Breadcrumb from '@/components/shared/Breadcrumb'
import Sidebar from '@/components/shared/Sidebar'

export function generateStaticParams() {
  return CITY_ROUTES.map(c => ({ slug: c.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const route = getCityRouteBySlug(params.slug)
  if (!route) return {}
  return {
    title: route.metaTitle,
    description: route.metaDesc,
    alternates: { canonical: `${SITE_CONFIG.url}/sehirlerarasi/${route.slug}` },
    openGraph: { title: route.metaTitle, description: route.metaDesc, url: `${SITE_CONFIG.url}/sehirlerarasi/${route.slug}` },
  }
}

export default function CityRoutePage({ params }: { params: { slug: string } }) {
  const route = getCityRouteBySlug(params.slug)
  if (!route) notFound()

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Ana Sayfa', url: '/' },
    { name: 'Şehirlerarası', url: '/sehirlerarasi' },
    { name: `Adana ${route.city}`, url: `/sehirlerarasi/${route.slug}` },
  ])

  // Random popular routes for linking
  const otherRoutes = CITY_ROUTES.filter(c => c.slug !== route.slug)
  const popularSlugs = ['adana-istanbul','adana-ankara','adana-izmir','adana-mersin','adana-gaziantep','adana-antalya','adana-konya','adana-bursa','adana-kayseri','adana-diyarbakir']
  const popularRoutes = otherRoutes.filter(c => popularSlugs.includes(c.slug)).slice(0, 8)
  const nearbyRoutes = otherRoutes.slice(0, 6)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="bg-primary-700 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-black">Adana {route.city} Kamyonet Nakliye</h1>
          <p className="text-primary-200 mt-2">Adana&apos;dan {route.city}&apos;a şehirlerarası nakliye hizmeti</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <Breadcrumb items={[{ label: 'Şehirlerarası', href: '/sehirlerarasi' }, { label: `Adana ${route.city}` }]} />
        <div className="grid lg:grid-cols-3 gap-10 mt-6">
          <div className="lg:col-span-2">
            <div className="relative h-[250px] md:h-[350px] rounded-2xl overflow-hidden mb-8 shadow-xl">
              <Image src="/images/kamyonet2.jpg" alt={`Adana ${route.city} kamyonet nakliye`} fill className="object-cover" sizes="(max-width:1024px) 100vw, 66vw" />
            </div>
            <article className="prose max-w-none" dangerouslySetInnerHTML={{ __html: route.content }} />

            {/* Popüler rotalar */}
            <div className="mt-10 p-6 bg-primary-50 rounded-2xl">
              <h3 className="font-bold text-primary-700 mb-3">Popüler Şehirlerarası Rotalar</h3>
              <div className="flex flex-wrap gap-2">
                {popularRoutes.map(c => (
                  <Link key={c.slug} href={`/sehirlerarasi/${c.slug}`} className="text-sm bg-white px-3 py-1.5 rounded-full border border-primary-200 hover:text-primary-600 transition">
                    Adana {c.city}
                  </Link>
                ))}
              </div>
            </div>

            {/* Diğer rotalar */}
            <div className="mt-6 p-6 bg-gray-50 rounded-2xl">
              <h3 className="font-bold text-primary-700 mb-3">Diğer Şehirlerarası Rotalar</h3>
              <div className="flex flex-wrap gap-2">
                {nearbyRoutes.map(c => (
                  <Link key={c.slug} href={`/sehirlerarasi/${c.slug}`} className="text-sm bg-white px-3 py-1.5 rounded-full border border-gray-200 hover:border-primary-400 hover:text-primary-600 transition">
                    Adana {c.city}
                  </Link>
                ))}
                <Link href="/sehirlerarasi" className="text-sm bg-primary-600 text-white px-4 py-1.5 rounded-full font-semibold hover:bg-primary-700 transition">
                  Tüm Rotalar →
                </Link>
              </div>
            </div>

            {/* Hizmetler */}
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

            {/* Blog */}
            <div className="mt-6 p-6 bg-white rounded-2xl border border-gray-100">
              <h3 className="font-bold text-primary-700 mb-3">Faydalı Yazılar</h3>
              <ul className="space-y-2">
                {BLOG_POSTS.map(b => (
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
