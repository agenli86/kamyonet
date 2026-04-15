export interface CityRoute {
  slug: string
  city: string
  metaTitle: string
  metaDesc: string
  content: string
}

function slugify(text: string): string {
  return text
    .replace(/İ/g, 'i').replace(/I/g, 'i')
    .replace(/Ğ/g, 'g').replace(/Ü/g, 'u').replace(/Ş/g, 's')
    .replace(/Ö/g, 'o').replace(/Ç/g, 'c')
    .toLowerCase()
    .replace(/ğ/g, 'g').replace(/ü/g, 'u').replace(/ş/g, 's')
    .replace(/ı/g, 'i').replace(/ö/g, 'o').replace(/ç/g, 'c')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}

const CITY_NAMES = [
  'Adıyaman','Afyonkarahisar','Ağrı','Aksaray','Amasya','Ankara','Antalya','Ardahan','Artvin',
  'Aydın','Balıkesir','Bartın','Batman','Bayburt','Bilecik','Bingöl','Bitlis','Bolu','Burdur',
  'Bursa','Çanakkale','Çankırı','Çorum','Denizli','Diyarbakır','Düzce','Edirne','Elazığ',
  'Erzincan','Erzurum','Eskişehir','Gaziantep','Giresun','Gümüşhane','Hakkari','Hatay',
  'Iğdır','Isparta','İstanbul','İzmir','Kahramanmaraş','Karabük','Karaman','Kars','Kastamonu',
  'Kayseri','Kırıkkale','Kırklareli','Kırşehir','Kilis','Kocaeli','Konya','Kütahya','Malatya',
  'Manisa','Mardin','Mersin','Muğla','Muş','Nevşehir','Niğde','Ordu','Osmaniye','Rize',
  'Sakarya','Samsun','Siirt','Sinop','Sivas','Şanlıurfa','Şırnak','Tekirdağ','Tokat',
  'Trabzon','Tunceli','Uşak','Van','Yalova','Yozgat','Zonguldak'
]

