import { topicColor } from "@/api/dict/getDict"

export default {
    namespaced: true,//命名空间
    state: {
        //背景颜色
        // backgroundColor:{},
        // // 颜色字体
        // textColor:{},
        // //高亮字体
        // activeColor:{}
        topic_Color: {}

    },
    mutations: {
        Set_Topic_Color: (state: any, topic_Color: object) => {
            state.topic_Color = topic_Color
        },

    },
    actions: {
        set_topic_color({ commit }: any, topic_Color: object) {

            return new Promise((resolve, reject) => {
                topicColor(topic_Color).then(res => {
                    console.log(res);
                    resolve(res)
                }).catch(err=>{
                    reject(err)
                })
            })
        },
    },
    getters: {
    },
}
//
