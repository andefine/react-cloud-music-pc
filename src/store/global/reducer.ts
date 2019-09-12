import { Reducer } from 'redux'

import { IGlobalState } from './types'

const initialState: IGlobalState = {
  test: 'teststring',
  size: 'min',
}

const reducer: Reducer<IGlobalState> = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default reducer
