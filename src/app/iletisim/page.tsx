'use client';

import React, { useState } from 'react';
import Breadcrumbs from '@/components/Breadcrumbs';
import { Mail, Clock, MapPin, Send, CheckCircle2, MessageSquare, Megaphone } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'genel',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="max-w-5xl mx-auto space-y-8">
      <Breadcrumbs items={[{ label: 'İletişim & Yardım' }]} />

      {/* Hero */}
      <div className="p-8 sm:p-10 rounded-3xl bg-slate-900 text-white space-y-3">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-semibold">
          <MessageSquare className="w-3.5 h-3.5" />
          <span>7/24 İletişim &amp; Destek</span>
        </span>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black">
          Bizimle İletişime Geçin
        </h1>
        <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
          Portalımızda yer alan bir rehber hakkında soru sormak, hata bildirmek veya reklam &amp; sponsorluk talepleriniz için bize ulaşabilirsiniz.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Contact Info (5 Cols) */}
        <div className="lg:col-span-5 space-y-4">
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 space-y-4 shadow-2xs">
            <h2 className="text-base font-bold text-slate-900 dark:text-slate-100 pb-2 border-b border-slate-100 dark:border-slate-800">
              İletişim Bilgileri
            </h2>

            <div className="flex items-start gap-3 text-xs sm:text-sm">
              <div className="w-8 h-8 rounded-xl bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
                <Mail className="w-4 h-4" />
              </div>
              <div>
                <p className="font-semibold text-slate-900 dark:text-slate-100">E-Posta Adresi</p>
                <a href="mailto:iletisim@bilgirotasi.tr" className="text-blue-600 dark:text-blue-400 hover:underline">
                  iletisim@bilgirotasi.tr
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3 text-xs sm:text-sm">
              <div className="w-8 h-8 rounded-xl bg-amber-50 dark:bg-amber-950 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0">
                <Megaphone className="w-4 h-4" />
              </div>
              <div>
                <p className="font-semibold text-slate-900 dark:text-slate-100">Reklam &amp; Sponsorluk</p>
                <a href="mailto:reklam@bilgirotasi.tr" className="text-blue-600 dark:text-blue-400 hover:underline">
                  reklam@bilgirotasi.tr
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3 text-xs sm:text-sm">
              <div className="w-8 h-8 rounded-xl bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                <Clock className="w-4 h-4" />
              </div>
              <div>
                <p className="font-semibold text-slate-900 dark:text-slate-100">Yanıt Süresi</p>
                <p className="text-slate-500 dark:text-slate-400">En geç 24 saat içinde yanıt verilir.</p>
              </div>
            </div>

            <div className="flex items-start gap-3 text-xs sm:text-sm">
              <div className="w-8 h-8 rounded-xl bg-purple-50 dark:bg-purple-950 text-purple-600 dark:text-purple-400 flex items-center justify-center shrink-0">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <p className="font-semibold text-slate-900 dark:text-slate-100">Yayın Merkezi</p>
                <p className="text-slate-500 dark:text-slate-400">Levent, İstanbul / Türkiye</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form (7 Cols) */}
        <div className="lg:col-span-7">
          <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-2xs">
            {submitted ? (
              <div className="py-12 text-center space-y-3">
                <div className="w-14 h-14 mx-auto rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-600 flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                  Mesajınız Başarıyla İletildi!
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-sm mx-auto">
                  Talebiniz editör ekibimize ulaştı. Belirttiğiniz e-posta adresine en kısa sürede dönüş sağlanacaktır.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', subject: 'genel', message: '' });
                  }}
                  className="mt-4 px-4 py-2 rounded-xl bg-blue-600 text-white text-xs font-semibold hover:bg-blue-700 transition-colors"
                >
                  Yeni Mesaj Gönder
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                    Adınız ve Soyadınız *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Örn: Ahmet Yılmaz"
                    className="w-full text-xs sm:text-sm px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 outline-hidden focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                    E-Posta Adresiniz *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="ornek@alanadi.com"
                    className="w-full text-xs sm:text-sm px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 outline-hidden focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                    Konu Başlığı
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full text-xs sm:text-sm px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 outline-hidden focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="genel">Genel Soru / Görüş</option>
                    <option value="duzeltme">İçerik Hata / Düzeltme Bildirimi</option>
                    <option value="reklam">Reklam &amp; Sponsorluk</option>
                    <option value="oneri">Yeni Rehber Konusu Önerisi</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                    Mesajınız *
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Lütfen mesajınızı detaylı olarak yazın..."
                    className="w-full text-xs sm:text-sm px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 outline-hidden focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 shadow-md transition-colors"
                >
                  <Send className="w-4 h-4" />
                  <span>Mesajı Gönder</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
