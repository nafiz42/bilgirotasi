'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Compass,
  Search,
  Menu,
  X,
  ChevronDown,
  Building2,
  Smartphone,
  Gamepad2,
  GraduationCap,
  Lightbulb,
  Sparkles
} from 'lucide-react';
import { categories } from '@/data/categories';
import ThemeToggle from '@/components/ThemeToggle';
import SearchModal from '@/components/SearchModal';

const iconMap: Record<string, React.ReactNode> = {
  Building2: <Building2 className="w-4 h-4" />,
  Smartphone: <Smartphone className="w-4 h-4" />,
  Gamepad2: <Gamepad2 className="w-4 h-4" />,
  GraduationCap: <GraduationCap className="w-4 h-4" />,
  Lightbulb: <Lightbulb className="w-4 h-4" />
};

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [categoryDropdownOpen, setCategoryDropdownOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-white/90 dark:bg-slate-900/90 border-b border-slate-200/80 dark:border-slate-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 gap-4">
            
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2.5 shrink-0 group focus:outline-hidden"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-sky-400 flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform duration-200">
                <Compass className="w-5 h-5 transition-transform duration-300 group-hover:rotate-45" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-black tracking-tight text-slate-900 dark:text-white leading-none flex items-center gap-1">
                  Rehber<span className="text-blue-600 dark:text-blue-400">Portal</span>
                </span>
                <span className="text-[10px] font-medium text-slate-500 dark:text-slate-400 tracking-wider uppercase">
                  Bilgi &bull; Çözüm &bull; Rehber
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1">
              <Link
                href="/"
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                  pathname === '/'
                    ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/40'
                    : 'text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100/60 dark:hover:bg-slate-800/60'
                }`}
              >
                Ana Sayfa
              </Link>

              {/* Categories Dropdown */}
              <div className="relative group">
                <button
                  type="button"
                  onClick={() => setCategoryDropdownOpen(!categoryDropdownOpen)}
                  onMouseEnter={() => setCategoryDropdownOpen(true)}
                  className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100/60 dark:hover:bg-slate-800/60 transition-colors"
                >
                  <span>Kategoriler</span>
                  <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" />
                </button>

                {/* Dropdown Menu */}
                <div
                  onMouseLeave={() => setCategoryDropdownOpen(false)}
                  className={`absolute left-0 mt-1 w-64 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl py-2 z-50 transition-all duration-200 ${
                    categoryDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2 pointer-events-none'
                  }`}
                >
                  <div className="px-3 py-1.5 text-[10px] font-bold tracking-wider uppercase text-slate-400 dark:text-slate-500">
                    5 Ana Kategori
                  </div>
                  {categories.map((c) => (
                    <Link
                      key={c.id}
                      href={`/kategori/${c.slug}`}
                      onClick={() => setCategoryDropdownOpen(false)}
                      className="flex items-center gap-2.5 px-3 py-2 text-xs text-slate-700 dark:text-slate-200 hover:bg-blue-50 dark:hover:bg-slate-800/80 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      <div className="p-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-blue-600 dark:text-blue-400">
                        {iconMap[c.iconName] || <Sparkles className="w-4 h-4" />}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold truncate">{c.title}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Direct Category Badges on Desktop */}
              {categories.slice(0, 3).map((c) => (
                <Link
                  key={c.id}
                  href={`/kategori/${c.slug}`}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                    pathname.startsWith(`/kategori/${c.slug}`)
                      ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/40 font-semibold'
                      : 'text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-300 hover:bg-slate-100/50 dark:hover:bg-slate-800/50'
                  }`}
                >
                  {c.title}
                </Link>
              ))}

              <Link
                href="/hakkimizda"
                className="px-3 py-1.5 rounded-lg text-xs font-medium text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Hakkımızda
              </Link>
            </nav>

            {/* Right side: Search, Theme Toggle, Mobile menu btn */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Live Search Trigger Bar */}
              <button
                type="button"
                onClick={() => setSearchOpen(true)}
                id="header-search-btn"
                className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200/80 dark:hover:bg-slate-700/80 border border-slate-200 dark:border-slate-700/80 text-slate-500 dark:text-slate-400 text-xs transition-colors shadow-2xs group"
              >
                <Search className="w-4 h-4 text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                <span className="hidden sm:inline">Portalda ara...</span>
                <kbd className="hidden sm:inline-block px-1.5 py-0.5 rounded-sm bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-[10px] font-mono text-slate-400">
                  Ctrl+K
                </kbd>
              </button>

              {/* Theme Toggle Button */}
              <ThemeToggle />

              {/* Mobile Menu Button */}
              <button
                type="button"
                id="mobile-menu-btn"
                aria-label="Menüyü Aç"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-xl text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Horizontal Category Strip on Tablets & Desktops */}
        <div className="hidden md:block border-t border-slate-100 dark:border-slate-800/70 bg-slate-50/50 dark:bg-slate-900/50 overflow-x-auto scrollbar-none">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center gap-2">
            <span className="text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider shrink-0 flex items-center gap-1 mr-1">
              <Sparkles className="w-3 h-3 text-blue-500" />
              Trend Konular:
            </span>
            {categories.map((c) => (
              <Link
                key={c.id}
                href={`/kategori/${c.slug}`}
                className="shrink-0 text-xs px-2.5 py-1 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-all font-medium shadow-2xs"
              >
                {c.title}
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 pt-3 pb-6 space-y-4 shadow-xl">
            <div className="space-y-1">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-xl text-sm font-semibold text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                Ana Sayfa
              </Link>
              <div className="pt-2 pb-1 px-3 text-[11px] font-bold tracking-wider uppercase text-slate-400">
                Kategoriler
              </div>
              {categories.map((c) => (
                <Link
                  key={c.id}
                  href={`/kategori/${c.slug}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-2 px-3 py-2 rounded-xl text-sm text-slate-700 dark:text-slate-300 hover:bg-blue-50 dark:hover:bg-slate-800 hover:text-blue-600"
                >
                  <span className="text-blue-600 dark:text-blue-400">{iconMap[c.iconName]}</span>
                  <span>{c.title}</span>
                </Link>
              ))}
            </div>

            <div className="pt-3 border-t border-slate-100 dark:border-slate-800 space-y-1">
              <Link
                href="/hakkimizda"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-1.5 text-xs text-slate-600 dark:text-slate-400"
              >
                Hakkımızda
              </Link>
              <Link
                href="/gizlilik-politikasi"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-1.5 text-xs text-slate-600 dark:text-slate-400"
              >
                Gizlilik Politikası
              </Link>
              <Link
                href="/iletisim"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-1.5 text-xs text-slate-600 dark:text-slate-400"
              >
                İletişim &amp; Yardım
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Global Interactive Search Modal */}
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
