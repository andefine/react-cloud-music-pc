export interface IDetail {
  [key: string]: any
}

export interface IProfile {
  [key: string]: any
}

export interface IPlaylist {
  [key: string]: any
}

export interface AccountState {
  readonly isLoginShow: boolean
  readonly detail: IDetail
  readonly profile: IProfile
  readonly playlists: IPlaylist[]
}

export enum AccountActionTypes {
  SHOW_LOGIN_MODAL = '@account/SHOW_LOGIN_MODAL',
  HIDE_LOGIN_MODAL = '@account/HIDE_LOGIN_MODAL',
  LOGOUT = '@account/LOGOUT',
  RECEIVE_ACCOUNT_DETAIL = '@account/RECEIVE_ACCOUNT_DETAIL',
  RECEIVE_ACCOUNT_PLAYLISTS = '@account/RECEIVE_ACCOUNT_PLAYLISTS',
}
