import request from '../utils/request'

// 获取用户信息
export const userInfo = () => request.post('/user/info', {})
