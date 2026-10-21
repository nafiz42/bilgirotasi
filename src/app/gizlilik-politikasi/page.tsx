import React from 'react';
import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import { Shield, Cookie, Lock, UserCheck, FileText } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Gizlilik Politikası ve Çerez Aydınlatma Metni',
  description:
    'Bilgi Rotası’nın AdSense etiketi, çerezler ve gizlilikle ilgili uygulamalarına dair açıklama.',
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
          Son Güncelleme: 22 Ekim 2026 &bull; Bilgi Rotası (bilgirotasi.tr)
        </p>
      </div>

      <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 space-y-8 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
        
        <section className="space-y-3">
          <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
            <Lock className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            1. Genel Bakış ve Veri Sorumlusu
          </h2>
          <p>
            Bu sayfa, Bilgi Rotası’nda kullanılan reklam etiketi ve ziyaretçilerin gizlilik tercihleri hakkında mevcut bilgileri açıklar. Sitedeki uygulamalar veya hizmet sağlayıcılar değiştikçe bu metin de güncellenmelidir.
          </p>
          <p>
            Sitede ziyaretçi hesabı, yorum veya iletişim formu bulunmamaktadır. Sunucu ve barındırma sağlayıcısının teknik kayıt tutup tutmadığı ve saklama süreleri için ilgili sağlayıcının koşullarına bakın.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
            <Cookie className="w-4 h-4 text-amber-500" />
            2. Google reklam etiketi ve çerezler
          </h2>
          <p>
            Bu sitede Google AdSense reklam etiketi yüklenmektedir; mevcut ayarda reklam alanları gösterime kapalıdır. Google, reklam isteği veya reklamla ilgili etkinlik gerçekleştiğinde çerez ve benzeri teknolojiler kullanabilir. Kullanım; Google hesabı, reklam ayarları, yayıncı ayarları ve kullanıcının bulunduğu bölgeye göre değişebilir. Bu nedenle sitede reklam gösterilmemesi, Google etiketinin hiç yüklenmediği anlamına gelmez.
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-slate-600 dark:text-slate-400">
            <li>
              Google ve üçüncü taraf sağlayıcıların reklam, ölçüm ve güvenlik amaçlı çerez/yerel depolama kullanımı seçilen reklam ayarlarına bağlı olabilir.
            </li>
            <li>
              Kişiselleştirilmiş reklam tercihleri Google hesabındaki reklam ayarlarından yönetilebilir. Reklam kişiselleştirme kapalı olsa bile ölçüm, sıklık sınırlama veya güvenlik amaçlı bazı teknolojiler kullanılabilir.
            </li>
            <li>
              Kullanıcılar, <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 underline">Google Reklam Ayarları</a> sayfasını ziyaret ederek kişiselleştirilmiş reklamcılığı devre dışı bırakabilirler.
            </li>
          </ul>
          <p>
            Google’ın yayıncı ürünleri için açıkladığı veri ve teknoloji kullanım ayrıntıları için{' '}
            <a href="https://support.google.com/adsense/answer/7549925?hl=tr" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">AdSense çerezleri açıklamasını</a>{' '}
            ve <a href="https://support.google.com/adsense/answer/10502938?hl=tr" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Google yayıncı politikalarını</a> inceleyin.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
            <FileText className="w-4 h-4 text-blue-600" />
            3. Kayıt Dosyaları (Log Files)
          </h2>
          <p>
            Ziyaret sırasında barındırma altyapısı, güvenlik ve hizmetin çalışması için teknik günlükler oluşturabilir. Bu kayıtların kapsamı, saklama süresi ve erişimi barındırma sağlayıcısının yapılandırmasına bağlıdır; Bilgi Rotası bu sayfada belirli bir saklama süresi veya anonimleştirme garantisi vermez.
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
