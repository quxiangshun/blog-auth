import request from '@/utils/request'

// 数据格式
const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }

// 请求头添加 Authorization: Basic client_id:client_secret
const auth = {
  username: 'jh-auth-center', // client_id
  password: '123456' // client_secret
}

// 登录，获取 token 接口
export function login(data) {
  data.grant_type = 'password'
  // Promise 
  return request({
    headers,
    auth,
    url: `/auth/oauth/token`,
    method: 'post',
    params: data
  })
}

// 获取协议
export function getXieyi() {
  return request({
    url: `${window.location.href}/xieyi.html`, // 访问的是 public/xieyi.html 
    method: 'get'
  })
}

// 查询用户名是否已经被注册 
export function getUserByUsername(username) {
  return request({
    url: `/system/api/v1/user/username/${username}`,
    method: 'get',
  })
}

export function register(data) {
  return request({
    url: `/system/api/v1/user/register`,
    method: 'post',
    data // data: data 
  })
}

// 退出系统
export function logout(accessToken) {
  return request({
    url: `/auth/oauth/logout`,
    method: 'get',
    params: {
      accessToken
    }
  })
}

// 刷新令牌获取新的认证信息
export function refreshToken(refreshToken) {
  return request({
    headers,
    auth,
    url: '/auth/oauth/token',
    method: 'post',
    params: {
      grant_type: 'refresh_token',
      refresh_token: refreshToken
    }
  })
}