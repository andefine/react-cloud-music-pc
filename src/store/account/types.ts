export interface IDetail {
  [key: string]: any
}

export interface Profile {
  avatarUrl: string
  nickname: string
  [key: string]: any
}

export interface IPlaylist {
  [key: string]: any
}

export interface IAccountState {
  readonly isLoginShow: boolean
  readonly detail: IDetail
  readonly profile: Partial<Profile>
  readonly playlists: IPlaylist[]
}

// 这里使用 @xxx 作为命名空间
export enum AccountActionTypes {
  SHOW_LOGIN_MODAL = '@account/SHOW_LOGIN_MODAL',
  HIDE_LOGIN_MODAL = '@account/HIDE_LOGIN_MODAL',
  LOGOUT = '@account/LOGOUT',
  RECEIVE_ACCOUNT_DETAIL = '@account/RECEIVE_ACCOUNT_DETAIL',
  RECEIVE_ACCOUNT_PLAYLISTS = '@account/RECEIVE_ACCOUNT_PLAYLISTS',
}
