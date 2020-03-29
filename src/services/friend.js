import request from '@/utils/request'

// 获取好友列表
export const friendList = () => request.post('/friend/list', {})
