'use client';

import React, { useState } from 'react';
import { Share2, Check, Copy, MessageCircle, Send } from 'lucide-react';

interface SocialShareProps {
  title: string;
  url?: string;
}

export default function SocialShare({ title, url }: SocialShareProps) {
  const [copied, setCopied] = useState(false);

  const getFullUrl = () => {
    if (typeof window !== 'undefined') {
      return url || window.location.href;
    }
    return url || 'https://www.bilgirotasi.tr';
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(getFullUrl());
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // fallback
    }
  };

  const shareWhatsApp = () => {
    const shareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(
      `${title} - Okumak için tıkla: ${getFullUrl()}`
    )}`;
    window.open(shareUrl, '_blank', 'noopener,noreferrer');
  };

  const shareTwitter = () => {
    const shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      title
    )}&url=${encodeURIComponent(getFullUrl())}`;
    window.open(shareUrl, '_blank', 'noopener,noreferrer');
  };

  const shareTelegram = () => {
    const shareUrl = `https://t.me/share/url?url=${encodeURIComponent(
      getFullUrl()
    )}&text=${encodeURIComponent(title)}`;
    window.open(shareUrl, '_blank', 'noopener,noreferrer');
  };

  const shareFacebook = () => {
    const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      getFullUrl()
    )}`;
    window.open(shareUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="py-4 my-6 border-y border-slate-200/80 dark:border-slate-800/80 flex flex-wrap items-center justify-between gap-3">
      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
        <Share2 className="w-4 h-4 text-blue-600 dark:text-blue-400" />
        <span>Bu Rehberi Paylaş:</span>
      </div>

      <div className="flex items-center flex-wrap gap-2">
        {/* WhatsApp */}
        <button
          onClick={shareWhatsApp}
          type="button"
          aria-label="WhatsApp'ta Paylaş"
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 text-xs font-medium transition-colors"
        >
          <MessageCircle className="w-3.5 h-3.5" />
          <span>WhatsApp</span>
        </button>

        {/* Twitter / X */}
        <button
          onClick={shareTwitter}
          type="button"
          aria-label="X'te Paylaş"
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900/10 dark:bg-white/10 hover:bg-slate-900/20 dark:hover:bg-white/20 text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-slate-700 text-xs font-medium transition-colors"
        >
          <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
          <span>X / Paylaş</span>
        </button>

        {/* Telegram */}
        <button
          onClick={shareTelegram}
          type="button"
          aria-label="Telegram'da Paylaş"
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-sky-500/10 hover:bg-sky-500/20 text-sky-600 dark:text-sky-400 border border-sky-500/20 text-xs font-medium transition-colors"
        >
          <Send className="w-3.5 h-3.5" />
          <span>Telegram</span>
        </button>

        {/* Facebook */}
        <button
          onClick={shareFacebook}
          type="button"
          aria-label="Facebook'ta Paylaş"
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-blue-600/10 hover:bg-blue-600/20 text-blue-700 dark:text-blue-400 border border-blue-600/20 text-xs font-medium transition-colors"
        >
          <span>Facebook</span>
        </button>

        {/* Copy Link Button */}
        <button
          onClick={handleCopy}
          type="button"
          aria-label="Bağlantıyı Kopyala"
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 text-xs font-medium transition-colors"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-500" />
              <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Kopyalandı!</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              <span>Linki Kopyala</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
