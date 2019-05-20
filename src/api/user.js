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
 * 已登录的话会返回 profile 等信息，
 * 否则 301 
 */
export const getLoginStatus = () => http({
  url: '/login/status'
})

/**
 * 登录后调用此接口 , 传入用户 id, 可以获取用户详情
 * @param {number} uid 用户 id
 */
export const getUserDetail = (uid) => http({
  url: '/user/detail',
  params: {
    uid
  }
})