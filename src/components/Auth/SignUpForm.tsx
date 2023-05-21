import { S } from '../style'
import { useValidate } from '../../hook/useValidate'
import { signUp } from '../../api/auth'
import { useNavigate } from 'react-router'
import FormElement from './FormElement'
import { toast } from 'react-toastify'
import { NICKNAME, PASSWORD, PATH_NAME, USER_ID } from '../../util/constants'

const SignUpForm = () => {
  const [inputValue, inputOnChange, warnMessage] = useValidate()
  const navigate = useNavigate()

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    const res = await signUp(inputValue)
    if (res.isSuccess) {
      toast('회원가입 완료')
      navigate(PATH_NAME.SIGN_IN)
    }
  }

  return (
    <S.FormContainer onSubmit={handleSubmit}>
      <FormElement
        type={USER_ID}
        inputOnChange={inputOnChange}
        warnMessage={warnMessage}
      />
      <FormElement
        type={PASSWORD}
        inputOnChange={inputOnChange}
        warnMessage={warnMessage}
      />
      <FormElement
        type={NICKNAME}
        inputOnChange={inputOnChange}
        warnMessage={warnMessage}
      />
      <S.Button>SignUp</S.Button>
    </S.FormContainer>
  )
}

export default SignUpForm
