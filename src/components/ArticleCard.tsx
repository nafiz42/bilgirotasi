import React from 'react';
import Link from 'next/link';
import { Clock, Eye, Calendar, ArrowRight } from 'lucide-react';
import { Post } from '@/types';
import { categories } from '@/data/categories';
import { authors } from '@/data/authors';

interface ArticleCardProps {
  post: Post;
  variant?: 'featured' | 'standard' | 'compact' | 'horizontal';
}

const defaultCovers: Record<string, string> = {
  'e-devlet-basvurular': 'https://images.unsplash.com/photo-1450133064473-71024230f91b?w=1200&auto=format&fit=crop&q=80',
  'teknoloji-mobil': 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=1200&auto=format&fit=crop&q=80',
  'oyun-donanim': 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1200&auto=format&fit=crop&q=80',
  'egitim-sinavlar': 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1200&auto=format&fit=crop&q=80',
  'pratik-bilgiler': 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1200&auto=format&fit=crop&q=80'
};

export default function ArticleCard({ post, variant = 'standard' }: ArticleCardProps) {
  const category = categories.find((c) => c.slug === post.categorySlug);
  const author = authors.find((a) => a.id === post.authorId) || authors[0];
  const coverImage = post.coverImage || defaultCovers[post.categorySlug] || defaultCovers['pratik-bilgiler'];
  const viewCount = post.viewCount ?? 14200;

  const rawDate = post.publishedAt || post.date || '2026-10-07';
  const formattedDate = new Date(rawDate).toLocaleDateString('tr-TR', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  });

  if (variant === 'featured') {
    return (
      <article className="group relative overflow-hidden rounded-3xl bg-slate-900 border border-slate-800 text-white shadow-xl transition-all duration-300 hover:shadow-2xl hover:border-slate-700 flex flex-col justify-end min-h-[380px] sm:min-h-[460px] p-6 sm:p-8">
        {/* Background Image with Gradient Overlay */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src={coverImage}
            alt={post.title}
            className="w-full h-full object-cover opacity-45 group-hover:scale-105 group-hover:opacity-40 transition-all duration-700 ease-out"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 space-y-3 max-w-3xl">
          <div className="flex flex-wrap items-center gap-2">
            {category && (
              <Link
                href={`/kategori/${category.slug}`}
                className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-blue-600 text-white shadow-sm hover:bg-blue-500 transition-colors"
              >
                {category.title}
              </Link>
            )}
            <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
              Öne Çıkan Rehber
            </span>
          </div>

          <h2 className="text-xl sm:text-2xl lg:text-3xl font-black tracking-tight text-white group-hover:text-blue-200 transition-colors leading-snug">
            <Link href={`/kategori/${post.categorySlug}/${post.slug}`}>
              {post.title}
            </Link>
          </h2>

          <p className="text-xs sm:text-sm text-slate-300 line-clamp-2 leading-relaxed">
            {post.description}
          </p>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-3 border-t border-white/10 text-xs text-slate-300">
            <div className="flex items-center gap-3">
              {author && (
                <div className="flex items-center gap-2">
                  <img
                    src={author.avatar}
                    alt={author.name}
                    className="w-6 h-6 rounded-full object-cover border border-white/20"
                  />
                  <span className="font-medium text-slate-200">{author.name}</span>
                </div>
              )}
              <span className="flex items-center gap-1 text-slate-400">
                <Calendar className="w-3.5 h-3.5" />
                {formattedDate}
              </span>
            </div>

            <div className="flex items-center gap-3 text-slate-400">
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {post.readTime}
              </span>
              <span className="flex items-center gap-1">
                <Eye className="w-3.5 h-3.5" />
                {viewCount.toLocaleString('tr-TR')}
              </span>
            </div>
          </div>
        </div>
      </article>
    );
  }

  if (variant === 'compact') {
    return (
      <article className="group flex items-start gap-3.5 p-3 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-850 border border-transparent hover:border-slate-200/80 dark:hover:border-slate-800 transition-all">
        <div className="w-20 h-20 shrink-0 rounded-xl overflow-hidden bg-slate-200 dark:bg-slate-800 relative">
          <img
            src={coverImage}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
        </div>
        <div className="flex-1 min-w-0 space-y-1">
          <div className="flex items-center gap-2 text-[11px] text-blue-600 dark:text-blue-400 font-semibold">
            <span>{category?.title}</span>
            <span className="text-slate-300 dark:text-slate-700">&bull;</span>
            <span className="text-slate-400 font-normal">{post.readTime}</span>
          </div>
          <h4 className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 line-clamp-2 transition-colors">
            <Link href={`/kategori/${post.categorySlug}/${post.slug}`}>
              {post.title}
            </Link>
          </h4>
        </div>
      </article>
    );
  }

  if (variant === 'horizontal') {
    return (
      <article className="group flex flex-col sm:flex-row items-center gap-5 p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 hover:border-blue-500/50 hover:shadow-lg transition-all">
        <div className="w-full sm:w-52 h-40 shrink-0 rounded-xl overflow-hidden relative">
          <img
            src={coverImage}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        </div>
        <div className="flex-1 space-y-2">
          <div className="flex items-center gap-2">
            {category && (
              <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${category.badgeColor}`}>
                {category.title}
              </span>
            )}
            <span className="text-xs text-slate-400 flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {post.readTime}
            </span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            <Link href={`/kategori/${post.categorySlug}/${post.slug}`}>
              {post.title}
            </Link>
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 line-clamp-2">
            {post.description}
          </p>
          <div className="flex items-center justify-between text-xs text-slate-400 pt-2 border-t border-slate-100 dark:border-slate-800">
            <span>{formattedDate}</span>
            <Link
              href={`/kategori/${post.categorySlug}/${post.slug}`}
              className="font-semibold text-blue-600 dark:text-blue-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform"
            >
              Rehberi Oku <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </article>
    );
  }

  // Standard vertical card
  return (
    <article className="group flex flex-col rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 hover:border-blue-500/50 hover:shadow-lg transition-all duration-300 overflow-hidden">
      <div className="relative aspect-video w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
        <img
          src={coverImage}
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        {category && (
          <div className="absolute top-3 left-3">
            <span className="text-[11px] font-bold px-2.5 py-1 rounded-lg bg-slate-900/80 backdrop-blur-md text-white shadow-xs">
              {category.title}
            </span>
          </div>
        )}
      </div>

      <div className="flex flex-col flex-1 p-5 space-y-3">
        <div className="flex items-center justify-between text-xs text-slate-400">
          <span className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" />
            {formattedDate}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            {post.readTime}
          </span>
        </div>

        <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2 leading-snug">
          <Link href={`/kategori/${post.categorySlug}/${post.slug}`}>
            {post.title}
          </Link>
        </h3>

        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed flex-1">
          {post.description}
        </p>

        <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
          {author && (
            <div className="flex items-center gap-2">
              <img
                src={author.avatar}
                alt={author.name}
                className="w-5 h-5 rounded-full object-cover"
              />
              <span className="font-medium text-slate-700 dark:text-slate-300 truncate max-w-[120px]">
                {author.name}
              </span>
            </div>
          )}
          <span className="text-blue-600 dark:text-blue-400 font-semibold group-hover:underline flex items-center gap-1">
            İncele <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
          </span>
        </div>
      </div>
    </article>
  );
}
