// ============================================================
// ПРОЄКТНИЙ ОФІС ВІДНОВЛЕННЯ ГРОМАДИ · Соснівка
// ------------------------------------------------------------
// Дані та чиста логіка серйозної навчальної гри з дисципліни
// «Проєктна діяльність органів публічної влади» (КНЕУ).
// Архітектура — за дизайн-документом v1.0: гібридна модель
// «семінар = гра», два акти (воєнний стан / відбудова),
// чотири індикатори громади, кар'єра службовця, бейджі.
// Усі тексти — двомовні { uk, en }. Місто, персонажі та кейси
// повністю вигадані. Жодних персональних даних.
// ============================================================

import type { Bi } from './pm-i18n'

// ------------------------------------------------------------
// КАР'ЄРА СЛУЖБОВЦЯ (стимульовані категорії посад держслужби)
// ------------------------------------------------------------

export interface Rank {
  id: string
  xp: number // поріг досвіду для посади
  title: Bi
}

export const RANKS: Rank[] = [
  {
    id: 'spec',
    xp: 0,
    title: {
      uk: 'Головний спеціаліст відділу економічного розвитку міської ради',
      en: 'Lead Specialist, Economic Development Department, City Council',
    },
  },
  {
    id: 'sector',
    xp: 100,
    title: {
      uk: 'Керівник сектора проєктів',
      en: 'Head of the Project Unit',
    },
  },
  {
    id: 'dept',
    xp: 250,
    title: {
      uk: 'Директор департаменту регіонального розвитку',
      en: 'Director of the Regional Development Department',
    },
  },
  {
    id: 'office',
    xp: 450,
    title: {
      uk: 'Керівник проєктного офісу відновлення громади',
      en: 'Head of the Community Recovery Project Office',
    },
  },
]

export function rankFor(xp: number): Rank {
  let res = RANKS[0]
  for (const r of RANKS) if (xp >= r.xp) res = r
  return res
}

export function nextRank(xp: number): Rank | null {
  for (const r of RANKS) if (r.xp > xp) return r
  return null
}

// ------------------------------------------------------------
// ІНДИКАТОРИ ГРОМАДИ (наскрізний стан, шкала 0—100)
// ------------------------------------------------------------

export type IndicatorId = 'wellbeing' | 'trust' | 'resilience' | 'budget'

export interface Indicator {
  id: IndicatorId
  icon: string
  name: Bi
  desc: Bi
}

export const INDICATORS: Indicator[] = [
  {
    id: 'wellbeing',
    icon: '🙂',
    name: { uk: 'Добробут', en: 'Wellbeing' },
    desc: {
      uk: 'Якість послуг і повсякденне життя мешканців',
      en: 'Quality of services and everyday life of residents',
    },
  },
  {
    id: 'trust',
    icon: '🤝',
    name: { uk: 'Довіра мешканців', en: "Residents' trust" },
    desc: {
      uk: 'Комунікації, відкритість та участь громади',
      en: 'Communication, openness and community engagement',
    },
  },
  {
    id: 'resilience',
    icon: '🛡️',
    name: { uk: 'Стійкість', en: 'Resilience' },
    desc: {
      uk: 'Енергія, вода, укриття — здатність громади витримувати події',
      en: 'Energy, water, shelters — the capacity to withstand events',
    },
  },
  {
    id: 'budget',
    icon: '💰',
    name: { uk: 'Бюджетний результат', en: 'Budget performance' },
    desc: {
      uk: 'Ефективність використання публічних коштів',
      en: 'Effective use of public funds',
    },
  },
]

export type Indicators = Record<IndicatorId, number>

export const START_INDICATORS: Indicators = {
  wellbeing: 35,
  trust: 40,
  resilience: 30,
  budget: 45,
}

export const clampInd = (v: number): number => Math.max(0, Math.min(100, v))

// ------------------------------------------------------------
// БЕЙДЖІ (мікросертифікати тематичних блоків — таблиця 4 ДД)
// ------------------------------------------------------------

export interface Badge {
  id: string
  icon: string
  name: Bi
  condition: Bi
  topic: Bi
}

