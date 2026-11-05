// ============================================================
// КЕЙС g8 · «Ремонт вулиці» — мережевий аналіз і критичний шлях
// Семінар 8 · Тема 8 · 2 бали на семінарі
// ============================================================

import type { ScenarioDef } from '../scenario'

export const G8: ScenarioDef = {
  id: 'g8',
  badgeId: 'network',
  effect: { resilience: 3, wellbeing: 1 },
  introKicker: { uk: 'Семінар 8 · Тема 8 · 2 бали на семінарі', en: 'Seminar 8 · Topic 8 · 2 seminar points' },
  title: { uk: '«Ремонт вулиці»', en: '“Street Repair”' },
  summary: {
    uk: 'Знайдіть критичний шлях ремонту вулиці Зарічної, обчисліть резерви і врятуйте дедлайн.',
    en: 'Find the critical path of the Zarichna street repair, compute the reserves and save the deadline.',
  },
  durationMin: 25,
  stages: [
    {
      kind: 'brief',
      id: 'b1',
      title: { uk: 'Кейс: усі працюють, а строк тікає', en: 'Case: everyone works, the deadline still slips' },
      blocks: [
        {
          t: 'p',
          text: {
            uk: 'Ремонт вулиці Зарічної має завершитися до 20 серпня — на неї виходить маршрут шкільного автобуса. Бригади «працюють завзято» третій тиждень, але прогноз завершення вже 27 серпня. Ваш попередник керував проєктом «по списку робіт» — без мережевого графіка.',
            en: 'The Zarichna street repair must finish by 20 August — a school bus route runs there. The crews have been “working hard” for three weeks, yet the forecast is already 27 August. Your predecessor managed the project “by a work list” — with no network diagram.',
          },
        },
        {
          t: 'facts',
          items: [
            { label: { uk: 'A · Підготовка', en: 'A · Preparation' }, value: { uk: '3 дні → B, C', en: '3 days → B, C' } },
            { label: { uk: 'B · Асфальт', en: 'B · Asphalt' }, value: { uk: '5 днів → D', en: '5 days → D' } },
            { label: { uk: 'C · Бордюри', en: 'C · Kerbs' }, value: { uk: '3 дні → E', en: '3 days → E' } },
            { label: { uk: 'D · Розмітка', en: 'D · Marking' }, value: { uk: '1 день → F', en: '1 day → F' } },
            { label: { uk: 'E · Тротуар', en: 'E · Sidewalk' }, value: { uk: '4 дні → F', en: '4 days → F' } },
            { label: { uk: 'F · Приймання', en: 'F · Acceptance' }, value: { uk: '1 день', en: '1 day' } },
          ],
        },
        {
          t: 'pc',
          tone: 'orange',
          icon: '⚠',
          label: { uk: 'Основна проблема', en: 'The core problem' },
          text: {
            uk: 'Без мережевого аналізу невідомо, які саме роботи визначають строк: зусилля розподіляються рівномірно, і некритичні роботи отримують ресурси нарівні з критичними. Строк визначає не сума тривалостей, а найдовший ланцюг залежностей.',
            en: 'Without network analysis it is unknown which works define the deadline: effort spreads evenly, and non-critical works get resources on par with critical ones. The deadline is set not by the sum of durations but by the longest chain of dependencies.',
          },
        },
        {
          t: 'pc',
          tone: 'amber',
          icon: '⚡',
          label: { uk: 'Суперечність, що створює проблему', en: 'The contradiction behind the problem' },
          text: {
            uk: 'Для команди всі роботи важливі — і так воно є; але для строку критичні лише деякі. Прискорення некритичного тротуару не наближає відкриття ні на день, а виглядає для робітників як «несправедлива» пріоритизація.',
            en: 'For the crew all works matter — and that is true; but for the deadline only some are critical. Speeding up the non-critical sidewalk does not bring the opening closer by a day, yet it looks “unfair” to the workers.',
          },
        },
        {
          t: 'pc',
          tone: 'green',
          icon: '✅',
          label: { uk: 'Як знімається суперечність', en: 'How the contradiction is resolved' },
          text: {
            uk: 'Мережевим графіком з резервами: критичний шлях показує, ДЕ саме прискорення скорочує строк, а резерви часу дозволяють чесно сказати некритичним бригадам: «ваш дедлайн пізніший, ваш резерв — N днів». Пріоритетність стає обґрунтованою, а не суб’єктивною.',
            en: 'By a network diagram with reserves: the critical path shows WHERE speeding up shortens the deadline, and time reserves let you honestly tell non-critical crews: “your deadline is later, your reserve is N days”. Priority becomes justified, not subjective.',
          },
        },
      ],
    },
    {
      kind: 'quiz',
      id: 'q1',
      title: { uk: 'Розминка: мережа і критичний шлях', en: 'Warm-up: the network and the critical path' },
      questions: [
        {
          text: {
            uk: 'За даними брифінгу: який шлях через мережу найдовший і визначає строк проєкту?',
            en: 'Per the briefing data: which path through the network is the longest and defines the project deadline?',
          },
          options: [
            { uk: 'A → C → E → F = 3+3+4+1 = 11 днів', en: 'A → C → E → F = 3+3+4+1 = 11 days' },
            { uk: 'A → B → D → F = 3+5+1+1 = 10 днів', en: 'A → B → D → F = 3+5+1+1 = 10 days' },
            { uk: 'A → B → C → E → F = 16 днів', en: 'A → B → C → E → F = 16 days' },
          ],
          correct: 0,
          why: {
            uk: 'B не залежить від C: шлях A-B-D-F = 10 днів, шлях A-C-E-F = 11 днів. Критичний шлях — 11 днів: бордюри і тротуар визначають строк, не асфальт. Третій варіант — не шлях: B і C не пов’язані.',
            en: 'B does not depend on C: path A-B-D-F = 10 days, path A-C-E-F = 11 days. The critical path is 11 days: kerbs and sidewalk set the deadline, not the asphalt. The third option is not a path: B and C are unrelated.',
          },
        },
        {
          text: { uk: 'Скільки днів резерву має робота B «Асфальт» (шлях 10 днів проти критичного 11)?', en: 'How many days of reserve does work B “Asphalt” have (a 10-day path vs the critical 11)?' },
          options: [
            { uk: '1 день', en: '1 day' },
            { uk: '5 днів', en: '5 days' },
            { uk: '0 — вона критична', en: '0 — it is critical' },
          ],
          correct: 0,
          why: {
            uk: 'Резерв = критична тривалість − тривалість шляху через B: 11 − 10 = 1 день. B може задержатися на день без шкоди строку.',
            en: 'Reserve = critical duration − path duration through B: 11 − 10 = 1 day. B may slip a day without harming the deadline.',
          },
        },
        {
          text: { uk: 'Куди вкладати додаткову бригаду, щоб скоротити строк проєкту?', en: 'Where to put an extra crew to shorten the project deadline?' },
          options: [
            { uk: 'На критичний шлях (бордюри/тротуар)', en: 'Onto the critical path (kerbs/sidewalk)' },
            { uk: 'На найбільш «втомлену» бригаду', en: 'Onto the “tiredest” crew' },
            { uk: 'На асфальт — він найдовший сам по собі', en: 'Onto the asphalt — it is the longest single work' },
          ],
          correct: 0,
          why: {
            uk: 'Скорочує строк лише стискання критичних робіт. Асфальт найдовший як робота (5 днів), але має резерв — його прискорення строк не змінює.',
            en: 'Only compressing critical works shortens the deadline. Asphalt is the longest single work (5 days) but has a reserve — speeding it up changes nothing.',
          },
        },
      ],
    },
    {
      kind: 'sort',
      id: 's1',
      title: { uk: 'Завдання: критичні чи з резервом?', en: 'Task: critical or with reserve?' },
      intro: {
        uk: 'Розкладіть роботи мережі Зарічної: критичний шлях (11 днів) чи є резерв часу.',
        en: 'Sort the Zarichna network works: on the critical path (11 days) or with a time reserve.',
      },
      buckets: [
        { uk: 'Критичний шлях', en: 'Critical path' },
        { uk: 'Має резерв', en: 'Has a reserve' },
      ],
      bucketHint: [{ uk: 'затримка = зрив строку', en: 'a slip breaks the deadline' }, { uk: 'затримка ≤ 1 дня безпечна', en: 'a slip of ≤ 1 day is safe' }],
      items: [
        {
          text: { uk: 'A · Підготовка (3 дні) — спільна для обох шляхів', en: 'A · Preparation (3 days) — shared by both paths' },
          bucket: 0,
          why: { uk: 'A належить обом шляхам — з нього починається критичний ланцюг.', en: 'A belongs to both paths — the critical chain starts here.' },
        },
        {
          text: { uk: 'C · Бордюри (3 дні)', en: 'C · Kerbs (3 days)' },
          bucket: 0,
          why: { uk: 'C на критичному шляху A-C-E-F (11 днів).', en: 'C is on the critical path A-C-E-F (11 days).' },
        },
        {
          text: { uk: 'E · Тротуар (4 дні)', en: 'E · Sidewalk (4 days)' },
          bucket: 0,
          why: { uk: 'E — найдовша робота критичного шляху: саме її стискання скорочує строк.', en: 'E is the longest work of the critical path: compressing it shortens the deadline.' },
        },
        {
          text: { uk: 'F · Приймання (1 день)', en: 'F · Acceptance (1 day)' },
          bucket: 0,
          why: { uk: 'Фінальна робота обох шляхів — завжди критична.', en: 'The final work of both paths — always critical.' },
        },
        {
          text: { uk: 'B · Асфальт (5 днів)', en: 'B · Asphalt (5 days)' },
          bucket: 1,
          why: { uk: 'Шлях через B = 10 днів: резерв 1 день. Прискорювати асфальт строк не змінює.', en: 'The path through B = 10 days: a 1-day reserve. Speeding up asphalt does not change the deadline.' },
        },
        {
          text: { uk: 'D · Розмітка (1 день)', en: 'D · Marking (1 day)' },
          bucket: 1,
          why: { uk: 'D після B — теж на коротшому шляху, резерв 1 день.', en: 'D follows B — on the shorter path too, a 1-day reserve.' },
        },
      ],
    },
    {
      kind: 'decision',
      id: 'd1',
      title: { uk: 'Рішення: дощ зупинив бордюрників', en: 'Decision: rain stopped the kerb crew' },
      intro: {
        uk: 'Доść зупинив роботу C «Бордюри» на 2 дні (критична робота!). Оренда додаткової бригади коштує 40 тис. грн/день і скорочує залишок C на 1 день. Що вирішуєте?',
        en: 'Rain stopped work C “Kerbs” for 2 days (a critical work!). Renting an extra crew costs UAH 40k/day and shortens the remaining C by 1 day. What do you decide?',
      },
      options: [
        {
          text: { uk: 'Перекинути бригаду з асфальту на бордюри', en: 'Move the crew from asphalt to kerbs' },
          quality: 'poor',
          outcome: {
            uk: 'Бордюри підуть швидше, але асфальт (резерв лише 1 день) затримається на 2 — він теж стане критичним. Строк зсунеться все одно на 1 день, а ще й виходить конфлікт на майданчику: робити дві речі однією бригадою неможливо.',
            en: 'The kerbs speed up, but asphalt (only a 1-day reserve) slips 2 — it becomes critical too. The deadline still shifts a day, plus a site conflict: one crew cannot do both.',
          },
        },
        {
          text: {
            uk: 'Орендувати бригаду на 1 день: скорочується критична робота, строк рятуємо за 40 тис. грн',
            en: 'Rent a crew for 1 day: the critical work shortens and the deadline is saved for UAH 40k',
          },
          quality: 'best',
          outcome: {
            uk: 'Стискання критичної C на день повертає проєкт у графік: приймання 20 серпня відбувається, маршрут автобуса запускається до школи. Штраф за зрив міського контракту був би 250 тис. грн — рішення зекономило 210 тис. і репутацію.',
            en: 'Compressing critical C by a day puts the project back on schedule: acceptance on 20 August happens, the bus route opens for school. The penalty for missing the city contract would be 250k — the decision saved 210k and the reputation.',
          },
        },
        {
          text: { uk: 'Прийняти зсув на 2 дні — дощ не призначений', en: 'Accept a 2-day slip — the rain is not your fault' },
          quality: 'ok',
          outcome: {
            uk: 'Формально форс-мажор, але маршрут шкільного автобуса стартує на 2 дні пізніше, а штраф частково все одно застосують. Іноді чесний компроміс — але тут був дешевший вихід.',
            en: 'Formally force majeure, but the school bus route starts 2 days late and the penalty partially applies anyway. Sometimes an honest compromise — but a cheaper way out existed.',
          },
        },
      ],
    },
  ],
  debrief: {
    heading: { uk: 'Зарічна встигає до 20 серпня', en: 'Zarichna makes it by 20 August' },
    recap: [
      { uk: 'Строк проєкту визначає найдовший ланцюг залежностей — критичний шлях.', en: 'The project deadline is set by the longest dependency chain — the critical path.' },
      { uk: 'Резерв часу показує, які затримки безпечні, а які — зрив.', en: 'The time reserve shows which slips are safe and which break the deadline.' },
      { uk: 'Стискати варто лише критичні роботи; прискорення некритичних не рухає строк.', en: 'Only compress critical works; speeding up non-critical ones moves nothing.' },
      { uk: 'Мережевий графік — аргумент у конфліктах за ресурси: пріоритет має розрахунок, а не гучність.', en: 'The network diagram is an argument in resource conflicts: priority comes from calculation, not loudness.' },
    ],
  },
}
