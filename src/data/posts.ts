import { Post } from '@/types';
import { infoburadaPosts } from './infoburada-posts';

const originalPosts: Post[] = [
  {
    id: 'post-new-1',
    slug: 'kyk-burs-kredi-taahhutname-onayi-nasil-yapilir',
    title: 'KYK Burs ve Kredi Taahhütname Onayı Nasıl Yapılır? (Adım Adım)',
    description: 'KYK burs veya öğrenim kredisi kazanan öğrencilerin e-Devlet üzerinden yapması gereken taahhütname onayı adımları ve dikkat edilmesi gerekenler.',
    categorySlug: 'e-devlet-basvurular',
    authorId: 'author-2',
    publishedAt: '2026-10-07',
    updatedAt: '2026-10-21',
    readTime: '4 dk',
    featured: true,
    trending: true,
    coverImage: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1200&auto=format&fit=crop&q=80',
    tags: ['KYK', 'Burs', 'Öğrenim Kredisi', 'Taahhütname Onayı', 'e-Devlet', 'GSB'],
    sources: [
      { title: 'GSB: Burs ve kredi genel bilgileri', url: 'https://kygm.gsb.gov.tr/sayfalar/2441/2390/genel-bilgiler.aspx' },
      { title: 'GSB: Burs ve kredi sıkça sorulan sorular', url: 'https://kygm.gsb.gov.tr/Sayfalar/2446/3200/sikca-sorulan-sorular-kredi-burs.aspx' }
    ],
    content: {
      lead: 'Gençlik ve Spor Bakanlığı (GSB) tarafından her yıl açıklanan KYK burs ve kredi başvuru sonuçlarının ardından hak kazanan öğrencilerin ödemelerini alabilmeleri için taahhütname onayı vermesi gerekir. İşte e-Devlet üzerinden adım adım onay kılavuzu.',
      sections: [
        {
          id: 'taahhutname-nedir',
          heading: 'KYK Taahhütname Onayı Nedir ve Neden Zorunludur?',
          paragraphs: [
            'Gençlik ve Spor Bakanlığı (GSB) tarafından her yıl açıklanan KYK burs ve kredi başvuru sonuçlarının ardından hak kazanan öğrencilerin burslarını alabilmeleri için taahhütname onayı vermesi gerekir.',
            'Taahhütname onayı yapılmadığında burs veya kredi ödemesi yapılmaz. Son tarih ve son tarihten sonra izlenecek yol her dönem GSB tarafından duyurulur; güncel yılın ilanını kontrol edin.'
          ],
          callout: {
            type: 'warning',
            title: 'Önemli Hatırlatma',
            message: 'Sistemi son güne bırakmayın; e-Devlet üzerinde oluşabilecek sunucu yoğunlukları hak kaybına yol açabilir.'
          }
        },
        {
          id: '18-yas-ustu-onay',
          heading: '18 Yaşından Büyükler İçin Adım Adım Taahhütname Onayı',
          paragraphs: [
            'Reşit olan öğrencilerin onay adımları son derece basittir:'
          ],
          steps: [
            {
              title: '1. Adım: e-Devlet Sistemine Giriş Yapın',
              description: 'T.C. kimlik numaranız ve şifrenizle turkiye.gov.tr adresine giriş yapın.'
            },
            {
              title: '2. Adım: Hizmeti Bulun',
              description: 'Arama çubuğuna "Gençlik ve Spor Bakanlığı Burs/Kredi Taahhütname Onayı" yazın ve ilgili hizmete tıklayın.'
            },
            {
              title: '3. Adım: Metni Dikkatle Okuyun',
              description: 'Taahhütnamenin tüm maddelerini inceleyin (özellikle geri ödeme şartları ve başarı kriterleri).'
            },
            {
              title: '4. Adım: Onaylayın',
              description: 'Sayfanın en altındaki onay kutucuğunu işaretleyip "Onayla" butonuna tıklayın.'
            },
            {
              title: '5. Adım: Barkodlu Belgeyi İndirin',
              description: 'İşlem tamamlandığında oluşan barkodlu belgenin PDF halini saklayın.'
            }
          ]
        },
        {
          id: '18-yas-alti-onay',
          heading: '18 Yaşından Küçük Öğrenciler Ne Yapmalı?',
          paragraphs: [
            'GSB’nin güncel açıklamasında 15–18 yaş aralığındaki öğrenciler için önce anne veya babanın e-Devlet hesabından veli onayı, ardından öğrencinin kendi hesabından taahhütname onayı isteniyor.',
            '15 yaşından küçük öğrenciler ile anne ve babası bulunmayan bazı öğrenciler için işlem farklı olabilir; GSB, bu durumlarda kanuni vasiyle birlikte ilgili il müdürlüğüne başvurulmasını belirtiyor. Yaş ve durumunuza göre güncel GSB duyurusunu kontrol edin.'
          ],
          callout: {
            type: 'tip',
            title: 'Banka Hesabı Uyarısı',
            message: 'Taahhütname onayından sonra burs/kredi ödemeleri için Ziraat Bankası Genç Kart işlemlerinizi tamamlamayı unutmayın.'
          }
        }
      ]
    },
    faqs: [
      {
        question: 'Taahhütname onayını kaçırırsam ne olur?',
        answer: 'GSB tarafından belirtilen son güne kadar taahhütname onaylanmazsa, kazandığınız burs veya kredi hakkı iptal edilir.'
      },
      {
        question: '18 yaşından küçükler kendi hesabından tek başına onay verebilir mi?',
        answer: '15–18 yaş aralığı için GSB, önce anne veya babanın e-Devlet üzerinden veli onayı vermesini, sonra öğrencinin kendi hesabından taahhütnameyi onaylamasını istiyor. 15 yaşından küçük öğrencilerin işlemi farklı olabilir; GSB’nin güncel açıklamasına bakın.'
      }
    ]
  },
  {
    id: 'post-new-2',
    slug: 'instagram-hesap-dondurma-gecici-kapatma-linki',
    title: 'Instagram Hesap Dondurma ve Geçici Kapatma Rehberi (2026)',
    description: 'Instagram hesabınızı silmeden geçici olarak kapatma (dondurma) işlemi nasıl yapılır? Mobil ve masaüstü doğrudan dondurma adımları.',
    categorySlug: 'teknoloji-mobil',
    authorId: 'author-1',
    publishedAt: '2026-10-07',
    updatedAt: '2026-10-21',
    readTime: '3 dk',
    featured: true,
    trending: true,
    coverImage: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=1200&auto=format&fit=crop&q=80',
    tags: ['Instagram', 'Hesap Dondurma', 'Sosyal Medya', 'Hesap Kapatma', 'Mobil'],
    sources: [
      { title: 'Instagram Yardım Merkezi: Hesabı geçici olarak dondurma', url: 'https://help.instagram.com/728869160569983' },
      { title: 'Instagram Yardım Merkezi', url: 'https://help.instagram.com/' }
    ],
    content: {
      lead: 'Instagram hesabınızı silmeden fotoğraflarınızı, takipçilerinizi ve mesajlarınızı koruyarak geçici olarak kapatabilirsiniz. İşte 2026 Meta Hesaplar Merkezi ile telefondan ve bilgisayardan hesap dondurma adımları.',
      sections: [
        {
          id: 'dondurma-vs-silme-farki',
          heading: 'Instagram Hesabını Dondurmak ile Silmek Arasındaki Fark',
          paragraphs: [
            'Hesabınızı sildiğinizde fotoğraflarınız, takipçileriniz ve mesajlarınız kalıcı olarak yok olur.',
            'Hesabınızı dondurduğunuzda (geçici olarak kapattığınızda) ise profiliniz gizlenir; dilediğiniz zaman tekrar kullanıcı adı ve şifrenizle giriş yaparak her şeyi kaldığı yerden kullanmaya devam edebilirsiniz.'
          ]
        },
        {
          id: 'telefondan-dondurma',
          heading: 'Telefondan (Uygulama İçi) Instagram Dondurma Adımları',
          paragraphs: [
            'Meta Hesaplar Merkezi güncellemesiyle birlikte işlem doğrudan uygulama üzerinden yapılabilmektedir:'
          ],
          steps: [
            {
              title: '1. Adım: Profile Gidin',
              description: 'Instagram uygulamasını açın ve sağ alttaki profil simgenize dokunun.'
            },
            {
              title: '2. Adım: Menüyü Açın',
              description: 'Sağ üstteki üç çizgi (Menü) simgesine dokunun.'
            },
            {
              title: '3. Adım: Hesaplar Merkezi',
              description: 'Hesaplar Merkezi > Kişisel Detaylar bölümüne girin.'
            },
            {
              title: '4. Adım: Hesap Sahipliği ve Kontrolü',
              description: 'Hesap Sahipliği ve Kontrolü seçeneğini seçin.'
            },
            {
              title: '5. Adım: Dondurma veya Silme',
              description: 'Dondurma veya Silme ekranında ilgili hesabınızı seçin.'
            },
            {
              title: '6. Adım: Onaylayın',
              description: '"Hesabı Dondur" seçeneğini işaretleyip şifrenizi girerek onaylayın.'
            }
          ]
        },
        {
          id: 'bilgisayardan-dondurma',
          heading: 'Bilgisayardan (Web Tarayıcısı ile) Hesap Dondurma',
          paragraphs: [
            '1. Tarayıcınızda instagram.com adresine gidip giriş yapın.',
            '2. Profil ayarlarından Hesaplar Merkezi\'ne ulaşın veya doğrudan dondurma bağlantısını açın.',
            '3. Ayrılma nedeninizi seçin ve hesap şifrenizi girin.',
            '4. "Hesabı Geçici Olarak Kapat" butonuna tıklayın.'
          ],
          callout: {
            type: 'tip',
            title: 'Önemli Hatırlatma',
            message: 'Yeniden dondurma sıklığı değişebilir; işlem ekranında gösterilen güncel uyarıyı esas alın. Dondurmayı kaldırmak için hesabınıza yeniden giriş yapın.'
          }
        },
        {
          id: 'kalici-silme',
          heading: 'Hesabı Kalıcı Olarak Silmeden Önce',
          paragraphs: [
            'Hesabı silme talebi dondurmadan farklıdır ve profilinize erişiminizi kalıcı olarak kaybettirebilir. Fotoğraf, video ve diğer bilgilerinize ihtiyacınız varsa talep oluşturmadan önce Instagram’ın bilgi indirme aracını kullanın.',
            'Silme talebini Hesaplar Merkezi içindeki hesap sahipliği ve kontrolü bölümünden başlatın. Instagram’ın gösterdiği son tarih ve iptal koşullarını dikkatle okuyun; silme süreci ve menü adları değişebileceğinden güncel resmi yardım sayfasını esas alın.'
          ],
          callout: {
            type: 'warning',
            title: 'Silme işlemi kalıcı olabilir',
            message: 'Devam etmeden önce hesabınızda saklamak istediğiniz içeriği indirin ve ekranda gösterilen silme/iptal süresini not edin.'
          }
        }
      ]
    },
    faqs: [
      {
        question: 'Dondurulan Instagram hesabı ne zaman açılır?',
        answer: 'Hesabınıza kullanıcı adı ve şifrenizle tekrar giriş yaptığınız anda dondurma işlemi iptal edilir ve hesabınız hemen aktifleşir.'
      },
      {
        question: 'Instagram hesabını yeniden ne zaman dondurabilirim?',
        answer: 'Yeniden dondurma sıklığı hesap ve Instagram kurallarına göre değişebilir. İşlem sırasında ekranda görünen bilgilendirmeyi kontrol edin.'
      }
    ]
  },
  {
    id: 'post-new-3',
    slug: 'valorant-van-1067-ve-tpm-2-0-hatasi-kesin-cozumu',
    title: 'Valorant Van 1067 Hatası ve TPM 2.0 Çözümü (Windows 10 / 11)',
    description: 'Valorant açılırken görülen Van 1067 ve Vanguard TPM 2.0 / Secure Boot hatalarında uygulanabilecek kontrol adımları.',
    categorySlug: 'oyun-donanim',
    authorId: 'author-3',
    publishedAt: '2026-10-07',
    updatedAt: '2026-10-21',
    readTime: '5 dk',
    featured: true,
    trending: true,
    coverImage: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1200&auto=format&fit=crop&q=80',
    tags: ['Valorant', 'Van 1067', 'TPM 2.0', 'Secure Boot', 'Vanguard', 'Hata Çözümü'],
    sources: [
      { title: 'Riot Games VALORANT Destek', url: 'https://support-valorant.riotgames.com/hc/tr' },
      { title: 'Microsoft: Windows sürücü güncellemeleri', url: 'https://support.microsoft.com/en-us/windows/hardware/drivers/automatically-get-recommended-and-updated-hardware-drivers' }
    ],
    content: {
      lead: 'Valorant açılırken karşılaşılan Van 1067 hatası, Riot Vanguard\'ın güvenlik doğrulamasından kaynaklanır. İşte BIOS üzerinden TPM 2.0 ve Secure Boot ayarları ile VGC servisinin yapılandırılması.',
      sections: [
        {
          id: 'van-1067-neden-olur',
          heading: 'Van 1067 Hatası Neden Kaynaklanır?',
          paragraphs: [
            'Valorant\'ın hile karşıtı yazılımı Riot Vanguard; Windows 11 ve güncel Windows 10 sürümlerinde sistem güvenliği doğrulaması için TPM 2.0 (Güvenilir Platform Modülü) ve Secure Boot (Güvenli Önyükleme) özelliklerinin açık olmasını zorunlu kılar.',
            'Bu özellikler BIOS üzerinde kapalıysa veya devre dışı bırakılmışsa oyuna giriş esnasında Van 1067 hatası ile karşılaşılır.'
          ]
        },
        {
          id: 'bios-tpm-secureboot',
          heading: '1. BIOS Üzerinden TPM 2.0 ve Secure Boot Açma',
          paragraphs: [
            'Bilgisayarınızı yeniden başlatarak anakart üreticinize uygun tuşla BIOS ekranına girin:'
          ],
          steps: [
            {
              title: '1. Adım: BIOS Menüsüne Girin',
              description: 'Bilgisayar açılışında F2, DEL veya F12 tuşlarına art arda basarak BIOS ekranına ulaşın.'
            },
            {
              title: '2. Adım: TPM Ayarını Etkinleştirin',
              description: 'AMD işlemciler için "AMD fTPM switch" ayarını, Intel işlemciler için "Intel PTT" ayarını Enabled yapın.'
            },
            {
              title: '3. Adım: Secure Boot\'u Açın',
              description: 'Boot veya Security sekmesinden Secure Boot seçeneğini bulup Enabled duruma getirin (OS Type: Windows UEFI Mode olmalıdır).'
            },
            {
              title: '4. Adım: Kaydedin ve Yeniden Başlatın',
              description: 'F10 tuşuna basıp ayarları kaydederek bilgisayarı yeniden başlatın.'
            }
          ]
        },
        {
          id: 'vgc-hizmeti-ayari',
          heading: '2. VGC Hizmetini Otomatik Olarak Ayarlama',
          paragraphs: [
            '1. Windows + R tuşlarına basıp services.msc yazın ve Enter\'a basın.',
            '2. Listeden vgc hizmetini bulun ve sağ tıklayıp Özellikler\'i açın.',
            '3. Başlangıç türünü "Otomatik" yapın, servis durmuşsa "Başlat" butonuna tıklayıp kaydedin.'
          ],
          callout: {
            type: 'info',
            title: 'Temiz Vanguard Kurulumu',
            message: 'Sorun devam ediyorsa Denetim Masası üzerinden Riot Vanguard\'ı kaldırın, bilgisayarı yeniden başlatıp Riot İstemcisi ile Vanguard\'ı baştan kurun.'
          }
        }
      ]
    },
    faqs: [
      {
        question: 'Windows 10 kullanırken de TPM 2.0 şart mı?',
        answer: 'Valorant son güncellemeleriyle birlikte Windows 10 işletim sistemlerinde de Vanguard için TPM ve Secure Boot denetimlerini sıkılaştırmıştır.'
      },
      {
        question: 'vgc servisi neden durur?',
        answer: 'Üçüncü taraf antivirüs programları veya Windows Defender çakışmaları vgc servisinin başlamasını engelleyebilir.'
      }
    ]
  },
  {
    id: 'post-new-4',
    slug: 'e-devlet-ikametgah-belgesi-nasil-alinir',
    title: 'e-Devlet İkametgah (Yerleşim Yeri) Belgesi Nasıl Alınır? (Barkodlu ve Ücretsiz)',
    description: 'e-Devlet kapısı üzerinden resmi kurumlara vermek üzere barkodlu ikametgah (yerleşim yeri ve diğer adres) belgesi alma adımları.',
    categorySlug: 'e-devlet-basvurular',
    authorId: 'author-2',
    publishedAt: '2026-10-07',
    updatedAt: '2026-10-21',
    readTime: '3 dk',
    featured: true,
    trending: true,
    coverImage: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?w=1200&auto=format&fit=crop&q=80',
    tags: ['e-Devlet', 'İkametgah', 'Yerleşim Yeri Belgesi', 'Barkodlu Belge', 'NVİ'],
    sources: [
      { title: 'NVİ: Nüfus kayıt örneği ve yerleşim yeri belgeleri', url: 'https://www.nvi.gov.tr/nufus-kayit-ornegi-verilmesi' },
      { title: 'NVİ: e-Doğrulamalar', url: 'https://nvi.gov.tr/e-dogrulamalar' }
    ],
    content: {
      lead: 'Nüfus müdürlüğüne gitmeden resmi kurumlara ibraz edebileceğiniz barkodlu ikametgah (yerleşim yeri) belgesini e-Devlet kapısı üzerinden saniyeler içinde ücretsiz oluşturabilirsiniz.',
      sections: [
        {
          id: 'ikametgah-gecerlilik',
          heading: 'e-Devlet\'ten Alınan İkametgah Belgesi Geçerli midir?',
          paragraphs: [
            'Evet. e-Devlet üzerinden oluşturulan karekodlu ve barkodlu yerleşim yeri belgeleri, Nüfus Müdürlüklerinden bizzat alınan ıslak imzalı belgelerle aynı hukuki geçerliliğe sahiptir.',
            'Belge e-Devlet üzerinden karekodlu veya barkodlu olarak alınabilir ve elektronik ortamda doğrulanabilir. Başvuru yapacağınız kurumun belge tarihi veya sunum biçimiyle ilgili özel koşullarını ayrıca kontrol edin.'
          ]
        },
        {
          id: 'adim-adim-ikametgah-alma',
          heading: 'Adım Adım Yerleşim Yeri Belgesi Alma',
          paragraphs: [
            'Aşağıdaki adımları sırayla izleyerek barkodlu PDF belgenizi anında indirebilirsiniz:'
          ],
          steps: [
            {
              title: '1. Adım: e-Devlet Kapısına Giriş',
              description: 'turkiye.gov.tr adresine T.C. kimlik numaranız ve e-Devlet şifrenizle giriş yapın.'
            },
            {
              title: '2. Adım: Hizmeti Açın',
              description: 'Arama kutusuna "Yerleşim Yeri (İkametgah) ve Diğer Adres Belgesi Sorgulama" yazarak NVİ hizmetine tıklayın.'
            },
            {
              title: '3. Adım: Bilgilendirme Onayı',
              description: 'Sayfadaki uyarı metnini okuyup onay kutucuğunu işaretleyin ve "Devam Et" deyin.'
            },
            {
              title: '4. Adım: Belge Kimin İçin Alınıyor?',
              description: 'Kendiniz için "Kendisi", eş veya çocuğunuz için "Eşi / Çocuğu" seçeneğini belirleyin.'
            },
            {
              title: '5. Adım: Verilecek Kurum Tipi',
              description: '"Kurum Talebi", "Kişi Talebi" veya "Kuruma İbraz" seçeneklerinden birini seçin.'
            },
            {
              title: '6. Adım: Dosyayı İndirin',
              description: '"Sorgula" butonuna bastıktan sonra açılan ekranda "Dosyayı İndir" diyerek PDF belgenizi indirin.'
            }
          ]
        },
        {
          id: 'guvenlik-ve-dogrulama',
          heading: 'Güvenlik İpucu ve Belge Doğrulama',
          paragraphs: [
            'Oluşturulan belgenin üzerindeki barkod numarası ile kurumlar belgenin orijinalliğini e-Devlet üzerinden teyit edebilir; bu nedenle barkod alanının net okunduğundan emin olun.'
          ],
          callout: {
            type: 'tip',
            title: 'Doğrulama Kolaylığı',
            message: 'Belgeyi sunduğunuz kurum "e-Devlet Belge Doğrulama" servisini kullanarak belgenizin geçerliliğini anında denetleyebilir.'
          }
        }
      ]
    },
    faqs: [
      {
        question: 'e-Devlet ikametgah belgesi ücretli mi?',
        answer: 'Hayır, e-Devlet üzerinden ikametgah belgesi almak tamamen ücretsizdir.'
      },
      {
        question: 'Belgenin kullanım süresi ne kadardır?',
        answer: 'Belgenin her kurum için geçerli tek bir kullanım süresi yoktur. Belgeyi sunacağınız kurumdan güncel tarih şartı olup olmadığını öğrenin.'
      }
    ]
  },

  {
    id: 'post-1',
    slug: 'kyk-burs-ve-ogrenim-kredisi-basvurusu-nasil-yapilir',
    title: 'KYK Burs ve Öğrenim Kredisi Başvurusu Nasıl Yapılır? (Adım Adım 2026)',
    description: 'Gençlik ve Spor Bakanlığı (GSB) KYK burs ve öğrenim kredisi başvuru şartları, e-Devlet başvuru ekranı ve onay taahhütname adımları.',
    categorySlug: 'e-devlet-basvurular',
    authorId: 'author-2',
    publishedAt: '2026-09-28',
    updatedAt: '2026-10-21',
    readTime: '6 dk',
    featured: true,
    trending: true,
    coverImage: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1200&auto=format&fit=crop&q=80',
    tags: ['KYK Bursu', 'e-Devlet', 'Öğrenim Kredisi', 'GSB', 'Üniversite'],
    sources: [
      { title: 'GSB: Burs ve kredi genel bilgileri', url: 'https://kygm.gsb.gov.tr/sayfalar/2441/2390/genel-bilgiler.aspx' },
      { title: 'GSB: Burs ve kredi sıkça sorulan sorular', url: 'https://kygm.gsb.gov.tr/Sayfalar/2446/3200/sikca-sorulan-sorular-kredi-burs.aspx' }
    ],
    content: {
      lead: 'Üniversiteyi yeni kazanan veya ara sınıfta olan yüzbinlerce öğrenci için Gençlik ve Spor Bakanlığı (GSB) KYK burs ve kredi başvuruları büyük önem taşıyor. İşte e-Devlet kapısı üzerinden hatasız başvuru rehberi.',
      sections: [
        {
          id: 'basvuru-oncesi-hazirlik',
          heading: 'KYK Başvurusu Öncesinde Bilmeniz Gerekenler',
          paragraphs: [
            'Burs ve kredi başvuruları her eğitim yılı başında e-Devlet üzerinden alınmaktadır. Başvuru yapabilmek için aktif bir e-Devlet şifrenizin bulunması ve YÖKSİS üzerinde öğrenci bilgilerinizin güncel olması gerekmektedir.',
            'Başvuru sürecinde beyan edilen aile gelir durumu, üzerinize kayıtlı menkul/gayrimenkul bilgileri ve başarı durumu devlet kurumları tarafından otomatik olarak çapraz kontrolden geçirilir.'
          ],
          callout: {
            type: 'warning',
            title: 'Önemli Uyarı',
            message: 'Bilgilerde yapılacak eksik veya yanıltıcı beyanlar başvurunun doğrudan iptal edilmesine ve gelecekteki hakların kaybedilmesine neden olabilir.'
          }
        },
        {
          id: 'adim-adim-basvuru',
          heading: 'e-Devlet Üzerinden KYK Başvurusu Adımları',
          paragraphs: [
            'Aşağıdaki adımları sırasıyla takip ederek başvurunuzu dakikalar içinde tamamlayabilirsiniz:'
          ],
          steps: [
            {
              title: '1. Adım: e-Devlet Sistemine Giriş Yapın',
              description: 'turkiye.gov.tr adresine gidin veya e-Devlet mobil uygulamasını açarak T.C. Kimlik Numaranız ve şifrenizle giriş yapın.'
            },
            {
              title: '2. Adım: Başvuru Hizmetini Arayın',
              description: 'Arama çubuğuna "Gençlik ve Spor Bakanlığı Burs / Öğrenim Kredisi Başvurusu" yazın ve ilgili resmi hizmete tıklayın.'
            },
            {
              title: '3. Adım: Öğrenim ve Kimlik Bilgilerini Doğrulayın',
              description: 'Ekrana gelen üniversite, fakülte, bölüm ve sınıf bilgilerinizi dikkatlice kontrol edin. Yanlışlık varsa üniversite öğrenci işleriyle görüşün.'
            },
            {
              title: '4. Adım: Sosyo-Ekonomik Bilgileri Doldurun',
              description: 'Ailenizin ikamet durumu, çalışan fertler, aylık hane geliri ve özel durum (şehit/gazi yakını, engellilik vb.) bilgilerini işaretleyin.'
            },
            {
              title: '5. Adım: Başvuruyu Onaylayın ve Çıktısını Saklayın',
              description: 'Tüm aşamaları geçtikten sonra "Başvuruyu Tamamla" butonuna basın. Başvuru takip numaranızı bir yere kaydedin.'
            }
          ]
        },
        {
          id: 'sonuclar-ve-taahhutname',
          heading: 'Sonuçların İlanı ve Taahhütname Onayı',
          paragraphs: [
            'Başvuru sonuçları GSB tarafından açıklandıktan sonra burs veya kredi almaya hak kazanan öğrencilerin mutlaka e-Devlet üzerinden Taahhütname Onayı yapmaları gerekir.',
            '18 yaşından küçük öğrenciler için taahhütname onayı önce veli/vasi tarafından e-Devlet kapısından verilmeli, ardından öğrencinin kendisi onaylamalıdır.'
          ],
          callout: {
            type: 'tip',
            title: 'Pratik İpucu',
            message: 'Taahhütname onayını belirtilen süre içinde yapmayan öğrencilerin burs/kredi hakları yanmaktadır. Tarihleri yakından takip edin.'
          }
        }
      ]
    },
    faqs: [
      {
        question: 'KYK Bursu ile Öğrenim Kredisi arasındaki fark nedir?',
        answer: 'KYK bursu karşılıksız olup mezuniyet sonrası geri ödenmez. Öğrenim kredisi ise devlete borçlanılan ve mezuniyetten iki yıl sonra taksitler halinde geri ödenen maddi destektir.'
      },
      {
        question: 'Özel burs alan biri KYK bursu alabilir mi?',
        answer: 'Vakıf veya derneklerden özel burs almanız KYK bursu almanıza engel değildir; ancak başka bir kamu kurumundan burs alıyorsanız KYK bursu kesilebilir.'
      },
      {
        question: 'KYK burs başvurusu için e-Devlet şifresi nereden alınır?',
        answer: 'e-Devlet şifresi edinme koşulları ve varsa ücret bilgisi değişebilir. PTT veya e-Devlet Kapısı üzerinden güncel açıklamayı kontrol edin.'
      }
    ]
  },
  {
    id: 'post-2',
    slug: 'e-devlet-uzerinden-ikametgah-adresi-degistirme-rehberi',
    title: 'e-Devlet Üzerinden İkametgah (Adres) Değişikliği Nasıl Yapılır?',
    description: 'Nüfus müdürlüğüne gitmeden e-Devlet ve mobil imza/SMS doğrulaması ile yerleşim yeri adresi bildirimi yapma rehberi.',
    categorySlug: 'e-devlet-basvurular',
    authorId: 'author-1',
    publishedAt: '2026-09-25',
    updatedAt: '2026-10-21',
    readTime: '5 dk',
    featured: false,
    trending: true,
    coverImage: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&auto=format&fit=crop&q=80',
    tags: ['İkametgah', 'Adres Değişikliği', 'Nüfus Müdürlüğü', 'NVİ', 'e-Devlet'],
    sources: [
      { title: 'NVİ: e-Devlet işlemleri', url: 'https://nvi.gov.tr/e-dogrulamalar' },
      { title: 'e-Devlet: Adres değişikliği bildirimi', url: 'https://www.turkiye.gov.tr/nvi-adres-degisikligi-bildirimi' }
    ],
    content: {
      lead: 'Yeni bir adrese taşındığınızda adres bildiriminizi Nüfus ve Vatandaşlık İşleri Genel Müdürlüğünün (NVİ) kurallarına göre yapmanız gerekir. e-Devlet üzerinden bildirim her durum için açık olmayabilir; işlem öncesinde güncel koşulları kontrol edin.',
      sections: [
        {
          id: 'kimler-yapabilir',
          heading: 'Kimler e-Devlet’ten Adres Bildirimi Yapabilir?',
          paragraphs: [
            'Taşınacağınız konutta şu anda kayıtlı hiç kimse yoksa (boş konut ise) işlemi doğrudan e-Devlet şifresi ve SMS doğrulaması ile yapabilirsiniz.',
            'Eğer taşınacağınız evde halen başka birileri kayıtlı görünüyorsa (örneğin ev arkadaşlığı veya akraba yanı), evde kayıtlı olan kişinin e-Devlet üzerinden size muvafakat vermesi gerekir.'
          ]
        },
        {
          id: 'online-adres-adimlari',
          heading: 'Online Yerleşim Yeri Değişikliği Adımları',
          paragraphs: [
            'Aşağıdaki adımları sırayla izleyin:'
          ],
          steps: [
            {
              title: '1. e-Devlet Adres Değişikliği Sayfasını Açın',
              description: 'Nüfus ve Vatandaşlık İşleri Genel Müdürlüğü "Adres Değişikliği Bildirimi" sayfasına girin.'
            },
            {
              title: '2. Bildirim Türünü Seçin',
              description: '"Sadece kendim için" ya da "Kendim ve aynı konutu paylaştığım aile fertleri için" seçeneğini belirleyin.'
            },
            {
              title: '3. Yeni Adres Bilgilerini Girin',
              description: 'İl, ilçe, mahalle, cadde/sokak, bina no ve kapı no bilgilerini Ulusal Adres Veritabanı (UAVT) listesinden seçin.'
            },
            {
              title: '4. Doğrulama Kodunu Girin',
              description: 'Sistemde kayıtlı cep telefonunuza gelen SMS onay kodunu girerek işlemi tamamlayın.'
            }
          ],
          callout: {
            type: 'info',
            title: 'Yasal Süre',
            message: 'Adres bildirim süresi ve uygulanabilecek yaptırımlar mevzuata göre değişebilir. Güncel bilgi için NVİ ve mevzuat kaynaklarını kontrol edin.'
          }
        }
      ]
    },
    faqs: [
      {
        question: 'İkametgah belgesi e-Devletten nasıl indirilir?',
        answer: '"Yerleşim Yeri (İkametgah) ve Diğer Adres Belgesi Sorgulama" hizmeti üzerinden barkodlu resmi PDF indirebilirsiniz.'
      },
      {
        question: 'Kiracılar için fatura göstermek zorunlu mu?',
        answer: 'Boş konut bildiriminde e-Devlet üzerinden yapıldığında ek fatura istenmez. Sistem adresi otomatik eşleştirir.'
      }
    ]
  },
  {
    id: 'post-3',
    slug: 'sosyal-yardim-basvurusu-e-devlet-sorgulama-adimlari',
    title: 'Sosyal Yardım Başvurusu ve Sorgulama e-Devlet Adımları',
    description: 'Aile ve Sosyal Hizmetler Bakanlığı elektrik tüketim desteği, aile destek paketi ve nakdi yardım başvuru rehberi.',
    categorySlug: 'e-devlet-basvurular',
    authorId: 'author-1',
    publishedAt: '2026-09-15',
    updatedAt: '2026-09-29',
    readTime: '5 dk',
    featured: false,
    trending: false,
    coverImage: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=1200&auto=format&fit=crop&q=80',
    tags: ['Sosyal Yardım', 'Aile Destek', 'e-Devlet', 'Bakanlık'],
    sources: [
      { title: 'e-Devlet: Sosyal yardım başvuru hizmeti', url: 'https://www.turkiye.gov.tr/ashb-sosyal-yardim-basvuru-hizmeti' },
      { title: 'Aile ve Sosyal Hizmetler Bakanlığı', url: 'https://www.aile.gov.tr/sygm/' }
    ],
    content: {
      lead: 'Devletin ihtiyaç sahibi ailelere sağladığı nakdi destekler ve sosyal yardımlar için e-Devlet üzerinden kolayca başvuru yapılabilmektedir.',
      sections: [
        {
          id: 'yardim-turleri',
          heading: 'Başvurulabilecek Sosyal Yardım Programları',
          paragraphs: [
            'Yardım programları, başvuru dönemleri ve koşulları zaman içinde değişebilir. Eski haberlerde veya başka rehberlerde adı geçen bir desteğin hâlen açık olduğunu varsaymayın; e-Devlet başvuru ekranında listelenen güncel programı ve koşullarını inceleyin.'
          ]
        },
        {
          id: 'basvuru-yapma',
          heading: 'Sosyal Yardım Başvuru Ekranı',
          paragraphs: [
            'e-Devlet’te "Sosyal Yardım Başvuru Hizmeti"ni arayın. Başvuruyu kendi hesabınızdan açın, ekrandaki bilgilendirmeyi okuyun ve yalnızca sorulan bilgileri doğru biçimde doldurun. Başvuruyu gönderdikten sonra ekrandaki takip bilgilerini saklayın ve durumu aynı hizmetten kontrol edin.',
            'Başvurunun gönderilmesi yardımın kesin olarak bağlanacağı anlamına gelmez. Değerlendirme, ilgili programın koşullarına ve yetkili vakfın incelemesine göre yapılır.'
          ]
        }
      ]
    },
    faqs: [
      {
        question: 'Sosyal yardım başvurusu ne kadar sürede sonuçlanır?',
        answer: 'Değerlendirme süresi yardım programına ve başvuru yoğunluğuna göre değişir. Başvurunuzun durumunu e-Devlet’teki ilgili hizmetten veya bağlı olduğunuz Sosyal Yardımlaşma ve Dayanışma Vakfından takip edin.'
      }
    ]
  },
  {
    id: 'post-4',
    slug: 'whatsapp-kaybolan-mesajlar-ve-medya-gizliligi-ayarlari',
    title: 'WhatsApp Kaybolan Mesajlar ve Medya Gizliliği Ayarları Rehberi',
    description: 'WhatsApp üzerinde gönderdiğiniz fotoğrafların kaydedilmesini önleme, mesajların 24 saatte silinmesi ve gizlilik güvenlik kalkanı.',
    categorySlug: 'teknoloji-mobil',
    authorId: 'author-1',
    publishedAt: '2026-10-01',
    updatedAt: '2026-10-21',
    readTime: '4 dk',
    featured: true,
    trending: false,
    coverImage: 'https://images.unsplash.com/photo-1614680376593-902f749f7ffc?w=1200&auto=format&fit=crop&q=80',
    tags: ['WhatsApp', 'Gizlilik', 'Akıllı Telefon', 'Android', 'iOS'],
    sources: [
      { title: 'WhatsApp Yardım Merkezi: Kaybolan mesajlar', url: 'https://faq.whatsapp.com/673193694148537/' },
      { title: 'WhatsApp Yardım Merkezi', url: 'https://faq.whatsapp.com/' }
    ],
    content: {
      lead: 'Kişisel verilerinizi korumak ve sohbetlerinizin başkalarının eline geçmesini engellemek için WhatsApp gizlilik özelliklerini doğru yapılandırmanız şarttır.',
      sections: [
        {
          id: 'kaybolan-mesajlar-nasil-acilir',
          heading: 'Kaybolan Mesajlar Özelliğini Etkinleştirme',
          paragraphs: [
            'WhatsApp kaybolan mesajlar özelliği sayesinde belirlediğiniz sürenin (24 saat, 7 gün veya 90 gün) ardından gönderilen mesajlar otomatik olarak sohbetten silinir.',
            'Bu ayarı tek bir sohbet için veya tüm yeni sohbetler için varsayılan olarak ayarlayabilirsiniz.'
          ],
          steps: [
            {
              title: '1. Sohbet veya Grup Bilgisine Girin',
              description: 'Mesajlaştığınız kişinin veya grubun adına dokunarak profil detaylarını açın.'
            },
            {
              title: '2. "Süreli Mesajlar" Seçeneğini Seçin',
              description: 'Aşağı kaydırarak "Süreli Mesajlar / Kaybolan Mesajlar" başlığına tıklayın.'
            },
            {
              title: '3. Süreyi Belirleyin',
              description: '24 saat, 7 gün veya 90 gün seçeneklerinden birini seçin.'
            }
          ]
        },
        {
          id: 'tek-seferlik-goruntuleme',
          heading: 'Bir Kez Görüntülenen Medya ve Ekran Görüntüsü Engeli',
          paragraphs: [
            'Hassas bir fotoğraf veya video gönderirken metin kutusundaki "1" simgesine basarak tek seferlik görüntüleme modunu aktif hale getirebilirsiniz.',
            'Karşı taraf bu medyayı galerisine kaydedemez ve ekran görüntüsü alamaz.'
          ]
        }
      ]
    },
    faqs: [
      {
        question: 'Kaybolan mesajlar silinmeden önce yedeklenirse ne olur?',
        answer: 'Mesaj süresi dolmadan önce yapılan yedeklemelerde yer alır; ancak yedek geri yüklendiğinde mesajın süresi dolmuşsa doğrudan silinir.'
      }
    ]
  },
  {
    id: 'post-5',
    slug: 'iphone-ve-android-pil-omrunu-uzatma-yontemleri',
    title: 'iPhone ve Android’de Pil Tüketimini Azaltmaya Yardımcı Ayarlar',
    description: 'Telefon şarjınızın çabuk bitmesini önleyin: Arka plan yenilemeleri, ekran parlaklığı, şarj döngüsü ve pil sağlığı koruma teknikleri.',
    categorySlug: 'teknoloji-mobil',
    authorId: 'author-3',
    publishedAt: '2026-09-20',
    updatedAt: '2026-10-21',
    readTime: '6 dk',
    featured: false,
    trending: true,
    coverImage: 'https://images.unsplash.com/photo-1511707171634-5f897ff02597?w=1200&auto=format&fit=crop&q=80',
    tags: ['Pil Sağlığı', 'Batarya', 'iPhone', 'Samsung', 'Şarj'],
    sources: [
      { title: 'Apple: iPhone pilinin daha çabuk bitmesi', url: 'https://support.apple.com/en-euro/120745' },
      { title: 'Google Pixel Yardım', url: 'https://support.google.com/pixelphone/' }
    ],
    content: {
      lead: 'Akıllı telefon bataryaları zamanla kimyasal olarak yıpranır. Ekran, bağlantı ve arka plan etkinliklerini gözden geçirmek günlük tüketimi azaltabilir; elde edilecek fark kullanım alışkanlığına ve cihaza göre değişir.',
      sections: [
        {
          id: 'temel-ayarlar',
          heading: 'Pil Tüketen Kritik Ayarları Kapatın',
          paragraphs: [
            'Önce Ayarlar > Pil bölümündeki kullanım dökümünü inceleyin. Ekran, sinyal gücü, oyun ve video gibi etkenlerin tüketimi cihaz ve kullanıma göre farklılaşır.',
            'Konum erişimini uygulama bazında gözden geçirin; sürekli konum gerekmeyen uygulamalara "uygulamayı kullanırken" izni vermek gizliliği de destekler. Menü adları Android üreticisine ve iOS sürümüne göre değişebilir.'
          ]
        },
        {
          id: 'sarj-ve-isi',
          heading: 'Şarj Alışkanlığı ve Isı',
          paragraphs: [
            'Her telefon için geçerli, pil ömrünü iki katına çıkaran sabit bir yüzde kuralı yoktur. Aşırı sıcak pil sağlığını olumsuz etkileyebilir; cihazı sıcak ortamda bırakmamaya ve üreticinin şarj önerilerini izlemeye çalışın.',
            'Desteklenen iPhone modellerinde İyileştirilmiş Pil Şarjı veya şarj sınırı özellikleri pilin uzun süre tam dolu kalmasını azaltabilir. Android’de benzer özelliklerin adı ve kullanılabilirliği üreticiye göre değişir.'
          ],
          callout: {
            type: 'tip',
            title: 'Cihazınızın ayarlarını kontrol edin',
            message: 'Pil sağlığı ve şarj ayarlarının adını, modelinize ait üretici destek sayfasından doğrulayın.'
          }
        }
      ]
    },
    faqs: [
      {
        question: 'Hızlı şarj pil sağlığını bozar mı?',
        answer: 'Modern şarj cihazları ve telefonlar voltajı akıllıca ayarlar; ancak aşırı ısınma olursa pil sağlığı olumsuz etkilenebilir. Şarj olurken telefonla oyun oynamamaya özen gösterin.'
      }
    ]
  },
  {
    id: 'post-7',
    slug: 'oyunlarda-fps-artirma-ve-gecikme-azaltma-rehberi',
    title: 'PC Oyunlarında FPS Artırma ve Giriş Gecikmesini (Input Lag) Azaltma Rehberi',
    description: 'Windows 11/10 oyun modu, ekran kartı denetim masası ayarları, RAM optimizasyonu ve FPS artırma tüyoları.',
    categorySlug: 'oyun-donanim',
    authorId: 'author-3',
    publishedAt: '2026-10-02',
    updatedAt: '2026-10-21',
    readTime: '7 dk',
    featured: true,
    trending: true,
    coverImage: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1200&auto=format&fit=crop&q=80',
    tags: ['FPS Artırma', 'NVIDIA', 'AMD', 'Oyun', 'Windows 11', 'Donanım'],
    sources: [
      { title: 'Microsoft: Windows 11 pencere modunda oyun iyileştirmeleri', url: 'https://support.microsoft.com/en-us/windows/hardware/display-graphics/optimizations-for-windowed-games-in-windows-11' }
    ],
    content: {
      lead: 'Valorant, CS2, Warzone veya Apex Legends gibi rekabetçi oyunlarda yüksek FPS ve düşük gecikme hayati önem taşır. Donanım değiştirmeden yazılımsal optimizasyon ile FPS değerlerinizi nasıl artırabileceğinizi anlatıyoruz.',
      sections: [
        {
          id: 'windows-ayarlari',
          heading: 'Windows 10 ve Windows 11 Oyun Ayarları',
          paragraphs: [
            'Windows içerisinde yerleşik olarak gelen Oyun Modu ve Donanım Hızlandırmalı GPU Zamanlaması (HAGS) gecikmeyi ciddi oranda düşürür.',
            'Başlat menüsünden "Grafik Ayarları" bölümüne giderek "Donanım Hızlandırmalı GPU Zamanlaması" özelliğini açın ve bilgisayarı yeniden başlatın.'
          ],
          callout: {
            type: 'info',
            title: 'Windows Oyun Modu',
            message: 'Oyun Modu aktif olduğunda Windows, arka plan güncellemelerini ve gereksiz bellek kullanımını sınırlandırarak işlemciyi oyuna tahsis eder.'
          }
        },
        {
          id: 'ekran-karti-optimizasyonu',
          heading: 'NVIDIA ve AMD Denetim Masası İnce Ayarları',
          paragraphs: [
            'Ekran kartı sürücünüzün ayarlarından performansı maksimize edebilirsiniz:'
          ],
          steps: [
            {
              title: '1. Güç Yönetimi Modunu Seçin',
              description: 'NVIDIA Denetim Masası > 3D Ayarlarının Yönetilmesi > Güç Yönetimi Modu kısmını "Maksimum Performansı Tercih Et" yapın.'
            },
            {
              title: '2. Düşük Gecikme Oranı (Low Latency Mode)',
              description: 'Rekabetçi FPS oyunlarında gecikmeyi en aza indirmek için "Ultra" veya "Açık" olarak ayarlayın.'
            },
            {
              title: '3. DSR ve Kenar Yumuşatma Ayarları',
              description: 'Gereksiz çözünürlük ölçeklendirme ayarlarını kapatarak saf çözünürlükte çalışmasını sağlayın.'
            }
          ]
        },
        {
          id: 'sicaklik-ve-termal-darbogaz',
          heading: 'Sıcaklık ve Termal Darboğaz Kontrolü',
          paragraphs: [
            'Eğer işlemciniz (CPU) veya ekran kartınız (GPU) 85-90 derecenin üzerine çıkıyorsa sistem kendini korumak için saat hızlarını düşürür (Thermal Throttling). Düzenli fan temizliği ve termal macun yenilemesi FPS düşüşlerini önler.'
          ]
        }
      ]
    },
    faqs: [
      {
        question: 'XMP / EXPO açmak FPS artırır mı?',
        answer: 'Evet! BIOS üzerinden RAM XMP profilini açtığınızda RAM belleğiniz fabrika çıkışındaki en yüksek frekansta çalışır ve %10-20 arasında FPS artışı sağlayabilir.'
      },
      {
        question: 'V-Sync açık mı olmalı kapalı mı?',
        answer: 'V-Sync görüntü yırtılmasını azaltabilir, ancak gecikme ve performans etkisi sisteme ve oyuna göre değişir. V-Sync, G-Sync veya FreeSync ayarlarını oyunda deneyerek kendi sisteminizdeki gecikme ve görüntü kalitesini karşılaştırın.'
      }
    ]
  },
  {
    id: 'post-8',
    slug: 'ekran-karti-surucu-guncelleme-ve-temiz-kurulum-rehberi',
    title: 'Ekran Kartı Sürücü Güncelleme ve DDU ile Temiz Kurulum Rehberi',
    description: 'NVIDIA, AMD ve Intel grafik sürücüsü nasıl güncellenir? DDU (Display Driver Uninstaller) ile çökmeleri önleme kılavuzu.',
    categorySlug: 'oyun-donanim',
    authorId: 'author-3',
    publishedAt: '2026-09-18',
    updatedAt: '2026-09-30',
    readTime: '5 dk',
    featured: false,
    trending: false,
    coverImage: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=1200&auto=format&fit=crop&q=80',
    tags: ['Ekran Kartı', 'DDU', 'Sürücü', 'NVIDIA', 'AMD'],
    sources: [
      { title: 'Microsoft: Windows sürücü güncellemeleri', url: 'https://support.microsoft.com/en-us/windows/hardware/drivers/automatically-get-recommended-and-updated-hardware-drivers' },
      { title: 'NVIDIA sürücü indirmeleri', url: 'https://www.nvidia.com/Download/index.aspx' },
      { title: 'AMD sürücü ve destek', url: 'https://www.amd.com/en/support/download/drivers.html' }
    ],
    content: {
      lead: 'Eski sürücü kalıntıları mavi ekran hatalarına ve oyun içi ani takılmalara (stuttering) yol açabilir. DDU programı ile sıfırdan temiz kurulum yapmanın adımları.',
      sections: [
        {
          id: 'temiz-kurulum-adimlari',
          heading: 'Güvenli Modda DDU Kullanımı',
          paragraphs: [
            'Önce Windows Update veya ekran kartı üreticisinin resmi kurulum aracını kullanın. DDU üçüncü taraf bir sürücü kaldırma aracıdır; yalnızca normal kaldırma ve yeniden kurulum sorunu çözmezse, aracın kendi talimatlarını okuyup geri dönüş için gerekli sürücüyü önceden indirerek değerlendirin.'
          ]
        }
      ]
    },
    faqs: [
      {
        question: 'DDU kullanmak tehlikeli midir?',
        answer: 'DDU üçüncü taraf yazılımdır ve sürücüleri kaldırır; yanlış kullanım görüntü sorunlarına yol açabilir. Önce üreticinin önerdiği kurulum/kaldırma yöntemini izleyin ve DDU kullanmanız gerekiyorsa aracın güncel talimatlarını dikkatle uygulayın.'
      }
    ]
  },
  {
    id: 'post-9',
    slug: 'steam-oyun-acilmiyor-hatasi-kesin-cozum-yollari',
    title: 'Steam Oyunu Açılmıyorsa Kontrol Edilebilecek Çözüm Adımları',
    description: 'Steam başlatılıyor diyor ama oyun açılmıyor mu? Dosya bütünlüğü doğrulama, DirectX ve Visual C++ onarım adımları.',
    categorySlug: 'oyun-donanim',
    authorId: 'author-3',
    publishedAt: '2026-09-05',
    updatedAt: '2026-09-24',
    readTime: '4 dk',
    featured: false,
    trending: false,
    coverImage: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1200&auto=format&fit=crop&q=80',
    tags: ['Steam', 'Oyun Hatası', 'Çözüm', 'Windows'],
    sources: [
      { title: 'Steam: Oyun dosyalarının bütünlüğünü doğrulama', url: 'https://help.steampowered.com/en/faqs/view/0C48-FCBD-DA71-93EB' },
      { title: 'Steam: Oyun başlatılamıyor', url: 'https://help.steampowered.com/en/faqs/view/5814-D9A3-BE42-62DF' }
    ],
    content: {
      lead: 'Steam üzerinde oyunu başlattığınızda "Çalışıyor" dedikten sonra hemen kapanıyorsa sorunun kaynağı çoğunlukla eksik kütüphane dosyaları veya bozuk oyun dosyalarıdır.',
      sections: [
        {
          id: 'dosya-dogrulama',
          heading: 'Oyun Dosyalarının Bütünlüğünü Doğrulama',
          paragraphs: [
            'Steam kütüphanenizde oyuna sağ tıklayıp Özellikler > Yüklü Dosyalar > "Oyun dosyalarının bütünlüğünü doğrula" butonuna basarak eksik veya hasarlı dosyaları yeniden indirin.'
          ]
        }
      ]
    },
    faqs: [
      {
        question: 'Visual C++ Redistributable paketlerini nereden indirebilirim?',
        answer: 'Microsoft resmi destek sayfasından 2015-2022 All-in-One x64 ve x86 paketlerini indirip onarım yapabilirsiniz.'
      }
    ]
  },
  {
    id: 'post-10',
    slug: 'yks-calisma-programi-hazirlama-ve-net-artirma-taktikleri',
    title: 'YKS Çalışma Programı Hazırlama ve Net Artırma Taktikleri (TYT-AYT)',
    description: 'Haftalık ders dağılımı, konu tekrarları, deneme analizi ve çalışma süresini gerçekçi biçimde planlama önerileri.',
    categorySlug: 'egitim-sinavlar',
    authorId: 'author-2',
    publishedAt: '2026-09-26',
    updatedAt: '2026-10-22',
    readTime: '8 dk',
    featured: true,
    trending: true,
    coverImage: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1200&auto=format&fit=crop&q=80',
    tags: ['YKS', 'TYT', 'AYT', 'ÖSYM', 'Ders Çalışma', 'Deneme'],
    sources: [
      { title: 'ÖSYM: Sınav duyuruları ve kılavuzlar', url: 'https://www.osym.gov.tr/' }
    ],
    content: {
      lead: 'Yükseköğretim Kurumları Sınavı’na (YKS) hazırlanırken sadece saatlerce masa başında oturmak yeterli değildir. Başarının anahtarı stratejik planlama, eksik odaklı çalışma ve doğru deneme analizinden geçer.',
      sections: [
        {
          id: 'haftalik-plan',
          heading: 'Haftalık Dengeli Çalışma Programı Oluşturma',
          paragraphs: [
            'Günde 5 farklı ders çalışmak yerine zihninizi odaklayacak blok çalışma sistemlerini tercih edin. Örneğin Pazartesi ve Çarşamba günlerini Matematik ve Türkçe ağırlıklı, Salı ve Perşembe günlerini Fen ve Sosyal ağırlıklı planlayabilirsiniz.',
            'Pomodoro tekniği (50 dk çalışma + 10 dk mola) odaklanma sürenizi ve bilginin akılda kalıcılığını artırır.'
          ],
          callout: {
            type: 'tip',
            title: 'Altın Kural',
            message: 'Konuları bitirdikten sonra hemen soru çözümüne geçmeyin; önce formülleri ve temel kavramları bir kağıda kendi cümlelerinizle özetleyin.'
          }
        },
        {
          id: 'ornek-haftalik-plan',
          heading: 'Örnek Haftalık Planı Kendi Durumunuza Uyarlayın',
          paragraphs: [
            'Aşağıdaki şablon sabit bir başarı reçetesi değildir; okul saatlerinize, alanınıza ve eksiklerinize göre değiştirin. Her çalışma bloğuna konu tekrarı, soru çözümü ve yanlış analizi için ayrı zaman ayırın.',
            'Pazartesi: matematik konu tekrarı ve soru çözümü. Salı: Türkçe/paragraf ve alan dersi. Çarşamba: fen veya sosyal konu çalışması. Perşembe: önceki günlerin yanlışlarını yeniden çözme. Cuma: eksik kalan konu ve kısa karma test. Cumartesi: süre tutarak deneme. Pazar: deneme analizi ve sonraki haftanın planı.'
          ]
        },
        {
          id: 'deneme-analizi',
          heading: 'Netleri Zirveye Taşıyan: Deneme Analizi Defteri',
          paragraphs: [
            'Çözülen her TYT ve AYT denemesinden sonra yapılan en büyük hata sadece doğru/yanlış sayısına bakıp geçmektir. Netleri artıran asıl aşama deneme sonrasıdır:'
          ],
          steps: [
            {
              title: '1. Yanlış ve Boş Soruları Kesip Ayırın',
              description: 'Yapamadığınız her soruyu özel bir soru defterine yapıştırın veya dijital olarak arşivleyin.'
            },
            {
              title: '2. Hatanın Nedenini Tespit Edin',
              description: 'Hata bilgi eksikliğinden mi, dikkat dağınıklığından mı yoksa zaman yetersizliğinden mi kaynaklandı?'
            },
            {
              title: '3. Çözümü Öğrenip 1 Hafta Sonra Tekrar Çözün',
              description: 'Öğretmeninize veya video çözüme baktıktan 7 gün sonra aynı soruyu hiçbir yere bakmadan baştan çözün.'
            }
          ]
        },
        {
          id: 'ayt-ye-ne-zaman-baslanmali',
          heading: 'AYT Çalışmalarına Ne Zaman Başlanmalı?',
          paragraphs: [
            'AYT’ye başlama zamanı öğrencinin hedefi, alanı ve mevcut konu durumuna göre değişir. TYT ve AYT çalışmalarını birlikte planlayıp haftalık deneme sonuçlarına göre süreleri yeniden ayarlamak daha esnek bir yaklaşım sağlar.'
          ]
        }
      ]
    },
    faqs: [
      {
        question: 'Günde kaç soru çözülmeli?',
        answer: 'Önemli olan çözülen soru sayısı değil, çözülen soruların niteliğidir. Anlaşılmadan çözülen 200 soru yerine, analiz edilen 70 soru çok daha faydalıdır.'
      },
      {
        question: 'Paragraf çözmeye ne zaman başlanmalı?',
        answer: 'Sınava hazırlığın ilk gününden son gününe kadar her gün düzenli olarak 20-30 paragraf sorusu çözülmelidir.'
      }
    ]
  },
  {
    id: 'post-11',
    slug: 'kpss-puan-turleri-ve-kadro-dagilimi-kapsamli-rehber',
    title: 'KPSS Puan Türleri ve Kadro Dağılımı Kapsamlı Rehber (P1, P2, P3, P93, P94)',
    description: 'Hangi KPSS puanı ile hangi memurluklara başvurulur? Lisans, önlisans ve ortaöğretim kadroları arasındaki farklar.',
    categorySlug: 'egitim-sinavlar',
    authorId: 'author-2',
    publishedAt: '2026-09-12',
    updatedAt: '2026-09-27',
    readTime: '6 dk',
    featured: false,
    trending: false,
    coverImage: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=1200&auto=format&fit=crop&q=80',
    tags: ['KPSS', 'Memuriyet', 'P3 Puanı', 'ÖSYM', 'Atamalar'],
    sources: [
      { title: 'ÖSYM: KPSS duyuruları ve kılavuzlar', url: 'https://www.osym.gov.tr/' },
      { title: 'Kariyer Kapısı Kamu İşe Alım Platformu', url: 'https://kariyerkapisi.gov.tr/isealim' }
    ],
    content: {
      lead: 'KPSS sınavına giren adayların en çok kafa karışıklığı yaşadığı konuların başında puan türleri gelir. Hangi meslek için hangi puan türünün gerektiğine yakından bakalım.',
      sections: [
        {
          id: 'puan-turleri',
          heading: 'Temel KPSS Puan Türleri ve Anlamları',
          paragraphs: [
            'Puan türü; öğrenim düzeyine, sınav oturumuna ve başvurulan kadronun özel koşullarına göre değişir. P3, P93 ve P94 farklı öğrenim düzeylerinde kullanılan puan türleridir; her ilanın kabul ettiği puan türünü ve taban puan şartını ilgili ÖSYM tercih kılavuzundan veya kurum ilanından doğrulayın.'
          ]
        }
      ]
    },
    faqs: [
      {
        question: 'KPSS puanı kaç yıl geçerlidir?',
        answer: 'Puan geçerlilik süresi sınav türü ve ilgili yerleştirme kılavuzuna göre belirlenir. Başvuru yapacağınız dönem için ÖSYM kılavuzunu ve kurum ilanını kontrol edin.'
      }
    ]
  },
  {
    id: 'post-12',
    slug: 'universite-kayit-icin-gerekli-belgeler-ve-e-kayit-adimlari',
    title: 'Üniversite Kayıt İçin Gerekli Belgeler ve e-Kayıt Adımları',
    description: 'YKS tercih sonuçları sonrası e-Devlet üzerinden üniversiteye elektronik kayıt (e-kayıt) yapma ve gerekli evraklar listesi.',
    categorySlug: 'egitim-sinavlar',
    authorId: 'author-2',
    publishedAt: '2026-08-20',
    updatedAt: '2026-09-15',
    readTime: '5 dk',
    featured: false,
    trending: false,
    coverImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1200&auto=format&fit=crop&q=80',
    tags: ['Üniversite Kayıt', 'e-Kayıt', 'e-Devlet', 'Öğrenci Belgesi'],
    sources: [
      { title: 'e-Devlet Kapısı', url: 'https://www.turkiye.gov.tr/' },
      { title: 'YÖK: Yükseköğretim Kurulu', url: 'https://www.yok.gov.tr/' }
    ],
    content: {
      lead: 'Üniversiteye yerleşen adaylar için e-Kayıt seçeneği açılmış olabilir; kayıt yöntemi programa ve üniversiteye göre değişir. Kayıt ekranındaki duyuruyu ve yerleştiğiniz üniversitenin kayıt takvimini birlikte kontrol edin.',
      sections: [
        {
          id: 'e-kayit-nasil-yapilir',
          heading: 'e-Kayıt Yapma Adımları',
          paragraphs: [
            'e-Devlet’e giriş yaptıktan sonra "Üniversite E-Kayıt" hizmetinde yerleştiğiniz programın görünüp görünmediğini kontrol edin. Ekrandaki bilgileri doğrulayıp işlem adımlarını tamamlayın; oluşan barkodlu belgeyi indirin ve kayıt durumunuzu tekrar kontrol edin. Hizmette programınız görünmüyorsa veya hata alıyorsanız üniversitenizin öğrenci işleriyle iletişime geçin.'
          ]
        }
      ]
    },
    faqs: [
      {
        question: 'e-Kayıt yaptıktan sonra üniversiteye gitmek gerekir mi?',
        answer: 'Bu durum üniversitenin ve programın kayıt duyurusuna bağlıdır. e-Kayıt tamamlandıktan sonra ayrıca belge teslimi veya yüz yüze işlem gerekip gerekmediğini üniversitenizin güncel duyurusundan doğrulayın.'
      }
    ]
  },
  {
    id: 'post-13',
    slug: 'evde-pratik-leke-cikarma-ve-temizlik-tuyolari',
    title: 'Evde Pratik Leke Çıkarma ve Temizlik Tüyoları (Kahve, Yağ, Mürekkep)',
    description: 'Kıyafet ve halılardaki zorlu lekeleri kumaşa zarar vermeden karbonat, beyaz sirke ve doğal yöntemlerle çıkarma rehberi.',
    categorySlug: 'pratik-bilgiler',
    authorId: 'author-1',
    publishedAt: '2026-09-19',
    updatedAt: '2026-10-21',
    readTime: '5 dk',
    featured: true,
    trending: false,
    coverImage: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1200&auto=format&fit=crop&q=80',
    tags: ['Temizlik', 'Pratik Bilgiler', 'Leke Çıkarma', 'Ev Yaşam'],
    content: {
      lead: 'Halıya dökülen kahve veya beyaz gömleğe sıçrayan yağ lekesi artık kabus olmak zorunda değil. Kimyasal ağartıcılara gerek kalmadan evdeki malzemelerle leke çıkarma yöntemleri.',
      sections: [
        {
          id: 'yag-lekesi',
          heading: 'Kurumuş Yağ Lekesi Nasıl Çıkar?',
          paragraphs: [
            'Önce fazla yağı temiz, emici bir bezle bastırarak alın. Kumaş bakım etiketini kontrol edin; pudra veya bulaşık deterjanını kullanmadan önce görünmeyen küçük bir alanda deneyin. Uygun görünüyorsa ürünü kısa süre bekletip etikette izin verilen yıkama talimatını uygulayın.'
          ]
        },
        {
          id: 'kahve-ve-cay-lekesi',
          heading: 'Kahve ve Çay Lekelerinde İlk Müdahale',
          paragraphs: [
            'Önce sıvıyı temiz, emici bir bezle dıştan içe doğru tamponlayın. Kumaşın bakım etiketini kontrol edin ve herhangi bir temizleyiciyi görünmeyen alanda deneyin. Hassas kumaşlarda ev karışımları yerine profesyonel temizlik tercih edin.'
          ],
          callout: {
            type: 'warning',
            title: 'Dikkat',
            message: 'Temizlik ürünlerini, özellikle çamaşır suyunu, başka ürünlerle karıştırmayın. Kumaş ve leke türüne göre ısı lekeyi sabitleyebileceğinden bakım etiketindeki talimatı izleyin.'
          }
        }
      ]
    },
    faqs: [
      {
        question: 'Mürekkep lekesine ne iyi gelir?',
        answer: 'Mürekkep türü ve kumaş değiştiği için tek bir yöntem her durumda güvenli değildir. Önce bakım etiketini kontrol edin ve ürünü görünmeyen küçük bir alanda deneyin; hassas kumaşlarda profesyonel temizlik tercih edin.'
      }
    ]
  },
  {
    id: 'post-14',
    slug: 'elektrik-faturasini-dusurmenin-etkili-10-yolu',
    title: 'Elektrik Tüketimini Azaltmak İçin Evde Uygulanabilecek Yöntemler',
    description: 'Bekleme modu, cihaz seçimi ve kullanım alışkanlıklarının elektrik tüketimine etkisini anlamaya yönelik pratik öneriler.',
    categorySlug: 'pratik-bilgiler',
    authorId: 'author-1',
    publishedAt: '2026-09-14',
    updatedAt: '2026-10-22',
    readTime: '5 dk',
    featured: false,
    trending: true,
    coverImage: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1200&auto=format&fit=crop&q=80',
    tags: ['Tasarruf', 'Elektrik Faturası', 'Enerji', 'Pratik Tüyolar'],
    content: {
      lead: 'Elektrik tüketimini azaltmak için önce hangi cihazların ne kadar çalıştığını anlamak, ardından güvenli ve uygulanabilir alışkanlık değişikliklerini denemek gerekir.',
      sections: [
        {
          id: 'bekleme-modu',
          heading: 'Bekleme Modundaki (Standby) Vampir Cihazlar',
          paragraphs: [
            'Bekleme modunda enerji tüketimi cihazın modeline ve ayarlarına göre değişir; her cihazı “vampir tüketici” kabul etmek doğru değildir. Bir cihazın tüketimini öğrenmek için üretici teknik bilgisine veya uygun bir priz tipi enerji ölçere bakın. Çoklu anahtar priz, kullanmadığınız cihazların elektriğini kesmeyi kolaylaştırabilir.'
          ]
        },
        {
          id: 'beyaz-esya-kullanimi',
          heading: 'Çamaşır ve Bulaşık Makinelerinde Doğru Program Seçimi',
          paragraphs: [
            'Düşük sıcaklıkta yıkama, uygun deterjan ve kumaş bakım etiketi elverdiğinde enerji tüketimini azaltabilir. Tasarruf oranı makineye, programa, yük miktarına ve su sıcaklığına göre değişir. Bulaşık makinesinde üreticinin önerdiği Eco programını karşılaştırın.'
          ]
        }
      ]
    },
    faqs: [
      {
        question: 'Üç zamanlı tarife karlı mı?',
        answer: 'Üç zamanlı tarifenin avantajı tüketim saatlerinize ve dağıtım bölgenizde uygulanan güncel saat dilimlerine bağlıdır. Mevcut tarifenizi ve faturanızdaki zaman dilimlerini kontrol etmeden geçiş kararı vermeyin.'
      }
    ]
  },
  {
    id: 'post-15',
    slug: 'pasaport-randevusu-alma-ve-gerekli-evraklar-listesi',
    title: 'Pasaport Randevusu Alma ve Gerekli Evraklar Listesi (2026 Güncel)',
    description: 'Bordo (Umuma Mahsus), Yeşil ve Gri pasaport harç ücretleri, NVİ randevu alma adımları ve biyometrik fotoğraf kuralları.',
    categorySlug: 'pratik-bilgiler',
    authorId: 'author-1',
    publishedAt: '2026-09-08',
    updatedAt: '2026-10-21',
    readTime: '6 dk',
    featured: false,
    trending: false,
    coverImage: 'https://images.unsplash.com/photo-1544717305-2782549b5136?w=1200&auto=format&fit=crop&q=80',
    tags: ['Pasaport', 'NVİ', 'Seyahat', 'Harç Ücretleri', 'Biyometrik'],
    sources: [
      { title: 'NVİ: Pasaport başvurusu', url: 'https://www.nvi.gov.tr/pasaport' },
      { title: 'NVİ randevu sistemi', url: 'https://randevu.nvi.gov.tr/' }
    ],
    content: {
      lead: 'Yurt dışı seyahatleri için pasaport çıkarma veya pasaport yenileme süreçleri Nüfus ve Vatandaşlık İşleri Genel Müdürlüğü üzerinden yürütülmektedir.',
      sections: [
        {
          id: 'evraklar',
          heading: 'Pasaport Başvurusu İçin Gerekli Evraklar',
          paragraphs: [
            'Kimlik kartı, son 6 ayda çekilmiş 1 adet biyometrik fotoğraf, harç ve defter bedeli dekontu ve varsa eski pasaport gereklidir.'
          ]
        },
        {
          id: 'harc-odeme',
          heading: 'Pasaport Harç ve Defter Bedeli Ödeme',
          paragraphs: [
            'Vergi dairesi veya anlaşmalı bankaların internet bankacılığı üzerinden T.C. kimlik numaranızla online ödeme yapabilirsiniz. Makbuz sistemde otomatik görünür.'
          ]
        }
      ]
    },
    faqs: [
      {
        question: 'Öğrenciler pasaport harcından muaf mı?',
        answer: '25 yaşını doldurmamış ve eğitimi devam eden öğrenciler "harçsız öğrenci pasaportu" alabilir; yalnızca defter bedeli öderler.'
      }
    ]
  },
  {
    id: 'post-new-16',
    slug: 'pc-oyunlarinda-takilma-ve-fps-dususu-teshis-rehberi',
    title: 'PC Oyunlarında Takılma ve FPS Düşüşü: Adım Adım Teşhis Rehberi',
    description: 'Oyun içi takılma, anlık FPS düşüşü ve uzun yükleme sorunlarını güvenli sırayla ayırt edip çözmek için ölçülebilir kontrol listesi.',
    categorySlug: 'oyun-donanim',
    authorId: 'author-3',
    publishedAt: '2026-10-22',
    updatedAt: '2026-10-22',
    readTime: '7 dk',
    featured: true,
    trending: false,
    coverImage: 'https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=1200&auto=format&fit=crop&q=80',
    tags: ['PC Oyun', 'FPS', 'Takılma', 'Frametime', 'Performans'],
    sources: [
      { title: 'PCGamingWiki: oyun bazlı hata ve performans notları', url: 'https://www.pcgamingwiki.com/wiki/Home' },
      { title: 'Steam Destek: oyun dosyalarının bütünlüğünü doğrulama', url: 'https://help.steampowered.com/en/faqs/view/0C48-FCBD-DA71-93EB' },
      { title: 'Tom’s Hardware: FPS ölçümü ve performans sayaçları', url: 'https://www.tomshardware.com/how-to/check-fps-windows' },
      { title: 'GamersNexus: FPS ortalaması ve takılma ölçümlerinin farkı', url: 'https://gamersnexus.net/site-news/2513-testing-methodology-explained-1percent-lows-and-delta-t' },
      { title: 'Ars Technica: PC oyunlarında shader derleme ve takılmalar', url: 'https://arstechnica.com/gaming/2026/03/microsoft-is-working-to-eliminate-pc-gamings-compiling-shaders-wait-times/' },
      { title: 'PC Gamer: Shader derleme ekranı ve oyun performansı', url: 'https://www.pcgamer.com/games/the-compiling-shaders-screen-is-the-worst-screen-in-gaming-heres-how-to-make-it-suck-less/' }
    ],
    content: {
      lead: 'Takılma her zaman ekran kartının yetersiz olduğu anlamına gelmez. FPS sayısı, takılmanın ne zaman başladığı ve hangi oyunda görüldüğü birlikte değerlendirildiğinde sorun; shader derleme, sıcaklık, arka plan yükü, oyun dosyası veya ağ gecikmesi olarak ayrıştırılabilir.',
      sections: [
        { id: 'sorunu-tanimla', heading: 'Önce Sorunun Türünü Ayırın', paragraphs: [
          'FPS sürekli düşükse çözünürlük ve grafik ayarları sistem kapasitesini aşıyor olabilir. FPS yüksek görünürken görüntü aralıklı donuyorsa frametime sıçraması, shader derlemesi, veri akışı veya arka plan işi olasılıkları düşünülür. Yalnızca çevrimiçi maçta oyuncular ışınlanıyor ya da komutlar geç işleniyorsa FPS’den çok ping ve paket kaybını kontrol edin.',
          'Aynı sahnede kısa bir test yapın ve değişiklikleri tek tek uygulayın. Her seferinde birkaç ayarı birden değiştirmek hangi adımın etkili olduğunu anlamayı zorlaştırır.'
        ] },
        { id: 'ilk-olcum', heading: 'Aynı Sahneyi Kullanarak Basit Ölçüm Yapın', paragraphs: [
          'Oyunun yerleşik performans göstergesini veya güvenilir bir FPS sayacını açın. Mümkünse ortalama FPS yanında frametime grafiğini de izleyin; tek bir ortalama kısa takılmaları saklayabilir. Karşılaştırma için aynı kayıt, eğitim alanı veya tekrarlanabilir sahneyi kullanın ve test süresini benzer tutun.',
          'Test sırasında sıcaklık ve kullanım değerlerine bakacaksanız üretici yazılımı veya Windows’un araçlarını tercih edin. Bilinmeyen “FPS artırıcı” programları kurmayın; bindirme araçları bazı oyunlarla çakışabileceği için sorun giderirken gereksiz overlay’leri geçici olarak kapatıp tekrar karşılaştırın.'
        ] },
        { id: 'shader-ve-ilk-acilis', heading: 'İlk Açılışta veya Güncellemeden Sonra Takılıyorsa', paragraphs: [
          'Bazı oyunlar ilk çalıştırmada veya grafik sürücüsü/oyun güncellemesinden sonra shader derler. Bu sırada kısa süreli takılma görülebilir. Oyunun menüsünde derleme göstergesi varsa bitmesini bekleyin; tekrar eden takılmaların oyuna özgü bilinen bir sorun olup olmadığını oyunun resmi destek notlarında ve PCGamingWiki’nin ilgili oyun sayfasında kontrol edin.',
          'Shader önbelleğini gelişigüzel silmek sorunu çözmek yerine derlemeyi yeniden başlatabilir. Bu adımı ancak oyunun veya GPU üreticisinin soruna özel talimatı varsa uygulayın.'
        ], callout: { type: 'tip', title: 'İlk testte sabırlı olun', message: 'Sürücü ya da oyun güncellemesinden sonraki ilk açılışı sonraki oturumlarla karşılaştırın; tek seferlik derleme takılmasını kalıcı performans sorunu sanmayın.' } },
        { id: 'guvenli-kontrol-sirasi', heading: 'Güvenli Sorun Giderme Sırası', paragraphs: ['Aşağıdaki basamakları sırayla deneyin; her adımdan sonra aynı sahnede yeniden ölçün:'], steps: [
          { title: 'Oyunu ve bilgisayarı yeniden başlatın', description: 'Geçici takılma veya askıda kalmış işlem olup olmadığını ayırın.' },
          { title: 'Sistem gereksinimlerini ve güç modunu kontrol edin', description: 'Dizüstünde adaptörün bağlı olduğuna, oyunun doğru GPU’yu kullandığına ve güç tasarruf modunun performansı sınırlamadığına bakın.' },
          { title: 'Sıcaklık ve arka plan yükünü gözleyin', description: 'Görev Yöneticisi’nde CPU, GPU, bellek ve disk kullanımına bakın. Isı artarken saat hızları düşüyorsa hava kanallarını kapatmadığınızdan emin olun; cihazı açıp müdahale etmek yerine üretici servisine başvurun.' },
          { title: 'Grafik ayarlarını tek tek düşürün', description: 'Önce ışın izleme, gölge, görüş mesafesi ve doku ayarlarını karşılaştırın. Her değişiklikten sonra aynı sahnede test edin.' },
          { title: 'Oyun dosyalarını doğrulayın', description: 'Steam’de Kütüphane > oyuna sağ tık > Özellikler > Yüklü Dosyalar > Dosyaların bütünlüğünü doğrula yolunu kullanın. İşlem birkaç dakika sürebilir.' },
          { title: 'Güncellemeleri kontrollü uygulayın', description: 'Windows ve ekran kartı sürücülerini resmi kanallardan güncelleyin. Sorun bir sürücü güncellemesinin hemen ardından başladıysa üreticinin geri alma yönergesini izleyin.' }
        ] },
        { id: 'ne-zaman-destek', heading: 'Ne Zaman Oyunun Desteğine Başvurmalı?', paragraphs: [
          'Sorun yalnızca tek oyunda yaşanıyorsa oyun sürümü, hata mesajı, sistem özellikleri ve tekrar üretme adımlarını not edip oyunun resmi destek kanalına iletin. Birden fazla oyunda çökme, görüntü bozulması, yeniden başlama veya mavi ekran varsa donanım ve sürücü incelemesi gerekebilir; rastgele BIOS ayarı değiştirmeyin.',
          'Bu rehber genel teşhis sırası sunar. Her oyunun motoru, sürümü ve bilgisayar bileşenleri farklı olduğundan tek bir ayar tüm sistemlerde aynı sonucu vermez.'
        ] }
      ]
    },
    faqs: [
      { question: 'FPS yüksek ama oyun neden takılıyor?', answer: 'Ortalama FPS kısa frametime sıçramalarını göstermeyebilir. Shader derlemesi, veri yükleme, bellek baskısı veya arka plan işlemlerini aynı sahnede ölçerek ayırın.' },
      { question: 'Oyun dosyalarını doğrulamak kayıt dosyalarımı siler mi?', answer: 'Steam doğrulaması kurulu oyun dosyalarını kontrol eder. Yine de önemli kayıtlar için oyunun bulut kayıt durumunu ve yerel yedekleme bilgisini ayrıca kontrol etmek iyi bir önlemdir.' }
    ]
  },
  {
    id: 'post-new-17',
    slug: 'windows-dizustu-pil-sagligi-battery-report-okuma',
    title: 'Windows Dizüstü Pil Sağlığı: Battery Report Oluşturma ve Okuma',
    description: 'Windows’un yerleşik battery report raporunu üretme, tasarım kapasitesi ile son dolum kapasitesini karşılaştırma ve pil tüketimini inceleme adımları.',
    categorySlug: 'teknoloji-mobil',
    authorId: 'author-1',
    publishedAt: '2026-10-22',
    updatedAt: '2026-10-22',
    readTime: '5 dk',
    featured: false,
    trending: false,
    coverImage: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=1200&auto=format&fit=crop&q=80',
    tags: ['Windows', 'Dizüstü Bilgisayar', 'Pil Sağlığı', 'Battery Report'],
    sources: [
      { title: 'Microsoft Support: Windows’ta pil bakımı ve battery report', url: 'https://support.microsoft.com/en-au/windows/experience/power-battery/caring-for-your-battery-in-windows' }
    ],
    content: {
      lead: 'Dizüstü bilgisayarın şarjı eskisine göre daha çabuk bitiyorsa Windows’un battery report raporu pil kapasitesi ve kullanım geçmişi hakkında başlangıç verisi sağlar. Rapor tek başına arızayı teşhis etmez; kapasiteyi ve kullanım alışkanlığını anlamaya yardımcı olur.',
      sections: [
        { id: 'rapor-olustur', heading: 'Battery Report Nasıl Oluşturulur?', paragraphs: ['Komut İstemi’ni açıp Windows’un yerleşik rapor komutunu çalıştırın. Yönetici yetkisi gerekirse istemi yönetici olarak açın. Raporun kaydedildiği konum komut çıktısında gösterilir.'], steps: [
          { title: 'Başlat menüsünde Komut İstemi’ni arayın', description: 'Windows aramasına Komut İstemi yazın; gerekirse yönetici olarak çalıştırın.' },
          { title: 'Rapor komutunu girin', description: 'powercfg /batteryreport yazıp Enter’a basın.' },
          { title: 'HTML raporunu açın', description: 'Komut çıktısında belirtilen dosya yoluna gidip battery-report.html dosyasını tarayıcıda açın.' }
        ] },
        { id: 'kapasite-karsilastir', heading: 'Design Capacity ve Full Charge Capacity Ne Anlama Gelir?', paragraphs: [
          'Design Capacity pilin tasarlanmış kapasitesini, Full Charge Capacity ise raporun ölçtüğü mevcut tam dolum kapasitesini gösterir. İkinci değer zamanla düşebilir. Yaklaşık sağlık oranı için Full Charge Capacity değerini Design Capacity değerine bölüp 100 ile çarpabilirsiniz; bu yalnızca kabaca karşılaştırma sağlar.',
          'Örnek: tasarım kapasitesi 50.000 mWh, tam dolum kapasitesi 40.000 mWh ise rapor değerleri yaklaşık yüzde 80 oranına karşılık gelir. Üretici ölçüm yöntemi, sıcaklık ve pilin durumu sonucu etkileyebilir; tek ölçümü kesin arıza kararı saymayın.'
        ] },
        { id: 'kullanim-gecmisi', heading: 'Usage History ve Battery Usage Bölümlerini İnceleyin', paragraphs: [
          'Usage History bölümündeki süre ve kapasite kayıtları, pil kullanımının zamanla nasıl değiştiğini görmeye yardımcı olur. Battery Usage yakın dönem tüketimini gösterir. Şarjın hızla düştüğü saatlerde hangi uygulamaların açık olduğunu Windows Ayarları’ndaki güç/pil kullanım ekranıyla birlikte inceleyin.',
          'Eski bir rapor son durumu yansıtmayabilir. Ölçümü karşılaştıracaksanız bilgisayarı normal kullanımda birkaç kez kullanıp raporu yeniden oluşturun ve aynı koşulları not edin.'
        ] },
        { id: 'pil-omru-ve-servis', heading: 'Pil Ömrünü Uzatmak ve Servis Gerektiren Durumlar', paragraphs: [
          'Ekran parlaklığını ihtiyacınıza göre azaltmak, kullanılmayan kablosuz bağlantıları kapatmak ve gereksiz arka plan uygulamalarını sınırlamak tüketimi azaltabilir. Pil şişmesi, kasada açıklık, olağandışı ısınma veya koku fark ederseniz cihazı kullanmayı bırakıp üretici servisinden destek alın; pili delmeyin veya kendiniz sökmeyin.',
          'Şarj kapasitesi belirgin düşmüşse cihaz üreticisinin pil tanılama aracını ve garanti koşullarını kontrol edin. Battery report bir bakım/garanti kararı yerine geçmez.'
        ], callout: { type: 'warning', title: 'Fiziksel pil hasarında', message: 'Şişmiş ya da hasarlı pili kullanmaya devam etmeyin ve kendiniz açmaya çalışmayın; üretici veya yetkili servisten yardım alın.' } }
      ]
    },
    faqs: [
      { question: 'Battery report komutu dosyayı nerede oluşturur?', answer: 'Komut İstemi işlem tamamlandığında dosyanın kaydedildiği yolu yazar. Bu yolu Dosya Gezgini adres çubuğuna yapıştırıp HTML dosyasını açabilirsiniz.' },
      { question: 'Battery report pilin kesin sağlık yüzdesini verir mi?', answer: 'Hayır. Kapasite değerlerinden yaklaşık bir oran hesaplanabilir; ölçüm koşulları ve üretici tanılama yöntemi sonucu etkileyebilir. Kesin servis değerlendirmesi için üreticinin tanılama aracını veya servisini kullanın.' }
    ]
  },
  {
    id: 'post-new-18',
    slug: 'e-devlet-iki-asamali-giris-nasil-acilir',
    title: 'e-Devlet İki Aşamalı Giriş Nasıl Açılır? Güvenlik Rehberi',
    description: 'e-Devlet hesabında iki aşamalı girişi web ve mobil uygulamadan etkinleştirme, telefon doğrulama ve giriş kodu sorunları.',
    categorySlug: 'e-devlet-basvurular',
    authorId: 'author-2',
    publishedAt: '2026-10-22',
    updatedAt: '2026-10-22',
    readTime: '5 dk',
    featured: true,
    trending: false,
    coverImage: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&auto=format&fit=crop&q=80',
    tags: ['e-Devlet', 'Hesap Güvenliği', 'İki Aşamalı Giriş', 'SMS Doğrulama'],
    sources: [
      { title: 'e-Devlet Kapısı: İki aşamalı giriş ayarını açma', url: 'https://www.turkiye.gov.tr/iletisim?hizli=CozumMerkeziV2&nodeId=233' },
      { title: 'e-Devlet Kapısı: İki aşamalı giriş nedir?', url: 'https://www.turkiye.gov.tr/2fa-tanitim' },
      { title: 'e-Devlet Kapısı: Sıkça sorulan sorular', url: 'https://www.turkiye.gov.tr/bilgilendirme?konu=sikcaSorulanlar' }
    ],
    content: {
      lead: 'İki aşamalı giriş, e-Devlet şifresine ek olarak kimlikle doğrulanmış cep telefonuna gönderilen tek kullanımlık kodla oturum açılmasını sağlar. Ayarları yalnızca resmi turkiye.gov.tr sitesi veya resmi mobil uygulama üzerinden yönetin.',
      sections: [
        { id: 'gerekenler', heading: 'Etkinleştirmeden Önce Gerekenler', paragraphs: [
          'e-Devlet Kapısı yardım sayfasına göre hesabınızda kimlikle doğrulanmış, yurt içi bir cep telefonu numarası bulunmalıdır. Numaranız eskiyse önce resmi hesap ayarlarından güncelleyin; başkasına ait numarayı hesabınıza bağlamayın.',
          'SMS kodu hesabın güvenlik adımının parçasıdır. Kodu isteyen arama, mesaj veya bağlantılara karşı dikkatli olun; e-Devlet çalışanı olduğunu söyleyen kişilere doğrulama kodunuzu paylaşmayın.'
        ] },
        { id: 'webden-acma', heading: 'Tarayıcıdan İki Aşamalı Girişi Açma', paragraphs: ['Resmi adresi kendiniz yazarak açın ve hesabınıza giriş yaptıktan sonra şu yolu izleyin:'], steps: [
          { title: 'Güvenlik ayarlarına gidin', description: 'Hesap menüsündeki Güvenlik ve Ayarlar / Şifre ve Güvenlik Ayarlarım sayfasını açın.' },
          { title: 'İki Aşamalı Giriş İşlemleri’ni seçin', description: 'İki aşamalı giriş alanında Aktif seçeneğini işaretleyip kullanım şartlarını okuyun ve onay kutusunu seçin.' },
          { title: 'Ayarı kaydedin', description: 'Ayarları Kaydet düğmesine basın. Kimlikle doğrulanmış telefonunuza gelen SMS kodunu ekrana girin.' },
          { title: 'Doğrulamayı tamamlayın', description: 'Doğrula düğmesine bastıktan sonra ayarın etkin olduğunu aynı ekrandan kontrol edin.' }
        ] },
        { id: 'uygulamadan-acma', heading: 'Mobil Uygulamadan Etkinleştirme', paragraphs: [
          'Resmi e-Devlet Kapısı uygulamasında hesabınıza giriş yapın. Profilim > Ayarlar > İki Aşamalı Giriş İşlemleri bölümüne gidin, kullanım şartlarını onaylayıp İki Aşamalı Girişi Aç düğmesine dokunun ve kayıtlı telefonunuza gelen kodu doğrulayın. Uygulama sürümüne göre menü adı veya yeri değişebilir; ekrandaki güncel resmi yönlendirmeyi izleyin.'
        ] },
        { id: 'sorun-giderme', heading: 'SMS Kodu Gelmiyor veya Girişte Sorun Çıkıyorsa', paragraphs: [
          'Önce telefonda sinyal bulunduğunu, numaranın doğru ve kimlikle doğrulanmış olduğunu kontrol edin. Kısa süre bekleyip yeniden kod isteme seçeneği varsa yalnızca resmi giriş sayfasındaki işlemi kullanın. Numara değiştiyse veya hesabınıza erişemiyorsanız e-Devlet Kapısı’nın resmi iletişim/yardım kanalına başvurun.',
          'Kayıtlı numaraya erişiminiz yokken e-posta ya da arama yoluyla gelen “hesabınızı açalım” tekliflerine güvenmeyin. Şifrenizi ve SMS kodunu kimseyle paylaşmayın; adres çubuğunda turkiye.gov.tr alan adını kontrol edin.'
        ], callout: { type: 'warning', title: 'Doğrulama kodunu paylaşmayın', message: 'Tek kullanımlık SMS kodu hesabınıza giriş izni verebilir. Resmi giriş ekranı dışında hiçbir kişi veya siteyle paylaşmayın.' } },
        { id: 'kapatma-ve-yedek', heading: 'Telefonunuza Erişiminiz Kesilirse', paragraphs: [
          'İki aşamalı giriş ayarını değiştirme veya kapatma işlemlerini yalnızca e-Devlet’in kendi güvenlik ayarlarından yapın. Telefon kaybında önce mobil operatörünüzle hattınızı güvene alın; başka bir cihazdan hesabınıza erişemiyorsanız resmi yardım kanallarını kullanın. Menü ve kurtarma seçenekleri değişebildiği için üçüncü tarafların paylaştığı kodları veya uygulamaları kullanmayın.'
        ] }
      ]
    },
    faqs: [
      { question: 'İki aşamalı giriş için cep telefonu doğrulanmış olmalı mı?', answer: 'e-Devlet Kapısı yardımına göre yurt içinde kimlikle doğrulanmış cep telefonu numarası gerekir.' },
      { question: 'SMS kodumu e-Devlet desteğine iletebilir miyim?', answer: 'Hayır. Tek kullanımlık doğrulama kodunu hiç kimseyle paylaşmayın; işlemi yalnızca resmi giriş ekranında tamamlayın.' }
    ]
  },
  {
    id: 'post-new-19',
    slug: 'steam-cloud-esitleme-cakismasi-kayit-dosyasi-koruma',
    title: 'Steam Cloud Eşitleme Çakışması: Kayıt Dosyanızı Korumak',
    description: 'Steam yerel kayıt ile bulut kaydı uyuşmadığında doğru sürümü seçme, çevrimdışı oturum riskini anlama ve ilerlemeyi koruma adımları.',
    categorySlug: 'oyun-donanim',
    authorId: 'author-3',
    publishedAt: '2026-10-22',
    updatedAt: '2026-10-22',
    readTime: '5 dk',
    featured: true,
    trending: false,
    coverImage: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=1200&auto=format&fit=crop&q=80',
    tags: ['Steam', 'Steam Cloud', 'Oyun Kaydı', 'Eşitleme', 'PC Oyun'],
    sources: [
      { title: 'Steam Destek: Steam Cloud ve çakışma çözümü', url: 'https://help.steampowered.com/en/faqs/view/68D2-35AB-09A9-7678' },
      { title: 'Steam Destek: oyun dosyalarının bütünlüğünü doğrulama', url: 'https://help.steampowered.com/en/faqs/view/0C48-FCBD-DA71-93EB' }
    ],
    content: {
      lead: 'Steam Cloud çakışması, bilgisayardaki kayıtla buluttaki kayıt farklı olduğunda çıkar. Yanlış sürümü seçmek ilerlemenin üzerine yazabilir; önce hangi kaydın son oynadığınız oturuma ait olduğunu belirleyin.',
      sections: [
        { id: 'bulut-kaydi-nasil-calisir', heading: 'Steam Cloud Her Oyunda Aynı Şekilde Çalışmaz', paragraphs: [
          'Steam Cloud, oyuna bağlı olarak kayıt dosyalarını, ayarları veya başka kullanıcı verilerini saklayabilir. Her oyun desteklemez ve hangi dosyaların eşitlendiğini geliştirici belirler. Oyunun mağaza sayfasında Steam Cloud desteğini, oyun özelliklerinde ise eşitleme ayarını kontrol edin.',
          'Çevrimdışı modda oynanan oturum buluta gönderilmeden kalabilir. Son oynadığınız cihazı ve tarihi hatırlamak bu yüzden önemlidir.'
        ] },
        { id: 'cakisma-ekrani', heading: 'Çakışma Ekranında Hangi Kaydı Seçmeli?', paragraphs: [
          'Steam iki farklı sürüm gördüğünde yerel dosya ve bulut kaydının tarih/saat bilgilerini gösterir. En son ilerlemenizi yaptığınız oturumu ve o oturumun hangi cihazda gerçekleştiğini karşılaştırın. Son oynadığınız kayıt yerelse yerel sürüm; başka cihazda buluta gönderildiyse bulut sürümü doğru olabilir. Yalnızca “en yeni görünen” tarihe güvenmeden önce cihaz saatinin doğru olup olmadığını da hesaba katın.',
          'Karar veremiyorsanız oyunu hemen başlatıp seçeneklerden birini seçmeyin. Önce Steam’in resmi yardım yönergesini okuyun ve mümkünse mevcut yerel kayıt klasörünü başka bir yere kopyalayarak yedekleyin; kayıt klasörünün yeri oyuna göre değişir.'
        ], callout: { type: 'warning', title: 'Üzerine yazma riski', message: 'Çakışma penceresini gelişigüzel kapatıp oyunu başlatmak kayıtların üzerine yazılmasına neden olabilir. İlerlemeyi hangi cihazda yaptığınızı doğrulamadan seçim yapmayın.' } },
        { id: 'esitleme-hatasi', heading: 'Cloud Eşitleme Hatası Varsa', paragraphs: ['Steam, eşitleme başarısızken oyunu başlatmanın yerel ve bulut dosyaları arasında yeni bir çakışma yaratabileceği konusunda uyarıyor. Şu kontrolleri sırayla yapın:'], steps: [
          { title: 'Steam bağlantısını ve hizmet durumunu kontrol edin', description: 'Steam’i çevrimiçi moda alın; internet bağlantısının çalıştığını doğrulayın.' },
          { title: 'Açık oturumları kapatın', description: 'Aynı oyunun başka bilgisayarda açık olmadığından ve önceki oturumun eşitlemesinin tamamlandığından emin olun.' },
          { title: 'Oyunun Cloud ayarına bakın', description: 'Kütüphane’de oyuna sağ tıklayıp Özellikler > Genel içindeki Steam Cloud seçeneğini kontrol edin.' },
          { title: 'Son değişiklikleri yedekleyin', description: 'Oyuna özgü kayıt dosyalarını bulup kopyalayın; konum oyun ve işletim sistemine göre değişir.' },
          { title: 'Hata sürerse resmi Steam desteğine başvurun', description: 'Oyunu tekrar tekrar başlatmak yerine hata mesajını ve kullandığınız cihazları not ederek Steam’in yönergesini izleyin.' }
        ] },
        { id: 'desteklemeyen-oyun', heading: 'Oyun Steam Cloud Kullanmadığında', paragraphs: [
          'Bulut kaydı yoksa ilerleme yalnızca yerel cihazda veya oyunun kendi hesabında tutulabilir. Yeni bilgisayara geçmeden önce geliştiricinin kayıt taşıma talimatlarını bulun ve eski cihaza erişiminiz varken yedek alın. Steam Cloud her oyunun kayıtlarını geri getiremez.'
        ] }
      ]
    },
    faqs: [
      { question: 'Steam Cloud çakışmasında en yeni tarihli dosyayı seçmek yeterli mi?', answer: 'Her zaman değil. Son oyunu hangi cihazda oynadığınızı ve saat ayarlarını da kontrol edin; tarihler tek başına kaydın doğru ilerlemeyi içerdiğini garanti etmez.' },
      { question: 'Steam Cloud tüm oyun kayıtlarını kurtarır mı?', answer: 'Hayır. Cloud desteği ve eşitlenen dosyalar oyuna göre değişir. Geliştirici Cloud kullanmıyorsa veya son kayıt eşitlenmediyse Steam bulutu dosyayı geri getiremeyebilir.' }
    ]
  },
  {
    id: 'post-new-20',
    slug: 'windows-depolama-alani-acma-storage-sense-guvenli-temizlik',
    title: 'Windows’ta Depolama Alanı Açma: Storage Sense’i Güvenle Kullanma',
    description: 'Windows 10 ve 11’de büyük dosyaları bulma, Storage Sense ayarlarını inceleme ve yanlışlıkla önemli dosya silmeyi önleme rehberi.',
    categorySlug: 'teknoloji-mobil',
    authorId: 'author-1',
    publishedAt: '2026-10-22',
    updatedAt: '2026-10-22',
    readTime: '6 dk',
    featured: false,
    trending: false,
    coverImage: 'https://images.unsplash.com/photo-1484417894907-623942c8ee29?w=1200&auto=format&fit=crop&q=80',
    tags: ['Windows', 'Depolama', 'Storage Sense', 'Disk Alanı', 'Windows 11'],
    sources: [
      { title: 'Microsoft Support: Windows’ta depolama alanı açma', url: 'https://support.microsoft.com/en-us/windows/experience/storage-filemanagement/free-up-drive-space-in-windows' },
      { title: 'Microsoft Support: Storage Sense ayarları', url: 'https://support.microsoft.com/en-us/windows/experience/storage-filemanagement/manage-drive-space-with-storage-sense' }
    ],
    content: {
      lead: 'Disk alanı azaldığında Windows güncellemeleri ve uygulama kurulumları sorun çıkarabilir. Önce hangi kategorilerin yer kapladığını görün, ardından kaldırılacak dosyaları tek tek inceleyin; “temizle” düğmesine gelişigüzel basmayın.',
      sections: [
        { id: 'ne-kadar-yer-var', heading: 'Önce Kullanılan Alanı ve Büyük Dosyaları Bulun', paragraphs: [
          'Dosya Gezgini’nde Bu Bilgisayar bölümünü açarak disklerde kalan boş alanı görün. Windows Ayarları > Sistem > Depolama ekranı geçici dosyalar, uygulamalar ve diğer kategorilerin yaklaşık kullanımını gösterir.',
          'Kişisel dosyaları Dosya Gezgini’nde boyuta göre sıralayın. Eski videolar, kurulum dosyaları ve büyük arşivler çok yer kaplayabilir; silmek yerine harici diske taşımak isteyebilirsiniz.'
        ] },
        { id: 'cleanup-recommendations', heading: 'Temizleme Önerilerini İnceleyin', paragraphs: [
          'Windows 11’de Ayarlar > Sistem > Depolama > Temizleme önerileri bölümünde geçici dosyalar, büyük/kullanılmayan dosyalar ve kullanılmayan uygulamalar ayrı listelenebilir. Her kategoriyi açıp seçilen öğelerin ne olduğunu kontrol edin. Windows 10’da seçeneklerin adı veya konumu farklı olabilir.'
        ] },
        { id: 'storage-sense-ayari', heading: 'Storage Sense’i Ayarlarken Dikkat Edin', paragraphs: [
          'Storage Sense, sistem sürücüsündeki (genellikle C:) belirli geçici dosyaları ve Geri Dönüşüm Kutusu içeriğini otomatik temizleyebilir. Microsoft’un belirttiği varsayılanlarda İndirilenler klasörü silinmez; ancak ayardan İndirilenler için süre seçerseniz açılmayan dosyalar kaldırılabilir. Bu seçeneği etkinleştirmeden önce klasörünüzü gözden geçirin.',
          'OneDrive bulut dosyaları için “yalnızca çevrimiçi” ayarı, dosyayı buluttan kalıcı silmekten farklıdır; internet olduğunda tekrar indirilebilir. Yine de yerel kopya sizin için önemliyse “bu cihazda her zaman tut” seçeneğini ve senkronizasyon durumunu kontrol edin.'
        ], steps: [
          { title: 'Ayarlar > Sistem > Depolama’yı açın', description: 'Storage Sense’i etkinleştirmeden önce geçici dosyalar ve diğer kategorilerin içeriğine bakın.' },
          { title: 'Storage Sense ayarlarına girin', description: 'Çalışma sıklığını, Geri Dönüşüm Kutusu ve İndirilenler için ayrı saklama sürelerini inceleyin.' },
          { title: 'İlk temizliği elle başlatın', description: 'Önerilen dosyaları seçip neyin kaldırılacağını kontrol ettikten sonra temizleyin.' },
          { title: 'Sonucu tekrar ölçün', description: 'Depolama ekranını yenileyip açılan alanı kontrol edin; yeterli alan oluştuysa diğer temizleme adımlarına geçmeyin.' }
        ] },
        { id: 'windows-old-uyarisi', heading: 'Windows.old ve Geri Dönüşüm Kutusu Uyarısı', paragraphs: [
          'Önceki Windows kurulum dosyalarını silmek, önceki sürüme geri dönme seçeneğini kaldırabilir. Geri Dönüşüm Kutusu’nu boşaltmak da içindeki dosyaları geri alınamaz biçimde siler. Bu bölümlerdeki içeriği gerçekten istemediğinizden emin olmadan temizlemeyin.',
          'Temizlikten sonra alan hâlâ dolu görünüyorsa tüm geçici klasörleri elle silmek yerine Windows’un depolama önerilerini ve Microsoft destek yönergelerini izleyin.'
        ], callout: { type: 'warning', title: 'Önemli dosyaları yedekleyin', message: 'İndirilenler, Geri Dönüşüm Kutusu veya Windows.old içeriğini temizlemek dosyaları ya da geri dönme seçeneğini kalıcı olarak kaldırabilir.' } }
      ]
    },
    faqs: [
      { question: 'Storage Sense İndirilenler klasörümü siler mi?', answer: 'Varsayılan ayarda İndirilenler klasörüne dokunmaz. Ancak ayarlarda bu klasör için süre belirlerseniz belirtilen koşullara uyan dosyalar silinebilir; ayarı kontrol edin.' },
      { question: 'Windows.old klasörünü silmeli miyim?', answer: 'Önceki Windows sürümüne dönme ihtiyacınız yoksa ve klasörün içeriğini incelediyseniz silebilirsiniz. Silindiğinde önceki sürüme geri dönme seçeneği kaybolabilir.' }
    ]
  },
  {
    id: 'post-new-21',
    slug: 'android-telefon-depolama-alani-acma-dosya-temizligi',
    title: 'Android Telefonda Depolama Alanı Açma: Dosyaları Güvenle Temizleme',
    description: 'Android’de yer kaplayan uygulama ve dosyaları bulma, Files by Google önerilerini inceleme ve fotoğraf silmeden önce yedek kontrolü.',
    categorySlug: 'teknoloji-mobil',
    authorId: 'author-1',
    publishedAt: '2026-10-22',
    updatedAt: '2026-10-22',
    readTime: '5 dk',
    featured: false,
    trending: false,
    coverImage: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=1200&auto=format&fit=crop&q=80',
    tags: ['Android', 'Telefon Hafızası', 'Dosyalar', 'Files by Google', 'Depolama'],
    sources: [
      { title: 'Google Files Yardım: Files by Google ile alan açma', url: 'https://support.google.com/files/answer/9848742?hl=tr' },
      { title: 'Android Yardım: cihazda yer açma', url: 'https://support.google.com/android/answer/7431795?hl=tr' }
    ],
    content: {
      lead: 'Android telefonda boş alan azaldığında önce Depolama ayarlarından nelerin yer kapladığını görün. Önbelleği ve kişisel dosyaları ayırt edin; fotoğraf veya indirme silmeden önce yedeğin gerçekten tamamlandığını kontrol edin.',
      sections: [
        { id: 'depolama-analizi', heading: 'Telefon Hafızasında Nelerin Yer Kapladığını Bulun', paragraphs: [
          'Ayarlar > Depolama ekranında uygulamalar, fotoğraflar, videolar, indirilenler ve sistem alanının dağılımını inceleyin. Android üreticisine göre menü adı değişebilir. Büyük uygulamalar arasında kullanılmayanları belirleyin; uygulamayı kaldırmak yerel verilerini de silebilir.'
        ] },
        { id: 'files-by-google-temizleme', heading: 'Files by Google Önerilerini Gözden Geçirin', paragraphs: [
          'Files by Google yüklüyse Temizle sekmesindeki önerileri kullanabilirsiniz. Google’ın yardımına göre uygulama gereksiz dosyaları bulmaya ve dosyalara göz atmaya yardımcı olur. Her öneride hangi dosyaların seçildiğini açıp kontrol edin; öneri, dosyanın sizin için önemsiz olduğu anlamına gelmez.',
          'İndirilenler klasöründe belge, bilet, makbuz veya çevrimdışı dosyalar bulunabilir. Tanımadığınız klasörleri topluca silmek yerine dosya adını ve içeriğini kontrol edin.'
        ], steps: [
          { title: 'Depolama ekranını açın', description: 'Ayarlar’da Depolama bölümünden dolu kategoriyi tespit edin.' },
          { title: 'Files by Google’da Temizle’yi açın', description: 'Öneri kartlarının içindeki dosya listesini tek tek gözden geçirin.' },
          { title: 'Yalnızca emin olduklarınızı seçin', description: 'Silinecek öğeleri seçip onay ekranındaki dosya adlarını yeniden kontrol edin.' },
          { title: 'Boş alanı tekrar kontrol edin', description: 'İşlem bittikten sonra Depolama ekranında açılan alanı ölçün.' }
        ] },
        { id: 'fotograf-yedekleme', heading: 'Fotoğraf ve Videoları Silmeden Önce Yedek Durumunu Doğrulayın', paragraphs: [
          'Bulut yedekleme kullanıyorsanız uygulamada yüklemenin tamamlandığını ve doğru Google hesabının seçili olduğunu kontrol edin. Senkronizasyon beklemede olan içerik telefondan silinirse yedek kopya olmayabilir. Önemli dosyaları ayrıca bilgisayara veya harici ortama kopyalayabilirsiniz.',
          'Google Fotoğraflar’da cihazdan yer açma işlemi yerel kopyaları kaldırabilir; bulut yedekleme durumu, çöp kutusu ve çevrimdışı erişim beklentinizi önceden kontrol edin. İşlem sonrası bazı içerikler internet olmadan görünmeyebilir.'
        ], callout: { type: 'warning', title: 'Yedek kontrolü yapın', message: 'Fotoğraf ve videoları silmeden önce yüklemenin tamamlandığını farklı bir cihazdan veya web arayüzünden kontrol edin.' } },
        { id: 'onbellek-ve-veri', heading: 'Önbelleği Temizlemek ile Uygulama Verisini Silmek Farklıdır', paragraphs: [
          'Önbellek, uygulamanın yeniden oluşturabileceği geçici dosyalardır; temizlenince uygulama bazı içerikleri yeniden indirebilir. Depolamayı temizle/veriyi sil seçeneği ise oturum bilgileri, ayarlar veya yerel kayıtlar gibi kalıcı uygulama verilerini kaldırabilir. Özellikle mesajlaşma, not, oyun ve kimlik doğrulama uygulamalarında yedek almadan veri silmeyin.',
          'Depolama alanı sürekli hızla doluyorsa büyük video kayıtlarını, çevrimdışı müzik/harita indirmelerini ve mesajlaşma uygulamalarının medya klasörlerini ayrı ayrı inceleyin.'
        ] }
      ]
    },
    faqs: [
      { question: 'Android’de önbelleği temizlemek fotoğrafları siler mi?', answer: 'Uygulama önbelleği ile fotoğraf klasörleri farklıdır; ancak yanlışlıkla uygulama verisini silmemek için ekrandaki seçeneğin adını ve kapsamını kontrol edin.' },
      { question: 'Files by Google önerdiği her dosyayı silebilir miyim?', answer: 'Hayır. Önerilen dosyaları silmeden önce adını ve içeriğini inceleyin; uygulama dosyanın sizin için gerekli olup olmadığını bilemez.' }
    ]
  }
];

