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
  // Reklamların ön planda gösterim durumu (Şu anlık tamamen kapalı)
  enabled: false,

  // Gerçek AdSense yayın durumu (true: canli <ins> etiketleri, false: yerleşim taslağı)
  isProduction: false,

  // Google AdSense Yayıncı Kimliği (Arka planda hazır tutulur, ön plana sızdırılmaz)
  adClient: 'ca-pub-1843373602369228',

  // Reklam Alanları / Slot Kimlikleri (Arka planda hazır tutulur)
  slots: {
    header: 'HEADER-BANNER-SLOT',
    inArticleTop: 'IN-ARTICLE-TOP-SLOT',
    inArticleMiddle: 'IN-ARTICLE-MID-SLOT',
    sidebarSticky: 'SIDEBAR-STICKY-SLOT',
    articleFooter: 'ARTICLE-FOOTER-SLOT',
    categoryInline: 'CATEGORY-INLINE-SLOT',
  }
} as const;
