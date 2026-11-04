'use client'

// ============================================================
// ПРОЄКТНИЙ ОФІС ВІДНОВЛЕННЯ ГРОМАДИ · Соснівка — оболонка
// ------------------------------------------------------------
// Серйозна навчальна гра з дисципліни «Проєктна діяльність
// органів публічної влади» (КНЕУ): наскрізна кар'єра службовця
// + міні-ігри «семінар = гра». Логіка — у src/lib/pm-office.ts,
// хаб — components/pm-office/hub.tsx, гра семінару 1 —
// components/pm-office/sort-game.tsx. Прогрес — у localStorage,
// без облікових записів і персональних даних.
// ============================================================

import { useEffect, useRef, useState } from 'react'
import { LangSwitch, useL, useTitle } from '@/lib/pm-i18n'
import {
  clampInd,
  EMPTY_PROGRESS,
  normalizeProgress,
  STORAGE_KEY,
  type Game1Outcome,
  type IndicatorId,
  type Progress,
} from '@/lib/pm-office'
import OfficeHub from '@/components/pm-office/hub'
import SortGame from '@/components/pm-office/sort-game'

type View = 'office' | 'g1'

export default function PmOfficeApp() {
  const t = useL()
  useTitle(
    'Проєктний офіс відновлення громади — серйозна навчальна гра',
    'Community Recovery Project Office — a serious learning game',
  )

  const [view, setView] = useState<View>('office')
  const [progress, setProgress] = useState<Progress>(EMPTY_PROGRESS)
  const hydrated = useRef(false)

  // відновлення прогресу (приватний режим — просто порожній прогрес)
  useEffect(() => {
    queueMicrotask(() => {
      try {
        const raw = localStorage.getItem(STORAGE_KEY)
        if (raw) setProgress(normalizeProgress(JSON.parse(raw) as unknown))
      } catch {
        /* приватний режим */
      }
      hydrated.current = true
    })
  }, [])

  // збереження прогресу
  useEffect(() => {
    if (!hydrated.current) return
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress))
    } catch {
      /* приватний режим */
    }
  }, [progress])

  const applyOutcome = (o: Game1Outcome) => {
    setProgress((prev) => {
      const badges =
        o.badgeEarned && !prev.badges.includes('conceptor') ? [...prev.badges, 'conceptor'] : prev.badges
      const indicators = { ...prev.indicators }
      for (const [k, v] of Object.entries(o.effect)) {
        const key = k as IndicatorId
        indicators[key] = clampInd(indicators[key] + (v ?? 0))
      }
      const pct = Math.round(((o.correctCards + o.correctRoles) / (o.totalCards + o.totalRoles)) * 100)
      const rec = prev.games['g1'] ?? { best: 0, completions: 0 }
      return {
        ...prev,
        xp: prev.xp + o.xp,
        badges,
        indicators,
        games: {
          ...prev.games,
          g1: { best: Math.max(rec.best, pct), completions: rec.completions + 1 },
        },
      }
    })
  }

  const backToOffice = () => {
    setView('office')
    if (typeof window !== 'undefined') window.scrollTo({ top: 0 })
  }

  return (
    <div className="flex min-h-screen flex-col bg-[#F4F1E9] text-stone-800">
      {/* ================= ШАПКА ================= */}
      <header className="bg-gradient-to-br from-[#0E6B62] via-[#15857A] to-[#15857A] text-white">
        <div className="mx-auto max-w-6xl px-4 pb-6 pt-5 sm:px-6">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div className="flex items-start gap-3">
              <span className="mt-0.5 text-3xl" aria-hidden>
                🏛️
              </span>
              <div>
                <h1 className="text-lg font-bold leading-tight sm:text-2xl">
                  {t('Проєктний офіс відновлення громади', 'Community Recovery Project Office')}
                </h1>
                <p className="mt-1 max-w-2xl text-xs leading-relaxed text-white/75 sm:text-sm">
                  {t(
                    'Серйозна навчальна гра з дисципліни «Проєктна діяльність органів публічної влади» · КНЕУ',
                    'A serious learning game for the course “Project Activity of Public Authorities” · KNEU',
                  )}
                </p>
              </div>
            </div>
            <LangSwitch className="shrink-0 !border-white/30 !bg-white/10 [&_button]:!text-white/70 [&_button:hover]:!bg-white/20 [&_button]:[&[aria-pressed='true']]:!bg-white [&_button]:[&[aria-pressed='true']]:!text-[#0E6B62]" />
          </div>
          <div className="mt-3 flex flex-wrap gap-2 text-[11px] font-medium text-white/80">
            <span className="rounded-lg bg-white/10 px-2.5 py-1">
              📍 {t('м. Соснівка', 'City of Sosnivka')}
            </span>
            <span className="rounded-lg bg-white/10 px-2.5 py-1">
              {t('~40 000 мешканців', '~40,000 residents')}
            </span>
            <span className="rounded-lg bg-white/10 px-2.5 py-1">
              {t('громада повертається додому', 'the community is coming home')}
            </span>
          </div>
        </div>
      </header>

      {/* ================= ВМІСТ ================= */}
      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-6 sm:px-6">
        {view === 'office' ? (
          <OfficeHub progress={progress} onPlayGame1={() => setView('g1')} onImportProgress={setProgress} />
        ) : (
          <SortGame
            firstCompletion={!(progress.games['g1'] && progress.games['g1'].completions > 0)}
            onFinish={applyOutcome}
            onExit={backToOffice}
          />
        )}
      </main>

      {/* ================= ПІДВАЛ ================= */}
      <footer className="mt-auto bg-[#0E6B62] px-4 py-4 text-center text-[11px] leading-relaxed text-white/70 sm:px-6">
        <p>
          {t(
            'Проєктний офіс відновлення громади · Серйозні навчальні ігри · Листопад 2026',
            'Community Recovery Project Office · Serious learning games · November 2026',
          )}
        </p>
        <p className="mt-1">
          {t(
            'Місто, персонажі та кейси повністю вигадані. Війна присутня лише як управлінські умови — без бойових сцен. Прогрес зберігається локально у вашому браузері.',
            'The city, characters and cases are entirely fictional. The war appears only as administrative conditions — no combat scenes. Progress is stored locally in your browser.',
          )}
        </p>
      </footer>
    </div>
  )
}
