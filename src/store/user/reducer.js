import { combineReducers } from 'redux'
import {
  SHOW_LOGIN_MODAL,
  HIDE_LOGIN_MODAL,
  RECEIVE_PROFILE
} from './action-types'

const initialState = {
  isLoginShow: false,
  // account: {},
  profile: {}
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

// const account = (state = initialState.account, { type, payload }) => {
//   switch (type) {
//     case RECEIVE_LOGIN_INFO:
//       return {
//         ...payload.account
//       }
//     default:
//       return state
//   }
// }

const profile = (state = initialState.profile, { type, profile }) => {
  switch (type) {
    case RECEIVE_PROFILE:
      return {
        ...profile
      }
    default:
      return state
  }
}

export default combineReducers({
  isLoginShow,
  // account,
  profile
})
