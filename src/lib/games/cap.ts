// ============================================================
// КЕЙС cap · «Заявка на відбудову» — капстоун курсу
// Індивідуальне завдання: конструктор паспорта проєкту
// ============================================================

import type { ScenarioDef } from '../scenario'

export const CAP: ScenarioDef = {
  id: 'cap',
  badgeId: 'passport',
  badgeThreshold: 75,
  effect: { wellbeing: 2, trust: 2, resilience: 2, budget: 2 },
  introKicker: { uk: 'Капстоун · Індивідуальне завдання · каркас «Заявки на відбудову»', en: 'Capstone · Individual assignment · the skeleton of the “Recovery Application”' },
  title: { uk: '«Заявка на відбудову»', en: '“Recovery Application”' },
  summary: {
    uk: 'Зберіть паспорт власного проєкту відновлення з навичок усіх попередніх кейсів.',
    en: 'Assemble the passport of your own recovery project from the skills of all previous cases.',
  },
  durationMin: 30,
  stages: [
    {
      kind: 'brief',
      id: 'b1',
      title: { uk: 'Ваш перший самостійний проєкт', en: 'Your first independent project' },
      blocks: [
        {
          t: 'p',
          text: {
            uk: 'Дванадцять кейсів позаду: ви вмієте відрізняти проєкт від рутини, вести його крізь фази, зважувати цінність, рахувати NPV, планувати, збирати WBS, знаходити критичний шлях, говорити з громадою, збирати досьє і керувати ризиками. Час застосувати все одразу: перед вами заявка на фінансування вашого проєкту відбудови.',
            en: 'Twelve cases behind you: you can tell a project from routine, take it through phases, weigh value, compute NPV, plan, build a WBS, find the critical path, talk to the community, assemble a dossier and manage risks. Time to use it all at once: before you is an application for funding your own recovery project.',
          },
        },
        {
          t: 'pc',
          tone: 'green',
          icon: '📕',
          label: { uk: 'Як працює капстоун', en: 'How the capstone works' },
          text: {
            uk: 'Сім кроків — сім розділів паспорта проєкту. У кожному обирайте формулювання: найсильніше варіант дає 15 XP, прийнятний — 8, слабкий — 0. У фіналі ви отримаєте зібраний паспорт — каркас індивідуального завдання курсу. Ця версія — тренувальна: для справжньої заявки заміните заготовки своїми даними.',
            en: 'Seven steps — seven sections of the project passport. In each, pick a wording: the strongest earns 15 XP, acceptable 8, weak 0. At the end you get the assembled passport — the skeleton of the course’s individual assignment. This version is a rehearsal: for the real application you will replace the templates with your own data.',
          },
        },
      ],
    },
    {
      kind: 'decision',
      id: 'idea',
      title: { uk: 'Крок 1 · Ідея проєкту', en: 'Step 1 · The project idea' },
      intro: {
        uk: 'Заявка починається з однієї речення, що називає проблему і рішення. Що кладете на першу сторінку?',
        en: 'An application starts with one sentence naming the problem and the solution. What goes on the first page?',
      },
      options: [
        {
          text: {
            uk: '«Відновлення укриття школи № 3 для безперервного навчання 300 учнів під час тривог»',
            en: '“Restoring the shelter of School No. 3 for uninterrupted schooling of 300 pupils during alerts”',
          },
          quality: 'best',
          outcome: {
            uk: 'Проблема (тривоги переривають навчання), об’єкт (укриття школи № 3) і масштаб (300 учнів) — в одному реченні. Комісія зрозуміла ідею за 6 секунд.',
            en: 'Problem (alerts interrupt schooling), object (the School No. 3 shelter) and scale (300 pupils) — in one sentence. The panel understood the idea in 6 seconds.',
          },
        },
        {
          text: { uk: '«Модернізація освітньої інфраструктури»', en: '“Modernisation of educational infrastructure”' },
          quality: 'ok',
          outcome: {
            uk: 'Напрям зрозумілий, але не видно ні об’єкта, ні масштабу, ні проблеми: такі назви комісії читають десятками.',
            en: 'The direction is clear, but no object, scale or problem is visible: panels read dozens of such titles.',
          },
        },
        {
          text: { uk: '«Ремонт школи та все, що потрібно»', en: '“School repairs and whatever is needed”' },
          quality: 'poor',
          outcome: {
            uk: '«Все, що потрібно» — це не обсяг, а запрошення до безкінечності: така заявка повертається на доопрацювання ще до розгляду.',
            en: '“Whatever is needed” is not a scope — it is an invitation to infinity: such an application is returned before review.',
          },
        },
      ],
    },
    {
      kind: 'decision',
      id: 'goal',
      title: { uk: 'Крок 2 · Мета', en: 'Step 2 · The goal' },
      intro: { uk: 'Головна ціль проєкту — перевірне формулювання. Яке обираєте?', en: 'The project’s main goal — a verifiable wording. Which do you choose?' },
      options: [
        {
          text: {
            uk: '«До 1 вересня забезпечити укриття на 300 місць, щоб заняття не переривалися через тривоги»',
            en: '“By 1 September provide a 300-seat shelter so classes are not interrupted by alerts”',
          },
          quality: 'best',
          outcome: {
            uk: 'Що (300 місць), для кого (учні), до коли (1 вересня), заради чого (безперервність навчання) — усі елементи перевірної мети на місці.',
            en: 'What (300 seats), for whom (pupils), by when (1 September), for the sake of what (uninterrupted schooling) — all elements of a verifiable goal.',
          },
        },
        {
          text: { uk: '«Зробити перебування в школі безпечним і комфортним»', en: '“Make time at school safe and comfortable”' },
          quality: 'ok',
          outcome: {
            uk: 'Важлива ціль — але як перевірити «безпечно»? Комісія попросить критерії приймання.',
            en: 'An important goal — but how do you verify “safe”? The panel will ask for acceptance criteria.',
          },
        },
        {
          text: { uk: '«Освоїти виділене фінансування до кінця року»', en: '“Spend the allocated funding by year end”' },
          quality: 'poor',
          outcome: {
            uk: 'Класична пастка: мета «освоїти» створює витрати, а не результат. Донори такі заявки відхиляють одразу.',
            en: 'A classic trap: a “spend it” goal creates costs, not results. Donors reject such applications immediately.',
          },
        },
      ],
    },
    {
      kind: 'decision',
      id: 'result',
      title: { uk: 'Крок 3 · Результат', en: 'Step 3 · The result' },
      intro: { uk: 'Що буде «продуктом» проєкту — те, що можна пред’явити комісії?', en: 'What will be the project’s “product” — what can be shown to a commission?' },
      options: [
        {
          text: {
            uk: '«Працююче укриття на 300 місць, прийняте комісією, з журналом чергувань і графіком тренувань»',
            en: '“A working 300-seat shelter accepted by the commission, with a duty log and drill schedule”',
          },
          quality: 'best',
          outcome: {
            uk: 'Результат конкретний і вимірюваний: об’єкт + документи + режим використання. Перевірити можна в один візит.',
            en: 'The result is concrete and measurable: facility + documents + usage regime. Verifiable in one visit.',
          },
        },
        {
          text: { uk: '«Нове модульне приміщення»', en: '“A new modular facility”' },
          quality: 'ok',
          outcome: {
            uk: 'Фізичний об’єкт названо, але не сказано, чи він готовий до користування за призначенням.',
            en: 'The physical object is named, but nothing says it is ready for intended use.',
          },
        },
        {
          text: { uk: '«Відчуття безпеки в учнів»', en: '“A sense of safety among pupils”' },
          quality: 'poor',
          outcome: {
            uk: 'Почуття — важливий ефект, але не пред’явний результат: заявок з «відчуттями» замість об’єктів комісії не фінансують.',
            en: 'A feeling is an important effect but not a demonstrable result: panels do not fund applications with “feelings” instead of facilities.',
          },
        },
      ],
    },
    {
      kind: 'decision',
      id: 'actors',
      title: { uk: 'Крок 4 · Учасники та ролі', en: 'Step 4 · Participants and roles' },
      intro: { uk: 'Хто є хто у вашому проєкті?', en: 'Who is who in your project?' },
      options: [
        {
          text: {
            uk: 'Замовник — відділ освіти; виконавець — ТОВ «Соснівкабуд»; користувачі — учні і батьки; куратор — заступниця міського голови',
            en: 'Customer — the education department; contractor — Sosnivkabud LLC; users — pupils and parents; curator — the deputy mayor',
          },
          quality: 'best',
          outcome: {
            uk: 'Усі чотири ролі розведені і мають імена: комісія бачить, хто фінансує, хто робить, хто користує і хто знімає перешкоди.',
            en: 'All four roles are separated and named: the panel sees who funds, who builds, who uses and who removes obstacles.',
          },
        },
        {
          text: { uk: '«Міська рада» — і все', en: '“The city council” — and that is it' },
          quality: 'ok',
          outcome: {
            uk: 'Замовник названий, але виконавця і користувачів комісія має вгадувати: у разі проблем не зрозуміло, до кого йти.',
            en: 'The customer is named, but the panel must guess the contractor and users: if problems arise, it is unclear whom to approach.',
          },
        },
        {
          text: { uk: '«Виконавець — ще оберемо»', en: '“The contractor — we will choose one”' },
          quality: 'poor',
          outcome: {
            uk: 'Роль виконавця обов’язкова в заявці: без розуміння, хто і як буде робити, обсяг і строк не піддаються перевірці.',
            en: 'The contractor role is mandatory in an application: without knowing who and how, scope and deadline cannot be verified.',
          },
        },
      ],
    },
    {
      kind: 'decision',
      id: 'plan',
      title: { uk: 'Крок 5 · План: ключові пакети', en: 'Step 5 · The plan: key packages' },
      intro: { uk: 'Яка розбивка робіт виглядає як повна WBS верхнього рівня?', en: 'Which breakdown looks like a complete top-level WBS?' },
      options: [
        {
          text: {
            uk: 'Підготовка (дозволи, ділянка) → Монтаж (фундамент, модулі, дах) → Інженерія (електрика, вентиляція) → Приймання і запуск',
            en: 'Preparation (permits, site) → Assembly (foundation, modules, roof) → Engineering (power, ventilation) → Acceptance and launch',
          },
          quality: 'best',
          outcome: {
            uk: 'Чотири гілки покривають 100 % робіт — включно з «прокляттям» громадських проєктів, інженерією. Саме такий каркас не потребує «додаткових угод».',
            en: 'Four branches cover 100% of works — including the “curse” of public projects, engineering. Such a skeleton needs no “supplementary agreements”.',
          },
        },
        {
          text: { uk: 'Закупівля → будівництво → звіт', en: 'Procurement → construction → report' },
          quality: 'ok',
          outcome: {
            uk: 'Три розділи — замало: інженерія і приймання «згадаються» у виконанні й з’їдять резерв.',
            en: 'Three sections are too few: engineering and acceptance will be “remembered” in execution and eat the reserve.',
          },
        },
        {
          text: { uk: 'Зробимо як вийде, детальний план — потім', en: 'We will manage as it goes, a detailed plan later' },
          quality: 'poor',
          outcome: {
            uk: 'Заявка без плану робіт не піддається оцінці обсягу і строку: комісія оцінює ризик «неподільним» і відхиляє.',
            en: 'An application without a work plan cannot be scoped or timed: the panel prices the risk as indivisible and rejects it.',
          },
        },
      ],
    },
    {
      kind: 'decision',
      id: 'budget',
      title: { uk: 'Крок 6 · Бюджет і джерела', en: 'Step 6 · Budget and sources' },
      intro: { uk: 'Який бюджетний блок пройде фінансову експертизу?', en: 'Which budget block passes financial review?' },
      options: [
        {
          text: {
            uk: '4.5 млн: матеріали 2.7, роботи 1.2, інженерія 0.4, резерв 6 % (0.27); джерела: грант 3.0 + бюджет розвитку 1.5',
            en: '4.5m: materials 2.7, works 1.2, engineering 0.4, reserve 6% (0.27); sources: grant 3.0 + development budget 1.5',
          },
          quality: 'best',
          outcome: {
            uk: 'Розбивка по статтях + резерв + зведені джерела з підтвердженням бюджету розвитку: фінансова експертиза проходить без запитів.',
            en: 'Itemised breakdown + a reserve + confirmed sources with the development budget attached: financial review passes with no queries.',
          },
        },
        {
          text: { uk: '«Приблизно 4–5 млн, уточнимо після тендеру»', en: '“About 4–5m, to be clarified after the tender”' },
          quality: 'poor',
          outcome: {
            uk: 'Вилка без кошторису = заявка без підстави: фінансова експертиза не має що перевіряти.',
            en: 'A range without an estimate = an application without grounds: financial review has nothing to check.',
          },
        },
        {
          text: { uk: '4.5 млн: «роботи під ключ» однією сумою', en: '4.5m: “turnkey works” as one line' },
          quality: 'ok',
          outcome: {
            uk: 'Одна сумка без статей приховує і резерв, і інженерію: питання будуть, але їх можна закрити детальним кошторисом.',
            en: 'One line hides both the reserve and engineering: questions will follow, but a detailed estimate can close them.',
          },
        },
      ],
    },
    {
      kind: 'decision',
      id: 'risk',
      title: { uk: 'Крок 7 · Головний ризик і реагування', en: 'Step 7 · The main risk and response' },
      intro: { uk: 'Останній розділ паспорта: ризик № 1 вашого проєкту і ваша стратегія.', en: 'The passport’s last section: your project’s risk No. 1 and your strategy.' },
      options: [
        {
          text: {
            uk: 'Ризик: затримка постачання модулів (4/3). Реагування: уникнення — локальний постачальник у короткому списку + банківська гарантія авансу',
            en: 'Risk: module delivery delay (4/3). Response: avoidance — a local supplier on the short list + a bank guarantee for the advance',
          },
          quality: 'best',
          outcome: {
            uk: 'Ризик названий з оцінкою, стратегія відповідає профілю, є інструмент (гарантія) і власник. Комісії видно, що реєстр ризиків — робочий.',
            en: 'The risk is scored, the strategy fits the profile, there is a tool (a guarantee) and an owner. The panel sees a working risk register.',
          },
        },
        {
          text: { uk: 'Ризиків не передбачається — «під контролем»', en: 'No risks expected — “under control”' },
          quality: 'poor',
          outcome: {
            uk: 'Заявки без розділу ризиків комісії читають як «ми не думали». Це автоматичне зниження балу.',
            en: 'Panels read applications without a risk section as “we did not think”. An automatic score cut.',
          },
        },
        {
          text: {
            uk: 'Ризик: погода. Реагування: моніторинг прогнозу',
            en: 'Risk: weather. Response: forecast monitoring',
          },
          quality: 'ok',
          outcome: {
            uk: 'Розділ є, але «погода» — не головний ризик будівництва, а моніторинг — не стратегія. Комісія попросить переробити на операційні ризики.',
            en: 'The section exists, but “weather” is not the main construction risk and monitoring is not a strategy. The panel will ask for operational risks.',
          },
        },
      ],
    },
  ],
  debrief: {
    heading: { uk: 'Паспорт проєкту зібраний', en: 'The project passport is assembled' },
    recap: [
      { uk: 'Структура заявки стала: ідея → мета → результат → учасники → WBS → бюджет і джерела → ризики.', en: 'The application structure is now stable: idea → goal → result → participants → WBS → budget and sources → risks.' },
      { uk: 'Кожен розділ має тест: мета перевірна, результат пред’явний, план покриває 100 %, бюджет розбито, ризик має власника.', en: 'Every section has a test: a verifiable goal, a demonstrable result, a 100% plan, an itemised budget, a risk with an owner.' },
      { uk: 'Цей паспорт — каркас індивідуального завдання: замініть заготовки власними даними громади.', en: 'This passport is the skeleton of the individual assignment: replace the templates with your community’s own data.' },
    ],
  },
  passport: [
    { stageId: 'idea', label: { uk: 'Ідея', en: 'Idea' } },
    { stageId: 'goal', label: { uk: 'Мета', en: 'Goal' } },
    { stageId: 'result', label: { uk: 'Результат', en: 'Result' } },
    { stageId: 'actors', label: { uk: 'Учасники', en: 'Participants' } },
    { stageId: 'plan', label: { uk: 'WBS', en: 'WBS' } },
    { stageId: 'budget', label: { uk: 'Бюджет', en: 'Budget' } },
    { stageId: 'risk', label: { uk: 'Ризик №1 і реагування', en: 'Risk #1 and response' } },
  ],
}
