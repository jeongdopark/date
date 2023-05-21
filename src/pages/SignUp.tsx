import { useNavigate } from 'react-router'
import SignUpForm from '../components/Auth/SignUpForm'
import { S } from './style'
import { PATH_NAME } from '../util/constants'

const SignIn = () => {
  const navigate = useNavigate()
  return (
    <S.Container>
      <S.Title>Sign Up</S.Title>
      <SignUpForm />
      <S.Button onClick={() => navigate(PATH_NAME.SIGN_IN)}>
        Go Sign In
      </S.Button>
    </S.Container>
  )
}

export default SignIn
