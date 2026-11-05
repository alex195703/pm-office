// ============================================================
// КЕЙС g6 · «План-конструктор» — планування та структуризація
// Семінар 6 · Тема 6 · 1 бал на семінарі
// ============================================================

import type { ScenarioDef } from '../scenario'

export const G6: ScenarioDef = {
  id: 'g6',
  badgeId: 'planner',
  effect: { resilience: 2, trust: 2 },
  introKicker: { uk: 'Семінар 6 · Тема 6 · 1 бал на семінарі', en: 'Seminar 6 · Topic 6 · 1 seminar point' },
  title: { uk: '«План-конструктор»', en: '“Plan Builder”' },
  summary: {
    uk: 'З ідеї «потрібен сквер» — до дерева цілей і структури плану, який не розвалиться.',
    en: 'From “we need a grove” to a goal tree and a plan structure that holds.',
  },
  durationMin: 20,
  stages: [
    {
      kind: 'brief',
      id: 'b1',
      title: { uk: 'Кейс: сквер, який не збирається', en: 'Case: the grove that will not assemble' },
      blocks: [
        {
          t: 'p',
          text: {
            uk: 'Мешканці petitionують відновити сквер Перемоги. У департаменту вже є «план»: «підготувати і зробити». Через місяць команда звітує: роботи почалися, але хтось купує лави, хтось саджає дерева без схеми поливу, а депутат питає, коли буде «готово» — і ніхто не знає, що таке «готово».',
            en: 'Residents petition to restore the Victory grove. The department already has a “plan”: “prepare and do it”. A month later the team reports: works have started, but someone buys benches, someone plants trees with no watering scheme, and a councillor asks when it will be “done” — and nobody knows what “done” means.',
          },
        },
        {
          t: 'pc',
          tone: 'orange',
          icon: '⚠',
          label: { uk: 'Основна проблема', en: 'The core problem' },
          text: {
            uk: 'Без дерева цілей і структурованого плану кожен учасник тягне проєкт у свій бік: роботи є, а руху до мети — ні. Перевірити прогрес неможливо, бо не зрозуміло, що саме і в якій послідовності мало статися.',
            en: 'Without a goal tree and a structured plan every participant pulls the project their own way: there is work, but no movement toward the goal. Progress cannot be checked because it is unclear what exactly had to happen and in what order.',
          },
        },
        {
          t: 'pc',
          tone: 'amber',
          icon: '⚡',
          label: { uk: 'Суперечність, що створює проблему', en: 'The contradiction behind the problem' },
          text: {
            uk: 'Гнучкість проти визначеності: планування здається бюрократією, що зв’язує руки («все одно все зміниться»), але без плану кожна зміна — хаос. Надмірно детальний план паралізує, відсутність плану — руйнує.',
            en: 'Flexibility versus certainty: planning looks like red tape that ties your hands (“everything will change anyway”), but without a plan every change is chaos. An over-detailed plan paralyses; no plan destroys.',
          },
        },
        {
          t: 'pc',
          tone: 'green',
          icon: '✅',
          label: { uk: 'Як знімається суперечність', en: 'How the contradiction is resolved' },
          text: {
            uk: 'Рівнем деталізації за горизонтом і деревом цілей. Головна ціль декомпозується на підцілі, підцілі — на завдання; кожен рівень відповідає на питання «заради чого?». План деталізується на найближчий період, дальні етапи лишаються рамковими — план живе і оновлюється, а не тисне.',
            en: 'By detail level per horizon and a goal tree. The main goal decomposes into sub-goals, sub-goals into tasks; each level answers “for the sake of what?”. The plan is detailed for the near term, distant stages stay at frame level — the plan lives and updates instead of pressing down.',
          },
        },
        {
          t: 'list',
          title: { uk: 'Етапи планування (теорія теми)', en: 'Planning stages (topic theory)' },
          items: [
            { uk: '1. Визначення цілей і обмежень → 2. Аналіз проблеми та ресурсів.', en: '1. Define goals and constraints → 2. Analyse the problem and resources.' },
            { uk: '3. Декомпозиція: дерево цілей, пакети робіт → 4. План дій: строки, виконавці, ресурси.', en: '3. Decompose: goal tree, work packages → 4. Action plan: timing, owners, resources.' },
            { uk: '5. Бюджет і джерела → 6. Контроль і коригування (план — живий документ).', en: '5. Budget and sources → 6. Control and adjustment (a plan is a living document).' },
            { uk: 'Бізнес-план/заявка має сталу структуру: резюме → потреба → рішення → ресурси → ефекти → ризики.', en: 'A business plan/application has a stable structure: summary → need → solution → resources → effects → risks.' },
          ],
        },
      ],
    },
    {
      kind: 'quiz',
      id: 'q1',
      title: { uk: 'Розминка: планування', en: 'Warm-up: planning' },
      questions: [
        {
          text: { uk: 'Що неправильне у цілі «зробити сквер гарним»?', en: 'What is wrong with the goal “make the grove beautiful”?' },
          options: [
            { uk: 'Вона не перевіряється: немає критерію «гарно» і строку', en: 'It cannot be verified: no criterion of “beautiful” and no deadline' },
            { uk: 'Вона занадто коротка', en: 'It is too short' },
            { uk: 'Нічого — цілі можуть бути якими завгодно', en: 'Nothing — goals can be anything' },
          ],
          correct: 0,
          why: {
            uk: 'Ціль має бути перевірною: що саме, для кого, до якого строку. «Гарно» — це думка, а не ціль.',
            en: 'A goal must be verifiable: what exactly, for whom, by when. “Beautiful” is an opinion, not a goal.',
          },
        },
        {
          text: { uk: 'Дерево цілей — це…', en: 'A goal tree is…' },
          options: [
            { uk: 'Декорація для презентації', en: 'A presentation decoration' },
            { uk: 'Ієрархія: головна ціль → підцілі → завдання, де нижні рівні служать верхнім', en: 'A hierarchy: main goal → sub-goals → tasks, where lower levels serve the upper ones' },
            { uk: 'Список усіх робіт підрядника', en: 'A list of all contractor works' },
          ],
          correct: 1,
          why: {
            uk: 'Дерево цілей тримає логіку «заради чого»: якщо завдання не служить верхньому рівню — його не має бути у проєкті.',
            en: 'The goal tree holds the “for the sake of what” logic: if a task serves no upper level, it has no place in the project.',
          },
        },
        {
          text: { uk: '«Все одно все зміниться — навіщо планувати?» Правильна відповідь команди:', en: '“Everything will change anyway — why plan?” The right team answer:' },
          options: [
            { uk: 'Тоді справді не треба', en: 'Indeed, no need then' },
            { uk: 'Планують рамку й найближчі кроки; зміни коригують план, а не скасовують його', en: 'Plan the frame and the near steps; changes adjust the plan, not cancel it' },
            { uk: 'Детально спланувати всі 100 робіт одразу і не змінювати', en: 'Plan all 100 works in detail at once and never change' },
          ],
          correct: 1,
          why: {
            uk: 'План — живий документ: рамка стабільна, деталі оновлюються. Це і є зняття суперечності «гнучкість ↔ визначеність».',
            en: 'A plan is a living document: the frame is stable, details refresh. That is how the “flexibility ↔ certainty” contradiction is resolved.',
          },
        },
      ],
    },
    {
      kind: 'order',
      id: 'o1',
      title: { uk: 'Завдання: зберіть цикл планування', en: 'Task: assemble the planning cycle' },
      intro: {
        uk: 'Шість етапів планування скверу — у правильній послідовності.',
        en: 'Six planning stages of the grove — in the right sequence.',
      },
      items: [
        { uk: 'Визначити ціль і обмеження (бюджет, площа, строк)', en: 'Define the goal and constraints (budget, area, deadline)' },
        { uk: 'Проаналізувати проблему й ресурси (обстеження, думка мешканців)', en: 'Analyse the problem and resources (survey, residents’ input)' },
        { uk: 'Побудувати дерево цілей і пакети робіт', en: 'Build the goal tree and work packages' },
        { uk: 'Склади план дій: строки, виконавці, ресурси', en: 'Draw up the action plan: timing, owners, resources' },
        { uk: 'Розрахувати бюджет і джерела фінансування', en: 'Compute the budget and funding sources' },
        { uk: 'Запустити контроль і щотижневе коригування плану', en: 'Start control and weekly plan adjustment' },
      ],
      outro: {
        uk: 'Цикл зімкнений: контроль повертається до цілі, і план оновлюється, не розвалюючись.',
        en: 'The loop is closed: control returns to the goal, and the plan refreshes without falling apart.',
      },
    },
    {
      kind: 'sort',
      id: 's1',
      title: { uk: 'Завдання: розділи розділів заявки', en: 'Task: sections of the application' },
      intro: {
        uk: 'Вісім елементів заявки/бізнес-плану. До якого розділу належить кожен?',
        en: 'Eight elements of an application/business plan. Which section does each belong to?',
      },
      buckets: [
        { uk: 'Потреба і контекст', en: 'Need and context' },
        { uk: 'Рішення і результати', en: 'Solution and results' },
        { uk: 'Ресурси і бюджет', en: 'Resources and budget' },
        { uk: 'Ризики', en: 'Risks' },
      ],
      items: [
        {
          text: { uk: 'Дані про стан скверу: 60 % дерев сухі, освітлення відсутнє', en: 'Data on the grove: 60% of trees dry, no lighting' },
          bucket: 0,
          why: { uk: 'Факти про проблему — розділ «Потреба».', en: 'Facts about the problem — the “Need” section.' },
        },
        {
          text: { uk: 'Опитування мешканців: 78 % підтримують відновлення скверу', en: 'Resident survey: 78% support the grove restoration' },
          bucket: 0,
          why: { uk: 'Соціальний доказ потреби — розділ «Потреба».', en: 'Social proof of the need — the “Need” section.' },
        },
        {
          text: { uk: 'Опис робіт: посадка 40 дерев, 12 лавок, LED-освітлення', en: 'Description of works: 40 trees, 12 benches, LED lighting' },
          bucket: 1,
          why: { uk: 'Що саме буде зроблено — розділ «Рішення».', en: 'What exactly will be done — the “Solution” section.' },
        },
        {
          text: { uk: 'Очікувані результати: +30 % відвідувань, щотижневі події', en: 'Expected results: +30% visits, weekly events' },
          bucket: 1,
          why: { uk: 'Ефекти для громади — розділ «Результати».', en: 'Community effects — the “Results” section.' },
        },
        {
          text: { uk: 'Кошторис: 2.1 млн грн з розбивкою по статтях', en: 'Estimate: UAH 2.1m broken down by items' },
          bucket: 2,
          why: { uk: 'Гроші і розбивка — розділ «Бюджет».', en: 'Money and breakdown — the “Budget” section.' },
        },
        {
          text: { uk: 'Команда: керівниця проєкту, агроном, громадський актив', en: 'Team: project lead, agronomist, community activists' },
          bucket: 2,
          why: { uk: 'Хто виконує — розділ «Ресурси».', en: 'Who delivers — the “Resources” section.' },
        },
        {
          text: { uk: 'Ризик вандалізму і план реакції (освітлення, чергування)', en: 'Vandalism risk and response plan (lighting, patrols)' },
          bucket: 3,
          why: { uk: 'Що може піти не так і що робитимемо — розділ «Ризики».', en: 'What can go wrong and what we will do — the “Risks” section.' },
        },
        {
          text: { uk: 'Джерела фінансування: 70 % програма, 30 % співфінансування громади', en: 'Funding sources: 70% programme, 30% community co-funding' },
          bucket: 2,
          why: { uk: 'Звідки гроші — розділ «Ресурси і бюджет».', en: 'Where the money comes from — the “Resources and budget” section.' },
        },
      ],
    },
    {
      kind: 'quiz',
      id: 'q2',
      title: { uk: 'Завдання: дерево цілей скверу', en: 'Task: the grove goal tree' },
      intro: {
        uk: 'Головна ціль: «Сквер Перемоги — безпечне місце дозвілля для мешканців до 1 жовтня». Яка декомпозиція правильна?',
        en: 'Main goal: “The Victory grove — a safe leisure space for residents by 1 October”. Which decomposition is right?',
      },
      questions: [
        {
          text: { uk: 'Який набір підцілей правильно служить головній цілі?', en: 'Which set of sub-goals properly serves the main goal?' },
          options: [
            { uk: 'Безпека (освітлення, огорожа) + затишок (дерева, лави) + активності (події) — у межах бюджету і строку', en: 'Safety (lighting, fence) + comfort (trees, benches) + activities (events) — within budget and deadline' },
            { uk: 'Купити дерева, купити лави, купити фарбу', en: 'Buy trees, buy benches, buy paint' },
            { uk: 'Звіт для ради, фото для соцмереж, подяка донору', en: 'A report for the council, photos for social media, thanks to the donor' },
          ],
          correct: 0,
          why: {
            uk: 'Підцілі — це аспекти головної цілі (безпека/затишок/активності), а не списки покупок і не PR-акції. Покупки — це вже завдання нижчого рівня.',
            en: 'Sub-goals are aspects of the main goal (safety/comfort/activities), not shopping lists or PR actions. Purchases are lower-level tasks.',
          },
        },
        {
          text: { uk: 'Яке завдання НЕ належить до цього дерева цілей?', en: 'Which task does NOT belong to this goal tree?' },
          options: [
            { uk: 'Встановити LED-освітлення головної алеї до 15 вересня', en: 'Install LED lighting on the main alley by 15 September' },
            { uk: 'Замінити вікна в сусідній школі (інший бюджет)', en: 'Replace windows in the neighbouring school (another budget)' },
            { uk: 'Провести 4 суботники з мешканцями', en: 'Hold 4 community clean-up days' },
          ],
          correct: 1,
          why: {
            uk: 'Правило дерева: завдання, що не служить жодній підцілі головної цілі, вирізається — навіть якщо корисне. Інакше проєкт роздувається.',
            en: 'Tree rule: a task serving no sub-goal of the main goal is cut — however useful. Otherwise the project bloats.',
          },
        },
      ],
    },
  ],
  debrief: {
    heading: { uk: 'Сквер зібрано на папері — тепер і в житті', en: 'The grove is assembled on paper — now in life' },
    recap: [
      { uk: 'План починається з перевірної цілі: що, для кого, до якого строку.', en: 'A plan starts with a verifiable goal: what, for whom, by when.' },
      { uk: 'Дерево цілей тримає логіку: завдання без верхнього рівня — з проєкту.', en: 'The goal tree holds the logic: a task with no upper level leaves the project.' },
      { uk: 'Структура заявки стала: потреба → рішення → ресурси → ризики.', en: 'The application structure is stable: need → solution → resources → risks.' },
      { uk: 'План — живий документ: рамка стабільна, деталі оновлюються контролем.', en: 'A plan is a living document: the frame is stable, details refresh under control.' },
    ],
  },
}
