import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ResetStyle } from './style/reset.styled'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.Fragment>
    <ResetStyle />
    <App />
  </React.Fragment>,
)
