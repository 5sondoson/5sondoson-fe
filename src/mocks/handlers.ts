import { playerSearchHandler } from './handlers/playerSearch'
import { adminPredictionHandlers } from './handlers/adminPrediction'

export const handlers = [playerSearchHandler, ...adminPredictionHandlers]
