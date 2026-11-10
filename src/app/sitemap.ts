import { MetadataRoute } from 'next';
import { posts } from '@/data/posts';
import { categories } from '@/data/categories';
import { tools } from '@/data/tools';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.bilgirotasi.tr';

  // 1. Static Pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0
    },
    {
      url: `${baseUrl}/araclar`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9
    },
    {
      url: `${baseUrl}/hakkimizda`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7
    },
    {
      url: `${baseUrl}/gizlilik-politikasi`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6
    },
    {
      url: `${baseUrl}/kullanim-kosullari`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6
    },
    {
      url: `${baseUrl}/iletisim`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7
    }
  ];

  // 2. Interactive Tool Pages
  const toolPages: MetadataRoute.Sitemap = tools.map((tool) => ({
    url: `${baseUrl}/araclar/${tool.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.9
  }));

  // 3. Category Pages
  const categoryPages: MetadataRoute.Sitemap = categories.map((cat) => ({
    url: `${baseUrl}/kategori/${cat.slug}`,
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: 0.9
  }));

  // 4. Post Pages
  const postPages: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${baseUrl}/kategori/${post.categorySlug}/${post.slug}`,
    lastModified: new Date(post.updatedAt || post.publishedAt || post.date || new Date()),
    changeFrequency: 'weekly',
    priority: 0.8
  }));

  return [...staticPages, ...toolPages, ...categoryPages, ...postPages];
}
