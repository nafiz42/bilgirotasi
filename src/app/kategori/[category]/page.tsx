import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getCategoryBySlug, categories } from '@/data/categories';
import { getPostsByCategory } from '@/data/posts';
import ArticleCard from '@/components/ArticleCard';
import Breadcrumbs from '@/components/Breadcrumbs';
import SidebarWidgets from '@/components/SidebarWidgets';
import AdBanner from '@/components/AdBanner';
import {
  Building2,
  Smartphone,
  Gamepad2,
  GraduationCap,
  Lightbulb,
  BookOpen
} from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Building2: <Building2 className="w-8 h-8" />,
  Smartphone: <Smartphone className="w-8 h-8" />,
  Gamepad2: <Gamepad2 className="w-8 h-8" />,
  GraduationCap: <GraduationCap className="w-8 h-8" />,
  Lightbulb: <Lightbulb className="w-8 h-8" />
};

interface CategoryPageProps {
  params: Promise<{
    category: string;
  }>;
}

export async function generateStaticParams() {
  return categories.map((c) => ({
    category: c.slug
  }));
}

export async function generateMetadata({
  params
}: CategoryPageProps): Promise<Metadata> {
  const { category: slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    return {
      title: 'Kategori Bulunamadı'
    };
  }

  return {
    title: `${category.title} Rehberleri ve Nasıl Yapılır Kılavuzları`,
    description: category.description,
    alternates: {
      canonical: `/kategori/${category.slug}`
    },
    openGraph: {
      title: `${category.title} | RehberPortal`,
      description: category.description,
      url: `https://rehberportal.com/kategori/${category.slug}`
    }
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category: slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  const categoryPosts = getPostsByCategory(category.slug);

  return (
    <div className="space-y-8">
      {/* Breadcrumb Navigation */}
      <Breadcrumbs items={[{ label: category.title }]} />

      {/* Category Hero Banner */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white shadow-xl relative overflow-hidden">
        <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-xs font-semibold text-blue-200">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>{categoryPosts.length} Kapsamlı Rehber Mevcut</span>
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight">
              {category.title}
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {category.description}
            </p>
          </div>

          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-blue-300 shrink-0">
            {iconMap[category.iconName] || <BookOpen className="w-8 h-8" />}
          </div>
        </div>
      </div>

      {/* Main Content & Sidebar */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Posts List */}
        <div className="lg:col-span-8 space-y-6">
          <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100">
              {category.title} Konusundaki Tüm Rehberler
            </h2>
            <span className="text-xs text-slate-400">
              Tarihe Göre Sıralı
            </span>
          </div>

          {categoryPosts.length > 0 ? (
            <div className="space-y-4">
              {categoryPosts.map((post, idx) => (
                <React.Fragment key={post.id}>
                  <ArticleCard post={post} variant="horizontal" />
                  {/* In-feed ad after second post */}
                  {idx === 1 && (
                    <AdBanner type="in-article" label="Kategori İçi Sponsorlu Alan" />
                  )}
                </React.Fragment>
              ))}
            </div>
          ) : (
            <div className="p-12 text-center rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <p className="text-slate-600 dark:text-slate-400 text-sm">
                Bu kategoride henüz yayınlanmış yazı bulunmamaktadır.
              </p>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <aside className="lg:col-span-4">
          <SidebarWidgets />
        </aside>
      </div>
    </div>
  );
}
