import { Reducer } from 'redux'
import { PlayManner, PlayerState } from './types'

const initialState: PlayerState = {
  curIndex: 0,
  idsOfSongs: [],
  playManner: PlayManner.Order,
  songsById: {},
}

const reducer: Reducer<PlayerState> = (state = initialState) => {
  return state
}

export default reducer
