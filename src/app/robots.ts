import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://www.bilgirotasi.tr';

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/']
      },
      {
        userAgent: 'Mediapartners-Google',
        allow: '/'
      },
      {
        userAgent: 'AdsBot-Google',
        allow: '/'
      }
    ],
    sitemap: `${baseUrl}/sitemap.xml`
  };
}
