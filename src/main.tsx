import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './app'
import './index.css'
import { Toaster } from 'sonner'

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    <Toaster richColors />
  </React.StrictMode>,
)
