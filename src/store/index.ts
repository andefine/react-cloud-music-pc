import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'

import global from './global/reducer'

const middleware = [thunk]

if (process.env.NODE_ENV === 'development') {
  const { logger } = require('redux-logger')
  middleware.push(logger)
}

const reducer = combineReducers({
  global,
})

export default createStore(
  reducer,
  applyMiddleware(...middleware),
)
