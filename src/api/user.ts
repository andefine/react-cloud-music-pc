import request from '@/utils/request'
import axios, { AxiosPromise } from 'axios'

/**
 * 完成登录后 , 会在浏览器保存一个 Cookies 用作登录凭证 ,
 * 大部分 API 都需要用到这个 Cookies
 */
/**
 * 手机登录
 * @param phone
 * @param password
 */
export const loginByPhone = (phone: string, password: string) =>
  request({
    url: '/login/cellphone',
    params: {
      phone,
      password,
    },
  })

/**
 * 调用此接口,可获取登录状态。
 * 浏览器保存了之前的 Cookies 的话会返回 profile 等信息，
 * 否则 301
 */
export const getLoginStatus = () =>
  request({
    url: '/login/status',
  })

/**
 * 退出登录。
 * 说明 : 调用此接口 , 可退出登录
 */
export const logout = () =>
  request({
    url: '/logout',
  })

interface IUserDetail {
  profile: any
  [key: string]: any
}

/**
 * 登录后调用此接口 , 传入用户 id, 可以获取用户详情。
 * 其中 profile 字段内容是一个对象，包含很多信息。
 * @param uid 用户 id
 */

export const getUserDetail = (uid: number | string): AxiosPromise<IUserDetail> =>
  request({
    url: '/user/detail',
    params: { uid },
  })

/**
 * 获取用户信息 , 歌单，收藏，mv, dj 数量。
 * 注意该接口只能获取当前登录用户的，
 * 不能传入 uid 获取制定用户的。(收藏的歌单那里就有些问题，狗头保命)
 */
export const getUserSubCount = () =>
  request({
    url: '/user/subcount',
  })

/**
 * 获取用户播放记录。
 * @param uid 用户 id
 * @param type type=1 时只返回 weekData, type=0 时返回 allData。默认 0
 */
export const getUserRecord = (uid: number | string, type: number = 0) =>
  request({
    url: '/user/record',
    params: { uid, type },
  })

/**
 * 获取用户歌单，
 * 登陆后调用此接口 , 传入用户 id, 可以获取用户歌单。
 * 包括 创建的歌单 和 收藏的歌单。
 * 注意：按照返回结果来看，会将 创建的歌单 排在
 * 前面，而 收藏的歌单 排在后面。
 * 而且，第一个并不是从 喜欢的音乐 开始。特别要注意这一点。
 * 所以我们在请求这两个类型的歌单的时候一定要注意 offset 偏移量，
 * 尤其是在请求 收藏的歌单 的时候，要加上创建歌单总数量 - 1。
 * @param {number|string} uid 用户 id
 * @param {number} [offset=0] 偏移量，默认 0。注意不是页数
 * @param {number} [limit=30] 单页数量，默认 30
 */
export const getUserPlaylists = (
  uid: number | string,
  offset: number = 0,
  limit: number = 30,
) =>
  request({
    url: '/user/playlist',
    params: {
      uid,
      offset,
      limit,
    },
  })
