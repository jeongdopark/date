import { S } from '../style'
import { useValidate } from '../../hook/useValidate'
import FormElement from './FormElement'
import { NICKNAME, PASSWORD, SIGN_UP, USER_ID } from '../../util/constants'
import useHandleSubmit from '../../hook/useHandleSubmit'

const SignUpForm = () => {
  const [inputValue, inputOnChange, warnMessage, valid] = useValidate()
  const { handleSubmit } = useHandleSubmit(inputValue, SIGN_UP)

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
      <S.Button disabled={valid}>SignUp</S.Button>
    </S.FormContainer>
  )
}

export default SignUpForm
