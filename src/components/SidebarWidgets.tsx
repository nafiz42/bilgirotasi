'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FolderTree, Search } from 'lucide-react';
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
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/ara?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  // Diğer yazılar / yan liste
  const otherSidebarPosts = [...posts]
    .filter((p) => p.id !== currentPostId)
    .slice(0, 6);

  return (
    <div className="space-y-6">
      {/* 1. Makale Ara */}
      <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-2xs">
        <h3 className="text-base font-bold text-center text-slate-900 dark:text-slate-100 pb-3 mb-4 border-b border-slate-200 dark:border-slate-800">
          Makale Ara
        </h3>
        <form onSubmit={handleSearch} className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Arama..."
            aria-label="Makale ara"
            className="w-full pl-10 pr-4 py-2.5 rounded-full bg-slate-100 dark:bg-slate-800/90 text-xs sm:text-sm text-slate-800 dark:text-slate-200 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/40 transition-all"
          />
        </form>
      </div>

      {/* 2. Diğer Yazılar (Görselli Yan Liste) */}
      <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-2xs">
        <h3 className="text-base font-bold text-center text-slate-900 dark:text-slate-100 pb-3 mb-5 border-b border-slate-200 dark:border-slate-800">
          Diğer Rehberler
        </h3>

        <div className="space-y-4">
          {otherSidebarPosts.map((post) => {
            const rawDate = post.publishedAt || post.date || '2026-10-07';
            const formattedDate = new Date(rawDate).toLocaleDateString('tr-TR', {
              day: 'numeric',
              month: 'long',
              year: 'numeric'
            });
            return (
              <Link
                key={post.id}
                href={`/kategori/${post.categorySlug}/${post.slug}`}
                className="group flex items-center gap-3.5 transition-colors"
              >
                <div className="w-24 h-16 shrink-0 rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-800">
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 line-clamp-2 transition-colors leading-snug">
                    {post.title}
                  </h4>
                  <span className="text-[11px] text-slate-400 block mt-1">
                    {formattedDate}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* 3. Kategoriler Listesi */}
      <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-2xs">
        <div className="flex items-center justify-center gap-2 pb-3 mb-3 border-b border-slate-200 dark:border-slate-800">
          <FolderTree className="w-4 h-4 text-blue-600 dark:text-blue-400" />
          <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">
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
