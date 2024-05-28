/*
 * @Author: 王薪林
 * @Date: 2024-05-28 10:07:51
 * @LastEditors: 王薪林 10655211+wang-xinlinlin@user.noreply.gitee.com
 * @LastEditTime: 2024-05-28 16:59:51
 * @FilePath: /react/src/utils/request.js
 * @Description:axios请求封装
 */

import config from '@/config/net.config.js';
import { message } from 'antd';
import axios from 'axios';

const { baseURL, successCode, requestTimeout, contentType, invalidCode } = config;

const instance = axios.create({
  baseURL,
  timeout: requestTimeout,
  headers: {
    'Content-Type': contentType,
  },
});

// 请求头
instance.interceptors.request.use(
  (configItem) => configItem,
  (error) => Promise.reject(error),
);

// 响应头

instance.interceptors.response.use(
  (response) => {
    const res = response.data;

    if (!successCode.includes(res.code)) {
      message.error(res.msg);
      return Promise.reject(res);
    }

    return res;
  },
  (error) => {
    message.error('请求出错啦');
    return Promise.reject(error);
  },
);

export default instance;
