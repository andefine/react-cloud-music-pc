import * as api from '@/api'
import {
  RECEIVE_BANNERS,
  RECEIVE_PLAYLISTS,
  RECEIVE_PRIVATE_CONTENTS
} from './action-types'

/**
 * 保存 banner( 轮播图 ) 数据
 *
 * @param {Array} banners
 */
const receiveBanners = (banners) => ({
  type: RECEIVE_BANNERS,
  banners
})

/**
 * 异步获取 banner( 轮播图 ) 数据。
 * 如果数据已存在，无需请求，不作任何操作。
 *
 */
export const getBanners = () => async (dispatch, getState) => {
  const { banners } = getState().recommend
  
  if (banners.length > 0) {
    return
  }

  const { banners: newBanners } = await api.getBanners()
  dispatch(receiveBanners(newBanners))
}

/**
 * 保存 推荐歌单
 *
 * @param {*} playlists
 */
const receivePlaylists = (playlists) => ({
  type: RECEIVE_PLAYLISTS,
  playlists
})

/**
 * 异步获取 推荐歌单。
 * 如果数据已经存在，无需请求，不作任何操作
 *
 */
export const getPlaylists = () => async (dispatch, getState) => {
  const { playlists } = getState().recommend
  if (playlists.length > 0) {
    return
  }

  const { result } = await api.getRecommendPlaylist()
  dispatch(receivePlaylists(result))
}

/**
 * 保存 独家放送 数据
 *
 * @param {*} privateContents
 */
const receivePrivateContents = (privateContents) => ({
  type: RECEIVE_PRIVATE_CONTENTS,
  privateContents
})

/**
 * 异步获取 独家放送 数据。
 * 如果数据已存在，不作请求
 *
 */
export const getPrivateContents = () => async (dispatch, getState) => {
  const { privateContents } = getState().recommend
  if (privateContents.length > 0) {
    return
  }

  const { result } = await api.getPrivateContents()
  dispatch(receivePrivateContents(result))
}
