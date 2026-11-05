// ============================================================
// КЕЙС kr2 · «Бос-файт Модуль 2» — репетиція контрольної
// Теми 12–17 · формат Moodle · 10 питань × 0.5 бала
// ============================================================

import type { ScenarioDef } from '../scenario'

export const KR2: ScenarioDef = {
  id: 'kr2',
  badgeId: 'boss2',
  badgeThreshold: 80,
  effect: { resilience: 2 },
  introKicker: { uk: 'КР №2 · Теми 12–17 · репетиція модульної роботи (Moodle)', en: 'MT #2 · Topics 12–17 · a rehearsal of the module test (Moodle)' },
  title: { uk: '«Бос-файт Модуль 2»', en: '“Boss Fight: Module 2”' },
  summary: {
    uk: 'Десять питань за темами 12–17: аналізи, ризики, сценарії. 8+ правильних — бейдж.',
    en: 'Ten questions on topics 12–17: analyses, risks, scenarios. 8+ correct — a badge.',
  },
  durationMin: 15,
  stages: [
    {
      kind: 'quiz',
      id: 'boss',
      title: { uk: 'Бій: 10 питань', en: 'The fight: 10 questions' },
      intro: {
        uk: 'Формат контрольної Moodle: одне питання — одна правильна відповідь. Без таймера.',
        en: 'The Moodle test format: one question, one correct answer. No timer.',
      },
      questions: [
        {
          text: { uk: '1. Маркетинговий аналіз проєкту відповідає на питання…', en: '1. The marketing analysis of a project answers…' },
          options: [
            { uk: 'Хто користувач, скільки їх і які в них потреби й поведінка', en: 'Who the users are, how many, and their needs and behaviour' },
            { uk: 'Скільки коштує фундамент', en: 'How much the foundation costs' },
            { uk: 'Яка ставка дисконту правильна', en: 'Which discount rate is right' },
          ],
          correct: 0,
          why: { uk: 'Тема 11: маркетинговий аналіз — про людей і попит.', en: 'Topic 11: marketing analysis is about people and demand.' },
        },
        {
          text: { uk: '2. Спроможність установи-експлуатанта перевіряє блок…', en: '2. The operating institution’s capacity is checked by the…' },
          options: [
            { uk: '«Установи» досьє проєкту', en: '“Institutions” block of the project dossier' },
            { uk: 'Блок «Ринок»', en: '“Market” block' },
            { uk: 'Ніхто — це не обов’язково', en: 'None — it is optional' },
          ],
          correct: 0,
          why: { uk: 'Тема 11: без спроможного господаря результат деградує.', en: 'Topic 11: without a capable owner the result degrades.' },
        },
        {
          text: { uk: '3. Прибережна захисна смага на ділянці — фільтр…', en: '3. A coastal protection zone on a plot is a filter of the…' },
          options: [
            { uk: 'Екологічного та правового аналізу', en: 'Environmental and legal analysis' },
            { uk: 'Маркетингового аналізу', en: 'Marketing analysis' },
            { uk: 'Фінансового аналізу', en: 'Financial analysis' },
          ],
          correct: 0,
          why: { uk: 'Тема 12: зони обмежень — екологічний режим + правова перевірка.', en: 'Topic 12: restricted zones are an environmental regime + a legal check.' },
        },
        {
          text: { uk: '4. Ризик — це…', en: '4. A risk is…' },
          options: [
            { uk: 'Невизначена подія, що впливає на цілі за настанням', en: 'An uncertain event that affects objectives if it occurs' },
            { uk: 'Проблема, що вже сталась', en: 'A problem that already happened' },
            { uk: 'Обов’язково збиток більше 100 тис.', en: 'Necessarily a loss over 100k' },
          ],
          correct: 0,
          why: { uk: 'Тема 13: ризик — про майбутню невизначеність.', en: 'Topic 13: a risk is about future uncertainty.' },
        },
        {
          text: { uk: '5. Пріоритет ризику в матриці визначає…', en: '5. A risk’s priority in the matrix is set by…' },
          options: [
            { uk: 'Твір ймовірності та впливу', en: 'The product of probability and impact' },
            { uk: 'Алфавітний порядок у реєстрі', en: 'Alphabetical order in the register' },
            { uk: 'Дума керівника', en: 'The manager’s opinion' },
          ],
          correct: 0,
          why: { uk: 'Тема 13: «ймовірність × вплив» ранжує чергу реагувань.', en: 'Topic 13: “probability × impact” ranks the response queue.' },
        },
        {
          text: { uk: '6. Перехід ризику на страхувальника — це стратегія…', en: '6. Moving a risk to an insurer is the strategy of…' },
          options: [
            { uk: 'Передача', en: 'Transfer' },
            { uk: 'Уникнення', en: 'Avoidance' },
            { uk: 'Прийняття', en: 'Acceptance' },
          ],
          correct: 0,
          why: { uk: 'Тема 14: передача змінює того, хто платить за настання.', en: 'Topic 14: transfer changes who pays if it hits.' },
        },
        {
          text: { uk: '7. Прийняття ризику доцільне, коли…', en: '7. Risk acceptance is sensible when…' },
          options: [
            { uk: 'Вартість реагування перевищує очікувану втрату', en: 'The response cost exceeds the expected loss' },
            { uk: 'Керівник не хоче думати', en: 'The manager does not want to think' },
            { uk: 'Ризик не внесено в реєстр', en: 'The risk is not in the register' },
          ],
          correct: 0,
          why: { uk: 'Тема 14: прийняття — свідоме економічне рішення з резервом.', en: 'Topic 14: acceptance is a conscious economic choice backed by a reserve.' },
        },
        {
          text: { uk: '8. Очікуване значення варіанта рахується як…', en: '8. The expected value of an option is computed as…' },
          options: [
            { uk: 'Сума добутків результатів на їх ймовірності', en: 'The sum of outcomes weighted by their probabilities' },
            { uk: 'Найкращий результат серед гілок', en: 'The best outcome among branches' },
            { uk: 'Середнє арифметичне без ваг', en: 'A plain arithmetic mean without weights' },
          ],
          correct: 0,
          why: { uk: 'Тема 15: ваги ймовірностей — суть очікування.', en: 'Topic 15: probability weights are the essence of expectation.' },
        },
        {
          text: { uk: '9. Критерій maximin обирає альтернативу з…', en: '9. The maximin criterion picks the alternative with…' },
          options: [
            { uk: 'Найкращим із найгірших результатів', en: 'The best of the worst outcomes' },
            { uk: 'Найбільшим очікуванням', en: 'The highest expectation' },
            { uk: 'Найдешевшим входом', en: 'The cheapest entry' },
          ],
          correct: 0,
          why: { uk: 'Тема 15: страховий критерій для стійкості громади.', en: 'Topic 15: the insurance criterion for community resilience.' },
        },
        {
          text: { uk: '10. Пороги запуску плану Б домовляють…', en: '10. The thresholds for launching plan B are agreed…' },
          options: [
            { uk: 'Заздалегідь, до шторму', en: 'In advance, before the storm' },
            { uk: 'Під час кризи', en: 'During the crisis' },
            { uk: 'Ніколи — план Б робить команду ледачою', en: 'Never — plan B makes the team lazy' },
          ],
          correct: 0,
          why: { uk: 'Тема 15: протокол до шторму перетворює кризу на процедуру.', en: 'Topic 15: a protocol before the storm turns a crisis into a procedure.' },
        },
      ],
    },
  ],
  debrief: {
    heading: { uk: 'Бос Модулю 2 переможений', en: 'The Module 2 boss is defeated' },
    recap: [
      { uk: 'Повторіть питання з помилками — на контрольній формат той самий.', en: 'Review the missed questions — the test uses the same format.' },
      { uk: 'Формула Модулю 2: досьє (4+4 аналізи) → реєстр ризиків → 4 стратегії → сценарії і критерії.', en: 'The Module 2 formula: the dossier (4+4 analyses) → the risk register → 4 strategies → scenarios and criteria.' },
    ],
  },
}
