import axios from 'axios'
import create from './create'
import message from '../components/message'

const request = axios.create({
  baseURL: '/api'
})

// 请求拦截
request.interceptors.request.use(function (config) {
  return config
}, function (error) {
  return Promise.reject(error)
})

// 响应拦截
request.interceptors.response.use(function (response) {
  const { status, data } = response
  if (status !== 200) {
    return Promise.reject(new Error('错误'))
  }
  if (data.status !== 200) {
    console.log(data.message)
    create(message, { type: 'error', text: data.message }).show()
    return Promise.reject(data.message)
  }
  return data.result
}, function (error) {
  console.log(error)
  create(message, { type: 'error', text: error }).show()
  return Promise.reject(error)
})

export default request
