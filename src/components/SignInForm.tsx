import { S } from './style'
import { useValidate } from '../hook/useValidate'
import { signIn } from '../api/auth'
import token from '../util/token'
import { ACCESS_TOKEN, REFRESH_TOKEN } from '../util/constants'
import { useNavigate } from 'react-router'

const SignInForm = () => {
  const [inputValue, inputOnChange, warnMessage] = useValidate()
  const navigate = useNavigate()

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    const res = await signIn(inputValue)
    if (res.isSuccess) {
      token.set(ACCESS_TOKEN, res.data[ACCESS_TOKEN])
      token.set(REFRESH_TOKEN, res.data[REFRESH_TOKEN])
    }
  }

  return (
    <S.FormContainer onSubmit={handleSubmit}>
      <S.Title>이메일</S.Title>
      <S.Input
        name="userId"
        onChange={inputOnChange}
        placeholder="아이디를 입력해 주세요."
      />
      <span>{warnMessage.current.value['userId']}</span>
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
