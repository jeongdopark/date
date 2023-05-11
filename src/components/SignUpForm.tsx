import { S } from './style'
import { useNavigate } from 'react-router'
import { useValidate } from '../hook/useValidate'
const SignUpForm = () => {
  const [Inputvalue, inputOnChange, warnMessage] = useValidate()

  return (
    <S.FormContainer>
      <S.Title>아이디</S.Title>
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
      <S.Title>닉네임</S.Title>
      <S.Input placeholder="닉네임을 입력해 주세요." />
      <span>{warnMessage.current.value['nickname']}</span>
      <S.Button>SignUp</S.Button>
    </S.FormContainer>
  )
}

export default SignUpForm
