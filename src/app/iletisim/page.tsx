import React from 'react';
import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import { Mail, Megaphone, MessageSquare } from 'lucide-react';

export const metadata: Metadata = {
  title: 'İletişim',
  description: 'Bilgi Rotası rehberleriyle ilgili düzeltme, soru ve iş birliği talepleri için iletişim bilgileri.',
  alternates: { canonical: '/iletisim' }
};

export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <Breadcrumbs items={[{ label: 'İletişim' }]} />

      <header className="rounded-3xl bg-slate-900 p-8 text-white sm:p-10">
        <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-blue-500/20 px-3 py-1 text-xs font-semibold text-blue-200">
          <MessageSquare className="h-4 w-4" />
          İletişim ve düzeltme talepleri
        </div>
        <h1 className="text-2xl font-black sm:text-3xl">Bilgi Rotası ile iletişime geçin</h1>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-300">
          Bir rehberde hata veya güncelliğini yitirmiş bilgi fark ederseniz, ilgili sayfanın bağlantısını ve düzeltme önerinizi e-posta ile gönderin. Mesajınızı doğrudan e-posta uygulamanızdan iletebilirsiniz.
        </p>
      </header>

      <section className="grid gap-5 sm:grid-cols-2" aria-label="E-posta adresleri">
        <a href="mailto:iletisim@bilgirotasi.tr" className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-blue-400 dark:border-slate-800 dark:bg-slate-900">
          <Mail className="mb-4 h-6 w-6 text-blue-600 dark:text-blue-400" />
          <h2 className="font-bold text-slate-900 dark:text-slate-100">Genel iletişim ve içerik düzeltme</h2>
          <p className="mt-2 text-sm text-blue-700 underline dark:text-blue-300">iletisim@bilgirotasi.tr</p>
        </a>
        <a href="mailto:reklam@bilgirotasi.tr" className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-blue-400 dark:border-slate-800 dark:bg-slate-900">
          <Megaphone className="mb-4 h-6 w-6 text-amber-600 dark:text-amber-400" />
          <h2 className="font-bold text-slate-900 dark:text-slate-100">Reklam ve iş birliği</h2>
          <p className="mt-2 text-sm text-blue-700 underline dark:text-blue-300">reklam@bilgirotasi.tr</p>
        </a>
      </section>
    </div>
  );
}
