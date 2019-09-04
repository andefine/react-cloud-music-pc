import { combineReducers } from 'redux'
import {
  SHOW_LOGIN_MODAL,
  HIDE_LOGIN_MODAL,
  RECEIVE_ACCOUNT_DETAIL,
  RECEIVE_ACCOUNT_PLAYLISTS,
  LOGOUT_ACTION
} from './action-types'

const initialState = {
  isLoginShow: false,
  detail: {},
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

const detail = (state = initialState.detail, { type, payload }) => {
  switch (type) {
    case RECEIVE_ACCOUNT_DETAIL:
      const { detail } = payload
      return detail
    case LOGOUT_ACTION:
      return {}
    default:
      return state
  }
}

const profile = (state = initialState.profile, { type, payload }) => {
  switch (type) {
    case RECEIVE_ACCOUNT_DETAIL:
      const { profile } = payload
      return profile
    case LOGOUT_ACTION:
      return {}
    default:
      return state
  }
}

const playlists = (state = initialState.playlists, { type, playlists }) => {
  switch (type) {
    case RECEIVE_ACCOUNT_PLAYLISTS:
      return playlists
    case LOGOUT_ACTION:
      return []
    default:
      return state
  }
}

export default combineReducers({
  isLoginShow,
  detail,
  profile,
  playlists
})
