import { useNavigate } from 'react-router'
import SignInForm from '../components/Auth/SignInForm'
import { S } from './style'
import { PATH_NAME } from '../util/constants'

const SignIn = () => {
  const navigate = useNavigate()
  return (
    <S.Container>
      <S.Title>Sign In</S.Title>
      <SignInForm />
      <S.Button onClick={() => navigate(PATH_NAME.SIGN_UP)}>
        Go Sign Up
      </S.Button>
    </S.Container>
  )
}

export default SignIn
