import { useNavigate } from 'react-router'
import { toast } from 'react-toastify'
import token from '../util/token'
import { ACCESS_TOKEN, REFRESH_TOKEN, PATH_NAME } from '../util/constants'
import { signIn } from '../api/auth'

interface InputValue {
  userId: string
  password: string
}

const useHandleSubmit = (inputValue: InputValue) => {
  const navigate = useNavigate()

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    const res = await signIn(inputValue)
    if (res.isSuccess) {
      token.set(ACCESS_TOKEN, res.data[ACCESS_TOKEN])
      token.set(REFRESH_TOKEN, res.data[REFRESH_TOKEN])
      toast('로그인 완료')
      navigate(PATH_NAME.MYPAGE)
    }
  }

  return { handleSubmit }
}

export default useHandleSubmit
