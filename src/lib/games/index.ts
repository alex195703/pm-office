// ============================================================
// РЕЄСТР СЦЕНАРНИХ КЕСІВ: id → ScenarioDef
// Порядок course = хронологія курсу (після g1).
// ============================================================

import type { ScenarioDef } from '../scenario'
import { G2 } from './g2'
import { G3 } from './g3'
import { G4 } from './g4'
import { G5 } from './g5'
import { G6 } from './g6'
import { G7 } from './g7'
import { G8 } from './g8'
import { G9 } from './g9'
import { G10 } from './g10'
import { G11 } from './g11'
import { G12 } from './g12'
import { G13 } from './g13'
import { G14 } from './g14'
import { G15 } from './g15'
import { KR1 } from './kr1'
import { KR2 } from './kr2'
import { CAP } from './cap'
import { EXAM } from './exam'

export const GAMES: Record<string, ScenarioDef> = {
  g2: G2,
  g3: G3,
  g4: G4,
  g5: G5,
  g6: G6,
  g7: G7,
  g8: G8,
  g9: G9,
  g10: G10,
  g11: G11,
  g12: G12,
  g13: G13,
  g14: G14,
  g15: G15,
  kr1: KR1,
  kr2: KR2,
  cap: CAP,
  exam: EXAM,
}

/** Порядок проходження курсу після кейса 1 */
export const GAME_ORDER: string[] = [
  'g2', 'g3', 'g4', 'g5', 'g6', 'g7', 'g8', 'g9', 'g10', 'kr1',
  'g11', 'g12', 'g13', 'g14', 'g15', 'kr2', 'cap', 'exam',
]
