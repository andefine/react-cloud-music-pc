import { Reducer } from 'redux'

import { IAccountState, AccountActionTypes } from './types'

const initialState: IAccountState = {
  isLoginShow: false,
  detail: {},
  profile: {},
  playlists: [],
}

const reducer: Reducer<IAccountState> = (state = initialState, action) => {
  switch (action.type) {
    case AccountActionTypes.SHOW_LOGIN_MODAL:
      return {
        ...state,
        isLoginShow: true,
      }
    case AccountActionTypes.HIDE_LOGIN_MODAL:
      return {
        ...state,
        isLoginShow: false,
      }

    default:
      return state
  }
}

export default reducer
