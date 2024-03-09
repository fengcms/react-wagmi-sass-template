import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import App from '@/App.tsx'
import '@/i18n'
import DappProvider from '@/providers/DappProvider'
import '@/style/style.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <DappProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </DappProvider>
  </React.StrictMode>
)
