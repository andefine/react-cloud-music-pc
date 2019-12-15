import { AccountActionTypes, AccountAction } from './types'
import { Profile, Detail } from '@/store/user/types'
import { Playlist } from '@/store/playlist/types'

export const saveAccountDetail = (
  profile: Profile,
  detail: Detail,
): AccountAction => ({
  type: AccountActionTypes.SAVE_ACCOUNT_DETAIL,
  payload: { profile, detail },
})

export const saveAccountPlaylists = (playlists: Playlist[]): AccountAction => ({
  type: AccountActionTypes.SAVE_ACCOUNT_PLAYLISTS,
  payload: { playlists },
})

export const logoutSuccess = (): AccountAction => ({
  type: AccountActionTypes.LOGOUT_SUCCESS,
})
