import { combineReducers } from 'redux'

import { IGlobalState } from './global/types'
import global from './global/reducer'
import { IRecommendState } from './recommend/types'
import recommend from './recommend/reducer'

export interface IRootState {
  global: IGlobalState,
  recommend: IRecommendState,
}

export default combineReducers({
  global,
  recommend,
})
