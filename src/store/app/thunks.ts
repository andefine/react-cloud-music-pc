import { AppThunk } from '@/store'
import { AppActionTypes } from './types'

export const loginByPhone = (
  phone: string,
  password: string,
): AppThunk => async dispatch => {
  dispatch({ type: AppActionTypes.LOGIN_BY_PHONE })
}
