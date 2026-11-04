'use client'

// ============================================================
// КАБІНЕТ ВИКЛАДАЧА — /vykladach
// ------------------------------------------------------------
// Викладач вставляє «коди звітів», які студенти надсилають
// після кожного кейсу (месенджер, пошта), і бачить відомість:
// ім'я, група, XP, посада, результат семінару, бейджі.
// Дані живуть лише в браузері викладача (localStorage):
// без сервера, акаунтів і персональних даних на стороні.
// Коди самозвітовані — перед внесенням балів звіряйте
// бейджі на екрані студента під час семінару.
// ============================================================

import { useEffect, useMemo, useRef, useState } from 'react'
import { LangSwitch, useBi, useL, useTitle } from '@/lib/pm-i18n'
import {
  BADGES,
  RANKS,
  normalizeProgress,
  rankFor,
  reportFromCode,
  type Progress,
} from '@/lib/pm-office'

interface Entry {
  key: string
  name: string
  group: string
  date: number // коли студент згенерував код
  addedAt: number // коли викладач додав код
  progress: Progress
}

const TEACHER_KEY = 'pm-office-teacher-v1'

type SortMode = 'added' | 'xp' | 'name'

export default function VykladachPage() {
  const t = useL()
  const B = useBi()
  useTitle('Кабінет викладача — Проєктний офіс громади', 'Lecturer console — Community PM Office')

  const [entries, setEntries] = useState<Entry[]>([])
  const [code, setCode] = useState('')
  const [msg, setMsg] = useState<{ kind: 'ok' | 'err'; text: string } | null>(null)
  const [sort, setSort] = useState<SortMode>('added')
  const hydrated = useRef(false)

  // завантаження відомості
  useEffect(() => {
    queueMicrotask(() => {
      try {
        const raw = localStorage.getItem(TEACHER_KEY)
        if (raw) {
          const parsed: unknown = JSON.parse(raw)
          if (Array.isArray(parsed)) {
            setEntries(
              parsed
                .filter((e): e is Entry => !!e && typeof e === 'object' && 'key' in e)
                .map((e) => ({
                  ...e,
                  progress: e.progress ?? normalizeProgress(null),
                })),
            )
          }
        }
      } catch {
        /* приватний режим */
      }
      hydrated.current = true
    })
  }, [])

  // збереження відомості
  useEffect(() => {
    if (!hydrated.current) return
    try {
      localStorage.setItem(TEACHER_KEY, JSON.stringify(entries))
    } catch {
      /* приватний режим */
    }
  }, [entries])

  /** Повідомлення про результат додавання */
  const resultMsg = (a: number, u: number, f: number) =>
    f > 0
      ? t(
          `Додано: ${a} · Оновлено: ${u} · Не розпізнано: ${f}. Перевірте, чи коди скопійовано повністю.`,
          `Added: ${a} · Updated: ${u} · Not recognised: ${f}. Make sure the codes were copied in full.`,
        )
      : t(`Додано нових: ${a} · Оновлено наявних: ${u}`, `Added: ${a} · Updated: ${u}`)

  /** Розбір одного чи кількох кодів (розділювач — пробіл або новий рядок) */
  const add = () => {
    const tokens = code.trim().split(/\s+/).filter((s) => s.length > 8)
    if (tokens.length === 0) {
      setMsg({
        kind: 'err',
        text: t(
          'Вставте код звіту — рядок, що починається з «PMR1.».',
          'Paste a report code — a line starting with “PMR1.”.',
        ),
      })
      return
    }
    let added = 0
    let updated = 0
    let failed = 0
    const fresh: Entry[] = []
    for (const tk of tokens) {
      const rep = reportFromCode(tk)
      if (!rep) {
        failed++
        continue
      }
      const key =
        rep.name || rep.group
          ? `${rep.name}|${rep.group}`.toLowerCase()
          : `anon:${tk.slice(-24)}`
      fresh.push({
        key,
        name: rep.name,
        group: rep.group,
        date: rep.date,
        addedAt: Date.now(),
        progress: rep.progress,
      })
    }
    const nxt = [...entries]
    for (const e of fresh) {
      const i = nxt.findIndex((x) => x.key === e.key)
      if (i >= 0) {
        nxt[i] = e
        updated++
      } else {
        nxt.unshift(e)
        added++
      }
    }
    setEntries(nxt)
    setCode('')
    setMsg({ kind: failed > 0 ? 'err' : 'ok', text: resultMsg(added, updated, failed) })
  }

  const remove = (key: string) => setEntries((prev) => prev.filter((e) => e.key !== key))

  const clearAll = () => {
    if (entries.length === 0) return
    const q = t(
      'Видалити всі записи відомості? Дію не можна скасувати.',
      'Remove all entries from the mark sheet? This cannot be undone.',
    )
    if (window.confirm(q)) setEntries([])
  }

  const sorted = useMemo(() => {
    const arr = [...entries]
    if (sort === 'xp') arr.sort((a, b) => b.progress.xp - a.progress.xp)
    else if (sort === 'name')
      arr.sort((a, b) => (a.name || 'я').localeCompare(b.name || 'я', 'uk'))
    else arr.sort((a, b) => b.addedAt - a.addedAt)
    return arr
  }, [entries, sort])

  const totalXp = entries.reduce((s, e) => s + e.progress.xp, 0)
  const playedG1 = entries.filter((e) => (e.progress.games['g1']?.completions ?? 0) > 0).length
  const rankIdx = (xp: number) => RANKS.findIndex((r) => r.id === rankFor(xp).id) + 1
  const fmtDate = (d: number) =>
    new Date(d).toLocaleDateString('uk-UA', { day: '2-digit', month: '2-digit', year: 'numeric' })

  /** Експорт відомості в CSV (роздільник «;», BOM для Excel) */
  const exportCsv = () => {
    const head = [
      '№',
      t('Студент', 'Student'),
      t('Група', 'Group'),
      'XP',
      t('Посада', 'Position'),
      t('Рівень', 'Level'),
      t('Семінар 1, %', 'Seminar 1, %'),
      t('Спроби семінару 1', 'Seminar 1 attempts'),
      t('Бейджі, к-ть', 'Badges, count'),
      t('Бейджі', 'Badges'),
      t('Добробут', 'Wellbeing'),
      t('Довіра', 'Trust'),
      t('Стійкість', 'Resilience'),
      t('Бюджет', 'Budget'),
      t('Звіт від', 'Report date'),
      t('Додано', 'Added'),
    ]
    const cell = (v: string | number) => {
      const s = String(v)
      return /[";\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s
    }
    const rows = sorted.map((e, i) => {
      const g1 = e.progress.games['g1']
      const owned = BADGES.filter((b) => e.progress.badges.includes(b.id))
      const r = rankFor(e.progress.xp)
      return [
        i + 1,
        e.name || '—',
        e.group || '—',
        e.progress.xp,
        B(r.title),
        rankIdx(e.progress.xp),
        g1 ? g1.best : '',
        g1 ? g1.completions : 0,
        owned.length,
        owned.map((b) => B(b.name)).join('; '),
        e.progress.indicators.wellbeing ?? '',
        e.progress.indicators.trust ?? '',
        e.progress.indicators.resilience ?? '',
        e.progress.indicators.budget ?? '',
        fmtDate(e.date),
        fmtDate(e.addedAt),
      ]
        .map(cell)
        .join(';')
    })
    const csv = '\uFEFF' + [head.join(';'), ...rows].join('\r\n')
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8' })
    const a = document.createElement('a')
    a.href = URL.createObjectURL(blob)
    a.download = `pm-office-vidomist-${new Date().toISOString().slice(0, 10)}.csv`
    a.click()
    URL.revokeObjectURL(a.href)
  }

  return (
    <div className="flex min-h-screen flex-col bg-[#F4F1E9] text-stone-800">
      {/* ================= ШАПКА ================= */}
      <header className="bg-gradient-to-br from-[#0E6B62] via-[#15857A] to-[#15857A] text-white">
        <div className="mx-auto max-w-6xl px-4 pb-6 pt-5 sm:px-6">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <div className="text-[11px] font-bold uppercase tracking-widest text-white/70">
                {t('Проєктний офіс громади · Соснівка', 'Community PM Office · Sosnivka')}
              </div>
              <h1 className="mt-1 text-lg font-bold leading-tight sm:text-2xl">
                {t('📋 Кабінет викладача', '📋 Lecturer console')}
              </h1>
              <p className="mt-1 max-w-2xl text-xs leading-relaxed text-white/75 sm:text-sm">
                {t(
                  'Вставте коди звітів студентів — і отримайте відомість: XP, посада, результат семінару, бейджі. Дані зберігаються лише у вашому браузері.',
                  'Paste the students’ report codes to get the mark sheet: XP, position, seminar result, badges. The data stays only in your browser.',
                )}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <LangSwitch className="shrink-0 !border-white/30 !bg-white/10 [&_button]:!text-white/70 [&_button:hover]:!bg-white/20 [&_button]:[&[aria-pressed='true']]:!bg-white [&_button]:[&[aria-pressed='true']]:!text-[#0E6B62]" />
              <a
                href="/"
                className="rounded-lg border border-white/30 bg-white/10 px-3 py-1.5 text-xs font-bold text-white transition hover:bg-white/20"
              >
                ← {t('До хаба', 'Back to hub')}
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* ================= ВМІСТ ================= */}
      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-6 sm:px-6">
        <div className="space-y-6">
          {/* ---------- Додати коди ---------- */}
          <section className="rounded-2xl bg-white p-5 ring-1 ring-stone-200" aria-labelledby="add-h">
            <h2 id="add-h" className="text-sm font-bold text-stone-800">
              {t('Додати коди звітів', 'Add report codes')}
            </h2>
            <p className="mt-1 text-xs leading-relaxed text-stone-500">
              {t(
                'Код студент копіює в розділі «Профіль студента та звіт викладачу» у хабі та надсилає вам. Можна вставити одразу кілька кодів — кожен з нового рядка. Той самий студент (ім’я + група) оновлює свій рядок, а не дублює його.',
                'A student copies the code in the “Student profile and lecturer report” section of the hub and sends it to you. You may paste several codes at once — one per line. The same student (name + group) updates their row instead of duplicating it.',
              )}
            </p>
            <textarea
              value={code}
              onChange={(e) => {
                setCode(e.target.value)
                setMsg(null)
              }}
              rows={4}
              placeholder={'PMR1.eyJ…\nPMR1.eyJ…'}
              aria-label={t('Коди звітів студентів', 'Student report codes')}
              className="mt-3 w-full rounded-xl bg-stone-50 px-3 py-2.5 font-mono text-[11px] leading-relaxed text-stone-700 ring-1 ring-stone-300 focus:outline-none focus:ring-2 focus:ring-[#15857A]"
            />
            <div className="mt-2 flex flex-wrap items-center gap-2">
              <button
                onClick={add}
                className="rounded-lg bg-[#15857A] px-4 py-2 text-xs font-bold text-white transition hover:bg-[#0E6B62]"
              >
                {t('Додати до відомості', 'Add to the mark sheet')}
              </button>
              {msg && (
                <span
                  className={`text-xs font-semibold ${msg.kind === 'ok' ? 'text-[#15857A]' : 'text-amber-700'}`}
                  role="status"
                >
                  {msg.text}
                </span>
              )}
            </div>
            <p className="mt-2 text-[11px] leading-snug text-stone-500">
              {t(
                '⚠ Коди формуються на пристрої студента й не є криптографічно захищеними. Перед внесенням семінарських балів звіряйте бейджі на екрані студента.',
                '⚠ Codes are generated on the student’s device and are not cryptographically protected. Verify the badges on the student’s screen before awarding seminar points.',
              )}
            </p>
          </section>

          {/* ---------- Статистика + сортування ---------- */}
          {entries.length > 0 && (
            <section className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="rounded-xl bg-white px-3 py-2 font-semibold text-stone-700 ring-1 ring-stone-200">
                  👥 {t('Студентів', 'Students')}: <b>{entries.length}</b>
                </span>
                <span className="rounded-xl bg-white px-3 py-2 font-semibold text-stone-700 ring-1 ring-stone-200">
                  ⚡ {t('Середній XP', 'Average XP')}:{' '}
                  <b>{entries.length ? Math.round(totalXp / entries.length) : 0}</b>
                </span>
                <span className="rounded-xl bg-white px-3 py-2 font-semibold text-stone-700 ring-1 ring-stone-200">
                  🎮 {t('Кейс 1 пройшли', 'Case 1 completed')}: <b>{playedG1}</b>
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <label className="text-xs font-semibold text-stone-500" htmlFor="sort-sel">
                  {t('Сортування', 'Sort')}
                </label>
                <select
                  id="sort-sel"
                  value={sort}
                  onChange={(e) => setSort(e.target.value as SortMode)}
                  className="rounded-lg bg-white px-2.5 py-2 text-xs font-semibold text-stone-700 ring-1 ring-stone-300 focus:outline-none focus:ring-2 focus:ring-[#15857A]"
                >
                  <option value="added">{t('найновіші звіти', 'latest reports')}</option>
                  <option value="xp">{t('за XP', 'by XP')}</option>
                  <option value="name">{t('за ім’ям', 'by name')}</option>
                </select>
                <button
                  onClick={exportCsv}
                  className="rounded-lg border border-stone-300 bg-white px-3 py-2 text-xs font-bold text-stone-700 transition hover:bg-stone-100"
                >
                  ⬇ CSV
                </button>
                <button
                  onClick={clearAll}
                  className="rounded-lg border border-red-200 bg-white px-3 py-2 text-xs font-bold text-red-600 transition hover:bg-red-50"
                >
                  {t('Очистити', 'Clear')}
                </button>
              </div>
            </section>
          )}

          {/* ---------- Відомість ---------- */}
          {entries.length === 0 ? (
            <section className="rounded-2xl bg-white p-8 text-center ring-1 ring-stone-200">
              <div className="text-4xl">🗂️</div>
              <h2 className="mt-3 text-base font-bold text-stone-800">
                {t('Відомість поки порожня', 'The mark sheet is empty for now')}
              </h2>
              <ol className="mx-auto mt-3 max-w-xl list-decimal space-y-1.5 pl-5 text-left text-sm leading-relaxed text-stone-600">
                <li>
                  {t(
                    'Студент відкриває застосунок та в розділі «Профіль студента та звіт викладачу» вводить прізвище й групу.',
                    'A student opens the app and fills in their name and group in the “Student profile and lecturer report” section.',
                  )}
                </li>
                <li>
                  {t(
                    'Після завершеного кейсу студент копіює код звіту й надсилає вам (чат групи, пошта).',
                    'After a completed case the student copies the report code and sends it to you (group chat, e-mail).',
                  )}
                </li>
                <li>
                  {t(
                    'Ви вставляєте код сюди — рядок студента з’являється у відомості.',
                    'You paste the code here — the student’s row appears in the mark sheet.',
                  )}
                </li>
              </ol>
            </section>
          ) : (
            <section className="overflow-hidden rounded-2xl bg-white ring-1 ring-stone-200">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[760px] text-left text-sm">
                  <thead>
                    <tr className="border-b border-stone-200 bg-stone-50 text-[11px] uppercase tracking-wide text-stone-400">
                      <th className="px-3 py-2.5 font-bold">№</th>
                      <th className="px-3 py-2.5 font-bold">{t('Студент', 'Student')}</th>
                      <th className="px-3 py-2.5 font-bold">{t('Група', 'Group')}</th>
                      <th className="px-3 py-2.5 font-bold">XP</th>
                      <th className="px-3 py-2.5 font-bold">{t('Посада', 'Position')}</th>
                      <th className="px-3 py-2.5 font-bold">{t('Семінар 1', 'Seminar 1')}</th>
                      <th className="px-3 py-2.5 font-bold">{t('Бейджі', 'Badges')}</th>
                      <th className="px-3 py-2.5 font-bold">{t('Звіт від', 'Report date')}</th>
                      <th className="px-3 py-2.5" aria-label={t('Видалити', 'Remove')} />
                    </tr>
                  </thead>
                  <tbody>
                    {sorted.map((e, i) => {
                      const rank = rankFor(e.progress.xp)
                      const g1 = e.progress.games['g1']
                      const owned = BADGES.filter((b) => e.progress.badges.includes(b.id))
                      return (
                        <tr key={e.key} className="border-b border-stone-100 last:border-0">
                          <td className="px-3 py-3 text-xs text-stone-400">{i + 1}</td>
                          <td className="px-3 py-3 font-semibold text-stone-800">
                            {e.name || t('Без імені', 'Unnamed')}
                          </td>
                          <td className="px-3 py-3 text-stone-600">{e.group || '—'}</td>
                          <td className="px-3 py-3 text-base font-bold text-[#15857A]">{e.progress.xp}</td>
                          <td className="max-w-[220px] truncate px-3 py-3 text-xs text-stone-600">
                            <span className="mr-1.5 inline-block rounded-md bg-stone-100 px-1.5 py-0.5 text-[10px] font-bold text-stone-500">
                              {rankIdx(e.progress.xp)}/4
                            </span>
                            <span title={B(rank.title)}>{B(rank.title)}</span>
                          </td>
                          <td className="px-3 py-3 text-xs">
                            {g1 ? (
                              <span
                                title={t(`Спроб: ${g1.completions}`, `Attempts: ${g1.completions}`)}
                                className="rounded-md bg-[#15857A]/10 px-2 py-1 font-bold text-[#15857A]"
                              >
                                {g1.best}%
                              </span>
                            ) : (
                              <span className="text-stone-300">—</span>
                            )}
                          </td>
                          <td className="px-3 py-3 text-xs">
                            {owned.length > 0 ? (
                              <span
                                title={owned.map((b) => B(b.name)).join(', ')}
                                className="rounded-md bg-amber-100/70 px-2 py-1 font-bold text-amber-700"
                              >
                                🏅 {owned.length}/{BADGES.length}
                              </span>
                            ) : (
                              <span className="text-stone-300">0/{BADGES.length}</span>
                            )}
                          </td>
                          <td className="px-3 py-3 text-xs text-stone-500">{fmtDate(e.date)}</td>
                          <td className="px-3 py-3 text-right">
                            <button
                              onClick={() => remove(e.key)}
                              aria-label={`${t('Видалити', 'Remove')}: ${e.name}`}
                              className="rounded-md px-2 py-1 text-xs font-bold text-stone-300 transition hover:bg-red-50 hover:text-red-600"
                            >
                              ✕
                            </button>
                          </td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
            </section>
          )}
        </div>
      </main>

      {/* ================= ПІДВАЛ ================= */}
      <footer className="mt-auto bg-[#0E6B62] px-4 py-4 text-center text-[11px] leading-relaxed text-white/70 sm:px-6">
        <p>
          {t(
            'Відомість зберігається лише у вашому браузері (localStorage) — без сервера й передачі третім сторонам. Коди звітів самозвітовані студентами.',
            'The mark sheet is stored only in your browser (localStorage) — no server, no third-party transfer. Report codes are self-reported by students.',
          )}
        </p>
      </footer>
    </div>
  )
}
