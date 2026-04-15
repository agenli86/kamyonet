import Link from 'next/link'
import { SITE_CONFIG } from '@/data/config'
import { SERVICES } from '@/data/services'
import { DISTRICTS } from '@/data/districts'

export default function Footer() {
  return (
    <footer className="bg-primary-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-black mb-4">
              <span className="text-accent-400">ADANA</span> KAMYONET NAKLİYE
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">{SITE_CONFIG.description}</p>
            <div className="space-y-2 text-sm text-gray-300">
              <p>📍 {SITE_CONFIG.fullAddress}</p>
              <p>📞 <a href={`tel:${SITE_CONFIG.phoneRaw}`} className="text-accent-400 hover:text-accent-300">{SITE_CONFIG.phone}</a></p>
              <p>✉️ {SITE_CONFIG.email}</p>
              <p>⏰ {SITE_CONFIG.workingHours}</p>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-accent-400">Hizmetlerimiz</h4>
            <ul className="space-y-2">
              {SERVICES.map(s => (
                <li key={s.slug}>
                  <Link href={`/hizmet/${s.slug}`} className="text-sm text-gray-400 hover:text-white transition">
                    {s.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* District Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-accent-400">İlçe Nakliye</h4>
            <ul className="space-y-2">
              {DISTRICTS.slice(0, 10).map(d => (
                <li key={d.slug}>
                  <Link href={`/ilce/${d.slug}`} className="text-sm text-gray-400 hover:text-white transition">
                    {d.name} Nakliye
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links + Popular Routes */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-accent-400">Hızlı Bağlantılar</h4>
            <ul className="space-y-2">
              <li><Link href="/blog" className="text-sm text-gray-400 hover:text-white transition">Blog</Link></li>
              <li><Link href="/galeri" className="text-sm text-gray-400 hover:text-white transition">Galeri</Link></li>
              <li><Link href="/sss" className="text-sm text-gray-400 hover:text-white transition">Sıkça Sorulan Sorular</Link></li>
              <li><Link href="/iletisim" className="text-sm text-gray-400 hover:text-white transition">İletişim</Link></li>
            </ul>

            <h4 className="text-lg font-bold mt-6 mb-3 text-accent-400">Popüler Rotalar</h4>
            <ul className="space-y-2">
              {['istanbul','ankara','izmir','mersin','gaziantep','antalya'].map(city => (
                <li key={city}>
                  <Link href={`/sehirlerarasi/adana-${city}`} className="text-sm text-gray-400 hover:text-white transition capitalize">
                    Adana {city.charAt(0).toUpperCase() + city.slice(1)} Nakliye
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-800">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500">
          <p>© {new Date().getFullYear()} {SITE_CONFIG.name} - Tüm hakları saklıdır.</p>
          <div className="flex gap-4 mt-2 md:mt-0">
            <Link href="/gizlilik-politikasi" className="hover:text-gray-300 transition">Gizlilik Politikası</Link>
            <Link href="/kullanim-kosullari" className="hover:text-gray-300 transition">Kullanım Koşulları</Link>
            <Link href="/sitemap.xml" className="hover:text-gray-300 transition">Site Haritası</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
