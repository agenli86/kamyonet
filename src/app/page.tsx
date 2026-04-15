import { Metadata } from 'next'
import { SITE_CONFIG } from '@/data/config'
import { getFAQSchema } from '@/lib/seo'
import HeroSlider from '@/components/home/HeroSlider'
import TabArticles from '@/components/home/TabArticles'
import { ServicesGrid, ReviewsSection, FaqSection, BlogSection, DistrictsGrid, CtaSection } from '@/components/home/Sections'

export const metadata: Metadata = {
  title: `Adana Kamyonet Nakliye | Parça Eşya Taşıma, Küçük Nakliye - ${SITE_CONFIG.phone}`,
  description: 'Adana kamyonet nakliye, parça eşya taşıma, küçük nakliye, evden eve nakliyat. Adana nakliye hizmeti için hemen arayın: 0537 409 24 06. Sigortalı taşımacılık.',
  alternates: { canonical: SITE_CONFIG.url },
}

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getFAQSchema()) }} />

      <HeroSlider />

      {/* Ana makale - SEO ağırlıklı, uzun içerik */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-black text-primary-800 mb-6 text-center">
            Adana Nakliye - Adana Nakliyeci
          </h2>
          <div className="prose max-w-none">
            <p>
              <strong>Adana kamyonet nakliye</strong> hizmeti ile Adana genelinde ve Türkiye&apos;nin 81 iline güvenilir taşımacılık yapıyoruz.
              <strong> Adana nakliye</strong> sektöründe 15 yılı aşkın tecrübemiz ile <a href="/hizmet/adana-parca-esya-tasima">parça eşya taşıma</a>,
              <a href="/hizmet/adana-kucuk-nakliye"> küçük nakliye</a>, <a href="/hizmet/adana-evden-eve-nakliyat">evden eve nakliyat</a> ve
              <a href="/hizmet/sehirlerarasi-nakliyat"> şehirlerarası nakliye</a> hizmetleri sunuyoruz.
            </p>
            <p>
              <strong>Adana nakliyeci</strong> olarak müşteri memnuniyetini ön planda tutuyoruz. Profesyonel ekibimiz, sigortalı taşımacılık anlayışımız
              ve uygun fiyat politikamız ile Adana&apos;nın en güvenilir kamyonet nakliye firmasıyız. Küçük nakliye aracı kamyonet ile
              dar sokaklara bile ulaşarak hızlı ve zarar görmeden taşımacılık yapıyoruz.
            </p>
            <p>
              Adana&apos;nın tüm ilçelerinde hizmet veriyoruz: <a href="/ilce/seyhan">Seyhan</a>, <a href="/ilce/cukurova">Çukurova</a>,
              <a href="/ilce/yuregir"> Yüreğir</a>, <a href="/ilce/saricam">Sarıçam</a>, <a href="/ilce/kozan">Kozan</a>,
              <a href="/ilce/ceyhan"> Ceyhan</a> ve diğer tüm ilçelere kamyonet nakliye, pikap nakliye ve parça eşya taşıma hizmeti sunuyoruz.
            </p>
            <p>
              Şehirlerarası nakliye hizmetimiz ile Adana&apos;dan <a href="/sehirlerarasi/adana-istanbul">İstanbul</a>&apos;a,
              <a href="/sehirlerarasi/adana-ankara"> Ankara</a>&apos;ya, <a href="/sehirlerarasi/adana-izmir">İzmir</a>&apos;e ve
              Türkiye&apos;nin her iline kamyonet nakliye yapıyoruz. <a href="/hizmet/adana-ceyiz-tasima">Çeyiz taşıma</a>,
              <a href="/hizmet/adana-asansorlu-tasima"> asansörlü taşıma</a> ve profesyonel paketleme hizmetlerimiz de mevcuttur.
            </p>
            <p>
              Adana kamyonet nakliye fiyatları hakkında bilgi almak, ücretsiz keşif talep etmek veya hemen taşınma planlamak için
              bizi arayabilirsiniz: <a href={`tel:${SITE_CONFIG.phoneRaw}`}><strong>{SITE_CONFIG.phone}</strong></a>.
              <a href="/blog/adana-kamyonet-nakliye-fiyatlari"> Güncel fiyat bilgileri</a> için blog yazımızı da inceleyebilirsiniz.
            </p>
          </div>
        </div>
      </section>

      <TabArticles />
      <ServicesGrid />
      <DistrictsGrid />
      <ReviewsSection />
      <FaqSection />
      <BlogSection />
      <CtaSection />
    </>
  )
}
