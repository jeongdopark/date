import { S } from './style'
import { useUserInfo } from '../hook/useUserInfo'
import { useEffect } from 'react'
import { useNavigate } from 'react-router'
import UserImg from '../components/Mypage/UserImg'
import useLogout from '../hook/useLogout'
import { SEND_IDX, RECEIVE_IDX } from '../util/constants'

const MyPage = () => {
  const { getUserInfos, userNickname, userImg, userId } = useUserInfo()
  const navigate = useNavigate()
  const { logout } = useLogout()

  useEffect(() => {
    getUserInfos()
  }, [])

  return (
    <S.Container>
      <UserImg userImg={userImg} userNickname={userNickname} />
      <S.Button
        onClick={() =>
          navigate('/likelist', {
            state: {
              tabIdx: SEND_IDX,
            },
          })
        }
      >
        내가 좋아하는 사람
      </S.Button>
      <S.Button
        onClick={() =>
          navigate('/likelist', {
            state: {
              tabIdx: RECEIVE_IDX,
            },
          })
        }
      >
        나를 좋아하는 사람
      </S.Button>
      <S.Button onClick={logout}>로그아웃</S.Button>
    </S.Container>
  )
}

export default MyPage
