import { combineReducers } from 'redux'

import {
  RECEIVE_BANNERS
} from './action-types'

const initialState = {
  banners: []
}

export function banners (state = initialState.banners, action) {
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

export default combineReducers({
  banners
})
