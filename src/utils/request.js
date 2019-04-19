import axios from 'axios'

// 全局默认配置
if (process.env.NODE_ENV === 'development') {
  axios.defaults.baseURL = 'http://localhost:3000'
}
if (process.env.NODE_ENV === 'production') {
  axios.defaults.baseURL = 'http://localhost:3000'
}

const request = axios.create({
  // 超时时间，单位 ms ，默认为 0
  timeout: 10000
})

// 添加请求拦截器
request.interceptors.request.use(config => {
  return config
}, err => {
  return Promise.reject(err)
})

// 添加响应拦截器
request.interceptors.response.use(response => {
  if (response.status === 200) {
    return response.data
  }
  
  return response
}, err => {
  return Promise.reject(err)
})

export default request
