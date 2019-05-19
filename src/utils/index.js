/**
 * 将个位数添零
 *
 * @param {*} num
 * @returns {String}
 */
export const addZero = (num) => {
  if (num > 9) {
    return '' + num
  }
  return '0' + num
}

/**
 * 将播放数按一定规则转换。
 * 大于 100000，除以 10000，
 * 否则不转换。
 * @param {number} num 
 * @returns {string}
 */
export const formatPlayCount = (num) => {
  if (num > 100000) {
    return parseInt(num / 10000, 10) + '万'
  }
  // 取整是防止返回数据中出现小数(有这种情况，狗头)
  return parseInt(num, 10) + ''
}