export const posts: Post[] = [...infoburadaPosts, ...originalPosts];

export function getAllPosts(): Post[] {
  return [...posts].sort(
    (a, b) =>
      new Date(b.publishedAt || b.date || '2026-10-07').getTime() -
      new Date(a.publishedAt || a.date || '2026-10-07').getTime()
  );
}

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getPostsByCategory(categorySlug: string): Post[] {
  return posts
    .filter((p) => p.categorySlug === categorySlug)
    .sort(
      (a, b) =>
        new Date(b.publishedAt || b.date || '2026-10-07').getTime() -
        new Date(a.publishedAt || a.date || '2026-10-07').getTime()
    );
}

export function getFeaturedPosts(): Post[] {
  return posts
    .filter((p) => p.featured)
    .sort((a, b) => new Date(b.publishedAt || b.date || '2000-01-01').getTime() - new Date(a.publishedAt || a.date || '2000-01-01').getTime());
}

export function getTrendingPosts(): Post[] {
  return posts.filter((p) => p.trending);
}

export function getRelatedPosts(currentPostId: string, categorySlug: string, limit = 3): Post[] {
  const current = posts.find((post) => post.id === currentPostId);
  const currentTags = new Set((current?.tags || []).map((tag) => tag.toLocaleLowerCase('tr-TR')));
  return posts
    .filter((post) => post.id !== currentPostId && post.categorySlug === categorySlug)
    .map((post) => ({ post, overlap: (post.tags || []).filter((tag) => currentTags.has(tag.toLocaleLowerCase('tr-TR'))).length }))
    .sort((a, b) => b.overlap - a.overlap || new Date(b.post.publishedAt || b.post.date || '2000-01-01').getTime() - new Date(a.post.publishedAt || a.post.date || '2000-01-01').getTime())
    .slice(0, limit)
    .map(({ post }) => post);
}

export function searchPosts(query: string): Post[] {
  if (!query.trim()) return [];
  const q = query.toLowerCase().trim();
  return posts.filter((p) => {
    return (
      p.title.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      (p.tags ? p.tags.some((t) => t.toLowerCase().includes(q)) : false)
    );
  });
}
