import request from 'apis/request'

/**
 * 登录
 * @param data
 */
interface LoginData {
  username: string
  password: string
}
export function login(data: LoginData) {
  return request({
    method: 'POST',
    url: '/api/user/login',
    data,
  })
}

export function logout() {
  return request({
    method: 'POST',
    url: '/api/logout',
  })
}
