import React from 'react';
import Link from 'next/link';
import {
  Building2,
  Smartphone,
  Gamepad2,
  GraduationCap,
  Lightbulb,
  ArrowRight,
  BookOpen
} from 'lucide-react';
import { Category } from '@/types';
import { posts } from '@/data/posts';

const iconMap: Record<string, React.ReactNode> = {
  Building2: <Building2 className="w-6 h-6" />,
  Smartphone: <Smartphone className="w-6 h-6" />,
  Gamepad2: <Gamepad2 className="w-6 h-6" />,
  GraduationCap: <GraduationCap className="w-6 h-6" />,
  Lightbulb: <Lightbulb className="w-6 h-6" />
};

export default function CategoryCard({ category }: { category: Category }) {
  const postCount = posts.filter((p) => p.categorySlug === category.slug).length;

  return (
    <Link
      href={`/kategori/${category.slug}`}
      className="group flex flex-col justify-between p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 hover:border-blue-500/50 hover:shadow-xl transition-all duration-300 relative overflow-hidden"
    >
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-xs">
            {iconMap[category.iconName] || <BookOpen className="w-6 h-6" />}
          </div>
          <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
            {postCount} Rehber
          </span>
        </div>

        <div>
          <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {category.title}
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 line-clamp-2 leading-relaxed">
            {category.description}
          </p>
        </div>
      </div>

      <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs font-semibold text-blue-600 dark:text-blue-400">
        <span>Tüm Rehberleri Keşfet</span>
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </div>
    </Link>
  );
}