export const BADGES: Badge[] = [
  {
    id: 'conceptor',
    icon: '🧭',
    name: { uk: 'Концептор', en: 'Concept Keeper' },
    condition: {
      uk: 'Пройти «Проєкт чи рутина?» без жодної помилки',
      en: 'Complete “Project or Routine?” without a single mistake',
    },
    topic: { uk: 'Тема 1', en: 'Topic 1' },
  },
  {
    id: 'cycle',
    icon: '🔄',
    name: { uk: 'Хранитель циклу', en: 'Cycle Keeper' },
    condition: {
      uk: 'Довести проєкт «Відновлення школи» через усі фази',
      en: 'Take the “School Recovery” project through all phases',
    },
    topic: { uk: 'Тема 2', en: 'Topic 2' },
  },
  {
    id: 'finanalyst',
    icon: '📊',
    name: { uk: 'Фінансовий аналітик', en: 'Financial Analyst' },
    condition: {
      uk: 'Успішно розрахувати критерії у «Дисконт-дуелі» та «Конкурсі проєктів»',
      en: 'Successfully calculate criteria in “Discount Duel” and “Project Competition”',
    },
    topic: { uk: 'Теми 3–5', en: 'Topics 3–5' },
  },
  {
    id: 'wbs',
    icon: '🌳',
    name: { uk: 'Стратег WBS', en: 'WBS Strategist' },
    condition: {
      uk: 'Зібрати повну ієрархічну структуру робіт зі 100 % покриттям',
      en: 'Assemble a full work breakdown structure with 100% coverage',
    },
    topic: { uk: 'Тема 6', en: 'Topic 6' },
  },
  {
    id: 'network',
    icon: '🕸️',
    name: { uk: 'Майстер мережі', en: 'Network Master' },
    condition: {
      uk: 'Двічі врятувати дедлайн у «Ремонті вулиці»',
      en: 'Save the deadline twice in “Street Repair”',
    },
    topic: { uk: 'Тема 7', en: 'Topic 7' },
  },
  {
    id: 'diplomat',
    icon: '🕊️',
    name: { uk: 'Дипломат громади', en: 'Community Diplomat' },
    condition: {
      uk: 'Розв’язати всі конфлікти без ескалації у «Комунікаційному штабі»',
      en: 'Resolve all conflicts without escalation in “Communication HQ”',
    },
    topic: { uk: 'Тема 9', en: 'Topic 9' },
  },
  {
    id: 'technocrat',
    icon: '⚙️',
    name: { uk: 'Технократ', en: 'Technocrat' },
    condition: {
      uk: 'Правильно підібрати інструменти автоматизації для трьох сценаріїв',
      en: 'Match automation tools correctly for three scenarios',
    },
    topic: { uk: 'Тема 10', en: 'Topic 10' },
  },
  {
    id: 'dossier',
    icon: '🗂️',
    name: { uk: 'Експерт досьє', en: 'Dossier Expert' },
    condition: {
      uk: 'Зібрати повне «Досьє проєкту» з восьми аналізів',
      en: 'Assemble the complete “Project Dossier” of eight analyses',
    },
    topic: { uk: 'Теми 12–15', en: 'Topics 12–15' },
  },
  {
    id: 'riskmgr',
    icon: '🎯',
    name: { uk: 'Ризик-менеджер громади', en: 'Community Risk Manager' },
    condition: {
      uk: 'Утримати проєкт у зеленій зоні через три хвилі «Радара ризиків»',
      en: 'Keep the project in the green zone through three waves of the “Risk Radar”',
    },
    topic: { uk: 'Теми 16–17', en: 'Topics 16–17' },
  },
  {
    id: 'passport',
    icon: '📕',
    name: { uk: 'Паспорт готовий', en: 'Passport Ready' },
    condition: {
      uk: 'Завершити капстоун «Заявка на відбудову»',
      en: 'Complete the “Recovery Application” capstone',
    },
    topic: { uk: 'Індивідуальне завдання', en: 'Individual assignment' },
  },
]

// ------------------------------------------------------------
// МАПА КУРСУ: «семінар = гра» (таблиця 5 дизайн-документа)
// ------------------------------------------------------------

export type RowKind = 'seminar' | 'test' | 'capstone' | 'exam'

export interface MapRow {
  id: string
  kind: RowKind
  label: Bi // «Семінар 1», «КР №1», «Капстоун», «Екзамен»
  theme: Bi
  game: Bi
  mechanic: Bi
  points: number | null // семінарські бали програми
  gameId?: string // id побудованої гри
}

export interface Act {
  id: 'act1' | 'act2' | 'final'
  name: Bi
  desc: Bi
  rows: MapRow[]
}

