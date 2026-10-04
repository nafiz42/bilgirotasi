import React from 'react';
import { Author } from '@/types';
import { CheckCircle2, Shield } from 'lucide-react';

export default function AuthorBio({ author }: { author: Author }) {
  return (
    <div className="my-8 p-6 rounded-3xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/90 dark:border-slate-800 transition-colors">
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left">
        <div className="relative shrink-0">
          <img
            src={author.avatar}
            alt={author.name}
            className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl object-cover border-2 border-white dark:border-slate-800 shadow-md"
          />
          <div
            title="Doğrulanmış Editör"
            className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center border-2 border-white dark:border-slate-900"
          >
            <CheckCircle2 className="w-3.5 h-3.5" />
          </div>
        </div>

        <div className="flex-1 space-y-2">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                Rehber Editörü
              </span>
              <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100">
                {author.name}
              </h4>
            </div>
            <span className="inline-flex items-center gap-1 text-[11px] font-medium text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-800 px-2.5 py-1 rounded-full border border-slate-200/70 dark:border-slate-750 self-center sm:self-auto">
              <Shield className="w-3 h-3 text-emerald-500" />
              Doğrulanmış Uzman
            </span>
          </div>

          <p className="text-xs text-blue-600/90 dark:text-blue-400/90 font-medium">
            {author.role}
          </p>

          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            {author.bio}
          </p>
        </div>
      </div>
    </div>
  );
}
