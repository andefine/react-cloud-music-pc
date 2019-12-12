import { createStore, applyMiddleware, Action } from 'redux'
import thunkMiddleware, { ThunkAction, ThunkDispatch } from 'redux-thunk'
// import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'

import rootReducer from './rootReducer'
// import rootSaga from './rootSaga'

const middleware = [thunkMiddleware]

// const sagaMiddleware = createSagaMiddleware()

// if (process.env.NODE_ENV === 'development') {
//   const { logger } = require('redux-logger')
//   middleware.push(logger)
// }

const composeEnhancers = composeWithDevTools({})

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middleware)),
)

// sagaMiddleware.run(rootSaga)

export type RootState = ReturnType<typeof rootReducer>

// 参考这里 https://redux.js.org/recipes/usage-with-typescript#usage-with-redux-thunk
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  null,
  Action<string>
>

export interface ThunkDispatchProps<E = null> {
  dispatch: ThunkDispatch<RootState, E, Action<string>>
}

export default store
