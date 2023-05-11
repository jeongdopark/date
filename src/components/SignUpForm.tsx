import { S } from './style'
import { useValidate } from '../hook/useValidate'
import { signUp } from '../api/auth'
import { useNavigate } from 'react-router'

const SignUpForm = () => {
  const [inputValue, inputOnChange, warnMessage] = useValidate()
  const navigate = useNavigate()

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    const res = await signUp(inputValue)
    if (res.isSuccess) {
      navigate('/signIn')
    }
  }

  return (
    <S.FormContainer onSubmit={handleSubmit}>
      <S.Title>아이디</S.Title>
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
      <S.Title>닉네임</S.Title>
      <S.Input
        name="nickname"
        onChange={inputOnChange}
        placeholder="닉네임을 입력해 주세요."
      />
      <span>{warnMessage.current.value['nickname']}</span>
      <S.Button>SignUp</S.Button>
    </S.FormContainer>
  )
}

export default SignUpForm
