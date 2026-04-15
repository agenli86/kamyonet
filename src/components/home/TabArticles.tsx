'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { TAB_SERVICES } from '@/data/services'

export default function TabArticles() {
  const [activeTab, setActiveTab] = useState(0)
  const active = TAB_SERVICES[activeTab]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-black text-center text-primary-800 mb-3">
          Adana Kamyonet Nakliye Hizmetleri
        </h2>
        <p className="text-center text-gray-500 mb-8 max-w-2xl mx-auto">
          Adana genelinde profesyonel kamyonet nakliye, parça eşya taşıma ve küçük nakliye hizmetleri sunuyoruz.
        </p>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {TAB_SERVICES.map((s, i) => (
            <button
              key={s.slug}
              onClick={() => setActiveTab(i)}
              className={`tab-btn ${i === activeTab ? 'active' : ''}`}
            >
              {s.shortTitle}
            </button>
          ))}
        </div>

        {/* Active Content */}
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src={active.image}
              alt={`${active.title} - Adana Kamyonet Nakliye`}
              fill
              className="object-cover"
              sizes="(max-width:768px) 100vw, 50vw"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-primary-700 mb-4">{active.title}</h3>
            <div className="prose" dangerouslySetInnerHTML={{ __html: active.content }} />
            <Link
              href={`/hizmet/${active.slug}`}
              className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-bold px-6 py-3 rounded-full mt-6 transition shadow-lg"
            >
              Detaylı Bilgi →
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
