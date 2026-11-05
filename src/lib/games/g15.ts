// ============================================================
// КЕЙС g15 · «Шторм сценаріїв» — управління та моделювання ризиків
// Семінар 15 · Тема 15 · 2 бали на семінарі
// ============================================================

import type { ScenarioDef } from '../scenario'

export const G15: ScenarioDef = {
  id: 'g15',
  badgeId: 'riskmgr',
  effect: { resilience: 4, wellbeing: 1 },
  introKicker: { uk: 'Семінар 15 · Тема 15 · 2 бали на семінарі', en: 'Seminar 15 · Topic 15 · 2 seminar points' },
  title: { uk: '«Шторм сценаріїв»', en: '“Scenario Storm”' },
  summary: {
    uk: 'Дерево рішень, візуальний Монте-Карло і критерії вибору в невизначеності.',
    en: 'A decision tree, a visual Monte Carlo and decision criteria under uncertainty.',
  },
  durationMin: 25,
  stages: [
    {
      kind: 'brief',
      id: 'b1',
      title: { uk: 'Кейс: план «на все добре»', en: 'Case: the “all is well” plan' },
      blocks: [
        {
          t: 'p',
          text: {
            uk: 'Проєкт сонячної електростанції для водоканалу розрахований на «базовий сценарій»: сонце, курс, тариф. Перший же квартал приносить три шоки одразу: хмарний сезон, здорожчання панелей і перегляд тарифу. План «на все добре» ламається, і команда не має жодної підготовленої відповіді — тільки паніку.',
            en: 'The solar plant project for the water utility is built on a “base scenario”: sunshine, exchange rate, tariff. The very first quarter brings three shocks at once: a cloudy season, costlier panels, a tariff revision. The “all is well” plan breaks, and the team has no prepared answer — only panic.',
          },
        },
        {
          t: 'pc',
          tone: 'orange',
          icon: '⚠',
          label: { uk: 'Основна проблема', en: 'The core problem' },
          text: {
            uk: 'План на одне «найімовірніше» майбутнє крихкий: реальність не зобов’язана збігатися з базовим сценарієм. Команда без сценаріїв і критеріїв приймає рішення в паніці — і це найдорожчий спосіб.',
            en: 'A plan for one “most likely” future is fragile: reality does not have to match the base scenario. A team without scenarios and criteria decides in panic — the most expensive way.',
          },
        },
        {
          t: 'pc',
          tone: 'amber',
          icon: '⚡',
          label: { uk: 'Суперечність, що створює проблему', en: 'The contradiction behind the problem' },
          text: {
            uk: 'Одне майбутнє зручно планувати і неможливо гарантувати; декілька майбутніх правдоподібні, але ускладнюють планування. Детальний план одного сценарію — це ставка всього на одне число.',
            en: 'One future is convenient to plan and impossible to guarantee; several futures are realistic but complicate planning. A detailed plan for a single scenario is betting everything on one number.',
          },
        },
        {
          t: 'pc',
          tone: 'green',
          icon: '✅',
          label: { uk: 'Як знімається суперечність', en: 'How the contradiction is resolved' },
          text: {
            uk: 'Деревом рішень (гілки — вибори і події з ймовірностями), спрощеним Монте-Карло (діапазони замість точок: мінімум/очікуване/максимум) та критеріями вибору в невизначеності. Керівництво заздалегідь домовляється: якщо X падає нижче порога — запускаємо підготовлений план Б. Рішення в шторм ухвалюються за протоколом, а не за адреналіном.',
            en: 'By a decision tree (branches = choices and events with probabilities), a simplified Monte Carlo (ranges instead of points: min/expected/max) and decision criteria under uncertainty. Leadership agrees in advance: if X falls below the threshold, the prepared plan B launches. In a storm, decisions follow the protocol, not the adrenaline.',
          },
        },
      ],
    },
    {
      kind: 'quiz',
      id: 'q1',
      title: { uk: 'Розминка: невизначеність', en: 'Warm-up: uncertainty' },
      questions: [
        {
          text: { uk: 'Дерево рішень відрізняється від списку ризиків тим, що…', en: 'A decision tree differs from a risk list in that…' },
          options: [
            { uk: 'Моделює послідовність ваших виборів і подій з ймовірностями до кінцевих результатів', en: 'It models the sequence of your choices and events with probabilities down to end outcomes' },
            { uk: 'Малюється красивіше', en: 'It looks prettier' },
            { uk: 'Не потребує ймовірностей', en: 'It needs no probabilities' },
          ],
          correct: 0,
          why: {
            uk: 'Дерево показує, де рішення ще в ваших руках, а де — випадок: саме це дозволяє обрати гілку з найкращим очікуваним результатом.',
            en: 'The tree shows where decisions are still yours and where chance rules: that is how you pick the branch with the best expected outcome.',
          },
        },
        {
          text: { uk: 'Що дає Монте-Карло на відміну від базового сценарію?', en: 'What does Monte Carlo give that a base scenario does not?' },
          options: [
            { uk: 'Розподіл можливих результатів, а не одну точку', en: 'A distribution of possible outcomes, not a single point' },
            { uk: 'Гарантію успіху', en: 'A guarantee of success' },
            { uk: 'Точну дату зриву', en: 'The exact failure date' },
          ],
          correct: 0,
          why: {
            uk: 'Тисячі прогонів з діапазонами дають відповідь «наскільки часто проєкт у мінусі» — це і є вимірювання ризику.',
            en: 'Thousands of runs over ranges answer “how often is the project in the red” — that is what measuring risk means.',
          },
        },
        {
          text: { uk: 'Критерій песиміста (maximin) обирає альтернативу, що…', en: 'The pessimist criterion (maximin) picks the alternative that…' },
          options: [
            { uk: 'Має найкращий із найгірших результатів', en: 'Has the best of the worst outcomes' },
            { uk: 'Має найбільше середнє значення', en: 'Has the highest average' },
            { uk: 'Має найменшу вартість входу', en: 'Has the lowest entry cost' },
          ],
          correct: 0,
          why: {
            uk: 'maximin страхує від найгіршого: обираємо варіант, чий «поганий сценарій» найменш болючий — розумно при обмеженій стійкості громади.',
            en: 'maximin insures against the worst: pick the option whose “bad scenario” hurts least — sensible when community resilience is limited.',
          },
        },
      ],
    },
    {
      kind: 'quiz',
      id: 'q2',
      title: { uk: 'Дерево рішень сонячної станції', en: 'The solar plant decision tree' },
      intro: {
        uk: 'Вибір: A) купити панелі зараз — 4.0 млн; Б) чекати 3 місяці — панелі з ймовірністю 60 % подешевшають до 3.4 млн, з ймовірністю 40 % подорожчають до 4.5 млн. Якщо чекати, запуск зсувається на квартал (втрата економії ~0.15 млн).',
        en: 'The choice: A) buy panels now — 4.0m; B) wait 3 months — with 60% probability panels drop to 3.4m, with 40% they rise to 4.5m. Waiting shifts the launch a quarter (lost savings ~0.15m).',
      },
      questions: [
        {
          text: { uk: 'Яке очікуване значення варіанта Б (вартість + втрати очікування)?', en: 'What is the expected value of option B (cost + waiting loss)?' },
          options: [
            { uk: '0.6×3.4 + 0.4×4.5 + 0.15 = 2.04 + 1.80 + 0.15 = 3.99 млн', en: '0.6×3.4 + 0.4×4.5 + 0.15 = 2.04 + 1.80 + 0.15 = 3.99m' },
            { uk: '3.4 млн — бо підешевшання «ймовірніше»', en: '3.4m — because a drop is “more likely”' },
            { uk: '4.5 млн — бо ризик важливіший', en: '4.5m — because risk matters more' },
          ],
          correct: 0,
          why: {
            uk: 'Очікуване = ваги ймовірностей, а не «більший шанс». 3.99 ≈ 4.0: очікування практично рівні — рішення перейде на інші критерії (потреба в економії вже цього кварталу).',
            en: 'Expected value = probability weights, not “a bigger chance”. 3.99 ≈ 4.0: expectations are nearly equal — the decision moves to other criteria (the need for savings this very quarter).',
          },
        },
        {
          text: { uk: 'Який критерій обере громаді, яка не переживе сезон без економії?', en: 'Which criterion suits a community that cannot survive a season without the savings?' },
          options: [
            { uk: 'maximin: купити зараз — гарантована економія', en: 'maximin: buy now — guaranteed savings' },
            { uk: 'Очікуване значення — воно трохи краще', en: 'Expected value — it is slightly better' },
            { uk: 'Максимум вигоди за найкращого сценарію', en: 'Maximum gain in the best scenario' },
          ],
          correct: 0,
          why: {
            uk: 'Коли «найгірший випадок» неприйнятний, обирають страховий критерій: гарантія економії вартує 0.01 млн «недоотриманого очікування».',
            en: 'When the “worst case” is unacceptable, choose the insurance criterion: a guaranteed saving is worth 0.01m of “foregone expectation”.',
          },
        },
      ],
    },
    {
      kind: 'sort',
      id: 's1',
      title: { uk: 'Завдання: три майбутніх станції', en: 'Task: three futures of the station' },
      intro: {
        uk: 'Візуальний Монте-Карло: розкладіть показники в діапазони мінімум / очікуване / максимум.',
        en: 'Visual Monte Carlo: place the metrics into min / expected / max ranges.',
      },
      buckets: [
        { uk: 'Мінімум (песиміст)', en: 'Minimum (pessimist)' },
        { uk: 'Очікуване (база)', en: 'Expected (base)' },
        { uk: 'Максимум (оптиміст)', en: 'Maximum (optimist)' },
      ],
      items: [
        {
          text: { uk: 'Сонячних годин: 950 на рік', en: 'Sun hours: 950 a year' },
          bucket: 0,
          why: { uk: 'Хмарний сценарій — нижня межа генер.', en: 'The cloudy scenario — the lower generation bound.' },
        },
        {
          text: { uk: 'Сонячних годин: 1 100 на рік', en: 'Sun hours: 1,100 a year' },
          bucket: 1,
          why: { uk: 'Середньобагаторічна норма регіону.', en: 'The region’s long-term average.' },
        },
        {
          text: { uk: 'Сонячних годин: 1 250 на рік', en: 'Sun hours: 1,250 a year' },
          bucket: 2,
          why: { uk: 'Верхня межа — сонячний цикл.', en: 'The upper bound — a sunny cycle.' },
        },
        {
          text: { uk: 'Ціна панелей: 4.5 млн', en: 'Panel price: 4.5m' },
          bucket: 0,
          why: { uk: 'Подорожчання постачань — песимістична вилка.', en: 'Supply price growth — the pessimistic bracket.' },
        },
        {
          text: { uk: 'Ціна панелей: 4.0 млн', en: 'Panel price: 4.0m' },
          bucket: 1,
          why: { uk: 'Поточна пропозиція — база розрахунку.', en: 'The current offer — the calculation base.' },
        },
        {
          text: { uk: 'Ціна панелей: 3.4 млн', en: 'Panel price: 3.4m' },
          bucket: 2,
          why: { uk: 'Знижки нових постачальників — оптимістична вилка.', en: 'New supplier discounts — the optimistic bracket.' },
        },
      ],
    },
    {
      kind: 'decision',
      id: 'd1',
      title: { uk: 'Рішення: шторм трапився', en: 'Decision: the storm has hit' },
      intro: {
        uk: 'Факт: сонячних годин 950 (мінімум), панелі 4.5 млн, тариф переглянуто. Ваш протокол наперед визначив поріг: якщо генерация нижче 1 000 год — запуск плану Б (гібрид з існуючою мережею, договір уже розроблений). Що робите?',
        en: 'Facts: 950 sun hours (minimum), panels at 4.5m, the tariff revised. Your protocol pre-set the threshold: if generation falls below 1,000 hours — plan B launches (a hybrid with the existing grid, the agreement already drafted). What do you do?',
      },
      options: [
        {
          text: { uk: 'Чекати ще квартал — «можливо, сонце повернеться»', en: 'Wait another quarter — “the sun may come back”' },
          quality: 'poor',
          outcome: {
            uk: 'Економія водоканалу не з’являється, тарифні втрати ростуть, і рада запитує, чому підготовлений план Б лежав без руху. Ставка на погоду — не управлінська стратегія.',
            en: 'The utility’s savings never appear, tariff losses grow, and the council asks why the prepared plan B sat idle. Betting on weather is not a management strategy.',
          },
        },
        {
          text: {
            uk: 'Запускаємо план Б за протоколом: поріг 1 000 год пройдено, гібрид гарантує економію незалежно від погоди',
            en: 'Launch plan B per protocol: the 1,000-hour threshold is breached, the hybrid guarantees savings regardless of weather',
          },
          quality: 'best',
          outcome: {
            uk: 'Гібридний режим стартує за 3 тижні: водоканал економить навіть у хмарний рік, а очікуване розширення панелей відкладене до нормалізації цін. Рішення ухвалене за 20 хвилин — бо критерії і пороги були узгоджені ще за сонця.',
            en: 'The hybrid mode starts in 3 weeks: the utility saves even in a cloudy year, and the expected panel expansion waits for price normalisation. The decision took 20 minutes — because criteria and thresholds were agreed while the sun was still shining.',
          },
        },
        {
          text: { uk: 'Продати станцію — проєкт «не виправдав себе»', en: 'Sell the plant — the project “did not pay off”' },
          quality: 'poor',
          outcome: {
            uk: 'Продаж на дні ринку фіксує збиток назавжди: 4.5 млн перетворюються на 2.8 млн. Актива працює і в песимістичному діапазоні — просто за іншою схемою (гібрид).',
            en: 'Selling at the market bottom locks in the loss forever: 4.5m becomes 2.8m. The asset works even in the pessimistic range — just under another scheme (hybrid).',
          },
        },
      ],
    },
  ],
  debrief: {
    heading: { uk: 'Шторм пройдений за протоколом', en: 'The storm is weathered by protocol' },
    recap: [
      { uk: 'Не ставте все на «базовий сценарій»: моделюйте діапазони (мінімум/очікуване/максимум).', en: 'Never bet on the “base scenario”: model ranges (min/expected/max).' },
      { uk: 'Дерево рішень розділяє ваші вибори і випадок; очікуване значення — це ваги, а не «більший шанс».', en: 'A decision tree separates your choices from chance; expected value is weights, not “a bigger chance”.' },
      { uk: 'Критерії в невизначеності: maximin — страховка, очікуване — економіка, максимум — амбіція.', en: 'Criteria under uncertainty: maximin — insurance, expected value — economics, the maximum — ambition.' },
      { uk: 'Пороги і план Б готують ДО шторму; тоді рішення в шторм — це протокол, а не паніка.', en: 'Thresholds and plan B are prepared BEFORE the storm; then a storm decision is protocol, not panic.' },
    ],
  },
}
