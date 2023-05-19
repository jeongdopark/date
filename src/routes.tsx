import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import MyPage from './pages/MyPage'
import Footer from './components/common/Footer'
import LikeList from './pages/LikeList'
import { S } from './style/center.styled'

const AppRouter: React.FC = (): JSX.Element => {
  return (
    <BrowserRouter>
      <S.Center>
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/likelist" element={<LikeList />} />
        </Routes>
        <Footer />
      </S.Center>
    </BrowserRouter>
  )
}

export default AppRouter
