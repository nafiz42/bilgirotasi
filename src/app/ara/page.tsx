import React from 'react';
import type { Metadata } from 'next';
import { searchPosts } from '@/data/posts';
import ArticleCard from '@/components/ArticleCard';
import Breadcrumbs from '@/components/Breadcrumbs';
import SidebarWidgets from '@/components/SidebarWidgets';
import { Search } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Portal İçi Arama',
  description: 'RehberPortal üzerinde aradığınız tüm kılavuz ve makaleleri bulun.',
  robots: {
    index: false,
    follow: true
  }
};

interface SearchPageProps {
  searchParams: Promise<{
    q?: string;
  }>;
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const { q = '' } = await searchParams;
  const results = q ? searchPosts(q) : [];

  return (
    <div className="space-y-6">
      <Breadcrumbs items={[{ label: 'Arama Sonuçları' }]} />

      <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 text-white shadow-xl">
        <div className="flex items-center gap-3 mb-2">
          <Search className="w-6 h-6 text-blue-400" />
          <h1 className="text-2xl sm:text-3xl font-black">
            Portalda Arama
          </h1>
        </div>
        <p className="text-xs sm:text-sm text-slate-300">
          {q
            ? `"${q}" sorgusu için ${results.length} rehber bulundu.`
            : 'Aramak istediğiniz konuyu yukarıdaki arama çubuğuna yazabilirsiniz.'}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8 space-y-4">
          {results.length > 0 ? (
            <div className="space-y-4">
              {results.map((post) => (
                <ArticleCard key={post.id} post={post} variant="horizontal" />
              ))}
            </div>
          ) : (
            <div className="p-12 text-center rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <p className="text-slate-600 dark:text-slate-400 text-sm">
                {q
                  ? `"${q}" kelimesi ile eşleşen rehber bulunamadı. Lütfen farklı anahtar kelimeler deneyin.`
                  : 'Arama yapmak için bir kelime girin.'}
              </p>
            </div>
          )}
        </div>

        <aside className="lg:col-span-4">
          <SidebarWidgets />
        </aside>
      </div>
    </div>
  );
}
