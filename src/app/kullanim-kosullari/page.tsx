import { Metadata } from 'next'
import { SITE_CONFIG } from '@/data/config'

export const metadata: Metadata = {
  title: 'Kullanım Koşulları',
  description: `${SITE_CONFIG.name} web sitesi kullanım koşulları ve şartları.`,
  alternates: { canonical: `${SITE_CONFIG.url}/kullanim-kosullari` },
}

export default function TermsPage() {
  return (
    <>
      <div className="bg-primary-700 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-black">Kullanım Koşulları</h1>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 py-12">
        <article className="prose max-w-none">
          <p>Son güncelleme: Nisan 2026</p>
          <h2>1. Genel</h2>
          <p>{SITE_CONFIG.name} web sitesini ({SITE_CONFIG.domain}) kullanarak aşağıdaki koşulları kabul etmiş sayılırsınız.</p>
          <h2>2. Hizmet Kapsamı</h2>
          <p>Web sitemiz, nakliye hizmetlerimiz hakkında bilgi vermek amacıyla hazırlanmıştır. Sitedeki fiyat bilgileri tahmini olup, kesin fiyat telefon ile yapılacak görüşme sonrası belirlenir.</p>
          <h2>3. Fikri Mülkiyet</h2>
          <p>Web sitesindeki tüm içerikler (yazılar, görseller, logolar, tasarım) {SITE_CONFIG.name}&apos;ye aittir. İzinsiz kopyalanamaz, çoğaltılamaz.</p>
          <h2>4. Sorumluluk Sınırı</h2>
          <p>Web sitesindeki bilgilerin doğruluğu konusunda azami özen gösterilmekle birlikte, olası hatalardan dolayı sorumluluk kabul edilmez. Güncel bilgi için lütfen bizi arayın.</p>
          <h2>5. Bağlantılar</h2>
          <p>Web sitemizde üçüncü taraf sitelere bağlantılar bulunabilir. Bu sitelerin içeriklerinden sorumlu değiliz.</p>
          <h2>6. Değişiklikler</h2>
          <p>Kullanım koşullarını önceden haber vermeksizin değiştirme hakkımız saklıdır.</p>
          <h2>7. İletişim</h2>
          <p><strong>Telefon:</strong> {SITE_CONFIG.phone}<br />
          <strong>E-posta:</strong> {SITE_CONFIG.email}<br />
          <strong>Adres:</strong> {SITE_CONFIG.fullAddress}</p>
        </article>
      </div>
    </>
  )
}
