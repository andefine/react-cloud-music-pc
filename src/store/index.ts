/*
 * @Date: 2019-09-07 23:32:17
 * @LastEditTime: 2019-12-15 15:21:05
 * @Description: 这里有许多类型声明啥的，我人晕了 (￣o￣) . z Z
 */
import { createStore, applyMiddleware, Action } from 'redux'
import thunk, { ThunkMiddleware, ThunkAction, ThunkDispatch } from 'redux-thunk'
// import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'

import rootReducer from './rootReducer'
// import rootSaga from './rootSaga'
import { attempLogin } from './app/thunks'

// const middleware = [thunk as ThunkMiddleware<any, Action>]

// const sagaMiddleware = createSagaMiddleware()

// if (process.env.NODE_ENV === 'development') {
//   const { logger } = require('redux-logger')
//   middleware.push(logger)
// }

const composeEnhancers = composeWithDevTools({})

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk as ThunkMiddleware<any, Action>)),
)

// store.dispatch as ThunkDispatch<RootState, undefined, Action>

// sagaMiddleware.run(rootSaga)

export type RootState = ReturnType<typeof rootReducer>

// 参考这里 https://redux.js.org/recipes/usage-with-typescript#usage-with-redux-thunk
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  undefined,
  Action<string>
>

export interface ThunkDispatchProps<E = undefined> {
  dispatch: ThunkDispatch<RootState, E, Action<string>>
}

store.dispatch(attempLogin())

export default store
