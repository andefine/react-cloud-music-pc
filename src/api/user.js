import http from '@/utils/http'

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
