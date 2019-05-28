import { combineReducers } from 'redux'
import {
  SHOW_LOGIN_MODAL,
  HIDE_LOGIN_MODAL,
  RECEIVE_USER
} from './action-types'

const initialState = {
  isLoginShow: false,
  profile: {},
  playlists: []
}

const isLoginShow = (state = initialState.isLoginShow, { type }) => {
  switch (type) {
    case SHOW_LOGIN_MODAL:
      return true
    case HIDE_LOGIN_MODAL:
      return false
    default:
      return state
  }
}

const profile = (state = initialState.profile, { type, payload }) => {
  switch (type) {
    case RECEIVE_USER:
      const { profile } = payload
      return profile
    default:
      return state
  }
}

const playlists = (state = initialState.playlists, { type, payload }) => {
  switch (type) {
    case RECEIVE_USER:
      const { playlists } = payload
      return playlists
    default:
      return state
  }
}

export default combineReducers({
  isLoginShow,
  profile,
  playlists
})
