import React from 'react';
import Link from 'next/link';
import {
  Sparkles,
  ArrowRight,
  TrendingUp,
  FolderOpen
} from 'lucide-react';
import { categories } from '@/data/categories';
import { posts, getFeaturedPosts } from '@/data/posts';
import ArticleCard from '@/components/ArticleCard';
import CategoryCard from '@/components/CategoryCard';
import SidebarWidgets from '@/components/SidebarWidgets';
import AdBanner from '@/components/AdBanner';

export default function HomePage() {
  const featuredPosts = getFeaturedPosts();
  const mainHeroPost = featuredPosts[0] || posts[0];
  const sideHeroPosts = featuredPosts.slice(1, 3);
  const recentPosts = posts.slice(0, 6);

  return (
    <div className="space-y-12">
      {/* 1. HERO SECTION: Öne Çıkan & Trend Rehberler */}
      <section aria-label="Öne Çıkan Rehberler" className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-semibold mb-1 border border-blue-500/20">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Günün En Çok Aranan Konuları</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
              Öne Çıkan &amp; Trend Rehberler
            </h1>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-sm sm:text-right">
            En güncel kamu başvuruları, sistem optimizasyonları ve günlük yaşam çözümleri.
          </p>
        </div>

        {/* Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Main Large Featured Post */}
          <div className="lg:col-span-8">
            <ArticleCard post={mainHeroPost} variant="featured" />
          </div>

          {/* 2 Secondary Featured Posts */}
          <div className="lg:col-span-4 flex flex-col justify-between gap-6">
            {sideHeroPosts.map((post) => (
              <div key={post.id} className="flex-1">
                <ArticleCard post={post} variant="standard" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. 5 ANA KATEGORİ IZGARASI */}
      <section aria-label="Popüler Kategoriler" className="space-y-6 pt-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FolderOpen className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight">
              Rehber Kategorileri
            </h2>
          </div>
          <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
            5 Ana Kategori &bull; Adım Adım Kılavuzlar
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </section>

      {/* 3. İÇERİK & SIDEBAR DÜZENİ */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-4">
        
        {/* Main Content Area (8 Cols) */}
        <div className="lg:col-span-8 space-y-10">
          
          {/* Son Eklenen Rehberler */}
          <section aria-label="Son Eklenen Rehberler" className="space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <h2 className="text-xl font-black text-slate-900 dark:text-white">
                  En Yeni Rehberler
                </h2>
              </div>
              <span className="text-xs font-semibold text-slate-400">
                Sürekli Güncellenen İçerik
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {recentPosts.map((post) => (
                <ArticleCard key={post.id} post={post} variant="standard" />
              ))}
            </div>
          </section>

          {/* Mid-Feed In-Article Ad Banner */}
          <AdBanner type="article-footer" label="Sponsorlu İçerik / AdSense Alanı" />

          {/* Kategorilere Göre Öne Çıkanlar (e-Devlet & Teknoloji Özel Blokları) */}
          <section className="space-y-8">
            {categories.slice(0, 2).map((cat) => {
              const catPosts = posts.filter((p) => p.categorySlug === cat.slug).slice(0, 3);
              return (
                <div key={cat.id} className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-blue-600" />
                        {cat.title}
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        {cat.description}
                      </p>
                    </div>
                    <Link
                      href={`/kategori/${cat.slug}`}
                      className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1 shrink-0"
                    >
                      Tümünü Gör ({posts.filter((p) => p.categorySlug === cat.slug).length})
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>

                  <div className="space-y-3">
                    {catPosts.map((post) => (
                      <ArticleCard key={post.id} post={post} variant="horizontal" />
                    ))}
                  </div>
                </div>
              );
            })}
          </section>
        </div>

        {/* Sidebar Area (4 Cols) */}
        <aside className="lg:col-span-4">
          <SidebarWidgets />
        </aside>
      </div>
    </div>
  );
}
