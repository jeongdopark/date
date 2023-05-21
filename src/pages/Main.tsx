import { S } from './style'
import { PATH_NAME } from '../util/constants'
import { useNavigate } from 'react-router'
const Main = () => {
  const navigate = useNavigate()
  return (
    <S.Container>
      <S.Title>👋 Welcome</S.Title>
      <S.Button onClick={() => navigate(PATH_NAME.SIGN_IN)}>Go SignIn</S.Button>
      <S.Button onClick={() => navigate(PATH_NAME.SIGN_UP)}>Go SignUp</S.Button>
    </S.Container>
  )
}

export default Main
