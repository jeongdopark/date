import { S } from '../style'
import { useValidate } from '../../hook/useValidate'
import { signUp } from '../../api/auth'
import { useNavigate } from 'react-router'
import FormElement from './FormElement'
import { toast } from 'react-toastify'

const SignUpForm = () => {
  const [inputValue, inputOnChange, warnMessage] = useValidate()
  const navigate = useNavigate()

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    const res = await signUp(inputValue)
    if (res.isSuccess) {
      toast('회원가입 완료')
      navigate('/signIn')
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
      <FormElement
        type={'nickname'}
        inputOnChange={inputOnChange}
        warnMessage={warnMessage}
      />
      <S.Button>SignUp</S.Button>
    </S.FormContainer>
  )
}

export default SignUpForm
