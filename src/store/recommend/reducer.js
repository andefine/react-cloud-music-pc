import { combineReducers } from 'redux'

import {
  RECEIVE_DATA
} from './action-types'

const initialState = {
  banners: [],
  playlists: [],
  privateContents: [],
  latestMusics: []
}

const banners = (state = initialState.banners, { type, payload }) => {
  switch (type) {
    case RECEIVE_DATA:
      return [
        ...state,
        ...payload.banners
      ]
    default:
      return state
  }
}

const playlists = (state = initialState.playlists, { type, payload }) => {
  switch (type) {
    case RECEIVE_DATA:
      return [
        ...state,
        ...payload.playlists
      ]
    default:
      return state
  }
}

const privateContents = (state = initialState.privateContents, { type, payload }) => {
  switch (type) {
    case RECEIVE_DATA:
      return [
        ...state,
        ...payload.privateContents
      ]
    default:
      return state
  }
}

const latestMusics = (state = initialState.latestMusics, { type, payload }) => {
  switch (type) {
    case RECEIVE_DATA:
      return [
        ...state,
        ...payload.latestMusics
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
