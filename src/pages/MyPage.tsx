import { S } from './style'
import { useUserInfo } from '../hook/useUserInfo'
import { useEffect } from 'react'
import UserImg from '../components/Mypage/UserImg'

const MyPage = () => {
  const { getUserInfos, userNickname, userImg, userId } = useUserInfo()

  useEffect(() => {
    getUserInfos()
  }, [])

  return (
    <S.Container>
      <UserImg userImg={userImg} userNickname={userNickname} />
      <S.Button>내가 좋아하는 사람</S.Button>
      <S.Button>나를 좋아하는 사람</S.Button>
      <S.Button>로그아웃</S.Button>
    </S.Container>
  )
}

export default MyPage
