'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { AlertTriangle, RotateCcw, Home } from 'lucide-react';

export default function Error({
  error,
  reset
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Hata takibi (console veya analytics)
    console.error('Uygulama Hatası:', error);
  }, [error]);

  return (
    <div className="min-h-[50vh] flex flex-col items-center justify-center text-center px-4 py-16 space-y-6">
      <div className="w-16 h-16 rounded-2xl bg-rose-50 dark:bg-rose-950/60 text-rose-600 dark:text-rose-400 flex items-center justify-center shadow-lg shadow-rose-500/10">
        <AlertTriangle className="w-8 h-8" />
      </div>

      <div className="space-y-2 max-w-md">
        <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
          Beklenmeyen Bir Hata Oluştu
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
          Sayfa yüklenirken geçici bir sorun meydana geldi. Sayfayı tekrar yüklemeyi deneyebilir veya ana sayfaya dönebilirsiniz.
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
        <button
          type="button"
          onClick={() => reset()}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow-md shadow-blue-500/20 transition-all"
        >
          <RotateCcw className="w-4 h-4" />
          Yeniden Dene
        </button>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs font-bold transition-all"
        >
          <Home className="w-4 h-4" />
          Ana Sayfa
        </Link>
      </div>
    </div>
  );
}
