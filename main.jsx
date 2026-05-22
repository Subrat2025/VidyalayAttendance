import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            fontFamily: 'Sora, sans-serif',
            fontSize: '13px',
            borderRadius: '10px',
            background: '#0f2d4a',
            color: '#fff',
          },
          success: { iconTheme: { primary: '#4ade80', secondary: '#0f2d4a' } },
          error:   { iconTheme: { primary: '#f87171', secondary: '#0f2d4a' } },
        }}
      />
    </BrowserRouter>
  </React.StrictMode>
)
