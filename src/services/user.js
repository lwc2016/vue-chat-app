import request from '../utils/request'

// 获取用户信息
export const userInfo = () => request.post('/user/info', {})
// 登录
export const userLogin = data => request.post('/user/login', data)
// 退出登录
export const userLogout = () => request.post('/user/logout', {})
// 注册
export const userRegister = data => request.post('/user/register', data)
// 搜索
export const userSearch = data => request.post('/user/search', data)
// 用户详情
export const userDetail = data => request.post('/user/detail', data)
// 编辑个人信息
export const userUpdate = data => request.post('/user/update', data)