export const ACTS: Act[] = [
  {
    id: 'act1',
    name: { uk: 'Акт I. «Тримаємось»', en: 'Act I. “Holding On”' },
    desc: {
      uk: 'Воєнний стан: критична інфраструктура, укриття, енергостійкість, швидкі рішення в умовах обмежень.',
      en: 'Martial law: critical infrastructure, shelters, energy resilience, fast decisions under constraints.',
    },
    rows: [
      {
        id: 's1',
        kind: 'seminar',
        label: { uk: 'Семінар 1', en: 'Seminar 1' },
        theme: { uk: 'Вступ, поняття і концепція проєкту', en: 'Introduction: the concept of a project' },
        game: { uk: '«Проєкт чи рутина?»', en: '“Project or Routine?”' },
        mechanic: {
          uk: 'Швидке сортування справ управління: проєкт чи поточна діяльність',
          en: 'Fast sorting of administrative tasks: project or ongoing activity',
        },
        points: 1,
        gameId: 'g1',
      },
      {
        id: 's2',
        kind: 'seminar',
        label: { uk: 'Семінар 2', en: 'Seminar 2' },
        theme: { uk: 'Життєвий цикл проєкту', en: 'Project life cycle' },
        game: { uk: '«Відновлення школи»', en: '“School Recovery”' },
        mechanic: {
          uk: 'Карта фаз: передінвестиційна, інвестиційна, експлуатаційна',
          en: 'A phase map: pre-investment, investment, operation',
        },
        points: 1,
      },
      {
        id: 's3',
        kind: 'seminar',
        label: { uk: 'Семінар 3', en: 'Seminar 3' },
        theme: { uk: 'Цінність та ефективність проєкту', en: 'Project value and effectiveness' },
        game: { uk: '«Ваги громади»', en: '“Community Scales”' },
        mechanic: {
          uk: 'Розкладання явних і неявних вигод та витрат на шальки',
          en: 'Placing explicit and implicit benefits and costs on the scales',
        },
        points: 1,
      },
      {
        id: 's4',
        kind: 'seminar',
        label: { uk: 'Семінар 4', en: 'Seminar 4' },
        theme: { uk: 'Вартість грошей у часі', en: 'Time value of money' },
        game: { uk: '«Дисконт-дуель»', en: '“Discount Duel”' },
        mechanic: {
          uk: 'Компаундування і дисконтування на таймері, інфляційна премія',
          en: 'Compounding and discounting against the clock, inflation premium',
        },
        points: 1,
      },
      {
        id: 's5',
        kind: 'seminar',
        label: { uk: 'Семінар 5', en: 'Seminar 5' },
        theme: { uk: 'Критерії прийняття рішень', en: 'Decision criteria' },
        game: { uk: '«Конкурс проєктів»', en: '“Project Competition”' },
        mechanic: {
          uk: 'Розрахунок NPV, IRR, строку окупності та ранжування заявок',
          en: 'Calculating NPV, IRR and payback period; ranking applications',
        },
        points: 1,
      },
      {
        id: 's6',
        kind: 'seminar',
        label: { uk: 'Семінар 6', en: 'Seminar 6' },
        theme: { uk: 'Планування та структуризація', en: 'Planning and structuring' },
        game: { uk: '«План-конструктор»', en: '“Plan Builder”' },
        mechanic: {
          uk: 'Етапи планування, дерево цілей, структура бізнес-плану',
          en: 'Planning stages, goal tree, business plan structure',
        },
        points: 1,
      },
      {
        id: 's7',
        kind: 'seminar',
        label: { uk: 'Семінар 7', en: 'Seminar 7' },
        theme: { uk: 'Ієрархічна структура робіт', en: 'Work breakdown structure (WBS)' },
        game: { uk: '«Збери WBS»', en: '“Assemble the WBS”' },
        mechanic: {
          uk: 'Декомпозиція проєкту з контролем правила 100 %, матриця відповідальності',
          en: 'Decomposition with the 100% rule, responsibility matrix',
        },
        points: 1,
      },
      {
        id: 's8',
        kind: 'seminar',
        label: { uk: 'Семінар 8', en: 'Seminar 8' },
        theme: { uk: 'Мережевий аналіз та календарне планування', en: 'Network analysis and scheduling' },
        game: { uk: '«Ремонт вулиці»', en: '“Street Repair”' },
        mechanic: {
          uk: 'Мережевий графік, критичний шлях, резерви часу, дедлайн',
          en: 'Network diagram, critical path, time reserves, deadline',
        },
        points: 2,
      },
      {
        id: 's9',
        kind: 'seminar',
        label: { uk: 'Семінар 9', en: 'Seminar 9' },
        theme: { uk: 'Команди, комунікації, логістика', en: 'Teams, communications, logistics' },
        game: { uk: '«Комунікаційний штаб»', en: '“Communication HQ”' },
        mechanic: {
          uk: 'Формування команди, конфліктні сценарії, вибір каналів комунікації',
          en: 'Team building, conflict scenarios, choice of communication channels',
        },
        points: 2,
      },
      {
        id: 's10',
        kind: 'seminar',
        label: { uk: 'Семінар 10', en: 'Seminar 10' },
        theme: { uk: 'Автоматизація управління', en: 'Management automation' },
        game: { uk: '«Інструментальний квест»', en: '“Tool Quest”' },
        mechanic: {
          uk: 'Співвіднесення функцій і систем: MS Project, Primavera, Spider Project тощо',
          en: 'Matching functions to systems: MS Project, Primavera, Spider Project, etc.',
        },
        points: 2,
      },
      {
        id: 'kr1',
        kind: 'test',
        label: { uk: 'КР №1', en: 'MT #1' },
        theme: { uk: 'Тем 1–11 (Moodle)', en: 'Topics 1–11 (Moodle)' },
        game: { uk: '«Бос-файт Модуль 1»', en: '“Boss Fight: Module 1”' },
        mechanic: {
          uk: 'Тест-бій: 10 запитань по 0,5 бала — репетиція модульної роботи',
          en: 'Test battle: 10 questions × 0.5 points — a rehearsal of the module test',
        },
        points: null,
      },
    ],
  },
  {
    id: 'act2',
    name: { uk: 'Акт II. «Відбудовуємось»', en: 'Act II. “Rebuilding”' },
    desc: {
      uk: 'Відновлення: школи, житло, соціальні послуги, донорські програми, повернення мешканців, євроінтеграція.',
      en: 'Recovery: schools, housing, social services, donor programmes, returning residents, EU integration.',
    },
    rows: [
      {
        id: 's11',
        kind: 'seminar',
        label: { uk: 'Семінар 11', en: 'Seminar 11' },
        theme: { uk: 'Маркетинговий та економічний аналізи', en: 'Marketing and economic analysis' },
        game: { uk: '«Досьє проєкту, ч. 1»', en: '“Project Dossier, Part 1”' },
        mechanic: {
          uk: 'Чотири міні-експертизи: ринок громади, економічний вплив, установи, фінанси',
          en: 'Four mini-assessments: community market, economic impact, institutions, finance',
        },
        points: 1,
      },
      {
        id: 's12',
        kind: 'seminar',
        label: { uk: 'Семінар 12', en: 'Seminar 12' },
        theme: {
          uk: 'Технічний, екологічний, правовий та соціальний аналізи',
          en: 'Technical, environmental, legal and social analysis',
        },
        game: { uk: '«Досьє проєкту, ч. 2»', en: '“Project Dossier, Part 2”' },
        mechanic: {
          uk: 'Вибір локації і технології, екологічні чинники, закупівля за законом, залучення населення',
          en: 'Site and technology choice, environmental factors, lawful procurement, community engagement',
        },
        points: 1,
      },
      {
        id: 's13',
        kind: 'seminar',
        label: { uk: 'Семінар 13', en: 'Seminar 13' },
        theme: { uk: 'Прогнозування ризиків', en: 'Risk forecasting' },
        game: { uk: '«Радар ризиків Соснівки»', en: '“Sosnivka Risk Radar”' },
        mechanic: {
          uk: 'Ідентифікація ризиків, матриця «ймовірність × вплив»',
          en: 'Risk identification, probability × impact matrix',
        },
        points: 1,
      },
      {
        id: 's14',
        kind: 'seminar',
        label: { uk: 'Семінар 14', en: 'Seminar 14' },
        theme: { uk: 'Зниження ризиків', en: 'Risk reduction' },
        game: { uk: '«Щит громади»', en: '“Community Shield”' },
        mechanic: {
          uk: 'Вибір реагування: уникнення, зменшення, передача, прийняття; резерви',
          en: 'Response choice: avoidance, mitigation, transfer, acceptance; reserves',
        },
        points: 2,
      },
      {
        id: 's15',
        kind: 'seminar',
        label: { uk: 'Семінар 15', en: 'Seminar 15' },
        theme: { uk: 'Управління та моделювання ризиків', en: 'Risk management and modelling' },
        game: { uk: '«Шторм сценаріїв»', en: '“Scenario Storm”' },
        mechanic: {
          uk: 'Дерево рішень, візуальний Монте-Карло, критерії рішень у невизначеності',
          en: 'Decision tree, visual Monte Carlo, decision criteria under uncertainty',
        },
        points: 2,
      },
      {
        id: 'kr2',
        kind: 'test',
        label: { uk: 'КР №2', en: 'MT #2' },
        theme: { uk: 'Тем 12–17 (Moodle)', en: 'Topics 12–17 (Moodle)' },
        game: { uk: '«Бос-файт Модуль 2»', en: '“Boss Fight: Module 2”' },
        mechanic: {
          uk: 'Тест-бій: 10 запитань по 0,5 бала — репетиція модульної роботи',
          en: 'Test battle: 10 questions × 0.5 points — a rehearsal of the module test',
        },
        points: null,
      },
    ],
  },
  {
    id: 'final',
    name: { uk: 'Фінал. Капстоун та екзамен', en: 'Finale. Capstone and exam' },
    desc: {
      uk: '«Заявка на відбудову» — чернетка індивідуального завдання; симулятор екзамену за структурою білета.',
      en: 'The “Recovery Application” — a draft of the individual assignment; the exam simulator based on the ticket structure.',
    },
    rows: [
      {
        id: 'cap',
        kind: 'capstone',
        label: { uk: 'Капстоун', en: 'Capstone' },
        theme: { uk: 'Індивідуальне завдання', en: 'Individual assignment' },
        game: { uk: '«Заявка на відбудову»', en: '“Recovery Application”' },
        mechanic: {
          uk: 'Конструктор паспорта проєкту відновлення з артефактів усіх ігор',
          en: 'A builder of the recovery project passport from the artefacts of all games',
        },
        points: null,
      },
      {
        id: 'exam',
        kind: 'exam',
        label: { uk: 'Екзамен', en: 'Exam' },
        theme: { uk: 'Увесь курс', en: 'The whole course' },
        game: { uk: '«Симулятор екзамену»', en: '“Exam Simulator”' },
        mechanic: {
          uk: 'Тренування за структурою екзаменаційного білета з самооцінюванням',
          en: 'Training based on the exam ticket structure with self-assessment',
        },
        points: null,
      },
    ],
  },
]

