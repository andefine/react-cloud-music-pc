import { combineReducers } from 'redux'

import { IGlobalState } from './global/types'
import global from './global/reducer'

export interface IRootState {
  global: IGlobalState
}

export default combineReducers({
  global,
})
