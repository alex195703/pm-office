// ============================================================
// КЕЙС g3 · «Ваги громади» — цінність та ефективність проєкту
// Семінар 3 · Тема 3 · 1 бал на семінарі
// ============================================================

import type { ScenarioDef } from '../scenario'

export const G3: ScenarioDef = {
  id: 'g3',
  badgeId: 'scales',
  effect: { trust: 2, budget: 3 },
  perfectEffect: { wellbeing: 1 },
  introKicker: { uk: 'Семінар 3 · Тема 3 · 1 бал на семінарі', en: 'Seminar 3 · Topic 3 · 1 seminar point' },
  title: { uk: '«Ваги громади»', en: '“Community Scales”' },
  summary: {
    uk: 'Два проєкти, один бюджет. Зважте явні й неявні вигоди та витрати — і захистіть рішення.',
    en: 'Two projects, one budget. Weigh explicit and implicit benefits and costs — and defend the choice.',
  },
  durationMin: 20,
  stages: [
    {
      kind: 'brief',
      id: 'b1',
      title: { uk: 'Кейс: 5 мільйонів — на що?', en: 'Case: 5 million — on what?' },
      blocks: [
        {
          t: 'p',
          text: {
            uk: 'У громаді залишився 5 млн грн до кінця року. Департамент пропонує два варіанти: сучасний дитячий майданчик у центрі (видно з вікна депутацької приймальні) або водовідведення на вулиці Зарічній, де щовесини підтоплює 40 дворів. Раді «подобається» майданчик. Вам — доводити цифри.',
            en: 'The community has UAH 5 million left this year. The department offers two options: a modern playground downtown (visible from the councillors’ office) or storm drainage on Zarichna street, where 40 yards flood every spring. The council “likes” the playground. You have to argue with numbers.',
          },
        },
        {
          t: 'pc',
          tone: 'orange',
          icon: '⚠',
          label: { uk: 'Основна проблема', en: 'The core problem' },
          text: {
            uk: 'Бюджетні рішення ухвалюють за тим, що легко порахувати і легко показати. Через це громада роками купує «красиве» замість «важливого»: майданчик відкривають з фото, а підтоплені двори продовжують хворіти і терпіти збитки.',
            en: 'Budget decisions follow what is easy to count and easy to show. So communities keep buying “pretty” instead of “important”: playgrounds open with photos, while flooded yards keep getting sick and losing money.',
          },
        },
        {
          t: 'pc',
          tone: 'amber',
          icon: '⚡',
          label: { uk: 'Суперечність, що створює проблему', en: 'The contradiction behind the problem' },
          text: {
            uk: 'Вимірюване проти значущого: гроші рахуються в гривнях, а довіра, здоров’я і час мешканців — ні. Політичний цикл хоче результатів «с today», економічна логіка — найбільшої повної цінності, частина якої невидима.',
            en: 'The measurable versus the meaningful: money counts in hryvnias, while trust, health and residents’ time do not. The political cycle wants results “by today”, economic logic wants the greatest total value — part of which is invisible.',
          },
        },
        {
          t: 'pc',
          tone: 'green',
          icon: '✅',
          label: { uk: 'Як знімається суперечність', en: 'How the contradiction is resolved' },
          text: {
            uk: 'Повною економічною оцінкою: на терези кладуть і явні, і неявні вигоди та витрати. Те, що монетизується (вартість відновлення підтоплених будинків, лікування, час на дорогу), переводимо в гривні; те, що не монетизується, — в оцінку впливу з поясненням. Рішення захищається повною картиною, а не яскравою обгорткою.',
            en: 'By full economic evaluation: both explicit and implicit benefits and costs go on the scales. What can be monetised (repair of flooded homes, treatment, travel time) is converted into hryvnias; what cannot — into an impact assessment with explanation. The decision is defended with the full picture, not a bright wrapper.',
          },
        },
        {
          t: 'list',
          title: { uk: 'Теорія теми в чотирьох рядках', en: 'The topic theory in four lines' },
          items: [
            { uk: 'Цінність проєкту = повні вигоди − повні витрати, явні та неявні.', en: 'Project value = total benefits − total costs, explicit and implicit.' },
            { uk: 'Ефективність — відношення результату до витрат; результативність — факт досягнення мети.', en: 'Efficiency is the result-to-cost ratio; effectiveness is meeting the goal.' },
            { uk: 'Альтернативні витрати — цінність найкращої відхиленої альтернативи.', en: 'Opportunity cost is the value of the best rejected alternative.' },
            { uk: 'Неявні ефекти (довіра, здоров’я, час) часто переважають явні — їх не можна просто ігнорувати.', en: 'Implicit effects (trust, health, time) often outweigh explicit ones — they cannot just be ignored.' },
          ],
        },
      ],
    },
    {
      kind: 'quiz',
      id: 'q1',
      title: { uk: 'Розминка: цінність і ефективність', en: 'Warm-up: value and efficiency' },
      questions: [
        {
          text: {
            uk: 'Проєкт виконано в строк і в бюджеті, але відвідувачів у відновленому центрі нема. Це — проблема…',
            en: 'The project was on time and on budget, but the restored centre has no visitors. This is a problem of…',
          },
          options: [
            { uk: 'Ефективності', en: 'Efficiency' },
            { uk: 'Результативності — мети досягли, а цінності не створили', en: 'Effectiveness — the goal was met, but no value was created' },
            { uk: 'Управління строками', en: 'Schedule management' },
          ],
          correct: 1,
          why: {
            uk: 'Формально мету виконано (центр відкрито) — тому це не про строки. Але цінність для користувачів не виникла: відновили будівлю, а не причину, чому люди туди підуть.',
            en: 'Formally the goal was met (the centre opened) — so it is not about schedules. But no value emerged for users: they restored a building, not the reason people would come.',
          },
        },
        {
          text: {
            uk: 'Що з переліченого є НЕявною (прихованою) витратою проєкту?',
            en: 'Which of these is an IMPLICIT (hidden) cost of a project?',
          },
          options: [
            { uk: 'Оплата матеріалів за рахунком', en: 'Payment for materials by invoice' },
            { uk: 'Зарплата підрядника', en: 'The contractor’s fee' },
            { uk: 'Час мешканців, витрачений на обходні маршрути під час робіт', en: 'Residents’ time spent on detours during the works' },
          ],
          correct: 2,
          why: {
            uk: 'Рахунки — явні витрати. Час і незручності людей у договорі не стоять, але громада їх реально платить — це неявна витрата.',
            en: 'Invoices are explicit costs. People’s time and inconvenience are in no contract, but the community really pays them — an implicit cost.',
          },
        },
        {
          text: {
            uk: 'Чому «майданчик видно з вікна» — не аргумент для бюджетного рішення?',
            en: 'Why is “the playground is visible from the window” not a budget argument?',
          },
          options: [
            { uk: 'Бо бюджетні рішення порівнюють повну цінність альтернатив, а не їхню помітність', en: 'Because budget decisions compare the total value of alternatives, not their visibility' },
            { uk: 'Бо майданчики не будують у центрі', en: 'Because playgrounds are not built downtown' },
            { uk: 'Такий аргумент валідний — депутати і є замовниками', en: 'The argument is valid — the councillors are the customers' },
          ],
          correct: 0,
          why: {
            uk: 'Помітність — властивість PR, а не цінності. Класична пастка: яскраве «явне» витісняє невидиме, але важливіше.',
            en: 'Visibility is a property of PR, not of value. A classic trap: the bright “explicit” crowds out the invisible but more important.',
          },
        },
      ],
    },
    {
      kind: 'sort',
      id: 's1',
      title: { uk: 'Завдання: чотири шальки терезів', en: 'Task: four pans of the scales' },
      intro: {
        uk: 'Вісім ефектів проєкту «Водовідведення на Зарічній». Визначте кожен: явний чи неявний, вигода чи витрата.',
        en: 'Eight effects of the “Zarichna drainage” project. For each: explicit or implicit, benefit or cost?',
      },
      buckets: [
        { uk: 'Явні вигоди', en: 'Explicit benefits' },
        { uk: 'Неявні вигоди', en: 'Implicit benefits' },
        { uk: 'Явні витрати', en: 'Explicit costs' },
        { uk: 'Неявні витрати', en: 'Implicit costs' },
      ],
      bucketHint: [
        { uk: 'видимі «+» у грошах', en: 'visible “+” in money' },
        { uk: 'невидимі «+»', en: 'invisible “+”' },
        { uk: 'видимі «−» у грошах', en: 'visible “−” in money' },
        { uk: 'невидимі «−»', en: 'invisible “−”' },
      ],
      items: [
        {
          text: { uk: 'Договірна вартість будівництва колектора', en: 'The contract price of building the collector' },
          bucket: 2,
          why: { uk: 'Прямі гроші з бюджету за документами — явна витрата.', en: 'Direct budget money under documents — an explicit cost.' },
        },
        {
          text: {
            uk: 'Скасовані щорічні витрати на відкачування води з підтоплених дворів',
            en: 'Cancelled annual costs of pumping water out of flooded yards',
          },
          bucket: 0,
          why: { uk: 'Економія фіксується в бюджеті грошима — явна вигода.', en: 'The saving is recorded in the budget in money — an explicit benefit.' },
        },
        {
          text: { uk: 'Зменшення хвороб у дітей з підтоплених дворів', en: 'Fewer illnesses among children from flooded yards' },
          bucket: 1,
          why: { uk: 'Ефект здоров’ю прямих гривень не дає, але цінність реальна — неявна вигода.', en: 'The health effect yields no direct hryvnias, but the value is real — an implicit benefit.' },
        },
        {
          text: { uk: 'Вартість проєктування та геологічних вишукувань', en: 'The cost of design and geological surveys' },
          bucket: 2,
          why: { uk: 'Оплачується договором — явна витрата.', en: 'Paid under contract — an explicit cost.' },
        },
        {
          text: { uk: 'Ріст довіри до ради після розв’язання багаторічної проблеми', en: 'Growing trust in the council after solving a years-long problem' },
          bucket: 1,
          why: { uk: 'Довіра не має ціни у кошторисі, але визначає майбутні проєкти — неявна вигода.', en: 'Trust has no line in the estimate but determines future projects — an implicit benefit.' },
        },
        {
          text: {
            uk: 'Пів року незручностей: розкопана вулиця й обходні маршрути',
            en: 'Six months of inconvenience: a dug-up street and detours',
          },
          bucket: 3,
          why: { uk: 'Час і нерви мешканців ніхто не рахує у кошторисі, але це реальна плата — неявна витрата.', en: 'No one puts residents’ time and nerves in the estimate, but it is a real payment — an implicit cost.' },
        },
        {
          text: { uk: 'Ріст вартості нерухомості на Зарічній без ризику підтоплення', en: 'Higher property values on Zarichna with no flood risk' },
          bucket: 1,
          why: { uk: 'Цінність виникає у мешканців, а не в бюджеті — неявна вигода громади.', en: 'The value accrues to residents, not the budget — an implicit community benefit.' },
        },
        {
          text: { uk: 'Оплата послуг технічного нагляду', en: 'Payment for technical supervision services' },
          bucket: 2,
          why: { uk: 'Договірний платіж — явна витрата.', en: 'A contractual payment — an explicit cost.' },
        },
      ],
    },
    {
      kind: 'match',
      id: 'm1',
      title: { uk: 'Завдання: покажіть значення', en: 'Task: match the meanings' },
      intro: { uk: 'Співвіднесіть кожне поняття теми з його визначенням.', en: 'Match each concept of the topic with its definition.' },
      pairs: [
        {
          left: { uk: 'Ефективність', en: 'Efficiency' },
          right: { uk: 'Відношення отриманого результату до витрат на нього', en: 'The ratio of the achieved result to the costs incurred' },
          why: { uk: 'Скільки цінності на кожну вкладену гривню.', en: 'How much value per hryvnia invested.' },
        },
        {
          left: { uk: 'Результативність', en: 'Effectiveness' },
          right: { uk: 'Факт досягнення поставленої мети проєкту', en: 'The fact of achieving the project’s stated goal' },
          why: { uk: 'Чи досягли того, що намагалися — незалежно від витрат.', en: 'Whether you got what you aimed at — regardless of cost.' },
        },
        {
          left: { uk: 'Альтернативні витрати', en: 'Opportunity cost' },
          right: { uk: 'Цінність найкращої з відхилених альтернатив', en: 'The value of the best rejected alternative' },
          why: { uk: 'Обираючи майданчик, громада «платить» цінністю водовідведення.', en: 'Choosing the playground, the community “pays” the value of the drainage.' },
        },
        {
          left: { uk: 'Повна економічна оцінка', en: 'Full economic evaluation' },
          right: { uk: 'Облік і явних, і неявних вигод та витрат альтернатив', en: 'Accounting for both explicit and implicit benefits and costs of alternatives' },
          why: { uk: 'Тільки повна картина дозволяє чесно порівняти проєкти.', en: 'Only the full picture allows an honest comparison of projects.' },
        },
      ],
    },
    {
      kind: 'decision',
      id: 'd1',
      title: { uk: 'Рішення: захистіть пропозицію перед радою', en: 'Decision: defend the proposal before the council' },
      intro: {
        uk: 'Сесія через тиждень. Ваш розрахунок: майданчик — 5 млн явних витрат, вигоди переважно неявні й локальні; водовідведення — 4.8 млн, щорічна економія 0.9 млн, зниження хвороб, ріст вартості 40 домогосподарств. Яку пропозицію кладете на стіл?',
        en: 'The session is in a week. Your calculation: the playground — UAH 5m explicit costs, mostly implicit local benefits; the drainage — UAH 4.8m, annual savings of 0.9m, fewer illnesses, higher value of 40 households. Which proposal goes on the table?',
      },
      options: [
        {
          text: { uk: 'Майданчик: його люблять депутати, а це теж ресурс', en: 'The playground: the councillors love it, and that is a resource too' },
          quality: 'poor',
          outcome: {
            uk: 'Проєкт пройде легко, але наступної весни 40 дворів знову підтопить, а економії 0.9 млн не буде. Повна оцінка, яку ви мали, захистити рішення вже не допоможе: цифри проти вас.',
            en: 'The project will pass easily, but next spring 40 yards flood again and the 0.9m saving is lost. The full evaluation you have can no longer defend the decision: the numbers are against you.',
          },
        },
        {
          text: {
            uk: 'Водовідведення: досьє з явними й неявними ефектами + план інформування мешканців',
            en: 'The drainage: a dossier of explicit and implicit effects + a resident information plan',
          },
          quality: 'best',
          outcome: {
            uk: 'Ви показуєте раді повні терези: 0.9 млн щорічної економії окуплять проєкт за шість років, а неявні ефекти (здоров’я, вартість домогосподарств, довіра) — бонус. Депутати голосують, бо рішення легко захистити виборцям цифрами, а не емоціями.',
            en: 'You show the council the full scales: 0.9m in annual savings repays the project in six years, and the implicit effects (health, household value, trust) are a bonus. The councillors vote yes, because the decision is easy to defend to voters with numbers, not emotions.',
          },
        },
        {
          text: { uk: 'Поділити 5 млн навпіл — «щоб усі були задоволені»', en: 'Split the 5m in half — “so everyone is happy”' },
          quality: 'poor',
          outcome: {
            uk: 'За 2.4 млн водовідведення не будується (потрібен повний колектор), майданчик виходить мінімальним. Громада отримує два незавершених результати замість однієї цінності — класичний наслідок рішення без оцінки.',
            en: 'For 2.4m the drainage is not built (a full collector is needed) and the playground is minimal. The community gets two unfinished results instead of one value — a classic outcome of a decision without evaluation.',
          },
        },
      ],
    },
  ],
  debrief: {
    heading: { uk: 'Терези громади — у вашому кабінеті', en: 'The community scales are on your desk' },
    recap: [
      { uk: 'Порівнюйте повну цінність: явні + неявні вигоди мінус явні + неявні витрати.', en: 'Compare total value: explicit + implicit benefits minus explicit + implicit costs.' },
      { uk: 'Ефективність — це «скільки цінності за гривню», результативність — «чи досягли мети».', en: 'Efficiency is “how much value per hryvnia”; effectiveness is “did we meet the goal”.' },
      { uk: 'Помітність проєкту — не аргумент; аргумент — повна оцінка, яку можна пояснити виборцям.', en: 'A project’s visibility is not an argument; the argument is a full evaluation you can explain to voters.' },
      { uk: 'Не монетизовані ефекти не ігнорують — їх оцінюють якісно і показують окремо.', en: 'Non-monetised effects are not ignored — they are assessed qualitatively and shown separately.' },
    ],
  },
}
