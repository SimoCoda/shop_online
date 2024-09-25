import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import 'fontawesome-4.7/css/font-awesome.min.css'

createRoot(document.getElementById('root')!).render(
  // <StrictMode>
    <App />
  //</StrictMode>
)
