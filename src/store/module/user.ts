import { login } from "@/api/registerLogin";
import { getToken, setToken } from "@/utils/auth";

export default {
    namespaced: true,//命名空间
    state: {
        token: getToken(),
        username: '',
        avatar: '',
    },
    mutations: {
        set_token: (state: User, token: string) => {
        
            state.token = token
        },
        set_username: (state: User, username: string) => {
            state.username = username
        }
    },
    actions: {
        Login({commit}: any, userInfo: object) {

            return new Promise((resolve, reject) => {
                login(userInfo).then(res => {
            
                    setToken(res.data.token)
                    commit('set_token', res.data.token)
                    resolve(res.data)
                }).catch(error => {
                    reject(error)
                })
            })
        },
    },
    getters: {
    },
}
//
interface User {
    token: string,
    username: string,
    avatar: string,
}