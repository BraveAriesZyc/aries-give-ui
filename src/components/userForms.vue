<template>
    <h1>{{ title }}</h1>
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
                    <slot name="toname"></slot>
                </el-form-item>
            </el-col>
        </el-row>
    </el-form>
</template>
<script lang="ts" setup>
import { ElMessage, FormInstance, FormRules } from 'element-plus';
import { h, reactive, ref } from 'vue';
import { enroll, login } from '@/api/registerLogin'
//引入
import { useStore } from 'vuex';
import { useRouter } from 'vue-router'
//传值
const prop = defineProps<{
    isregisterLogin: boolean,
    title:string
}>()


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