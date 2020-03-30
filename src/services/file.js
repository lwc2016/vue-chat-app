import request from '@/utils/request'

export const fileUpload = data => request.post('/file/upload', data)
