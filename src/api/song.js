import http from '@/utils/http'

/**
 * 获取歌曲详情。
 * 支持多个 id, 用 `,` 隔开，
 * 例如 `/song/detail?ids=347230,347231`。
 * 注意：数量大概不要超过 850(大概的值在 850 - 900 之间) ，否则会报 400 错误
 *
 * @param {Array} ids 必传； 音乐 id，因为支持多个，所以用数组
 */
export const getSongDetails = (ids) => {
  const str = ids.join(',')
  return http({
    url: `/song/detail?ids=${str}`
  })
}
