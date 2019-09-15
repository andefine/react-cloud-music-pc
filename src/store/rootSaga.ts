import { fork } from 'redux-saga/effects'

import accountSaga from './account/sagas'
import recommendSaga from './recommend/sagas'

export default function*() {
  yield fork(accountSaga)
  yield fork(recommendSaga)
}
