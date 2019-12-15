import { Reducer } from 'redux'

import { AppState, WinSize, AppActionTypes, AppAction } from './types'

const initialState: AppState = {
  winSize: WinSize.Min,
  isLoginShow: false,
}

const reducer: Reducer<AppState> = (
  state = initialState,
  action: AppAction,
) => {
  switch (action.type) {
    case AppActionTypes.SHOW_LOGIN_MODAL:
      return {
        ...state,
        isLoginShow: true,
      }
    case AppActionTypes.HIDE_LOGIN_MODAL:
      return {
        ...state,
        isLoginShow: false,
      }

    default:
      return state
  }
}

export default reducer
