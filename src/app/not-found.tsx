import React from 'react';
import Link from 'next/link';
import { Compass, Home, Search, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4 py-16 space-y-6">
      <div className="w-20 h-20 rounded-3xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center shadow-lg shadow-blue-500/10">
        <Compass className="w-10 h-10 animate-spin-slow" />
      </div>

      <div className="space-y-2 max-w-md">
        <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
          404 - Sayfa Bulunamadı
        </span>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
          Rotanızı mı kaybettiniz?
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
          Aradığınız sayfa taşınmış, silinmiş veya geçici olarak kullanım dışı kalmış olabilir. Ana sayfaya dönebilir veya rehberlerimizde arama yapabilirsiniz.
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow-md shadow-blue-500/20 transition-all"
        >
          <Home className="w-4 h-4" />
          Ana Sayfaya Dön
        </Link>
        <Link
          href="/araclar"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs font-bold transition-all"
        >
          Hesaplama Araçları
        </Link>
      </div>
    </div>
  );
}
