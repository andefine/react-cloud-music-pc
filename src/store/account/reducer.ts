import { Reducer } from 'redux'

import { AccountState, AccountActionTypes, AccountAction } from './types'

const initialState: AccountState = {
  detail: {},
  profile: {},
  playlists: [],
}

const reducer: Reducer<AccountState> = (
  state = initialState,
  action: AccountAction,
) => {
  switch (action.type) {
    case AccountActionTypes.SAVE_ACCOUNT_DETAIL:
      return {
        ...state,
        ...action.payload,
      }
    case AccountActionTypes.SAVE_ACCOUNT_PLAYLISTS:
      return {
        ...state,
        ...action.payload,
      }
    case AccountActionTypes.LOGOUT_SUCCESS:
      return {
        ...state,
        profile: {},
        detail: {},
      }

    default:
      return state
  }
}

export default reducer
