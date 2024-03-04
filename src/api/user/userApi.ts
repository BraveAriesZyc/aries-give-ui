import request from '@/utils/request'
//注册
export const getUserInfo = (data:object) => {
	return request({
		url: '',
		method: 'get',
		params:data
	})
}
//注册
export const login = (data:object) => {
	return request({
		url: '/auth/login',
		method: 'post',
		data
	})
}