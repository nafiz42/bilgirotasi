import React from 'react';
import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import { Shield, Cookie, Lock, UserCheck, FileText } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Gizlilik Politikası ve Çerez Aydınlatma Metni',
  description:
    'Bilgi Rotası kullanıcı gizliliği, Google AdSense çerezleri, kişisel verilerin korunması ve KVKK/GDPR uyumluluk bildirimi.',
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
          Gizlilik Politikası ve Çerezler (Cookies)
        </h1>
        <p className="text-xs sm:text-sm text-slate-300">
          Son Güncelleme: 05 Ekim 2026 &bull; Bilgi Rotası (bilgirotasi.tr)
        </p>
      </div>

      <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 space-y-8 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
        
        <section className="space-y-3">
          <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
            <Lock className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            1. Genel Bakış ve Veri Sorumlusu
          </h2>
          <p>
            Bilgi Rotası olarak ziyaretçilerimizin gizliliğine büyük önem vermekteyiz. Bu Gizlilik Politikası belgesi, Bilgi Rotası tarafından hangi tür kişisel ve anonim bilgilerin toplandığını, kaydedildiğini ve bu bilgilerin nasıl kullanıldığını açıklamaktadır.
          </p>
          <p>
            6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) ve Avrupa Genel Veri Koruma Tüzüğü (GDPR) kapsamında veri sorumlusu sıfatıyla hareket etmekteyiz.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
            <Cookie className="w-4 h-4 text-amber-500" />
            2. Google AdSense ve DoubleClick DART Çerezleri
          </h2>
          <p>
            Google, web sitemizde üçüncü taraf satıcı olarak reklam yayınlamak amacıyla çerezlerden (cookies) yararlanır. Google&apos;ın DART çerezlerini kullanması, kullanıcılarımıza sitemize ve internetteki diğer sitelere yaptıkları ziyaretlere dayalı reklamlar sunmasını sağlar.
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-slate-600 dark:text-slate-400">
            <li>
              Google dahil üçüncü taraf satıcılar, web sitemize daha önce yaptığınız ziyaretlere veya internetteki diğer sitelere dayalı olarak reklam yayınlamak için çerez kullanır.
            </li>
            <li>
              Google&apos;ın reklam çerezlerini kullanması, Google ve iş ortaklarının kullanıcılarımıza siteniz ve/veya internetteki diğer sitelerdeki ziyaretlerine dayalı reklamlar sunmasına olanak tanır.
            </li>
            <li>
              Kullanıcılar, <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 underline">Google Reklam Ayarları</a> sayfasını ziyaret ederek kişiselleştirilmiş reklamcılığı devre dışı bırakabilirler.
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
            <FileText className="w-4 h-4 text-blue-600" />
            3. Kayıt Dosyaları (Log Files)
          </h2>
          <p>
            Diğer pek çok web sitesi gibi Bilgi Rotası da standart log dosyaları kullanır. Bu dosyalar yalnızca siteye gelen ziyaretçileri kaydeder; internet servis sağlayıcısı (ISP), internet protokolü (IP) adresleri, tarayıcı türü, tarih/saat damgaları ve yönlendiren sayfaları kapsar. Bu bilgiler kişisel olarak tanımlanabilir bilgilerle bağlantılı değildir; yalnızca trendleri analiz etmek, siteyi yönetmek ve kullanıcı hareketlerini izlemek amacıyla kullanılır.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
            <UserCheck className="w-4 h-4 text-emerald-500" />
            4. Kullanıcı Hakları ve İletişim
          </h2>
          <p>
            KVKK madde 11 uyarınca, herkes veri sorumlusuna başvurarak kendisiyle ilgili kişisel veri işlenip işlenmediğini öğrenme, işlenmişse buna ilişkin bilgi talep etme ve silinmesini isteme hakkına sahiptir. Gizlilik politikamızla ilgili herhangi bir sorunuz olması halinde <a href="/iletisim" className="text-blue-600 dark:text-blue-400 underline">İletişim</a> sayfamızdan bizimle irtibat kurabilirsiniz.
          </p>
        </section>

      </div>
    </div>
  );
}
