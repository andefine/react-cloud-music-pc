// 这个 playlist 是当前被显示的某个歌单的具体信息。

import {
  GET_PLAYLIST_DETAIL,
  RECEIVE_PLAYLIST_DETAIL
} from './action-types'
import { combineReducers } from 'redux'

const initialState = {
  // 这个值主要是表示是否在请求，来决定在请求中时是否显示 loading
  isFetching: false,
  // api 返回的 playlist 中的信息将都会放到这里
  data: {}
}

const isFetching = (state = initialState.isFetching, action) => {
  switch (action.type) {
    case GET_PLAYLIST_DETAIL:
      return true
    default:
      return false
  }
}

const data = (state = initialState.data, action) => {
  switch (action.type) {
    case RECEIVE_PLAYLIST_DETAIL:
      return {
        ...action.playlistDetail
      }
    default:
      return state
  }
}

const playlistDetail = combineReducers({
  isFetching,
  data
})

export default playlistDetail
