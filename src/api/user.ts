import { instance, createDefaultAPIError } from './client'
import { UserInfo } from '../@types/api'
import ApiUrl from './ApiUrl'

interface UpdateUserInfoType {
  nickname: string
  profileImgUrl: string
}

interface getUserListResponse {
  data: UserInfo[]
}

// 현재 유저 정보 불러오기
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

//유저 정보 업데이트
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

// 좋아요, 싫어요를 한 적이 없는 유저 목록 불러오기
export const getUserList = (): Promise<getUserListResponse> => {
  return instance.get(ApiUrl.userList)
}
