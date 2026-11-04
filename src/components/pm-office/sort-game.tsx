'use client'

// ============================================================
// ГРА «ПРОЄКТ ЧИ РУТИНА?» (семінар 1, тема 1)
// ------------------------------------------------------------
// Рівень 1 — потік 12 карток справ управління: сортування між
// кошиками «Проєкт» і «Рутина» на таймері, з коротким
// поясненням після кожної відповіді (ознаки проєкту:
// унікальність, обмеженість у часі, визначеність результату).
// Рівень 2 — розкладання учасників проєкту за ролями:
// замовник, виконавець, користувач, куратор.
// Бейдж «Концептор» — за проходження без жодної помилки.
// Серйозний тон: жодних видовищних ефектів, акцент на зворот-
// ному зв'язку. Повторне проходження — без штрафу (половина XP).
// ============================================================

import { useEffect, useRef, useState } from 'react'
import { useBi, useL } from '@/lib/pm-i18n'
import {
  BADGES,
  INDICATORS,
  PROJECT_SIGNS,
  ROLE_SCENARIOS,
  ROLES,
  ROUTINE_SIGNS,
  SORT_CARDS,
  SORT_SECONDS,
  computeGame1Outcome,
  type Game1Outcome,
  type IndicatorId,
  type RoleId,
} from '@/lib/pm-office'

type Phase = 'intro' | 'sort' | 'bridge' | 'roles' | 'final'
type Pick = 'project' | 'routine' | 'timeout' | null

