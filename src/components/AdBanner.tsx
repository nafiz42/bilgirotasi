'use client';

import React from 'react';
import { ADS_CONFIG } from '@/config/ads';

export type AdSlotType =
  | 'header'          // 728x90 (Desktop) / 320x100 (Mobile)
  | 'in-article'      // Responsive inside article
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
  adSlotId,
  adClient = ADS_CONFIG.adClient,
  className = '',
  label = 'Sponsorlu İçerik'
}: AdBannerProps) {
  // 1. Reklamlar ön planda kapalıysa kesinlikle hiçbir şey render edilmez.
  // Bu sayede sitede hiçbir reklam alanı, boşluk, kenarlık veya kimlik görünmez.
  // Tüm alanlar arka planda hazır olarak korunur.
  if (!ADS_CONFIG.enabled) {
    return null;
  }

  // 2. Canlı AdSense kodu yayını aktifse
  if (ADS_CONFIG.isProduction) {
    const slotId =
      adSlotId ||
      (type === 'header'
        ? ADS_CONFIG.slots.header
        : type === 'sidebar-sticky'
        ? ADS_CONFIG.slots.sidebarSticky
        : type === 'article-footer'
        ? ADS_CONFIG.slots.articleFooter
        : ADS_CONFIG.slots.inArticleTop);

    const bannerContent = (
      <div className={`ad-wrapper my-6 flex flex-col items-center justify-center overflow-hidden ${className}`}>
        <span className="text-[10px] tracking-wider uppercase text-slate-400 dark:text-slate-500 mb-1">
          {label}
        </span>
        <ins
          className="adsbygoogle"
          style={{ display: 'block' }}
          data-ad-client={adClient}
          data-ad-slot={slotId}
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
      </div>
    );

    if (type === 'header') {
      return (
        <div className="w-full bg-slate-100/60 dark:bg-slate-950/40 border-b border-slate-200/40 dark:border-slate-800/40 py-1">
          {bannerContent}
        </div>
      );
    }

    return bannerContent;
  }

  // 3. Taslak yerleşimler (yalnızca enabled: true ve isProduction: false iken)
  switch (type) {
    case 'header':
      return (
        <div className="w-full bg-slate-100/60 dark:bg-slate-950/40 border-b border-slate-200/40 dark:border-slate-800/40 py-1">
          <aside
            aria-label="Sponsorlu Reklam Alanı"
            className={`w-full max-w-5xl mx-auto px-4 py-2 ${className}`}
          >
            <div className="relative overflow-hidden rounded-xl border border-dashed border-slate-300 dark:border-slate-700/80 bg-slate-100/70 dark:bg-slate-900/60 p-3 text-center transition-colors">
              <div className="flex items-center justify-between mb-1.5 px-2">
                <span className="text-[10px] font-semibold tracking-wider text-slate-500 dark:text-slate-400 uppercase">
                  {label}
                </span>
              </div>
              <div className="flex items-center justify-center min-h-[90px] w-full rounded-lg bg-white/60 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-700/40 shadow-xs">
                <p className="text-xs font-medium text-slate-700 dark:text-slate-300">
                  Header Banner Reklam Pozisyonu
                </p>
              </div>
            </div>
          </aside>
        </div>
      );

    case 'in-article':
      return (
        <aside
          aria-label="Makale İçi Sponsorlu İçerik"
          className={`my-8 w-full overflow-hidden ${className}`}
        >
          <div className="rounded-xl border border-dashed border-slate-300 dark:border-slate-700/80 bg-slate-50/80 dark:bg-slate-900/60 p-4 transition-colors">
            <span className="text-[10px] font-bold tracking-wider text-blue-600 dark:text-blue-400 uppercase">
              {label}
            </span>
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
            <span className="text-[10px] font-bold tracking-wider text-slate-400 dark:text-slate-500 uppercase">
              {label}
            </span>
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
            <span className="text-[10px] font-bold tracking-wider text-slate-500 dark:text-slate-400 uppercase">
              {label}
            </span>
          </div>
        </aside>
      );

    case 'category-inline':
    default:
      return (
        <div className={`my-4 w-full p-4 rounded-xl border border-dashed border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50 text-center ${className}`}>
          <span className="text-[10px] uppercase tracking-wider text-slate-400">{label}</span>
        </div>
      );
  }
}
