export interface ToolItem {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  categoryLabel: string;
  iconName: 'Calculator' | 'GraduationCap' | 'Wifi' | 'Percent' | 'FileText' | 'Calendar';
  badge: string;
  lead: string;
  howItWorks: string[];
  formulaNote: string;
  sections: {
    heading: string;
    paragraphs: string[];
    bullets?: string[];
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const tools: ToolItem[] = [
  {
    id: 'tool-vize-final',
    slug: 'vize-final-not-hesaplama',
    title: 'Üniversite Vize, Final ve Geçme Notu Hesaplama Aracı',
    shortTitle: 'Vize & Final Hesaplama',
    description:
      'Vize notunuzu, ağırlık yüzdelerini ve ders geçme barajını girerek dönem sonu ortalamanızı, harf notu karşılığını ve finalden en az kaç almanız gerektiğini anında hesaplayın.',
    categoryLabel: 'Eğitim & Sınavlar',
    iconName: 'GraduationCap',
    badge: 'Öğrenci Aracı',
    lead: 'Üniversite derslerinde vize (ara sınav), ödev/proje ve final (dönem sonu) sınav ağırlıklarına göre dönem sonu başarı notunuzu ve dersi geçmek için final ya da bütünleme sınavından en az kaç puan almanız gerektiğini bu araçla saniyeler içinde hesaplayabilirsiniz.',
    howItWorks: [
      'Vize (ara sınav) notunuzu ve dersin izlencesinde (syllabus) belirtilen vize etki oranını (örneğin %40) girin.',
      'Varsa final notunuzu girerek dönem sonu ağırlıklı ortalamanızı ve tahmini harf notunuzu görün.',
      'Henüz final sınavına girmediyseniz, üniversitenizin ders geçme notunu (örneğin 50 veya 60) ve final barajını girerek finalden almanız gereken minimum puanı öğrenin.'
    ],
    formulaNote:
      'Başarı Notu = (Vize Notu × Vize Ağırlığı / 100) + (Final Notu × Final Ağırlığı / 100). Gerekli Minimum Final Notu = (Hedef Geçme Notu - Vize Katkısı) / (Final Ağırlığı / 100).',
    sections: [
      {
        heading: 'Üniversitede Vize ve Final Ortalaması Nasıl Hesaplanır?',
        paragraphs: [
          'Türkiye’deki devlet ve vakıf üniversitelerinin büyük çoğunluğunda dönem içi değerlendirme (vize, kısa sınav, ödev, laboratuvar) %40 oranında, dönem sonu sınavı (final veya bütünleme) ise %60 oranında genel başarı notuna etki eder. Bazı fakültelerde bu oran %30 vize – %70 final veya %50 – %50 şeklinde uygulanabilir.',
          'Ders geçme koşulu yalnızca ağırlıklı ortalamanın geçme notunu (genellikle 50 veya 60) aşması değildir; aynı zamanda öğrencinin final veya bütünleme sınavından fakülte yönetmeliğinde belirlenen "final baraj puanını" (çoğu üniversitede 45 veya 50) tek başına aşması gerekir.'
        ],
        bullets: [
          '%40 Vize + %60 Final sisteminde vizeden 50 alan bir öğrencinin ortalamaya katkısı 20 puandır.',
          'Geçme notu 60 olan bir derste 20 puan vize katkısı bulunan öğrencinin, ortalamayı 60’a tamamlamak için finalden en az 67 alması gerekir.',
          'Vizeden 100 alınsa dahi (40 puan katkı), final barajı 50 olan bir üniversitede finalden 45 alınırsa öğrenci baraj altında kaldığı için dersten başarısız (FF/FD) sayılır.'
        ]
      },
      {
        heading: 'Bütünleme Sınavında Hangi Not Geçerli Olur?',
        paragraphs: [
          'Bütünleme sınavı, final sınavında başarısız olan veya sınava giremeyen öğrencilere tanınan ek sınav hakkıdır. Bütünleme sınavından alınan not, doğrudan final notunun yerine geçer; vize notu ve ağırlık oranı ise aynen korunur.',
          'Bağıl değerlendirme (çan eğrisi) uygulanan derslerde çoğu üniversite bütünleme sınavında da final dönemindeki sınıf ortalamasını ve standart sapma tablosunu baz alır.'
        ]
      }
    ],
    faqs: [
      {
        question: 'Finalden 50 barajını geçemezsem ortalamam 60 olsa bile kalır mıyım?',
        answer: 'Evet. Üniversitenizin ön lisans ve lisans eğitim-öğretim yönetmeliğinde "final barajı" (örneğin 50) uygulanıyorsa, vize notunuz 100 olsa dahi finalden barajın altında aldığınızda harf notunuz doğrudan FF veya FD olarak işlenir.'
      },
      {
        question: 'Küsuratlı çıkan final hedef puanı nasıl yuvarlanır?',
        answer: 'Öğrenci bilgi sistemlerinde (OBS) genellikle 59,50 ve üzeri ortalamalar 60’a tamamlanır; ancak garanti olması için hesaplanan hedef final puanının bir üst tam sayısını hedeflemeniz önerilir.'
      }
    ]
  },
  {
    id: 'tool-net-hesaplama',
    slug: 'tyt-ayt-dgs-net-hesaplama',
    title: 'TYT, AYT, KPSS ve DGS Net & OBP Katkısı Hesaplama Aracı',
    shortTitle: 'Sınav Net & OBP Hesaplama',
    description:
      '4 yanlışın 1 doğruyu götürdüğü ÖSYM sınavları (TYT, AYT, KPSS, DGS, ALES, MSÜ) için ders bazlı netlerinizi ve diploma notunuzun (OBP) yerleştirme puanına katkısını hesaplayın.',
    categoryLabel: 'Eğitim & Sınavlar',
    iconName: 'Calculator',
    badge: 'ÖSYM Hesaplayıcı',
    lead: 'ÖSYM tarafından düzenlenen YKS (TYT - AYT), KPSS, DGS, ALES ve MSÜ sınavlarında uygulanan "4 yanlış 1 doğruyu götürür" kuralına göre ders bazlı netlerinizi, toplam net sayınızı ve Ortaöğretim Başarı Puanı (OBP) ek puanınızı anında hesaplayın.',
    howItWorks: [
      'Her test bölümü için işaretlediğiniz Doğru ve Yanlış soru sayılarını ilgili kutucuklara girin.',
      'Mezuniyet diploma notunuzu (100 üzerinden) girerek OBP puanınızı ve 0,12 katsayısıyla yerleştirme puanınıza eklenecek net puanı görün.',
      'Daha önce bir yükseköğretim programına yerleştiyseniz "Kırık OBP (0,06 katsayısı)" seçeneğini işaretleyerek düşüş miktarını karşılaştırın.'
    ],
    formulaNote:
      'Net Sayısı = Doğru Sayısı - (Yanlış Sayısı / 4). OBP = Diploma Notu × 5. Yerleştirme Ek Puanı = OBP × 0,12 (Kırık OBP durumunda OBP × 0,06).',
    sections: [
      {
        heading: 'ÖSYM Sınavlarında 4 Yanlış 1 Doğruyu Nasıl Götürür?',
        paragraphs: [
          'ÖSYM’nin çoktan seçmeli sınavlarında şans başarısını ortadan kaldırmak amacıyla her test kendi içinde değerlendirilmek üzere 4 yanlış cevap, 1 doğru cevabı iptal eder. Yani her 1 yanlış cevap, o testteki doğru sayınızdan 0,25 net eksiltir.',
          'Boş bırakılan soruların net hesabına hiçbir olumlu veya olumsuz etkisi yoktur. Bu nedenle seçenekler arasında iki şıkka kadar indirim yapılamayan sorularda rastgele işaretleme yapmak yerine soruyu boş bırakmak net kaybını önler.'
        ],
        bullets: [
          '1 Yanlış = -0,25 Net kaybı',
          '2 Yanlış = -0,50 Net kaybı',
          '3 Yanlış = -0,75 Net kaybı',
          '4 Yanlış = -1,00 Net kaybı (1 doğru cevabın tamamen silinmesi)'
        ]
      },
      {
        heading: 'Diploma Notu (OBP) Yerleştirme Puanına Kaç Puan Ekler?',
        paragraphs: [
          '100’lük sistemdeki lise diploma notunuz 5 ile çarpılarak 250 ile 500 arasında bir Ortaöğretim Başarı Puanına (OBP) dönüştürülür. Bu puan 0,12 katsayısıyla çarpılarak ham sınav puanınıza eklenir ve yerleştirme puanınız oluşur.',
          'Örneğin diploma notu 85 olan bir adayın OBP’si 425’tir ve yerleştirme puanına 51 puan eklenir. Bir önceki yıl merkezi yerleştirmeyle bir bölüme yerleşen adaylarda ise katsayı bir yıllığına yarıya düşer (0,06) ve aynı adaya 51 yerine 25,5 puan eklenir.'
        ]
      }
    ],
    faqs: [
      {
        question: 'Türkçe testindeki yanlışlar Matematik doğrularımı götürür mü?',
        answer: 'Hayır. ÖSYM sınavlarında her alt test (Türkçe, Sosyal, Temel Matematik, Fen Bilimleri) kendi içinde bağımsız olarak hesaplanır; bir testteki yanlışlar başka bir testin doğrularını etkilemez.'
      },
      {
        question: 'Baraj puanı kaldırıldıktan sonra puan hesaplanması için kaç net gerekir?',
        answer: 'TYT puanının hesaplanabilmesi için Temel Matematik veya Türkçe testlerinin en az birinden 0,5 ham puan (en az yarım net) alınması zorunludur.'
      }
    ]
  },
  {
    id: 'tool-indirme-suresi',
    slug: 'internet-indirme-suresi-hesaplama',
    title: 'İnternet İndirme Süresi (Download Time) ve Hız Hesaplama Aracı',
    shortTitle: 'İndirme Süresi Hesaplama',
    description:
      'İnternet paket hızınıza (Mbps) ve indirilecek dosya veya oyunun boyutuna (GB / MB) göre gerçek aktarım hızınızı (MB/sn) ve indirme süresini hesaplayın.',
    categoryLabel: 'Teknoloji & Oyun',
    iconName: 'Wifi',
    badge: 'Ağ & Donanım Aracı',
    lead: 'Steam, Epic Games, PlayStation veya tarayıcı üzerinden büyük boyutlu bir oyun ya da dosya indirirken, internet servis sağlayıcınızın sunduğu Mbps hızıyla indirme işleminin kaç dakika veya kaç saat süreceğini gerçek ağ verimliliğine göre hesaplayın.',
    howItWorks: [
      'İndireceğiniz dosyanın veya oyunun boyutunu girin ve birimini (GB veya MB) seçin.',
      'Hız testinde (Speedtest) gördüğünüz indirme hızınızı Mbps cinsinden girin.',
      'Bağlantı türünüzü (Ethernet kablosu veya Wi-Fi) seçerek saniyedeki gerçek indirme miktarını (MB/sn) ve toplam süreyi görün.'
    ],
    formulaNote:
      '1 Byte = 8 Bit olduğu için teorik hız: MB/sn = Mbps ÷ 8. TCP/IP paket başlıkları ve ağ protokol yükü nedeniyle gerçek dünyadaki indirme hızı teorik hızın yaklaşık %88–%92’si düzeyindedir.',
    sections: [
      {
        heading: '100 Mbps İnternet Saniyede Kaç MB İndirir?',
        paragraphs: [
          'İnternet servis sağlayıcıları bağlantı hızlarını "Megabit/saniye" (Mbps) cinsinden tanımlarken, Steam, Windows ve tarayıcılar dosya boyutlarını "Megabyte" (MB) veya "Gigabyte" (GB) cinsinden gösterir. 1 Byte 8 Bit’e eşit olduğundan, Mbps hızınızı 8’e bölerek saniyede maksimum kaç MB indirebileceğinizi bulabilirsiniz.',
          'Ancak ağ protokollerindeki doğrulama verileri (TCP/IP overhead) nedeniyle hiçbir bağlantı %100 teorik tavanda çalışmaz. Örneğin 100 Mbps bir fiber bağlantıda teorik tavan 12,5 MB/sn iken, Steam üzerinde göreceğiniz gerçek kararlı indirme hızı 11,2 ile 11,8 MB/sn aralığındadır.'
        ],
        bullets: [
          '24 Mbps İnternet: Saniyede yaklaşık 2,7 – 3,0 MB indirir (50 GB oyun ~4 saat 45 dk sürer).',
          '50 Mbps İnternet: Saniyede yaklaşık 5,6 – 6,2 MB indirir (50 GB oyun ~2 saat 15 dk sürer).',
          '100 Mbps İnternet: Saniyede yaklaşık 11,2 – 12,5 MB indirir (50 GB oyun ~1 saat 10 dk sürer).',
          '1000 Mbps (1 Gbps) İnternet: Saniyede yaklaşık 110 – 125 MB indirir (50 GB oyun ~7,5 dk sürer).'
        ]
      },
      {
        heading: 'İndirme Hızı Neden Paket Hızından Düşük Çıkar?',
        paragraphs: [
          'Hızınız düşük görünüyorsa bunun üç temel nedeni olabilir: 2.4 GHz Wi-Fi bandı kullanımı, oyun istemcisinin aynı anda dosyaları diske açması (özellikle HDD veya giriş seviyesi SSD’lerde işlemci/disk darboğazı) ya da arka planda Windows Update ve bulut yedekleme servislerinin bant genişliğini tüketmesi.',
          'Büyük boyutlu oyun indirmelerinde 5 GHz Wi-Fi bandına geçmek veya doğrudan CAT6 Ethernet kablosu kullanmak indirme süresini %30’a varan oranda kısaltır.'
        ]
      }
    ],
    faqs: [
      {
        question: 'Mbps ile MB/s arasındaki fark nedir?',
        answer: 'Küçük "b" (Mbps) Megabit’i, büyük "B" (MB/s) ise Megabyte’ı ifade eder. 8 Megabit = 1 Megabyte olduğu için 80 Mbps hızındaki bir internet saniyede yaklaşık 10 MB veri indirir.'
      },
      {
        question: 'Steam’de indirme hızı neden bazen sıfıra düşüp tekrar çıkıyor?',
        answer: 'Steam indirdiği sıkıştırılmış paketleri eşzamanlı olarak diske yazar ve açar. Disk yazma hızınız internet hızınıza yetişemediğinde indirme kısa süreliğine duraklatılır ve disk işlemi bitince devam eder.'
      }
    ]
  },
  {
    id: 'tool-kdv-yuzde',
    slug: 'kdv-ve-yuzde-hesaplama',
    title: 'KDV Dahil / Hariç, İndirim ve Yüzde Hesaplama Aracı',
    shortTitle: 'KDV & Yüzde Hesaplama',
    description:
      '%1, %10 ve %20 güncel KDV oranlarıyla KDV dahil ve KDV hariç tutarları, fatura matrahını ve ürün indirim/artış yüzdelerini anında hesaplayın.',
    categoryLabel: 'Pratik Bilgiler',
    iconName: 'Percent',
    badge: 'Finans & Fatura Aracı',
    lead: 'Fatura keserken, alışveriş yaparken veya fiyat teklifi hazırlarken güncel %1, %10 ve %20 KDV oranlarına göre KDV hariç matrahı, KDV tutarını, genel toplamı ve indirimli satış fiyatlarını hatasız şekilde hesaplayın.',
    howItWorks: [
      'Hesaplamak istediğiniz tutarı girin ve işlemin "KDV Hariçten -> KDV Dahile" mi yoksa "KDV Dahilden -> KDV Hariçe (Matrah Bulma)" mı olacağını seçin.',
      'Güncel KDV oranını (%20, %10, %1 veya özel oran) seçin.',
      'Alt bölümdeki Yüzde & İndirim hesaplayıcı ile bir ürünün indirimli fiyatını veya iki fiyat arasındaki değişim oranını da aynı ekranda görebilirsiniz.'
    ],
    formulaNote:
      'KDV Dahil Tutar = Matrah × (1 + KDV Oranı / 100). KDV Dahil Tutardan Matrah Bulma = Toplam Tutar ÷ (1 + KDV Oranı / 100).',
    sections: [
      {
        heading: 'KDV Dahil Tutardan KDV Hariç Matrah Nasıl Bulunur?',
        paragraphs: [
          'En sık yapılan hesaplama hatası, KDV dahil toplam tutardan doğrudan %20 düşerek KDV hariç tutarı bulmaya çalışmaktır. Örneğin KDV dahil 1.200 TL olan (%20 KDV’li) bir ürünün %20’sini alıp çıkardığınızda 960 TL bulursunuz ki bu yanlıştır.',
          'Doğru yöntemde KDV dahil tutar (1 + KDV Oranı) değerine bölünmelidir. %20 KDV için toplam tutarı 1,20’ye, %10 KDV için 1,10’a, %1 KDV için 1,01’e böldüğünüzde gerçek KDV hariç fatura matrahına ulaşırsınız (1.200 ÷ 1,20 = 1.000 TL matrah, 200 TL KDV).'
        ],
        bullets: [
          '%1 KDV Oranı: Temel gıda maddeleri (un, ekmek, bakliyat vb.) ve belirli tarım ürünlerinde uygulanır.',
          '%10 KDV Oranı: Gıda ürünleri, tekstil, konaklama, eğitim ve sağlık hizmetlerinin büyük bölümünde uygulanır.',
          '%20 KDV Oranı: Elektronik, mobilya, beyaz eşya, danışmanlık, yazılım ve genel mal/hizmet teslimlerinde standart oran olarak uygulanır.'
        ]
      },
      {
        heading: 'Pratik İndirim ve Zam Oranı Hesaplama Yöntemi',
        paragraphs: [
          'Bir ürünün eski fiyatı ile yeni fiyatı arasındaki artış veya indirim yüzdesini bulmak için: ((Yeni Fiyat - Eski Fiyat) ÷ Eski Fiyat) × 100 formülü kullanılır. Örneğin 800 TL’den 600 TL’ye düşen bir üründe ((600 - 800) ÷ 800) × 100 = -%25 indirim uygulanmıştır.'
        ]
      }
    ],
    faqs: [
      {
        question: '%20 KDV dahil fiyattan KDV’yi ayırmak için kaça bölmeliyim?',
        answer: '%20 KDV dahil toplam fiyatı 1,20’ye bölerek KDV hariç ana tutarı (matrahı) bulabilirsiniz. Toplam fiyattan matrahı çıkardığınızda ise kalan tutar tam KDV bedelidir.'
      },
      {
        question: '%10 KDV dahil fiyattan matrah nasıl hesaplanır?',
        answer: 'KDV dahil toplam tutarı 1,10’a böldüğünüzde KDV hariç net tutarı elde edersiniz.'
      }
    ]
  },
  {
    id: 'tool-kelime-sayaci',
    slug: 'kelime-ve-okuma-suresi-hesaplama',
    title: 'Kelime Sayısı, Karakter ve Okuma Süresi Hesaplama Aracı',
    shortTitle: 'Kelime & Karakter Sayacı',
    description:
      'Metninizdeki kelime sayısını, boşluklu ve boşluksuz karakter uzunluğunu, cümle/paragraf sayısını ve ortalama okuma ile sesli sunum süresini anında ölçün.',
    categoryLabel: 'Pratik Bilgiler',
    iconName: 'FileText',
    badge: 'Metin & Editör Aracı',
    lead: 'Resmi dilekçe, niyet mektubu, ödev, blog yazısı veya sosyal medya paylaşımı hazırlarken metninizin kelime sayısını, boşluklu/boşluksuz karakter sınırını ve dakikadaki okuma/konuşma hızına göre tahmini süresini gerçek zamanlı olarak hesaplayın.',
    howItWorks: [
      'Metninizi aşağıdaki metin kutusuna yazın veya kopyalayıp yapıştırın.',
      'Kelime, karakter (boşluklu ve boşluksuz), cümle ve paragraf sayıları siz yazarken anında güncellenir.',
      'Sessiz okuma süresi (200 kelime/dk) ve sesli sunum/konuşma süresi (130 kelime/dk) otomatik olarak hesaplanır.'
    ],
    formulaNote:
      'Ortalama bir yetişkin Türkçe bir metni sessiz olarak dakikada 180–220 kelime, sesli bir sunum veya video seslendirmesinde ise dakikada 125–140 kelime hızıyla okur.',
    sections: [
      {
        heading: 'Karakter ve Kelime Sınırı Nerelerde Önemlidir?',
        paragraphs: [
          'Resmi başvuru formlarında (CİMER başvuruları, burs niyet mektupları, TÜBİTAK ve Erasmus proje özetleri) genellikle katı karakter veya kelime sınırları bulunur. Örneğin CİMER başvuru metin alanında karakter sınırı uygulanırken, akademik özetlerde (abstract) 150–250 kelime sınırı aranır.',
          'Dijital içerik üretiminde ise SEO başlıklarının (meta title) 50–60 karakteri, meta açıklamalarının (meta description) ise 150–160 karakteri aşmaması arama motoru sonuçlarında metnin kesilmemesi için kritik önem taşır.'
        ],
        bullets: [
          'SEO Meta Başlığı (Title): İdeal uzunluk 50 – 60 karakter (boşluk dahil).',
          'SEO Meta Açıklaması (Description): İdeal uzunluk 140 – 160 karakter (boşluk dahil).',
          'Burs / Lisansüstü Niyet Mektubu: Genellikle 400 – 600 kelime (yaklaşık 1 A4 sayfası).',
          '1 Sayfa Standart Word Belgesi (12 pt Times New Roman, 1.5 satır aralığı): Yaklaşık 300 – 350 kelime.'
        ]
      }
    ],
    faqs: [
      {
        question: '1 A4 sayfası yaklaşık kaç kelimedir?',
        answer: 'Standart kenar boşlukları ve 12 punto yazı tipiyle tek satır aralığında bir A4 sayfası yaklaşık 450–500 kelime, 1,5 satır aralığında ise yaklaşık 300–350 kelime alır.'
      },
      {
        question: 'Boşluklar karakter sayısına dahil edilir mi?',
        answer: 'Resmi başvuru formları, SMS sistemleri ve arama motoru meta alanlarında kelimeler arasındaki her boşluk 1 karakter olarak sayılır ("Boşluklu Karakter"). Bu nedenle aracımızda her iki değeri de ayrı ayrı görebilirsiniz.'
      }
    ]
  },
  {
    id: 'tool-yas-hesaplama',
    slug: 'yas-ve-gun-hesaplama',
    title: 'Yaş, Gün ve Başvuru Yaş Şartı Hesaplama Aracı',
    shortTitle: 'Yaş & Gün Hesaplama',
    description:
      'Doğum tarihinize göre tam yaşınızı (yıl, ay, gün), bugüne kadar yaşadığınız toplam gün sayısını ve sınav/memurluk başvurularındaki "yaş doldurma / gün alma" durumunuzu hesaplayın.',
    categoryLabel: 'e-Devlet & Başvurular',
    iconName: 'Calendar',
    badge: 'Başvuru Kontrol Aracı',
    lead: 'KPSS, polislik (PMYO/POMEM), bekçilik, MSÜ veya burs başvurularında sıkça karşılaşılan "X yaşından gün almamış olmak" veya "X yaşını doldurmuş olmak" şartlarını doğum tarihinize ve başvuru tarihine göre gün/ay/yıl hassasiyetiyle kontrol edin.',
    howItWorks: [
      'Doğum tarihinizi (Gün / Ay / Yıl) seçin.',
      'Hesaplama yapılacak hedef tarihi seçin (varsayılan olarak bugünün tarihi seçilidir; sınav veya başvuru ilanındaki referans tarihi de girebilirsiniz).',
      'Tam yaşınızı (Yıl, Ay, Gün), doldurduğunuz yaşı ve gün aldığınız yaşı anında görüntüleyin.'
    ],
    formulaNote:
      'Resmi mevzuatta bir kişi doğduğu gün ve ayda mevcut yaşını "doldurur" ve bir sonraki yaşından "gün almaya" başlar. Örneğin 25 yıl 2 ay 10 günlük bir aday 25 yaşını doldurmuş, 26 yaşından gün almıştır.',
    sections: [
      {
        heading: '"Yaşını Doldurmak" ile "Yaştan Gün Almak" Arasındaki Fark Nedir?',
        paragraphs: [
          'Kamu personeli alım ilanlarında (KPSS, POMEM, Jöh/Polislik, Bekçilik ve Bakanlık ilanları) yaş şartı iki farklı ifadeyle yazılır ve adaylar tarafından en çok karıştırılan konu budur.',
          'Örneğin bugün itibarıyla 29 yıl, 4 ay, 12 günlük olan bir kişi; **29 yaşını doldurmuştur** ve **30 yaşından 4 ay 12 gün almıştır**. Dolayısıyla ilanda "30 yaşından gün almamış olmak" şartı varsa bu aday başvuru yapamaz; ancak "30 yaşını doldurmamış olmak" şartı varsa başvuru yapabilir.'
        ],
        bullets: [
          '18 Yaşını Doldurmuş Olmak: Doğum tarihinizin üzerinden tam 18 yıl geçmiş olması (18 yıl 0 ay 0 gün ve üzeri).',
          '30 Yaşından Gün Almamış Olmak: Henüz 29 yaşını doldurmamış olmak (en fazla 28 yıl 11 ay 29 günlük olmak).',
          '35 Yaşını Doldurmamış Olmak: Henüz 35. doğum gününe ulaşmamış olmak (34 yıl 11 ay 29 güne kadar başvuru yapılabilir).'
        ]
      }
    ],
    faqs: [
      {
        question: 'İlanda "01 Ocak 2026 itibarıyla 30 yaşından gün almamış olmak" ne demektir?',
        answer: 'Hesaplama aracımızda "Hedef Tarih" kısmına 01.01.2026 girdiğinizde yaşınızın 28 yıl, X ay, X gün çıkması (yani 29 yaşını henüz doldurmamış olmanız) gerekir. 01 Ocak 1997 ve sonrasında doğanlar bu şartı sağlar.'
      },
      {
        question: '18 yaşını doldurmak için doğum günümün geçmesi gerekir mi?',
        answer: 'Evet, 18. doğum gününüzün geldiği gün (00:00 itibarıyla) 18 yaşınızı resmen doldurmuş ve reşit olmuş sayılırsınız.'
      }
    ]
  }
];

export function getToolBySlug(slug: string): ToolItem | undefined {
  return tools.find((t) => t.slug === slug);
}
