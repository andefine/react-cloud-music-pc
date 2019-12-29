import request from '@/utils/request'

/**
 * 获取歌曲详情。
 * 支持多个 id, 用 `,` 隔开，
 * 例如 `/song/detail?ids=347230,347231`。
 * 注意：数量大概不要超过 850(大概的值在 850 - 900 之间) ，否则会报 400 错误
 * @param ids 必传； 音乐 id，可多个
 */
export const getSongDetail = async (ids: number | number[]) => {
  const str = Array.isArray(ids) ? ids.join(',') : ids
  return await request.get('/song/detail', { params: { ids: str } })
}

/**
 * 获取音乐 url
 * @param ids 音乐 id，可多个
 * @param br 标准 128, 较高 192， 极高 320, 无损 ？。默认 999
 */
export const getSongsUrl = async (ids: number | number[], br: number = 999) => {
  const idStr = Array.isArray(ids) ? ids.join(',') : ids
  return await request.get('/song/url', {
    params: { id: idStr, br: br * 1000 },
  })
}
