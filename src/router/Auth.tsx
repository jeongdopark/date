import React from 'react'
import { Navigate, Outlet, useLocation } from 'react-router'
import token from '../util/token'
import { ACCESS_TOKEN, PATH_NAME } from '../util/constants'
import Footer from '../components/common/Footer'
import NotFound from '../pages/NotFound'

const PRIVATE_ROUTES = [
  PATH_NAME.LIKELIST,
  PATH_NAME.LIKELIST,
  PATH_NAME.MYPAGE,
  PATH_NAME.CHOICE,
]
const PUBLIC_ROUTES = [PATH_NAME.SIGN_IN, PATH_NAME.SIGN_UP]

const Auth = () => {
  const { pathname } = useLocation()

  const accessToken = token.get(ACCESS_TOKEN)
  const isPrivateRoute = PRIVATE_ROUTES.includes(pathname)
  const isPublicRoute = PUBLIC_ROUTES.includes(pathname)

  if (isPrivateRoute) {
    if (!accessToken) {
      return <Navigate to={PATH_NAME.SIGN_IN} />
    }
    return (
      <React.Fragment>
        <Outlet />
        <Footer />
      </React.Fragment>
    )
  }

  if (isPublicRoute) {
    if (accessToken) {
      return <Navigate to={PATH_NAME.MYPAGE} />
    }
    return <Outlet />
  }

  return <NotFound />
}

export default Auth
