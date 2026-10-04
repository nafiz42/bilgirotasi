export interface Category {
  id: string;
  slug: string;
  title: string;
  description: string;
  iconName: string;
  badgeColor: string;
  featuredCount?: number;
}

export interface Author {
  id: string;
  name: string;
  avatar: string;
  role: string;
  bio: string;
  socials?: {
    twitter?: string;
    linkedin?: string;
    website?: string;
  };
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface PostStep {
  title: string;
  description: string;
}

export interface Post {
  id: string;
  slug: string;
  title: string;
  description: string;
  categorySlug: string;
  authorId: string;
  publishedAt: string;
  updatedAt: string;
  readTime: string;
  viewCount: number;
  featured?: boolean;
  trending?: boolean;
  coverImage: string;
  tags: string[];
  content: {
    lead: string;
    sections: {
      id: string;
      heading: string;
      paragraphs: string[];
      steps?: PostStep[];
      callout?: {
        type: 'info' | 'warning' | 'tip';
        title: string;
        message: string;
      };
    }[];
  };
  faqs: FaqItem[];
}

export interface SearchResult {
  post: Post;
  category: Category;
}
