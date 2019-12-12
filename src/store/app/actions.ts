import { AppActionTypes, AppAction } from './types'

export const showLoginModal = (): AppAction => ({
  type: AppActionTypes.SHOW_LOGIN_MODAL,
})

// export const loginByPhone = (phone: string, password: string): AppAction => ({
//   type: AppActionTypes.LOGIN_BY_PHONE,
//   payload: { phone, password },
// })
