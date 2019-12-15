import { AppActionTypes, AppAction } from './types'
import { Profile, Detail } from '@/store/user/types'
import { Playlist } from '@/store/playlist/types'

export const showLoginModal = (): AppAction => ({
  type: AppActionTypes.SHOW_LOGIN_MODAL,
})

export const hideLoginModal = (): AppAction => ({
  type: AppActionTypes.HIDE_LOGIN_MODAL,
})

export const saveAccountDetail = (
  profile: Profile,
  detail: Detail,
): AppAction => ({
  type: AppActionTypes.SAVE_ACCOUNT_DETAIL,
  payload: { profile, detail },
})

export const saveAccountPlaylists = (playlists: Playlist[]): AppAction => ({
  type: AppActionTypes.SAVE_ACCOUNT_PLAYLISTS,
  payload: { playlists },
})

export const logoutSuccess = (): AppAction => ({
  type: AppActionTypes.LOGOUT_SUCCESS,
})
