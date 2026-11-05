// ============================================================
// РУШІЙ СЦЕНАРНИХ КЕСІВ «семінар = кейс»
// ------------------------------------------------------------
// Спільна модель для кейсів 2–15, бос-файтів КР1/КР2,
// капстоуну та симулятора екзамену. Кожен кейс — це сценарій:
// послідовність екранів (стейджів) семи типів. Рушій малює
// стейджи, нараховує XP і рахує відсоток; специфічні дані
// кожного кейса живуть у src/lib/games/*.
//
// Стейджі:
//   brief    — мінілекція: основна проблема, суперечність,
//              як суперечність враховується/розв'язується,
//              теорія теми (саме вона передує практичним кейсам)
//   quiz     — питання з однією правильною відповіддю + розбір
//   sort     — розкладання карток по кошиках (без таймера)
//   match    — співвіднесення пар (термін ↔ визначення)
//   order    — побудова правильної послідовності
//   decision — управлінське рішення з наслідками (якість:
//              best 15 XP / ok 8 XP / poor 0 XP — або своя ціна)
//   reflect  — рефлексія без неправильних відповідей (3 XP)
//
// Налаштування кейса: бейдж (за поріг %), вплив на індикатори
// громади за перше проходження, паспорт капстоуну.
// ============================================================

import type { Bi } from './pm-i18n'
import type { Indicators } from './pm-office'

// ---------------- БЛОКИ МІНІЛЕКЦІЇ ----------------

export type BriefBlock =
  | { t: 'p'; text: Bi }
  | { t: 'pc'; label: Bi; icon: string; text: Bi; tone: 'orange' | 'amber' | 'green' }
  | { t: 'list'; title?: Bi; items: Bi[] }
  | { t: 'facts'; items: { label: Bi; value: Bi }[] }

export interface BriefStage {
  kind: 'brief'
  id: string
  title: Bi
  blocks: BriefBlock[]
}

export interface QuizQ {
  text: Bi
  options: Bi[]
  correct: number // індекс правильної відповіді
  why: Bi
}

export interface QuizStage {
  kind: 'quiz'
  id: string
  title: Bi
  intro?: Bi
  questions: QuizQ[]
}

export interface SortStage {
  kind: 'sort'
  id: string
  title: Bi
  intro: Bi
  buckets: Bi[]
  bucketHint?: Bi[] // підказка під назвою кошика
  items: { text: Bi; bucket: number; why: Bi }[]
}

export interface MatchStage {
  kind: 'match'
  id: string
  title: Bi
  intro: Bi
  pairs: { left: Bi; right: Bi; why?: Bi }[] // права колонка малюється перемішаною
}

export interface OrderStage {
  kind: 'order'
  id: string
  title: Bi
  intro: Bi
  items: Bi[] // правильний порядок = порядок масиву; на екрані перемішується
  outro?: Bi
}

export interface DecisionOption {
  text: Bi
  quality: 'best' | 'ok' | 'poor'
  outcome: Bi // що станеться після рішення
  xp?: number // усталено: best 15 / ok 8 / poor 0
}

export interface DecisionStage {
  kind: 'decision'
  id: string
  title: Bi
  intro: Bi
  options: DecisionOption[]
}

export interface ReflectStage {
  kind: 'reflect'
  id: string
  title: Bi
  intro: Bi
  items: { text: Bi; options: Bi[]; insight: Bi }[] // немає неправильних; 3 XP за пункт
}

export type Stage =
  | BriefStage
  | QuizStage
  | SortStage
  | MatchStage
  | OrderStage
  | DecisionStage
  | ReflectStage

// ---------------- КЕЙС ЦІЛОЮ ----------------

export interface ScenarioDef {
  id: string // 'g2' … 'g15', 'kr1', 'kr2', 'cap', 'exam'
  badgeId?: string // бейдж за проходження
  badgeThreshold?: number // % для бейджа (усталено 85; бос-файти 80)
  effect: Partial<Indicators> // вплив першого проходження на індикатори
  perfectEffect?: Partial<Indicators> // додатково за ≥ 95 %
  introKicker: Bi // «Семінар 2 · Тема 2 · 1 бал»
  title: Bi
  summary: Bi // короткий опис для хаба
  durationMin: number // орієнтир часу
  stages: Stage[]
  debrief: {
    heading: Bi
    recap: Bi[] // «запам'ятайте з теми…»
  }
  passport?: { stageId: string; label: Bi }[] // для капстоуну: показати вибрані рішення як паспорт проєкту
}

export interface ScenarioOutcome {
  id: string
  score: number
  max: number
  pct: number
  xp: number // без бонусу за завершення — бонус додає застосунок
  firstCompletion: boolean
  badgeEarned: boolean
  badgeId?: string // id бейджа, якщо зароблений
  effect: Partial<Indicators>
}

// ---------------- ПІДСУМОК СТЕЙДЖА ----------------

export const XP_CORRECT = 5
export const XP_REFLECT = 3
export const XP_COMPLETION_BONUS = 20
export const REPLAY_FACTOR = 0.5

export const optionXp = (q: 'best' | 'ok' | 'poor', explicit?: number) =>
  explicit ?? (q === 'best' ? 15 : q === 'ok' ? 8 : 0)

export function stageMax(st: Stage): number {
  switch (st.kind) {
    case 'quiz':
      return st.questions.length * XP_CORRECT
    case 'sort':
      return st.items.length * XP_CORRECT
    case 'match':
      return st.pairs.length * XP_CORRECT
    case 'order':
      return st.items.length * XP_CORRECT
    case 'decision':
      return Math.max(...st.options.map((o) => optionXp(o.quality, o.xp)))
    case 'reflect':
      return st.items.length * XP_REFLECT
    default:
      return 0 // brief
  }
}

export function scenarioMax(def: ScenarioDef): number {
  return def.stages.reduce((s, st) => s + stageMax(st), 0)
}

/** Детерміноване «перемішування» для order/match: залежить від id кейса,
 *  щоб порядок був стабільним між рендерами (без гідратаційних стрибків). */
export function shuffledFor(seed: string, n: number): number[] {
  const idx = Array.from({ length: n }, (_, i) => i)
  let h = 0x811c9dc5
  for (let i = 0; i < seed.length; i++) {
    h ^= seed.charCodeAt(i)
    h = Math.imul(h, 0x01000193) >>> 0
  }
  for (let i = n - 1; i > 0; i--) {
    h = (Math.imul(h, 0x01000193) ^ (h >>> 7)) >>> 0
    const j = h % (i + 1)
    ;[idx[i], idx[j]] = [idx[j], idx[i]]
  }
  // гарантуємо, що порядок зміщений (не збігається з правильним)
  if (idx.every((v, i) => v === i) && n > 1) [idx[0], idx[1]] = [idx[1], idx[0]]
  return idx
}