function generateContent(city: string): string {
  return `<p><strong>Adana ${city} kamyonet nakliye</strong> hizmeti ile Adana'dan ${city}'a güvenilir, ekonomik ve sigortalı şehirlerarası taşımacılık yapıyoruz. Yılların verdiği tecrübe ve profesyonel ekibimiz ile eşyalarınızı ${city}'a sorunsuz bir şekilde ulaştırıyoruz. <strong>Adana ${city} parça eşya taşıma</strong>, çeyiz taşıma, küçük nakliye ve kamyonet kiralama hizmetlerimiz ile her türlü taşıma ihtiyacınıza çözüm sunuyoruz.</p>

<h2>Adana ${city} Kamyonet Nakliye Hizmetlerimiz</h2>
<p>Adana'dan ${city}'a taşımacılık hizmetimiz kapsamında birçok farklı seçenek sunuyoruz. İster tek parça eşya taşıma, ister komple ev taşıma, ister çeyiz taşıma olsun, her ihtiyaca uygun araç ve ekip tahsis ediyoruz. <strong>Adana ${city} nakliye</strong> hizmetimizde kullandığımız kapalı kasa kamyonetler, eşyalarınızı hava koşullarından ve yol şartlarından koruyarak güvenle taşır.</p>
<ul>
<li><strong>Adana ${city} kamyonet nakliye</strong> – Kapalı kasa kamyonet ile güvenli taşıma</li>
<li><strong>Adana ${city} parça eşya taşıma</strong> – Tek parça mobilya, beyaz eşya, elektronik</li>
<li><strong>Adana ${city} çeyiz taşıma</strong> – Çeyiz eşyaları özel paketleme ile</li>
<li><strong>Adana ${city} küçük nakliye</strong> – Az eşyalı, ekonomik taşıma çözümü</li>
<li><strong>Adana ${city} şehirlerarası nakliyat</strong> – Düzenli sefer, sigortalı taşımacılık</li>
</ul>

<h2>Adana ${city} Nakliye Nasıl Yapılır?</h2>
<p>Adana'dan ${city}'a nakliye süreci oldukça basittir. Öncelikle bizi <a href="tel:05374092406"><strong>0537 409 24 06</strong></a> numarasından arayarak taşınacak eşyalarınız hakkında bilgi verirsiniz. Eşya listesine göre size uygun araç ve fiyat teklifi sunulur. Anlaşma sağlandıktan sonra belirlenen tarihte ekibimiz adresinize gelir, eşyalarınızı profesyonel olarak paketler ve araca yükler.</p>
<p>Taşıma süresince eşyalarınız <strong>nakliye sigortası</strong> kapsamında güvence altındadır. Yol boyunca eşyalarınızın durumunu takip edebilirsiniz. ${city}'a ulaşıldığında eşyalarınız yeni adresinize teslim edilir ve montaj gerektiren eşyalar yerine kurulur.</p>

<h2>Adana ${city} Parça Eşya Taşıma</h2>
<p><strong>Adana ${city} parça eşya taşıma</strong> hizmetimiz özellikle tek parça veya az sayıda eşya taşımak isteyenler için ideal bir çözümdür. Komple ev taşımaya gerek olmadan, sadece ihtiyacınız olan eşyaları taşıyoruz. Bu hizmet kapsamında koltuk takımı, çamaşır makinesi, buzdolabı, gardırop, yatak ve benzeri eşyalarınızı Adana'dan ${city}'a güvenle taşıyoruz.</p>
<p>Parça eşya taşıma hizmetimizde her eşya ayrı ayrı balonlu naylon, streç film ve karton köşebent ile paketlenir. Kırılacak eşyalar için ek koruma malzemesi kullanılır. Detaylı bilgi için <a href="/hizmet/adana-parca-esya-tasima">Adana parça eşya taşıma</a> sayfamızı ziyaret edebilirsiniz.</p>

<h2>Adana ${city} Çeyiz Taşıma</h2>
<p>Evlenme hazırlığı yapan çiftler için <strong>Adana ${city} çeyiz taşıma</strong> hizmeti sunuyoruz. Çeyiz sandıkları, mobilyalar, beyaz eşyalar ve tüm çeyiz malzemeleri profesyonel ekibimiz tarafından özenle paketlenir ve ${city}'a güvenle ulaştırılır. Düğün tarihine göre planlama yaparak eşyalarınızın zamanında teslim edilmesini garanti ediyoruz.</p>
<p><a href="/hizmet/adana-ceyiz-tasima">Çeyiz taşıma hizmetimiz</a> hakkında detaylı bilgi alabilirsiniz.</p>

<h2>Adana ${city} Nakliye Fiyatları</h2>
<p><strong>Adana ${city} kamyonet nakliye fiyatları</strong> eşya miktarına, boyutuna ve ağırlığına göre değişmektedir. Fiyatlandırmada şeffaf bir politika izliyoruz; taşıma öncesi size net fiyat teklifi sunuyoruz, taşıma sonrası ek ücret talep etmiyoruz.</p>
<p>Adana ${city} arası nakliye fiyatlarını etkileyen başlıca faktörler şunlardır:</p>
<ul>
<li>Taşınacak eşya miktarı ve ağırlığı</li>
<li>Eşyaların cinsi (kırılacak, hassas, büyük boyutlu)</li>
<li>Yükleme ve boşaltma katı, asansör durumu</li>
<li>Paketleme hizmeti gereksinimi</li>
<li>Montaj ve demontaj gerekliliği</li>
<li>Taşıma tarihi (hafta içi veya hafta sonu)</li>
</ul>
<p>Fiyat bilgisi ve nakliye sürecindeki ipuçları için <a href="/blog/adana-kamyonet-nakliye-fiyatlari">Adana kamyonet nakliye fiyatları</a> yazımızı okuyabilirsiniz.</p>

<h2>Neden Bizi Tercih Etmelisiniz?</h2>
<p>Adana'dan ${city}'a nakliye hizmeti veren birçok firma bulunmaktadır. Ancak <a href="/">Adana Kamyonet Nakliye</a> olarak fark yaratan avantajlarımız var:</p>
<ul>
<li><strong>15+ yıllık tecrübe:</strong> Adana nakliye sektöründe uzun yıllardır hizmet veriyoruz</li>
<li><strong>Sigortalı taşımacılık:</strong> Tüm eşyalarınız taşıma sigortası kapsamındadır</li>
<li><strong>Profesyonel paketleme:</strong> Balonlu naylon, streç film, karton koli ile özenli paketleme</li>
<li><strong>Uygun fiyat:</strong> Piyasanın en uygun fiyatları, gizli maliyet yok</li>
<li><strong>Zamanında teslimat:</strong> Söz verilen tarihte eşyalarınız ${city}'da</li>
<li><strong>7/24 destek:</strong> Taşıma sürecinde her an bize ulaşabilirsiniz</li>
</ul>
<p>Nakliye firması seçerken nelere dikkat etmeniz gerektiğini <a href="/blog/adana-nakliye-sektorunde-dikkat-edilmesi-gerekenler">bu yazımızda</a> detaylı olarak anlattık.</p>

<h2>Adana ${city} Nakliye İçin Hemen Arayın</h2>
<p>Adana'dan ${city}'a <a href="/hizmet/adana-kamyonet-nakliye">kamyonet nakliye</a>, <a href="/hizmet/adana-parca-esya-tasima">parça eşya taşıma</a>, <a href="/hizmet/adana-ceyiz-tasima">çeyiz taşıma</a> veya <a href="/hizmet/adana-kucuk-nakliye">küçük nakliye</a> hizmeti almak için hemen bizi arayın. Ücretsiz fiyat teklifi sunuyoruz.</p>
<p>Diğer <a href="/sehirlerarasi">şehirlerarası nakliye</a> rotalarımızı da inceleyebilirsiniz. <a href="/sss">Sıkça sorulan sorular</a> sayfamızdan merak ettiklerinize yanıt bulabilirsiniz.</p>
<p><strong>Telefon:</strong> <a href="tel:05374092406">0537 409 24 06</a> | <strong>WhatsApp:</strong> <a href="https://wa.me/905374092406">0537 409 24 06</a></p>`
}

export const CITY_ROUTES: CityRoute[] = CITY_NAMES.map(city => {
  const slug = `adana-${slugify(city)}`
  return {
    slug,
    city,
    metaTitle: `Adana ${city} Kamyonet Nakliye | Adana ${city} Parça Eşya Taşıma`,
    metaDesc: `Adana ${city} kamyonet nakliye ve parça eşya taşıma hizmeti. Adana'dan ${city}'a şehirlerarası nakliye, çeyiz taşıma, küçük nakliye. Hemen arayın: 0537 409 24 06`,
    content: generateContent(city),
  }
})

export function getCityRouteBySlug(slug: string): CityRoute | undefined {
  return CITY_ROUTES.find(c => c.slug === slug)
}
