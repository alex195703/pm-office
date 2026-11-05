'use client'

// ============================================================
// ПРОЄКТНИЙ ОФІС ВІДНОВЛЕННЯ ГРОМАДИ — хаб (головний екран)
// ------------------------------------------------------------
// Кар'єрна траєкторія службовця, чотири індикатори громади,
// мапа курсу «семінар = кейс» (15 семінарів + 2 бос-файти +
// капстоун + симулятор екзамену), полиця бейджів, етичний
// кодекс тренажера та перенесення прогресу кодом.
// ============================================================

import { useState } from 'react'
import { useBi, useL } from '@/lib/pm-i18n'
import {
  ACTS,
  BADGES,
  INDICATORS,
  RANKS,
  nextRank,
  progressCode,
  progressFromCode,
  rankFor,
  reportCode,
  type Progress,
} from '@/lib/pm-office'
import { GAME_ORDER, GAMES } from '@/lib/games'

export default function OfficeHub({
  progress,
  onPlayGame,
  onImportProgress,
  onProfile,
}: {
  progress: Progress
  onPlayGame: (id: string) => void
  onImportProgress: (p: Progress) => void
  onProfile: (name: string, group: string) => void
}) {
  const t = useL()
  const B = useBi()

  const rank = rankFor(progress.xp)
  const nxt = nextRank(progress.xp)
  const rankPct = nxt ? Math.round(((progress.xp - rank.xp) / (nxt.xp - rank.xp)) * 100) : 100
  const g1 = progress.games['g1']
  const hasConceptor = progress.badges.includes('conceptor')

  // наступний незавершений кейс: g1, потім g2… (лише побудовані)
  const courseLine = ['g1', ...GAME_ORDER]
  const nextCase = courseLine.find((id) => (progress.games[id]?.completions ?? 0) === 0)
  const availableCount = 1 + GAME_ORDER.length

  return (
    <div className="space-y-6">
      {/* ================= КАР'ЄРА ================= */}
      <section className="rounded-2xl bg-white p-5 ring-1 ring-stone-200" aria-labelledby="career-h">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <h2 id="career-h" className="text-xs font-bold uppercase tracking-wider text-stone-400">
              {t('Кар’єра службовця', 'Officer career')}
            </h2>
            <p className="mt-1 text-lg font-bold text-stone-800">{B(rank.title)}</p>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-[#15857A]">{progress.xp}</div>
            <div className="text-[11px] uppercase tracking-wide text-stone-400">XP</div>
          </div>
        </div>

        {/* сходинки посад */}
        <ol className="mt-4 grid gap-1.5 text-xs sm:grid-cols-4">
          {RANKS.map((r, i) => {
            const reached = progress.xp >= r.xp
            return (
              <li
                key={r.id}
                className={`rounded-xl px-3 py-2 ring-1 ${
                  reached ? 'bg-[#15857A]/10 ring-[#15857A]/40' : 'bg-stone-50 ring-stone-200'
                }`}
              >
                <div className="flex items-center gap-1.5">
                  <span className={reached ? 'text-[#15857A]' : 'text-stone-300'}>{reached ? '●' : '○'}</span>
                  <span className={`font-semibold ${reached ? 'text-stone-800' : 'text-stone-400'}`}>{i + 1}</span>
                </div>
                <div className={`mt-0.5 leading-snug ${reached ? 'text-stone-600' : 'text-stone-400'}`}>
                  {B(r.title)}
                </div>
                <div className="mt-1 text-[10px] uppercase tracking-wide text-stone-400">{r.xp} XP</div>
              </li>
            )
          })}
        </ol>

        {/* смуга XP до наступної посади */}
        <div className="mt-4">
          <div className="flex items-center justify-between text-xs text-stone-500">
            <span>
              {nxt
                ? t(`До посади «${B(nxt.title)}»`, `To “${B(nxt.title)}”`)
                : t('Вища посада досягнута', 'Top rank reached')}
            </span>
            <span className="font-semibold text-stone-700">
              {nxt ? `${progress.xp} / ${nxt.xp}` : `${progress.xp}`}
            </span>
          </div>
          <div className="mt-1.5 h-2 w-full overflow-hidden rounded-full bg-stone-200">
            <div className="h-full rounded-full bg-[#FF6A3B] transition-all duration-500" style={{ width: `${rankPct}%` }} />
          </div>
        </div>
      </section>

      {/* ================= ІНДИКАТОРИ ГРОМАДИ ================= */}
      <section aria-labelledby="ind-h">
        <h2 id="ind-h" className="mb-2 text-xs font-bold uppercase tracking-wider text-stone-400">
          {t('Індикатори громади Соснівки', 'Community indicators of Sosnivka')}
        </h2>
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
          {INDICATORS.map((ind) => {
            const v = progress.indicators[ind.id]
            return (
              <div key={ind.id} className="rounded-2xl bg-white p-4 ring-1 ring-stone-200">
                <div className="flex items-center justify-between">
                  <span className="text-xl">{ind.icon}</span>
                  <span className="text-lg font-bold text-stone-800">{v}</span>
                </div>
                <div className="mt-1 text-sm font-semibold text-stone-800">{B(ind.name)}</div>
                <div className="mt-1 h-1.5 w-full overflow-hidden rounded-full bg-stone-200">
                  <div className="h-full rounded-full bg-[#15857A] transition-all duration-500" style={{ width: `${v}%` }} />
                </div>
                <div className="mt-1.5 text-[11px] leading-snug text-stone-500">{B(ind.desc)}</div>
              </div>
            )
          })}
        </div>
      </section>

      {/* ================= ПОТОЧНИЙ КЕЙС ================= */}
      <section className="overflow-hidden rounded-2xl bg-white ring-1 ring-stone-200" aria-labelledby="g1-h">
        <div className="bg-gradient-to-br from-[#15857A] to-[#0E6B62] p-5 text-white sm:p-6">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <div className="text-[11px] font-bold uppercase tracking-widest text-white/70">
                {nextCase
                  ? t(
                      'Наступний кейс кар’єри',
                      'Your next career case',
                    )
                  : t('Усі доступні кейси пройдені', 'All available cases completed')}
              </div>
              <h2 id="g1-h" className="mt-1 text-xl font-bold sm:text-2xl">
                {nextCase
                  ? nextCase === 'g1'
                    ? t('«Проєкт чи рутина?»', '“Project or Routine?”')
                    : B(GAMES[nextCase].title)
                  : t('Можна проходити кейси повторно', 'You can replay any case')}
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-white/85">
                {nextCase
                  ? nextCase === 'g1'
                    ? t(
                        'Перший і найповніший кейс кар’єри: брифінг із теорією, сортування справ на таймері, перевірка ознак проєкту, три сценарії ролей і збирання концепції мініпроєкту. Результат — підстава для семінарського бала.',
                        'The first and fullest career case: a theory briefing, timed inbox sorting, a project-features check, three role scenarios and a mini-project concept assembly. The result is grounds for a seminar point.',
                      )
                    : B(GAMES[nextCase].summary)
                  : t(
                      'Кейси можна проходити повторно — найкращий результат уже зафіксовано, а повторне проходження дає половину досвіду.',
                      'Cases can be replayed — your best result is kept, and a replay earns half the XP.',
                    )}
              </p>
            </div>
            <button
              onClick={() => onPlayGame(nextCase ?? 'g1')}
              className="rounded-xl bg-white px-6 py-3 text-sm font-bold text-[#15857A] shadow transition hover:bg-[#F4F1E9]"
            >
              {nextCase
                ? `▶ ${t(nextCase === 'g1' ? 'Почати кейс' : 'Продовжити курс', nextCase === 'g1' ? 'Start the case' : 'Continue the course')}`
                : `▶ ${t('Повторити кейс 1', 'Replay case 1')}`}
            </button>
          </div>
          <div className="mt-3 flex flex-wrap gap-2 text-xs">
            <span className="rounded-lg bg-white/10 px-2.5 py-1">
              {t(
                `доступно кейсів: ${availableCount} з 18`,
                `available cases: ${availableCount} of 18`,
              )}
            </span>
            {g1 && (
              <span className="rounded-lg bg-white/10 px-2.5 py-1">
                {t(`Кейс 1: найкращий ${g1.best}%`, 'Case 1: best ' + g1.best + '%')}
              </span>
            )}
            {hasConceptor && (
              <span className="rounded-lg bg-white/10 px-2.5 py-1">🧭 {t('бейдж «Концептор»', '“Concept Keeper” badge')}</span>
            )}
          </div>
        </div>
      </section>

      {/* ================= МАПА КУРСУ ================= */}
      <section aria-labelledby="map-h">
        <div className="mb-2 flex flex-wrap items-baseline justify-between gap-2">
          <h2 id="map-h" className="text-xs font-bold uppercase tracking-wider text-stone-400">
            {t('Мапа курсу: семінар = кейс', 'Course map: seminar = case')}
          </h2>
          <span className="text-[11px] text-stone-400">
            {t('15 семінарів · 2 бос-файти · капстоун · симулятор екзамену', '15 seminars · 2 boss fights · capstone · exam simulator')}
          </span>
        </div>
        <div className="space-y-5">
          {ACTS.map((act) => (
            <div key={act.id} className="rounded-2xl bg-white p-4 ring-1 ring-stone-200 sm:p-5">
              <h3 className="text-base font-bold text-stone-800">{B(act.name)}</h3>
              <p className="mt-1 text-xs leading-relaxed text-stone-500">{B(act.desc)}</p>
              <ul className="mt-3 space-y-2">
                {act.rows.map((row) => {
                  const isG1 = row.gameId === 'g1'
                  const playable = !!row.gameId && (isG1 || !!GAMES[row.gameId])
                  const done = row.gameId ? (progress.games[row.gameId]?.completions ?? 0) > 0 : false
                  const best = row.gameId ? progress.games[row.gameId]?.best ?? 0 : 0
                  return (
                    <li
                      key={row.id}
                      className={`rounded-xl p-3 ring-1 ${
                        playable
                          ? 'bg-[#F4F1E9] ring-[#15857A]/40'
                          : 'bg-stone-50 ring-stone-200/70'
                      }`}
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <div className="min-w-0 flex-1">
                          <div className="flex flex-wrap items-center gap-x-2 text-xs">
                            <span className={`font-bold ${playable ? 'text-[#15857A]' : 'text-stone-500'}`}>{B(row.label)}</span>
                            <span className="text-stone-400">·</span>
                            <span className="text-stone-600">{B(row.theme)}</span>
                          </div>
                          <div className={`mt-0.5 text-sm font-semibold ${playable ? 'text-stone-900' : done ? 'text-stone-700' : 'text-stone-500'}`}>
                            {B(row.game)}
                            {done && (
                              <span className="ml-2 inline-block rounded-md bg-[#15857A]/10 px-1.5 py-0.5 align-middle text-[10px] font-bold text-[#15857A]">
                                ✓ {best}%
                              </span>
                            )}
                          </div>
                          <div className="mt-0.5 text-[11px] leading-snug text-stone-400">{B(row.mechanic)}</div>
                        </div>
                        <div className="flex shrink-0 items-center gap-2">
                          {row.points !== null && (
                            <span className="rounded-lg bg-white px-2 py-1 text-[11px] font-semibold text-stone-500 ring-1 ring-stone-200">
                              {row.points} {row.points === 1 ? t('бал', 'pt') : t('бали', 'pts')}
                            </span>
                          )}
                          {playable ? (
                            <button
                              onClick={() => onPlayGame(row.gameId!)}
                              className="rounded-lg bg-[#15857A] px-3 py-1.5 text-xs font-bold text-white transition hover:bg-[#0E6B62]"
                            >
                              ▶ {done ? t('Повторити', 'Replay') : t('Пройти', 'Run')}
                            </button>
                          ) : (
                            <span className="rounded-lg bg-stone-100 px-2.5 py-1.5 text-[11px] font-medium text-stone-400">
                              🚧 {t('у розробці', 'in development')}
                            </span>
                          )}
                        </div>
                      </div>
                    </li>
                  )
                })}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ================= БЕЙДЖІ ================= */}
      <section aria-labelledby="badge-h">
        <h2 id="badge-h" className="mb-2 text-xs font-bold uppercase tracking-wider text-stone-400">
          {t('Бейджі — мікросертифікати тем', 'Badges — topic micro-certificates')}
        </h2>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {BADGES.map((b) => {
            const owned = progress.badges.includes(b.id)
            return (
              <div
                key={b.id}
                className={`rounded-2xl p-3 ring-1 ${owned ? 'bg-[#F4F1E9] ring-[#15857A]/40' : 'bg-white ring-stone-200'}`}
              >
                <div className={`text-2xl ${owned ? '' : 'opacity-30 grayscale'}`}>{b.icon}</div>
                <div className={`mt-1 text-sm font-bold ${owned ? 'text-stone-800' : 'text-stone-400'}`}>{B(b.name)}</div>
                <div className="mt-1 text-[11px] leading-snug text-stone-500">{B(b.condition)}</div>
                <div className="mt-1.5 text-[10px] font-semibold uppercase tracking-wide text-stone-400">{B(b.topic)}</div>
              </div>
            )
          })}
        </div>
        {hasConceptor && (
          <p className="mt-2 text-xs text-stone-500">
            {t(
              'Бейдж можна показувати викладачеві на семінарі як підтвердження опрацьованої теми.',
              'A badge can be shown to the lecturer at the seminar as proof of the completed topic.',
            )}
          </p>
        )}
      </section>

      {/* ================= ПРО ТРЕНАЖЕР / ЕТИКА / ПРОГРЕС ================= */}
      <section className="space-y-2" aria-label={t('Про тренажер', 'About the simulator')}>
        <details className="group rounded-2xl bg-white p-4 ring-1 ring-stone-200">
          <summary className="cursor-pointer text-sm font-bold text-stone-800 marker:content-none">
            {t('📜 Про тренажер та його освітню рамку', '📜 About the simulator and its educational frame')}
          </summary>
          <div className="mt-3 space-y-2 text-sm leading-relaxed text-stone-600">
            <p>
              {t(
                '«Проєктний офіс відновлення громади» — ситуаційний тренажер з моделювання проєктної діяльності органів публічної влади (КНЕУ, 28 «Публічне управління та адміністрування»). П’ятнадцять семінарів курсу відповідають п’ятнадцяти сценарним кейсам, два репетиційні тести (бос-файти) відпрацьовують формат контрольних у Moodle, капстоун «Заявка на відбудову» формує чернетку індивідуального завдання, а симулятор екзамену готує до білету.',
                'The “Community Recovery Project Office” is a situational training simulator for the course “Project Activity of Public Authorities” (KNEU, field 28 “Public Governance and Administration”). The fifteen seminars of the course map one-to-one onto fifteen scenario cases; two rehearsal tests (“boss fights”) rehearse the Moodle tests; the “Recovery Application” capstone drafts the individual assignment; the exam simulator prepares you for the exam ticket.',
              )}
            </p>
            <p>
              {t(
                'Дія відбувається у вигаданому місті Соснівка (~40 тисяч мешканців), яке повернулося під контроль України та відроджує звичне життя. Здобувач починає як головний спеціаліст відділу економічного розвитку міської ради і власними рішеннями розвиває кар’єру — та громаду.',
                'The simulator is set in the fictional city of Sosnivka (~40 thousand residents) that has returned under the control of Ukraine and is reviving its everyday life. The trainee starts as a lead specialist of the city council’s economic development department and grows the career — and the community — through their own decisions.',
              )}
            </p>
          </div>
        </details>

        <details className="group rounded-2xl bg-white p-4 ring-1 ring-stone-200">
          <summary className="cursor-pointer text-sm font-bold text-stone-800 marker:content-none">
            {t('🛡️ Етичний кодекс тренажера', '🛡️ Simulator code of ethics')}
          </summary>
          <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-stone-600">
            <li>
              {t(
                'Жодних балістичних анімацій, бойових сцен чи видовищних зображень руйнувань — війна присутня лише як управлінські умови.',
                'No ballistic animations, combat scenes or spectacular destruction images — the war appears only as administrative conditions.',
              )}
            </li>
            <li>
              {t(
                'Події безпеки подаються як процеси (тривожна пауза з таймером, а не анімація обстрілу).',
                'Security events are shown as processes (an alert pause with a timer, not a strike animation).',
              )}
            </li>
            <li>
              {t(
                'Акцент — на компетентності публічних менеджерів, стійкості громади та людях, які повертаються додому.',
                'The focus is on the competence of public managers, community resilience and the people coming back home.',
              )}
            </li>
            <li>
              {t(
                'Механіки надихнуті відкритими сервісами відновлення (Дія.Відновлення, єВідновлення, реєстр пошкоджень, Ukraine Facility) — без копіювання реальних даних громад.',
                'The mechanics are inspired by open recovery services (Diia.Vidnovlennia, eVidnovlennia, the damage register, the Ukraine Facility) — without copying real data of any communities.',
              )}
            </li>
            <li>
              {t(
                'Громада, персонажі та кейси повністю вигадані; збіг назв і подій з реальними не передбачається.',
                'The community, characters and cases are entirely fictional; any resemblance to real names and events is unintended.',
              )}
            </li>
          </ul>
        </details>

        <details className="group rounded-2xl bg-white p-4 ring-1 ring-stone-200">
          <summary className="cursor-pointer text-sm font-bold text-stone-800 marker:content-none">
            {t('🎓 Як тренажер працює з балами курсу', '🎓 How the simulator interacts with course grading')}
          </summary>
          <div className="mt-3 space-y-2 text-sm leading-relaxed text-stone-600">
            <p>
              {t(
                'Бальна шкала дисципліни залишається недоторканою: 30 балів семінарів, 10 — контрольних у Moodle, 10 — індивідуальних завдань, 50 — екзамен. Тренажер не змінює вимоги програми.',
                'The course grading scale stays untouched: 30 points for seminars, 10 for the Moodle tests, 10 for individual assignments, 50 for the exam. The simulator does not change the programme requirements.',
              )}
            </p>
            <p>
              {t(
                'Роль тренажера — підготовча: результат кейсу на семінарі є об’єктивною підставою для 1–2 семінарських балів, бос-файти репетирують формат контрольних, капстоун постачає каркас індивідуального завдання, а бейджі слугують мікросертифікатами перед викладачем.',
                'The simulator plays a preparatory role: a case result at the seminar is an objective basis for 1–2 seminar points, the boss fights rehearse the test format, the capstone supplies the skeleton of the individual assignment, and the badges act as micro-certificates for the lecturer.',
              )}
            </p>
          </div>
        </details>

        <TeacherReport progress={progress} onProfile={onProfile} />
        <ProgressTransfer progress={progress} onImport={onImportProgress} />
      </section>
    </div>
  )
}

// ============================================================
// ПРОФІЛЬ СТУДЕНТА + ЗВІТ ВИКЛАДАЧУ
// ============================================================

function TeacherReport({
  progress,
  onProfile,
}: {
  progress: Progress
  onProfile: (name: string, group: string) => void
}) {
  const t = useL()
  const [nameDraft, setNameDraft] = useState('')
  const [groupDraft, setGroupDraft] = useState('')
  const [dirty, setDirty] = useState(false)
  const [savedFlash, setSavedFlash] = useState(false)
  const [copied, setCopied] = useState(false)

  // поки користувач не редагував поля — показуємо збережений профіль
  const name = dirty ? nameDraft : (progress.name ?? '')
  const group = dirty ? groupDraft : (progress.group ?? '')

  const commit = () => {
    const n = name.trim().slice(0, 80)
    const g = group.trim().slice(0, 40)
    setNameDraft(n)
    setGroupDraft(g)
    if (n === (progress.name ?? '') && g === (progress.group ?? '')) return
    onProfile(n, g)
    setSavedFlash(true)
    setTimeout(() => setSavedFlash(false), 2000)
  }

  // код звіту завжди з актуальним профілем — навіть якщо ще не збережений
  const codeStr = reportCode({ ...progress, name: name.trim(), group: group.trim() })

  const copy = async () => {
    // гарантія: збережений профіль синхронний із надісланим кодом
    // (користувач міг не торкнутися іншого поля після введення групи)
    commit()
    try {
      await navigator.clipboard.writeText(codeStr)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      /* clipboard недоступний — код можна скопіювати вручну */
      setCopied(false)
    }
  }

  return (
    <details className="group rounded-2xl bg-white p-4 ring-1 ring-stone-200">
      <summary className="cursor-pointer text-sm font-bold text-stone-800 marker:content-none">
        {t('🧾 Профіль студента та звіт викладачу', '🧾 Student profile and lecturer report')}
      </summary>
      <div className="mt-3 space-y-3 text-sm leading-relaxed text-stone-600">
        <p>
          {t(
            'У тренажера немає акаунтів, тому викладач не бачить ваш прогрес автоматично. Заповніть профіль один раз, а після кожного завершеного кейсу копіюйте код звіту й надсилайте викладачу — у чат групи або на пошту. Викладач вставить код у свій кабінет (він захищений PIN-кодом і прихований від студентів), і ваші бали з’являться у відомості.',
            'There are no accounts, so the lecturer cannot see your progress automatically. Fill in the profile once; after each completed case copy the report code and send it to the lecturer — via the group chat or e-mail. The lecturer pastes the code into their own console (PIN-protected and hidden from students), and your points appear in the mark sheet.',
          )}
        </p>
        <div className="grid gap-2 sm:grid-cols-[1fr_1fr_auto] sm:items-center">
          <input
            value={name}
            onChange={(e) => {
              setNameDraft(e.target.value)
              setDirty(true)
            }}
            onBlur={commit}
            placeholder={t('Прізвище та ім’я', 'Full name')}
            aria-label={t('Прізвище та ім’я студента', 'Student full name')}
            className="rounded-lg bg-white px-2.5 py-2 text-xs text-stone-700 ring-1 ring-stone-300 focus:outline-none focus:ring-2 focus:ring-[#15857A]"
          />
          <input
            value={group}
            onChange={(e) => {
              setGroupDraft(e.target.value)
              setDirty(true)
            }}
            onBlur={commit}
            placeholder={t('Група (наприклад, ПУ-31)', 'Group (e.g. PU-31)')}
            aria-label={t('Навчальна група студента', 'Student group')}
            className="rounded-lg bg-white px-2.5 py-2 text-xs text-stone-700 ring-1 ring-stone-300 focus:outline-none focus:ring-2 focus:ring-[#15857A]"
          />
          <button
            onClick={commit}
            className="rounded-lg bg-[#15857A] px-4 py-2 text-xs font-bold text-white transition hover:bg-[#0E6B62]"
          >
            {savedFlash ? t('✓ збережено', '✓ saved') : t('Зберегти профіль', 'Save profile')}
          </button>
        </div>
        <div className="rounded-xl bg-stone-50 p-3 ring-1 ring-stone-200">
          <div className="text-xs font-bold uppercase tracking-wide text-stone-400">
            {t('Код звіту викладачу', 'Report code for the lecturer')}
          </div>
          <div className="mt-1.5 flex flex-wrap items-center gap-2">
            <code className="max-w-full flex-1 overflow-x-auto whitespace-nowrap rounded-lg bg-white px-2.5 py-2 text-[11px] text-stone-600 ring-1 ring-stone-200">
              {codeStr || '—'}
            </code>
            <button
              onClick={copy}
              className="rounded-lg bg-[#15857A] px-3 py-2 text-xs font-bold text-white transition hover:bg-[#0E6B62]"
            >
              {copied ? t('✓ скопійовано', '✓ copied') : t('Копіювати код звіту', 'Copy report code')}
            </button>
          </div>
          <p className="mt-2 text-[11px] leading-snug text-stone-500">
            {t(
              'Код оновлюється після кожного кейсу — надсилайте викладачу найсвіжіший.',
              'The code refreshes after every case — always send the latest one.',
            )}
          </p>
        </div>
      </div>
    </details>
  )
}

// ============================================================
// ПЕРЕНЕСЕННЯ ПРОГРЕСУ: код відновлення (export/import)
// ============================================================

function ProgressTransfer({ progress, onImport }: { progress: Progress; onImport: (p: Progress) => void }) {
  const t = useL()
  const [code, setCode] = useState('')
  const [copied, setCopied] = useState(false)
  const [err, setErr] = useState(false)

  const codeStr = progressCode(progress)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(codeStr)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      /* clipboard недоступний — код можна скопіювати вручну */
      setCopied(false)
    }
  }

  const apply = () => {
    const p = progressFromCode(code)
    if (!p) {
      setErr(true)
      return
    }
    setErr(false)
    setCode('')
    onImport(p)
  }

  return (
    <details className="group rounded-2xl bg-white p-4 ring-1 ring-stone-200">
      <summary className="cursor-pointer text-sm font-bold text-stone-800 marker:content-none">
        {t('🔑 Прогрес і приватність: код відновлення', '🔑 Progress and privacy: the recovery code')}
      </summary>
      <div className="mt-3 space-y-3 text-sm leading-relaxed text-stone-600">
        <p>
          {t(
            'Прогрес зберігається лише у вашому браузері (localStorage) — без облікових записів, куків сторонніх сервісів і персональних даних. Щоб перенести прогрес на інший пристрій, скопіюйте код відновлення тут і введіть його там.',
            'Progress is stored only in your browser (localStorage) — no accounts, no third-party cookies, no personal data. To move the progress to another device, copy the recovery code here and paste it there.',
          )}
        </p>
        <div className="rounded-xl bg-stone-50 p-3 ring-1 ring-stone-200">
          <div className="text-xs font-bold uppercase tracking-wide text-stone-400">
            {t('Ваш код відновлення', 'Your recovery code')}
          </div>
          <div className="mt-1.5 flex flex-wrap items-center gap-2">
            <code className="max-w-full flex-1 overflow-x-auto whitespace-nowrap rounded-lg bg-white px-2.5 py-2 text-[11px] text-stone-600 ring-1 ring-stone-200">
              {codeStr || '—'}
            </code>
            <button
              onClick={copy}
              className="rounded-lg bg-[#15857A] px-3 py-2 text-xs font-bold text-white transition hover:bg-[#0E6B62]"
            >
              {copied ? t('✓ скопійовано', '✓ copied') : t('Копіювати', 'Copy')}
            </button>
          </div>
        </div>
        <div className="rounded-xl bg-stone-50 p-3 ring-1 ring-stone-200">
          <div className="text-xs font-bold uppercase tracking-wide text-stone-400">
            {t('Ввести код з іншого пристрою', 'Enter a code from another device')}
          </div>
          <div className="mt-1.5 flex flex-wrap items-center gap-2">
            <input
              value={code}
              onChange={(e) => {
                setCode(e.target.value)
                setErr(false)
              }}
              placeholder={t('вставте код…', 'paste the code…')}
              aria-label={t('Код відновлення прогресу', 'Progress recovery code')}
              className="min-w-0 flex-1 rounded-lg bg-white px-2.5 py-2 text-xs text-stone-700 ring-1 ring-stone-300 focus:outline-none focus:ring-2 focus:ring-[#15857A]"
            />
            <button
              onClick={apply}
              className="rounded-lg border border-stone-300 bg-white px-3 py-2 text-xs font-bold text-stone-600 transition hover:bg-stone-100"
            >
              {t('Застосувати', 'Apply')}
            </button>
          </div>
          {err && (
            <p className="mt-2 text-xs font-medium text-amber-700">
              {t('Код не розпізнано — перевірте та спробуйте ще раз.', 'The code was not recognised — please check and try again.')}
            </p>
          )}
        </div>
      </div>
    </details>
  )
}
