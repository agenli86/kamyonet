import type { Metadata } from 'next'
import { SITE_CONFIG } from '@/data/config'
import { getLocalBusinessSchema } from '@/lib/seo'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import StickyButtons from '@/components/layout/StickyButtons'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: `${SITE_CONFIG.name} | Parça Eşya Taşıma, Küçük Nakliye - ${SITE_CONFIG.phone}`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  keywords: 'adana kamyonet nakliye, adana parça eşya taşıma, adana küçük nakliye, adana nakliye, kamyonet nakliye, pikap nakliye, evden eve nakliyat, şehirlerarası nakliye, çeyiz taşıma',
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    siteName: SITE_CONFIG.name,
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    images: [{ url: '/images/kamyonet1.png', width: 1200, height: 630, alt: 'Adana Kamyonet Nakliye' }],
  },
  twitter: { card: 'summary_large_image', title: SITE_CONFIG.name, description: SITE_CONFIG.description },
  alternates: { canonical: SITE_CONFIG.url },
  robots: { index: true, follow: true },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/icon-32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
  },
  manifest: '/site.webmanifest',
  verification: {
    // google: 'GOOGLE_VERIFICATION_CODE',
    // yandex: 'YANDEX_VERIFICATION_CODE',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <head>
        <meta name="theme-color" content="#0D47A1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(getLocalBusinessSchema()) }}
        />
      </head>
      <body className="font-body text-gray-800 bg-white">
        <Header />
        <main>{children}</main>
        <Footer />
        <StickyButtons />
      </body>
    </html>
  )
}
