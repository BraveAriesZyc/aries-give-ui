<template>
	<div class="login">
		<div class="login_box">

			<div class="box_card_default box_position">
				<h1>登录</h1>
				<el-form :model="formData" ref="ruleFormRef" :rules="rules" :label-width="80" size="normal">
					<el-row :gutter="20">
						<el-col :span="24">
							<el-form-item label="用户名:">
								<el-input style="width: 90%;" v-model="formData.username"></el-input>
							</el-form-item>
						</el-col>
						<el-col :span="24">
							<el-form-item label="密码:">
								<el-input style="width: 90%;" v-model="formData.password"></el-input>
							</el-form-item>
						</el-col>
						<el-col :span="24">
							<el-form-item>
								<el-button type="primary" @click="submitLogin(ruleFormRef)" size="small">登录</el-button>
								<p style="margin-left: 5px;">还没有账号?
									<el-button type="primary" link
										@click="isregisterLogin = !isregisterLogin">前往注册</el-button>
								</p>
							</el-form-item>
						</el-col>
					</el-row>
				</el-form>
			</div>
			<div class="box_card_default box_position_item1">
				<h1>注册</h1>
				<el-form :model="formData" ref="ruleFormRef" :rules="rules" :label-width="80" size="normal">
					<el-row :gutter="20">
						<el-col :span="24">
							<el-form-item label="用户名:">
								<el-input style="width: 90%;" v-model="formData.username"></el-input>
							</el-form-item>
						</el-col>
						<el-col :span="24">
							<el-form-item label="密码:">
								<el-input style="width: 90%;" v-model="formData.password"></el-input>
							</el-form-item>
						</el-col>
						<el-col :span="24">
							<el-form-item>
								<el-button type="primary" @click="submitEnroll(ruleFormRef)" size="small">注册</el-button>
								<p style="margin-left: 5px;">已有账号?
									<el-button type="primary" link
										@click="isregisterLogin = !isregisterLogin">前往登录</el-button>
								</p>
							</el-form-item>
						</el-col>
					</el-row>
				</el-form>
			</div>
			<div :class="['box_card_default', 'box_card', 'box_txt', { 'box_card_item1': isregisterLogin }]">
				<div>生活充满了乐趣</div>
				<div>每一天,都充满了元气</div>
			</div>

		</div>
	</div>
</template>

<script lang="ts" setup>
import { ElMessage, FormInstance, FormRules } from 'element-plus';
import { h, reactive, ref } from 'vue';
import { enroll} from '@/api/registerLogin'
import { useStore } from 'vuex';
import { useRouter } from 'vue-router'

const isregisterLogin = ref(false)




interface RuleForm {
	username: string,
	password: string
}
const isStyle = ref({

})
//创建vuex ，router实例
const store = useStore()
const router = useRouter()
//按钮加载
const loading = ref<boolean>(false)
//
const formData = reactive<RuleForm>({
	username: '20210617',
	password: 'zyc123456'
})
const ruleFormRef = ref<FormInstance>()

//
const rules = reactive<FormRules<RuleForm>>({
	username: [
		{ required: true, message: '用户名不可为空', trigger: 'blur' },
		{ min: 6, max: 10, message: '用户名长度应为6 - 10个字符', trigger: 'blur' },
	],
	password: [
		{ required: true, message: '密码不可为空', trigger: 'blur' },
		{ min: 8, max: 16, message: '密码长度应为8 - 16个字符', trigger: 'blur' },
	]
})
//
const submitLogin = async (formEl: FormInstance | undefined) => {

	if (!formEl) return
	await formEl.validate((valid, fields) => {
		if (valid) {
			loading.value = true
			store.dispatch('user/Login', formData).then(res => {
				loading.value = false
				router.push({
					path: '/'
				})
			}).catch(err => {
				loading.value = false
			})
		} else {
			ElMessage({
				message: '提交失败',
				type: "error"
			})

		}
	})
}
const submitEnroll = async (formEl: FormInstance | undefined) => {
	if (!formEl) return
	await formEl.validate((valid, fields) => {
		if (valid) {
			enroll(formData).then(res => {
				if (res.data.code === 0) {
					ElMessage({
						message: '注册成功',
						type: 'success'
					})
				} else if (res.data.code === 1) {
					ElMessage({
						message: '提交成功',
						type: 'success'
					})
				}

			})
		} else {
			ElMessage({
				message: '提交失败',
				type: "error"
			})
		}
	})
}




</script>

<style lang="scss">
$bd : 15px;

