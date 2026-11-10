import { Post } from '@/types';
import { bilgirotasiPosts } from './bilgirotasi-posts';

const originalPosts: Post[] = [
  {
    id: 'post-new-1',
    slug: 'kyk-burs-kredi-taahhutname-onayi-nasil-yapilir',
    title: 'KYK Burs ve Kredi Taahhütname Onayı Nasıl Yapılır? (Adım Adım)',
    description: 'KYK burs veya öğrenim kredisi kazanan öğrencilerin e-Devlet üzerinden yapması gereken taahhütname onayı adımları ve dikkat edilmesi gerekenler.',
    categorySlug: 'e-devlet-basvurular',
    authorId: 'author-1',
    publishedAt: '2026-10-30',
    updatedAt: '2026-10-31',
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
    publishedAt: '2026-10-29',
    updatedAt: '2026-10-31',
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
    authorId: 'author-1',
    publishedAt: '2026-10-27',
    updatedAt: '2026-10-29',
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
    authorId: 'author-1',
    publishedAt: '2026-10-25',
    updatedAt: '2026-10-27',
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
    authorId: 'author-1',
    publishedAt: '2026-10-23',
    updatedAt: '2026-10-25',
    readTime: '6 dk',
    featured: true,
    trending: true,
    coverImage: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=1200&auto=format&fit=crop&q=80',
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
    publishedAt: '2026-10-21',
    updatedAt: '2026-10-23',
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
    title: 'Sosyal Yardım Başvurusu ve Sorgulama e-Devlet Adımları (Aile Bakanlığı)',
    description: 'Aile ve Sosyal Hizmetler Bakanlığı sosyal yardım başvurusu nasıl yapılır? e-Devlet başvuru formu doldurma, SYDV değerlendirme süreci ve PTT ödeme sorgulama rehberi.',
    categorySlug: 'e-devlet-basvurular',
    authorId: 'author-1',
    publishedAt: '2026-10-19',
    updatedAt: '2026-10-21',
    readTime: '6 dk',
    featured: false,
    trending: false,
    coverImage: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=1200&auto=format&fit=crop&q=80',
    tags: ['Sosyal Yardım', 'Aile Destek', 'e-Devlet', 'SYDV', 'PTT Ödeme Sorgulama'],
    sources: [
      { title: 'e-Devlet: Sosyal yardım başvuru hizmeti', url: 'https://www.turkiye.gov.tr/ashb-sosyal-yardim-basvuru-hizmeti' },
      { title: 'Aile ve Sosyal Hizmetler Bakanlığı SYGM', url: 'https://www.aile.gov.tr/sygm/' }
    ],
    content: {
      lead: 'Aile ve Sosyal Hizmetler Bakanlığı (ASHB) tarafından dar gelirli hanelere sağlanan nakdi ve ayni sosyal yardımlar için başvurular, il veya ilçe vakıflarına gitmeye gerek kalmadan e-Devlet Kapısı üzerinden alınmaktadır. Bu rehberde başvuru formunun doğru doldurulmasını, hane gelir kriterinin nasıl hesaplandığını ve PTT ödeme sorgulama adımlarını bulabilirsiniz.',
      sections: [
        {
          id: 'yardim-turleri',
          heading: '1. e-Devlet Üzerinden Başvurulabilecek Sosyal Yardım Türleri',
          paragraphs: [
            'Bakanlığın Sosyal Yardımlar Genel Müdürlüğü (SYGM) çatısı altında yürüttüğü destekler; hanenin gelir durumuna, evde eğitim gören öğrenci varlığına, yaşlı veya engelli birey bulunmasına göre farklı başlıklara ayrılır.',
            'Başvuru ekranında tek bir "Sosyal Yardım Başvuru Formu" doldurulur; Sosyal Yardımlaşma ve Dayanışma Vakfı (SYDV) uzmanları hanenin durumuna uygun olan yardım programlarını bu tek başvuru üzerinden değerlendirir.'
          ],
          bullets: [
            'Barınma, Gıda ve Yakacak Yardımları: Hane geliri asgari ücretin üçte birinin altında olan ailelere yönelik temel ihtiyaç destekleri.',
            'Şartlı Eğitim ve Şartlı Sağlık Yardımları (ŞEY/ŞSY): Sosyal güvencesi olmayan ailelerin çocuklarının okula devamı ve sağlık kontrolleri karşılığında verilen düzenli ödemeler.',
            'Elektrik ve Doğal Gaz Tüketim Desteği: Düzenli sosyal yardım hak sahibi olan hanelerin fatura yükünü hafifletmek için PTT üzerinden sağlanan indirim desteği.',
            'Engelli, Yaşlı (65 Yaş) ve Kronik Hastalık Yardımları: 2022 sayılı Kanun kapsamında bağlanan düzenli aylıklar.'
          ]
        },
        {
          id: 'basvuru-yapma',
          heading: '2. Adım Adım e-Devlet Sosyal Yardım Başvurusu Nasıl Yapılır?',
          paragraphs: [
            'Aynı hanede yaşayan bireylerden yalnızca bir kişinin (tercihen hane reisinin veya faturası üzerine kayıtlı olan kişinin) başvuru yapması yeterlidir; mükerrer başvurular süreci hızlandırmaz.'
          ],
          steps: [
            {
              title: '1. Adım: e-Devlet Hizmet Ekranını Açın',
              description: 'turkiye.gov.tr adresine giriş yapın ve arama kutusuna "Sosyal Yardım Başvuru Hizmeti" (Aile ve Sosyal Hizmetler Bakanlığı) yazarak ilgili sayfaya gidin.'
            },
            {
              title: '2. Adım: Yeni Başvuru Butonuna Tıklayın',
              description: 'Sağ üst köşede yer alan "Yeni Başvuru" düğmesine tıklayın ve aydınlatma/açık rıza metinlerini okuyup onaylayın.'
            },
            {
              title: '3. Adım: İletişim ve İkamet Bilgilerini Doğrulayın',
              description: 'MERNİS üzerindeki açık adresinizi ve aktif kullandığınız cep telefonu numaranızı kontrol edin; bilgilendirme SMS’leri bu numaraya gönderilir.'
            },
            {
              title: '4. Adım: Hane Gelir ve Sosyal Durum Sorularını Yanıtlayın',
              description: 'Evde yaşayan kişi sayısı, kira durumu, aylık toplam gelir, varsa kronik hastalık veya öğrenci bilgilerini eksiksiz doldurun ve açıklama kutusuna ihtiyacınızı net bir dille yazın.'
            }
          ],
          callout: {
            type: 'warning',
            title: 'Bütünleşik Sosyal Yardım Bilgi Sistemi (BSYBS) Kontrolü',
            message: 'Beyan ettiğiniz bilgiler; SGK, Gelir İdaresi, Tapu, EGM (araç kaydı) ve banka sistemlerinden otomatik olarak teyit edilir. Yanlış beyanda bulunulması başvurunun reddedilmesine yol açar.'
          }
        },
        {
          id: 'basvuru-ve-odeme-sorgulama',
          heading: '3. Başvuru Sonucu ve PTT Sosyal Yardım Ödemesi Sorgulama',
          paragraphs: [
            'Başvurunuz tamamlandıktan sonra ikamet ettiğiniz ilçedeki Sosyal Yardımlaşma ve Dayanışma Vakfı (SYDV) Mütevelli Heyeti dosyayı inceler. Gerekli görülmesi halinde sosyal inceleme görevlileri hane ziyareti gerçekleştirebilir.',
            'Başvurunuzun aşamasını e-Devlet’teki "Sosyal Yardım Bilgileri Sorgulama" ekranından, adınıza yatmış bir ödeme olup olmadığını ise "PTT Üzerinden Yapılan Kurum Ödemeleri Sorgulama" hizmetinden takip edebilirsiniz.'
          ]
        }
      ]
    },
    faqs: [
      {
        question: 'Sosyal yardım başvurusu kaç günde sonuçlanır?',
        answer: 'SYDV Mütevelli Heyeti toplantı takvimine ve ilçedeki başvuru yoğunluğuna bağlı olarak başvurular genellikle 15 ile 30 iş günü içerisinde karara bağlanır.'
      },
      {
        question: 'Aynı evden birden fazla kişi başvuru yapabilir mi?',
        answer: 'Sosyal yardımlar kişi bazlı değil "hane bazlı" değerlendirilir. Bu nedenle aynı ikametgah adresinden tek bir yetişkinin başvuru yapması yeterlidir.'
      },
      {
        question: 'Hane içinde kişi başına düşen gelir sınırı nasıl hesaplanır?',
        answer: 'Haneye giren tüm resmi gelirlerin (maaş, kira geliri, emekli aylığı vb.) toplamı, o adreste ikamet eden toplam kişi sayısına bölünür. Çoğu temel sosyal yardımda bu tutarın net asgari ücretin 1/3’ünden az olması şartı aranır.'
      }
    ]
  },
  {
    id: 'post-4',
    slug: 'whatsapp-kaybolan-mesajlar-ve-medya-gizliligi-ayarlari',
    title: 'WhatsApp Kaybolan Mesajlar, Sohbet Kilidi ve Medya Gizliliği Rehberi',
    description: 'WhatsApp üzerinde gönderdiğiniz fotoğrafların kaydedilmesini önleme, mesajların 24 saatte silinmesi, sohbet kilidi ve IP adresi gizleme ayarları.',
    categorySlug: 'teknoloji-mobil',
    authorId: 'author-1',
    publishedAt: '2026-10-18',
    updatedAt: '2026-10-20',
    readTime: '6 dk',
    featured: true,
    trending: false,
    coverImage: 'https://images.unsplash.com/photo-1614680376593-902f749f7ffc?w=1200&auto=format&fit=crop&q=80',
    tags: ['WhatsApp', 'Gizlilik', 'Sohbet Kilidi', 'Android', 'iOS'],
    sources: [
      { title: 'WhatsApp Yardım Merkezi: Kaybolan mesajlar', url: 'https://faq.whatsapp.com/673193694148537/' },
      { title: 'WhatsApp Yardım Merkezi', url: 'https://faq.whatsapp.com/' }
    ],
    content: {
      lead: 'Kişisel verilerinizi korumak, gönderdiğiniz özel belge veya fotoğrafların karşı tarafın galerisine otomatik kaydedilmesini önlemek ve hassas yazışmalarınızı şifrelemek için WhatsApp’ın yerleşik gizlilik araçlarını doğru yapılandırmanız gerekir. İşte Android ve iPhone için kapsamlı WhatsApp güvenlik rehberi.',
      sections: [
        {
          id: 'kaybolan-mesajlar-nasil-acilir',
          heading: '1. Süreli (Kaybolan) Mesajlar Özelliğini Etkinleştirme',
          paragraphs: [
            'WhatsApp süreli mesajlar özelliği sayesinde belirlediğiniz sürenin (24 saat, 7 gün veya 90 gün) ardından gönderilen tüm yeni mesajlar hem sizin hem de karşı tarafın sohbet ekranından otomatik olarak kaldırılır.',
            'Bu ayarı yalnızca belirli bir kişi/grup için açabileceğiniz gibi, Ayarlar > Gizlilik > Varsayılan Mesaj Süresi menüsünden yeni başlayacak tüm sohbetler için standart hale de getirebilirsiniz.'
          ],
          steps: [
            {
              title: '1. Adım: Sohbet veya Grup Bilgisine Girin',
              description: 'Mesajlaştığınız kişinin veya grubun üst kısımdaki adına dokunarak profil detaylarını açın.'
            },
            {
              title: '2. Adım: "Süreli Mesajlar" Seçeneğine Dokunun',
              description: 'Ekranı aşağı kaydırarak "Süreli Mesajlar" (Disappearing Messages) başlığını seçin.'
            },
            {
              title: '3. Adım: Silinme Süresini Belirleyin',
              description: '24 saat, 7 gün veya 90 gün seçeneklerinden birini işaretleyin. Seçim yapıldığında sohbet ekranında bir zamanlayıcı simgesi belirecektir.'
            }
          ]
        },
        {
          id: 'tek-seferlik-goruntuleme',
          heading: '2. Bir Kez Görüntülenen Medya ve Ekran Görüntüsü Koruması',
          paragraphs: [
            'Kimlik fotoğrafı, dekont veya özel bir görsel gönderirken görselin karşı tarafın telefon galerisine kaydedilmesini istemiyorsanız "Bir Kez Görüntüle" (View Once) özelliğini kullanmalısınız.',
            'Fotoğrafı veya videoyu seçtikten sonra açıklama satırının sağındaki daire içindeki "1" simgesine dokunup gönderdiğinizde, alıcı dosyayı yalnızca bir defa açabilir; medya galeriye inmez, iletilemez ve WhatsApp tarafından ekran görüntüsü alınması doğrudan engellenir.'
          ],
          callout: {
            type: 'warning',
            title: 'Harici Kamera Uyarısı',
            message: 'WhatsApp uygulama içinden ekran görüntüsü (screenshot) ve ekran kaydı alınmasını tamamen engeller; ancak alıcının başka bir telefon kamerasıyla ekrandan fotoğraf çekmesini teknik olarak engelleyemez. Bu nedenle yalnızca güvendiğiniz kişilerle paylaşım yapın.'
          }
        },
        {
          id: 'sohbet-kilidi-ve-gelismis-gizlilik',
          heading: '3. Sohbet Kilidi (Gizli Kod) ve Aramada IP Adresini Koruma',
          paragraphs: [
            'Telefonunuzu başkalarıyla paylaşmanız gerektiğinde özel sohbetlerinizi Face ID, parmak izi veya yalnızca sizin bildiğiniz bir "Gizli Kod" ile ayrı bir klasöre taşıyabilirsiniz. Ayrıca sesli/görüntülü aramalarda konumunuzun tahmin edilmesini önlemek için IP korumasını açabilirsiniz.'
          ],
          bullets: [
            'Sohbet Kilidi: Kişi profiline girip "Sohbet Kilidi"ni açtığınızda sohbet ana listeden gizlenir ve yalnızca arama çubuğuna belirlediğiniz gizli kodu yazdığınızda görünür.',
            'Aramalarda IP Adresini Koru: Ayarlar > Gizlilik > Gelişmiş > "Aramalarda IP adresini koru" seçeneğini açarak aramaların doğrudan uçtan uca değil WhatsApp sunucuları üzerinden aktarılmasını sağlayabilirsiniz.',
            'Bilinmeyen Kullanıcıların Aramalarını Sessize Al: Ayarlar > Gizlilik > Aramalar menüsünden rehberinizde olmayan numaralardan gelen spam aramaları otomatik susturabilirsiniz.'
          ]
        }
      ]
    },
    faqs: [
      {
        question: 'Kaybolan mesajlar silinmeden önce yedeklenirse ne olur?',
        answer: 'Mesajın süresi dolmadan önce Google Drive veya iCloud yedeği alınırsa mesaj yedekte yer alır; ancak yedek yeni bir telefona geri yüklendiğinde süre dolmuşsa mesaj otomatik olarak silinir.'
      },
      {
        question: 'Bir kez görüntülenen fotoğraf açılmazsa ne kadar süre bekler?',
        answer: 'Gönderilen tek seferlik medya alıcı tarafından 14 gün boyunca hiç açılmazsa sohbetten otomatik olarak silinir ve süresi dolar.'
      },
      {
        question: 'Karşı taraf tek seferlik fotoğrafın ekran görüntüsünü alırsa bildirim gelir mi?',
        answer: 'Güncel WhatsApp sürümlerinde tek seferlik medyada ekran görüntüsü alma işlemi siyah ekranla doğrudan engellenmektedir; yani karşı taraf ekran görüntüsü alamaz.'
      }
    ]
  },
  {
    id: 'post-5',
    slug: 'iphone-ve-android-pil-omrunu-uzatma-yontemleri',
    title: 'iPhone ve Android’de Pil Ömrünü Uzatma ve Batarya Sağlığını Koruma Rehberi',
    description: 'Telefon şarjınızın çabuk bitmesini önleyin: Arka plan uygulama yenilemeleri, 120Hz ekran ayarları, 20-80 şarj kuralı ve pil sağlığı koruma yöntemleri.',
    categorySlug: 'teknoloji-mobil',
    authorId: 'author-1',
    publishedAt: '2026-10-16',
    updatedAt: '2026-10-18',
    readTime: '7 dk',
    featured: false,
    trending: true,
    coverImage: 'https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=1200&auto=format&fit=crop&q=80',
    tags: ['Pil Sağlığı', 'Batarya', 'iPhone', 'Android', 'Şarj Ömrü'],
    sources: [
      { title: 'Apple: iPhone pilini ve performansını anlama', url: 'https://support.apple.com/tr-tr/101575' },
      { title: 'Google Android Yardım: Pil ömrünü uzatma', url: 'https://support.google.com/android/answer/7664692?hl=tr' }
    ],
    content: {
      lead: 'Akıllı telefonlarda kullanılan lityum-iyon bataryalar hem günlük yazılım ayarlarından hem de şarj ve sıcaklık alışkanlıklarından doğrudan etkilenir. Gün içinde şarjınızın erken bitmesini önlemek ve maksimum pil kapasitesini (Pil Sağlığı %) yıllarca korumak için uygulayabileceğiniz en etkili adımları derledik.',
      sections: [
        {
          id: 'temel-ayarlar',
          heading: '1. Günlük Şarj Tüketimini Azaltan Kritik Sistem Ayarları',
          paragraphs: [
            'Telefonun ekranı ve arka planda sürekli veri/konum senkronizasyonu yapan uygulamalar toplam pil tüketiminin %70’inden fazlasını oluşturur. İşlevsellikten ödün vermeden şu ayarları optimize edebilirsiniz:'
          ],
          steps: [
            {
              title: '1. Adım: Arkalanda Uygulama Yenilemeyi Sınırlandırın',
              description: 'iPhone’da Ayarlar > Genel > Arka Planda Uygulama Yenile menüsünden, Android’de ise Ayarlar > Pil > Arka Plan Kullanım Sınırları bölümünden anlık bildirim almanız gerekmeyen sosyal medya ve alışveriş uygulamalarını uyku moduna alın.'
            },
            {
              title: '2. Adım: Konum İzinlerini "Uygulamayı Kullanırken" Yapın',
              description: 'Ayarlar > Gizlilik > Konum Servisleri altında "Her Zaman" iznine sahip uygulamaları kontrol edin ve yalnızca harita/navigasyon dışındakileri "Uygulamayı Kullanırken" olarak değiştirin.'
            },
            {
              title: '3. Adım: Koyu Mod (Dark Mode) ve Otomatik Parlaklığı Açın',
              description: 'OLED ve AMOLED ekranlı telefonlarda siyah pikseller tamamen kapatıldığı için Koyu Mod kullanımı ekran pil tüketimini %15 ila %25 oranında azaltır.'
            }
          ]
        },
        {
          id: 'sarj-ve-isi',
          heading: '2. Batarya Sağlığını (Maksimum Kapasiteyi) Koruyan Şarj Kuralları',
          paragraphs: [
            'Lityum-iyon pillerin kimyasal ömrünü en hızlı tüketen iki faktör "yüksek ısı (35°C üzeri)" ve "pilin %0’a kadar tamamen boşaltılması ya da saatlerce %100’de yüksek voltajda bekletilmesi"dir.',
            'Modern iPhone modellerindeki "İyileştirilmiş Pil Şarjı / %80 Sınırı" ve Samsung/Android cihazlardaki "Pili Koru (%80 Maksimum)" özelliklerini mutlaka aktif hale getirin.'
          ],
          bullets: [
            '%20 – %80 Şarj Aralığı: Günlük kullanımda şarja %20 civarında takıp %80–%85 seviyesinde çekmek, döngü yıpranmasını en aza indirir.',
            'Şarjdayken Oyun Oynamaktan Kaçının: Hızlı şarj esnasında oluşan ısı ile işlemci/GPU ısısı birleştiğinde batarya sıcaklığı 42°C üzerine çıkar ve kalıcı kapasite kaybı yaşanır.',
            'Sertifikalı Adaptör ve Kablo Kullanımı: PD (Power Delivery) veya PPS destekli orijinal/lisanslı adaptörler voltajı kademeli olarak düşürerek bataryayı korur.'
          ],
          callout: {
            type: 'tip',
            title: '5G ve Zayıf Sinyal Etkisi',
            message: 'Bulunduğunuz bölgede 5G çekim gücü zayıfsa telefon sürekli baz istasyonu aradığı için normalden iki kat fazla pil harcar. Mobil Veri ayarlarından "5G Otomatik" veya "LTE/4.5G" modunu seçmek pil süresini belirgin şekilde uzatır.'
          }
        }
      ]
    },
    faqs: [
      {
        question: 'Hızlı şarj adaptörü kullanmak pil sağlığını bozar mı?',
        answer: 'Hayır, kaliteli ve PD/PPS standartlarına uygun hızlı şarj adaptörleri pil %80’e ulaşana kadar yüksek hızda, %80’den sonra ise yavaş (damlama) modunda şarj eder. Ancak şarj sırasında kılıf çok kalınsa veya oyun oynanıyorsa oluşan ısı pile zarar verir.'
      },
      {
        question: 'Pil sağlığı yüzde kaçın altına düştüğünde batarya değişimi gerekir?',
        answer: 'Üreticiler (Apple ve Samsung dahil) maksimum pil kapasitesi %80’in altına düştüğünde hem ekran süresinin kısalması hem de ani kapanmaların önlenmesi için batarya değişimi önermektedir.'
      }
    ]
  },
  {
    id: 'post-7',
    slug: 'oyunlarda-fps-artirma-ve-gecikme-azaltma-rehberi',
    title: 'PC Oyunlarında FPS Artırma ve Giriş Gecikmesini (Input Lag) Azaltma Rehberi',
    description: 'Windows 11/10 oyun modu, ekran kartı denetim masası ayarları, RAM optimizasyonu ve FPS artırma tüyoları.',
    categorySlug: 'oyun-donanim',
    authorId: 'author-1',
    publishedAt: '2026-10-14',
    updatedAt: '2026-10-16',
    readTime: '7 dk',
    featured: true,
    trending: true,
    coverImage: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=1200&auto=format&fit=crop&q=80',
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
    title: 'Ekran Kartı Sürücü Güncelleme ve DDU ile Temiz Kurulum Rehberi (NVIDIA & AMD)',
    description: 'NVIDIA GeForce, AMD Radeon ve Intel Arc ekran kartı sürücüsü nasıl güncellenir? Güvenli Modda DDU ile eski sürücü kalıntılarını silme ve temiz kurulum adımları.',
    categorySlug: 'oyun-donanim',
    authorId: 'author-1',
    publishedAt: '2026-10-12',
    updatedAt: '2026-10-14',
    readTime: '7 dk',
    featured: false,
    trending: false,
    coverImage: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=1200&auto=format&fit=crop&q=80',
    tags: ['Ekran Kartı', 'DDU', 'Sürücü Güncelleme', 'NVIDIA', 'AMD'],
    sources: [
      { title: 'Microsoft: Windows sürücü güncellemeleri', url: 'https://support.microsoft.com/en-us/windows/hardware/drivers/automatically-get-recommended-and-updated-hardware-drivers' },
      { title: 'NVIDIA Resmi Sürücü İndirme Sayfası', url: 'https://www.nvidia.com/Download/index.aspx' },
      { title: 'AMD Radeon Sürücü ve Destek', url: 'https://www.amd.com/en/support/download/drivers.html' }
    ],
    content: {
      lead: 'Oyunlarda ani FPS düşüşleri (stuttering), siyah ekran, DXGI_ERROR_DEVICE_HUNG çökmeleri veya yeni bir ekran kartına geçiş sonrası yaşanan mavi ekran hatalarının en yaygın nedeni bozulmuş grafik sürücüsü kayıtlarıdır. Bu rehberde hem standart sürücü güncellemesini hem de DDU (Display Driver Uninstaller) ile sıfırdan temiz kurulum adımlarını bulabilirsiniz.',
      sections: [
        {
          id: 'standart-surucu-guncelleme',
          heading: '1. NVIDIA App ve AMD Software Üzerinden Normal Sürücü Güncelleme',
          paragraphs: [
            'Her sürücü güncellemesinde üçüncü taraf kaldırma aracı kullanmanıza gerek yoktur. Sisteminizde herhangi bir çökme sorunu yoksa üreticinin resmi kurulum sihirbazındaki "Temiz Kurulum" kutucuğu günlük güncellemeler için yeterlidir.',
            'NVIDIA kullanıcıları kurulum ekranında "Özel (Gelişmiş)" seçeneğini işaretleyip alt kısımdaki "Temiz kurulum yap" kutusunu seçebilir; AMD kullanıcıları ise Adrenalin kurulum ekranında "Ek Seçenekler > Fabrika Ayarlarına Sıfırla" seçeneğini kullanabilir.'
          ]
        },
        {
          id: 'temiz-kurulum-adimlari',
          heading: '2. Güvenli Modda DDU ile Tamamen Temiz Sürücü Kurulumu',
          paragraphs: [
            'AMD’den NVIDIA’ya (veya tam tersi) ekran kartı değiştirdiyseniz ya da normal yeniden kurulum mavi ekran/çökme sorununu çözmediyse aşağıdaki adımları sırasıyla uygulayın:'
          ],
          steps: [
            {
              title: '1. Adım: Güncel Sürücüyü Önceden Masaüstüne İndirin',
              description: 'İşleme başlamadan önce NVIDIA veya AMD’nin resmi web sitesinden ekran kartı modelinize uygun en güncel WHQL sürücü kurulum dosyasını (.exe) indirip masaüstüne kaydedin.'
            },
            {
              title: '2. Adım: İnternet Bağlantısını Geçici Olarak Kesin',
              description: 'Sürücü silindiği anda Windows Update’in arka planda eski bir sürücüyü otomatik yüklemesini önlemek için Ethernet kablosunu çıkarın veya Wi-Fi bağlantısını kapatın.'
            },
            {
              title: '3. Adım: Windows’u Güvenli Modda (Safe Mode) Başlatın',
              description: 'Shift tuşuna basılı tutarak Başlat > Yeniden Başlat’a tıklayın. Sorun Gider > Gelişmiş Seçenekler > Başlangıç Ayarları > Yeniden Başlat yolunu izleyin ve açılışta 4 (Güvenli Mod) tuşuna basın.'
            },
            {
              title: '4. Adım: DDU ile Mevcut Sürücüyü Kaldırın ve Yeniden Başlatın',
              description: 'DDU aracında sağ taraftan "Cihaz Türü: GPU" ve ekran kartı markanızı seçip sol üstteki "Temizle ve Yeniden Başlat" butonuna tıklayın. Bilgisayar normal modda açıldığında masaüstündeki güncel sürücüyü kurup interneti yeniden bağlayın.'
            }
          ],
          callout: {
            type: 'warning',
            title: 'BitLocker ve PIN Uyarısı',
            message: 'Güvenli moda geçmeden önce Windows hesabınızın parolasını (PIN değil, Microsoft hesap şifresi) bildiğinizden ve BitLocker açıksa kurtarma anahtarınızın yedekte olduğundan emin olun.'
          }
        }
      ]
    },
    faqs: [
      {
        question: 'Her yeni ekran kartı güncellemesinde DDU kullanmak gerekir mi?',
        answer: 'Hayır. Rutin sürücü güncellemelerinde doğrudan NVIDIA App veya AMD Adrenalin üzerinden güncelleme yapmak yeterlidir. DDU yalnızca sürücü kaynaklı çökme/takılma sorunlarında veya ekran kartı değişiminde kullanılmalıdır.'
      },
      {
        question: 'Game Ready Sürücüsü mü yoksa Studio Sürücüsü mü kurulmalı?',
        answer: 'Yeni çıkan oyunlarda en yüksek performans ve yama desteği için Game Ready sürücüsü; Premiere Pro, Blender ve DaVinci Resolve gibi iş istasyonu uygulamalarında maksimum kararlılık için Studio sürücüsü tercih edilmelidir.'
      }
    ]
  },
  {
    id: 'post-9',
    slug: 'steam-oyun-acilmiyor-hatasi-kesin-cozum-yollari',
    title: 'Steam Oyunu Açılmıyor Hatası: "Çalışıyor" Deyip Kapanma Sorunu Çözümü',
    description: 'Steam’de Oyna butonuna basınca "Çalışıyor" yazıp oyunun hiç açılmadan kapanması sorununa karşı dosya doğrulama, Visual C++ ve DirectX onarım adımları.',
    categorySlug: 'oyun-donanim',
    authorId: 'author-1',
    publishedAt: '2026-10-10',
    updatedAt: '2026-10-12',
    readTime: '6 dk',
    featured: false,
    trending: false,
    coverImage: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1200&auto=format&fit=crop&q=80',
    tags: ['Steam', 'Oyun Hatası', 'Visual C++', 'DirectX', 'Windows'],
    sources: [
      { title: 'Steam: Oyun dosyalarının bütünlüğünü doğrulama', url: 'https://help.steampowered.com/en/faqs/view/0C48-FCBD-DA71-93EB' },
      { title: 'Steam: Oyun başlatılamıyor sorun giderme', url: 'https://help.steampowered.com/en/faqs/view/5814-D9A3-BE42-62DF' }
    ],
    content: {
      lead: 'Steam kütüphanenizde "Oyna" butonuna tıkladığınızda durum birkaç saniye "Çalışıyor / Başlatılıyor" olarak görünüp ekrana hiçbir pencere gelmeden tekrar "Oyna" butonuna dönüyorsa; sorun genellikle bozuk oyun paketlerinden, eksik Microsoft Visual C++ / DirectX kütüphanelerinden veya antivirüs karantinasından kaynaklanır.',
      sections: [
        {
          id: 'dosya-dogrulama',
          heading: '1. Adım: Steam Oyun Dosyalarının Bütünlüğünü Doğrulama',
          paragraphs: [
            'İndirme sırasındaki anlık bağlantı kopmaları veya disk yazma hataları oyunun ana yürütülebilir (.exe veya .dll) dosyalarının eksik inmesine yol açabilir. İlk olarak şu adımları uygulayın:'
          ],
          steps: [
            {
              title: '1. Kütüphanede Oyuna Sağ Tıklayın',
              description: 'Steam’i açın, sol listeden açılmayan oyuna sağ tıklayıp "Özellikler" (Properties) menüsüne girin.'
            },
            {
              title: '2. Yüklü Dosyalar Sekmesini Açın',
              description: 'Sol menüden "Yüklü Dosyalar" (Installed Files) sekmesine tıklayın.'
            },
            {
              title: '3. Bütünlüğü Doğrulayın',
              description: '"Oyun dosyalarının bütünlüğünü doğrula" butonuna basın. Steam eksik veya bozuk dosyaları tespit edip otomatik olarak yeniden indirecektir.'
            }
          ]
        },
        {
          id: 'visual-cpp-ve-directx',
          heading: '2. Adım: Eksik Visual C++ (VCRUNTIME140.dll) ve DirectX Paketlerini Onarma',
          paragraphs: [
            'Özellikle yeni format atılmış bilgisayarlarda oyunların ihtiyaç duyduğu Microsoft Visual C++ Redistributable (2015–2022) ve eski DirectX 9/11 çalışma zamanı bileşenleri eksik olduğunda oyun sessizce kapanır.',
            'Steam her oyunun ortak kurulum paketlerini kendi klasöründe saklar. Dosya Gezgini’nde C:\\Program Files (x86)\\Steam\\steamapps\\common\\Steamworks Shared\\_CommonRedist klasörüne giderek vcredist ve DirectX klasörleri içindeki kurulum dosyalarını yönetici olarak çalıştırıp "Onar" (Repair) işlemini tamamlayın.'
          ],
          callout: {
            type: 'tip',
            title: 'İndirme Önbelleğini Temizleme',
            message: 'Oyun güncellemede takılı kalıyorsa Steam > Ayarlar > İndirmeler > "İndirme Önbelleğini Temizle" seçeneğini kullanıp Steam’i yeniden başlatın.'
          }
        },
        {
          id: 'uyumluluk-ve-antivirus',
          heading: '3. Adım: Yönetici İzni, Başlatma Seçenekleri ve Antivirüs Kontrolü',
          paragraphs: [
            'Bazı hile korumalı oyunlar (Easy Anti-Cheat veya BattlEye kullanan yapımlar) yönetici izni olmadan başlayamaz. Ayrıca Windows Güvenliği oyunun .exe dosyasını yanlışlıkla engellemiş olabilir.'
          ],
          bullets: [
            'Yönetici Olarak Çalıştırma: Yüklü Dosyalar > "Göz at" diyerek oyunun klasörünü açın, .exe dosyasına sağ tıklayıp Özellikler > Uyumluluk sekmesinden "Bu programı yönetici olarak çalıştır" kutusunu işaretleyin.',
            'Bozuk Başlatma Seçeneklerini Silin: Oyun Özellikler > Genel sekmesindeki "Başlatma Seçenekleri" kutusunda eski veya uyumsuz komutlar (-dx11, -vulkan vb.) varsa kutuyu tamamen temizleyip deneyin.',
            'Bindirme (Overlay) Çakışması: Discord, MSI Afterburner / RivaTuner veya Steam Arayüzü eski oyunların çökmesine neden olabilir; geçici olarak kapatıp test edin.'
          ]
        }
      ]
    },
    faqs: [
      {
        question: 'Visual C++ Redistributable paketlerini nereden güvenle indirebilirim?',
        answer: 'Doğrudan Microsoft’un resmi "En son desteklenen Visual C++ Yeniden Dağıtılabilir İndirmeleri" sayfasından hem x86 hem de x64 sürümlerini indirip kurabilirsiniz.'
      },
      {
        question: 'İndirme önbelleğini temizlemek yüklü oyunlarımı siler mi?',
        answer: 'Hayır, kurulu oyunlarınız veya kayıt dosyalarınız silinmez; yalnızca geçici indirme klasörü sıfırlanır ve Steam hesabınıza tekrar giriş yapmanız istenir.'
      }
    ]
  },
  {
    id: 'post-10',
    slug: 'yks-calisma-programi-hazirlama-ve-net-artirma-taktikleri',
    title: 'YKS Çalışma Programı Hazırlama ve Net Artırma Taktikleri (TYT-AYT)',
    description: 'Haftalık ders dağılımı, konu tekrarları, deneme analizi ve çalışma süresini gerçekçi biçimde planlama önerileri.',
    categorySlug: 'egitim-sinavlar',
    authorId: 'author-1',
    publishedAt: '2026-10-08',
    updatedAt: '2026-10-10',
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
    description: 'Hangi KPSS puanı ile hangi memurluklara başvurulur? Lisans (P3), Ön Lisans (P93), Ortaöğretim (P94) ve A Grubu uzman yardımcılığı kadroları arasındaki farklar.',
    categorySlug: 'egitim-sinavlar',
    authorId: 'author-1',
    publishedAt: '2026-10-07',
    updatedAt: '2026-10-09',
    readTime: '7 dk',
    featured: false,
    trending: false,
    coverImage: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=1200&auto=format&fit=crop&q=80',
    tags: ['KPSS', 'Memuriyet', 'P3 Puanı', 'ÖSYM', 'Atamalar'],
    sources: [
      { title: 'ÖSYM: KPSS duyuruları ve kılavuzlar', url: 'https://www.osym.gov.tr/' },
      { title: 'Kariyer Kapısı Kamu İşe Alım Platformu', url: 'https://kariyerkapisi.gov.tr/isealim' }
    ],
    content: {
      lead: 'Kamu Personel Seçme Sınavı’na (KPSS) hazırlanan adayların en çok karıştırdığı konuların başında puan türleri ile B Grubu (merkezi yerleştirme) ve A Grubu (kariyer meslekler) kadrolar arasındaki ayrım gelir. Mezuniyet düzeyinize ve hedeflediğiniz kuruma göre hangi KPSS oturumuna girmeniz ve hangi puan türünü kullanmanız gerektiğini tüm detaylarıyla inceledik.',
      sections: [
        {
          id: 'b-grubu-puan-turleri',
          heading: '1. B Grubu Kadrolar: P3 (Lisans), P93 (Ön Lisans) ve P94 (Ortaöğretim)',
          paragraphs: [
            'Bakanlıkların, üniversitelerin, belediyelerin ve KİT’lerin düz memur, mühendis, hemşire, tekniker, büro personeli, zabıt katibi ve güvenlik görevlisi gibi kadroları "B Grubu" olarak adlandırılır. Bu kadrolar için yalnızca Genel Yetenek (60 soru) ve Genel Kültür (60 soru) oturumuna girilmesi yeterlidir.'
          ],
          bullets: [
            'KPSS P3 Puanı (Lisans): 4 yıllık fakülte ve yüksekokul mezunlarının merkezi atamalarda (KPSS-1 / KPSS-2) ve kurumsal açıktan alımlarda kullandığı temel puandır (%50 Genel Yetenek + %50 Genel Kültür).',
            'KPSS P93 Puanı (Ön Lisans): 2 yıllık meslek yüksekokulu (MYO) mezunlarının teknikerlik, sağlık teknikerliği ve ön lisans memurluk alımlarında kullandığı puandır (çift yıllarda düzenlenir).',
            'KPSS P94 Puanı (Ortaöğretim / Lise): Lise ve dengi okul mezunlarının destek personeli, şoför, teknisyen ve memur alımlarında kullandığı puandır (çift yıllarda düzenlenir).'
          ]
        },
        {
          id: 'a-grubu-ve-ogretmenlik',
          heading: '2. A Grubu Kariyer Meslekler (P1, P2, P4–P48) ve Öğretmenlik (P10, P121)',
          paragraphs: [
            'Müfettiş yardımcılığı, uzman yardımcılığı, denetmen yardımcılığı ve kaymakam adaylığı gibi "A Grubu" kadrolar için Genel Yetenek - Genel Kültür oturumuna ek olarak Alan Bilgisi (Hukuk, İktisat, Maliye, İşletme, Muhasebe, Kamu Yönetimi vb.) oturumlarına girilmesi zorunludur.',
            'Milli Eğitim Bakanlığı öğretmen atamalarında ise eğitim fakültesi ve formasyon sahibi adaylar için Eğitim Bilimleri (P10) ve Öğretmenlik Alan Bilgisi Testi (ÖABT - P121) veya güncel MEB-AGS kriterleri esas alınır.'
          ],
          steps: [
            {
              title: '1. Adım: Mezuniyet Düzeyinize Göre Sınav Yılını Kontrol Edin',
              description: 'B Grubu merkezi atamalar için çift yıllarda (2024, 2026 vb.) yapılan KPSS puanları iki yıl boyunca geçerlidir. Tek yıllarda yapılan sınavlar yalnızca A Grubu ve öğretmenlik içindir.'
            },
            {
              title: '2. Adım: Nitelik Kodlarını İnceleyin',
              description: 'ÖSYM tercih kılavuzunda mezun olduğunuz bölüme karşılık gelen 4 haneli nitelik kodunu (veya 4001, 3001, 2001 genel kodlarını) belirleyin.'
            },
            {
              title: '3. Adım: Kariyer Kapısı ve ÖSYM AİS’i Birlikte Takip Edin',
              description: 'Mülakatsız merkezi yerleştirmeler ÖSYM AİS üzerinden, bakanlıkların sözleşmeli personel (4/B) alımları ise Cumhurbaşkanlığı Kariyer Kapısı üzerinden duyurulur.'
            }
          ],
          callout: {
            type: 'info',
            title: 'P1 ve P2 Puan Türleri Nerede Kullanılır?',
            message: 'P1 puanında Genel Yetenek %70, Genel Kültür %30 ağırlığındadır; P2 puanında ise Genel Yetenek %60, Genel Kültür %40 ağırlığındadır. Bu iki puan türü genellikle Merkez Bankası, BDDK, SPK ve kamu bankalarının bazı uzmanlık ilanlarında ön eleme puanı olarak kullanılır.'
          }
        }
      ]
    },
    faqs: [
      {
        question: 'KPSS B Grubu puanı kaç yıl geçerlidir?',
        answer: 'Çift yıllarda yapılan KPSS Lisans (P3), Ön Lisans (P93) ve Ortaöğretim (P94) puanları, sınav sonuçlarının açıklandığı tarihten itibaren bir sonraki çift yıl sınav sonuçları açıklanana kadar (2 yıl süreyle) geçerlidir.'
      },
      {
        question: '4001, 3001 ve 2001 nitelik kodları ne anlama gelir?',
        answer: '4001 kodu "Herhangi bir lisans programından mezun olmak", 3001 kodu "Herhangi bir ön lisans programından mezun olmak", 2001 kodu ise "Herhangi bir ortaöğretim (lise) programından mezun olmak" anlamına gelir.'
      }
    ]
  },
  {
    id: 'post-12',
    slug: 'universite-kayit-icin-gerekli-belgeler-ve-e-kayit-adimlari',
    title: 'Üniversite Kayıt İçin Gerekli Belgeler ve e-Devlet e-Kayıt Rehberi',
    description: 'YKS ve DGS yerleştirme sonuçları sonrası e-Devlet üzerinden üniversiteye elektronik kayıt (e-Kayıt) nasıl yapılır? Yüz yüze kayıt evrakları ve dikkat edilecekler.',
    categorySlug: 'egitim-sinavlar',
    authorId: 'author-1',
    publishedAt: '2026-10-05',
    updatedAt: '2026-10-07',
    readTime: '6 dk',
    featured: false,
    trending: false,
    coverImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1200&auto=format&fit=crop&q=80',
    tags: ['Üniversite Kayıt', 'e-Kayıt', 'e-Devlet', 'YÖK', 'YKS'],
    sources: [
      { title: 'e-Devlet Kapısı: Üniversite e-Kayıt Hizmeti', url: 'https://www.turkiye.gov.tr/yok-universite-ekayit' },
      { title: 'YÖK: Yükseköğretim Kurulu', url: 'https://www.yok.gov.tr/' }
    ],
    content: {
      lead: 'YKS veya DGS tercih sonuçlarına göre bir yükseköğretim programına yerleşen adaylar, üniversite kampüsüne gitmeye gerek kalmadan e-Devlet Kapısı üzerinden "Üniversite E-Kayıt" (Elektronik Kayıt) işlemini dakikalar içinde tamamlayabilir. İşte adım adım e-Kayıt süreci ve özel yetenek/sağlık raporu gerektiren bölümler için yüz yüze kayıt evrakları.',
      sections: [
        {
          id: 'e-kayit-nasil-yapilir',
          heading: '1. e-Devlet Üzerinden Adım Adım Üniversite e-Kayıt İşlemi',
          paragraphs: [
            'Devlet ve vakıf üniversitelerinin casi tamamı YÖK’ün elektronik kayıt sistemine dahildir. Ancak lise mezuniyet bilgisi MEB e-Okul sisteminde görünmeyenlerin, askerlik/emniyet engel durumu bulunanların veya tam teşekküllü heyet raporu şartı olan bölümlere yerleşenlerin kayıtlarını yüz yüze yapması gerekebilir.'
          ],
          steps: [
            {
              title: '1. Adım: e-Devlet Kapısına Giriş Yapın',
              description: 'Kendi T.C. kimlik numaranız ve e-Devlet şifrenizle turkiye.gov.tr adresine giriş yapın (veli hesabından değil, öğrencinin kendi hesabından girilmelidir).'
            },
            {
              title: '2. Adım: YÖK Üniversite E-Kayıt Hizmetini Açın',
              description: 'Arama kutusuna "Üniversite E-Kayıt" (Yükseköğretim Kurulu Başkanlığı) yazarak ilgili hizmete tıklayın.'
            },
            {
              title: '3. Adım: Yerleştiğiniz Programı ve Bilgileri Kontrol Edin',
              description: 'Ekrana gelen üniversite, fakülte ve bölüm bilgilerini doğrulayın; cep telefonu ve e-posta adresinizi güncelleyip doğrulama kodunu girin.'
            },
            {
              title: '4. Adım: Barkodlu Elektronik Kayıt Belgesini İndirin',
              description: '"Kaydı Tamamla" butonuna bastıktan sonra oluşan karekodlu PDF kayıt belgesini bilgisayarınıza veya telefonunuza indirin.'
            }
          ],
          callout: {
            type: 'warning',
            title: 'Ders Kaydı (İnteraktif Kayıt) Unutulmamalı!',
            message: 'e-Devlet üzerinden e-Kayıt yapmak yalnızca üniversite öğrencisi olmanızı sağlar. Dönem derslerinizi seçmek (ders kaydı / danışman onayı) için yerleştiğiniz üniversitenin Öğrenci Bilgi Sistemi’ne (OBS) akademik takvimde belirtilen tarihlerde ayrıca giriş yapmanız zorunludur.'
          }
        },
        {
          id: 'yuz-yuze-kayit-belgeleri',
          heading: '2. Yüz Yüze (Şahsen) Kayıt Gerektiren Durumlarda İstenen Belgeler',
          paragraphs: [
            'Elektronik kayıt kapsamı dışında kalan programlar (bazı özel yetenek bölümleri, denizcilik, sivil havacılık, güvenlik bilimleri) veya e-Okul’da diploması görünmeyen adaylar için üniversite öğrenci işlerine teslim edilmesi gereken standart belgeler şunlardır:'
          ],
          bullets: [
            'YKS / DGS Yerleştirme Sonuç Belgesinin internet çıktısı.',
            'Mezun olunan lise veya ön lisans kurumundan alınan diplomanın aslı ya da yeni tarihli mezuniyet belgesi.',
            'T.C. Kimlik Kartı aslı ve fotokopisi.',
            'Son 6 ay içinde çekilmiş 4 veya 6 adet vesikalık/biyometrik fotoğraf (üniversite duyurusuna göre).',
            'Bölümün özel koşulunda (Bk. kodlarında) belirtilmişse tam teşekküllü devlet veya üniversite hastanesinden alınan sağlık kurulu (heyet) raporu.'
          ]
        }
      ]
    },
    faqs: [
      {
        question: 'e-Kayıt yaptıktan sonra üniversiteye belge götürmek gerekir mi?',
        answer: 'Standart bölümlerde e-Kayıt yapan öğrencilerin üniversiteye ayrıca basılı diploma veya evrak götürmesine gerek yoktur. Yalnızca bölümünüzün özel koşulunda sağlık raporu veya adli sicil belgesi şartı varsa üniversitenin duyurusunu kontrol edin.'
      },
      {
        question: 'Aynı anda iki üniversitede kayıtlı olunabilir mi?',
        answer: 'YÖK mevzuatına göre bir öğrenci aynı anda iki örgün lisans veya iki örgün ön lisans programında kayıtlı olamaz. Ancak bir örgün lisans programı ile bir ön lisans programı (veya açıköğretim programı) aynı anda okunabilir.'
      }
    ]
  },
  {
    id: 'post-13',
    slug: 'evde-pratik-leke-cikarma-ve-temizlik-tuyolari',
    title: 'Evde Pratik Leke Çıkarma Rehberi: Yağ, Kahve, Çay ve Mürekkep Lekeleri',
    description: 'Kıyafet, gömlek ve halılardaki kurumuş yağ, kahve, çay, çimen ve tükenmez kalem mürekkebi lekelerini kumaşa zarar vermeden çıkarma yöntemleri.',
    categorySlug: 'pratik-bilgiler',
    authorId: 'author-1',
    publishedAt: '2026-10-03',
    updatedAt: '2026-10-05',
    readTime: '6 dk',
    featured: true,
    trending: false,
    coverImage: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1200&auto=format&fit=crop&q=80',
    tags: ['Temizlik', 'Pratik Bilgiler', 'Leke Çıkarma', 'Ev Yaşam'],
    content: {
      lead: 'Kıyafetlere veya halıya dökülen kahve, yemek yağı ya da tükenmez kalem mürekkebi; yanlış ilk müdahale (örneğin sıcak suyla ovalamak) yapıldığında kumaş liflerine kalıcı olarak yerleşir. Lekenin kimyasal yapısına göre evde bulunan malzemelerle kumaşı yıpratmadan uygulayabileceğiniz adım adım çıkarma yöntemlerini derledik.',
      sections: [
        {
          id: 'yag-lekesi',
          heading: '1. Kıyafetlerdeki Taze ve Kurumuş Yağ Lekesi Nasıl Çıkar?',
          paragraphs: [
            'Yağ bazlı lekeler (zeytinyağı, tereyağı, sos, makine yağı) suyla çözünmez; doğrudan çamaşır makinesine atıldığında ve yüksek ısı gördüğünde kumaşa sabitlenir. En etkili çözücü emici tozlar ve yağ çözücü bulaşık deterjanıdır:'
          ],
          steps: [
            {
              title: '1. Adım: Fazla Yağı Emici Tozla Çekin',
              description: 'Leke tazeyse peçeteyle yaymadan bastırarak fazlasını alın, ardından üzerine bolca karbonat, mısır nişastası veya bebek pudrası döküp 15–20 dakika bekletin.'
            },
            {
              title: '2. Adım: Renksiz Sıvı Bulaşık Deterjanı Uygulayın',
              description: 'Tozu silkeledikten sonra lekenin üzerine birkaç damla sıvı bulaşık deterjanı damlatın ve yumuşak bir diş fırçası veya parmak uçlarınızla hafifçe yedirin.'
            },
            {
              title: '3. Adım: Ilık Suyla Durulayıp Yıkayın',
              description: '10 dakika beklettikten sonra ılık suyla durulayın ve kumaş etiketinde belirtilen programda yıkayın. Leke tamamen çıktığından emin olmadan kurutma makinesine atmayın.'
            }
          ]
        },
        {
          id: 'kahve-ve-cay-lekesi',
          heading: '2. Halı ve Kumaştaki Kahve, Çay ve Meyve Suyu Lekeleri',
          paragraphs: [
            'Tanen içeren çay ve kahve lekelerinde ilk kural lekeyi dıştan içe doğru kağıt havluyla tamponlamaktır (ovalama yapmak leke halkasını büyütür). Ardından soğuk/ılık su, birkaç damla beyaz sirke ve sıvı deterjan karışımıyla müdahale edilmelidir.'
          ],
          bullets: [
            'Sıcak Su Kullanmayın: İlk müdahalede kaynar su dökmek özellikle sütlü kahve ve protein içerikli lekelerin kumaşa pişerek yapışmasına yol açar.',
            'Halıda Köpük Yöntemi: Yarım çay bardağı ılık suya 1 tatlı kaşığı beyaz sirke ve birkaç damla bulaşık deterjanı ekleyip mikrofiber bezle tamponlayın, ardından nemli temiz bezle durulayın.',
            'Tükenmez Kalem ve Mürekkep Lekesi: Kumaşın altına kağıt havlu koyup lekenin üzerine kolonya (veya izopropil alkol) damlatarak mürekkebin alt kağıda geçmesini sağlayın; asla sağa sola sürtmeyin.'
          ],
          callout: {
            type: 'warning',
            title: 'Kimyasal Güvenlik Uyarısı',
            message: 'Çamaşır suyunu (sodyum hipoklorit) kesinlikle sirke, tuz ruhu veya kireç çözücü gibi asidik ürünlerle ya da amonyaklı temizleyicilerle karıştırmayın; solunması son derece tehlikeli zehirli klor gazı açığa çıkar.'
          }
        }
      ]
    },
    faqs: [
      {
        question: 'Sarı ter ve deodorant lekeleri beyaz tişörtlerden nasıl çıkar?',
        answer: 'Sarı deodorant lekelerinde çamaşır suyu kullanmak alüminyum kalıntısıyla tepkimeye girerek sarılığı koyulaştırır. Bunun yerine karbonat, ılık su ve birkaç damla oksijenli su (veya beyaz sirke) macununu lekeye sürüp 30 dakika beklettikten sonra yıkayın.'
      },
      {
        question: 'Kan lekesi sıcak suyla mı soğuk suyla mı yıkanmalı?',
        answer: 'Kan protein yapılı olduğu için sıcak su proteini pıhtılaştırıp kumaşa kilitler. Kan lekesine mutlaka buz gibi soğuk su ve sabunla müdahale edilmelidir.'
      }
    ]
  },
  {
    id: 'post-14',
    slug: 'elektrik-faturasini-dusurmenin-etkili-10-yolu',
    title: 'Elektrik Faturasını Düşürmenin ve Evde Enerji Tasarrufunun Etkili Yolları',
    description: 'Evde en çok elektrik harcayan cihazlar hangileri? Buzdolabı, çamaşır/bulaşık makinesi, klima ve aydınlatmada faturayı %25’e kadar düşüren pratik yöntemler.',
    categorySlug: 'pratik-bilgiler',
    authorId: 'author-1',
    publishedAt: '2026-10-01',
    updatedAt: '2026-10-03',
    readTime: '6 dk',
    featured: false,
    trending: true,
    coverImage: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1200&auto=format&fit=crop&q=80',
    tags: ['Tasarruf', 'Elektrik Faturası', 'Enerji Verimliliği', 'Pratik Bilgiler'],
    content: {
      lead: 'Ev bütçesindeki en önemli sabit giderlerden biri olan elektrik faturasını düşürmek için konforunuzdan ödün vermenize gerek yoktur. Faturanın yaklaşık %70’ini oluşturan ısıtma/soğutma ve beyaz eşya kullanımında yapılacak doğru sıcaklık ve program ayarlarıyla aylık kWh tüketiminizi belirgin biçimde azaltabilirsiniz.',
      sections: [
        {
          id: 'beyaz-esya-tasarruf',
          heading: '1. Buzdolabı, Çamaşır ve Bulaşık Makinesinde Doğru Sıcaklık Ayarları',
          paragraphs: [
            'Evde 7 gün 24 saat kesintisiz çalışan tek cihaz buzdolabıdır ve toplam elektrik tüketiminin yaklaşık %25–30’unu tek başına gerçekleştirir. Çamaşır ve bulaşık makinelerinde ise enerjinin %85’i tamburu döndürmek için değil, suyu ısıtmak için harcanır.'
          ],
          bullets: [
            'Buzdolabı İdeal Derecesi: Soğutucu bölümü +4°C (veya +5°C), dondurucu bölümü ise -18°C olarak ayarlanmalıdır. Her 1 derecelik gereksiz daha soğuk ayar tüketimi %5–6 artırır.',
            'Hava Boşluğu ve Kapı Fitili: Buzdolabının arka ve yan duvarla arasında en az 5–10 cm hava sirkülasyon boşluğu bırakın; yıpranmış kapı lastiklerini değiştirin.',
            '40°C ve Eco Programlar: Çok kirli olmayan çamaşırları 60°C yerine 30°C veya 40°C’de yıkamak elektrik tüketimini neredeyse yarı yarıya düşürür.',
            'Bulaşık Makinesi Eco Modu: Eco programı daha uzun sürse de suyu daha düşük sıcaklıkta ısıttığı ve ıslatma süresini uzattığı için hızlı programlara göre %20–30 daha az elektrik ve su harcar.'
          ]
        },
        {
          id: 'bekleme-modu-ve-isitici',
          heading: '2. Rezistanslı Küçük Ev Aletleri, Klima ve Bekleme Modu (Standby) Yönetimi',
          paragraphs: [
            'İçerisinde ısıtıcı rezistans bulunan ütü, saç kurutma makinesi, elektrikli çaycı/kettle, airfryer ve elektrikli soba gibi cihazlar 1800 Watt ile 2400 Watt arasında güç çeker. Bu cihazların kullanım süresini optimize etmek doğrudan faturaya yansır.'
          ],
          steps: [
            {
              title: '1. Adım: Kettle ve Çaycıda İhtiyaç Kadar Su Kaynatın',
              description: 'Tek bir kupa kahve için kettle’ı ağzına kadar (1,5 litre) doldurup kaynatmak, gerekenin 4 katı elektrik harcar.'
            },
            {
              title: '2. Adım: Anahtarlı Grup Priz Kullanın',
              description: 'Televizyon, uydu alıcısı, oyun konsolu ve ses sistemini kullanmadığınız saatlerde anahtarlı prizden kapatarak yıllık 100–150 kWh bekleme (standby) tüketimini sıfırlayın.'
            },
            {
              title: '3. Adım: Tüm Ampulleri LED Aydınlatmaya Dönüştürün',
              description: 'Eski tip halojen veya akkor ampuller 60–75W harcarken aynı ışık akısını (lümen) veren LED ampuller yalnızca 8–9W enerji tüketir.'
            }
          ],
          callout: {
            type: 'info',
            title: 'Kademeli Elektrik Tarifesi Sınırı',
            message: 'Mesken abonelerinde günlük ortalama 8 kWh (aylık yaklaşık 240 kWh) tüketimin üzerindeki kullanımlar bir üst fiyat kademesinden ücretlendirilir. Aylık tüketimi 240 kWh sınırının altında tutmak fatura tutarını korumanın en etkili yoludur.'
          }
        }
      ]
    },
    faqs: [
      {
        question: 'Üç zamanlı (Gündüz - Puant - Gece) elektrik tarifesi kimler için avantajlıdır?',
        answer: 'Elektrikli otomobilini gece şarj edenler veya çamaşır/bulaşık makinesi ve ütü gibi yüksek tüketimli cihazlarını gece 22:00 – 06:00 saatleri arasında çalıştırabilen haneler için üç zamanlı tarife avantaj sağlar. Akşam 17:00 – 22:00 (Puant) saatlerinde yoğun kullanım yapanlar için ise tek zamanlı tarife daha ekonomiktir.'
      },
      {
        question: 'Modemi geceleri kapatmak faturayı düşürür mü?',
        answer: 'Standart bir ev modemi ortalama 8–12 Watt güç tüketir (ayda yaklaşık 7–8 kWh). Fatura üzerindeki etkisi küçük olsa da hem siber güvenlik hem de adaptör ömrü açısından uzun süreli ayrılıklarda kapatılması faydalıdır.'
      }
    ]
  },
  {
    id: 'post-15',
    slug: 'pasaport-randevusu-alma-ve-gerekli-evraklar-listesi',
    title: 'Pasaport Randevusu Alma, Başvuru Evrakları ve Harç Ödeme Rehberi (NVİ)',
    description: 'Bordo (Umuma Mahsus), Yeşil (Hususi) ve Öğrenci pasaportu başvurusu nasıl yapılır? NVİ randevu alma, harç/defter bedeli ödeme ve biyometrik fotoğraf kuralları.',
    categorySlug: 'pratik-bilgiler',
    authorId: 'author-1',
    publishedAt: '2026-09-29',
    updatedAt: '2026-10-01',
    readTime: '7 dk',
    featured: false,
    trending: false,
    coverImage: 'https://images.unsplash.com/photo-1544717305-2782549b5136?w=1200&auto=format&fit=crop&q=80',
    tags: ['Pasaport', 'NVİ Randevu', 'Seyahat', 'Bordo Pasaport', 'Yeşil Pasaport'],
    sources: [
      { title: 'NVİ: Pasaport işlemleri ve sıkça sorulan sorular', url: 'https://www.nvi.gov.tr/pasaport' },
      { title: 'NVİ Online Randevu Sistemi', url: 'https://randevu.nvi.gov.tr/' }
    ],
    content: {
      lead: 'Yurt dışı seyahatleri için ilk kez pasaport çıkaracak veya süresi dolan pasaportunu yenileyecek vatandaşların işlemlerini Nüfus ve Vatandaşlık İşleri Genel Müdürlüğü (NVİ) üzerinden yürütmesi gerekmektedir. Randevu alma, vergi dairesine online harç/defter bedeli yatırma ve başvuru günü yanınızda bulunması gereken evrakları adım adım listeledik.',
      sections: [
        {
          id: 'pasaport-adimlari',
          heading: '1. Adım Adım Pasaport Başvuru Süreci (Randevudan Teslimata)',
          paragraphs: [
            'Pasaport başvurusuna gitmeden önce harç ve defter bedelinin yatırılmış olması şarttır; nüfus müdürlüklerinde vezne veya nakit ödeme işlemi yapılmamaktadır.'
          ],
          steps: [
            {
              title: '1. Adım: Harç ve Defter Bedelini Online Yatırın',
              description: 'Dijital Vergi Dairesi (dijital.gib.gov.tr) veya anlaşmalı bankaların mobil uygulamalarındaki "Vergi / Harç Ödemeleri > Pasaport Harcı ve Değerli Kağıt Bedeli" menüsünden T.C. kimlik numaranızla ödemenizi yapın.'
            },
            {
              title: '2. Adım: NVİ veya e-Devlet Üzerinden Randevu Alın',
              description: 'randevu.nvi.gov.tr adresinden veya Alo 199 hattından il/ilçe nüfus müdürlüğü ve saat seçerek pasaport randevunuzu oluşturun.'
            },
            {
              title: '3. Adım: Başvuru Gününde Parmak İzi ve Evrak Teslimi',
              description: 'Randevu saatinizden 15 dakika önce kimlik kartınız ve biyometrik fotoğrafınızla nüfus müdürlüğünde hazır bulunun.'
            },
            {
              title: '4. Adım: PTT Kargo ile Adrese Teslim',
              description: 'Basımı tamamlanan pasaportunuz PTT Kargo aracılığıyla başvuru sırasında belirttiğiniz adrese veya şahsen teslim alması için yetkilendirdiğiniz kişiye ulaştırılır.'
            }
          ]
        },
        {
          id: 'evraklar',
          heading: '2. Pasaport Türlerine Göre Gerekli Evraklar Listesi',
          paragraphs: [
            'Sistemde ödemeniz elektronik olarak göründüğü için normal şartlarda banka dekontu çıktısı istenmez; ancak olası sistem kesintilerine karşı dekont PDF’ini telefonunuzda bulundurmanız önerilir.'
          ],
          bullets: [
            'T.C. Kimlik Kartı veya geçici kimlik belgesinin aslı.',
            'Son 6 ay içinde çekilmiş, arka fonu tamamen beyaz, 50x60 mm ölçülerinde 1 adet ICAO standartlarına uygun biyometrik fotoğraf.',
            'Daha önce alınmış ve iptal edilmemiş eski pasaportların aslı.',
            '18 yaşından küçükler (ergin olmayanlar) için anne ve babanın birlikte nüfus müdürlüğünde hazır bulunması veya noter onaylı muvafakatname.',
            'Yeşil (Hususi) Pasaport için: Emekli veya görevdeki kamu personelinin kurumundan ya da e-Devlet "Hususi Damgalı Pasaport Talep Formu" ekranından aldığı onaylı talep belgesi.'
          ],
          callout: {
            type: 'tip',
            title: '25 Yaş Altı Öğrencilere Harçsız Pasaport',
            message: 'Örgün veya açıköğretimde aktif öğrenciliği devam eden ve 25 yaşını henüz doldurmamış gençler pasaport harcından muaftır; yalnızca "Pasaport Defter (Değerli Kağıt) Bedeli" ödeyerek 25 yaş sınırına kadar geçerli pasaport alabilirler.'
          }
        }
      ]
    },
    faqs: [
      {
        question: 'Pasaport başvurudan sonra kaç günde elime ulaşır?',
        answer: 'Başvurunuz onaylandıktan ve pasaportunuz Gölbaşı/Ankara basım merkezinde basıldıktan sonra il merkezlerine genellikle 2–4 iş günü, ilçelere ise 4–7 iş günü içinde PTT Kargo ile teslim edilir.'
      },
      {
        question: 'Vize almak için pasaportun en az kaç ay geçerlilik süresi olmalı?',
        answer: 'Schengen bölgesi başta olmak üzere pek çok ülke, seyahat dönüş tarihinizden itibaren pasaportunuzun en az 3 veya 6 ay daha geçerli olmasını şart koşar. Bu nedenle 10 yıllık pasaport tercih etmek hem yıllık maliyet hem de vize kolaylığı açısından en avantajlı seçenektir.'
      }
    ]
  },
  {
    id: 'post-new-16',
    slug: 'pc-oyunlarinda-takilma-ve-fps-dususu-teshis-rehberi',
    title: 'PC Oyunlarında Takılma ve FPS Düşüşü: Adım Adım Teşhis Rehberi',
    description: 'Oyun içi takılma, anlık FPS düşüşü ve uzun yükleme sorunlarını güvenli sırayla ayırt edip çözmek için ölçülebilir kontrol listesi.',
    categorySlug: 'oyun-donanim',
    authorId: 'author-1',
    publishedAt: '2026-09-27',
    updatedAt: '2026-09-29',
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
        {
          id: 'sorunu-tanimla', heading: 'Önce Sorunun Türünü Ayırın', paragraphs: [
            'FPS sürekli düşükse çözünürlük ve grafik ayarları sistem kapasitesini aşıyor olabilir. FPS yüksek görünürken görüntü aralıklı donuyorsa frametime sıçraması, shader derlemesi, veri akışı veya arka plan işi olasılıkları düşünülür. Yalnızca çevrimiçi maçta oyuncular ışınlanıyor ya da komutlar geç işleniyorsa FPS’den çok ping ve paket kaybını kontrol edin.',
            'Aynı sahnede kısa bir test yapın ve değişiklikleri tek tek uygulayın. Her seferinde birkaç ayarı birden değiştirmek hangi adımın etkili olduğunu anlamayı zorlaştırır.'
          ]
        },
        {
          id: 'ilk-olcum', heading: 'Aynı Sahneyi Kullanarak Basit Ölçüm Yapın', paragraphs: [
            'Oyunun yerleşik performans göstergesini veya güvenilir bir FPS sayacını açın. Mümkünse ortalama FPS yanında frametime grafiğini de izleyin; tek bir ortalama kısa takılmaları saklayabilir. Karşılaştırma için aynı kayıt, eğitim alanı veya tekrarlanabilir sahneyi kullanın ve test süresini benzer tutun.',
            'Test sırasında sıcaklık ve kullanım değerlerine bakacaksanız üretici yazılımı veya Windows’un araçlarını tercih edin. Bilinmeyen “FPS artırıcı” programları kurmayın; bindirme araçları bazı oyunlarla çakışabileceği için sorun giderirken gereksiz overlay’leri geçici olarak kapatıp tekrar karşılaştırın.'
          ]
        },
        {
          id: 'shader-ve-ilk-acilis', heading: 'İlk Açılışta veya Güncellemeden Sonra Takılıyorsa', paragraphs: [
            'Bazı oyunlar ilk çalıştırmada veya grafik sürücüsü/oyun güncellemesinden sonra shader derler. Bu sırada kısa süreli takılma görülebilir. Oyunun menüsünde derleme göstergesi varsa bitmesini bekleyin; tekrar eden takılmaların oyuna özgü bilinen bir sorun olup olmadığını oyunun resmi destek notlarında ve PCGamingWiki’nin ilgili oyun sayfasında kontrol edin.',
            'Shader önbelleğini gelişigüzel silmek sorunu çözmek yerine derlemeyi yeniden başlatabilir. Bu adımı ancak oyunun veya GPU üreticisinin soruna özel talimatı varsa uygulayın.'
          ], callout: { type: 'tip', title: 'İlk testte sabırlı olun', message: 'Sürücü ya da oyun güncellemesinden sonraki ilk açılışı sonraki oturumlarla karşılaştırın; tek seferlik derleme takılmasını kalıcı performans sorunu sanmayın.' }
        },
        {
          id: 'guvenli-kontrol-sirasi', heading: 'Güvenli Sorun Giderme Sırası', paragraphs: ['Aşağıdaki basamakları sırayla deneyin; her adımdan sonra aynı sahnede yeniden ölçün:'], steps: [
            { title: 'Oyunu ve bilgisayarı yeniden başlatın', description: 'Geçici takılma veya askıda kalmış işlem olup olmadığını ayırın.' },
            { title: 'Sistem gereksinimlerini ve güç modunu kontrol edin', description: 'Dizüstünde adaptörün bağlı olduğuna, oyunun doğru GPU’yu kullandığına ve güç tasarruf modunun performansı sınırlamadığına bakın.' },
            { title: 'Sıcaklık ve arka plan yükünü gözleyin', description: 'Görev Yöneticisi’nde CPU, GPU, bellek ve disk kullanımına bakın. Isı artarken saat hızları düşüyorsa hava kanallarını kapatmadığınızdan emin olun; cihazı açıp müdahale etmek yerine üretici servisine başvurun.' },
            { title: 'Grafik ayarlarını tek tek düşürün', description: 'Önce ışın izleme, gölge, görüş mesafesi ve doku ayarlarını karşılaştırın. Her değişiklikten sonra aynı sahnede test edin.' },
            { title: 'Oyun dosyalarını doğrulayın', description: 'Steam’de Kütüphane > oyuna sağ tık > Özellikler > Yüklü Dosyalar > Dosyaların bütünlüğünü doğrula yolunu kullanın. İşlem birkaç dakika sürebilir.' },
            { title: 'Güncellemeleri kontrollü uygulayın', description: 'Windows ve ekran kartı sürücülerini resmi kanallardan güncelleyin. Sorun bir sürücü güncellemesinin hemen ardından başladıysa üreticinin geri alma yönergesini izleyin.' }
          ]
        },
        {
          id: 'ne-zaman-destek', heading: 'Ne Zaman Oyunun Desteğine Başvurmalı?', paragraphs: [
            'Sorun yalnızca tek oyunda yaşanıyorsa oyun sürümü, hata mesajı, sistem özellikleri ve tekrar üretme adımlarını not edip oyunun resmi destek kanalına iletin. Birden fazla oyunda çökme, görüntü bozulması, yeniden başlama veya mavi ekran varsa donanım ve sürücü incelemesi gerekebilir; rastgele BIOS ayarı değiştirmeyin.',
            'Bu rehber genel teşhis sırası sunar. Her oyunun motoru, sürümü ve bilgisayar bileşenleri farklı olduğundan tek bir ayar tüm sistemlerde aynı sonucu vermez.'
          ]
        }
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
    publishedAt: '2026-09-26',
    updatedAt: '2026-09-28',
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
        {
          id: 'rapor-olustur', heading: 'Battery Report Nasıl Oluşturulur?', paragraphs: ['Komut İstemi’ni açıp Windows’un yerleşik rapor komutunu çalıştırın. Yönetici yetkisi gerekirse istemi yönetici olarak açın. Raporun kaydedildiği konum komut çıktısında gösterilir.'], steps: [
            { title: 'Başlat menüsünde Komut İstemi’ni arayın', description: 'Windows aramasına Komut İstemi yazın; gerekirse yönetici olarak çalıştırın.' },
            { title: 'Rapor komutunu girin', description: 'powercfg /batteryreport yazıp Enter’a basın.' },
            { title: 'HTML raporunu açın', description: 'Komut çıktısında belirtilen dosya yoluna gidip battery-report.html dosyasını tarayıcıda açın.' }
          ]
        },
        {
          id: 'kapasite-karsilastir', heading: 'Design Capacity ve Full Charge Capacity Ne Anlama Gelir?', paragraphs: [
            'Design Capacity pilin tasarlanmış kapasitesini, Full Charge Capacity ise raporun ölçtüğü mevcut tam dolum kapasitesini gösterir. İkinci değer zamanla düşebilir. Yaklaşık sağlık oranı için Full Charge Capacity değerini Design Capacity değerine bölüp 100 ile çarpabilirsiniz; bu yalnızca kabaca karşılaştırma sağlar.',
            'Örnek: tasarım kapasitesi 50.000 mWh, tam dolum kapasitesi 40.000 mWh ise rapor değerleri yaklaşık yüzde 80 oranına karşılık gelir. Üretici ölçüm yöntemi, sıcaklık ve pilin durumu sonucu etkileyebilir; tek ölçümü kesin arıza kararı saymayın.'
          ]
        },
        {
          id: 'kullanim-gecmisi', heading: 'Usage History ve Battery Usage Bölümlerini İnceleyin', paragraphs: [
            'Usage History bölümündeki süre ve kapasite kayıtları, pil kullanımının zamanla nasıl değiştiğini görmeye yardımcı olur. Battery Usage yakın dönem tüketimini gösterir. Şarjın hızla düştüğü saatlerde hangi uygulamaların açık olduğunu Windows Ayarları’ndaki güç/pil kullanım ekranıyla birlikte inceleyin.',
            'Eski bir rapor son durumu yansıtmayabilir. Ölçümü karşılaştıracaksanız bilgisayarı normal kullanımda birkaç kez kullanıp raporu yeniden oluşturun ve aynı koşulları not edin.'
          ]
        },
        {
          id: 'pil-omru-ve-servis', heading: 'Pil Ömrünü Uzatmak ve Servis Gerektiren Durumlar', paragraphs: [
            'Ekran parlaklığını ihtiyacınıza göre azaltmak, kullanılmayan kablosuz bağlantıları kapatmak ve gereksiz arka plan uygulamalarını sınırlamak tüketimi azaltabilir. Pil şişmesi, kasada açıklık, olağandışı ısınma veya koku fark ederseniz cihazı kullanmayı bırakıp üretici servisinden destek alın; pili delmeyin veya kendiniz sökmeyin.',
            'Şarj kapasitesi belirgin düşmüşse cihaz üreticisinin pil tanılama aracını ve garanti koşullarını kontrol edin. Battery report bir bakım/garanti kararı yerine geçmez.'
          ], callout: { type: 'warning', title: 'Fiziksel pil hasarında', message: 'Şişmiş ya da hasarlı pili kullanmaya devam etmeyin ve kendiniz açmaya çalışmayın; üretici veya yetkili servisten yardım alın.' }
        }
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
    authorId: 'author-1',
    publishedAt: '2026-09-24',
    updatedAt: '2026-09-26',
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
        {
          id: 'gerekenler', heading: 'Etkinleştirmeden Önce Gerekenler', paragraphs: [
            'e-Devlet Kapısı yardım sayfasına göre hesabınızda kimlikle doğrulanmış, yurt içi bir cep telefonu numarası bulunmalıdır. Numaranız eskiyse önce resmi hesap ayarlarından güncelleyin; başkasına ait numarayı hesabınıza bağlamayın.',
            'SMS kodu hesabın güvenlik adımının parçasıdır. Kodu isteyen arama, mesaj veya bağlantılara karşı dikkatli olun; e-Devlet çalışanı olduğunu söyleyen kişilere doğrulama kodunuzu paylaşmayın.'
          ]
        },
        {
          id: 'webden-acma', heading: 'Tarayıcıdan İki Aşamalı Girişi Açma', paragraphs: ['Resmi adresi kendiniz yazarak açın ve hesabınıza giriş yaptıktan sonra şu yolu izleyin:'], steps: [
            { title: 'Güvenlik ayarlarına gidin', description: 'Hesap menüsündeki Güvenlik ve Ayarlar / Şifre ve Güvenlik Ayarlarım sayfasını açın.' },
            { title: 'İki Aşamalı Giriş İşlemleri’ni seçin', description: 'İki aşamalı giriş alanında Aktif seçeneğini işaretleyip kullanım şartlarını okuyun ve onay kutusunu seçin.' },
            { title: 'Ayarı kaydedin', description: 'Ayarları Kaydet düğmesine basın. Kimlikle doğrulanmış telefonunuza gelen SMS kodunu ekrana girin.' },
            { title: 'Doğrulamayı tamamlayın', description: 'Doğrula düğmesine bastıktan sonra ayarın etkin olduğunu aynı ekrandan kontrol edin.' }
          ]
        },
        {
          id: 'uygulamadan-acma', heading: 'Mobil Uygulamadan Etkinleştirme', paragraphs: [
            'Resmi e-Devlet Kapısı uygulamasında hesabınıza giriş yapın. Profilim > Ayarlar > İki Aşamalı Giriş İşlemleri bölümüne gidin, kullanım şartlarını onaylayıp İki Aşamalı Girişi Aç düğmesine dokunun ve kayıtlı telefonunuza gelen kodu doğrulayın. Uygulama sürümüne göre menü adı veya yeri değişebilir; ekrandaki güncel resmi yönlendirmeyi izleyin.'
          ]
        },
        {
          id: 'sorun-giderme', heading: 'SMS Kodu Gelmiyor veya Girişte Sorun Çıkıyorsa', paragraphs: [
            'Önce telefonda sinyal bulunduğunu, numaranın doğru ve kimlikle doğrulanmış olduğunu kontrol edin. Kısa süre bekleyip yeniden kod isteme seçeneği varsa yalnızca resmi giriş sayfasındaki işlemi kullanın. Numara değiştiyse veya hesabınıza erişemiyorsanız e-Devlet Kapısı’nın resmi iletişim/yardım kanalına başvurun.',
            'Kayıtlı numaraya erişiminiz yokken e-posta ya da arama yoluyla gelen “hesabınızı açalım” tekliflerine güvenmeyin. Şifrenizi ve SMS kodunu kimseyle paylaşmayın; adres çubuğunda turkiye.gov.tr alan adını kontrol edin.'
          ], callout: { type: 'warning', title: 'Doğrulama kodunu paylaşmayın', message: 'Tek kullanımlık SMS kodu hesabınıza giriş izni verebilir. Resmi giriş ekranı dışında hiçbir kişi veya siteyle paylaşmayın.' }
        },
        {
          id: 'kapatma-ve-yedek', heading: 'Telefonunuza Erişiminiz Kesilirse', paragraphs: [
            'İki aşamalı giriş ayarını değiştirme veya kapatma işlemlerini yalnızca e-Devlet’in kendi güvenlik ayarlarından yapın. Telefon kaybında önce mobil operatörünüzle hattınızı güvene alın; başka bir cihazdan hesabınıza erişemiyorsanız resmi yardım kanallarını kullanın. Menü ve kurtarma seçenekleri değişebildiği için üçüncü tarafların paylaştığı kodları veya uygulamaları kullanmayın.'
          ]
        }
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
    authorId: 'author-1',
    publishedAt: '2026-09-22',
    updatedAt: '2026-09-24',
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
        {
          id: 'bulut-kaydi-nasil-calisir', heading: 'Steam Cloud Her Oyunda Aynı Şekilde Çalışmaz', paragraphs: [
            'Steam Cloud, oyuna bağlı olarak kayıt dosyalarını, ayarları veya başka kullanıcı verilerini saklayabilir. Her oyun desteklemez ve hangi dosyaların eşitlendiğini geliştirici belirler. Oyunun mağaza sayfasında Steam Cloud desteğini, oyun özelliklerinde ise eşitleme ayarını kontrol edin.',
            'Çevrimdışı modda oynanan oturum buluta gönderilmeden kalabilir. Son oynadığınız cihazı ve tarihi hatırlamak bu yüzden önemlidir.'
          ]
        },
        {
          id: 'cakisma-ekrani', heading: 'Çakışma Ekranında Hangi Kaydı Seçmeli?', paragraphs: [
            'Steam iki farklı sürüm gördüğünde yerel dosya ve bulut kaydının tarih/saat bilgilerini gösterir. En son ilerlemenizi yaptığınız oturumu ve o oturumun hangi cihazda gerçekleştiğini karşılaştırın. Son oynadığınız kayıt yerelse yerel sürüm; başka cihazda buluta gönderildiyse bulut sürümü doğru olabilir. Yalnızca “en yeni görünen” tarihe güvenmeden önce cihaz saatinin doğru olup olmadığını da hesaba katın.',
            'Karar veremiyorsanız oyunu hemen başlatıp seçeneklerden birini seçmeyin. Önce Steam’in resmi yardım yönergesini okuyun ve mümkünse mevcut yerel kayıt klasörünü başka bir yere kopyalayarak yedekleyin; kayıt klasörünün yeri oyuna göre değişir.'
          ], callout: { type: 'warning', title: 'Üzerine yazma riski', message: 'Çakışma penceresini gelişigüzel kapatıp oyunu başlatmak kayıtların üzerine yazılmasına neden olabilir. İlerlemeyi hangi cihazda yaptığınızı doğrulamadan seçim yapmayın.' }
        },
        {
          id: 'esitleme-hatasi', heading: 'Cloud Eşitleme Hatası Varsa', paragraphs: ['Steam, eşitleme başarısızken oyunu başlatmanın yerel ve bulut dosyaları arasında yeni bir çakışma yaratabileceği konusunda uyarıyor. Şu kontrolleri sırayla yapın:'], steps: [
            { title: 'Steam bağlantısını ve hizmet durumunu kontrol edin', description: 'Steam’i çevrimiçi moda alın; internet bağlantısının çalıştığını doğrulayın.' },
            { title: 'Açık oturumları kapatın', description: 'Aynı oyunun başka bilgisayarda açık olmadığından ve önceki oturumun eşitlemesinin tamamlandığından emin olun.' },
            { title: 'Oyunun Cloud ayarına bakın', description: 'Kütüphane’de oyuna sağ tıklayıp Özellikler > Genel içindeki Steam Cloud seçeneğini kontrol edin.' },
            { title: 'Son değişiklikleri yedekleyin', description: 'Oyuna özgü kayıt dosyalarını bulup kopyalayın; konum oyun ve işletim sistemine göre değişir.' },
            { title: 'Hata sürerse resmi Steam desteğine başvurun', description: 'Oyunu tekrar tekrar başlatmak yerine hata mesajını ve kullandığınız cihazları not ederek Steam’in yönergesini izleyin.' }
          ]
        },
        {
          id: 'desteklemeyen-oyun', heading: 'Oyun Steam Cloud Kullanmadığında', paragraphs: [
            'Bulut kaydı yoksa ilerleme yalnızca yerel cihazda veya oyunun kendi hesabında tutulabilir. Yeni bilgisayara geçmeden önce geliştiricinin kayıt taşıma talimatlarını bulun ve eski cihaza erişiminiz varken yedek alın. Steam Cloud her oyunun kayıtlarını geri getiremez.'
          ]
        }
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
    publishedAt: '2026-09-20',
    updatedAt: '2026-09-22',
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
        {
          id: 'ne-kadar-yer-var', heading: 'Önce Kullanılan Alanı ve Büyük Dosyaları Bulun', paragraphs: [
            'Dosya Gezgini’nde Bu Bilgisayar bölümünü açarak disklerde kalan boş alanı görün. Windows Ayarları > Sistem > Depolama ekranı geçici dosyalar, uygulamalar ve diğer kategorilerin yaklaşık kullanımını gösterir.',
            'Kişisel dosyaları Dosya Gezgini’nde boyuta göre sıralayın. Eski videolar, kurulum dosyaları ve büyük arşivler çok yer kaplayabilir; silmek yerine harici diske taşımak isteyebilirsiniz.'
          ]
        },
        {
          id: 'cleanup-recommendations', heading: 'Temizleme Önerilerini İnceleyin', paragraphs: [
            'Windows 11’de Ayarlar > Sistem > Depolama > Temizleme önerileri bölümünde geçici dosyalar, büyük/kullanılmayan dosyalar ve kullanılmayan uygulamalar ayrı listelenebilir. Her kategoriyi açıp seçilen öğelerin ne olduğunu kontrol edin. Windows 10’da seçeneklerin adı veya konumu farklı olabilir.'
          ]
        },
        {
          id: 'storage-sense-ayari', heading: 'Storage Sense’i Ayarlarken Dikkat Edin', paragraphs: [
            'Storage Sense, sistem sürücüsündeki (genellikle C:) belirli geçici dosyaları ve Geri Dönüşüm Kutusu içeriğini otomatik temizleyebilir. Microsoft’un belirttiği varsayılanlarda İndirilenler klasörü silinmez; ancak ayardan İndirilenler için süre seçerseniz açılmayan dosyalar kaldırılabilir. Bu seçeneği etkinleştirmeden önce klasörünüzü gözden geçirin.',
            'OneDrive bulut dosyaları için “yalnızca çevrimiçi” ayarı, dosyayı buluttan kalıcı silmekten farklıdır; internet olduğunda tekrar indirilebilir. Yine de yerel kopya sizin için önemliyse “bu cihazda her zaman tut” seçeneğini ve senkronizasyon durumunu kontrol edin.'
          ], steps: [
            { title: 'Ayarlar > Sistem > Depolama’yı açın', description: 'Storage Sense’i etkinleştirmeden önce geçici dosyalar ve diğer kategorilerin içeriğine bakın.' },
            { title: 'Storage Sense ayarlarına girin', description: 'Çalışma sıklığını, Geri Dönüşüm Kutusu ve İndirilenler için ayrı saklama sürelerini inceleyin.' },
            { title: 'İlk temizliği elle başlatın', description: 'Önerilen dosyaları seçip neyin kaldırılacağını kontrol ettikten sonra temizleyin.' },
            { title: 'Sonucu tekrar ölçün', description: 'Depolama ekranını yenileyip açılan alanı kontrol edin; yeterli alan oluştuysa diğer temizleme adımlarına geçmeyin.' }
          ]
        },
        {
          id: 'windows-old-uyarisi', heading: 'Windows.old ve Geri Dönüşüm Kutusu Uyarısı', paragraphs: [
            'Önceki Windows kurulum dosyalarını silmek, önceki sürüme geri dönme seçeneğini kaldırabilir. Geri Dönüşüm Kutusu’nu boşaltmak da içindeki dosyaları geri alınamaz biçimde siler. Bu bölümlerdeki içeriği gerçekten istemediğinizden emin olmadan temizlemeyin.',
            'Temizlikten sonra alan hâlâ dolu görünüyorsa tüm geçici klasörleri elle silmek yerine Windows’un depolama önerilerini ve Microsoft destek yönergelerini izleyin.'
          ], callout: { type: 'warning', title: 'Önemli dosyaları yedekleyin', message: 'İndirilenler, Geri Dönüşüm Kutusu veya Windows.old içeriğini temizlemek dosyaları ya da geri dönme seçeneğini kalıcı olarak kaldırabilir.' }
        }
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
    publishedAt: '2026-09-18',
    updatedAt: '2026-09-20',
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
        {
          id: 'depolama-analizi', heading: 'Telefon Hafızasında Nelerin Yer Kapladığını Bulun', paragraphs: [
            'Ayarlar > Depolama ekranında uygulamalar, fotoğraflar, videolar, indirilenler ve sistem alanının dağılımını inceleyin. Android üreticisine göre menü adı değişebilir. Büyük uygulamalar arasında kullanılmayanları belirleyin; uygulamayı kaldırmak yerel verilerini de silebilir.'
          ]
        },
        {
          id: 'files-by-google-temizleme', heading: 'Files by Google Önerilerini Gözden Geçirin', paragraphs: [
            'Files by Google yüklüyse Temizle sekmesindeki önerileri kullanabilirsiniz. Google’ın yardımına göre uygulama gereksiz dosyaları bulmaya ve dosyalara göz atmaya yardımcı olur. Her öneride hangi dosyaların seçildiğini açıp kontrol edin; öneri, dosyanın sizin için önemsiz olduğu anlamına gelmez.',
            'İndirilenler klasöründe belge, bilet, makbuz veya çevrimdışı dosyalar bulunabilir. Tanımadığınız klasörleri topluca silmek yerine dosya adını ve içeriğini kontrol edin.'
          ], steps: [
            { title: 'Depolama ekranını açın', description: 'Ayarlar’da Depolama bölümünden dolu kategoriyi tespit edin.' },
            { title: 'Files by Google’da Temizle’yi açın', description: 'Öneri kartlarının içindeki dosya listesini tek tek gözden geçirin.' },
            { title: 'Yalnızca emin olduklarınızı seçin', description: 'Silinecek öğeleri seçip onay ekranındaki dosya adlarını yeniden kontrol edin.' },
            { title: 'Boş alanı tekrar kontrol edin', description: 'İşlem bittikten sonra Depolama ekranında açılan alanı ölçün.' }
          ]
        },
        {
          id: 'fotograf-yedekleme', heading: 'Fotoğraf ve Videoları Silmeden Önce Yedek Durumunu Doğrulayın', paragraphs: [
            'Bulut yedekleme kullanıyorsanız uygulamada yüklemenin tamamlandığını ve doğru Google hesabının seçili olduğunu kontrol edin. Senkronizasyon beklemede olan içerik telefondan silinirse yedek kopya olmayabilir. Önemli dosyaları ayrıca bilgisayara veya harici ortama kopyalayabilirsiniz.',
            'Google Fotoğraflar’da cihazdan yer açma işlemi yerel kopyaları kaldırabilir; bulut yedekleme durumu, çöp kutusu ve çevrimdışı erişim beklentinizi önceden kontrol edin. İşlem sonrası bazı içerikler internet olmadan görünmeyebilir.'
          ], callout: { type: 'warning', title: 'Yedek kontrolü yapın', message: 'Fotoğraf ve videoları silmeden önce yüklemenin tamamlandığını farklı bir cihazdan veya web arayüzünden kontrol edin.' }
        },
        {
          id: 'onbellek-ve-veri', heading: 'Önbelleği Temizlemek ile Uygulama Verisini Silmek Farklıdır', paragraphs: [
            'Önbellek, uygulamanın yeniden oluşturabileceği geçici dosyalardır; temizlenince uygulama bazı içerikleri yeniden indirebilir. Depolamayı temizle/veriyi sil seçeneği ise oturum bilgileri, ayarlar veya yerel kayıtlar gibi kalıcı uygulama verilerini kaldırabilir. Özellikle mesajlaşma, not, oyun ve kimlik doğrulama uygulamalarında yedek almadan veri silmeyin.',
            'Depolama alanı sürekli hızla doluyorsa büyük video kayıtlarını, çevrimdışı müzik/harita indirmelerini ve mesajlaşma uygulamalarının medya klasörlerini ayrı ayrı inceleyin.'
          ]
        }
      ]
    },
    faqs: [
      { question: 'Android’de önbelleği temizlemek fotoğrafları siler mi?', answer: 'Uygulama önbelleği ile fotoğraf klasörleri farklıdır; ancak yanlışlıkla uygulama verisini silmemek için ekrandaki seçeneğin adını ve kapsamını kontrol edin.' },
      { question: 'Files by Google önerdiği her dosyayı silebilir miyim?', answer: 'Hayır. Önerilen dosyaları silmeden önce adını ve içeriğini inceleyin; uygulama dosyanın sizin için gerekli olup olmadığını bilemez.' }
    ]
  }
];

export const posts: Post[] = [...bilgirotasiPosts, ...originalPosts];

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
