import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import global from './global/reducer'

import { GlobalState } from './global/types'

const middleware = [thunk]

if (process.env.NODE_ENV === 'development') {
  const { logger } = require('redux-logger')
  middleware.push(logger)
}

const reducer = combineReducers({
  global,
})

const composeEnhancers = composeWithDevTools({})

export interface RootState {
  global: GlobalState
}

export default createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(...middleware),
  ),
)
