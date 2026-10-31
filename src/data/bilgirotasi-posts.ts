import { Post } from '@/types';

// Bilgi Rotası özgün ve kapsamlı rehber içerikleri.
export const bilgirotasiPosts: Post[] = [
  {
    "id": "bilgirotasi-cs2-fps",
    "slug": "cs2-fps-gosterme-ve-performans-ipuclari",
    "title": "Counter-Strike 2’de (CS2) FPS Nasıl Gösterilir? Konsol Komutu ve Telemetri Ayarları",
    "description": "Counter-Strike 2’de oyun içi telemetri ayarları, geliştirici konsolu (cl_showfps) ve Steam arayüzü ile FPS, ping ve paket kaybı göstergesini açma rehberi.",
    "categorySlug": "oyun-donanim",
    "authorId": "author-1",
    "publishedAt": "2026-10-31",
    "updatedAt": "2026-10-31",
    "readTime": "6 dk",
    "coverImage": "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "CS2",
      "Counter-Strike 2",
      "FPS Gösterme",
      "Konsol Komutları",
      "Oyun Performansı"
    ],
    "content": {
      "lead": "Counter-Strike 2 (CS2) oynarken anlık kare hızını (FPS), ağ gecikmesini (ms/ping) ve kare süresi dalgalanmalarını takip etmek, takılma veya gecikme sorunlarının kaynağını bulmanın en hızlı yoludur. CS:GO dönemindeki net_graph 1 komutu CS2’de yerini oyun içi \"Telemetri\" menüsüne ve cl_showfps komutuna bırakmıştır. Bu rehberde konsol açmadan menüden, geliştirici konsoluyla ve Steam arayüzüyle FPS sayacını nasıl etkinleştireceğinizi adım adım bulabilirsiniz.",
      "sections": [
        {
          "id": "cs2-telemetri-ile-fps-gosterme",
          "heading": "1. Yöntem: CS2 Oyun İçi Telemetri Ayarları ile FPS ve Ping Gösterme",
          "paragraphs": [
            "CS2’de herhangi bir konsol komutu yazmadan, doğrudan oyun ayarları içindeki Telemetri bölümü üzerinden hem FPS hem de ağ gecikmesi (ping ve paket kaybı) verilerini ekranın sağ üst köşesinde gösterebilirsiniz.",
            "Bu yöntem oyundan çıkıp tekrar girdiğinizde de sıfırlanmaz ve ekranı gereksiz teknik satırlarla doldurmadan en okunaklı görünümü sunar."
          ],
          "steps": [
            {
              "title": "1. Adım: Oyun Ayarlarını Açın",
              "description": "CS2 ana ekranında sol üst köşedeki çark (Ayarlar) simgesine tıklayın ve üst sekmeden \"Oyun\" (Game) bölümüne geçin."
            },
            {
              "title": "2. Adım: Telemetri Bölümü’ne İnin",
              "description": "Oyun sekmesinin alt kısmında yer alan \"Telemetri\" (Telemetry) başlığını bulun."
            },
            {
              "title": "3. Adım: Kare Süresi ve FPS Gösterimini Etkinleştirin",
              "description": "\"Kare süresini ve FPS’yi göster\" (Show Frame Time and FPS) seçeneğini \"Her Zaman\" (Always) veya \"Koşullar Kötüyse\" olarak ayarlayın."
            },
            {
              "title": "4. Adım: Ping ve Paket Kaybını Ekleyin",
              "description": "Aynı menüden \"Ping’i göster\" ve \"Ağ sorunlarını göster\" seçeneklerini de \"Her Zaman\" yaparak tam bir performans takip ekranı elde edin."
            }
          ],
          "callout": {
            "type": "tip",
            "title": "Neden Telemetri Menüsü Tercih Edilmeli?",
            "message": "Konsol komutları yalnızca FPS sayısını gösterirken, Telemetri menüsü kare oluşturma süresini (ms) de gösterir. Böylece takılmanın ekran kartından mı yoksa internet bağlantısından mı kaynaklandığını kolayca ayırt edebilirsiniz."
          }
        },
        {
          "id": "cs2-konsol-komutu-cl-showfps",
          "heading": "2. Yöntem: Geliştirici Konsolu ile FPS Gösterme Kodu (cl_showfps)",
          "paragraphs": [
            "Hızlıca geliştirici konsolundan FPS sayacını açıp kapatmak istiyorsanız CS2’de yerleşik olarak bulunan cl_showfps komutunu kullanabilirsiniz. Bunun için öncelikle geliştirici konsolunun açık olması gerekir."
          ],
          "steps": [
            {
              "title": "1. Adım: Geliştirici Konsolunu Etkinleştirin",
              "description": "Ayarlar > Oyun sekmesinde \"Geliştirici Konsolunu Etkinleştir (~)\" seçeneğini \"Evet\" konumuna getirin."
            },
            {
              "title": "2. Adım: Konsolu Açın ve Kodu Yazın",
              "description": "Klavyede ESC tuşunun altındaki \"~\" veya \"é\" tuşuna basarak konsolu açın, satıra cl_showfps 1 yazıp Enter tuşuna basın."
            },
            {
              "title": "3. Adım: Sayacı Kapatmak İçin",
              "description": "FPS göstergesini gizlemek istediğinizde konsolu tekrar açıp cl_showfps 0 komutunu girmeniz yeterlidir."
            }
          ],
          "bullets": [
            "cl_showfps 1: Ekranın köşesinde anlık FPS değerini açar.",
            "cl_showfps 2: FPS ile birlikte ortalama ve en düşük kare süresi istatistiklerini gösterir.",
            "cl_showfps 0: Konsol tabanlı FPS sayacını tamamen kapatır.",
            "fps_max 0: Oyun içi kare hızı sınırını kaldırır (veya örneğin fps_max 240 ile 240 kareye sabitler)."
          ]
        },
        {
          "id": "steam-arayuzu-ile-fps-sayaci",
          "heading": "3. Yöntem: Steam Oyun İçi Arayüzü ile FPS Gösterme",
          "paragraphs": [
            "Oyun içi yazı tipi yerine küçük ve sade bir sayaç tercih ediyorsanız Steam’in kendi FPS göstergesini açabilirsiniz. Bu ayar yalnızca CS2’de değil, tüm Steam oyunlarında çalışır."
          ],
          "bullets": [
            "Oyun içindeyken Shift + Tab tuşlarına basarak Steam arayüzünü açın (veya masaüstünde Steam > Ayarlar > Oyun İçi menüsüne girin).",
            "\"Oyun İçi FPS Sayacı\" seçeneğini ekranın istediğiniz köşesine (Sol Üst, Sağ Üst, Sağ Alt veya Sol Alt) ayarlayın.",
            "Sayacın açık renkli haritalarda daha rahat okunması için \"Yüksek kontrastlı renk\" kutucuğunu işaretleyin."
          ]
        },
        {
          "id": "cs2-fps-ve-ms-degerleri-nasil-yorumlanir",
          "heading": "CS2’de FPS ve Kare Süresi (ms) Değerleri Nasıl Yorumlanmalı?",
          "paragraphs": [
            "Yalnızca ortalama FPS değerinin yüksek olması oyunun her an akıcı hissettireceği anlamına gelmez. Özellikle duman bombası (smoke), molotof ve çoklu çatışma anlarında \"kare süresi\" (frame time - ms) değerinin sabit kalması rekabetçi oyunlarda çok daha belirleyicidir.",
            "Örneğin 144 Hz bir monitör kullanıyorsanız FPS değerinizin 144’ün altına düşmemesi ve kare süresinin 6–8 ms bandında düzenli seyretmesi idealdir. FPS yüksek olduğu halde ekranda anlık takılma (stutter) görüyorsanız kare süresi 25–40 ms seviyelerine sıçrıyor olabilir; bu durumda gölgelendirici önbelleğini, arka plan uygulamalarını ve güncel ekran kartı sürücüsünü kontrol etmeniz önerilir."
          ],
          "callout": {
            "type": "warning",
            "title": "CS:GO’daki net_graph 1 Komutu Neden Çalışmıyor?",
            "message": "Source 2 motoruna geçişle birlikte eski net_graph 1 komutu kaldırılmıştır. Aynı verileri görmek için Ayarlar > Oyun > Telemetri menüsünü kullanmalısınız."
          }
        }
      ]
    },
    "faqs": [
      {
        "question": "CS2’de FPS gösterme kodu nedir?",
        "answer": "Geliştirici konsoluna cl_showfps 1 yazarak FPS sayacını açabilir, cl_showfps 0 yazarak kapatabilirsiniz. Kalıcı ve daha okunaklı gösterim için Ayarlar > Oyun > Telemetri menüsünü kullanabilirsiniz."
      },
      {
        "question": "CS2’de net_graph 1 komutu neden çalışmıyor?",
        "answer": "Counter-Strike 2 (Source 2 motoru) ile birlikte net_graph komutu kaldırılmış ve yerine oyun içi Ayarlar > Oyun > Telemetri (Telemetry) paneli getirilmiştir."
      },
      {
        "question": "FPS sayacını açmak oyun performansını düşürür mü?",
        "answer": "Oyun içi Telemetri veya Steam FPS sayacı sistem kaynaklarını ihmal edilebilecek düzeyde kullanır ve performans üzerinde hissedilir bir düşüş yaratmaz."
      }
    ]
  },
  {
    "id": "bilgirotasi-telefon-secimi",
    "slug": "telefon-alirken-kontrol-edilecek-ozellikler",
    "title": "Telefon Alırken Hangi Özelliklere Bakılmalı? Adım Adım Akıllı Telefon Seçim Rehberi",
    "description": "Yeni bir akıllı telefon satın almadan önce ekran paneli, işlemci, RAM, kamera sensörü, batarya sağlığı ve güncelleme desteğini değerlendirme rehberi.",
    "categorySlug": "teknoloji-mobil",
    "authorId": "author-1",
    "publishedAt": "2026-10-31",
    "updatedAt": "2026-10-31",
    "readTime": "7 dk",
    "coverImage": "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "Akıllı Telefon",
      "Telefon Seçimi",
      "Donanım Rehberi",
      "Mobil Teknoloji",
      "Satın Alma Rehberi"
    ],
    "content": {
      "lead": "Yeni bir akıllı telefon satın alırken yalnızca kamera megapiksel sayısına veya reklamlarda öne çıkarılan tek bir özelliğe odaklanmak, birkaç ay sonra depolama doluluğu, pil çabuk bitmesi veya ekran parlaklığı yetersizliği gibi sorunlarla karşılaşmanıza yol açabilir. Uzun yıllar sorunsuz kullanacağınız bir modeli seçmek için ekran, işlemci, bellek, kamera optiği ve yazılım güncelleme ömrünü bir bütün olarak değerlendirmelisiniz.",
      "sections": [
        {
          "id": "telefon-ekran-ve-panel-kalitesi",
          "heading": "1. Ekran Teknolojisi: Panel Türü, Yenileme Hızı ve Parlaklık (Nit)",
          "paragraphs": [
            "Telefonla geçirdiğiniz sürenin tamamında doğrudan ekrana baktığınız için panel kalitesi günlük deneyimi en çok etkileyen unsurdur. AMOLED / OLED paneller pikselleri tek tek kapatabildiği için gerçek siyahlar, yüksek kontrast ve koyu temada pil tasarrufu sunar.",
            "Açık havada ve güneş ışığı altında ekranı rahat okuyabilmek için tepe parlaklık (nit) değerine dikkat edin. Günümüzde dış mekânda konforlu kullanım için en az 1000 nit ve üzeri HBM (yüksek parlaklık modu) sunan ekranlar tercih edilmelidir."
          ],
          "bullets": [
            "Yenileme Hızı (Hz): 120 Hz ekranlar arayüz kaydırma ve desteklenen oyunlarda 60 Hz ekranlara göre çok daha akıcı bir görüntü sağlar.",
            "LTPO Teknolojisi: Ekran yenileme hızını içeriğe göre 1 Hz ile 120 Hz arasında dinamik ayarlayarak pil tüketimini önemli ölçüde düşürür.",
            "Koruma Camı ve Ergonomi: Cihazın genişliği, ağırlığı (örneğin 200 gram altı veya üstü) ve tek elle tutuş dengesi mağazada veya teknik tabloda mutlaka kontrol edilmelidir."
          ]
        },
        {
          "id": "islemci-ram-ve-depolama-secimi",
          "heading": "2. İşlemci (SoC), RAM ve Depolama Standardı",
          "paragraphs": [
            "İşlemci yalnızca oyun performansını değil; kameranın fotoğraf işleme hızını, şebeke çekim kalitesini ve pil verimliliğini de belirler. Üretim teknolojisi (örneğin 3 nm veya 4 nm mimari) ne kadar güncelse, işlemci aynı işi daha az ısınarak ve daha az pil harcayarak yapar.",
            "Depolama tarafında ise yalnızca kapasiteye (128 GB / 256 GB) değil, depolama biriminin hız standardına (UFS 3.1, UFS 4.0 veya NVMe) bakılmalıdır. Hızlı depolama birimi, uygulamaların açılış süresini ve 4K video kaydı performansını doğrudan etkiler."
          ],
          "callout": {
            "type": "warning",
            "title": "128 GB Depolama Yeterli mi?",
            "message": "Çoğu yeni telefonda hafıza kartı (microSD) yuvası bulunmamaktadır. Yüksek çözünürlüklü fotoğraf/video çekiyorsanız ve telefonu 3 yıldan uzun kullanmayı planlıyorsanız en az 256 GB depolama ve 8 GB RAM seçmeniz önerilir."
          }
        },
        {
          "id": "kamera-megapiksel-yanilgisi",
          "heading": "3. Kamera Seçiminde Megapiksel Yanılgısı ve OIS Önemi",
          "paragraphs": [
            "108 MP veya 200 MP yazılı bir kamera, her zaman 50 MP veya 48 MP bir kameradan daha iyi fotoğraf çekmez. Fotoğraf kalitesini belirleyen asıl faktörler sensörün fiziksel boyutu, diyafram açıklığı ve Optik Görüntü Sabitleme (OIS) desteğidir.",
            "OIS (Optik Görüntü Sabitleme) özelliği bulunan kameralar, el titremesini mekanik olarak telafi ederek hem gece çekimlerinde net fotoğraflar verir hem de yürürken çekilen videolarda sarsıntıyı önler."
          ],
          "steps": [
            {
              "title": "1. Adım: OIS Desteğini Kontrol Edin",
              "description": "Ana kamerada donanımsal Optik Görüntü Sabitleme (OIS) olup olmadığını teknik özellik tablosundan doğrulayın."
            },
            {
              "title": "2. Adım: Yardımcı Kameralara Bakın",
              "description": "Cihazdaki 2 MP makro/derinlik kameraları yerine gerçek geniş açı ve optik yakınlaştırma (telefoto) lensi bulunup bulunmadığını inceleyin."
            },
            {
              "title": "3. Adım: Video Kayıt Çözünürlüğünü İnceleyin",
              "description": "Hem arka hem de ön kameranın 4K 30/60 FPS video kaydı destekleyip desteklemediğini kontrol edin."
            }
          ]
        },
        {
          "id": "batarya-sarj-ve-yazilim-destegi",
          "heading": "4. Batarya Kapasitesi, Yazılım Güncelleme Ömrü ve Toplam Maliyet",
          "paragraphs": [
            "5000 mAh batarya kapasitesi günümüz akıllı telefonlarında tam gün kullanım için standart kabul edilir. Ancak kutu içeriğinden şarj adaptörünün çıkıp çıkmadığını ve cihazın desteklediği maksimum hızlı şarj gücünü (Watt) önceden kontrol etmek ek masrafları önler.",
            "Ayrıca üreticinin verdiği işletim sistemi ve güvenlik güncellemesi sözü (örneğin 4 ila 7 yıl güncelleme desteği), telefonun hem bankacılık uygulamalarıyla uyumluluğunu hem de ikinci el değerini korur."
          ]
        }
      ]
    },
    "faqs": [
      {
        "question": "Telefon alırken RAM en az kaç GB olmalı?",
        "answer": "Android cihazlarda güncel işletim sistemi ve arka plan uygulamalarının takılmadan çalışması için en az 8 GB RAM tercih edilmelidir. Uzun vadeli ve yoğun oyun/çoklu görev kullanımında 12 GB RAM avantaj sağlar."
      },
      {
        "question": "Kamera seçerken MP (Megapiksel) mi yoksa OIS mi daha önemlidir?",
        "answer": "Sensör boyutu ve OIS (Optik Görüntü Sabitleme) megapiksel sayısından çok daha önemlidir. OIS destekli 50 MP bir kamera, OIS olmayan yüksek megapikselli kameralardan özellikle akşam ve video çekimlerinde çok daha başarılı sonuç verir."
      },
      {
        "question": "Telefonun kaç yıl güncelleme alacağı neden önemlidir?",
        "answer": "Güvenlik yamaları ve işletim sistemi güncellemeleri kesilen cihazlarda bir süre sonra mobil bankacılık ve güncel uygulamalar çalışmayabilir. Bu nedenle üreticinin resmi güncelleme takvimini kontrol etmek gerekir."
      }
    ]
  },
  {
    "id": "bilgirotasi-cs2-nedir",
    "slug": "counter-strike-2-nedir-yeni-baslayan-rehberi",
    "title": "Counter-Strike 2 (CS2) Nedir? Yeni Başlayanlar İçin Oyun Modları, Ekonomi ve Temel Rehber",
    "description": "Source 2 motoruyla yenilenen Counter-Strike 2’nin oyun kuralları, tur ekonomisi, duman fiziği, Premier modu ve yeni başlayanlar için temel ipuçları.",
    "categorySlug": "oyun-donanim",
    "authorId": "author-1",
    "publishedAt": "2026-10-31",
    "updatedAt": "2026-10-31",
    "readTime": "6 dk",
    "coverImage": "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "CS2",
      "Counter-Strike 2",
      "Başlangıç Rehberi",
      "FPS Oyunları",
      "Source 2"
    ],
    "content": {
      "lead": "Counter-Strike 2 (CS2), Valve tarafından Source 2 oyun motoruyla geliştirilen ve CS:GO’nun yerini alan ücretsiz, taktiksel birinci şahıs nişancı (FPS) oyunudur. Beşer kişilik iki takımın (Terörist ve Anti-Terörist) tur bazlı hedefler için mücadele ettiği oyunda yalnızca hızlı nişan almak değil; takım ekonomisini yönetmek, harita kontrolü kurmak ve ekipmanları doğru zamanlamak da galibiyeti belirler.",
      "sections": [
        {
          "id": "cs2-temel-oyun-yapisi-ve-kurallar",
          "heading": "CS2’nin Temel Mantığı: MR12 Tur Sistemi ve Görevler",
          "paragraphs": [
            "CS2’de standart rekabetçi maçlar MR12 (devre başına 12 tur) formatında oynanır. İlk yarıda 12 tur tamamlandığında takımlar taraf değiştirir ve toplamda 13 tura ilk ulaşan takım maçı kazanır. Maç 12–12 berabere biterse uzatma turlarına geçilir.",
            "Bomba imha haritalarında hücum tarafının amacı A veya B bomba alanlarından birine C4 kurup patlamasını sağlamak, savunma tarafının amacı ise süreyi eritmek, rakibi etkisiz hâle getirmek veya kurulan bombayı imha etmektir (defuse)."
          ],
          "bullets": [
            "İmha Kiti (Defuse Kit): Bomba imha süresini 10 saniyeden 5 saniyeye düşürür; savunma tarafında en az birkaç oyuncuda bulunması kritik önem taşır.",
            "Zırh ve Kask (Kevlar + Helmet): Gövde ve kafa hasarını azaltır; silah alımından önce zırh bütçesini korumak temel kuraldır.",
            "Ses İpuçları: Koşmak, zıplamak ve şarjör değiştirmek rakibe konumunuzu belli eder; Shift tuşuyla yürümek ayak sesini tamamen gizler."
          ]
        },
        {
          "id": "cs2-source2-yenilikleri",
          "heading": "CS:GO’dan Farkı Ne? Hacimsel Dumanlar ve Teçhizat (Loadout) Sistemi",
          "paragraphs": [
            "Source 2 motoruyla birlikte CS2’ye gelen en büyük oynanış değişikliği dinamik, hacimsel duman bombalarıdır (volumetric smokes). Artık dumanlar bulunduğu koridorun şeklini alır, mermilerle kısa süreli görüş delikleri açılabilir ve el bombası (HE grenade) patlamasıyla duman geçici olarak dağıtılabilir.",
            "Ayrıca satın alma menüsü \"Teçhizat\" (Loadout) sistemine geçmiştir: Maça girmeden önce envanterinizden 5 tabanca, 5 orta seviye silah ve 5 tüfek seçerek kendi satın alma menünüzü oluşturursunuz (örneğin M4A4 ve M4A1-S’i aynı anda teçhizatınıza ekleyebilirsiniz)."
          ],
          "callout": {
            "type": "tip",
            "title": "Yanlışlıkla Aldığınız Silahı İade Edebilirsiniz",
            "message": "CS2’de satın alma süresi bitmeden ve ateş etmeden önce yanlışlıkla aldığınız bir silahı veya bombayı satın alma menüsündeki geri al simgesine sağ tıklayarak tam fiyatına iade edebilirsiniz."
          }
        },
        {
          "id": "cs2-ekonomi-yonetimi",
          "heading": "Yeni Başlayanlar İçin CS2 Ekonomi Terimleri",
          "paragraphs": [
            "Her turun başında takım arkadaşlarıyla aynı anda alım yapmak veya birlikte para biriktirmek rekabetçi oyunun temelidir. Tek başınıza pahalı silah alıp diğer dört oyuncunun tabancayla kalması bir sonraki turu da kaybetmenize neden olur."
          ],
          "steps": [
            {
              "title": "1. Tam Alım (Full Buy)",
              "description": "Tüm takımın ana tüfek (AK-47 / M4), tam zırh, bomba seti ve imha kiti alabildiği ideal tur düzenidir."
            },
            {
              "title": "2. Eko Turu (Eco / Save)",
              "description": "Paranın yetersiz olduğu turlarda bir sonraki tur tam alım yapabilmek için hiç harcama yapmama veya yalnızca ucuz tabanca alma stratejisidir."
            },
            {
              "title": "3. Zorlama Alımı (Force Buy)",
              "description": "Devre sonu gibi kritik turlarda mevcut tüm parayla hafif makineli (SMG), zırh ve bomba alarak turu kazanmayı deneme hamlesidir."
            }
          ]
        }
      ]
    },
    "faqs": [
      {
        "question": "Counter-Strike 2 ücretsiz mi, Seçkin (Prime) hesap nedir?",
        "answer": "CS2 Steam üzerinden ücretsiz indirilebilir ve oynanabilir. Ancak Premier dereceli moduna girmek, CS2 derece puanı kazanmak ve haftalık eşya düşürme paketlerinden yararlanmak için Seçkin (Prime) durum yükseltmesi gerekir."
      },
      {
        "question": "CS2’de bir rekabetçi maç kaç tur sürer?",
        "answer": "Standart rekabetçi ve Premier maçlar MR12 sistemiyle oynanır; her yarı 12 turdan oluşur ve 13 tura ulaşan ilk takım maçı kazanır."
      },
      {
        "question": "Yeni başlayanlar önce hangi oyun modunda pratik yapmalı?",
        "answer": "Haritaları ve silah geri tepmelerini öğrenmek için önce Ölüm Maçı (Deathmatch) ve Basit Eğlence (Casual) modlarında pratik yapılması, ardından Rekabetçi moda geçilmesi önerilir."
      }
    ]
  },
  {
    "id": "bilgirotasi-brawl-taktik",
    "slug": "brawl-stars-oyun-ici-ilerleme-ve-taktik-onerileri",
    "title": "Brawl Stars’ta Hızlı İlerleme, Kaynak Yönetimi ve Hesap Güvenliği Rehberi",
    "description": "Brawl Stars’ta altın, güç puanı ve mücevherleri verimli kullanma, karakter geliştirme sırası, oyun modlarına göre seçim ve Supercell ID güvenliği.",
    "categorySlug": "oyun-donanim",
    "authorId": "author-1",
    "publishedAt": "2026-10-31",
    "updatedAt": "2026-10-31",
    "readTime": "5 dk",
    "coverImage": "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "Brawl Stars",
      "Mobil Oyun",
      "Oyun Rehberi",
      "Kaynak Yönetimi",
      "Hesap Güvenliği"
    ],
    "content": {
      "lead": "Brawl Stars’ta karakterlerinizi (Savaşçıları) üst seviyelere taşımak ve kupa yolunda düzenli ilerlemek, oyun içi kaynakları (Altın, Güç Puanı, Mücevher ve Mücadele Bileti ödülleri) doğru planlamaya dayanır. Tüm karakterleri aynı anda 5–6. seviyeye yükseltmek yerine, farklı oyun modlarını kapsayan birkaç ana karakteri tam donanımlı hâle getirmek hem dereceli maçlarda hem de günlük görevlerde çok daha hızlı ilerlemenizi sağlar.",
      "sections": [
        {
          "id": "brawl-stars-kaynak-ve-altin-yonetimi",
          "heading": "1. Altın ve Güç Puanlarını Nasıl Planlamalısınız?",
          "paragraphs": [
            "Oyunda en sık darboğaz yaşanan kaynak Altındır. Bir karakteri 9. seviyeden 11. seviyeye çıkarmak, üzerine Aksesuar (Gadget), Eşya (Gear) ve Yıldız Gücü (Star Power) açmak yüksek miktarda altın gerektirir.",
            "Bu nedenle elinizdeki altını her yeni açılan karaktere eşit dağıtmak yerine, önce sık oynadığınız 2–3 ana karakteri 9. veya 11. seviyeye ulaştırıp yetenek setini tamamlamaya odaklanın."
          ],
          "bullets": [
            "Günlük Görevler ve Brawl Pass: Ücretsiz Brawl Pass yolundaki görevleri düzenli tamamlamak sezon boyunca en yüksek altın, güç puanı ve Starr Hediyesi kaynağını sunar.",
            "Kulüp Etkinlikleri: Aktif bir kulübe katılarak topluluk ve kulüp etkinliklerinden ek ilerleme ödülleri kazanın.",
            "Ustalık (Mastery) Yolu: Sık oynadığınız karakterlerin Ustalık kademelerinin ilk basamakları kolayca ulaşılabilen yüksek miktarda altın ve güç puanı verir."
          ]
        },
        {
          "id": "harita-ve-mod-secimi-taktikleri",
          "heading": "2. Harita Yapısına Göre Karakter Seçimi ve Koridor Kontrolü",
          "paragraphs": [
            "Her savaşçı her haritada aynı verimi göstermez. Çalıların yoğun olduğu kapalı haritalarda yakın mesafe ve tank karakterler avantajlıyken, açık alanlı Ödül Avı veya Nakavt haritalarında keskin nişancılar öne çıkar.",
            "3v3 takım modlarında (Elmas Kapmaca, Savaş Topu, Soygun) üç oyuncunun da orta koridora yığılması rakibin yanlardan kuşatma yapmasına yol açar. Maç başında sol, orta ve sağ koridorları paylaşarak alan kontrolü kurun."
          ],
          "steps": [
            {
              "title": "1. Adım: Maç Öncesi Harita Önizlemesine Bakın",
              "description": "Etkinlik seçme ekranındaki bilgi simgesine dokunarak haritanın duvar ve çalı dizilimini inceleyin."
            },
            {
              "title": "2. Adım: Menzil ve Duvar Yıkma Dengesini Kurun",
              "description": "Takımda duvar arkasına atış yapabilen veya duvarları açabilen yeteneklerin bulunup bulunmadığını değerlendirin."
            },
            {
              "title": "3. Adım: Can Yenileme Süresini Bekleyin",
              "description": "Çatışmada hasar aldığınızda hemen tekrar ateş etmek yerine 3 saniye boyunca saldırıyı keserek canınızın hızla dolmasını sağlayın."
            }
          ]
        },
        {
          "id": "brawl-stars-hesap-guvenligi",
          "heading": "3. Supercell ID ve Hesap Güvenliği: Sahte Vaatlerden Korunma",
          "paragraphs": [
            "İnternette veya sosyal medyada \"ücretsiz elmas hilesi\", \"bedava kostüm kodu\" gibi başlıklarla kullanıcı adı, e-posta veya doğrulama kodu isteyen sitelerin tamamı hesap çalma (oltalama) amaçlıdır. Brawl Stars’ta oyun dışı hiçbir web sitesi hesabınıza elmas yükleyemez."
          ],
          "callout": {
            "type": "warning",
            "title": "Supercell ID Hesap Korumasını Açın",
            "message": "Oyun içi Ayarlar > Supercell ID menüsünden hesabınızı kendi e-postanıza bağlayın ve \"Hesap Koruması\" özelliğini etkinleştirerek kurtarma kodlarınızı güvenli bir yere kaydedin."
          }
        }
      ]
    },
    "faqs": [
      {
        "question": "Brawl Stars’ta en hızlı altın nasıl kazanılır?",
        "answer": "Ücretsiz Brawl Pass kademelerini tamamlamak, karakterlerin Ustalık (Mastery) yolundaki ilk altın ödüllerini açmak ve kulüp etkinliklerine katılmak en düzenli altın kaynaklarıdır."
      },
      {
        "question": "Karakterleri hangi sırayla yükseltmek daha mantıklıdır?",
        "answer": "Tüm karakterleri düşük seviyede bırakmak yerine, dereceli maçlarda ve farklı modlarda kullanabileceğiniz 2–3 çok yönlü karakteri 9–11. seviyeye çıkarıp Aksesuar ve Yıldız Gücü ile tamamlamak daha verimlidir."
      },
      {
        "question": "Ücretsiz elmas veren siteler gerçek mi?",
        "answer": "Hayır. Oyun dışı hiçbir site veya uygulama ücretsiz elmas veremez; e-posta veya Supercell ID doğrulama kodu isteyen sayfalar hesabınızı ele geçirmeye çalışır."
      }
    ]
  },
  {
    "id": "bilgirotasi-js-carpim",
    "slug": "javascript-iki-sayiyi-carpma-ornekleri",
    "title": "JavaScript ile İki Sayı Nasıl Çarpılır? Fonksiyon, Form Girdisi ve Ondalık Hesaplama Örnekleri",
    "description": "JavaScript’te * çarpma operatörü kullanımı, HTML input değerlerini sayıya dönüştürme (Number, parseFloat), NaN kontrolü ve ondalık yuvarlama örnekleri.",
    "categorySlug": "teknoloji-mobil",
    "authorId": "author-1",
    "publishedAt": "2026-10-31",
    "updatedAt": "2026-10-31",
    "readTime": "6 dk",
    "coverImage": "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "JavaScript",
      "Web Geliştirme",
      "Kodlama",
      "Programlama Rehberi",
      "Frontend"
    ],
    "content": {
      "lead": "JavaScript’te iki veya daha fazla sayıyı çarpmak için yıldız (*) aritmetik operatörü kullanılır. Temel düzeyde işlem tek satır gibi görünse de gerçek web projelerinde (örneğin sepet tutarı, KDV hesaplama veya birim dönüştürme formlarında) kullanıcıdan alınan metin (string) değerlerini güvenli şekilde sayıya çevirmek, geçersiz girdileri (NaN) yakalamak ve ondalık kayma hatalarını önlemek gerekir.",
      "sections": [
        {
          "id": "js-temel-carpma-ve-fonksiyon",
          "heading": "1. Temel Çarpma Operatörü (*) ve Fonksiyon Tanımlama",
          "paragraphs": [
            "İki sayısal değişkeni çarpmak için * operatörü doğrudan kullanılır. İşlemi birden fazla yerde tekrar kullanmak için parametre alan küçük bir yardımcı fonksiyon yazmak kodun okunabilirliğini artırır.",
            "Örneğin: const sonuc = 12 * 5; ifadesi 60 sonucunu üretir. Aynı işlemi modern ok fonksiyonu (arrow function) ile const carp = (a, b) => a * b; şeklinde tanımlayarak projenin her yerinde çağırabilirsiniz."
          ],
          "bullets": [
            "Tam Sayı Çarpımı: const alan = genislik * yukseklik;",
            "Bileşik Atama (*=): let toplam = 10; toplam *= 3; (toplam değişkenini 3 ile çarpıp 30 olarak günceller).",
            "Çoklu Çarpım (reduce): Bir dizideki tüm sayıları çarpmak için [2, 3, 4].reduce((acc, s) => acc * s, 1) yapısı kullanılır (sonuç: 24)."
          ]
        },
        {
          "id": "js-form-input-ve-nan-kontrolu",
          "heading": "2. HTML Form Girdilerini (Input) Sayıya Dönüştürme ve Doğrulama",
          "paragraphs": [
            "HTML üzerindeki <input> alanlarından okunan değerler (input.value) her zaman metin (string) tipindedir. Ayrıca Türkiye’de kullanıcılar ondalık ayırıcı olarak nokta yerine virgül (örneğin 12,5) yazabilir; JavaScript ise ondalık hesaplamalarda nokta (12.5) bekler.",
            "Bu nedenle formdan gelen değeri çarpmadan önce virgülü noktaya dönüştürmek ve Number.isFinite() ile geçerli bir sayı olup olmadığını kontrol etmek en güvenli yaklaşımdır."
          ],
          "steps": [
            {
              "title": "1. Adım: Boşluğu ve Virgülü Temizleyin",
              "description": "Kullanıcı girdisine .trim().replace(\",\", \".\") uygulayarak \"12,5\" gibi girdileri \"12.5\" formatına getirin."
            },
            {
              "title": "2. Adım: Number() ile Sayıya Çevirin",
              "description": "const sayi1 = Number(temizGirdi1); ve const sayi2 = Number(temizGirdi2); dönüşümünü yapın."
            },
            {
              "title": "3. Adım: Geçerlilik Kontrolü Yapın",
              "description": "if (!Number.isFinite(sayi1) || !Number.isFinite(sayi2)) koşuluyla harf veya geçersiz karakter girildiyse kullanıcıya uyarı gösterin."
            }
          ],
          "callout": {
            "type": "warning",
            "title": "Boş Input Değerine Dikkat!",
            "message": "Number(\"\") veya Number(\"   \") ifadeleri JavaScript’te hata vermez, 0 (sıfır) döndürür! Kullanıcının alanı boş bıraktığını anlamak için önce metnin boş olup olmadığını (girdi.trim() === \"\") kontrol edin."
          }
        },
        {
          "id": "js-ondalik-sayi-hassasiyeti",
          "heading": "3. Ondalık Sayılarda Kayan Nokta (0.1 * 0.2) Sorunu ve Çözümü",
          "paragraphs": [
            "JavaScript IEEE 754 kayan nokta standardını kullandığı için 0.1 * 0.2 işleminin sonucu 0.02 yerine 0.020000000000000004 olarak çıkar. Özellikle fiyat ve para birimi hesaplamalarında bu durum arayüzde bozuk bir görünüme yol açar.",
            "Bunu önlemek için sonucu ekranda gösterirken Number((a * b).toFixed(2)) veya Intl.NumberFormat(\"tr-TR\", { minimumFractionDigits: 2, maximumFractionDigits: 2 }) kullanabilir ya da parasal tutarları kuruş cinsinden tam sayıya çevirip çarptıktan sonra 100’e bölebilirsiniz."
          ]
        }
      ]
    },
    "faqs": [
      {
        "question": "JavaScript’te metin içindeki sayı ile normal sayı çarpılırsa ne olur?",
        "answer": "JavaScript * operatöründe otomatik tip dönüşümü (type coercion) yapar; örneğin \"5\" * 4 işlemi 20 verir. Ancak \"5tl\" * 4 işlemi NaN (Not a Number) döndürür; bu yüzden açıkça Number() dönüşümü ve doğrulama yapılmalıdır."
      },
      {
        "question": "0.1 * 0.2 neden tam 0.02 çıkmıyor?",
        "answer": "İkili (binary) sayı sisteminde 0.1 ve 0.2 tam olarak temsil edilemediği için çok küçük bir yuvarlama farkı oluşur. Sonucu Number((a * b).toFixed(2)) ile yuvarlayarak temiz bir değer elde edebilirsiniz."
      },
      {
        "question": "Çok büyük tam sayıları çarpmak için ne kullanılmalı?",
        "answer": "Number.MAX_SAFE_INTEGER sınırını aşan çok büyük tam sayıların çarpımında hassasiyet kaybı olmaması için sayıların sonuna n ekleyerek BigInt (örneğin 9007199254740993n * 2n) veri tipini kullanabilirsiniz."
      }
    ]
  },
  {
    "id": "bilgirotasi-ruya-gunes",
    "slug": "rüyada-gunes-gormek",
    "title": "Rüyada Güneş Görmek Ne Anlama Gelir? Geleneksel Yorumlar ve Psikolojik Sembolizm",
    "description": "Rüyada güneş görmek, güneşin doğduğunu, parladığını veya tutulduğunu görmenin kültürel rüya tabirlerindeki yeri ve psikolojik çağrışımları.",
    "categorySlug": "pratik-bilgiler",
    "authorId": "author-1",
    "publishedAt": "2026-10-31",
    "updatedAt": "2026-10-31",
    "readTime": "5 dk",
    "coverImage": "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "Rüya Tabirleri",
      "Sembolizm",
      "Güneş",
      "Kültür",
      "Psikoloji"
    ],
    "content": {
      "lead": "Güneş, insanlık tarihinin en eski anlatılarından bu yana yaşam enerjisini, aydınlanmayı, belirsizliklerin dağılmasını ve yeni başlangıçları temsil eden güçlü bir arketiptir. Rüyada güneş görmek de hem geleneksel Anadolu ve Doğu rüya tabirlerinde hem de modern rüya psikolojisinde kişinin iç dünyasındaki motivasyon, umut ve farkındalık düzeyiyle ilişkilendirilir.",
      "sections": [
        {
          "id": "ruyada-gunes-gormek-geleneksel-yorumlar",
          "heading": "1. Geleneksel Rüya Yorumlarında Güneş İmgesi",
          "paragraphs": [
            "Klasik rüya tabiri kaynaklarında berrak bir gökyüzünde parlayan güneş görmek; uzun süredir çözüm bekleyen bir konunun netleşmesine, haneye girecek ferahlığa ve kişinin emeklerinin görünür hâle gelmesine yorulur.",
            "Ancak rüya yorumlarında tek bir sembol yerine rüyanın bütünü ve rüyayı gören kişinin içinde bulunduğu ruh hâli esas alınır. Güneşin ısıtan ve aydınlatan bir biçimde görülmesi güven duygusunu simgelerken, yakıcı veya bunaltıcı hissedilmesi aşırı sorumluluk baskısına işaret edebilir."
          ],
          "bullets": [
            "Rüyada Güneşin Doğduğunu Görmek: Yeni bir karar aşamasına, ertelenen bir planın hayata geçmesine ve taze bir başlangıç isteğine işaret eder.",
            "Rüyada Evin İçine Güneş Doğması: Aile içi iletişimin güçlenmesi, huzur ve ortak bir sevincin paylaşılması şeklinde yorumlanır.",
            "Rüyada Güneş Tutulması veya Bulut Arkasında Güneş: Geçici bir kararsızlık, bilgi eksikliği veya kısa süreli bir kaygı dönemini simgeler."
          ]
        },
        {
          "id": "psikolojik-acidindan-gunes-sembolu",
          "heading": "2. Modern Psikoloji ve Bilinçdışı Açısından Güneş",
          "paragraphs": [
            "Analitik psikolojide güneş, bilinçli farkındalığı ve kişinin kendi potansiyelini ortaya koyma arzusunu temsil eder. Yoğun stres veya belirsizlik dönemlerinin ardından görülen aydınlık güneş rüyaları, zihnin yeniden denge kurma sürecini yansıtabilir.",
            "Rüyalar geleceği kesin olarak bildiren bilimsel araçlar değildir; kişinin gündüz meşgul olduğu düşüncelerin, beklentilerin ve duygusal ihtiyaçların sembolik bir dili olarak ele alınmalıdır."
          ],
          "callout": {
            "type": "info",
            "title": "Rüyaları Yorumlarken Nelere Dikkat Edilmeli?",
            "message": "Bir rüyayı değerlendirirken \"uyandığımda ne hissettim?\" sorusu en önemli ipucudur. Ferahlık ve huzur bırakan rüyalar içsel motivasyonu desteklerken, kaygı uyandıran rüyalar günlük yaşamdaki stres kaynaklarını gözden geçirme fırsatı sunar."
          }
        }
      ]
    },
    "faqs": [
      {
        "question": "Rüyada güneşin doğuşunu izlemek ne anlama gelir?",
        "answer": "Kültürel yorumlarda umut verici yeni bir döneme girilmesi, psikolojik açıdan ise kişinin bir sorunu geride bırakıp yeni bir hedefe odaklanmaya hazır olması şeklinde değerlendirilir."
      },
      {
        "question": "Rüya tabirleri kesin olarak gerçekleşir mi?",
        "answer": "Hayır. Rüya yorumları kültürel ve sembolik değerlendirmelerdir; geleceğe dair kesin bilgi vermez ve önemli yaşam kararlarında tek başına ölçüt alınmamalıdır."
      }
    ]
  },
  {
    "id": "bilgirotasi-ruya-ari",
    "slug": "ruyada-ari-gormek",
    "title": "Rüyada Arı Görmek Ne Anlama Gelir? Emek, Üretkenlik ve Sembolik Yorumlar",
    "description": "Rüyada bal arısı, arı kovanı veya arı sokması görmenin geleneksel rüya tabirlerindeki anlamları ve çalışma yaşamıyla ilişkisi.",
    "categorySlug": "pratik-bilgiler",
    "authorId": "author-1",
    "publishedAt": "2026-10-31",
    "updatedAt": "2026-10-31",
    "readTime": "5 dk",
    "coverImage": "https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "Rüya Tabirleri",
      "Arı",
      "Sembolizm",
      "Kültür"
    ],
    "content": {
      "lead": "Arı, hemen her kültürde disiplinli çalışmanın, ekip uyumunun, sabrın ve ortaya somut bir ürün koymanın (bal) sembolüdür. Bu nedenle rüyada arı görmek; geleneksel tabirlerde düzenli emekle elde edilen kazanç, verimli bir ortaklık veya yoğun bir çalışma temposu ile ilişkilendirilir.",
      "sections": [
        {
          "id": "ruyada-ari-kovani-ve-bal-gormek",
          "heading": "1. Rüyada Arı Kovanı, Çiçekteki Arı ve Bal Görmek",
          "paragraphs": [
            "Düzenli çalışan bir arı kovanı veya çiçekler arasında dolaşan arılar görmek, kişinin eğitim veya iş hayatında planlı hareket ettiğinde karşılığını alacağı verimli bir dönemi simgeler.",
            "Özellikle sınav hazırlığında olanlar, yeni bir projeye başlayanlar veya iş düzenini değiştiren kişiler bu süreçte arı ve kovan gibi düzen çağrıştıran sembolleri daha sık görebilir."
          ],
          "bullets": [
            "Rüyada Bal Arısı Görmek: Sabırla yürütülen bir işin olumlu sonuçlanmasına ve çevreyle uyumlu çalışmaya yorulur.",
            "Rüyada Arı Kovanı Görmek: Aile veya çalışma ortamında iş bölümünün ve bereketin artacağına işaret sayılır.",
            "Rüyada Arı Sokması: Zahmetli bir sürecin ardından elde edilecek tecrübeyi veya dikkatsizce yapılan bir harcamaya karşı uyarıyı temsil edebilir."
          ]
        },
        {
          "id": "ruyada-ari-surusu-ve-duygusal-baglam",
          "heading": "2. Rüyadaki Duygu Durumu: Sakinlik mi, Telaş mı?",
          "paragraphs": [
            "Rüyada arıların sakin bir şekilde çalıştığını görmek içsel düzen ve üretkenlik hissini yansıtırken, insanı kovalayan bir arı sürüsü görmek günlük hayatta üst üste binmiş görevlerin ve yetiştirme telaşının zihindeki yansıması olabilir.",
            "Bu tür yoğun rüyalar gördüğünüzde günlük iş listenizi sadeleştirmek ve dinlenme aralıkları bırakmak zihinsel rahatlama sağlar."
          ],
          "callout": {
            "type": "tip",
            "title": "Kişisel Çağrışımlarınızı Dikkate Alın",
            "message": "Gerçek hayatta arı alerjisi veya böcek korkusu olan bir kişi için rüyada arı görmek doğrudan bu korkunun tetiklenmesiyle ilgili olabilir; bu durumda geleneksel semboller yerine kişisel deneyim ön plandadır."
          }
        }
      ]
    },
    "faqs": [
      {
        "question": "Rüyada arı görmek genel olarak olumlu mudur?",
        "answer": "Geleneksel rüya tabirlerinde arı; çalışkanlık, düzen ve helal emek sembolü olduğu için çoğunlukla olumlu ve motive edici bir imge olarak kabul edilir."
      },
      {
        "question": "Rüyada arıdan korkup kaçmak neyi ifade eder?",
        "answer": "Psikolojik açıdan ertelenen sorumlulukların veya yoğun iş yükünün yarattığı baskı hissini sembolize edebilir."
      }
    ]
  },
  {
    "id": "bilgirotasi-ruya-elma",
    "slug": "ruyada-elma-gormek",
    "title": "Rüyada Elma Görmek: Kırmızı, Yeşil Elma ve Ağaçtan Elma Toplama Yorumları",
    "description": "Rüyada kırmızı veya yeşil elma görmek, elma yemek ve ağaçtan elma toplamanın geleneksel kültürdeki ve sembolizmdeki anlamları.",
    "categorySlug": "pratik-bilgiler",
    "authorId": "author-1",
    "publishedAt": "2026-10-31",
    "updatedAt": "2026-10-31",
    "readTime": "5 dk",
    "coverImage": "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "Rüya Tabirleri",
      "Elma",
      "Sembolizm",
      "Kültürel Yorumlar"
    ],
    "content": {
      "lead": "Anadolu masallarından dünya mitolojisine kadar elma; sağlık, canlılık, barışma, kısmet ve olgunlaşmış emeğin meyvesi olarak kabul edilir (\"Gökten üç elma düştü\" geleneğinde olduğu gibi). Rüyada elma görmek de meyvenin rengine, tadına ve görülme biçimine göre huzur, motivasyon ve olumlu haberlerle ilişkilendirilir.",
      "sections": [
        {
          "id": "ruyada-kirmizi-ve-yesil-elma-farki",
          "heading": "1. Rüyada Kırmızı Elma ve Yeşil Elma Görmek",
          "paragraphs": [
            "Tatlı ve olgun bir kırmızı elma görmek; canlılık, sevindirici bir gelişme, duygusal yakınlık ve uzun süredir beklenen bir işin olgunlaşması olarak yorumlanır.",
            "Taze yeşil elma görmek ise yenilenme, sağlık alışkanlıklarına özen gösterme ve henüz filizlenme aşamasında olan yeni bir plan veya eğitim süreciyle bağdaştırılır."
          ],
          "bullets": [
            "Ağaçtan Elma Toplamak: Kişinin kendi gayretiyle ulaştığı başarıyı ve adım adım biriktirdiği kazanımları simgeler.",
            "Birisiyle Elma Paylaşmak: Dostlukların pekişmesine, kırgınlıkların sona ermesine ve ortak paydada buluşmaya işaret eder.",
            "Çürük veya Ekşi Elma Görmek: Aceleyle verilen bir kararı yeniden gözden geçirme ihtiyacını hatırlatır."
          ]
        },
        {
          "id": "ruya-yorumlarinda-dengeli-bakis",
          "heading": "2. Sembolik Yorumları Günlük Yaşamla Dengeli Okumak",
          "paragraphs": [
            "Meyve ve doğa imgeleri içeren rüyalar genellikle zihnin dinlenme ve tazelenme ihtiyacını dışa vurur. Rüyayı kesin bir kehanet gibi görmek yerine, yaşamınızdaki hangi hedefe daha çok özen göstermek istediğinizi fark etmek için bir vesile olarak değerlendirebilirsiniz."
          ]
        }
      ]
    },
    "faqs": [
      {
        "question": "Rüyada dalından kırmızı elma koparmak ne anlama gelir?",
        "answer": "Geleneksel yorumlarda üzerinde çalışılan bir işin veya hedefin olgunlaşıp sonuç vermesi ve kişinin emeğinin karşılığını alması şeklinde değerlendirilir."
      },
      {
        "question": "Rüyada elma ağacı görmek nasıl yorumlanır?",
        "answer": "Kökleri sağlam bir elma ağacı; aile desteğini, kalıcı dostlukları ve uzun vadeli huzuru temsil eden olumlu bir semboldür."
      }
    ]
  },
  {
    "id": "bilgirotasi-ruya-ev",
    "slug": "ruyada-ev-gormek",
    "title": "Rüyada Ev Görmek: Yeni Ev, Eski Ev ve Ev Değiştirmenin Sembolik Anlamı",
    "description": "Rüyada geniş ve aydınlık yeni bir ev görmek, çocukluk evini ziyaret etmek veya ev temizlemenin psikolojik ve geleneksel yorumları.",
    "categorySlug": "pratik-bilgiler",
    "authorId": "author-1",
    "publishedAt": "2026-10-31",
    "updatedAt": "2026-10-31",
    "readTime": "5 dk",
    "coverImage": "https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "Rüya Tabirleri",
      "Ev",
      "Psikoloji",
      "Sembolizm"
    ],
    "content": {
      "lead": "Rüya araştırmalarında ve geleneksel tabirlerde \"ev\", doğrudan insanın kendi iç dünyasını, güvenlik alanını ve aile bağlarını temsil eden en temel semboldür. Evin durumu (aydınlık, ferah, dağınık, eski veya yeni olması) kişinin o dönemde kendini ne kadar güvende ve düzenli hissettiğiyle yakından bağlantılıdır.",
      "sections": [
        {
          "id": "ruyada-yeni-ve-eski-ev-gormek",
          "heading": "1. Rüyada Yeni Ev, Eski Ev ve Bilinmeyen Odalar Görmek",
          "paragraphs": [
            "Geniş, güneş alan ve düzenli yeni bir ev görmek; kişinin hayatında yeni bir sayfa açma isteğini, zihinsel ferahlığı ve geleceğe daha güvenle bakmasını simgeler.",
            "Çocukluk evini veya eski bir evi görmek ise özlem duygusunu, geçmişteki alışkanlıkları hatırlamayı veya eski bir dostluk/konuyla yeniden karşılaşmayı çağrıştırır."
          ],
          "bullets": [
            "Evin İçinde Yeni Bir Oda Keşfetmek: Kişinin kendisinde daha önce fark etmediği bir yeteneği, ilgi alanını veya potansiyeli keşfetmesini temsil eder.",
            "Rüyada Ev Temizlemek ve Тоparlamak: Zihni yoran düşüncelerden arınma, öncelikleri sıraya koyma ve yaşam düzenini sadeleştirme arzusunu yansıtır.",
            "Rüyada Ev Taşımak: İş, okul, şehir veya düşünce biçimi açısından bir geçiş dönemine hazırlanıldığını gösterir."
          ]
        },
        {
          "id": "ev-ruyalarini-degerlendirme",
          "heading": "2. Ev Rüyalarını Kişisel Koşullarla Birlikte Değerlendirme",
          "paragraphs": [
            "Gerçek hayatta kira kontratı, taşınma, tadilat veya aile içi gündemlerle ilgilenen kişilerin rüyasında ev görmesi son derece doğaldır. Bu nedenle rüyayı yorumlarken önce güncel yaşam gündeminizi dikkate almanız en sağlıklı yaklaşımdır."
          ]
        }
      ]
    },
    "faqs": [
      {
        "question": "Rüyada büyük ve aydınlık bir eve girmek ne anlama gelir?",
        "answer": "Kişinin iç dünyasında rahatlama yaşaması, kaygılarının azalması ve önünde yeni fırsatların açılması şeklinde yorumlanır."
      },
      {
        "question": "Rüyada evi dağınık görmek neye işaret eder?",
        "answer": "Genellikle günlük yaşamda aynı anda çok fazla işle ilgilenmekten kaynaklanan zihinsel yorgunluğu ve öncelikleri düzenleme ihtiyacını yansıtır."
      }
    ]
  },
  {
    "id": "bilgirotasi-konya-web-tasarim",
    "slug": "web-tasarim-ajansi-secerken-sorulacak-sorular",
    "title": "Web Tasarım Ajansı Seçerken Sorulacak 10 Kritik Soru ve Sözleşme Kontrol Listesi",
    "description": "Kurumsal web sitesi veya e-ticaret projesi yaptırırken ajans seçimi, alan adı sahipliği, mobil hız, SEO altyapısı ve teknik destek sözleşmesi rehberi.",
    "categorySlug": "teknoloji-mobil",
    "authorId": "author-1",
    "publishedAt": "2026-10-31",
    "updatedAt": "2026-10-31",
    "readTime": "7 dk",
    "coverImage": "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "Web Tasarım",
      "Kurumsal Web Sitesi",
      "SEO",
      "Dijital Ajans",
      "Girişimcilik"
    ],
    "content": {
      "lead": "İster yerel bir işletme ister büyümekte olan bir marka olun, profesyonel bir web sitesi yaptırırken yalnızca görsel şablona ve ilk fiyata bakarak karar vermek ileride alan adı (domain) sahipliği tartışmalarına, yüksek yıllık yenileme ücretlerine veya mobilde açılmayan yavaş sayfalara yol açabilir. Ajansla anlaşmadan önce teknik kapsamı, mülkiyet haklarını ve teslim sonrası bakım şartlarını yazılı olarak netleştirmelisiniz.",
      "sections": [
        {
          "id": "alan-adi-ve-kaynak-kod-mulkiyeti",
          "heading": "1. Alan Adı (Domain), Hosting ve Kaynak Kod Mülkiyeti Kime Ait Olacak?",
          "paragraphs": [
            "Web tasarım projelerinde işletmelerin en sık yaşadığı mağduriyet, alan adının (örneğin sirketiniz.com.tr) işletme sahibi yerine ajansın kendi hesabına kaydedilmesidir. Yıllar sonra ajansla çalışmayı bıraktığınızda alan adınızı devralmakta zorluk yaşayabilirsiniz.",
            "Sözleşmede alan adının doğrudan şirketinizin veya sizin adınıza tescil edileceği, yönetim paneli tam yetki şifrelerinin ve site yedeklerinin teslim edileceği açıkça yer almalıdır."
          ],
          "callout": {
            "type": "warning",
            "title": "Yıllık Yenileme Ücretini Sözleşmeye Yazdırın",
            "message": "İlk yıl uygun fiyat verip ikinci yıldan itibaren fahiş barındırma/bakım yenileme ücreti talep edilmemesi için yıllık yenileme kapsamını ve başka sunucuya taşıma (transfer) hakkınızı baştan yazılı olarak netleştirin."
          }
        },
        {
          "id": "mobil-uyumluluk-ve-sayfa-hizi",
          "heading": "2. Mobil Uyumluluk, Core Web Vitals Hızı ve Temel SEO Altyapısı",
          "paragraphs": [
            "Ziyaretçilerin büyük bölümü web sitelerine cep telefonundan girer. Ajansın referans olarak gösterdiği canlı siteleri mutlaka kendi telefonunuzdan açarak menülerin kullanımını, yazıların okunabilirliğini ve sayfa geçiş hızını test edin.",
            "Ayrıca sitenin Google’da sağlıklı dizine eklenebilmesi için temiz URL yapısı, başlık hiyerarşisi (H1-H2-H3), otomatik sitemap.xml, SSL sertifikası (HTTPS) ve görsel sıkıştırma standartlarının projeye dahil olduğundan emin olun."
          ],
          "steps": [
            {
              "title": "1. Adım: Canlı Referansları Test Edin",
              "description": "Ajansın daha önce yaptığı 3 canlı siteyi telefonunuzdan ve Google PageSpeed Insights aracından kontrol edin."
            },
            {
              "title": "2. Adım: İçerik Yönetim Panelini (CMS) Görün",
              "description": "Site teslim edildikten sonra yeni bir yazı, ürün veya duyuru eklemenin ne kadar kolay olduğunu demo panel üzerinde inceleyin."
            },
            {
              "title": "3. Adım: Revizyon ve Teslim Takvimini Belirleyin",
              "description": "Tasarım onayı, içerik girişi, test yayını ve canlıya geçiş tarihlerini aşama aşama sözleşmeye ekleyin."
            }
          ]
        },
        {
          "id": "kvkk-guvenlik-ve-bakim-destegi",
          "heading": "3. KVKK Metinleri, Yedekleme ve Teslim Sonrası Teknik Destek",
          "paragraphs": [
            "İletişim formu, çerez bildirimi ve aydınlatma metni alanlarının sitenin yapısına uygun şekilde hazırlanması gerekir. Ayrıca olası bir sunucu arızasında veya siber saldırıda sitenin ne sıklıkla yedeklendiğini (günlük/haftalık otomatik yedek) ve bir sorun çıktığında destek ekibinin kaç saat içinde müdahale edeceğini mutlaka sorun."
          ]
        }
      ]
    },
    "faqs": [
      {
        "question": "Web sitesi yaptırırken domain (alan adı) kimin üzerine alınmalı?",
        "answer": "Alan adı marka değerinizin bir parçasıdır; her zaman doğrudan işletme sahibinin veya şirketin kendi resmi hesabı üzerine tescil edilmelidir."
      },
      {
        "question": "Hazır paket mi yoksa özel yönetim panelli site mi seçilmeli?",
        "answer": "İhtiyacınıza ve bütçenize göre değişir; ancak hangi sistemi seçerseniz seçin verilerinizi dışa aktarabilme (export) ve siteyi başka bir barındırma sağlayıcısına taşıyabilme özgürlüğünüzün olmasına dikkat edin."
      },
      {
        "question": "Web tasarım teslim süresi nasıl takip edilmeli?",
        "answer": "Proje tek bir bitiş tarihi yerine; Tasarım Onayı, Altyapı Kodlaması, İçerik Girişi ve Test Yayını olmak üzere 4 ara teslim aşamasına bölünerek takip edilmelidir."
      }
    ]
  },
  {
    "id": "bilgirotasi-fortnite-gereksinim",
    "slug": "fortnite-bilgisayar-uyumlulugu-nasil-kontrol-edilir",
    "title": "Fortnite Sistem Gereksinimleri ve PC Performans Modu Ayarları (Kontrol Rehberi)",
    "description": "Fortnite için minimum, önerilen ve rekabetçi PC sistem gereksinimleri, DirectX 12 vs Performans Modu seçimi ve depolama alanı kontrolü.",
    "categorySlug": "oyun-donanim",
    "authorId": "author-1",
    "publishedAt": "2026-10-31",
    "updatedAt": "2026-10-31",
    "readTime": "6 dk",
    "coverImage": "https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "Fortnite",
      "Sistem Gereksinimleri",
      "PC Performans",
      "Epic Games",
      "FPS Artırma"
    ],
    "content": {
      "lead": "Fortnite, Unreal Engine 5 motoruna ve Nanite/Lumen gibi gelişmiş aydınlatma teknolojilerine geçtikten sonra ilk çıktığı yıllara kıyasla çok daha yüksek işlemci ve ekran kartı gücüne ihtiyaç duymaya başlamıştır. Bilgisayarınızın oyunu akıcı çalıştırıp çalıştırmayacağını anlamak için mevcut donanımınızı kontrol etmeli ve sisteminize uygun görüntü oluşturma modunu (Performans Modu veya DirectX 12) seçmelisiniz.",
      "sections": [
        {
          "id": "fortnite-minimum-ve-onerilen-donanim",
          "heading": "1. Fortnite İçin Temel ve Önerilen PC Donanım Seviyeleri",
          "paragraphs": [
            "Fortnite’ın yalnızca açılması için gereken minimum donanım ile kalabalık son çember çatışmalarında takılmadan oynatacak önerilen donanım arasında ciddi fark vardır. Özellikle kaplamaların geç yüklenmemesi ve anlık takılmaların (stutter) önlenmesi için oyunun HDD yerine SSD üzerine kurulması kritik önem taşır."
          ],
          "bullets": [
            "Minimum Seviye (720p / Performans Modu): Core i3-3225 (3.3 GHz) işlemci, 8 GB RAM, Intel HD 4000 veya eşdeğeri DX11 uyumlu grafik birimi, Windows 10/11 64-bit.",
            "Önerilen Seviye (1080p / 60+ FPS): Core i5-7300U (3.5 GHz) veya Ryzen 3 3300U işlemci, 16 GB çift kanal RAM, GTX 960 / RX 550 veya üstü 4 GB+ VRAM ekran kartı, NVMe SSD.",
            "Rekabetçi / Yüksek Yenileme Hızı (144+ FPS): Güncel 6+ çekirdekli işlemci (i5 / Ryzen 5 ve üzeri), 16–32 GB RAM, RTX 3060 / RX 6600 veya üzeri ekran kartı."
          ]
        },
        {
          "id": "bilgisayar-ozellikleri-nasil-kontrol-edilir",
          "heading": "2. Kendi Bilgisayarınızın Özelliklerini 30 Saniyede Öğrenme",
          "paragraphs": [
            "Oyunu Epic Games Başlatıcısı üzerinden indirmeden önce bilgisayarınızdaki işlemci, RAM, ekran kartı ve boş SSD alanını kolayca doğrulayabilirsiniz."
          ],
          "steps": [
            {
              "title": "1. Adım: Görev Yöneticisi ile Hızlı Kontrol",
              "description": "Ctrl + Shift + Esc tuşlarına basarak Görev Yöneticisi’ni açın ve \"Performans\" sekmesinden CPU, Bellek (RAM) ve GPU modellerinizi görün."
            },
            {
              "title": "2. Adım: DirectX Tanı Aracı (dxdiag)",
              "description": "Windows + R tuşlarına basıp dxdiag yazın; Sistem sekmesinde işlemci/RAM bilgisini, Ekran sekmesinde ise ekran kartı belleğini (VRAM) kontrol edin."
            },
            {
              "title": "3. Adım: Epic Games Kurulum Seçeneklerini Optimize Edin",
              "description": "Epic Games Kütüphanesi’nde Fortnite’ın yanındaki üç noktaya tıklayıp \"Seçenekler\" menüsünden kullanmadığınız \"Yüksek Çözünürlüklü Dokular\" seçeneğinin işaretini kaldırarak 25–30 GB disk alanı ve RAM tasarrufu sağlayın."
            }
          ],
          "callout": {
            "type": "tip",
            "title": "Düşük Sistemlerde \"Performans Modu\"nu Açın",
            "message": "Fortnite Görüntü Ayarları > Görüntü Oluşturma Modu bölümünden \"Performans - Düşük Grafik Doğruluğu\" seçeneğini etkinleştirip oyunu yeniden başlattığınızda RAM ve ekran kartı yükü önemli ölçüde azalır."
          }
        }
      ]
    },
    "faqs": [
      {
        "question": "Fortnite 8 GB RAM ile oynanır mı?",
        "answer": "Evet, 8 GB RAM ile özellikle Performans Modu açıkken oynanabilir; ancak arka plandaki tarayıcı ve uygulamaları kapatmak ve yüksek çözünürlüklü dokuları devre dışı bırakmak takılmaları azaltır."
      },
      {
        "question": "Fortnite kaç GB boş alan ister?",
        "answer": "Temel oyun kurulumu ve sezon güncellemeleri için SSD üzerinde en az 60–90 GB boş alan bulundurulması önerilir. Yüksek çözünürlüklü dokular kapatılarak kurulum boyutu küçültülebilir."
      },
      {
        "question": "DirectX 11 mi, DirectX 12 mi yoksa Performans Modu mu seçilmeli?",
        "answer": "Eski veya giriş seviyesi bilgisayarlarda en yüksek FPS için Performans Modu; güncel RTX/Radeon ekran kartlarında ise daha kararlı çerçeve süresi için DirectX 12 tercih edilmelidir."
      }
    ]
  },
  {
    "id": "bilgirotasi-valorant-gereksinim",
    "slug": "valorant-sistem-gereksinimleri-kontrol-rehberi",
    "title": "VALORANT Sistem Gereksinimleri: 60 FPS, 144+ FPS Donanım Tablosu ve Windows 11 TPM 2.0 Kontrolü",
    "description": "VALORANT için minimum ve rekabetçi PC sistem gereksinimleri, işlemci önbelleğinin FPS’e etkisi ve Windows 11 Vanguard TPM 2.0 / Secure Boot uyumluluğu.",
    "categorySlug": "oyun-donanim",
    "authorId": "author-1",
    "publishedAt": "2026-10-31",
    "updatedAt": "2026-10-31",
    "readTime": "6 dk",
    "coverImage": "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "VALORANT",
      "Sistem Gereksinimleri",
      "Riot Games",
      "TPM 2.0",
      "FPS Oyunları"
    ],
    "content": {
      "lead": "VALORANT, geniş bir donanım yelpazesinde yüksek kare hızı (FPS) verecek şekilde optimize edilmiş işlemci ağırlıklı bir rekabetçi FPS oyunudur. Ancak oyunu sorunsuz çalıştırmak için yalnızca işlemci ve ekran kartı yeterli değildir; Riot Vanguard güvenlik sistemi nedeniyle Windows 10/11 işletim sistemi güncelliği, TPM 2.0 ve UEFI Secure Boot (Güvenli Önyükleme) desteğinin de açık olması gerekir.",
      "sections": [
        {
          "id": "valorant-donanim-tablosu-30-60-144-fps",
          "heading": "1. Hedef FPS Değerine Göre VALORANT Donanım Gereksinimleri",
          "paragraphs": [
            "VALORANT’ta grafik ayarlarını düşürdüğünüzde yük büyük ölçüde işlemciye (CPU) biner. Bu nedenle 144 Hz veya 240 Hz monitörlerde sabit yüksek FPS almak için tek çekirdek performansı ve L3 önbelleği güçlü bir işlemci ile çift kanal (Dual Channel) RAM kullanmak en etkili çözümdür."
          ],
          "bullets": [
            "Minimum (30+ FPS): Intel Core 2 Duo E8400 / AMD Athlon 200GE işlemci, Intel HD 4000 / Radeon R5 200 grafik birimi, 4 GB RAM, 1 GB VRAM.",
            "Önerilen (60+ FPS): Intel Core i3-4150 / AMD Ryzen 3 1200 işlemci, GeForce GT 730 / Radeon R7 240 ekran kartı, 8 GB RAM.",
            "Rekabetçi Yüksek Performans (144+ FPS): Intel Core i5-9400F 2.90 GHz / AMD Ryzen 5 2600X veya üstü işlemci, GTX 1050 Ti / Radeon R7 370 (4 GB VRAM) ekran kartı, 16 GB RAM."
          ]
        },
        {
          "id": "windows-11-tpm-20-ve-secure-boot-kontrolu",
          "heading": "2. Windows 11’de TPM 2.0 ve Secure Boot (VAN9001 / VAN9003) Kontrolü",
          "paragraphs": [
            "Windows 11 kurulu bilgisayarlarda VALORANT açılırken VAN9001 veya VAN9003 hatası alıyorsanız bunun nedeni donanımınızın yetersiz olması değil, BIOS üzerinde TPM 2.0 veya Secure Boot özelliğinin kapalı olmasıdır."
          ],
          "steps": [
            {
              "title": "1. Adım: TPM Durumunu Doğrulayın",
              "description": "Klavyeden Windows + R tuşlarına basın, tpm.msc yazıp Enter’a basın. Açılan pencerede \"TPM kullanılmaya hazır\" ve Belirtim Sürümü: 2.0 yazdığını kontrol edin."
            },
            {
              "title": "2. Adım: Güvenli Önyükleme (Secure Boot) Durumuna Bakın",
              "description": "Windows arama çubuğuna msinfo32 (Sistem Bilgisi) yazın. \"BIOS Modu\" satırının UEFI ve \"Güvenli Önyükleme Durumu\" satırının Açık olduğunu doğrulayın."
            },
            {
              "title": "3. Adım: Gerekirse BIOS Üzerinden Etkinleştirin",
              "description": "Kapalı görünüyorsa anakartınızın BIOS menüsünden Intel PTT / AMD fTPM ve Secure Boot ayarlarını etkinleştirin."
            }
          ],
          "callout": {
            "type": "info",
            "title": "Dizüstü Bilgisayarlarda Harici GPU Seçimi",
            "message": "Hem dahili hem harici ekran kartı bulunan dizüstü bilgisayarlarda Windows Grafik Ayarları üzerinden VALORANT’ı \"Yüksek Performans\" (harici NVIDIA/AMD GPU) olarak tanımlamak ani FPS düşüşlerini engeller."
          }
        }
      ]
    },
    "faqs": [
      {
        "question": "VALORANT Windows 7 veya Windows 8’de çalışır mı?",
        "answer": "Hayır. Riot Vanguard güvenlik gereksinimleri nedeniyle VALORANT yalnızca güncel 64-bit Windows 10 ve Windows 11 sürümlerini desteklemektedir."
      },
      {
        "question": "VALORANT’ta FPS’i ekran kartı mı yoksa işlemci mi daha çok etkiler?",
        "answer": "Düşük ve orta rekabetçi grafik ayarlarında VALORANT işlemci (CPU) odaklı bir oyundur; güçlü bir işlemci ve çift kanal RAM FPS değerini doğrudan artırır."
      },
      {
        "question": "VAN9003 hatası neden çıkar?",
        "answer": "Windows 11’de UEFI Secure Boot (Güvenli Önyükleme) kapalı olduğunda Riot Vanguard bu uyarıyı verir. BIOS ayarlarından Secure Boot etkinleştirildiğinde sorun çözülür."
      }
    ]
  },
  {
    "id": "bilgirotasi-gta6-gereksinim",
    "slug": "gta-6-pc-gereksinimleri-hakkinda-dogrulama-rehberi",
    "title": "GTA 6 Sistem Gereksinimleri Açıklandı mı? PC Donanım Hazırlığı ve Resmi Bilgi Doğrulama Rehberi",
    "description": "Grand Theft Auto VI (GTA 6) için resmi çıkış planı, tahmini PC donanım beklentileri, söylenti listelerden kaçınma ve bilgisayar toplama tavsiyeleri.",
    "categorySlug": "oyun-donanim",
    "authorId": "author-1",
    "publishedAt": "2026-10-31",
    "updatedAt": "2026-10-31",
    "readTime": "5 dk",
    "coverImage": "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "GTA 6",
      "Rockstar Games",
      "Sistem Gereksinimleri",
      "PC Donanım",
      "Oyun Dünyası"
    ],
    "content": {
      "lead": "Grand Theft Auto VI (GTA 6) için internette yıllardır dolaşan \"kesinleşti\" başlıklı PC sistem gereksinimi tablolarının tamamı tahmine dayalıdır. Rockstar Games oyunlarını geleneksel olarak önce yeni nesil konsollar (PlayStation 5 ve Xbox Series X|S) için yayımlamakta, PC sürümünün teknik gereksinimlerini ise PC çıkış tarihine yakın bir dönemde resmi olarak duyurmaktadır. Bu nedenle doğrulanmamış listelere bakarak aceleyle donanım satın almak bütçe kaybına yol açabilir.",
      "sections": [
        {
          "id": "gta6-resmi-durum-ve-konsol-temeli",
          "heading": "1. Yeni Nesil Konsol Donanımı PC Beklentileri Hakkında Ne Söylüyor?",
          "paragraphs": [
            "GTA 6’nın geliştirildiği PlayStation 5 ve Xbox Series X konsolları; 8 çekirdekli Zen 2 mimarili işlemci, 16 GB birleşik bellek, ışın izleme (Ray Tracing) destekli RDNA 2 grafik birimi ve yüksek hızlı NVMe SSD mimarisi üzerine kuruludur.",
            "Bu teknik tablo, ileride yayımlanacak PC sürümünün de mekanik sabit diskleri (HDD) desteklemeyeceğini, DirectStorage benzeri hızlı NVMe SSD teknolojisini ve en az 8 GB VRAM kapasiteli güncel ekran kartlarını temel alacağını göstermektedir."
          ],
          "bullets": [
            "Depolama: Yüksek çözünürlüklü açık dünya kaplamaları nedeniyle PCIe 4.0 NVMe SSD ve 150 GB+ boş alan ihtiyacı öngörülmektedir.",
            "Bellek (RAM): Açık dünya simülasyonu ve yoğun trafik/kalabalık yapay zekâsı için 16 GB RAM alt sınır, 32 GB RAM ise ideal seviye olarak değerlendirilmektedir.",
            "Ekran Kartı: Işın izleme ve ölçekleme teknolojilerini (DLSS / FSR / XeSS) destekleyen modern mimarili GPU’lar büyük avantaj sağlayacaktır."
          ]
        },
        {
          "id": "gta6-icin-simdiden-pc-toplanir-mi",
          "heading": "2. Sadece GTA 6 İçin Şimdiden Bilgisayar Toplanmalı mı?",
          "paragraphs": [
            "Donanım dünyasında her yeni nesil işlemci ve ekran kartı serisi, bir önceki nesle göre aynı bütçede daha yüksek performans ve daha güncel görüntü ölçekleme teknolojileri sunar.",
            "Eğer mevcut bilgisayarınız bugün oynadığınız oyunlarda size yetiyorsa, yalnızca GTA 6 için şimdiden parça satın almak yerine Rockstar Games’in resmi PC duyurusunu beklemek aynı bütçeyle çok daha güçlü bir sistem kurmanızı sağlar."
          ],
          "callout": {
            "type": "warning",
            "title": "Sahte \"GTA 6 PC Beta / Ön İndirme\" Dosyalarına Dikkat!",
            "message": "Rockstar Games’in resmi web sitesi ve doğrulanmış mağaza sayfaları dışında paylaşılan \"GTA 6 PC kurulum dosyası\" veya \"beta erişim aracı\" bağlantılarının tamamı zararlı yazılım içerir; kesinlikle indirmeyin."
          }
        }
      ]
    },
    "faqs": [
      {
        "question": "GTA 6 resmi PC sistem gereksinimleri açıklandı mı?",
        "answer": "Resmi PC sistem gereksinimleri yalnızca Rockstar Games tarafından PC sürümü duyurulduğunda kesinleşir; internetteki eski tablolar resmi değildir."
      },
      {
        "question": "GTA 6 HDD (Mekanik Disk) üzerinde çalışır mı?",
        "answer": "Yeni nesil açık dünya oyun motorları anlık veri akışı için yüksek hızlı NVMe SSD gerektirdiğinden mekanik disklerin yeterli olması beklenmemektedir."
      }
    ]
  },
  {
    "id": "bilgirotasi-autocad-gereksinim",
    "slug": "autocad-bilgisayar-gereksinimleri-nasil-kontrol-edilir",
    "title": "AutoCAD Sistem Gereksinimleri: 2D Çizim ve 3D Modelleme İçin PC / Laptop Seçim Rehberi",
    "description": "AutoCAD kurulumu ve akıcı mühendislik/mimarlık çizimleri için gereken işlemci tek çekirdek hızı, RAM kapasitesi, ekran kartı (VRAM) ve SSD gereksinimleri.",
    "categorySlug": "oyun-donanim",
    "authorId": "author-1",
    "publishedAt": "2026-10-31",
    "updatedAt": "2026-10-31",
    "readTime": "6 dk",
    "coverImage": "https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "AutoCAD",
      "Autodesk",
      "Sistem Gereksinimleri",
      "Mühendislik",
      "Bilgisayar Seçimi"
    ],
    "content": {
      "lead": "Mimarlık, inşaat, makine ve elektrik mühendisliğinde standart olarak kullanılan AutoCAD’de bilgisayar seçimi yaparken en sık düşülen hata, çok çekirdekli ancak düşük frekanslı işlemcilere öncelik vermektir. AutoCAD’de 2D çizim ve dosya yenileme (REGEN) işlemleri büyük ölçüde işlemcinin tek çekirdek hızına (GHz) bağlıyken, 3D katı modelleme ve nokta bulutu projeleri yüksek RAM ve DirectX 12 uyumlu harici ekran kartı gerektirir.",
      "sections": [
        {
          "id": "autocad-2d-ve-3d-donanim-tablosu",
          "heading": "1. AutoCAD İçin Temel (2D) ve Önerilen (3D) Donanım Özellikleri",
          "paragraphs": [
            "Autodesk’in güncel AutoCAD sürümleri 64-bit işletim sistemi üzerinde çalışır. Öğrenci projeleri ve standart 2D kat planları için orta seviye bir dizüstü bilgisayar yeterliyken, çok katmanlı paftalar ve 3D modeller için en az 16–32 GB RAM tercih edilmelidir."
          ],
          "bullets": [
            "İşlemci (CPU): Temel kullanım için 2.5–2.9 GHz taban hız; akıcı profesyonel kullanım için 3.0 GHz+ taban ve 4.5 GHz+ Turbo hızına sahip güncel Intel Core i5/i7 veya AMD Ryzen 5/7 işlemci.",
            "Bellek (RAM): Minimum 8 GB; karmaşık DWG dosyaları ve aynı anda birden fazla sekme açmak için önerilen 16 GB veya 32 GB RAM.",
            "Ekran Kartı (GPU): Temel 2D için 2 GB VRAM (DirectX 11/12); 3D gölgeli görünüm ve büyük modeller için 8 GB VRAM ve 106 GB/sn+ bant genişliğine sahip harici GPU.",
            "Depolama: Uygulama kurulumu ve geçici önbellek dosyaları için en az 15–20 GB boş alana sahip NVMe SSD."
          ]
        },
        {
          "id": "autocad-donanim-ivmesi-ve-performans-ayari",
          "heading": "2. AutoCAD’de Takılmaları Azaltan Donanım İvmesi (GRAPHICSCONFIG) Kontrolü",
          "paragraphs": [
            "Güçlü bir ekran kartınız olduğu halde AutoCAD’de yakınlaştırma (zoom/pan) yaparken imleç takılıyorsa, program harici ekran kartı yerine işlemcinin dahili grafik birimini kullanıyor olabilir."
          ],
          "steps": [
            {
              "title": "1. Adım: GRAPHICSCONFIG Komutunu Çalıştırın",
              "description": "AutoCAD komut satırına GRAPHICSCONFIG yazıp Enter’a basın."
            },
            {
              "title": "2. Adım: Aktif Grafik Kartını Doğrulayın",
              "description": "Açılan pencerede \"Donanım İvmesi\"nin (Hardware Acceleration) açık olduğunu ve harici ekran kartınızın seçili göründüğünü kontrol edin."
            },
            {
              "title": "3. Adım: Gereksiz Görsel Efektleri Kapatın",
              "description": "Çok büyük çizimlerde 2D görünüm performansını artırmak için çizgi yumuşatma ve şeffaflık önizlemesini ihtiyacınıza göre sınırlandırın."
            }
          ]
        }
      ]
    },
    "faqs": [
      {
        "question": "AutoCAD için harici ekran kartı şart mı?",
        "answer": "Yalnızca hafif 2D teknik çizim yapıyorsanız güncel işlemcilerin dahili grafik birimleri işi görebilir; ancak yoğun 2D paftalarda ve 3D modellemede harici ekran kartı (en az 4–8 GB VRAM) büyük fark yaratır."
      },
      {
        "question": "AutoCAD’de işlemci çekirdek sayısı mı yoksa GHz hızı mı daha önemlidir?",
        "answer": "AutoCAD’de görsel oluşturma (render) dışındaki çizim ve hesaplama işlemlerinin çoğu tek çekirdek üzerinden yürütülür; bu yüzden tek çekirdek (Turbo GHz) performansı yüksek işlemciler daha akıcı çalışır."
      }
    ]
  },
  {
    "id": "bilgirotasi-kitaplar",
    "slug": "okuma-listesi-olusturmak-icin-kitap-onerileri",
    "title": "Kişisel Okuma Listesi Nasıl Oluşturulur? 10 Farklı Türden Kitap Seçme ve Okuma Alışkanlığı Rehberi",
    "description": "Sürdürülebilir bir okuma alışkanlığı kazanmak için tür çeşitliliği kurma, klasik ve çağdaş eserleri dengeleme ve kişisel okuma listesi hazırlama rehberi.",
    "categorySlug": "pratik-bilgiler",
    "authorId": "author-1",
    "publishedAt": "2026-10-31",
    "updatedAt": "2026-10-31",
    "readTime": "6 dk",
    "coverImage": "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "Kitap Önerileri",
      "Okuma Alışkanlığı",
      "Edebiyat",
      "Kişisel Gelişim",
      "Kültür"
    ],
    "content": {
      "lead": "İnternetteki \"mutlaka okunması gereken kitaplar\" listelerini olduğu gibi kopyalamak, çoğu zaman kendi ilgi alanınıza uymayan ağır bir eserde tıkanıp okumaya haftalarca ara vermenize neden olur. Kalıcı ve keyifli bir okuma alışkanlığı kurmanın sırrı; farklı edebi türleri, sayfa hacimlerini ve anlatım tempolarını dengeleyen kişiselleştirilmiş bir 10 kitaplık rota oluşturmaktır.",
      "sections": [
        {
          "id": "dengeli-10-kitaplik-liste-formulu",
          "heading": "1. Sıkmayan 10 Kitaplık Liste İçin \"3-3-2-2\" Tür Dağılımı",
          "paragraphs": [
            "Üst üste üç tane 600 sayfalık ağır felsefi veya tarihsel roman okumak zihinsel yorgunluk yaratabilir. Listenizi kurarken kurgu, kurgu dışı, kısa öykü ve popüler bilim eserlerini dönüşümlü yerleştirmek okuma temposunu canlı tutar."
          ],
          "bullets": [
            "3 Klasik veya Modern Roman: İnsan psikolojisini ve toplumsal dönüşümleri anlatan güçlü olay örgülü eserler (örneğin Sabahattin Ali, Yaşar Kemal, Dostoyevski veya Jack London).",
            "3 Kurgu Dışı / Popüler Bilim ve Tarih: Günlük dünyayı, teknolojiyi, astronomiyi veya yakın tarihi anlaşılır dille anlatan inceleme kitapları.",
            "2 Kısa Öykü veya Deneme Kitabı: Yoğun günlerde veya yolculukta 15–20 dakikada bir bölümünü bitirebileceğiniz akıcı eserler (örneğin Sait Faik Abasıyanık, Anton Çehov, Montaigne).",
            "2 Biyografi veya Mesleki Gelişim Kitabı: İlgi duyduğunuz alandaki bilim insanlarının, sanatçıların veya düşünürlerin yaşam öyküleri."
          ]
        },
        {
          "id": "kitap-secerken-ve-okurken-uygulanabilir-adimlar",
          "heading": "2. Kitap Seçerken ve Okuma Rutini Kurarken 3 Pratik Adım",
          "paragraphs": [
            "Bir kitabı listenize eklemeden önce yalnızca kapak tasarımına veya sosyal medya popülerliğine değil, çevirmenine, yayınevinin editöryal kalitesine ve ilk 5 sayfasındaki dil akıcılığına bakın."
          ],
          "steps": [
            {
              "title": "1. Adım: İlk 10 Sayfa Testi Yapın",
              "description": "Kitapçıda veya kütüphanede eserin içindekiler kısmını ve ilk birkaç sayfasını okuyarak anlatım dilinin size hitap edip etmediğini ölçün."
            },
            {
              "title": "2. Adım: Sayfa Hedefi Yerine Süre Hedefi Koyun",
              "description": "\"Günde 50 sayfa okuyacağım\" baskısı yerine her akşam telefonu başka odaya bırakıp 25 dakika kesintisiz okuma rutini belirleyin."
            },
            {
              "title": "3. Adım: Kısa Okuma Notları Tutun",
              "description": "Bitirdiğiniz her kitabın arkasına veya küçük bir deftere sizi en çok etkileyen 3 fikri not ederek okuduklarınızın kalıcılığını artırın."
            }
          ]
        }
      ]
    },
    "faqs": [
      {
        "question": "Başladığım bir kitabı beğenmezsem yarıda bırakmalı mıyım?",
        "answer": "İlk 40–50 sayfayı okumanıza rağmen kitabın dili veya konusu hiç ilerlemiyorsa, okuma isteğinizi kaybetmemek adına kitabı daha sonra dönmek üzere kenara bırakıp başka bir esere geçmek tamamen doğaldır."
      },
      {
        "question": "Çeviri kitap alırken neye dikkat edilmeli?",
        "answer": "Eserin kısaltılmamış \"tam metin\" olmasına ve kaynak dilden doğrudan yapılmış güvenilir bir çeviriye sahip olmasına dikkat edilmelidir."
      }
    ]
  },
  {
    "id": "bilgirotasi-gwen-hikaye",
    "slug": "lol-gwen-karakteri-hikayesi-ve-oyun-rolu",
    "title": "League of Legends Gwen Rehberi: Hikâyesi, Yetenekleri ve Üst Koridor Oynanış İpuçları",
    "description": "LoL şampiyonu Kutsal Terzi Gwen’in Runeterra evrenindeki kökeni, pasif ve yetenek komboları, Kutsal Sis (W) kullanımı ve koridor eşleşmeleri.",
    "categorySlug": "oyun-donanim",
    "authorId": "author-1",
    "publishedAt": "2026-10-31",
    "updatedAt": "2026-10-31",
    "readTime": "6 dk",
    "coverImage": "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "League of Legends",
      "Gwen",
      "LoL Rehberi",
      "Şampiyon Rehberi",
      "Oyun"
    ],
    "content": {
      "lead": "League of Legends evreninde \"Kutsal Terzi\" unvanıyla yer alan Gwen, yetenek gücü (AP) ile güçlenen, özellikle yüksek canlı tank şampiyonlara karşı gerçek hasar (true damage) ve yüzdelik can hasarı çıkarabilen yakın dövüşçü bir üst koridor/orman şampiyonudur. Hem Runeterra hikâyesindeki yeri hem de Kutsal Sis (W) yeteneğinin sunduğu dokunulmazlık mekaniği onu oyunun en özgün düellocularından biri yapar.",
      "sections": [
        {
          "id": "gwen-runeterra-hikayesi",
          "heading": "1. Gwen’in Runeterra Evrenindeki Hikâyesi ve Kökeni",
          "paragraphs": [
            "Gwen, çok eski zamanlarda terzi Isolde tarafından sevgiyle dikilmiş oyuncak bir bebektir. Kutsal Adalar’ı Gölge Adalar’a dönüştüren Afet (Ruination) felaketinin ardından Isolde’nin ruhundan bir parçayla canlanmış ve sahibinin terzi makasını, iğnelerini ve Kutsal Sis büyüsünü miras almıştır.",
            "Karanlık Kara Sis’in karşısında neşeli ama kararlı duruşuyla mücadele eden Gwen, Runeterra’yı dolaşarak Afet’in bıraktığı yıkımı onarmaya çalışır."
          ]
        },
        {
          "id": "gwen-yetenekleri-ve-kombolari",
          "heading": "2. Gwen’in Yetenek Seti ve Temel Koridor Komboları",
          "paragraphs": [
            "Gwen’in hasar potansiyelinin kalbinde Pasif yeteneği (Bin Kesik) ve Q yeteneği (Kırt Kırt!) yer alır. Normal saldırıları rakibin azami canına göre ilave büyü hasarı verir ve Q yeteneğinin yüklerini (4 yüke kadar) doldurur."
          ],
          "bullets": [
            "Pasif (Bin Kesik): Saldırıları hedefe azami canına oranla büyü hasarı verir ve şampiyonlara vurduğunda Gwen’i iyileştirir.",
            "Q (Kırt Kırt!): Normal saldırılarla 4 yük biriktirip Q kullandığınızda makas 6 kez keser; koninin tam ortasındaki rakipler gerçek hasar alır.",
            "W (Kutsal Sis): Gwen’in etrafında 4 saniyeliğine bir alan açar; alanın dışındaki rakipler Gwen’i hedef alamaz ve dışarıdan gelen yetenekler ona isabet etmez.",
            "E (Atıl ve Doğra): Kısa mesafe atılarak saldırı hızı ve saldırı menzili kazandırır; ilk vuruşta bekleme süresinin önemli kısmı iade edilir.",
            "R (İğne İplik): Yavaşlatan ve Pasif hasarını tetikleyen üç aşamalı iğne atışı yapar; takım savaşlarında arka safları eritmek için çok etkilidir."
          ],
          "callout": {
            "type": "tip",
            "title": "Altın Kural: Q Yeteneğini Orta Çizgide Tutturun",
            "message": "Minyonlarla kısa takasa girmeden önce minyonlara 4 normal saldırı yaparak Q yükünüzü doldurun, ardından E + Q kombosuyla rakibin tam merkez çizgisinde kalmasını sağlayarak gerçek hasarı tetikleyin."
          }
        }
      ]
    },
    "faqs": [
      {
        "question": "Gwen hangi koridorda oynanır?",
        "answer": "Gwen ağırlıklı olarak Üst Koridor (Top Lane) düellocusu olarak oynanır; ayrıca metaya bağlı olarak Orman (Jungle) rolünde de tercih edilebilmektedir."
      },
      {
        "question": "Gwen’in W (Kutsal Sis) yeteneği kule vuruşlarını engeller mi?",
        "answer": "Hayır. Kutsal Sis yalnızca çemberin dışındaki rakip şampiyonların saldırı ve yeteneklerine karşı hedef alınamazlık sağlar; kule atışlarını engellemez."
      }
    ]
  },
  {
    "id": "bilgirotasi-ay",
    "slug": "ay-dunyanin-dogal-uydusu-hakkinda-temel-bilgiler",
    "title": "Ay Hakkında Temel Bilgiler: Dünya’nın Doğal Uydusunun Evreleri, Yapısı ve Gözlem Rehberi",
    "description": "Ay’ın Dünya’ya uzaklığı, kütleçekim kilidi (neden hep aynı yüzünü görürüz?), 8 ana Ay evresi, gelgit etkisi ve amatör gözlem ipuçları.",
    "categorySlug": "pratik-bilgiler",
    "authorId": "author-1",
    "publishedAt": "2026-10-31",
    "updatedAt": "2026-10-31",
    "readTime": "6 dk",
    "coverImage": "https://images.unsplash.com/photo-1522030299830-16b8d3d049fe?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "Ay",
      "Astronomi",
      "Uzay",
      "Bilim",
      "Gökyüzü Gözlemi"
    ],
    "content": {
      "lead": "Dünya’nın tek doğal uydusu olan Ay, yaklaşık 384.400 kilometre ortalama uzaklığıyla gece gökyüzünün en parlak cismidir. Yalnızca takvimlerin hesaplanmasında değil; okyanuslardaki gelgit hareketlerinin oluşmasında ve Dünya’nın eksen eğikliğinin dengede kalmasında da yaşamsal bir rol üstlenir.",
      "sections": [
        {
          "id": "ayin-fiziksel-ozellikleri-ve-ayni-yuzu",
          "heading": "1. Ay’ın Hep Aynı Yüzünü Görmemizin Nedeni: Kütleçekim Kilidi",
          "paragraphs": [
            "Ay’ın çapı yaklaşık 3.474 kilometredir (Dünya’nın çapının yaklaşık dörtte biri). Gökyüzüne baktığımızda Ay’ın her zaman aynı yüzey şekillerini görmemizin nedeni Ay’ın dönmemesi değil, \"kütleçekim kilidi\" (tidal locking) adı verilen fiziksel dengedir.",
            "Ay’ın kendi ekseni etrafındaki bir tam dönüş süresi ile Dünya etrafındaki yörünge dönüş süresi birbirine eşittir (yaklaşık 27,3 gün). Bu eşzamanlı dönüş nedeniyle Dünya’dan her zaman Ay’ın yakın yüzü görünür."
          ]
        },
        {
          "id": "ayin-8-evresi-ve-gozlem-zamani",
          "heading": "2. Ay’ın Evreleri ve Gökyüzü Gözlemi İçin En Uygun Evre",
          "paragraphs": [
            "Ay kendisi ışık üretmez; Güneş’ten aldığı ışığı yansıtır. Dünya, Ay ve Güneş’in birbirine göre konumu değiştikçe yaklaşık 29,5 günlük kavuşum (sinodik) döngüsü boyunca Ay’ın aydınlık görünen kısmı değişir.",
            "Sanılanın aksine dürbün veya teleskopla krater gözlemi yapmak için en iyi zaman Dolunay değildir. Dolunayda Güneş ışığı dik geldiği için gölgeler kaybolur; buna karşılık İlk Dördün ve Son Dördün evrelerinde aydınlık-karanlık sınır hattındaki (terminatör çizgisi) kraterler ve dağlar üç boyutlu gölgeleriyle çok daha net seçilir."
          ],
          "bullets": [
            "Yeniay: Ay, Dünya ile Güneş arasındadır; karanlık yüzü Dünya’ya dönük olduğu için gece gökyüzünde görünmez (derin uzay ve yıldız gözlemi için en karanlık gecelerdir).",
            "İlk Dördün: Ay’ın sağ yarısı aydınlık görünür; akşam saatlerinde krater gözlemi için idealdir.",
            "Dolunay: Ay’ın Dünya’ya bakan yüzü tamamen aydınlıktır.",
            "Son Dördün: Ay’ın sol yarısı aydınlık görünür; gece yarısından sabaha doğru gözlemlenebilir."
          ]
        }
      ]
    },
    "faqs": [
      {
        "question": "Ay Dünya’dan ne kadar uzaktadır?",
        "answer": "Ay’ın yörüngesi eliptik olduğu için uzaklığı değişir; ortalama uzaklığı yaklaşık 384.400 kilometredir (en yakın noktada ~363.300 km, en uzak noktada ~405.500 km)."
      },
      {
        "question": "Ay’ın karanlık yüzü gerçekten hep karanlık mıdır?",
        "answer": "Hayır. \"Karanlık yüz\" ifadesi Dünya’dan görünmeyen uzak yüzü (far side) anlatmak için kullanılır; gerçekte Ay’ın uzak yüzü de yakın yüzü kadar Güneş ışığı alır."
      },
      {
        "question": "Dürbünle Ay kraterleri görülebilir mi?",
        "answer": "Evet, 7x50 veya 10x50 büyütmeli standart bir el dürbünüyle bile özellikle İlk Dördün evresinde Ay denizlerini (Maria) ve büyük kraterleri net biçimde görebilirsiniz."
      }
    ]
  },
  {
    "id": "bilgirotasi-ek-minecraft-ors",
    "slug": "minecraft-ors",
    "title": "Minecraft’ta Örs (Anvil) Nasıl Yapılır? Malzeme Tarifi, Eşya Onarma ve Büyü Basma Rehberi",
    "description": "Minecraft’ta 31 demir külçesi ile örs yapımı tarifi, eşya onarma, büyülü kitap birleştirme, isim etiketi yazma ve \"Çok Pahalı!\" (Too Expensive) sınırını aşma.",
    "categorySlug": "oyun-donanim",
    "authorId": "author-1",
    "publishedAt": "2026-10-31",
    "updatedAt": "2026-10-31",
    "readTime": "6 dk",
    "coverImage": "https://images.unsplash.com/photo-1587573089734-09cb69c0f2b4?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "Minecraft",
      "Örs Yapımı",
      "Minecraft Tarifleri",
      "Oyun Rehberi",
      "Büyü Basma"
    ],
    "content": {
      "lead": "Minecraft’ta Örs (Anvil), büyülerini kaybetmeden kazma, kılıç ve zırhlarınızı onarmanızı, büyülü kitapları eşyalarınıza aktarmanızı ve İsim Etiketi (Name Tag) hazırlamanızı sağlayan en önemli üretim bloklarından biridir. Standart Çalışma Masası’nda (Crafting Table) yapılan onarımlar eşyanın üzerindeki büyüleri silerken, Örs üzerinde yapılan birleştirmeler mevcut tüm büyüleri korur ve bir üst seviyeye yükseltir.",
      "sections": [
        {
          "id": "minecraft-ors-yapimi-malzemeleri-ve-tarifi",
          "heading": "1. Minecraft Örs Yapımı İçin Gereken Malzemeler (Toplam 31 Demir Külçesi)",
          "paragraphs": [
            "Bir adet Örs üretmek için Çalışma Masası’nda (3x3 ızgara) 3 adet Demir Bloğu ve 4 adet Demir Külçesi kullanılır. Her bir Demir Bloğu 9 adet Demir Külçesinden üretildiği için toplamda 31 adet Demir Külçesine (3 x 9 + 4 = 31) ihtiyacınız vardır."
          ],
          "steps": [
            {
              "title": "1. Adım: 3 Adet Demir Bloğu Üretin",
              "description": "Çalışma Masası’nın 9 gözünü de Demir Külçesi ile doldurarak toplam 27 külçeden 3 adet Demir Bloğu elde edin."
            },
            {
              "title": "2. Adım: Üst Sıraya 3 Demir Bloğu Dizini Yapın",
              "description": "Çalışma Masası’nın en üst yatay sırasındaki 3 kutucuğa 3 adet Demir Bloğu yerleştirin."
            },
            {
              "title": "3. Adım: Orta ve Alt Sıraya 4 Demir Külçesi Koyun",
              "description": "Orta sıranın tam merkezine 1 adet Demir Külçesi, en alt sıranın 3 kutucuğuna ise 3 adet Demir Külçesi yerleştirerek \"I\" harfi görünümünü tamamlayın ve Örsü envanterinize alın."
            }
          ],
          "callout": {
            "type": "tip",
            "title": "Örsün Kırılma Aşamaları",
            "message": "Örs her kullanımda %12 ihtimalle bir kademe hasar alır (Örs -> Çatlak Örs -> Çok Hasarlı Örs -> Kırılma). Ayrıca yüksek bir yerden düşen örs hem altındaki canlılara yüksek hasar verir hem de kendisi çatlayabilir."
          }
        },
        {
          "id": "ors-ile-esya-onarma-ve-buyu-birlestirme",
          "heading": "2. Örs İle Eşya Onarma, Büyülü Kitap Aktarma ve \"Çok Pahalı!\" Sınırı",
          "paragraphs": [
            "Örs arayüzünde sol kutucuğa ana eşyanızı (örneğin Elmas Kazma), orta kutucuğa ise onarım malzemesini (Elmas), aynı türden ikinci bir kazmayı veya Büyülü Kitabı koyduğunuzda sağ tarafta harcanacak Deneyim Seviyesi (XP) görünür.",
            "Bir eşya örste her işlem gördüğünde \"önceki çalışma cezası\" (Prior Work Penalty) katlanarak artar. Gerekli deneyim maliyeti Hayatta Kalma modunda 40 seviyeye ulaştığında ekranda \"Çok Pahalı!\" (Too Expensive!) uyarısı çıkar ve işlem yapılamaz."
          ],
          "bullets": [
            "Büyü Seviyesi Yükseltme: İki adet Verimlilik IV (Efficiency IV) kitabını veya kazmasını birleştirdiğinizde Verimlilik V elde edersiniz.",
            "İsim Etiketi (Name Tag) Kullanımı: İsim Etiketini sol kutucuğa koyup üstteki metin satırından adını değiştirerek 1 XP karşılığında hayvanlarınıza veya köylülere kalıcı isim verebilirsiniz.",
            "Çok Pahalı Sınırından Kaçınma: Kitapları tek tek kılıca basmak yerine önce kitapları kendi aralarında ağaç yöntemiyle (2’li gruplar hâlinde) birleştirip en son kılıca aktarın."
          ]
        }
      ]
    },
    "faqs": [
      {
        "question": "Minecraft’ta örs yapmak için kaç demir gerekir?",
        "answer": "3 adet Demir Bloğu (27 külçe) ve 4 adet Demir Külçesi olmak üzere toplam 31 adet Demir Külçesi gerekir."
      },
      {
        "question": "Hasar görmüş örs tamir edilir mi?",
        "answer": "Hayatta Kalma modunda çatlamış veya çok hasar görmüş bir örs demir külçesiyle tamir edilemez; tamamen kırılana kadar aynı işlevle kullanılmaya devam edilir."
      },
      {
        "question": "Örste \"Çok Pahalı\" (Too Expensive) hatası nasıl önlenir?",
        "answer": "Eşyaya düşük seviyeli büyüleri tek tek eklemek yerine büyü kitaplarını önce ikişerli olarak birleştirip en son eşyaya uygulamak ve eşyaya Tamir (Mending) büyüsü basmak 39 seviye sınırına takılmayı önler."
      }
    ]
  },
  {
    "id": "bilgirotasi-ek-minecraft-huni",
    "slug": "minecraft-huni",
    "title": "Minecraft’ta Huni (Hopper) Nasıl Yapılır? Otomatik Sandık ve Fırın Bağlama Rehberi",
    "description": "Minecraft’ta 5 demir külçesi ve 1 sandık ile huni (hopper) yapımı, sandığa bağlama (Shift + sağ tık), otomatik fırın sistemi ve redstone kilitleme.",
    "categorySlug": "oyun-donanim",
    "authorId": "author-1",
    "publishedAt": "2026-10-31",
    "updatedAt": "2026-10-31",
    "readTime": "6 dk",
    "coverImage": "https://images.unsplash.com/photo-1607853202273-797f1c22a38e?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "Minecraft",
      "Huni Yapımı",
      "Otomasyon",
      "Redstone",
      "Oyun Rehberi"
    ],
    "content": {
      "lead": "Minecraft’ta Huni (Hopper), üzerindeki yere düşmüş eşyaları veya üstündeki sandığın içeriğini otomatik olarak kendi envanterine çeken ve bağlı olduğu hedef bloğa (sandık, fırın, varil, iksir standı) aktaran temel otomasyon bloğudur. Otomatik tarla, maden eritme fırını ve eşya ayırma depolarının tamamı huni mekaniği üzerine kurulur.",
      "sections": [
        {
          "id": "minecraft-huni-yapimi-tarifi",
          "heading": "1. Minecraft Huni (Hopper) Yapımı Tarifi (5 Demir + 1 Sandık)",
          "paragraphs": [
            "Bir adet Huni üretmek için 5 adet Demir Külçesi ve 1 adet ahşap Sandık (8 kalastan yapılır) gerekir. Çalışma Masası’nda demir külçeleri \"V\" harfi oluşturacak şekilde dizilir ve tam ortasına sandık yerleştirilir."
          ],
          "steps": [
            {
              "title": "1. Adım: 1 Adet Sandık Hazırlayın",
              "description": "8 adet ahşap kalası Çalışma Masası’nın ortası boş kalacak şekilde dizerek 1 adet Sandık üretin."
            },
            {
              "title": "2. Adım: Sandığı Merkeze Yerleştirin",
              "description": "Ürettiğiniz sandığı 3x3 Çalışma Masası ızgarasının tam ortasındaki (5 numaralı) göze koyun."
            },
            {
              "title": "3. Adım: 5 Demir Külçesini \"V\" Şeklinde Dizin",
              "description": "Sol üst, sağ üst, orta sol, orta sağ ve en alt orta gözlere birer Demir Külçesi koyarak Huni’yi alın."
            }
          ]
        },
        {
          "id": "huniyi-sandiga-ve-firina-baglama",
          "heading": "2. Huniyi Sandığa Bağlama (Shift + Sağ Tık) ve Otomatik Fırın Kurulumu",
          "paragraphs": [
            "Yeni başlayanların en sık yaptığı hata, huniyi sandığa bağlamak isterken doğrudan sandığa sağ tıklamaktır; bu durumda huni yerleşmez, sandığın içi açılır. Huninin altındaki çıkış borusunun sandığa bakması için mutlaka Eğilme (Shift) tuşuna basılı tutarak sandığa sağ tıklamalısınız."
          ],
          "bullets": [
            "Otomatik Fırın Üst Bağlantısı: Fırının tam üstüne koyduğunuz huni, eritilecek cevheri veya pişecek yiyeceği fırının üst gözüne doldurur.",
            "Otomatik Fırın Yan Bağlantısı: Fırının yan yüzüne (sağ, sol veya arka) Shift ile bağladığınız huni yalnızca yakıt gözünü (kömür, lav kovası) besler.",
            "Otomatik Fırın Alt Bağlantısı: Fırının altına yerleştirdiğiniz huni, pişen külçeleri otomatik olarak çekip altındaki sandığa aktarır.",
            "Redstone ile Durdurma: Huniye aktif bir Redstone sinyali (örneğin Şalter/Lever) verildiğinde huni kilitlenir ve eşya akışı durur."
          ],
          "callout": {
            "type": "tip",
            "title": "Çıkış Borusunun Yönünü Kontrol Edin",
            "message": "Huniyi yerleştirdikten sonra altındaki ince ucun (nozzle) hangi bloğa temas ettiğine bakın; uç nereyi gösteriyorsa eşyalar o bloğun içine akar."
          }
        }
      ]
    },
    "faqs": [
      {
        "question": "Huni sandığa nasıl bağlanır, neden sandık açılıyor?",
        "answer": "Sandığa normal sağ tıkladığınızda sandık arayüzü açılır. Huniyi sandığa bağlamak için klavyeden Shift (Eğilme) tuşuna basılı tutarken sandığın yanına veya üstüne sağ tıklamanız gerekir."
      },
      {
        "question": "Huni saniyede kaç eşya aktarır?",
        "answer": "Standart bir huni her 8 oyun tikinde (0,4 saniyede) 1 eşya olmak üzere saniyede 2,5 eşya aktarır."
      }
    ]
  },
  {
    "id": "bilgirotasi-ek-minecraft-keep-inventory",
    "slug": "minecraft-keep-inventory",
    "title": "Minecraft Eşya Gitmeme Kodu (keepInventory): Ölünce Envanteri Koruma Ayarı Nasıl Açılır?",
    "description": "Minecraft Java ve Bedrock sürümlerinde ölünce eşyaların ve deneyim puanlarının düşmesini engelleyen /gamerule keepInventory true komutu rehberi.",
    "categorySlug": "oyun-donanim",
    "authorId": "author-1",
    "publishedAt": "2026-10-31",
    "updatedAt": "2026-10-31",
    "readTime": "5 dk",
    "coverImage": "https://images.unsplash.com/photo-1587573089734-09cb69c0f2b4?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "Minecraft",
      "keepInventory",
      "Oyun Komutları",
      "Minecraft Rehberi"
    ],
    "content": {
      "lead": "Minecraft’ta lavlara düştüğünüzde veya madende öldüğünüzde üzerinizdeki tüm elmas eşyaların ve biriktirdiğiniz deneyim seviyelerinin (XP) yere saçılmasını istemiyorsanız, oyunun yerleşik dünya kuralı olan keepInventory ayarını etkinleştirebilirsiniz. Bu kural açıldığında karakteriniz yeniden doğduğunda tüm envanteri, zırhları ve tecrübe puanları olduğu gibi üzerinde kalır.",
      "sections": [
        {
          "id": "keepinventory-komutu-nasil-yazilir",
          "heading": "1. Oyun İçinde Komut Satırından keepInventory Açma (Java ve Bedrock)",
          "paragraphs": [
            "Komutun çalışması için büyük/küçük harf yazımına (Java sürümünde \"I\" harfinin büyük olmasına) dikkat edilmelidir. Komutu bir kez yazdığınızda o dünya için kalıcı olarak kaydedilir."
          ],
          "steps": [
            {
              "title": "1. Adım: Sohbet / Komut Satırını Açın",
              "description": "Klavyeden T veya / tuşuna basarak metin satırını açın."
            },
            {
              "title": "2. Adım: Komutu Doğru Harflerle Girin",
              "description": "Java Sürümü için /gamerule keepInventory true (Bedrock Sürümü için /gamerule keepinventory true) yazıp Enter tuşuna basın."
            },
            {
              "title": "3. Adım: Eski Hâline Döndürmek İsterseniz",
              "description": "Ölünce eşyaların tekrar düşmesini istediğinizde komutu false olarak (/gamerule keepInventory false) girmeniz yeterlidir."
            }
          ],
          "callout": {
            "type": "info",
            "title": "Tek Oyunculu Dünyada \"Komutlara İzin Yok\" Hatası Çözümü",
            "message": "Dünyayı oluştururken hileleri/komutları kapalı bıraktıysanız; ESC > Yerel Ağda Paylaş (Open to LAN) > \"Hilelere İzin Ver: Açık\" seçeneğiyle paylaşımı başlatıp komutu yazabilir, ardından dünyadan çıkıp tekrar girerek normal tek oyunculu devam edebilirsiniz."
          }
        },
        {
          "id": "yeni-dunya-olustururken-menuden-acma",
          "heading": "2. Komut Yazmadan Dünya Oluşturma Menüsünden Etkinleştirme",
          "paragraphs": [
            "Yeni bir dünya açarken hiç komut kullanmadan doğrudan menü üzerinden de bu kuralı açabilirsiniz: Yeni Dünya Oluştur > Oyun Kuralları (Game Rules) > Oyuncu bölümünden \"Öldükten sonra envanteri koru\" seçeneğini Açık konumuna getirmeniz yeterlidir."
          ]
        }
      ]
    },
    "faqs": [
      {
        "question": "/gamerule keepInventory true neden çalışmıyor?",
        "answer": "Java sürümünde harf duyarlılığı vardır; \"keepinventory\" yerine ortadaki I harfi büyük olacak şekilde \"keepInventory\" yazılmalıdır ve dünyada komut izni açık olmalıdır."
      },
      {
        "question": "keepInventory açıldığında XP (deneyim seviyesi) de korunur mu?",
        "answer": "Evet, hem envanterinizdeki eşyalar hem de mevcut deneyim seviyeniz (XP) öldüğünüzde sıfırlanmaz."
      }
    ]
  },
  {
    "id": "bilgirotasi-ek-minecraft-iksir",
    "slug": "minecraft-iksir",
    "title": "Minecraft İksir Yapımı Rehberi: İksir Standı, Garip İksir ve Temel İksir Tarifleri Tablosu",
    "description": "Minecraft’ta Blaze Çubuğu ile İksir Standı (Brewing Stand) yapımı, Nether Yumrusu ile Garip İksir hazırlama ve Gece Görüşü, Ateş Direnci, Kuvvet iksiri tarifleri.",
    "categorySlug": "oyun-donanim",
    "authorId": "author-1",
    "publishedAt": "2026-10-31",
    "updatedAt": "2026-10-31",
    "readTime": "6 dk",
    "coverImage": "https://images.unsplash.com/photo-1607853202273-797f1c22a38e?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "Minecraft",
      "İksir Yapımı",
      "Minecraft Tarifleri",
      "Oyun Rehberi"
    ],
    "content": {
      "lead": "Minecraft’ta Nether kalelerini keşfetmek, okyanus anıtlarına dalmak veya Ender Ejderhası ile savaşmak için İksir (Potion) sistemi kritik avantajlar sağlar. İksir üretiminin temelinde üç unsur yer alır: İksir Standı (Brewing Stand), yakıt olarak kullanılan Blaze Tozu ve neredeyse tüm olumlu iksirlerin tabanı olan \"Garip İksir\" (Awkward Potion).",
      "sections": [
        {
          "id": "iksir-standi-ve-garip-iksir-hazirlama",
          "heading": "1. İksir Standı Kurulumu ve \"Garip İksir\" (Temel Taban) Hazırlama",
          "paragraphs": [
            "İksir Standı üretmek için Çalışma Masası’nın alt sırasına 3 adet Kırıktaş (veya Karataş), orta gözüne ise 1 adet Blaze Çubuğu koymanız gerekir (köylerdeki tapınak yapılarında da hazır bulunabilir). Standı çalıştırmak için sol üstteki yakıt gözüne Blaze Tozu yerleştirmelisiniz."
          ],
          "steps": [
            {
              "title": "1. Adım: Cam Şişeleri Su İle Doldurun",
              "description": "3 adet Cam ile 3 adet Cam Şişe üretin ve bir su kaynağına sağ tıklayarak 3 adet \"Su Şişesi\" elde edin."
            },
            {
              "title": "2. Adım: Şişeleri Alt Gözlere Yerleştirin",
              "description": "İksir Standı’nın altındaki 3 şişe yuvasına Su Şişelerini koyun ve sol üst yakıt yuvasına Blaze Tozu ekleyin."
            },
            {
              "title": "3. Adım: Nether Yumrusu (Nether Wart) Ekleyin",
              "description": "Üstteki malzeme yuvasına 1 adet Nether Yumrusu koyun. İşlem tamamlandığında tüm olumlu iksirlerin ana tabanı olan 3 adet \"Garip İksir\" (Awkward Potion) hazır olur."
            }
          ]
        },
        {
          "id": "en-cok-kullanilan-minecraft-iksir-tarifleri",
          "heading": "2. En Çok Kullanılan Minecraft İksir Tarifleri ve Güçlendiriciler",
          "paragraphs": [
            "Hazırladığınız Garip İksirlerin üzerine aşağıdaki ana malzemelerden birini ekleyerek istediğiniz iksiri üretebilir, ardından Kızıltaş veya Işıktaşı Tozu ile süresini/gücünü artırabilirsiniz."
          ],
          "bullets": [
            "Ateş Direnci İksiri (Lav ve Ateş Koruması): Garip İksir + Magma Kremi.",
            "Gece Görüşü İksiri (Karanlıkta ve Suda Net Görüş): Garip İksir + Altın Havuç.",
            "Kuvvet İksiri (Yakın Dövüş Hasarı Artışı): Garip İksir + Blaze Tozu.",
            "Su Altında Nefes Alma İksiri: Garip İksir + Kirpi Balığı (Pufferfish).",
            "İyileştirme / Can İksiri: Garip İksir + Parlayan Karpuz Dilimi.",
            "Çeviklik (Hız) İksiri: Garip İksir + Şeker.",
            "Kızıltaş Tozu (Redstone Dust): Mevcut iksirin etki süresini uzatır (örneğin 3 dakikadan 8 dakikaya çıkarır).",
            "Işıktaşı Tozu (Glowstone Dust): İksirin seviyesini I’den II’ye yükselterek etkisini güçlendirir.",
            "Barut (Gunpowder): İksiri fırlatılabilir \"Patlayıcı İksir\" (Splash Potion) hâline getirir."
          ]
        }
      ]
    },
    "faqs": [
      {
        "question": "Zayıflık İksiri (Köylü İyileştirme) için Garip İksir gerekir mi?",
        "answer": "Hayır! Zayıflık İksiri istisnadır; doğrudan normal Su Şişesi üzerine Mayalı Örümcek Gözü (Fermented Spider Eye) eklenerek üretilir ve Barut ile patlayıcı hâle getirilir."
      },
      {
        "question": "Bir iksire hem Kızıltaş hem Işıktaşı Tozu basılabilir mi?",
        "answer": "Hayır, bir iksirin ya süresi (Kızıltaş ile) uzatılabilir ya da seviyesi (Işıktaşı Tozu ile II. seviyeye) yükseltilebilir; ikisi aynı anda uygulanamaz."
      }
    ]
  },
  {
    "id": "bilgirotasi-ek-minecraft-renk-kodlari",
    "slug": "minecraft-renk-kodlari",
    "title": "Minecraft Renk ve Biçimlendirme Kodları Tablosu (§ İşareti ile Tabela ve Sohbet Renklendirme)",
    "description": "Minecraft’ta tabela, kitap, sunucu adı (MOTD) ve sohbette renkli, kalın ve italik yazı yazmak için kullanılan §0–§f renk kodları tam listesi.",
    "categorySlug": "oyun-donanim",
    "authorId": "author-1",
    "publishedAt": "2026-10-31",
    "updatedAt": "2026-10-31",
    "readTime": "5 dk",
    "coverImage": "https://images.unsplash.com/photo-1587573089734-09cb69c0f2b4?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "Minecraft",
      "Renk Kodları",
      "Biçimlendirme",
      "Oyun Rehberi"
    ],
    "content": {
      "lead": "Minecraft’ta tabelaları, kitapları, dünya adlarını veya sunucu açıklamalarını (MOTD) renklendirmek için bölüm işareti (§) ve hemen ardından gelen tek haneli bir rakam veya harf kodu kullanılır. Ayrıca güncel sürümlerde tabelalara sağ tıklayarak doğrudan Boya (Dye) ve Parlayan Mürekkep Kesesi uygulamak da mümkündür.",
      "sections": [
        {
          "id": "minecraft-renk-kodlari-listesi",
          "heading": "1. Minecraft Renk Kodları (§0 – §f) ve Yazı Biçimlendirme Kodları",
          "paragraphs": [
            "Bölüm işareti (§) ile kod arasına boşluk bırakmadan metninizi yazabilirsiniz (örneğin §aMerhaba yazdığınızda metin açık yeşil görünür)."
          ],
          "bullets": [
            "§0: Siyah | §1: Koyu Mavi | §2: Koyu Yeşil | §3: Koyu Turkuaz (Aqua)",
            "§4: Koyu Kırmızı | §5: Mor | §6: Altın Sarısı (Turuncu) | §7: Açık Gri",
            "§8: Koyu Gri | §9: Mavi | §a: Açık Yeşil | §b: Açık Mavi (Turkuaz)",
            "§c: Açık Kırmızı | §d: Pembe | §e: Sarı | §f: Beyaz",
            "§l: Kalın (Bold) yazı | §o: İtalik (Eğik) yazı | §n: Altı çizili yazı | §r: Biçimlendirmeyi sıfırlar"
          ],
          "callout": {
            "type": "tip",
            "title": "Bölüm İşareti (§) Klavyede Nasıl Yazılır ve Tabelalarda Boya Kullanımı",
            "message": "Windows’ta Alt tuşuna basılı tutarken Numpad üzerinden 0167 (veya Alt + 21) yazarak § işaretini çıkarabilirsiniz. Java sürümünde normal tabelalarda § işareti yerine tabelayı yerleştirdikten sonra elinize istediğiniz renkte Boya alıp tabelaya sağ tıklayarak rengini anında değiştirebilirsiniz."
          }
        }
      ]
    },
    "faqs": [
      {
        "question": "Hem renkli hem kalın yazı nasıl yazılır?",
        "answer": "Önce renk kodunu, hemen ardından biçimlendirme kodunu yazmalısınız (örneğin §c§lUyarı yazdığınızda kalın kırmızı metin oluşur)."
      },
      {
        "question": "Tabeladaki yazıyı karanlıkta parlak yapmak için ne kullanılır?",
        "answer": "Parlayan Mürekkepbalığı’ndan düşen \"Parlayan Mürekkep Kesesi\"ni (Glow Ink Sac) tabelaya sağ tıklayarak uyguladığınızda yazılar karanlıkta parlar."
      }
    ]
  },
  {
    "id": "bilgirotasi-ek-valorant-karakterler",
    "slug": "valorant-karakterler",
    "title": "VALORANT Ajanları ve Rolleri Rehberi: Düellocu, Kontrol Uzmanı, Öncü ve Gözcü Seçimi",
    "description": "VALORANT’taki 4 ana ajan rolünün (Düellocu, Öncü, Kontrol Uzmanı, Gözcü) görevleri, ideal takım kompozisyonu ve oyun tarzınıza göre ajan seçimi.",
    "categorySlug": "oyun-donanim",
    "authorId": "author-1",
    "publishedAt": "2026-10-31",
    "updatedAt": "2026-10-31",
    "readTime": "6 dk",
    "coverImage": "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "VALORANT",
      "VALORANT Ajanları",
      "Oyun Taktikleri",
      "FPS Oyunları"
    ],
    "content": {
      "lead": "VALORANT’ta dereceli maçları kazanmanın ilk adımı ajan seçim ekranında dengeli bir takım kompozisyonu kurmaktır. Beş oyuncunun tamamının Düellocu seçtiği bir takımda görüş kapatacak duman (smoke), köşe temizleyecek bilgi yeteneği ve arka koridoru tutacak tuzak bulunmadığı için hem saldırıda hem savunmada alan kontrolü kaybedilir.",
      "sections": [
        {
          "id": "valorant-4-ajan-rolu-ve-gorevleri",
          "heading": "1. VALORANT’taki 4 Ajan Rolü ve Maç İçindeki Sorumlulukları",
          "paragraphs": [
            "Oyundaki tüm ajanlar takım içindeki işlevlerine göre dört sınıfa ayrılır. Her sınıfın tur başında ve tur ortasında üstlendiği görev farklıdır."
          ],
          "bullets": [
            "Düellocu (Duelist - Jett, Reyna, Raze, Neon, Phoenix): Takımın ilk temas kurucularıdır. Saldırıda bomba alanına ilk giren (entry) ve savunma hattında rakibin dikkatini dağıtarak alan açan roldür.",
            "Kontrol Uzmanı (Controller - Brimstone, Omen, Viper, Clove, Astra): Duman ve perde yetenekleriyle rakip keskin nişancıların (Operator) ve çapraz ateş noktalarının görüşünü kapatarak takımın güvenli geçişini sağlar.",
            "Öncü (Initiator - Sova, Fade, Skye, KAY/O, Gekko, Breach): Kör edici (flash) ve keşif yetenekleriyle köşelerde saklanan rakiplerin yerini tespit eder ve Düellocuların alana girmesini kolaylaştırır.",
            "Gözcü (Sentinel - Cypher, Killjoy, Sage, Chamber, Deadlock, Vyse): Savunmada bomba alanlarını tuzak ve kameralarla kilitler; saldırıda ise takımın arkasından dolanan (lurk/flank) rakipleri erken haber verir."
          ]
        },
        {
          "id": "ideal-takim-kompozisyonu-nasil-kurulur",
          "heading": "2. Haritaya Göre İdeal 5 Kişilik Takım Kompozisyonu",
          "paragraphs": [
            "Standart haritaların büyük çoğunluğunda en dengeli dizilim; 1 Kontrol Uzmanı (zorunlu), 1 Gözcü, 1–2 Öncü ve 1–2 Düellocu şeklindedir. Yeni başlayan oyuncuların her rol için en az 1 ajana hâkim olması, ajan seçim ekranında takımın eksik kalan rolünü tamamlayabilmesini sağlar."
          ]
        }
      ]
    },
    "faqs": [
      {
        "question": "Yeni başlayanlar için en kolay öğrenilen VALORANT ajanları hangileridir?",
        "answer": "Yetenek kullanımı net ve anlaşılır olduğu için Gözcü rolünde Sage veya Killjoy, Kontrol Uzmanı rolünde Brimstone, Düellocu rolünde Phoenix veya Reyna, Öncü rolünde ise Gekko veya KAY/O başlangıç için uygundur."
      },
      {
        "question": "Takımda hangi rol mutlaka bulunmalıdır?",
        "answer": "Duman (smoke) olmadan açık alanlardan bomba bölgesine girmek çok zor olduğu için her takımda en az 1 Kontrol Uzmanı mutlaka bulunmalıdır."
      }
    ]
  },
  {
    "id": "bilgirotasi-ek-valorant-sage",
    "slug": "valorant-sage",
    "title": "VALORANT Sage Rehberi: Bariyer Küresi (Duvar), Yavaşlatma ve Diriltme Taktikleri",
    "description": "VALORANT’ın Gözcü ajanı Sage’in yetenek kullanımı, duvar açıları, Can Küresi önceliği ve Diriltme (Ulti) zamanlaması üzerine kapsamlı rehber.",
    "categorySlug": "oyun-donanim",
    "authorId": "author-1",
    "publishedAt": "2026-10-31",
    "updatedAt": "2026-10-31",
    "readTime": "5 dk",
    "coverImage": "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "VALORANT",
      "Sage",
      "Ajan Rehberi",
      "Oyun İpuçları"
    ],
    "content": {
      "lead": "VALORANT’ın en bilinen Gözcü (Sentinel) ajanlarından olan Sage, yalnızca can yenileyen bir destek karakteri değil; Bariyer Küresi (C) ve Yavaşlatma Küresi (Q) ile rakibin hızlı hücumlarını (rush) tek başına durdurabilen güçlü bir alan kilitleyicidir.",
      "sections": [
        {
          "id": "sage-duvar-ve-yavaslatma-kullanimi",
          "heading": "1. Bariyer Küresi (Duvar) ve Yavaşlatma Küresini Doğru Zamanlama",
          "paragraphs": [
            "Savunma turlarında tur başlar başlamaz ilk saniyede ezbere duvar örmek, rakibin duvarı hemen kırıp başka koridora dönmesine veya duvarın süresi bittiğinde engelsiz girmesine neden olur. Bunun yerine önce ses dinleyip rakibin geldiğinden emin olduğunuzda duvarı veya yavaşlatma küresini kullanmak çok daha etkilidir."
          ],
          "bullets": [
            "Bariyer Küresi (C): Yerleştirildikten sonraki ilk birkaç saniye içinde güçlenerek tam dayanıklılığa ulaşır; bu yüzden rakibin tam önünde değil, temas kurulmadan hemen önce örülmelidir.",
            "Saldırıda Spike Kurulumu: Spike kurarken açık açıları kapatmak için duvarı çapraz yerleştirerek imha süresini zorlaştırabilirsiniz.",
            "Diriltme (X - Ulti): Açık alanda bir takım arkadaşını diriltmeden önce önüne duvar örmek veya bir takım arkadaşınızdan koruma ateşi (bait) istemek ikinizin de vurulmasını önler."
          ]
        }
      ]
    },
    "faqs": [
      {
        "question": "Sage kendi canını mı yoksa takım arkadaşını mı daha çok doldurur?",
        "answer": "Sage’in Can Küresi (E) takım arkadaşlarını kendi canına kıyasla daha yüksek miktarda ve daha hızlı iyileştirir; bu nedenle çatışmadaki ön hat oyuncularını iyileştirmek önceliklidir."
      },
      {
        "question": "Sage duvarı nasıl döndürülür?",
        "answer": "Bariyer Küresi (C) seçiliyken tekrar C tuşuna veya sağ tıka basılı tutarak duvarın açısını 90 derece veya istediğiniz yöne döndürebilirsiniz."
      }
    ]
  },
  {
    "id": "bilgirotasi-ek-valorant-brimstone",
    "slug": "valorant-brimstone",
    "title": "VALORANT Brimstone Rehberi: Doğru Duman (Smoke) Atma, Yakıcı ve Ulti Kullanımı",
    "description": "Brimstone ile harita kontrolü kurma, dumanları koridorla hizalama (flush smoke), Spike sonrası Yakıcı (Molly) ve Uydu Saldırısı zamanlaması.",
    "categorySlug": "oyun-donanim",
    "authorId": "author-1",
    "publishedAt": "2026-10-31",
    "updatedAt": "2026-10-31",
    "readTime": "5 dk",
    "coverImage": "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "VALORANT",
      "Brimstone",
      "Kontrol Uzmanı",
      "Oyun Rehberi"
    ],
    "content": {
      "lead": "Brimstone, VALORANT’ta aynı anda 3 adet uzun süreli dumanı (Dumanlı Hava Sahası) taktiksel harita üzerinden anında indirebilen, hızlı saha girişleri (executes) için en güvenilir Kontrol Uzmanı ajanlarından biridir. Dumanların milimetrik yerleşimi, turun kazanılıp kaybedilmesini doğrudan belirler.",
      "sections": [
        {
          "id": "brimstone-dogru-duman-atma-kurali",
          "heading": "1. En Sık Yapılan Duman Hatası: Dumanı Koridorun Dışına Taşırmayın!",
          "paragraphs": [
            "Duman atarken yapılan en büyük hata, dumanın yarısını kendi takımınızın gireceği alana doğru taşırmaktır. Bu durumda rakip oyuncu dumanın içinden sağa veya sola широk açıyla çıkarak (3 yönlü açı avantajı) takımınızı tek tek avlayabilir.",
            "Doğru duman, rakibin geleceği koridorun ağzıyla tam hizalı (duvarla sıfır) olmalı ve dumanın şişkin kısmı rakip tarafında kalmalıdır."
          ],
          "bullets": [
            "Kuvvet İşareti (C): Bomba alanına girmeden hemen önce takımın koşu yoluna atılarak hareket ve atış hızı kazandırır.",
            "Yakıcı (Q - Molly): Köşeleri temizlemek veya Spike kurulduktan sonra imha süresini 7–8 saniye geciktirmek için kullanılır.",
            "Uydu Saldırısı (X - Ulti): Dar koridorlarda sıkışan rakipleri çıkarmak, Killjoy ultisini kırmak veya Spike imhasını engellemek için saklanmalıdır."
          ]
        }
      ]
    },
    "faqs": [
      {
        "question": "Brimstone dumanları tur içinde tekrar dolar mı?",
        "answer": "Hayır, Omen veya Clove’un aksine Brimstone’un her turda en fazla 3 duman hakkı vardır ve kullanıldıktan sonra yenilenmez; bu yüzden sahte (fake) hamlelerde tüm dumanları harcamamak gerekir."
      },
      {
        "question": "Brimstone hangi haritalarda daha güçlüdür?",
        "answer": "Bind, Fracture ve Sunset gibi dar girişli ve hızlı alan basmaya uygun haritalarda 3 dumanı aynı anda indirebildiği için çok güçlüdür."
      }
    ]
  },
  {
    "id": "bilgirotasi-ek-valorant-iade",
    "slug": "valorant-iade",
    "title": "VALORANT VP ve Kostüm (Skin) İadesi Nasıl Yapılır? İade Şartları ve 14 Gün Kuralı",
    "description": "VALORANT’ta yanlışlıkla alınan silah kaplamalarını (skin) ve ajan kontratlarını Riot Destek üzerinden iade etme koşulları, Radyanit Puanı uyarısı.",
    "categorySlug": "oyun-donanim",
    "authorId": "author-1",
    "publishedAt": "2026-10-31",
    "updatedAt": "2026-10-31",
    "readTime": "5 dk",
    "coverImage": "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "VALORANT",
      "Skin İadesi",
      "Riot Games",
      "VP İadesi"
    ],
    "content": {
      "lead": "VALORANT mağazasından satın aldığınız bir silah kaplamasını (skin) veya oyun içi öğeyi belirli koşullar altında geri verip VALORANT Puanlarınızı (VP) hesabınıza iade alabilirsiniz. Ancak Riot Games’in iade politikası \"kullanılmamış ve geliştirilmemiş olma\" şartına bağlıdır; bu kuralı bilmeden kaplamaya Radyanit Puanı harcamak iade hakkınızı anında ortadan kaldırır.",
      "sections": [
        {
          "id": "valorant-skin-iade-sartlari",
          "heading": "1. Hangi İçerikler İade Edilebilir, Hangileri Edilemez?",
          "paragraphs": [
            "Bir silah kaplamasının VP karşılığında iade edilebilmesi için satın alma tarihinden itibaren 14 gün geçmemiş olması, kaplamanın hiçbir seviye yükseltmesinin veya renk paketinin (Radyanit Puanı ile) açılmamış olması ve maç içinde kullanılmamış olması gerekir."
          ],
          "bullets": [
            "İade Edilebilenler: Son 14 gün içinde tekil olarak alınmış, hiç geliştirilmemiş (Radyanit basılmamış) ve maça sokulmamış silah kaplamaları.",
            "İade Edilemeyenler: Geliştirilmiş (Seviye 2+ veya renk paketi açılmış) kaplamalar, Kostüm Paketleri (Bundle), Savaş Bileti (Battle Pass), Savaş Bileti kademeleri, Gece Pazarı’ndan kullanılmış içerikler ve Radyanit Puanları."
          ],
          "steps": [
            {
              "title": "1. Adım: Resmi Riot Destek Sayfasına Giriş Yapın",
              "description": "Tarayıcınızdan support-valorant.riotgames.com adresindeki resmi Sipariş Geçmişi / İade sayfasına Riot hesabınızla giriş yapın."
            },
            {
              "title": "2. Adım: Sipariş Geçmişini Listele’ye Tıklayın",
              "description": "Son 14 gün içinde yaptığınız ve iade şartlarını karşılayan alımları listede görüntüleyin."
            },
            {
              "title": "3. Adım: İade Et Butonunu Onaylayın",
              "description": "Uygun öğenin yanındaki \"İade Et\" seçeneğine tıkladığınızda VP tutarı anında oyun içi bakiyenize geri yüklenir."
            }
          ]
        }
      ]
    },
    "faqs": [
      {
        "question": "Radyanit Puanı ile geliştirdiğim bir skini iade edebilir miyim?",
        "answer": "Riot Games’in güncel politikasına göre Radyanit Puanı ile seviyesi yükseltilmiş veya renk varyantı açılmış kaplamalar iade kapsamı dışındadır."
      },
      {
        "question": "Paket (Bundle) olarak alınan skinlerden biri iade edilir mi?",
        "answer": "Hayır, indirimli kostüm paketleri (Bundle) toplu satın alma sayıldığı için paketin tamamı veya içindeki tek bir silah iade edilemez."
      }
    ]
  },
  {
    "id": "bilgirotasi-ek-valorant-skin-fiyat",
    "slug": "valorant-skin-fiyat",
    "title": "VALORANT Kostüm (Skin) Aşamaları, VP Karşılıkları ve Gece Pazarı (Night Market) Rehberi",
    "description": "VALORANT mağazasındaki Seçkin, İhtişamlı, Üstün, Ultra ve Özel (Select, Deluxe, Premium, Exclusive, Ultra) kostüm kademeleri ve Gece Pazarı kuralları.",
    "categorySlug": "oyun-donanim",
    "authorId": "author-1",
    "publishedAt": "2026-10-31",
    "updatedAt": "2026-10-31",
    "readTime": "5 dk",
    "coverImage": "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "VALORANT",
      "Gece Pazarı",
      "VP",
      "Oyun Rehberi"
    ],
    "content": {
      "lead": "VALORANT mağazasında yer alan silah kaplamaları rastgele fiyatlandırılmaz; her kaplama sahip olduğu ses efekti, bitiriş animasyonu (finisher) ve model değişikliğine göre 5 farklı kademeye (Edition) ayrılır. Bu kademeleri bilmek hem mağaza bütçenizi planlamanıza hem de Gece Pazarı’na (Night Market) hangi kaplamaların gelebileceğini anlamanıza yardımcı olur.",
      "sections": [
        {
          "id": "valorant-5-kostum-kademesi-ve-vp-degerleri",
          "heading": "1. VALORANT’taki 5 Kostüm Kademesi (VP Bazında)",
          "paragraphs": [
            "Bölgesel para birimi karşılıkları dönemsel olarak güncellense de kaplamaların oyun içi VP (VALORANT Puanı) kademeleri sabittir:"
          ],
          "bullets": [
            "Seçkin (Select Edition - Mavi Daire): Silah başına 875 VP (Özel ses veya animasyon içermez, yalnızca görsel kaplamadır).",
            "İhtişamlı (Deluxe Edition - Yeşil Eşkenar): Silah başına 1275 VP (Bazı serilerde hareketli doku bulunur ancak ses/animasyon yükseltmesi yoktur).",
            "Üstün (Premium Edition - Pembe Ters Üçgen): Silah başına 1775 VP (Özel atış sesi, şarjör değiştirme animasyonu ve bitiriş efekti içeren Reaver/Yağmacı, Prime/Asil, Oni gibi popüler seriler).",
            "Özel (Exclusive Edition - Turuncu Beşgen): Silah başına 2175–2375 VP (Kuronami, Prelude to Chaos, RGX gibi üst düzey ses ve efekt serileri).",
            "Ultra (Ultra Edition - Sarı Elmas): Silah başına 2475 VP (Elderflame/Ejder Ateşi, Protocol 781-A, Radiant Entertainment System gibi tam dönüşümlü seriler)."
          ],
          "callout": {
            "type": "info",
            "title": "Gece Pazarı’na (Night Market) Hangi Skinler Gelir?",
            "message": "Gece Pazarı’na yalnızca Seçkin (875 VP), İhtişamlı (1275 VP) ve Üstün (1775 VP) kademesindeki silah kaplamaları ile 3550 VP ve altındaki yakın dövüş (bıçak) kaplamaları gelir. 2175+ VP’lik Özel ve Ultra seriler Gece Pazarı’nda yer almaz."
          }
        }
      ]
    },
    "faqs": [
      {
        "question": "Gece Pazarı ne sıklıkla gelir?",
        "answer": "Gece Pazarı genellikle her Kısım (Act) bitimine yaklaşık 2–3 hafta kala açılır ve her oyuncuya rastgele 6 indirimli kart sunar."
      },
      {
        "question": "Günlük mağazadaki 4 silah nasıl yenilenir?",
        "answer": "Mağazanın alt kısmındaki 4 tekil kaplama her 24 saatte bir (Türkiye saatiyle gece 03:00 civarında) tamamen rastgele olarak yenilenir."
      }
    ]
  },
  {
    "id": "bilgirotasi-ek-valorant-ajans-acma",
    "slug": "valorant-ajans-acma",
    "title": "VALORANT’ta Yeni Ajan Nasıl Açılır? Kingdom Kredisi (KC) ve Ajan Alım Etkinliği Rehberi",
    "description": "VALORANT’ta ücretsiz ajan açma yöntemleri, Kingdom Kredisi (KC) biriktirme sınırı (10.000 KC), yeni sezon Ajan Alım Etkinliği ve Xbox Game Pass avantajı.",
    "categorySlug": "oyun-donanim",
    "authorId": "author-1",
    "publishedAt": "2026-10-31",
    "updatedAt": "2026-10-31",
    "readTime": "5 dk",
    "coverImage": "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "VALORANT",
      "Ajan Açma",
      "Kingdom Kredisi",
      "Oyun Rehberi"
    ],
    "content": {
      "lead": "VALORANT’ta yeni başlayan oyunculara başlangıçta 5 temel ajan (Brimstone, Jett, Phoenix, Sage, Sova) açık olarak verilir. Diğer tüm ajanları ise gerçek para (VP) harcamadan, tamamen oyun oynayarak kazanılan Kingdom Kredisi (KC) veya yeni ajan çıktığında başlayan 28 günlük Ajan Alım Etkinliği ile ücretsiz açabilirsiniz.",
      "sections": [
        {
          "id": "kingdom-kredisi-ile-ajan-acma",
          "heading": "1. Kingdom Kredisi (KC) Biriktirerek Ajan Açma (8.000 KC)",
          "paragraphs": [
            "Oynadığınız her maçtan ve tamamladığınız 4 aşamalı Günlük Görevlerden (Checkpoints) Kingdom Kredisi kazanırsınız. Bir ajanı kalıcı olarak açmanın bedeli 8.000 Kingdom Kredisi’dir.",
            "Hesabınızda en fazla 10.000 Kingdom Kredisi biriktirebilirsiniz. Bakiyeniz 10.000 KC sınırına ulaştığında kazandığınız yeni kredilerin boşa gitmemesi için Ajanlar menüsünden bir ajan veya ajan ekipmanı açmanız önerilir."
          ],
          "bullets": [
            "Yeni Çıkan Ajan Etkinliği: Oyuna yeni bir ajan eklendiğinde ilk 28 gün boyunca yalnızca maç oynayarak yaklaşık 200.000 XP topladığınızda ajan otomatik olarak ücretsiz açılır.",
            "28 Gün Sonrası: Etkinlik süresi bittiğinde yeni ajan da diğer ajanlar gibi 8.000 Kingdom Kredisi ile alınabilir hâle gelir.",
            "Game Pass Bağlantısı: Aktif bir PC Game Pass aboneliğiniz varsa Riot hesabınızı Xbox hesabınıza bağladığınızda tüm mevcut ve yeni çıkan ajanlar anında kullanıma açılır."
          ]
        }
      ]
    },
    "faqs": [
      {
        "question": "Kingdom Kredisi (KC) parayla satın alınabilir mi?",
        "answer": "Hayır, Kingdom Kredisi yalnızca oyun oynayarak ve günlük görevleri tamamlayarak kazanılır; mağazadan parayla satın alınamaz."
      },
      {
        "question": "10.000 Kingdom Kredisi sınırına ulaşırsam ne olur?",
        "answer": "Üst sınır 10.000 KC olduğu için harcama yapana kadar yeni maçlardan gelen KC’ler eklenmez; bu yüzden 8.000 KC olduğunda hemen ajan veya aksesuar açmanız önerilir."
      }
    ]
  },
  {
    "id": "bilgirotasi-ek-csgo-rutbeler",
    "slug": "csgo-rutbeler",
    "title": "CS2 ve CS:GO Rütbeleri (Rank Sıralaması): Seçkin (Premier) CS Derecesi ve Rekabetçi Ranklar",
    "description": "Counter-Strike 2’deki harita bazlı 18 rekabetçi rütbe (Gümüş’ten Dünyaca Seçkin’e) ve Premier modundaki renkli CS Derecesi (ELO) tablosu.",
    "categorySlug": "oyun-donanim",
    "authorId": "author-1",
    "publishedAt": "2026-10-31",
    "updatedAt": "2026-10-31",
    "readTime": "6 dk",
    "coverImage": "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "CS2",
      "CS:GO Rütbeleri",
      "Rank Sıralaması",
      "Premier Modu",
      "FPS Oyunları"
    ],
    "content": {
      "lead": "Counter-Strike 2 (CS2) ile birlikte oyundaki sıralama sistemi iki ayrı yapıya kavuşmuştur: Birincisi her harita için ayrı ayrı hesaplanan 18 kademeli klasik Rekabetçi rütbeleri (Gümüş I’den Dünyaca Seçkin’e), ikincisi ise Seçkin (Prime) oyuncuların harita yasaklama/seçme sistemiyle oynadığı ve doğrudan sayısal ELO puanı gösteren \"CS Derecesi\" (Premier) sistemidir.",
      "sections": [
        {
          "id": "cs2-ve-csgo-18-rekabetci-rutbe-siralamasi",
          "heading": "1. CS2 / CS:GO 18 Klasik Rekabetçi Rütbe Sıralaması (Düşükten Yükseğe)",
          "paragraphs": [
            "Rekabetçi modda her bir haritada (örneğin Mirage, Dust II, Inferno) rütbenizi açmak için o haritada belirli sayıda galibiyet almanız gerekir. 18 rütbenin en düşükten en yükseğe tam sıralaması şöyledir:"
          ],
          "bullets": [
            "1–6 (Gümüş Kademesi): Gümüş I (Silver I) -> Gümüş II -> Gümüş III -> Gümüş IV -> Seçkin Gümüş (Silver Elite) -> Usta Seçkin Gümüş (Silver Elite Master).",
            "7–10 (Altın Nova Kademesi): Altın Nova I -> Altın Nova II -> Altın Nova III -> Usta Altın Nova (Gold Nova Master).",
            "11–14 (Muhafız / Keleş ve Şerif Kademesi): Usta Muhafız I (MG1) -> Usta Muhafız II (MG2) -> Seçkin Usta Muhafız (MGE - Çift Keleş) -> Güzide Usta Muhafız (DMG - Şerif).",
            "15–18 (Üst Düzey Kademeler): Efsanevi Kartal (LE) -> Usta Efsanevi Kartal (LEM) -> Birinci Sınıf Üstün Usta (Supreme / SMFC) -> Dünyaca Seçkin (The Global Elite)."
          ]
        },
        {
          "id": "cs2-premier-renk-kademeleri",
          "heading": "2. CS2 Seçkin (Premier) Sayısal CS Derecesi ve Renk Kademeleri",
          "paragraphs": [
            "Premier modunda 10 maç kazandıktan sonra 1.000 ile 30.000+ arasında sayısal bir CS Derecesi (CS Rating) açılır ve her maçtan önce kazanacağınız veya kaybedeceğiniz puan ekranda açıkça gösterilir."
          ],
          "bullets": [
            "0 – 4.999 Puan: Gri (Başlangıç kademesi)",
            "5.000 – 9.999 Puan: Açık Mavi",
            "10.000 – 14.999 Puan: Koyu Mavi",
            "15.000 – 19.999 Puan: Mor",
            "20.000 – 24.999 Puan: Pembe",
            "25.000 – 29.999 Puan: Kırmızı",
            "30.000+ Puan: Altın Sarısı (En üst küresel liderlik kademesi)"
          ]
        }
      ]
    },
    "faqs": [
      {
        "question": "CS2’de neden Mirage haritasındaki rütbem Dust II’de görünmüyor?",
        "answer": "CS2’de klasik Rekabetçi mod rütbeleri harita bazlıdır; her haritanın rütbesi birbirinden bağımsız olarak hesaplanır. Genel tek bir derece için Seçkin (Premier) modu oynanır."
      },
      {
        "question": "Uzun süre CS2 oynamazsam rütbem silinir mi?",
        "answer": "Evet, uzun süre rekabetçi maç oynamadığınızda rütbeniz gizlenir; tekrar görünür olması için 1 galibiyet almanız yeterlidir."
      }
    ]
  },
  {
    "id": "bilgirotasi-ek-csgo-sistem",
    "slug": "csgo-sistem",
    "title": "Counter-Strike 2 (CS2) Sistem Gereksinimleri: Kaç GB RAM, Ekran Kartı ve SSD İster?",
    "description": "Source 2 motorlu Counter-Strike 2 için minimum ve 144+ FPS önerilen PC sistem gereksinimleri, DirectX 11 / Shader Model 5.0 şartı ve depolama boyutu.",
    "categorySlug": "oyun-donanim",
    "authorId": "author-1",
    "publishedAt": "2026-10-31",
    "updatedAt": "2026-10-31",
    "readTime": "5 dk",
    "coverImage": "https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "CS2",
      "Sistem Gereksinimleri",
      "PC Donanım",
      "FPS Oyunları"
    ],
    "content": {
      "lead": "CS:GO’nun yerini alan Counter-Strike 2 (CS2), Source 2 motorunun getirdiği dinamik ışıklandırma, su fiziği ve hacimsel duman efektleri nedeniyle eski CS:GO tablolarına kıyasla daha güncel bir ekran kartı ve işlemci gerektirir.",
      "sections": [
        {
          "id": "cs2-minimum-ve-onerilen-sistem-gereksinimleri",
          "heading": "1. CS2 Minimum ve Rekabetçi (144+ FPS) Sistem Gereksinimleri",
          "paragraphs": [
            "Valve’ın Steam üzerinde açıkladığı resmi minimum gereksinimler ile rekabetçi maçlarda duman ve molotof içinde FPS düşüşü yaşamamak için önerilen donanım seviyeleri şunlardır:"
          ],
          "bullets": [
            "Minimum İşlemci: 4 donanım iş parçacıklı (4-thread) Intel Core i5-750 veya üzeri işlemci.",
            "Minimum Bellek ve GPU: 8 GB RAM; DirectX 11 ve Shader Model 5.0 uyumlu, en az 1 GB VRAM’li ekran kartı; 85 GB boş depolama alanı.",
            "Önerilen (1080p / 144+ FPS): Intel Core i5-12400F veya AMD Ryzen 5 5600/7500F işlemci, 16 GB çift kanal RAM, GTX 1660 Super / RTX 3060 / RX 6600 ekran kartı ve NVMe SSD."
          ]
        }
      ]
    },
    "faqs": [
      {
        "question": "CS2 kaç GB yer kaplar?",
        "answer": "CS2 kurulumu ve atölye haritaları için SSD üzerinde en az 85 GB boş alan bulundurulmalıdır."
      },
      {
        "question": "Eski CS:GO açan bilgisayarım CS2’yi açar mı?",
        "answer": "Ekran kartınız DirectX 11 ve Shader Model 5.0 destekliyorsa ve en az 8 GB RAM’iniz varsa oyunu açabilirsiniz; ancak akıcı FPS için çözünürlüğü (örneğin 1280x960) ve gölge kalitesini optimize etmeniz önerilir."
      }
    ]
  },
  {
    "id": "bilgirotasi-ek-discord-renk",
    "slug": "discord-renk",
    "title": "Discord’da İsim Rengi ve Renkli Yazı Nasıl Yapılır? Rol Hiyerarşisi ve ANSI Kod Blokları",
    "description": "Discord sunucularında kullanıcı adı rengini rol ayarlarıyla değiştirme ve kod blokları (```ansi) kullanarak sohbete renkli metin yazma rehberi.",
    "categorySlug": "teknoloji-mobil",
    "authorId": "author-1",
    "publishedAt": "2026-10-31",
    "updatedAt": "2026-10-31",
    "readTime": "5 dk",
    "coverImage": "https://images.unsplash.com/photo-1614680376593-902f749f7ffc?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "Discord",
      "Discord Rol Rengi",
      "Sosyal Medya",
      "İpuçları"
    ],
    "content": {
      "lead": "Discord’da bir sunucudaki kullanıcı adınızın (nick) renkli görünmesi kişisel profil ayarlarından değil, o sunucuda size verilen \"Rol\" (Role) ayarlarından ve rollerin yukarıdan aşağıya doğru sıralamasından (hiyerarşisinden) kaynaklanır. Sohbet mesajlarının içinde renkli metin paylaşmak için ise masaüstü sürümünde üçlü ters tırnak (```) kod blokları kullanılır.",
      "sections": [
        {
          "id": "discord-sunucu-isim-rengi-nasil-degistirilir",
          "heading": "1. Discord Sunucusunda Kullanıcı Adı (Rol) Rengini Değiştirme",
          "paragraphs": [
            "Bir kullanıcının birden fazla rolü varsa Discord her zaman rol listesindeki en üstte bulunan (ve rengi varsayılan olmayan) rolün rengini isme yansıtır."
          ],
          "steps": [
            {
              "title": "1. Adım: Sunucu Ayarları > Roller Menüsüne Girin",
              "description": "Sunucu yöneticisiyseniz sol üstten Sunucu Ayarları > Roller sekmesini açın."
            },
            {
              "title": "2. Adım: Rol Rengini Seçin veya Özel HEX Kodu Girin",
              "description": "Düzenlemek istediğiniz role tıklayıp Görünüm sekmesinden hazır bir renk seçin veya #FF5733 gibi özel bir HEX renk kodu yazın."
            },
            {
              "title": "3. Adım: Rol Sıralamasını Kontrol Edin",
              "description": "Rengin görünmesi için ilgili rolü, renksiz veya diğer rollerin üstüne sürükleyip \"Değişiklikleri Kaydet\" butonuna basın."
            }
          ]
        },
        {
          "id": "discord-kod-blogu-ile-renkli-mesaj",
          "heading": "2. Mesajlarda Kod Bloğu (Markdown) İle Vurgulu Metin Yazma",
          "paragraphs": [
            "Masaüstü Discord uygulamasında mesajınızın başına ve sonuna üç adet ters tırnak (```) koyup dil kısaltması yazarak sözdizimi renklendirmesinden yararlanabilirsiniz:"
          ],
          "bullets": [
            "```diff ve satır başında + işareti: Yeşil renkli metin satırı oluşturur.",
            "```diff ve satır başında - işareti: Kırmızı renkli metin satırı oluşturur.",
            "```ini ve [Köşeli Parantez]: Mavi/vurgulu başlık metni oluşturur.",
            "**Kalın Metin** (iki yıldız), *İtalik Metin* (tek yıldız) ve __Altı Çizili__ (iki alt çizgi) ise hem mobilde hem masaüstünde çalışır."
          ]
        }
      ]
    },
    "faqs": [
      {
        "question": "Rol verdiğim halde kullanıcının ismi neden renklenmedi?",
        "answer": "Kullanıcının üzerinde daha üst sırada yer alan başka bir renkli rol varsa onun rengi baskın gelir; renk rolünü Roller listesinde daha yukarı taşıyın."
      },
      {
        "question": "İsim rengi değiştirdiğini iddia eden harici programlar güvenli mi?",
        "answer": "Hayır, üçüncü taraf değiştirilmiş Discord istemcileri hem Hizmet Koşulları’na aykırıdır hem de hesap token bilginizi çaldırma riski taşır."
      }
    ]
  },
  {
    "id": "bilgirotasi-ek-oyun-nickleri",
    "slug": "oyun-nickleri",
    "title": "Oyun ve Discord İçin Kullanıcı Adı (Nick) Seçme Rehberi: Akılda Kalıcı İsim Oluşturma Yöntemleri",
    "description": "Rekabetçi oyunlarda (VALORANT, CS2, LoL) ve Discord’da okunabilir, özgün ve güvenli bir oyuncu adı (nickname) türetme formülleri.",
    "categorySlug": "pratik-bilgiler",
    "authorId": "author-1",
    "publishedAt": "2026-10-31",
    "updatedAt": "2026-10-31",
    "readTime": "5 dk",
    "coverImage": "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "Oyun Nickleri",
      "Kullanıcı Adı",
      "Discord",
      "Oyun Kültürü"
    ],
    "content": {
      "lead": "Rekabetçi oyunlarda ve topluluk sunucularında seçtiğiniz kullanıcı adı (nickname), takım arkadaşlarınızın maç esnasında size seslenmesini sağlayan dijital kimliğinizdir. Çok uzun, karmaşık sembollerle dolu veya telaffuzu zor isimler yerine 2–3 heceli, özgün ve kişisel verilerinizi açık etmeyen bir ad seçmek en doğru yaklaşımdır.",
      "sections": [
        {
          "id": "ozgun-oyuncu-adi-turetme-yontemleri",
          "heading": "1. Kendi Özgün Oyuncu Adınızı Türetmek İçin 3 Pratik Formül",
          "paragraphs": [
            "Herkesin kullandığı hazır listelerden bir isim kopyaladığınızda çoğu zaman o adın alınmış olduğunu görürsünüz ve sonuna \"12345\" gibi rastgele sayılar eklemek zorunda kalırsınız. Bunun yerine aşağıdaki birleştirme yöntemleriyle tamamen size ait bir ad oluşturabilirsiniz:"
          ],
          "bullets": [
            "Doğa / Astronomi + Kısa Ek: Kuzey, Atlas, Vega, Sirius, Bora, Zephyr, Nova gibi kısa kök kelimeleri sevdiğiniz bir terimle birleştirin.",
            "İki Kelime Kökünü Kaynaştırma (Portmanteau): İki farklı kelimenin ilk ve son hecelerini birleştirerek 5–7 harfli tek ve benzersiz bir kelime türetin.",
            "Takım İletişimi Testi: Seçtiğiniz ismi sesli sohbette bir arkadaşınızın 1 saniyede nasıl kısaltacağını düşünün (2 heceli net isimler rekabetçi maçlarda her zaman avantajlıdır)."
          ],
          "callout": {
            "type": "warning",
            "title": "Kullanıcı Adında Kişisel Bilgi Kullanmayın",
            "message": "Kullanıcı adınızda tam soyadınızı, doğum yılınızı, plaka kodunuzu veya okul numaranızı kullanmaktan kaçının; bu bilgiler güvenlik sorularınızı tahmin etmek için kullanılabilir."
          }
        }
      ]
    },
    "faqs": [
      {
        "question": "Riot ID (VALORANT / LoL) ismi ne sıklıkla ücretsiz değiştirilebilir?",
        "answer": "Riot Games hesap ayarları üzerinden Riot ID ve etiket (#TAG) bilginizi 90 günde bir ücretsiz olarak değiştirebilirsiniz."
      },
      {
        "question": "Şekilli semboller oyunlarda neden bozuk (kutucuk) görünür?",
        "answer": "Birçok oyun motoru standart dışı Unicode sembollerini desteklemez ve bunları soru işareti veya boş kutu olarak gösterir; bu nedenle standart Latin harfleri en sorunsuz görünümü sağlar."
      }
    ]
  },
  {
    "id": "bilgirotasi-ek-twitter-kullanici-adi",
    "slug": "twitter-kullanici-adi",
    "title": "X (Twitter) ve Sosyal Medya Kullanıcı Adı Seçme, Değiştirme ve Hesap Güvenliği Rehberi",
    "description": "X (Twitter) ve Instagram’da kullanıcı adı (@handle) ile görünen ad farkı, kullanıcı adı değiştirme adımları ve kurumsal/kişisel ad seçimi.",
    "categorySlug": "teknoloji-mobil",
    "authorId": "author-1",
    "publishedAt": "2026-10-31",
    "updatedAt": "2026-10-31",
    "readTime": "5 dk",
    "coverImage": "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "X",
      "Twitter",
      "Sosyal Medya",
      "Kullanıcı Adı",
      "Hesap Güvenliği"
    ],
    "content": {
      "lead": "X (eski adıyla Twitter) ve diğer sosyal medya platformlarında iki farklı isim alanı bulunur: Birincisi profil bağlantınızı oluşturan benzersiz \"@kullaniciadi\" (handle), ikincisi ise profil fotoğrafınızın altında görünen ve istediğiniz zaman değiştirebileceğiniz \"Görünen Ad\"dır. Kullanıcı adınızı değiştirdiğinizde mevcut takipçileriniz, geçmiş paylaşımlarınız ve mesajlarınız silinmez.",
      "sections": [
        {
          "id": "x-twitter-kullanici-adi-kurallari-ve-degistirme",
          "heading": "1. X (Twitter) Kullanıcı Adı Kuralları ve Değiştirme Adımları",
          "paragraphs": [
            "X üzerinde kullanıcı adları en az 4, en fazla 15 karakter uzunluğunda olabilir ve yalnızca harf (A-Z), rakam (0-9) ve alt çizgi (_) içerebilir; boşluk veya nokta kullanılamaz."
          ],
          "steps": [
            {
              "title": "1. Adım: Ayarlar ve Gizlilik Menüsünü Açın",
              "description": "Sol menüden Daha Fazla > Ayarlar ve Gizlilik > Hesabınız > Hesap Bilgileri adımlarını izleyin."
            },
            {
              "title": "2. Adım: Kullanıcı Adı Satırını Seçin",
              "description": "Şifrenizi doğruladıktan sonra \"Kullanıcı adı\" alanına tıklayın ve yeni adınızı yazın."
            },
            {
              "title": "3. Adım: Uygunluğu Kontrol Edip Kaydedin",
              "description": "Seçtiğiniz ad uygunsa Kaydet butonuna basın. Eski kullanıcı adınız boşa düşeceği için profil bağlantınızı kullandığınız diğer sitelerde güncellemeyi unutmayın."
            }
          ]
        }
      ]
    },
    "faqs": [
      {
        "question": "X kullanıcı adımı değiştirirsem takipçilerim gider mi?",
        "answer": "Hayır, takipçileriniz, takip ettikleriniz ve eski gönderileriniz yeni kullanıcı adınız altında aynen korunur; yalnızca dışarıdan eski @adınıza yapılan metin etiketlemeleri çalışmaz."
      },
      {
        "question": "Alınmış ancak pasif duran bir kullanıcı adını alabilir miyim?",
        "answer": "Tescilli bir ticari marka ihlali olmadığı sürece pasif hesapların kullanıcı adları talep üzerine başka kullanıcılara devredilmemektedir; sonuna veya başına kısa bir ek koyarak alternatif türetebilirsiniz."
      }
    ]
  },
  {
    "id": "bilgirotasi-ek-smurf-anlami",
    "slug": "smurf-anlami",
    "title": "Oyunlarda Smurf (Smurf Hesap) Ne Demek? Rekabetçi Eşleştirme (MMR) ve Kurallar",
    "description": "VALORANT, LoL ve CS2 gibi rekabetçi oyunlarda Smurf (Şirin) hesap teriminin kökeni, anlamı, MMR sistemi ve oyun şirketlerinin yaklaşımı.",
    "categorySlug": "oyun-donanim",
    "authorId": "author-1",
    "publishedAt": "2026-10-31",
    "updatedAt": "2026-10-31",
    "readTime": "5 dk",
    "coverImage": "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "Oyun Terimleri",
      "Smurf Hesap",
      "Rekabetçi Oyunlar",
      "MMR"
    ],
    "content": {
      "lead": "Çevrim içi rekabetçi oyunlarda (League of Legends, VALORANT, CS2, Dota 2) sıkça duyulan \"Smurf\" terimi; üst liglerde (örneğin Elmas, Yücelik veya Global) yer alan deneyimli bir oyuncunun sıfırdan yeni bir yan hesap açarak daha düşük dereceli ve yeni başlayan oyuncularla aynı maçta oynamasını ifade eder.",
      "sections": [
        {
          "id": "smurf-kelimesinin-kokeni-ve-etkisi",
          "heading": "1. Smurf Terimi Nereden Çıktı ve Eşleştirmeyi Nasıl Etkiler?",
          "paragraphs": [
            "Terimin kökeni 1996 yılında Warcraft II oynayan iki ünlü üst düzey oyuncunun, kimse kendileriyle maç yapmak istemeyince \"PapaSmurf\" (Şirin Baba) ve \"Smurfette\" (Şirine) adlarıyla yeni hesaplar açmasına dayanır.",
            "Modern oyunlarda eşleştirme sistemleri görünür rütbenin (Rank) yanı sıra arka planda gizli bir MMR (Eşleştirme Derecesi) puanı tutar. Çok yüksek skorlar alan yeni bir hesap, otomatik \"Smurf Tespiti\" algoritmaları sayesinde birkaç maç içinde hızlıca kendi gerçek MMR seviyesindeki oyuncularla eşleştirilmeye başlanır."
          ],
          "callout": {
            "type": "warning",
            "title": "Hesap Satın Alma ve Boosting (Derece Yükseltme) Yaptırımları",
            "message": "Başka birinden hazır düşük/yüksek dereceli hesap satın almak veya hesabınızı derece yükseltmesi için başkasına vermek oyunların Hizmet Koşulları’na doğrudan aykırıdır ve kalıcı hesap kapatma (ban) ile sonuçlanır."
          }
        }
      ]
    },
    "faqs": [
      {
        "question": "İkinci bir yan hesap (alt account) açmak yasak mı?",
        "answer": "Kendi elinizle sıfırdan ikinci bir hesap açıp normal şekilde oynamak çoğu oyunda yasak değildir; ancak bilerek maç kaybetmek (deranking), hesap satın almak veya hesap paylaşımı yapmak yasaktır."
      },
      {
        "question": "Karşı takıma smurf geldiğinde ne yapılmalı?",
        "answer": "Bire bir (1v1) düellolara girmekten kaçınıp takım arkadaşlarıyla aynı anda çapraz ateş (trade) kurmak ve bilgi/kör edici yeteneklerle alanı daraltmak en etkili takım savunmasıdır."
      }
    ]
  },
  {
    "id": "bilgirotasi-ek-teemo-counter",
    "slug": "teemo-counter",
    "title": "League of Legends Teemo Counter: Teemo’ya Karşı Güçlü Şampiyonlar, Eşyalar ve Koridor Rehberi",
    "description": "LoL üst koridorda Teemo’ya karşı kazanmanın yolları: İkinci Şans rünü, Doran’ın Kalkanı, Kâhin Merceği kullanımı ve Teemo’yu ezebilen şampiyonlar.",
    "categorySlug": "oyun-donanim",
    "authorId": "author-1",
    "publishedAt": "2026-10-31",
    "updatedAt": "2026-10-31",
    "readTime": "6 dk",
    "coverImage": "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "League of Legends",
      "Teemo",
      "LoL Rehberi",
      "Üst Koridor"
    ],
    "content": {
      "lead": "League of Legends’ta Üst Koridor (Top Lane) oyuncularının en çok zorlandığı menzilli eşleşmelerden biri Teemo’dur. Kör Eden Dart (Q) yeteneğiyle normal saldırıları boşa çıkarması ve 6. seviyeden sonra koridoru Tehlikeli Tuzak (R - Mantar) ile döşemesi yakın dövüşçü şampiyonları bunaltabilir. Ancak doğru rün, başlangıç eşyası ve dalga kontrolüyle Teemo eşleşmesini tamamen lehinize çevirebilirsiniz.",
      "sections": [
        {
          "id": "teemo-karsisinda-run-ve-esya-secimi",
          "heading": "1. Maç Başlamadan Kazanmak: İkinci Şans Rünü, Doran’ın Kalkanı ve Kâhin Merceği",
          "paragraphs": [
            "Teemo’nun zehir hasarı zamanla vurduğu (DoT) için Azim ağacındaki \"İkinci Şans\" (Second Wind) rünü ve başlangıçta alınan \"Doran’ın Kalkanı\" her zehir tetiklendiğinde canınızı sürekli yeniler.",
            "İlk üsse dönüşte büyü direnci sağlayan Merkür’ün Adımları veya Hayalet Pelerini almak ve 6. seviyeye ulaştığınız anda sarı totemini ücretsiz olarak kırmızı \"Kâhin Merceği\" (Sweeper) ile değiştirmek Teemo’nun mantar ve dürtme gücünü büyük ölçüde kırar."
          ],
          "bullets": [
            "Yetenek Gücü / Büyücü Karşı Seçimler: Cassiopeia, Ryze, Viktor, Rumble, Владимира ve Malphite (Q yeteneğinden etkilenmeden uzaktan veya yeteneklerle hasar vurabildikleri için Teemo’ya karşı çok üstündürler).",
            "Yakın Dövüşçü Karşı Seçimler: Yorick (duvar ve hortlaklarla Teemo’yu hapseder), Aatrox (normal saldırı yerine Q yetenekleriyle vurur), Pantheon, Olaf ve Mordekaiser.",
            "Kör Etme (Q) Zamanlaması: Teemo Q attığında 2–3 saniye boyunca normal saldırılarınız boşa gider; en güçlü normal saldırı yeteneğinizi Teemo’nun Q etkisi bittikten hemen sonra kullanın."
          ]
        }
      ]
    },
    "faqs": [
      {
        "question": "Teemo’nun mantarlarını (R) görünür kılmak için hangi totem alınmalı?",
        "answer": "6. seviyeden itibaren ziynetinizi ücretsiz olan \"Kâhin Merceği\" (Oracle Lens) ile değiştirmeli ve çalılara girmeden önce merceği açarak mantarları uzaktan ya da üzerine basmadan temizlemelisiniz."
      },
      {
        "question": "Yakın dövüşçü oynarken ilk seviyelerde ne yapılmalı?",
        "answer": "1–3. seviyelerde tek bir minyon almak için canınızın yarısını kaybetmeyin; minyonların kule altına gelmesini bekleyip sadece deneyim puanı (XP) mesafesinde kalarak 6. seviyede tam canla takasa girin."
      }
    ]
  },
  {
    "id": "bilgirotasi-ek-clash-thrones-10",
    "slug": "clash-thrones-10",
    "title": "Clash of Clans 10. ve 8. Belediye Binası (TH10 / TH8) Köy Düzeni Rehberi: Savaş ve Kaynak Koruma",
    "description": "Clash of Clans’ta Belediye Binası 8 ve 10 seviyelerinde Cehennem Kulesi, Hava Savunması, Klan Kalesi ve tuzak yerleşimi ilkeleri.",
    "categorySlug": "oyun-donanim",
    "authorId": "author-1",
    "publishedAt": "2026-10-31",
    "updatedAt": "2026-10-31",
    "readTime": "6 dk",
    "coverImage": "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "Clash of Clans",
      "Köy Düzeni",
      "Mobil Oyun",
      "Strateji"
    ],
    "content": {
      "lead": "Clash of Clans’ta başarılı bir köy düzeni (base layout) kurmanın ilk kuralı, \"Ganimet/Kaynak Koruma Düzeni\" (Farming Base) ile \"Klan Savaşı Düzeni\"nin (War Base) birbirinden tamamen farklı hedeflere sahip olduğunu bilmektir. Kaynak düzeninde Kara İksir ve Altın depolarını farklı bölmelere dağıtmak esasken, Klan Savaşı düzeninde rakibin 3 yıldız almasını engellemek tek amaçtır.",
      "sections": [
        {
          "id": "coc-klan-kalesi-ve-cehennem-kulesi-yerlesimi",
          "heading": "1. Klan Kalesi, Hava Savunmaları ve Cehennem Kulelerini Konumlandırma",
          "paragraphs": [
            "Hem TH8 hem de TH10 seviyelerinde en güçlü savunma birimi, içine savunma birlikleri yerleştirilmiş Klan Kalesi’dir. Klan Kalesi köyün tam merkezine yerleştirilmeli ki rakip tek bir Okçu veya Dev bırakarak birliklerinizi kolayca dışarı çekemesin.",
            "10. Belediye Binası (TH10) seviyesinde açılan 2 adet Cehennem Kulesi (Inferno Tower), Yıldırım büyüsüyle aynı anda vurulamayacak kadar birbirinden ve Hava Savunmalarından en az 4–5 kare uzakta konumlandırılmalıdır."
          ],
          "bullets": [
            "Tekli vs Çoklu Cehennem Kulesi: Ejderha ve Pekka/Golem gibi yüksek canlı birimlere karşı 1 kuleyi Tekli (Single), Cadı ve Lav Tazısı/Balon saldırılarına karşı diğer kuleyi Çoklu (Multi) modda tutmak dengeli koruma sağlar.",
            "Hava Patlatıcı (Air Sweeper) Yönü: İki Hava Patlatıcıyı sırt sırta veya zıt yönlere bakacak şekilde yerleştirerek tüm köyün hava koridorlarını kapsayın.",
            "Güdümlü Hava Mayınları (Siyah Mayınlar): Şifacıları (Kraliçe Yürüyüşü) veya Ejderhaları erken düşürmek için Hava Savunmalarının yakınındaki dış bölmelere yerleştirin."
          ]
        }
      ]
    },
    "faqs": [
      {
        "question": "Kaynak depolarını tek bir merkez bölmede toplamak doğru mu?",
        "answer": "Hayır. Tüm altın ve iksir depolarını aynı bölmeye koyarsanız rakip merkeze ulaştığında tüm ganimeti tek seferde alır; depoları 4 farklı bölmeye dağıtmak kaybı sınırlandırır."
      },
      {
        "question": "Yıldırım büyüsüne karşı Hava Savunmaları nasıl korunur?",
        "answer": "Hava Savunması ile Okçu Kraliçe veya Hava Patlatıcı arasında en az 3–4 boş kare bırakarak rakibin aynı Yıldırım büyüsüyle ikisini birden yıkmasını engelleyin."
      }
    ]
  },
  {
    "id": "bilgirotasi-ek-sons-forest",
    "slug": "sons-forest",
    "title": "Sons of the Forest ve Subnautica: Below Zero PC Sistem Gereksinimleri ve Uyumluluk Rehberi",
    "description": "Açık dünya hayatta kalma oyunları Sons of the Forest ve Subnautica: Below Zero için gereken işlemci, RAM, ekran kartı ve SSD kurulum rehberi.",
    "categorySlug": "oyun-donanim",
    "authorId": "author-1",
    "publishedAt": "2026-10-31",
    "updatedAt": "2026-10-31",
    "readTime": "6 dk",
    "coverImage": "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "Sons of the Forest",
      "Subnautica",
      "Sistem Gereksinimleri",
      "Hayatta Kalma Oyunları"
    ],
    "content": {
      "lead": "Sons of the Forest ve Subnautica: Below Zero gibi geniş haritalı, üs inşa etme (base building) mekaniğine sahip hayatta kalma oyunlarında sistem gereksinimini belirleyen en önemli unsur, oyun ilerledikçe inşa ettiğiniz yapıların ve çevredeki yapay zekâ birimlerinin işlemci (CPU) ile bellek (RAM) üzerinde oluşturduğu yüktür.",
      "sections": [
        {
          "id": "sons-of-the-forest-donanim-gereksinimleri",
          "heading": "1. Sons of the Forest Minimum ve Önerilen PC Sistem Gereksinimleri",
          "paragraphs": [
            "Yoğun orman dokusu, mevsim geçişleri ve dinamik yapay zekâ nedeniyle Sons of the Forest orta-üst seviye bir donanım ve mutlaka SSD depolama talep eder:"
          ],
          "bullets": [
            "Minimum: Intel Core i5-8400 veya AMD Ryzen 3 3300X işlemci, 12 GB RAM, NVIDIA GTX 1060 (3 GB) veya AMD RX 570 (4 GB) ekran kartı, 20 GB SSD alanı.",
            "Önerilen (1080p Akıcı): Intel Core i7-8700K veya AMD Ryzen 5 3600X işlemci, 16 GB RAM, NVIDIA GTX 1080 Ti veya AMD RX 5700 XT ekran kartı, NVMe SSD."
          ]
        },
        {
          "id": "subnautica-below-zero-donanim-gereksinimleri",
          "heading": "2. Subnautica: Below Zero PC Sistem Gereksinimleri",
          "paragraphs": [
            "Subnautica: Below Zero daha mütevazı sistemlerde de çalışabilmektedir; ancak su altı biyom geçişlerinde takılma yaşanmaması için 8 GB RAM ve SSD kurulumu önerilir:"
          ],
          "bullets": [
            "Minimum: Intel Core i3 / AMD Ryzen 3 (2.6 GHz) 4 çekirdekli işlemci, 8 GB RAM, Intel HD 530 veya eşdeğeri DX11 grafik birimi, 15 GB boş alan.",
            "Önerilen: Intel Core i5 / AMD Ryzen 5 (3.0 GHz) işlemci, 8–16 GB RAM, GTX 1050 Ti / Radeon RX 570 (4 GB VRAM) ekran kartı."
          ]
        }
      ]
    },
    "faqs": [
      {
        "question": "Sons of the Forest 8 GB RAM ile oynanır mı?",
        "answer": "Oyunun resmi minimum bellek gereksinimi 12 GB RAM’dir. 8 GB RAM’li sistemlerde harita yüklenirken donma veya çökme yaşanabileceği için 16 GB RAM’e yükseltme yapılması önerilir."
      },
      {
        "question": "Büyük üs inşa ettikten sonra FPS düşmesi nasıl azaltılır?",
        "answer": "Gölge mesafesini, su yansımalarını ve sis kalitesini Orta/Düşük seviyeye çekmek ve DLSS/FSR görüntü ölçekleme teknolojisini \"Kalite\" modunda açmak FPS’i önemli ölçüde rahatlatır."
      }
    ]
  }
];
