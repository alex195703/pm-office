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
    xp: 500,
    title: {
      uk: 'Керівник сектора проєктів',
      en: 'Head of the Project Unit',
    },
  },
  {
    id: 'dept',
    xp: 1100,
    title: {
      uk: 'Директор департаменту регіонального розвитку',
      en: 'Director of the Regional Development Department',
    },
  },
  {
    id: 'office',
    xp: 1700,
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
  {
    id: 'scales',
    icon: '⚖️',
    name: { uk: 'Хранитель цінності', en: 'Value Keeper' },
    condition: {
      uk: 'Зважити явні й неявні вигоди у «Вагах громади» без помилок',
      en: 'Weigh explicit and implicit benefits in “Community Scales” without mistakes',
    },
    topic: { uk: 'Тема 3', en: 'Topic 3' },
  },
  {
    id: 'planner',
    icon: '📐',
    name: { uk: 'Архітектор плану', en: 'Plan Architect' },
    condition: {
      uk: 'Зібрати дерево цілей і структуру плану у «План-конструкторі»',
      en: 'Assemble the goal tree and plan structure in the “Plan Builder”',
    },
    topic: { uk: 'Тема 6', en: 'Topic 6' },
  },
  {
    id: 'boss1',
    icon: '🛡️',
    name: { uk: 'Завойовник Модулю 1', en: 'Module 1 Conqueror' },
    condition: {
      uk: 'Дати ≥ 8 правильних відповідей у «Бос-файті Модуль 1»',
      en: 'Give ≥ 8 correct answers in “Boss Fight: Module 1”',
    },
    topic: { uk: 'КР №1', en: 'MT #1' },
  },
  {
    id: 'boss2',
    icon: '⚔️',
    name: { uk: 'Завойовник Модулю 2', en: 'Module 2 Conqueror' },
    condition: {
      uk: 'Дати ≥ 8 правильних відповідей у «Бос-файті Модуль 2»',
      en: 'Give ≥ 8 correct answers in “Boss Fight: Module 2”',
    },
    topic: { uk: 'КР №2', en: 'MT #2' },
  },
  {
    id: 'graduate',
    icon: '🎓',
    name: { uk: 'Випускник проєктного офісу', en: 'PM Office Graduate' },
    condition: {
      uk: 'Пройти симулятор екзамену з повним білетом',
      en: 'Complete the exam simulator with a full ticket',
    },
    topic: { uk: 'Екзамен', en: 'Exam' },
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
  {
    id: 'c13',
    text: {
      uk: 'Провести свято «День повернення Соснівки» на центральній площі',
      en: 'Hold the “Day of Sosnivka’s Return” festival on the central square',
    },
    isProject: true,
    why: {
      uk: 'Разова подія з датою, унікальною програмою і визначеним результатом — святом, якого раніше не було.',
      en: 'A one-off event with a date, a unique programme and a defined result — a festival that never existed before.',
    },
  },
  {
    id: 'c14',
    text: {
      uk: 'Щоденне прибирання та вивезення сміття в центральному парку',
      en: 'Daily cleaning and waste collection in the central park',
    },
    isProject: false,
    why: {
      uk: 'Постійна операційна діяльність комунальної служби: цикл повторюється щодня і не має дати завершення.',
      en: 'Continuous municipal operations: the cycle repeats daily and has no end date.',
    },
  },
  {
    id: 'c15',
    text: {
      uk: 'Створити мобільний додаток «Соснівка Онлайн» для звернень мешканців',
      en: 'Create the “Sosnivka Online” mobile app for residents’ requests',
    },
    isProject: true,
    why: {
      uk: 'Продукт створюється один раз: є унікальний результат (працюючий додаток), бюджет, команда і дата релізу.',
      en: 'The product is built once: there is a unique outcome (a working app), a budget, a team and a release date.',
    },
  },
  {
    id: 'c16',
    text: {
      uk: 'Щомісяця виплачувати субсидії мешканцям за затвердженими правилами',
      en: 'Pay monthly subsidies to residents under the approved rules',
    },
    isProject: false,
    why: {
      uk: 'Регулярна процедура соціальної підтримки: повторюється щомісяця за сталим регламентом, без кінцевого результату.',
      en: 'A regular social-support procedure: it repeats monthly under a standing regulation, with no finite outcome.',
    },
  },
  {
    id: 'c17',
    text: {
      uk: 'Капітально відремонтувати тепломережу мікрорайону до опалювального сезону',
      en: 'Overhaul the neighbourhood heating network before the heating season',
    },
    isProject: true,
    why: {
      uk: 'Разова капітальна робота з чітким обсягом, бюджетом і дедлайном — не плутати з плановим технічним обслуговуванням.',
      en: 'A one-off capital effort with a clear scope, budget and deadline — not to be confused with scheduled maintenance.',
    },
  },
  {
    id: 'c18',
    text: {
      uk: 'Підтримувати роботу модульного укриття при школі № 3: черги, прибирання, дрібний ремонт',
      en: 'Maintain the modular shelter at School No. 3: duty shifts, cleaning, minor repairs',
    },
    isProject: false,
    why: {
      uk: 'Це вже експлуатація результату минулого проєкту: діяльність безперервна, результати повторювані. Проєкт закінчився — почалася рутина.',
      en: 'This is operation of a past project’s result: continuous activity with repetitive outcomes. The project ended — routine began.',
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
  {
    id: 'r3',
    title: { uk: 'Проєкт «Мобільний додаток “Соснівка Онлайн”»', en: 'Project “Sosnivka Online mobile app”' },
    intro: {
      uk: 'Громада хоче приймати звернення мешканців у смартфоні. Розподіліть учасників за ролями — тут є пастка: двоє претендують на схожі функції.',
      en: 'The community wants to receive residents’ requests in a smartphone. Assign the participants — there is a trap here: two of them claim similar functions.',
    },
    participants: [
      {
        id: 'z1',
        name: { uk: 'Департамент цифрового розвитку міської ради', en: 'City council digital development department' },
        hint: {
          uk: 'Замовив розробку, формує технічне завдання і приймає готовий додаток',
          en: 'Commissioned the development, sets the terms of reference and accepts the finished app',
        },
        roleId: 'customer',
      },
      {
        id: 'z2',
        name: { uk: 'ІТ-студія «Код.Соснівка»', en: 'Kod.Sosnivka IT studio' },
        hint: {
          uk: 'Проєктує, розробляє й запускає додаток за договором',
          en: 'Designs, develops and launches the app under contract',
        },
        roleId: 'contractor',
      },
      {
        id: 'z3',
        name: { uk: 'Мешканці, які надсилатимуть звернення зі смартфонів', en: 'Residents who will submit requests from their smartphones' },
        hint: {
          uk: 'Заради їхньої зручності додаток і створюють; їхні потреби = вимоги',
          en: 'The app is built for their convenience; their needs are the requirements',
        },
        roleId: 'user',
      },
      {
        id: 'z4',
        name: { uk: 'Міський голова, який контролює проєкт і знімає перешкоди', en: 'The mayor who supervises the project and removes obstacles' },
        hint: {
          uk: 'Верховний нагляд і політична підтримка: без нього закупівля не відбудеться',
          en: 'Top-level oversight and political support: without them the procurement will not happen',
        },
        roleId: 'curator',
      },
    ],
  },
]

// ------------------------------------------------------------
// ГРА 1 · РІВЕНЬ 2 — перевірка ознак (множинний вибір)
// РІВЕНЬ 3 — збирання концепції мініпроєкту (3 рішення)
// ------------------------------------------------------------

export interface SignsCheck {
  caseText: Bi
  question: Bi
  options: { text: Bi; correct: boolean; why: Bi }[]
}

export const G1_SIGNS_CHECK: SignsCheck = {
  caseText: {
    uk: 'Міська рада має відновити спортивний майданчик у парку «Дружба»: змонтувати покриття, встановити снаряди й освітлення, відкрити майданчик до кінця серпня.',
    en: 'The city council has to restore a sports ground in the Druzhba park: lay the surface, install equipment and lighting, and open the ground by the end of August.',
  },
  question: {
    uk: 'Які твердження правильно описують цю роботу саме як проєкт? Оберіть УСІ правильні варіанти.',
    en: 'Which statements correctly describe this work as a project? Select ALL correct options.',
  },
  options: [
    {
      text: { uk: 'Результат унікальний: такого оновленого майданчика в парку ще не було', en: 'The result is unique: the park has never had a renovated ground like this' },
      correct: true,
      why: { uk: 'Так — це ознака унікальності.', en: 'Yes — this is the uniqueness feature.' },
    },
    {
      text: { uk: 'Роботи триватимуть без обмеження в часі', en: 'The work will continue without a time limit' },
      correct: false,
      why: { uk: 'Ні — у проєкту завжди є дедлайн: тут це кінець серпня. Безстроковість — ознака рутини.', en: 'No — a project always has a deadline: here it is the end of August. An open horizon is a feature of routine.' },
    },
    {
      text: { uk: 'Відомо, що саме буде створено: покриття, снаряди, освітлення', en: 'It is known exactly what will be created: surface, equipment, lighting' },
      correct: true,
      why: { uk: 'Так — це ознака визначеності результату.', en: 'Yes — this is the defined-result feature.' },
    },
    {
      text: { uk: 'Процес повторюється щомісяця за графіком', en: 'The process repeats monthly on schedule' },
      correct: false,
      why: { uk: 'Ні — повторюваність характеризує поточну діяльність, а не проєкт.', en: 'No — repetitiveness describes ongoing operations, not a project.' },
    },
    {
      text: { uk: 'Робота обмежена в часі: відкриття до кінця серпня', en: 'The work is time-bound: opening by the end of August' },
      correct: true,
      why: { uk: 'Так — це ознака обмеженості в часі.', en: 'Yes — this is the time-bound feature.' },
    },
  ],
}

export interface ConceptPick {
  prompt: Bi
  options: { text: Bi; quality: 'best' | 'ok' | 'poor'; feedback: Bi }[]
}

export const G1_CONCEPT_PICKS: ConceptPick[] = [
  {
    prompt: {
      uk: 'Крок 1 · Мета проєкту «Укриття при школі № 3». Яке формулювання найкраще?',
      en: 'Step 1 · The goal of the “Shelter at School No. 3” project. Which wording is best?',
    },
    options: [
      {
        text: {
          uk: 'До 1 вересня обладнати укриття на 300 місць, щоб навчання не переривалося через тривоги',
          en: 'By 1 September equip a 300-seat shelter so that schooling is not interrupted by alerts',
        },
        quality: 'best',
        feedback: {
          uk: 'Саме так: конкретний результат, строк і користь для людей — усе в одному реченні.',
          en: 'Exactly: a concrete result, a deadline and a benefit for people — all in one sentence.',
        },
      },
      {
        text: { uk: 'Зробити укриття якнайшвидше і якнайкраще', en: 'Make the shelter as soon as possible and as good as possible' },
        quality: 'ok',
        feedback: {
          uk: 'Напрям правильний, але перевірити таку мету неможливо: що таке «якнайшвидше» і «якнайкраще»?',
          en: 'The direction is right, but such a goal cannot be verified: what exactly are “as soon” and “as good”?',
        },
      },
      {
        text: { uk: 'Знайти винних у руйнуванні школи і покарати їх', en: 'Find those responsible for the school damage and punish them' },
        quality: 'poor',
        feedback: {
          uk: 'Це не мета проєкту відбудови: вона не створює результату для учнів.',
          en: 'This is not a recovery project goal: it creates no result for the pupils.',
        },
      },
    ],
  },
  {
    prompt: {
      uk: 'Крок 2 · Результат проєкту. Що буде «продуктом» роботи команди?',
      en: 'Step 2 · The project result. What is the team’s “product”?',
    },
    options: [
      {
        text: {
          uk: 'Працююче укриття на 300 місць, прийняте комісією, з журналом чергувань',
          en: 'A working 300-seat shelter accepted by the commission, with a duty log',
        },
        quality: 'best',
        feedback: {
          uk: 'Так: результат можна пред’явити і перевірити — готовий об’єкт, акт, журнал.',
          en: 'Right: the result can be shown and verified — a finished facility, an acceptance act, a log.',
        },
      },
      {
        text: { uk: 'Новий модульний будинок на території школи', en: 'A new modular building on the school grounds' },
        quality: 'ok',
        feedback: {
          uk: 'Частково так: це фізичний об’єкт, але не сказано, чи він готовий до використання за призначенням.',
          en: 'Partly: it is a physical object, but nothing says it is ready to be used as intended.',
        },
      },
      {
        text: { uk: 'Звіт про використання бюджетних коштів', en: 'A report on the use of budget funds' },
        quality: 'poor',
        feedback: {
          uk: 'Звіт — документ про процес. Користувачі (діти) не ховаються у звітах під час тривоги.',
          en: 'A report is a document about the process. Users (children) do not hide in reports during alerts.',
        },
      },
    ],
  },
  {
    prompt: {
      uk: 'Крок 3 · Строк завершення. Який підхід правильний?',
      en: 'Step 3 · The completion deadline. Which approach is right?',
    },
    options: [
      {
        text: {
          uk: 'До 31 серпня — за два тижні до початку навчального року, з запасом на випробування',
          en: 'By 31 August — two weeks before the school year, with a margin for testing',
        },
        quality: 'best',
        feedback: {
          uk: 'Так: строк прив’язаний до події, яка важлива користувачам, і має запас.',
          en: 'Right: the deadline is tied to the event that matters to users and has a margin.',
        },
      },
      {
        text: { uk: 'Коли знайдемо підрядника — тоді й визначимося', en: 'When we find a contractor — then we will see' },
        quality: 'poor',
        feedback: {
          uk: 'Без строки немає проєкту: ні плану, ні відповідальності, ні підстави для семінарського бала.',
          en: 'Without a deadline there is no project: no plan, no accountability, no ground for a seminar point.',
        },
      },
      {
        text: { uk: 'До 30 листопада: літо краще присвятити іншим справам', en: 'By 30 November: summer is better spent on other matters' },
        quality: 'ok',
        feedback: {
          uk: 'Строк є, але він пропускає весь початок навчального року — головну потребу користувачів.',
          en: 'There is a deadline, but it misses the entire start of the school year — the users’ key need.',
        },
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
  correctSigns: number
  totalSigns: number
  conceptScore: number
  conceptMax: number
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
  correctSigns: number,
  totalSigns: number,
  conceptScore: number,
  conceptMax: number,
  firstCompletion: boolean,
): Game1Outcome {
  const mistakes =
    totalCards - correctCards +
    (totalRoles - correctRoles) +
    (totalSigns - correctSigns) +
    (conceptMax - conceptScore)
  const perfect = mistakes === 0
  const raw =
    correctCards * XP_PER_CORRECT +
    correctRoles * XP_PER_CORRECT +
    correctSigns * XP_PER_CORRECT +
    conceptScore +
    (firstCompletion ? XP_COMPLETION_BONUS : 0)
  const xp = firstCompletion ? raw : Math.floor(raw * REPLAY_FACTOR)
  const effect: Partial<Indicators> = firstCompletion
    ? { ...G1_FIRST_EFFECT, ...(perfect ? G1_PERFECT_EFFECT : {}) }
    : {}
  return {
    correctCards,
    totalCards,
    correctRoles,
    totalRoles,
    correctSigns,
    totalSigns,
    conceptScore,
    conceptMax,
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
