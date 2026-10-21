'use client';

import React from 'react';
import Link from 'next/link';
import { Flame, FolderTree } from 'lucide-react';
import { posts } from '@/data/posts';
import { categories } from '@/data/categories';
import AdBanner from '@/components/AdBanner';
import { ADS_CONFIG } from '@/config/ads';

interface SidebarWidgetsProps {
  currentPostId?: string;
  hideStickyAd?: boolean;
}

export default function SidebarWidgets({
  currentPostId,
  hideStickyAd = false
}: SidebarWidgetsProps) {
  // Show recent posts without implying unaudited popularity metrics.
  const topPosts = [...posts]
    .filter((p) => p.id !== currentPostId)
    .sort((a, b) =>
      new Date(b.publishedAt || b.date || 0).getTime() -
      new Date(a.publishedAt || a.date || 0).getTime()
    )
    .slice(0, 5);

  return (
    <div className="space-y-6">
      {/* 1. En Çok Okunan Rehberler */}
      <div className="rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 shadow-2xs">
        <div className="flex items-center gap-2 pb-3 mb-3 border-b border-slate-100 dark:border-slate-800">
          <Flame className="w-4 h-4 text-amber-500" />
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-slate-100">
            Yeni Rehberler
          </h3>
        </div>

        <div className="space-y-3">
          {topPosts.map((post) => {
            const category = categories.find((c) => c.slug === post.categorySlug);
            return (
              <Link
                key={post.id}
                href={`/kategori/${post.categorySlug}/${post.slug}`}
                className="group flex items-start gap-3 transition-colors"
              >
                <div className="flex-1 min-w-0">
                  <span className="text-[10px] font-semibold text-blue-600 dark:text-blue-400 block truncate">
                    {category?.title}
                  </span>
                  <h4 className="text-xs font-semibold text-slate-800 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 line-clamp-2 transition-colors leading-snug">
                    {post.title}
                  </h4>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* 2. Kategoriler Listesi */}
      <div className="rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 shadow-2xs">
        <div className="flex items-center gap-2 pb-3 mb-3 border-b border-slate-100 dark:border-slate-800">
          <FolderTree className="w-4 h-4 text-blue-600 dark:text-blue-400" />
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-slate-100">
            Kategoriler
          </h3>
        </div>

        <ul className="space-y-2">
          {categories.map((c) => {
            const count = posts.filter((p) => p.categorySlug === c.slug).length;
            return (
              <li key={c.id}>
                <Link
                  href={`/kategori/${c.slug}`}
                  className="flex items-center justify-between p-2 rounded-xl text-xs font-medium text-slate-700 dark:text-slate-300 hover:bg-blue-50 dark:hover:bg-slate-800 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <span className="truncate">{c.title}</span>
                  <span className="shrink-0 ml-2 text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400">
                    {count}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Sticky AdBanner (300x250 or 300x600) */}
      {!hideStickyAd && ADS_CONFIG.enabled && (
        <div className="sticky top-24">
          <AdBanner type="sidebar-sticky" />
        </div>
      )}
    </div>
  );
}
