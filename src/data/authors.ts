import { Author } from '@/types';

export const authors: Author[] = [
  {
    id: 'author-1',
    name: 'Bilgi Rotası',
    avatar: '',
    role: 'Editör ve Araştırma Ekibi',
    bio: 'Bilgi Rotası editör ekibi; e-Devlet başvuruları, ÖSYM sınav süreçleri, donanım/yazılım optimizasyonu ve günlük yaşam rehberlerini birincil resmi kaynakları ve uygulama ekranlarını test ederek hazırlar.'
  }
];

export function getAuthorById(id: string): Author | undefined {
  return authors.find((a) => a.id === id);
}
