import { Author } from '@/types';

export const authors: Author[] = [
  {
    id: 'author-1',
    name: 'Murat Yıldız',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80',
    role: 'Kıdemli Teknoloji ve Dijital Rehber Editörü',
    bio: '10 yılı aşkın süredir kamu bilişim sistemleri, e-Devlet servisleri ve tüketici teknolojileri alanında rehber içerikler üretiyor. Kullanıcıların karmaşık bürokratik ve dijital adımları en hızlı şekilde tamamlamasına yardımcı oluyor.',
    socials: {
      twitter: 'https://twitter.com',
      linkedin: 'https://linkedin.com'
    }
  },
  {
    id: 'author-2',
    name: 'Selin Demir',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&auto=format&fit=crop&q=80',
    role: 'Eğitim & Kariyer Danışmanı',
    bio: 'ÖSYM sınav sistemleri, üniversite bursları ve kariyer planlama üzerine uzmanlaşmış rehber yazarı. Öğrencilerin sınav ve başvuru süreçlerini kolaylaştıran pratik rehberler hazırlıyor.',
    socials: {
      twitter: 'https://twitter.com',
      linkedin: 'https://linkedin.com'
    }
  },
  {
    id: 'author-3',
    name: 'Emre Çakır',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80',
    role: 'Donanım ve Oyun Sistemleri Uzmanı',
    bio: 'PC donanımı, FPS optimizasyonu, yazılım sorunları ve güncel oyun rehberleri konusunda testler gerçekleştirip detaylı çözüm yolları sunan kıdemli editör.',
    socials: {
      twitter: 'https://twitter.com'
    }
  }
];

export function getAuthorById(id: string): Author | undefined {
  return authors.find((a) => a.id === id);
}
