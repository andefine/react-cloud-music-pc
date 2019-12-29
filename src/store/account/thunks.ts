import { AppThunk } from '@/store'
import { AccountThunkTypes } from './types'
import {
  saveAccountDetail,
  saveAccountPlaylists,
  logoutSuccess,
} from './actions'
import * as userApi from '@/api/user'

/**
 * 通过电话号码登录。
 * 虽然这个异步可以直接在页面中调用，但是为了统一，还是放在这里
 * @param phone
 * @param password
 */
export const loginByPhone = (
  phone: string,
  password: string,
): AppThunk => async dispatch => {
  dispatch({ type: AccountThunkTypes.LOGIN_BY_PHONE })

  try {
    const res = await userApi.loginByPhone(phone, password)
    if (res.code === 502) {
      console.info(res.message)
      return Promise.reject(res.message)
    }

    await dispatch(attempLogin())
  } catch (error) {
    // 账号不存在，状态码 400
    console.info('账号不存在')
    return Promise.reject(error)
  }
}

/**
 * 这里函数名称里虽然有一个 login，但是是需要保证浏览器中已经有了 cookie 的
 */
export const attempLogin = (): AppThunk => async dispatch => {
  dispatch({ type: AccountThunkTypes.ATTEMP_LOGIN })

  try {
    // 注意这里，如果 cookie 中没有登录信息，
    // api.getLoginStatus() 将会抛出 301 错误，
    // 这条语句后面的语句也不会执行。
    const res = await userApi.getLoginStatus()
    const { userId } = res.profile

    await Promise.all([
      dispatch(loadAccountDetail(res.profile.userId)),
      dispatch(loadAccountPlaylists(userId)),
    ])
  } catch (error) {}
}

export const loadAccountDetail = (
  userId: number,
): AppThunk => async dispatch => {
  dispatch({ type: AccountThunkTypes.LOAD_ACCOUNT_DETAIL })

  const { profile, ...detail } = await userApi.getUserDetail(userId)
  dispatch(saveAccountDetail(profile, detail))
}

export const loadAccountPlaylists = (
  userId: number,
): AppThunk => async dispatch => {
  dispatch({ type: AccountThunkTypes.LOAD_ACCOUNT_PLAYLISTS })

  const { playlist: playlists } = await userApi.getUserPlaylists({
    uid: userId,
  })
  dispatch(saveAccountPlaylists(playlists))
}

export const logout = (): AppThunk => async dispatch => {
  dispatch({ type: AccountThunkTypes.LOGOUT })
  await userApi.logout()
  dispatch(logoutSuccess())
}
