/**
 * 将日期对象的 day 转化为汉字中的礼拜。
 * @param day new Date().getDay() 得到的结果
 * @returns 日 一 二 三 四 五 六
 */
export const dayToWeekday = (day: number): string => {
  switch (day) {
    case 0:
      return '日'
    case 1:
      return '一'
    case 2:
      return '二'
    case 3:
      return '三'
    case 4:
      return '四'
    case 5:
      return '五'
    case 6:
      return '六'
    default:
      return ''
  }
}

export const formatDurationTime = (stamp: number): string => {
  const instance = new Date(stamp)
  const minutes = instance.getMinutes()
  const seconds = instance.getSeconds()

  return `${minutes.toString().padStart(2, '0')}:${seconds
    .toString()
    .padStart(2, '0')}`
}
