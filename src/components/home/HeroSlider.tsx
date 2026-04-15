'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { SITE_CONFIG } from '@/data/config'
import { ChevronLeft, ChevronRight, Phone } from 'lucide-react'

const slides = [
  {
    image: '/images/kamyonet1.png',
    alt: 'Adana Kamyonet Nakliye - Profesyonel Taşımacılık',
    title: 'Adana Kamyonet Nakliye',
    subtitle: 'Güvenilir, Hızlı ve Ekonomik Taşımacılık',
  },
  {
    image: '/images/kamyonet2.jpg',
    alt: 'Adana Parça Eşya Taşıma - Küçük Nakliye',
    title: 'Parça Eşya Taşıma',
    subtitle: 'Tek Parça Bile Olsa Özenle Taşırız',
  },
  {
    image: '/images/nakliyeadana.jpg',
    alt: 'Adana Küçük Nakliye - Şehir İçi Taşımacılık',
    title: 'Küçük Nakliye Hizmeti',
    subtitle: 'Adana Genelinde 7/24 Hizmet',
  },
]

export default function HeroSlider() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => setCurrent(p => (p + 1) % slides.length), 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative h-[500px] md:h-[600px] overflow-hidden bg-primary-900">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-700 ${i === current ? 'opacity-100' : 'opacity-0'}`}
        >
          <Image
            src={slide.image}
            alt={slide.alt}
            fill
            className="object-cover"
            priority={i === 0}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 via-primary-900/60 to-transparent" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 w-full">
          <div className="max-w-xl">
            <span className="inline-block bg-accent-500 text-primary-900 text-xs font-bold px-4 py-1.5 rounded-full mb-4 animate-fadeInUp">
              🚛 {SITE_CONFIG.slogan}
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-2 animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
              Adana Kamyonet Nakliye
            </h1>
            <p className="text-2xl md:text-3xl font-bold text-accent-400 mb-4 animate-fadeInUp" style={{ animationDelay: '0.15s' }}>
              {slides[current].subtitle}
            </p>
            <p className="text-lg md:text-xl text-gray-200 mb-8 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
              {slides[current].subtitle}
            </p>
            <div className="flex flex-wrap gap-4 animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
              <a href={`tel:${SITE_CONFIG.phoneRaw}`} className="flex items-center gap-2 bg-accent-500 hover:bg-accent-600 text-primary-900 font-bold px-8 py-4 rounded-full text-lg transition shadow-2xl">
                <Phone size={20} /> Hemen Ara
              </a>
              <a href={`https://wa.me/${SITE_CONFIG.whatsapp}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-4 rounded-full text-lg transition shadow-2xl">
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Nav Arrows */}
      <button onClick={() => setCurrent(p => (p - 1 + slides.length) % slides.length)} className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 p-3 rounded-full transition" aria-label="Önceki">
        <ChevronLeft size={24} className="text-white" />
      </button>
      <button onClick={() => setCurrent(p => (p + 1) % slides.length)} className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 p-3 rounded-full transition" aria-label="Sonraki">
        <ChevronRight size={24} className="text-white" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, i) => (
          <button key={i} onClick={() => setCurrent(i)} className={`w-3 h-3 rounded-full transition ${i === current ? 'bg-accent-500 w-8' : 'bg-white/40'}`} aria-label={`Slide ${i + 1}`} />
        ))}
      </div>
    </section>
  )
}
