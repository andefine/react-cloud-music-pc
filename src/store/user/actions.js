import {
  SHOW_LOGIN_MODAL,
  HIDE_LOGIN_MODAL,
  RECEIVE_PROFILE
} from './action-types'
import * as api from '@/api'

export const showLoginModal = () => ({
  type: SHOW_LOGIN_MODAL
})

export const hideLoginModal = () => ({
  type: HIDE_LOGIN_MODAL
})

const receiveProfile = (profile) => ({
  type: RECEIVE_PROFILE,
  profile
})

export const loginByPhone = (phone, password) => async () => {
  return await api.loginByPhone(phone, password)
}

export const loginStraight = () => async (dispatch) => {
  let userId = -1
  try {
    const { profile } = await api.getLoginStatus()
    userId = profile.userId
  } catch (err) {
    return
  }

  const { profile } = await api.getUserDetail(userId)
  dispatch(receiveProfile(profile))
}
