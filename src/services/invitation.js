import request from '@/utils/request'

// 发起邀请
export const invitationSend = data => request.post('/invitation/send', data)
// 邀请记录
export const invitationLog = () => request.post('/invitation/log', {})
