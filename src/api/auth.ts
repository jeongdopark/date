import { instance, createDefaultAPIError } from './client'
import ApiUrl from './ApiUrl'
import { Auth } from '../@types/auth'
import { APIResponse, SignInResponse } from '../@types/api'

// 회원가입
export const signUp = async ({ userId, password, nickname }: Auth) => {
  try {
    const res = await instance.post(ApiUrl.signUp, {
      userId,
      password,
      nickname,
    })
    return {
      isSuccess: true,
      data: res.data,
    }
  } catch (error) {
    return createDefaultAPIError(error)
  }
}

// 로그인
export const signIn = async ({
  userId,
  password,
}: Auth): Promise<APIResponse<SignInResponse>> => {
  try {
    const res = await instance.post(ApiUrl.signIn, { userId, password })
    return {
      isSuccess: true,
      data: res.data,
    }
  } catch (error) {
    return createDefaultAPIError(error)
  }
}
