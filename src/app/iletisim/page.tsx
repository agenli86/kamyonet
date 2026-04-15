import { Metadata } from 'next'
import { SITE_CONFIG } from '@/data/config'
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'İletişim | Adana Kamyonet Nakliye',
  description: `Adana kamyonet nakliye iletişim bilgileri. Adres: ${SITE_CONFIG.address}. Telefon: ${SITE_CONFIG.phone}. 7/24 hizmet.`,
  alternates: { canonical: `${SITE_CONFIG.url}/iletisim` },
}

export default function ContactPage() {
  return (
    <>
      <div className="bg-primary-700 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-black">İletişim</h1>
          <p className="text-primary-200 mt-2">Bize ulaşmanın en kolay yolu bir telefon kadar yakın</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
              <h2 className="text-2xl font-bold text-primary-800 mb-6">İletişim Bilgileri</h2>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center shrink-0">
                    <Phone size={22} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Telefon</p>
                    <a href={`tel:${SITE_CONFIG.phoneRaw}`} className="text-primary-600 text-lg font-bold hover:text-primary-800">{SITE_CONFIG.phone}</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-green-50 text-green-600 flex items-center justify-center shrink-0">
                    <MessageCircle size={22} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">WhatsApp</p>
                    <a href={`https://wa.me/${SITE_CONFIG.whatsapp}`} target="_blank" rel="noopener noreferrer" className="text-green-600 font-bold hover:text-green-800">{SITE_CONFIG.phone}</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent-50 text-accent-700 flex items-center justify-center shrink-0">
                    <Mail size={22} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">E-posta</p>
                    <p className="text-gray-600">{SITE_CONFIG.email}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-red-50 text-red-500 flex items-center justify-center shrink-0">
                    <MapPin size={22} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Adres</p>
                    <p className="text-gray-600">{SITE_CONFIG.fullAddress}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-500 flex items-center justify-center shrink-0">
                    <Clock size={22} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Çalışma Saatleri</p>
                    <p className="text-gray-600">{SITE_CONFIG.workingHours}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Big CTA */}
            <a href={`tel:${SITE_CONFIG.phoneRaw}`} className="block bg-accent-500 hover:bg-accent-600 text-primary-900 rounded-2xl p-8 text-center transition shadow-xl">
              <p className="text-lg font-bold mb-1">Hemen Arayın</p>
              <p className="text-3xl font-black">{SITE_CONFIG.phone}</p>
            </a>
          </div>

          {/* Map */}
          <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm h-[500px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d204564.5!2d35.2!3d37.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15288f1e1e28f60b%3A0x56c9afdd9e8ec21b!2sAdana%2C%20T%C3%BCrkiye!5e0!3m2!1str!2str"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Adana Kamyonet Nakliye Konum"
            />
          </div>
        </div>
      </div>
    </>
  )
}
