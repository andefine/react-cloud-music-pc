/**
 * 如果数字大于 100000 ，除以 10000 返回，
 * 否则返回原来的数
 *
 * @param {*} num
 */
export const numToTenThousand = (num) => {
  if (num > 100000) {
    return Math.round(num / 10000)
  }
  return num
}
