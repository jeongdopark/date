import axios, { InternalAxiosRequestConfig } from 'axios'
import token from '../util/token'
export const instance = axios.create({
  baseURL: 'http://52.79.226.246',
  headers: { 'Content-Type': 'application/json' },
})

instance.interceptors.request.use(
  (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
    const accesstoken = token.get()
    if (accesstoken !== null)
      Object.assign(config.headers, { Authoriz: `Bearer ${accesstoken}` })
    return config
  },

  (error) => {
    return Promise.reject(error)
  },
)
