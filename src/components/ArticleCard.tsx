import React from 'react';
import Link from 'next/link';
import { Compass, ArrowRight } from 'lucide-react';
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
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-lg bg-blue-600 flex items-center justify-center text-white">
                <Compass className="w-3.5 h-3.5" />
              </div>
              <span className="font-semibold text-slate-200">{author?.name || 'Bilgi Rotası'}</span>
            </div>

            <Link
              href={`/kategori/${post.categorySlug}/${post.slug}`}
              className="text-xs font-semibold text-blue-300 hover:text-white flex items-center gap-1 transition-colors"
            >
              Rehberi Oku <ArrowRight className="w-3.5 h-3.5" />
            </Link>
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
      <article className="group flex flex-col sm:flex-row items-stretch gap-5 sm:gap-6 p-4 sm:p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 hover:border-blue-500/50 hover:shadow-xl transition-all duration-300">
        <Link
          href={`/kategori/${post.categorySlug}/${post.slug}`}
          className="w-full sm:w-56 md:w-64 h-48 sm:h-auto shrink-0 rounded-2xl overflow-hidden relative bg-slate-100 dark:bg-slate-800 block"
        >
          <img
            src={coverImage}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        </Link>
        <div className="flex-1 flex flex-col justify-between py-1 space-y-3">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              {category && (
                <Link
                  href={`/kategori/${category.slug}`}
                  className="text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline"
                >
                  {category.title}
                </Link>
              )}
            </div>
            <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-snug">
              <Link href={`/kategori/${post.categorySlug}/${post.slug}`}>
                {post.title}
              </Link>
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed">
              {post.description}
            </p>
          </div>

          <div className="flex items-center justify-between pt-3 border-t border-slate-100 dark:border-slate-800/80">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-2xs shrink-0">
                <Compass className="w-4 h-4" />
              </div>
              <span className="text-xs font-bold text-slate-700 dark:text-slate-200">
                {author?.name || 'Bilgi Rotası'}
              </span>
            </div>

            <Link
              href={`/kategori/${post.categorySlug}/${post.slug}`}
              className="text-xs font-semibold text-blue-600 dark:text-blue-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform"
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
        <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2 leading-snug">
          <Link href={`/kategori/${post.categorySlug}/${post.slug}`}>
            {post.title}
          </Link>
        </h3>

        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed flex-1">
          {post.description}
        </p>

        <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white shrink-0">
              <Compass className="w-3.5 h-3.5" />
            </div>
            <span className="font-semibold text-slate-700 dark:text-slate-300 truncate max-w-[130px]">
              {author?.name || 'Bilgi Rotası'}
            </span>
          </div>
          <span className="text-blue-600 dark:text-blue-400 font-semibold group-hover:underline flex items-center gap-1">
            İncele <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
          </span>
        </div>
      </div>
    </article>
  );
}
