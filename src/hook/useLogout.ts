import { useNavigate } from 'react-router'
import storage from '../util/localStorage'
import { REFRESH_TOKEN, ACCESS_TOKEN, PATH_NAME } from '../util/constants'
import { toast } from 'react-toastify'

const useLogout = () => {
  const navigate = useNavigate()

  const logout = () => {
    storage.remove(REFRESH_TOKEN)
    storage.remove(ACCESS_TOKEN)
    toast('로그아웃 완료')
    navigate(PATH_NAME.SIGN_IN)
  }

  return { logout }
}

export default useLogout
