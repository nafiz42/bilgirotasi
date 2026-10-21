'use client';

import { useMemo, useState } from 'react';

const subjects = ['Matematik', 'Türkçe / Paragraf', 'Fen', 'Sosyal', 'Alan dersi', 'Deneme ve analiz'];

export default function StudyPlanner() {
  const [hours, setHours] = useState(20);
  const [selected, setSelected] = useState<string[]>(subjects);
  const plan = useMemo(() => {
    const weeklyBlocks = Math.max(1, Math.floor(hours * 60 / 50));
    const active = selected.length ? selected : ['Matematik'];
    const counts = active.map((subject, index) => ({ subject, blocks: Math.floor(weeklyBlocks / active.length) + (index < weeklyBlocks % active.length ? 1 : 0) }));
    return counts.filter((item) => item.blocks > 0);
  }, [hours, selected]);

  return (
    <section className="rounded-2xl border border-indigo-200 bg-indigo-50/70 p-5 dark:border-indigo-900 dark:bg-indigo-950/30" aria-labelledby="study-planner-title">
      <h2 id="study-planner-title" className="text-xl font-bold text-slate-900 dark:text-white">Haftalık çalışma planı oluşturucu</h2>
      <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">Haftalık ayırabileceğiniz süreyi ve çalışacağınız dersleri seçin. Her blok 50 dakika çalışma ve kendi belirleyeceğiniz mola içindir; planı deneme sonuçlarınıza göre güncelleyin.</p>
      <label className="mt-4 block text-sm font-semibold">Haftada ayırabileceğiniz saat: {hours}
        <input className="mt-2 w-full accent-indigo-600" type="range" min="5" max="60" step="1" value={hours} onChange={(event) => setHours(Number(event.target.value))} />
      </label>
      <fieldset className="mt-4">
        <legend className="text-sm font-semibold">Planlanacak dersler</legend>
        <div className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-2">
          {subjects.map((subject) => <label key={subject} className="flex items-center gap-2 text-sm"><input type="checkbox" checked={selected.includes(subject)} onChange={(event) => setSelected((current) => event.target.checked ? [...current, subject] : current.filter((item) => item !== subject))} />{subject}</label>)}
        </div>
      </fieldset>
      <div className="mt-4 rounded-xl bg-white p-4 dark:bg-slate-900">
        <h3 className="font-bold">Haftalık başlangıç dağılımı</h3>
        <ul className="mt-2 space-y-1 text-sm">{plan.map(({ subject, blocks }) => <li key={subject} className="flex justify-between"><span>{subject}</span><span>{blocks} blok · {blocks * 50} dk</span></li>)}</ul>
        <p className="mt-3 text-xs text-slate-500">Bu araç bir planlama şablonudur; başarı veya belirli bir net artışı vaat etmez. Zorlandığınız derslere daha çok blok ayırabilir, haftada en az bir analiz oturumu planlayabilirsiniz.</p>
      </div>
    </section>
  );
}
