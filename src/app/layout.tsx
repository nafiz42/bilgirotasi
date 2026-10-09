import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/context/ThemeContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AdBanner from '@/components/AdBanner';
import { ADS_CONFIG } from '@/config/ads';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans'
});

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#090d16' }
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5
};

export const metadata: Metadata = {
  metadataBase: new URL('https://www.bilgirotasi.tr'),
  title: {
    default: 'Bilgi Rotası | Genel Bilgi, e-Devlet ve Nasıl Yapılır Rehberi',
    template: '%s | Bilgi Rotası'
  },
  description:
    'e-Devlet başvuruları, teknoloji ve mobil ayarlar, oyun FPS çözümleri, sınav hazırlıkları ve günlük pratik bilgiler için Türkiye’nin en kapsamlı rehber portalı.',
  keywords: [
    'rehber',
    'nasıl yapılır',
    'e-Devlet başvuruları',
    'teknoloji ipuçları',
    'oyun optimizasyonu',
    'YKS çalışma programı',
    'burs başvurusu',
    'pratik bilgiler'
  ],
  authors: [{ name: 'Bilgi Rotası Editör Ekibi' }],
  creator: 'Bilgi Rotası',
  publisher: 'Bilgi Rotası Medya',
  formatDetection: {
    email: false,
    address: false,
    telephone: false
  },
  alternates: {
    canonical: '/'
  },
  openGraph: {
    title: 'Bilgi Rotası | Genel Bilgi, e-Devlet ve Nasıl Yapılır Rehberi',
    description:
      'e-Devlet, teknoloji, donanım, eğitim ve yaşam rehberleri ile aradığınız tüm çözümler adım adım burada.',
    url: 'https://www.bilgirotasi.tr',
    siteName: 'Bilgi Rotası',
    locale: 'tr_TR',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bilgi Rotası | Genel Bilgi ve Rehber Portalı',
    description:
      'e-Devlet, teknoloji, donanım, eğitim ve yaşam rehberleri ile aradığınız tüm çözümler adım adım burada.',
    creator: '@bilgirotasi'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  ...(ADS_CONFIG.adClient && (ADS_CONFIG.enabled || ADS_CONFIG.enableVerificationScript)
    ? {
        other: {
          'google-adsense-account': ADS_CONFIG.adClient
        }
      }
    : {})
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Global WebSite Schema with SearchAction
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Bilgi Rotası',
    url: 'https://www.bilgirotasi.tr',
    description: 'Genel Bilgi, e-Devlet ve Nasıl Yapılır Rehberi',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://www.bilgirotasi.tr/ara?q={search_term_string}'
      },
      'query-input': 'required name=search_term_string'
    }
  };

  return (
    <html lang="tr" suppressHydrationWarning className={inter.variable}>
      <head>
        {ADS_CONFIG.adClient && (ADS_CONFIG.enabled || ADS_CONFIG.enableVerificationScript) && (
          <script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADS_CONFIG.adClient}`}
            crossOrigin="anonymous"
          />
        )}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="min-h-screen bg-slate-50 dark:bg-[#090d16] text-slate-900 dark:text-slate-100 antialiased selection:bg-blue-500 selection:text-white transition-colors duration-200">
        <ThemeProvider>
          {/* Header Navigation */}
          <Header />

          {/* Header Altı Reklam Alanı (Arka planda hazır, ön planda reklamlar kapalıyken render edilmez) */}
          <AdBanner type="header" />

          {/* Main Page Content */}
          <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
            {children}
          </main>

          {/* Footer */}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
