'use client';

import React, { useState, useMemo } from 'react';
import {
  Calculator,
  CheckCircle2,
  AlertCircle,
  RotateCcw,
  Sparkles,
  Clock,
  HelpCircle
} from 'lucide-react';

interface InteractiveToolRunnerProps {
  slug: string;
}

export default function InteractiveToolRunner({ slug }: InteractiveToolRunnerProps) {
  switch (slug) {
    case 'vize-final-not-hesaplama':
      return <VizeFinalCalculator />;
    case 'tyt-ayt-dgs-net-hesaplama':
      return <ExamNetCalculator />;
    case 'internet-indirme-suresi-hesaplama':
      return <DownloadTimeCalculator />;
    case 'kdv-ve-yuzde-hesaplama':
      return <KdvPercentCalculator />;
    case 'kelime-ve-okuma-suresi-hesaplama':
      return <WordCountCalculator />;
    case 'yas-ve-gun-hesaplama':
      return <AgeCalculator />;
    default:
      return <VizeFinalCalculator />;
  }
}

/* ============================================================================
 * 1. VİZE & FİNAL NOT HESAPLAMA ARACI
 * ============================================================================ */
function VizeFinalCalculator() {
  const [vizeNote, setVizeNote] = useState<string>('65');
  const [vizeWeight, setVizeWeight] = useState<string>('40');
  const [finalNote, setFinalNote] = useState<string>('70');
  const [passGrade, setPassGrade] = useState<string>('60');
  const [finalThreshold, setFinalThreshold] = useState<string>('50');

  const result = useMemo(() => {
    const v = Math.min(100, Math.max(0, parseFloat(vizeNote) || 0));
    const vw = Math.min(90, Math.max(10, parseFloat(vizeWeight) || 40));
    const fw = 100 - vw;
    const f = finalNote.trim() === '' ? null : Math.min(100, Math.max(0, parseFloat(finalNote) || 0));
    const pass = Math.min(100, Math.max(0, parseFloat(passGrade) || 60));
    const baraj = Math.min(100, Math.max(0, parseFloat(finalThreshold) || 50));

    const vizeContribution = (v * vw) / 100;
    const rawNeededForPass = (pass - vizeContribution) / (fw / 100);
    const minRequiredFinal = Math.max(baraj, Math.ceil(Math.max(0, rawNeededForPass)));

    const currentAverage = f !== null ? vizeContribution + (f * fw) / 100 : null;
    const passedBaraj = f !== null ? f >= baraj : false;
    const passedOverall = currentAverage !== null ? currentAverage >= pass && passedBaraj : false;

    let letter = 'FF';
    if (currentAverage !== null) {
      if (!passedBaraj) letter = 'FF (Baraj Altı)';
      else if (currentAverage >= 90) letter = 'AA';
      else if (currentAverage >= 85) letter = 'BA';
      else if (currentAverage >= 80) letter = 'BB';
      else if (currentAverage >= 70) letter = 'CB';
      else if (currentAverage >= 60) letter = 'CC';
      else if (currentAverage >= 55) letter = 'DC';
      else if (currentAverage >= 50) letter = 'DD';
      else letter = 'FF';
    }

    return {
      vw,
      fw,
      vizeContribution: vizeContribution.toFixed(2),
      minRequiredFinal,
      currentAverage: currentAverage !== null ? currentAverage.toFixed(2) : null,
      passedOverall,
      passedBaraj,
      letter
    };
  }, [vizeNote, vizeWeight, finalNote, passGrade, finalThreshold]);

  return (
    <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-sm space-y-6">
      <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-xl bg-blue-600 text-white">
            <Calculator className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-base sm:text-lg font-extrabold text-slate-900 dark:text-white">
              Vize ve Final Ortalaması Hesaplayıcı
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Notlarınızı girin, geçme durumunuzu ve gereken minimum final puanını görün
            </p>
          </div>
        </div>
        <button
          type="button"
          onClick={() => {
            setVizeNote('65');
            setVizeWeight('40');
            setFinalNote('70');
            setPassGrade('60');
            setFinalThreshold('50');
          }}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          Sıfırla
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div>
          <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
            Vize (Ara Sınav) Notunuz (0-100)
          </label>
          <input
            type="number"
            min={0}
            max={100}
            value={vizeNote}
            onChange={(e) => setVizeNote(e.target.value)}
            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/70 text-slate-900 dark:text-white font-semibold text-sm focus:outline-hidden focus:border-blue-500"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
            Vize Etki Ağırlığı (%)
          </label>
          <input
            type="number"
            min={10}
            max={90}
            value={vizeWeight}
            onChange={(e) => setVizeWeight(e.target.value)}
            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/70 text-slate-900 dark:text-white font-semibold text-sm focus:outline-hidden focus:border-blue-500"
          />
          <span className="text-[11px] text-slate-400 mt-1 block">
            Final ağırlığı otomatik: %{result.fw}
          </span>
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
            Final / Bütünleme Notunuz (Opsiyonel)
          </label>
          <input
            type="number"
            min={0}
            max={100}
            placeholder="Henüz girmediyseniz boş bırakın"
            value={finalNote}
            onChange={(e) => setFinalNote(e.target.value)}
            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/70 text-slate-900 dark:text-white font-semibold text-sm focus:outline-hidden focus:border-blue-500"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
            Ders Geçme Notu (Örn: 50 veya 60)
          </label>
          <input
            type="number"
            min={35}
            max={80}
            value={passGrade}
            onChange={(e) => setPassGrade(e.target.value)}
            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/70 text-slate-900 dark:text-white font-semibold text-sm focus:outline-hidden focus:border-blue-500"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
            Final Sınavı Baraj Notu (Örn: 50)
          </label>
          <input
            type="number"
            min={0}
            max={70}
            value={finalThreshold}
            onChange={(e) => setFinalThreshold(e.target.value)}
            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/70 text-slate-900 dark:text-white font-semibold text-sm focus:outline-hidden focus:border-blue-500"
          />
        </div>
      </div>

      {/* Results Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
        <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-700/70">
          <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
            Vizenin Ortalamaya Katkısı
          </span>
          <p className="text-2xl font-black text-slate-900 dark:text-white mt-1">
            +{result.vizeContribution} <span className="text-xs font-normal text-slate-500">puan</span>
          </p>
        </div>

        <div className="p-4 rounded-2xl bg-blue-50/80 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900">
          <span className="text-xs font-semibold text-blue-700 dark:text-blue-300">
            Geçmek İçin Gereken Min. Final Notu
          </span>
          <p className="text-2xl font-black text-blue-700 dark:text-blue-300 mt-1">
            {result.minRequiredFinal > 100 ? '100+ (Vize Yetersiz)' : `${result.minRequiredFinal} Puan`}
          </p>
        </div>

        <div
          className={`p-4 rounded-2xl border ${
            result.currentAverage === null
              ? 'bg-slate-50 dark:bg-slate-800/60 border-slate-200 dark:border-slate-700'
              : result.passedOverall
              ? 'bg-emerald-50/90 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-900'
              : 'bg-rose-50/90 dark:bg-rose-950/40 border-rose-200 dark:border-rose-900'
          }`}
        >
          <span className="text-xs font-semibold text-slate-600 dark:text-slate-300">
            Dönem Sonu Ortalamanız &amp; Harf Notu
          </span>
          {result.currentAverage !== null ? (
            <div className="flex items-center justify-between mt-1">
              <p className="text-2xl font-black text-slate-900 dark:text-white">
                {result.currentAverage}{' '}
                <span className="text-xs font-bold px-2 py-0.5 rounded-md bg-white/80 dark:bg-slate-900/80">
                  {result.letter}
                </span>
              </p>
              {result.passedOverall ? (
                <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 dark:text-emerald-400">
                  <CheckCircle2 className="w-4 h-4" /> Geçti
                </span>
              ) : (
                <span className="inline-flex items-center gap-1 text-xs font-bold text-rose-700 dark:text-rose-400">
                  <AlertCircle className="w-4 h-4" /> Kaldı
                </span>
              )}
            </div>
          ) : (
            <p className="text-sm font-semibold text-slate-500 mt-1">
              Ortalamayı görmek için final notu girin
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

/* ============================================================================
 * 2. TYT / AYT / KPSS / DGS NET & OBP HESAPLAMA ARACI
 * ============================================================================ */
function ExamNetCalculator() {
  const [tests, setTests] = useState([
    { name: 'Türkçe / Sözel Testi', max: 40, correct: '31', wrong: '6' },
    { name: 'Temel Matematik / Sayısal Testi', max: 40, correct: '24', wrong: '4' },
    { name: 'Sosyal Bilimler Testi', max: 20, correct: '15', wrong: '3' },
    { name: 'Fen Bilimleri Testi', max: 20, correct: '12', wrong: '4' }
  ]);
  const [diplomaGrade, setDiplomaGrade] = useState<string>('84');
  const [brokenObp, setBrokenObp] = useState<boolean>(false);

  const summary = useMemo(() => {
    const rows = tests.map((t) => {
      const c = Math.max(0, parseFloat(t.correct) || 0);
      const w = Math.max(0, parseFloat(t.wrong) || 0);
      const net = c - w / 4;
      return { ...t, c, w, net };
    });

    const totalCorrect = rows.reduce((acc, r) => acc + r.c, 0);
    const totalWrong = rows.reduce((acc, r) => acc + r.w, 0);
    const totalNet = rows.reduce((acc, r) => acc + r.net, 0);

    const dip = Math.min(100, Math.max(50, parseFloat(diplomaGrade) || 80));
    const obp = dip * 5;
    const obpContribution = obp * (brokenObp ? 0.06 : 0.12);
    const estimatedTytRaw = 100 + totalNet * 3.3;
    const estimatedTytPlacement = estimatedTytRaw + obpContribution;

    return {
      rows,
      totalCorrect,
      totalWrong,
      totalNet: totalNet.toFixed(2),
      obp: obp.toFixed(1),
      obpContribution: obpContribution.toFixed(2),
      estimatedTytRaw: Math.min(500, estimatedTytRaw).toFixed(2),
      estimatedTytPlacement: Math.min(560, estimatedTytPlacement).toFixed(2)
    };
  }, [tests, diplomaGrade, brokenObp]);

  const updateTest = (index: number, field: 'correct' | 'wrong', value: string) => {
    setTests((prev) =>
      prev.map((item, idx) => (idx === index ? { ...item, [field]: value } : item))
    );
  };

  return (
    <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-sm space-y-6">
      <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-xl bg-blue-600 text-white">
            <Calculator className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-base sm:text-lg font-extrabold text-slate-900 dark:text-white">
              ÖSYM Sınav Net ve OBP Hesaplama Tablosu
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              4 yanlışın 1 doğruyu götürdüğü sistemde ders bazlı netlerinizi ve OBP ek puanınızı hesaplayın
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        {summary.rows.map((row, idx) => (
          <div
            key={row.name}
            className="grid grid-cols-1 sm:grid-cols-12 items-center gap-3 p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-800"
          >
            <div className="sm:col-span-5">
              <p className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                {row.name}
              </p>
              <span className="text-[11px] text-slate-400">Standart Soru Sayısı: {row.max}</span>
            </div>
            <div className="sm:col-span-3 flex items-center gap-2">
              <label className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 w-14">
                Doğru:
              </label>
              <input
                type="number"
                min={0}
                max={120}
                value={row.correct}
                onChange={(e) => updateTest(idx, 'correct', e.target.value)}
                className="w-full px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white font-bold text-sm"
              />
            </div>
            <div className="sm:col-span-3 flex items-center gap-2">
              <label className="text-xs font-semibold text-rose-600 dark:text-rose-400 w-14">
                Yanlış:
              </label>
              <input
                type="number"
                min={0}
                max={120}
                value={row.wrong}
                onChange={(e) => updateTest(idx, 'wrong', e.target.value)}
                className="w-full px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white font-bold text-sm"
              />
            </div>
            <div className="sm:col-span-1 text-right">
              <span className="text-xs font-black px-2.5 py-1 rounded-lg bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300">
                {row.net.toFixed(2)}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* OBP Controls */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
        <div>
          <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
            Mezuniyet Diploma Notunuz (50 - 100)
          </label>
          <input
            type="number"
            min={50}
            max={100}
            value={diplomaGrade}
            onChange={(e) => setDiplomaGrade(e.target.value)}
            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/70 text-slate-900 dark:text-white font-semibold text-sm"
          />
        </div>
        <div className="flex items-end pb-1">
          <label className="flex items-center gap-2.5 cursor-pointer select-none p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 w-full">
            <input
              type="checkbox"
              checked={brokenObp}
              onChange={(e) => setBrokenObp(e.target.checked)}
              className="w-4 h-4 accent-blue-600 rounded"
            />
            <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">
              Geçen yıl bir bölüme yerleştim (Kırık OBP - 0,06 katsayısı uygula)
            </span>
          </label>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
        <div className="p-4 rounded-2xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900">
          <span className="text-xs font-semibold text-blue-700 dark:text-blue-300">Toplam Net</span>
          <p className="text-2xl font-black text-blue-700 dark:text-blue-300 mt-1">
            {summary.totalNet}
          </p>
          <span className="text-[11px] text-slate-500">
            {summary.totalCorrect} D / {summary.totalWrong} Y
          </span>
        </div>

        <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
          <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
            OBP Puanınız ve Ek Katkısı
          </span>
          <p className="text-2xl font-black text-slate-900 dark:text-white mt-1">
            +{summary.obpContribution}
          </p>
          <span className="text-[11px] text-slate-500">OBP: {summary.obp} / 500</span>
        </div>

        <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
          <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
            Tahmini Ham Puan
          </span>
          <p className="text-2xl font-black text-slate-900 dark:text-white mt-1">
            {summary.estimatedTytRaw}
          </p>
          <span className="text-[11px] text-slate-500">100 taban puan dahil</span>
        </div>

        <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900">
          <span className="text-xs font-semibold text-emerald-700 dark:text-emerald-300">
            Tahmini Yerleştirme Puanı
          </span>
          <p className="text-2xl font-black text-emerald-700 dark:text-emerald-300 mt-1">
            {summary.estimatedTytPlacement}
          </p>
          <span className="text-[11px] text-emerald-600/80 dark:text-emerald-400/80">
            Ham Puan + OBP Ek Puanı
          </span>
        </div>
      </div>
    </div>
  );
}

/* ============================================================================
 * 3. İNTERNET İNDİRME SÜRESİ (DOWNLOAD TIME) HESAPLAMA ARACI
 * ============================================================================ */
function DownloadTimeCalculator() {
  const [fileSize, setFileSize] = useState<string>('65');
  const [unit, setUnit] = useState<'GB' | 'MB'>('GB');
  const [speedMbps, setSpeedMbps] = useState<string>('100');
  const [efficiency, setEfficiency] = useState<'90' | '100' | '75'>('90');

  const calc = useMemo(() => {
    const sizeVal = Math.max(0.1, parseFloat(fileSize) || 1);
    const sizeInMB = unit === 'GB' ? sizeVal * 1024 : sizeVal;
    const mbps = Math.max(1, parseFloat(speedMbps) || 24);
    const effRatio = parseInt(efficiency, 10) / 100;

    const theoreticalMBps = mbps / 8;
    const realMBps = theoreticalMBps * effRatio;
    const totalSeconds = Math.ceil(sizeInMB / realMBps);

    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return {
      theoreticalMBps: theoreticalMBps.toFixed(2),
      realMBps: realMBps.toFixed(2),
      hours,
      minutes,
      seconds,
      totalMinutes: Math.ceil(totalSeconds / 60)
    };
  }, [fileSize, unit, speedMbps, efficiency]);

  return (
    <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-sm space-y-6">
      <div className="flex items-center gap-2.5 border-b border-slate-100 dark:border-slate-800 pb-4">
        <div className="p-2 rounded-xl bg-blue-600 text-white">
          <Clock className="w-5 h-5" />
        </div>
        <div>
          <h2 className="text-base sm:text-lg font-extrabold text-slate-900 dark:text-white">
            Oyun ve Dosya İndirme Süresi Hesaplayıcı
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Dosya boyutunu ve internet hızınızı girerek gerçek indirme süresini saniye hassasiyetiyle öğrenin
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
            İndirilecek Dosya / Oyun Boyutu
          </label>
          <div className="flex gap-2">
            <input
              type="number"
              min={0.1}
              step="any"
              value={fileSize}
              onChange={(e) => setFileSize(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/70 text-slate-900 dark:text-white font-semibold text-sm"
            />
            <select
              value={unit}
              onChange={(e) => setUnit(e.target.value as 'GB' | 'MB')}
              className="px-3 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white font-bold text-xs"
            >
              <option value="GB">GB</option>
              <option value="MB">MB</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
            İnternet Hızınız (Mbps)
          </label>
          <input
            type="number"
            min={1}
            max={10000}
            value={speedMbps}
            onChange={(e) => setSpeedMbps(e.target.value)}
            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/70 text-slate-900 dark:text-white font-semibold text-sm"
          />
          <div className="flex gap-1.5 mt-2">
            {['24', '50', '100', '200', '1000'].map((preset) => (
              <button
                key={preset}
                type="button"
                onClick={() => setSpeedMbps(preset)}
                className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 hover:bg-blue-100 dark:hover:bg-blue-950 text-[11px] font-semibold text-slate-600 dark:text-slate-300"
              >
                {preset} Mbps
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
            Bağlantı Türü &amp; Verimlilik
          </label>
          <select
            value={efficiency}
            onChange={(e) => setEfficiency(e.target.value as '90' | '100' | '75')}
            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/70 text-slate-900 dark:text-white font-semibold text-sm"
          >
            <option value="90">Kablolu / 5 GHz Wi-Fi (%90 Gerçek Hız)</option>
            <option value="75">Standart 2.4 GHz Wi-Fi (%75 Gerçek Hız)</option>
            <option value="100">Teorik Maksimum (%100 Kayıpsız)</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
        <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
          <span className="text-xs font-semibold text-slate-500">Gerçek Aktarım Hızınız</span>
          <p className="text-2xl font-black text-slate-900 dark:text-white mt-1">
            {calc.realMBps} <span className="text-sm font-bold text-blue-600">MB/sn</span>
          </p>
          <span className="text-[11px] text-slate-400">Teorik tavan: {calc.theoreticalMBps} MB/sn</span>
        </div>

        <div className="md:col-span-2 p-4 rounded-2xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900">
          <span className="text-xs font-semibold text-blue-700 dark:text-blue-300">
            Tahmini Toplam İndirme Süresi
          </span>
          <p className="text-2xl sm:text-3xl font-black text-blue-700 dark:text-blue-300 mt-1">
            {calc.hours > 0 && `${calc.hours} saat `}
            {calc.minutes > 0 && `${calc.minutes} dakika `}
            {`${calc.seconds} saniye`}
          </p>
          <span className="text-[11px] text-slate-500">
            Toplam yaklaşık {calc.totalMinutes} dakika içinde tamamlanır.
          </span>
        </div>
      </div>
    </div>
  );
}

/* ============================================================================
 * 4. KDV VE YÜZDE HESAPLAMA ARACI
 * ============================================================================ */
function KdvPercentCalculator() {
  const [amount, setAmount] = useState<string>('1500');
  const [vatRate, setVatRate] = useState<string>('20');
  const [mode, setMode] = useState<'excludeToInclude' | 'includeToExclude'>('excludeToInclude');

  const res = useMemo(() => {
    const val = Math.max(0, parseFloat(amount) || 0);
    const rate = Math.max(0, parseFloat(vatRate) || 20);
    if (mode === 'excludeToInclude') {
      const vat = (val * rate) / 100;
      const total = val + vat;
      return {
        netMatrah: val.toFixed(2),
        vatAmount: vat.toFixed(2),
        grandTotal: total.toFixed(2)
      };
    } else {
      const net = val / (1 + rate / 100);
      const vat = val - net;
      return {
        netMatrah: net.toFixed(2),
        vatAmount: vat.toFixed(2),
        grandTotal: val.toFixed(2)
      };
    }
  }, [amount, vatRate, mode]);

  return (
    <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-sm space-y-6">
      <div className="flex items-center gap-2.5 border-b border-slate-100 dark:border-slate-800 pb-4">
        <div className="p-2 rounded-xl bg-blue-600 text-white">
          <Calculator className="w-5 h-5" />
        </div>
        <div>
          <h2 className="text-base sm:text-lg font-extrabold text-slate-900 dark:text-white">
            KDV Dahil / Hariç Fatura Hesaplayıcı
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            %1, %10, %20 veya özel KDV oranıyla matrah ve genel toplam tutarını hesaplayın
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
            Tutar (TL)
          </label>
          <input
            type="number"
            min={0}
            step="any"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/70 text-slate-900 dark:text-white font-semibold text-sm"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
            Hesaplama Yönü
          </label>
          <select
            value={mode}
            onChange={(e) => setMode(e.target.value as 'excludeToInclude' | 'includeToExclude')}
            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/70 text-slate-900 dark:text-white font-semibold text-sm"
          >
            <option value="excludeToInclude">KDV Hariçten &rarr; KDV Dahile</option>
            <option value="includeToExclude">KDV Dahilden &rarr; KDV Hariçe (Matrah)</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
            KDV Oranı (%)
          </label>
          <div className="flex gap-2">
            {['1', '10', '20'].map((r) => (
              <button
                key={r}
                type="button"
                onClick={() => setVatRate(r)}
                className={`flex-1 py-2.5 rounded-xl text-xs font-bold border transition-colors ${
                  vatRate === r
                    ? 'bg-blue-600 text-white border-blue-600'
                    : 'bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700'
                }`}
              >
                %{r}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
        <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
          <span className="text-xs font-semibold text-slate-500">KDV Hariç Net Matrah</span>
          <p className="text-2xl font-black text-slate-900 dark:text-white mt-1">
            {res.netMatrah} TL
          </p>
        </div>

        <div className="p-4 rounded-2xl bg-amber-50/80 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900">
          <span className="text-xs font-semibold text-amber-700 dark:text-amber-300">
            Hesaplanan KDV Tutarı (%{vatRate})
          </span>
          <p className="text-2xl font-black text-amber-700 dark:text-amber-300 mt-1">
            {res.vatAmount} TL
          </p>
        </div>

        <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900">
          <span className="text-xs font-semibold text-emerald-700 dark:text-emerald-300">
            KDV Dahil Genel Toplam
          </span>
          <p className="text-2xl font-black text-emerald-700 dark:text-emerald-300 mt-1">
            {res.grandTotal} TL
          </p>
        </div>
      </div>
    </div>
  );
}

/* ============================================================================
 * 5. KELİME, KARAKTER VE OKUMA SÜRESİ HESAPLAMA ARACI
 * ============================================================================ */
function WordCountCalculator() {
  const [text, setText] = useState<string>(
    'Bilgi Rotası kelime ve okuma süresi hesaplama aracına hoş geldiniz. Bu alana ödevinizi, resmi dilekçenizi veya makalenizi yapıştırarak kelime ve karakter sayısını anında ölçebilirsiniz.'
  );

  const stats = useMemo(() => {
    const trimmed = text.trim();
    const words = trimmed ? trimmed.split(/\s+/).length : 0;
    const charsWithSpaces = text.length;
    const charsNoSpaces = text.replace(/\s+/g, '').length;
    const sentences = trimmed ? trimmed.split(/[.!?]+/).filter((s) => s.trim().length > 0).length : 0;
    const paragraphs = trimmed ? trimmed.split(/\n+/).filter((p) => p.trim().length > 0).length : 0;

    const silentReadSec = Math.ceil((words / 200) * 60);
    const speechReadSec = Math.ceil((words / 130) * 60);

    const formatDuration = (sec: number) => {
      if (sec === 0) return '0 sn';
      const m = Math.floor(sec / 60);
      const s = sec % 60;
      return m > 0 ? `${m} dk ${s} sn` : `${s} sn`;
    };

    return {
      words,
      charsWithSpaces,
      charsNoSpaces,
      sentences,
      paragraphs,
      silentRead: formatDuration(silentReadSec),
      speechRead: formatDuration(speechReadSec)
    };
  }, [text]);

  return (
    <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-sm space-y-6">
      <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-xl bg-blue-600 text-white">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-base sm:text-lg font-extrabold text-slate-900 dark:text-white">
              Canlı Kelime, Karakter ve Okuma Süresi Ölçer
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Metninizi aşağıya yazın veya yapıştırın
            </p>
          </div>
        </div>
        <button
          type="button"
          onClick={() => setText('')}
          className="px-3 py-1.5 rounded-xl text-xs font-semibold text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200"
        >
          Metni Temizle
        </button>
      </div>

      <textarea
        rows={6}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Metninizi buraya yazın veya yapıştırın..."
        className="w-full p-4 rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/70 text-slate-900 dark:text-white text-sm leading-relaxed focus:outline-hidden focus:border-blue-500"
      />

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        <div className="p-3.5 rounded-2xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900">
          <span className="text-[11px] font-semibold text-blue-700 dark:text-blue-300">Kelime</span>
          <p className="text-xl font-black text-blue-700 dark:text-blue-300 mt-0.5">{stats.words}</p>
        </div>
        <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
          <span className="text-[11px] font-semibold text-slate-500">Karakter (Boşluklu)</span>
          <p className="text-xl font-black text-slate-900 dark:text-white mt-0.5">
            {stats.charsWithSpaces}
          </p>
        </div>
        <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
          <span className="text-[11px] font-semibold text-slate-500">Karakter (Boşluksuz)</span>
          <p className="text-xl font-black text-slate-900 dark:text-white mt-0.5">
            {stats.charsNoSpaces}
          </p>
        </div>
        <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
          <span className="text-[11px] font-semibold text-slate-500">Cümle / Paragraf</span>
          <p className="text-xl font-black text-slate-900 dark:text-white mt-0.5">
            {stats.sentences} / {stats.paragraphs}
          </p>
        </div>
        <div className="p-3.5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900">
          <span className="text-[11px] font-semibold text-emerald-700 dark:text-emerald-300">
            Sessiz Okuma
          </span>
          <p className="text-lg font-black text-emerald-700 dark:text-emerald-300 mt-0.5">
            {stats.silentRead}
          </p>
        </div>
        <div className="p-3.5 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900">
          <span className="text-[11px] font-semibold text-amber-700 dark:text-amber-300">
            Sesli Sunum
          </span>
          <p className="text-lg font-black text-amber-700 dark:text-amber-300 mt-0.5">
            {stats.speechRead}
          </p>
        </div>
      </div>
    </div>
  );
}

/* ============================================================================
 * 6. YAŞ, GÜN VE BAŞVURU YAŞ ŞARTI HESAPLAMA ARACI
 * ============================================================================ */
function AgeCalculator() {
  const [birthDate, setBirthDate] = useState<string>('2001-05-15');
  const [targetDate, setTargetDate] = useState<string>('2026-11-10');

  const ageData = useMemo(() => {
    const b = new Date(birthDate);
    const t = new Date(targetDate);
    if (isNaN(b.getTime()) || isNaN(t.getTime()) || t < b) {
      return null;
    }

    let years = t.getFullYear() - b.getFullYear();
    let months = t.getMonth() - b.getMonth();
    let days = t.getDate() - b.getDate();

    if (days < 0) {
      months -= 1;
      const prevMonth = new Date(t.getFullYear(), t.getMonth(), 0);
      days += prevMonth.getDate();
    }
    if (months < 0) {
      years -= 1;
      months += 12;
    }

    const totalDays = Math.floor((t.getTime() - b.getTime()) / (1000 * 60 * 60 * 24));
    const completedAge = years;
    const takingDaysFromAge = months === 0 && days === 0 ? years : years + 1;

    return {
      years,
      months,
      days,
      totalDays: totalDays.toLocaleString('tr-TR'),
      completedAge,
      takingDaysFromAge
    };
  }, [birthDate, targetDate]);

  return (
    <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-sm space-y-6">
      <div className="flex items-center gap-2.5 border-b border-slate-100 dark:border-slate-800 pb-4">
        <div className="p-2 rounded-xl bg-blue-600 text-white">
          <HelpCircle className="w-5 h-5" />
        </div>
        <div>
          <h2 className="text-base sm:text-lg font-extrabold text-slate-900 dark:text-white">
            Yaş Doldurma ve Gün Alma Hesaplayıcı
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Doğum tarihinizi ve başvuru referans tarihini seçerek resmi yaş durumunuzu kontrol edin
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
            Doğum Tarihiniz
          </label>
          <input
            type="date"
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/70 text-slate-900 dark:text-white font-semibold text-sm"
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
            Referans / Başvuru Tarihi
          </label>
          <input
            type="date"
            value={targetDate}
            onChange={(e) => setTargetDate(e.target.value)}
            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/70 text-slate-900 dark:text-white font-semibold text-sm"
          />
        </div>
      </div>

      {ageData ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
          <div className="p-4 rounded-2xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900">
            <span className="text-xs font-semibold text-blue-700 dark:text-blue-300">Tam Yaşınız</span>
            <p className="text-xl sm:text-2xl font-black text-blue-700 dark:text-blue-300 mt-1">
              {ageData.years} Yıl, {ageData.months} Ay, {ageData.days} Gün
            </p>
            <span className="text-[11px] text-slate-500">Toplam {ageData.totalDays} gün</span>
          </div>

          <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900">
            <span className="text-xs font-semibold text-emerald-700 dark:text-emerald-300">
              Doldurduğunuz Yaş
            </span>
            <p className="text-xl sm:text-2xl font-black text-emerald-700 dark:text-emerald-300 mt-1">
              {ageData.completedAge} Yaşını Doldurmuş
            </p>
            <span className="text-[11px] text-slate-500">
              Resmi işlemlerde bitirilen tam yaş
            </span>
          </div>

          <div className="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900">
            <span className="text-xs font-semibold text-amber-700 dark:text-amber-300">
              Gün Aldığınız Yaş (KPSS / POMEM)
            </span>
            <p className="text-xl sm:text-2xl font-black text-amber-700 dark:text-amber-300 mt-1">
              {ageData.takingDaysFromAge} Yaşından Gün Almış
            </p>
            <span className="text-[11px] text-slate-500">
              &ldquo;{ageData.takingDaysFromAge} yaşından gün almamış olmak&rdquo; şartına takılır
            </span>
          </div>
        </div>
      ) : (
        <p className="text-xs text-rose-600 font-semibold">
          Lütfen geçerli bir doğum tarihi ve doğum tarihinden sonraki bir referans tarihi seçin.
        </p>
      )}
    </div>
  );
}
