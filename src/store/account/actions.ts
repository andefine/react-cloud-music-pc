import { AccountActionTypes, IDetail, Profile, IPlaylist } from './types'
import { Dispatch } from 'redux'
import * as userApi from '@/api/user'

export const showLoginModal = () => ({
  type: AccountActionTypes.SHOW_LOGIN_MODAL,
})

export const hideLoginModal = () => ({
  type: AccountActionTypes.HIDE_LOGIN_MODAL,
})

const receiveAccountDetail = (detail: IDetail, profile: Profile) => ({
  type: AccountActionTypes.RECEIVE_ACCOUNT_DETAIL,
  payload: { detail, profile },
})

const receiveAccountPlaylists = (playlists: IPlaylist[]) => ({
  type: AccountActionTypes.RECEIVE_ACCOUNT_PLAYLISTS,
  playlists,
})

export const loginStraight = () => async (dispatch: Dispatch) => {
  // try {
  // }
}

export const loadAccountDetail = (userId: number | string) => async (
  dispatch: Dispatch,
) => {
  const res = await userApi.getUserDetail(userId)
}
