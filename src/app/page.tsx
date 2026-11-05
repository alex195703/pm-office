'use client'

// ============================================================
// ПРОЄКТНИЙ ОФІС ВІДНОВЛЕННЯ ГРОМАДИ · Соснівка — оболонка
// ------------------------------------------------------------
// Ситуаційний тренажер проєктної діяльності з дисципліни
// «Проєктна діяльність органів публічної влади» (КНЕУ):
// наскрізна кар'єра службовця + сценарні кейси «семінар = кейс».
// Логіка — у src/lib/pm-office.ts,
// хаб — components/pm-office/hub.tsx, кейс семінару 1 —
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
import { GAME_ORDER, GAMES } from '@/lib/games'
import type { ScenarioOutcome } from '@/lib/scenario'
import OfficeHub from '@/components/pm-office/hub'
import SortGame from '@/components/pm-office/sort-game'
import ScenarioGame from '@/components/pm-office/scenario-game'

type View = 'office' | string // 'office' | id кейса ('g1'…'g15','kr1','kr2','cap','exam')

export default function PmOfficeApp() {
  const t = useL()
  useTitle(
    'Проєктний офіс відновлення громади — ситуаційний тренажер',
    'Community Recovery Project Office — a situational training simulator',
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
      const pct = Math.round(
        ((o.correctCards + o.correctRoles + o.correctSigns + o.conceptScore) /
          (o.totalCards + o.totalRoles + o.totalSigns + o.conceptMax)) *
          100,
      )
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

  /** Спільний обробник завершення сценарного кейса (g2 … exam) */
  const applyScenarioOutcome = (o: ScenarioOutcome) => {
    setProgress((prev) => {
      const badges =
        o.badgeEarned && o.badgeId && !prev.badges.includes(o.badgeId)
          ? [...prev.badges, o.badgeId]
          : prev.badges
      const indicators = { ...prev.indicators }
      for (const [k, v] of Object.entries(o.effect)) {
        const key = k as IndicatorId
        indicators[key] = clampInd(indicators[key] + (v ?? 0))
      }
      const rec = prev.games[o.id] ?? { best: 0, completions: 0 }
      return {
        ...prev,
        xp: prev.xp + o.xp,
        badges,
        indicators,
        games: {
          ...prev.games,
          [o.id]: { best: Math.max(rec.best, o.pct), completions: rec.completions + 1 },
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
                    'Ситуаційний тренажер проєктної діяльності · «Проєктна діяльність органів публічної влади» · КНЕУ',
                    'A situational training simulator for the course “Project Activity of Public Authorities” · KNEU',
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
          <OfficeHub
            progress={progress}
            onPlayGame={(id) => {
              setView(id)
              window.scrollTo({ top: 0 })
            }}
            onImportProgress={setProgress}
            onProfile={(name, group) => setProgress((prev) => ({ ...prev, name, group }))}
          />
        ) : view === 'g1' ? (
          <SortGame
            firstCompletion={!(progress.games['g1'] && progress.games['g1'].completions > 0)}
            onFinish={applyOutcome}
            onExit={backToOffice}
          />
        ) : GAMES[view] ? (
          <ScenarioGame
            key={view}
            def={GAMES[view]}
            firstCompletion={!(progress.games[view] && progress.games[view].completions > 0)}
            onFinish={applyScenarioOutcome}
            onExit={backToOffice}
            onNext={
              GAME_ORDER.indexOf(view) >= 0 && GAME_ORDER.indexOf(view) + 1 < GAME_ORDER.length
                ? () => {
                    setView(GAME_ORDER[GAME_ORDER.indexOf(view) + 1])
                    window.scrollTo({ top: 0 })
                  }
                : undefined
            }
          />
        ) : (
          <div className="rounded-2xl bg-white p-8 text-center ring-1 ring-stone-200">
            <div className="text-4xl">🚧</div>
            <h2 className="mt-3 text-lg font-bold text-stone-800">
              {t('Кейс ще збирається', 'The case is still being built')}
            </h2>
            <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-stone-600">
              {t(
                'Цей кейс курсу перебуває у розробці. Поверніться до хаба — там видно всі вже доступні кейси.',
                'This course case is still in development. Return to the hub — all currently available cases are listed there.',
              )}
            </p>
            <button
              onClick={backToOffice}
              className="mt-4 rounded-xl bg-[#15857A] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#0E6B62]"
            >
              {t('До проєктного офісу', 'Back to the project office')}
            </button>
          </div>
        )}
      </main>

      {/* ================= ПІДВАЛ ================= */}
      <footer className="mt-auto bg-[#0E6B62] px-4 py-4 text-center text-[11px] leading-relaxed text-white/70 sm:px-6">
        <p>
          {t(
            'Проєктний офіс відновлення громади · Ситуаційний тренажер проєктної діяльності · Листопад 2026',
            'Community Recovery Project Office · Situational project-activity simulator · November 2026',
          )}
        </p>
        <p className="mt-1">
          {t(
            'Місто, персонажі та кейси повністю вигадані. Війна присутня лише як управлінські умови — без бойових сцен. Прогрес зберігається локально у вашому браузері.',
            'The city, characters and cases are entirely fictional. The war appears only as administrative conditions — no combat scenes. Progress is stored locally in your browser.',
          )}
        </p>
        <p className="mt-2">
          {t(
            'Студентам: код звіту викладачу — у розділі «Профіль студента» нижче.',
            'Students: the report code for the lecturer is in the “Student profile” section below.',
          )}
        </p>
      </footer>
    </div>
  )
}
