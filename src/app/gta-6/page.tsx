import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import GamingNewsTabs from '@/components/GamingNewsTabs';
import SidebarWidgets from '@/components/SidebarWidgets';
import { getPostsByCategory } from '@/data/posts';
import { Flame, Calendar, Gamepad2, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'GTA 6 Haberleri, Çıkış Rehberi ve 2026 Yeni Çıkan Oyunlar',
  description:
    'Grand Theft Auto VI (GTA 6) 19 Kasım 2026 çıkış saati, ön yükleme, PS5/Xbox detayları ile Ekim–Kasım 2026 yeni çıkan oyunlar ve PC performans rehberleri.',
  keywords: [
    'GTA 6',
    'GTA 6 çıkış tarihi',
    'GTA 6 Türkiye saati',
    'GTA 6 PC',
    'yeni çıkan oyunlar 2026',
    'Call of Duty Modern Warfare 4',
    'Phantom Blade Zero'
  ],
  alternates: {
    canonical: '/gta-6'
  },
  openGraph: {
    title: 'GTA 6 Haberleri ve 2026 Yeni Çıkan Oyunlar | Bilgi Rotası',
    description:
      'GTA 6 lansman rehberi, ön yükleme adımları ve 2026 sonbaharında çıkan en yeni oyunların FPS/performans kılavuzları.',
    url: 'https://www.bilgirotasi.tr/gta-6',
    type: 'website'
  }
};

export default function Gta6HubPage() {
  const gamingPosts = getPostsByCategory('oyun-donanim');

  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'GTA 6 Haberleri ve Yeni Çıkan Oyunlar',
    url: 'https://www.bilgirotasi.tr/gta-6',
    description:
      'GTA 6 çıkış rehberi, ön yükleme detayları ve 2026 yılında çıkan yeni oyunlar için inceleme ve performans kılavuzları.',
    publisher: {
      '@type': 'Organization',
      name: 'Bilgi Rotası',
      url: 'https://www.bilgirotasi.tr'
    }
  };

  return (
    <div className="space-y-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />

      <Breadcrumbs
        items={[
          { label: 'Oyun & Donanım', href: '/kategori/oyun-donanim' },
          { label: 'GTA 6 & Yeni Çıkan Oyunlar' }
        ]}
      />

      {/* Hero Banner */}
      <header className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900 p-7 sm:p-10 text-white shadow-xl space-y-5">
        <div className="flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-500/20 text-rose-200 border border-rose-400/30 text-xs font-bold">
            <Flame className="w-3.5 h-3.5" />
            Gündem: GTA 6 Lansmanı
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-slate-200 text-xs font-semibold">
            <Calendar className="w-3.5 h-3.5" />
            Çıkış: 19 Kasım 2026 &bull; PS5 &amp; Xbox Series X|S
          </span>
        </div>

        <div className="space-y-2 max-w-3xl">
          <h1 className="text-2xl sm:text-4xl font-black tracking-tight">
            GTA 6 Haberleri ve Yeni Çıkan Oyunlar
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Grand Theft Auto VI (GTA 6) çıkış saati, ön yükleme (pre-load) ve PC durumu hakkındaki güncel haberlerin yanı sıra Ekim–Kasım 2026’da yayınlanan yeni oyunlar için rehber ve FPS ayarlarını tek merkezden takip edin.
          </p>
        </div>

        <div className="flex flex-wrap gap-3 pt-1">
          <Link
            href="/kategori/oyun-donanim/gta-6-cikis-tarihi-saati-ve-platformlar-2026"
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition-colors"
          >
            <Gamepad2 className="w-4 h-4" />
            GTA 6 Lansman Rehberini Oku
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          <Link
            href="/kategori/oyun-donanim/kasim-2026-yeni-cikan-oyunlar-pc-ps5-xbox"
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-colors"
          >
            Ekim–Kasım 2026 Yeni Oyunlar Listesi
          </Link>
          <Link
            href="/araclar/internet-indirme-suresi-hesaplama"
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-colors"
          >
            Oyun İndirme Süresi Hesapla
          </Link>
          <Link
            href="/kategori/oyun-donanim"
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-colors"
          >
            Tüm Oyun &amp; Donanım Rehberleri
          </Link>
        </div>
      </header>

      {/* Main Content + Sidebar */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8">
          <GamingNewsTabs posts={gamingPosts} />
        </div>
        <aside className="lg:col-span-4">
          <SidebarWidgets />
        </aside>
      </div>
    </div>
  );
}
