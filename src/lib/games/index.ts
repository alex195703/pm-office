// ============================================================
// РЕЄСТР СЦЕНАРНИХ КЕСІВ: id → ScenarioDef
// Порядок course = хронологія курсу (після g1).
// ============================================================

import type { ScenarioDef } from '../scenario'
import { G2 } from './g2'
import { G3 } from './g3'
import { G4 } from './g4'
import { G5 } from './g5'

export const GAMES: Record<string, ScenarioDef> = {
  g2: G2,
  g3: G3,
  g4: G4,
  g5: G5,
}

/** Порядок проходження курсу після кейса 1 */
export const GAME_ORDER: string[] = ['g2', 'g3', 'g4', 'g5']
