import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'

import rootReducer from './rootReducer'
import rootSaga from './rootSaga'

const sagaMiddleware = createSagaMiddleware()
// const middleware = [thunk]

// if (process.env.NODE_ENV === 'development') {
//   const { logger } = require('redux-logger')
//   middleware.push(logger)
// }


const composeEnhancers = composeWithDevTools({})

const store = createStore(
  rootReducer,
  composeEnhancers(
    // applyMiddleware(...middleware),
    applyMiddleware(sagaMiddleware),
  ),
)

sagaMiddleware.run(rootSaga)

export default store
