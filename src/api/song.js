import http from '@/utils/http'

/**
 * 获取歌曲详情。
 * 支持多个 id, 用 `,` 隔开，
 * 例如 `/song/detail?ids=347230,347231`。
 * 注意：数量大概不要超过 850(大概的值在 850 - 900 之间) ，否则会报 400 错误
 *
 * @param {Array} ids 必传； 音乐 id，因为支持多个，所以用数组
 */
export const getSongsDetail = async (ids) => {
  const str = ids.join(',')
  return await http({
    url: `/song/detail?ids=${str}`
  })
}

/**
 * 获取音乐 url
 * @param {(number|string|number[]|string[])} idParam 音乐 id，可多个(用数组)
 * @param {number} [br=999] 标准 128, 较高 192， 极高 320, 无损 ？
 */
export const getSongsUrl = async (idParam, br = 999) => {
  const isArray = (Object.prototype.toString.call(idParam) === '[object Array]')
  const id = isArray ? (idParam.join(',')) : idParam
  return await http({
    url: '/song/url',
    params: {
      id,
      br: br * 1000
    }
  })
}

export const checkMusic = (id, br) => http({
  url: '/check/music',
  params: { id, br }
})
