import { useNavigate } from 'react-router'
import { toast } from 'react-toastify'
import token from '../util/token'
import {
  ACCESS_TOKEN,
  REFRESH_TOKEN,
  PATH_NAME,
  SIGN_IN,
  SIGN_UP,
} from '../util/constants'
import { signIn } from '../api/auth'
import { signUp } from '../api/auth'

interface InputValue {
  userId: string
  nickname: string
  password: string
}

const useHandleSubmit = (inputValue: InputValue, type: string) => {
  const navigate = useNavigate()

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()

    switch (type) {
      case SIGN_IN:
        const signin_res = await signIn(inputValue)
        try {
          if (signin_res.isSuccess) {
            token.set(ACCESS_TOKEN, signin_res.data[ACCESS_TOKEN])
            token.set(REFRESH_TOKEN, signin_res.data[REFRESH_TOKEN])
            toast('로그인 완료')
            navigate(PATH_NAME.MYPAGE)
          }
        } catch (error) {
          console.log(error)
        }

        break
      case SIGN_UP:
        const signup_res = await signUp(inputValue)
        try {
          if (signup_res.isSuccess) {
            toast('회원가입 완료')
            navigate(PATH_NAME.SIGN_IN)
          }
        } catch (error) {
          console.log(error)
        }
    }
  }

  return { handleSubmit }
}

export default useHandleSubmit
