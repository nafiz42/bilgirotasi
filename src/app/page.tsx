import React from 'react';
import Link from 'next/link';
import {
  Sparkles,
  TrendingUp,
  FolderOpen,
  Calculator,
  ArrowRight
} from 'lucide-react';
import { categories } from '@/data/categories';
import { posts, getAllPosts, getFeaturedPosts } from '@/data/posts';
import { tools } from '@/data/tools';
import ArticleCard from '@/components/ArticleCard';
import CategoryCard from '@/components/CategoryCard';
import SidebarWidgets from '@/components/SidebarWidgets';
import AdBanner from '@/components/AdBanner';

export default function HomePage() {
  const featuredPosts = getFeaturedPosts();
  const mainHeroPost = featuredPosts[0] || posts[0];
  const sideHeroPosts = featuredPosts.slice(1, 3);

  const heroIds = new Set([
    mainHeroPost?.id,
    ...sideHeroPosts.map((p) => p.id)
  ]);

  // Öne çıkanların altındaki diğer tüm yazılar
  const otherPosts = getAllPosts().filter((p) => !heroIds.has(p.id));

  return (
    <div className="space-y-12">
      {/* 1. HERO SECTION: Öne Çıkan & Trend Rehberler */}
      <section aria-label="Öne Çıkan Rehberler" className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-semibold mb-1 border border-blue-500/20">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Öne çıkan rehberler</span>
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

      {/* 1.5. İNTERAKTİF HESAPLAMA VE PRATİK ARAÇLAR VİTRİNİ */}
      <section
        aria-label="Hesaplama ve Pratik Araçlar"
        className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-blue-50/90 via-indigo-50/50 to-white dark:from-slate-900 dark:via-blue-950/30 dark:to-slate-900 border border-blue-200/80 dark:border-blue-900/60 space-y-5"
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="space-y-1">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-600 text-white text-[11px] font-bold">
              <Calculator className="w-3.5 h-3.5" />
              Ücretsiz Dijital Araçlar
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight">
              Hesaplama ve Pratik Sorgulama Araçları
            </h2>
          </div>
          <Link
            href="/araclar"
            className="inline-flex items-center gap-1.5 text-xs font-extrabold text-blue-600 dark:text-blue-400 hover:underline"
          >
            Tüm Araçları Aç ({tools.length}) <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {tools.map((tool) => (
            <Link
              key={tool.id}
              href={`/araclar/${tool.slug}`}
              className="group p-4 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800 hover:border-blue-500/60 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between gap-3"
            >
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                    {tool.categoryLabel}
                  </span>
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                    {tool.badge}
                  </span>
                </div>
                <h3 className="text-sm font-extrabold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {tool.shortTitle}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed">
                  {tool.description}
                </p>
              </div>
              <span className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 dark:text-blue-400">
                Hemen Hesapla <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* 2. DİĞER YAZILAR (LİSTE GÖRÜNÜMÜ) & YAN MENÜ */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-2">
        {/* Main Content Area (8 Cols) - Liste Şeklinde Diğer Yazılar */}
        <div className="lg:col-span-8 space-y-6">
          <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <h2 className="text-xl font-black text-slate-900 dark:text-white">
                Diğer Yazılar ve Rehberler
              </h2>
            </div>
            <span className="text-xs font-semibold text-slate-400">
              {otherPosts.length} Rehber
            </span>
          </div>

          <div className="space-y-5">
            {otherPosts.map((post, idx) => (
              <React.Fragment key={post.id}>
                <ArticleCard post={post} variant="horizontal" />
                {idx === 5 && (
                  <AdBanner type="article-footer" label="Sponsorlu İçerik" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Sidebar Area (4 Cols) */}
        <aside className="lg:col-span-4">
          <SidebarWidgets />
        </aside>
      </div>

      {/* 3. 5 ANA KATEGORİ IZGARASI */}
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
    </div>
  );
}
