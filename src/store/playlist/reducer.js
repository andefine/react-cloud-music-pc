// 这个 playlist 是当前被显示的某个歌单的具体信息。

import {
  RECEIVE_PLAYLIST_DETAIL
} from './action-types'
import { combineReducers } from 'redux'

const initialState = {
  // api 返回的 playlist 中的信息将都会放到这里
  playlistDetail: {}
}

const playlistDetail = (state = initialState.playlistDetail, { type, playlistDetail }) => {
  switch (type) {
    case RECEIVE_PLAYLIST_DETAIL:
      return playlistDetail
    default:
      return state
  }
}

const playlist = combineReducers({
  playlistDetail
})

export default playlist
