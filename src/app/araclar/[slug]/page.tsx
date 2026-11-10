import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Breadcrumbs from '@/components/Breadcrumbs';
import InteractiveToolRunner from '@/components/InteractiveToolRunner';
import { tools, getToolBySlug } from '@/data/tools';
import {
  CheckCircle2,
  HelpCircle,
  BookOpen,
  ArrowRight,
  Sparkles
} from 'lucide-react';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return tools.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const tool = getToolBySlug(slug);
  if (!tool) {
    return { title: 'Araç Bulunamadı' };
  }

  return {
    title: tool.title,
    description: tool.description,
    alternates: {
      canonical: `/araclar/${tool.slug}`
    },
    openGraph: {
      title: `${tool.title} | Bilgi Rotası`,
      description: tool.description,
      url: `https://www.bilgirotasi.tr/araclar/${tool.slug}`,
      type: 'website'
    }
  };
}

export default async function ToolDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const tool = getToolBySlug(slug);

  if (!tool) {
    notFound();
  }

  const otherTools = tools.filter((t) => t.slug !== tool.slug);

  const webAppSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: tool.title,
    description: tool.description,
    url: `https://www.bilgirotasi.tr/araclar/${tool.slug}`,
    applicationCategory: 'UtilityApplication',
    operatingSystem: 'All',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'TRY'
    }
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: tool.faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.answer
      }
    }))
  };

  return (
    <div className="max-w-5xl mx-auto space-y-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Breadcrumbs
        items={[
          { label: 'Hesaplama Araçları', href: '/araclar' },
          { label: tool.shortTitle }
        ]}
      />

      {/* Tool Hero */}
      <header className="p-6 sm:p-10 rounded-3xl bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-semibold border border-blue-400/20">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{tool.categoryLabel} &bull; {tool.badge}</span>
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight">
          {tool.title}
        </h1>
        <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-3xl">
          {tool.lead}
        </p>
      </header>

      {/* Interactive Calculator Runner */}
      <InteractiveToolRunner slug={tool.slug} />

      {/* How It Works & Formula Box */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <div className="md:col-span-7 p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 space-y-4">
          <h2 className="text-base sm:text-lg font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            Araç Nasıl Kullanılır?
          </h2>
          <ol className="space-y-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 list-decimal pl-5">
            {tool.howItWorks.map((step, i) => (
              <li key={i} className="leading-relaxed">
                {step}
              </li>
            ))}
          </ol>
        </div>

        <div className="md:col-span-5 p-6 rounded-3xl bg-blue-50/70 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-900/70 space-y-3">
          <h2 className="text-base sm:text-lg font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            Hesaplama Formülü ve Mantığı
          </h2>
          <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
            {tool.formulaNote}
          </p>
        </div>
      </div>

      {/* Detailed Guide Sections */}
      <article className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 space-y-8">
        {tool.sections.map((sec, idx) => (
          <section key={idx} className="space-y-3">
            <h2 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white">
              {sec.heading}
            </h2>
            {sec.paragraphs.map((p, pIdx) => (
              <p
                key={pIdx}
                className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed"
              >
                {p}
              </p>
            ))}
            {sec.bullets && (
              <ul className="space-y-2 pt-1 pl-5 list-disc text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                {sec.bullets.map((b, bIdx) => (
                  <li key={bIdx} className="leading-relaxed">
                    {b}
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </article>

      {/* FAQs */}
      <section className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 space-y-5">
        <h2 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white flex items-center gap-2">
          <HelpCircle className="w-5 h-5 text-blue-600 dark:text-blue-400" />
          Sıkça Sorulan Sorular
        </h2>
        <div className="space-y-4">
          {tool.faqs.map((faq, idx) => (
            <div
              key={idx}
              className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-800 space-y-1.5"
            >
              <h3 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                {faq.question}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Other Tools */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-black text-slate-900 dark:text-white">
            Diğer Pratik Hesaplama Araçları
          </h2>
          <Link
            href="/araclar"
            className="text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
          >
            Tüm Araçları Gör <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {otherTools.slice(0, 3).map((t) => (
            <Link
              key={t.id}
              href={`/araclar/${t.slug}`}
              className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 hover:border-blue-500/50 transition-all space-y-1.5"
            >
              <span className="text-[10px] font-bold uppercase text-blue-600 dark:text-blue-400">
                {t.categoryLabel}
              </span>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                {t.shortTitle}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2">
                {t.description}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
