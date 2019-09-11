import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'

import global from './global/reducer'

import { GlobalState } from './global/types'

const sagaMiddleware = createSagaMiddleware()
// const middleware = [thunk]

// if (process.env.NODE_ENV === 'development') {
//   const { logger } = require('redux-logger')
//   middleware.push(logger)
// }

const rootReducer = combineReducers({
  global,
})

const composeEnhancers = composeWithDevTools({})

export interface RootState {
  global: GlobalState
}

const store = createStore(
  rootReducer,
  composeEnhancers(
    // applyMiddleware(...middleware),
    applyMiddleware(sagaMiddleware),
  ),
)

sagaMiddleware.run()

export default store
