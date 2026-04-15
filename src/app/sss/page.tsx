import { Metadata } from 'next'
import { SITE_CONFIG } from '@/data/config'
import { getFAQSchema } from '@/lib/seo'
import { FaqSection } from '@/components/home/Sections'

export const metadata: Metadata = {
  title: 'Sıkça Sorulan Sorular | Adana Kamyonet Nakliye SSS',
  description: 'Adana kamyonet nakliye hakkında sıkça sorulan sorular ve cevapları. Fiyatlar, hizmetler, sigorta ve daha fazlası.',
  alternates: { canonical: `${SITE_CONFIG.url}/sss` },
}

export default function SSSPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getFAQSchema()) }} />
      <div className="bg-primary-700 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-black">Sıkça Sorulan Sorular</h1>
          <p className="text-primary-200 mt-2">Adana kamyonet nakliye hakkında merak ettiğiniz her şey</p>
        </div>
      </div>
      <FaqSection />
    </>
  )
}
