'use client';

import { useMemo, useState } from 'react';

export default function EnergyCalculator() {
  const [watts, setWatts] = useState(100);
  const [hours, setHours] = useState(4);
  const [quantity, setQuantity] = useState(1);
  const [rate, setRate] = useState(2.5);
  const estimate = useMemo(() => watts * hours * quantity * 30 / 1000, [watts, hours, quantity]);
  return (
    <section className="rounded-2xl border border-emerald-200 bg-emerald-50/70 p-5 dark:border-emerald-900 dark:bg-emerald-950/30" aria-labelledby="energy-calculator-title">
      <h2 id="energy-calculator-title" className="text-xl font-bold text-slate-900 dark:text-white">Cihaz tüketimi için yaklaşık hesaplayıcı</h2>
      <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">Cihaz etiketindeki gücü (W) ve kullanım süresini girin. Birim fiyatı faturanızdan alıp TL/kWh olarak yazın.</p>
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <label className="text-sm">Güç (W)<input className="mt-1 w-full rounded-lg border p-2 text-slate-900" type="number" min="0" value={watts} onChange={(e) => setWatts(Math.max(0, Number(e.target.value)))} /></label>
        <label className="text-sm">Günlük kullanım (saat)<input className="mt-1 w-full rounded-lg border p-2 text-slate-900" type="number" min="0" max="24" step="0.5" value={hours} onChange={(e) => setHours(Math.min(24, Math.max(0, Number(e.target.value))))} /></label>
        <label className="text-sm">Aynı cihaz adedi<input className="mt-1 w-full rounded-lg border p-2 text-slate-900" type="number" min="1" value={quantity} onChange={(e) => setQuantity(Math.max(1, Number(e.target.value)))} /></label>
        <label className="text-sm">Birim fiyat (TL/kWh)<input className="mt-1 w-full rounded-lg border p-2 text-slate-900" type="number" min="0" step="0.01" value={rate} onChange={(e) => setRate(Math.max(0, Number(e.target.value)))} /></label>
      </div>
      <div className="mt-4 rounded-xl bg-white p-4 dark:bg-slate-900">
        <p className="font-bold">Tahmini aylık tüketim: {estimate.toLocaleString('tr-TR', { maximumFractionDigits: 2 })} kWh</p>
        <p className="mt-1 text-sm">Bu cihaz(lar) için yaklaşık enerji bedeli: {(estimate * rate).toLocaleString('tr-TR', { style: 'currency', currency: 'TRY', maximumFractionDigits: 2 })}</p>
        <p className="mt-2 text-xs text-slate-500">Hesap: W × saat/gün × adet × 30 ÷ 1.000. Gerçek tüketim çalışma döngüsüne göre değişir; sonuç fatura tahmini değildir ve faturadaki vergi, dağıtım ile diğer kalemleri içermez.</p>
      </div>
    </section>
  );
}
