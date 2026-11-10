import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import {
  ShieldCheck,
  Target,
  HeartHandshake,
  Award,
  CheckCircle2,
  BookOpen,
  Users,
  Mail,
  Calculator
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Hakkımızda, Yayın İlkeleri ve Künye',
  description:
    'Bilgi Rotası’nın kuruluş amacı, 4 aşamalı içerik doğrulama metodolojisi, yayın ilkeleri, hesaplama araçları ve kurumsal künye bilgileri.',
  alternates: {
    canonical: '/hakkimizda'
  }
};

export default function AboutPage() {
  const orgSchema = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'Hakkımızda - Bilgi Rotası',
    url: 'https://www.bilgirotasi.tr/hakkimizda',
    mainEntity: {
      '@type': 'Organization',
      name: 'Bilgi Rotası',
      url: 'https://www.bilgirotasi.tr',
      email: 'konhansoftware@gmail.com',
      description:
        'Türkiye’de e-Devlet işlemleri, yükseköğretim ve ÖSYM sınav süreçleri, teknoloji/donanım optimizasyonu ve günlük yaşam konularında adım adım rehberler ve interaktif hesaplama araçları sunan bağımsız bilgi platformu.'
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />

      <Breadcrumbs items={[{ label: 'Hakkımızda & Künye' }]} />

      {/* Hero */}
      <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white shadow-xl space-y-4">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-semibold border border-blue-400/20">
          <Award className="w-3.5 h-3.5" />
          Bağımsız Rehber ve Dijital Araç Platformu
        </span>
        <h1 className="text-3xl sm:text-4xl font-black tracking-tight">
          Hakkımızda, Yayın İlkeleri ve Künye
        </h1>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl">
          Bilgi Rotası; karmaşık resmi başvuru süreçlerini, teknik yazılım/donanım ayarlarını ve sınav hazırlık hesaplamalarını herkesin kolayca uygulayabileceği adım adım kılavuzlara ve interaktif dijital araçlara dönüştürmek amacıyla kurulmuştur.
        </p>
      </div>

      {/* Mission & Vision */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 space-y-3">
          <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center">
            <Target className="w-5 h-5" />
          </div>
          <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100">
            Misyonumuz ve Değer Önerimiz
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            İnternetteki bilgi kirliliğini ve tıklama tuzağı (clickbait) başlıkları ortadan kaldırarak; okuyucunun aradığı sorunun yanıtına, resmi mevzuat dayanağına veya hesaplama aracına doğrudan ilk paragraftan itibaren ulaşmasını sağlıyoruz.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 space-y-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
            <HeartHandshake className="w-5 h-5" />
          </div>
          <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100">
            Editöryel Bağımsızlık ve Şeffaflık
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            Rehberlerimizde yer alan tüm adımlar; ilgili bakanlıkların, ÖSYM’nin, e-Devlet Kapısı’nın ve donanım/yazılım üreticilerinin resmi belgeleri referans alınarak hazırlanır ve makale sonunda kaynak bağlantılarıyla açıkça paylaşılır.
          </p>
        </div>
      </div>

      {/* 4-Step Editorial Methodology */}
      <section className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 space-y-6">
        <div className="flex items-center gap-2.5">
          <BookOpen className="w-5 h-5 text-blue-600 dark:text-blue-400" />
          <h2 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white">
            4 Aşamalı İçerik Hazırlama ve Doğrulama Sürecimiz
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          Bilgi Rotası’nda yayımlanan her rehber ve dijital hesaplama aracı, yayına alınmadan önce aşağıdaki dört kalite kontrol aşamasından geçer:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-800 space-y-1.5">
            <div className="flex items-center gap-2 text-xs font-extrabold text-blue-600 dark:text-blue-400">
              <CheckCircle2 className="w-4 h-4" />
              1. Birincil Kaynak ve Mevzuat Taraması
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              Konuyla ilgili Resmi Gazete kararları, ÖSYM başvuru kılavuzları, e-Devlet hizmet ekranları veya üretici teknik dokümanları doğrudan birincil kaynağından incelenir.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-800 space-y-1.5">
            <div className="flex items-center gap-2 text-xs font-extrabold text-blue-600 dark:text-blue-400">
              <CheckCircle2 className="w-4 h-4" />
              2. Uygulamalı Test ve Adımlandırma
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              Windows, Android, iOS ve oyun (CS2, Valorant vb.) rehberlerindeki menü adımları ile konsol komutları bizzat test edilerek güncel arayüz isimleriyle numaralandırılır.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-800 space-y-1.5">
            <div className="flex items-center gap-2 text-xs font-extrabold text-blue-600 dark:text-blue-400">
              <CheckCircle2 className="w-4 h-4" />
              3. Sadeleştirme ve Uyarı Kutuları
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              Kullanıcıların işlem sırasında hak veya veri kaybı yaşamaması için kritik noktalar (son başvuru süresi, yedekleme kontrolü, yaş barajı vb.) özel uyarı kutularıyla vurgulanır.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-800 space-y-1.5">
            <div className="flex items-center gap-2 text-xs font-extrabold text-blue-600 dark:text-blue-400">
              <CheckCircle2 className="w-4 h-4" />
              4. Periyodik Güncelleme ve Düzeltme
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              Yönetmelik, sınav katsayısı veya uygulama menüsü değişikliklerinde içeriklerimiz yeniden gözden geçirilir; okurlarımızdan gelen düzeltme talepleri 48 saat içinde değerlendirilir.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Tools Callout */}
      <section className="p-6 sm:p-8 rounded-3xl bg-blue-50/80 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-900 space-y-3">
        <div className="flex items-center gap-2.5">
          <Calculator className="w-5 h-5 text-blue-600 dark:text-blue-400" />
          <h2 className="text-base sm:text-lg font-extrabold text-slate-900 dark:text-white">
            Ücretsiz Dijital Hesaplama Araçlarımız
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
          Bilgi Rotası yalnızca metin rehberleri sunmakla kalmaz; öğrencilerin ve kullanıcıların günlük işlemlerini hızlandıran Vize-Final Not Hesaplama, TYT/AYT/DGS Net ve OBP Hesaplama, İnternet İndirme Süresi, KDV Matrahı ve Resmi Başvuru Yaş Şartı hesaplama araçlarını tamamen ücretsiz olarak sunar.
        </p>
        <div>
          <Link
            href="/araclar"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition-colors"
          >
            Hesaplama Araçlarını İncele &rarr;
          </Link>
        </div>
      </section>

      {/* Künye / Publisher Info */}
      <section className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 space-y-4">
        <div className="flex items-center gap-2.5">
          <Users className="w-5 h-5 text-blue-600 dark:text-blue-400" />
          <h2 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white">
            Kurumsal Künye ve İletişim Bilgileri
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-800">
            <span className="text-slate-400 font-semibold block mb-1">Yayın Adı &amp; Alan Adı</span>
            <p className="font-bold text-slate-900 dark:text-white">
              Bilgi Rotası (www.bilgirotasi.tr)
            </p>
          </div>
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-800">
            <span className="text-slate-400 font-semibold block mb-1">Yayın Sorumlusu &amp; Geliştirici</span>
            <p className="font-bold text-slate-900 dark:text-white">
              Konhan Software &amp; Bilgi Rotası Yayın Ekibi
            </p>
          </div>
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-800">
            <span className="text-slate-400 font-semibold block mb-1">Resmi E-Posta ve Okur Temsilcisi</span>
            <a
              href="mailto:konhansoftware@gmail.com"
              className="font-bold text-blue-600 dark:text-blue-400 underline flex items-center gap-1.5"
            >
              <Mail className="w-4 h-4" />
              konhansoftware@gmail.com
            </a>
          </div>
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-800">
            <span className="text-slate-400 font-semibold block mb-1">Yayın Dili ve Kapsamı</span>
            <p className="font-bold text-slate-900 dark:text-white">
              Türkçe (TR) &bull; Ulusal Rehber ve Dijital Araç Portalı
            </p>
          </div>
        </div>
      </section>

      {/* Quality & Disclaimer Badge */}
      <div className="p-6 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs sm:text-sm text-slate-700 dark:text-slate-300 flex items-start gap-4">
        <ShieldCheck className="w-8 h-8 text-blue-600 shrink-0 mt-0.5" />
        <div className="space-y-1">
          <h3 className="font-bold text-slate-900 dark:text-slate-100">
            Yasal Bilgilendirme ve Düzeltme Politikası
          </h3>
          <p>
            Bilgi Rotası bağımsız bir bilgilendirme ve dijital araç platformudur; herhangi bir resmi kamu kurumunun (e-Devlet, ÖSYM, GSB vb.) doğrudan temsilcisi değildir. Rehberlerimizde güncellenmesi gereken bir detay fark ettiğinizde <Link href="/iletisim" className="text-blue-600 dark:text-blue-400 underline font-semibold">İletişim</Link> sayfamızdaki form üzerinden bize bildirebilirsiniz.
          </p>
        </div>
      </div>
    </div>
  );
}
