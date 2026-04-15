export interface District {
  slug: string
  name: string
  title: string
  metaTitle: string
  metaDesc: string
  content: string
  image: string
  services: string[]
}

function generateDistrictContent(name: string, slug: string, extra: string): string {
  return `<p><strong>${name} kamyonet nakliye</strong> hizmeti ile Adana ${name} ilçesinde güvenilir ve ekonomik taşımacılık yapıyoruz. ${extra}</p>

<h2>${name} Kamyonet Nakliye Hizmetlerimiz</h2>
<p>${name} ilçesinde sunduğumuz <a href="/hizmet/adana-kamyonet-nakliye">kamyonet nakliye</a> hizmetleri kapsamında her türlü eşyanızı güvenle taşıyoruz. Kapalı kasa kamyonetlerimiz ile mobilya, beyaz eşya, elektronik ve kişisel eşyalarınız hava koşullarından korunarak taşınır.</p>
<ul>
<li><strong>${name} kamyonet nakliye</strong> – Kapalı kasa kamyonet ile güvenli taşıma</li>
<li><strong>${name} <a href="/hizmet/adana-parca-esya-tasima">parça eşya taşıma</a></strong> – Tek parça mobilya, beyaz eşya</li>
<li><strong>${name} <a href="/hizmet/adana-kucuk-nakliye">küçük nakliye</a></strong> – Ekonomik küçük çaplı taşıma</li>
<li><strong>${name} <a href="/hizmet/adana-evden-eve-nakliyat">evden eve nakliyat</a></strong> – Komple ev taşıma</li>
<li><strong>${name} <a href="/hizmet/adana-pikap-nakliye">pikap nakliye</a></strong> – Hızlı tek parça taşıma</li>
<li><strong>${name} <a href="/hizmet/adana-asansorlu-tasima">asansörlü taşıma</a></strong> – Yüksek katlı binalarda</li>
</ul>

<h2>${name} Parça Eşya Taşıma</h2>
<p>${name} ilçesinde <strong>parça eşya taşıma</strong> hizmeti ile tek parça mobilya, beyaz eşya, koltuk, yatak ve gardırop gibi eşyalarınızı taşıyoruz. Her eşya ayrı ayrı paketlenerek sigortalı şekilde taşınır. Kırılacak eşyalar için özel koruma malzemeleri kullanılır.</p>
<p>Paketleme ve koruma yöntemlerimiz hakkında detaylı bilgi için <a href="/blog/tasima-sirasinda-esya-koruma">eşya koruma rehberimizi</a> okuyabilirsiniz.</p>

<h2>${name} Küçük Nakliye</h2>
<p>${name} ilçesinde <strong>küçük nakliye</strong> hizmeti ile az eşyalı taşımalarınızı ekonomik fiyatlarla gerçekleştiriyoruz. Öğrenci evi, bekâr evi, küçük ofis ve stüdyo daire taşımaları için idealdir. Aynı gün içinde yükleme ve teslimat yapılabilir.</p>

<h2>${name} Evden Eve Nakliyat</h2>
<p>${name} ilçesinde <strong>evden eve nakliyat</strong> hizmeti veriyoruz. Eviniz komple paketlenir, taşınır ve yeni adresinizde kurulur. Mobilya montaj-demontaj, profesyonel paketleme ve sigortalı taşımacılık hizmetimiz mevcuttur.</p>

<h2>${name} Nakliye Fiyatları</h2>
<p>${name} kamyonet nakliye fiyatları eşya miktarına, mesafeye ve kat sayısına göre değişmektedir. Şehir içi taşımalarda fiyatlar 500 TL'den başlamaktadır. <a href="/blog/adana-kamyonet-nakliye-fiyatlari">Güncel fiyat bilgileri</a> için blog yazımızı inceleyebilirsiniz.</p>
<p>Ücretsiz keşif ve fiyat teklifi için hemen arayın: <a href="tel:05374092406"><strong>0537 409 24 06</strong></a></p>

<h2>${name} ile Şehirlerarası Nakliye</h2>
<p>${name} ilçesinden <a href="/sehirlerarasi">Türkiye'nin 81 iline</a> şehirlerarası nakliye hizmeti sunuyoruz. <a href="/sehirlerarasi/adana-istanbul">İstanbul</a>, <a href="/sehirlerarasi/adana-ankara">Ankara</a>, <a href="/sehirlerarasi/adana-izmir">İzmir</a> başta olmak üzere tüm illere düzenli seferler yapıyoruz. <a href="/hizmet/adana-ceyiz-tasima">Çeyiz taşıma</a> hizmetimiz de mevcuttur.</p>

<h2>Neden Bizi Tercih Etmelisiniz?</h2>
<ul>
<li><strong>15+ yıl tecrübe</strong> – ${name} ve Adana genelinde güvenilir hizmet</li>
<li><strong>Sigortalı taşımacılık</strong> – Tüm eşyalar sigorta kapsamında</li>
<li><strong>Profesyonel ekip</strong> – Deneyimli, dikkatli ve hızlı personel</li>
<li><strong>Uygun fiyat</strong> – Piyasanın en uygun fiyatları</li>
<li><strong>7/24 hizmet</strong> – Her gün 07:00-22:00 arası</li>
</ul>
<p><a href="/blog/adana-nakliye-sektorunde-dikkat-edilmesi-gerekenler">Nakliye firması seçerken dikkat edilmesi gerekenler</a> yazımızı da okuyabilirsiniz. Sorularınız için <a href="/sss">SSS sayfamızı</a> ziyaret edin veya <a href="/iletisim">iletişim sayfamızdan</a> bize ulaşın.</p>`
}

