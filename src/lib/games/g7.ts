// ============================================================
// КЕЙС g7 · «Збери WBS» — ієрархічна структура робіт
// Семінар 7 · Тема 7 · 1 бал на семінарі
// ============================================================

import type { ScenarioDef } from '../scenario'

export const G7: ScenarioDef = {
  id: 'g7',
  badgeId: 'wbs',
  effect: { budget: 2, resilience: 2 },
  introKicker: { uk: 'Семінар 7 · Тема 7 · 1 бал на семінарі', en: 'Seminar 7 · Topic 7 · 1 seminar point' },
  title: { uk: '«Збери WBS»', en: '“Assemble the WBS”' },
  summary: {
    uk: 'Декомпозиція проєкту з правилом 100 % і матрицею відповідальності RACI.',
    en: 'Project decomposition with the 100% rule and a RACI responsibility matrix.',
  },
  durationMin: 20,
  stages: [
    {
      kind: 'brief',
      id: 'b1',
      title: { uk: 'Кейс: кошторис, що росте', en: 'Case: the estimate that grows' },
      blocks: [
        {
          t: 'p',
          text: {
            uk: 'Проєкт «Модульне укриття школи № 3» посеред виконання. Підрядник додає до рахунків «підготовчі роботи», електрики «забули» в тендері, а батьки питають, хто відповідає за вентиляцію. Кошторис виросла на 18 %, і ніхто не може сказати, повний він чи ні.',
            en: 'The “Modular shelter at School No. 3” project is mid-execution. The contractor adds “preparatory works” to invoices, electrics were “forgotten” in the tender, and parents ask who is responsible for ventilation. The estimate grew by 18%, and nobody can say whether it is complete.',
          },
        },
        {
          t: 'pc',
          tone: 'orange',
          icon: '⚠',
          label: { uk: 'Основна проблема', en: 'The core problem' },
          text: {
            uk: 'Роботи «згадуються» по ходу проєкту: без повної декомпозиції неможливо ані оцінити бюджет раз і назавжди, ані призначити відповідальних. Кожна «забута» робота в тендері потім коштує вдвічі дорожче.',
            en: 'Works get “remembered” along the way: without full decomposition you can neither set the budget once nor assign owners. Every work “forgotten” in the tender later costs twice as much.',
          },
        },
        {
          t: 'pc',
          tone: 'amber',
          icon: '⚡',
          label: { uk: 'Суперечність, що створює проблему', en: 'The contradiction behind the problem' },
          text: {
            uk: 'Повнота проти керованості: правило 100 % вимагає охопити ВСЕ, але занадто дрібний поділ породжує тисячі рядків, які ніхто не контролює. Декомпозувати «якомога глибше» так само шкідливо, як не декомпозувати взагалі.',
            en: 'Completeness versus manageability: the 100% rule demands covering EVERYTHING, but too fine a split breeds thousands of lines nobody controls. Decomposing “as deep as possible” harms as much as not decomposing at all.',
          },
        },
        {
          t: 'pc',
          tone: 'green',
          icon: '✅',
          label: { uk: 'Як знімається суперечність', en: 'How the contradiction is resolved' },
          text: {
            uk: 'Стоп-правилом декомпозиції: нижче йти, поки пакет робіт не стане зрозумілим одній відповідальній особі з оцінною вартістю (усталено ~80 робочих годин). Верхній рівень — фази/продукти, нижній — пакети. Правило 100 %: сума дітей = 100 % батька, жодних «додаткових робіт поза структурою». Відповідальність розподіляє матриця RACI.',
            en: 'By a decomposition stop rule: keep going until a work package is clear to one accountable person and estimable (typically ~80 working hours). Upper level — phases/products, lower — packages. The 100% rule: children sum to 100% of the parent, no “extra works outside the structure”. Responsibility is distributed by the RACI matrix.',
          },
        },
        {
          t: 'facts',
          items: [
            { label: { uk: 'Правило 100 %', en: '100% rule' }, value: { uk: 'діти покривають батька повністю', en: 'children fully cover the parent' } },
            { label: { uk: 'Стоп-правило', en: 'Stop rule' }, value: { uk: 'пакет ≈ 80 год, 1 відповідальний', en: 'package ≈ 80 hrs, 1 owner' } },
            { label: { uk: 'RACI', en: 'RACI' }, value: { uk: 'Виконує/Відповідає/Консультує/Інформується', en: 'Responsible/Accountable/Consulted/Informed' } },
          ],
        },
      ],
    },
    {
      kind: 'quiz',
      id: 'q1',
      title: { uk: 'Розминка: WBS', en: 'Warm-up: WBS' },
      questions: [
        {
          text: { uk: 'Що тверджує правило 100 %?', en: 'What does the 100% rule state?' },
          options: [
            { uk: 'Сума обсягів дочірніх елементів повністю покриває батьківський без дублювань і лишку', en: 'The sum of child elements fully covers the parent with no duplicates and no leftovers' },
            { uk: '100 % робіт робить підрядник', en: 'The contractor does 100% of the works' },
            { uk: 'Бюджет має бути використаний на 100 %', en: 'The budget must be used at 100%' },
          ],
          correct: 0,
          why: {
            uk: 'Правило 100 % — про повноту структури: будь-яка робота проєкту має місце у WBS; «позаструктурних» робіт не існує.',
            en: 'The 100% rule is about completeness: every project work has a place in the WBS; there are no “outside-the-structure” works.',
          },
        },
        {
          text: { uk: 'Коли зупиняти декомпозицію?', en: 'When should decomposition stop?' },
          options: [
            { uk: 'Коли дійшли до 10 рівнів', en: 'When you reach 10 levels' },
            { uk: 'Коли пакет робіт зрозумілий одній відповідальній особі й піддається оцінці', en: 'When a work package is clear to one accountable person and estimable' },
            { uk: 'Коли закінчилися ідеї', en: 'When you run out of ideas' },
          ],
          correct: 1,
          why: {
            uk: 'Ціль декомпозиції — керованість, а не глибина заради глибини. Пакет, який неможливо оцінити, — ще не пакет.',
            en: 'The goal of decomposition is manageability, not depth for depth’s sake. A package that cannot be estimated is not yet a package.',
          },
        },
        {
          text: { uk: 'У RACI хто може бути «Відповідає» (Accountable) для пакета?', en: 'In RACI, who can be “Accountable” for a package?' },
          options: [
            { uk: 'Стільки осіб, скільки потрібно', en: 'As many people as needed' },
            { uk: 'Рівно одна особа', en: 'Exactly one person' },
            { uk: 'Ніхто — це колективна відповідальність', en: 'Nobody — it is collective accountability' },
          ],
          correct: 1,
          why: {
            uk: 'Accountable завжди один: «спільна відповідальність» = нічиї відповідальності. Виконавців (Responsible) може бути багато.',
            en: 'There is always one Accountable: “shared accountability” = nobody’s accountability. There can be many Responsible performers.',
          },
        },
      ],
    },
    {
      kind: 'sort',
      id: 's1',
      title: { uk: 'Завдання: розкладіть роботи по гілках WBS', en: 'Task: place the works in WBS branches' },
      intro: {
        uk: 'Дев’ять пакетів робіт укриття. Яка гілка структури їх охоплює?',
        en: 'Nine work packages of the shelter. Which structure branch covers them?',
      },
      buckets: [
        { uk: '1. Підготовка', en: '1. Preparation' },
        { uk: '2. Монтаж', en: '2. Assembly' },
        { uk: '3. Інженерія', en: '3. Engineering' },
      ],
      bucketHint: [
        { uk: 'документи і ділянка', en: 'documents and site' },
        { uk: 'фізичні конструкції', en: 'physical structures' },
        { uk: 'мережі і системи', en: 'networks and systems' },
      ],
      items: [
        {
          text: { uk: 'Геодезична прив’язка ділянки', en: 'Geodetic site survey' },
          bucket: 0,
          why: { uk: 'Підготовчі роботи на ділянці — гілка «Підготовка».', en: 'Site preparatory work — the “Preparation” branch.' },
        },
        {
          text: { uk: 'Погодження проєкту з ДАБІ', en: 'Approval of the design with the construction register authority' },
          bucket: 0,
          why: { uk: 'Дозвільні документи — «Підготовка».', en: 'Permit documents — “Preparation”.' },
        },
        {
          text: { uk: 'Підключення укриття до електромережі', en: 'Connecting the shelter to the power grid' },
          bucket: 2,
          why: { uk: 'Мережі — «Інженерія».', en: 'Networks — “Engineering”.' },
        },
        {
          text: { uk: 'Монтаж фундаментних блоків', en: 'Installation of foundation blocks' },
          bucket: 1,
          why: { uk: 'Конструктив — «Монтаж».', en: 'Structures — “Assembly”.' },
        },
        {
          text: { uk: 'Монтаж модульних секцій і даху', en: 'Assembly of modular sections and roof' },
          bucket: 1,
          why: { uk: 'Основні конструкції — «Монтаж».', en: 'Main structures — “Assembly”.' },
        },
        {
          text: { uk: 'Монтаж вентиляційних установок', en: 'Installation of ventilation units' },
          bucket: 2,
          why: { uk: 'Інженерні системи — «Інженерія». Саме їх «забули» в тендері.', en: 'Engineering systems — “Engineering”. Exactly what the tender “forgot”.' },
        },
        {
          text: { uk: 'Тимчасове огородження будівельного майданчика', en: 'Temporary fencing of the construction site' },
          bucket: 0,
          why: { uk: 'Підготовка майданчика — «Підготовка». Часто «приховані» роботи, які ламають правило 100 %.', en: 'Site preparation — “Preparation”. A typical “hidden” work that breaks the 100% rule.' },
        },
        {
          text: { uk: 'Монтаж санітарного блоку', en: 'Installation of the sanitation unit' },
          bucket: 1,
          why: { uk: 'Обладнання всередині конструкції — «Монтаж» (сантехнічні мережі — «Інженерія»).', en: 'Equipment within the structure — “Assembly” (plumbing networks — “Engineering”).' },
        },
        {
          text: { uk: 'Пусконалагодження систем пожежної сигналізації', en: 'Commissioning of the fire alarm systems' },
          bucket: 2,
          why: { uk: 'Системи безпеки — «Інженерія».', en: 'Safety systems — “Engineering”.' },
        },
      ],
    },
    {
      kind: 'match',
      id: 'm1',
      title: { uk: 'Завдання: матриця RACI', en: 'Task: the RACI matrix' },
      intro: {
        uk: 'Хто є хто в проєкті укриття? Співвіднесіть роль у RACI з описом.',
        en: 'Who is who in the shelter project? Match the RACI role with the description.',
      },
      pairs: [
        {
          left: { uk: 'R — Виконує', en: 'R — Responsible' },
          right: { uk: 'Той, хто безпосередньо робить роботу (підрядник «Соснівкабуд»)', en: 'The one who directly does the work (the Sosnivkabud contractor)' },
        },
        {
          left: { uk: 'A — Відповідає', en: 'A — Accountable' },
          right: { uk: 'Єдина особа, що відповідає результатом перед радою (керівник проєкту)', en: 'The single person answerable for the result to the council (the project manager)' },
        },
        {
          left: { uk: 'C — Консультує', en: 'C — Consulted' },
          right: { uk: 'З ким радяться до рішення (директорка школи з приводу розкладу укриттів)', en: 'Whose advice is sought before decisions (the school principal on shelter timetables)' },
        },
        {
          left: { uk: 'I — Інформується', en: 'I — Informed' },
          right: { uk: 'Кому повідомляють про рішення (батьківський комітет)', en: 'Who is informed of decisions (the parents’ committee)' },
        },
      ],
    },
    {
      kind: 'decision',
      id: 'd1',
      title: { uk: 'Рішення: «забуті» електрики', en: 'Decision: the “forgotten” electrics' },
      intro: {
        uk: 'Виявилося: в тендері немає гілки «Інженерія» — електромонтаж і вентиляція не оцінені. Підрядник пропонує «додаткову угоду на +0.6 млн». Ваші дії?',
        en: 'It turns out the tender has no “Engineering” branch — electrics and ventilation were not priced. The contractor offers “a supplementary agreement for +0.6m”. Your move?',
      },
      options: [
        {
          text: { uk: 'Підписати додаткову угоду — деваться нікуди', en: 'Sign the supplementary agreement — there is no way around it' },
          quality: 'poor',
          outcome: {
            uk: 'Угода підписана, але наступного місяця «згадуються» ще й водовідведення: правило 100 % так і не працює, кошторис росте далі. Ви оплатили симптом, а не вилікували структуру.',
            en: 'The agreement is signed, but next month drainage is “remembered” too: the 100% rule still does not work and the estimate keeps growing. You paid for the symptom, not fixed the structure.',
          },
        },
        {
          text: {
            uk: 'Дозбирати WBS до пакетів із вартістю, узгодити додатковий обсяг разом з усією «Інженерією»',
            en: 'Complete the WBS to priced packages and settle the additional scope for the whole “Engineering” branch at once',
          },
          quality: 'best',
          outcome: {
            uk: 'Комісія дозбирає гілку: електрика, вентиляція, пожежна система, водовідведення — усе потрапляє в одну угоду. Разова надбавка 0.8 млн закриває ВСІ проріхи; далі кошторис стабільний. Правило 100 % відновлене.',
            en: 'The commission completes the branch: electrics, ventilation, fire system, drainage — all in one agreement. A one-off +0.8m closes EVERY gap; the estimate is stable afterwards. The 100% rule is restored.',
          },
        },
        {
          text: { uk: 'Видалити вентиляцію з проєкту — «і так дорогий»', en: 'Remove ventilation from the project — “it is expensive anyway”' },
          quality: 'poor',
          outcome: {
            uk: 'Укриття не прийме комісія без вентиляції — об’єкт неможливо ввести в експлуатацію. Економія 0.2 млн блокує результат 4.5 млн проєкту.',
            en: 'The commission will not accept a shelter without ventilation — the facility cannot be commissioned. A 0.2m saving blocks the 4.5m project result.',
          },
        },
      ],
    },
  ],
  debrief: {
    heading: { uk: 'WBS зібрана: 100 % робіт мають адресу', en: 'WBS assembled: 100% of works have an address' },
    recap: [
      { uk: 'WBS — повна карта робіт: правило 100 % не залишає місця «додатковим угодам».', en: 'The WBS is the full map of works: the 100% rule leaves no room for “supplementary agreements”.' },
      { uk: 'Стоп-правило: пакет = зрозумілий одній людині й оцінний (~80 год).', en: 'Stop rule: a package is clear to one person and estimable (~80 hrs).' },
      { uk: 'RACI: одна A на пакет, багато R — чіткість замість «спільної відповідальності».', en: 'RACI: one A per package, many Rs — clarity instead of “shared accountability”.' },
      { uk: 'Роботи поза структурою в тендері — найдорожчі роботи проєкту.', en: 'Works outside the structure at tender time are the most expensive works of the project.' },
    ],
  },
}
