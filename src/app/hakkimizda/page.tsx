import React from 'react';
import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import { authors } from '@/data/authors';
import { ShieldCheck, Target, HeartHandshake, Award, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Hakkımızda',
  description:
    'Bilgi Rotası’nın misyonu, yayın ilkeleri, editör kadrosu ve doğru bilgiye erişimi kolaylaştırma vizyonu hakkında detaylar.',
  alternates: {
    canonical: '/hakkimizda'
  }
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <Breadcrumbs items={[{ label: 'Hakkımızda' }]} />

      {/* Hero */}
      <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white shadow-xl space-y-4">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-semibold border border-blue-400/20">
          <Award className="w-3.5 h-3.5" />
          Bağımsız &bull; Şeffaf &bull; Doğrulanmış
        </span>
        <h1 className="text-3xl sm:text-4xl font-black tracking-tight">
          Hakkımızda &bull; Bilgi Rotası
        </h1>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl">
          Karmaşık bürokratik işlemleri, teknik ayarları ve sınav hazırlık süreçlerini herkesin kolayca uygulayabileceği sade adımlara dönüştürüyoruz.
        </p>
      </div>

      {/* Mission & Vision */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 space-y-3">
          <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center">
            <Target className="w-5 h-5" />
          </div>
          <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100">
            Misyonumuz
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            Dijital dünyada ve kamusal başvurularda yaşanan kafa karışıklıklarını ortadan kaldırmak. Kullanıcılarımıza zaman kaybettirmeden en net, güncel ve resmi kaynaklara dayalı kılavuzları 0 maliyetle sunmak.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 space-y-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
            <HeartHandshake className="w-5 h-5" />
          </div>
          <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100">
            Yayın İlkelerimiz
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            Tüm içeriklerimiz editörlerimiz tarafından bizzat test edilir, ilgili mevzuat ve resmi duyurular incelenir. Yanıltıcı başlık (clickbait) ve teyitsiz bilgilere portalımızda kesinlikle yer verilmez.
          </p>
        </div>
      </div>

      {/* Editorial Team */}
      <div className="space-y-6 pt-4">
        <div className="flex items-center gap-2 pb-2 border-b border-slate-200 dark:border-slate-800">
          <Users className="w-5 h-5 text-blue-600 dark:text-blue-400" />
          <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
            Uzman Yazar ve Editör Kadromuz
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {authors.map((author) => (
            <div
              key={author.id}
              className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 text-center space-y-3 shadow-2xs"
            >
              <img
                src={author.avatar}
                alt={author.name}
                className="w-20 h-20 mx-auto rounded-full object-cover border-2 border-blue-500 shadow-sm"
              />
              <div>
                <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">
                  {author.name}
                </h3>
                <p className="text-xs text-blue-600 dark:text-blue-400 font-medium">
                  {author.role}
                </p>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-3">
                {author.bio}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Quality Badge */}
      <div className="p-6 rounded-2xl bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-900 text-xs sm:text-sm text-slate-700 dark:text-slate-300 flex items-start gap-4">
        <ShieldCheck className="w-8 h-8 text-blue-600 shrink-0 mt-0.5" />
        <div className="space-y-1">
          <h3 className="font-bold text-slate-900 dark:text-slate-100">
            Google AdSense ve İçerik Kalitesi Taahhüdü
          </h3>
          <p>
            Bilgi Rotası, Google Yayıncı Politikaları&apos;na tam uyumlu çalışır. Kullanıcı deneyimini önceleyen sayfa yerleşimleri, özgün metinler ve reklam-içerik ayrımına gösterilen hassasiyet ile güvenilir bir yayıncılık sürdürmekteyiz.
          </p>
        </div>
      </div>
    </div>
  );
}
