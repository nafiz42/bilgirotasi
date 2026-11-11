import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import { tools } from '@/data/tools';
import {
  Calculator,
  GraduationCap,
  Wifi,
  Percent,
  FileText,
  Calendar,
  Zap,
  ArrowRight,
  Sparkles
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Hesaplama ve Pratik Dijital Araçlar',
  description:
    'Vize-final ders geçme notu, TYT-AYT-KPSS-DGS net ve OBP, internet indirme süresi, KDV dahil/hariç fatura, kelime sayacı ve başvuru yaş şartı hesaplama araçları.',
  alternates: {
    canonical: '/araclar'
  }
};

const iconMap: Record<string, React.ReactNode> = {
  Calculator: <Calculator className="w-6 h-6" />,
  GraduationCap: <GraduationCap className="w-6 h-6" />,
  Wifi: <Wifi className="w-6 h-6" />,
  Percent: <Percent className="w-6 h-6" />,
  FileText: <FileText className="w-6 h-6" />,
  Calendar: <Calendar className="w-6 h-6" />,
  Zap: <Zap className="w-6 h-6" />
};

export default function ToolsHubPage() {
  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Bilgi Rotası Hesaplama ve Pratik Dijital Araçlar',
    url: 'https://www.bilgirotasi.tr/araclar',
    description:
      'Öğrenciler, kamu adayları ve internet kullanıcıları için ücretsiz, reklamsız ve anlık çalışan dijital hesaplama araçları.',
    hasPart: tools.map((t) => ({
      '@type': 'WebApplication',
      name: t.title,
      url: `https://www.bilgirotasi.tr/araclar/${t.slug}`,
      applicationCategory: 'UtilityApplication',
      operatingSystem: 'All'
    }))
  };

  return (
    <div className="max-w-6xl mx-auto space-y-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />

      <Breadcrumbs items={[{ label: 'Hesaplama Araçları' }]} />

      {/* Hero Header */}
      <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white shadow-xl space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-semibold border border-blue-400/20">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Ücretsiz &amp; Etkileşimli Web Araçları</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-black tracking-tight">
          Hesaplama ve Pratik Dijital Araçlar
        </h1>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-3xl">
          Üniversite vize-final ortalamasından ÖSYM net ve OBP hesabına, internet indirme süresinden KDV matrahı ve resmi başvuru yaş şartı kontrolüne kadar günlük yaşamda ihtiyaç duyduğunuz tüm hesaplamaları tek ekranda yapın.
        </p>
      </div>

      {/* Tools Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tools.map((tool) => (
          <Link
            key={tool.id}
            href={`/araclar/${tool.slug}`}
            className="group flex flex-col justify-between p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 hover:border-blue-500/50 dark:hover:border-blue-500/50 shadow-2xs hover:shadow-xl transition-all duration-300"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  {iconMap[tool.iconName] || <Calculator className="w-6 h-6" />}
                </div>
                <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                  {tool.badge}
                </span>
              </div>

              <div className="space-y-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                  {tool.categoryLabel}
                </span>
                <h2 className="text-lg font-extrabold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-snug">
                  {tool.title}
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {tool.description}
                </p>
              </div>
            </div>

            <div className="pt-5 mt-5 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs font-bold text-blue-600 dark:text-blue-400">
              <span>Aracı Kullan</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        ))}
      </div>

      {/* Explanatory SEO Content */}
      <section className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 space-y-4 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
        <h2 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white">
          Neden Bilgi Rotası Hesaplama Araçlarını Kullanmalısınız?
        </h2>
        <p>
          Resmi başvurular, akademik dönem sonu hesaplamaları ve teknik dosya transferi süreçlerinde elle yapılan hesaplamalar çoğu zaman yuvarlama veya katsayı hatalarına yol açar. Bilgi Rotası üzerinde yer alan dijital araçlar; ÖSYM’nin güncel kılavuz kuralları, üniversite yönetmeliklerindeki standart bağıl/mutlak geçiş barajları, Hazine ve Maliye Bakanlığı’nın yürürlükteki KDV oranları ve gerçek ağ protokolü (TCP/IP) verimlilik katsayıları baz alınarak geliştirilmiştir.
        </p>
        <p>
          Tüm hesaplamalar doğrudan tarayıcınız üzerinde anlık olarak çalışır; girdiğiniz notlar, metinler, doğum tarihleri veya finansal tutarlar hiçbir sunucuya kaydedilmez ve üçüncü taraflarla paylaşılmaz.
        </p>
      </section>
    </div>
  );
}
