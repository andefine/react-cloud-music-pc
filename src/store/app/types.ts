/*
 * @Date: 2019-12-08 00:16:55
 * @LastEditTime: 2019-12-15 17:36:17
 * @Description: 这里保存一些公共的数据，并不是 App 那个组件独有的
 */

import { Profile, Detail } from '@/store/user/types'
import { Playlist } from '@/store/playlist/types'

/** 窗口大小 */
export enum WinSize {
  Min = 'Min',
  Max = 'Max',
}

export interface AppState {
  winSize: WinSize
  isLoginShow: boolean
  profile: Partial<Profile>
  detail: Partial<Detail>
}

export enum AppActionTypes {
  SHOW_LOGIN_MODAL = '@app/SHOW_LOGIN_MODAL',
  HIDE_LOGIN_MODAL = '@app/HIDE_LOGIN_MODAL',
  SAVE_ACCOUNT_DETAIL = '@app/SAVE_ACCOUNT_DETAIL',
  SAVE_ACCOUNT_PLAYLISTS = '@app/SAVE_ACCOUNT_PLAYLISTS',
}

export enum AppThunkTypes {
  LOGIN_BY_PHONE = '@app/LOGIN_BY_PHONE',
  ATTEMP_LOGIN = '@app/ATTEMP_LOGIN',
  LOAD_ACCOUNT_DETAIL = '@app/LOAD_ACCOUNT_DETAIL',
  LOAD_ACCOUNT_PLAYLISTS = '@app/LOAD_ACCOUNT_PLAYLISTS',
}

/********* action type *********/

interface ShowLoginModal {
  type: AppActionTypes.SHOW_LOGIN_MODAL
}

interface HideLoginModal {
  type: AppActionTypes.HIDE_LOGIN_MODAL
}

interface SaveAccountDetail {
  type: AppActionTypes.SAVE_ACCOUNT_DETAIL
  payload: { profile: Profile; detail: Detail }
}

interface SaveAccountPlaylists {
  type: AppActionTypes.SAVE_ACCOUNT_PLAYLISTS
  payload: { playlists: Playlist[] }
}

export type AppAction =
  | ShowLoginModal
  | HideLoginModal
  | SaveAccountDetail
  | SaveAccountPlaylists
