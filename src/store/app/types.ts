/*
 * @Date: 2019-12-08 00:16:55
 * @LastEditTime: 2019-12-10 00:19:25
 * @Description: 这里保存一些公共的数据，并不是 App 那个组件独有的
 */

/** 窗口大小 */
export enum WinSize {
  Min = 'Min',
  Max = 'Max',
}

export interface AppState {
  winSize: WinSize
  isLoginShow: boolean
}

export enum AppActionTypes {
  SHOW_LOGIN_MODAL = '@app/SHOW_LOGIN_MODAL',
  LOGIN_BY_PHONE = '@app/LOGIN_BY_PHONE',
}

/********* action type *********/

interface ShowLoginModal {
  type: AppActionTypes.SHOW_LOGIN_MODAL
}

interface LoginByPhone {
  type: AppActionTypes.LOGIN_BY_PHONE
  payload: { phone: string; password: string }
}

export type AppAction = ShowLoginModal | LoginByPhone
