// ============================================================
// КЕЙС g2 · «Відновлення школи» — життєвий цикл проєкту
// Семінар 2 · Тема 2 · 1 бал на семінарі
// ============================================================

import type { ScenarioDef } from '../scenario'

export const G2: ScenarioDef = {
  id: 'g2',
  badgeId: 'cycle',
  effect: { wellbeing: 3, trust: 2 },
  perfectEffect: { budget: 1 },
  introKicker: { uk: 'Семінар 2 · Тема 2 · 1 бал на семінарі', en: 'Seminar 2 · Topic 2 · 1 seminar point' },
  title: { uk: '«Відновлення школи»', en: '“School Recovery”' },
  summary: {
    uk: 'Проведіть відновлення школи № 3 крізь три фази життєвого циклу — і не перескочіть жодної.',
    en: 'Take School No. 3 through the three life-cycle phases — without skipping any of them.',
  },
  durationMin: 20,
  stages: [
    {
      kind: 'brief',
      id: 'b1',
      title: { uk: 'Кейс: 300 учнів без укриття і без школи', en: 'Case: 300 pupils with no shelter and no school' },
      blocks: [
        {
          t: 'p',
          text: {
            uk: 'Школа № 3 пошкоджена. Депутати тиснуть: «діти сидять вдома, починайте будівництво завтра!». Пані Ольга, керівниця сектора проєктів (це ви), знає: хтось уже «починав завтра» — і отримав недобудований скелет без проєкту та дозволів.',
            en: 'School No. 3 is damaged. Councillors push: “the children sit at home, start building tomorrow!”. Ms Olha, head of the project unit (that is you), knows: someone already “started tomorrow” — and got an unfinished skeleton with no design and no permits.',
          },
        },
        {
          t: 'pc',
          tone: 'orange',
          icon: '⚠',
          label: { uk: 'Основна проблема', en: 'The core problem' },
          text: {
            uk: 'Команди відбудови «кидаються» у роботи без розуміння фаз: закупівлі стартують до проєктування, громада дізнається про все постфактум, експлуатацію ніхто не планував — і об’єкт через рік стоїть без господаря.',
            en: 'Recovery teams dive into work without understanding the phases: procurement starts before design, the community learns everything after the fact, operation was never planned — and a year later the facility stands ownerless.',
          },
        },
        {
          t: 'pc',
          tone: 'amber',
          icon: '⚡',
          label: { uk: 'Суперечність, що створює проблему', en: 'The contradiction behind the problem' },
          text: {
            uk: 'Швидкість проти послідовності: кожну фазу можна стиснути у часі, але не можна перескочити — будівництво без проєкту народжує переробки, а приймання без плану експлуатації — «сироту». Тиск «треба швидше» існує саме тому, що фази здаються бюрократією.',
            en: 'Speed versus sequence: every phase can be compressed in time but none can be skipped — building without a design breeds rework, and acceptance without an operation plan breeds an “orphan”. The “faster!” pressure exists precisely because the phases look like bureaucracy.',
          },
        },
        {
          t: 'pc',
          tone: 'green',
          icon: '✅',
          label: { uk: 'Як знімається суперечність', en: 'How the contradiction is resolved' },
          text: {
            uk: 'Фазною моделлю з «воротами»: передінвестиційна → інвестиційна → експлуатаційна. Між фазами — контрольна точка: чи готові документи, чи затверджений кошторис, чи є кому приймати. Фази стискають паралельними роботами, а не викиданням етапів.',
            en: 'By a phase model with “gates”: pre-investment → investment → operation. Between phases there is a checkpoint: are the documents ready, is the estimate approved, is there someone to accept the facility. Phases are compressed with parallel work, not by throwing stages away.',
          },
        },
        {
          t: 'list',
          title: { uk: 'Три фази життєвого циклу (теорія теми)', en: 'The three life-cycle phases (topic theory)' },
          items: [
            {
              uk: 'Передінвестиційна: ідея, обстеження, ТЕО, кошторис, джерела фінансування, дозволи.',
              en: 'Pre-investment: the idea, a survey, the feasibility study, the estimate, funding sources, permits.',
            },
            {
              uk: 'Інвестиційна: проєктування, закупівля, будівництво/впровадження, контроль строку-бюджету-якості.',
              en: 'Investment: design, procurement, construction/implementation, control of time-cost-quality.',
            },
            {
              uk: 'Експлуатаційна: приймання, обслуговування, моніторинг ефекту — тут проєкт «оплачується» насправді.',
              en: 'Operation: acceptance, maintenance, effect monitoring — this is where the project truly “pays off”.',
            },
          ],
        },
      ],
    },
    {
      kind: 'quiz',
      id: 'q1',
      title: { uk: 'Розминка: фази та ворота', en: 'Warm-up: phases and gates' },
      intro: {
        uk: 'Три питання перед практикою. За кожне правильне — 5 XP, пояснення — до кожного варіанта.',
        en: 'Three questions before practice. 5 XP each; every option comes with an explanation.',
      },
      questions: [
        {
          text: {
            uk: 'Рада хоче одразу оголосити тендер на будівництво. Чого не вистачає, щоб «ворота» відкрилися?',
            en: 'The council wants to announce a construction tender right away. What is missing for the “gate” to open?',
          },
          options: [
            { uk: 'Затвердженого ТЕО та кошторису — результатів передінвестиційної фази', en: 'An approved feasibility study and estimate — the outputs of the pre-investment phase' },
            { uk: 'Лише бажання депутатів', en: 'Nothing but the councillors’ will' },
            { uk: 'Підрядника можна шукати паралельно, це не заважає', en: 'A contractor can be sought in parallel, it does not interfere' },
          ],
          correct: 0,
          why: {
            uk: 'Тендер без кошторису не має ціни і технічного завдання: або скасування, або переробки. Ворота між фазами — це документи, а не ентузіазм.',
            en: 'A tender without an estimate has no price and no terms of reference: either cancellation or rework. Gates between phases are documents, not enthusiasm.',
          },
        },
        {
          text: {
            uk: 'Яка подія закриває інвестиційну фазу проєкту «Відновлення школи»?',
            en: 'Which event closes the investment phase of the “School Recovery” project?',
          },
          options: [
            { uk: 'Останній платіж підряднику', en: 'The last payment to the contractor' },
            { uk: 'Приймання об’єкта комісією з актом готовності', en: 'Acceptance of the facility by a commission with a readiness act' },
            { uk: 'Перший дзвінок у відновленій школі', en: 'The first bell in the restored school' },
          ],
          correct: 1,
          why: {
            uk: 'Межа фаз — приймання: об’єкт передано експлуатанту. Платіж і перший дзвінок — важливі, але не формальна межа.',
            en: 'The phase boundary is acceptance: the facility is handed to the operator. The payment and the first bell matter, but are not the formal boundary.',
          },
        },
        {
          text: {
            uk: 'Чому експлуатаційна фаза належить до життєвого циклу проєкту, а не «це вже не наша справа»?',
            en: 'Why does the operation phase belong to the project life cycle and not “that is no longer our business”?',
          },
          options: [
            { uk: 'Тому що мета проєкту — тривалий ефект для людей, а не просто збудований об’єкт', en: 'Because the project’s goal is a lasting effect for people, not merely a built facility' },
            { uk: 'Тому що підрядник зобов’язаний обслуговувати школу вічно', en: 'Because the contractor is obliged to service the school forever' },
            { uk: 'Насправді не належить: проєкт закінчується прийманням', en: 'It does not: the project ends with acceptance' },
          ],
          correct: 0,
          why: {
            uk: 'Якщо не планувати експлуатацію заздалегідь (хто чергує, хто ремонтує, скільки коштує), ефект проєкту зникає через рік. Мета — ефект, об’єкт лише його носій.',
            en: 'If operation is not planned in advance (who staffs, who repairs, what it costs), the project’s effect dies within a year. The goal is the effect; the facility is only its carrier.',
          },
        },
      ],
    },
    {
      kind: 'order',
      id: 'o1',
      title: { uk: 'Завдання: зберіть життєвий цикл', en: 'Task: assemble the life cycle' },
      intro: {
        uk: 'Розставте п’ять кроків відновлення школи у правильній послідовності. Помилкова спроба не карається, але й не зараховується.',
        en: 'Put the five school-recovery steps in the right order. A wrong click is not punished, but it does not score.',
      },
      items: [
        { uk: 'Обстеження пошкоджень і визначення цілі відновлення', en: 'Damage survey and defining the recovery goal' },
        { uk: 'ТЕО, кошторис і підтвердження джерел фінансування', en: 'Feasibility study, estimate and confirmed funding sources' },
        { uk: 'Проєктування та вибір підрядника через електронні закупівлі', en: 'Design and contractor selection via electronic procurement' },
        { uk: 'Будівельні роботи з контролем строку, бюджету і якості', en: 'Construction with time, cost and quality control' },
        { uk: 'Приймання комісією та передача школі з планом експлуатації', en: 'Commission acceptance and hand-over with an operation plan' },
      ],
      outro: {
        uk: 'Саме так виглядає «безперервність» циклу: жоден крок не існує без результату попереднього.',
        en: 'This is what the continuity of the cycle looks like: no step exists without the previous step’s output.',
      },
    },
    {
      kind: 'sort',
      id: 's1',
      title: { uk: 'Завдання: розкладіть дії по фазах', en: 'Task: sort the actions by phase' },
      intro: {
        uk: 'Шість дій з проєкту відновлення школи. В якій фазі життєвого циклу виконується кожна?',
        en: 'Six actions from the school recovery project. Which life-cycle phase does each belong to?',
      },
      buckets: [
        { uk: 'Передінвестиційна', en: 'Pre-investment' },
        { uk: 'Інвестиційна', en: 'Investment' },
        { uk: 'Експлуатаційна', en: 'Operation' },
      ],
      bucketHint: [
        { uk: 'підготовка рішення', en: 'preparing the decision' },
        { uk: 'створення об’єкта', en: 'creating the facility' },
        { uk: 'утримання ефекту', en: 'sustaining the effect' },
      ],
      items: [
        {
          text: { uk: 'Оцінка потреби: скільки учнів повернеться і скільки потрібно місць', en: 'Needs assessment: how many pupils will return and how many seats are needed' },
          bucket: 0,
          why: { uk: 'Розуміння потреби — початок передінвестиційної фази: без неї ТЕО не має сенсу.', en: 'Understanding the need opens the pre-investment phase: without it the feasibility study is meaningless.' },
        },
        {
          text: { uk: 'Техніко-економічне обґрунтування та кошторис', en: 'Feasibility study and cost estimate' },
          bucket: 0,
          why: { uk: 'ТЕО і кошторис — класичні артефакти передінвестиційної фази; на них тримається рішення про фінансування.', en: 'The feasibility study and estimate are classic pre-investment artefacts; the funding decision stands on them.' },
        },
        {
          text: { uk: 'Вибір підрядника через електронну систему закупівель', en: 'Contractor selection through the e-procurement system' },
          bucket: 1,
          why: { uk: 'Закупівля виконує вже ухвалене рішення — це початок інвестиційної (реалізаційної) фази.', en: 'Procurement executes an already-made decision — the beginning of the investment (implementation) phase.' },
        },
        {
          text: { uk: 'Монтаж модульних секцій укриття', en: 'Assembly of the modular shelter sections' },
          bucket: 1,
          why: { uk: 'Фізичне створення об’єкта — серце інвестиційної фази.', en: 'Physical creation of the facility is the heart of the investment phase.' },
        },
        {
          text: { uk: 'Планове технічне обслуговування укриття', en: 'Scheduled technical maintenance of the shelter' },
          bucket: 2,
          why: { uk: 'Обслуговування працює з уже створеним об’єктом — це експлуатація.', en: 'Maintenance works with an already-built facility — that is operation.' },
        },
        {
          text: { uk: 'Збір відгуків учнів і батьків про використання укриття', en: 'Collecting feedback from pupils and parents on shelter use' },
          bucket: 2,
          why: { uk: 'Зворотний зв’язок під час використання — моніторинг ефекту в експлуатаційній фазі.', en: 'In-use feedback is effect monitoring in the operation phase.' },
        },
      ],
    },
    {
      kind: 'decision',
      id: 'd1',
      title: { uk: 'Рішення: дедлайн горить', en: 'Decision: the deadline is burning' },
      intro: {
        uk: '20 липня. Навчальний рік — 1 вересня. Проєктування школи за повним циклом завершиться 10 вересня. Міський голова вимагає рішення сьогодні. Що робите?',
        en: '20 July. The school year starts on 1 September. Full-cycle design finishes on 10 September. The mayor demands a decision today. What do you do?',
      },
      options: [
        {
          text: { uk: 'Почати будівництво без проєкту — «розберемося по ходу»', en: 'Start construction without a design — “we will figure it out as we go”' },
          quality: 'poor',
          outcome: {
            uk: 'Через два тижні підрядник зупиняється: немає робочих креслень. Переробки з’їдають місяць — школа відкриється у листопаді, плюс позови за порушення будівельних норм. Швидкий старт виявився найповільнішим шляхом.',
            en: 'In two weeks the contractor stops: no working drawings. Rework eats a month — the school opens in November, plus lawsuits over building-code violations. The fast start turned out to be the slowest path.',
          },
        },
        {
          text: {
            uk: 'Стиснути фазу проєктування: типовий проєкт укриття, паралельне узгодження, ворота — 15 серпня',
            en: 'Compress the design phase: a standard shelter design, parallel approvals, the gate moves to 15 August',
          },
          quality: 'best',
          outcome: {
            uk: 'Типове рішення змінює лише прив’язку до ділянки, узгодження йдуть паралельно. Ворота проходять 15 серпня, будівництво вкладається у два тижні, школа відкривається до 1 вересня. Суперечність «швидко ↔ правильно» знята стисканням, а не пропуском фаз.',
            en: 'The standard design only adapts to the site, approvals run in parallel. The gate passes on 15 August, construction fits into two weeks, the school opens by 1 September. The “fast ↔ right” contradiction is resolved by compression, not by skipping phases.',
          },
        },
        {
          text: { uk: 'Чесно повідомити: відкриття — у жовтні, за повним циклом', en: 'Report honestly: the opening is in October, full cycle' },
          quality: 'ok',
          outcome: {
            uk: 'Правильно за процедурою, але діти місяць сидять вдома, а рада втрачає довіру. Компроміс знайдено, однак ціна — час людей, який можна було зекономити стисканням фази.',
            en: 'Right procedurally, but the children stay home for a month and the council loses trust. A compromise — yet the price is people’s time that compression could have saved.',
          },
        },
      ],
    },
  ],
  debrief: {
    heading: { uk: 'Школа пройшла всі ворота — у строк', en: 'The school passed every gate — on time' },
    recap: [
      { uk: 'Життєвий цикл: передінвестиційна → інвестиційна → експлуатаційна. Перескочити фазу неможливо — можна лише стиснути.', en: 'Life cycle: pre-investment → investment → operation. A phase cannot be skipped — only compressed.' },
      { uk: '«Ворота» між фазами — це документи і рішення, а не календарні дати.', en: 'The “gates” between phases are documents and decisions, not calendar dates.' },
      { uk: 'Експлуатація — частина проєкту: мета проєкту — тривалий ефект, а не збудований об’єкт.', en: 'Operation is part of the project: the goal is a lasting effect, not a built facility.' },
      { uk: 'Тиск «швидше» знімається паралельними роботами і типовими рішеннями, а не викиданням етапів.', en: 'The “faster” pressure is handled by parallel work and standard solutions, not by discarding stages.' },
    ],
  },
}
