import { useState } from 'react'
import { getUserInfo } from '../api/user'

// userInfo 가져오는 hook
export const useUserInfo = () => {
  const [userNickname, setUserNickname] = useState<string>('')
  const [userImg, setUserImg] = useState<string>('')
  const [userId, setUserId] = useState<string>('')

  const getUserInfos = async () => {
    const res = await getUserInfo()
    if (res.isSuccess) {
      setUserNickname(res.data.nickname)
      setUserImg(res.data.profileImgUrl)
      setUserId(res.data.userId)
    }
  }

  return { getUserInfos, userNickname, userImg, userId }
}
