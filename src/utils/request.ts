import store from "@/store";
import axios, { AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from "axios";
import { ElMessage, ElMessageBox, ElNotification } from "element-plus";

axios.defaults.headers['Content-Type'] = 'application/json;charset=UTF-8'


const request: AxiosInstance = axios.create({
	baseURL: 'http://localhost:3000',  // 默认加在url前面
	timeout: 6000,   //超时
})

// 是否显示重新登录
export let isRelogin = { show: false };
// 添加请求拦截器
request.interceptors.request.use((config: InternalAxiosRequestConfig) => {
	// 在发送请求之前做些什么 
	return config;
}, function (error: Error) {
	// 对请求错误做些什么
	return Promise.reject(error);
});

// 添加响应拦截器
request.interceptors.response.use((response: AxiosResponse) => {

	//设置状态a
	const code = response.data.code || 200;
	const msg = response.data.msg
	// 对响应数据做点什么
	if (code === 401) {
		if (!isRelogin.show) {
			isRelogin.show = true;
			ElMessageBox.confirm(
				'登录状态已过期，您可以继续留在该页面，或者重新登录', 'Warning',
				{
					confirmButtonText: '重新登录',
					cancelButtonText: '取消',
					type: 'warning',
					draggable: true,
				}
			)
				.then(() => {

					isRelogin.show = false;
					store.dispatch('LogOut').then(() => {
						location.href = '/index';
					})

					ElMessage({
						type: 'success',
						message: 'Delete completed',
					})
				})
				.catch(() => {
					ElMessage({
						type: 'info',
						message: 'Delete canceled',
					})
					isRelogin.show = false;
				})
		}
		return Promise.reject('无效的会话，或者会话已过期，请重新登录。')
	} else if (code === 500) {
		ElMessage({ message: msg, type: 'error' })
		return Promise.reject(new Error(msg))
	} else if (code === 601) {
		ElMessage({ message: msg, type: 'warning' })
		return Promise.reject('error')
	} else if (code !== 200) {
		ElMessage({ message: msg, type: 'error' })
		// ElNotification.error({
		// 	title: msg,
		// 	message: msg,
		// 	showClose: false,
		// })
		return Promise.reject('error')
	} else {
			ElNotification.success({
			title: msg,
			message: msg,
			showClose: false,
		})
		return response
	}
}, function (error) {

	// 超出 2xx 范围的状态码都会触发该函数。
	// 对响应错误做点什么
	return Promise.reject(error);
});

export default request