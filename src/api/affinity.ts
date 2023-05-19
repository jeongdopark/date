import { instance } from './client'
import ApiUrl from './ApiUrl'

interface AffinityElement {
  userId: string
  nickname: string
  profileImgUrl: string
}

interface GetAffinityListResponse {
  send: AffinityElement[]
  receieve: AffinityElement[]
}

export const patchLike = (targetUserId: string) => {
  return instance.patch(ApiUrl.like, {
    targetUserId,
  })
}

export const patchDisLike = (targetUserId: string) => {
  return instance.patch(ApiUrl.dislike, {
    targetUserId,
  })
}

export const getAffinityList = async () => {
  return await instance.get(ApiUrl.affinityList)
}
