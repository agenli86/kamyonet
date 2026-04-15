'use client'
import { SITE_CONFIG } from '@/data/config'
import { Phone, MessageCircle } from 'lucide-react'

export default function StickyButtons() {
  return (
    <div className="sticky-buttons">
      <a
        href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=Merhaba,%20nakliye%20hizmeti%20hakkında%20bilgi%20almak%20istiyorum.`}
        target="_blank"
        rel="noopener noreferrer"
        className="sticky-btn bg-green-500 hover:bg-green-600 text-white"
        aria-label="WhatsApp ile iletişim"
      >
        <MessageCircle size={26} />
      </a>
      <a
        href={`tel:${SITE_CONFIG.phoneRaw}`}
        className="sticky-btn bg-accent-500 hover:bg-accent-600 text-primary-900"
        aria-label="Telefon ile arayın"
      >
        <Phone size={26} />
      </a>
    </div>
  )
}
