// ============================================================
// КЕЙС exam · «Симулятор екзамену» — увесь курс
// Тренування за структурою екзаменаційного білету з самооцінкою
// ============================================================

import type { ScenarioDef } from '../scenario'

export const EXAM: ScenarioDef = {
  id: 'exam',
  badgeId: 'graduate',
  badgeThreshold: 80,
  effect: { trust: 2, resilience: 2 },
  introKicker: { uk: 'Екзамен · Увесь курс · структура білету', en: 'Exam · The whole course · ticket structure' },
  title: { uk: '«Симулятор екзамену»', en: '“Exam Simulator”' },
  summary: {
    uk: 'Білет: два теоретичні питання + практичне завдання + самооцінка відповіді.',
    en: 'A ticket: two theory questions + a practical task + self-assessment.',
  },
  durationMin: 25,
  stages: [
    {
      kind: 'brief',
      id: 'b1',
      title: { uk: 'Як виглядає білет', en: 'What a ticket looks like' },
      blocks: [
        {
          t: 'p',
          text: {
            uk: 'Екзаменаційний білет дисципліни складається з двох теоретичних питань (по 15 балів) і одного практичного завдання (20 балів). Цей симулятор тренує саме структуру відповіді: на екзамені оцінюють не обсяг, а логіку — визначення, класифікація, зв’язки, приклад.',
            en: 'The course exam ticket has two theory questions (15 points each) and one practical task (20 points). This simulator trains the very structure of an answer: the exam grades logic, not volume — definition, classification, links, an example.',
          },
        },
        {
          t: 'list',
          title: { uk: 'Формула сильної відповіді', en: 'The formula of a strong answer' },
          items: [
            { uk: '1. Визначення через ознаки (не «проєкт — це коли…», а «проєкт — діяльність із ознаками…»).', en: '1. A definition through features (not “a project is when…” but “a project is activity with the features…”).' },
            { uk: '2. Класифікація або структура (фази, критерії, стратегії).', en: '2. A classification or structure (phases, criteria, strategies).' },
            { uk: '3. Зв’язки з іншими поняттями курсу.', en: '3. Links to other course concepts.' },
            { uk: '4. Міні-приклад (бажано з громади Соснівки — ви знаєте їх уже десятки).', en: '4. A mini-example (ideally from Sosnivka — you already know dozens).' },
          ],
        },
      ],
    },
    {
      kind: 'quiz',
      id: 'q1',
      title: { uk: 'Білет 1 · Теорія', en: 'Ticket 1 · Theory' },
      intro: {
        uk: 'Оберіть правильну структуру відповіді на кожне теоретичне питання білету.',
        en: 'Pick the right answer structure for each theory question of the ticket.',
      },
      questions: [
        {
          text: { uk: 'Питання 1. «Поняття проєкту та його відмінність від поточної діяльності». Яка відповідь отримає вищий бал?', en: 'Question 1. “The concept of a project and its difference from ongoing activity”. Which answer scores higher?' },
          options: [
            { uk: 'Ознаки проєкту (унікальність, строк, результат) → пари «проєкт/рутина» з прикладами → чому розмежування критичне для бюджету', en: 'Project features (uniqueness, deadline, result) → “project/routine” pairs with examples → why the distinction is critical for the budget' },
            { uk: 'Довге есе про важливість розвитку громади без визначень', en: 'A long essay on the importance of community development without definitions' },
            { uk: 'Одне визначення, скопійоване з підручника', en: 'One definition copied from the textbook' },
          ],
          correct: 0,
          why: {
            uk: 'Формула: ознаки → класифікація з прикладами → значення. Визначення без прикладу — 60 % бала; есе без визначень — 30 %.',
            en: 'The formula: features → classification with examples → significance. A definition without an example earns 60%; an essay without definitions — 30%.',
          },
        },
        {
          text: { uk: 'Питання 2. «Критерії ефективності інвестиційних проєктів». Що обов’язково має містити відповідь?', en: 'Question 2. “Criteria of investment project efficiency”. What must the answer contain?' },
          options: [
            { uk: 'NPV, IRR, строк окупності + ієрархія (NPV головний) + коли критерії конфліктують', en: 'NPV, IRR, payback + the hierarchy (NPV first) + when the criteria conflict' },
            { uk: 'Лише формулу NPV', en: 'Only the NPV formula' },
            { uk: 'Історію економіки України', en: 'The history of Ukraine’s economy' },
          ],
          correct: 0,
          why: {
            uk: 'Перелік критеріїв без ієрархії і конфліктів — це довідник, а не відповідь. Екзаменатор шукає розуміння вибору, а не перелік.',
            en: 'A list of criteria without hierarchy and conflicts is a reference book, not an answer. The examiner looks for understanding of choice, not a list.',
          },
        },
        {
          text: { uk: 'Питання 3. «Стратегії реагування на ризики». Найсильніша відповідь:', en: 'Question 3. “Risk response strategies”. The strongest answer:' },
          options: [
            { uk: 'Чотири стратегії + правило вибору (економіка реагування) + приклад: гарантія авансу після кейсу банкрутства підрядника', en: 'Four strategies + the choice rule (response economics) + an example: an advance guarantee after the contractor bankruptcy case' },
            { uk: 'Перелік чотирьох слів без пояснень', en: 'A list of four words without explanations' },
            { uk: 'Оповідання про складнощі будівництва', en: 'A story about construction hardships' },
          ],
          correct: 0,
          why: {
            uk: 'Стратегії + критерій + живий приклад із курсу — максимальний бал: ви показуєте, що стратегію можна ВИБРАТИ, а не лише назвати.',
            en: 'Strategies + a criterion + a live example from the course — full marks: you show the strategy can be CHOSEN, not only named.',
          },
        },
      ],
    },
    {
      kind: 'decision',
      id: 'pract',
      title: { uk: 'Білет 2 · Практичне завдання', en: 'Ticket 2 · The practical task' },
      intro: {
        uk: 'Кейс білету: «Громада має 5 млн і три заявки: А (2 млн, NPV +0.9), Б (4 млн, NPV +1.6), В (3 млн, NPV +0.4). Сформуйте рішення». Яка відповідь отримає 20 з 20?',
        en: 'The ticket case: “The community has 5m and three applications: A (2m, NPV +0.9), B (4m, NPV +1.6), C (3m, NPV +0.4). Formulate a decision”. Which answer earns 20 of 20?',
      },
      options: [
        {
          text: {
            uk: 'А + В: 5 млн, сумарний NPV +1.3 — бо «обидва вміщаються»',
            en: 'A + C: 5m, total NPV +1.3 — because “both fit”',
          },
          quality: 'ok',
          outcome: {
            uk: 'Робочий портфель, але не оптимальний: Б + частка А через додаткове джерело дає більше. Екзаменатор відзначить відсутність аналізу альтернатив.',
            en: 'A working portfolio, but not optimal: B + a share of A via an extra source yields more. The examiner will note the lack of alternatives analysis.',
          },
        },
        {
          text: {
            uk: 'Б (4 млн, NPV +1.6) + заявка на співфінансування А (2 млн) з обласного фонду → портфель NPV +2.5; якщо фонд відмовить — fallback А + В (+1.3)',
            en: 'B (4m, NPV +1.6) + a co-funding application for A (2m) from the regional fund → portfolio NPV +2.5; if the fund refuses — fallback A + C (+1.3)',
          },
          quality: 'best',
          outcome: {
            uk: 'Головний критерій (максимум NPV) + альтернатива з fallback — це повна відповідь: розрахунок, порівняння портфелів, план на відмову. 20 балів.',
            en: 'The main criterion (maximum NPV) + an alternative with a fallback — a complete answer: a calculation, portfolio comparison, a refusal plan. 20 points.',
          },
        },
        {
          text: {
            uk: 'В — бо дешевше і менше ризик',
            en: 'C — because it is cheaper and less risky',
          },
          quality: 'poor',
          outcome: {
            uk: 'Рішення без розрахунку і критерію: «дешевше» — не критерій добробуту громади. Макс 8 балів.',
            en: 'A decision without calculation and criterion: “cheaper” is not a welfare criterion. 8 points max.',
          },
        },
      ],
    },
    {
      kind: 'reflect',
      id: 'self',
      title: { uk: 'Білет 3 · Самооцінка', en: 'Ticket 3 · Self-assessment' },
      intro: {
        uk: 'Останній крок тренування: чесно оцініть свою готовність — це покаже, що повторити перед екзаменом.',
        en: 'The last step of the rehearsal: honestly assess your readiness — it shows what to revise before the exam.',
      },
      items: [
        {
          text: { uk: 'Я можу викласти формулу сильної відповіді (ознаки → структура → зв’язки → приклад) без підказок', en: 'I can state the strong-answer formula (features → structure → links → example) without hints' },
          options: [
            { uk: 'Так, впевнено', en: 'Yes, confidently' },
            { uk: 'Скоріше так, але похитаю', en: 'Rather yes, but shakily' },
            { uk: 'Ні, треба повторити', en: 'No, needs revision' },
          ],
          insight: {
            uk: 'Ця формула працює на будь-якому питанні білету: прогоніть неї кожну відповідь на репетиції.',
            en: 'This formula works on any ticket question: run every answer through it at rehearsal.',
          },
        },
        {
          text: { uk: 'Я можу за 5 хвилин порахувати очікуване значення простого дерева рішень', en: 'I can compute the expected value of a simple decision tree in 5 minutes' },
          options: [
            { uk: 'Так', en: 'Yes' },
            { uk: 'З формулами під рукою', en: 'With formulas at hand' },
            { uk: 'Ні', en: 'No' },
          ],
          insight: {
            uk: 'Практичне завдання зазвичай містить одне дерево або NPV-порівняння: один тренувальний прогін у тиждень тримає навик.',
            en: 'The practical task usually contains one tree or an NPV comparison: one practice run a week keeps the skill.',
          },
        },
        {
          text: { uk: 'Я можу навести приклад із громади Соснівки до кожного розділу курсу', en: 'I can give a Sosnivka community example for every course section' },
          options: [
            { uk: 'Так — кейси запам’ятались', en: 'Yes — the cases stuck' },
            { uk: 'Для половини розділів', en: 'For half the sections' },
            { uk: 'Поки слабко', en: 'Not yet' },
          ],
          insight: {
            uk: 'Приклади з кейсів — найшвидший спосіб набрати бали: вони показують розуміння, а не запам’ятовування.',
            en: 'Case examples are the fastest way to score: they show understanding, not memorisation.',
          },
        },
      ],
    },
  ],
  debrief: {
    heading: { uk: 'Ви готові до білету', en: 'You are ready for the ticket' },
    recap: [
      { uk: 'Структура відповіді: ознаки/визначення → класифікація → зв’язки → приклад із громади.', en: 'Answer structure: features/definition → classification → links → a community example.' },
      { uk: 'Практичне завдання: критерій + розрахунок + порівняння портфелів + fallback.', en: 'The practical task: a criterion + a calculation + portfolio comparison + a fallback.' },
      { uk: 'Самооцінка з «ні» або «похитаю» — це ваш список повторення на тиждень.', en: 'Any “no” or “shakily” in self-assessment is your one-week revision list.' },
    ],
  },
}
