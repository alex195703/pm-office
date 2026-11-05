// ============================================================
// КЕЙС g13 · «Радар ризиків Соснівки» — прогнозування ризиків
// Семінар 13 · Тема 13 · 1 бал на семінарі
// ============================================================

import type { ScenarioDef } from '../scenario'

export const G13: ScenarioDef = {
  id: 'g13',
  badgeId: 'riskmgr',
  effect: { resilience: 3, trust: 1 },
  introKicker: { uk: 'Семінар 13 · Тема 13 · 1 бал на семінарі', en: 'Seminar 13 · Topic 13 · 1 seminar point' },
  title: { uk: '«Радар ризиків Соснівки»', en: '“Sosnivka Risk Radar”' },
  summary: {
    uk: 'Ідентифікуйте ризики проєкту, оцініть «ймовірність × вплив» і побудуйте матрицю пріоритетів.',
    en: 'Identify project risks, score “probability × impact” and build the priority matrix.',
  },
  durationMin: 20,
  stages: [
    {
      kind: 'brief',
      id: 'b1',
      title: { uk: 'Кейс: підрядник зник', en: 'Case: the contractor vanished' },
      blocks: [
        {
          t: 'p',
          text: {
            uk: 'Підрядник ремонту котельні не вийшов на об’єкт третього дня: фірма в процедурі банкрутства. Аванс — 40 % контракту. Міський голова: «це ж можна було передбачити?!» — і він має рацію: конкурсна пропозиція підрядника мала найнижчу ціну на 22 % нижчу за всіх інших. Сигнал був. Реєстру ризиків не було.',
            en: 'The boiler-repair contractor has not shown up for three days: the firm is in bankruptcy proceedings. The advance — 40% of the contract. The mayor: “could this not have been foreseen?!” — and he is right: the winning bid was 22% below every other offer. The signal was there. There was no risk register.',
          },
        },
        {
          t: 'pc',
          tone: 'orange',
          icon: '⚠',
          label: { uk: 'Основна проблема', en: 'The core problem' },
          text: {
            uk: 'Ризики обговорюють після подій: «хто міг знати». Без системної ідентифікації та оцінки план будується на найоптимістичнішому сценарії, і кожна невизначеність стає кризою.',
            en: 'Risks are discussed after events: “who could have known”. Without systematic identification and scoring the plan is built on the most optimistic scenario, and every uncertainty becomes a crisis.',
          },
        },
        {
          t: 'pc',
          tone: 'amber',
          icon: '⚡',
          label: { uk: 'Суперечність, що створює проблему', en: 'The contradiction behind the problem' },
          text: {
            uk: 'Планувати невідоме здається марнотою («все одно нічого не передбачиш»), а ігнорувати ризики — дорого. Неможливо передбачити ВСЕ — можливо підготуватися до типового; але цю межу треба визнати, а не ховатися за нею.',
            en: 'Planning the unknown feels futile (“you can never predict anything”) while ignoring risks is expensive. You cannot foresee EVERYTHING — you can prepare for the typical; but that boundary must be acknowledged, not hidden behind.',
          },
        },
        {
          t: 'pc',
          tone: 'green',
          icon: '✅',
          label: { uk: 'Як знімається суперечність', en: 'How the contradiction is resolved' },
          text: {
            uk: 'Реєстром ризиків з матрицею «ймовірність × вплив»: список типових ризиків галузі, кожен отримує оцінку 1–5 за двома осями; твір сортує пріоритети. Живий документ: новий ризик додається за 5 хвилин на статус-мітингу. Радар не передбачає все — він гарантує, що типове не стане раптовим.',
            en: 'By a risk register with a “probability × impact” matrix: a list of industry-typical risks, each scored 1–5 on both axes; the product sorts priorities. A living document: a new risk is added in 5 minutes at a status meeting. The radar does not predict everything — it guarantees the typical never becomes sudden.',
          },
        },
      ],
    },
    {
      kind: 'quiz',
      id: 'q1',
      title: { uk: 'Розминка: ризики', en: 'Warm-up: risks' },
      questions: [
        {
          text: { uk: 'Ризик проєкту — це…', en: 'A project risk is…' },
          options: [
            { uk: 'Невизначена подія, яка за настанням впливає на цілі проєкту', en: 'An uncertain event that, if it occurs, affects the project’s objectives' },
            { uk: 'Вже стала проблема, що вимагає рішення', en: 'An already-happened problem requiring a decision' },
            { uk: 'Будь-який стан погоди під час робіт', en: 'Any weather during the works' },
          ],
          correct: 0,
          why: {
            uk: 'Ризик — про невизначене майбутнє; подія, що вже сталась, — це issue, з нею працює не планування ризиків, а управління проблемами.',
            en: 'A risk is about an uncertain future; an event that already happened is an issue — handled by issue management, not risk planning.',
          },
        },
        {
          text: { uk: 'Що показує твір «ймовірність × вплив»?', en: 'What does the “probability × impact” product show?' },
          options: [
            { uk: 'Пріоритет ризику: на що реагувати в першу чергу', en: 'The risk priority: what to respond to first' },
            { uk: 'Точну дату зриву проєкту', en: 'The exact date the project fails' },
            { uk: 'Розмір авансу підряднику', en: 'The size of the contractor’s advance' },
          ],
          correct: 0,
          why: {
            uk: 'Матриця ранжує: високі ймовірність І вплив разом = топ черги реагувань. Один із факторів може бути малий — тоді пріоритет нижчий.',
            en: 'The matrix ranks: high probability AND impact together = the top of the response queue. Either factor being small lowers the priority.',
          },
        },
        {
          text: { uk: 'Ціна на 22 % нижча за всіх інших учасників тендеру — це…', en: 'A bid 22% below all other tenderers is…' },
          options: [
            { uk: 'Сигнал ризику: можливий демпінг, недооцінка робіт або фінансова криза виконавця', en: 'A risk signal: possible dumping, underestimated works, or the bidder’s financial distress' },
            { uk: 'Ознака найкращої пропозиції — перемога без питань', en: 'A sign of the best offer — a win with no questions' },
            { uk: 'Не має значення для ризиків', en: 'Irrelevant to risks' },
          ],
          correct: 0,
          why: {
            uk: 'Підозріло дешева пропозиція — класичний ранній індикатор: виконавець вважає грошей або їх уже немає. Це питання фінансового аналізу переможця.',
            en: 'A suspiciously cheap bid is a classic early indicator: the bidder miscounted or the money is already gone. It calls for a financial check of the winner.',
          },
        },
      ],
    },
    {
      kind: 'sort',
      id: 's1',
      title: { uk: 'Завдання: розставте ризики по зонах радара', en: 'Task: place risks on the radar zones' },
      intro: {
        uk: 'Вісім ризиків проєкту котельні з оцінками (ймовірність/вплив по 5-бальній шкалі). Розкладіть по зонах: критична (≥12), помірна (6–11), спостереження (≤5).',
        en: 'Eight risks of the boiler project with scores (probability/impact on a 1–5 scale). Sort into zones: critical (≥12), moderate (6–11), watch (≤5).',
      },
      buckets: [
        { uk: 'Критична зона', en: 'Critical zone' },
        { uk: 'Помірна зона', en: 'Moderate zone' },
        { uk: 'Спостереження', en: 'Watch list' },
      ],
      bucketHint: [
        { uk: 'реагувати негайно', en: 'respond immediately' },
        { uk: 'планувати реагування', en: 'plan a response' },
        { uk: 'моніторити без витрат', en: 'monitor at no cost' },
      ],
      items: [
        {
          text: { uk: 'Банкрутство підрядника (4/4)', en: 'Contractor bankruptcy (4/4)' },
          bucket: 0,
          why: { uk: '16 балів — вершина матриці: реальний кейс громади.', en: '16 points — the top of the matrix: the community’s real case.' },
        },
        {
          text: { uk: 'Затримка поставки котлів (4/3)', en: 'Boiler delivery delay (4/3)' },
          bucket: 0,
          why: { uk: '12 балів — критична: літо коротке, зима не чекає.', en: '12 points — critical: summer is short, winter waits for no one.' },
        },
        {
          text: { uk: 'Зростання цін на газ у розрахунку тарифу (3/2)', en: 'Gas price growth in the tariff calculation (3/2)' },
          bucket: 1,
          why: { uk: '6 балів — помірна: вплив у часі, можна перерахувати.', en: '6 points — moderate: impact over time, can be recalculated.' },
        },
        {
          text: { uk: 'Хвороба одного з монтажників (2/3)', en: 'Illness of one of the installers (2/3)' },
          bucket: 1,
          why: { uk: '6 балів — помірна: підміна можлива, але вона коштує часу.', en: '6 points — moderate: a substitute exists but costs time.' },
        },
        {
          text: { uk: 'Знеструмлення на день монтажу (2/2)', en: 'A one-day blackout during assembly (2/2)' },
          bucket: 2,
          why: { uk: '4 бали — спостереження: день простою не ламає проєкт.', en: '4 points — watch: a one-day stop does not break the project.' },
        },
        {
          text: { uk: 'Протест мешканців проти димоходу (1/4)', en: 'Residents’ protest against the chimney (1/4)' },
          bucket: 2,
          why: { uk: '4 бали — спостереження: вплив великий, але ймовірність мала при ранніх обговореннях.', en: '4 points — watch: high impact but low probability with early hearings.' },
        },
        {
          text: { uk: 'Помилка в проєкті димоходу (3/5)', en: 'An error in the chimney design (3/5)' },
          bucket: 0,
          why: { uk: '15 балів — критична: переробка димоходу = повторний монтаж і зима без тепла.', en: '15 points — critical: chimney rework = re-assembly and a winter without heat.' },
        },
        {
          text: { uk: 'Затримка платежу з бюджету на тиждень (2/2)', en: 'A one-week budget payment delay (2/2)' },
          bucket: 2,
          why: { uk: '4 бали — спостереження: тиждень покривається залишком резерву.', en: '4 points — watch: a week is covered by the remaining reserve.' },
        },
      ],
    },
    {
      kind: 'match',
      id: 'm1',
      title: { uk: 'Завдання: анатомія ризику', en: 'Task: the anatomy of a risk' },
      intro: {
        uk: 'Чотири кроки управління ризиками — зведіть кожен з його змістом.',
        en: 'The four steps of risk management — match each with its content.',
      },
      pairs: [
        {
          left: { uk: 'Ідентифікація', en: 'Identification' },
          right: { uk: 'Складання списку: що може піти не так', en: 'Compiling the list: what can go wrong' },
        },
        {
          left: { uk: 'Аналіз', en: 'Analysis' },
          right: { uk: 'Оцінка ймовірності та впливу кожної події', en: 'Scoring each event’s probability and impact' },
        },
        {
          left: { uk: 'Планування реагування', en: 'Response planning' },
          right: { uk: 'Вибір стратегії і власника для кожного пріоритетного ризику', en: 'Choosing a strategy and an owner for each priority risk' },
        },
        {
          left: { uk: 'Моніторинг', en: 'Monitoring' },
          right: { uk: 'Перегляд реєстру на кожному статус-мітингу', en: 'Reviewing the register at every status meeting' },
        },
      ],
    },
    {
      kind: 'decision',
      id: 'd1',
      title: { uk: 'Рішення: заповнити вакансію підрядника', en: 'Decision: fill the contractor vacancy' },
      intro: {
        uk: 'Термінова заміна: друга за ціною фірма готова стартувати за тиждень (+6 % до ціни); тендер заново — 5 тижнів і, можливо, дешевше; третій варіант — розірвати контракт і чекати перевірки. Що вирішуєте?',
        en: 'Urgent replacement: the second-priced firm can start in a week (+6% on price); a re-tender — 5 weeks and possibly cheaper; the third option — terminate and wait for the audit. What do you decide?',
      },
      options: [
        {
          text: { uk: 'Чекати перевірки і розривати контракт одразу', en: 'Wait for the audit and terminate immediately' },
          quality: 'poor',
          outcome: {
            uk: 'Поки йде перевірка (місяці), котельня не ремонтується: громада входить у вересень без гарячої води. Правильна процедура на папері — зрив результату в житті.',
            en: 'While the audit runs (months), the boiler is not repaired: the community enters September without hot water. Right procedure on paper — a missed result in life.',
          },
        },
        {
          text: {
            uk: 'Друга фірма за +6 % з фінансовою перевіркою та банківською гарантією до підписання',
            en: 'The second firm at +6% with a financial check and a bank guarantee before signing',
          },
          quality: 'best',
          outcome: {
            uk: 'Фінансовий аналіз другої фірми чистий, банківська гарантія страхує аванс. Ремонт стартує за тиждень, зима буде з теплом. +6 % — ціна недопущення повторення катастрофи; реєстр ризиків тепер обов’язковий для всіх тендерів громади.',
            en: 'The second firm’s financial check is clean, the bank guarantee secures the advance. The repair starts within a week and winter will have heat. The +6% is the price of not repeating the disaster; the risk register is now mandatory for all community tenders.',
          },
        },
        {
          text: { uk: 'Тендер заново — за регламентом', en: 'Re-tender — by the book' },
          quality: 'ok',
          outcome: {
            uk: 'Процедурно бездоганно, але 5 тижнів простою; нові учасники, можливо, ті самі низькі ціни з тим самим ризиком, якщо не додати фінансовий фільтр. Строк опалювального сезону під загрозою.',
            en: 'Procedurally impeccable, but 5 weeks of downtime; new bidders, possibly the same low prices with the same risk if no financial filter is added. The heating season deadline is at stake.',
          },
        },
      ],
    },
  ],
  debrief: {
    heading: { uk: 'Радар увімкнено: типове більше не раптове', en: 'The radar is on: the typical is no longer sudden' },
    recap: [
      { uk: 'Ризик = невизначена подія; реєстр ризиків — живий документ, а не розділ звіту.', en: 'A risk is an uncertain event; the risk register is a living document, not a report section.' },
      { uk: 'Матриця «ймовірність × вплив» ранжує чергу реагувань.', en: 'The “probability × impact” matrix ranks the response queue.' },
      { uk: 'Підозріло низькі ціни тендеру — рання ознака ризику, а не привід для радості.', en: 'Suspiciously low tender prices are an early risk sign, not a reason to celebrate.' },
      { uk: 'Неможливо передбачити все — можливо гарантовано підготуватися до типового.', en: 'You cannot foresee everything — you can guarantee preparation for the typical.' },
    ],
  },
}
