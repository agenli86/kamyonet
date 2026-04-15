'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { SERVICES } from '@/data/services'
import { REVIEWS } from '@/data/faqs-reviews'
import { FAQS } from '@/data/faqs-reviews'
import { BLOG_POSTS } from '@/data/blog'
import { DISTRICTS } from '@/data/districts'
import { SITE_CONFIG } from '@/data/config'
import { Star, ChevronDown, MapPin, Truck, Package, Home, ArrowUpDown, Heart } from 'lucide-react'

const iconMap: Record<string, any> = { Truck, Package, Home, ArrowUpDown, Heart, MapPin, Car: Truck, PackageCheck: Package }

// ═══ SERVICES GRID ═══
export function ServicesGrid() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-black text-center text-primary-800 mb-3">Hizmetlerimiz</h2>
        <p className="text-center text-gray-500 mb-10 max-w-xl mx-auto">Adana nakliye ihtiyaçlarınız için kapsamlı çözümler</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map(s => {
            const Icon = iconMap[s.icon] || Truck
            return (
              <Link key={s.slug} href={`/hizmet/${s.slug}`} className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
                <div className="w-14 h-14 rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center mb-4 group-hover:bg-primary-600 group-hover:text-white transition">
                  <Icon size={28} />
                </div>
                <h3 className="font-bold text-lg text-gray-800 mb-2 group-hover:text-primary-600 transition">{s.shortTitle}</h3>
                <p className="text-sm text-gray-500 line-clamp-2">{s.metaDesc.slice(0, 100)}...</p>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// ═══ REVIEWS ═══
export function ReviewsSection() {
  return (
    <section className="py-16 bg-white" id="yorumlar">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-black text-center text-primary-800 mb-3">Müşteri Yorumları</h2>
        <p className="text-center text-gray-500 mb-10">Bizi tercih eden müşterilerimizin değerlendirmeleri</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {REVIEWS.map((r, i) => (
            <div key={i} className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition">
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} size={16} className={j < r.rating ? 'text-accent-500 fill-accent-500' : 'text-gray-300'} />
                ))}
              </div>
              <p className="text-sm text-gray-600 mb-4 leading-relaxed">&ldquo;{r.comment}&rdquo;</p>
              <div className="flex items-center justify-between text-xs text-gray-400">
                <span className="font-bold text-gray-700">{r.name}</span>
                <span>{r.location}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ═══ FAQ ═══
export function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(null)
  return (
    <section className="py-16 bg-gray-50" id="sss">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-black text-center text-primary-800 mb-3">Sıkça Sorulan Sorular</h2>
        <p className="text-center text-gray-500 mb-10">Adana kamyonet nakliye hakkında merak edilenler</p>
        <div className="space-y-3">
          {FAQS.map((f, i) => (
            <div key={i} className="bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm">
              <button
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-4 text-left font-semibold text-gray-800 hover:text-primary-600 transition"
              >
                <span className="pr-4">{f.question}</span>
                <ChevronDown size={20} className={`shrink-0 transition-transform ${openIdx === i ? 'rotate-180 text-primary-600' : 'text-gray-400'}`} />
              </button>
              <div className={`faq-answer ${openIdx === i ? 'open' : ''}`}>
                <p className="px-6 pb-4 text-sm text-gray-600 leading-relaxed">{f.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ═══ BLOG SECTION ═══
export function BlogSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-3xl font-black text-primary-800">Blog & Faydalı Yazılar</h2>
            <p className="text-gray-500 mt-1">Nakliye hakkında bilmeniz gerekenler</p>
          </div>
          <Link href="/blog" className="hidden sm:flex items-center gap-1 text-primary-600 font-bold hover:text-primary-800 transition">
            Tümünü Gör →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {BLOG_POSTS.map(post => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition">
              <div className="relative h-44 overflow-hidden">
                <Image src={post.image} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width:768px) 100vw, 25vw" />
              </div>
              <div className="p-5">
                <p className="text-xs text-gray-400 mb-2">{new Date(post.date).toLocaleDateString('tr-TR', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                <h3 className="font-bold text-gray-800 group-hover:text-primary-600 transition line-clamp-2">{post.title}</h3>
                <p className="text-sm text-gray-500 mt-2 line-clamp-2">{post.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

// ═══ DISTRICTS GRID ═══
export function DistrictsGrid() {
  return (
    <section className="py-16 bg-primary-600">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-black text-center text-white mb-3">Adana İlçeleri Nakliye</h2>
        <p className="text-center text-primary-200 mb-10">Adana&apos;nın tüm ilçelerinde nakliye hizmeti veriyoruz</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {DISTRICTS.map(d => (
            <Link key={d.slug} href={`/ilce/${d.slug}`} className="bg-white/10 backdrop-blur hover:bg-white/20 rounded-xl px-4 py-3 text-center text-white font-semibold text-sm transition hover:-translate-y-0.5">
              <MapPin size={16} className="mx-auto mb-1 text-accent-400" />
              {d.name}
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

// ═══ CTA SECTION ═══
export function CtaSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-accent-500 to-accent-600">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-black text-primary-900 mb-4">Hemen Teklif Alın!</h2>
        <p className="text-primary-800 text-lg mb-8 max-w-xl mx-auto">Adana kamyonet nakliye için ücretsiz fiyat teklifi almak ister misiniz? Hemen arayın!</p>
        <a href={`tel:${SITE_CONFIG.phoneRaw}`} className="inline-flex items-center gap-3 bg-primary-800 hover:bg-primary-900 text-white font-black text-2xl px-10 py-5 rounded-full transition shadow-2xl">
          📞 {SITE_CONFIG.phone}
        </a>
      </div>
    </section>
  )
}
