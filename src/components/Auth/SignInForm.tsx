import { S } from '../style'
import { useValidate } from '../../hook/useValidate'
import { signIn } from '../../api/auth'
import token from '../../util/token'
import { ACCESS_TOKEN, REFRESH_TOKEN } from '../../util/constants'
import { useNavigate } from 'react-router'
import FormElement from './FormElement'

const SignInForm = () => {
  const [inputValue, inputOnChange, warnMessage] = useValidate()
  const navigate = useNavigate()

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    const res = await signIn(inputValue)
    if (res.isSuccess) {
      token.set(ACCESS_TOKEN, res.data[ACCESS_TOKEN])
      token.set(REFRESH_TOKEN, res.data[REFRESH_TOKEN])
      navigate('/mypage')
    }
  }

  return (
    <S.FormContainer onSubmit={handleSubmit}>
      <FormElement
        type={'userId'}
        inputOnChange={inputOnChange}
        warnMessage={warnMessage}
      />
      <FormElement
        type={'password'}
        inputOnChange={inputOnChange}
        warnMessage={warnMessage}
      />
      <S.Button>SignIn</S.Button>
    </S.FormContainer>
  )
}

export default SignInForm
