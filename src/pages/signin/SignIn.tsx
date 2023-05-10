import SignInForm from '../../components/SignInForm'
import { S } from './SignIn.styled'

const SignIn = () => {
  return (
    <S.Container>
      <S.Title>Sign In</S.Title>
      <SignInForm />
    </S.Container>
  )
}

export default SignIn
