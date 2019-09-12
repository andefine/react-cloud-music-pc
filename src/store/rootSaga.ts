import { all, fork } from 'redux-saga/effects'
import accountSaga from './account/sagas'

export default function* () {
  yield all([
    fork(accountSaga)
  ])
}
