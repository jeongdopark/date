import axios, { InternalAxiosRequestConfig, AxiosError } from 'axios'
import token from '../util/token'
import storage from '../util/localStorage'
import { ACCESS_TOKEN } from '../util/constants'
import { APIError } from '../@types/api'
import ApiUrl from './ApiUrl'

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
    if (status === 419) {
      if (error.response.data.message === 'expired') {
        const originalRequest = config
        const refreshToken = localStorage.getItem('refreshToken')
        // token refresh 요청
        const { data } = await instance.post(
          ApiUrl.refreshToken, // token refresh api
          { refresh: refreshToken },
          { headers: { authorization: refreshToken } },
        )
        // 새로운 토큰 저장
        // dispatch(userSlice.actions.setAccessToken(data.data.accessToken)); store에 저장
        const { accessToken: newAccessToken } = data
        storage.set('accessToken', newAccessToken)
        originalRequest.headers.authorization = newAccessToken
        alert('refresh')
        console.log('refresh')

        // 401로 요청 실패했던 요청 새로운 accessToken으로 재요청
        return axios(originalRequest)
      }
    }
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    console.log('response error', error)
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
