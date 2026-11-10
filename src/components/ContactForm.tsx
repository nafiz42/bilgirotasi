'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2, Mail } from 'lucide-react';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [topic, setTopic] = useState('İçerik Güncelleme / Düzeltme Talebi');
  const [pageUrl, setPageUrl] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;
    setSubmitted(true);
  };

  const mailtoHref = `mailto:konhansoftware@gmail.com?subject=${encodeURIComponent(
    `[Bilgi Rotası] ${topic} - ${name}`
  )}&body=${encodeURIComponent(
    `Gönderen: ${name} (${email})\nKonu: ${topic}\nİlgili Sayfa: ${pageUrl || 'Belirtilmedi'}\n\nMesaj:\n${message}`
  )}`;

  if (submitted) {
    return (
      <div className="p-6 sm:p-8 rounded-3xl bg-emerald-50/90 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-900 space-y-4">
        <div className="flex items-center gap-3">
          <CheckCircle2 className="w-7 h-7 text-emerald-600 dark:text-emerald-400 shrink-0" />
          <div>
            <h3 className="text-base sm:text-lg font-extrabold text-slate-900 dark:text-white">
              Mesajınız Kaydedildi ve İletime Hazır
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              Geri bildiriminiz için teşekkür ederiz. Editör ekibimiz talebinizi en geç 24–48 saat içinde inceleyecektir.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-3 pt-2">
          <a
            href={mailtoHref}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-colors"
          >
            <Mail className="w-4 h-4" />
            E-Posta Uygulamasıyla Doğrudan Gönder
          </a>
          <button
            type="button"
            onClick={() => {
              setSubmitted(false);
              setMessage('');
            }}
            className="px-4 py-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-700 dark:text-slate-200"
          >
            Yeni Mesaj Yaz
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-2xs space-y-5"
    >
      <div>
        <h2 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white">
          İletişim ve Geri Bildirim Formu
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
          Rehberlerimizle ilgili soru, düzeltme önerisi, yeni hesaplama aracı talebi veya reklam/iş birliği mesajlarınızı aşağıdaki form üzerinden iletebilirsiniz.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
            Adınız ve Soyadınız *
          </label>
          <input
            type="text"
            required
            placeholder="Örn: Ahmet Yılmaz"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/70 text-slate-900 dark:text-white text-sm focus:outline-hidden focus:border-blue-500"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
            E-Posta Adresiniz *
          </label>
          <input
            type="email"
            required
            placeholder="ornek@eposta.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/70 text-slate-900 dark:text-white text-sm focus:outline-hidden focus:border-blue-500"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
            Başvuru Konusu *
          </label>
          <select
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/70 text-slate-900 dark:text-white text-sm focus:outline-hidden focus:border-blue-500"
          >
            <option value="İçerik Güncelleme / Düzeltme Talebi">
              İçerik Güncelleme / Düzeltme Talebi
            </option>
            <option value="Yeni Rehber veya Hesaplama Aracı Önerisi">
              Yeni Rehber veya Hesaplama Aracı Önerisi
            </option>
            <option value="Reklam ve Kurumsal İş Birliği">
              Reklam ve Kurumsal İş Birliği
            </option>
            <option value="Telif Hakkı ve Yasal Bildirim">
              Telif Hakkı ve Yasal Bildirim
            </option>
            <option value="Diğer Konular">Diğer Konular</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
            İlgili Rehber veya Araç Bağlantısı (Opsiyonel)
          </label>
          <input
            type="text"
            placeholder="https://www.bilgirotasi.tr/..."
            value={pageUrl}
            onChange={(e) => setPageUrl(e.target.value)}
            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/70 text-slate-900 dark:text-white text-sm focus:outline-hidden focus:border-blue-500"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
          Mesajınız *
        </label>
        <textarea
          required
          rows={5}
          placeholder="Detaylı mesajınızı, önerinizi veya düzeltme talebinizi buraya yazın..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full p-4 rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/70 text-slate-900 dark:text-white text-sm focus:outline-hidden focus:border-blue-500"
        />
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-1">
        <p className="text-[11px] text-slate-500 dark:text-slate-400">
          Kişisel verileriniz <a href="/gizlilik-politikasi" className="underline">Gizlilik Politikası</a> kapsamında yalnızca talebinize yanıt vermek amacıyla kullanılır.
        </p>
        <button
          type="submit"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-bold shadow-md shadow-blue-500/20 transition-colors shrink-0"
        >
          <Send className="w-4 h-4" />
          Mesajı Gönder
        </button>
      </div>
    </form>
  );
}