export const G1_ID = 'g1'

// ------------------------------------------------------------
// ГРА 1 · РІВЕНЬ 1 — «Проєкт чи рутина?»: потік карток справ
// ------------------------------------------------------------

export interface SortCard {
  id: string
  text: Bi
  isProject: boolean
  why: Bi // пояснення з ознаками проєкту / ознаками рутини
}

export const PROJECT_SIGNS: Bi[] = [
  { uk: 'Унікальність', en: 'Uniqueness' },
  { uk: 'Обмеженість у часі', en: 'Time-bound' },
  { uk: 'Визначеність результату', en: 'Defined result' },
]

export const ROUTINE_SIGNS: Bi[] = [
  { uk: 'Повторюваність', en: 'Repetitiveness' },
  { uk: 'Без дати завершення', en: 'No end date' },
  { uk: 'Постійна діяльність', en: 'Continuous operations' },
]

export const SORT_CARDS: SortCard[] = [
  {
    id: 'c1',
    text: {
      uk: 'Побудувати модульне укриття при школі № 3',
      en: 'Build a modular shelter at School No. 3',
    },
    isProject: true,
    why: {
      uk: 'Разова робота з чіткою метою, визначеним результатом і строком: до початку навчального року укриття має приймати людей.',
      en: 'A one-off effort with a clear goal, a defined result and a deadline: the shelter must be ready to receive people by the start of the school year.',
    },
  },
  {
    id: 'c2',
    text: {
      uk: 'Замінити фільтри водоканалу за графіком технічного обслуговування',
      en: 'Replace the water utility filters on the maintenance schedule',
    },
    isProject: false,
    why: {
      uk: 'Регулярне обслуговування за графіком: повторювана операція без унікального результату і без дати завершення діяльності.',
      en: 'Scheduled maintenance: a repetitive operation with no unique result and no end date.',
    },
  },
  {
    id: 'c3',
    text: {
      uk: 'Укласти бюджетний розпис міста на наступний рік',
      en: 'Draft the city budget schedule for the coming year',
    },
    isProject: false,
    why: {
      uk: 'Щорічна обов’язкова процедура фінансової діяльності органу: повторюється щороку за встановленим порядком.',
      en: 'An annual mandatory financial procedure of the authority: it repeats every year under an established procedure.',
    },
  },
  {
    id: 'c4',
    text: {
      uk: 'Розробити стратегію відновлення громади до 2030 року',
      en: 'Develop a community recovery strategy for 2030',
    },
    isProject: true,
    why: {
      uk: 'Унікальний документ, якого раніше не було, з чіткою датою завершення та визначеним результатом — затвердженою стратегією.',
      en: 'A unique document that did not exist before, with a clear end date and a defined outcome — an adopted strategy.',
    },
  },
  {
    id: 'c5',
    text: {
      uk: 'Щомісячне нарахування заробітної плати працівникам міської ради',
      en: 'Monthly payroll for city council staff',
    },
    isProject: false,
    why: {
      uk: 'Постійна операційна діяльність: цикл повторюється щомісяця, результат типовий, робота не завершується.',
      en: 'Continuous operations: the cycle repeats monthly, the result is standard, and the work never ends.',
    },
  },
  {
    id: 'c6',
    text: {
      uk: 'Відновити водопостання мікрорайону після пошкодження мережі',
      en: 'Restore water supply to a neighbourhood after network damage',
    },
    isProject: true,
    why: {
      uk: 'Разова аварійна робота з чіткою метою (вода повернулася), визначеним обсягом і строком — це мініпроєкт, а не графік обслуговування.',
      en: 'A one-off emergency effort with a clear goal (water restored), a defined scope and a deadline — a mini-project, not scheduled maintenance.',
    },
  },
  {
    id: 'c7',
    text: {
      uk: 'Приймати звернення громадян у центрі надання адміністративних послуг',
      en: 'Receive citizens’ requests at the administrative service centre',
    },
    isProject: false,
    why: {
      uk: 'Безперервний публічний сервіс: потік звернень не має дати завершення, процес типово повторюваний.',
      en: 'A continuous public service: the flow of requests has no end date, the process is routinely repetitive.',
    },
  },
  {
    id: 'c8',
    text: {
      uk: 'Впровадити електронний журнал звернень громадян',
      en: 'Introduce an electronic citizens’ appeals log',
    },
    isProject: true,
    why: {
      uk: 'Систему створюють один раз: є унікальний результат (працюючий журнал), бюджет, команда і дата запуску.',
      en: 'The system is built once: there is a unique outcome (a working log), a budget, a team and a launch date.',
    },
  },
  {
    id: 'c9',
    text: {
      uk: 'Провести плановий ремонт ліфтового обладнання за графіком',
      en: 'Carry out scheduled maintenance of elevator equipment',
    },
    isProject: false,
    why: {
      uk: 'Обслуговування за затвердженим графіком: роботи повторювані, унікального результату немає.',
      en: 'Maintenance under an approved schedule: repetitive work with no unique outcome.',
    },
  },
  {
    id: 'c10',
    text: {
      uk: 'Встановити резервні генератори для водоканалу та лікарні',
      en: 'Install backup generators for the water utility and the hospital',
    },
    isProject: true,
    why: {
      uk: 'Разова робота з унікальним результатом (запущене резервне живлення), строком і бюджетом — проєкт енергостійкості.',
      en: 'A one-off effort with a unique outcome (backup power running), a deadline and a budget — an energy-resilience project.',
    },
  },
  {
    id: 'c11',
    text: {
      uk: 'Провести щорічний аудит використання бюджетних коштів',
      en: 'Conduct the annual audit of budget funds usage',
    },
    isProject: false,
    why: {
      uk: 'Регулярна контрольна процедура: проводиться щороку за однаковим порядком, без унікального кінцевого продукту.',
      en: 'A regular control procedure: run every year in the same way, with no unique end product.',
    },
  },
  {
    id: 'c12',
    text: {
      uk: 'Організувати курси української мови для мешканців, які повертаються',
      en: 'Organise Ukrainian language courses for returning residents',
    },
    isProject: true,
    why: {
      uk: 'Обмежений у часі цикл із визначеним результатом (навчена група, видані сертифікати) — унікальна ініціатива громади.',
      en: 'A time-limited cycle with a defined outcome (a trained group, issued certificates) — a unique community initiative.',
    },
  },
]

