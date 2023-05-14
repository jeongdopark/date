import { instance, createDefaultAPIError } from './client'
import ApiUrl from './ApiUrl'

type UpdateUserInfoType = {
  nickname: string
  profileImgUrl: string
}

export const getUserInfo = async () => {
  try {
    const res = await instance.get(ApiUrl.userInfo)
    return {
      isSuccess: true,
      data: res.data,
    }
  } catch (error) {
    return createDefaultAPIError(error)
  }
}

export const updateUserInfo = async ({
  nickname,
  profileImgUrl,
}: UpdateUserInfoType) => {
  try {
    await instance.patch(ApiUrl.updateUserInfo, {
      nickname,
      profileImgUrl,
    })
  } catch (error) {
    return createDefaultAPIError(error)
  }
}

export const getUserList = async () => {
  try {
    const res = await instance.get(ApiUrl.userList)
    return {
      isSuccess: true,
      data: res.data,
    }
  } catch (error) {
    return createDefaultAPIError(error)
  }
}
