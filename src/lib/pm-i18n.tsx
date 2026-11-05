'use client'

// ============================================================
// ДВОМОВНИЙ ШАР: українська (завжди перша) та англійська.
//   L(uk, en)  — вибрати рядок за поточною мовою (у компонентах)
//   <Bi>       — тип двомовного поля в даних { uk, en }
// Джерело мови — лише адреса: без ?lang сайт ЗАВЖДИ відкривається
// українською; ?lang=en (пряме посилання або перемикач у шапці)
// дає англійську і тримається в адресі вкладки. Зміна мови
// перемальовує всі компоненти, підписані на useLang().
// ============================================================

import { useCallback, useEffect, useSyncExternalStore } from 'react'

export type Lang = 'uk' | 'en'

let current: Lang = 'uk'

if (typeof window !== 'undefined') {
  try {
    const fromUrl = new URL(window.location.href).searchParams.get('lang')
    if (fromUrl === 'uk' || fromUrl === 'en') current = fromUrl
  } catch {
    /* приватний режим — лишається uk */
  }
}

const listeners = new Set<() => void>()

export function getLang(): Lang {
  return current
}

export function setLang(l: Lang): void {
  current = l
  if (typeof window !== 'undefined') {
    try {
      const u = new URL(window.location.href)
      u.searchParams.set('lang', l)
      window.history.replaceState(null, '', u.toString())
    } catch {
      /* приватний режим — просто перемалювати */
    }
  }
  listeners.forEach(f => f())
}

function subscribe(f: () => void): () => void {
  listeners.add(f)
  return () => {
    listeners.delete(f)
  }
}

export function useLang(): Lang {
  return useSyncExternalStore(subscribe, getLang, () => 'uk' as Lang)
}

/** Вибір рядка за мовою: L('Українською', 'In English') */
export function useL(): (uk: string, en: string) => string {
  const lang = useLang()
  return useCallback((uk: string, en: string) => (lang === 'uk' ? uk : en), [lang])
}

/** Двомовне поле в даних */
export interface Bi {
  uk: string
  en: string
}

/** Вибір двомовного поля даних: const B = useBi(); B(x.name) */
export function useBi(): (b: Bi) => string {
  const lang = useLang()
  return useCallback((b: Bi) => b[lang], [lang])
}

/** Перемикач УКР | ENG */
export function LangSwitch({ className }: { className?: string }) {
  const lang = useLang()
  const btn = (active: boolean) =>
    `rounded-md px-2 py-1 text-[11px] font-bold transition-colors ${
      active
        ? 'bg-zinc-900 text-white'
        : 'text-zinc-500 hover:bg-zinc-200 hover:text-zinc-700'
    }`
  return (
    <span
      className={`inline-flex items-center gap-0.5 rounded-lg border border-zinc-200 bg-white p-0.5 ${className ?? ''}`}
      role="group"
      aria-label={lang === 'uk' ? 'Мова інтерфейсу' : 'Interface language'}
    >
      <button type="button" onClick={() => setLang('uk')} className={btn(lang === 'uk')} aria-pressed={lang === 'uk'}>
        УКР
      </button>
      <button type="button" onClick={() => setLang('en')} className={btn(lang === 'en')} aria-pressed={lang === 'en'}>
        ENG
      </button>
    </span>
  )
}

/** Заголовок вкладки браузера мовою інтерфейсу (укр за замовчуванням) */
export function useTitle(uk: string, en: string): void {
  const lang = useLang()
  useEffect(() => {
    const t = lang === 'uk' ? uk : en
    document.title = t
    // Next.js/React під час гідратації відновлює <title> з metadata,
    // перетираючи наш (прямо через DOM-вузол). Протягом короткого вікна
    // після маунту форсуємо наш заголовок назад.
    const obs = new MutationObserver(() => {
      if (document.title !== t) document.title = t
    })
    obs.observe(document.head, { subtree: true, childList: true, characterData: true })
    const stop = window.setTimeout(() => obs.disconnect(), 2000)
    return () => {
      window.clearTimeout(stop)
      obs.disconnect()
    }
  }, [lang, uk, en])
}
