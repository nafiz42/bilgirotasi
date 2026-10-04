import { Category } from '@/types';

export const categories: Category[] = [
  {
    id: '1',
    slug: 'e-devlet-basvurular',
    title: 'e-Devlet & Başvurular',
    description: 'Resmi kurum işlemleri, devlet yardımları, burs başvuruları ve adım adım başvuru kılavuzları.',
    iconName: 'Building2',
    badgeColor: 'bg-blue-600/10 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400 border-blue-200 dark:border-blue-800'
  },
  {
    id: '2',
    slug: 'teknoloji-mobil',
    title: 'Teknoloji & Mobil',
    description: 'Akıllı telefon ayarları, popüler uygulama ipuçları, sosyal medya çözümleri ve teknoloji rehberleri.',
    iconName: 'Smartphone',
    badgeColor: 'bg-emerald-600/10 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800'
  },
  {
    id: '3',
    slug: 'oyun-donanim',
    title: 'Oyun & Donanım',
    description: 'PC donanım tavsiyeleri, oyun hata çözümleri, konsol ayarları ve FPS artırma yöntemleri.',
    iconName: 'Gamepad2',
    badgeColor: 'bg-purple-600/10 text-purple-600 dark:bg-purple-500/20 dark:text-purple-400 border-purple-200 dark:border-purple-800'
  },
  {
    id: '4',
    slug: 'egitim-sinavlar',
    title: 'Eğitim & Sınavlar',
    description: 'YKS, KPSS, DGS, ÖSYM duyuruları, üniversite tercih rehberi ve etkili ders çalışma teknikleri.',
    iconName: 'GraduationCap',
    badgeColor: 'bg-amber-600/10 text-amber-600 dark:bg-amber-500/20 dark:text-amber-400 border-amber-200 dark:border-amber-800'
  },
  {
    id: '5',
    slug: 'pratik-bilgiler',
    title: 'Pratik Bilgiler',
    description: 'Günlük hayatı kolaylaştıran pratik çözümler, ev & yaşam tüyoları ve hızlı nasıl yapılır rehberleri.',
    iconName: 'Lightbulb',
    badgeColor: 'bg-rose-600/10 text-rose-600 dark:bg-rose-500/20 dark:text-rose-400 border-rose-200 dark:border-rose-800'
  }
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
