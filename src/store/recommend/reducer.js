import { combineReducers } from 'redux'

import {
  RECEIVE_BANNERS,
  RECEIVE_PLAYLISTS,
  RECEIVE_PRIVATE_CONTENTS,
  RECEIVE_LATEST_MUSICS
} from './action-types'

const initialState = {
  banners: [],
  playlists: [],
  privateContents: [],
  latestMusics: []
}

const banners = (state = initialState.banners, action) => {
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

const privateContents = (state = initialState.privateContents, action) => {
  switch (action.type) {
    case RECEIVE_PRIVATE_CONTENTS:
      return [
        ...state,
        ...action.privateContents
      ]
    default:
      return state
  }
}

const latestMusics = (state = initialState.latestMusics, action) => {
  switch (action.type) {
    case RECEIVE_LATEST_MUSICS:
      return [
        ...state,
        ...action.latestMusics
      ]
    default:
      return state
  }
}

export default combineReducers({
  banners,
  playlists,
  privateContents,
  latestMusics
})
