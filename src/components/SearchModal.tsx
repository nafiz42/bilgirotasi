'use client';

import React, { useState, useEffect, useRef, useMemo } from 'react';
import Link from 'next/link';
import { Search, X, Clock, BookOpen } from 'lucide-react';
import { posts } from '@/data/posts';
import { categories } from '@/data/categories';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => inputRef.current?.focus(), 50);
      document.body.style.overflow = 'hidden';
      return () => {
        clearTimeout(timer);
        document.body.style.overflow = 'auto';
      };
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Derive results directly with useMemo
  const results = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase().trim();
    return posts.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        (p.tags ? p.tags.some((tag) => tag.toLowerCase().includes(q)) : false)
    );
  }, [query]);

  const handleClose = () => {
    setQuery('');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-slate-900/60 backdrop-blur-sm transition-opacity"
      onClick={handleClose}
    >
      <div
        className="w-full max-w-2xl overflow-hidden rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-slate-200 dark:border-slate-800 gap-3">
          <Search className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            id="search-portal-input"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Rehber, e-Devlet işlemi, oyun ayarı veya konu ara..."
            className="flex-1 bg-transparent text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 text-sm sm:text-base outline-hidden"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 px-1.5 py-1 rounded-sm"
            >
              Temizle
            </button>
          )}
          <button
            onClick={handleClose}
            className="p-1 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results / Suggestions Container */}
        <div className="max-h-[60vh] overflow-y-auto p-4 space-y-3">
          {query.trim() === '' ? (
            <div className="space-y-4 py-2">
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                Popüler Aramalar
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  'KYK Bursu',
                  'FPS Artırma',
                  'İkametgah Değişikliği',
                  'YKS Çalışma',
                  'WhatsApp Gizlilik',
                  'Pasaport Randevusu'
                ].map((term) => (
                  <button
                    key={term}
                    onClick={() => setQuery(term)}
                    className="text-xs px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-blue-50 dark:hover:bg-blue-900/40 hover:text-blue-600 dark:hover:text-blue-400 border border-slate-200/60 dark:border-slate-700/60 transition-colors"
                  >
                    {term}
                  </button>
                ))}
              </div>

              <div className="pt-2">
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">
                  Kategorilere Göz At
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {categories.map((c) => (
                    <Link
                      key={c.id}
                      href={`/kategori/${c.slug}`}
                      onClick={handleClose}
                      className="flex items-center gap-2 p-2.5 rounded-xl border border-slate-100 dark:border-slate-800 hover:border-blue-500/40 hover:bg-blue-50/50 dark:hover:bg-slate-800/60 transition-colors text-xs text-slate-700 dark:text-slate-300 font-medium"
                    >
                      <BookOpen className="w-4 h-4 text-blue-500" />
                      <span>{c.title}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ) : results.length > 0 ? (
            <div className="space-y-2">
              <div className="text-xs font-semibold text-slate-400 dark:text-slate-500 px-1">
                {results.length} rehber bulundu
              </div>
              {results.map((post) => {
                const category = categories.find((c) => c.slug === post.categorySlug);
                return (
                  <Link
                    key={post.id}
                    href={`/kategori/${post.categorySlug}/${post.slug}`}
                    onClick={handleClose}
                    className="group flex flex-col p-3 rounded-xl border border-slate-100 dark:border-slate-800/80 hover:border-blue-500/50 hover:bg-blue-50/40 dark:hover:bg-blue-950/20 transition-all"
                  >
                    <div className="flex items-center justify-between text-[11px] mb-1">
                      <span className="font-semibold text-blue-600 dark:text-blue-400">
                        {category?.title}
                      </span>
                      <span className="flex items-center gap-1 text-slate-400">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </span>
                    </div>
                    <h4 className="text-sm font-semibold text-slate-800 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {post.title}
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-1 mt-1">
                      {post.description}
                    </p>
                  </Link>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-sm text-slate-600 dark:text-slate-400">
                &ldquo;<span className="font-semibold">{query}</span>&rdquo; için sonuç bulunamadı.
              </p>
              <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">
                Farklı anahtar kelimelerle aramayı deneyebilirsiniz.
              </p>
            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-slate-50 dark:bg-slate-800/50 border-t border-slate-200 dark:border-slate-800 text-[11px] text-slate-400">
          <span>Seçmek için tıklayın</span>
          <span>
            Kapatmak için <kbd className="px-1.5 py-0.5 rounded-sm bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 font-mono text-[10px]">ESC</kbd>
          </span>
        </div>
      </div>
    </div>
  );
}
