import { Reducer } from 'redux'

import { AppState, WinSize, AppActionTypes } from './types'

const initialState: AppState = {
  winSize: WinSize.Min,
  isLoginShow: false,
}

const reducer: Reducer<AppState> = (state = initialState, action) => {
  switch (action.type) {
    case AppActionTypes.SHOW_LOGIN_MODAL:
      return {
        ...state,
        isLoginShow: true,
      }

    default:
      return state
  }
}

export default reducer
