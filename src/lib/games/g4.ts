// ============================================================
// КЕЙС g4 · «Дисконт-дуель» — вартість грошей у часі
// Семінар 4 · Тема 4 · 1 бал на семінарі
// ============================================================

import type { ScenarioDef } from '../scenario'

export const G4: ScenarioDef = {
  id: 'g4',
  badgeId: 'finanalyst',
  effect: { budget: 3, resilience: 1 },
  introKicker: { uk: 'Семінар 4 · Тема 4 · 1 бал на семінарі', en: 'Seminar 4 · Topic 4 · 1 seminar point' },
  title: { uk: '«Дисконт-дуель»', en: '“Discount Duel”' },
  summary: {
    uk: 'Донор пропонує гроші зараз або більше — але потім. Навчіться порівнювати гривні різних років.',
    en: 'A donor offers money now or more later. Learn to compare hryvnias of different years.',
  },
  durationMin: 20,
  stages: [
    {
      kind: 'brief',
      id: 'b1',
      title: { uk: 'Кейс: пропозиція, від якої «не відмовляються»', en: 'Case: an offer you “do not refuse”' },
      blocks: [
        {
          t: 'p',
          text: {
            uk: 'Донорська програма пропонує Соснівці варіанти фінансування енергостійкості: варіант А — 3.0 млн грн зараз; варіант Б — 3.6 млн грн трьома траншами по 1.2 млн: зараз, через рік і через два роки. Голова ради вже готова подякувати за «більшу суму». Ви просите паузу на калькуляцію.',
            en: 'A donor programme offers Sosnivka two options for energy-resilience funding: option A — UAH 3.0m now; option B — UAH 3.6m in three instalments of 1.2m: now, in a year and in two years. The council chair is ready to say thanks for the “bigger amount”. You ask for a pause to calculate.',
          },
        },
        {
          t: 'pc',
          tone: 'orange',
          icon: '⚠',
          label: { uk: 'Основна проблема', en: 'The core problem' },
          text: {
            uk: 'Гривні різних років додають як однакові: 1.2 + 1.2 + 1.2 = 3.6 «більше», тому рішення ухвалюють емоційно. Насправді гривня сьогодні і гривня за два роки — різні гроші, і «більша» сума може виявитися меншою за цінністю.',
            en: 'Hryvnias of different years are added as if equal: 1.2 + 1.2 + 1.2 = 3.6 “more”, so decisions are made emotionally. In fact a hryvnia today and a hryvnia in two years are different money, and the “bigger” amount may be worth less.',
          },
        },
        {
          t: 'pc',
          tone: 'amber',
          icon: '⚡',
          label: { uk: 'Суперечність, що створює проблему', en: 'The contradiction behind the problem' },
          text: {
            uk: 'Бухгалтерський облік додає номінали, а економічне життя знецінює майбутнє: інфляція «з’їдає» купівельну спроможність, ризик робить обіцянки ненадійними, а вільні кошти зараз можна вкласти з доходом. Додати «прості цифри» зручно — але неправильно.',
            en: 'Accounting adds nominal figures, while economic life devalues the future: inflation eats purchasing power, risk makes promises unreliable, and free funds today can be invested at a return. Adding “plain numbers” is convenient — but wrong.',
          },
        },
        {
          t: 'pc',
          tone: 'green',
          icon: '✅',
          label: { uk: 'Як знімається суперечність', en: 'How the contradiction is resolved' },
          text: {
            uk: 'Приведенням сум до одного моменту часу. Компаундування рухає гроші вперед (1.2 × 1.1² = 1.452), дисконтування — назад (1.2 / 1.1² = 0.992). У ставку закладають інфляційну премію і ризик. Порівнювати можна лише суми в одному пункті часової осі — тоді вибір стає технічним, а не емоційним.',
            en: 'By bringing amounts to one point in time. Compounding moves money forward (1.2 × 1.1² = 1.452), discounting — backward (1.2 / 1.1² = 0.992). The rate embeds an inflation premium and risk. Only amounts at one point on the time axis can be compared — then the choice becomes technical, not emotional.',
          },
        },
        {
          t: 'facts',
          items: [
            {
              label: { uk: 'Компаундування', en: 'Compounding' },
              value: { uk: 'FV = PV × (1+r)ⁿ — вперед', en: 'FV = PV × (1+r)ⁿ — forward' },
            },
            {
              label: { uk: 'Дисконтування', en: 'Discounting' },
              value: { uk: 'PV = FV / (1+r)ⁿ — назад', en: 'PV = FV / (1+r)ⁿ — backward' },
            },
            {
              label: { uk: 'Ставка r', en: 'The rate r' },
              value: { uk: 'ціна часу + інфляція + ризик', en: 'price of time + inflation + risk' },
            },
          ],
        },
      ],
    },
    {
      kind: 'quiz',
      id: 'q1',
      title: { uk: 'Розминка: чому час — це гроші', en: 'Warm-up: why time is money' },
      questions: [
        {
          text: { uk: 'Гривня сьогодні дорожча за гривню через рік, бо…', en: 'A hryvnia today is worth more than a hryvnia in a year because…' },
          options: [
            { uk: 'Сьогоднішню можна вкласти, інфляція знижує майбутню купівельну спроможність, а майбутнє надходження — ризиковане', en: 'Today’s can be invested, inflation erodes future purchasing power, and a future receipt is risky' },
            { uk: 'Так заведено у фінансах, це умовність', en: 'That is the convention in finance, an assumption' },
            { uk: 'Гривня через рік буде іншої валюти', en: 'In a year the hryvnia will be another currency' },
          ],
          correct: 0,
          why: {
            uk: 'Три причини вартості грошей у часі: можливість альтернативного доходу, інфляція, ризик неполучення. Усі три — реальні економічні сили, а не конвенції.',
            en: 'Three reasons for the time value of money: the opportunity for alternative income, inflation, and the risk of non-receipt. All three are real economic forces, not conventions.',
          },
        },
        {
          text: { uk: 'Дисконтування — це…', en: 'Discounting is…' },
          options: [
            { uk: 'Знижка від постачальника', en: 'A supplier discount' },
            { uk: 'Приведення майбутньої суми до її вартості сьогодні', en: 'Bringing a future amount back to its value today' },
            { uk: 'Нарощення суми відсотками', en: 'Growing an amount with interest' },
          ],
          correct: 1,
          why: {
            uk: 'Дисконтування = рух назад часовою віссю: «скільки ця майбутня сума варта зараз?». Нарощення вперед — це компаундування.',
            en: 'Discounting = moving backward on the time axis: “what is this future amount worth now?”. Growing forward is compounding.',
          },
        },
        {
          text: { uk: 'Що робить із майбутніми сумами більша ставка дисконту?', en: 'What does a higher discount rate do to future amounts?' },
          options: [
            { uk: 'Робить їхню теперішню вартість меншою', en: 'Makes their present value smaller' },
            { uk: 'Нічого, ставка лише для банків', en: 'Nothing, the rate is only for banks' },
            { uk: 'Робить їхню теперішню вартість більшою', en: 'Makes their present value bigger' },
          ],
          correct: 0,
          why: {
            uk: 'Чим більша ставка, тим сильніше «стискаються» далекі суми: 1.2/1.1² = 0.992, але 1.2/1.2² = 0.833. Висока ставка = велика ціна очікування.',
            en: 'The higher the rate, the harder distant amounts are squeezed: 1.2/1.1² = 0.992, but 1.2/1.2² = 0.833. A high rate = a high price of waiting.',
          },
        },
      ],
    },
    {
      kind: 'quiz',
      id: 'q2',
      title: { uk: 'Дуель калькуляцій', en: 'The calculation duel' },
      intro: {
        uk: 'Ставка дисконту — 10 % на рік. Порахуйте в думці: числа обрані округлими. За кожну відповідь — 5 XP.',
        en: 'The discount rate is 10% a year. Do the math in your head: the numbers are rounded. 5 XP per answer.',
      },
      questions: [
        {
          text: { uk: 'Яка майбутня вартість 1.0 млн грн через 2 роки при 10 % річних?', en: 'What is the future value of UAH 1.0m in 2 years at 10% p.a.?' },
          options: [{ uk: '1.21 млн', en: '1.21m' }, { uk: '1.10 млн', en: '1.10m' }, { uk: '1.44 млн', en: '1.44m' }],
          correct: 0,
          why: { uk: '1.0 × 1.1 × 1.1 = 1.21 млн. Компаундування множить, а не додає.', en: '1.0 × 1.1 × 1.1 = 1.21m. Compounding multiplies, it does not add.' },
        },
        {
          text: { uk: 'Скільки сьогодні вартий обіцяний через 2 роки транш 1.21 млн при 10 %?', en: 'How much is a promised UAH 1.21m in 2 years worth today at 10%?' },
          options: [{ uk: '1.00 млн', en: '1.00m' }, { uk: '1.08 млн', en: '1.08m' }, { uk: '0.98 млн', en: '0.98m' }],
          correct: 0,
          why: { uk: '1.21 / 1.21 = 1.00 млн. Дисконтування — дзеркало компаундування.', en: '1.21 / 1.21 = 1.00m. Discounting is the mirror of compounding.' },
        },
        {
          text: { uk: 'Що цінніше при ставці 10 %: 2.0 млн зараз чи 2.42 млн через 2 роки?', en: 'At a 10% rate, which is worth more: 2.0m now or 2.42m in 2 years?' },
          options: [
            { uk: 'Вони рівноцінні: 2.42 / 1.21 = 2.0', en: 'They are equal: 2.42 / 1.21 = 2.0' },
            { uk: '2.42 млн через 2 роки', en: '2.42m in 2 years' },
            { uk: '2.0 млн зараз', en: '2.0m now' },
          ],
          correct: 0,
          why: {
            uk: 'PV(2.42) = 2.00 млн — еквівалент. Рішення тоді ухвалюють поза грошима: за ризиком, потребою в ліквідності, строками. Саме так «дисконт-дуель» вчить бачити справжні критерії.',
            en: 'PV(2.42) = 2.00m — equivalent. The decision is then made on other grounds: risk, liquidity needs, timing. That is how the “discount duel” teaches you to see the real criteria.',
          },
        },
      ],
    },
    {
      kind: 'match',
      id: 'm1',
      title: { uk: 'Завдання: термінологія часу', en: 'Task: the terminology of time' },
      intro: {
        uk: 'Чотири поняття теми — зведіть кожне з його визначенням.',
        en: 'Four concepts of the topic — match each with its definition.',
      },
      pairs: [
        {
          left: { uk: 'Компаундування', en: 'Compounding' },
          right: { uk: 'Нарощення теперішньої суми відсотками до майбутньої вартості', en: 'Growing a present amount with interest to its future value' },
        },
        {
          left: { uk: 'Дисконтування', en: 'Discounting' },
          right: { uk: 'Приведення майбутньої суми до теперішньої вартості', en: 'Reducing a future amount to its present value' },
        },
        {
          left: { uk: 'Ставка дисконту', en: 'Discount rate' },
          right: { uk: 'Ціна часу: дохідність альтернативи + інфляція + премія за ризик', en: 'The price of time: alternative return + inflation + risk premium' },
        },
        {
          left: { uk: 'Інфляційна премія', en: 'Inflation premium' },
          right: { uk: 'Частина ставки, що компенсує втрату купівельної спроможності', en: 'The part of the rate compensating for lost purchasing power' },
        },
      ],
    },
    {
      kind: 'decision',
      id: 'd1',
      title: { uk: 'Рішення: що підписуєте?', en: 'Decision: what do you sign?' },
      intro: {
        uk: 'Ваш розрахунок: PV варіанта Б = 1.2 + 1.2/1.1 + 1.2/1.21 = 1.20 + 1.09 + 0.99 = 3.28 млн. PV варіанта А = 3.0 млн. Але: генератори потрібні вже до зими (2 місяці), а саме ранній старт дає економію на дизелі.',
        en: 'Your calculation: PV of option B = 1.2 + 1.2/1.1 + 1.2/1.21 = 1.20 + 1.09 + 0.99 = 3.28m. PV of option A = 3.0m. But: the generators are needed before winter (2 months), and the early start is what saves on diesel.',
      },
      options: [
        {
          text: { uk: 'Варіант Б: PV вищий на 0.28 млн, підписуємо', en: 'Option B: the PV is 0.28m higher, we sign' },
          quality: 'ok',
          outcome: {
            uk: 'Рішення рахує гроші правильно, але ігнорує строк: до зими встигнете лише перший транш. Дизельний тимчасовий генератор з’їсть 0.35 млн за сезон — вся вигода від PV піде на паливо. Формально виграшно, фактично — у мінусі.',
            en: 'The decision counts money correctly but ignores timing: only the first instalment arrives before winter. A temporary diesel generator burns 0.35m over the season — the whole PV gain goes into fuel. Formally a win, effectively a loss.',
          },
        },
        {
          text: {
            uk: 'Варіант А: різниця PV (0.28 млн) менша за втрати від зими без генераторів (0.35 млн)',
            en: 'Option A: the PV gap (0.28m) is smaller than the loss of a winter without generators (0.35m)',
          },
          quality: 'best',
          outcome: {
            uk: 'Ви порівнювали не «суми», а цінність у прив’язці до часу потреби: 3.0 зараз покривають закупівлю до зими, економія на дизелі перекриває різницю PV. Дисконт-дуель виграна не більшим числом, а правильним питанням.',
            en: 'You compared not “amounts” but value tied to the time of need: 3.0 now covers procurement before winter, and the diesel savings outweigh the PV gap. The discount duel is won not by the bigger number but by asking the right question.',
          },
        },
        {
          text: { uk: 'Чекати: донори часто збільшують пропозицію, якщо тягнути', en: 'Wait: donors often raise the offer if you stall' },
          quality: 'poor',
          outcome: {
            uk: 'Програма закриває вікно заявок за 3 тижні. Обидва варіанти зникають — громада входить у зиму без резервного живлення. Час теж має ціну, і вона не завжди в гривнях.',
            en: 'The programme closes its application window in 3 weeks. Both options vanish — the community enters winter without backup power. Time also has a price, and it is not always in hryvnias.',
          },
        },
      ],
    },
  ],
  debrief: {
    heading: { uk: 'Гривні різних років — тепер однієї валюти', en: 'Hryvnias of different years are now one currency' },
    recap: [
      { uk: 'Не додавайте номінали різних років: приведіть суми до одного моменту часу.', en: 'Never add nominal amounts of different years: bring them to one point in time.' },
      { uk: 'Компаундування — вперед (×(1+r)ⁿ), дисконтування — назад (÷(1+r)ⁿ).', en: 'Compounding — forward (×(1+r)ⁿ), discounting — backward (÷(1+r)ⁿ).' },
      { uk: 'Ставка = альтернативний дохід + інфляція + ризик; вона «стискає» далекі суми.', en: 'The rate = alternative return + inflation + risk; it “squeezes” distant amounts.' },
      { uk: 'При рівних PV вирішують нецифрові чинники: строк потреби, ліквідність, ризик.', en: 'With equal PVs, non-numeric factors decide: the timing of need, liquidity, risk.' },
    ],
  },
}
