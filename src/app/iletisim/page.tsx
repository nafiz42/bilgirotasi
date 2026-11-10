import React from 'react';
import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import ContactForm from '@/components/ContactForm';
import { Mail, Megaphone, MessageSquare, Clock, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'İletişim, Geri Bildirim ve Reklam',
  description:
    'Bilgi Rotası editör ekibiyle iletişime geçin. İçerik düzeltme talepleri, yeni hesaplama aracı önerileri ve reklam/iş birliği başvuruları için iletişim formu.',
  alternates: { canonical: '/iletisim' }
};

export default function ContactPage() {
  const contactSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'İletişim - Bilgi Rotası',
    url: 'https://www.bilgirotasi.tr/iletisim',
    mainEntity: {
      '@type': 'Organization',
      name: 'Bilgi Rotası',
      email: 'konhansoftware@gmail.com',
      url: 'https://www.bilgirotasi.tr'
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />

      <Breadcrumbs items={[{ label: 'İletişim' }]} />

      <header className="rounded-3xl bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 p-8 text-white sm:p-10 space-y-3 shadow-xl">
        <div className="inline-flex items-center gap-2 rounded-full bg-blue-500/20 px-3 py-1 text-xs font-semibold text-blue-200 border border-blue-400/20">
          <MessageSquare className="h-4 w-4" />
          Okur Temsilcisi &amp; Kurumsal İletişim
        </div>
        <h1 className="text-2xl font-black sm:text-4xl">
          Bilgi Rotası ile İletişime Geçin
        </h1>
        <p className="max-w-2xl text-sm leading-relaxed text-slate-300">
          Rehberlerimizde veya hesaplama araçlarımızda güncellenmesini istediğiniz bir detayı bildirmek, yeni bir konu önerisinde bulunmak ya da kurumsal iş birliği taleplerinizi iletmek için aşağıdaki iletişim formunu veya doğrudan e-posta adresimizi kullanabilirsiniz.
        </p>
      </header>

      {/* Direct Email Cards */}
      <section className="grid gap-5 sm:grid-cols-3" aria-label="İletişim Kanalları">
        <a
          href="mailto:konhansoftware@gmail.com"
          className="rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-blue-400 dark:border-slate-800 dark:bg-slate-900 space-y-2"
        >
          <Mail className="h-6 w-6 text-blue-600 dark:text-blue-400" />
          <h2 className="text-sm font-bold text-slate-900 dark:text-slate-100">
            Editör &amp; İçerik Düzeltme
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Mevzuat veya ekran adımı güncellemeleri için:
          </p>
          <p className="text-xs font-bold text-blue-700 underline dark:text-blue-300">
            konhansoftware@gmail.com
          </p>
        </a>

        <a
          href="mailto:konhansoftware@gmail.com"
          className="rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-blue-400 dark:border-slate-800 dark:bg-slate-900 space-y-2"
        >
          <Megaphone className="h-6 w-6 text-amber-600 dark:text-amber-400" />
          <h2 className="text-sm font-bold text-slate-900 dark:text-slate-100">
            Reklam &amp; Sponsorluk
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Tanıtım, iş birliği ve kurumsal talepler için:
          </p>
          <p className="text-xs font-bold text-blue-700 underline dark:text-blue-300">
            konhansoftware@gmail.com
          </p>
        </a>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900 space-y-2">
          <Clock className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
          <h2 className="text-sm font-bold text-slate-900 dark:text-slate-100">
            Yanıt Süresi Standardımız
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Okur geri bildirimleri ve düzeltme talepleri hafta içi en geç <strong>24 – 48 saat</strong> içinde incelenerek yanıtlanır.
          </p>
        </div>
      </section>

      {/* Interactive Contact Form */}
      <ContactForm />

      {/* Legal Note */}
      <div className="p-5 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-start gap-3 text-xs text-slate-600 dark:text-slate-400">
        <ShieldCheck className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
        <p>
          <strong>Önemli Hatırlatma:</strong> Bilgi Rotası resmi bir devlet kurumu değildir. Lütfen iletişim formunda T.C. Kimlik Numarası, e-Devlet şifresi, banka hesap bilgisi veya özel nitelikli kişisel verilerinizi <strong>paylaşmayın</strong>.
        </p>
      </div>
    </div>
  );
}
