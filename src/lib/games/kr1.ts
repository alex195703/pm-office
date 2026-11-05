// ============================================================
// КЕЙС kr1 · «Бос-файт Модуль 1» — репетиція контрольної
// Теми 1–11 · формат Moodle · 10 питань × 0.5 бала
// ============================================================

import type { ScenarioDef } from '../scenario'

export const KR1: ScenarioDef = {
  id: 'kr1',
  badgeId: 'boss1',
  badgeThreshold: 80,
  effect: { resilience: 2 },
  introKicker: { uk: 'КР №1 · Теми 1–11 · репетиція модульної роботи (Moodle)', en: 'MT #1 · Topics 1–11 · a rehearsal of the module test (Moodle)' },
  title: { uk: '«Бос-файт Модуль 1»', en: '“Boss Fight: Module 1”' },
  summary: {
    uk: 'Десять питань за темами 1–11 у форматі контрольної. 8+ правильних — бейдж.',
    en: 'Ten questions on topics 1–11 in test format. 8+ correct — a badge.',
  },
  durationMin: 15,
  stages: [
    {
      kind: 'quiz',
      id: 'boss',
      title: { uk: 'Бій: 10 питань', en: 'The fight: 10 questions' },
      intro: {
        uk: 'Формат як у контрольній Moodle: одне питання — одна правильна відповідь. Без таймера: мета — розуміння, а не швидкість.',
        en: 'The same format as the Moodle test: one question, one correct answer. No timer: the goal is understanding, not speed.',
      },
      questions: [
        {
          text: { uk: '1. Яка сукупність ознак відрізняє проєкт від поточної діяльності?', en: '1. Which set of features distinguishes a project from ongoing activity?' },
          options: [
            { uk: 'Унікальність, обмеженість у часі, визначеність результату', en: 'Uniqueness, time-boundedness, a defined result' },
            { uk: 'Бюджетність і державне фінансування', en: 'Budget status and state funding' },
            { uk: 'Кількість працівників і обсяг кошторису', en: 'Headcount and estimate size' },
          ],
          correct: 0,
          why: { uk: 'Тема 1: саме ці три ознаки — класичне визначення проєкту.', en: 'Topic 1: these three features are the classic definition of a project.' },
        },
        {
          text: { uk: '2. Правильна послідовність фаз життєвого циклу:', en: '2. The correct order of life-cycle phases:' },
          options: [
            { uk: 'Передінвестиційна → інвестиційна → експлуатаційна', en: 'Pre-investment → investment → operation' },
            { uk: 'Експлуатаційна → інвестиційна → передінвестиційна', en: 'Operation → investment → pre-investment' },
            { uk: 'Інвестиційна → передінвестиційна → експлуатаційна', en: 'Investment → pre-investment → operation' },
          ],
          correct: 0,
          why: { uk: 'Тема 2: фази не перескакують — тільки стискаються.', en: 'Topic 2: phases are not skipped — only compressed.' },
        },
        {
          text: { uk: '3. Альтернативні витрати проєкту — це…', en: '3. The opportunity cost of a project is…' },
          options: [
            { uk: 'Цінність найкращої відхиленої альтернативи', en: 'The value of the best rejected alternative' },
            { uk: 'Сума договорів підряду', en: 'The sum of contractor agreements' },
            { uk: 'Додаткові витрати за додатковими угодами', en: 'Extra costs under supplementary agreements' },
          ],
          correct: 0,
          why: { uk: 'Тема 3: обираючи один проєкт, громада «платить» цінністю другого найкращого.', en: 'Topic 3: choosing one project, the community “pays” the value of the second best.' },
        },
        {
          text: { uk: '4. Дисконтування — це приведення…', en: '4. Discounting reduces…' },
          options: [
            { uk: 'Майбутніх грошей до їх теперішньої вартості', en: 'Future money to its present value' },
            { uk: 'Теперішніх грошей до майбутньої вартості', en: 'Present money to its future value' },
            { uk: 'Цін в межах одного року', en: 'Prices within a single year' },
          ],
          correct: 0,
          why: { uk: 'Тема 4: PV = FV/(1+r)ⁿ — рух назад часовою віссю.', en: 'Topic 4: PV = FV/(1+r)ⁿ — moving backward on the time axis.' },
        },
        {
          text: { uk: '5. Проєкт приймають, коли NPV…', en: '5. A project is accepted when its NPV…' },
          options: [
            { uk: '> 0', en: '> 0' },
            { uk: '= 0 незалежно від ставки', en: '= 0 regardless of the rate' },
            { uk: '< 0, але IRR високий', en: '< 0, but the IRR is high' },
          ],
          correct: 0,
          why: { uk: 'Тема 5: NPV > 0 — проєкт додає цінності у сьогоднішніх грошах.', en: 'Topic 5: NPV > 0 means the project adds value in today’s money.' },
        },
        {
          text: { uk: '6. Дерево цілей побудовано правильно, якщо…', en: '6. A goal tree is correct when…' },
          options: [
            { uk: 'Кожне завдання служить підцілі, а підцілі — головній цілі', en: 'Every task serves a sub-goal and every sub-goal serves the main goal' },
            { uk: 'Цілі перелічені в алфавітному порядку', en: 'The goals are listed alphabetically' },
            { uk: 'Кількість цілей дорівнює кількості робіт', en: 'The number of goals equals the number of works' },
          ],
          correct: 0,
          why: { uk: 'Тема 6: вертикальна логіка «заради чого» — головний тест дерева.', en: 'Topic 6: the vertical “for the sake of what” logic is the tree’s main test.' },
        },
        {
          text: { uk: '7. Правило 100 % у WBS означає, що…', en: '7. The 100% rule in WBS means…' },
          options: [
            { uk: 'Сума дочірніх елементів повністю покриває батьківський обсяг', en: 'Child elements fully cover the parent scope' },
            { uk: '100 % робіт виконано в строк', en: '100% of works are done on time' },
            { uk: 'Бюджет використано повністю', en: 'The budget is fully used' },
          ],
          correct: 0,
          why: { uk: 'Тема 7: повнота декомпозиції — без дублювань і «позаструктурних» робіт.', en: 'Topic 7: completeness of decomposition — no duplicates, no outside works.' },
        },
        {
          text: { uk: '8. Критичний шлях мережевого графіка — це…', en: '8. The critical path of a network diagram is…' },
          options: [
            { uk: 'Найдовший шлях залежних робіт; його затримка зриває строк', en: 'The longest chain of dependent works; its delay breaks the deadline' },
            { uk: 'Найдорожча робота проєкту', en: 'The most expensive work of the project' },
            { uk: 'Шлях із найбільшою кількістю виконавців', en: 'The path with the most performers' },
          ],
          correct: 0,
          why: { uk: 'Тема 8: строк визначає довжина ланцюга залежностей, а не ціна.', en: 'Topic 8: the deadline is set by the chain length, not by cost.' },
        },
        {
          text: { uk: '9. У кризовій комунікації правильний принцип:', en: '9. The right principle in crisis communication:' },
          options: [
            { uk: 'Один офіційний спікер, багато каналів, факти + джерело', en: 'One official spokesperson, many channels, facts + a source' },
            { uk: 'Кожен співробітник коментує як знає', en: 'Every employee comments as they see fit' },
            { uk: 'Повне мовчання до завершення розслідування', en: 'Complete silence until the investigation ends' },
          ],
          correct: 0,
          why: { uk: 'Тема 9: одне джерело правди запобігає суперечним версіям.', en: 'Topic 9: one source of truth prevents conflicting versions.' },
        },
        {
          text: { uk: '10. Інструмент календарного планування з перерахунком залежностей обирають, коли…', en: '10. A scheduling tool with dependency recalculation is chosen when…' },
          options: [
            { uk: 'У графіка багато зв’язаних робіт і зсув однієї міняє інші', en: 'The schedule has many linked works and shifting one changes others' },
            { uk: 'Треба зробити один список покупок', en: 'You need one shopping list' },
            { uk: 'Бюджет ІТ не має значення', en: 'The IT budget does not matter' },
          ],
          correct: 0,
          why: { uk: 'Тема 10: Гант-система виграє там, де зв’язки не перерахувати руками.', en: 'Topic 10: a Gantt system wins where links cannot be recalculated by hand.' },
        },
      ],
    },
  ],
  debrief: {
    heading: { uk: 'Бос Модулю 1 переможений', en: 'The Module 1 boss is defeated' },
    recap: [
      { uk: 'Повторіть питання, у яких помилились — на контрольній вони прийдуть у іншому одязі.', en: 'Review the questions you missed — at the test they will come in different clothes.' },
      { uk: 'Формула успіху КР: три ознаки проєкту → фази → цінність → дисконт → NPV → WBS → критичний шлях.', en: 'The MT success formula: three features → phases → value → discount → NPV → WBS → critical path.' },
    ],
  },
}
