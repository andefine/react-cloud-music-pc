import { combineReducers } from 'redux'

import {
  RECEIVE_BANNERS,
  RECEIVE_PLAYLISTS
} from './action-types'

const initialState = {
  banners: [],
  playlists: []
}

function banners (state = initialState.banners, action) {
  switch (action.type) {
    case RECEIVE_BANNERS:
      return [
        ...state,
        ...action.banners
      ]
    default:
      return state
  }
}

const playlists = (state = initialState.playlists, action) => {
  switch (action.type) {
    case RECEIVE_PLAYLISTS:
      return [
        ...state,
        ...action.playlists
      ]
    default:
      return state
  }
}

export default combineReducers({
  banners,
  playlists
})
