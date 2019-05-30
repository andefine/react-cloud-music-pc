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

const receiveUser = ({ detail, profile, playlists}) => ({
  type: RECEIVE_USER,
  payload: {
    detail,
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
    // 注意这里，如果 cookie 中没有登录信息，
    // api.getLoginStatus() 将会抛出 301 错误，
    // 这条语句后面的语句也不会执行。
    const { profile: { userId } } = await api.getLoginStatus()

    const [
      { profile, ...detail },
      { playlist: playlists }
    ] = await Promise.all([
      api.getUserDetail(userId),
      api.getUserPlaylists(userId)
    ])
    dispatch(receiveUser({ detail, profile, playlists }))
  } catch (err) {}
}
