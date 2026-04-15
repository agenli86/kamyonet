import { Metadata } from 'next'
import Link from 'next/link'
import { CITY_ROUTES } from '@/data/cities'
import { SITE_CONFIG } from '@/data/config'
import { MapPin } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Adana Şehirlerarası Nakliye | 81 İle Kamyonet Nakliye',
  description: 'Adana\'dan Türkiye\'nin 81 iline şehirlerarası kamyonet nakliye, parça eşya taşıma ve çeyiz taşıma hizmeti. 0537 409 24 06',
  alternates: { canonical: `${SITE_CONFIG.url}/sehirlerarasi` },
}

export default function SehirlerarasiPage() {
  return (
    <>
      <div className="bg-primary-700 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-black">Adana Şehirlerarası Nakliye</h1>
          <p className="text-primary-200 mt-2">Adana&apos;dan Türkiye&apos;nin 81 iline kamyonet nakliye ve parça eşya taşıma</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="prose max-w-3xl mb-10">
          <p><strong>Adana şehirlerarası nakliye</strong> hizmeti ile Türkiye&apos;nin her iline güvenilir kamyonet nakliye, parça eşya taşıma, çeyiz taşıma ve küçük nakliye hizmeti sunuyoruz.</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {CITY_ROUTES.map(c => (
            <Link key={c.slug} href={`/sehirlerarasi/${c.slug}`} className="group bg-white rounded-xl p-4 border border-gray-100 hover:border-primary-400 hover:shadow-lg transition text-center">
              <MapPin size={20} className="mx-auto mb-2 text-primary-400 group-hover:text-primary-600 transition" />
              <span className="text-sm font-semibold text-gray-700 group-hover:text-primary-600 transition">Adana {c.city}</span>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}
