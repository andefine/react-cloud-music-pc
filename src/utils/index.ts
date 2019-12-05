/**
 * 将播放数按一定规则转换。
 * 大于 100000，除以 10000，
 * 否则不转换。
 * @param num
 */
export const formatPlayCount = (num: number): string => {
  if (num > 100000) {
    return `${Math.floor(num / 10000)}万`
  }

  // 取整是防止返回数据中出现小数(有这种情况，狗头)
  return `${Math.floor(num)}`
}
