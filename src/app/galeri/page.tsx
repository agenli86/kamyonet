import { Metadata } from 'next'
import Image from 'next/image'
import { SITE_CONFIG } from '@/data/config'

export const metadata: Metadata = {
  title: 'Galeri | Adana Kamyonet Nakliye Fotoğrafları',
  description: 'Adana kamyonet nakliye, parça eşya taşıma ve nakliye hizmeti fotoğrafları. Araçlarımız ve taşıma süreçlerimiz.',
  alternates: { canonical: `${SITE_CONFIG.url}/galeri` },
}

const images = [
  { src: '/images/kamyonet1.png', alt: 'Adana kamyonet nakliye aracı' },
  { src: '/images/kamyonet2.jpg', alt: 'Adana kamyonet nakliye - şehir içi taşıma' },
  { src: '/images/nakliyeadana.jpg', alt: 'Adana nakliye hizmeti' },
  { src: '/images/nakliye.jpg', alt: 'Nakliye ve taşımacılık' },
  { src: '/images/adanaevdeneve.jpg', alt: 'Adana evden eve nakliyat' },
  { src: '/images/adanaevdenevenakliyat1.jpg', alt: 'Adana evden eve nakliyat hizmeti' },
  { src: '/images/adana-bodrum-nakliye.jpg', alt: 'Adana şehirlerarası nakliye' },
  { src: '/images/asans26.jpg', alt: 'Asansörlü taşıma hizmeti' },
  { src: '/images/slide1.png', alt: 'Adana kamyonet nakliye - profesyonel taşımacılık' },
  { src: '/images/slide3.jpg', alt: 'Kamyonet nakliye Adana' },
  { src: '/images/resim3.jpg', alt: 'Adana parça eşya taşıma' },
  { src: '/images/resim4.jpg', alt: 'Adana küçük nakliye hizmeti' },
]

export default function GalleryPage() {
  return (
    <>
      <div className="bg-primary-700 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-black">Galeri</h1>
          <p className="text-primary-200 mt-2">Adana kamyonet nakliye hizmetlerimizden fotoğraflar</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="gallery-grid">
          {images.map((img, i) => (
            <div key={i} className="gallery-item">
              <Image src={img.src} alt={img.alt} fill className="object-cover" sizes="(max-width:768px) 50vw, 25vw" />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
