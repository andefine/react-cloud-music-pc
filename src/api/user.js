import http from '@/utils/http'

/**
 * 完成登录后 , 会在浏览器保存一个 Cookies 用作登录凭证 , 
 * 大部分 API 都需要用到这个 Cookies
 */
/**
 * 手机登录
 * @param {string} phone 
 * @param {string} password 
 */
export const loginByPhone = (phone, password) => http({
  url: '/login/cellphone',
  params: {
    phone,
    password
  }
})

/**
 * 调用此接口,可获取登录状态。
 * 浏览器保存了之前的 Cookies 的话会返回 profile 等信息，
 * 否则 301 
 */
export const getLoginStatus = () => http({
  url: '/login/status'
})

/**
 * 退出登录。
 * 说明 : 调用此接口 , 可退出登录
 */
export const logout = () => http({
  url: '/logout'
})

/**
 * 登录后调用此接口 , 传入用户 id, 可以获取用户详情。
 * 其中 profile 字段内容是一个对象，包含很多信息。
 * @param {number|string} uid 用户 id
 */
export const getUserDetail = (uid) => http({
  url: '/user/detail',
  params: { uid }
})

/**
 * 获取用户歌单，
 * 登陆后调用此接口 , 传入用户 id, 可以获取用户歌单。
 * 包括 创建的歌单 和 收藏的歌单。
 * 注意：按照返回结果来看，会将 创建的歌单 排在
 * 前面，而 收藏的歌单 排在后面。所以我们在请求
 * 这两个类型的歌单的时候一定要注意 offset 偏移量，
 * 尤其是在请求 收藏的歌单 的时候，要加上创建歌单总数量。
 * @param {number|string} uid 用户 id
 * @param {number} [limit=30]
 * @param {number} [offset=0]
 */
export const getUserPlaylists = (
  uid,
  limit = 30,
  offset = 0
) => http({
  url: '/user/playlist',
  params: {
    uid,
    limit,
    offset
  }
})
