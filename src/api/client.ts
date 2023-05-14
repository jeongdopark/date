import axios, { InternalAxiosRequestConfig, AxiosError } from 'axios'
import token from '../util/token'
import { ACCESS_TOKEN } from '../util/constants'
import { APIError } from '../@types/api'

export const instance = axios.create({
  baseURL: 'http://52.79.226.246',
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

export const createDefaultAPIError = (error: unknown): APIError => {
  if (error instanceof AxiosError) {
    return {
      isSuccess: false,
      message: error.response?.data.message,
    }
  }
  return { isSuccess: false, message: '알 수 없는 에러입니다.' }
}
