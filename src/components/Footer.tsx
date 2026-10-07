import React from 'react';
import Link from 'next/link';
import { Compass, ShieldCheck, Mail, FileText, HelpCircle } from 'lucide-react';
import { categories } from '@/data/categories';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-950 text-slate-600 dark:text-slate-400 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          
          {/* Brand info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-sm">
                <Compass className="w-5 h-5" />
              </div>
              <span className="text-lg font-black text-slate-900 dark:text-white">
                Bilgi<span className="text-blue-600 dark:text-blue-400">Rotası</span>
              </span>
            </Link>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed max-w-sm">
              Türkiye&apos;nin en güncel, sade ve doğrulanmış bilgi rehberi. e-Devlet işlemleri, mobil teknoloji ayarları, donanım optimizasyonları ve sınav süreçlerinde adım adım yanınızdayız.
            </p>
            <div className="flex items-center gap-3 pt-2 text-xs">
              <span className="inline-flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-medium">
                <ShieldCheck className="w-4 h-4" />
                Doğrulanmış İçerikler
              </span>
              <span className="text-slate-300 dark:text-slate-700">&bull;</span>
              <span>Hızlı ve Güvenilir</span>
            </div>
          </div>

          {/* Categories */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-100">
              Kategoriler
            </h4>
            <ul className="space-y-2 text-xs">
              {categories.map((c) => (
                <li key={c.id}>
                  <Link
                    href={`/kategori/${c.slug}`}
                    className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    {c.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links / Guide */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-100">
              Popüler Rehberler
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link
                  href="/kategori/e-devlet-basvurular/kyk-burs-ve-ogrenim-kredisi-basvurusu-nasil-yapilir"
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  KYK Burs Başvurusu
                </Link>
              </li>
              <li>
                <Link
                  href="/kategori/oyun-donanim/oyunlarda-fps-artirma-ve-gecikme-azaltma-rehberi"
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Oyunlarda FPS Artırma
                </Link>
              </li>
              <li>
                <Link
                  href="/kategori/e-devlet-basvurular/e-devlet-uzerinden-ikametgah-adresi-degistirme-rehberi"
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Online İkametgah Değiştirme
                </Link>
              </li>
              <li>
                <Link
                  href="/kategori/egitim-sinavlar/yks-calisma-programi-hazirlama-ve-net-artirma-taktikleri"
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  YKS Çalışma Takvim &amp; Netler
                </Link>
              </li>
            </ul>
          </div>

          {/* Corporate / AdSense Mandated Pages */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-100">
              Kurumsal &amp; Yasal
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link
                  href="/hakkimizda"
                  className="flex items-center gap-1.5 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <HelpCircle className="w-3.5 h-3.5" />
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link
                  href="/gizlilik-politikasi"
                  className="flex items-center gap-1.5 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Gizlilik Politikası (Privacy)
                </Link>
              </li>
              <li>
                <Link
                  href="/kullanim-kosullari"
                  className="flex items-center gap-1.5 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <FileText className="w-3.5 h-3.5" />
                  Kullanım Koşulları
                </Link>
              </li>
              <li>
                <Link
                  href="/iletisim"
                  className="flex items-center gap-1.5 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <Mail className="w-3.5 h-3.5" />
                  İletişim &amp; Reklam
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar & AdSense Legal Notice */}
        <div className="mt-12 pt-6 border-t border-slate-200/70 dark:border-slate-800/80 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400 dark:text-slate-500">
          <p>
            &copy; {currentYear} Bilgi Rotası. Tüm hakları saklıdır. Sitemizde yer alan rehberler bilgilendirme amaçlıdır.
          </p>
          <div className="flex items-center gap-4 text-[11px]">
            <span>Güvenli &amp; Özgün İçerik</span>
            <span>&bull;</span>
            <Link href="/gizlilik-politikasi" className="underline hover:text-slate-600 dark:hover:text-slate-300">
              Çerez Tercihleri
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
