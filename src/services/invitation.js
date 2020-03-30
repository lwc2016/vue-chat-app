import request from '@/utils/request'

// 发起邀请
export const invitationSend = data => request.post('/invitation/send', data)
// 邀请记录
export const invitationLog = () => request.post('/invitation/log', {})
// 邀请详情
export const invitationDetail = data => request.post('/invitation/detail', data)
// 同意邀请
export const invitationAgree = data => request.post('/invitation/agree', data)
// 同意邀请
export const invitationRefuse = data => request.post('/invitation/refuse', data)
