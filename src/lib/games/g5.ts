// ============================================================
// КЕЙС g5 · «Конкурс проєктів» — критерії прийняття рішень
// Семінар 5 · Тема 5 · 1 бал на семінарі
// ============================================================

import type { ScenarioDef } from '../scenario'

export const G5: ScenarioDef = {
  id: 'g5',
  badgeId: 'finanalyst',
  effect: { budget: 3, trust: 1 },
  introKicker: { uk: 'Семінар 5 · Тема 5 · 1 бал на семінарі', en: 'Seminar 5 · Topic 5 · 1 seminar point' },
  title: { uk: '«Конкурс проєктів»', en: '“Project Competition”' },
  summary: {
    uk: 'Чотири заявки, обмежений бюджет. Порахуйте NPV, порівняйте IRR і окупність — і оберіть портфель.',
    en: 'Four applications, a limited budget. Compute NPV, compare IRR and payback — and pick a portfolio.',
  },
  durationMin: 25,
  stages: [
    {
      kind: 'brief',
      id: 'b1',
      title: { uk: 'Кейс: конкурс «Відбудова Соснівки»', en: 'Case: the “Rebuild Sosnivka” competition' },
      blocks: [
        {
          t: 'p',
          text: {
            uk: 'У місті завершено збір заявок на конкурс проєктів відбудови. Бюджет конкурсу — 7.0 млн грн. Комісія в захваті від презентацій: кожен проєкт «стратегічно важливий». Ваше завдання — перевести захоплення в критерії та назвати портфель, який додає громаді найбільше цінності.',
            en: 'The city has finished collecting applications for the recovery project competition. The competition budget is UAH 7.0m. The panel is impressed by the presentations: every project is “strategically important”. Your job is to turn admiration into criteria and name the portfolio that adds the most value.',
          },
        },
        {
          t: 'facts',
          items: [
            {
              label: { uk: 'Заявка A · Школа', en: 'Application A · School' },
              value: { uk: 'інвест 2.0 млн → NPV +0.6, IRR 28 %, окупність 4 р.', en: 'invest 2.0m → NPV +0.6, IRR 28%, payback 4 yrs' },
            },
            {
              label: { uk: 'Заявка B · Водоканал', en: 'Application B · Water utility' },
              value: { uk: 'інвест 6.0 млн → NPV +1.5, IRR 14 %, окупність 8 р.', en: 'invest 6.0m → NPV +1.5, IRR 14%, payback 8 yrs' },
            },
            {
              label: { uk: 'Заявка C · Паркінг', en: 'Application C · Parking' },
              value: { uk: 'інвест 5.0 млн → NPV +1.2, IRR 19 %, окупність 5 р.', en: 'invest 5.0m → NPV +1.2, IRR 19%, payback 5 yrs' },
            },
            {
              label: { uk: 'Заявка D · Святковий фестиваль', en: 'Application D · Festival' },
              value: { uk: 'інвест 1.0 млн → NPV −0.2, IRR 6 %, окупність —', en: 'invest 1.0m → NPV −0.2, IRR 6%, payback —' },
            },
          ],
        },
        {
          t: 'pc',
          tone: 'orange',
          icon: '⚠',
          label: { uk: 'Основна проблема', en: 'The core problem' },
          text: {
            uk: 'Комісії обирають проєкти за «красою» заявки або за одним зручним показником (найшвидша окупність! найбільший IRR!), а не за вкладом у добробут громади. Результат — гроші йдуть на дрібні ефекти, а великі системні проєкти залишаються без фінансування.',
            en: 'Panels pick projects by the beauty of the application or by one convenient indicator (fastest payback! highest IRR!) rather than by contribution to community welfare. The result — money goes to small effects while large systemic projects go unfunded.',
          },
        },
        {
          t: 'pc',
          tone: 'amber',
          icon: '⚡',
          label: { uk: 'Суперечність, що створює проблему', en: 'The contradiction behind the problem' },
          text: {
            uk: 'Критерії конфліктують між собою: у заявки A найкращий IRR (ефективність на гривню), у B — найбільший NPV (абсолютний приріст цінності), у C — збалансована окупність. Жоден показник не є «головним» сам собою: вибір критерію — вже рішення.',
            en: 'The criteria conflict with each other: application A has the best IRR (efficiency per hryvnia), B the largest NPV (absolute value added), C a balanced payback. No indicator is “the main one” by itself: choosing the criterion is already a decision.',
          },
        },
        {
          t: 'pc',
          tone: 'green',
          icon: '✅',
          label: { uk: 'Як знімається суперечність', en: 'How the contradiction is resolved' },
          text: {
            uk: 'Ієрархією критеріїв. Мета бюджетної програми — максимальний приріст добробуту громади, тому головний критерій — NPV: фінансуємо портфель з максимальним сумарним NPV у межах бюджету. IRR і окупність — допоміжні фільтри: IRR показує запас міцності проти ставки, окупність — чутливість до ризику часу.',
            en: 'By a hierarchy of criteria. The goal of a budget programme is the maximum gain in community welfare, so the main criterion is NPV: fund the portfolio with the maximum total NPV within the budget. IRR and payback are auxiliary filters: IRR shows the margin against the rate, payback the sensitivity to time risk.',
          },
        },
      ],
    },
    {
      kind: 'quiz',
      id: 'q1',
      title: { uk: 'Розминка: три критерії', en: 'Warm-up: three criteria' },
      questions: [
        {
          text: { uk: 'NPV проєкту — це…', en: 'The NPV of a project is…' },
          options: [
            { uk: 'Сума всіх грошей, які проєкт принесе', en: 'The sum of all money the project will bring' },
            { uk: 'Теперішня вартість потоків мінус теперішня вартість інвестицій', en: 'The present value of flows minus the present value of the investment' },
            { uk: 'Прибуток за перший рік', en: 'The profit of the first year' },
          ],
          correct: 1,
          why: {
            uk: 'NPV рахує приріст цінності у сьогоднішніх грошах: приведені доходи мінус приведені витрати. NPV > 0 — проєкт додає цінності.',
            en: 'NPV measures the value gain in today’s money: discounted inflows minus discounted costs. NPV > 0 means the project adds value.',
          },
        },
        {
          text: {
            uk: 'Чому найбільший IRR — не завжди найкращий вибір для громади?',
            en: 'Why is the highest IRR not always the best choice for the community?',
          },
          options: [
            { uk: 'IRR показує відсоток, а не масштаб: маленький проєкт із високим IRR додає менше цінності, ніж великий із помірним', en: 'IRR shows a percentage, not a scale: a small project with a high IRR adds less value than a large one with a moderate one' },
            { uk: 'IRR неможливо порахувати', en: 'IRR cannot be computed' },
            { uk: 'IRR працює лише для бізнесу, не для громади', en: 'IRR only works for business, not for communities' },
          ],
          correct: 0,
          why: {
            uk: 'A: 0.6 млн приросту на 2 млн вкладень (IRR 28 %) — B: 1.5 млн на 6 млн (IRR 14 %). Відсоток проти суми: для добробуту громади важлива сума створеної цінності.',
            en: 'A adds 0.6m per 2m invested (IRR 28%) — B adds 1.5m per 6m (IRR 14%). Percentage versus amount: for community welfare, the amount of value created matters.',
          },
        },
        {
          text: { uk: 'Чим строк окупності поганий як головний критерій?', en: 'Why is the payback period poor as the main criterion?' },
          options: [
            { uk: 'Він ігнорує гроші після строку окупності та не враховує вартість часу', en: 'It ignores money after the payback point and does not account for the time value' },
            { uk: 'Його важко порахувати', en: 'It is hard to compute' },
            { uk: 'Він завжди співпадає з NPV', en: 'It always coincides with NPV' },
          ],
          correct: 0,
          why: {
            uk: 'Окупність «бачить» лише перші роки: довгий водоканал із великим NPV програє короткому фестивалю. Це фільтр ризику часу, а не мірило цінності.',
            en: 'Payback “sees” only the first years: a long-gestation water utility loses to a short festival. It is a time-risk filter, not a measure of value.',
          },
        },
      ],
    },
    {
      kind: 'quiz',
      id: 'q2',
      title: { uk: 'Розрахунок конкурсу', en: 'Calculating the competition' },
      intro: {
        uk: 'Використовуйте таблицю з брифінгу. Два питання-розрахунки — і ранжування.',
        en: 'Use the table from the briefing. Two calculation questions — then the ranking.',
      },
      questions: [
        {
          text: { uk: 'Яка заявка додає громаді найбільше абсолютної цінності (NPV)?', en: 'Which application adds the most absolute value (NPV)?' },
          options: [
            { uk: 'B · Водоканал: NPV +1.5 млн', en: 'B · Water utility: NPV +1.5m' },
            { uk: 'A · Школа: NPV +0.6 млн', en: 'A · School: NPV +0.6m' },
            { uk: 'C · Паркінг: NPV +1.2 млн', en: 'C · Parking: NPV +1.2m' },
          ],
          correct: 0,
          why: { uk: 'B дає найбільший приріст цінності в гривнях — це головний критерій для добробуту громади.', en: 'B adds the largest value gain in hryvnias — the main criterion for community welfare.' },
        },
        {
          text: { uk: 'Яка заявка найефективніша на вкладену гривню (NPV / інвестиції)?', en: 'Which application is the most efficient per hryvnia invested (NPV / investment)?' },
          options: [
            { uk: 'A · Школа: 0.30 гривні NPV на гривню', en: 'A · School: 0.30 hryvnia of NPV per hryvnia' },
            { uk: 'B · Водоканал: 0.25 гривні NPV на гривню', en: 'B · Water utility: 0.25 hryvnia of NPV per hryvnia' },
            { uk: 'C · Паркінг: 0.24 гривні NPV на гривню', en: 'C · Parking: 0.24 hryvnia of NPV per hryvnia' },
          ],
          correct: 0,
          why: { uk: 'A: 0.6/2.0 = 0.30; B: 1.5/6.0 = 0.25; C: 1.2/5.0 = 0.24. Ефективність — про віддачу на гривню, а не про суму.', en: 'A: 0.6/2.0 = 0.30; B: 1.5/6.0 = 0.25; C: 1.2/5.0 = 0.24. Efficiency is about return per hryvnia, not the total.' },
        },
        {
          text: { uk: 'Що робити із заявкою D (фестиваль, NPV −0.2 млн)?', en: 'What to do with application D (festival, NPV −0.2m)?' },
          options: [
            { uk: 'Не фінансувати з конкурсу інвестицій: NPV < 0 означає знецінення коштів', en: 'Do not fund it from the investment competition: NPV < 0 means value destruction' },
            { uk: 'Фінансувати першою — бо швидка окупність', en: 'Fund it first — the payback is fast' },
            { uk: 'Фінансувати половину', en: 'Fund half of it' },
          ],
          correct: 0,
          why: {
            uk: 'Від’ємний NPV — проєкт руйнує цінність. Фестиваль не поганий: він має шукати окремий культурний бюджет, а не конкурувати з інвестиціями.',
            en: 'A negative NPV — the project destroys value. The festival is not bad: it should seek a separate cultural budget, not compete with investments.',
          },
        },
      ],
    },
    {
      kind: 'decision',
      id: 'd1',
      title: { uk: 'Рішення: портфель на 7 млн', en: 'Decision: a portfolio for 7 million' },
      intro: {
        uk: 'Бюджет конкурсу — 7.0 млн. Заявки: A 2.0 млн (NPV +0.6), B 6.0 млн (NPV +1.5), C 5.0 млн (NPV +1.2). Який портфель рекомендуєте комісії?',
        en: 'The competition budget is 7.0m. Applications: A 2.0m (NPV +0.6), B 6.0m (NPV +1.5), C 5.0m (NPV +1.2). Which portfolio do you recommend?',
      },
      options: [
        {
          text: { uk: 'A + C: 7.0 млн, сумарний NPV +1.8 млн', en: 'A + C: 7.0m, total NPV +1.8m' },
          quality: 'poor',
          outcome: {
            uk: 'Портфель вкладається в бюджет і виглядає збалансовано, але сумарний NPV лише 1.8 млн — ви залишили в столі 0.3 млн цінності. «Сбалансованість» — не критерій добробуту.',
            en: 'The portfolio fits the budget and looks balanced, but the total NPV is only 1.8m — you left 0.3m of value on the table. “Balance” is not a welfare criterion.',
          },
        },
        {
          text: { uk: 'A + B: 8.0 млн — і домовитися про додаткові 1.0 млн з обласного бюджету', en: 'A + B: 8.0m — and negotiate 1.0m extra from the regional budget' },
          quality: 'best',
          outcome: {
            uk: 'Сумарний NPV = 2.1 млн — максимум для громади. Ви додаєте заявку на співфінансування з обласної програми (документ уже у вашому досьє). Комісія голосує: критерій один — максимальний NPV у портфелі, і шлях до нього показано.',
            en: 'The total NPV = 2.1m — the community’s maximum. You attach a co-funding request to the regional programme (the document is already in your dossier). The panel votes: one criterion — maximum portfolio NPV, and a shown path to it.',
          },
        },
        {
          text: { uk: 'B: один великий проєкт, NPV +1.5 млн, 1.0 млн резервується', en: 'B: one large project, NPV +1.5m, 1.0m kept as reserve' },
          quality: 'ok',
          outcome: {
            uk: 'Розумно за ризиком (резерв!), але резерв без призначення не працює: за рік його «розтягнуть» на дрібниці. NPV 1.5 проти можливих 2.1 — громаді недодано 0.6 млн цінності.',
            en: 'Sensible on risk (a reserve!), but an unassigned reserve does not work: within a year it gets scattered on trivia. NPV 1.5 versus a possible 2.1 — the community is denied 0.6m of value.',
          },
        },
      ],
    },
  ],
  debrief: {
    heading: { uk: 'Конкурс виграний: портфель із максимальним NPV', en: 'Competition won: the maximum-NPV portfolio' },
    recap: [
      { uk: 'Головний критерій бюджетних програм — NPV портфеля: абсолютний приріст цінності в сьогоднішніх грошах.', en: 'The main criterion of budget programmes is the portfolio NPV: the absolute value gain in today’s money.' },
      { uk: 'IRR — фільтр ефективності й запасу міцності, окупність — фільтр часового ризику; вони допомагають, але не вирішують.', en: 'IRR is an efficiency/margin filter, payback a time-risk filter; they help but do not decide.' },
      { uk: 'Портфель > один проєкт: комбінуйте заявки, щоб максимізувати сумарний NPV у межах бюджету.', en: 'Portfolio beats a single project: combine applications to maximise total NPV within the budget.' },
      { uk: 'NPV < 0 — до відхилення, незалежно від яскравості презентації.', en: 'NPV < 0 — reject, regardless of how bright the presentation is.' },
    ],
  },
}
