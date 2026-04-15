import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { BLOG_POSTS } from '@/data/blog'
import { SITE_CONFIG } from '@/data/config'

export const metadata: Metadata = {
  title: 'Blog | Adana Nakliye Rehberi ve Faydalı Yazılar',
  description: 'Adana nakliye, taşımacılık ipuçları, kamyonet nakliye fiyatları ve daha fazlası. Nakliye hakkında faydalı bilgiler.',
  alternates: { canonical: `${SITE_CONFIG.url}/blog` },
}

export default function BlogPage() {
  return (
    <>
      <div className="bg-primary-700 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-black">Blog & Faydalı Yazılar</h1>
          <p className="text-primary-200 mt-2">Nakliye hakkında bilmeniz gereken her şey</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map(post => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition">
              <div className="relative h-52 overflow-hidden">
                <Image src={post.image} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width:768px) 100vw, 33vw" />
              </div>
              <div className="p-6">
                <p className="text-xs text-gray-400 mb-2">{new Date(post.date).toLocaleDateString('tr-TR', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                <h2 className="text-lg font-bold text-gray-800 group-hover:text-primary-600 transition mb-2">{post.title}</h2>
                <p className="text-sm text-gray-500 line-clamp-3">{post.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}
