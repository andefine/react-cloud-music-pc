import { call, takeEvery, all, fork, put } from 'redux-saga/effects'
import * as recommendApi from '@/api/recommend'
import { RecommendActionTypes } from './types'
import { saveData } from './actions'

function* handleLoadData() {
  const { banners } = yield call(recommendApi.getBanners)
  yield put(saveData({
    banners
  }))
}

function* watchLoadData() {
  yield takeEvery(RecommendActionTypes.LOAD_DATA, handleLoadData)
}

export default function* recommendSaga() {
  yield all([
    fork(watchLoadData),
  ])
}
