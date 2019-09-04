export const MAXIMIZE = 'MAXIMIZE'
export const MINIMIZE = 'MINIMIZE'

/**
 * 最大化
 */
export const maximize = () => ({
  type: MAXIMIZE
})

/**
 * 最小化。
 * 这里的最小化，只是指整个大小是最小状态，跟 windows 窗口的最小化不是一回事
 */
export const minimize = () => ({
  type: MINIMIZE
})
