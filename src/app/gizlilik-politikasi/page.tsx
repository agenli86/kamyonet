import { Metadata } from 'next'
import { SITE_CONFIG } from '@/data/config'

export const metadata: Metadata = {
  title: 'Gizlilik Politikası',
  description: `${SITE_CONFIG.name} gizlilik politikası. Kişisel verilerinizin korunması hakkında bilgilendirme.`,
  alternates: { canonical: `${SITE_CONFIG.url}/gizlilik-politikasi` },
  robots: { index: true, follow: true },
}

export default function PrivacyPage() {
  return (
    <>
      <div className="bg-primary-700 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-black">Gizlilik Politikası</h1>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 py-12">
        <article className="prose max-w-none">
          <p>Son güncelleme: Nisan 2026</p>
          <h2>1. Toplanan Bilgiler</h2>
          <p>{SITE_CONFIG.name} olarak web sitemizi ziyaret ettiğinizde bazı bilgileriniz otomatik olarak toplanabilir. Bu bilgiler; IP adresi, tarayıcı türü, ziyaret edilen sayfalar ve ziyaret süresi gibi teknik verilerdir.</p>
          <h2>2. İletişim Formları</h2>
          <p>Web sitemizdeki iletişim formları aracılığıyla gönderdiğiniz ad, telefon numarası ve e-posta adresi gibi bilgiler yalnızca sizinle iletişim kurmak amacıyla kullanılır.</p>
          <h2>3. Çerezler (Cookies)</h2>
          <p>Web sitemiz, kullanıcı deneyimini iyileştirmek amacıyla çerezler kullanabilir. Çerezler, tarayıcınız tarafından cihazınıza yerleştirilen küçük metin dosyalarıdır. Tarayıcı ayarlarınızdan çerezleri devre dışı bırakabilirsiniz.</p>
          <h2>4. Google Analytics</h2>
          <p>Web sitemizde ziyaretçi istatistiklerini takip etmek amacıyla Google Analytics kullanılabilir. Google Analytics, anonim veriler toplar ve kişisel bilgilerinizi tanımlamak için kullanılmaz.</p>
          <h2>5. Üçüncü Taraf Paylaşımı</h2>
          <p>Kişisel bilgileriniz yasal zorunluluklar dışında üçüncü taraflarla paylaşılmaz, satılmaz veya kiralanmaz.</p>
          <h2>6. Veri Güvenliği</h2>
          <p>Kişisel verilerinizin güvenliği için gerekli teknik ve idari tedbirler alınmaktadır. SSL sertifikası ile şifrelenmiş bağlantı kullanılmaktadır.</p>
          <h2>7. Haklarınız</h2>
          <p>6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) kapsamında kişisel verileriniz hakkında bilgi alma, düzeltme, silme ve itiraz etme haklarına sahipsiniz.</p>
          <h2>8. İletişim</h2>
          <p>Gizlilik politikamız hakkında sorularınız için bizimle iletişime geçebilirsiniz:</p>
          <p><strong>Telefon:</strong> {SITE_CONFIG.phone}<br />
          <strong>E-posta:</strong> {SITE_CONFIG.email}<br />
          <strong>Adres:</strong> {SITE_CONFIG.fullAddress}</p>
        </article>
      </div>
    </>
  )
}
