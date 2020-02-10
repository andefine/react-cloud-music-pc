// 1. How to use Axios with TypeScript when using response interceptors (AxiosResponse issue)   https://github.com/axios/axios/issues/1510

import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'

// 全局默认配置
if (process.env.NODE_ENV === 'development') {
  // axios.defaults.baseURL = 'http://47.99.212.154:3000'
}
if (process.env.NODE_ENV === 'production') {
  // axios.defaults.baseURL = 'http://47.99.212.154:3000'
  axios.defaults.baseURL = 'api'
}

const instance = axios.create({
  // 超时时间，单位 ms ，默认为 0
  timeout: 10000,
  // 是否带上 credentials，默认为 false。
  // 这个很重要，一定要这样设置
  withCredentials: true,
})

interface jsonObj {
  [key: string]: any
}
/** json 转 querystring */
const objToQueryStr = (obj: jsonObj) => {
  let str = ''
  for (const key in obj) {
    const value = obj[key]
    // 过滤掉空值
    if (value === null || value === void 0) {
      continue
    }
    str += `${key}=${value}&`
  }
  return str.slice(0, str.length - 1)
}

// 添加请求拦截器
instance.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    const { data } = config
    const newData = objToQueryStr(data)

    return { ...config, data: newData }
  },
  err => {
    return Promise.reject(err)
  },
)

instance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response.data
  },
  err => {
    return Promise.reject(err)
  },
)

const request = instance
export default request
