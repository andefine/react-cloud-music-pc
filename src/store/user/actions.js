import {
  RECEIVE_USER
} from './action-types'
import * as api from '@/api'

const receiveUser = ({
  detail,
  profile,
  createdPlaylists,
  subscribedPlaylists,
  moreSubscribed
}) => ({
  type: RECEIVE_USER,
  payload: {
    detail,
    profile,
    createdPlaylists,
    subscribedPlaylists,
    moreSubscribed
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
      more: moreSubscribed,
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
    subscribedPlaylists,
    moreSubscribed
  }))
}

/**
 * 普通异步函数，并不是异步 action。
 * 这一块属于业务代码，因 api 介绍不是特别详细，不必在意其中实现
 * @param {*} param0 
 */
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
  if (realPage === maxPage) {
    realLimit = realCount % limit
  }

  let offset = 0
  if (realPage > 1) {
    offset = peopleCanSeeMyPlayRecord ? (
      (realPage - 1) * limit - 2
    ) : (
      (realPage - 1) * limit - 1
    )
  }
  
  const { playlist, ...rest } = await api.getUserPlaylists(userId, realLimit, offset)

  if (realPage === maxPage) {
    const list = playlist.filter(val => val.userId === userId)
    return { playlist: list, ...rest }
  }
  return { playlist, rest }
}

/**
 * 根据 第几页 和 单页数量 来获取该页收藏的歌单。
 * 普通函数，并不是异步 action
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
