export interface Post {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: string;
  date: string;
  readTime: string;
  content: string;
}

export const posts: Post[] = [
  {
    id: "1",
    slug: "kyk-burs-kredi-taahhutname-onayi-nasil-yapilir",
    title: "KYK Burs ve Kredi Taahhütname Onayı Nasıl Yapılır? (Adım Adım)",
    description: "KYK burs veya öğrenim kredisi kazanan öğrencilerin e-Devlet üzerinden yapması gereken taahhütname onayı adımları ve dikkat edilmesi gerekenler.",
    category: "Eğitim & e-Devlet",
    date: "2026-10-07",
    readTime: "4 dk",
    content: `
## KYK Taahhütname Onayı Nedir ve Neden Zorunludur?
Gençlik ve Spor Bakanlığı (GSB) tarafından her yıl açıklanan KYK burs ve kredi başvuru sonuçlarının ardından hak kazanan öğrencilerin burslarını alabilmeleri için taahhütname onayı vermesi gerekir. Belirlenen son tarihe kadar onaylanmayan haklar otomatik olarak iptal edilir.

## 18 Yaşından Büyükler İçin Adım Adım Taahhütname Onayı
1. **e-Devlet Sistemine Giriş Yapın:** T.C. kimlik numaranız ve şifrenizle turkiye.gov.tr adresine girin.
2. **Hizmeti Bulun:** Arama çubuğuna **"Gençlik ve Spor Bakanlığı Burs/Kredi Taahhütname Onayı"** yazın.
3. **Metni Dikkatle Okuyun:** Taahhütnamenin tüm maddelerini inceleyin (özellikle geri ödeme şartları ve başarı kriterleri).
4. **Onaylayın:** Sayfanın en altındaki onay kutucuğunu işaretleyip **"Onayla"** butonuna tıklayın.
5. **Barkodlu Belgeyi İndirin:** İşlem tamamlandığında oluşan belgenin çıktısını veya PDF halini saklayın.

## 18 Yaşından Küçük Öğrenciler Ne Yapmalı?
18 yaşını doldurmamış öğrencilerin taahhütnameleri anne veya babaları (yasal vasileri) tarafından onaylanmalıdır:
* Anne veya baba kendi e-Devlet hesabıyla giriş yapar.
* **"Burs/Kredi Taahhütname Onayı (Öğrenci Yakını)"** hizmetini aratarak onay işlemini tamamlar.
* Ardından öğrenci kendi e-Devlet hesabına girerek nihai onayı verir.

## Sık Karşılaşılan Hatalar ve Dikkat Edilmesi Gerekenler
* **Son Gün Yoğunluğu:** Sistemi son güne bırakmayın; e-Devlet üzerinde oluşabilecek sunucu yoğunlukları hak kaybına yol açabilir.
* **Ziraat Bankası Hesap Açılışı:** Taahhütname onayından sonra burs/kredi ödemeleri için Ziraat Bankası Genç Kart işlemlerinizi tamamlamayı unutmayın.
    `
  },
  {
    id: "2",
    slug: "instagram-hesap-dondurma-gecici-kapatma-linki",
    title: "Instagram Hesap Dondurma ve Geçici Kapatma Rehberi (2026)",
    description: "Instagram hesabınızı silmeden geçici olarak kapatma (dondurma) işlemi nasıl yapılır? Mobil ve masaüstü doğrudan dondurma adımları.",
    category: "Teknoloji",
    date: "2026-10-07",
    readTime: "3 dk",
    content: `
## Instagram Hesabını Dondurmak ile Silmek Arasındaki Fark
Hesabınızı sildiğinizde fotoğraflarınız, takipçileriniz ve mesajlarınız kalıcı olarak yok olur. Hesabınızı dondurduğunuzda (geçici olarak kapattığınızda) ise profiliniz gizlenir; dilediğiniz zaman tekrar giriş yaparak her şeyi kaldığı yerden kullanmaya devam edebilirsiniz.

## Telefondan (Uygulama İçi) Instagram Dondurma Adımları
Meta Hesaplar Merkezi güncellemesiyle birlikte işlem doğrudan uygulama üzerinden yapılabilmektedir:
1. Instagram uygulamasını açın ve profilinize gidin.
2. Sağ üstteki **üç çizgi (Menü)** simgesine dokunun.
3. **Hesaplar Merkezi** > **Kişisel Detaylar** bölümüne girin.
4. **Hesap Sahipliği ve Kontrolü** seçeneğini seçin.
5. **Dondurma veya Silme** ekranında ilgili hesabınızı seçin.
6. **"Hesabı Dondur"** seçeneğini işaretleyip şifrenizi girerek onaylayın.

## Bilgisayardan (Web Tarayıcısı ile) Hesap Dondurma
1. Tarayıcınızda instagram.com adresine gidip giriş yapın.
2. Profil ayarlarından Hesaplar Merkezi'ne ulaşın veya doğrudan dondurma bağlantısını açın.
3. Ayrılma nedeninizi seçin ve hesap şifrenizi girin.
4. **"Hesabı Geçici Olarak Kapat"** butonuna tıklayın.

## Önemli Hatırlatmalar
* Hesabınızı haftada yalnızca **1 kez** dondurabilirsiniz.
* Dondurulan hesabı yeniden açmak için kullanıcı adı ve şifrenizle normal giriş yapmanız yeterlidir.
    `
  },
  {
    id: "3",
    slug: "valorant-van-1067-ve-tpm-2-0-hatasi-kesin-cozumu",
    title: "Valorant Van 1067 Hatası ve TPM 2.0 Çözümü (Windows 10 / 11)",
    description: "Valorant açılırken karşılaşılan Van 1067 ve Vanguard TPM 2.0 / Secure Boot hatalarının adım adım kesin çözüm yolları.",
    category: "Oyun",
    date: "2026-10-07",
    readTime: "5 dk",
    content: `
## Van 1067 Hatası Neden Kaynaklanır?
Valorant'ın hile karşıtı yazılımı Riot Vanguard; Windows 11 ve güncel Windows 10 sürümlerinde sistem güvenliği doğrulaması için **TPM 2.0 (Güvenilir Platform Modülü)** ve **Secure Boot (Güvenli Önyükleme)** özelliklerinin açık olmasını zorunlu kılar. Bu özellikler BIOS üzerinde kapalıysa Van 1067 hatası oluşur.

## 1. BIOS Üzerinden TPM 2.0 ve Secure Boot Açma
1. Bilgisayarınızı yeniden başlatın ve açılış ekranında anakartınıza göre **F2, DEL veya F12** tuşlarına basarak BIOS menüsüne girin.
2. **TPM Ayarı:**
   * **AMD İşlemciler:** *Advanced / Security* sekmesinde **AMD fTPM switch** ayarını **Enabled** yapın.
   * **Intel İşlemciler:** *Security / PCH-FW Configuration* sekmesinde **Intel PTT (Platform Trust Technology)** ayarını **Enabled** yapın.
3. **Secure Boot Ayarı:**
   * *Boot* veya *Security* sekmesine gidin.
   * **Secure Boot** seçeneğini bulun ve **Enabled** durumuna getirin. (OS Type seçeneği varsa *Windows UEFI Mode* seçilmelidir).
4. **F10** tuşuna basarak ayarları kaydedip bilgisayarı yeniden başlatın.

## 2. VGC Hizmetini Otomatik Olarak Ayarlama
1. Klavyeden **Windows + R** tuşlarına basıp \`services.msc\` yazın ve Enter'a basın.
2. Listeden **vgc** hizmetini bulun.
3. Sağ tıklayıp **Özellikler** deyin.
4. Başlangıç türünü **Otomatik** olarak değiştirin, servis durmuşsa **Başlat** butonuna basın ve onaylayın.

## 3. Temiz Vanguard Kurulumu
Sorun devam ediyorsa Denetim Masası'ndan Riot Vanguard'ı kaldırın, bilgisayarı yeniden başlatın ve Riot İstemcisi üzerinden Vanguard'ı tekrar güncelleyin.
    `
  },
  {
    id: "4",
    slug: "e-devlet-ikametgah-belgesi-nasil-alinir",
    title: "e-Devlet İkametgah (Yerleşim Yeri) Belgesi Nasıl Alınır? (Barkodlu ve Ücretsiz)",
    description: "e-Devlet kapısı üzerinden resmi kurumlara vermek üzere barkodlu ikametgah (yerleşim yeri ve diğer adres) belgesi alma adımları.",
    category: "Pratik Bilgiler",
    date: "2026-10-07",
    readTime: "3 dk",
    content: `
## e-Devlet'ten Alınan İkametgah Belgesi Geçerli midir?
Evet. e-Devlet üzerinden oluşturulan karekodlu ve barkodlu yerleşim yeri belgeleri, Nüfus Müdürlüklerinden bizzat alınan ıslak imzalı belgelerle aynı hukuki geçerliliğe sahiptir.

## Adım Adım Yerleşim Yeri Belgesi Alma
1. **e-Devlet Kapısına Giriş:** turkiye.gov.tr adresine T.C. kimlik numaranız ve e-Devlet şifrenizle giriş yapın.
2. **Hizmeti Açın:** Arama kutusuna **"Yerleşim Yeri (İkametgah) ve Diğer Adres Belgesi Sorgulama"** yazarak Nüfus ve Vatandaşlık İşleri Genel Müdürlüğü hizmetine tıklayın.
3. **Bilgilendirme Onayı:** Sayfada yer alan uyarı metnini okuyup onay kutucuğunu işaretleyin ve **"Devam Et"** deyin.
4. **Belge Kimin İçin Alınıyor?:**
   * Kendiniz için alıyorsanız **"Kendisi"**
   * Aynı hanede yaşayan eş veya çocuklarınız için alıyorsanız **"Eşi / Çocuğu"** seçeneğini işaretleyin.
5. **Belgenin Verileceği Kurum Tipi:**
   * "Kurum Talebi", "Kişi Talebi" veya "Kuruma İbraz" seçeneklerinden uygun olanı belirleyin (Örn: Üniversite, banka, iş yeri adı).
6. **Dosyayı İndirin:** **"Sorgula"** dedikten sonra açılan ekranda **"Dosyayı İndir"** butonuna basarak barkodlu PDF belgenizi indirin.

## Güvenlik İpucu
Oluşturulan belgenin üzerindeki barkod numarası ile kurumlar belgenin orijinalliğini e-Devlet üzerinden teyit edebilir; bu nedenle barkod alanının net okunduğundan emin olun.
    `
  }
]