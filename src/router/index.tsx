import { createBrowserRouter } from 'react-router-dom'
import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp'
import MyPage from '../pages/MyPage'
import LikeList from '../pages/LikeList'
import Choice from '../pages/Choice'
import Main from '../pages/Main'
import Auth from './Auth'
import { PATH_NAME } from '../util/constants'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Auth />,
    children: [
      {
        path: '',
        element: <Main />,
      },
      {
        path: PATH_NAME.SIGN_IN,
        element: <SignIn />,
      },
      {
        path: PATH_NAME.SIGN_UP,
        element: <SignUp />,
      },
      {
        path: PATH_NAME.MYPAGE,
        element: <MyPage />,
      },
      {
        path: PATH_NAME.LIKELIST,
        element: <LikeList />,
      },
      {
        path: PATH_NAME.CHOICE,
        element: <Choice />,
      },
    ],
  },
])

export default router
