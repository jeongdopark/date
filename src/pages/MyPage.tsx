import { S } from './style'
import { useNavigate } from 'react-router'
import UserImg from '../components/Mypage/UserImg'
import useLogout from '../hook/useLogout'
import { PATH_NAME } from '../util/constants'

const MyPage = () => {
  const navigate = useNavigate()
  const { logout } = useLogout()

  const SEND_TYPE_IDX = 0
  const RECEIVE_TYPE_IDX = 1

  return (
    <S.Container>
      <UserImg />
      <S.Button
        onClick={() =>
          navigate(PATH_NAME.LIKELIST, {
            state: {
              tabIdx: SEND_TYPE_IDX,
            },
          })
        }
      >
        내가 좋아하는 사람
      </S.Button>
      <S.Button
        onClick={() =>
          navigate(PATH_NAME.LIKELIST, {
            state: {
              tabIdx: RECEIVE_TYPE_IDX,
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
