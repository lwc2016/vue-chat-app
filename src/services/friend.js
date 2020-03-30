import request from '@/utils/request'

// 获取好友列表
export const friendList = () => request.post('/friend/list', {})
// 获取好友详情
export const friendDetail = data => request.post('/friend/detail', data)
// 更新好友信息
export const friendUpdate = data => request.post('/friend/update', data)
