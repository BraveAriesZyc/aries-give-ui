import request from '@/utils/request'
//注册
export const enroll = (data:object) => {
	return request({
		url: '/user/enroll',
		method: 'POST',
		headers:{
			'Content-Type':'application/x-www-form-urlencoded'
		},
		data
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