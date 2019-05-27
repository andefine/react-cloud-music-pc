import {
  RECEIVE_PLAYLIST_DETAIL
} from './action-types'
import * as api from '@/api'

/**
 * 保存
 *
 * @param {*} playlist
 */
const receivePlaylistDetail = (playlistDetail) => ({
  type: RECEIVE_PLAYLIST_DETAIL,
  playlistDetail
})

/**
 * 直接请求接口获取 歌单详情
 *
 * @param {*} id 歌单 id
 */
export const getPlaylistDetail = (id) => async (dispatch) => {
  const { playlist: playlistDetail } = await api.getPlaylistDetail(id)
  dispatch(receivePlaylistDetail(playlistDetail))
}

/**
 * 判断当前是否正在请求中；
 * 或者 redux 中的歌单详情是否已经是
 * 需要请求的歌单详情。这两种情况
 * 都不需要再次请求。否则直接请求数据
 *
 * @param {*} id 歌单 id
 */
export const getPlaylistDetailIfNeeded = (id) => async (dispatch, getState) => {
  const { playlistDetail } = getState().playlist

  // 如果当前 歌单id 和 需要请求的歌单id 相同，则不用请求
  if (playlistDetail.id === id) {
    return
  }

  dispatch(getPlaylistDetail(id))
}
