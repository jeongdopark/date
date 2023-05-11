import { S } from './style'
import { useNavigate } from 'react-router'
import { useValidate } from '../hook/useValidate'
const SignInForm = () => {
  const [inputValue, inputOnChange, warnMessage] = useValidate()

  const navigate = useNavigate()

  return (
    <S.FormContainer>
      <S.Title>이메일</S.Title>
      <S.Input
        name="email"
        onChange={inputOnChange}
        placeholder="아이디를 입력해 주세요."
      />
      <span>{warnMessage.current.value['email']}</span>
      <S.Title>비밀번호</S.Title>
      <S.Input
        name="password"
        onChange={inputOnChange}
        placeholder="비밀번호를 입력해 주세요."
      />
      <span>{warnMessage.current.value['password']}</span>
      <S.Button>SignIn</S.Button>
    </S.FormContainer>
  )
}

export default SignInForm
