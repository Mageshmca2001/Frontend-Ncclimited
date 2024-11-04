import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Dashboard from './components/dashboard.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>

  </StrictMode>,
)
