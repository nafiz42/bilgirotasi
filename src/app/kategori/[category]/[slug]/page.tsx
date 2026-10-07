import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getPostBySlug, getRelatedPosts, posts } from '@/data/posts';
import { Post } from '@/types';
import { getCategoryBySlug } from '@/data/categories';
import { getAuthorById, authors } from '@/data/authors';
import Breadcrumbs from '@/components/Breadcrumbs';
import TableOfContents from '@/components/TableOfContents';
import SocialShare from '@/components/SocialShare';
import FaqAccordion from '@/components/FaqAccordion';
import AuthorBio from '@/components/AuthorBio';
import ArticleCard from '@/components/ArticleCard';
import SidebarWidgets from '@/components/SidebarWidgets';
import AdBanner from '@/components/AdBanner';
import {
  Calendar,
  Clock,
  Eye,
  AlertCircle,
  Lightbulb,
  ShieldCheck,
  RefreshCw
} from 'lucide-react';

interface ArticlePageProps {
  params: Promise<{
    category: string;
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return posts.map((p) => ({
    category: p.categorySlug,
    slug: p.slug
  }));
}

const defaultCovers: Record<string, string> = {
  'e-devlet-basvurular': 'https://images.unsplash.com/photo-1450133064473-71024230f91b?w=1200&auto=format&fit=crop&q=80',
  'teknoloji-mobil': 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=1200&auto=format&fit=crop&q=80',
  'oyun-donanim': 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1200&auto=format&fit=crop&q=80',
  'egitim-sinavlar': 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1200&auto=format&fit=crop&q=80',
  'pratik-bilgiler': 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1200&auto=format&fit=crop&q=80'
};

interface NormalizedContent {
  lead: string;
  sections: {
    id: string;
    heading: string;
    paragraphs: string[];
    steps?: { title: string; description: string }[];
    callout?: {
      type: 'info' | 'warning' | 'tip';
      title: string;
      message: string;
    };
  }[];
}

function normalizePostContent(content: Post['content'], fallbackLead: string): NormalizedContent {
  if (typeof content !== 'string') {
    return content;
  }

  const parts = content.split(/^##\s+/m);
  let lead = fallbackLead;
  const sections: NormalizedContent['sections'] = [];

  parts.forEach((part, index) => {
    if (!part.trim()) return;

    if (index === 0 && !content.trim().startsWith('##')) {
      lead = part.trim();
      return;
    }

    const lines = part.trim().split('\n');
    const heading = lines[0].trim();
    const bodyLines = lines.slice(1);

    const paragraphs: string[] = [];
    const steps: { title: string; description: string }[] = [];
    let callout: NormalizedContent['sections'][0]['callout'] | undefined;

    bodyLines.forEach((rawLine) => {
      const line = rawLine.trim();
      if (!line) return;

      const stepMatch = line.match(/^(\d+)\.\s+\*\*(.*?)\*\*:?\s*(.*)$/);
      if (stepMatch) {
        steps.push({
          title: stepMatch[2].trim(),
          description: stepMatch[3].trim()
        });
        return;
      }

      if (line.startsWith('* **') && line.includes(':**')) {
        const itemMatch = line.match(/^\*\s+\*\*(.*?)\*\*:?\s*(.*)$/);
        if (itemMatch && !callout) {
          callout = {
            type: 'tip',
            title: itemMatch[1].trim(),
            message: itemMatch[2].trim()
          };
          return;
        }
      }

      paragraphs.push(line.replace(/^\*\s+/, '• '));
    });

    const slugId = heading
      .toLowerCase()
      .replace(/[^a-z0-9ğüşıöç\s-]/gi, '')
      .trim()
      .replace(/\s+/g, '-');

    sections.push({
      id: slugId || `section-${index}`,
      heading,
      paragraphs,
      steps: steps.length > 0 ? steps : undefined,
      callout
    });
  });

  return { lead, sections };
}

export async function generateMetadata({
  params
}: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: 'Rehber Bulunamadı'
    };
  }

  const category = getCategoryBySlug(post.categorySlug);
  const author = getAuthorById(post.authorId || 'author-1') || authors[0];
  const coverImage = post.coverImage || defaultCovers[post.categorySlug] || defaultCovers['pratik-bilgiler'];
  const pubDate = post.publishedAt || post.date || '2026-10-07';
  const updDate = post.updatedAt || post.date || pubDate;
  const tags = post.tags && post.tags.length > 0 ? post.tags : [category?.title || 'Rehber', 'Nasıl Yapılır'];