.login {
	width: 100vw;
	height: 100vh;
	background: url('../assets/image/login.jpg');
	background-size: cover;
	display: flex;
	justify-content: center;
	align-items: center;

	.login_box {
		width: 40%;
		height: 35%;
		display: flex;
		position: relative;
		border-radius: 5%;
		justify-content: center;
		align-items: center;
		background: linear-gradient(to right bottom,
				rgba(255, 255, 255, .7),
				rgba(218, 245, 247, 0.5),
				rgba(186, 235, 255, 0.4));
		// backdrop-filter: blur(10px) saturate(0);
		box-shadow: 0 0 20px #a6e6fe;
		border-radius: $bd;
		border: 1px solid rgba(156, 229, 244, 0.488);

		.box_card_default {
			width: 50%;
			height: 100%;
			background-color: rgb(207, 245, 232);
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			position: absolute;
			background: linear-gradient(to right bottom,
					rgba(255, 255, 255, .7),
					rgba(238, 200, 231, 0.5),
					rgba(231, 195, 224, 0.4));
			transition: all 1.5s ease-in-out;

		}

		.box_position {
			top: 0;
			left: 0;
			border-radius: 15px 0 0 15px;
			h1{
				margin-bottom: 10px;
			}

		}

		.box_position_item1 {
			top: 0;
			right: 0;
			border-radius: 0 15px 15px 0;

		}

		// .box_left {
		// 	position: absolute;
		// 	width: 50%;
		// 	height: 100%;
		// 	top: 0;
		// 	left: 0;
		// 	z-index: 20;
		// 	border-radius: $bd 0 0 $bd;

		// 	img {
		// 		width: 100%;
		// 		height: 100%;
		// 		border-radius: $bd 0 0 $bd;
		// 		box-shadow: 0 0 20px #a6e6fe;
		// 	}

		// }
		.box_txt {
			font-size: 1.8em;
			display: flex;
			flex-direction: column;
			justify-content: center;
			font-weight: bold;
			color: #fff;
		}

		.box_card {
			width: 50%;
			height: 100%;
			top: 0;
			right: 0;
			background: url('../assets/image/login.jpg');
			background-size: cover;
			border-radius: 0 15px 15px 0;
		}

		.box_card_item1 {
			width: 50%;
			height: 100%;
			top: 0;
			right: 0;
			color: #49d6f2;
			background: url('../assets/image/login.jpg');
			background-size: cover;
			border-radius: 15px 0 0 15px;
			transform: translateX(-100%)
		}



		// .box_card-enter-active,
		// .box_card-leave-active {
		// 	width: 50%;
		// 	height: 100%;
		// 	background: linear-gradient(to right bottom,
		// 			rgba(255, 255, 255, .7),
		// 			rgba(218, 245, 247, 0.5),
		// 			rgba(186, 235, 255, 0.4));
		// 	position: absolute;
		// 	top: 0;
		// 	left: 0;
		// 	opacity: 0;
		// 	transition: all 0.5s ease;
		// }

		// .box_card-enter-from,
		// .box_card-leave-to {
		// 	width: 50%;
		// 	height: 100%;
		// 	opacity: 1;
		// 	transform: translateX(100%)
		// }

































		// .box_form {
		// 	width: 100%;
		// 	display: flex;
		// 	flex-direction: column;
		// 	align-items: center;

		// 	h1 {
		// 		margin: 0 0 10px 0;
		// 	}

		// 	.box_btn {
		// 		color: #456bad;
		// 	}

		// 	.box_btn:hover {
		// 		cursor: pointer;
		// 	}
		// }

		// p {
		// 	font-size: 14px;
		// }

		// .box_card {
		// 	height: 100%;
		// 	width: 50%;
		// 	left: 50%;
		// 	top: 0;
		// 	border-radius: 0 15px 15px 0;
		// 	position: absolute;
		// 	background-color: rgb(176, 235, 235);

		// 	transition: all 1.3s ease-in-out;
		// 	transform-origin: left;
		// 	transform-style: preserve-3d;
		// 	opacity: 0.8;
		// 	img{
		// 		width: 100%;
		// 		height: 100%;
		// 		object-fit: cover;
		// 		backface-visibility: hidden;
		// 	}
		// }

		// .box_card1 {
		// 	height: 100%;
		// 	width: 50%;
		// 	left: 50%;
		// 	top: 0;
		// 	border-radius: 0 15px 15px 0;
		// 	position: absolute;
		// 	background-color: rgb(186, 222, 222);

		// 	transition: all 1.3s ease-in-out;
		// 	transform-origin: left;
		// 	transform-style: preserve-3d;
		// 	transform: rotateY(-180deg);
		// 	opacity: 0.8;
		// 	img{
		// 		width: 100%;
		// 		height: 100%;
		// 		object-fit: cover;
		// 	}
		// }

	}

}

//适配pc
// @media screen and (min-width: 950px) {
// 	.login_box {
// 		max-width: 950px;
// 		min-width: 750px;
// 	}
// }

// //适配 ipad
// @media screen and (max-width: 950px) {
// 	.login_box {
// 		display: block;
// 		height: auto;

// 		.box_left {
// 			width: 100%;
// 			margin-top: 0;
// 			height: 200px;
// 		}

// 		.box_right {
// 			width: 100%;
// 			margin-top: 0;
// 			padding: 2vw 2vw;

// 			h1 {
// 				padding-top: 0;
// 				margin-bottom: 1vw;
// 				color: #ff0303;
// 			}
// 		}

// 	}
// }

// //适配移动端 
// @media screen and (max-width: 750px) {
// 	.login_box {
// 		width: 85%;

// 		h1 {
// 			padding-top: 0;
// 			margin-bottom: 1vw;
// 			color: #b39d9d;
// 		}
// 	}

// }
</style>
