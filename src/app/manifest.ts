import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Bilgi Rotası | Genel Bilgi, e-Devlet ve Dijital Araçlar',
    short_name: 'Bilgi Rotası',
    description:
      'e-Devlet başvuruları, teknoloji ve mobil ayarlar, sınav hazırlıkları ve interaktif dijital hesaplama araçları.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#2563eb',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon'
      }
    ]
  };
}
