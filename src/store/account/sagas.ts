import { call, takeEvery, all, fork } from 'redux-saga/effects'
import * as userApi from '@/api/user'
import { AccountActionTypes } from './types'

function* login () {
  yield call(userApi.loginByPhone, 'username', 'password')
}

function* watchLogin () {
  yield takeEvery(AccountActionTypes.SHOW_LOGIN_MODAL, login)
}

export default function* accountSaga() {
  yield all([fork(watchLogin)])
}
