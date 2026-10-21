import React from 'react';
import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import { ShieldCheck, Target, HeartHandshake, Award } from 'lucide-react';

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
          Bilgi ve kullanım rehberleri
        </span>
        <h1 className="text-3xl sm:text-4xl font-black tracking-tight">
          Hakkımızda &bull; Bilgi Rotası
        </h1>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl">
            e-Devlet işlemleri, dijital araçlar, eğitim ve günlük yaşam konularındaki bilgileri anlaşılır rehberler halinde sunuyoruz.
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
            e-Devlet işlemleri, dijital araçlar, eğitim ve günlük yaşam konularındaki bilgileri anlaşılır rehberler halinde sunuyoruz. Resmi işlemlerle ilgili nihai koşullar için ilgili kurumun güncel açıklamasına başvurulmalıdır.
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
            Resmi işlem ve hizmet rehberlerinde, kaynak bağlantıları sunulduğunda ilgili kurum veya hizmet sağlayıcı esas alınmalıdır. Tarih, ücret, uygunluk ve uygulama adımları değişebileceğinden işlem öncesinde güncel açıklamayı kontrol edin. Hata bildirimi için İletişim sayfasından bize ulaşabilirsiniz.
          </p>
        </div>
      </div>

      {/* Quality Badge */}
      <div className="p-6 rounded-2xl bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-900 text-xs sm:text-sm text-slate-700 dark:text-slate-300 flex items-start gap-4">
        <ShieldCheck className="w-8 h-8 text-blue-600 shrink-0 mt-0.5" />
        <div className="space-y-1">
          <h3 className="font-bold text-slate-900 dark:text-slate-100">
            Yayıncılık İlkeleri ve İçerik Kalitesi Taahhüdü
          </h3>
          <p>
            Bilgi Rotası bilgilendirme amaçlı bir rehber sitesidir. İşlem yapmadan önce ilgili kurumun güncel koşullarını ve başvuru ekranındaki uyarıları kontrol edin. Hata veya güncelleme önerilerinizi İletişim sayfasından iletebilirsiniz.
          </p>
        </div>
      </div>
    </div>
  );
}