export const SORT_SECONDS = 20 // час на одну картку

// ------------------------------------------------------------
// ГРА 1 · РІВЕНЬ 2 — учасники проєкту та їхні ролі
// ------------------------------------------------------------

export type RoleId = 'customer' | 'contractor' | 'user' | 'curator'

export interface Role {
  id: RoleId
  name: Bi
  definition: Bi
}

export const ROLES: Role[] = [
  {
    id: 'customer',
    name: { uk: 'Замовник', en: 'Customer' },
    definition: {
      uk: 'Ініціює проєкт, формулює вимоги, забезпечує фінансування і приймає результат.',
      en: 'Initiates the project, sets the requirements, provides funding and accepts the result.',
    },
  },
  {
    id: 'contractor',
    name: { uk: 'Виконавець', en: 'Contractor' },
    definition: {
      uk: 'Виконує роботи за договором і відповідає за строки, якість та бюджет робіт.',
      en: 'Performs the works under a contract and is accountable for the schedule, quality and budget.',
    },
  },
  {
    id: 'user',
    name: { uk: 'Користувач', en: 'End user' },
    definition: {
      uk: 'Використовуватиме результат проєкту; саме його потреби визначають вимоги до результату.',
      en: 'Will use the project’s result; it is the end users’ needs that shape the requirements.',
    },
  },
  {
    id: 'curator',
    name: { uk: 'Куратор', en: 'Curator (supervisor)' },
    definition: {
      uk: 'Здійснює вищий нагляд, підтримує проєкт ресурсно і політично, знімає перешкоди.',
      en: 'Exercises top-level oversight, supports the project with resources and politically, removes obstacles.',
    },
  },
]

