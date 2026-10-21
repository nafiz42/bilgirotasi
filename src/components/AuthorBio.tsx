import React from 'react';
import { Author } from '@/types';

export default function AuthorBio({ author }: { author: Author }) {
  return (
    <div className="my-8 p-6 rounded-3xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/90 dark:border-slate-800 transition-colors">
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left">
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
