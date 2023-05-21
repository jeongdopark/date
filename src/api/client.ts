import axios, { InternalAxiosRequestConfig, AxiosError } from 'axios'
import token from '../util/token'
import storage from '../util/localStorage'
import { ACCESS_TOKEN, REFRESH_TOKEN } from '../util/constants'
import { APIError } from '../@types/api'
import ApiUrl from './ApiUrl'
import { toast } from 'react-toastify'

export const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: { 'Content-Type': 'application/json' },
})

instance.interceptors.request.use(
  (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
    const accesstoken = token.get(ACCESS_TOKEN)
    if (accesstoken !== null)
      Object.assign(config.headers, { authorization: `${accesstoken}` })
    return config
  },

  (error) => {
    return Promise.reject(error)
  },
)

instance.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    // console.log('get response', response)
    return response
  },
  async (error) => {
    const {
      config,
      response: { status },
    } = error

    // 만료된 토큰일 경우
    if (status === 419) {
      const originalRequest = config
      const refreshToken = storage.get(REFRESH_TOKEN)
      // refresh token Post API 호출
      return await instance
        .post(ApiUrl.refreshToken, {
          refresh: refreshToken,
        })
        .then((res) => {
          if (res.status === 200) {
            storage.set(ACCESS_TOKEN, res.data[ACCESS_TOKEN])
            originalRequest.header.authorization = res.data[ACCESS_TOKEN]
            return axios(originalRequest)
          }
        })
    }

    toast(error.response.data.message)
    return Promise.reject(error)
  },
)

export const createDefaultAPIError = (error: unknown): APIError => {
  if (error instanceof AxiosError) {
    return {
      isSuccess: false,
      message: error.response?.data.message,
    }
  }
  return { isSuccess: false, message: '알 수 없는 에러입니다.' }
}
