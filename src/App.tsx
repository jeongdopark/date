import React from 'react'
import AppRouter from './routes'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <React.Fragment>
      <ToastContainer position="top-right" autoClose={1500} />
      <AppRouter />;
    </React.Fragment>
  )
}

export default App
