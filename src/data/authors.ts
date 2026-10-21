import { Author } from '@/types';

export const authors: Author[] = [
  {
    id: 'author-1',
    name: 'Bilgi Rotası Editör Ekibi',
    avatar: '',
    role: 'Yayın ekibi',
    bio: 'Rehberler, konunun türüne göre ilgili kurumların veya hizmet sağlayıcıların yayımladığı bilgilere dayanır. Değişebilen işlemlerde kullanıcıların resmi kaynağı kontrol etmesi önerilir.'
  }
];

export function getAuthorById(id: string): Author | undefined {
  return authors.find((a) => a.id === id);
}
