'use client'

// ============================================================
// РУШІЙ СЦЕНАРНИХ КЕСІВ — спільний компонент для кейсів 2–15,
// бос-файтів, капстоуну і симулятора екзамену.
// Малює стейджі зі ScenarioDef, нараховує XP, показує дебриф
// з теоретичним узагальненням і (для капстоуну) паспортом.
// Кожен тип стейджа — окремий компонент: стабільний порядок
// хуків незалежно від типу поточного кроку.
// ============================================================

import { useMemo, useRef, useState } from 'react'
import { useBi, useL } from '@/lib/pm-i18n'
import { BADGES, INDICATORS, type IndicatorId } from '@/lib/pm-office'
import {
  XP_COMPLETION_BONUS,
  REPLAY_FACTOR,
  optionXp,
  scenarioMax,
  shuffledFor,
  type ScenarioDef,
  type ScenarioOutcome,
} from '@/lib/scenario'

export default function ScenarioGame({
  def,
  firstCompletion,
  onFinish,
  onExit,
  onNext,
  nextLabel,
}: {
  def: ScenarioDef
  firstCompletion: boolean
  onFinish: (o: ScenarioOutcome) => void
  onExit: () => void
  onNext?: () => void
  nextLabel?: string
}) {
  const t = useL()
  const B = useBi()

  const max = useMemo(() => scenarioMax(def), [def])

  // ---------- стан прогресу ----------
  const [stageIdx, setStageIdx] = useState(0)
  const [score, setScore] = useState(0)
  const [choices, setChoices] = useState<Record<string, string>>({})
  const [outcome, setOutcome] = useState<ScenarioOutcome | null>(null)
  const [done, setDone] = useState(false)
  const finishedRef = useRef(false)

  const reset = () => {
    setStageIdx(0)
    setScore(0)
    setChoices({})
    setOutcome(null)
    setDone(false)
    finishedRef.current = false
  }

  const finish = (finalScore: number) => {
    if (finishedRef.current) return
    finishedRef.current = true
    const pct = Math.round((finalScore / max) * 100)
    const threshold = def.badgeThreshold ?? 85
    const badgeEarned = !!def.badgeId && pct >= threshold
    const effect = firstCompletion
      ? { ...def.effect, ...(pct >= 95 && def.perfectEffect ? def.perfectEffect : {}) }
      : {}
    const xp = firstCompletion
      ? finalScore + XP_COMPLETION_BONUS
      : Math.floor((finalScore + XP_COMPLETION_BONUS) * REPLAY_FACTOR)
    const o: ScenarioOutcome = {
      id: def.id,
      score: finalScore,
      max,
      pct,
      xp,
      firstCompletion,
      badgeEarned,
      badgeId: badgeEarned ? def.badgeId : undefined,
      effect,
    }
    setOutcome(o)
    setDone(true)
    onFinish(o)
  }

  const nextStage = () => {
    if (stageIdx + 1 >= def.stages.length) {
      finish(score)
      return
    }
    setStageIdx((i) => i + 1)
  }

  const stage = def.stages[stageIdx]

  // ---------- дебриф ----------
  if (done && outcome) {
    const badge = def.badgeId ? BADGES.find((b) => b.id === def.badgeId) : undefined
    return (
      <div className="mx-auto max-w-3xl space-y-4">
        <div className="rounded-2xl bg-white p-6 ring-1 ring-stone-200">
          <div className="text-xs font-bold uppercase tracking-wider text-[#FF6A3B]">
            {t('Кейс завершено', 'Case complete')}
          </div>
          <h2 className="mt-1 text-xl font-bold text-stone-800">{B(def.debrief.heading)}</h2>

          <div className="mt-4 grid grid-cols-3 gap-3">
            <Stat label={t('Бали', 'Score')} value={`${outcome.score}/${outcome.max}`} />
            <Stat label={t('Точність', 'Accuracy')} value={`${outcome.pct}%`} />
            <Stat label="XP" value={`+${outcome.xp}`} accent />
          </div>

          {badge && outcome.badgeEarned && (
            <div className="mt-4 flex items-center gap-3 rounded-2xl bg-[#F4F1E9] p-4 ring-1 ring-[#15857A]/30">
              <span className="text-3xl">{badge.icon}</span>
              <div>
                <div className="text-sm font-bold text-stone-800">
                  {t('Отримано бейдж', 'Badge earned')} — «{B(badge.name)}»
                </div>
                <div className="text-xs text-stone-500">{B(badge.condition)}</div>
              </div>
            </div>
          )}

          {Object.keys(outcome.effect).length > 0 && (
            <div className="mt-3 flex flex-wrap items-center gap-2 text-xs">
              <span className="text-stone-500">{t('Індикатори громади:', 'Community indicators:')}</span>
              {Object.entries(outcome.effect).map(([k, v]) => {
                const ind = INDICATORS.find((x) => x.id === (k as IndicatorId))
                return (
                  <span key={k} className="rounded-lg bg-emerald-50 px-2 py-1 font-semibold text-emerald-700 ring-1 ring-emerald-200">
                    +{v} {ind ? B(ind.name) : k}
                  </span>
                )
              })}
            </div>
          )}

          {def.passport && (
            <div className="mt-4 rounded-xl bg-[#F4F1E9] p-4 ring-1 ring-stone-200">
              <div className="text-sm font-bold text-stone-800">
                {t('Паспорт вашого проєкту', 'Your project passport')}
              </div>
              <dl className="mt-2 space-y-1.5 text-xs leading-relaxed text-stone-600">
                {def.passport.map((p) => (
                  <div key={p.stageId}>
                    <dt className="inline font-semibold text-stone-700">{B(p.label)}: </dt>
                    <dd className="inline">{choices[p.stageId] ?? '—'}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-2 text-[11px] text-stone-500">
                {t(
                  'Збережіть ці формулювання — вони стануть основою індивідуального завдання.',
                  'Keep these wordings — they will become the basis of your individual assignment.',
                )}
              </p>
            </div>
          )}

          <div className="mt-4 rounded-xl bg-[#F4F1E9] p-4 ring-1 ring-stone-200">
            <div className="text-sm font-bold text-stone-800">{t('Запам’ятайте', 'Remember')}</div>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-xs leading-relaxed text-stone-600">
              {def.debrief.recap.map((r, i) => (
                <li key={i}>{B(r)}</li>
              ))}
            </ul>
          </div>

          {!outcome.firstCompletion && (
            <p className="mt-3 text-xs text-stone-500">
              {t(
                'Повторне проходження — половина досвіду, без штрафу. Найкращий результат зафіксовано.',
                'A repeat run earns half the XP, with no penalty. Your best result is kept.',
              )}
            </p>
          )}

          <div className="mt-5 flex flex-wrap gap-3">
            <button
              onClick={onExit}
              className="rounded-xl bg-[#15857A] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#0E6B62]"
            >
              {t('До проєктного офісу', 'Back to the project office')}
            </button>
            {onNext && (
              <button
                onClick={() => {
                  reset()
                  onNext()
                }}
                className="rounded-xl bg-[#FF6A3B] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#e55a2d]"
              >
                {nextLabel ?? t('Наступний кейс →', 'Next case →')}
              </button>
            )}
            <button
              onClick={reset}
              className="rounded-xl border border-stone-300 bg-white px-5 py-3 text-sm font-medium text-stone-600 hover:bg-stone-50"
            >
              {t('↻ Пройти ще раз', '↻ Play again')}
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-3xl space-y-4">
      {/* прогрес */}
      <div className="rounded-2xl bg-white p-4 ring-1 ring-stone-200">
        <div className="flex items-center justify-between text-xs font-medium text-stone-500">
          <span>{B(def.title)}</span>
          <span>
            {t('Крок', 'Step')} {stageIdx + 1} / {def.stages.length} · {t('бали', 'score')}: {score}/{max}
          </span>
        </div>
        <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-stone-200">
          <div
            className="h-full rounded-full bg-[#15857A] transition-all duration-500"
            style={{ width: `${((stageIdx + 1) / def.stages.length) * 100}%` }}
          />
        </div>
      </div>

      {/* ---------- диспетчер стейджів ---------- */}
      {stage.kind === 'brief' && <BriefView st={stage} def={def} onNext={nextStage} />}
      {stage.kind === 'quiz' && <QuizView st={stage} def={def} onNext={nextStage} onScore={onScoreOf(setScore)} />}
      {stage.kind === 'sort' && <SortView st={stage} def={def} onNext={nextStage} onScore={onScoreOf(setScore)} />}
      {stage.kind === 'match' && <MatchView st={stage} def={def} onNext={nextStage} onScore={onScoreOf(setScore)} />}
      {stage.kind === 'order' && <OrderView st={stage} def={def} onNext={nextStage} onScore={onScoreOf(setScore)} />}
      {stage.kind === 'decision' && (
        <DecisionView st={stage} def={def} onNext={nextStage} onScore={onScoreOf(setScore)} onChoice={recordChoice} />
      )}
      {stage.kind === 'reflect' && <ReflectView st={stage} def={def} onNext={nextStage} onScore={onScoreOf(setScore)} />}
    </div>
  )

  function recordChoice(stageId: string, text: string) {
    setChoices((c) => ({ ...c, [stageId]: text }))
  }
}

function onScoreOf(setScore: (f: (s: number) => number) => void) {
  return (pts: number) => setScore((s) => s + pts)
}

// ============================================================
// BRIEF — мінілекція
// ============================================================

function BriefView({ st, def, onNext }: { st: Extract<ScenarioDef['stages'][number], { kind: 'brief' }>; def: ScenarioDef; onNext: () => void }) {
  const t = useL()
  const B = useBi()
  return (
    <div className="rounded-2xl bg-white p-6 ring-1 ring-stone-200">
      <div className="text-xs font-bold uppercase tracking-wider text-[#FF6A3B]">{B(def.introKicker)}</div>
      <h2 className="mt-1 text-2xl font-bold text-stone-800">{B(st.title)}</h2>
      <div className="mt-4 space-y-3">
        {st.blocks.map((b, i) => {
          if (b.t === 'p') {
            return (
              <p key={i} className="text-sm leading-relaxed text-stone-600">
                {B(b.text)}
              </p>
            )
          }
          if (b.t === 'pc') {
            const ring = b.tone === 'orange' ? 'ring-[#FF6A3B]/40' : b.tone === 'amber' ? 'ring-amber-300' : 'ring-[#15857A]/40'
            return (
              <div key={i} className={`rounded-xl bg-[#F4F1E9] p-4 ring-1 ${ring}`}>
                <div className="text-sm font-bold text-stone-800">
                  {b.icon} {B(b.label)}
                </div>
                <p className="mt-1 text-xs leading-relaxed text-stone-600">{B(b.text)}</p>
              </div>
            )
          }
          if (b.t === 'list') {
            return (
              <div key={i} className="rounded-xl bg-stone-50 p-4 ring-1 ring-stone-200">
                {b.title && <div className="text-sm font-bold text-stone-800">{B(b.title)}</div>}
                <ul className="mt-2 list-disc space-y-1 pl-5 text-xs leading-relaxed text-stone-600">
                  {b.items.map((it, j) => (
                    <li key={j}>{B(it)}</li>
                  ))}
                </ul>
              </div>
            )
          }
          return (
            <div key={i} className="grid gap-2 sm:grid-cols-3">
              {b.items.map((f, j) => (
                <div key={j} className="rounded-xl bg-stone-50 p-3 ring-1 ring-stone-200">
                  <div className="text-[11px] font-bold uppercase tracking-wide text-stone-400">{B(f.label)}</div>
                  <div className="mt-1 text-sm font-semibold leading-snug text-stone-700">{B(f.value)}</div>
                </div>
              ))}
            </div>
          )
        })}
      </div>
      <button
        onClick={onNext}
        className="mt-5 rounded-xl bg-[#15857A] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#0E6B62]"
      >
        {t('▶ Приступити до завдань', '▶ Start the tasks')}
      </button>
    </div>
  )
}

// ============================================================
// QUIZ — питання з однією правильною відповіддю
// ============================================================

function QuizView({
  st,
  def,
  onNext,
  onScore,
}: {
  st: Extract<ScenarioDef['stages'][number], { kind: 'quiz' }>
  def: ScenarioDef
  onNext: () => void
  onScore: (pts: number) => void
}) {
  const t = useL()
  const B = useBi()
  const [qIdx, setQIdx] = useState(0)
  const [pick, setPick] = useState<number | null>(null)
  const q = st.questions[qIdx]
  const answered = pick !== null
  return (
    <div className="space-y-4">
      <div className="rounded-2xl bg-white p-5 ring-1 ring-stone-200">
        <div className="text-xs font-bold uppercase tracking-wider text-[#FF6A3B]">
          {B(st.title)} · {qIdx + 1}/{st.questions.length}
        </div>
        {st.intro && qIdx === 0 && <p className="mt-2 text-sm leading-relaxed text-stone-600">{B(st.intro)}</p>}
        <p className="mt-3 text-base font-semibold leading-snug text-stone-800">{B(q.text)}</p>
      </div>

      <div className="space-y-2">
        {q.options.map((opt, i) => {
          const picked = pick === i
          const isCorrect = i === q.correct
          return (
            <button
              key={i}
              onClick={() => {
                if (answered) return
                setPick(i)
                if (isCorrect) onScore(5)
              }}
              disabled={answered}
              className={`block w-full rounded-2xl p-4 text-left text-sm font-medium leading-snug ring-1 transition ${
                answered
                  ? isCorrect
                    ? 'bg-emerald-50 text-emerald-900 ring-emerald-300'
                    : picked
                      ? 'bg-amber-50 text-amber-900 ring-amber-300'
                      : 'bg-white text-stone-400 ring-stone-200 opacity-70'
                  : 'bg-white text-stone-700 ring-stone-200 hover:bg-stone-50 hover:ring-[#15857A]/40'
              }`}
            >
              <span className="mr-2 font-bold text-stone-400">{String.fromCharCode(65 + i)}.</span>
              {B(opt)}
              {answered && isCorrect && <span className="ml-2 font-bold text-emerald-600">✓</span>}
              {answered && picked && !isCorrect && <span className="ml-2 font-bold text-amber-600">✗</span>}
            </button>
          )
        })}
      </div>

      {answered && (
        <div className="rounded-2xl bg-white p-5 ring-1 ring-stone-200">
          <p className="text-sm leading-relaxed text-stone-600">{B(q.why)}</p>
          <button
            onClick={() => {
              if (qIdx + 1 >= st.questions.length) onNext()
              else {
                setQIdx(qIdx + 1)
                setPick(null)
              }
            }}
            className="mt-4 rounded-xl bg-[#15857A] px-5 py-2.5 text-sm font-bold text-white transition hover:bg-[#0E6B62]"
          >
            {qIdx + 1 >= st.questions.length ? t('Далі →', 'Next →') : t('Наступне питання →', 'Next question →')}
          </button>
        </div>
      )}
    </div>
  )
}

// ============================================================
// SORT — розкладання по кошиках (без таймера)
// ============================================================

function SortView({
  st,
  def,
  onNext,
  onScore,
}: {
  st: Extract<ScenarioDef['stages'][number], { kind: 'sort' }>
  def: ScenarioDef
  onNext: () => void
  onScore: (pts: number) => void
}) {
  const t = useL()
  const B = useBi()
  const [idx, setIdx] = useState(0)
  const [pick, setPick] = useState<number | null>(null)
  const item = st.items[idx]
  const answered = pick !== null
  return (
    <div className="space-y-4">
      <div className="rounded-2xl bg-white p-5 ring-1 ring-stone-200">
        <div className="text-xs font-bold uppercase tracking-wider text-[#FF6A3B]">
          {B(st.title)} · {idx + 1}/{st.items.length}
        </div>
        <p className="mt-2 text-sm leading-relaxed text-stone-600">{B(st.intro)}</p>
      </div>

      <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-stone-200">
        <p className="text-lg font-semibold leading-snug text-stone-800">{B(item.text)}</p>
      </div>

      <div className={`grid gap-3 ${st.buckets.length > 2 ? 'sm:grid-cols-2' : 'grid-cols-2'}`}>
        {st.buckets.map((b, i) => {
          const isRight = i === item.bucket
          return (
            <button
              key={i}
              onClick={() => {
                if (answered) return
                setPick(i)
                if (isRight) onScore(5)
              }}
              disabled={answered}
              className={`rounded-2xl p-4 text-left ring-1 transition ${
                answered
                  ? isRight
                    ? 'bg-[#15857A] text-white ring-[#15857A]'
                    : pick === i
                      ? 'bg-amber-50 ring-amber-300'
                      : 'bg-white ring-stone-200 opacity-60'
                  : 'bg-white ring-[#15857A]/30 hover:bg-[#15857A]/5 hover:ring-[#15857A]'
              }`}
            >
              <div className={`text-sm font-bold ${answered && isRight ? 'text-white' : 'text-stone-800'}`}>
                {B(b)}
                {answered && isRight && <span className="ml-1.5">✓</span>}
              </div>
              {st.bucketHint?.[i] && (
                <div className={`mt-0.5 text-xs ${answered && isRight ? 'text-white/80' : 'text-stone-500'}`}>
                  {B(st.bucketHint[i])}
                </div>
              )}
            </button>
          )
        })}
      </div>

      {answered && (
        <div className={`rounded-2xl p-5 ring-1 ${pick === item.bucket ? 'bg-emerald-50 ring-emerald-200' : 'bg-amber-50 ring-amber-200'}`}>
          <div className={`text-sm font-bold ${pick === item.bucket ? 'text-emerald-700' : 'text-amber-700'}`}>
            {pick === item.bucket ? t('✓ Правильно', '✓ Correct') : t('✗ Не зовсім', '✗ Not quite')}
          </div>
          <p className="mt-2 text-sm leading-relaxed text-stone-700">{B(item.why)}</p>
          <button
            onClick={() => {
              if (idx + 1 >= st.items.length) onNext()
              else {
                setIdx(idx + 1)
                setPick(null)
              }
            }}
            className="mt-4 rounded-xl bg-[#15857A] px-5 py-2.5 text-sm font-bold text-white transition hover:bg-[#0E6B62]"
          >
            {idx + 1 >= st.items.length ? t('Далі →', 'Next →') : t('Наступна картка →', 'Next card →')}
          </button>
        </div>
      )}
    </div>
  )
}

// ============================================================
// MATCH — співвіднесення пар
// ============================================================

function MatchView({
  st,
  def,
  onNext,
  onScore,
}: {
  st: Extract<ScenarioDef['stages'][number], { kind: 'match' }>
  def: ScenarioDef
  onNext: () => void
  onScore: (pts: number) => void
}) {
  const t = useL()
  const B = useBi()
  const [sel, setSel] = useState<Record<number, number>>({})
  const [checked, setChecked] = useState(false)
  // перемішаний список правих відповідей: dispIdx → original pair idx
  const shuffled = useMemo(() => shuffledFor(def.id + st.id, st.pairs.length), [def.id, st.id, st.pairs.length])
  const allPicked = st.pairs.every((_, i) => sel[i] !== undefined && sel[i] >= 0)
  return (
    <div className="space-y-4">
      <div className="rounded-2xl bg-white p-5 ring-1 ring-stone-200">
        <div className="text-xs font-bold uppercase tracking-wider text-[#FF6A3B]">{B(st.title)}</div>
        <p className="mt-2 text-sm leading-relaxed text-stone-600">{B(st.intro)}</p>
      </div>

      <div className="space-y-2">
        {st.pairs.map((p, i) => {
          const given = sel[i]
          const rightDisp = shuffled.indexOf(i) // позиція правильної пари у перемішаному списку
          const right = checked && given === rightDisp
          const wrong = checked && given !== rightDisp
          return (
            <div
              key={i}
              className={`rounded-2xl bg-white p-4 ring-1 ${
                !checked ? 'ring-stone-200' : right ? 'ring-emerald-300' : wrong ? 'ring-amber-300' : 'ring-stone-200'
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="text-sm font-semibold leading-snug text-stone-800">{B(p.left)}</div>
                {checked && (
                  <span className={`shrink-0 text-lg ${right ? 'text-emerald-600' : 'text-amber-600'}`}>
                    {right ? '✓' : '✗'}
                  </span>
                )}
              </div>
              <select
                value={given === undefined ? '' : String(given)}
                disabled={checked}
                onChange={(e) => {
                  const v = e.target.value
                  setSel((m) => ({ ...m, [i]: v === '' ? -1 : Number(v) }))
                }}
                aria-label={B(p.left)}
                className="mt-2 w-full rounded-lg bg-stone-50 px-3 py-2 text-xs font-medium text-stone-700 ring-1 ring-stone-300 focus:outline-none focus:ring-2 focus:ring-[#15857A]"
              >
                <option value="">{t('— оберіть пару —', '— choose a match —')}</option>
                {shuffled.map((origIdx, dispIdx) => (
                  <option key={dispIdx} value={String(dispIdx)}>
                    {B(st.pairs[origIdx].right)}
                  </option>
                ))}
              </select>
              {checked && (
                <div className={`mt-2 text-xs leading-relaxed ${wrong ? 'text-amber-700' : 'text-stone-500'}`}>
                  <b>{B(p.right)}</b>
                  {p.why ? <> — {B(p.why)}</> : null}
                </div>
              )}
            </div>
          )
        })}
      </div>

      {!checked ? (
        <button
          onClick={() => {
            let pts = 0
            st.pairs.forEach((_, i) => {
              const given = sel[i]
              if (given !== undefined && given >= 0 && given === shuffled.indexOf(i)) pts += 5
            })
            if (pts > 0) onScore(pts)
            setChecked(true)
          }}
          disabled={!allPicked}
          className={`w-full rounded-xl px-6 py-3 text-sm font-bold text-white transition sm:w-auto ${
            allPicked ? 'bg-[#15857A] hover:bg-[#0E6B62]' : 'cursor-not-allowed bg-stone-300'
          }`}
        >
          {t('Перевірити пари', 'Check the pairs')}
        </button>
      ) : (
        <button
          onClick={onNext}
          className="rounded-xl bg-[#15857A] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#0E6B62]"
        >
          {t('Далі →', 'Next →')}
        </button>
      )}
    </div>
  )
}

// ============================================================
// ORDER — побудова послідовності
// ============================================================

function OrderView({
  st,
  def,
  onNext,
  onScore,
}: {
  st: Extract<ScenarioDef['stages'][number], { kind: 'order' }>
  def: ScenarioDef
  onNext: () => void
  onScore: (pts: number) => void
}) {
  const t = useL()
  const B = useBi()
  const [placed, setPlaced] = useState<number[]>([])
  const [wrong, setWrong] = useState<Record<number, boolean>>({})
  const shuffled = useMemo(() => shuffledFor(def.id + st.id + 'o', st.items.length), [def.id, st.id, st.items.length])
  const remaining = shuffled.filter((i) => !placed.includes(i))
  const nextCorrect = remaining.length > 0 ? Math.min(...remaining) : -1 // найменший невстановлений індекс = наступний крок
  const complete = placed.length === st.items.length
  return (
    <div className="space-y-4">
      <div className="rounded-2xl bg-white p-5 ring-1 ring-stone-200">
        <div className="text-xs font-bold uppercase tracking-wider text-[#FF6A3B]">{B(st.title)}</div>
        <p className="mt-2 text-sm leading-relaxed text-stone-600">{B(st.intro)}</p>
      </div>

      {/* побудований порядок */}
      <div className="rounded-2xl bg-white p-4 ring-1 ring-stone-200">
        <div className="text-[11px] font-bold uppercase tracking-wide text-stone-400">{t('Ваш порядок', 'Your order')}</div>
        <ol className="mt-2 space-y-1.5">
          {placed.map((it, pos) => (
            <li key={it} className="flex items-start gap-2 text-sm text-stone-700">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#15857A] text-[11px] font-bold text-white">
                {pos + 1}
              </span>
              {B(st.items[it])}
            </li>
          ))}
          {placed.length === 0 && (
            <li className="text-xs text-stone-400">
              {t('клікніть пункти нижче в правильній послідовності…', 'click the items below in the right sequence…')}
            </li>
          )}
        </ol>
      </div>

      {/* перемішані пункти */}
      {!complete && (
        <div className="grid gap-2 sm:grid-cols-2">
          {remaining.map((i) => (
            <button
              key={i}
              onClick={() => {
                if (i === nextCorrect) {
                  onScore(5)
                  setPlaced((a) => [...a, i])
                } else {
                  setWrong((m) => ({ ...m, [i]: true }))
                }
              }}
              className={`rounded-2xl p-4 text-left text-sm font-medium leading-snug ring-1 transition ${
                wrong[i]
                  ? 'bg-amber-50 text-amber-900 ring-amber-300'
                  : 'bg-white text-stone-700 ring-stone-200 hover:bg-stone-50 hover:ring-[#15857A]/40'
              }`}
            >
              {B(st.items[i])}
              {wrong[i] && (
                <span className="ml-2 text-xs font-bold text-amber-600">{t('не зараз', 'not yet')}</span>
              )}
            </button>
          ))}
        </div>
      )}

      {complete && (
        <div className="rounded-2xl bg-white p-5 ring-1 ring-stone-200">
          <p className="text-sm leading-relaxed text-stone-600">
            {st.outro ? B(st.outro) : t('Послідовність зібрана.', 'The sequence is assembled.')}
          </p>
          <button
            onClick={onNext}
            className="mt-4 rounded-xl bg-[#15857A] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#0E6B62]"
          >
            {t('Далі →', 'Next →')}
          </button>
        </div>
      )}
    </div>
  )
}

// ============================================================
// DECISION — управлінське рішення
// ============================================================

function DecisionView({
  st,
  def,
  onNext,
  onScore,
  onChoice,
}: {
  st: Extract<ScenarioDef['stages'][number], { kind: 'decision' }>
  def: ScenarioDef
  onNext: () => void
  onScore: (pts: number) => void
  onChoice: (stageId: string, text: string) => void
}) {
  const t = useL()
  const B = useBi()
  const [pick, setPick] = useState<number | null>(null)
  const answered = pick !== null
  return (
    <div className="space-y-4">
      <div className="rounded-2xl bg-white p-5 ring-1 ring-stone-200">
        <div className="text-xs font-bold uppercase tracking-wider text-[#FF6A3B]">{B(st.title)}</div>
        <p className="mt-2 whitespace-pre-line text-sm leading-relaxed text-stone-600">{B(st.intro)}</p>
      </div>

      <div className="space-y-2">
        {st.options.map((o, i) => {
          const picked = pick === i
          const good = o.quality === 'best'
          const mid = o.quality === 'ok'
          return (
            <button
              key={i}
              onClick={() => {
                if (answered) return
                setPick(i)
                const pts = optionXp(o.quality, o.xp)
                if (pts > 0) onScore(pts)
                onChoice(st.id, B(o.text))
              }}
              disabled={answered}
              className={`block w-full rounded-2xl p-4 text-left text-sm font-medium leading-snug ring-1 transition ${
                answered
                  ? picked
                    ? good || mid
                      ? good
                        ? 'bg-emerald-50 ring-emerald-300'
                        : 'bg-amber-50 ring-amber-300'
                      : 'bg-white text-stone-400 ring-stone-200 opacity-70'
                    : 'bg-white text-stone-400 ring-stone-200 opacity-70'
                  : 'bg-white text-stone-700 ring-stone-200 hover:bg-stone-50 hover:ring-[#15857A]/40'
              }`}
            >
              <span className="mr-2 font-bold text-stone-400">{String.fromCharCode(65 + i)}.</span>
              {B(o.text)}
              {answered && picked && (
                <span className={`ml-2 font-bold ${good ? 'text-emerald-600' : mid ? 'text-amber-600' : 'text-amber-600'}`}>
                  {good ? '✓✓' : mid ? '✓' : '✗'}
                </span>
              )}
            </button>
          )
        })}
      </div>

      {answered && pick !== null && (
        <div className="rounded-2xl bg-white p-5 ring-1 ring-stone-200">
          <div className={`text-sm font-bold ${st.options[pick].quality === 'best' ? 'text-emerald-700' : 'text-amber-700'}`}>
            {st.options[pick].quality === 'best'
              ? t(`Сильне рішення (+${optionXp(st.options[pick].quality, st.options[pick].xp)} XP)`, `Strong decision (+${optionXp(st.options[pick].quality, st.options[pick].xp)} XP)`)
              : st.options[pick].quality === 'ok'
                ? t(`Прийнятно (+${optionXp(st.options[pick].quality, st.options[pick].xp)} XP)`, `Acceptable (+${optionXp(st.options[pick].quality, st.options[pick].xp)} XP)`)
                : t('Слабке рішення (+0 XP)', 'Weak decision (+0 XP)')}
          </div>
          <p className="mt-2 text-sm leading-relaxed text-stone-600">{B(st.options[pick].outcome)}</p>
          <button
            onClick={onNext}
            className="mt-4 rounded-xl bg-[#15857A] px-6 py-2.5 text-sm font-bold text-white transition hover:bg-[#0E6B62]"
          >
            {t('Далі →', 'Next →')}
          </button>
        </div>
      )}
    </div>
  )
}

// ============================================================
// REFLECT — рефлексія без неправильних відповідей
// ============================================================

function ReflectView({
  st,
  def,
  onNext,
  onScore,
}: {
  st: Extract<ScenarioDef['stages'][number], { kind: 'reflect' }>
  def: ScenarioDef
  onNext: () => void
  onScore: (pts: number) => void
}) {
  const t = useL()
  const B = useBi()
  const [sel, setSel] = useState<Record<number, number>>({})
  const allAnswered = st.items.every((_, i) => sel[i] !== undefined)
  return (
    <div className="space-y-4">
      <div className="rounded-2xl bg-white p-5 ring-1 ring-stone-200">
        <div className="text-xs font-bold uppercase tracking-wider text-[#FF6A3B]">{B(st.title)}</div>
        <p className="mt-2 text-sm leading-relaxed text-stone-600">{B(st.intro)}</p>
      </div>

      <div className="space-y-3">
        {st.items.map((it, i) => {
          const given = sel[i]
          return (
            <div key={i} className="rounded-2xl bg-white p-4 ring-1 ring-stone-200">
              <div className="text-sm font-semibold leading-snug text-stone-800">{B(it.text)}</div>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {it.options.map((o, oi) => (
                  <button
                    key={oi}
                    onClick={() => {
                      if (given !== undefined) return
                      setSel((m) => ({ ...m, [i]: oi }))
                      onScore(3)
                    }}
                    aria-pressed={given === oi}
                    className={`rounded-xl px-3 py-2 text-xs font-semibold transition ring-1 ${
                      given === oi
                        ? 'bg-[#15857A] text-white ring-[#15857A]'
                        : given !== undefined
                          ? 'bg-stone-50 text-stone-400 ring-stone-200'
                          : 'bg-stone-50 text-stone-600 ring-stone-200 hover:bg-stone-100'
                    }`}
                  >
                    {B(o)}
                  </button>
                ))}
              </div>
              {given !== undefined && <p className="mt-2 text-xs leading-relaxed text-stone-500">{B(it.insight)}</p>}
            </div>
          )
        })}
      </div>

      {allAnswered && (
        <button
          onClick={onNext}
          className="rounded-xl bg-[#15857A] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#0E6B62]"
        >
          {t('Далі →', 'Next →')}
        </button>
      )}
    </div>
  )
}

function Stat({ label, value, accent }: { label: string; value: string; accent?: boolean }) {
  return (
    <div className={`rounded-xl p-3 text-center ring-1 ${accent ? 'bg-[#F4F1E9] ring-[#FF6A3B]/30' : 'bg-stone-50 ring-stone-200'}`}>
      <div className={`text-xl font-bold ${accent ? 'text-[#FF6A3B]' : 'text-stone-800'}`}>{value}</div>
      <div className="text-[11px] text-stone-500">{label}</div>
    </div>
  )
}
