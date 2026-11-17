'use client';

import React, { useState } from 'react';
import { Post } from '@/types';
import ArticleCard from '@/components/ArticleCard';
import { Flame, Gamepad2, Sparkles, Sliders } from 'lucide-react';

interface GamingNewsTabsProps {
  posts: Post[];
}

type TabKey = 'all' | 'gta6' | 'new-games' | 'guides';

export default function GamingNewsTabs({ posts }: GamingNewsTabsProps) {
  const [activeTab, setActiveTab] = useState<TabKey>('all');

  const isGta6 = (p: Post) =>
    p.slug.includes('gta-6') ||
    (p.tags || []).some((t) => t.toLowerCase().includes('gta 6'));

  const isNewRelease = (p: Post) =>
    p.slug.includes('kasim-2026') ||
    p.slug.includes('modern-warfare-4') ||
    p.slug.includes('phantom-blade-zero') ||
    (p.tags || []).some((t) => t.toLowerCase().includes('yeni çıkan oyunlar'));

  const gta6Posts = posts.filter(isGta6);
  const newGamePosts = posts.filter((p) => !isGta6(p) && isNewRelease(p));
  const otherGamingGuides = posts.filter((p) => !isGta6(p) && !isNewRelease(p));

  const visiblePosts =
    activeTab === 'gta6'
      ? gta6Posts
      : activeTab === 'new-games'
      ? newGamePosts
      : activeTab === 'guides'
      ? otherGamingGuides
      : posts;

  const tabs: { key: TabKey; label: string; count: number; icon: React.ReactNode }[] = [
    {
      key: 'all',
      label: 'Tümü',
      count: posts.length,
      icon: <Sparkles className="w-3.5 h-3.5" />
    },
    {
      key: 'gta6',
      label: 'GTA 6 Haberleri',
      count: gta6Posts.length,
      icon: <Flame className="w-3.5 h-3.5" />
    },
    {
      key: 'new-games',
      label: 'Yeni Çıkan Oyunlar',
      count: newGamePosts.length,
      icon: <Gamepad2 className="w-3.5 h-3.5" />
    },
    {
      key: 'guides',
      label: 'FPS & Hata Çözümleri',
      count: otherGamingGuides.length,
      icon: <Sliders className="w-3.5 h-3.5" />
    }
  ];

  return (
    <div className="space-y-6">
      {/* Sekme Çubuğu */}
      <div
        role="tablist"
        aria-label="GTA 6 ve Oyun Haberleri Sekmeleri"
        className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-slate-100 dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800"
      >
        {tabs.map((tab) => {
          const isActive = activeTab === tab.key;
          return (
            <button
              key={tab.key}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveTab(tab.key)}
              className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                isActive
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-800 hover:text-blue-600 dark:hover:text-blue-400'
              }`}
            >
              {tab.icon}
              <span>{tab.label}</span>
              <span
                className={`px-1.5 py-0.5 rounded-md text-[10px] ${
                  isActive
                    ? 'bg-white/20 text-white'
                    : 'bg-slate-200/80 dark:bg-slate-800 text-slate-500 dark:text-slate-400'
                }`}
              >
                {tab.count}
              </span>
            </button>
          );
        })}
      </div>

      {/* İçerik Listesi */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {visiblePosts.map((post) => (
          <ArticleCard key={post.id} post={post} variant="standard" />
        ))}
      </div>
    </div>
  );
}
