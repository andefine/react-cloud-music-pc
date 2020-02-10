import { PlayerActionTypes, PlayerAction } from './types'
import { Track } from '@/types/Track'

export const addToPlayerList = (tracks: Track[]): PlayerAction => ({
  type: PlayerActionTypes.ADD_TO_PLAYER_LIST,
  payload: { tracks },
})
