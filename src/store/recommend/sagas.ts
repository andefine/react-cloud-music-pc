import { call, takeEvery, fork, put, all } from 'redux-saga/effects'
import * as recommendApi from '@/api/recommend'
import { RecommendActionTypes } from './types'
import { saveData } from './actions'

function* handleLoadData() {
  const res = yield all([
    call(recommendApi.getBanners),
    call(recommendApi.getPlaylist),
    call(recommendApi.getPrivateContent),
    call(recommendApi.getLatestMusics),
  ])
  const [
    { banners },
    { result: playlists },
    { result: privateContents },
    { result: latestMusics },
  ] = res
  yield put(saveData({
    banners,
    playlists,
    privateContents,
    latestMusics,
  }))
}

function* watchLoadData() {
  yield takeEvery(RecommendActionTypes.LOAD_DATA, handleLoadData)
}

export default function* recommendSaga() {
  yield fork(watchLoadData)
}
