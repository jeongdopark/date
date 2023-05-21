import { S } from '../style'
import { useValidate } from '../../hook/useValidate'
import { PASSWORD, USER_ID, SIGN_IN } from '../../util/constants'
import FormElement from './FormElement'
import useHandleSubmit from '../../hook/useHandleSubmit'

const SignInForm = () => {
  const [inputValue, inputOnChange, warnMessage, valid] = useValidate()
  const { handleSubmit } = useHandleSubmit(inputValue, SIGN_IN)

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
      <S.Button disabled={valid}>SignIn</S.Button>
    </S.FormContainer>
  )
}

export default SignInForm
