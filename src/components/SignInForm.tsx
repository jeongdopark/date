import { S } from './style'
import { useNavigate } from 'react-router'
const SignInForm = () => {
  const navigate = useNavigate()

  return (
    <S.FormContainer>
      <S.Title>아이디</S.Title>
      <S.Input placeholder="아이디를 입력해 주세요." />
      <S.Title>비밀번호</S.Title>
      <S.Input placeholder="비밀번호를 입력해 주세요." />
      <S.Button>Login</S.Button>
      <S.Button onClick={() => navigate('/signUp')}>Go Sign Up</S.Button>
    </S.FormContainer>
  )
}

export default SignInForm
