import React from 'react';
import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import { FileText, AlertTriangle, Copyright, ExternalLink } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Kullanım Koşulları ve Şartlar',
  description:
    'Bilgi Rotası kullanım koşulları, telif hakları, sorumluluk reddi beyanı ve içerik paylaşım şartları.',
  alternates: {
    canonical: '/kullanim-kosullari'
  }
};

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <Breadcrumbs items={[{ label: 'Kullanım Koşulları' }]} />

      <div className="p-8 sm:p-10 rounded-3xl bg-slate-900 text-white space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-semibold">
          <FileText className="w-3.5 h-3.5" />
          <span>Yasal Bildirim</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-black">
          Kullanım Koşulları ve Sorumluluk Reddi
        </h1>
        <p className="text-xs sm:text-sm text-slate-300">
          Son Güncelleme: 05 Ekim 2026
        </p>
      </div>

      <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 space-y-8 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
        
        <section className="space-y-3">
          <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
            <Copyright className="w-4 h-4 text-blue-600" />
            1. Fikri Mülkiyet ve Telif Hakları
          </h2>
          <p>
            Bilgi Rotası üzerinde yer alan tüm metinler, grafikler, logolar, simgeler ve içerik düzeni 5846 sayılı Fikir ve Sanat Eserleri Kanunu ile korunmaktadır. Sitemizdeki makaleler kaynak gösterilmeden ve aktif dofollow bağlantı verilmeden kısmen dahi kopyalanamaz veya çoğaltılamaz.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-amber-500" />
            2. Bilgilendirme Amaçlı İçerik ve Sorumluluk Reddi
          </h2>
          <p>
            Sitemizde yer alan e-Devlet, sınav hazırlığı, donanım optimizasyonu ve diğer rehber yazıları yalnızca genel bilgilendirme amacıyla sunulmaktadır. Bilgi Rotası hiçbir resmi kamu kurumunun (GSB, ÖSYM, Bakanlıklar vb.) resmi web sitesi veya temsilcisi değildir.
          </p>
          <p>
            Kullanıcıların kılavuzları uygularken resmi kurumların güncel duyurularını da teyit etmeleri önerilir. Bilgilerin kullanımından doğabilecek aksaklıklardan sitemiz doğrudan sorumlu tutulamaz.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
            <ExternalLink className="w-4 h-4 text-blue-600" />
            3. Dış Bağlantılar (External Links)
          </h2>
          <p>
            Bilgi Rotası zaman zaman resmi kurumlara, kaynak web sitelerine veya sponsorlu iş ortaklarına ait harici bağlantılar içerebilir. Bu sitelerin içeriklerinden ve gizlilik uygulamalarından Bilgi Rotası sorumlu değildir.
          </p>
        </section>

      </div>
    </div>
  );
}
