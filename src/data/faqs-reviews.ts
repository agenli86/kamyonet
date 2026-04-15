// ═══ FAQ DATA ═══
export interface FAQ {
  question: string
  answer: string
}

export const FAQS: FAQ[] = [
  { question: 'Adana kamyonet nakliye fiyatları ne kadar?', answer: 'Adana kamyonet nakliye fiyatları eşya miktarı, mesafe ve kat sayısına göre değişmektedir. Şehir içi taşımalarda fiyatlar 500 TL\'den başlamaktadır. Güncel fiyat bilgisi için bizi arayabilirsiniz: 0537 409 24 06' },
  { question: 'Parça eşya taşıma yapıyor musunuz?', answer: 'Evet, tek parça mobilya, beyaz eşya, koltuk, yatak gibi eşyalarınızı parça olarak taşıyoruz. Her eşya özel olarak paketlenerek sigortalı şekilde taşınır.' },
  { question: 'Şehirlerarası nakliye yapıyor musunuz?', answer: 'Evet, Adana\'dan Türkiye\'nin 81 iline şehirlerarası kamyonet nakliye ve parça eşya taşıma hizmeti sunuyoruz.' },
  { question: 'Asansörlü taşıma hizmetiniz var mı?', answer: 'Evet, yüksek katlı binalarda mobil asansör (dış cephe asansörü) ile eşya taşıma hizmeti sunuyoruz. 10. kata kadar taşıma yapabiliyoruz.' },
  { question: 'Taşıma sigortası var mı?', answer: 'Evet, tüm taşımalarımız sigorta kapsamındadır. Olası hasar durumunda eşyalarınızın bedeli karşılanır.' },
  { question: 'Hafta sonu çalışıyor musunuz?', answer: 'Evet, haftanın 7 günü 07:00-22:00 saatleri arasında hizmet veriyoruz. Acil durumlarda gece taşıma da yapıyoruz.' },
  { question: 'Paketleme hizmeti veriyor musunuz?', answer: 'Evet, profesyonel paketleme hizmeti sunuyoruz. Balonlu naylon, streç film, karton koli ve koruyucu malzemelerle eşyalarınız özenle paketlenir.' },
  { question: 'Çeyiz taşıma yapıyor musunuz?', answer: 'Evet, çeyiz taşıma hizmetimiz mevcuttur. Çeyiz eşyalarınız özenle paketlenir ve sigortalı olarak taşınır. Şehir içi ve şehirlerarası çeyiz taşıma yapıyoruz.' },
  { question: 'Ücretsiz keşif yapıyor musunuz?', answer: 'Evet, Adana merkez ilçelerinde ücretsiz keşif hizmeti sunuyoruz. Keşif sonrası detaylı fiyat teklifi verilir.' },
  { question: 'Eşyalarımın montaj ve demontajını yapıyor musunuz?', answer: 'Evet, mobilya montaj ve demontaj hizmetimiz mevcuttur. Deneyimli ekibimiz eşyalarınızı söker, taşır ve yeni adresinde tekrar kurar.' },
]

// ═══ REVIEWS DATA (Rich Snippet) ═══
export interface Review {
  name: string
  rating: number
  comment: string
  date: string
  location: string
}

export const REVIEWS: Review[] = [
  { name: 'Mehmet Y.', rating: 5, comment: 'Çukurova\'dan Seyhan\'a taşındım, kamyonet nakliye hizmeti mükemmeldi. Eşyalarım hiç zarar görmeden taşındı. Teşekkürler!', date: '2026-03-10', location: 'Çukurova, Adana' },
  { name: 'Ayşe K.', rating: 5, comment: 'Parça eşya taşıma için aradım, aynı gün geldiler. Fiyatı da gayet uygundu. Kesinlikle tavsiye ederim.', date: '2026-02-28', location: 'Sarıçam, Adana' },
  { name: 'Ali D.', rating: 5, comment: 'Adana\'dan Ankara\'ya çeyiz taşıma yaptırdık. Her şey sapasağlam teslim edildi. Profesyonel bir ekip.', date: '2026-02-15', location: 'Yüreğir, Adana' },
  { name: 'Fatma S.', rating: 5, comment: 'Küçük nakliye için aradım, 1 saat içinde geldiler. Hızlı ve özverili çalıştılar. Fiyat da çok makuldü.', date: '2026-01-20', location: 'Seyhan, Adana' },
  { name: 'Hasan B.', rating: 4, comment: 'Asansörlü taşıma hizmeti aldım, 7. kattan eşyalarımı indirdiler. Güvenilir bir firma.', date: '2026-01-05', location: 'Çukurova, Adana' },
  { name: 'Zeynep A.', rating: 5, comment: 'Ofis taşıma yaptırdık, bilgisayarlar ve dosyalar güvenle taşındı. İş günü kaybımız olmadı.', date: '2025-12-18', location: 'Seyhan, Adana' },
  { name: 'Emre T.', rating: 5, comment: 'Adana\'dan Mersin\'e kamyonet nakliye yaptırdım. Zamanında teslim ettiler, fiyat uygundu.', date: '2025-12-01', location: 'Kozan, Adana' },
  { name: 'Derya M.', rating: 5, comment: 'Pikap nakliye ile tek parça buzdolabı taşıttım. Çok dikkatli ve özenli çalıştılar.', date: '2025-11-15', location: 'Ceyhan, Adana' },
]