export default function SortGame({
  firstCompletion,
  onFinish,
  onExit,
}: {
  firstCompletion: boolean // чи вже був завершений кейс у прогресі
  onFinish: (o: Game1Outcome) => void // викликається рівно один раз перед фіналом
  onExit: () => void
}) {
  const t = useL()
  const B = useBi()

  const [phase, setPhase] = useState<Phase>('intro')
  const [cardIdx, setCardIdx] = useState(0)
  const [picked, setPicked] = useState<Pick>(null)
  const [secondsLeft, setSecondsLeft] = useState(SORT_SECONDS)
  const [correctCards, setCorrectCards] = useState(0)
  const [scenarioIdx, setScenarioIdx] = useState(0)
  const [assign, setAssign] = useState<Record<string, RoleId | null>>({})
  const [checked, setChecked] = useState(false)
  const [dupeError, setDupeError] = useState(false)
  const [correctRoles, setCorrectRoles] = useState(0)
  const [outcome, setOutcome] = useState<Game1Outcome | null>(null)
  const finishedRef = useRef(false)

  const card = SORT_CARDS[cardIdx]
  const scenario = ROLE_SCENARIOS[scenarioIdx]

  // --- Таймер рівня 1 (спрацювання нуля обчислюється як похідний стан у рендері) ---
  useEffect(() => {
    if (phase !== 'sort' || picked !== null) return
    const iv = setInterval(() => setSecondsLeft((s) => (s > 0 ? s - 1 : 0)), 1000)
    return () => clearInterval(iv)
  }, [phase, picked, cardIdx])

  const startSort = () => {
    setPhase('sort')
    setCardIdx(0)
    setPicked(null)
    setSecondsLeft(SORT_SECONDS)
    setCorrectCards(0)
    setScenarioIdx(0)
    setAssign({})
    setChecked(false)
    setDupeError(false)
    setCorrectRoles(0)
    setOutcome(null)
    finishedRef.current = false
  }

  const handlePick = (p: Exclude<Pick, null>) => {
    if (picked !== null || secondsLeft === 0) return
    setPicked(p)
    const isRight = p !== 'timeout' && p === (card.isProject ? 'project' : 'routine')
    if (isRight) setCorrectCards((c) => c + 1)
  }

  const nextCard = () => {
    if (cardIdx + 1 >= SORT_CARDS.length) {
      setPhase('bridge')
      return
    }
    setCardIdx((i) => i + 1)
    setPicked(null)
    setSecondsLeft(SORT_SECONDS)
  }

  const checkRoles = () => {
    const chosen = scenario.participants.map((p) => assign[p.id] ?? null)
    if (chosen.some((x) => x === null) || new Set(chosen).size !== 4) {
      setDupeError(true)
      return
    }
    setDupeError(false)
    const right = scenario.participants.filter((p) => assign[p.id] === p.roleId).length
    setCorrectRoles((r) => r + right)
    setChecked(true)
  }

  const nextScenario = () => {
    if (scenarioIdx + 1 >= ROLE_SCENARIOS.length) {
      // фінал: рахуємо підсумок один раз
      if (!finishedRef.current) {
        finishedRef.current = true
        const o = computeGame1Outcome(correctCards, SORT_CARDS.length, correctRoles, ROLE_SCENARIOS.length * 4, firstCompletion)
        setOutcome(o)
        onFinish(o)
      }
      setPhase('final')
      return
    }
    setScenarioIdx((i) => i + 1)
    setAssign({})
    setChecked(false)
    setDupeError(false)
  }

  // ============================================================
  // ІНТРО
  // ============================================================
  if (phase === 'intro') {
    return (
      <div className="mx-auto max-w-3xl space-y-4">
        <button
          onClick={onExit}
          className="rounded-xl border border-stone-300 bg-white px-4 py-2 text-sm font-medium text-stone-600 hover:bg-stone-50"
        >
          ← {t('До проєктного офісу', 'Back to the project office')}
        </button>

        <div className="rounded-2xl bg-white p-6 ring-1 ring-stone-200">
          <div className="text-xs font-bold uppercase tracking-wider text-[#FF6A3B]">
            {t('Семінар 1 · Тема 1 · 1 бал на семінарі', 'Seminar 1 · Topic 1 · 1 seminar point')}
          </div>
          <h2 className="mt-1 text-2xl font-bold text-stone-800">
            {t('«Проєкт чи рутина?»', '“Project or Routine?”')}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-stone-600">
            {t(
              'Мета кейсу — навчитися розрізняти проєктну та поточну (операційну) діяльність органу публічної влади. Це перший крок проєктного мислення: уся дисципліна стосується саме проєктів, тому важливо бачити різницю.',
              'The goal of this case is to learn to tell project work apart from the ongoing (operational) activity of a public authority. It is the first step of project thinking: the whole discipline deals with projects, so the difference matters.',
            )}
          </p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <div className="rounded-xl bg-stone-50 p-4 ring-1 ring-stone-200">
              <div className="text-sm font-semibold text-stone-800">
                {t('Рівень 1. Сортування справ', 'Level 1. Sorting the inbox')}
              </div>
              <p className="mt-1 text-xs leading-relaxed text-stone-600">
                {t(
                  `12 карток справ управління, по ${SORT_SECONDS} секунд на кожну. Розподіліть між кошиками «Проєкт» і «Рутина».`,
                  `12 task cards, ${SORT_SECONDS} seconds each. Sort them between the “Project” and “Routine” baskets.`,
                )}
              </p>
            </div>
            <div className="rounded-xl bg-stone-50 p-4 ring-1 ring-stone-200">
              <div className="text-sm font-semibold text-stone-800">
                {t('Рівень 2. Учасники та ролі', 'Level 2. Participants and roles')}
              </div>
              <p className="mt-1 text-xs leading-relaxed text-stone-600">
                {t(
                  'Два проєкти громади. Розподіліть учасників за ролями: замовник, виконавець, користувач, куратор.',
                  'Two community projects. Assign the participants to the roles: customer, contractor, end user, curator.',
                )}
              </p>
            </div>
          </div>
          <div className="mt-4 rounded-xl bg-[#F4F1E9] p-4 ring-1 ring-stone-200">
            <div className="text-sm font-semibold text-stone-800">
              {t('Ознаки проєкту (нагадування)', 'Project features (a reminder)')}
            </div>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-xs leading-relaxed text-stone-600">
              <li>{t('Унікальність — результат не повторюється', 'Uniqueness — the result is not repeated')}</li>
              <li>{t('Обмеженість у часі — є початок і кінець', 'Time-bound — there is a start and an end')}</li>
              <li>{t('Визначеність результату — відомо, що буде створено', 'Defined result — it is known what will be created')}</li>
            </ul>
          </div>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <button
              onClick={startSort}
              className="rounded-xl bg-[#15857A] px-6 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-[#0E6B62]"
            >
              ▶ {t('Почати сортування', 'Start sorting')}
            </button>
            <span className="text-xs text-stone-500">
              {t(
                'Максимум 120 XP · без помилок — бейдж «Концептор»',
                'Up to 120 XP · no mistakes — the “Concept Keeper” badge',
              )}
            </span>
          </div>
        </div>
      </div>
    )
  }

  // ============================================================
  // РІВЕНЬ 1 — СОРТУВАННЯ
  // ============================================================
  if (phase === 'sort') {
    // час вийшов = рішення не прийнято (похідний стан, без ефекту)
    const timedOut = picked === null && secondsLeft === 0
    const effPick: Pick = picked ?? (timedOut ? 'timeout' : null)
    const answered = effPick !== null
    const isRight =
      effPick !== null && effPick !== 'timeout' && effPick === (card.isProject ? 'project' : 'routine')
    return (
      <div className="mx-auto max-w-3xl space-y-4">
        {/* прогрес і таймер */}
        <div className="rounded-2xl bg-white p-4 ring-1 ring-stone-200">
          <div className="flex items-center justify-between text-xs font-medium text-stone-500">
            <span>
              {t('Картка', 'Card')} {cardIdx + 1} / {SORT_CARDS.length}
            </span>
            <span className={secondsLeft <= 5 && !answered ? 'font-bold text-[#FF6A3B]' : ''}>
              {answered
                ? t('зворотний зв’язок', 'feedback')
                : t(`${secondsLeft} с на рішення`, `${secondsLeft}s to decide`)}
            </span>
          </div>
          <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-stone-200">
            <div
              className={`h-full rounded-full transition-all duration-500 ${
                answered ? 'bg-stone-300' : secondsLeft <= 5 ? 'bg-[#FF6A3B]' : 'bg-[#15857A]'
              }`}
              style={{ width: `${answered ? 100 : (secondsLeft / SORT_SECONDS) * 100}%` }}
            />
          </div>
          <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-stone-100">
            <div
              className="h-full rounded-full bg-[#FF6A3B]/70"
              style={{ width: `${(cardIdx / SORT_CARDS.length) * 100}%` }}
            />
          </div>
        </div>

        {/* картка справи */}
        <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-stone-200">
          <div className="text-[11px] font-bold uppercase tracking-wider text-stone-400">
            {t('Справа управління', 'Administrative task')}
          </div>
          <p className="mt-2 text-lg font-semibold leading-snug text-stone-800">{B(card.text)}</p>
        </div>

        {/* кошики */}
        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={() => handlePick('project')}
            disabled={answered}
            aria-label={t('Кошик: Проєкт', 'Basket: Project')}
            className={`rounded-2xl p-5 text-left ring-1 transition ${
              answered
                ? picked === 'project'
                  ? 'bg-[#15857A] text-white ring-[#15857A]'
                  : 'bg-white opacity-60 ring-stone-200'
                : 'bg-white ring-[#15857A]/30 hover:bg-[#15857A]/5 hover:ring-[#15857A]'
            }`}
          >
            <div className="text-2xl">🧭</div>
            <div className={`mt-1 text-base font-bold ${answered && picked === 'project' ? 'text-white' : 'text-stone-800'}`}>
              {t('Проєкт', 'Project')}
            </div>
            <div className={`text-xs ${answered && picked === 'project' ? 'text-white/80' : 'text-stone-500'}`}>
              {t('унікальне, обмежене в часі', 'unique, time-bound')}
            </div>
          </button>
          <button
            onClick={() => handlePick('routine')}
            disabled={answered}
            aria-label={t('Кошик: Рутина', 'Basket: Routine')}
            className={`rounded-2xl p-5 text-left ring-1 transition ${
              answered
                ? picked === 'routine'
                  ? 'bg-stone-700 text-white ring-stone-700'
                  : 'bg-white opacity-60 ring-stone-200'
                : 'bg-white ring-stone-300 hover:bg-stone-50 hover:ring-stone-400'
            }`}
          >
            <div className="text-2xl">🔁</div>
            <div className={`mt-1 text-base font-bold ${answered && picked === 'routine' ? 'text-white' : 'text-stone-800'}`}>
              {t('Рутина', 'Routine')}
            </div>
            <div className={`text-xs ${answered && picked === 'routine' ? 'text-white/80' : 'text-stone-500'}`}>
              {t('поточна діяльність', 'ongoing operations')}
            </div>
          </button>
        </div>

        {/* зворотний зв'язок */}
        {answered && (
          <div className={`rounded-2xl p-5 ring-1 ${isRight ? 'bg-emerald-50 ring-emerald-200' : 'bg-amber-50 ring-amber-200'}`}>
            <div className={`text-sm font-bold ${isRight ? 'text-emerald-700' : 'text-amber-700'}`}>
              {effPick === 'timeout'
                ? t('⏱ Час вийшов. Рішення не прийнято.', '⏱ Time is up. No decision was made.')
                : isRight
                  ? t('✓ Правильно', '✓ Correct')
                  : t('✗ Не зовсім', '✗ Not quite')}
            </div>
            <p className="mt-2 text-sm leading-relaxed text-stone-700">{B(card.why)}</p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {(card.isProject ? PROJECT_SIGNS : ROUTINE_SIGNS).map((s) => (
                <span key={s.en} className="rounded-lg bg-white px-2.5 py-1 text-xs font-medium text-stone-600 ring-1 ring-stone-200">
                  {B(s)}
                </span>
              ))}
            </div>
            <button
              onClick={nextCard}
              className="mt-4 rounded-xl bg-[#15857A] px-5 py-2.5 text-sm font-bold text-white transition hover:bg-[#0E6B62]"
            >
              {cardIdx + 1 >= SORT_CARDS.length
                ? t('До результатів рівня →', 'To the level results →')
                : t('Наступна картка →', 'Next card →')}
            </button>
          </div>
        )}
      </div>
    )
  }

  // ============================================================
  // МОСТ: РІВЕНЬ 1 → РІВЕНЬ 2
  // ============================================================
  if (phase === 'bridge') {
    return (
      <div className="mx-auto max-w-3xl space-y-4">
        <div className="rounded-2xl bg-white p-6 ring-1 ring-stone-200">
          <div className="text-xs font-bold uppercase tracking-wider text-[#FF6A3B]">
            {t('Рівень 1 завершено', 'Level 1 complete')}
          </div>
          <h2 className="mt-1 text-xl font-bold text-stone-800">
            {t(
              `Сортування: ${correctCards} із ${SORT_CARDS.length} правильних`,
              `Sorting: ${correctCards} of ${SORT_CARDS.length} correct`,
            )}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-stone-600">
            {t(
              'Тепер — рівень 2. Проєкт завжди має учасників, і кожен із них відіграє свою роль. Замовник ініціює та фінансує, виконавець робить, користувач отримує користь, куратор супроводжує зверху. Розберіть два проєкти громади Соснівки.',
              'Now — level 2. A project always has participants, and each of them plays their own role. The customer initiates and funds, the contractor builds, the end user benefits, the curator supervises from above. Sort out two community projects of Sosnivka.',
            )}
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <button
              onClick={() => setPhase('roles')}
              className="rounded-xl bg-[#15857A] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#0E6B62]"
            >
              {t('До рівня 2 — ролі →', 'To level 2 — roles →')}
            </button>
            <button onClick={onExit} className="text-xs text-stone-400 underline hover:text-stone-600">
              {t('вийти без результату', 'exit without a result')}
            </button>
          </div>
        </div>
      </div>
    )
  }

  // ============================================================
  // РІВЕНЬ 2 — РОЛІ
  // ============================================================
  if (phase === 'roles') {
    return (
      <div className="mx-auto max-w-3xl space-y-4">
        <div className="rounded-2xl bg-white p-5 ring-1 ring-stone-200">
          <div className="text-xs font-bold uppercase tracking-wider text-[#FF6A3B]">
            {t('Рівень 2 · Сценарій', 'Level 2 · Scenario')} {scenarioIdx + 1} / {ROLE_SCENARIOS.length}
          </div>
          <h2 className="mt-1 text-lg font-bold text-stone-800">{B(scenario.title)}</h2>
          <p className="mt-1 text-sm text-stone-600">{B(scenario.intro)}</p>
        </div>

        {dupeError && (
          <div className="rounded-xl bg-amber-50 px-4 py-3 text-sm text-amber-800 ring-1 ring-amber-200">
            {t(
              'Кожну роль може мати лише один учасник — заповніть усі рядки без повторів.',
              'Each role can belong to only one participant — fill in every row without repeats.',
            )}
          </div>
        )}

        <div className="space-y-3">
          {scenario.participants.map((p) => {
            const given = assign[p.id] ?? null
            const right = checked && given === p.roleId
            const wrong = checked && given !== p.roleId
            const correctRole = ROLES.find((r) => r.id === p.roleId)!
            return (
              <div
                key={p.id}
                className={`rounded-2xl bg-white p-4 ring-1 ${
                  !checked ? 'ring-stone-200' : right ? 'ring-emerald-300' : wrong ? 'ring-amber-300' : 'ring-stone-200'
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="text-sm font-semibold text-stone-800">{B(p.name)}</div>
                    <div className="mt-0.5 text-xs leading-relaxed text-stone-500">{B(p.hint)}</div>
                  </div>
                  {checked && (
                    <span className={`shrink-0 text-lg ${right ? 'text-emerald-600' : 'text-amber-600'}`}>
                      {right ? '✓' : '✗'}
                    </span>
                  )}
                </div>
                <div className="mt-3 grid grid-cols-2 gap-1.5 sm:grid-cols-4">
                  {ROLES.map((r) => {
                    const active = given === r.id
                    return (
                      <button
                        key={r.id}
                        onClick={() => {
                          if (checked) return
                          setDupeError(false)
                          setAssign((a) => ({ ...a, [p.id]: r.id }))
                        }}
                        disabled={checked}
                        aria-pressed={active}
                        className={`rounded-xl px-2 py-2 text-xs font-semibold transition ring-1 ${
                          active
                            ? 'bg-[#15857A] text-white ring-[#15857A]'
                            : 'bg-stone-50 text-stone-600 ring-stone-200 hover:bg-stone-100'
                        }`}
                      >
                        {B(r.name)}
                      </button>
                    )
                  })}
                </div>
                {checked && !right && (
                  <div className="mt-2 rounded-xl bg-amber-50 px-3 py-2 text-xs leading-relaxed text-amber-800">
                    {t('Правильна роль', 'Correct role')} — <b>{B(correctRole.name)}</b>: {B(correctRole.definition)}
                  </div>
                )}
                {checked && right && (
                  <div className="mt-2 text-xs leading-relaxed text-stone-500">{B(correctRole.definition)}</div>
                )}
              </div>
            )
          })}
        </div>

        {!checked ? (
          <button
            onClick={checkRoles}
            className="w-full rounded-xl bg-[#15857A] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#0E6B62] sm:w-auto"
          >
            {t('Перевірити розподіл', 'Check the assignment')}
          </button>
        ) : (
          <button
            onClick={nextScenario}
            className="rounded-xl bg-[#15857A] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#0E6B62]"
          >
            {scenarioIdx + 1 >= ROLE_SCENARIOS.length
              ? t('До підсумків кейсу →', 'To the case summary →')
              : t('Наступний сценарій →', 'Next scenario →')}
          </button>
        )}
      </div>
    )
  }

  // ============================================================
  // ФІНАЛ
  // ============================================================
  const o = outcome
  const badge = BADGES.find((b) => b.id === 'conceptor')!
  return (
    <div className="mx-auto max-w-3xl space-y-4">
      <div className="rounded-2xl bg-white p-6 ring-1 ring-stone-200">
        <div className="text-xs font-bold uppercase tracking-wider text-[#FF6A3B]">
          {t('Кейс завершено', 'Case complete')}
        </div>
        <h2 className="mt-1 text-xl font-bold text-stone-800">
          {o && o.mistakes === 0
            ? t('Ідеальна робота. Тепер ви бачите різницю.', 'Flawless work. You can now see the difference.')
            : t('Проєкт чи рутина — тепер із розумінням.', 'Project or routine — now with understanding.')}
        </h2>

        <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
          <Stat label={t('Картки', 'Cards')} value={`${o?.correctCards ?? 0}/${o?.totalCards ?? 12}`} />
          <Stat label={t('Ролі', 'Roles')} value={`${o?.correctRoles ?? 0}/${o?.totalRoles ?? 8}`} />
          <Stat label={t('Помилки', 'Mistakes')} value={String(o?.mistakes ?? 0)} />
          <Stat label="XP" value={`+${o?.xp ?? 0}`} accent />
        </div>

        {o && o.badgeEarned && (
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

        {o && Object.keys(o.effect).length > 0 && (
          <div className="mt-3 flex flex-wrap items-center gap-2 text-xs">
            <span className="text-stone-500">{t('Індикатори громади:', 'Community indicators:')}</span>
            {Object.entries(o.effect).map(([k, v]) => {
              const ind = INDICATORS.find((x) => x.id === (k as IndicatorId))
              return (
                <span key={k} className="rounded-lg bg-emerald-50 px-2 py-1 font-semibold text-emerald-700 ring-1 ring-emerald-200">
                  +{v} {ind ? B(ind.name) : k}
                </span>
              )
            })}
          </div>
        )}

        {o && !o.firstCompletion && (
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
          <button
            onClick={startSort}
            className="rounded-xl border border-stone-300 bg-white px-5 py-3 text-sm font-medium text-stone-600 hover:bg-stone-50"
          >
            {t('↻ Пройти ще раз', '↻ Play again')}
          </button>
        </div>
      </div>
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
