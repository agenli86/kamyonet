import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { BLOG_POSTS, getBlogBySlug } from '@/data/blog'
import { SERVICES } from '@/data/services'
import { DISTRICTS } from '@/data/districts'
import { SITE_CONFIG } from '@/data/config'
import { getArticleSchema, getBreadcrumbSchema } from '@/lib/seo'
import Breadcrumb from '@/components/shared/Breadcrumb'
import Sidebar from '@/components/shared/Sidebar'

export function generateStaticParams() {
  return BLOG_POSTS.map(b => ({ slug: b.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getBlogBySlug(params.slug)
  if (!post) return {}
  return {
    title: post.metaTitle,
    description: post.metaDesc,
    alternates: { canonical: `${SITE_CONFIG.url}/blog/${post.slug}` },
    openGraph: { title: post.metaTitle, description: post.metaDesc, url: `${SITE_CONFIG.url}/blog/${post.slug}`, images: [{ url: post.image, alt: post.title }], type: 'article', publishedTime: post.date },
  }
}

export default function BlogDetailPage({ params }: { params: { slug: string } }) {
  const post = getBlogBySlug(params.slug)
  if (!post) notFound()

  const articleSchema = getArticleSchema({ title: post.title, desc: post.metaDesc, image: post.image, date: post.date, url: `/blog/${post.slug}` })
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Ana Sayfa', url: '/' },
    { name: 'Blog', url: '/blog' },
    { name: post.title, url: `/blog/${post.slug}` },
  ])

  const otherPosts = BLOG_POSTS.filter(b => b.slug !== post.slug)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="bg-primary-700 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-black">{post.title}</h1>
          <p className="text-primary-200 mt-2">{new Date(post.date).toLocaleDateString('tr-TR', { year: 'numeric', month: 'long', day: 'numeric' })} • {post.author}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <Breadcrumb items={[{ label: 'Blog', href: '/blog' }, { label: post.title }]} />
        <div className="grid lg:grid-cols-3 gap-10 mt-6">
          <div className="lg:col-span-2">
            <div className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden mb-8 shadow-xl">
              <Image src={post.image} alt={post.title} fill className="object-cover" sizes="(max-width:1024px) 100vw, 66vw" priority />
            </div>
            <article className="prose max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />

            {/* Diğer blog yazıları */}
            <div className="mt-10 p-6 bg-gray-50 rounded-2xl">
              <h3 className="font-bold text-primary-700 mb-3">Diğer Yazılarımız</h3>
              <ul className="space-y-3">
                {otherPosts.map(b => (
                  <li key={b.slug}>
                    <Link href={`/blog/${b.slug}`} className="flex items-start gap-3 group">
                      <div className="relative w-20 h-14 rounded-lg overflow-hidden shrink-0">
                        <Image src={b.image} alt={b.title} fill className="object-cover" sizes="80px" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-800 group-hover:text-primary-600 transition">{b.title}</p>
                        <p className="text-xs text-gray-400">{new Date(b.date).toLocaleDateString('tr-TR', { year: 'numeric', month: 'short' })}</p>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Hizmet linkleri */}
            <div className="mt-6 p-6 bg-primary-50 rounded-2xl">
              <h3 className="font-bold text-primary-700 mb-3">Hizmetlerimiz</h3>
              <div className="flex flex-wrap gap-2">
                {SERVICES.map(s => (
                  <Link key={s.slug} href={`/hizmet/${s.slug}`} className="text-sm bg-white px-3 py-1.5 rounded-full border border-primary-200 hover:text-primary-600 transition">
                    {s.shortTitle}
                  </Link>
                ))}
              </div>
            </div>

            {/* İlçe linkleri */}
            <div className="mt-6 p-6 bg-accent-50 rounded-2xl">
              <h3 className="font-bold text-primary-700 mb-3">İlçelerde Nakliye</h3>
              <div className="flex flex-wrap gap-2">
                {DISTRICTS.slice(0, 6).map(d => (
                  <Link key={d.slug} href={`/ilce/${d.slug}`} className="text-sm bg-white px-3 py-1.5 rounded-full border border-gray-200 hover:text-primary-600 transition">
                    {d.name} Nakliye
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <Sidebar />
        </div>
      </div>
    </>
  )
}
