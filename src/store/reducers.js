import { combineReducers } from 'redux'
import * as recommend from './recommend/reducers'

export default combineReducers({
  ...recommend
})
