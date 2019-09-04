import { combineReducers, Reducer } from 'redux'

import { GlobalState } from './types'

const iniState: GlobalState = {
  test: 'test',
}

const test: Reducer<GlobalState> = (state = iniState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default combineReducers({
  test
})
