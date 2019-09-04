import axios from 'axios'
export function request(config) {
    let instance = axios.create({
        baseURL: 'http://123.207.32.32:8000/api/v1'
    })
    instance.interceptors.response.use(res => {
        return res.data
    })
    return instance(config)
}