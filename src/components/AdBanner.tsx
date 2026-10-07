'use client';

import React from 'react';

export type AdSlotType =
  | 'header'          // 728x90 (Desktop) / 320x100 (Mobile)
  | 'in-article'      // Fluid responsive inside article
  | 'sidebar-sticky'  // 300x600 or 300x250 sticky sidebar
  | 'article-footer'  // Full-width banner before related articles
  | 'category-inline'; // In category feeds

interface AdBannerProps {
  type: AdSlotType;
  adSlotId?: string;
  adClient?: string;
  className?: string;
  label?: string;
}

export default function AdBanner({
  type,
  adSlotId = 'DEMO-AD-SLOT',
  adClient = 'ca-pub-1843373602369228',
  className = '',
  label = 'REKLAM ALANI / SPONSORLU'
}: AdBannerProps) {
  // Flag: if real AdSense is ready, this can render the real <ins className="adsbygoogle" ... />
  const isProductionAd = false;

  if (isProductionAd) {
    return (
      <div className={`ad-wrapper my-6 flex flex-col items-center justify-center overflow-hidden ${className}`}>
        <span className="text-[10px] tracking-wider uppercase text-slate-400 dark:text-slate-500 mb-1">
          {label}
        </span>
        <ins
          className="adsbygoogle"
          style={{ display: 'block' }}
          data-ad-client={adClient}
          data-ad-slot={adSlotId}
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
      </div>
    );
  }

  // Placeholder styling tailored for each ad type with strict aspect ratios to eliminate CLS (Cumulative Layout Shift)
  switch (type) {
    case 'header':
      return (
        <aside
          aria-label="Sponsorlu Reklam Alanı"
          className={`w-full max-w-5xl mx-auto px-4 py-2 ${className}`}
        >
          <div className="relative overflow-hidden rounded-xl border border-dashed border-slate-300 dark:border-slate-700/80 bg-slate-100/70 dark:bg-slate-900/60 p-3 text-center transition-colors">
            <div className="flex items-center justify-between mb-1.5 px-2">
              <span className="text-[10px] font-semibold tracking-wider text-slate-500 dark:text-slate-400 uppercase">
                {label} (AdSense 728x90 / 320x100)
              </span>
              <span className="text-[10px] text-slate-400 dark:text-slate-500">
                Google AdSense Uyumlu
              </span>
            </div>
            {/* Desktop & Mobile responsive representation */}
            <div className="flex items-center justify-center min-h-[90px] w-full rounded-lg bg-white/60 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-700/40 shadow-xs">
              <div className="space-y-1 text-center py-3">
                <p className="text-xs font-medium text-slate-700 dark:text-slate-300">
                  Header Banner Reklam Pozisyonu
                </p>
                <p className="text-[11px] text-slate-400 dark:text-slate-500">
                  Masaüstü: 728x90 px &bull; Mobil: 320x100 px (Duyarlı AdSense)
                </p>
              </div>
            </div>
          </div>
        </aside>
      );

    case 'in-article':
      return (
        <aside
          aria-label="Makale İçi Sponsorlu İçerik"
          className={`my-8 w-full overflow-hidden ${className}`}
        >
          <div className="rounded-xl border border-dashed border-slate-300 dark:border-slate-700/80 bg-slate-50/80 dark:bg-slate-900/60 p-4 transition-colors">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-bold tracking-wider text-blue-600 dark:text-blue-400 uppercase">
                İçerik İçi Sponsorlu Bağlantı
              </span>
              <span className="text-[10px] text-slate-400 dark:text-slate-500">
                Google AdSense In-Article
              </span>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-lg bg-white dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60 shadow-xs">
              <div className="flex-1 space-y-1 text-center sm:text-left">
                <span className="inline-block text-[10px] font-medium bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-2 py-0.5 rounded-sm">
                  Önerilen Hizmet
                </span>
                <h4 className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                  Resmi İşlemler ve Başvuru Takip Kılavuzu
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-1">
                  En güncel e-Devlet ve başvuru takvimlerini doğrudan cebinizden takip edin.
                </p>
              </div>
              <button
                type="button"
                className="shrink-0 px-4 py-2 text-xs font-semibold rounded-lg bg-blue-600 hover:bg-blue-700 text-white shadow-xs transition-colors"
              >
                Hemen İncele &rarr;
              </button>
            </div>
          </div>
        </aside>
      );

    case 'sidebar-sticky':
      return (
        <aside
          aria-label="Kenar Çubuğu Reklamı"
          className={`w-full ${className}`}
        >
          <div className="rounded-2xl border border-dashed border-slate-300 dark:border-slate-700/80 bg-slate-50/90 dark:bg-slate-900/70 p-4 text-center">
            <div className="flex items-center justify-between mb-2 px-1">
              <span className="text-[10px] font-bold tracking-wider text-slate-400 dark:text-slate-500 uppercase">
                {label}
              </span>
              <span className="text-[10px] text-slate-400">300x600 / 300x250</span>
            </div>
            <div className="flex flex-col items-center justify-center min-h-[300px] rounded-xl bg-gradient-to-b from-white to-slate-100 dark:from-slate-800/80 dark:to-slate-900 border border-slate-200/80 dark:border-slate-700/80 p-5 shadow-xs">
              <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-950 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-3">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                Yapışkan (Sticky) Banner Alanı
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 max-w-[220px]">
                Kullanıcı sayfayı aşağı kaydırdıkça ekranda kalarak yüksek tıklama ve AdSense BGBM (RPM) performansı sağlar.
              </p>
              <div className="mt-4 px-3 py-1.5 rounded-lg bg-blue-50 dark:bg-blue-900/40 text-[11px] text-blue-600 dark:text-blue-300 font-medium">
                AdSense / Prebid Entegre Edilebilir
              </div>
            </div>
          </div>
        </aside>
      );

    case 'article-footer':
      return (
        <aside
          aria-label="Yazı Sonu Sponsorlu Reklam"
          className={`w-full my-8 ${className}`}
        >
          <div className="rounded-2xl border border-dashed border-slate-300 dark:border-slate-700/80 bg-slate-50 dark:bg-slate-900/60 p-4 sm:p-5">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-bold tracking-wider text-slate-500 dark:text-slate-400 uppercase">
                {label}
              </span>
              <span className="text-[10px] text-slate-400">Geniş Format (Display)</span>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-5 rounded-xl bg-gradient-to-r from-blue-900 to-indigo-900 text-white shadow-md">
              <div className="space-y-1 text-center sm:text-left">
                <span className="inline-block text-[11px] font-semibold bg-white/20 backdrop-blur-xs text-white px-2.5 py-0.5 rounded-full">
                  Özel Duyuru &bull; İpuçları
                </span>
                <h4 className="text-base font-bold text-white">
                  Yeni Rehber ve Güncellemeleri Kaçırmayın!
                </h4>
                <p className="text-xs text-blue-100 max-w-lg">
                  Resmi işlemler, sınav tarihleri ve donanım rehberleri anında elinizin altında olsun.
                </p>
              </div>
              <div className="shrink-0 flex items-center gap-2">
                <span className="text-xs bg-white text-blue-900 font-bold px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors cursor-pointer">
                  Reklam / Tanıtım Alanı
                </span>
              </div>
            </div>
          </div>
        </aside>
      );

    case 'category-inline':
    default:
      return (
        <div className={`my-4 w-full p-4 rounded-xl border border-dashed border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50 text-center ${className}`}>
          <span className="text-[10px] uppercase tracking-wider text-slate-400">{label}</span>
          <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">İçerik Arası Reklam Alanı</p>
        </div>
      );
  }
}
