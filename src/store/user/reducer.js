import {
  RECEIVE_USER
} from './action-types'
import { combineReducers } from 'redux'

const initialState = {
  detail: {},
  profile: {}
}

const detail = (state = initialState.detail, { type, payload }) => {
  switch (type) {
    case RECEIVE_USER:
      const { detail } = payload
      return detail
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

export default combineReducers({
  detail,
  profile
})
