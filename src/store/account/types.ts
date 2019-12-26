import { Profile, Detail } from '@/store/user/types'
import { Playlist } from '@/types/Playlist'

export interface AccountState {
  profile: Partial<Profile>
  detail: Partial<Detail>
  playlists: Playlist[]
}

export enum AccountActionTypes {
  SAVE_ACCOUNT_DETAIL = '@account/SAVE_ACCOUNT_DETAIL',
  SAVE_ACCOUNT_PLAYLISTS = '@account/SAVE_ACCOUNT_PLAYLISTS',
  LOGOUT_SUCCESS = '@account/LOGOUT_SUCCESS',
}

export enum AccountThunkTypes {
  LOGIN_BY_PHONE = '@account/LOGIN_BY_PHONE',
  ATTEMP_LOGIN = '@account/ATTEMP_LOGIN',
  LOAD_ACCOUNT_DETAIL = '@account/LOAD_ACCOUNT_DETAIL',
  LOAD_ACCOUNT_PLAYLISTS = '@account/LOAD_ACCOUNT_PLAYLISTS',
  LOGOUT = '@account/LOGOUT',
}

interface SaveAccountDetail {
  type: AccountActionTypes.SAVE_ACCOUNT_DETAIL
  payload: { profile: Profile; detail: Detail }
}

interface SaveAccountPlaylists {
  type: AccountActionTypes.SAVE_ACCOUNT_PLAYLISTS
  payload: { playlists: Playlist[] }
}

interface LogoutSuccess {
  type: AccountActionTypes.LOGOUT_SUCCESS
}

export type AccountAction =
  | SaveAccountDetail
  | SaveAccountPlaylists
  | LogoutSuccess
