'use client'
import { useState } from 'react'
import Link from 'next/link'
import { SITE_CONFIG } from '@/data/config'
import { SERVICES } from '@/data/services'
import { Phone, Menu, X, ChevronDown } from 'lucide-react'

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [dropdowns, setDropdowns] = useState<Record<string, boolean>>({})

  const toggleDropdown = (key: string) => {
    setDropdowns(prev => ({ ...prev, [key]: !prev[key] }))
  }

  return (
    <header className="bg-primary-600 text-white sticky top-0 z-50 shadow-lg">
      {/* Top Bar */}
      <div className="bg-primary-800 py-1.5">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between text-xs">
          <span className="hidden md:block">📍 {SITE_CONFIG.address} | ⏰ {SITE_CONFIG.workingHours}</span>
          <a href={`tel:${SITE_CONFIG.phoneRaw}`} className="flex items-center gap-1.5 font-bold text-accent-400 hover:text-accent-300 transition">
            <Phone size={13} /> {SITE_CONFIG.phone}
          </a>
        </div>
      </div>

      {/* Main Nav */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-heading">
            <span className="text-xl font-black tracking-tight">
              <span className="text-accent-400">ADANA</span> KAMYONET NAKLİYE
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            <Link href="/" className="px-3 py-2 text-sm font-semibold hover:bg-primary-500 rounded-lg transition">Ana Sayfa</Link>

            {/* Hizmetler Dropdown */}
            <div className="relative group">
              <button className="px-3 py-2 text-sm font-semibold hover:bg-primary-500 rounded-lg transition flex items-center gap-1">
                Hizmetler <ChevronDown size={14} />
              </button>
              <div className="absolute top-full left-0 bg-white text-gray-800 rounded-xl shadow-2xl py-2 min-w-[240px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-2 group-hover:translate-y-0">
                {SERVICES.map(s => (
                  <Link key={s.slug} href={`/hizmet/${s.slug}`} className="block px-4 py-2.5 text-sm hover:bg-primary-50 hover:text-primary-700 transition">
                    {s.shortTitle}
                  </Link>
                ))}
              </div>
            </div>

            {/* İlçeler Dropdown */}
            <div className="relative group">
              <button className="px-3 py-2 text-sm font-semibold hover:bg-primary-500 rounded-lg transition flex items-center gap-1">
                İlçeler <ChevronDown size={14} />
              </button>
              <div className="absolute top-full left-0 bg-white text-gray-800 rounded-xl shadow-2xl py-2 min-w-[220px] max-h-80 overflow-y-auto opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                {['seyhan','cukurova','yuregir','saricam','kozan','ceyhan','imamoglu','karaisali','tufanbeyli','aladag','feke','saimbeyli','yumurtalik','karatas','pozanti'].map(slug => (
                  <Link key={slug} href={`/ilce/${slug}`} className="block px-4 py-2 text-sm hover:bg-primary-50 hover:text-primary-700 transition capitalize">
                    {slug.replace(/-/g,' ')} Nakliye
                  </Link>
                ))}
              </div>
            </div>

            <Link href="/sehirlerarasi" className="px-3 py-2 text-sm font-semibold hover:bg-primary-500 rounded-lg transition">Şehirlerarası</Link>
            <Link href="/blog" className="px-3 py-2 text-sm font-semibold hover:bg-primary-500 rounded-lg transition">Blog</Link>
            <Link href="/galeri" className="px-3 py-2 text-sm font-semibold hover:bg-primary-500 rounded-lg transition">Galeri</Link>
            <Link href="/iletisim" className="px-3 py-2 text-sm font-semibold hover:bg-primary-500 rounded-lg transition">İletişim</Link>
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a href={`tel:${SITE_CONFIG.phoneRaw}`} className="hidden sm:flex items-center gap-2 bg-accent-500 hover:bg-accent-600 text-primary-900 font-bold px-5 py-2.5 rounded-full text-sm transition shadow-lg">
              <Phone size={16} /> Hemen Ara
            </a>
            <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden p-2">
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-primary-700 border-t border-primary-500">
          <nav className="max-w-7xl mx-auto px-4 py-4 space-y-1">
            <Link href="/" onClick={() => setMobileOpen(false)} className="block px-4 py-3 rounded-lg hover:bg-primary-600 font-semibold">Ana Sayfa</Link>

            <button onClick={() => toggleDropdown('hizmetler')} className="w-full flex items-center justify-between px-4 py-3 rounded-lg hover:bg-primary-600 font-semibold">
              Hizmetler <ChevronDown size={16} className={`transition ${dropdowns.hizmetler ? 'rotate-180' : ''}`} />
            </button>
            {dropdowns.hizmetler && (
              <div className="pl-6 space-y-1">
                {SERVICES.map(s => (
                  <Link key={s.slug} href={`/hizmet/${s.slug}`} onClick={() => setMobileOpen(false)} className="block px-4 py-2 text-sm rounded-lg hover:bg-primary-600">
                    {s.shortTitle}
                  </Link>
                ))}
              </div>
            )}

            <Link href="/blog" onClick={() => setMobileOpen(false)} className="block px-4 py-3 rounded-lg hover:bg-primary-600 font-semibold">Blog</Link>
            <Link href="/galeri" onClick={() => setMobileOpen(false)} className="block px-4 py-3 rounded-lg hover:bg-primary-600 font-semibold">Galeri</Link>
            <Link href="/iletisim" onClick={() => setMobileOpen(false)} className="block px-4 py-3 rounded-lg hover:bg-primary-600 font-semibold">İletişim</Link>

            <a href={`tel:${SITE_CONFIG.phoneRaw}`} className="block bg-accent-500 text-primary-900 font-bold text-center py-3 rounded-xl mt-4">
              📞 {SITE_CONFIG.phone}
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
