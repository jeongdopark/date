import { S } from './style'
import { useNavigate } from 'react-router'
import UserInfo from '../components/Mypage/UserInfo'
import useLogout from '../hook/useLogout'
import { PATH_NAME } from '../util/constants'

const MyPage = () => {
  const navigate = useNavigate()
  const { logout } = useLogout()

  const SEND_TYPE_IDX = 0
  const RECEIVE_TYPE_IDX = 1

  return (
    <S.Container>
      <UserInfo />
      <S.Button
        onClick={() =>
          navigate(PATH_NAME.LIKELIST, {
            state: {
              tabIdx: SEND_TYPE_IDX,
            },
          })
        }
      >
        📤 Send List
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
        📥 Receive List
      </S.Button>
      <S.Button onClick={logout}>👋 Log out</S.Button>
    </S.Container>
  )
}

export default MyPage
