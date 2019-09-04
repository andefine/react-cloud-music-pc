import http from '@/utils/http'

/**
 * 获取歌单详情
 *
 * @param {*} id 歌单 id
 */
export const getPlaylistDetail = (id) => http({
  url: `/playlist/detail?id=${id}`
})

/**
 * 获取歌单评论
 * @param {number|string} id 歌单 id
 * @param {number} [limit=20] 默认为 20，取出评论数量。
 * @param {number} offset 默认 0。偏移数量 , 用于分页 , 如 :( 评论页数 -1)*20, 其中 20 为 limit 的值
 */
export const getPlaylistComments = (id, limit = 20, offset = 0) => http({
  url: '/comment/playlist',
  params: { id,  limit, offset }
})