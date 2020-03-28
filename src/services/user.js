import request from '../utils/request'

// 获取用户信息
export const userInfo = () => request.post('/user/info', {})
// 登录
export const userLogin = data => request.post('/user/login', data)
// 注册
export const userRegister = data => request.post('/user/register', data)