  return {
    title: post.title,
    description: post.description,
    keywords: tags,
    authors: author ? [{ name: author.name }] : undefined,
    alternates: {
      canonical: `/kategori/${post.categorySlug}/${post.slug}`
    },
    openGraph: {
      title: `${post.title} | Bilgi Rotası`,
      description: post.description,
      type: 'article',
      publishedTime: pubDate,
      modifiedTime: updDate,
      section: category?.title,
      tags: tags,
      images: [
        {
          url: coverImage,
          width: 1200,
          height: 630,
          alt: post.title
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: [coverImage]
    }
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { category: categorySlug, slug } = await params;
  const post = getPostBySlug(slug);

  if (!post || post.categorySlug !== categorySlug) {
    notFound();
  }

  const category = getCategoryBySlug(post.categorySlug);
  const author = getAuthorById(post.authorId || 'author-1') || authors[0];
  const relatedPosts = getRelatedPosts(post.id, post.categorySlug, 3);
  const coverImage = post.coverImage || defaultCovers[post.categorySlug] || defaultCovers['pratik-bilgiler'];
  const viewCount = post.viewCount ?? 16800;
  const pubDate = post.publishedAt || post.date || '2026-10-07';
  const updDate = post.updatedAt || post.date || pubDate;
  const tags = post.tags && post.tags.length > 0 ? post.tags : [category?.title || 'Rehber', 'Nasıl Yapılır'];
  const faqs = post.faqs || [];

  const normalizedContent = normalizePostContent(post.content, post.description);

  const formattedPublishedDate = new Date(pubDate).toLocaleDateString('tr-TR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  const formattedUpdatedDate = new Date(updDate).toLocaleDateString('tr-TR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  // Table of Contents sections
  const tocSections = normalizedContent.sections.map((s) => ({
    id: s.id,
    heading: s.heading
  }));

  // JSON-LD Article Schema
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    image: [coverImage],
    datePublished: pubDate,
    dateModified: updDate,
    author: {
      '@type': 'Person',
      name: author?.name || 'Bilgi Rotası Editörü',
      url: 'https://www.bilgirotasi.tr/hakkimizda'
    },
    publisher: {
      '@type': 'Organization',
      name: 'Bilgi Rotası',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.bilgirotasi.tr/logo.png'
      }
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://www.bilgirotasi.tr/kategori/${post.categorySlug}/${post.slug}`
    }
  };

  return (
    <>
      {/* Schema.org Article Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <div className="space-y-6">
        {/* Breadcrumb Navigation: Ana Sayfa > Kategori > Yazı Başlığı */}
        <Breadcrumbs
          items={[
            {
              label: category?.title || 'Kategori',
              href: `/kategori/${post.categorySlug}`
            },
            {
              label: post.title
            }
          ]}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Main Article Body (8 Cols) */}
          <main className="lg:col-span-8">
            <article className="space-y-6">
              
              {/* Header Info */}
              <div className="space-y-4">
                <div className="flex flex-wrap items-center gap-2">
                  {category && (
                    <span className={`text-xs font-bold px-3 py-1 rounded-full border ${category.badgeColor}`}>
                      {category.title}
                    </span>
                  )}
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    Doğrulanmış Bilgi
                  </span>
                </div>

                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
                  {post.title}
                </h1>

                {/* Author and Metadata bar */}
                <div className="flex flex-wrap items-center justify-between gap-4 py-3 border-y border-slate-200 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400">
                  <div className="flex items-center gap-3">
                    {author && (
                      <div className="flex items-center gap-2">
                        <img
                          src={author.avatar}
                          alt={author.name}
                          className="w-8 h-8 rounded-full object-cover border border-slate-200 dark:border-slate-700"
                        />
                        <div>
                          <p className="font-semibold text-slate-800 dark:text-slate-200">
                            {author.name}
                          </p>
                          <p className="text-[10px] text-slate-400">{author.role}</p>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="flex flex-wrap items-center gap-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-blue-500" />
                      Yayın: {formattedPublishedDate}
                    </span>
                    <span className="flex items-center gap-1 text-slate-400">
                      <RefreshCw className="w-3 h-3 text-emerald-500" />
                      Güncelleme: {formattedUpdatedDate}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-blue-500" />
                      {post.readTime} okuma
                    </span>
                    <span className="flex items-center gap-1">
                      <Eye className="w-3.5 h-3.5 text-blue-500" />
                      {viewCount.toLocaleString('tr-TR')} görüntülenme
                    </span>
                  </div>
                </div>
              </div>

              {/* Cover Image */}
              <div className="relative aspect-video w-full rounded-3xl overflow-hidden shadow-lg bg-slate-100 dark:bg-slate-800 border border-slate-200/80 dark:border-slate-800">
                <img
                  src={coverImage}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Social Share Buttons */}
              <SocialShare title={post.title} />

              {/* Lead Paragraph */}
              <div className="text-base sm:text-lg text-slate-700 dark:text-slate-200 font-medium leading-relaxed bg-blue-50/50 dark:bg-blue-950/20 p-5 rounded-2xl border-l-4 border-blue-600">
                {normalizedContent.lead}
              </div>

              {/* Automatic Table of Contents */}
              <TableOfContents sections={tocSections} />

              {/* In-Article Ad Banner #1 */}
              <AdBanner type="in-article" label="Sponsorlu Bağlantı (AdSense In-Article)" />

              {/* Dynamic Content Sections with Automatic Pre-H2 Ad Placement */}
              <div className="space-y-8 text-slate-800 dark:text-slate-200 leading-relaxed text-sm sm:text-base">
                {normalizedContent.sections.map((section, idx) => (
                  <section key={section.id} id={section.id} className="scroll-mt-24 space-y-4">
                    
                    {/* Secondary In-Article ad before subsequent H2 headers */}
                    {idx === 2 && (
                      <AdBanner type="in-article" label="Makale İçi Sponsorlu Alan (AdSense)" />
                    )}

                    <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white pt-2 border-b border-slate-100 dark:border-slate-800/80 pb-2">
                      {section.heading}
                    </h2>

                    {section.paragraphs.map((p, pIdx) => (
                      <p key={pIdx} className="text-slate-700 dark:text-slate-300">
                        {p}
                      </p>
                    ))}

                    {/* Step-by-Step guides */}
                    {section.steps && section.steps.length > 0 && (
                      <div className="space-y-3 my-4">
                        {section.steps.map((step, sIdx) => (
                          <div
                            key={sIdx}
                            className="flex items-start gap-3.5 p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-2xs"
                          >
                            <span className="shrink-0 w-7 h-7 rounded-xl bg-blue-600 text-white font-bold text-xs flex items-center justify-center shadow-xs">
                              {sIdx + 1}
                            </span>
                            <div className="space-y-1">
                              <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100">
                                {step.title}
                              </h3>
                              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                                {step.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Callouts (tip / warning / info) */}
                    {section.callout && (
                      <div
                        className={`p-4 sm:p-5 rounded-2xl border my-4 ${
                          section.callout.type === 'warning'
                            ? 'bg-amber-500/10 border-amber-500/30 text-amber-900 dark:text-amber-200'
                            : section.callout.type === 'tip'
                            ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-900 dark:text-emerald-200'
                            : 'bg-blue-500/10 border-blue-500/30 text-blue-900 dark:text-blue-200'
                        }`}
                      >
                        <div className="flex items-center gap-2 mb-1.5 font-bold text-sm">
                          {section.callout.type === 'warning' ? (
                            <AlertCircle className="w-4 h-4 text-amber-500" />
                          ) : section.callout.type === 'tip' ? (
                            <Lightbulb className="w-4 h-4 text-emerald-500" />
                          ) : (
                            <ShieldCheck className="w-4 h-4 text-blue-500" />
                          )}
                          <span>{section.callout.title}</span>
                        </div>
                        <p className="text-xs sm:text-sm leading-relaxed">
                          {section.callout.message}
                        </p>
                      </div>
                    )}
                  </section>
                ))}
              </div>

              {/* Tags */}
              <div className="pt-6 border-t border-slate-200 dark:border-slate-800">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-semibold text-slate-400">Etiketler:</span>
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* SSS (FAQ Accordion) with JSON-LD Schema */}
              {faqs.length > 0 && <FaqAccordion faqs={faqs} />}

              {/* Author Bio Box */}
              {author && <AuthorBio author={author} />}

              {/* Yazı Sonu Reklam Alanı (Full-width AdBanner before Related Posts) */}
              <AdBanner
                type="article-footer"
                label="Yazı Sonu Sponsorlu Reklam (AdSense Display)"
              />

              {/* Benzer / İlgili Diğer Rehberler */}
              {relatedPosts.length > 0 && (
                <section className="pt-6 space-y-4">
                  <div className="flex items-center justify-between pb-2 border-b border-slate-200 dark:border-slate-800">
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100">
                      İlgili Diğer Rehberler
                    </h3>
                    <span className="text-xs text-blue-600 dark:text-blue-400 font-medium">
                      {category?.title}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {relatedPosts.map((rPost) => (
                      <ArticleCard key={rPost.id} post={rPost} variant="standard" />
                    ))}
                  </div>
                </section>
              )}
            </article>
          </main>

          {/* Sidebar Area with Sticky Ad (4 Cols) */}
          <aside className="lg:col-span-4">
            <SidebarWidgets currentPostId={post.id} />
          </aside>
        </div>
      </div>
    </>
  );
}
