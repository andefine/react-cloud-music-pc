import {
  SHOW_LOGIN_MODAL,
  HIDE_LOGIN_MODAL,
  RECEIVE_ACCOUNT_DETAIL,
  RECEIVE_ACCOUNT_PLAYLISTS,
  LOGOUT_ACTION
} from './action-types'
import * as api from '@/api'

export const showLoginModal = () => ({
  type: SHOW_LOGIN_MODAL
})

export const hideLoginModal = () => ({
  type: HIDE_LOGIN_MODAL
})

const receiveAccountDetail = (detail, profile) => ({
  type: RECEIVE_ACCOUNT_DETAIL,
  payload: { detail, profile }
})

const receiveAccountPlaylists = (playlists) => ({
  type: RECEIVE_ACCOUNT_PLAYLISTS,
  playlists
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

// 这里函数名称里虽然有一个 login，但是是需要保证浏览器中已经有了 cookie 的
export const loginStraight = () => async (dispatch) => {
  try {
    // 注意这里，如果 cookie 中没有登录信息，
    // api.getLoginStatus() 将会抛出 301 错误，
    // 这条语句后面的语句也不会执行。
    const { profile: { userId } } = await api.getLoginStatus()

    // 下面两个 action 是异步的，但是不需要使用 await 保证顺序啥的，
    // 让他们异步执行即可
    dispatch(loadAccountDetail(userId))
    dispatch(loadAccountPlaylists(userId))
  } catch (err) {}
}

const loadAccountDetail = (userId) => async (dispatch) => {
  const { profile, ...detail } = await api.getUserDetail(userId)
  dispatch(receiveAccountDetail(detail, profile))
}

const loadAccountPlaylists = (userId) => async (dispatch) => {
  const { playlist: playlists } = await api.getUserPlaylists(userId)
  dispatch(receiveAccountPlaylists(playlists))
}

export const logoutAction = () => ({
  type: LOGOUT_ACTION
})

export const logout = () => async (dispatch) => {
  await api.logout()
  dispatch(logoutAction())
}
