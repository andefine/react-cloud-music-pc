// 1. How to use Axios with TypeScript when using response interceptors (AxiosResponse issue)   https://github.com/axios/axios/issues/1510

import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'

// 全局默认配置
if (process.env.NODE_ENV === 'development') {
  axios.defaults.baseURL = 'http://localhost:3000'
}
if (process.env.NODE_ENV === 'production') {
  axios.defaults.baseURL = 'http://localhost:3000'
}

const instance = axios.create({
  // 超时时间，单位 ms ，默认为 0
  timeout: 10000,
  // 是否带上 credentials，默认为 false。
  // 这个很重要，一定要这样设置
  withCredentials: true,
})

// 添加请求拦截器
instance.interceptors.request.use((config: AxiosRequestConfig) => {
  return config
}, (err) => {
  return Promise.reject(err)
})

instance.interceptors.response.use((response: AxiosResponse) => {
  return response.data
}, err => {
  return Promise.reject(err)
})

const request = instance
export default request
