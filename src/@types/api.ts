export interface APIError {
  isSuccess: false
  message: string
}

export interface APISuccess<T> {
  isSuccess: true
  data: T
}

export type APIResponse<T> = APIError | APISuccess<T>

export interface SignInResponse {
  accessToken: string
  refreshToken: string
}

export interface GetUserInfo {
  nickname: string
  profileImgUrl: string
  userId: string
}
