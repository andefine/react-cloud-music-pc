import {
  SHOW_LOGIN_MODAL,
  HIDE_LOGIN_MODAL,
  RECEIVE_PROFILE,
  RECEIVE_LOGIN_INFO
} from './action-types'
import * as api from '@/api'

export const showLoginModal = () => ({
  type: SHOW_LOGIN_MODAL
})

export const hideLoginModal = () => ({
  type: HIDE_LOGIN_MODAL
})

// const receiveLoginInfo = (account, profile) => ({
//   type: RECEIVE_LOGIN_INFO,
//   payload: {
//     account,
//     profile
//   }
// })

const receiveProfile = (profile) => ({
  type: RECEIVE_PROFILE,
  profile
})

export const loginByPhone = (phone, password) => async () => {
  return await api.loginByPhone(phone, password)
}

export const loginStraight = () => async (dispatch) => {
  const { code, profile: profileTemp } = await api.getLoginStatus()

  // 表示未登录
  if (code === 301) {
    return
  }

  if (code !== 200) {
    return
  }

  const { userId } = profileTemp
  const { profile } = await api.getUserDetail(userId)
  dispatch(receiveProfile(profile))
}
