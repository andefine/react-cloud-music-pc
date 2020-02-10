import { PlayMode, PlayerState, PlayerAction, PlayerActionTypes } from './types'

const initialState: PlayerState = {
  curIndex: -1,
  playingTracks: [],
  idsOfSongs: [],
  PlayMode: PlayMode.Order,
  songsById: {},
}

// const

const reducer = (state = initialState, action: PlayerAction): PlayerState => {
  switch (action.type) {
    case PlayerActionTypes.ADD_TO_PLAYER_LIST:
      return {
        ...state,
        curIndex: 0,
        playingTracks: action.payload.tracks,
      }

    default:
      return state
  }
}

export default reducer
