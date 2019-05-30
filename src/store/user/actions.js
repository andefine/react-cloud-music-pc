import {
  SHOW_LOGIN_MODAL,
  HIDE_LOGIN_MODAL,
  RECEIVE_USER
} from './action-types'
import * as api from '@/api'

export const showLoginModal = () => ({
  type: SHOW_LOGIN_MODAL
})

export const hideLoginModal = () => ({
  type: HIDE_LOGIN_MODAL
})

const receiveUser = ({ profile, playlists}) => ({
  type: RECEIVE_USER,
  payload: {
    profile,
    playlists
  }
})

/**
 * 通过电话号码登录。
 * 虽然这个异步可以直接在页面中调用，但是为了统一，还是放在这里
 * @param {*} phone 
 * @param {*} password 
 */
export const loginByPhone = (phone, password) => async () => {
  return await api.loginByPhone(phone, password)
}

export const loginStraight = () => async (dispatch) => {
  try {
    const { profile: { userId } } = await api.getLoginStatus()
    // const { profile } = await api.getUserDetail(userId)
    // const { playlist: playlists } = await api.getUserPlaylists(userId)

    const [
      { profile },
      { playlist: playlists }
    ] = await Promise.all([
      api.getUserDetail(userId),
      api.getUserPlaylists(userId)
    ])
    dispatch(receiveUser({ profile, playlists }))
  } catch (err) {}
}
