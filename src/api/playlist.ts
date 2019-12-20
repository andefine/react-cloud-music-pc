import request from '@/utils/request'

/**
 * 获取歌单详情
 * @param id
 */
export const getPlaylist = (id: number) =>
  request.get(`/playlist/detail?id=${id}`)
