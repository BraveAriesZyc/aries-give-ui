import request from "@/utils/request";

export const topicColor = (data: any) => {
    return request({
        url: '',
        method: 'post',
        data
    })
}