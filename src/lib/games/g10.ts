// ============================================================
// КЕЙС g10 · «Інструментальний квест» — автоматизація управління
// Семінар 10 · Тема 10 · 2 бали на семінарі
// ============================================================

import type { ScenarioDef } from '../scenario'

export const G10: ScenarioDef = {
  id: 'g10',
  badgeId: 'technocrat',
  effect: { budget: 2, resilience: 2 },
  introKicker: { uk: 'Семінар 10 · Тема 10 · 2 бали на семінарі', en: 'Seminar 10 · Topic 10 · 2 seminar points' },
  title: { uk: '«Інструментальний квест»', en: '“Tool Quest”' },
  summary: {
    uk: 'Excel чи MS Project? Співвіднесіть задачі управління з інструментами — і виберіть впровадження.',
    en: 'Excel or MS Project? Match management tasks to tools — and choose what to implement.',
  },
  durationMin: 20,
  stages: [
    {
      kind: 'brief',
      id: 'b1',
      title: { uk: 'Кейс: 14 версій одного плану', en: 'Case: 14 versions of one plan' },
      blocks: [
        {
          t: 'p',
          text: {
            uk: 'У департаменті 6 проєктів ведуться в шести Excel-файлах. Пошук «актуальної версії» — квест: на минулому статус-мітингу з’ясувалося, що у менеджерки і у бухгалтерії різні бюджети одного проєкту. Керівник просить «купити той самий Primavera, як у сусідів». Ви маєте запропонувати рішення, а не назву.',
            en: 'The department runs 6 projects in 6 Excel files. Finding the “current version” is a quest: at the last status meeting the project manager and accounting had different budgets for the same project. The director asks to “buy that same Primavera the neighbours have”. You must offer a solution, not a name.',
          },
        },
        {
          t: 'pc',
          tone: 'orange',
          icon: '⚠',
          label: { uk: 'Основна проблема', en: 'The core problem' },
          text: {
            uk: 'Ручне ведення проєктів у розрізнених таблицях народжує розбіжності версій, непрозорі залежності і звіти, що збираються тижнями. Помилки виявляються тоді, коли їх уже неможливо виправити дешево.',
            en: 'Manual project tracking in scattered spreadsheets breeds version conflicts, opaque dependencies and reports that take weeks to assemble. Errors surface when they can no longer be fixed cheaply.',
          },
        },
        {
          t: 'pc',
          tone: 'amber',
          icon: '⚡',
          label: { uk: 'Суперечність, що створює проблему', en: 'The contradiction behind the problem' },
          text: {
            uk: 'Потужність проти простоти: професійні системи (MS Project, Primavera, Spider Project) вміють все — але коштують, потребують навчання і дисципліни; таблиці безкоштовні і звичні — але не тримають залежності та версії. «Найпотужніший» інструмент часто не той, що потрібен.',
            en: 'Power versus simplicity: professional systems (MS Project, Primavera, Spider Project) can do everything — but cost money, need training and discipline; spreadsheets are free and familiar — but hold neither dependencies nor versions. The “most powerful” tool is often not the right one.',
          },
        },
        {
          t: 'pc',
          tone: 'green',
          icon: '✅',
          label: { uk: 'Як знімається суперечність', en: 'How the contradiction is resolved' },
          text: {
            uk: 'Вибором інструмента за задачами, а не за рекламою: що саме треба автоматизувати? (графік і залежності → MS Project/Spider; портфель і ресурси підприємства → Primavera; спільні списки задач → хмарні дошки; простий трекінг одного проєкту — навіть таблиця з дисципліною.) Впровадження — поетапне: спершу один проєкт-пілот.',
            en: 'Choosing a tool by tasks, not by advertising: what exactly needs automating? (schedule and dependencies → MS Project/Spider; enterprise portfolio and resources → Primavera; shared task lists → cloud boards; simple single-project tracking — even a disciplined spreadsheet.) Implementation is staged: one pilot project first.',
          },
        },
        {
          t: 'facts',
          items: [
            { label: { uk: 'MS Project', en: 'MS Project' }, value: { uk: 'графіки, зв’язки, ресурси — класика', en: 'schedules, links, resources — the classic' } },
            { label: { uk: 'Primavera', en: 'Primavera' }, value: { uk: 'великі портфелі, інфраструктура', en: 'large portfolios, infrastructure' } },
            { label: { uk: 'Spider Project', en: 'Spider Project' }, value: { uk: 'російсько-українська школа, вероятнісні розрахунки', en: 'Eastern European school, probabilistic calculations' } },
            { label: { uk: 'Хмарні дошки', en: 'Cloud boards' }, value: { uk: 'задачі команди, спільна робота', en: 'team tasks, collaboration' } },
          ],
        },
      ],
    },
    {
      kind: 'quiz',
      id: 'q1',
      title: { uk: 'Розминка: автоматизація', en: 'Warm-up: automation' },
      questions: [
        {
          text: { uk: 'Головна перевага професійної системи календарного планування над таблицею:', en: 'The main advantage of a professional scheduling system over a spreadsheet:' },
          options: [
            { uk: 'Красиві діаграми', en: 'Pretty charts' },
            { uk: 'Автоматичний перерахунок залежностей і резервів при зміні дат', en: 'Automatic recalculation of dependencies and reserves when dates change' },
            { uk: 'Ціна ліцензії', en: 'The licence price' },
          ],
          correct: 1,
          why: {
            uk: 'Зсунули одну роботу — система перерахувала весь графік і показала новий критичний шлях. У таблиці це роблять руками, з помилками.',
            en: 'Shift one work — the system recalculates the whole schedule and shows the new critical path. In a spreadsheet this is done by hand, with mistakes.',
          },
        },
        {
          text: { uk: 'Чому «купити Primavera, як у сусідів» — не рішення?', en: 'Why is “buy Primavera like the neighbours” not a solution?' },
          options: [
            { uk: 'Primavera — поганий продукт', en: 'Primavera is a bad product' },
            { uk: 'Інструмент обирають під задачі і зрілість процесів, а не за прикладом сусіда', en: 'A tool is chosen for your tasks and process maturity, not by the neighbour’s example' },
            { uk: 'Бо сусіди мають інший бюджет', en: 'Because the neighbours have a different budget' },
          ],
          correct: 1,
          why: {
            uk: 'Enterprise-система без навчених людей і процесів перетворюється на «дорогий Excel». Крок 1 — описати проблеми, крок 2 — підібрати мінімальний інструмент, що їх закриває.',
            en: 'An enterprise system without trained people and processes becomes an “expensive spreadsheet”. Step 1 — describe the problems; step 2 — pick the minimal tool that closes them.',
          },
        },
        {
          text: { uk: 'З чого правильно починати впровадження інструменту?', en: 'What is the right way to start implementing a tool?' },
          options: [
            { uk: 'Зі скасування всіх таблиць одразу', en: 'By cancelling all spreadsheets at once' },
            { uk: 'З пілотного проєкту на одному проєкті й навчання 2–3 людей', en: 'With a pilot on one project and training 2–3 people' },
            { uk: 'З корпоративного навчання всього департаменту на місяць', en: 'With a month of corporate training for the whole department' },
          ],
          correct: 1,
          why: {
            uk: 'Пілот дає реальний досвід і «чемпіонів» — людей, які потім навчать інших без консультантів. Різка відмова від таблиць народжує тіньові файли.',
            en: 'A pilot gives real experience and “champions” — people who then teach others without consultants. A sudden spreadsheet ban breeds shadow files.',
          },
        },
      ],
    },
    {
      kind: 'match',
      id: 'm1',
      title: { uk: 'Завдання: задача → інструмент', en: 'Task: job → tool' },
      intro: {
        uk: 'Співвіднесіть управлінські задачі департаменту з відповідним інструментом.',
        en: 'Match the department’s management jobs to the right tool.',
      },
      pairs: [
        {
          left: { uk: 'Календарний графік ремонту з залежностями', en: 'A repair schedule with dependencies' },
          right: { uk: 'MS Project або Spider Project', en: 'MS Project or Spider Project' },
          why: { uk: 'Зв’язки, критичний шлях, резерви — базова зона Гант-інструментів.', en: 'Links, critical path, reserves — the home ground of Gantt tools.' },
        },
        {
          left: { uk: 'Портфель 40 міських проєктів і ресурси підприємств', en: 'A portfolio of 40 city projects and enterprise resources' },
          right: { uk: 'Oracle Primavera (клас enterprise)', en: 'Oracle Primavera (enterprise class)' },
          why: { uk: 'Багатопроєктне планування з спільними ресурсами — рівень Primavera.', en: 'Multi-project planning with shared resources — Primavera’s level.' },
        },
        {
          left: { uk: 'Щоденні задачі команди на тиждень', en: 'The team’s daily tasks for a week' },
          right: { uk: 'Хмарна дошка задач (Kanban)', en: 'A cloud task board (Kanban)' },
          why: { uk: 'Швидкі, спільні, без бюрократії — дошка перемагає таблицю.', en: 'Fast, shared, low-bureaucracy — a board beats a spreadsheet.' },
        },
        {
          left: { uk: 'Простий бюджет одного малому проєкту', en: 'A simple budget of one small project' },
          right: { uk: 'Таблиця з дисципліною версій', en: 'A spreadsheet with version discipline' },
          why: { uk: 'Не перевантажуйте просту задачу — таблиця валідна, якщо версії контрольовані.', en: 'Do not overload a simple job — a spreadsheet is valid if versions are controlled.' },
        },
      ],
    },
    {
      kind: 'sort',
      id: 's1',
      title: { uk: 'Завдання: що автоматизуємо?', en: 'Task: what do we automate?' },
      intro: {
        uk: 'Розкладіть болючі місця департаменту: ручний хаос (потрібна система), дисципліна (достатньо правила) чи делегування (потрібна людина, не софт).',
        en: 'Sort the department’s pains: manual chaos (needs a system), discipline (a rule suffices) or delegation (needs a person, not software).',
      },
      buckets: [
        { uk: 'Система', en: 'A system' },
        { uk: 'Правило/дисципліна', en: 'A rule/discipline' },
        { uk: 'Людина', en: 'A person' },
      ],
      items: [
        {
          text: { uk: '14 версій бюджету одного проєкту', en: '14 versions of one project budget' },
          bucket: 0,
          why: { uk: 'Проблема версій вирішується спільним середовищем з одним джерелом даних.', en: 'The version problem is solved by a shared environment with one data source.' },
        },
        {
          text: { uk: 'Графік із 200 залежних робіт', en: 'A schedule with 200 dependent works' },
          bucket: 0,
          why: { uk: 'Такий обсяг зв’язків руками не перерахувати — потрібен планувальник-система.', en: 'This many links cannot be recalculated by hand — you need a scheduling system.' },
        },
        {
          text: { uk: 'Звіт статусу «червоний/жовтий/зелений» щопонеділка', en: 'A red/yellow/green status report every Monday' },
          bucket: 1,
          why: { uk: 'Це правило ритуалу: календарний нагадувач + шаблон — софт не обов’язковий.', en: 'This is a ritual rule: a calendar reminder + a template — no special software needed.' },
        },
        {
          text: { uk: 'Курси української для мешканців: хто веде заняття', en: 'Ukrainian courses for residents: who teaches the classes' },
          bucket: 2,
          why: { uk: 'Це питання організації людей, а не ІТ.', en: 'This is about organising people, not IT.' },
        },
        {
          text: { uk: 'Пошук «хто останній змінював план»', en: 'Finding “who last changed the plan”' },
          bucket: 0,
          why: { uk: 'Журнал змін — базова функція систем, у таблицях її імітують неякісно.', en: 'A change log is a basic system feature; spreadsheets imitate it poorly.' },
        },
        {
          text: { uk: 'Погодження днів відпусток у команді', en: 'Approving vacation days in the team' },
          bucket: 1,
          why: { uk: 'Правило «запит у чаті + календар» дешевше за будь-який софт.', en: 'A “request in chat + calendar” rule is cheaper than any software.' },
        },
      ],
    },
    {
      kind: 'decision',
      id: 'd1',
      title: { uk: 'Рішення: роадмап інструментів', en: 'Decision: the tool roadmap' },
      intro: {
        uk: 'Бюджет на ІТ цього року — 120 тис. грн (ліцензія MS Project ~15 тис./рік на робоче місце; хмарна дошка — безкоштовна для команди до 10 осіб; Primavera — поза бюджетом). Що пропонуєте керівнику?',
        en: 'This year’s IT budget is UAH 120k (an MS Project licence ~15k/yr per seat; a cloud board free for teams up to 10; Primavera — beyond the budget). What do you propose?',
      },
      options: [
        {
          text: { uk: 'Просити додатковий бюджет на Primavera — «як у сусідів»', en: 'Request extra budget for Primavera — “like the neighbours”' },
          quality: 'poor',
          outcome: {
            uk: 'Запит відхилять: немає обґрунтування під задачі, а люди ще не навчились навіть Ганта. Крім того, ви втратите сезон — до зими інструменти так і не працюватимуть.',
            en: 'The request will be rejected: no task-based justification, and people have not even learned Gantt yet. You also lose the season — by winter nothing will be running.',
          },
        },
        {
          text: {
            uk: 'Пілот: MS Project для двох графіків (ремонт, укриття) + хмарна дошка задач + правило версій для таблиць',
            en: 'A pilot: MS Project for two schedules (repair, shelter) + a cloud task board + a version rule for spreadsheets',
          },
          quality: 'best',
          outcome: {
            uk: 'Графіки з залежностями йдуть у MS Project (30 тис. на рік), щоденні задачі — у безкоштовну дошку, малі бюджети лишаються в таблицях з правилом «одна актуальна версія в спільній папці». Впровадження на 1/4 бюджету, і вже наступного кварталу ви маєте кейси для розширення.',
            en: 'Dependency schedules go to MS Project (30k/yr), daily tasks to a free board, small budgets stay in spreadsheets with a “one current version in a shared folder” rule. Implemented at 1/4 of the budget, and next quarter you have use cases for expansion.',
          },
        },
        {
          text: { uk: 'Нічого не змінювати — таблиці «і так працюють»', en: 'Change nothing — the spreadsheets “work fine”' },
          quality: 'poor',
          outcome: {
            uk: 'Через квартал — чергова розбіжність бюджетів, цього разу в звіті для донора. Помилка в зовнішньому звіті коштує дорожче за 30 тис. грн на інструменти.',
            en: 'Within a quarter — another budget conflict, this time in a donor report. An error in an external report costs more than 30k for tools.',
          },
        },
      ],
    },
  ],
  debrief: {
    heading: { uk: 'Інструмент підібрано під задачі', en: 'The tool fits the tasks' },
    recap: [
      { uk: 'Інструмент обирають за задачами і зрілістю процесів, а не за рекламою або «як у сусідів».', en: 'A tool is chosen by tasks and process maturity, not by advertising or “like the neighbours”.' },
      { uk: 'Графіки із залежностями — Гант-системи; портфель підприємства — enterprise (Primavera); задачі команди — хмарні дошки.', en: 'Schedules with dependencies — Gantt systems; enterprise portfolio — Primavera; team tasks — cloud boards.' },
      { uk: 'Частина болю — не про софт: правила і людська організація дешевші.', en: 'Some pain is not about software: rules and human organisation are cheaper.' },
      { uk: 'Впровадження — пілотом: один проєкт, 2–3 чемпіони, потім масштабування.', en: 'Implementation starts as a pilot: one project, 2–3 champions, then scale.' },
    ],
  },
}
