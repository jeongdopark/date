import { useNavigate } from 'react-router'
import SignUpForm from '../../components/SignUpForm'
import { S } from './SignUp.styled'

const SignIn = () => {
  const navigate = useNavigate()
  return (
    <S.Container>
      <S.Title>Sign Up</S.Title>
      <SignUpForm />
      <S.Button onClick={() => navigate('/signIn')}>Go Sign In</S.Button>
    </S.Container>
  )
}

export default SignIn
