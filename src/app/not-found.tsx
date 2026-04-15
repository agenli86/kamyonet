import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center px-4">
        <h1 className="text-8xl font-black text-primary-200 mb-4">404</h1>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Sayfa Bulunamadı</h2>
        <p className="text-gray-500 mb-8">Aradığınız sayfa mevcut değil veya taşınmış olabilir.</p>
        <Link href="/" className="bg-primary-600 hover:bg-primary-700 text-white font-bold px-8 py-3 rounded-full transition">
          Ana Sayfaya Dön
        </Link>
      </div>
    </div>
  )
}
