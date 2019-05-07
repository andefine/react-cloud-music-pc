import http from '@/utils/http'

/**
 * 获取歌单详情
 *
 * @param {*} id 歌单 id
 */
export const getPlaylistDetail = (id) => http({
  url: `/playlist/detail?id=${id}`
})