export interface RoleParticipant {
  id: string
  name: Bi
  hint: Bi
  roleId: RoleId
}

export interface RoleScenario {
  id: string
  title: Bi
  intro: Bi
  participants: RoleParticipant[]
}

export const ROLE_SCENARIOS: RoleScenario[] = [
  {
    id: 'r1',
    title: { uk: 'Проєкт «Модульне укриття при школі № 3»', en: 'Project “Modular shelter at School No. 3”' },
    intro: {
      uk: 'Місто відновлює школу після пошкоджень. Розподіліть чотирьох учасників за ролями проєкту.',
      en: 'The city is restoring a school after damage. Assign the four participants to the project roles.',
    },
    participants: [
      {
        id: 'p1',
        name: { uk: 'Відділ освіти міської ради', en: 'City council education department' },
        hint: {
          uk: 'Замовляє відновлення, веде договір і приймає укриття в експлуатацію',
          en: 'Commissioned the restoration, manages the contract and puts the shelter into operation',
        },
        roleId: 'customer',
      },
      {
        id: 'p2',
        name: { uk: 'Будівельна компанія «Соснівкабуд»', en: 'Sosnivkabud construction company' },
        hint: {
          uk: 'Монтує модулі за договором підряду, відповідає за строки і якість',
          en: 'Assembles the modules under a contractor agreement, accountable for schedule and quality',
        },
        roleId: 'contractor',
      },
      {
        id: 'p3',
        name: { uk: 'Директорка школи № 3, учні та батьки', en: 'Principal of School No. 3, pupils and parents' },
        hint: {
          uk: 'Щодня користуватимуться укриттям під час тривог',
          en: 'Will use the shelter every day during alerts',
        },
        roleId: 'user',
      },
      {
        id: 'p4',
        name: { uk: 'Заступниця міського голови з питань безпеки', en: 'Deputy mayor for security matters' },
        hint: {
          uk: 'Координує проєкт на рівні міста, знімає перешкоди, звітує перед керівництвом',
          en: 'Coordinates the project at city level, removes obstacles, reports to the city leadership',
        },
        roleId: 'curator',
      },
    ],
  },
  {
    id: 'r2',
    title: { uk: 'Проєкт «Відновлення скверу Перемоги»', en: 'Project “Restoration of the Victory Square grove”' },
    intro: {
      uk: 'Сквер пошкоджений, мешканці повертаються додому. Розподіліть учасників за ролями.',
      en: 'The grove was damaged; residents are coming home. Assign the participants to the roles.',
    },
    participants: [
      {
        id: 'q1',
        name: { uk: 'Управління благоустрою міської ради', en: 'City council improvement office' },
        hint: {
          uk: 'Ініціювало проєкт, визначило вимоги та приймає роботи',
          en: 'Initiated the project, defined the requirements and will accept the works',
        },
        roleId: 'customer',
      },
      {
        id: 'q2',
        name: { uk: 'Підрядна організація з озеленення', en: 'Landscaping contractor' },
        hint: {
          uk: 'Виконує роботи за договором: посадка, освітлення, доріжки',
          en: 'Performs the works under contract: planting, lighting, paths',
        },
        roleId: 'contractor',
      },
      {
        id: 'q3',
        name: { uk: 'Мешканці прилеглих мікрорайонів', en: 'Residents of the adjacent neighbourhoods' },
        hint: {
          uk: 'Щодня відпочиватимуть у сквері — заради них проєкт і робиться',
          en: 'Will use the grove every day — the project is done for their sake',
        },
        roleId: 'user',
      },
      {
        id: 'q4',
        name: { uk: 'Голова постійної комісії ради з питань відбудови', en: 'Chair of the council’s standing recovery committee' },
        hint: {
          uk: 'Верховний нагляд: просуває проєкт у раді, залучає ресурси',
          en: 'Top-level oversight: promotes the project in the council, brings in resources',
        },
        roleId: 'curator',
      },
    ],
  },
]

