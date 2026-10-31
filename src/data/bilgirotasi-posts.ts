import { Post } from '@/types';

// Özgün kısa rehberler.
// Eski ve sürüme bağlı bilgiler güncel kaynaktan doğrulanmalıdır.

export const bilgirotasiPosts: Post[] = [
  {
    id: 'bilgirotasi-cs2-fps', slug: 'cs2-fps-gosterme-ve-performans-ipuclari',
    title: 'Counter-Strike 2’de FPS Nasıl Gösterilir?', description: 'CS2 geliştirici konsolunu kullanarak FPS göstergesini açma ve performans ölçümünü doğru yorumlama rehberi.',
    categorySlug: 'oyun-donanim', authorId: 'author-1', publishedAt: '2026-10-31', readTime: '3 dk',
    coverImage: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1200&auto=format&fit=crop&q=80', tags: ['CS2', 'Counter-Strike 2', 'FPS'],
    content: {
      lead: 'FPS sayacı, oyunun akıcılığını takip etmeye yardımcı olur. Göstergeyi oyun içi ayarlardan veya geliştirici konsolundan açabilirsiniz; konsol komutları güncellemelerle değişebileceği için çalışmazsa oyun ayarlarını kontrol edin.', sections: [
        { id: 'cs2-fps-ayarlari', heading: 'FPS Sayacını Açma', paragraphs: ['Ayarlar menüsündeki oyun arayüzü seçeneklerinde FPS göstergesini arayın. Konsol kullanıyorsanız önce geliştirici konsolunu etkinleştirin, ardından güncel CS2 komutunu girin.'] },
        { id: 'cs2-fps-yorumlama', heading: 'Değerleri Nasıl Yorumlamalı?', paragraphs: ['FPS değerini aynı harita ve benzer sahnelerde kıyaslayın. Ani düşüşlerde grafik ayarlarının yanı sıra sıcaklık, arka plan uygulamaları ve sürücü güncellemelerini de inceleyin.'] }
      ]
    }
  },
  {
    id: 'bilgirotasi-telefon-secimi', slug: 'telefon-alirken-kontrol-edilecek-ozellikler',
    title: 'Telefon Alırken Hangi Özelliklere Bakılmalı?', description: 'Telefon seçerken ekran, pil, kamera, yazılım desteği ve bütçeyi birlikte değerlendirme rehberi.',
    categorySlug: 'teknoloji-mobil', authorId: 'author-1', publishedAt: '2026-10-31', readTime: '4 dk',
    coverImage: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=1200&auto=format&fit=crop&q=80', tags: ['Telefon', 'Akıllı Telefon', 'Satın Alma'],
    content: {
      lead: 'En iyi telefon, kullanım alışkanlığınıza ve bütçenize uyan modeldir. Sadece kamera megapikseline veya işlemci adına bakmak yerine günlük kullanımda etkili özellikleri birlikte değerlendirin.', sections: [
        { id: 'telefon-ekran-pil', heading: 'Ekran ve Pil İhtiyacınızı Belirleyin', paragraphs: ['Telefonu dışarıda sık kullanıyorsanız parlaklık ve pil ömrü önem kazanır. Büyük ekran video ve oyun için rahat olabilir; küçük ve hafif gövde tek elle kullanımda avantaj sağlar.'] },
        { id: 'telefon-destek', heading: 'Yazılım Desteğini ve Toplam Maliyeti Kontrol Edin', paragraphs: ['Güvenlik ve işletim sistemi güncelleme süresini üreticinin açıklamasından doğrulayın. Depolama, garanti, tamir imkânı ve aksesuar maliyetlerini de bütçeye katın.'] }
      ]
    }
  },
  {
    id: 'bilgirotasi-cs2-nedir', slug: 'counter-strike-2-nedir-yeni-baslayan-rehberi',
    title: 'Counter-Strike 2 Nedir? Yeni Başlayanlar İçin Kısa Rehber', description: 'CS2’nin takım yapısı, temel hedefleri ve ilk maçlara hazırlanırken bilinmesi gerekenler.',
    categorySlug: 'oyun-donanim', authorId: 'author-1', publishedAt: '2026-10-31', readTime: '4 dk',
    coverImage: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1200&auto=format&fit=crop&q=80', tags: ['CS2', 'Counter-Strike', 'FPS Oyunları'],
    content: {
      lead: 'Counter-Strike 2, iki takımın hedef ve alan kontrolü için mücadele ettiği rekabetçi bir birinci şahıs nişancı oyunudur. Takım iletişimi, harita bilgisi ve ekonomi yönetimi bireysel nişan kadar belirleyicidir.', sections: [
        { id: 'cs2-takimlar', heading: 'Takımlar ve Tur Hedefleri', paragraphs: ['Harita ve oyun moduna göre tarafların görevleri değişir. Bomba kurma ve etkisiz hâle getirme senaryolarında süreyi ve takım arkadaşlarının konumunu takip etmek önemlidir.'] },
        { id: 'cs2-baslangic', heading: 'İlk Maçlara Hazırlık', paragraphs: ['Önce birkaç haritanın temel yollarını öğrenin, kulaklıkla ses ipuçlarını izleyin ve takımınıza kısa bilgi verin. Rekabetçi modlara geçmeden önce temel nişan ve hareket kontrollerini rahatça kullanın.'] }
      ]
    }
  },
  {
    id: 'bilgirotasi-brawl-taktik', slug: 'brawl-stars-oyun-ici-ilerleme-ve-taktik-onerileri',
    title: 'Brawl Stars’ta İlerleme İçin 5 Güvenli Öneri', description: 'Brawl Stars’ta kaynakları planlı kullanma, mod seçimi ve takım oyununa dair pratik öneriler.',
    categorySlug: 'oyun-donanim', authorId: 'author-1', publishedAt: '2026-10-31', readTime: '3 dk',
    coverImage: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=1200&auto=format&fit=crop&q=80', tags: ['Brawl Stars', 'Mobil Oyun', 'Oyun İpuçları'],
    content: {
      lead: 'Oyun içi ilerlemeyi hızlandırmanın en güvenilir yolu düzenli oynamak ve kaynakları planlamaktır. Üçüncü taraf elmas veya hesap vaatleri hesabınızı ve kişisel bilgilerinizi riske atabilir.', sections: [
        { id: 'brawl-ilerleme', heading: 'Kaynakları Planlı Kullanın', paragraphs: ['Görevleri ve etkinlik ödüllerini takip edin, oyun içi para birimlerini harcamadan önce hangi karakter veya geliştirmeye öncelik verdiğinizi belirleyin. Ödül ve ekonomi kuralları güncellenebilir.'] },
        { id: 'brawl-guvenlik', heading: 'Hesabınızı Koruyun', paragraphs: ['Şifrenizi paylaşmayın ve ücretsiz elmas vaadiyle giriş bilgisi isteyen sayfalardan uzak durun. İndirme ve satın alma işlemlerini yalnızca resmi mağaza ve oyun içi kanallardan yapın.'] }
      ]
    }
  },
  {
    id: 'bilgirotasi-js-carpim', slug: 'javascript-iki-sayiyi-carpma-ornekleri',
    title: 'JavaScript ile İki Sayı Nasıl Çarpılır?', description: 'JavaScript’te çarpma operatörü, kullanıcı girdisini sayıya dönüştürme ve basit doğrulama örnekleri.',
    categorySlug: 'teknoloji-mobil', authorId: 'author-1', publishedAt: '2026-10-31', readTime: '3 dk',
    coverImage: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=1200&auto=format&fit=crop&q=80', tags: ['JavaScript', 'Kodlama', 'Programlama'],
    content: {
      lead: 'JavaScript’te iki sayıyı çarpmak için * operatörü kullanılır. Formdan gelen değerler çoğunlukla metin olduğu için hesaplamadan önce sayıya dönüştürmek ve geçersiz girdiyi ele almak gerekir.', sections: [
        { id: 'js-carpma', heading: 'Çarpma Operatörü', paragraphs: ['Örneğin const sonuc = 6 * 7; ifadesi sonuc değişkenine 42 değerini verir. Değişkenleri kullanırken her iki değerin de sayı olduğundan emin olun.'] },
        { id: 'js-girdi', heading: 'Kullanıcı Girdisini Doğrulayın', paragraphs: ['Number() ile metni sayıya çevirebilir, Number.isFinite() ile sonucun geçerli bir sayı olup olmadığını kontrol edebilirsiniz. Boş alanları ve ondalık ayırıcı tercihlerini arayüzde açıkça ele alın.'] }
      ]
    }
  },
  ...[
    ['gunes', 'güneş', 'Güneş Görmek', 'Rüyada Güneş Görmek: Yaygın Yorumlar ve Kültürel Bakış', 'Rüya yorumları kişisel deneyime ve kültüre göre değişir. Güneş imgesinin farklı geleneklerde nasıl ele alındığına dair dengeli bir bakış.', 'rüyada-gunes-gormek', 'gunes'],
    ['ari', 'arı', 'Arı Görmek', 'Rüyada Arı Görmek Ne Anlama Gelebilir?', 'Arı sembolünün rüya yorumlarında emek, düzen ve toplulukla ilişkilendirilmesine dair kültürel bir değerlendirme.', 'ruyada-ari-gormek', 'ari'],
    ['elma', 'elma', 'Elma Görmek', 'Rüyada Elma Görmek: Semboller Üzerine', 'Elmanın rüyalardaki olası sembolik çağrışımları ve rüya yorumlarını kesin öngörü saymamak gerektiği üzerine kısa bir rehber.', 'ruyada-elma-gormek', 'elma'],
    ['ev', 'ev', 'Ev Görmek', 'Rüyada Ev Görmek: Olası Anlamlar', 'Ev imgesinin rüya anlatılarındaki yaygın çağrışımları; kişisel koşulları göz önünde tutan bir yorumlama yaklaşımı.', 'ruyada-ev-gormek', 'ev']
  ].map(([key, symbol, label, title, description, slug, imageKey]) => ({
    id: `bilgirotasi-ruya-${key}`, slug, title, description, categorySlug: 'pratik-bilgiler', authorId: 'author-1', publishedAt: '2026-10-31', readTime: '3 dk',
    coverImage: `https://images.unsplash.com/photo-${imageKey === 'gunes' ? '1500530855697-b586d89ba3ee' : imageKey === 'ari' ? '1587049352846-4a222e784d38' : imageKey === 'elma' ? '1560806887-1e4cd0b6cbd6' : '1510798831971-661eb04b3739'}?w=1200&auto=format&fit=crop&q=80`,
    tags: ['Rüya Tabirleri', 'Sembolizm', symbol],
    content: {
      lead: `${description} Rüya tabirleri bilimsel tahmin yöntemi değildir; aynı imge farklı kişiler için farklı anlamlar taşıyabilir.`, sections: [
        { id: `yorum-${key}`, heading: `${label}: Geleneksel Çağrışımlar`, paragraphs: [`Bazı popüler yorum geleneklerinde ${symbol} imgesi umut, emek, yenilenme veya güven gibi temalarla ilişkilendirilebilir. Bu çağrışımlar kültüre ve anlatının ayrıntılarına göre değişir.`, 'Rüyayı değerlendirirken görülen sahne kadar o sıradaki duygu ve kişinin yaşam koşulları da önem taşır. Tek bir yorumu kesin sonuç veya gelecek haberi olarak görmek doğru olmaz.'] },
        { id: `yaklasim-${key}`, heading: 'Rüyayı Nasıl Ele Almalı?', paragraphs: ['Rüyadaki ayrıntıları ve uyandığınızda hissettiklerinizi not edin. Tekrarlayan kaygı veren rüyalar günlük yaşamınızı etkiliyorsa güvendiğiniz bir uzmanla konuşmayı düşünebilirsiniz.'] }
      ]
    }
  } as Post)),
  {
    id: 'bilgirotasi-konya-web-tasarim', slug: 'web-tasarim-ajansi-secerken-sorulacak-sorular',
    title: 'Web Tasarım Ajansı Seçerken Sorulacak Sorular', description: 'Web tasarım hizmeti alırken portföy, kapsam, bakım, erişilebilirlik ve teslimatları değerlendirme listesi.',
    categorySlug: 'teknoloji-mobil', authorId: 'author-1', publishedAt: '2026-10-31', readTime: '4 dk',
    coverImage: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&auto=format&fit=crop&q=80', tags: ['Web Tasarım', 'Ajans', 'Web Sitesi'],
    content: {
      lead: 'Ajans seçerken yalnızca görsel örneklere değil, projenin kapsamına, iletişim biçimine ve site tesliminden sonraki desteğe de bakın.', sections: [
        { id: 'ajans-portfoy', heading: 'Portföy ve Kapsamı İnceleyin', paragraphs: ['Benzer ölçekteki canlı projeleri sorun ve sitelerin mobil görünümünü kendiniz deneyin. Teklifte tasarım, içerik girişi, alan adı, barındırma ve revizyon sayısının açıkça yazmasını isteyin.'] },
        { id: 'ajans-teslim', heading: 'Bakım ve Erişimi Netleştirin', paragraphs: ['Site yönetimi ve kaynak dosyalarına kimin erişeceğini, yedekleme ve güvenlik güncellemelerinin kapsamını öğrenin. Fiyat ve hizmet şartlarını yazılı olarak karşılaştırın.'] }
      ]
    }
  },
  {
    id: 'bilgirotasi-fortnite-gereksinim', slug: 'fortnite-bilgisayar-uyumlulugu-nasil-kontrol-edilir',
    title: 'Fortnite İçin Bilgisayar Uyumluluğu Nasıl Kontrol Edilir?', description: 'Fortnite yüklemeden önce işletim sistemi, ekran kartı, bellek ve depolama uyumluluğunu doğrulama adımları.',
    categorySlug: 'oyun-donanim', authorId: 'author-1', publishedAt: '2026-10-31', readTime: '4 dk',
    coverImage: 'https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=1200&auto=format&fit=crop&q=80', tags: ['Fortnite', 'Sistem Gereksinimleri', 'PC'],
    content: {
      lead: 'Fortnite’ın gereksinimleri sürümler ve grafik ayarlarıyla değişebilir. Eski listelerdeki donanım değerlerini satın alma kararı için kullanmayın; Epic Games’in güncel gereksinim sayfasını esas alın.', sections: [
        { id: 'fortnite-spec', heading: 'Bilgisayar Özelliklerinizi Bulun', paragraphs: ['Windows Ayarları > Sistem > Hakkında bölümünde işlemci ve belleği, Görev Yöneticisi veya ekran ayarlarında grafik birimini kontrol edin. Depolamada oyunun indirme ve güncelleme alanını da hesaba katın.'] },
        { id: 'fortnite-check', heading: 'Resmi Gereksinimlerle Karşılaştırın', paragraphs: ['İşletim sistemi sürümünüzü ve ekran kartı sürücüsünü güncel tutun. Minimum gereksinimler oyunun açılmasına yöneliktir; akıcı performans için önerilen özelliklere ve kendi ekran çözünürlüğünüze bakın.'] }
      ]
    }
  },
  {
    id: 'bilgirotasi-valorant-gereksinim', slug: 'valorant-sistem-gereksinimleri-kontrol-rehberi',
    title: 'VALORANT Sistem Gereksinimleri Nasıl Kontrol Edilir?', description: 'VALORANT için bilgisayar uyumluluğunu Riot’un güncel donanım bilgileriyle kontrol etme rehberi.',
    categorySlug: 'oyun-donanim', authorId: 'author-1', publishedAt: '2026-10-31', readTime: '3 dk',
    coverImage: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1200&auto=format&fit=crop&q=80', tags: ['VALORANT', 'Riot Games', 'Sistem Gereksinimleri'],
    content: {
      lead: 'VALORANT’ın desteklediği donanım ve işletim sistemi koşulları zamanla değişebilir. Bu rehber, kendi cihaz özelliklerinizi bulup Riot’un güncel destek sayfasıyla karşılaştırmanıza yardımcı olur.', sections: [
        { id: 'valorant-donanimi', heading: 'İşlemci ve Grafik Birimini Öğrenin', paragraphs: ['Windows aramasına Sistem Bilgisi veya dxdiag yazarak işlemci, bellek ve grafik bağdaştırıcısı bilgilerini görebilirsiniz. Dizüstü bilgisayarlarda oyunun hangi grafik birimini kullandığını ayrıca kontrol edin.'] },
        { id: 'valorant-resmi', heading: 'Güncel Destek Bilgisini Esas Alın', paragraphs: ['Riot’un resmi destek sayfasında işletim sistemi, işlemci, grafik ve sürücü koşullarını karşılaştırın. Windows 11’de güvenlik özellikleriyle ilgili ek koşulları varsa Riot’un güncel açıklamasını izleyin.'] }
      ]
    }
  },
  {
    id: 'bilgirotasi-gta6-gereksinim', slug: 'gta-6-pc-gereksinimleri-hakkinda-dogrulama-rehberi',
    title: 'GTA 6 PC Gereksinimleri Hakkında Bilgiler Nasıl Doğrulanır?', description: 'GTA 6 sistem gereksinimi iddialarını resmi duyurularla kontrol etme ve söylentilerden kaçınma rehberi.',
    categorySlug: 'oyun-donanim', authorId: 'author-1', publishedAt: '2026-10-31', readTime: '3 dk',
    coverImage: 'https://images.unsplash.com/photo-1493711662062-fa541afonef3?w=1200&auto=format&fit=crop&q=80', tags: ['GTA 6', 'PC', 'Sistem Gereksinimleri'],
    content: {
      lead: 'GTA 6 için internette dolaşan eski veya tahmine dayalı PC donanım listeleri resmi gereksinim değildir. PC sürümüne ilişkin üretici açıklamasını görmeden bu listeler üzerinden donanım satın almayın.', sections: [
        { id: 'gta6-bilgi', heading: 'Resmi Duyuruları Takip Edin', paragraphs: ['Oyun yayıncısının resmi haber ve destek kanallarındaki platform, tarih ve teknik gereksinim açıklamalarını kontrol edin. Üçüncü taraf tahminleri açıkça söylenti olarak değerlendirin.'] },
        { id: 'gta6-pc', heading: 'Bilgisayar Toplamadan Önce', paragraphs: ['Gereksinimler yayımlandığında işlemci, ekran kartı, bellek ve depolama şartlarını karşılaştırın. Donanımın yanında çözünürlük, grafik hedefi ve performans testleri de önemlidir.'] }
      ]
    }
  },
  {
    id: 'bilgirotasi-autocad-gereksinim', slug: 'autocad-bilgisayar-gereksinimleri-nasil-kontrol-edilir',
    title: 'AutoCAD İçin Bilgisayar Gereksinimleri Nasıl Kontrol Edilir?', description: 'AutoCAD sürümüne ve iş yüküne göre bilgisayar uyumluluğunu Autodesk kaynaklarıyla doğrulama adımları.',
    categorySlug: 'oyun-donanim', authorId: 'author-1', publishedAt: '2026-10-31', readTime: '4 dk',
    coverImage: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=1200&auto=format&fit=crop&q=80', tags: ['AutoCAD', 'Autodesk', 'Bilgisayar'],
    content: {
      lead: 'AutoCAD’in gereksinimleri sürüme, işletim sistemine ve yapılan çizimlerin boyutuna bağlıdır. Kurulumdan önce Autodesk’in ilgili sürüm için yayımladığı resmi donanım tablosunu inceleyin.', sections: [
        { id: 'autocad-surum', heading: 'Kullanacağınız Sürümü Belirleyin', paragraphs: ['Gereksinimleri ürünün ve işletim sisteminin tam sürümüyle eşleştirin. 2D çizim ile büyük 3D projelerin bellek ve grafik ihtiyaçları farklı olabilir.'] },
        { id: 'autocad-is', heading: 'İş Yükünüze Göre Seçim Yapın', paragraphs: ['İşlemci, RAM, grafik kartı ve SSD alanını birlikte değerlendirin. Kurumsal kullanımda Autodesk’in sertifikalı donanım listelerini ve kurumunuzun BT gereksinimlerini de kontrol edin.'] }
      ]
    }
  },
  {
    id: 'bilgirotasi-kitaplar', slug: 'okuma-listesi-olusturmak-icin-kitap-onerileri',
    title: 'Okuma Listesi Oluşturmak İçin 10 Kitap Seçme Fikri', description: 'Farklı türlerden kitaplarla kişisel okuma listesi kurma ve önerileri ilgi alanlarına göre seçme rehberi.',
    categorySlug: 'pratik-bilgiler', authorId: 'author-1', publishedAt: '2026-10-31', readTime: '4 dk',
    coverImage: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=1200&auto=format&fit=crop&q=80', tags: ['Kitap', 'Okuma Önerisi', 'Edebiyat'],
    content: {
      lead: 'Herkes için geçerli tek bir “mutlaka okunacaklar” listesi yoktur. İyi bir okuma listesi, farklı türleri denemenize ve kendi ilgi alanlarınızı keşfetmenize yardımcı olur.', sections: [
        { id: 'kitap-listesi-turler', heading: 'Türleri Karıştırın', paragraphs: ['Listeye roman, öykü, tarih, bilim ve deneme gibi türlerden kitaplar ekleyin. Klasikler ile güncel eserleri bir arada seçmek farklı anlatım biçimlerini tanıtır.'] },
        { id: 'kitap-listesi-secim', heading: 'Kendi İlginize Göre Daraltın', paragraphs: ['Kitapçıdan veya kütüphaneden kısa bir bölüm okuyun; güvenilir eleştiri ve ödül listelerine göz atın. Okumaktan keyif almadığınız kitabı bırakıp listenizi güncellemek de normaldir.'] }
      ]
    }
  },
  {
    id: 'bilgirotasi-gwen-hikaye', slug: 'lol-gwen-karakteri-hikayesi-ve-oyun-rolu',
    title: 'League of Legends Gwen: Karakteri ve Oyun Tarzı', description: 'Gwen’in kurgu dünyasındaki kökeni ve oyundaki temel rolü hakkında kısa, spoiler içeren tanıtım.',
    categorySlug: 'oyun-donanim', authorId: 'author-1', publishedAt: '2026-10-31', readTime: '4 dk',
    coverImage: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=1200&auto=format&fit=crop&q=80', tags: ['League of Legends', 'Gwen', 'Oyun Karakteri'],
    content: {
      lead: 'Gwen, League of Legends evreninde kendine özgü bir geçmişi ve yakın dövüş odaklı oyun tarzı bulunan şampiyonlardan biridir. Hikâye ayrıntıları güncellenebileceğinden resmi evren sayfası en doğru başvuru noktasıdır.', sections: [
        { id: 'gwen-evren', heading: 'Karakterin Evreni', paragraphs: ['Gwen’in öyküsü, Runeterra’nın büyülü bölgeleri ve geçmişte yaşanan olaylarla bağlantılıdır. Karakterin geçmişini öğrenmek için Riot’un resmi evren içeriğindeki anlatımı okuyabilirsiniz.'] },
        { id: 'gwen-oyun', heading: 'Oyun İçindeki Rolü', paragraphs: ['Gwen yakın mesafede mücadele eder ve yeteneklerini doğru zamanlama ile kullanmaktan fayda sağlar. Yetenek değerleri yamalarla değişebildiği için güncel oyun içi açıklamalarını inceleyin.'] }
      ]
    }
  },
  {
    id: 'bilgirotasi-ay', slug: 'ay-dunyanin-dogal-uydusu-hakkinda-temel-bilgiler',
    title: 'Ay Hakkında Temel Bilgiler: Dünya’nın Doğal Uydusu', description: 'Ay’ın evreleri, Dünya ile ilişkisi ve gözlem için yararlanabileceğiniz güvenilir kaynaklar.',
    categorySlug: 'pratik-bilgiler', authorId: 'author-1', publishedAt: '2026-10-31', readTime: '4 dk',
    coverImage: 'https://images.unsplash.com/photo-1522030299830-16b8d3d049fe?w=1200&auto=format&fit=crop&q=80', tags: ['Ay', 'Uzay', 'Astronomi'],
    content: {
      lead: 'Ay, Dünya’nın doğal uydusudur ve gökyüzündeki görünümü yörüngesindeki konumuna göre değişir. Ay evreleri gece gözlemi için kolayca fark edilen astronomi olaylarındandır.', sections: [
        { id: 'ay-evreleri', heading: 'Ay’ın Evreleri', paragraphs: ['Yeniay, ilk dördün, dolunay ve son dördün Ay’ın aydınlık görünen kısmındaki değişimi tarif eder. Bu döngü yaklaşık bir ay sürer; kesin gözlem saatleri konuma ve tarihe göre değişir.'] },
        { id: 'ay-gozlem', heading: 'Ay’ı Gözlemlemek', paragraphs: ['Ay’ı çıplak gözle izlemek mümkündür; dürbün veya teleskopla kraterler daha belirgin görünür. Gözlem planı için bir uzay ajansının güncel Ay takvimini ve bulunduğunuz yerdeki hava durumunu kontrol edin.'] }
      ]
    }
  },
  ...[
    ['csgo-rutbeler', 'CS:GO Rütbeleri ve Rank Sistemi Nasıl İşler?', 'Rekabetçi rütbelerin genel mantığı, maç performansı ve sıralama sistemleri hakkında temel bilgiler.', 'Oyun içi sıralamalar rekabetçi eşleşmeler için oyuncuların yaklaşık seviyesini belirlemeye çalışır. Rütbe adları ve hesaplama kuralları oyunun sürümüne göre değişebilir.', 'Tek bir maç sonucu genel seviyeyi göstermez. Güncel sıralama açıklamalarını oyunun resmi arayüzünden takip edin; eski CS:GO listelerini CS2 kurallarıyla karıştırmayın.'],
    ['csgo-sistem', 'CS:GO ve Counter-Strike İçin Sistem Uyumluluğu', 'Counter-Strike sürümünüze uygun resmi PC gereksinimlerini kontrol etme rehberi.', 'Sistem gereksinimi oyunun sürümüne göre değişir. İşlemci, bellek, grafik birimi, işletim sistemi ve depolama alanını birlikte karşılaştırın.', 'Eski CS:GO donanım tabloları güncel CS2 performansını garanti etmez. Satın almadan önce Steam ürün sayfasındaki güncel gereksinimleri ve kullanıcı testlerini kontrol edin.'],
    ['valorant-karakterler', 'VALORANT Ajanları: Rol ve Yetenek Seçimi', 'Ajan rollerini oyun planınıza göre tanımak ve takım kompozisyonunu anlamak için başlangıç rehberi.', 'VALORANT ajanları kontrol, bilgi toplama, alan açma veya savunma gibi farklı takım görevlerine katkı verir. Ajanın rolü kadar harita ve takım planı da seçimde etkilidir.', 'Yetenekler ve denge yamalarla değişebilir. Oyun içi yetenek açıklamalarını okuyun ve ajanı dereceli maçlardan önce talim alanında deneyin.'],
    ['oyun-nickleri', 'Oyun İçin Kullanıcı Adı Seçerken Nelere Dikkat Edilmeli?', 'Akılda kalıcı, okunabilir ve platform kurallarına uygun bir oyuncu adı oluşturma fikirleri.', 'Kısa, kolay telaffuz edilen bir ad takım arkadaşlarının sizi çağırmasını kolaylaştırır. Sayı ve özel karakterleri ölçülü kullanın.', 'Kullanıcı adında gerçek ad, telefon veya başka kişisel bilgi kullanmayın. Platformun ad değiştirme kurallarını ve topluluk ilkelerini kontrol edin.'],
    ['cod-warzone-karakter', 'Call of Duty: Warzone Operatörleri ve Kozmetik Seçenekler', 'Warzone operatör görünümlerini oyun içi işlevlerden ayıran kısa rehber.', 'Operatörler karakter görünümü ve seslendirme gibi sunum öğeleri sağlayabilir; kozmetik görünüm tek başına oyuncuya rekabet avantajı sağlamaz.', 'Operatör ve paket içerikleri sezonlara göre değişir. Satın almadan önce mağazada paketin hangi oyunlarda kullanılabildiğini ve güncel fiyatı inceleyin.'],
    ['discord-renk', 'Discord’da İsim ve Rol Renkleri Nasıl Çalışır?', 'Sunucu rolleri, tema ayarları ve mesaj biçimlendirmesinin renk görünümüne etkisi.', 'Discord’da rol rengi sunucu yöneticilerinin rol ayarlarından belirlenir. Kullanıcının gördüğü renk, rol sıralaması ve uygulama temasından etkilenebilir.', 'İsim rengi değiştiren üçüncü taraf istemciler veya hesap bilgisi isteyen araçlar güvenli olmayabilir. Sunucu izinlerini ve Discord’un resmi özelliklerini kullanın.'],
    ['discord-nick', 'Discord Sunucusu İçin Takma Ad Fikirleri', 'Topluluk temasına uygun ve kolay hatırlanan Discord takma adı seçme önerileri.', 'Sunucudaki takma adınızın kolay okunması ve topluluğun temasına uyması iletişimi kolaylaştırır. İsim seçerken sunucu kurallarını da gözden geçirin.', 'Takma adınızı sık değiştirmeniz arkadaşlarınızın sizi tanımasını zorlaştırabilir. Kişisel bilgileri ve başka kullanıcıları hedef alan ifadeleri kullanmayın.'],
    ['hesap-isimleri', 'Sosyal Medya İçin Güvenli Kullanıcı Adı Seçimi', 'Yeni hesap açarken kişisel bilgileri gizleyen ve platform kurallarına uyan ad seçme rehberi.', 'Kullanıcı adınız herkese açık profilinizde görünebilir. Tam doğum tarihi, telefon numarası veya okul/iş yeri gibi tanımlayıcı bilgileri eklemeyin.', 'Taklit hesap izlenimi veren adlardan ve başka kişilerin markalı kullanıcı adlarından kaçının. Adın kullanılabilirliğini yalnızca ilgili platformda kontrol edin.'],
    ['sons-forest', 'Sons of the Forest İçin PC Uyumluluğunu Kontrol Etme', 'Oyun sürümüne göre işlemci, ekran kartı, bellek ve depolama koşullarını kontrol edin.', 'PC gereksinimleri güncellemelerle değişebilir. Bilgisayarınızdaki işlemciyi, RAM miktarını ve ekran kartı modelini not edip oyunun güncel mağaza bilgileriyle karşılaştırın.', 'Eski listelerdeki değerler güncel performans için garanti değildir. Kurulum alanına ek olarak yamalar için boş depolama payı bırakın.'],
    ['postal2-hile', 'Postal 2’de Tek Oyunculu Komutlar ve Güvenli Kullanım', 'Tek oyunculu oyun komutlarını kullanmadan önce kayıt dosyası ve sürüm uyumluluğunu kontrol edin.', 'Komut ve hile seçenekleri oyun sürümüne göre değişebilir; bazıları görev akışını veya kayıt dosyanızı etkileyebilir. Önce yeni bir kayıt açıp denemek daha güvenlidir.', 'Çevrim içi oyunlarda hile kullanımı hesap yaptırımına neden olabilir. Yalnızca oyunun izin verdiği çevrim dışı seçenekleri ve resmi topluluk yönergelerini izleyin.'],
    ['valorant-iade', 'VALORANT’ta İçerik İadesi: Başvuru Öncesi Kontroller', 'Satın alınan içerik için uygunluk ve iade koşullarını Riot’un güncel destek sayfasından kontrol etme rehberi.', 'İade edilebilir içerik, kullanım durumu ve satın alma tarihi gibi koşullara bağlı olabilir. Riot destek sayfasındaki güncel uygunluk listesi belirleyicidir.', 'Başvuruyu resmi Riot destek hesabınızdan yapın. Şifrenizi veya doğrulama kodlarınızı üçüncü taraf iade hizmetleriyle paylaşmayın.'],
    ['csgo-rank-siralama', 'CS:GO Rank Sıralaması Hakkında Bilinmesi Gerekenler', 'Eski CS:GO rank listelerini güncel Counter-Strike rekabetçi sisteminden ayırma rehberi.', 'CS:GO dönemindeki rank adları tarihsel bilgi olarak değerlendirilmeli; CS2’deki eşleştirme ve sıralama yapısı farklı olabilir.', 'Güncel oyun modunun sıralamasını oyun içi rekabetçi ekranından kontrol edin. Eski rehberlerdeki eşleştirme puanlarını güncel sistemle aynı saymayın.'],
    ['subnautica-below-zero', 'Subnautica: Below Zero İçin Sistem Gereksinimi Kontrolü', 'Subnautica: Below Zero yüklemeden önce güncel işletim sistemi ve donanım bilgisini karşılaştırın.', 'İşletim sistemi, işlemci, bellek ve ekran kartı oyun deneyimini birlikte belirler. Bilgisayar özelliklerinizi oyunun güncel mağaza sayfasıyla eşleştirin.', 'Minimum gereksinimler hedeflenen çözünürlükte akıcı performansı garanti etmez. Güncel sürücüleri kullanın ve oyun için yeterli boş disk alanı ayırın.'],
    ['twitter-kullanici-adi', 'X İçin Kullanıcı Adı Seçme ve Değiştirme Rehberi', 'X kullanıcı adı belirlerken görünürlük, uzunluk ve hesap güvenliği kurallarını dikkate alın.', 'Kullanıcı adı profil bağlantınızda yer alır ve başkalarının sizi bulmasına yardımcı olur. Benzersiz, kolay yazılan bir ad seçin.', 'Kullanılabilirlik ve ad değiştirme koşulları platform tarafından belirlenir. Güncel kuralları X yardım merkezinden kontrol edin; parola isteyen ad kontrol sitelerinden kaçının.'],
    ['valorant-sage', 'VALORANT Sage: Takım Desteği ve Yetenek Kullanımı', 'Sage’in takım destek rolünü ve yeteneklerini harita planıyla birlikte düşünün.', 'Sage, takımın konum tutmasına ve takım arkadaşlarına destek vermesine yardımcı olabilecek yeteneklere sahiptir. Yetenekleri doğru zamanda kullanmak, yalnızca bekleme süresini bitirmekten daha önemlidir.', 'Denge güncellemeleri yetenek değerlerini değiştirebilir. Güncel açıklamaları oyun içinde inceleyip farklı haritalarda pratik yapın.'],
    ['minecraft-ors', 'Minecraft’ta Örs Yapımı ve Kullanım Alanları', 'Örsün eşya onarma, büyü aktarma ve adlandırma gibi temel kullanım alanları.', 'Örs, uygun malzemeler ve tarif ile üretildikten sonra eşyaları birleştirme veya yeniden adlandırma gibi işlerde kullanılabilir. Bazı işlemler deneyim puanı harcar.', 'Tarifler ve mekanikler Java/Bedrock sürümleri arasında farklı olabilir. Kullandığınız sürümün tarif kitabını ve güncel oyun bilgisini esas alın.'],
    ['smurf-anlami', 'Oyunlarda Smurf Ne Demek? Yeni Oyuncular İçin Açıklama', 'Smurf teriminin rekabetçi oyunlardaki anlamı ve adil eşleşme üzerindeki etkisi.', 'Smurf, deneyimli bir oyuncunun daha düşük seviyeli ayrı bir hesapla oynamasını tanımlamak için kullanılır. Bu durum eşleşmeleri yeni oyuncular için dengesiz hâle getirebilir.', 'Oyunların alternatif hesap kuralları farklıdır. Hesap açmadan önce ilgili oyunun hizmet koşullarını ve rekabetçi davranış kurallarını okuyun.'],
    ['teemo-counter', 'League of Legends’ta Teemo’ya Karşı Koridor Planı', 'Teemo eşleşmesinde görüş, mesafe ve takım kompozisyonu üzerinden temel yaklaşım.', 'Teemo’nun menzilli baskısı ve görüşü etkileyen yetenekleri koridor kontrolünü zorlaştırabilir. Güvenli minyon alma ve takımınızla bilgi paylaşımı önemlidir.', 'Şampiyon dengesi yamalarla değişir. Güncel eşleşme istatistiklerini tek başına karar ölçütü yapmayın; kendi şampiyonunuzun yeteneklerini ve eşya seçeneklerini oyun içinde kontrol edin.'],
    ['clash-thrones-10', 'Clash of Clans 10. Belediye Binası İçin Köy Düzeni', 'TH10 köyünü kaynak koruma veya savaş savunması hedefine göre düzenleme ilkeleri.', 'Köy düzenini kurarken savunma binalarını, tuzakları ve kaynak depolarını hedefinize göre yerleştirin. Savaş düzeni ile kaynak koruma düzeni aynı olmak zorunda değildir.', 'Oyun güncellemeleri bina seviyelerini ve saldırı dengesini etkileyebilir. Güncel savaş kurallarına ve klanınızın stratejisine göre düzeninizi test edin.'],
    ['minecraft-huni', 'Minecraft’ta Huni Yapımı ve Otomatik Eşya Aktarımı', 'Huninin üretim tarifini ve sandıklarla kurulan temel eşya aktarımını öğrenin.', 'Huni, eşyaları yakındaki envanterlere aktarabilen bir bloktur. Bir sandığın altına veya yanına bağlayarak basit toplama sistemleri kurabilirsiniz.', 'Huni yönü ve redstone davranışı kurulumun çalışmasını etkiler. Önce küçük bir deneme düzeneği yapın; sürüm farklarında oyun içi tarif bilgisini kontrol edin.'],
    ['yaratici-nickler', 'Yaratıcı Oyun İsimleri Bulmak İçin Basit Yöntemler', 'Kendi oyun nickinizi türetmek için kelime birleştirme ve okunabilirlik önerileri.', 'İlgi alanınızdan bir kelimeyi renk, doğa veya hareket çağrıştıran başka bir kelimeyle birleştirin. İsmi yüksek sesle okuyup kolay söylenip söylenmediğini kontrol edin.', 'Kişisel veri, hakaret veya başkasını taklit eden ifadeler kullanmayın. Platformların karakter sınırı ve isim değiştirme şartlarını önceden inceleyin.'],
    ['fifa19-gereksinim', 'FIFA 19 PC Gereksinimleri: Eski Bilgiyi Doğrulama', 'FIFA 19 gibi eski oyunlarda işletim sistemi ve mağaza sürümü uyumluluğunu kontrol edin.', 'FIFA 19 artık eski bir sürüm olduğundan, internetteki gereksinim tabloları farklı yayın ve güncelleme dönemlerine ait olabilir. Kütüphanenizdeki sürümün mağaza bilgisini karşılaştırın.', 'Dijital mağaza erişimi, çevrim içi özellikler ve işletim sistemi desteği değişebilir. Oyunu satın almadan önce ilgili platformun güncel ürün sayfasını kontrol edin.'],
    ['valorant-ajans-acma', 'VALORANT’ta Yeni Ajan Açma Seçenekleri', 'Ajan edinme yöntemleri ve oyun içi ilerleme koşulları hakkında güncel kontrol rehberi.', 'Yeni ajan açma seçenekleri sezon ve oyun ekonomisi güncellemeleriyle değişebilir. Envanter veya ajan menüsündeki güncel görevleri inceleyin.', 'Harici hesap satışı veya ücretsiz ajan vaadiyle şifre isteyen sayfalardan uzak durun. Geçerli yöntemleri yalnızca oyun içinden ve Riot duyurularından takip edin.'],
    ['valorant-skin-fiyat', 'VALORANT Kostüm Fiyatları ve Mağaza İçeriği Nasıl Kontrol Edilir?', 'Kostüm paketlerinin güncel fiyatını, içeriğini ve bölgesel para birimini mağazada doğrulayın.', 'Kostüm ve paket fiyatları içerik, bölge ve mağaza dönemine göre değişebilir. Alımdan önce pakette hangi kaplama ve ek öğelerin bulunduğunu tek tek inceleyin.', 'Eski fiyat tablolarını güncel fiyat kabul etmeyin. Satın alma koşullarını ve olası iade sınırlamalarını Riot’un resmi destek sayfalarından okuyun.'],
    ['valorant-brimstone', 'VALORANT Brimstone: Alan Kontrolü ve Takım Desteği', 'Brimstone’un duman ve alan kontrolü yeteneklerini takım planına göre kullanma önerileri.', 'Brimstone, takımın ilerlemesini kolaylaştırmak için görüşü ve alanı etkileyen yeteneklerden yararlanır. Dumanları takımın giriş zamanı ve hedefiyle eşleştirin.', 'Yetenek kapsamı ve değerleri yamalarda değişebilir. Güncel yetenek bilgisini oyun içinden kontrol edin ve takım arkadaşlarınıza planınızı önceden bildirin.'],
    ['nfs-payback-gereksinim', 'Need for Speed Payback İçin PC Uyumluluğu', 'Need for Speed Payback’in PC sürüm gereksinimlerini ve depolama ihtiyacını kontrol edin.', 'Oyunun PC sürümünün işletim sistemi, işlemci, bellek ve grafik gereksinimlerini kullandığınız dijital mağazadan doğrulayın.', 'Eski gereksinim sayfaları güncel işletim sistemi uyumluluğunu garanti etmez. Oyunun platform desteğini, boş alanı ve varsa ek istemci koşullarını göz önünde bulundurun.'],
    ['thief-simulator-gereksinim', 'Thief Simulator İçin Sistem Gereksinimi Kontrolü', 'Thief Simulator bilgisayarınızda çalışır mı? Güncel donanım bilgilerini mağaza sayfasıyla eşleştirin.', 'İşlemci ve ekran kartı modelinizi, RAM miktarınızı ve kullanılabilir depolama alanınızı belirleyin. Sonra bunları oyunun mevcut PC gereksinimleriyle karşılaştırın.', 'Bir oyunun minimum gereksinimini karşılamak en yüksek grafik ayarlarında akıcılık anlamına gelmez. Kullanıcı testlerini de hedef çözünürlükle birlikte değerlendirin.'],
    ['minecraft-renk-kodlari', 'Minecraft Renk Kodları ve Biçimlendirme', 'Metin rengi ve biçimlendirme kodlarının Minecraft sürümlerinde nasıl değişebildiğini öğrenin.', 'Minecraft’ta yazı biçimlendirme seçenekleri sürüme, platforma ve sunucu ayarlarına göre farklılık gösterebilir. Sohbet, tabela ve kitaplar aynı özellikleri desteklemeyebilir.', 'Kullandığınız Java veya Bedrock sürümünün güncel belgelerini kontrol edin. Sunucu kuralları, renkli metin veya özel biçimlendirmeyi sınırlayabilir.'],
    ['minecraft-keep-inventory', 'Minecraft’ta Eşyaları Koruma Ayarı Nasıl Çalışır?', 'Ölüm sonrası envanteri koruma ayarının dünya ve sunucu kurallarına bağlı olduğunu açıklayan rehber.', 'Bazı dünyalarda oyun kuralı veya sunucu ayarı ölüm sonrası eşyaların korunmasını sağlayabilir. Bu seçenek yetki ve oyun moduna bağlıdır.', 'Komut kullanımı dünyaya erişim izni gerektirebilir ve başarımları etkileyebilir. Tek oyunculu dünyada ayarı değiştirmeden önce mevcut kuralları ve kayıt yedeğini kontrol edin.'],
    ['fifa22-gereksinim', 'FIFA 22 PC Gereksinimleri ve Sürüm Uyumluluğu', 'FIFA 22 kurulumu öncesi PC donanımı, mağaza sürümü ve çevrim içi hizmet durumunu kontrol edin.', 'Eski oyun sürümlerinde mağaza gereksinimleri ve çevrim içi hizmetlerin durumu değişmiş olabilir. Kullandığınız platformdaki ürün sayfasını referans alın.', 'Minimum donanım tablosu güncel sürücü veya işletim sistemiyle sorunsuz çalışacağı anlamına gelmez. Satın almadan önce platform desteğini doğrulayın.'],
    ['sons-forest-2', 'The Forest 2 / Sons of the Forest Sistem Uyumluluğu', 'Sons of the Forest için sistem gereksinimlerini doğru oyun ve güncelleme sürümüne göre kontrol edin.', 'Oyunun adı ve erken erişim dönemindeki gereksinimler zaman içinde değişmiş olabilir. Güncel Steam sayfasından işlemci, ekran kartı, RAM ve depolama bilgilerini kontrol edin.', 'Bilgisayar modelinizin masaüstü veya dizüstü olmasına göre grafik performansı değişebilir. Oyun güncellemeleri için ek disk alanı bırakın.'],
    ['clash-thrones-8', 'Clash of Clans 8. Belediye Binası Köy Düzeni Önerileri', 'TH8 düzenini klan savaşı, kupa veya kaynak koruma hedefinize göre planlayın.', 'Hedefinizi belirleyin: savaş düzeninde önemli savunmaları korumak, kaynak düzeninde depoları ve tuzakları dengeli yerleştirmek öne çıkar.', 'Rakip saldırı taktikleri ve oyun dengesi değişebilir. Düzeni tekrar saldırı kayıtlarıyla gözden geçirip zayıf noktaları düzeltin.'],
    ['minecraft-iksir', 'Minecraft’ta İksir Hazırlama Mantığı', 'İksir standı, temel malzemeler ve tariflerin sürüm bilgisine göre kontrol edilmesi.', 'İksir üretimi için uygun bir hazırlama düzeneği ve doğru malzemeler gerekir. Malzemelerin sırası ve iksir etkisi tarif türüne göre değişir.', 'Tarifler sürümler arasında farklılaşabilir. Minecraft’ın oyun içi tarif bilgisini ve kullandığınız sürümün rehberini kontrol edin; bilinmeyen modlardan dosya indirmeyin.'],
    ['assassins-creed-rogue', 'Assassin’s Creed Rogue PC Uyumluluğu Nasıl Kontrol Edilir?', 'Assassin’s Creed Rogue için işletim sistemi ve donanım bilgilerini ilgili mağaza sürümüyle karşılaştırın.', 'İşlemci, ekran kartı, bellek ve işletim sistemi gereksinimlerini oyunun satın alınacağı mağazada kontrol edin. Eski oyunlarda farklı mağaza sürümleri olabilir.', 'Grafik sürücüsü uyumluluğu ve kontrolcü desteği deneyimi etkileyebilir. Satın alma öncesi işletim sistemi desteğini ve iade şartlarını okuyun.'],
    ['warface-gereksinim', 'Warface İçin Bilgisayar Gereksinimlerini Kontrol Etme', 'Warface sürümünüze uygun donanım ve çevrim içi istemci gereksinimlerini doğrulayın.', 'Oyun hizmetleri ve minimum özellikler platforma göre değişebilir. Resmi mağaza veya yayıncının destek sayfasından mevcut gereksinimleri bulun.', 'Çevrim içi oyunlarda bağlantı kalitesi ve sunucu durumu da performansı etkiler. Üçüncü taraf kurulum dosyaları yerine resmi istemciyi kullanın.']
  ].map(([key, title, description, first, second]) => ({
    id: `bilgirotasi-ek-${key}`, slug: key.replaceAll('_', '-'), title, description,
    categorySlug: ['telefon', 'twitter', 'discord', 'javascript', 'hesap'].some((word) => key.includes(word)) ? 'teknoloji-mobil' : ['isim', 'nick', 'gunes', 'ev', 'elma', 'ari', 'kitap'].some((word) => key.includes(word)) ? 'pratik-bilgiler' : 'oyun-donanim',
    authorId: 'author-1', publishedAt: '2026-10-31', readTime: '3 dk',
    coverImage: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=1200&auto=format&fit=crop&q=80',
    tags: [title.split(' ')[0], 'Rehber'],
    content: {
      lead: description, sections: [
        { id: `${key}-temel`, heading: 'Bilmeniz Gerekenler', paragraphs: [first] },
        { id: `${key}-kontrol`, heading: 'Güncel Bilgiyi Doğrulayın', paragraphs: [second] }
      ]
    }
  } as Post))
];

