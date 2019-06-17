import {
  RECEIVE_USER
} from './action-types'
import * as api from '@/api'

const receiveUser = ({
  detail,
  profile,
  createdPlaylists,
  subscribedPlaylists
}) => ({
  type: RECEIVE_USER,
  payload: {
    detail,
    profile,
    createdPlaylists,
    subscribedPlaylists
  }
})

export const loadUser = (
  userId,
  createdPage = 1,
  subscribedPage = 1
) => async (dispatch, getState) => {
  const {
    user: {
      limit
    }
  } = getState()
  
  const { profile, ...detail } = await api.getUserDetail(userId)

  const [
    {
      playlist: createdPlaylists
    },
    {
      playlist: subscribedPlaylists
    }
  ] = await Promise.all([
    loadCreatedPlaylists({
      detail,
      profile,
      page: createdPage,
      limit
    }),
    loadSubscribedPlaylists({
      profile,
      page: subscribedPage,
      limit
    })
  ])

  dispatch(receiveUser({
    detail,
    profile,
    createdPlaylists,
    subscribedPlaylists
  }))
}

const loadCreatedPlaylists = async ({
  detail,
  profile,
  page,
  limit
}) => {
  // 创建的歌单 的总数量。包括 喜欢的音乐 这个歌单
  const { playlistCount, userId } = profile
  // 是否可以看到听歌排行
  const { peopleCanSeeMyPlayRecord } = detail
  // 听歌排行显示与不显示的两种情况
  const realCount = peopleCanSeeMyPlayRecord ? (playlistCount + 1) : playlistCount
  // 获取最大页数
  const maxPage = Math.ceil(realCount / limit)
  
  // 传入的 page 可能会超出范围，所以这里我们做一个限制。
  let realPage = page
  if (realPage < 1) {
    realPage = 1
  }
  if (realPage > maxPage) {
    realPage = maxPage
  }

  let realLimit = limit
  if (realPage === 1) {
    realLimit = peopleCanSeeMyPlayRecord ? (realLimit - 2) : (realLimit - 1)
  }

  let offset = 0
  if (realPage > 1) {
    offset = peopleCanSeeMyPlayRecord ? (
      (realPage - 1) * limit - 2
    ) : (
      (realPage - 1) * limit - 1
    )
  }
  
  return await api.getUserPlaylists(userId, realLimit, offset)
}

/**
 * 根据 第几页 和 单页数量 来获取该页收藏的歌单
 * @param {Object} param
 * @param {Object} param.profile
 * @param {number} param.page 第几页，从 1 开始
 * @param {number} param.limit 单页数量
 * @returns {Array} 收藏的歌单
 */
const loadSubscribedPlaylists = async ({
  profile,
  page,
  limit
}) => {
  // 创建的歌单 的总数量
  const { playlistCount, userId } = profile

  const offset = (playlistCount - 1) + (page - 1) * limit

  return await api.getUserPlaylists(userId, limit, offset)
}