// ------------------------------------------------------------
// ПРАВИЛА НАРАХУВАННЯ (XP, індикатори, бейдж)
// ------------------------------------------------------------

export const XP_PER_CORRECT = 5
export const XP_COMPLETION_BONUS = 20
export const REPLAY_FACTOR = 0.5 // повторне проходження — половина досвіду, без штрафу

/** Вплив першого завершення гри на індикатори громади */
export const G1_FIRST_EFFECT: Partial<Indicators> = { trust: 4, budget: 2 }
/** Додатково за ідеальне проходження (без помилок) */
export const G1_PERFECT_EFFECT: Partial<Indicators> = { resilience: 2 }

export interface Game1Outcome {
  correctCards: number
  totalCards: number
  correctRoles: number
  totalRoles: number
  mistakes: number
  xp: number
  perfect: boolean
  firstCompletion: boolean
  badgeEarned: boolean
  effect: Partial<Indicators>
}

export function computeGame1Outcome(
  correctCards: number,
  totalCards: number,
  correctRoles: number,
  totalRoles: number,
  firstCompletion: boolean,
): Game1Outcome {
  const mistakes = totalCards - correctCards + (totalRoles - correctRoles)
  const perfect = mistakes === 0
  const raw = correctCards * XP_PER_CORRECT + correctRoles * XP_PER_CORRECT + (firstCompletion ? XP_COMPLETION_BONUS : 0)
  const xp = firstCompletion ? raw : Math.floor(raw * REPLAY_FACTOR)
  const effect: Partial<Indicators> = firstCompletion
    ? { ...G1_FIRST_EFFECT, ...(perfect ? G1_PERFECT_EFFECT : {}) }
    : {}
  return {
    correctCards,
    totalCards,
    correctRoles,
    totalRoles,
    mistakes,
    xp,
    perfect,
    firstCompletion,
    badgeEarned: perfect,
    effect,
  }
}

// ------------------------------------------------------------
// ПРОГРЕС ГРАВЦЯ (localStorage, без облікових записів)
// ------------------------------------------------------------

export interface GameRecord {
  best: number // найкращий % правильних відповідей
  completions: number
}

export interface Progress {
  xp: number
  indicators: Indicators
  badges: string[]
  games: Record<string, GameRecord>
  /** Профіль студента (необов’язковий): уводиться в хабі, потрібен для звіту викладачу */
  name?: string
  group?: string
}

export const STORAGE_KEY = 'pm-office-v1'

export const EMPTY_PROGRESS: Progress = {
  xp: 0,
  indicators: { ...START_INDICATORS },
  badges: [],
  games: {},
}

