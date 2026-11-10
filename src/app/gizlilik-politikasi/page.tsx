import React from 'react';
import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import { Shield, Cookie, Lock, UserCheck, FileText, Calculator } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Gizlilik Politikası ve Çerez Aydınlatma Metni',
  description:
    'Bilgi Rotası gizlilik politikası, KVKK aydınlatma metni, çerez (cookie) kullanımı, Google AdSense DART çerezleri ve hesaplama araçları veri güvenliği ilkeleri.',
  alternates: {
    canonical: '/gizlilik-politikasi'
  }
};

export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <Breadcrumbs items={[{ label: 'Gizlilik Politikası' }]} />

      <div className="p-8 sm:p-10 rounded-3xl bg-slate-900 text-white space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-semibold">
          <Shield className="w-3.5 h-3.5" />
          <span>KVKK ve Çerez Güvenliği Politikası</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-black">
          Gizlilik Politikası ve Çerez Aydınlatma Metni
        </h1>
        <p className="text-xs sm:text-sm text-slate-300">
          Son Güncelleme: 01 Kasım 2026 &bull; Bilgi Rotası (www.bilgirotasi.tr)
        </p>
      </div>

      <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 space-y-8 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
        
        <section className="space-y-3">
          <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
            <Lock className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            1. Genel Bakış ve Veri Sorumlusu
          </h2>
          <p>
            Bilgi Rotası (<strong>www.bilgirotasi.tr</strong>) olarak ziyaretçilerimizin kişisel verilerinin korunmasına ve gizlilik haklarına büyük önem veriyoruz. İşbu Gizlilik Politikası; sitemizi ziyaret ettiğinizde, rehberlerimizi okuduğunuzda, dijital hesaplama araçlarımızı kullandığınızda veya iletişim formumuz üzerinden bizimle irtibata geçtiğinizde hangi verilerin hangi amaçlarla işlendiğini 6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) kapsamında açıklar.
          </p>
          <p>
            İletişim sayfasındaki geri bildirim formu aracılığıyla kendi isteğinizle paylaştığınız ad, e-posta adresi ve mesaj içeriği yalnızca talebinize yanıt vermek veya bildirdiğiniz içerik düzeltmesini gerçekleştirmek amacıyla kullanılır; hiçbir koşulda üçüncü taraf pazarlama şirketleriyle paylaşılmaz.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
            <Calculator className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            2. Dijital Hesaplama Araçlarında Veri Güvenliği
          </h2>
          <p>
            Sitemizin <strong>/araclar</strong> bölümünde yer alan Vize-Final Not Hesaplama, TYT-AYT-DGS Net Hesaplama, İnternet İndirme Süresi, KDV Matrahı, Kelime Sayacı ve Yaş Hesaplama araçlarına girdiğiniz tüm sayısal veriler, metinler ve tarihler <strong>yalnızca kendi internet tarayıcınız (istemci tarafı / client-side) üzerinde</strong> anlık olarak işlenir. Bu veriler sunucularımıza gönderilmez, veritabanında saklanmaz ve kayıt altına alınmaz.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
            <Cookie className="w-4 h-4 text-amber-500" />
            3. Çerezler (Cookies) ve Google AdSense Politikası
          </h2>
          <p>
            Sitemizde kullanıcı deneyimini iyileştirmek (örneğin açık/koyu tema tercihinizi tarayıcı yerel depolama alanında hatırlamak), site trafiğini anonim olarak analiz etmek ve reklam hizmetlerini sunmak amacıyla çerezler (cookies) kullanılabilmektedir.
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-slate-600 dark:text-slate-400">
            <li>
              <strong>Üçüncü Taraf Çerezleri ve Google AdSense:</strong> Üçüncü taraf satıcı olarak Google, sitemizde reklam yayınlamak için çerezlerden (DART çerezi dahil) yararlanabilir. Bu çerezler, kullanıcıların sitemizi ve internetteki diğer siteleri önceki ziyaretlerine dayalı olarak ilgi alanına uygun reklamlar sunulmasını sağlar.
            </li>
            <li>
              <strong>Kişiselleştirilmiş Reklamları Yönetme:</strong> Ziyaretçilerimiz, <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 underline">Google Reklam Ayarları</a> sayfasını ziyaret ederek kişiselleştirilmiş reklamcılık çerezlerini diledikleri zaman devre dışı bırakabilirler.
            </li>
            <li>
              <strong>Tarayıcı Çerez Kontrolü:</strong> Kullandığınız web tarayıcısının (Chrome, Safari, Firefox, Edge) ayarlar menüsünden çerezleri tamamen engelleyebilir veya mevcut çerezleri silebilirsiniz.
            </li>
          </ul>
          <p>
            Google’ın reklamcılıkta verileri nasıl kullandığı hakkında daha kapsamlı bilgi için{' '}
            <a href="https://policies.google.com/technologies/partner-sites?hl=tr" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Google İş Ortaklarının Siteleri veya Uygulamalarını Kullandığınızda Google Verileri Nasıl Kullanır?</a>{' '}
            sayfasını inceleyebilirsiniz.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
            <FileText className="w-4 h-4 text-blue-600" />
            4. Sunucu Günlük Kayıtları (Log Files)
          </h2>
          <p>
            Standart tüm web sunucularında olduğu gibi barındırma altyapımız; siber güvenliğin sağlanması ve teknik hataların tespiti amacıyla IP adresi türü, tarayıcı sürümü, yönlendiren sayfa ve ziyaret saati gibi anonim teknik günlük kayıtlarını (log files) geçici olarak işleyebilir. Bu veriler kimlik tespiti amacıyla kullanılmaz.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
            <UserCheck className="w-4 h-4 text-emerald-500" />
            5. KVKK Kapsamında Kullanıcı Hakları ve İletişim
          </h2>
          <p>
            6698 sayılı KVKK’nın 11. maddesi uyarınca herkes veri sorumlusuna başvurarak kendisiyle ilgili kişisel veri işlenip işlenmediğini öğrenme, işlenmişse bilgi talep etme, düzeltilmesini veya silinmesini isteme hakkına sahiptir. Gizlilik politikamızla ilgili her türlü soru ve talebiniz için <a href="mailto:konhansoftware@gmail.com" className="text-blue-600 dark:text-blue-400 underline font-semibold">konhansoftware@gmail.com</a> adresinden veya <a href="/iletisim" className="text-blue-600 dark:text-blue-400 underline font-semibold">İletişim</a> sayfamızdan bize ulaşabilirsiniz.
          </p>
        </section>

      </div>
    </div>
  );
}
