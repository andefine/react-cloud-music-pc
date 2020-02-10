import { combineReducers } from 'redux'

import appReducer from './app/reducer'
// import { GlobalState } from './global/types'
// import globalReducer from './global/reducer'
import accountReducer from './account/reducer'
// import { IRecommendState } from './recommend/types'
import recommendReducer from './recommend/reducer'
import playerReducer from './player/reducer'

/** 这里可以使用这种比较笨的方式，一个个的添加。比较方便的是使用后面的 ReturnType */
// export interface IRootState {
//   global: GlobalState
//   recommend: IRecommendState
// }

const rootReducer = combineReducers({
  app: appReducer,
  // global: globalReducer,
  account: accountReducer,
  recommend: recommendReducer,
  player: playerReducer,
})

export default rootReducer

// export type RootState = ReturnType<typeof rootReducer>
