/* eslint-disable */
import axios from 'axios'
import {
  Message
} from 'element-ui'
import router from '@/router'


// 创建axios实例
const service = axios.create({
  baseURL: 'https://sqgj-monitor-dev.shixincube.cn',
  timeout: "180000",
  headers: {
    "Content-Type": "multipart/form-data",
  },
})

// request拦截器
service.interceptors.request.use(
  async (config) => {
      let token = sessionStorage.getItem("adminToken")
      if (token) {
        config.headers.adminToken = `${token}`;
      }
      return config
    },
    (error) => {
      Promise.resolve(error)
    }
)

// respone拦截器
service.interceptors.response.use(
  (response) => {
    let data = response.data
    // token无效
    if (data.code === 10005) {
      sessionStorage.removeItem('adminToken')
      Message({
        message: '登录超时，请重新登录。',
        type: 'error'
      })
      router.push('/')
    }

    return data
  },
  (error) => {
    Message({
      message: '请求异常，请检查网络。',
      type: 'error'
    })
    return Promise.reject(error)
  }
)

export function upload(url, data) {
  return new Promise((resolve, reject) => {
    service.post(url, data)
      .then(response => {
        resolve(response);
      }, err => {
        reject(err)
      })
      .catch(res => {
        Message({
          message: "上传超时，请检查网络",
          type: 'error'
        })
      })
  })
}
