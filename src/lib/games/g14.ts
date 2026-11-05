// ============================================================
// КЕЙС g14 · «Щит громади» — зниження ризиків
// Семінар 14 · Тема 14 · 2 бали на семінарі
// ============================================================

import type { ScenarioDef } from '../scenario'

export const G14: ScenarioDef = {
  id: 'g14',
  badgeId: 'riskmgr',
  effect: { resilience: 4 },
  introKicker: { uk: 'Семінар 14 · Тема 14 · 2 бали на семінарі', en: 'Seminar 14 · Topic 14 · 2 seminar points' },
  title: { uk: '«Щит громади»', en: '“Community Shield”' },
  summary: {
    uk: 'Чотири стратегії реагування — уникнення, зменшення, передача, прийняття — і розподіл резерву.',
    en: 'Four response strategies — avoidance, mitigation, transfer, acceptance — and reserve allocation.',
  },
  durationMin: 20,
  stages: [
    {
      kind: 'brief',
      id: 'b1',
      title: { uk: 'Кейс: резерв тане', en: 'Case: the reserve is melting' },
      blocks: [
        {
          t: 'p',
          text: {
            uk: 'Реєстр ризиків громади нараховує 23 ризики. Команда реагує на кожен однаково: «тримаємо кулаки» — а коли ризик влучає, з’їдає резерв проєкту. За квартал резерв зменшився з 12 % до 3 %. Керівник питає: чому ми платимо за ВСЕ, коли частина ризиків може бути застрахована або взагалі викинута з проєкту?',
            en: 'The community risk register counts 23 risks. The team responds to each the same way: “keep fingers crossed” — and when a risk hits, it eats the project reserve. In a quarter the reserve fell from 12% to 3%. The director asks: why do we pay for EVERYTHING when some risks can be insured or removed from the project altogether?',
          },
        },
        {
          t: 'pc',
          tone: 'orange',
          icon: '⚠',
          label: { uk: 'Основна проблема', en: 'The core problem' },
          text: {
            uk: 'На кожен ризик витрачають або нічого, або резерв: немає логіки вибору стратегії. Результат — подвійний: частина ризиків недоопрацьована (влучають дорого), частина — переплачена (страховки за дрібниці).',
            en: 'Every risk gets either nothing or the reserve: there is no strategy logic. The result is double: some risks are under-treated (they hit expensively), others are over-paid (insurance for trivia).',
          },
        },
        {
          t: 'pc',
          tone: 'amber',
          icon: '⚡',
          label: { uk: 'Суперечність, що створює проблему', en: 'The contradiction behind the problem' },
          text: {
            uk: 'Витрати на реагування сьогодні проти очікуваних втрат потім: перестрахуватись — так само шкідливо для бюджету, як і проігнорувати. Ідеального захисту не існує; існує доцільний.',
            en: 'Response costs today versus expected losses tomorrow: over-insuring harms the budget as much as ignoring. Perfect protection does not exist; sensible protection does.',
          },
        },
        {
          t: 'pc',
          tone: 'green',
          icon: '✅',
          label: { uk: 'Як знімається суперечність', en: 'How the contradiction is resolved' },
          text: {
            uk: 'Правилом чотирьох стратегій + резервом двох рівнів. Для кожного пріоритетного ризику обирають: уникнення (викинути джерело ризику з проєкту), зменшення (знизити ймовірність/вплив), передача (страхування, гарантії, субпідряд), прийняття (моніторити, покрити резервом — якщо втрата дешевша за реагування). Резерв: відомі ризики — у кожному пакеті, невідомі — керований буфер проєкту.',
            en: 'By the four-strategy rule + a two-level reserve. For each priority risk pick: avoidance (remove the source), mitigation (lower probability/impact), transfer (insurance, guarantees, subcontracting), acceptance (monitor, cover by reserve — if the loss is cheaper than the response). Reserve: known risks live in their packages, unknown ones in a managed project buffer.',
          },
        },
        {
          t: 'facts',
          items: [
            { label: { uk: 'Уникнення', en: 'Avoidance' }, value: { uk: 'прибрати джерело ризику з проєкту', en: 'remove the risk source from the project' } },
            { label: { uk: 'Зменшення', en: 'Mitigation' }, value: { uk: 'знизити ймовірність або вплив', en: 'lower the probability or impact' } },
            { label: { uk: 'Передача', en: 'Transfer' }, value: { uk: 'страхування, гарантії, субпідряд', en: 'insurance, guarantees, subcontracting' } },
            { label: { uk: 'Прийняття', en: 'Acceptance' }, value: { uk: 'моніторинг + резерв, якщо це дешевше', en: 'monitoring + reserve if cheaper' } },
          ],
        },
      ],
    },
    {
      kind: 'quiz',
      id: 'q1',
      title: { uk: 'Розминка: стратегії', en: 'Warm-up: strategies' },
      questions: [
        {
          text: { uk: 'Ризик «затримка імпортного котла». Відмова від імпорту на користь наявного на ринку аналога — це…', en: 'The risk of an imported boiler delay. Switching to a locally available analogue is…' },
          options: [
            { uk: 'Уникнення: джерело ризику (імпорт) прибрано з проєкту', en: 'Avoidance: the risk source (imports) is removed from the project' },
            { uk: 'Передача: ризик тепер у постачальника', en: 'Transfer: the risk now belongs to the supplier' },
            { uk: 'Прийняття: робимо як хотіли', en: 'Acceptance: we do as planned' },
          ],
          correct: 0,
          why: {
            uk: 'Уникнення змінює план так, щоб ризик зник, а не зменшився. Зміна постачальника на локального — це прибране джерело.',
            en: 'Avoidance changes the plan so the risk disappears rather than shrinks. Switching to a local supplier removes the source.',
          },
        },
        {
          text: { uk: 'Коли прийняття ризику — розумне рішення?', en: 'When is risk acceptance a sensible decision?' },
          options: [
            { uk: 'Коли вартість реагування перевищує очікувану втрату', en: 'When the cost of response exceeds the expected loss' },
            { uk: 'Коли ризик страшний — приймати легше', en: 'When the risk is scary — accepting is easier' },
            { uk: 'Прийняття завжди неправильно', en: 'Acceptance is always wrong' },
          ],
          correct: 0,
          why: {
            uk: 'Економіка реагування: день простою на 4 бали дешевший за оренду резервної лінії на сезон. Прийняття — свідомий вибір з резервом, а не бездіяльність.',
            en: 'Response economics: a 4-point one-day stoppage is cheaper than a season-long backup line rental. Acceptance is a conscious choice backed by a reserve, not inaction.',
          },
        },
        {
          text: { uk: 'Банківська гарантія підрядника — це стратегія…', en: 'A contractor’s bank guarantee is the strategy of…' },
          options: [
            { uk: 'Передача: ризик авансу перекладають на банк', en: 'Transfer: the advance risk is shifted to a bank' },
            { uk: 'Уникнення', en: 'Avoidance' },
            { uk: 'Зменшення власними силами', en: 'In-house mitigation' },
          ],
          correct: 0,
          why: {
            uk: 'Передача не прибирає ризик — змінює того, хто платить, якщо він влучить. Банк платить замість підрядника.',
            en: 'Transfer does not remove the risk — it changes who pays if it hits. The bank pays instead of the contractor.',
          },
        },
      ],
    },
    {
      kind: 'match',
      id: 'm1',
      title: { uk: 'Завдання: ситуація → стратегія', en: 'Task: situation → strategy' },
      intro: {
        uk: 'Шість ситуацій з проєктів громади. Виберіть доцільну стратегію реагування для кожної.',
        en: 'Six situations from community projects. Pick the sensible response strategy for each.',
      },
      pairs: [
        {
          left: { uk: 'Затримки імпортного котла (4/3)', en: 'Imported boiler delays (4/3)' },
          right: { uk: 'Уникнення: заміна на локальний аналог', en: 'Avoidance: switch to a local analogue' },
          why: { uk: 'Джерело ризику прибирається з проєкту повністю.', en: 'The risk source is removed from the project entirely.' },
        },
        {
          left: { uk: 'Помилка в проєкті димоходу (3/5)', en: 'An error in the chimney design (3/5)' },
          right: { uk: 'Зменшення: технічний нагляд і перевірка проєкту до монтажу', en: 'Mitigation: technical supervision and design review before assembly' },
          why: { uk: 'Ймовірність різко падає за копійки порівняно з переробкою.', en: 'The probability drops sharply for pennies versus rework.' },
        },
        {
          left: { uk: 'Крадіжка будматеріалів з майданчика (3/3)', en: 'Theft of materials from the site (3/3)' },
          right: { uk: 'Передача: страхування матеріалів і охорона за договором', en: 'Transfer: materials insurance and contracted security' },
          why: { uk: 'Страхувальник і ЧОП беруть ризик на себе за фіксовану плату.', en: 'The insurer and security firm take the risk for a fixed fee.' },
        },
        {
          left: { uk: 'Одноденне знеструмлення (2/2)', en: 'A one-day blackout (2/2)' },
          right: { uk: 'Прийняття: день простою покривається графіком', en: 'Acceptance: a one-day stop is absorbed by the schedule' },
          why: { uk: 'Реагування дорожче за втрату — моніторимо і рухаємось далі.', en: 'Response costs more than the loss — monitor and move on.' },
        },
        {
          left: { uk: 'Протест проти димоходу (1/4)', en: 'Protest against the chimney (1/4)' },
          right: { uk: 'Зменшення: ранні громадські обговорення і екскурсія до аналога', en: 'Mitigation: early public hearings and a tour of an analogous site' },
          why: { uk: 'Ймовірність падає майже до нуля за мінімальні гроші.', en: 'Probability drops to nearly zero at minimal cost.' },
        },
        {
          left: { uk: 'Затримка платежу з бюджету (2/2)', en: 'A budget payment delay (2/2)' },
          right: { uk: 'Прийняття: буфер касових розривів у плані фінансування', en: 'Acceptance: a cash-gap buffer in the financing plan' },
          why: { uk: 'Тиждень затримки — звична реальність; резерв дешевший за кредит.', en: 'A week’s delay is normal reality; a buffer is cheaper than a loan.' },
        },
      ],
    },
    {
      kind: 'decision',
      id: 'd1',
      title: { uk: 'Рішення: куди йде резерв 6 %?', en: 'Decision: where does the 6% reserve go?' },
      intro: {
        uk: 'Після чистки реєстру у проєкті лишилися пріоритети: банкрутство підрядника (гарантія покриє), помилка проєкту (нагляд), крадіжка (страхування 0.4 % від вартості матеріалів), касовий розрив (2 % буфер). Як скомпонуєте захист?',
        en: 'After cleaning the register the project has: contractor bankruptcy (a guarantee covers it), design error (supervision), theft (insurance 0.4% of material value), cash gap (a 2% buffer). How do you compose the protection?',
      },
      options: [
        {
          text: { uk: 'Застрахувати все, що можна, і тримати резерв 6 % на верхні ризики', en: 'Insure everything possible and keep the 6% reserve for the top risks' },
          quality: 'poor',
          outcome: {
            uk: 'Страхування дрібниць з’їдає 2.3 % бюджету, і резерв все одно не покриває великий ризик — захист куплено там, де він не потрібен. Перестраховка — та ж помилка, що і бездіяльність.',
            en: 'Insuring trivia eats 2.3% of the budget, and the reserve still fails to cover a big risk — protection bought where it is not needed. Over-insurance is the same mistake as inaction.',
          },
        },
        {
          text: {
            uk: 'Банкова гарантія (обов’язкова в договорі) + нагляд (0.3 %) + страхування матеріалів (0.4 %) + касовий буфер 2 %; решта резерву — керований буфер проєкту',
            en: 'A bank guarantee (mandatory in the contract) + supervision (0.3%) + materials insurance (0.4%) + a 2% cash buffer; the rest of the reserve is a managed project buffer',
          },
          quality: 'best',
          outcome: {
            uk: 'Кожен пріоритетний ризик має власника й інструмент, загальна вартість захисту — 2.7 % замість «стакану кулаків». Керований буфер 3.3 % тримає невідоме. Через рік аудит фіксує: жоден ризик не з’їв графіка.',
            en: 'Every priority risk has an owner and a tool; total protection cost 2.7% instead of “folded fingers”. A 3.3% managed buffer holds the unknown. A year later the audit records: no risk ate the schedule.',
          },
        },
        {
          text: { uk: 'Резерв 6 % тримаємо целиком і нічого не купуємо', en: 'Keep the 6% reserve intact and buy nothing' },
          quality: 'poor',
          outcome: {
            uk: 'Перша ж крадіжка матеріалів (3/3) з’їдає половину буфера, а без гарантії банкрутство підрядника забирає решту разом з авансом. Гроші без інструментів — це не захист, а приманка.',
            en: 'The first theft of materials (3/3) eats half the buffer, and without a guarantee the contractor’s bankruptcy takes the rest together with the advance. Money without tools is not protection — it is bait.',
          },
        },
      ],
    },
  ],
  debrief: {
    heading: { uk: 'Щит зібрано: кожен ризик має інструмент', en: 'The shield is built: every risk has a tool' },
    recap: [
      { uk: 'Чотири стратегії: уникнути, зменшити, передати, прийняти — вибір за економікою, не за настроєм.', en: 'Four strategies: avoid, mitigate, transfer, accept — chosen by economics, not mood.' },
      { uk: 'Передача змінює того, хто платить; прийняття — свідомий вибір з резервом.', en: 'Transfer changes who pays; acceptance is a conscious choice backed by a reserve.' },
      { uk: 'Резерв двох рівнів: відомі ризики в пакетах, невідоме — керований буфер проєкту.', en: 'A two-level reserve: known risks in their packages, the unknown in a managed project buffer.' },
      { uk: 'Перестраховка руйнує бюджет так само, як бездіяльність.', en: 'Over-insurance destroys the budget as surely as inaction.' },
    ],
  },
}
