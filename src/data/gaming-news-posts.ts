import { Post } from '@/types';

/**
 * GTA 6 Lansmanı ve Ekim–Kasım 2026 Yeni Çıkan Oyunlar Rehber & Haber İçerikleri
 * Yazar: Bilgi Rotası (author-1)
 */
export const gamingNewsPosts: Post[] = [
  {
    id: 'post-gta6-launch-2026',
    slug: 'gta-6-cikis-tarihi-saati-ve-platformlar-2026',
    title: 'GTA 6 Çıkış Tarihi, Saati ve Platformlar (19 Kasım 2026 Resmi Lansman Rehberi)',
    description:
      'Grand Theft Auto VI (GTA 6) 19 Kasım 2026 çıkış saati, ön yükleme (pre-load) detayları, PS5 ve Xbox Series X|S platform bilgileri ile ilk gün hazırlık rehberi.',
    categorySlug: 'oyun-donanim',
    authorId: 'author-1',
    publishedAt: '2026-11-17',
    updatedAt: '2026-11-17',
    readTime: '5 dk',
    featured: true,
    trending: true,
    coverImage:
      'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1200&auto=format&fit=crop&q=80',
    tags: [
      'GTA 6',
      'Grand Theft Auto VI',
      'GTA 6 Çıkış Tarihi',
      'Rockstar Games',
      'PS5',
      'Xbox Series X',
      'Yeni Çıkan Oyunlar'
    ],
    sources: [
      {
        title: 'Rockstar Games Resmi Grand Theft Auto VI Sayfası',
        url: 'https://www.rockstargames.com/VI'
      },
      {
        title: 'Rockstar Games Haber Bülteni (Newswire)',
        url: 'https://www.rockstargames.com/newswire'
      }
    ],
    content: {
      lead: 'Rockstar Games tarafından geliştirilen Grand Theft Auto VI (GTA 6), 19 Kasım 2026 Perşembe günü PlayStation 5 ve Xbox Series X|S konsolları için resmi olarak çıkış yapıyor. Ön yükleme (pre-load), Türkiye çıkış saati ve lansman günü dikkat edilmesi gereken tüm detayları bir araya getirdik.',
      sections: [
        {
          id: 'gta-6-resmi-cikis-takvimi',
          heading: 'GTA 6 Ne Zaman ve Saat Kaçta Açılacak?',
          paragraphs: [
            'Rockstar Games resmi takvimine göre Grand Theft Auto VI, 19 Kasım 2026 Perşembe günü yerel saatle gece yarısı (00:00) itibarıyla bölgelere göre kademeli olarak erişime açılıyor.',
            'Dijital ön sipariş veren oyuncular için ön yükleme (pre-load) süreci 10 Kasım 2026 tarihinde başlatıldı. Oyunu çıkış dakikasında beklemek istemeyen konsol kullanıcılarının indirme işlemini lansman saatinden önce tamamlaması önerilir.'
          ],
          bullets: [
            'Resmi Çıkış Tarihi: 19 Kasım 2026 Perşembe',
            'Açılış Saati: Bölgesel yerel saatle 00:00 (Türkiye saati ile 19 Kasım 00:00)',
            'Ön Yükleme (Pre-Load) Başlangıcı: 10 Kasım 2026',
            'Çıkış Platformları: PlayStation 5 ve Xbox Series X|S'
          ],
          callout: {
            type: 'info',
            title: 'İlk Gün Güncellemesi (Day-One Patch)',
            message:
              'Ön yüklemeyi tamamlamış olsanız bile lansman saatine yakın küçük boyutlu bir ilk gün güncellemesi inebilir. Konsolunuzu "Dinlenme Modunda Otomatik İndir" açık şekilde bırakmanız önerilir.'
          }
        },
        {
          id: 'gta-6-platform-ve-surum-detaylari',
          heading: 'Hangi Platformlarda Yayınlanıyor? PS5 ve Xbox Series X|S',
          paragraphs: [
            'GTA 6 ilk aşamada yalnızca yeni nesil konsollar olan PlayStation 5 ve Xbox Series X|S için yayınlanıyor. PlayStation 4 ve Xbox One gibi önceki nesil konsollar desteklenmiyor.',
            'PC sürümü için Rockstar Games tarafından henüz resmi bir çıkış tarihi paylaşılmadı; stüdyonun önceki büyük yapımlarında olduğu gibi PC versiyonunun konsol lansmanından sonraki dönemde duyurulması bekleniyor.'
          ]
        },
        {
          id: 'vice-city-ve-leonida-dunyasi',
          heading: 'Leonida Eyaleti ve Vice City: Neler Bekleniyor?',
          paragraphs: [
            'Grand Theft Auto VI, oyuncuları Vice City merkezli kurgusal Leonida eyaletine götürüyor. Hikaye, Lucia ve ortağı etrafında şekillenen çok karakterli bir suç draması üzerine kurulu.',
            'Geniş bataklık bölgeleri, kıyı şeridi, yoğun şehir trafiği ve dinamik hava olaylarıyla serinin bugüne kadarki en büyük ve etkileşimli açık dünyalarından biri sunuluyor.'
          ]
        },
        {
          id: 'lansman-gunu-kontrol-listesi',
          heading: 'Lansman Günü Sorunsuz Giriş İçin Kontrol Listesi',
          paragraphs: [
            'Büyük oyun çıkışlarında mağaza ve sunucu yoğunluğu yaşanabildiği için aşağıdaki adımları önceden tamamlamak zaman kazandırır:'
          ],
          steps: [
            {
              title: '1. Adım: Depolama Alanını Kontrol Edin',
              description:
                'PS5 veya Xbox Series X|S dahili SSD diskinizde hem ana kurulum hem de ilk gün yaması için yeterli boş alan bulunduğundan emin olun.'
            },
            {
              title: '2. Adım: Sistem Yazılımını Güncelleyin',
              description:
                'Konsol sistem güncellemesinin en son sürümde olduğunu kontrol edin; eski sistem sürümleri çevrimiçi doğrulamayı geciktirebilir.'
            },
            {
              title: '3. Adım: Rockstar Social Club Bağlantısını Hazırlayın',
              description:
                'PlayStation Network veya Xbox hesabınızın Rockstar Games hesabıyla eşleştirilmiş olması ilerleme ve çevrimiçi özellikler için kolaylık sağlar.'
            }
          ]
        }
      ]
    },
    faqs: [
      {
        question: 'GTA 6 Türkiye’de saat kaçta oynanabilecek?',
        answer:
          'Dijital mağaza lansmanı yerel saatle 00:00 olarak planlandığı için Türkiye’deki oyuncular 19 Kasım 2026 gecesi saat 00:00 itibarıyla oyuna giriş yapabilir.'
      },
      {
        question: 'GTA 6 PS4 veya Xbox One’a çıkacak mı?',
        answer:
          'Hayır. Grand Theft Auto VI yalnızca PlayStation 5 ve Xbox Series X|S için geliştirilmiştir.'
      },
      {
        question: 'GTA 6 ön yükleme (pre-load) açıldı mı?',
        answer:
          'Evet, dijital ön sipariş sahipleri için ön yükleme 10 Kasım 2026 itibarıyla açılmıştır.'
      }
    ]
  },
  {
    id: 'post-gta6-pc-preload-2026',
    slug: 'gta-6-pc-ne-zaman-cikacak-ve-on-yukleme-nasil-yapilir',
    title: 'GTA 6 PC Ne Zaman Çıkacak? Ön Yükleme ve Konsol Hazırlık Rehberi',
    description:
      'GTA 6 PC sürümü hakkında resmi durum, PlayStation 5 ve Xbox Series X|S ön yükleme (pre-load) adımları ve konsol depolama hazırlığı.',
    categorySlug: 'oyun-donanim',
    authorId: 'author-1',
    publishedAt: '2026-11-17',
    updatedAt: '2026-11-17',
    readTime: '4 dk',
    featured: false,
    trending: true,
    coverImage:
      'https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=1200&auto=format&fit=crop&q=80',
    tags: [
      'GTA 6',
      'GTA 6 PC',
      'GTA 6 Ön Yükleme',
      'PS5',
      'Xbox Series X',
      'Yeni Çıkan Oyunlar',
      'Rockstar Games'
    ],
    sources: [
      {
        title: 'Rockstar Games Resmi Grand Theft Auto VI Sayfası',
        url: 'https://www.rockstargames.com/VI'
      },
      {
        title: 'PlayStation Destek: Oyun Ön Yükleme Rehberi',
        url: 'https://www.playstation.com/tr-tr/support/'
      }
    ],
    content: {
      lead: 'GTA 6 konsol çıkışıyla birlikte en çok sorulan iki soru PC sürümünün ne zaman geleceği ve PS5 / Xbox Series X|S üzerinde ön yüklemenin nasıl başlatılacağı oluyor. Mevcut resmi durumu ve adım adım kurulum rehberini aşağıda bulabilirsiniz.',
      sections: [
        {
          id: 'gta-6-pc-durumu',
          heading: 'GTA 6 PC Sürümü Hakkında Resmi Durum',
          paragraphs: [
            'Rockstar Games, Grand Theft Auto VI için 19 Kasım 2026 çıkışını yalnızca PlayStation 5 ve Xbox Series X|S için duyurmuştur. PC sürümü için henüz resmi bir tarih açıklanmamıştır.',
            'Stüdyonun önceki büyük yapımlarında (GTA V ve Red Dead Redemption 2) izlediği stratejiye paralel olarak PC versiyonunun konsol lansmanı sonrasında duyurulup yayınlanması beklenmektedir. Resmi duyuru dışındaki sahte "PC indirme" bağlantılarına karşı dikkatli olunmalıdır.'
          ],
          callout: {
            type: 'warning',
            title: 'Sahte PC İndirme Linklerine Dikkat',
            message:
              'GTA 6 henüz PC için yayınlanmadığından internette "GTA 6 PC indir / crack" başlığıyla sunulan dosyalar zararlı yazılım riski taşır. Yalnızca Rockstar Games resmi kanallarını takip edin.'
          }
        },
        {
          id: 'ps5-ve-xbox-on-yukleme',
          heading: 'PS5 ve Xbox Series X|S Üzerinde Ön Yükleme (Pre-Load) Adımları',
          paragraphs: [
            '10 Kasım 2026 itibarıyla açılan ön yüklemeyi başlatmak için konsolunuzdan şu adımları izleyin:'
          ],
          steps: [
            {
              title: 'PlayStation 5 İçin Ön Yükleme',
              description:
                'Oyun Kütüphanesi > Koleksiyonunuz bölümüne girip Grand Theft Auto VI kartını seçin ve "İndir" butonuna basın. Otomatik indirmeyi açmak için Ayarlar > Kayıtlı Veriler ve Oyun/Uygulama Ayarları > Otomatik Güncellemeler yolunu kullanabilirsiniz.'
            },
            {
              title: 'Xbox Series X|S İçin Ön Yükleme',
              description:
                'Oyunlarım ve Uygulamalarım > Tam Kitaplık > Sahip Olunan Oyunlar sekmesinden GTA 6’yı seçip Yükle deyin. Ayrıca Xbox mobil uygulaması üzerinden konsolunuza uzaktan indirme komutu gönderebilirsiniz.'
            }
          ]
        }
      ]
    },
    faqs: [
      {
        question: 'GTA 6 Xbox Game Pass veya PS Plus’a ilk günden gelecek mi?',
        answer:
          'Hayır, GTA 6 çıkışında Game Pass veya PlayStation Plus kataloğunda yer almamaktadır; dijital mağazalardan veya kutulu sürüm olarak ayrı satın alınır.'
      },
      {
        question: 'Ön yükleme yaptıktan sonra çıkış saatinde tekrar indirme gerekir mi?',
        answer:
          'Oyunun ana dosyaları önceden iner; çıkış saatinde yalnızca lisans kilidinin açılması ve varsa küçük bir ilk gün güncellemesinin uygulanması gerekir.'
      }
    ]
  },
  {
    id: 'post-new-games-nov-2026',
    slug: 'kasim-2026-yeni-cikan-oyunlar-pc-ps5-xbox',
    title: 'Ekim – Kasım 2026 Yeni Çıkan Oyunlar: PC, PS5 ve Xbox Listesi',
    description:
      'Ekim ve Kasım 2026 döneminde çıkan en büyük yeni oyunlar: GTA 6, Call of Duty: Modern Warfare 4, Phantom Blade Zero, Gears of War: E-Day ve daha fazlası.',
    categorySlug: 'oyun-donanim',
    authorId: 'author-1',
    publishedAt: '2026-11-17',
    updatedAt: '2026-11-17',
    readTime: '6 dk',
    featured: true,
    trending: true,
    coverImage:
      'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1200&auto=format&fit=crop&q=80',
    tags: [
      'Yeni Çıkan Oyunlar',
      '2026 Oyunları',
      'GTA 6',
      'Call of Duty Modern Warfare 4',
      'Phantom Blade Zero',
      'Gears of War E-Day'
    ],
    sources: [
      {
        title: 'Rockstar Games Resmi Sitesi',
        url: 'https://www.rockstargames.com/VI'
      },
      {
        title: 'Xbox Wire Resmi Duyuruları',
        url: 'https://news.xbox.com/'
      }
    ],
    content: {
      lead: '2026 sonbahar dönemi oyun dünyasının en yoğun çıkış takvimlerinden birine sahne oldu. GTA 6’nın Kasım lansmanının yanı sıra Ekim ve Kasım 2026’da PC, PlayStation 5 ve Xbox Series X|S için yayınlanan öne çıkan yeni oyunları tek listede topladık.',
      sections: [
        {
          id: 'kasim-2026-oyunlari',
          heading: 'Kasım 2026’da Çıkan Büyük Yapımlar',
          paragraphs: [
            'Kasım ayı takvimi büyük ölçüde Grand Theft Auto VI lansmanı etrafında şekillense de MMO ve simülasyon türlerinde dikkat çeken yapımlar oyuncularla buluştu:'
          ],
          bullets: [
            'Grand Theft Auto VI (GTA 6) — 19 Kasım 2026 (PS5, Xbox Series X|S): Vice City ve Leonida eyaletinde geçen yılın en büyük açık dünya oyunu.',
            'Project Motor Racing: World Endurance — 10 Kasım 2026 (PC, PS5, Xbox Series X|S): Dayanıklılık (endurance) pist yarışlarına odaklanan yeni nesil yarış simülasyonu.',
            'World of Warcraft: Forever — 4 Kasım 2026 (PC): Klasik Warcraft ruhunu yeni bölgeler ve modern sistemlerle birleştiren yeni dönem MMO sürümü.',
            'Godzilla: Destroy All Monsters Melee Remastered — 3 Kasım 2026 (PC, PS5, Xbox Series X|S): Yenilenmiş görseller ve çapraz platform çok oyunculu mod ile geri dönen arena dövüş oyunu.'
          ]
        },
        {
          id: 'ekim-2026-oyunlari',
          heading: 'Ekim 2026’da Yayınlanan Öne Çıkan Oyunlar',
          paragraphs: [
            'Ekim 2026, hem aksiyon-RPG hem de rekabetçi FPS tarafında oldukça güçlü oyunlara ev sahipliği yaptı:'
          ],
          bullets: [
            'Phantom Blade Zero — 29 Ekim 2026 (PC, PS5): Unreal Engine 5 ile geliştirilen hızlı tempolu karanlık dövüş sanatları aksiyon-RPG yapımı.',
            'Call of Duty: Modern Warfare 4 — 23 Ekim 2026 (PC, PS5, Xbox Series X|S): Yeni hikaye modu ve rekabetçi çok oyunculu haritalarla gelen serinin yeni halkası.',
            'Planet Zoo 2 — 13 Ekim 2026 (PC, PS5, Xbox Series X|S): Gelişmiş yönetim ve simülasyon mekanikleriyle devam oyunu.',
            'Gears of War: E-Day — 6 Ekim 2026 (PC, Xbox Series X|S): Emergence Day dönemini konu alan ve ilk günden Game Pass’e eklenen ön hikaye.',
            'Star Wars: Galactic Racer — 6 Ekim 2026 (PC, PS5, Xbox Series X|S): Yüksek hızlı bilim kurgu arcade yarış oyunu.',
            'Ace Combat 8: Wings of Theve — 2 Ekim 2026 (PC, PS5, Xbox Series X|S): Yeni hikaye senaryosu ve hava muharebesi modlarıyla serinin yeni oyunu.'
          ]
        },
        {
          id: 'hangi-oyun-kime-gore',
          heading: 'Platforma Göre Hızlı Seçim Önerisi',
          paragraphs: [
            'PC tarafında yüksek tempolu aksiyon ve rekabetçi nişancı arayanlar için Call of Duty: Modern Warfare 4 ve Phantom Blade Zero öne çıkarken, Xbox ve Game Pass aboneleri için Gears of War: E-Day güçlü bir seçenek sunuyor. Konsolda açık dünya deneyimi bekleyen oyuncuların odağında ise 19 Kasım itibarıyla GTA 6 bulunuyor.'
          ]
        }
      ]
    },
    faqs: [
      {
        question: 'Ekim–Kasım 2026’da Game Pass’e ilk günden gelen büyük oyun hangisi?',
        answer:
          'Gears of War: E-Day, 6 Ekim 2026 çıkış gününden itibaren PC ve Xbox Series X|S için Game Pass kütüphanesine eklenmiştir.'
      },
      {
        question: 'Bu oyunların PC performans ayarlarını nereden inceleyebilirim?',
        answer:
          'Oyun & Donanım kategorimizdeki Call of Duty: Modern Warfare 4 ve Phantom Blade Zero FPS/performans rehberlerinden adım adım optimizasyon ayarlarına ulaşabilirsiniz.'
      }
    ]
  },
  {
    id: 'post-cod-mw4-fps-2026',
    slug: 'call-of-duty-modern-warfare-4-fps-artirma-ve-grafik-ayarlari',
    title: 'Call of Duty: Modern Warfare 4 FPS Artırma ve En İyi Grafik Ayarları (PC)',
    description:
      '23 Ekim 2026’da çıkan Call of Duty: Modern Warfare 4 için PC’de FPS yükseltme, NVIDIA Reflex, DLSS/FSR ve rekabetçi net görüş ayarları.',
    categorySlug: 'oyun-donanim',
    authorId: 'author-1',
    publishedAt: '2026-11-17',
    updatedAt: '2026-11-17',
    readTime: '5 dk',
    featured: false,
    trending: true,
    coverImage:
      'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=1200&auto=format&fit=crop&q=80',
    tags: [
      'Call of Duty Modern Warfare 4',
      'MW4 FPS Artırma',
      'PC Performans',
      'NVIDIA Reflex',
      'Yeni Çıkan Oyunlar'
    ],
    sources: [
      {
        title: 'Call of Duty Resmi Destek Portalı',
        url: 'https://support.activision.com/'
      }
    ],
    content: {
      lead: '23 Ekim 2026’da yayınlanan Call of Duty: Modern Warfare 4 çok oyunculu modlarında akıcı nişan alma ve düşük gecikme için grafik ayarlarını doğru dengelemek kritik önem taşır. İşte görsel netliği bozmadan FPS’i artıran PC ayarları.',
      sections: [
        {
          id: 'mw4-ekran-ve-olcekleme',
          heading: '1. Ekran Modu ve Ölçekleme (Upscaling) Ayarları',
          paragraphs: [
            'Rekabetçi maçlarda giriş gecikmesini (input lag) en aza indirmek için ekran modunun mutlaka Tam Ekran Özel (Fullscreen Exclusive) seçili olması gerekir.'
          ],
          bullets: [
            'Görüntü Modu: Tam Ekran Özel (Fullscreen Exclusive)',
            'Ölçekleme / Keskinleştirme: NVIDIA DLSS (Kalite veya Dengeli) / AMD FSR 3 (Kalite) veya FidelityFX CAS',
            'NVIDIA Reflex Düşük Gecikme: Açık + Takviye (On + Boost)',
            'V-Sync (Oyun İçi ve Menü): Kapalı'
          ]
        },
        {
          id: 'mw4-yuksek-etkili-ayarlar',
          heading: '2. FPS’i En Çok Etkileyen Kalite Ayarları',
          paragraphs: [
            'Gölge çözünürlüğü, hacimsel sis ve ekran alanı yansımaları görsel katkısına kıyasla GPU yükünü en fazla artıran ayarlardır. Şu değerler net görüş ve yüksek FPS dengesi sağlar:'
          ],
          bullets: [
            'Doku Çözünürlüğü: VRAM kapasitenize göre Normal veya Yüksek',
            'Gölge Kalitesi ve Spot Gölge Kalitesi: Düşük (Low)',
            'Hacimsel Kalite (Volumetric Quality): Düşük',
            'Su Kalitesi ve Yansımalar: Kapalı / Düşük',
            'Hareket Bulanıklığı (World & Weapon Motion Blur) ve Film Greni: Kapalı (0)'
          ],
          callout: {
            type: 'tip',
            title: 'Shader Önbelleğini Tamamlayın',
            message:
              'Her sürücü veya oyun güncellemesi sonrası ana menüde "Gölgelendirici Ön Yüklemesi" (Shader Pre-loading) %100 bitmeden maça girmeyin; aksi halde ilk dakikalarda ciddi takılma (stutter) yaşarsınız.'
          }
        }
      ]
    },
    faqs: [
      {
        question: 'Modern Warfare 4’te FidelityFX CAS mı DLSS mi seçilmeli?',
        answer:
          '144 Hz ve üzeri yüksek FPS hedefliyorsanız DLSS Kalite modu daha yüksek kare hızı sunar; native çözünürlükte maksimum netlik istiyorsanız FidelityFX CAS (%50–70 keskinlik) tercih edebilirsiniz.'
      }
    ]
  },
  {
    id: 'post-phantom-blade-zero-2026',
    slug: 'phantom-blade-zero-baslangic-rehberi-ve-pc-performans-ayarlari',
    title: 'Phantom Blade Zero Başlangıç Rehberi ve PC Performans Ayarları',
    description:
      '29 Ekim 2026’da PC ve PS5 için çıkan Phantom Blade Zero’da dövüş mekanikleri, hayatta kalma ipuçları ve Unreal Engine 5 akıcı FPS ayarları.',
    categorySlug: 'oyun-donanim',
    authorId: 'author-1',
    publishedAt: '2026-11-17',
    updatedAt: '2026-11-17',
    readTime: '5 dk',
    featured: false,
    trending: false,
    coverImage:
      'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=1200&auto=format&fit=crop&q=80',
    tags: [
      'Phantom Blade Zero',
      'Yeni Çıkan Oyunlar',
      'Unreal Engine 5 FPS',
      'Aksiyon RPG',
      'PC Performans'
    ],
    sources: [
      {
        title: 'PlayStation Resmi Phantom Blade Zero Sayfası',
        url: 'https://www.playstation.com/'
      }
    ],
    content: {
      lead: '29 Ekim 2026’da PC ve PlayStation 5 için yayınlanan Phantom Blade Zero, yüksek tempolu dövüş koreografisi ve Unreal Engine 5 görselleriyle öne çıkıyor. İlk saatlerde zorlanmamak için temel dövüş ipuçlarını ve PC akıcılık ayarlarını derledik.',
      sections: [
        {
          id: 'pbz-temel-dovus',
          heading: 'Dövüş Sisteminde Dikkat Edilmesi Gereken 3 Kural',
          paragraphs: [
            'Phantom Blade Zero, klasik yavaş tempolu soulslike oyunlarından farklı olarak seri kombo ve zamanlamalı savuşturma (parry) üzerine kuruludur.'
          ],
          bullets: [
            'Savuşturma Zamanlaması: Düşman saldırısının hemen öncesinde blok tuşuna basmak duruş (posture) barını hızla kırar.',
            'Silah Değişimi (Phantom Edges): İki ana silah ve yardımcı ekipman arasında kombo ortasında geçiş yaparak düşman kalkanlarını aşabilirsiniz.',
            'Alan Kontrolü: Çoklu düşman gruplarında köşeye sıkışmamak için kaçınma (dodge) hareketini geriye değil yan açılara doğru kullanın.'
          ]
        },
        {
          id: 'pbz-pc-performans',
          heading: 'PC İçin Unreal Engine 5 Akıcılık Ayarları',
          paragraphs: [
            'Unreal Engine 5 tabanlı oyunlarda özellikle Global Illumination ve gölge ayarları kare süresini (frame time) doğrudan etkiler. Akıcı 60+ FPS için şu ayarları uygulayın:'
          ],
          bullets: [
            'Global Illumination: Orta (Medium) — Yüksek ile arasındaki görsel fark az, FPS kazancı yüksektir.',
            'Shadows (Gölgeler): Orta',
            'Upscaling: DLSS / FSR Kalite modu',
            'Arka Plan Uygulamaları: Tarayıcı ve kayıt yazılımlarının donanım hızlandırmasını kapatarak VRAM’i rahatlatın.'
          ]
        }
      ]
    },
    faqs: [
      {
        question: 'Phantom Blade Zero hangi platformlarda oynanabiliyor?',
        answer:
          'Oyun 29 Ekim 2026 itibarıyla PC ve PlayStation 5 platformlarında yayınlanmıştır.'
      }
    ]
  }
];
