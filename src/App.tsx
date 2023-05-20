import React from 'react'
import router from './router'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { S } from './style/center.styled'
import { RouterProvider } from 'react-router'

function App() {
  return (
    <React.Fragment>
      <ToastContainer position="top-right" autoClose={1500} />
      <S.Center>
        <RouterProvider router={router} />
      </S.Center>
    </React.Fragment>
  )
}

export default App
