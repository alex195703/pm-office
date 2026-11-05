// ============================================================
// КЕЙС g9 · «Комунікаційний штаб» — команди та комунікації
// Семінар 9 · Тема 9 · 2 бали на семінарі
// ============================================================

import type { ScenarioDef } from '../scenario'

export const G9: ScenarioDef = {
  id: 'g9',
  badgeId: 'diplomat',
  effect: { trust: 4, wellbeing: 1 },
  introKicker: { uk: 'Семінар 9 · Тема 9 · 2 бали на семінарі', en: 'Seminar 9 · Topic 9 · 2 seminar points' },
  title: { uk: '«Комунікаційний штаб»', en: '“Communication HQ”' },
  summary: {
    uk: 'План комунікацій відключення води: хто, що, кому, яким каналом — і без ескалації.',
    en: 'A communications plan for a water outage: who, what, to whom, via which channel — without escalation.',
  },
  durationMin: 20,
  stages: [
    {
      kind: 'brief',
      id: 'b1',
      title: { uk: 'Кейс: мешканці дізналися від сусіда', en: 'Case: residents learned it from a neighbour' },
      blocks: [
        {
          t: 'p',
          text: {
            uk: 'Аварія на водоканалі: мікрорайон без води 18 годин. Офіційної інформації немає 5 годин, тому соцмережі заповнили чутки — «води не буде тиждень», «мостилять тариф». Виконавчий директор водоканалу телефонує вам о 22:40: «зробіть щось».',
            en: 'An accident at the water utility: a neighbourhood without water for 18 hours. No official information for 5 hours, so social media fills with rumours — “no water for a week”, “they are raising the tariff”. The utility’s executive director calls you at 22:40: “do something”.',
          },
        },
        {
          t: 'pc',
          tone: 'orange',
          icon: '⚠',
          label: { uk: 'Основна проблема', en: 'The core problem' },
          text: {
            uk: 'Плану комунікацій немає: команда дізнається про зміни з новин, мешканці — від сусідів, а кожна година мовчання заповнюється найгіршим сценарієм. Після аварії відновлювати доводиться і трубу, і довіру — друга робота дорожча.',
            en: 'There is no communications plan: the team learns of changes from the news, residents from neighbours, and every silent hour fills with the worst scenario. After an accident you repair both the pipe and the trust — the second job costs more.',
          },
        },
        {
          t: 'pc',
          tone: 'amber',
          icon: '⚡',
          label: { uk: 'Суперечність, що створює проблему', en: 'The contradiction behind the problem' },
          text: {
            uk: 'Прозорість проти керованості: «усім усе і одразу» — і штаб тоне у тисячах коментарів замість роботи; мовчати — і чутки працюють проти вас. Комунікація без меж так само шкодить, як і її відсутність.',
            en: 'Transparency versus manageability: “everyone everything right now” — and the HQ drowns in thousands of comments instead of working; stay silent — and rumours work against you. Communication without limits harms as much as its absence.',
          },
        },
        {
          t: 'pc',
          tone: 'green',
          icon: '✅',
          label: { uk: 'Як знімається суперечність', en: 'How the contradiction is resolved' },
          text: {
            uk: 'Планом комунікацій: хто говорить (один офіційний спікер), що каже (факти: що сталось, скільки триватиме, що робити), кому (стейкхолдери), яким каналом (SMS для мешканців, брифінг для депутатів, пресреліз для медіа) і як часто. Інформація інтерактивна: одне джерело — багато каналів.',
            en: 'By a communications plan: who speaks (one official spokesperson), what they say (facts: what happened, how long it takes, what to do), to whom (stakeholders), via which channel (SMS for residents, a briefing for councillors, a press release for media), and how often. One source — many channels.',
          },
        },
      ],
    },
    {
      kind: 'quiz',
      id: 'q1',
      title: { uk: 'Розминка: комунікації', en: 'Warm-up: communications' },
      questions: [
        {
          text: { uk: 'Скільки офіційних спікерів має бути в кризовій комунікації?', en: 'How many official spokespersons should crisis communication have?' },
          options: [
            { uk: 'Один — щоб не було суперечливих версій', en: 'One — so there are no conflicting versions' },
            { uk: 'Скільки завгодно — більше голосів, більше довіри', en: 'As many as possible — more voices, more trust' },
            { uk: 'Жодного — нехай говорить сам міський голова', en: 'None — let the mayor speak' },
          ],
          correct: 0,
          why: {
            uk: '«Одне джерело правди»: різні спікери починають передавати різні деталі, і аудиторія збирає «суперечності». Інші співробітники можуть спілкуватися, але поза офіційними заявами.',
            en: '“One source of truth”: different speakers start passing different details, and the audience assembles “contradictions”. Others may talk, but outside official statements.',
          },
        },
        {
          text: { uk: 'Що робити з коментарями про «підвищення тарифу» без підтвердження?', en: 'What to do with comments about a “tariff rise” without confirmation?' },
          options: [
            { uk: 'Мовчки видаляти — щоб не розганяли', en: 'Silently delete them so they do not spread' },
            { uk: 'Публічно відповісти фактами: тариф не переглядається, ось посилання на рішення', en: 'Reply publicly with facts: the tariff is not being revised, here is the link to the decision' },
            { uk: 'Ігнорувати — самі зникнуть', en: 'Ignore — they will disappear on their own' },
          ],
          correct: 1,
          why: {
            uk: 'Видалення коментарів народжує «цензорів» і нові хвилі; ігнорування легалізує чутку. Факт + джерело — єдиний спосіб зняти слух.',
            en: 'Deleting comments breeds “censorship” narratives and new waves; ignoring legitimises the rumour. Fact + source is the only way to kill a rumour.',
          },
        },
        {
          text: { uk: 'Найгірший канал для екстреного повідомлення мешканців мікрорайону:', en: 'The worst channel for an emergency message to neighbourhood residents:' },
          options: [
            { uk: 'SMS-розсилка + оголошення у чатах будинків', en: 'An SMS blast + announcements in building chats' },
            { uk: 'Пост у блозі на сайті ради', en: 'A blog post on the council website' },
            { uk: 'Обидва працюють однаково', en: 'Both work the same' },
          ],
          correct: 1,
          why: {
            uk: 'Блог не долає тривогу: його треба шукати. Екстрена інформація йде назустріч людині: SMS, чати будинків, гучномовці. Сайт — довідковий канал.',
            en: 'A blog does not cut through alarm: it must be sought. Emergency information goes to meet the person: SMS, building chats, loudspeakers. The site is a reference channel.',
          },
        },
      ],
    },
    {
      kind: 'match',
      id: 'm1',
      title: { uk: 'Завдання: стейкхолдер → канал', en: 'Task: stakeholder → channel' },
      intro: {
        uk: 'Хто яку комунікацію отримує під час аварії на водоканалі?',
        en: 'Who receives which communication during the water utility accident?',
      },
      pairs: [
        {
          left: { uk: 'Мешканці без води', en: 'Residents without water' },
          right: { uk: 'SMS + чати будинків: що сталось, скільки чекати, де підвезення води', en: 'SMS + building chats: what happened, how long to wait, where water is delivered' },
          why: { uk: 'Прямо постраждалі — персональні канали і конкретні дії.', en: 'Directly affected — personal channels and concrete actions.' },
        },
        {
          left: { uk: 'Депутати та міський голова', en: 'Councillors and the mayor' },
          right: { uk: 'Штаб-брифінг: обсяг пошкодження, графік ремонту, бюджет', en: 'HQ briefing: damage scope, repair schedule, budget' },
          why: { uk: 'Вони відповідають на питання виборців — їм потрібна повна картина.', en: 'They answer voters’ questions — they need the full picture.' },
        },
        {
          left: { uk: 'Медіа', en: 'Media' },
          right: { uk: 'Пресреліз + контакт для запитів', en: 'A press release + a contact for queries' },
          why: { uk: 'Медіа напишуть у будь-якому разі — дайте їм перевірену версію.', en: 'Media will write anyway — give them a verified version.' },
        },
        {
          left: { uk: 'Школа і дитсадок району', en: 'The district school and kindergarten' },
          right: { uk: 'Прямий дзвінок завучу: графік підвезення води для харчування', en: 'A direct call to the deputy principal: water delivery schedule for meals' },
          why: { uk: 'Установи з обов’язками безпеки — персональний контакт, не масова розсилка.', en: 'Institutions with safety duties — a personal contact, not a mass blast.' },
        },
      ],
    },
    {
      kind: 'order',
      id: 'o1',
      title: { uk: 'Завдання: перші 30 хвилин кризи', en: 'Task: the first 30 minutes of a crisis' },
      intro: {
        uk: 'Виклик надійшов о 22:40. Розставте кроки штабу в правильній послідовності.',
        en: 'The call came at 22:40. Put the HQ steps in the right order.',
      },
      items: [
        { uk: 'Підтвердити факти від водоканалу: масштаб і попередній строк', en: 'Confirm the facts from the utility: scope and preliminary duration' },
        { uk: 'Зібрати штаб і призначити спікера', en: 'Assemble the HQ and appoint a spokesperson' },
        { uk: 'Надіслати перший SMS мешканцям: факти без обіцянок, яких не підтверджено', en: 'Send the first SMS to residents: facts, no unconfirmed promises' },
        { uk: 'Домовитися з підвезенням води і вказати точки в наступному повідомленні', en: 'Arrange water delivery and include the points in the next message' },
        { uk: 'Опублікувати пресреліз і відкрити лінію для запитів медіа', en: 'Publish a press release and open a line for media queries' },
        { uk: 'Запустити щогодинні оновлення до завершення ремонту', en: 'Run hourly updates until the repair is complete' },
      ],
      outro: {
        uk: 'Логіка кризи: факти → штаб → постраждалі → допомога → публічність → ритм оновлень.',
        en: 'Crisis logic: facts → HQ → the affected → help → publicity → an update rhythm.',
      },
    },
    {
      kind: 'decision',
      id: 'd1',
      title: { uk: 'Рішення: ранковий шум і батьки', en: 'Decision: morning noise and the parents' },
      intro: {
        uk: 'Тиждень потому: ремонт вулиці Зарічної йде біля школи. Батьки в чаті влаштували «повстання»: роботи починаються о 7:00, діти не висипаються. Підрядник каже: «раніше — це менша спека для асфальту». Ваш крок?',
        en: 'A week later: the Zarichna repair runs next to a school. Parents rebel in the chat: works start at 7:00, the children lack sleep. The contractor says: “earlier is cooler for asphalt”. Your step?',
      },
      options: [
        {
          text: { uk: 'Публічно відповісти батькам: «специфіка технології, залиште нас у спокої»', en: 'Reply publicly: “it is the technology, leave us alone”' },
          quality: 'poor',
          outcome: {
            uk: 'Чат вибухає, скріншоти летять депутатам, наступного дня у вас crisis і з батьками, і з радою. Технічна правда, сказана таким тоном, коштує дорожче за компроміс.',
            en: 'The chat explodes, screenshots fly to the councillors, and next day you have a crisis with both parents and the council. Technical truth in such a tone costs more than a compromise.',
          },
        },
        {
          text: {
            uk: 'Зустріч із батьками + зміщення шумних робіт на 9:00–15:00 з компенсацією графіка',
            en: 'A meeting with parents + shifting noisy works to 9:00–15:00 with a schedule compensation',
          },
          quality: 'best',
          outcome: {
            uk: 'На зустрічі ви показуєте графік: шумні роботи (фрезерування) зміщуються на 9:00, тихі (благоустрій) — зранку, кінець дня витягується за рахунок некритичних робіт з резервом. Строк не страждає, батьки стають союзниками: чат публікує вашу схему з подякою.',
            en: 'At the meeting you show the schedule: noisy works (milling) move to 9:00, quiet ones (landscaping) stay early, the day extends via non-critical works with reserves. The deadline holds, the parents become allies: the chat posts your scheme with thanks.',
          },
        },
        {
          text: { uk: 'Тихо перенести роботи на день — нехай підрядник сам вирішує', en: 'Quietly move the works a day — let the contractor decide' },
          quality: 'ok',
          outcome: {
            uk: 'Тиша на день заспокоює чат, але підрядник компенсує строк роботою в суботу — і в неділю до вас приходить друга хвиля обурення. Проблема не вирішена, лише пересунута.',
            en: 'A day of silence calms the chat, but the contractor compensates by working Saturday — and Sunday brings a second wave of outrage. The problem is not solved, just moved.',
          },
        },
      ],
    },
  ],
  debrief: {
    heading: { uk: 'Штаб говорить одним голосом', en: 'The HQ speaks with one voice' },
    recap: [
      { uk: 'План комунікацій: хто говорить, що, кому, яким каналом, як часто — до кризи, а не під час.', en: 'A communications plan: who speaks, what, to whom, via which channel, how often — before a crisis, not during.' },
      { uk: 'Один офіційний спікер, багато каналів: SMS — постраждалим, брифінг — владі, пресреліз — медіа.', en: 'One official spokesperson, many channels: SMS to the affected, a briefing to authorities, a press release to media.' },
      { uk: 'З чутками борються факти з джерелом; видалення коментарів посилює історію.', en: 'Rumours are fought with sourced facts; deleting comments fuels the story.' },
      { uk: 'Конфлікт зі стейкхолдерами знімається компромісом у графіку, а не «технічною правдою».', en: 'Stakeholder conflict is resolved with a schedule compromise, not “technical truth”.' },
    ],
  },
}
