import axios from 'axios'
import { history } from 'configureStore'
import { message } from 'antd'

const service = axios.create({
  baseURL: process.env.REACT_APP_API_URL, // url = base url + request url
  withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000, // request timeout
})

// request interceptor
service.interceptors.request.use(
  (config) => {
    // Do something before request is sent
    return config
  },
  (error) => {
    // Do something with request error
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  (response) => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    // console.log(response)
    return response
  },
  (error) => {
    if (error.response.status === 401) {
      // window.location.href = '/login'
      history.push('/login')
    }
    console.log(error.response)
    if (error.response.status === 403) {
      return message.error(error.response.data.msg)
    }

    message.error(error.message)
    console.error(`Error: ${error}`)
    return Promise.reject(error)
  }
)

export default service
