import { AppThunk } from '@/store'
import { AppActionTypes } from './types'
import * as userApi from '@/api/user'

export const loginByPhone = (
  phone: string,
  password: string,
): AppThunk => async dispatch => {
  dispatch({ type: AppActionTypes.LOGIN_BY_PHONE })

  try {
    const res = await userApi.loginByPhone(phone, password)
    if (res.code === 502) {
      return console.info(res.message)
    }
  } catch (error) {
    // 账号不存在，状态码 400
    console.info('账号不存在')
  }
}
