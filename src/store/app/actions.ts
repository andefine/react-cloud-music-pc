import { AppActionTypes, AppAction } from './types'

export const showLoginModal = (): AppAction => ({
  type: AppActionTypes.SHOW_LOGIN_MODAL,
})
