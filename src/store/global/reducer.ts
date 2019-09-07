import { Reducer } from 'redux'

import { GlobalState } from './types'

const initialState: GlobalState = {
  test: 'teststring',
  size: 'min',
}

const reducer: Reducer<GlobalState> = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default reducer
