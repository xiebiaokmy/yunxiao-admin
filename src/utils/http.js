/* eslint-disable */
import axios from "axios";
import config from "./config";
import qs from "qs";
import { Message } from "element-ui";
import router from "@/router";
import Gutils from "./Gutils";

// 创建axios实例
const service = axios.create({
  baseURL: `${config.HOST}`,
  timeout: 60000 // 请求超时时间
});

// request拦截器
service.interceptors.request.use(
  async config => {
    let data = config.data;
    const token = localStorage.getItem("token");
    if (token) {
      data.token = token;
    }
    config.headers.post["Content-Type"] =
      "application/x-www-form-urlencoded;charset=UTF-8";

    //   data['appVersion'] = '1.0.1';
    //   data['osName'] = 'org_admin';
    data.uuid = uuid();
    let params = "";
    let encryptStr = "";
    let useData = {};
    for (let i in data) {
      if (data[i] || data[i] != "null" || data[i] == "0") {
        useData[i] = data[i];
      }
    }
    if (useData) {
      params = Object.keys(useData).sort();
      for (let i = 0; i < params.length; i++) {
        if (i === params.length - 1) {
          encryptStr += params[i] + "=" + useData[params[i]];
        } else {
          encryptStr += params[i] + "=" + useData[params[i]] + "&";
        }
      }
    }
    //SHA256加密
    let appTicket = localStorage.getItem("ticket");
    appTicket = appTicket ? appTicket : "yun_xiao_2020";
    let encryptResult = Gutils.getEncryptKey(encryptStr, appTicket);
    useData.sign = encryptResult;
    config.data = useData;
    if (config.method === "post") {
      config.data = qs.stringify(config.data);
    }
    return config;
  },
  error => {
    Promise.resolve(error);
  }
);

// respone拦截器
service.interceptors.response.use(
  response => {
    let data = response.data;
    if (data.code == 501) {
      Message({
        message: "服务器维护",
        type: "error"
      });
    } else if (data.code == 800) {
      Message({
        message: "登录过期",
        type: "error"
      });
      router.push("/");
    } else if (data.code == 410) {
      Message({
        message: "请登录",
        type: "error"
      });
      router.push("/");
    } else if (data.code == 0) {
      Message({
        message: "服务器错误",
        type: "error"
      });
    }

    return data;
  },
  error => {
    if (error.response.status == 800) {
      Message({
        message: "登录过期",
        type: "error"
      });
      router.push("/");
    } else if (error.response.status == 410) {
      Message({
        message: "请登录",
        type: "error"
      });
      router.push("/");
    } else {
      Message({
        message: "服务器错误，请稍后再试",
        type: "error"
      });
      return Promise.reject(error);
    }
  }
);

function uuid() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
    let r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

export function post(url, data = {}, config) {
  return new Promise((resolve, reject) => {
    service
      .post(url, data, config)
      .then(
        response => {
          resolve(response);
        },
        err => {
          reject(err);
        }
      )
      .catch(res => {
        Message({
          message: "请求超时，稍后再试",
          type: "error"
        });
      });
  });
}

export function get(url, data = {}) {
  data.uuid = uuid();
  return new Promise((resolve, reject) => {
    service
      .get(url, {
        params: data
      })
      .then(
        response => {
          resolve(response);
        },
        err => {
          reject(err);
        }
      )
      .catch(res => {
        console.log("请求超时", res);
      });
  });
}
export function upload(url, data) {
  return new Promise((resolve, reject) => {
    service
      .post(url, data)
      .then(
        response => {
          resolve(response);
        },
        err => {
          reject(err);
        }
      )
      .catch(res => {
        console.log("请求超时", res);
      });
  });
}
