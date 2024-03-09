import React from 'react'
import ReactDOM from 'react-dom/client'

import App from '@/App.tsx'
import DappProvider from '@/providers/DappProvider'
import '@/style/style.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <DappProvider>
      <App />
    </DappProvider>
  </React.StrictMode>
)
