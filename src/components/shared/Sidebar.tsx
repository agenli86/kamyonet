import Link from 'next/link'
import { SERVICES } from '@/data/services'
import { DISTRICTS } from '@/data/districts'
import { SITE_CONFIG } from '@/data/config'
import { Phone, MessageCircle } from 'lucide-react'

export default function Sidebar() {
  return (
    <aside className="space-y-6">
      {/* CTA Box */}
      <div className="bg-primary-600 text-white rounded-2xl p-6">
        <h3 className="text-lg font-bold mb-2">Ücretsiz Teklif Alın</h3>
        <p className="text-sm text-primary-200 mb-4">Hemen arayın, fiyat teklifi sunalım.</p>
        <a href={`tel:${SITE_CONFIG.phoneRaw}`} className="flex items-center justify-center gap-2 bg-accent-500 text-primary-900 font-bold py-3 rounded-full mb-3 hover:bg-accent-600 transition">
          <Phone size={18} /> {SITE_CONFIG.phone}
        </a>
        <a href={`https://wa.me/${SITE_CONFIG.whatsapp}`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-green-500 text-white font-bold py-3 rounded-full hover:bg-green-600 transition">
          <MessageCircle size={18} /> WhatsApp
        </a>
      </div>

      {/* Services */}
      <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
        <h3 className="text-lg font-bold text-primary-800 mb-4">Hizmetlerimiz</h3>
        <ul className="space-y-2">
          {SERVICES.map(s => (
            <li key={s.slug}>
              <Link href={`/hizmet/${s.slug}`} className="block text-sm text-gray-600 hover:text-primary-600 hover:pl-2 transition-all py-1 border-b border-gray-50">
                {s.shortTitle}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Districts */}
      <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
        <h3 className="text-lg font-bold text-primary-800 mb-4">İlçeler</h3>
        <ul className="space-y-2">
          {DISTRICTS.slice(0, 8).map(d => (
            <li key={d.slug}>
              <Link href={`/ilce/${d.slug}`} className="block text-sm text-gray-600 hover:text-primary-600 hover:pl-2 transition-all py-1 border-b border-gray-50">
                {d.name} Nakliye
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  )
}
