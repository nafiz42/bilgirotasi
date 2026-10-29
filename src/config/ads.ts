/**
 * Merkezi Reklam Yapılandırması (Ad Configuration)
 * 
 * Bu dosya sitedeki tüm reklam alanlarının ve AdSense entegrasyonunun yönetim merkezidir.
 * 
 * - Arka planda: Tüm reklam pozisyonları (header, makale içi, kenar çubuğu, yazı sonu, vb.)
 *   ve AdSense yayıncı kimliği tanımlı ve hazır olarak kalır.
 * - Ön planda: Kullanıcı arayüzünde hiçbir reklam alanı, boşluk, kenarlık veya reklam kimliği
 *   görünmez (`enabled: false`).
 * - İleride reklamları yayına almak istediğinizde aşağıdaki `enabled` değerini `true` yapmanız yeterlidir.
 */

export const ADS_CONFIG = {
  // Reklam afişlerinin sitede gösterim durumu (true: reklam alanları aktif ve yayında)
  enabled: true,

  // AdSense site doğrulama / onay scripti ve meta etiketi (true: <head>'e eklenir)
  enableVerificationScript: true,

  // Gerçek AdSense yayın durumu (true: canlı <ins> etiketleri ve AdSense istekleri, false: yerleşim taslağı)
  isProduction: true,

  // Google AdSense Yayıncı Kimliği
  adClient: 'ca-pub-1843373602369228',

  // Reklam Alanları / Slot Kimlikleri
  // AdSense panelinizden (Reklamlar > Reklam Birimleri) aldığınız sayısal slot kimliklerini buraya tanımlayabilirsiniz.
  slots: {
    header: '',
    inArticleTop: '',
    inArticleMiddle: '',
    sidebarSticky: '',
    articleFooter: '',
    categoryInline: '',
  }
} as const;
