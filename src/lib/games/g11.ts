// ============================================================
// КЕЙС g11 · «Досьє проєкту, ч. 1» — маркетинговий та економічний аналізи
// Семінар 11 · Тема 11 · 1 бал на семінарі
// ============================================================

import type { ScenarioDef } from '../scenario'

export const G11: ScenarioDef = {
  id: 'g11',
  badgeId: 'dossier',
  effect: { wellbeing: 2, trust: 2 },
  introKicker: { uk: 'Семінар 11 · Тема 11 · 1 бал на семінарі', en: 'Seminar 11 · Topic 11 · 1 seminar point' },
  title: { uk: '«Досьє проєкту, ч. 1»', en: '“Project Dossier, Part 1”' },
  summary: {
    uk: 'Чотири міні-експертизи: ринок громади, економічний вплив, установи, фінанси.',
    en: 'Four mini-assessments: the community market, economic impact, institutions, finance.',
  },
  durationMin: 20,
  stages: [
    {
      kind: 'brief',
      id: 'b1',
      title: { uk: 'Кейс: центр дозвілля, куди ніхто не ходить', en: 'Case: a leisure centre nobody visits' },
      blocks: [
        {
          t: 'p',
          text: {
            uk: 'Соснівка відновила центр дозвілля за донорським грантом: красивий зал, нові вікна, сцена. Через пів року відвідуваність — 12 осіб на тиждень. Донор питає, чому. Виявляється: у районі 3 тисячі мешканців, і половина — люди 65+, які не вечертаються додому після 19:00, а саме тоді починалися події.',
            en: 'Sosnivka restored a leisure centre with a donor grant: a beautiful hall, new windows, a stage. Six months later the attendance is 12 people a week. The donor asks why. It turns out: the district has 3,000 residents, half of them 65+, who do not stay out after 19:00 — exactly when the events started.',
          },
        },
        {
          t: 'pc',
          tone: 'orange',
          icon: '⚠',
          label: { uk: 'Основна проблема', en: 'The core problem' },
          text: {
            uk: 'Проєкти відбудови стартують без аналізу попиту: «об’єкт побудуємо — люди прий». Демографія, спроможність установ, платоспроможність і економічний ефект залишаються неперевіреними — і проєкт досягає технічних цілей, не досягаючи жодної людської.',
            en: 'Recovery projects start without demand analysis: “we build it, they will come”. Demographics, institutional capacity, affordability and economic impact stay unchecked — and the project meets its technical goals while missing every human one.',
          },
        },
        {
          t: 'pc',
          tone: 'amber',
          icon: '⚡',
          label: { uk: 'Суперечність, що створює проблему', en: 'The contradiction behind the problem' },
          text: {
            uk: 'Швидкість відбудови проти глибини аналізу: донори хочуть «цеглу до звіту», а громада — відповідь на свою потребу. Аналіз «після рішення» — не аналіз, а його виправдання; але робити його ДО рішення здається втратою часу.',
            en: 'Recovery speed versus analysis depth: donors want “bricks in the report”, the community wants their need answered. Analysis “after the decision” is not analysis but its excuse; yet doing it BEFORE the decision feels like a waste of time.',
          },
        },
        {
          t: 'pc',
          tone: 'green',
          icon: '✅',
          label: { uk: 'Як знімається суперечність', en: 'How the contradiction is resolved' },
          text: {
            uk: 'Компактним досьє з чотирьох міні-експертиз ще до подачі заявки: 1) ринок громади (хто, скільки, коли); 2) економічний вплив (робочі місця, доходи, мультиплікатор); 3) установи (хто експлуатуватиме і чи має спроможність); 4) фінанси (тарифи, окупність, співфінансування). Стандартний шаблон займає 5–7 днів — не місяці.',
            en: 'By a compact four-expertise dossier before the application: 1) community market (who, how many, when); 2) economic impact (jobs, income, multiplier); 3) institutions (who will operate it and whether they are able); 4) finance (tariffs, payback, co-funding). A standard template takes 5–7 days — not months.',
          },
        },
      ],
    },
    {
      kind: 'quiz',
      id: 'q1',
      title: { uk: 'Розминка: аналізи до рішення', en: 'Warm-up: analysis before the decision' },
      questions: [
        {
          text: { uk: 'Що з переліченого належить до маркетингового аналізу проєкту?', en: 'Which of these belongs to the marketing analysis of a project?' },
          options: [
            { uk: 'Демографія району, потреби мешканців, режим користування', en: 'District demographics, residents’ needs, usage patterns' },
            { uk: 'Схема армування фундаменту', en: 'The foundation’s rebar scheme' },
            { uk: 'Категорія витрат за економічною класифікацією', en: 'The expense category per the economic classification' },
          ],
          correct: 0,
          why: { uk: 'Маркетинговий аналіз відповідає «для кого і як»: люди, потреби, поведінка.', en: 'Marketing analysis answers “for whom and how”: people, needs, behaviour.' },
        },
        {
          text: { uk: 'Установа-експлуатант важлива, бо…', en: 'The operating institution matters because…' },
          options: [
            { uk: 'Без спроможного експлуатанта результат проєкту не працює після приймання', en: 'Without a capable operator the project result does not work after acceptance' },
            { uk: 'Вона обов’язково співфінансує 50 %', en: 'It always co-funds 50%' },
            { uk: 'Вона розробляє кошторис будівництва', en: 'It drafts the construction estimate' },
          ],
          correct: 0,
          why: { uk: 'Об’єкт без господаря деградує за рік: спроможність установи — частина життєздатності проєкту.', en: 'A facility without an owner degrades within a year: institutional capacity is part of project viability.' },
        },
        {
          text: { uk: 'Економічний вплив проєкту вимірюється…', en: 'A project’s economic impact is measured by…' },
          options: [
            { uk: 'Новими робочими місцями, доходами мешканців і мультиплікативним ефектом', en: 'New jobs, residents’ income and the multiplier effect' },
            { uk: 'Кількістю пресрелізів', en: 'The number of press releases' },
            { uk: 'Площею відновлених квадратних метрів', en: 'The square metres restored' },
          ],
          correct: 0,
          why: { uk: 'Тема 11: м² і пресрелізи — показники процесу; економічний вплив — про доходи і робочі місця людей.', en: 'Topic 11: m² and press releases are process metrics; economic impact is about incomes and jobs.' },
        },
      ],
    },
    {
      kind: 'quiz',
      id: 'q2',
      title: { uk: 'Міні-експертиза: читання даних громади', en: 'Mini-assessment: reading the community data' },
      intro: {
        uk: 'Паспорт громади: 38 тис. мешканців; 24 % — 65+; середня зарплата 14.5 тис. грн; 3 установи культури; маршрутка в обласний центр — 40 хв.',
        en: 'Community passport: 38k residents; 24% are 65+; average wage UAH 14.5k; 3 cultural institutions; a minibus to the regional centre — 40 min.',
      },
      questions: [
        {
          text: { uk: 'Який висновок для проєкту «вечірній кіноклуб у центрі» слідує з даних?', en: 'Which conclusion for an “evening film club at the centre” follows from the data?' },
          options: [
            { uk: 'Високий ризик: 65+ не вечертаються, молодь їде в обласний центр — потрібна денна програма і транспорт', en: 'High risk: 65+ do not go out in the evening, the youth go to the regional centre — a daytime programme and transport are needed' },
            { uk: 'Дані не мають значення для кіноклубу', en: 'The data is irrelevant for a film club' },
            { uk: 'Висновок: збільшити зарплату', en: 'The conclusion: raise the wage' },
          ],
          correct: 0,
          why: {
            uk: 'Маркетинговий аналіз змінює проєкт ДО витрати коштів: формат, час, транспорт. Це і є сенс досьє.',
            en: 'Marketing analysis changes the project BEFORE the money is spent: format, timing, transport. That is the point of the dossier.',
          },
        },
        {
          text: { uk: 'Мультиплікативний ефект відновлення котельні проявиться через…', en: 'The multiplier effect of restoring a boiler house shows through…' },
          options: [
            { uk: 'Зарплати робітників, витрачені в місцевих крамницях і сервісах', en: 'Workers’ wages spent in local shops and services' },
            { uk: 'Назву котельні у звіті', en: 'The boiler house’s name in the report' },
            { uk: 'Збільшення штату міськради', en: 'A larger city council staff' },
          ],
          correct: 0,
          why: {
            uk: 'Мультиплікатор — ланцюжок перепродажу грошей у локальній економіці: зарплата → крамниця → податки громади.',
            en: 'The multiplier is the chain of money re-spending in the local economy: wages → shops → community taxes.',
          },
        },
      ],
    },
    {
      kind: 'sort',
      id: 's1',
      title: { uk: 'Завдання: питання дослідження за блоками досьє', en: 'Task: research questions by dossier block' },
      intro: {
        uk: 'Вісім питань заявки. Яка експертиза відповідає на кожне?',
        en: 'Eight application questions. Which expertise answers each?',
      },
      buckets: [
        { uk: 'Ринок громади', en: 'Community market' },
        { uk: 'Економічний вплив', en: 'Economic impact' },
        { uk: 'Установи', en: 'Institutions' },
        { uk: 'Фінанси', en: 'Finance' },
      ],
      items: [
        {
          text: { uk: 'Скільки сімей у зоні обслуговування нового ФАПу?', en: 'How many families are in the service area of the new health post?' },
          bucket: 0,
          why: { uk: 'Обсяг і склад цільової групи — ринок громади.', en: 'The size and makeup of the target group — community market.' },
        },
        {
          text: { uk: 'Скільки нових робочих місць створить пекарня громади?', en: 'How many new jobs will the community bakery create?' },
          bucket: 1,
          why: { uk: 'Зайнятість — економічний вплив.', en: 'Employment — economic impact.' },
        },
        {
          text: { uk: 'Чи вистачає працівників у КНП для обслуговування нового корпусу?', en: 'Does the municipal enterprise have enough staff for the new building?' },
          bucket: 2,
          why: { uk: 'Спроможність установи — блок «Установи».', en: 'Institutional capacity — the “Institutions” block.' },
        },
        {
          text: { uk: 'Який тариф утримання покриє витрати на техніка?', en: 'Which maintenance tariff covers the technician’s cost?' },
          bucket: 3,
          why: { uk: 'Тарифи і окупність — фінансова експертиза.', en: 'Tariffs and payback — financial expertise.' },
        },
        {
          text: { uk: 'У які години мешканці можуть відвідувати заняття?', en: 'At what hours can residents attend classes?' },
          bucket: 0,
          why: { uk: 'Поведінка користувачів — ринок громади.', en: 'User behaviour — community market.' },
        },
        {
          text: { uk: 'Який мультиплікатор закупівель місцевих будматеріалів?', en: 'What is the multiplier of buying local building materials?' },
          bucket: 1,
          why: { uk: 'Локальні ланцюги витрат — економічний вплив.', en: 'Local spending chains — economic impact.' },
        },
        {
          text: { uk: 'Хто буде відповідати за укриття після приймання?', en: 'Who will be responsible for the shelter after acceptance?' },
          bucket: 2,
          why: { uk: 'Відповідальний експлуатант — блок «Установи».', en: 'The responsible operator — the “Institutions” block.' },
        },
        {
          text: { uk: 'Чи передбачено співфінансування в бюджеті громади?', en: 'Is co-funding provided in the community budget?' },
          bucket: 3,
          why: { uk: 'Джерела коштів — фінансова експертиза.', en: 'Funding sources — financial expertise.' },
        },
      ],
    },
    {
      kind: 'decision',
      id: 'd1',
      title: { uk: 'Рішення: що робити з центром дозвілля', en: 'Decision: what to do with the leisure centre' },
      intro: {
        uk: 'Донор просить план дій. Досьє показує: 65+ — 24 %, вечірні події не працюють, установа має 1 культпрацівника, підвезення з околиць немає. Варіанти?',
        en: 'The donor asks for an action plan. The dossier shows: 24% are 65+, evening events fail, the institution has 1 cultural worker, no transport from the outskirts. Options?',
      },
      options: [
        {
          text: { uk: 'Просити у донора ще один грант на «промоцію центру»', en: 'Ask the donor for another grant to “promote the centre”' },
          quality: 'poor',
          outcome: {
            uk: 'Промоція не змінює годин і транспорту: відвідуваність підстрибне на тиждень і впаде знову. Ви виправляєте маркетинг там, де проблема — у форматі та логістиці.',
            en: 'Promotion changes neither hours nor transport: attendance jumps for a week and falls again. You are fixing marketing where the problem is format and logistics.',
          },
        },
        {
          text: {
            uk: 'Переналаштувати послуги за досьє: денні програми для 65+, виїзні події в околиці, 0.5 ставки другого працівника з громади',
            en: 'Re-tune services per the dossier: daytime programmes for 65+, outreach events in the outskirts, a 0.5 post for a second worker from the community budget',
          },
          quality: 'best',
          outcome: {
            uk: 'Через квартал відвідуваність — 140 осіб на тиждень: денні гуртки для старших (найбільша група), виїзні кінопокази доводять послугу до околиць, другий працівник розвантажує перевантажену установу. Донор фіксує історію успіху — а витрати мінімальні.',
            en: 'In a quarter attendance is 140 a week: daytime clubs for seniors (the largest group), outreach screenings bring the service to the outskirts, a second worker relieves the overloaded institution. The donor records a success story — at minimal cost.',
          },
        },
        {
          text: { uk: 'Закрити центр — «нічого не працює»', en: 'Close the centre — “nothing works”' },
          quality: 'poor',
          outcome: {
            uk: 'Актив 6 млн грн стає пусткою без спроби перенастроювання: найменш економічний сценарій. Дані досьє прямо показували, що причини усуненні.',
            en: 'A 6m asset becomes idle without a re-tuning attempt: the least economical scenario. The dossier data directly showed the causes are fixable.',
          },
        },
      ],
    },
  ],
  debrief: {
    heading: { uk: 'Досьє ч. 1 готове: люди перед цеглою', en: 'Dossier part 1 done: people before bricks' },
    recap: [
      { uk: 'Чотири експертизи до заявки: ринок, вплив, установи, фінанси.', en: 'Four expertises before the application: market, impact, institutions, finance.' },
      { uk: 'Демографія і поведінка користувачів змінюють формат проєкту ДО витрати коштів.', en: 'Demographics and user behaviour change the project format BEFORE the money is spent.' },
      { uk: 'Спроможність установи-експлуатанта — частина життєздатності, не формальність.', en: 'The operating institution’s capacity is part of viability, not a formality.' },
      { uk: 'Економічний вплив — робочі місця, доходи, мультиплікатор; не м² і не пресрелізи.', en: 'Economic impact — jobs, incomes, the multiplier; not m² or press releases.' },
    ],
  },
}