export const DISTRICTS: District[] = [
  {
    slug: 'seyhan', name: 'Seyhan', title: 'Seyhan Kamyonet Nakliye',
    metaTitle: 'Seyhan Kamyonet Nakliye | Seyhan Küçük Nakliye | Seyhan Parça Eşya Taşıma',
    metaDesc: 'Seyhan kamyonet nakliye, parça eşya taşıma, küçük nakliye ve evden eve nakliyat. Seyhan nakliye: 0537 409 24 06',
    image: '/images/kamyonet1.png',
    services: ['Seyhan Kamyonet Nakliye', 'Seyhan Parça Eşya Taşıma', 'Seyhan Küçük Nakliye', 'Seyhan Evden Eve Nakliyat', 'Seyhan Pikap Nakliye', 'Seyhan Asansörlü Taşıma'],
    content: generateDistrictContent('Seyhan', 'seyhan', 'Seyhan\'ın merkezi konumu sayesinde hızlı teslimat garantisi sunuyoruz. Adana\'nın en kalabalık ilçesi olan Seyhan\'da yoğun trafik ve dar sokaklara rağmen kamyonetlerimiz ile kolay erişim sağlıyoruz.'),
  },
  {
    slug: 'cukurova', name: 'Çukurova', title: 'Çukurova Kamyonet Nakliye',
    metaTitle: 'Çukurova Kamyonet Nakliye | Çukurova Parça Eşya Taşıma | Çukurova Nakliye',
    metaDesc: 'Çukurova kamyonet nakliye, parça eşya taşıma ve küçük nakliye hizmeti. Çukurova nakliye: 0537 409 24 06',
    image: '/images/kamyonet2.jpg',
    services: ['Çukurova Kamyonet Nakliye', 'Çukurova Parça Eşya Taşıma', 'Çukurova Küçük Nakliye', 'Çukurova Asansörlü Taşıma', 'Çukurova Ofis Taşıma'],
    content: generateDistrictContent('Çukurova', 'cukurova', 'Adana\'nın en gelişmiş ilçesi Çukurova\'da yeni siteler, rezidanslar ve iş merkezlerine özel nakliye çözümleri sunuyoruz. Merkezimize yakınlığı sayesinde Çukurova\'da en hızlı hizmeti veriyoruz.'),
  },
  {
    slug: 'yuregir', name: 'Yüreğir', title: 'Yüreğir Kamyonet Nakliye',
    metaTitle: 'Yüreğir Kamyonet Nakliye | Yüreğir Küçük Nakliye | Yüreğir Nakliye',
    metaDesc: 'Yüreğir kamyonet nakliye ve parça eşya taşıma. Yüreğir nakliye: 0537 409 24 06',
    image: '/images/nakliyeadana.jpg',
    services: ['Yüreğir Kamyonet Nakliye', 'Yüreğir Parça Eşya Taşıma', 'Yüreğir Küçük Nakliye', 'Yüreğir Evden Eve Nakliyat'],
    content: generateDistrictContent('Yüreğir', 'yuregir', 'Yüreğir\'in geniş yerleşim alanlarına hızlı ulaşım sağlıyoruz. TOKİ konutları, yeni siteler ve sanayi bölgelerine düzenli nakliye hizmeti veriyoruz.'),
  },
  {
    slug: 'saricam', name: 'Sarıçam', title: 'Sarıçam Kamyonet Nakliye',
    metaTitle: 'Sarıçam Kamyonet Nakliye | Sarıçam Parça Eşya Taşıma | Sarıçam Nakliye',
    metaDesc: 'Sarıçam kamyonet nakliye, küçük nakliye ve parça eşya taşıma. Sarıçam nakliye: 0537 409 24 06',
    image: '/images/kamyonet2.jpg',
    services: ['Sarıçam Kamyonet Nakliye', 'Sarıçam Küçük Nakliye', 'Sarıçam Parça Eşya Taşıma', 'Sarıçam Fabrika Taşıma'],
    content: generateDistrictContent('Sarıçam', 'saricam', 'Sarıçam Organize Sanayi Bölgesi ve yeni yerleşim alanlarına hizmet veriyoruz. Sarıçam\'da hızla gelişen konut projelerine ve sanayi tesislerine nakliye çözümleri sunuyoruz.'),
  },
  {
    slug: 'kozan', name: 'Kozan', title: 'Kozan Kamyonet Nakliye',
    metaTitle: 'Kozan Kamyonet Nakliye | Kozan Nakliye Hizmeti',
    metaDesc: 'Kozan kamyonet nakliye ve parça eşya taşıma. Adana Kozan nakliye: 0537 409 24 06',
    image: '/images/kamyonet1.png',
    services: ['Kozan Kamyonet Nakliye', 'Kozan Küçük Nakliye', 'Kozan Parça Eşya Taşıma'],
    content: generateDistrictContent('Kozan', 'kozan', 'Adana\'nın tarihi ilçesi Kozan\'a düzenli nakliye hizmeti sunuyoruz. Kozan\'dan Adana merkeze ve şehirlerarası taşımacılık yapıyoruz.'),
  },
  {
    slug: 'ceyhan', name: 'Ceyhan', title: 'Ceyhan Kamyonet Nakliye',
    metaTitle: 'Ceyhan Kamyonet Nakliye | Ceyhan Küçük Nakliye',
    metaDesc: 'Ceyhan kamyonet nakliye, parça eşya taşıma ve küçük nakliye. Ceyhan nakliye: 0537 409 24 06',
    image: '/images/nakliye.jpg',
    services: ['Ceyhan Kamyonet Nakliye', 'Ceyhan Küçük Nakliye', 'Ceyhan Parça Eşya Taşıma'],
    content: generateDistrictContent('Ceyhan', 'ceyhan', 'Ceyhan sanayi bölgesi ve yerleşim alanlarına hizmet veriyoruz. Ceyhan\'dan Adana merkeze ve diğer illere düzenli nakliye yapıyoruz.'),
  },
  {
    slug: 'imamoglu', name: 'İmamoğlu', title: 'İmamoğlu Kamyonet Nakliye',
    metaTitle: 'İmamoğlu Kamyonet Nakliye | İmamoğlu Nakliye',
    metaDesc: 'İmamoğlu kamyonet nakliye hizmeti. İmamoğlu nakliye: 0537 409 24 06',
    image: '/images/kamyonet2.jpg',
    services: ['İmamoğlu Kamyonet Nakliye', 'İmamoğlu Küçük Nakliye'],
    content: generateDistrictContent('İmamoğlu', 'imamoglu', 'İmamoğlu ilçesine güvenilir ve ekonomik nakliye çözümleri sunuyoruz.'),
  },
  {
    slug: 'karaisali', name: 'Karaisalı', title: 'Karaisalı Kamyonet Nakliye',
    metaTitle: 'Karaisalı Kamyonet Nakliye | Karaisalı Nakliye',
    metaDesc: 'Karaisalı kamyonet nakliye hizmeti. Karaisalı nakliye: 0537 409 24 06',
    image: '/images/kamyonet1.png',
    services: ['Karaisalı Kamyonet Nakliye', 'Karaisalı Küçük Nakliye'],
    content: generateDistrictContent('Karaisalı', 'karaisali', 'Karaisalı ilçesi ve çevresinde taşımacılık hizmeti veriyoruz.'),
  },
  {
    slug: 'tufanbeyli', name: 'Tufanbeyli', title: 'Tufanbeyli Kamyonet Nakliye',
    metaTitle: 'Tufanbeyli Kamyonet Nakliye | Tufanbeyli Nakliye',
    metaDesc: 'Tufanbeyli kamyonet nakliye hizmeti. Tufanbeyli nakliye: 0537 409 24 06',
    image: '/images/kamyonet2.jpg',
    services: ['Tufanbeyli Kamyonet Nakliye', 'Tufanbeyli Küçük Nakliye'],
    content: generateDistrictContent('Tufanbeyli', 'tufanbeyli', 'Tufanbeyli ilçesine nakliye hizmeti sunuyoruz.'),
  },
  {
    slug: 'aladag', name: 'Aladağ', title: 'Aladağ Kamyonet Nakliye',
    metaTitle: 'Aladağ Kamyonet Nakliye | Aladağ Nakliye',
    metaDesc: 'Aladağ kamyonet nakliye hizmeti. Aladağ nakliye: 0537 409 24 06',
    image: '/images/kamyonet1.png',
    services: ['Aladağ Kamyonet Nakliye', 'Aladağ Küçük Nakliye'],
    content: generateDistrictContent('Aladağ', 'aladag', 'Aladağ ilçesine güvenilir taşımacılık yapıyoruz.'),
  },
  {
    slug: 'feke', name: 'Feke', title: 'Feke Kamyonet Nakliye',
    metaTitle: 'Feke Kamyonet Nakliye | Feke Nakliye',
    metaDesc: 'Feke kamyonet nakliye ve parça eşya taşıma. Feke nakliye: 0537 409 24 06',
    image: '/images/kamyonet2.jpg',
    services: ['Feke Kamyonet Nakliye', 'Feke Küçük Nakliye'],
    content: generateDistrictContent('Feke', 'feke', 'Feke ilçesinde taşımacılık hizmeti sunuyoruz.'),
  },
  {
    slug: 'saimbeyli', name: 'Saimbeyli', title: 'Saimbeyli Kamyonet Nakliye',
    metaTitle: 'Saimbeyli Kamyonet Nakliye | Saimbeyli Nakliye',
    metaDesc: 'Saimbeyli kamyonet nakliye. Saimbeyli nakliye: 0537 409 24 06',
    image: '/images/kamyonet1.png',
    services: ['Saimbeyli Kamyonet Nakliye', 'Saimbeyli Küçük Nakliye'],
    content: generateDistrictContent('Saimbeyli', 'saimbeyli', 'Saimbeyli ilçesine ekonomik nakliye çözümleri sunuyoruz.'),
  },
  {
    slug: 'yumurtalik', name: 'Yumurtalık', title: 'Yumurtalık Kamyonet Nakliye',
    metaTitle: 'Yumurtalık Kamyonet Nakliye | Yumurtalık Nakliye',
    metaDesc: 'Yumurtalık kamyonet nakliye. Yumurtalık nakliye: 0537 409 24 06',
    image: '/images/kamyonet2.jpg',
    services: ['Yumurtalık Kamyonet Nakliye', 'Yumurtalık Küçük Nakliye'],
    content: generateDistrictContent('Yumurtalık', 'yumurtalik', 'Yumurtalık ilçesine taşımacılık yapıyoruz.'),
  },
  {
    slug: 'karatas', name: 'Karataş', title: 'Karataş Kamyonet Nakliye',
    metaTitle: 'Karataş Kamyonet Nakliye | Karataş Nakliye',
    metaDesc: 'Karataş kamyonet nakliye. Karataş nakliye: 0537 409 24 06',
    image: '/images/kamyonet1.png',
    services: ['Karataş Kamyonet Nakliye', 'Karataş Küçük Nakliye'],
    content: generateDistrictContent('Karataş', 'karatas', 'Karataş ilçesine güvenilir taşımacılık sunuyoruz.'),
  },
  {
    slug: 'pozanti', name: 'Pozantı', title: 'Pozantı Kamyonet Nakliye',
    metaTitle: 'Pozantı Kamyonet Nakliye | Pozantı Nakliye',
    metaDesc: 'Pozantı kamyonet nakliye ve parça eşya taşıma. Pozantı nakliye: 0537 409 24 06',
    image: '/images/kamyonet2.jpg',
    services: ['Pozantı Kamyonet Nakliye', 'Pozantı Küçük Nakliye', 'Pozantı Şehirlerarası Nakliye'],
    content: generateDistrictContent('Pozantı', 'pozanti', 'Toros geçidi üzerindeki stratejik konumu ile şehirlerarası nakliyatta önemli bir nokta olan Pozantı\'ya düzenli sefer yapıyoruz.'),
  },
]

export function getDistrictBySlug(slug: string): District | undefined {
  return DISTRICTS.find(d => d.slug === slug)
}
