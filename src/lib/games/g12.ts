// ============================================================
// КЕЙС g12 · «Досьє проєкту, ч. 2» — технічний, екологічний,
// правовий та соціальний аналізи
// Семінар 12 · Тема 12 · 1 бал на семінарі
// ============================================================

import type { ScenarioDef } from '../scenario'

export const G12: ScenarioDef = {
  id: 'g12',
  badgeId: 'dossier',
  effect: { resilience: 2, trust: 2 },
  introKicker: { uk: 'Семінар 12 · Тема 12 · 1 бал на семінарі', en: 'Seminar 12 · Topic 12 · 1 seminar point' },
  title: { uk: '«Досьє проєкту, ч. 2»', en: '“Project Dossier, Part 2”' },
  summary: {
    uk: 'Локація, технологія, закон, екологія й громада — чотири фільтри до першої копанки.',
    en: 'Site, technology, law, ecology and community — four filters before the first dig.',
  },
  durationMin: 20,
  stages: [
    {
      kind: 'brief',
      id: 'b1',
      title: { uk: 'Кейс: локація «де вільно»', en: 'Case: the site “wherever is free”' },
      blocks: [
        {
          t: 'p',
          text: {
            uk: 'Для нового корпусу амбулаторії обрали ділянку, що «була вільна». Через пів року: частина ділянки — у прибережній захисній смузі (заборона будівництва), друга — під ОВД-спором між спадкоємцями, а мешканці південного мікрорайону питають, чому амбулаторія буде на протилежному краї міста. Проєкт стоять.',
            en: 'For the new outpatient clinic building the team picked a plot that “was free”. Six months later: part of the plot lies in a coastal protection zone (construction banned), another part is under an ownership dispute between heirs, and residents of the southern district ask why the clinic will stand across the city. The project is stuck.',
          },
        },
        {
          t: 'pc',
          tone: 'orange',
          icon: '⚠',
          label: { uk: 'Основна проблема', en: 'The core problem' },
          text: {
            uk: 'Локацію і технологію обирають за однією ознакою — «вільна ділянка» / «звичний матеріал» — не прогнавши вибір крізь технічні, екологічні, правові та соціальні фільтри. Кожен пропущений фільтр пізніше вмикається судом, заборонами й протестами.',
            en: 'Site and technology are chosen by a single sign — “the plot is free” / “the usual material” — without running the choice through technical, environmental, legal and social filters. Each skipped filter later switches on lawsuits, bans and protests.',
          },
        },
        {
          t: 'pc',
          tone: 'amber',
          icon: '⚡',
          label: { uk: 'Суперечність, що створює проблему', en: 'The contradiction behind the problem' },
          text: {
            uk: 'Технічна оптимальність проти комплексності: найшвидший і найдешевший варіант «за документами» програє після першої перевірки. Кожен додатковий фільтр коштує дні — але пропуск будь-якого коштує місяці.',
            en: 'Technical optimality versus complexity: the fastest, cheapest “on paper” option loses after the first check. Every extra filter costs days — but skipping any of them costs months.',
          },
        },
        {
          t: 'pc',
          tone: 'green',
          icon: '✅',
          label: { uk: 'Як знімається суперечність', en: 'How the contradiction is resolved' },
          text: {
            uk: 'Стандартним чек-листом чотирьох аналізів до рішення про локацію: технічний (ґрунти, мережі, під’їзди), екологічний (санітарні зони, шум, збереження дерев), правовий (цільове призначення, власність, дозволи, закупівлі) і соціальний (доступність для мешканців, громадські обговорення). Чек-лист — 2–3 дні; суди й перенесення — 6–12 місяців.',
            en: 'By a standard four-analysis checklist before the site decision: technical (soils, networks, access), environmental (sanitary zones, noise, tree preservation), legal (zoning, ownership, permits, procurement) and social (accessibility for residents, public hearings). The checklist — 2–3 days; courts and relocation — 6–12 months.',
          },
        },
      ],
    },
    {
      kind: 'quiz',
      id: 'q1',
      title: { uk: 'Розминка: чотири фільтри', en: 'Warm-up: four filters' },
      questions: [
        {
          text: { uk: 'Прибережна захисна смуга — це питання якого аналізу?', en: 'A coastal protection zone is a question of which analysis?' },
          options: [
            { uk: 'Правового та екологічного', en: 'Legal and environmental' },
            { uk: 'Лише маркетингового', en: 'Marketing only' },
            { uk: 'Логістичного', en: 'Logistical' },
          ],
          correct: 0,
          why: {
            uk: 'Зони з обмеженнями — екологічний режим, перевірка прав на ділянку — правовий аналіз. Один фільтр «піймав» би проблему безкоштовно.',
            en: 'Restricted zones are an environmental regime; title checks — legal analysis. One filter would catch the problem for free.',
          },
        },
        {
          text: { uk: 'Найдорожчий момент для зміни локації проєкту:', en: 'The most expensive moment to change a project’s site:' },
          options: [
            { uk: 'До тендеру, під час досьє', en: 'Before the tender, during the dossier' },
            { uk: 'Після підписання контракту з підрядником', en: 'After signing the contractor’s contract' },
            { uk: 'Зміна локації завжди безкоштовна', en: 'Changing the site is always free' },
          ],
          correct: 1,
          why: {
            uk: 'Після контракту — санкції, перероблене проєктування, нові дозволи. Тому фільтри працюють ДО тендеру.',
            en: 'After the contract — penalties, redesigned documentation, new permits. That is why the filters run BEFORE the tender.',
          },
        },
        {
          text: { uk: 'Громадські обговорення корисні, бо…', en: 'Public hearings are useful because…' },
          options: [
            { uk: 'Виявляють соціальний протест ДО будівництва, коли зміни ще дешеві', en: 'They surface social protest BEFORE construction, while changes are still cheap' },
            { uk: 'Це формальність для галочки', en: 'They are a checkbox formality' },
            { uk: 'Вони замінюють технічний аналіз', en: 'They replace technical analysis' },
          ],
          correct: 0,
          why: {
            uk: 'Протест на ескізі коштує зміни плану; протест на фундаменті — зупинки будівництва. Ранній фільтр — найдешевший.',
            en: 'Protest at the sketch stage costs a plan change; protest at the foundation — a construction stop. The early filter is the cheapest.',
          },
        },
      ],
    },
    {
      kind: 'sort',
      id: 's1',
      title: { uk: 'Завдання: чинники за аналізами', en: 'Task: factors by analysis' },
      intro: {
        uk: 'Вісім чинників вибору локації амбулаторії. До якого аналізу належить кожен?',
        en: 'Eight factors of choosing the clinic site. Which analysis does each belong to?',
      },
      buckets: [
        { uk: 'Технічний', en: 'Technical' },
        { uk: 'Екологічний', en: 'Environmental' },
        { uk: 'Правовий', en: 'Legal' },
        { uk: 'Соціальний', en: 'Social' },
      ],
      items: [
        {
          text: { uk: 'Несуча здатність ґрунтів ділянки', en: 'The load-bearing capacity of the site’s soils' },
          bucket: 0,
          why: { uk: 'Ґрунти і конструкції — технічний аналіз.', en: 'Soils and structures — technical analysis.' },
        },
        {
          text: { uk: 'Відстань до мереж електро- і водопостачання', en: 'Distance to power and water networks' },
          bucket: 0,
          why: { uk: 'Підключення до мереж — технічний аналіз.', en: 'Utility connections — technical analysis.' },
        },
        {
          text: { uk: 'Рівень шуму від траси поруч', en: 'Noise levels from the nearby road' },
          bucket: 1,
          why: { uk: 'Акустика і санітарні норми — екологічний аналіз.', en: 'Acoustics and sanitary norms — environmental analysis.' },
        },
        {
          text: { uk: 'Наявність столітніх дерев на ділянці', en: 'Century-old trees on the plot' },
          bucket: 1,
          why: { uk: 'Зелені насадження під охороною — екологічний фільтр.', en: 'Protected greenery — an environmental filter.' },
        },
        {
          text: { uk: 'Цільове призначення ділянки за містобудівною документацією', en: 'The plot’s zoning per the urban planning documents' },
          bucket: 2,
          why: { uk: 'Призначення і дозволи — правовий аналіз.', en: 'Zoning and permits — legal analysis.' },
        },
        {
          text: { uk: 'Відсутність спорів щодо власності на ділянку', en: 'No ownership disputes over the plot' },
          bucket: 2,
          why: { uk: 'Чистота прав — правовий аналіз. Саме цей фільтр пропустили.', en: 'Clean title — legal analysis. Exactly the filter they skipped.' },
        },
        {
          text: { uk: 'Пішохідна доступність для 60 % мешканців міста', en: 'Walking accessibility for 60% of residents' },
          bucket: 3,
          why: { uk: 'Доступність послуг — соціальний аналіз.', en: 'Service accessibility — social analysis.' },
        },
        {
          text: { uk: 'Результати громадських обговорень розміщення', en: 'Results of public hearings on the placement' },
          bucket: 3,
          why: { uk: 'Думка громади — соціальний аналіз.', en: 'Community input — social analysis.' },
        },
      ],
    },
    {
      kind: 'quiz',
      id: 'q2',
      title: { uk: 'Завдання: фільтри закупівлі', en: 'Task: procurement filters' },
      intro: {
        uk: 'Правовий фільтр не закінчується на ділянці — він діє всюди, де є публічні гроші.',
        en: 'The legal filter does not end at the plot — it applies wherever public money flows.',
      },
      questions: [
        {
          text: { uk: 'Підрядчик пропонує «свого» постачальника модулів, минаючи електронну закупівлю. Це…', en: 'The contractor offers “their own” module supplier bypassing e-procurement. This is…' },
          options: [
            { uk: 'Порушення законодавства про публічні закупівлі: ризик штрафтів і зупинки фінансування', en: 'A violation of public procurement law: fines and funding stoppage risk' },
            { uk: 'Нормальна практика економії часу', en: 'Normal practice that saves time' },
            { uk: 'Дозволено, якщо сума мала', en: 'Allowed if the amount is small' },
          ],
          correct: 0,
          why: {
            uk: 'Публічні закупівлі проходять через електронну систему: пряма домовленість ставить проєкт під санкції і позбавляє донорського фінансування.',
            en: 'Public procurement goes through the e-system: a direct deal exposes the project to sanctions and loses donor funding.',
          },
        },
        {
          text: { uk: 'Технологію модульних секцій обрано «як у сусідів». Який аналіз це має перевірити?', en: 'The modular-section technology was chosen “like the neighbours”. Which analysis should verify it?' },
          options: [
            { uk: 'Технічний: кліматичні навантаження, ґрунти, експлуатаційні вимоги саме Соснівки', en: 'Technical: climate loads, soils, Sosnivka’s own operating requirements' },
            { uk: 'Жоден — перевірена сусідами технологія не потребує перевірки', en: 'None — a neighbour-tested technology needs no check' },
            { uk: 'Лише фінансовий', en: 'Financial only' },
          ],
          correct: 0,
          why: {
            uk: '«Як у сусідів» — гіпотеза, а не аналіз: у сусідів інші ґрунти, снігові навантаження і тарифи на опалення.',
            en: '“Like the neighbours” is a hypothesis, not an analysis: the neighbours have different soils, snow loads and heating tariffs.',
          },
        },
      ],
    },
    {
      kind: 'decision',
      id: 'd1',
      title: { uk: 'Рішення: три ділянки — одна амбулаторія', en: 'Decision: three plots — one clinic' },
      intro: {
        uk: 'Ваші варіанти після фільтрів: A) колишня ділянка «де вільно» — спір на власність + прибережна смуга; B) ділянка біля школи — чиста юридично, електрика поруч, але протест 30 батьків через паркінг; C) ділянка на півдні — далеко від центра, чиста, мешканці «за», мережі за 200 м. Що рекомендуєте?',
        en: 'Your options after the filters: A) the former “free” plot — ownership dispute + coastal zone; B) near the school — legally clean, power nearby, but 30 parents protest the parking; C) in the south — far from the centre, clean, residents are “for”, networks 200 m away. What do you recommend?',
      },
      options: [
        {
          text: { uk: 'A: наполягти — ділянка вже «проглянута», спір виграємо', en: 'A: insist — the plot is already “looked at”, we will win the dispute' },
          quality: 'poor',
          outcome: {
            uk: 'Суд триває 11 місяців, прибережна смага взагалі блокує дозвіл. Проєкт втрачає грантове вікно. Ділянка A не пройшла два фільтри з чотирьох — це не «ризик», це «ні».',
            en: 'The lawsuit takes 11 months, the coastal zone blocks the permit outright. The project misses the grant window. Plot A failed two of four filters — that is not a “risk”, that is a “no”.',
          },
        },
        {
          text: {
            uk: 'B з доопрацюванням: зустріч з батьками, паркінг за периметром із озелененням, обговорення ескізу',
            en: 'B with rework: a meeting with parents, perimeter parking with greenery, a sketch hearing',
          },
          quality: 'ok',
          outcome: {
            uk: 'Компроміс досягнуто: паркінг переорганизований, батьки погоджуються. Але локація біля школи означає обмеження на роботи в навчальний час — графік витягується за рахунок резервів. Робочий варіант, однак міські показники доступності нижчі, ніж у C.',
            en: 'A compromise is reached: the parking is redesigned, the parents agree. But a school-side site means limits on works during school hours — the schedule survives on reserves. Workable, though the city’s accessibility metrics are worse than C’s.',
          },
        },
        {
          text: {
            uk: 'C: усі чотири фільтри зелені, співфінансування мереж через бюджет розвитку, громадські обговорення пройшли',
            en: 'C: all four filters green, network co-funding via the development budget, hearings passed',
          },
          quality: 'best',
          outcome: {
            uk: 'Дозвільний шлях без судів, мережі поруч, громада «за» — і ви компенсуєте віддаленість маршрутом автобуса №7 (договір перевізника в досьє). Проєкт іде в тендер без юридичних пасток; два інші варіанти задокументовані як розглянуті й відхилені з підставами.',
            en: 'A permit path with no lawsuits, networks nearby, community “for” — and you offset the distance with bus route No. 7 (the carrier’s agreement is in the dossier). The project goes to tender with no legal traps; the other two options are documented as considered and rejected with reasons.',
          },
        },
      ],
    },
  ],
  debrief: {
    heading: { uk: 'Чотири фільтри відпрацювали — проєкт без судів', en: 'Four filters done — a project with no lawsuits' },
    recap: [
      { uk: 'Локація і технологія проходять чотири фільтри: технічний, екологічний, правовий, соціальний.', en: 'Site and technology pass four filters: technical, environmental, legal, social.' },
      { uk: 'Фільтр до тендеру коштує дні; пропущений фільтр — місяці судів і заборон.', en: 'A filter before the tender costs days; a skipped filter — months of lawsuits and bans.' },
      { uk: 'Публічні закупівлі — без «своїх» постачальників: прямі домовленості ставлять хрест на фінансуванні.', en: 'Public procurement without “own” suppliers: direct deals kill funding.' },
      { uk: 'Громадські обговорення — найдешевший фільтр: протест на ескізі дешевший за протест на фундаменті.', en: 'Public hearings are the cheapest filter: protest at the sketch is cheaper than protest at the foundation.' },
    ],
  },
}