/** Безпечне відновлення прогресу з довільного JSON (приватний режим, старі сейви) */
export function normalizeProgress(raw: unknown): Progress {
  const p: Progress = {
    xp: EMPTY_PROGRESS.xp,
    indicators: { ...EMPTY_PROGRESS.indicators },
    badges: [],
    games: {},
  }
  if (raw && typeof raw === 'object') {
    const o = raw as Record<string, unknown>
    if (typeof o.name === 'string' && o.name.trim()) p.name = o.name.trim().slice(0, 80)
    if (typeof o.group === 'string' && o.group.trim()) p.group = o.group.trim().slice(0, 40)
    if (typeof o.xp === 'number' && Number.isFinite(o.xp) && o.xp >= 0) p.xp = Math.floor(o.xp)
    if (o.indicators && typeof o.indicators === 'object') {
      const ind = o.indicators as Record<string, unknown>
      for (const k of Object.keys(EMPTY_PROGRESS.indicators) as IndicatorId[]) {
        const v = ind[k]
        if (typeof v === 'number' && Number.isFinite(v)) p.indicators[k] = clampInd(Math.round(v))
      }
    }
    if (Array.isArray(o.badges)) {
      for (const b of o.badges) if (typeof b === 'string' && BADGES.some((x) => x.id === b) && !p.badges.includes(b)) p.badges.push(b)
    }
    if (o.games && typeof o.games === 'object') {
      const g = o.games as Record<string, unknown>
      for (const [id, rec] of Object.entries(g)) {
        if (rec && typeof rec === 'object') {
          const r = rec as Record<string, unknown>
          const best = typeof r.best === 'number' && Number.isFinite(r.best) ? Math.max(0, Math.min(100, Math.round(r.best))) : 0
          const completions = typeof r.completions === 'number' && Number.isFinite(r.completions) && r.completions > 0 ? Math.floor(r.completions) : 0
          if (completions > 0 || best > 0) p.games[id] = { best, completions }
        }
      }
    }
  }
  return p
}

/** Код відновлення прогресу: base64(UTF-8 JSON) для переносу між пристроями */
export function progressCode(p: Progress): string {
  try {
    return btoa(encodeURIComponent(JSON.stringify(p)))
  } catch {
    return ''
  }
}

export function progressFromCode(code: string): Progress | null {
  try {
    const json = decodeURIComponent(atob(code.trim()))
    const raw: unknown = JSON.parse(json)
    if (!raw || typeof raw !== 'object') return null
    return normalizeProgress(raw)
  } catch {
    return null
  }
}

// ------------------------------------------------------------
// ЗВІТ ВИКЛАДАЧУ (кабінет /vykladach)
// ------------------------------------------------------------
// Студент після кожної гри копіює «код звіту» — компактний
// стан прогресу разом з іменем, групою й датою — і надсилає
// викладачу (месенджер, пошта). Викладач вставляє код у кабінет:
// без жодного сервера, бази чи акаунтів. Контрольна сума
// ловить обриви й одруківки; від підробки код захищає лише
// звірка бейджів на семінарі (гру проєктовано як підставу
// до балів, а не заміну журналу).
// ------------------------------------------------------------

export interface StudentReport {
  name: string
  group: string
  date: number // коли студент згенерував код (Date.now())
  progress: Progress
}

const REPORT_PREFIX = 'PMR1'

/** FNV-1a → 4 символи base36: ловить обриви й одруківки (не криптографія) */
function checksum4(s: string): string {
  let h = 0x811c9dc5
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i)
    h = Math.imul(h, 0x01000193) >>> 0
  }
  return (h % 1679616).toString(36).padStart(4, '0')
}

/** Код звіту викладачу: PMR1.<base64 компактного JSON>.<контрольна сума> */
export function reportCode(p: Progress): string {
  try {
    const payload = {
      n: p.name ?? '',
      g: p.group ?? '',
      d: Date.now(),
      xp: p.xp,
      i: p.indicators,
      b: p.badges,
      m: p.games,
    }
    const body = btoa(encodeURIComponent(JSON.stringify(payload)))
    return `${REPORT_PREFIX}.${body}.${checksum4(body)}`
  } catch {
    return ''
  }
}

/** Розбір коду звіту; повертає null для чужих/пошкоджених рядків */
export function reportFromCode(code: string): StudentReport | null {
  try {
    const parts = code.trim().split('.')
    if (parts.length !== 3 || parts[0] !== REPORT_PREFIX) return null
    const body = parts[1]
    if (checksum4(body) !== parts[2]) return null
    const raw: unknown = JSON.parse(decodeURIComponent(atob(body)))
    if (!raw || typeof raw !== 'object') return null
    const o = raw as Record<string, unknown>
    return {
      name: typeof o.n === 'string' ? o.n.trim().slice(0, 80) : '',
      group: typeof o.g === 'string' ? o.g.trim().slice(0, 40) : '',
      date:
        typeof o.d === 'number' && Number.isFinite(o.d) && o.d > 0
          ? Math.floor(o.d)
          : Date.now(),
      progress: normalizeProgress({ xp: o.xp, indicators: o.i, badges: o.b, games: o.m }),
    }
  } catch {
    return null
  }
}
