import { useState, useEffect } from 'react'
import { getUserList } from '../api/user'
import { UserInfo } from '../@types/api'
import { patchLike, patchDisLike } from '../api/affinity'

// FIXME
const useGetUserList = () => {
  const [userList, setUserList] = useState<UserInfo[]>([])
  const [trigger, setTrigger] = useState(false)
  const [currentIndex, setCurrentIndex] = useState<number>(0)
  const [currentUser, setCurrentUser] = useState<UserInfo>({
    nickname: '',
    profileImgUrl: '',
    userId: '',
  })

  // like api
  const handleLike = async (userId: string) => {
    try {
      await patchLike(userId)
    } catch (error) {
      console.log(error)
    } finally {
      setTrigger((prev) => !prev)
    }
  }

  // dislike api
  const handleDislike = async (userId: string) => {
    try {
      await patchDisLike(userId)
    } catch (error) {
      console.log(error)
    } finally {
      setTrigger((prev) => !prev)
    }
  }

  // like/dislike 동작 이후에 새롭게 업데이트 된 리스트 불러오기
  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await getUserList()
        // 리스트의 마지막 유저일 경우
        if (currentIndex === userList.length - 1) setCurrentIndex(0)
        setUserList([...res.data])
      } catch (error) {
        console.log(error)
      }
    }
    fetch()
  }, [trigger])

  useEffect(() => {
    if (userList.length === 0) return
    setCurrentUser(userList[currentIndex])
  }, [currentIndex, userList])
  console.log(currentIndex)

  return {
    userList,
    handleLike,
    handleDislike,
    currentUser,
    setCurrentUser,
    currentIndex,
    setCurrentIndex,
  }
}

export default useGetUserList
